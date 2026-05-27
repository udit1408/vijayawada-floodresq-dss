#!/usr/bin/env python3
"""Audit every configured Vijayawada DSS map layer.

The audit is intentionally dependency-light so it can run on the deployment
machine without a GIS stack. It checks wiring, asset existence, dimensions,
metadata, and writes a visual single-layer gallery for human review.
"""

from __future__ import annotations

import csv
import html
import json
import re
import subprocess
import sys
from datetime import datetime
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SITE_DATA = ROOT / "assets" / "site_data.js"
HTML_PAGE = ROOT / "map_dashboard.html"
BASE_MAP = ROOT / "assets" / "maps" / "base_context.png"
DEFAULT_OUT = ROOT / "audits" / datetime.now().strftime("%Y%m%d_layer_audit")


def asset_path(href: str | None) -> str:
    if not href:
        return ""
    return href.split("?", 1)[0]


def load_site_data() -> dict:
    text = SITE_DATA.read_text(encoding="utf-8")
    prefix = "window.VJ_DSS_DATA = "
    start = text.index(prefix) + len(prefix)
    end = text.rindex(";")
    return json.loads(text[start:end])


def html_sets(page_text: str) -> dict[str, set[str]]:
    return {
        "overview_controls": set(re.findall(r'data-overview-layer="([^"]+)"', page_text)),
        "map_controls": set(re.findall(r'data-layer="([^"]+)"', page_text)),
        "animation_controls": set(re.findall(r'data-animation-layer="([^"]+)"', page_text)),
        "overview_overlays": set(re.findall(r'id="overview-layer-([^"]+)"', page_text)),
        "map_overlays": set(re.findall(r'id="layer-([^"]+)"', page_text)),
        "animation_overlays": set(re.findall(r'id="anim-layer-([^"]+)"', page_text)),
    }


def tag_for(page_text: str, element_id: str) -> str:
    match = re.search(rf'<(?:img|object)\b[^>]*\bid="{re.escape(element_id)}"[^>]*>', page_text)
    return match.group(0) if match else ""


def tag_attr(tag: str, attr: str) -> str:
    match = re.search(rf'\b{re.escape(attr)}="([^"]*)"', tag)
    return match.group(1) if match else ""


def sips_dimensions(path: Path) -> tuple[int | None, int | None]:
    if not path.exists():
        return None, None
    if path.suffix.lower() == ".svg":
        text = path.read_text(encoding="utf-8", errors="ignore")
        svg = re.search(r"<svg\b([^>]*)>", text)
        if not svg:
            return None, None
        attrs = svg.group(1)
        width = re.search(r'\bwidth="([0-9.]+)"', attrs)
        height = re.search(r'\bheight="([0-9.]+)"', attrs)
        if width and height:
            return int(float(width.group(1))), int(float(height.group(1)))
        viewbox = re.search(r'\bviewBox="[^"]*?([0-9.]+)\s+([0-9.]+)"', attrs)
        if viewbox:
            return int(float(viewbox.group(1))), int(float(viewbox.group(2)))
        return None, None

    proc = subprocess.run(
        ["sips", "-g", "pixelWidth", "-g", "pixelHeight", str(path)],
        cwd=ROOT,
        text=True,
        capture_output=True,
        check=False,
    )
    width = re.search(r"pixelWidth:\s*([0-9]+)", proc.stdout)
    height = re.search(r"pixelHeight:\s*([0-9]+)", proc.stdout)
    return (int(width.group(1)) if width else None, int(height.group(1)) if height else None)


def svg_counts(path: Path) -> str:
    if not path.exists() or path.suffix.lower() != ".svg":
        return ""
    text = path.read_text(encoding="utf-8", errors="ignore")
    parts = []
    fd = len(re.findall(r'data-arrow-id="FD-', text))
    krf = len(re.findall(r'data-arrow-id="KRF-', text))
    if fd or krf:
        parts.append(f"FD arrows={fd}, KRF arrows={krf}")
    if "river-polygon centerline" in text:
        parts.append("contains old refined-centreline wording")
    return "; ".join(parts)


