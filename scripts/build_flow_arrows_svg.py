#!/usr/bin/env python3
"""Build the dashboard flow-direction arrow overlay from the reviewed layer.

Source: `assets/reference/waterbody_flow_direction_arrows.geojson`, copied from
the earlier `/layers/` basemap-review dashboard. That layer contains the 22
reviewed waterbody/canal direction arrows; this script projects them onto the
1700 x 1916 DSS canvas and uses fixed-size SVG arrowheads so they remain clear
when the dashboard map is scaled.
"""

from __future__ import annotations

import json
from html import escape
from pathlib import Path

try:
    from pyproj import Transformer
except ImportError as exc:  # pragma: no cover - local generation guard
    raise SystemExit(
        "pyproj is required to rebuild the flow-arrow SVG. "
        "Run this script from the project GIS Python environment."
    ) from exc


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets" / "reference" / "waterbody_flow_direction_arrows.geojson"
OUT = ROOT / "assets" / "maps" / "flow_arrows_identified.svg"

W, H = 1700, 1916
BOUNDS_UTM44N = (455909.1916, 1821868.8515, 466289.1916, 1833568.8515)

COLORS = {
    "river": ("#0369a1", "head-river"),
    "reservoir": ("#0284c7", "head-river"),
    "canal": ("#b45309", "head-canal"),
    "major_canal": ("#92400e", "head-major"),
}

LABELS = {
    "FD-004": ("Krishna upper / reservoir branch", 42, 1225),
    "FD-001": ("Krishna lower / main branch", 520, 1588),
}


def marker(marker_id: str, color: str) -> str:
    return f"""
    <marker id="{marker_id}" markerUnits="userSpaceOnUse" viewBox="0 0 28 28"
      refX="25" refY="14" markerWidth="28" markerHeight="28" orient="auto">
      <path d="M3 3 L25 14 L3 25 L8.2 14 Z" fill="{color}" stroke="#ffffff" stroke-width="2.6" stroke-linejoin="round"/>
    </marker>"""


def pixel_path(coords: list[list[float]], transformer: Transformer) -> str:
    minx, miny, maxx, maxy = BOUNDS_UTM44N
    parts: list[str] = []
    for i, (lon, lat) in enumerate(coords):
        x, y = transformer.transform(lon, lat)
        px = (x - minx) / (maxx - minx) * W
        py = (maxy - y) / (maxy - miny) * H
        op = "M" if i == 0 else "L"
        parts.append(f"{op} {px:.1f} {py:.1f}")
    return " ".join(parts)


def arrow_group(feature: dict, transformer: Transformer) -> str:
    props = feature.get("properties", {})
    geom = feature.get("geometry", {})
    coords = geom.get("coordinates", [])
    if geom.get("type") != "LineString" or len(coords) < 2:
        return ""

    arrow_id = str(props.get("arrow_id", "arrow"))
    name = str(props.get("feature_name", "Waterbody flow direction"))
    kind = str(props.get("feature_type", "major_canal"))
    color, marker_id = COLORS.get(kind, COLORS["major_canal"])
    d = pixel_path(coords, transformer)
    title = (
        f"{arrow_id}: {name}. Reviewed waterbody/canal direction from the "
        "basemap-review /layers/ dashboard. Arrow head marks review flow "
        "direction; verify against official hydraulic records before design use."
    )

    label_block = ""
    if arrow_id in LABELS:
        text, x, y = LABELS[arrow_id]
        label_block = f"""
      <text class="flow-label halo-label" x="{x}" y="{y}">{escape(text)}</text>
      <text class="flow-label fill-label" x="{x}" y="{y}">{escape(text)}</text>"""

    css_kind = kind.replace("_", "-")
    return f"""
    <g class="major-flow-arrow {escape(css_kind)}" data-arrow-id="{escape(arrow_id)}" data-name="{escape(name)}">
      <title>{escape(title)}</title>
      <path class="arrow-halo" d="{d}"/>
      <path class="arrow-shadow" d="{d}"/>
      <path class="arrow-shaft" d="{d}" stroke="{color}" marker-end="url(#{marker_id})"/>{label_block}
    </g>"""


def build_svg() -> str:
    source = json.loads(SOURCE.read_text(encoding="utf-8"))
    features = source.get("features", [])
    transformer = Transformer.from_crs("EPSG:4326", "EPSG:32644", always_xy=True)
    marker_defs = "\n".join(
        marker(marker_id, color)
        for color, marker_id in {
            COLORS["river"],
            COLORS["canal"],
            COLORS["major_canal"],
        }
    )
    arrows = "\n".join(filter(None, (arrow_group(feature, transformer) for feature in features)))
    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-label="Major Vijayawada waterbody and canal flow arrows from the reviewed layers dashboard">
  <defs>
{marker_defs}
    <style>
      .arrow-halo {{
        fill: none;
        stroke: #ffffff;
        stroke-width: 15;
        stroke-linecap: round;
        stroke-linejoin: round;
        opacity: 0.96;
      }}
      .arrow-shadow {{
        fill: none;
        stroke: #020617;
        stroke-width: 10;
        stroke-linecap: round;
        stroke-linejoin: round;
        opacity: 0.20;
      }}
      .arrow-shaft {{
        fill: none;
        stroke-width: 7.2;
        stroke-linecap: round;
        stroke-linejoin: round;
        opacity: 0.98;
      }}
      .river .arrow-shaft,
      .reservoir .arrow-shaft {{
        stroke-width: 8.2;
      }}
      .flow-label {{
        font-family: Inter, Arial, Helvetica, sans-serif;
        font-weight: 800;
        font-size: 21px;
        letter-spacing: 0;
      }}
      .halo-label {{
        fill: none;
        stroke: #ffffff;
        stroke-width: 6px;
        stroke-linejoin: round;
        paint-order: stroke;
        opacity: 0.96;
      }}
      .fill-label {{
        fill: #075985;
        stroke: none;
      }}
    </style>
  </defs>
  <rect width="{W}" height="{H}" fill="none"/>
  <g id="flow-direction-arrows" data-source="basemap_review/layers/waterbody_flow_direction_arrows.js" data-feature-count="{len(features)}">
{arrows}
  </g>
</svg>
"""


def main() -> None:
    OUT.write_text(build_svg(), encoding="utf-8")
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
