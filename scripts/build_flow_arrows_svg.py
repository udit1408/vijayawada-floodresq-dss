#!/usr/bin/env python3
"""Build the dashboard FDir arrow overlay from the reference arrow layer.

The visible dashboard arrows are generated from the same directed GeoJSON used
by the bounded review viewer. They are not terrain-gradient arrows and they are
not hand-placed decoration; each SVG shaft follows a clipped FDir LineString.
"""

from __future__ import annotations

from html import escape
from pathlib import Path

import geopandas as gpd
from shapely.geometry import LineString, box


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets" / "reference" / "waterbody_flow_direction_arrows.geojson"
OUT = ROOT / "assets" / "maps" / "flow_arrows_identified.svg"

W, H = 1700, 1916
DSS_BOUNDS_UTM44N = (455909.1916, 1821868.8515, 466289.1916, 1833568.8515)

COLORS = {
    "river": "#0369a1",
    "reservoir": "#0284c7",
    "budameru": "#0f766e",
    "canal": "#b45309",
    "major": "#92400e",
}


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


def kind_for(row) -> str:
    feature_type = str(row.get("feature_type") or "").lower()
    source_layer = str(row.get("source_layer") or "").lower()
    if "river" in feature_type or "krishna" in source_layer:
        return "river"
    if "reservoir" in feature_type:
        return "reservoir"
    if "budameru" in feature_type:
        return "budameru"
    if "canal" in feature_type and "major" in feature_type:
        return "major"
    if "canal" in feature_type or "canal" in source_layer:
        return "canal"
    return "canal"


def project_xy(x: float, y: float) -> tuple[float, float]:
    minx, miny, maxx, maxy = DSS_BOUNDS_UTM44N
    px = (x - minx) / (maxx - minx) * W
    py = H - ((y - miny) / (maxy - miny) * H)
    return px, py


def path_for_line(line: LineString) -> str:
    coords = list(line.coords)
    projected = [project_xy(x, y) for x, y in coords]
    commands = [f"M {projected[0][0]:.1f} {projected[0][1]:.1f}"]
    commands.extend(f"L {x:.1f} {y:.1f}" for x, y in projected[1:])
    return " ".join(commands)


def marker(marker_id: str, color: str) -> str:
    return f"""
    <marker id="{marker_id}" markerUnits="userSpaceOnUse" viewBox="0 0 44 28"
      refX="40" refY="14" markerWidth="44" markerHeight="28" orient="auto">
      <path d="M2 3 L40 14 L2 25 L12 14 Z" fill="{color}" stroke="#ffffff" stroke-width="3.0" stroke-linejoin="round"/>
      <path d="M2 3 L40 14 L2 25 L12 14 Z" fill="none" stroke="#0f172a" stroke-width="1.15" stroke-linejoin="round" opacity="0.42"/>
    </marker>"""


def arrow_group(row, line: LineString, index: int) -> str:
    props = row.to_dict()
    kind = kind_for(props)
    color = COLORS[kind]
    marker_id = f"head-{kind}"
    path = path_for_line(line)
    arrow_id = escape(str(props.get("arrow_id") or f"FDIR-{index:03d}"))
    name = escape(str(props.get("feature_name") or "Mapped waterway"))
    flow = escape(str(props.get("flow_direction") or "mapped flow direction"))
    source_layer = escape(str(props.get("source_layer") or "mapped OSM/official layer"))
    return f"""
    <g class="fdir-arrow {kind}" data-arrow-id="{arrow_id}" data-name="{name}" data-source-layer="{source_layer}">
      <title>{arrow_id}: {name}. Direction: {flow}.</title>
      <path class="fdir-halo" d="{path}"/>
      <path class="fdir-shadow" d="{path}"/>
      <path class="fdir-shaft" d="{path}" stroke="{color}" marker-end="url(#{marker_id})"/>
    </g>"""


def build_svg() -> str:
    if not SOURCE.exists():
        raise FileNotFoundError(f"Missing FDir source layer: {SOURCE}")

    gdf = gpd.read_file(SOURCE)
    if gdf.crs is None:
        gdf = gdf.set_crs("EPSG:4326")
    gdf = gdf.to_crs("EPSG:32644")

    domain = box(*DSS_BOUNDS_UTM44N)
    gdf = gdf[gdf.intersects(domain)].copy()
    gdf["geometry"] = gdf.geometry.intersection(domain)
    gdf = gdf[gdf.geometry.notna() & ~gdf.geometry.is_empty].copy()
    gdf["_kind"] = gdf.apply(kind_for, axis=1)
    gdf["_sort_name"] = gdf.get("feature_name", "").astype(str)
    gdf = gdf.sort_values(["_kind", "_sort_name", "arrow_id"])

    marker_defs = "\n".join(marker(f"head-{kind}", color) for kind, color in COLORS.items())
    arrows: list[str] = []
    for index, (_, row) in enumerate(gdf.iterrows(), start=1):
        for line in line_parts(row.geometry):
            if line.length >= 1:
                arrows.append(arrow_group(row, line, index))

    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-label="Vijayawada FDir waterway flow arrows">
  <defs>
{marker_defs}
    <style>
      .fdir-halo {{
        fill: none;
        stroke: #ffffff;
        stroke-width: 16;
        stroke-linecap: round;
        stroke-linejoin: round;
        opacity: 0.98;
      }}
      .fdir-shadow {{
        fill: none;
        stroke: #020617;
        stroke-width: 10;
        stroke-linecap: round;
        stroke-linejoin: round;
        opacity: 0.28;
      }}
      .fdir-shaft {{
        fill: none;
        stroke-width: 7.8;
        stroke-linecap: round;
        stroke-linejoin: round;
        opacity: 0.99;
      }}
      .river .fdir-shaft,
      .reservoir .fdir-shaft {{
        stroke-width: 9.2;
      }}
    </style>
  </defs>
  <desc>FDir arrows generated from assets/reference/waterbody_flow_direction_arrows.geojson and clipped to the Vijayawada DSS canvas.</desc>
  <rect width="{W}" height="{H}" fill="none"/>
  <g id="fdir-flow-arrows" data-source="assets/reference/waterbody_flow_direction_arrows.geojson" data-feature-count="{len(arrows)}">
{"".join(arrows)}
  </g>
</svg>
"""


def main() -> None:
    OUT.write_text(build_svg(), encoding="utf-8")
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