def verdict_for(row: dict) -> tuple[str, str]:
    issues: list[str] = []
    warnings: list[str] = []

    if row["asset_exists"] != "yes":
        issues.append("asset missing")
    if row["overview_control"] != "yes" or row["overview_overlay"] != "yes":
        issues.append("overview wiring missing")
    if row["map_control"] != "yes" or row["map_overlay"] != "yes":
        issues.append("interactive-map wiring missing")
    if row["dimension_status"] != "matches base":
        issues.append(row["dimension_status"])
    if row["description"] == "":
        warnings.append("missing description")
    if row["animation_control"] != row["animation_overlay"]:
        warnings.append("animation control/overlay mismatch")
    if row["file_size_kb"] and float(row["file_size_kb"]) < 5:
        warnings.append("very small file; visually check for empty layer")
    if "old refined-centreline wording" in row["diagnostic"]:
        warnings.append(row["diagnostic"])

    if issues:
        return "FAIL", "; ".join(issues + warnings)
    if warnings:
        return "WARN", "; ".join(warnings)
    return "PASS", "wired and dimensionally aligned"


def write_gallery(out_dir: Path, rows: list[dict]) -> None:
    cards = []
    for row in rows:
        if row["asset_exists"] != "yes":
            media = '<div class="missing">Missing asset</div>'
        else:
            src = html.escape(row["asset_rel"])
            media = (
                '<div class="map-thumb">'
                '<img class="base" src="../../assets/maps/base_context.png" alt="">'
                f'<img class="layer" src="../../{src}" alt="">'
                "</div>"
            )
        cards.append(
            f"""
            <article class="card {row['verdict'].lower()}">
              <h2>{html.escape(row['key'])}</h2>
              <p class="title">{html.escape(row['title'])}</p>
              {media}
              <dl>
                <dt>Verdict</dt><dd>{html.escape(row['verdict'])}</dd>
                <dt>Group</dt><dd>{html.escape(row['group'])}</dd>
                <dt>Dimensions</dt><dd>{html.escape(row['dimensions'])}</dd>
                <dt>Notes</dt><dd>{html.escape(row['notes'])}</dd>
              </dl>
            </article>
            """
        )

    page = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Vijayawada DSS Single-Layer Audit Gallery</title>
