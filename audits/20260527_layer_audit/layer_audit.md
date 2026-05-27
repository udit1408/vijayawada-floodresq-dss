# Vijayawada DSS Single-Layer Audit

Generated: 2026-05-27 10:04:20

Target dashboard: `map_dashboard.html`

Base map: `assets/maps/base_context.png` (1700 x 1916)

## Summary

- Layers audited: 30
- PASS: 30
- WARN: 0
- FAIL: 0
- Browser plugin path: unavailable in this session; validation used static source parsing, local asset checks, and headless Chrome/local server smoke checks.

## Files

- CSV audit: `audits/20260527_layer_audit/layer_audit.csv`
- Visual gallery: `audits/20260527_layer_audit/layer_gallery.html`

## Layer Results

| # | Layer | Group | Verdict | Dimensions | Notes |
|---:|---|---|---|---|---|
| 1 | `scenario_envelope` | Flood results | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 2 | `administrative` | Administrative | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 3 | `roads` | Urban fabric | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 4 | `buildings_tum_gba` | Urban fabric | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 5 | `green_open_space` | Land surface | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 6 | `drainage` | Drainage | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 7 | `manholes` | Drainage | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 8 | `waterbodies` | Water system | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 9 | `canals_budameru` | Water system | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 10 | `flow_arrows` | Water system | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 11 | `terrain_flow_arrows` | Terrain / physics | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 12 | `budameru_breach_susceptibility` | Water system | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 13 | `pumps_outfalls` | Coupling | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 14 | `pump_connectors` | Coupling | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 15 | `mesh_refinement` | Model setup | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 16 | `lulc_proxy` | Land surface | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 17 | `terrain_dem` | Terrain / Hydroconditioning | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 18 | `terrain_hillshade` | Terrain / Hydroconditioning | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 19 | `terrain_slope` | Terrain / Hydroconditioning | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 20 | `hydroconditioned_dem_delta` | Terrain / Hydroconditioning | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 21 | `domain_continuity` | Model setup | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 22 | `physics_surface_class` | Physics inputs | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 23 | `spatial_manning_n` | Physics inputs | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 24 | `infiltration_capacity` | Physics inputs | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 25 | `soil_hydrologic_group_proxy` | Physics inputs | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 26 | `building_obstruction_fraction` | Physics inputs | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 27 | `conditioned_hydraulic_terrain` | Physics inputs | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 28 | `rtgs_hotspots` | RTGS AWARE | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 29 | `urban_ward_routine` | RTGS AWARE | **PASS** | 1700x1916 | wired and dimensionally aligned |
| 30 | `boundary_hydrographs` | Boundary forcing | **PASS** | 1700x1916 | wired and dimensionally aligned |
