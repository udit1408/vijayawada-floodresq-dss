#!/usr/bin/env python3
"""Build path-following waterway arrows and DEM downslope terrain arrows.

This replaces the earlier Krishna display arrows that were generated from
horizontal polygon slices. Krishna arrows are now drawn on a bank-midline centreline
derived from OSM river-water polygons, while canal and Budameru arrows follow
mapped OSM line geometry. Terrain arrows are generated separately from the
conditioned hydraulic terrain, so waterway FDir and surface downslope evidence
do not get mixed.
"""

from __future__ import annotations

import json
import math
import re
from pathlib import Path

import geopandas as gpd
import numpy as np
import rasterio
from rasterio.windows import from_bounds
from scipy.interpolate import splev, splprep
from scipy.ndimage import gaussian_filter
from shapely.geometry import LineString, Point, box
from shapely.ops import substring


ROOT = Path(__file__).resolve().parents[1]
VIJAYAWADA_ROOT = ROOT.parents[1]
DSS_DEV = VIJAYAWADA_ROOT / "dss_dev"

DSS_BOUNDS_UTM44N = (455909.1916, 1821868.8515, 466289.1916, 1833568.8515)
DOMAIN = box(*DSS_BOUNDS_UTM44N)
W, H = 1700, 1916

WATER_OUT = ROOT / "assets" / "reference" / "waterbody_flow_direction_arrows.geojson"
TERRAIN_OUT = ROOT / "assets" / "reference" / "terrain_flow_direction_arrows.geojson"
WATER_SVG_OUT = ROOT / "assets" / "maps" / "flow_arrows_identified.svg"
TERRAIN_SVG_OUT = ROOT / "assets" / "maps" / "terrain_flow_arrows.svg"
MANIFEST_OUT = ROOT / "assets" / "reference" / "fdir_source_manifest.json"

KRISHNA_OSM_WATER = DSS_DEV / "derived" / "osm_water" / "krishna_river_osm_water.geojson"
KRISHNA_OSM_WATERWAY_LINES = ROOT / "assets" / "reference" / "krishna_river_osm_waterways.geojson"
MAJOR_CANALS_OSM = DSS_DEV / "derived" / "osm_canals" / "major_canals_osm.geojson"
BUDAMERU_OSM = DSS_DEV / "derived" / "osm_budameru" / "budameru_osm_waterways.geojson"
BASEREVIEW_LAYERS = ROOT.parent / "basemap_review" / "layers"
TERRAIN_RASTER = ROOT.parent / "physics_layers_v0" / "conditioned_hydraulic_terrain_20m.tif"

WATER_COLORS = {
    "river": "#0369a1",
    "reservoir": "#0284c7",
    "budameru": "#0f766e",
    "canal": "#b45309",
    "major": "#92400e",
}


