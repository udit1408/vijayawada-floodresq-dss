#!/usr/bin/env python3
"""Build bounded May-24-style vector review layers for the DSS.

The source layer package is the earlier basemap-review dashboard. This script
clips the review vectors to the registered Vijayawada DSS canvas extent before
they are published, so the interactive viewer keeps the May 24 layer experience
without drawing long canal or arrow branches outside the operational map.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

import geopandas as gpd
from shapely.geometry import box


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT.parent / "basemap_review" / "layers"
FDIR_SOURCE = ROOT / "assets" / "reference" / "waterbody_flow_direction_arrows.geojson"
TERRAIN_ARROW_SOURCE = ROOT / "assets" / "reference" / "terrain_flow_direction_arrows.geojson"
OUT_DIR = ROOT / "assets" / "review_layers_bounded"
LAYERS_DIR = OUT_DIR / "layers"

# Registered 1700 x 1916 DSS map extent in UTM Zone 44N.
DSS_BOUNDS_UTM44N = (455909.1916, 1821868.8515, 466289.1916, 1833568.8515)

LAYER_META = {
    "municipal_boundary": {
        "label": "Municipal Boundary",
        "color": "#111827",
        "geometry": "polygon",
        "defaultVisible": True,
        "weight": 3.0,
        "fillOpacity": 0.015,
    },
    "revenue_wards": {
        "label": "Revenue Wards",
        "color": "#64748b",
        "geometry": "polygon",
        "defaultVisible": True,
        "weight": 1.0,
        "fillOpacity": 0.025,
    },
    "budameru_canal": {
        "label": "Budameru Canal",
        "color": "#0891b2",
        "geometry": "polygon",
        "defaultVisible": True,
        "weight": 2.0,
        "fillOpacity": 0.34,
    },
    "krishna_river_osm_water": {
        "label": "Krishna River OSM Water",
        "color": "#2563eb",
        "geometry": "polygon",
        "defaultVisible": True,
        "weight": 2.0,
        "fillOpacity": 0.30,
    },
    "reservoir": {
        "label": "Reservoir / Prakasam Backwater",
        "color": "#38bdf8",
        "geometry": "polygon",
        "defaultVisible": True,
        "weight": 2.0,
        "fillOpacity": 0.32,
    },
    "major_canals_osm": {
        "label": "Major Canals / Offtakes",
        "color": "#0e7490",
        "geometry": "line",
        "defaultVisible": True,
        "weight": 3.2,
        "fillOpacity": 0.0,
    },
    "waterbody_flow_direction_arrows": {
        "label": "Waterway Flow Direction Arrows",
        "color": "#b45309",
        "geometry": "line",
        "defaultVisible": True,
        "weight": 3.8,
        "fillOpacity": 0.0,
    },
    "terrain_flow_direction_arrows": {
        "label": "Terrain Downslope Arrows",
        "color": "#4c1d95",
        "geometry": "line",
        "defaultVisible": True,
        "weight": 2.4,
        "fillOpacity": 0.0,
    },
    "pump_receiving_waterbody_connectors": {
        "label": "Pump To Receiving Water",
        "color": "#e11d48",
        "geometry": "line",
        "defaultVisible": True,
        "weight": 2.5,
        "fillOpacity": 0.0,
        "dashArray": "8 6",
    },
    "pump_drain_link_connectors": {
        "label": "Pump To Referenced Drain",
        "color": "#7c2d12",
        "geometry": "line",
        "defaultVisible": False,
        "weight": 1.5,
        "fillOpacity": 0.0,
    },
    "drainage_pump_stations": {
        "label": "Drainage Pump Stations",
        "color": "#ea580c",
        "geometry": "point",
        "defaultVisible": True,
        "weight": 1.0,
        "fillOpacity": 0.86,
    },
    "candidate_outfalls": {
        "label": "Candidate Outfalls",
        "color": "#dc2626",
        "geometry": "point",
        "defaultVisible": False,
        "weight": 1.0,
        "fillOpacity": 0.72,
    },
    "control_sections": {
        "label": "Control Sections",
        "color": "#f59e0b",
        "geometry": "line",
        "defaultVisible": True,
        "weight": 4.0,
        "fillOpacity": 0.0,
    },
}


def parse_layer(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    match = re.search(r"=\s*(\{.*\});?\s*$", text, re.S)
    if not match:
        raise ValueError(f"Could not parse layer JS: {path}")
    return json.loads(match.group(1))


def to_js_variable(key: str, geojson: dict) -> str:
    payload = json.dumps(geojson, separators=(",", ":"), ensure_ascii=False)
    return (
        "window.VJ_BOUNDED_REVIEW_LAYERS = window.VJ_BOUNDED_REVIEW_LAYERS || {};\n"
        f'window.VJ_BOUNDED_REVIEW_LAYERS["{key}"] = {payload};\n'
    )


def clip_layer(key: str, bbox_wgs) -> tuple[dict, int, int]:
    if key == "waterbody_flow_direction_arrows" and FDIR_SOURCE.exists():
        gdf = gpd.read_file(FDIR_SOURCE)
        if gdf.crs is None:
            gdf = gdf.set_crs("EPSG:4326")
        gdf = gdf.to_crs("EPSG:4326")
    elif key == "terrain_flow_direction_arrows" and TERRAIN_ARROW_SOURCE.exists():
        gdf = gpd.read_file(TERRAIN_ARROW_SOURCE)
        if gdf.crs is None:
            gdf = gdf.set_crs("EPSG:4326")
        gdf = gdf.to_crs("EPSG:4326")
    else:
        source = parse_layer(SOURCE_DIR / f"{key}.js")
        gdf = gpd.GeoDataFrame.from_features(source["features"], crs="EPSG:4326")
    source_count = len(gdf)
    intersecting = gdf[gdf.intersects(bbox_wgs)].copy()
    if intersecting.empty:
        clipped = intersecting
    else:
        clipped = gpd.clip(intersecting, bbox_wgs, keep_geom_type=False)
        clipped = clipped[~clipped.is_empty].copy()
    clipped = clipped.to_crs("EPSG:4326")
    geojson = json.loads(clipped.to_json(drop_id=True))
    for feature in geojson.get("features", []):
        feature.setdefault("properties", {})["_bounded_to_dss_extent"] = True
        if key == "waterbody_flow_direction_arrows":
            props = feature["properties"]
            source_layer = str(props.get("source_layer") or "")
            feature_type = str(props.get("feature_type") or "")
            if source_layer == "major_canals_osm":
                props["direction_basis"] = (
                    "Arrow is aligned along the OSM canal line, oriented from the Krishna/reservoir-connected "
                    "end toward the mapped canal review reach; it is not a surface-gradient arrow."
                )
                props["review_status"] = (
                    "OSM-derived review direction; confirm against irrigation department drawings or survey "
                    "before hydraulic design."
                )
            elif "river" in feature_type:
                props["direction_basis"] = (
                    "Arrow is aligned along the OSM Krishna river-water geometry using the known downstream "
                    "city reach direction; it is not inferred from terrain surface slope."
                )
            else:
                props["direction_basis"] = (
                    "Arrow is aligned along mapped OSM/official waterbody geometry using the reviewed waterway "
                    "direction; it is not inferred from terrain surface slope."
                )
            props["dashboard_source_role"] = "FDir arrow reference used for dashboard direction display"
        elif key == "terrain_flow_direction_arrows":
            props = feature["properties"]
            props["direction_basis"] = (
                "Computed from smoothed local DEM/DTM gradient on the conditioned hydraulic terrain; "
                "displayed separately from river/canal FDir arrows."
            )
            props["dashboard_source_role"] = "Terrain downslope arrow reference used for dashboard direction display"
    return geojson, source_count, len(clipped)


def main() -> None:
    LAYERS_DIR.mkdir(parents=True, exist_ok=True)
    bbox_wgs = (
        gpd.GeoSeries([box(*DSS_BOUNDS_UTM44N)], crs="EPSG:32644")
        .to_crs("EPSG:4326")
        .iloc[0]
    )
    meta_out = {}
    total_features = 0
    for key, meta in LAYER_META.items():
        geojson, source_count, bounded_count = clip_layer(key, bbox_wgs)
        total_features += bounded_count
        (LAYERS_DIR / f"{key}.js").write_text(to_js_variable(key, geojson), encoding="utf-8")
        meta_out[key] = {
            "key": key,
            **meta,
            "sourceFeatureCount": source_count,
            "featureCount": bounded_count,
        }

    build = {
        "title": "Vijayawada Bounded Hydro-Network Review",
        "layer_count": len(meta_out),
        "feature_count": total_features,
        "clip_bounds_wgs84": list(bbox_wgs.bounds),
        "clip_bounds_utm44n": list(DSS_BOUNDS_UTM44N),
        "source": "basemap_review May-24-style layer package, with path-following waterway arrows and DEM terrain arrows clipped to DSS canvas extent",
        "fdir_source": "assets/reference/waterbody_flow_direction_arrows.geojson",
        "terrain_arrow_source": "assets/reference/terrain_flow_direction_arrows.geojson",
    }
    metadata = (
        f"window.VJ_BOUNDED_REVIEW_BUILD = {json.dumps(build, indent=2)};\n"
        f"window.VJ_BOUNDED_REVIEW_META = {json.dumps(meta_out, indent=2)};\n"
    )
    (OUT_DIR / "metadata.js").write_text(metadata, encoding="utf-8")
    print(f"Wrote {len(meta_out)} bounded layers to {OUT_DIR}")
    print(f"Total bounded features: {total_features}")


if __name__ == "__main__":
    main()