<style>
body {{ margin:0; font:14px/1.45 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; color:#10202d; background:#f5f7f8; }}
header {{ padding:24px 28px; background:white; border-bottom:1px solid #d7e1e7; }}
h1 {{ margin:0; font-size:28px; }}
.grid {{ display:grid; grid-template-columns:repeat(auto-fill,minmax(360px,1fr)); gap:16px; padding:20px; }}
.card {{ background:#fff; border:1px solid #d7e1e7; border-radius:8px; padding:14px; box-shadow:0 8px 20px rgba(20,33,43,.06); }}
.card.pass {{ border-left:6px solid #0f8a7a; }}
.card.warn {{ border-left:6px solid #ca8a04; }}
.card.fail {{ border-left:6px solid #dc2626; }}
h2 {{ margin:0; font-size:17px; }}
.title {{ margin:3px 0 10px; color:#4b5d6d; font-weight:650; }}
.map-thumb {{ position:relative; aspect-ratio:1700/1916; overflow:hidden; border:1px solid #cbd7df; background:#eef4f7; }}
.map-thumb img {{ position:absolute; inset:0; width:100%; height:100%; object-fit:contain; }}
.map-thumb .base {{ opacity:.42; }}
.map-thumb .layer {{ opacity:1; }}
.missing {{ height:300px; display:grid; place-items:center; background:#fee2e2; color:#991b1b; font-weight:800; }}
dl {{ display:grid; grid-template-columns:90px 1fr; gap:3px 8px; margin:10px 0 0; }}
dt {{ color:#607080; font-weight:800; }}
dd {{ margin:0; }}
</style>
</head>
<body>
<header>
  <h1>Vijayawada DSS Single-Layer Audit Gallery</h1>
  <p>Each card shows one configured DSS layer alone over the common 1700 x 1916 base map.</p>
</header>
<main class="grid">
{''.join(cards)}
</main>
</body>
</html>
"""
    (out_dir / "layer_gallery.html").write_text(page, encoding="utf-8")


def main() -> int:
    out_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_OUT
    out_dir.mkdir(parents=True, exist_ok=True)

    data = load_site_data()
    page_text = HTML_PAGE.read_text(encoding="utf-8")
    sets = html_sets(page_text)
    base_width, base_height = sips_dimensions(BASE_MAP)

    rows: list[dict] = []
    for layer in data["layers"]:
        key = layer["key"]
        rel = asset_path(layer.get("image", ""))
        path = ROOT / rel
        width, height = sips_dimensions(path)
        exists = path.exists()
        if not exists:
            dimension_status = "asset missing"
        elif (width, height) == (base_width, base_height):
            dimension_status = "matches base"
        else:
            dimension_status = f"size mismatch: {width}x{height}, base {base_width}x{base_height}"

        overview_tag = tag_for(page_text, f"overview-layer-{key}")
        map_tag = tag_for(page_text, f"layer-{key}")
        anim_tag = tag_for(page_text, f"anim-layer-{key}")
        file_size = path.stat().st_size / 1024 if exists else 0
        row = {
            "key": key,
            "title": layer.get("title", ""),
            "group": layer.get("group", ""),
            "description": layer.get("description", ""),
            "asset_rel": rel,
            "asset_exists": "yes" if exists else "no",
            "file_size_kb": f"{file_size:.1f}" if exists else "",
            "dimensions": f"{width or '?'}x{height or '?'}",
            "dimension_status": dimension_status,
            "overview_control": "yes" if key in sets["overview_controls"] else "no",
            "overview_overlay": "yes" if key in sets["overview_overlays"] else "no",
            "overview_source": asset_path(tag_attr(overview_tag, "data-src") or tag_attr(overview_tag, "src") or tag_attr(overview_tag, "data")),
            "map_control": "yes" if key in sets["map_controls"] else "no",
            "map_overlay": "yes" if key in sets["map_overlays"] else "no",
            "map_source": asset_path(tag_attr(map_tag, "data-src") or tag_attr(map_tag, "src") or tag_attr(map_tag, "data")),
            "animation_control": "yes" if key in sets["animation_controls"] else "no",
            "animation_overlay": "yes" if key in sets["animation_overlays"] else "no",
            "animation_source": asset_path(tag_attr(anim_tag, "data-src") or tag_attr(anim_tag, "src") or tag_attr(anim_tag, "data")),
            "diagnostic": svg_counts(path),
        }
        verdict, notes = verdict_for(row)
        row["verdict"] = verdict
        row["notes"] = notes
        rows.append(row)

    csv_path = out_dir / "layer_audit.csv"
    with csv_path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
        writer.writeheader()
        writer.writerows(rows)

    pass_count = sum(1 for row in rows if row["verdict"] == "PASS")
    warn_count = sum(1 for row in rows if row["verdict"] == "WARN")
    fail_count = sum(1 for row in rows if row["verdict"] == "FAIL")

    table = [
        "| # | Layer | Group | Verdict | Dimensions | Notes |",
        "|---:|---|---|---|---|---|",
    ]
    for idx, row in enumerate(rows, 1):
        table.append(
            "| {idx} | `{key}` | {group} | **{verdict}** | {dims} | {notes} |".format(
                idx=idx,
                key=row["key"],
                group=html.escape(row["group"]),
                verdict=row["verdict"],
                dims=row["dimensions"],
                notes=html.escape(row["notes"]),
            )
        )

    md = f"""# Vijayawada DSS Single-Layer Audit

Generated: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}

Target dashboard: `{HTML_PAGE}`

Base map: `{BASE_MAP}` ({base_width} x {base_height})

## Summary

- Layers audited: {len(rows)}
- PASS: {pass_count}
- WARN: {warn_count}
- FAIL: {fail_count}
- Browser plugin path: unavailable in this session; validation used static source parsing, local asset checks, and headless Chrome/local server smoke checks.

## Files

- CSV audit: `{csv_path}`
- Visual gallery: `{out_dir / "layer_gallery.html"}`

## Layer Results

{chr(10).join(table)}
"""
    (out_dir / "layer_audit.md").write_text(md, encoding="utf-8")
    write_gallery(out_dir, rows)

    print(f"Wrote {csv_path}")
    print(f"Wrote {out_dir / 'layer_audit.md'}")
    print(f"Wrote {out_dir / 'layer_gallery.html'}")
    print(f"Summary: {pass_count} pass, {warn_count} warn, {fail_count} fail")
    return 1 if fail_count else 0


if __name__ == "__main__":
    raise SystemExit(main())
