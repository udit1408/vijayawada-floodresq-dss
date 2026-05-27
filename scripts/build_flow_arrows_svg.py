#!/usr/bin/env python3
"""Build the bounded operational flow-direction arrow overlay.

This is the dashboard-facing arrow layer, not the wide review atlas. The
coordinates are registered to the 1700 x 1916 DSS map canvas so the arrows stay
inside the operational overview and align with the static layer stack.
"""

from __future__ import annotations

from html import escape
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "maps" / "flow_arrows_identified.svg"

W, H = 1700, 1916


ARROWS = [
    {
        "id": "KR-UP-01",
        "name": "Krishna upper/northern branch",
        "kind": "river upper-branch",
        "color": "river",
        "label": "Krishna upper branch",
        "d": "M 38 1210 C 72 1222, 111 1242, 150 1262",
    },
    {
        "id": "KR-UP-02",
        "name": "Krishna upper/northern branch",
        "kind": "river upper-branch",
        "color": "river",
        "d": "M 172 1268 C 211 1284, 254 1302, 306 1318",
    },
    {
        "id": "KR-LOW-01",
        "name": "Krishna lower/main branch",
        "kind": "river lower-branch",
        "color": "river",
        "label": "Krishna lower/main branch",
        "d": "M 30 1438 C 76 1464, 122 1492, 178 1518",
    },
    {
        "id": "KR-LOW-02",
        "name": "Krishna lower/main branch",
        "kind": "river lower-branch",
        "color": "river",
        "d": "M 218 1538 C 278 1570, 344 1596, 422 1610",
    },
    {
        "id": "KR-MAIN-01",
        "name": "Krishna main city reach",
        "kind": "river main-branch",
        "color": "river",
        "d": "M 535.1 1622.2 L 646.5 1622.2",
    },
    {
        "id": "KR-MAIN-02",
        "name": "Krishna main city reach",
        "kind": "river main-branch",
        "color": "river",
        "d": "M 675.0 1622.2 L 790.0 1622.2",
    },
    {
        "id": "KR-MAIN-03",
        "name": "Krishna main city reach",
        "kind": "river main-branch",
        "color": "river",
        "d": "M 818.0 1622.2 L 936.0 1622.2",
    },
    {
        "id": "BD-CNL-01",
        "name": "Budameru Canal",
        "kind": "canal",
        "color": "canal",
        "d": "M 811.6 832.4 L 943.9 832.4",
    },
    {
        "id": "BD-CNL-02",
        "name": "Budameru Canal",
        "kind": "canal",
        "color": "canal",
        "d": "M 1150.8 832.4 L 1283.1 832.4",
    },
    {
        "id": "BD-CNL-03",
        "name": "Budameru Canal",
        "kind": "budameru",
        "color": "budameru",
        "d": "M 775.4 845.2 L 835.3 962.6",
    },
    {
        "id": "BD-CNL-04",
        "name": "Budameru Canal",
        "kind": "budameru",
        "color": "budameru",
        "d": "M 1244.2 1026.3 L 1393.6 1059.0",
    },
    {
        "id": "BD-RIV-01",
        "name": "Budameru River",
        "kind": "budameru",
        "color": "budameru",
        "d": "M 183.9 464.5 L 225.1 522.6",
    },
    {
        "id": "BD-RIV-02",
        "name": "Budameru River",
        "kind": "budameru",
        "color": "budameru",
        "d": "M 284.6 573.4 L 348.4 601.5",
    },
    {
        "id": "BD-RIV-03",
        "name": "Budameru River",
        "kind": "budameru",
        "color": "budameru",
        "d": "M 412.6 647.3 L 474.0 681.3",
    },
    {
        "id": "ELU-01",
        "name": "Eluru Canal",
        "kind": "major-canal",
        "color": "major",
        "d": "M 795.5 1063.3 L 925.1 995.5",
    },
    {
        "id": "ELU-02",
        "name": "Eluru Canal",
        "kind": "major-canal",
        "color": "major",
        "d": "M 1241.1 1037.9 L 1382.3 1073.4",
    },
    {
        "id": "KEMC-01",
        "name": "Krishna Eastern Main Canal",
        "kind": "major-canal",
        "color": "major",
        "d": "M 343.7 1307.3 L 405.8 1306.0",
    },
]


MARKERS = {
    "river": ("#0369a1", "head-river"),
    "canal": ("#b45309", "head-canal"),
    "budameru": ("#0f766e", "head-budameru"),
    "major": ("#92400e", "head-major"),
}


def marker(marker_id: str, color: str) -> str:
    return f"""
    <marker id="{marker_id}" markerUnits="userSpaceOnUse" viewBox="0 0 28 28"
      refX="25" refY="14" markerWidth="28" markerHeight="28" orient="auto">
      <path d="M3 3 L25 14 L3 25 L8.2 14 Z" fill="{color}" stroke="#ffffff" stroke-width="2.6" stroke-linejoin="round"/>
    </marker>"""


def arrow_group(spec: dict[str, str]) -> str:
    color, marker_id = MARKERS[spec["color"]]
    title = (
        f'{spec["id"]}: {spec["name"]}. Arrow head marks review flow '
        "direction; verify with official hydraulic records before design use."
    )
    label_block = ""
    if spec.get("label"):
        is_upper_krishna = "upper" in spec["name"].lower()
        label_y = "1188" if is_upper_krishna else "1588"
        label_x = "42" if is_upper_krishna else "520"
        text = escape(spec["label"])
        label_block = f"""
      <text class="flow-label halo-label" x="{label_x}" y="{label_y}">{text}</text>
      <text class="flow-label fill-label" x="{label_x}" y="{label_y}">{text}</text>"""
    return f"""
    <g class="major-flow-arrow {escape(spec['kind'])}" data-arrow-id="{escape(spec['id'])}" data-name="{escape(spec['name'])}">
      <title>{escape(title)}</title>
      <path class="arrow-halo" d="{spec['d']}"/>
      <path class="arrow-shadow" d="{spec['d']}"/>
      <path class="arrow-shaft" d="{spec['d']}" stroke="{color}" marker-end="url(#{marker_id})"/>{label_block}
    </g>"""


def build_svg() -> str:
    marker_defs = "\n".join(marker(marker_id, color) for color, marker_id in MARKERS.values())
    arrows = "\n".join(arrow_group(spec) for spec in ARROWS)
    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-label="Bounded Vijayawada river and canal flow arrows, including upper and lower Krishna branches">
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
      .upper-branch .arrow-shaft,
      .lower-branch .arrow-shaft,
      .main-branch .arrow-shaft {{
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
  <g id="flow-direction-arrows" data-source="bounded_operational_canvas" data-feature-count="{len(ARROWS)}">
{arrows}
  </g>
</svg>
"""


def main() -> None:
    OUT.write_text(build_svg(), encoding="utf-8")
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