def parse_layer_js(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    match = re.search(r"=\s*(\{.*\});?\s*$", text, re.S)
    if not match:
        raise ValueError(f"Could not parse layer JS: {path}")
    return json.loads(match.group(1))


def gdf_from_layer_js(path: Path) -> gpd.GeoDataFrame:
    payload = parse_layer_js(path)
    return gpd.GeoDataFrame.from_features(payload["features"], crs="EPSG:4326")


def line_parts(geometry) -> list[LineString]:
    if geometry is None or geometry.is_empty:
        return []
    if geometry.geom_type == "LineString":
        return [geometry]
    if geometry.geom_type == "MultiLineString":
        return [part for part in geometry.geoms if not part.is_empty]
    if geometry.geom_type == "GeometryCollection":
        parts: list[LineString] = []
        for item in geometry.geoms:
            parts.extend(line_parts(item))
        return parts
    return []


def polygon_parts(geometry):
    if geometry is None or geometry.is_empty:
        return []
    if geometry.geom_type == "Polygon":
        return [geometry]
    if geometry.geom_type == "MultiPolygon":
        return [part for part in geometry.geoms if not part.is_empty]
    if geometry.geom_type == "GeometryCollection":
        parts = []
        for item in geometry.geoms:
            parts.extend(polygon_parts(item))
        return parts
    return []


def clean_name(*values: object, fallback: str) -> str:
    for value in values:
        if value is None:
            continue
        text = str(value).strip()
        if text and text.lower() != "nan":
            return text
    return fallback


def orient_west_to_east(line: LineString) -> LineString:
    coords = list(line.coords)
    if len(coords) < 2:
        return line
    start, end = coords[0], coords[-1]
    if (end[0], end[1]) < (start[0], start[1]):
        return LineString(list(reversed(coords)))
    return line


def orient_along_axis(line: LineString, axis: tuple[float, float]) -> LineString:
    coords = list(line.coords)
    if len(coords) < 2:
        return line
    ax, ay = axis
    start_projection = coords[0][0] * ax + coords[0][1] * ay
    end_projection = coords[-1][0] * ax + coords[-1][1] * ay
    if end_projection < start_projection:
        return LineString(list(reversed(coords)))
    return line


def orient_from_nearest_water(line: LineString, water_geometry) -> LineString:
    coords = list(line.coords)
    if len(coords) < 2:
        return line
    start = Point(coords[0])
    end = Point(coords[-1])
    if end.distance(water_geometry) < start.distance(water_geometry):
        return LineString(list(reversed(coords)))
    return line


def smooth_path(line: LineString, *, sample_spacing_m: float = 160.0, smoothing: float = 600000.0) -> LineString:
    coords = np.asarray(line.coords, dtype=float)
    if len(coords) < 4:
        return line
    try:
        k = min(3, len(coords) - 1)
        tck, _ = splprep([coords[:, 0], coords[:, 1]], s=smoothing, k=k)
        sample_count = max(8, int(line.length / sample_spacing_m))
        samples = np.linspace(0, 1, sample_count)
        xs, ys = splev(samples, tck)
        return LineString(list(zip(xs, ys))).simplify(55, preserve_topology=False)
    except Exception:
        return line.simplify(80, preserve_topology=False)


def bank_midline_centerline(poly, samples: int = 70) -> LineString | None:
    """Approximate a river centreline by averaging the two opposite banks.

    The earlier algorithm used vertical/horizontal slices through the polygon,
    which is not a valid way to draw direction arrows for the curved Krishna
    branches. This method identifies upstream/downstream ends along the reviewed
    NW-to-SE Krishna direction, splits the exterior ring into two bank paths, and
    averages corresponding points on those banks.
    """
    if poly.area < 50000:
        return None

    coords = np.asarray(poly.exterior.coords[:-1], dtype=float)
    if len(coords) < 8:
        return None

    flow_axis = np.array([1.0, -0.45])
    projection = coords[:, 0] * flow_axis[0] + coords[:, 1] * flow_axis[1]
    upstream_index = int(np.argmin(projection))
    downstream_index = int(np.argmax(projection))

    if upstream_index < downstream_index:
        bank_a = coords[upstream_index : downstream_index + 1]
        bank_b = np.vstack([coords[downstream_index:], coords[: upstream_index + 1]])[::-1]
    else:
        bank_a = np.vstack([coords[upstream_index:], coords[: downstream_index + 1]])
        bank_b = coords[downstream_index : upstream_index + 1][::-1]

    if len(bank_a) < 2 or len(bank_b) < 2:
        return None

    def resample(path: np.ndarray) -> np.ndarray:
        bank_line = LineString(path.tolist())
        if bank_line.length <= 0:
            return np.empty((0, 2))
        fractions = np.linspace(0, 1, samples)
        return np.array(
            [
                (bank_line.interpolate(float(fraction) * bank_line.length).x, bank_line.interpolate(float(fraction) * bank_line.length).y)
                for fraction in fractions
            ]
        )

    bank_a_samples = resample(bank_a)
    bank_b_samples = resample(bank_b)
    if len(bank_a_samples) == 0 or len(bank_b_samples) == 0:
        return None

    midline = LineString(((bank_a_samples + bank_b_samples) / 2.0).tolist())
    line = smooth_path(midline)
    if line.length < 250:
        return None
    return orient_west_to_east(line)


def arrow_segments(path: LineString, spacing_m: float, length_m: float) -> list[LineString]:
    if path.length < 180:
        return []
    count = max(1, int(path.length // spacing_m) + 1)
    if count == 1:
        positions = [0.55 * path.length]
    else:
        positions = np.linspace(0.16 * path.length, 0.86 * path.length, count)

    segments: list[LineString] = []
    for pos in positions:
        start = max(0.0, pos - length_m / 2)
        end = min(path.length, pos + length_m / 2)
        if end - start < 120:
            continue
        segment = substring(path, start, end)
        for part in line_parts(segment):
            if part.length >= 100:
                segments.append(part)
    return segments


def angle_deg(line: LineString) -> float:
    coords = list(line.coords)
    if len(coords) < 2:
        return 0.0
    x0, y0 = coords[0]
    x1, y1 = coords[-1]
    return (math.degrees(math.atan2(y1 - y0, x1 - x0)) + 360) % 360


def add_arrow_records(
    records: list[dict],
    path: LineString,
    *,
    prefix: str,
    feature_name: str,
    feature_type: str,
    source_layer: str,
    flow_direction: str,
    direction_basis: str,
    confidence: str,
    spacing_m: float = 1300.0,
    length_m: float = 820.0,
) -> None:
    for segment in arrow_segments(path, spacing_m, length_m):
        clipped = segment.intersection(DOMAIN)
        for part in line_parts(clipped):
            if part.length < 100:
                continue
            arrow_id = f"{prefix}-{len(records) + 1:03d}"
            records.append(
                {
                    "arrow_id": arrow_id,
                    "feature_name": feature_name,
                    "feature_type": feature_type,
                    "source_layer": source_layer,
                    "flow_direction": flow_direction,
                    "direction_basis": direction_basis,
                    "confidence": confidence,
                    "review_status": "Direction display for DSS review; verify against official hydraulic survey before detailed design.",
                    "angle_deg": round(angle_deg(part), 2),
                    "geometry": part,
                }
            )


def build_waterway_arrows() -> gpd.GeoDataFrame:
    records: list[dict] = []

    krishna = gpd.read_file(KRISHNA_OSM_WATER).to_crs("EPSG:32644")
    krishna = gpd.clip(krishna, DOMAIN)
    water_reference = krishna.geometry.union_all()
    krishna_line_used = False
    if KRISHNA_OSM_WATERWAY_LINES.exists():
        krishna_lines = gpd.read_file(KRISHNA_OSM_WATERWAY_LINES)
        if krishna_lines.crs is None:
            krishna_lines = krishna_lines.set_crs("EPSG:4326")
        krishna_lines = krishna_lines.to_crs("EPSG:32644")
        krishna_clip = water_reference.buffer(140).intersection(DOMAIN)
        for _, row in krishna_lines.iterrows():
            name = clean_name(row.get("name"), row.get("source_name"), fallback="Krishna River")
            if name.lower() in {"krishna", "krishna river candidate"}:
                name = "Krishna River"
            for path in line_parts(row.geometry):
                clipped = path.intersection(krishna_clip)
                for part in line_parts(clipped):
                    if part.length < 150:
                        continue
                    oriented = orient_along_axis(part, (1.0, -0.70))
                    add_arrow_records(
                        records,
                        oriented,
                        prefix="KRS",
                        feature_name=name,
                        feature_type="river",
                        source_layer="krishna_river_osm_waterways",
                        flow_direction="upstream west / northwest to downstream east / southeast along mapped Krishna river line",
                        direction_basis=(
                            "Path follows OSM waterway=river LineString geometry clipped to the Krishna river-water polygon; "
                            "polygon bank-midline is used only when this line source is unavailable."
                        ),
                        confidence="review",
                        spacing_m=1050,
                        length_m=680,
                    )
                    krishna_line_used = True

    if not krishna_line_used:
        for geom_index, geometry in enumerate(krishna.geometry, start=1):
            for part_index, poly in enumerate(polygon_parts(geometry), start=1):
                if poly.area < 120000:
                    continue
                centerline = bank_midline_centerline(poly)
                if centerline is None:
                    continue
                add_arrow_records(
                    records,
                    centerline,
                    prefix="KRS",
                    feature_name=f"Krishna River branch {geom_index}.{part_index}",
                    feature_type="river",
                    source_layer="krishna_river_osm_water",
                    flow_direction="west / northwest to east / southeast along the mapped Krishna waterbody branch",
                    direction_basis=(
                        "Fallback path follows a bank-midline centreline derived from the OSM Krishna river-water polygon; "
                        "use only when mapped river-line geometry is unavailable."
                    ),
                    confidence="review",
                    spacing_m=1400,
                    length_m=900,
                )
    for layer_name, feature_name, feature_type, source_file in [
        ("reservoir", "Krishna reservoir / Prakasam backwater reach", "reservoir", BASEREVIEW_LAYERS / "reservoir.js"),
        ("budameru_canal", "Budameru Canal", "budameru_canal", BASEREVIEW_LAYERS / "budameru_canal.js"),
    ]:
        if not source_file.exists():
            continue
        layer = gdf_from_layer_js(source_file).to_crs("EPSG:32644")
        layer = gpd.clip(layer, DOMAIN)
        for geometry in layer.geometry:
            for poly in polygon_parts(geometry):
                if poly.area < 70000:
                    continue
                centerline = bank_midline_centerline(poly)
                if centerline is None:
                    continue
                add_arrow_records(
                    records,
                    centerline,
                    prefix="WAT",
                    feature_name=feature_name,
                    feature_type=feature_type,
                    source_layer=layer_name,
                    flow_direction="reviewed west-to-east / downstream display direction through Vijayawada",
                    direction_basis="Path follows a bank-midline centreline derived from mapped waterbody polygon banks.",
                    confidence="review",
                    spacing_m=1350,
                    length_m=820,
                )
                water_reference = water_reference.union(poly)

    if MAJOR_CANALS_OSM.exists():
        canals = gpd.read_file(MAJOR_CANALS_OSM).to_crs("EPSG:32644")
        for _, row in canals.iterrows():
            name = clean_name(row.get("canal_name"), row.get("name_en"), row.get("source_name"), fallback="Major canal")
            for path in line_parts(row.geometry):
                oriented = orient_from_nearest_water(path, water_reference)
                for part in line_parts(oriented.intersection(DOMAIN)):
                    add_arrow_records(
                        records,
                        part,
                        prefix="CAN",
                        feature_name=name,
                        feature_type="major_canal",
                        source_layer="major_canals_osm",
                        flow_direction="away from nearest Krishna/reservoir endpoint along mapped canal line",
                        direction_basis="Arrow follows mapped OSM canal LineString geometry and is oriented from the Krishna/reservoir-connected end.",
                        confidence="review",
                        spacing_m=1300,
                        length_m=760,
                    )

    if BUDAMERU_OSM.exists():
        budameru = gpd.read_file(BUDAMERU_OSM).to_crs("EPSG:32644")
        for _, row in budameru.iterrows():
            name = clean_name(row.get("budameru_name"), row.get("name_en"), row.get("source_name"), fallback="Budameru River")
            for path in line_parts(row.geometry):
                oriented = orient_west_to_east(path)
                for part in line_parts(oriented.intersection(DOMAIN)):
                    add_arrow_records(
                        records,
                        part,
                        prefix="BUD",
                        feature_name=name,
                        feature_type="budameru_rivulet",
                        source_layer="budameru_osm_waterways",
                        flow_direction="west / northwest to east / southeast along mapped Budameru waterway",
                        direction_basis="Arrow follows mapped OSM Budameru waterway LineString geometry.",
                        confidence="review",
                        spacing_m=1100,
                        length_m=700,
                    )

    gdf = gpd.GeoDataFrame(records, geometry="geometry", crs="EPSG:32644")
    gdf = gdf[gdf.geometry.notna() & ~gdf.geometry.is_empty].copy()
    gdf["_sort"] = gdf["feature_type"].astype(str) + "_" + gdf["feature_name"].astype(str) + "_" + gdf["arrow_id"].astype(str)
    gdf = gdf.sort_values("_sort").drop(columns=["_sort"])
    return gdf.to_crs("EPSG:4326")


def municipal_boundary() -> object:
    source = BASEREVIEW_LAYERS / "municipal_boundary.js"
    gdf = gdf_from_layer_js(source).to_crs("EPSG:32644")
    return gdf.geometry.union_all().intersection(DOMAIN)


def build_terrain_arrows() -> gpd.GeoDataFrame:
    boundary = municipal_boundary()
    records: list[dict] = []
    with rasterio.open(TERRAIN_RASTER) as src:
        window = from_bounds(*DSS_BOUNDS_UTM44N, transform=src.transform)
        terrain = src.read(1, window=window, masked=True).astype("float64")
        transform = src.window_transform(window)

    data = terrain.filled(np.nan)
    fill_value = float(np.nanmedian(data))
    filled = np.where(np.isfinite(data), data, fill_value)
    smooth = gaussian_filter(filled, sigma=2.0)

    pixel_x = float(transform.a)
    pixel_y = abs(float(transform.e))
    dz_dsouth, dz_dx = np.gradient(smooth, pixel_y, pixel_x)
    flow_x = -dz_dx
    flow_y = dz_dsouth

    spacing_px = 36
    arrow_length_m = 330.0
    for row in range(spacing_px // 2, smooth.shape[0], spacing_px):
        for col in range(spacing_px // 2, smooth.shape[1], spacing_px):
            x, y = rasterio.transform.xy(transform, row, col)
            point = Point(x, y)
            if not boundary.contains(point):
                continue
            magnitude = math.hypot(float(flow_x[row, col]), float(flow_y[row, col]))
            if not math.isfinite(magnitude) or magnitude < 0.0006:
                continue
            ux = float(flow_x[row, col]) / magnitude
            uy = float(flow_y[row, col]) / magnitude
            line = LineString(
                [
                    (x - ux * arrow_length_m / 2, y - uy * arrow_length_m / 2),
                    (x + ux * arrow_length_m / 2, y + uy * arrow_length_m / 2),
                ]
            ).intersection(DOMAIN)
            for part in line_parts(line):
                if part.length < 80:
                    continue
                records.append(
                    {
                        "arrow_id": f"TER-{len(records) + 1:03d}",
                        "feature_name": "Local terrain downslope direction",
                        "feature_type": "terrain_downslope",
                        "source_layer": "conditioned_hydraulic_terrain_20m",
                        "flow_direction": "local steepest-descent direction from conditioned hydraulic terrain",
                        "direction_basis": "Computed from smoothed local DEM/DTM gradient; separate from waterway FDir arrows.",
                        "confidence": "model_evidence",
                        "slope_m_per_m": round(magnitude, 5),
                        "angle_deg": round(angle_deg(part), 2),
                        "geometry": part,
                    }
                )

    gdf = gpd.GeoDataFrame(records, geometry="geometry", crs="EPSG:32644")
    return gdf.to_crs("EPSG:4326")


def project_xy(x: float, y: float) -> tuple[float, float]:
    minx, miny, maxx, maxy = DSS_BOUNDS_UTM44N
    px = (x - minx) / (maxx - minx) * W
    py = H - ((y - miny) / (maxy - miny) * H)
    return px, py


def svg_path(line: LineString) -> str:
    projected = [project_xy(x, y) for x, y in line.coords]
    commands = [f"M {projected[0][0]:.1f} {projected[0][1]:.1f}"]
    commands.extend(f"L {x:.1f} {y:.1f}" for x, y in projected[1:])
    return " ".join(commands)


def water_kind(row) -> str:
    feature_type = str(row.get("feature_type") or "").lower()
    source_layer = str(row.get("source_layer") or "").lower()
    if "river" in feature_type or "krishna" in source_layer:
        return "river"
    if "reservoir" in feature_type:
        return "reservoir"
    if "budameru" in feature_type:
        return "budameru"
    if "major" in feature_type:
        return "major"
    return "canal"


def render_water_svg(gdf: gpd.GeoDataFrame) -> str:
    gdf = gdf.to_crs("EPSG:32644")
    markers = "\n".join(
        f'''    <marker id="head-{kind}" markerUnits="userSpaceOnUse" viewBox="0 0 44 28" refX="40" refY="14" markerWidth="44" markerHeight="28" orient="auto">
      <path d="M2 3 L40 14 L2 25 L12 14 Z" fill="{color}" stroke="#ffffff" stroke-width="3.0" stroke-linejoin="round"/>
      <path d="M2 3 L40 14 L2 25 L12 14 Z" fill="none" stroke="#0f172a" stroke-width="1.15" stroke-linejoin="round" opacity="0.42"/>
    </marker>'''
        for kind, color in WATER_COLORS.items()
    )
    arrows = []
    for _, row in gdf.iterrows():
        kind = water_kind(row)
        color = WATER_COLORS[kind]
        title = f"{row.get('arrow_id')}: {row.get('feature_name')}. Direction: {row.get('flow_direction')}."
        path = svg_path(row.geometry)
        arrows.append(
            f'''    <g class="fdir-arrow {kind}">
      <title>{title}</title>
      <path class="fdir-halo" d="{path}"/>
      <path class="fdir-shadow" d="{path}"/>
      <path class="fdir-shaft" d="{path}" stroke="{color}" marker-end="url(#head-{kind})"/>
    </g>'''
        )
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-label="Vijayawada waterway FDir arrows">
  <defs>
{markers}
    <style>
      .fdir-halo {{ fill:none; stroke:#ffffff; stroke-width:16; stroke-linecap:round; stroke-linejoin:round; opacity:0.98; }}
      .fdir-shadow {{ fill:none; stroke:#020617; stroke-width:10; stroke-linecap:round; stroke-linejoin:round; opacity:0.28; }}
      .fdir-shaft {{ fill:none; stroke-width:7.8; stroke-linecap:round; stroke-linejoin:round; opacity:0.99; }}
      .river .fdir-shaft, .reservoir .fdir-shaft {{ stroke-width:9.2; }}
    </style>
  </defs>
  <desc>Waterway FDir arrows generated from path-following river, canal and Budameru geometry.</desc>
  <rect width="{W}" height="{H}" fill="none"/>
  <g id="fdir-flow-arrows" data-feature-count="{len(gdf)}">
{"".join(arrows)}
  </g>
</svg>
'''


def render_terrain_svg(gdf: gpd.GeoDataFrame) -> str:
    gdf = gdf.to_crs("EPSG:32644")
    arrows = []
    for _, row in gdf.iterrows():
        path = svg_path(row.geometry)
        title = f"{row.get('arrow_id')}: terrain downslope; slope {row.get('slope_m_per_m')} m/m."
        arrows.append(
            f'''    <g class="terrain-arrow">
      <title>{title}</title>
      <path class="terrain-halo" d="{path}"/>
      <path class="terrain-shaft" d="{path}" marker-end="url(#terrain-head)"/>
    </g>'''
        )
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-label="Vijayawada terrain downslope arrows">
  <defs>
    <marker id="terrain-head" markerUnits="userSpaceOnUse" viewBox="0 0 34 24" refX="30" refY="12" markerWidth="34" markerHeight="24" orient="auto">
      <path d="M2 4 L30 12 L2 20 L10 12 Z" fill="#4c1d95" stroke="#ffffff" stroke-width="2.3" stroke-linejoin="round"/>
    </marker>
    <style>
      .terrain-halo {{ fill:none; stroke:#ffffff; stroke-width:9; stroke-linecap:round; stroke-linejoin:round; opacity:0.82; }}
      .terrain-shaft {{ fill:none; stroke:#4c1d95; stroke-width:4.4; stroke-linecap:round; stroke-linejoin:round; opacity:0.88; }}
    </style>
  </defs>
  <desc>Local DEM/DTM downslope arrows from conditioned hydraulic terrain.</desc>
  <rect width="{W}" height="{H}" fill="none"/>
  <g id="terrain-flow-arrows" data-feature-count="{len(gdf)}">
{"".join(arrows)}
  </g>
</svg>
'''


def main() -> None:
    WATER_OUT.parent.mkdir(parents=True, exist_ok=True)
    WATER_SVG_OUT.parent.mkdir(parents=True, exist_ok=True)

    water_arrows = build_waterway_arrows()
    terrain_arrows = build_terrain_arrows()

    water_arrows.to_file(WATER_OUT, driver="GeoJSON")
    terrain_arrows.to_file(TERRAIN_OUT, driver="GeoJSON")
    WATER_SVG_OUT.write_text(render_water_svg(water_arrows), encoding="utf-8")
    TERRAIN_SVG_OUT.write_text(render_terrain_svg(terrain_arrows), encoding="utf-8")

    manifest = {
        "build": "20260527_osm_riverline_waterway_and_terrain_arrows",
        "waterway_arrow_count": int(len(water_arrows)),
        "terrain_arrow_count": int(len(terrain_arrows)),
        "waterway_sources": {
            "krishna": str(KRISHNA_OSM_WATER.relative_to(VIJAYAWADA_ROOT)),
            "krishna_waterway_lines": str(KRISHNA_OSM_WATERWAY_LINES.relative_to(ROOT)),
            "major_canals": str(MAJOR_CANALS_OSM.relative_to(VIJAYAWADA_ROOT)),
            "budameru": str(BUDAMERU_OSM.relative_to(VIJAYAWADA_ROOT)),
            "reservoir_and_budameru_polygons": str((ROOT.parent / "basemap_review" / "layers").relative_to(VIJAYAWADA_ROOT)),
        },
        "terrain_source": str(TERRAIN_RASTER.relative_to(VIJAYAWADA_ROOT)),
        "note": (
            "Krishna arrows follow OSM waterway=river line geometry clipped to the OSM river-water polygon; "
            "terrain arrows are local DEM/DTM downslope indicators and are displayed separately."
        ),
    }
    MANIFEST_OUT.write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(f"Wrote {len(water_arrows)} waterway arrows to {WATER_OUT}")
    print(f"Wrote {len(terrain_arrows)} terrain arrows to {TERRAIN_OUT}")
    print(f"Wrote {WATER_SVG_OUT}")
    print(f"Wrote {TERRAIN_SVG_OUT}")


if __name__ == "__main__":
    main()
