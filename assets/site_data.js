window.VJ_DSS_DATA = {
  "asset_version": "20260504062612",
  "map": {
    "width": 1700,
    "height": 1916,
    "bounds_utm44n": [
      455909.1916,
      1821868.8515,
      466289.1916,
      1833568.8515
    ]
  },
  "source_batch_label": "RTGS AWARE verification run: NRSC Budameru inflow hydrograph with spatial physics layers",
  "metrics": {
    "scenario_count": 18,
    "max_envelope_depth_m": 5.807892322540283,
    "max_wet_area_ha": 5127.545,
    "runtime_min": 655.9549000000001,
    "top_scenario": "hist12h_hist_extreme_2001_2025_12h_high_q100"
  },
  "layers": [
    {
      "key": "scenario_envelope",
      "title": "Scenario max-depth envelope",
      "image": "assets/maps/scenario_envelope_overlay.png?v=20260504062612",
      "kind": "image",
      "default_on": false,
      "group": "Flood results",
      "description": "Maximum depth envelope from all 18 scenarios.",
      "swatch": "#2563eb"
    },
    {
      "key": "administrative",
      "title": "Municipal boundary and wards",
      "image": "assets/maps/styled/administrative_styled.png?v=20260504062612",
      "kind": "image",
      "default_on": true,
      "group": "Administrative",
      "description": "Municipal boundary and 71 revenue wards.",
      "swatch": "#111827"
    },
    {
      "key": "roads",
      "title": "Road network",
      "image": "assets/maps/styled/roads_styled.png?v=20260504062612",
      "kind": "image",
      "default_on": false,
      "group": "Urban fabric",
      "description": "Local road network from source shapefile.",
      "swatch": "#4b5563"
    },
    {
      "key": "buildings_tum_gba",
      "title": "Building footprints (TUM GlobalBuildingAtlas)",
      "image": "assets/maps/styled/buildings_tum_gba_styled.png?v=20260504062612",
      "kind": "image",
      "default_on": true,
      "group": "Urban fabric",
      "description": "TUM GlobalBuildingAtlas LoD1 building polygons clipped to Vijayawada municipal boundary.",
      "swatch": "#8b7355"
    },
    {
      "key": "green_open_space",
      "title": "Green and pervious open areas",
      "image": "assets/maps/green_open_space.png?v=20260504062612",
      "group": "Land surface",
      "kind": "raster_overlay",
      "default_on": true,
      "swatch": "#22c55e",
      "description": "Tree cover, shrub/grass, cropland, sparse pervious and wetland cells from the surface-physics classification."
    },
    {
      "key": "drainage",
      "title": "Drainage network",
      "image": "assets/maps/styled/drainage_styled.png?v=20260504062612",
      "kind": "image",
      "default_on": true,
      "group": "Drainage",
      "description": "Mapped drainage links used for 1D-drainage readiness and sink sensitivity.",
      "swatch": "#15803d"
    },
    {
      "key": "manholes",
      "title": "Manholes",
      "image": "assets/maps/styled/manholes_styled.png?v=20260504062612",
      "kind": "image",
      "default_on": false,
      "group": "Drainage",
      "description": "Mapped manhole inventory.",
      "swatch": "#0f3d2e"
    },
    {
      "key": "waterbodies",
      "title": "Krishna, reservoir and Budameru water bodies",
      "image": "assets/maps/waterbodies.png?v=20260504062612",
      "kind": "image",
      "default_on": true,
      "group": "Water system",
      "description": "Local waterbody polygons.",
      "swatch": "#0ea5e9"
    },
    {
      "key": "canals_budameru",
      "title": "Major canals and extended Budameru",
      "image": "assets/maps/styled/canals_budameru_styled.png?v=20260504062612",
      "kind": "image",
      "default_on": true,
      "group": "Water system",
      "description": "OSM canal review alignments plus extended Budameru rivulet/canal.",
      "swatch": "#b45309"
    },
    {
      "key": "flow_arrows",
      "title": "Major flow arrows (direction of flow)",
      "image": "assets/maps/flow_arrows_identified.svg?v=20260526_major_flow_arrows",
      "kind": "image",
      "default_on": true,
      "group": "Water system",
      "description": "Major river and canal flow arrows from the identified review layer; arrow heads mark the direction of flow.",
      "swatch": "#b45309"
    },
    {
      "key": "budameru_breach_susceptibility",
      "title": "Budameru breach susceptibility",
      "image": "assets/maps/budameru_breach_susceptibility.png?v=20260504062612",
      "kind": "image",
      "default_on": true,
      "group": "Water system",
      "description": "Budameru breach-susceptibility review layer for boundary and inflow-risk context.",
      "swatch": "#be123c"
    },
    {
      "key": "pumps_outfalls",
      "title": "Pumps, outfalls and exchange points",
      "image": "assets/maps/styled/pumps_outfalls_styled.png?v=20260504062612",
      "kind": "image",
      "default_on": true,
      "group": "Coupling",
      "description": "Drainage pumps, candidate outfalls and FloodRESQ exchange points.",
      "swatch": "#ea580c"
    },
    {
      "key": "pump_connectors",
      "title": "Pump connection review lines",
      "image": "assets/maps/styled/pump_connectors_styled.png?v=20260504062612",
      "kind": "image",
      "default_on": false,
      "group": "Coupling",
      "description": "Pump-to-drain and pump-to-waterbody provisional connectors.",
      "swatch": "#7c3aed"
    },
    {
      "key": "mesh_refinement",
      "title": "FloodRESQ domain and adaptive refinement zones",
      "image": "assets/maps/styled/mesh_refinement_styled.png?v=20260504062612",
      "kind": "image",
      "default_on": false,
      "group": "Model setup",
      "description": "2D computation domain plus river, canal, pump, drainage and high-exposure urban refinement zones.",
      "swatch": "#db2777"
    },
    {
      "key": "lulc_proxy",
      "title": "LULC proxy: buildings, roads, drainage and water",
      "image": "assets/maps/lulc_proxy.png?v=20260504062612",
      "kind": "image",
      "default_on": false,
      "group": "Land surface",
      "description": "Proxy land-surface classes from TUM buildings, road network, drainage corridors and merged waterbodies.",
      "swatch": "#a855f7"
    },
    {
      "key": "terrain_dem",
      "title": "DEM/DTM model surface",
      "image": "assets/maps/terrain_dem.png?v=20260504062612",
      "kind": "image",
      "default_on": false,
      "group": "Terrain / Hydroconditioning",
      "description": "20 m clipped DEM/DTM model surface. Current source is DEM_VMB with domain gaps filled for modeling continuity.",
      "swatch": "#84cc16"
    },
    {
      "key": "terrain_hillshade",
      "title": "Terrain hillshade",
      "image": "assets/maps/terrain_hillshade.png?v=20260504062612",
      "kind": "image",
      "default_on": false,
      "group": "Terrain / Hydroconditioning",
      "description": "Hillshade derived from the gap-filled 20 m terrain surface.",
      "swatch": "#737373"
    },
    {
      "key": "terrain_slope",
      "title": "Slope / local relief",
      "image": "assets/maps/terrain_slope.png?v=20260504062612",
      "kind": "image",
      "default_on": false,
      "group": "Terrain / Hydroconditioning",
      "description": "Slope derivative used to review terrain gradients, levee-like breaks and flow-path sensitivity.",
      "swatch": "#c2410c"
    },
    {
      "key": "hydroconditioned_dem_delta",
      "title": "Hydroconditioned DEM burn-in",
      "image": "assets/maps/hydroconditioned_dem_delta.png?v=20260504062612",
      "kind": "image",
      "default_on": false,
      "group": "Terrain / Hydroconditioning",
      "description": "Draft burn-in from merged waterbodies, major canals, Budameru and drainage corridors.",
      "swatch": "#a16207"
    },
    {
      "key": "domain_continuity",
      "title": "Domain continuity QA",
      "image": "assets/maps/domain_continuity.png?v=20260504062612",
      "kind": "image",
      "default_on": true,
      "group": "Model setup",
      "description": "DEM validity, filled model-surface continuity, hydro-corridor connectivity and Budameru boundary point.",
      "swatch": "#16a34a"
    },
    {
      "key": "physics_surface_class",
      "title": "Manning/LULC surface partition",
      "image": "assets/maps/physics_surface_class.svg?v=20260504062612",
      "kind": "vector_svg",
      "default_on": false,
      "group": "Physics inputs",
      "description": "Surface classes used to assign roughness, infiltration and obstruction behavior.",
      "swatch": "#9333ea"
    },
    {
      "key": "spatial_manning_n",
      "title": "Spatial Manning n roughness",
      "image": "assets/maps/spatial_manning_n.png?v=20260504062612",
      "kind": "image",
      "default_on": false,
      "group": "Physics inputs",
      "description": "Manning n raster applied in the FloodRESQ run, including roads, buildings, vegetation, water and open corridors.",
      "swatch": "#65a30d"
    },
    {
      "key": "infiltration_capacity",
      "title": "Infiltration capacity",
      "image": "assets/maps/infiltration_capacity.png?v=20260504062612",
      "kind": "image",
      "default_on": false,
      "group": "Physics inputs",
      "description": "Spatial infiltration-capacity proxy derived from hydrologic-soil-group proxy and land-surface class.",
      "swatch": "#84cc16"
    },
    {
      "key": "soil_hydrologic_group_proxy",
      "title": "Hydrologic soil group proxy",
      "image": "assets/maps/soil_hydrologic_group_proxy.png?v=20260504062612",
      "kind": "image",
      "default_on": false,
      "group": "Physics inputs",
      "description": "Hydrologic soil groups represented as a replaceable proxy until authoritative soil classification is added.",
      "swatch": "#ca8a04"
    },
    {
      "key": "building_obstruction_fraction",
      "title": "Building obstruction fraction",
      "image": "assets/maps/building_obstruction_fraction.png?v=20260504062612",
      "kind": "image",
      "default_on": false,
      "group": "Physics inputs",
      "description": "Rasterized building-footprint fraction used for building obstruction and high roughness.",
      "swatch": "#7f1d1d"
    },
    {
      "key": "conditioned_hydraulic_terrain",
      "title": "Conditioned hydraulic terrain",
      "image": "assets/maps/conditioned_hydraulic_terrain.png?v=20260504062612",
      "kind": "image",
      "default_on": false,
      "group": "Physics inputs",
      "description": "Hydroconditioned terrain surface used by the current physics-enabled run.",
      "swatch": "#4d7c0f"
    },
    {
      "key": "rtgs_hotspots",
      "title": "RTGS AWARE flood hotspots and NRSC inflow boundary",
      "image": "assets/maps/styled/rtgs_aware_hotspots_styled.png?v=f96fb67",
      "kind": "image",
      "default_on": true,
      "group": "RTGS AWARE",
      "description": "Target symbols for top modeled flood hotspots and the Budameru NRSC inflow boundary condition point.",
      "swatch": "#dc2626"
    },
    {
      "key": "urban_ward_routine",
      "title": "Ward-level response routine",
      "image": "assets/maps/urban_ward_routine.png?v=20260504062612",
      "group": "RTGS AWARE",
      "kind": "raster_overlay",
      "default_on": false,
      "swatch": "#7c3aed",
      "description": "Ward-scale review layer for operational response prioritization."
    },
    {
      "key": "boundary_hydrographs",
      "title": "Boundary hydrographs and stage templates",
      "image": "assets/maps/boundary_hydrographs.svg?v=20260504062612",
      "kind": "vector_svg",
      "default_on": false,
      "group": "Boundary forcing",
      "description": "Boundary inflow and river/canal stage targets; shown as a chart panel on Overview.",
      "swatch": "#f59e0b"
    }
  ],
  "scenarios": [
    {
      "run_id": "hist12h_hist_2024_budameru_peak_12h_elevated_q060",
      "title": "Observed Aug 2024 rainfall | Elevated river/canal state | Budameru inflow 60% | 77 mm rainfall",
      "image": "assets/maps/scenarios/depth/hist12h_hist_2024_budameru_peak_12h_elevated_q060.png?v=20260504062612",
      "images": {
        "depth": "assets/maps/scenarios/depth/hist12h_hist_2024_budameru_peak_12h_elevated_q060.png?v=20260504062612",
        "extent": "assets/maps/scenarios/extent/hist12h_hist_2024_budameru_peak_12h_elevated_q060.png?v=20260504062612",
        "speed": "assets/maps/scenarios/speed/hist12h_hist_2024_budameru_peak_12h_elevated_q060.png?v=20260504062612"
      },
      "rainfall_total_mm": 77.0483,
      "profile": "Elevated / Budameru 60%",
      "duration_min": 720.0,
      "source_status": "historical hourly rainfall plus scaled NRSC Budameru hydrograph and boundary-state sensitivity",
      "calibration_observation_target": "",
      "max_depth_m": 5.2673,
      "wet_area_ha": 4265.069,
      "final_surface_volume_m3": 48634321.24,
      "computed_overlay_max_depth_m": 5.258768558502197,
      "computed_extent_area_ha": 4411.53,
      "max_speed_mps": 2.6932,
      "p95_speed_mps": 0.902153730392456,
      "raw_outputs": {
        "max_depth_png": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_elevated_q060/hist12h_hist_2024_budameru_peak_12h_elevated_q060_max_depth_full_scale.png",
        "max_depth_pdf": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_elevated_q060/hist12h_hist_2024_budameru_peak_12h_elevated_q060_max_depth_full_scale.pdf",
        "max_depth_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_elevated_q060/hist12h_hist_2024_budameru_peak_12h_elevated_q060_max_depth_m_30m.tif",
        "max_speed_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_elevated_q060/hist12h_hist_2024_budameru_peak_12h_elevated_q060_max_speed_mps_30m.tif"
      }
    },
    {
      "run_id": "hist12h_hist_2024_budameru_peak_12h_elevated_q080",
      "title": "Observed Aug 2024 rainfall | Elevated river/canal state | Budameru inflow 80% | 77 mm rainfall",
      "image": "assets/maps/scenarios/depth/hist12h_hist_2024_budameru_peak_12h_elevated_q080.png?v=20260504062612",
      "images": {
        "depth": "assets/maps/scenarios/depth/hist12h_hist_2024_budameru_peak_12h_elevated_q080.png?v=20260504062612",
        "extent": "assets/maps/scenarios/extent/hist12h_hist_2024_budameru_peak_12h_elevated_q080.png?v=20260504062612",
        "speed": "assets/maps/scenarios/speed/hist12h_hist_2024_budameru_peak_12h_elevated_q080.png?v=20260504062612"
      },
      "rainfall_total_mm": 77.0483,
      "profile": "Elevated / Budameru 80%",
      "duration_min": 720.0,
      "source_status": "historical hourly rainfall plus scaled NRSC Budameru hydrograph and boundary-state sensitivity",
      "calibration_observation_target": "",
      "max_depth_m": 5.5557,
      "wet_area_ha": 4520.025,
      "final_surface_volume_m3": 61471596.559,
      "computed_overlay_max_depth_m": 5.547313213348389,
      "computed_extent_area_ha": 4700.88,
      "max_speed_mps": 2.8803,
      "p95_speed_mps": 0.9122257828712463,
      "raw_outputs": {
        "max_depth_png": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_elevated_q080/hist12h_hist_2024_budameru_peak_12h_elevated_q080_max_depth_full_scale.png",
        "max_depth_pdf": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_elevated_q080/hist12h_hist_2024_budameru_peak_12h_elevated_q080_max_depth_full_scale.pdf",
        "max_depth_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_elevated_q080/hist12h_hist_2024_budameru_peak_12h_elevated_q080_max_depth_m_30m.tif",
        "max_speed_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_elevated_q080/hist12h_hist_2024_budameru_peak_12h_elevated_q080_max_speed_mps_30m.tif"
      }
    },
    {
      "run_id": "hist12h_hist_2024_budameru_peak_12h_elevated_q100",
      "title": "Observed Aug 2024 rainfall | Elevated river/canal state | Budameru inflow 100% | 77 mm rainfall",
      "image": "assets/maps/scenarios/depth/hist12h_hist_2024_budameru_peak_12h_elevated_q100.png?v=20260504062612",
      "images": {
        "depth": "assets/maps/scenarios/depth/hist12h_hist_2024_budameru_peak_12h_elevated_q100.png?v=20260504062612",
        "extent": "assets/maps/scenarios/extent/hist12h_hist_2024_budameru_peak_12h_elevated_q100.png?v=20260504062612",
        "speed": "assets/maps/scenarios/speed/hist12h_hist_2024_budameru_peak_12h_elevated_q100.png?v=20260504062612"
      },
      "rainfall_total_mm": 77.0483,
      "profile": "Elevated / Budameru 100%",
      "duration_min": 720.0,
      "source_status": "historical hourly rainfall plus scaled NRSC Budameru hydrograph and boundary-state sensitivity",
      "calibration_observation_target": "",
      "max_depth_m": 5.7967,
      "wet_area_ha": 4803.861,
      "final_surface_volume_m3": 74312570.849,
      "computed_overlay_max_depth_m": 5.788512706756592,
      "computed_extent_area_ha": 4938.66,
      "max_speed_mps": 3.0446,
      "p95_speed_mps": 0.9225323796272278,
      "raw_outputs": {
        "max_depth_png": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_elevated_q100/hist12h_hist_2024_budameru_peak_12h_elevated_q100_max_depth_full_scale.png",
        "max_depth_pdf": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_elevated_q100/hist12h_hist_2024_budameru_peak_12h_elevated_q100_max_depth_full_scale.pdf",
        "max_depth_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_elevated_q100/hist12h_hist_2024_budameru_peak_12h_elevated_q100_max_depth_m_30m.tif",
        "max_speed_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_elevated_q100/hist12h_hist_2024_budameru_peak_12h_elevated_q100_max_speed_mps_30m.tif"
      }
    },
    {
      "run_id": "hist12h_hist_2024_budameru_peak_12h_high_q060",
      "title": "Observed Aug 2024 rainfall | High river/canal state | Budameru inflow 60% | 77 mm rainfall",
      "image": "assets/maps/scenarios/depth/hist12h_hist_2024_budameru_peak_12h_high_q060.png?v=20260504062612",
      "images": {
        "depth": "assets/maps/scenarios/depth/hist12h_hist_2024_budameru_peak_12h_high_q060.png?v=20260504062612",
        "extent": "assets/maps/scenarios/extent/hist12h_hist_2024_budameru_peak_12h_high_q060.png?v=20260504062612",
        "speed": "assets/maps/scenarios/speed/hist12h_hist_2024_budameru_peak_12h_high_q060.png?v=20260504062612"
      },
      "rainfall_total_mm": 77.0483,
      "profile": "High / Budameru 60%",
      "duration_min": 720.0,
      "source_status": "historical hourly rainfall plus scaled NRSC Budameru hydrograph and boundary-state sensitivity",
      "calibration_observation_target": "",
      "max_depth_m": 5.268,
      "wet_area_ha": 4349.06,
      "final_surface_volume_m3": 53465764.578,
      "computed_overlay_max_depth_m": 5.25946569442749,
      "computed_extent_area_ha": 4484.25,
      "max_speed_mps": 2.6863,
      "p95_speed_mps": 1.170282006263733,
      "raw_outputs": {
        "max_depth_png": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_high_q060/hist12h_hist_2024_budameru_peak_12h_high_q060_max_depth_full_scale.png",
        "max_depth_pdf": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_high_q060/hist12h_hist_2024_budameru_peak_12h_high_q060_max_depth_full_scale.pdf",
        "max_depth_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_high_q060/hist12h_hist_2024_budameru_peak_12h_high_q060_max_depth_m_30m.tif",
        "max_speed_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_high_q060/hist12h_hist_2024_budameru_peak_12h_high_q060_max_speed_mps_30m.tif"
      }
    },
    {
      "run_id": "hist12h_hist_2024_budameru_peak_12h_high_q080",
      "title": "Observed Aug 2024 rainfall | High river/canal state | Budameru inflow 80% | 77 mm rainfall",
      "image": "assets/maps/scenarios/depth/hist12h_hist_2024_budameru_peak_12h_high_q080.png?v=20260504062612",
      "images": {
        "depth": "assets/maps/scenarios/depth/hist12h_hist_2024_budameru_peak_12h_high_q080.png?v=20260504062612",
        "extent": "assets/maps/scenarios/extent/hist12h_hist_2024_budameru_peak_12h_high_q080.png?v=20260504062612",
        "speed": "assets/maps/scenarios/speed/hist12h_hist_2024_budameru_peak_12h_high_q080.png?v=20260504062612"
      },
      "rainfall_total_mm": 77.0483,
      "profile": "High / Budameru 80%",
      "duration_min": 720.0,
      "source_status": "historical hourly rainfall plus scaled NRSC Budameru hydrograph and boundary-state sensitivity",
      "calibration_observation_target": "",
      "max_depth_m": 5.5562,
      "wet_area_ha": 4631.037,
      "final_surface_volume_m3": 66303238.574,
      "computed_overlay_max_depth_m": 5.547834396362305,
      "computed_extent_area_ha": 4809.78,
      "max_speed_mps": 2.8733,
      "p95_speed_mps": 1.169156789779663,
      "raw_outputs": {
        "max_depth_png": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_high_q080/hist12h_hist_2024_budameru_peak_12h_high_q080_max_depth_full_scale.png",
        "max_depth_pdf": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_high_q080/hist12h_hist_2024_budameru_peak_12h_high_q080_max_depth_full_scale.pdf",
        "max_depth_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_high_q080/hist12h_hist_2024_budameru_peak_12h_high_q080_max_depth_m_30m.tif",
        "max_speed_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_high_q080/hist12h_hist_2024_budameru_peak_12h_high_q080_max_speed_mps_30m.tif"
      }
    },
    {
      "run_id": "hist12h_hist_2024_budameru_peak_12h_high_q100",
      "title": "Observed Aug 2024 rainfall | High river/canal state | Budameru inflow 100% | 77 mm rainfall",
      "image": "assets/maps/scenarios/depth/hist12h_hist_2024_budameru_peak_12h_high_q100.png?v=20260504062612",
      "images": {
        "depth": "assets/maps/scenarios/depth/hist12h_hist_2024_budameru_peak_12h_high_q100.png?v=20260504062612",
        "extent": "assets/maps/scenarios/extent/hist12h_hist_2024_budameru_peak_12h_high_q100.png?v=20260504062612",
        "speed": "assets/maps/scenarios/speed/hist12h_hist_2024_budameru_peak_12h_high_q100.png?v=20260504062612"
      },
      "rainfall_total_mm": 77.0483,
      "profile": "High / Budameru 100%",
      "duration_min": 720.0,
      "source_status": "historical hourly rainfall plus scaled NRSC Budameru hydrograph and boundary-state sensitivity",
      "calibration_observation_target": "",
      "max_depth_m": 5.7983,
      "wet_area_ha": 4872.702,
      "final_surface_volume_m3": 79144760.849,
      "computed_overlay_max_depth_m": 5.790104866027832,
      "computed_extent_area_ha": 4998.6,
      "max_speed_mps": 3.0389,
      "p95_speed_mps": 1.1630566120147705,
      "raw_outputs": {
        "max_depth_png": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_high_q100/hist12h_hist_2024_budameru_peak_12h_high_q100_max_depth_full_scale.png",
        "max_depth_pdf": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_high_q100/hist12h_hist_2024_budameru_peak_12h_high_q100_max_depth_full_scale.pdf",
        "max_depth_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_high_q100/hist12h_hist_2024_budameru_peak_12h_high_q100_max_depth_m_30m.tif",
        "max_speed_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_high_q100/hist12h_hist_2024_budameru_peak_12h_high_q100_max_speed_mps_30m.tif"
      }
    },
    {
      "run_id": "hist12h_hist_2024_budameru_peak_12h_normal_q060",
      "title": "Observed Aug 2024 rainfall | Normal river/canal state | Budameru inflow 60% | 77 mm rainfall",
      "image": "assets/maps/scenarios/depth/hist12h_hist_2024_budameru_peak_12h_normal_q060.png?v=20260504062612",
      "images": {
        "depth": "assets/maps/scenarios/depth/hist12h_hist_2024_budameru_peak_12h_normal_q060.png?v=20260504062612",
        "extent": "assets/maps/scenarios/extent/hist12h_hist_2024_budameru_peak_12h_normal_q060.png?v=20260504062612",
        "speed": "assets/maps/scenarios/speed/hist12h_hist_2024_budameru_peak_12h_normal_q060.png?v=20260504062612"
      },
      "rainfall_total_mm": 77.0483,
      "profile": "Normal / Budameru 60%",
      "duration_min": 720.0,
      "source_status": "historical hourly rainfall plus scaled NRSC Budameru hydrograph and boundary-state sensitivity",
      "calibration_observation_target": "",
      "max_depth_m": 5.2666,
      "wet_area_ha": 4138.882,
      "final_surface_volume_m3": 44484659.617,
      "computed_overlay_max_depth_m": 5.258073806762695,
      "computed_extent_area_ha": 4274.01,
      "max_speed_mps": 2.6932,
      "p95_speed_mps": 0.6388617157936096,
      "raw_outputs": {
        "max_depth_png": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_normal_q060/hist12h_hist_2024_budameru_peak_12h_normal_q060_max_depth_full_scale.png",
        "max_depth_pdf": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_normal_q060/hist12h_hist_2024_budameru_peak_12h_normal_q060_max_depth_full_scale.pdf",
        "max_depth_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_normal_q060/hist12h_hist_2024_budameru_peak_12h_normal_q060_max_depth_m_30m.tif",
        "max_speed_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_normal_q060/hist12h_hist_2024_budameru_peak_12h_normal_q060_max_speed_mps_30m.tif"
      }
    },
    {
      "run_id": "hist12h_hist_2024_budameru_peak_12h_normal_q080",
      "title": "Observed Aug 2024 rainfall | Normal river/canal state | Budameru inflow 80% | 77 mm rainfall",
      "image": "assets/maps/scenarios/depth/hist12h_hist_2024_budameru_peak_12h_normal_q080.png?v=20260504062612",
      "images": {
        "depth": "assets/maps/scenarios/depth/hist12h_hist_2024_budameru_peak_12h_normal_q080.png?v=20260504062612",
        "extent": "assets/maps/scenarios/extent/hist12h_hist_2024_budameru_peak_12h_normal_q080.png?v=20260504062612",
        "speed": "assets/maps/scenarios/speed/hist12h_hist_2024_budameru_peak_12h_normal_q080.png?v=20260504062612"
      },
      "rainfall_total_mm": 77.0483,
      "profile": "Normal / Budameru 80%",
      "duration_min": 720.0,
      "source_status": "historical hourly rainfall plus scaled NRSC Budameru hydrograph and boundary-state sensitivity",
      "calibration_observation_target": "",
      "max_depth_m": 5.5552,
      "wet_area_ha": 4429.607,
      "final_surface_volume_m3": 57320896.697,
      "computed_overlay_max_depth_m": 5.546832084655762,
      "computed_extent_area_ha": 4569.66,
      "max_speed_mps": 2.8853,
      "p95_speed_mps": 0.6794390082359314,
      "raw_outputs": {
        "max_depth_png": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_normal_q080/hist12h_hist_2024_budameru_peak_12h_normal_q080_max_depth_full_scale.png",
        "max_depth_pdf": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_normal_q080/hist12h_hist_2024_budameru_peak_12h_normal_q080_max_depth_full_scale.pdf",
        "max_depth_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_normal_q080/hist12h_hist_2024_budameru_peak_12h_normal_q080_max_depth_m_30m.tif",
        "max_speed_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_normal_q080/hist12h_hist_2024_budameru_peak_12h_normal_q080_max_speed_mps_30m.tif"
      }
    },
    {
      "run_id": "hist12h_hist_2024_budameru_peak_12h_normal_q100",
      "title": "Observed Aug 2024 rainfall | Normal river/canal state | Budameru inflow 100% | 77 mm rainfall",
      "image": "assets/maps/scenarios/depth/hist12h_hist_2024_budameru_peak_12h_normal_q100.png?v=20260504062612",
      "images": {
        "depth": "assets/maps/scenarios/depth/hist12h_hist_2024_budameru_peak_12h_normal_q100.png?v=20260504062612",
        "extent": "assets/maps/scenarios/extent/hist12h_hist_2024_budameru_peak_12h_normal_q100.png?v=20260504062612",
        "speed": "assets/maps/scenarios/speed/hist12h_hist_2024_budameru_peak_12h_normal_q100.png?v=20260504062612"
      },
      "rainfall_total_mm": 77.0483,
      "profile": "Normal / Budameru 100%",
      "duration_min": 720.0,
      "source_status": "historical hourly rainfall plus scaled NRSC Budameru hydrograph and boundary-state sensitivity",
      "calibration_observation_target": "",
      "max_depth_m": 5.7953,
      "wet_area_ha": 4713.744,
      "final_surface_volume_m3": 70160957.352,
      "computed_overlay_max_depth_m": 5.787052631378174,
      "computed_extent_area_ha": 4818.06,
      "max_speed_mps": 3.0492,
      "p95_speed_mps": 0.7230374217033386,
      "raw_outputs": {
        "max_depth_png": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_normal_q100/hist12h_hist_2024_budameru_peak_12h_normal_q100_max_depth_full_scale.png",
        "max_depth_pdf": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_normal_q100/hist12h_hist_2024_budameru_peak_12h_normal_q100_max_depth_full_scale.pdf",
        "max_depth_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_normal_q100/hist12h_hist_2024_budameru_peak_12h_normal_q100_max_depth_m_30m.tif",
        "max_speed_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_2024_budameru_peak_12h_normal_q100/hist12h_hist_2024_budameru_peak_12h_normal_q100_max_speed_mps_30m.tif"
      }
    },
    {
      "run_id": "hist12h_hist_extreme_2001_2025_12h_elevated_q060",
      "title": "Historical extreme rainfall | Elevated river/canal state | Budameru inflow 60% | 133 mm rainfall",
      "image": "assets/maps/scenarios/depth/hist12h_hist_extreme_2001_2025_12h_elevated_q060.png?v=20260504062612",
      "images": {
        "depth": "assets/maps/scenarios/depth/hist12h_hist_extreme_2001_2025_12h_elevated_q060.png?v=20260504062612",
        "extent": "assets/maps/scenarios/extent/hist12h_hist_extreme_2001_2025_12h_elevated_q060.png?v=20260504062612",
        "speed": "assets/maps/scenarios/speed/hist12h_hist_extreme_2001_2025_12h_elevated_q060.png?v=20260504062612"
      },
      "rainfall_total_mm": 132.7025,
      "profile": "Elevated / Budameru 60%",
      "duration_min": 720.0,
      "source_status": "historical hourly rainfall plus scaled NRSC Budameru hydrograph and boundary-state sensitivity",
      "calibration_observation_target": "",
      "max_depth_m": 5.2888,
      "wet_area_ha": 4604.923,
      "final_surface_volume_m3": 52902764.938,
      "computed_overlay_max_depth_m": 5.280393600463867,
      "computed_extent_area_ha": 4932.0,
      "max_speed_mps": 2.6931,
      "p95_speed_mps": 0.8972697257995605,
      "raw_outputs": {
        "max_depth_png": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_elevated_q060/hist12h_hist_extreme_2001_2025_12h_elevated_q060_max_depth_full_scale.png",
        "max_depth_pdf": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_elevated_q060/hist12h_hist_extreme_2001_2025_12h_elevated_q060_max_depth_full_scale.pdf",
        "max_depth_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_elevated_q060/hist12h_hist_extreme_2001_2025_12h_elevated_q060_max_depth_m_30m.tif",
        "max_speed_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_elevated_q060/hist12h_hist_extreme_2001_2025_12h_elevated_q060_max_speed_mps_30m.tif"
      }
    },
    {
      "run_id": "hist12h_hist_extreme_2001_2025_12h_elevated_q080",
      "title": "Historical extreme rainfall | Elevated river/canal state | Budameru inflow 80% | 133 mm rainfall",
      "image": "assets/maps/scenarios/depth/hist12h_hist_extreme_2001_2025_12h_elevated_q080.png?v=20260504062612",
      "images": {
        "depth": "assets/maps/scenarios/depth/hist12h_hist_extreme_2001_2025_12h_elevated_q080.png?v=20260504062612",
        "extent": "assets/maps/scenarios/extent/hist12h_hist_extreme_2001_2025_12h_elevated_q080.png?v=20260504062612",
        "speed": "assets/maps/scenarios/speed/hist12h_hist_extreme_2001_2025_12h_elevated_q080.png?v=20260504062612"
      },
      "rainfall_total_mm": 132.7025,
      "profile": "Elevated / Budameru 80%",
      "duration_min": 720.0,
      "source_status": "historical hourly rainfall plus scaled NRSC Budameru hydrograph and boundary-state sensitivity",
      "calibration_observation_target": "",
      "max_depth_m": 5.5729,
      "wet_area_ha": 4875.558,
      "final_surface_volume_m3": 65756555.295,
      "computed_overlay_max_depth_m": 5.564732551574707,
      "computed_extent_area_ha": 5144.13,
      "max_speed_mps": 2.8803,
      "p95_speed_mps": 0.9025827050209045,
      "raw_outputs": {
        "max_depth_png": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_elevated_q080/hist12h_hist_extreme_2001_2025_12h_elevated_q080_max_depth_full_scale.png",
        "max_depth_pdf": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_elevated_q080/hist12h_hist_extreme_2001_2025_12h_elevated_q080_max_depth_full_scale.pdf",
        "max_depth_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_elevated_q080/hist12h_hist_extreme_2001_2025_12h_elevated_q080_max_depth_m_30m.tif",
        "max_speed_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_elevated_q080/hist12h_hist_extreme_2001_2025_12h_elevated_q080_max_speed_mps_30m.tif"
      }
    },
    {
      "run_id": "hist12h_hist_extreme_2001_2025_12h_elevated_q100",
      "title": "Historical extreme rainfall | Elevated river/canal state | Budameru inflow 100% | 133 mm rainfall",
      "image": "assets/maps/scenarios/depth/hist12h_hist_extreme_2001_2025_12h_elevated_q100.png?v=20260504062612",
      "images": {
        "depth": "assets/maps/scenarios/depth/hist12h_hist_extreme_2001_2025_12h_elevated_q100.png?v=20260504062612",
        "extent": "assets/maps/scenarios/extent/hist12h_hist_extreme_2001_2025_12h_elevated_q100.png?v=20260504062612",
        "speed": "assets/maps/scenarios/speed/hist12h_hist_extreme_2001_2025_12h_elevated_q100.png?v=20260504062612"
      },
      "rainfall_total_mm": 132.7025,
      "profile": "Elevated / Budameru 100%",
      "duration_min": 720.0,
      "source_status": "historical hourly rainfall plus scaled NRSC Budameru hydrograph and boundary-state sensitivity",
      "calibration_observation_target": "",
      "max_depth_m": 5.8139,
      "wet_area_ha": 5072.399,
      "final_surface_volume_m3": 78611503.012,
      "computed_overlay_max_depth_m": 5.805714130401611,
      "computed_extent_area_ha": 5321.61,
      "max_speed_mps": 3.0445,
      "p95_speed_mps": 0.9101488590240479,
      "raw_outputs": {
        "max_depth_png": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_elevated_q100/hist12h_hist_extreme_2001_2025_12h_elevated_q100_max_depth_full_scale.png",
        "max_depth_pdf": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_elevated_q100/hist12h_hist_extreme_2001_2025_12h_elevated_q100_max_depth_full_scale.pdf",
        "max_depth_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_elevated_q100/hist12h_hist_extreme_2001_2025_12h_elevated_q100_max_depth_m_30m.tif",
        "max_speed_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_elevated_q100/hist12h_hist_extreme_2001_2025_12h_elevated_q100_max_speed_mps_30m.tif"
      }
    },
    {
      "run_id": "hist12h_hist_extreme_2001_2025_12h_high_q060",
      "title": "Historical extreme rainfall | High river/canal state | Budameru inflow 60% | 133 mm rainfall",
      "image": "assets/maps/scenarios/depth/hist12h_hist_extreme_2001_2025_12h_high_q060.png?v=20260504062612",
      "images": {
        "depth": "assets/maps/scenarios/depth/hist12h_hist_extreme_2001_2025_12h_high_q060.png?v=20260504062612",
        "extent": "assets/maps/scenarios/extent/hist12h_hist_extreme_2001_2025_12h_high_q060.png?v=20260504062612",
        "speed": "assets/maps/scenarios/speed/hist12h_hist_extreme_2001_2025_12h_high_q060.png?v=20260504062612"
      },
      "rainfall_total_mm": 132.7025,
      "profile": "High / Budameru 60%",
      "duration_min": 720.0,
      "source_status": "historical hourly rainfall plus scaled NRSC Budameru hydrograph and boundary-state sensitivity",
      "calibration_observation_target": "",
      "max_depth_m": 5.2902,
      "wet_area_ha": 4674.714,
      "final_surface_volume_m3": 57740822.099,
      "computed_overlay_max_depth_m": 5.28173303604126,
      "computed_extent_area_ha": 4991.85,
      "max_speed_mps": 2.6862,
      "p95_speed_mps": 1.1634162664413452,
      "raw_outputs": {
        "max_depth_png": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_high_q060/hist12h_hist_extreme_2001_2025_12h_high_q060_max_depth_full_scale.png",
        "max_depth_pdf": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_high_q060/hist12h_hist_extreme_2001_2025_12h_high_q060_max_depth_full_scale.pdf",
        "max_depth_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_high_q060/hist12h_hist_extreme_2001_2025_12h_high_q060_max_depth_m_30m.tif",
        "max_speed_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_high_q060/hist12h_hist_extreme_2001_2025_12h_high_q060_max_speed_mps_30m.tif"
      }
    },
    {
      "run_id": "hist12h_hist_extreme_2001_2025_12h_high_q080",
      "title": "Historical extreme rainfall | High river/canal state | Budameru inflow 80% | 133 mm rainfall",
      "image": "assets/maps/scenarios/depth/hist12h_hist_extreme_2001_2025_12h_high_q080.png?v=20260504062612",
      "images": {
        "depth": "assets/maps/scenarios/depth/hist12h_hist_extreme_2001_2025_12h_high_q080.png?v=20260504062612",
        "extent": "assets/maps/scenarios/extent/hist12h_hist_extreme_2001_2025_12h_high_q080.png?v=20260504062612",
        "speed": "assets/maps/scenarios/speed/hist12h_hist_extreme_2001_2025_12h_high_q080.png?v=20260504062612"
      },
      "rainfall_total_mm": 132.7025,
      "profile": "High / Budameru 80%",
      "duration_min": 720.0,
      "source_status": "historical hourly rainfall plus scaled NRSC Budameru hydrograph and boundary-state sensitivity",
      "calibration_observation_target": "",
      "max_depth_m": 5.5742,
      "wet_area_ha": 4957.612,
      "final_surface_volume_m3": 70594742.186,
      "computed_overlay_max_depth_m": 5.566013813018799,
      "computed_extent_area_ha": 5216.4,
      "max_speed_mps": 2.8732,
      "p95_speed_mps": 1.1595882177352905,
      "raw_outputs": {
        "max_depth_png": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_high_q080/hist12h_hist_extreme_2001_2025_12h_high_q080_max_depth_full_scale.png",
        "max_depth_pdf": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_high_q080/hist12h_hist_extreme_2001_2025_12h_high_q080_max_depth_full_scale.pdf",
        "max_depth_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_high_q080/hist12h_hist_extreme_2001_2025_12h_high_q080_max_depth_m_30m.tif",
        "max_speed_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_high_q080/hist12h_hist_extreme_2001_2025_12h_high_q080_max_speed_mps_30m.tif"
      }
    },
    {
      "run_id": "hist12h_hist_extreme_2001_2025_12h_high_q100",
      "title": "Historical extreme rainfall | High river/canal state | Budameru inflow 100% | 133 mm rainfall",
      "image": "assets/maps/scenarios/depth/hist12h_hist_extreme_2001_2025_12h_high_q100.png?v=20260504062612",
      "images": {
        "depth": "assets/maps/scenarios/depth/hist12h_hist_extreme_2001_2025_12h_high_q100.png?v=20260504062612",
        "extent": "assets/maps/scenarios/extent/hist12h_hist_extreme_2001_2025_12h_high_q100.png?v=20260504062612",
        "speed": "assets/maps/scenarios/speed/hist12h_hist_extreme_2001_2025_12h_high_q100.png?v=20260504062612"
      },
      "rainfall_total_mm": 132.7025,
      "profile": "High / Budameru 100%",
      "duration_min": 720.0,
      "source_status": "historical hourly rainfall plus scaled NRSC Budameru hydrograph and boundary-state sensitivity",
      "calibration_observation_target": "",
      "max_depth_m": 5.816,
      "wet_area_ha": 5127.545,
      "final_surface_volume_m3": 83449848.084,
      "computed_overlay_max_depth_m": 5.807892322540283,
      "computed_extent_area_ha": 5362.38,
      "max_speed_mps": 3.0388,
      "p95_speed_mps": 1.1595882177352905,
      "raw_outputs": {
        "max_depth_png": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_high_q100/hist12h_hist_extreme_2001_2025_12h_high_q100_max_depth_full_scale.png",
        "max_depth_pdf": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_high_q100/hist12h_hist_extreme_2001_2025_12h_high_q100_max_depth_full_scale.pdf",
        "max_depth_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_high_q100/hist12h_hist_extreme_2001_2025_12h_high_q100_max_depth_m_30m.tif",
        "max_speed_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_high_q100/hist12h_hist_extreme_2001_2025_12h_high_q100_max_speed_mps_30m.tif"
      }
    },
    {
      "run_id": "hist12h_hist_extreme_2001_2025_12h_normal_q060",
      "title": "Historical extreme rainfall | Normal river/canal state | Budameru inflow 60% | 133 mm rainfall",
      "image": "assets/maps/scenarios/depth/hist12h_hist_extreme_2001_2025_12h_normal_q060.png?v=20260504062612",
      "images": {
        "depth": "assets/maps/scenarios/depth/hist12h_hist_extreme_2001_2025_12h_normal_q060.png?v=20260504062612",
        "extent": "assets/maps/scenarios/extent/hist12h_hist_extreme_2001_2025_12h_normal_q060.png?v=20260504062612",
        "speed": "assets/maps/scenarios/speed/hist12h_hist_extreme_2001_2025_12h_normal_q060.png?v=20260504062612"
      },
      "rainfall_total_mm": 132.7025,
      "profile": "Normal / Budameru 60%",
      "duration_min": 720.0,
      "source_status": "historical hourly rainfall plus scaled NRSC Budameru hydrograph and boundary-state sensitivity",
      "calibration_observation_target": "",
      "max_depth_m": 5.2878,
      "wet_area_ha": 4511.658,
      "final_surface_volume_m3": 48747498.491,
      "computed_overlay_max_depth_m": 5.27937126159668,
      "computed_extent_area_ha": 4820.85,
      "max_speed_mps": 2.6932,
      "p95_speed_mps": 0.6305181980133057,
      "raw_outputs": {
        "max_depth_png": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_normal_q060/hist12h_hist_extreme_2001_2025_12h_normal_q060_max_depth_full_scale.png",
        "max_depth_pdf": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_normal_q060/hist12h_hist_extreme_2001_2025_12h_normal_q060_max_depth_full_scale.pdf",
        "max_depth_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_normal_q060/hist12h_hist_extreme_2001_2025_12h_normal_q060_max_depth_m_30m.tif",
        "max_speed_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_normal_q060/hist12h_hist_extreme_2001_2025_12h_normal_q060_max_speed_mps_30m.tif"
      }
    },
    {
      "run_id": "hist12h_hist_extreme_2001_2025_12h_normal_q080",
      "title": "Historical extreme rainfall | Normal river/canal state | Budameru inflow 80% | 133 mm rainfall",
      "image": "assets/maps/scenarios/depth/hist12h_hist_extreme_2001_2025_12h_normal_q080.png?v=20260504062612",
      "images": {
        "depth": "assets/maps/scenarios/depth/hist12h_hist_extreme_2001_2025_12h_normal_q080.png?v=20260504062612",
        "extent": "assets/maps/scenarios/extent/hist12h_hist_extreme_2001_2025_12h_normal_q080.png?v=20260504062612",
        "speed": "assets/maps/scenarios/speed/hist12h_hist_extreme_2001_2025_12h_normal_q080.png?v=20260504062612"
      },
      "rainfall_total_mm": 132.7025,
      "profile": "Normal / Budameru 80%",
      "duration_min": 720.0,
      "source_status": "historical hourly rainfall plus scaled NRSC Budameru hydrograph and boundary-state sensitivity",
      "calibration_observation_target": "",
      "max_depth_m": 5.5723,
      "wet_area_ha": 4777.473,
      "final_surface_volume_m3": 61600548.708,
      "computed_overlay_max_depth_m": 5.564083576202393,
      "computed_extent_area_ha": 5044.41,
      "max_speed_mps": 2.8852,
      "p95_speed_mps": 0.6691044569015503,
      "raw_outputs": {
        "max_depth_png": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_normal_q080/hist12h_hist_extreme_2001_2025_12h_normal_q080_max_depth_full_scale.png",
        "max_depth_pdf": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_normal_q080/hist12h_hist_extreme_2001_2025_12h_normal_q080_max_depth_full_scale.pdf",
        "max_depth_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_normal_q080/hist12h_hist_extreme_2001_2025_12h_normal_q080_max_depth_m_30m.tif",
        "max_speed_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_normal_q080/hist12h_hist_extreme_2001_2025_12h_normal_q080_max_speed_mps_30m.tif"
      }
    },
    {
      "run_id": "hist12h_hist_extreme_2001_2025_12h_normal_q100",
      "title": "Historical extreme rainfall | Normal river/canal state | Budameru inflow 100% | 133 mm rainfall",
      "image": "assets/maps/scenarios/depth/hist12h_hist_extreme_2001_2025_12h_normal_q100.png?v=20260504062612",
      "images": {
        "depth": "assets/maps/scenarios/depth/hist12h_hist_extreme_2001_2025_12h_normal_q100.png?v=20260504062612",
        "extent": "assets/maps/scenarios/extent/hist12h_hist_extreme_2001_2025_12h_normal_q100.png?v=20260504062612",
        "speed": "assets/maps/scenarios/speed/hist12h_hist_extreme_2001_2025_12h_normal_q100.png?v=20260504062612"
      },
      "rainfall_total_mm": 132.7025,
      "profile": "Normal / Budameru 100%",
      "duration_min": 720.0,
      "source_status": "historical hourly rainfall plus scaled NRSC Budameru hydrograph and boundary-state sensitivity",
      "calibration_observation_target": "",
      "max_depth_m": 5.8119,
      "wet_area_ha": 4998.257,
      "final_surface_volume_m3": 74454629.115,
      "computed_overlay_max_depth_m": 5.803760528564453,
      "computed_extent_area_ha": 5223.69,
      "max_speed_mps": 3.0491,
      "p95_speed_mps": 0.7202470898628235,
      "raw_outputs": {
        "max_depth_png": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_normal_q100/hist12h_hist_extreme_2001_2025_12h_normal_q100_max_depth_full_scale.png",
        "max_depth_pdf": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_normal_q100/hist12h_hist_extreme_2001_2025_12h_normal_q100_max_depth_full_scale.pdf",
        "max_depth_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_normal_q100/hist12h_hist_extreme_2001_2025_12h_normal_q100_max_depth_m_30m.tif",
        "max_speed_tif": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_normal_q100/hist12h_hist_extreme_2001_2025_12h_normal_q100_max_speed_mps_30m.tif"
      }
    }
  ],
  "inventory": [
    {
      "title": "Municipal boundary",
      "features": 1,
      "geometry": "Polygon",
      "source_status": "local source"
    },
    {
      "title": "Revenue wards",
      "features": 71,
      "geometry": "Polygon",
      "source_status": "local source"
    },
    {
      "title": "Road network",
      "features": 22765,
      "geometry": "LineString",
      "source_status": "local source"
    },
    {
      "title": "Drainage network",
      "features": 16846,
      "geometry": "LineString, MultiLineString",
      "source_status": "local source"
    },
    {
      "title": "Manholes",
      "features": 12260,
      "geometry": "Point",
      "source_status": "local source"
    },
    {
      "title": "Drainage pumping stations",
      "features": 13,
      "geometry": "Point",
      "source_status": "local source"
    },
    {
      "title": "TUM building footprints",
      "features": 122764,
      "geometry": "Polygon",
      "source_status": "external building atlas clipped locally"
    },
    {
      "title": "Krishna river polygons",
      "features": 2,
      "geometry": "Polygon",
      "source_status": "local source"
    },
    {
      "title": "Budameru canal polygon",
      "features": 1,
      "geometry": "Polygon",
      "source_status": "local source"
    },
    {
      "title": "Reservoir polygon",
      "features": 1,
      "geometry": "Polygon",
      "source_status": "local source"
    },
    {
      "title": "OSM major canals",
      "features": 7,
      "geometry": "LineString",
      "source_status": "derived review/model layer"
    },
    {
      "title": "OSM extended Budameru",
      "features": 12,
      "geometry": "LineString",
      "source_status": "derived review/model layer"
    },
    {
      "title": "Candidate outfalls",
      "features": 565,
      "geometry": "Point",
      "source_status": "derived review/model layer"
    },
    {
      "title": "Flow direction arrows",
      "features": 31,
      "geometry": "LineString",
      "source_status": "derived review/model layer"
    },
    {
      "title": "Pump connector lines",
      "features": 13,
      "geometry": "LineString",
      "source_status": "derived review/model layer"
    },
    {
      "title": "FloodRESQ exchange points",
      "features": 578,
      "geometry": "Point",
      "source_status": "derived review/model layer"
    }
  ],
  "animation": {
    "gif": "assets/video/flood_ingress_egress.gif?v=20260504062612",
    "poster": "assets/video/flood_ingress_egress_poster.png?v=20260504062612",
    "source_scenario": "hist12h_hist_extreme_2001_2025_12h_high_q100",
    "mode": "solver_timestep",
    "frame_count": 49,
    "time_s": [
      0.0,
      900.0,
      1800.0,
      2700.0,
      3600.0,
      4500.0,
      5400.0,
      6300.0,
      7200.0,
      8100.0,
      9000.0,
      9900.0,
      10800.0,
      11700.0,
      12600.0,
      13500.0,
      14400.0,
      15300.0,
      16200.0,
      17100.0,
      18000.0,
      18900.0,
      19800.0,
      20700.0,
      21600.0,
      22500.0,
      23400.0,
      24300.0,
      25200.0,
      26100.0,
      27000.0,
      27900.0,
      28800.0,
      29700.0,
      30600.0,
      31500.0,
      32400.0,
      33300.0,
      34200.0,
      35100.0,
      36000.0,
      36900.0,
      37800.0,
      38700.0,
      39600.0,
      40500.0,
      41400.0,
      42300.0,
      43200.0
    ],
    "target_npz": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenarios/hist12h_hist_extreme_2001_2025_12h_high_q100/timesteps/hist12h_hist_extreme_2001_2025_12h_high_q100_spatiotemporal_targets.npz",
    "scenarios": {
      "hist12h_hist_2024_budameru_peak_12h_elevated_q060": {
        "smooth_frame_pattern": "assets/video/scenarios/hist12h_hist_2024_budameru_peak_12h_elevated_q060/smooth_frame_{index}.png",
        "smooth_frame_count": 49,
        "smooth_poster": "assets/video/scenarios/hist12h_hist_2024_budameru_peak_12h_elevated_q060/smooth_flood_depth_poster.png",
        "smooth_visualization": "masked interpolation and normalized smoothing of timestep depth surface",
        "smooth_frame_width": 820,
        "smooth_frame_height": 924,
        "smooth_depth_cap_m": 4.120091438293457,
        "frame_metrics": [
          {
            "frame": 0.0,
            "time_h": 0.0,
            "max_depth_m": 0.8999999761581421,
            "max_speed_mps": 0.0,
            "wet_area_ha": 1499.5009765625
          },
          {
            "frame": 1.0,
            "time_h": 0.25,
            "max_depth_m": 4.58394718170166,
            "max_speed_mps": 2.6931674480438232,
            "wet_area_ha": 1646.868896484375
          },
          {
            "frame": 2.0,
            "time_h": 0.5,
            "max_depth_m": 4.637873649597168,
            "max_speed_mps": 2.628889799118042,
            "wet_area_ha": 1680.5438232421875
          },
          {
            "frame": 3.0,
            "time_h": 0.75,
            "max_depth_m": 4.671689510345459,
            "max_speed_mps": 2.522934913635254,
            "wet_area_ha": 1651.023681640625
          },
          {
            "frame": 4.0,
            "time_h": 1.0,
            "max_depth_m": 4.688338279724121,
            "max_speed_mps": 2.4113099575042725,
            "wet_area_ha": 1674.359375
          },
          {
            "frame": 5.0,
            "time_h": 1.25,
            "max_depth_m": 4.699384689331055,
            "max_speed_mps": 2.2756316661834717,
            "wet_area_ha": 1670.1591796875
          },
          {
            "frame": 6.0,
            "time_h": 1.5,
            "max_depth_m": 4.710662364959717,
            "max_speed_mps": 2.1540253162384033,
            "wet_area_ha": 1673.1337890625
          },
          {
            "frame": 7.0,
            "time_h": 1.75,
            "max_depth_m": 4.722553253173828,
            "max_speed_mps": 2.041832685470581,
            "wet_area_ha": 1636.437744140625
          },
          {
            "frame": 8.0,
            "time_h": 2.0,
            "max_depth_m": 4.738367080688477,
            "max_speed_mps": 1.9357306957244873,
            "wet_area_ha": 1623.400634765625
          },
          {
            "frame": 9.0,
            "time_h": 2.25,
            "max_depth_m": 4.759253978729248,
            "max_speed_mps": 1.8351197242736816,
            "wet_area_ha": 1609.19091796875
          },
          {
            "frame": 10.0,
            "time_h": 2.5,
            "max_depth_m": 4.786499977111816,
            "max_speed_mps": 1.7307416200637817,
            "wet_area_ha": 1617.7005615234375
          },
          {
            "frame": 11.0,
            "time_h": 2.75,
            "max_depth_m": 4.8180317878723145,
            "max_speed_mps": 1.6283953189849854,
            "wet_area_ha": 1621.9495849609375
          },
          {
            "frame": 12.0,
            "time_h": 3.0,
            "max_depth_m": 4.85292911529541,
            "max_speed_mps": 1.5338964462280273,
            "wet_area_ha": 1656.2313232421875
          },
          {
            "frame": 13.0,
            "time_h": 3.25,
            "max_depth_m": 4.888862133026123,
            "max_speed_mps": 1.524454951286316,
            "wet_area_ha": 1707.3953857421875
          },
          {
            "frame": 14.0,
            "time_h": 3.5,
            "max_depth_m": 4.925580978393555,
            "max_speed_mps": 1.6276843547821045,
            "wet_area_ha": 1761.5548095703125
          },
          {
            "frame": 15.0,
            "time_h": 3.75,
            "max_depth_m": 4.961219787597656,
            "max_speed_mps": 1.7631025314331055,
            "wet_area_ha": 1841.935791015625
          },
          {
            "frame": 16.0,
            "time_h": 4.0,
            "max_depth_m": 4.994799613952637,
            "max_speed_mps": 1.8378723859786987,
            "wet_area_ha": 1970.8533935546875
          },
          {
            "frame": 17.0,
            "time_h": 4.25,
            "max_depth_m": 5.02626895904541,
            "max_speed_mps": 1.8858058452606201,
            "wet_area_ha": 2029.82080078125
          },
          {
            "frame": 18.0,
            "time_h": 4.5,
            "max_depth_m": 5.055507659912109,
            "max_speed_mps": 1.9272880554199219,
            "wet_area_ha": 2107.460693359375
          },
          {
            "frame": 19.0,
            "time_h": 4.75,
            "max_depth_m": 5.081806659698486,
            "max_speed_mps": 1.9488788843154907,
            "wet_area_ha": 2184.76708984375
          },
          {
            "frame": 20.0,
            "time_h": 5.0,
            "max_depth_m": 5.105432510375977,
            "max_speed_mps": 1.980767011642456,
            "wet_area_ha": 2255.5458984375
          },
          {
            "frame": 21.0,
            "time_h": 5.25,
            "max_depth_m": 5.126274108886719,
            "max_speed_mps": 2.0200231075286865,
            "wet_area_ha": 2332.7578125
          },
          {
            "frame": 22.0,
            "time_h": 5.5,
            "max_depth_m": 5.144712448120117,
            "max_speed_mps": 2.051435708999634,
            "wet_area_ha": 2415.379638671875
          },
          {
            "frame": 23.0,
            "time_h": 5.75,
            "max_depth_m": 5.160562515258789,
            "max_speed_mps": 2.0783510208129883,
            "wet_area_ha": 2505.6455078125
          },
          {
            "frame": 24.0,
            "time_h": 6.0,
            "max_depth_m": 5.174408435821533,
            "max_speed_mps": 2.1015303134918213,
            "wet_area_ha": 2616.98486328125
          },
          {
            "frame": 25.0,
            "time_h": 6.25,
            "max_depth_m": 5.18664026260376,
            "max_speed_mps": 2.1220016479492188,
            "wet_area_ha": 2708.2646484375
          },
          {
            "frame": 26.0,
            "time_h": 6.5,
            "max_depth_m": 5.19740629196167,
            "max_speed_mps": 2.140188694000244,
            "wet_area_ha": 2794.712890625
          },
          {
            "frame": 27.0,
            "time_h": 6.75,
            "max_depth_m": 5.206499099731445,
            "max_speed_mps": 2.1562366485595703,
            "wet_area_ha": 2882.8720703125
          },
          {
            "frame": 28.0,
            "time_h": 7.0,
            "max_depth_m": 5.214394569396973,
            "max_speed_mps": 2.1663148403167725,
            "wet_area_ha": 2913.241943359375
          },
          {
            "frame": 29.0,
            "time_h": 7.25,
            "max_depth_m": 5.221668720245361,
            "max_speed_mps": 2.175145149230957,
            "wet_area_ha": 2948.64501953125
          },
          {
            "frame": 30.0,
            "time_h": 7.5,
            "max_depth_m": 5.228072166442871,
            "max_speed_mps": 2.1821842193603516,
            "wet_area_ha": 3009.7509765625
          },
          {
            "frame": 31.0,
            "time_h": 7.75,
            "max_depth_m": 5.234467506408691,
            "max_speed_mps": 2.1879281997680664,
            "wet_area_ha": 3030.5537109375
          },
          {
            "frame": 32.0,
            "time_h": 8.0,
            "max_depth_m": 5.240306377410889,
            "max_speed_mps": 2.193272113800049,
            "wet_area_ha": 3068.59765625
          },
          {
            "frame": 33.0,
            "time_h": 8.25,
            "max_depth_m": 5.244596481323242,
            "max_speed_mps": 2.1982791423797607,
            "wet_area_ha": 3090.007080078125
          },
          {
            "frame": 34.0,
            "time_h": 8.5,
            "max_depth_m": 5.249134063720703,
            "max_speed_mps": 2.2027087211608887,
            "wet_area_ha": 3108.51708984375
          },
          {
            "frame": 35.0,
            "time_h": 8.75,
            "max_depth_m": 5.253435134887695,
            "max_speed_mps": 2.20751690864563,
            "wet_area_ha": 3121.65673828125
          },
          {
            "frame": 36.0,
            "time_h": 9.0,
            "max_depth_m": 5.25669002532959,
            "max_speed_mps": 2.2121949195861816,
            "wet_area_ha": 3132.5712890625
          },
          {
            "frame": 37.0,
            "time_h": 9.25,
            "max_depth_m": 5.258823394775391,
            "max_speed_mps": 2.215730905532837,
            "wet_area_ha": 3139.3671875
          },
          {
            "frame": 38.0,
            "time_h": 9.5,
            "max_depth_m": 5.261296272277832,
            "max_speed_mps": 2.218266010284424,
            "wet_area_ha": 3154.0546875
          },
          {
            "frame": 39.0,
            "time_h": 9.75,
            "max_depth_m": 5.263376712799072,
            "max_speed_mps": 2.220747232437134,
            "wet_area_ha": 3167.854736328125
          },
          {
            "frame": 40.0,
            "time_h": 10.0,
            "max_depth_m": 5.265491485595703,
            "max_speed_mps": 2.2228941917419434,
            "wet_area_ha": 3188.6435546875
          },
          {
            "frame": 41.0,
            "time_h": 10.25,
            "max_depth_m": 5.264370918273926,
            "max_speed_mps": 2.2242631912231445,
            "wet_area_ha": 3197.617919921875
          },
          {
            "frame": 42.0,
            "time_h": 10.5,
            "max_depth_m": 5.265202045440674,
            "max_speed_mps": 2.2238211631774902,
            "wet_area_ha": 3219.64208984375
          },
          {
            "frame": 43.0,
            "time_h": 10.75,
            "max_depth_m": 5.267288684844971,
            "max_speed_mps": 2.2231056690216064,
            "wet_area_ha": 3230.67236328125
          },
          {
            "frame": 44.0,
            "time_h": 11.0,
            "max_depth_m": 5.26700496673584,
            "max_speed_mps": 2.2231290340423584,
            "wet_area_ha": 3241.702880859375
          },
          {
            "frame": 45.0,
            "time_h": 11.25,
            "max_depth_m": 5.258408069610596,
            "max_speed_mps": 2.2215871810913086,
            "wet_area_ha": 3284.4794921875
          },
          {
            "frame": 46.0,
            "time_h": 11.5,
            "max_depth_m": 5.250859260559082,
            "max_speed_mps": 2.214877128601074,
            "wet_area_ha": 3311.941650390625
          },
          {
            "frame": 47.0,
            "time_h": 11.75,
            "max_depth_m": 5.246099948883057,
            "max_speed_mps": 2.2034435272216797,
            "wet_area_ha": 3332.498291015625
          },
          {
            "frame": 48.0,
            "time_h": 12.0,
            "max_depth_m": 5.241761684417725,
            "max_speed_mps": 2.1923940181732178,
            "wet_area_ha": 3381.253662109375
          }
        ]
      },
      "hist12h_hist_2024_budameru_peak_12h_elevated_q080": {
        "smooth_frame_pattern": "assets/video/scenarios/hist12h_hist_2024_budameru_peak_12h_elevated_q080/smooth_frame_{index}.png",
        "smooth_frame_count": 49,
        "smooth_poster": "assets/video/scenarios/hist12h_hist_2024_budameru_peak_12h_elevated_q080/smooth_flood_depth_poster.png",
        "smooth_visualization": "masked interpolation and normalized smoothing of timestep depth surface",
        "smooth_frame_width": 820,
        "smooth_frame_height": 924,
        "smooth_depth_cap_m": 4.3957977294921875,
        "frame_metrics": [
          {
            "frame": 0.0,
            "time_h": 0.0,
            "max_depth_m": 0.8999999761581421,
            "max_speed_mps": 0.0,
            "wet_area_ha": 1499.5009765625
          },
          {
            "frame": 1.0,
            "time_h": 0.25,
            "max_depth_m": 4.803238391876221,
            "max_speed_mps": 2.880343437194824,
            "wet_area_ha": 1670.7275390625
          },
          {
            "frame": 2.0,
            "time_h": 0.5,
            "max_depth_m": 4.868818283081055,
            "max_speed_mps": 2.7858943939208984,
            "wet_area_ha": 1700.5118408203125
          },
          {
            "frame": 3.0,
            "time_h": 0.75,
            "max_depth_m": 4.903858661651611,
            "max_speed_mps": 2.647869348526001,
            "wet_area_ha": 1683.9091796875
          },
          {
            "frame": 4.0,
            "time_h": 1.0,
            "max_depth_m": 4.920341968536377,
            "max_speed_mps": 2.486462354660034,
            "wet_area_ha": 1719.754150390625
          },
          {
            "frame": 5.0,
            "time_h": 1.25,
            "max_depth_m": 4.936018943786621,
            "max_speed_mps": 2.3256137371063232,
            "wet_area_ha": 1715.858642578125
          },
          {
            "frame": 6.0,
            "time_h": 1.5,
            "max_depth_m": 4.953031539916992,
            "max_speed_mps": 2.184596061706543,
            "wet_area_ha": 1728.704345703125
          },
          {
            "frame": 7.0,
            "time_h": 1.75,
            "max_depth_m": 4.973385334014893,
            "max_speed_mps": 2.052584171295166,
            "wet_area_ha": 1688.2835693359375
          },
          {
            "frame": 8.0,
            "time_h": 2.0,
            "max_depth_m": 5.002474308013916,
            "max_speed_mps": 1.9333374500274658,
            "wet_area_ha": 1711.28125
          },
          {
            "frame": 9.0,
            "time_h": 2.25,
            "max_depth_m": 5.038804054260254,
            "max_speed_mps": 1.8068006038665771,
            "wet_area_ha": 1685.8956298828125
          },
          {
            "frame": 10.0,
            "time_h": 2.5,
            "max_depth_m": 5.082578182220459,
            "max_speed_mps": 1.6838300228118896,
            "wet_area_ha": 1703.7117919921875
          },
          {
            "frame": 11.0,
            "time_h": 2.75,
            "max_depth_m": 5.130304336547852,
            "max_speed_mps": 1.8169292211532593,
            "wet_area_ha": 1728.0152587890625
          },
          {
            "frame": 12.0,
            "time_h": 3.0,
            "max_depth_m": 5.180033206939697,
            "max_speed_mps": 1.9203763008117676,
            "wet_area_ha": 1799.5909423828125
          },
          {
            "frame": 13.0,
            "time_h": 3.25,
            "max_depth_m": 5.226248264312744,
            "max_speed_mps": 1.9787018299102783,
            "wet_area_ha": 1923.265380859375
          },
          {
            "frame": 14.0,
            "time_h": 3.5,
            "max_depth_m": 5.269297122955322,
            "max_speed_mps": 2.0717580318450928,
            "wet_area_ha": 2090.974609375
          },
          {
            "frame": 15.0,
            "time_h": 3.75,
            "max_depth_m": 5.308675289154053,
            "max_speed_mps": 2.1525895595550537,
            "wet_area_ha": 2157.6240234375
          },
          {
            "frame": 16.0,
            "time_h": 4.0,
            "max_depth_m": 5.343347072601318,
            "max_speed_mps": 2.2092549800872803,
            "wet_area_ha": 2219.301513671875
          },
          {
            "frame": 17.0,
            "time_h": 4.25,
            "max_depth_m": 5.374149322509766,
            "max_speed_mps": 2.2438762187957764,
            "wet_area_ha": 2302.03125
          },
          {
            "frame": 18.0,
            "time_h": 4.5,
            "max_depth_m": 5.401174068450928,
            "max_speed_mps": 2.2816572189331055,
            "wet_area_ha": 2375.513671875
          },
          {
            "frame": 19.0,
            "time_h": 4.75,
            "max_depth_m": 5.424178123474121,
            "max_speed_mps": 2.3075385093688965,
            "wet_area_ha": 2464.962890625
          },
          {
            "frame": 20.0,
            "time_h": 5.0,
            "max_depth_m": 5.444316864013672,
            "max_speed_mps": 2.339324712753296,
            "wet_area_ha": 2568.015380859375
          },
          {
            "frame": 21.0,
            "time_h": 5.25,
            "max_depth_m": 5.461543083190918,
            "max_speed_mps": 2.3671133518218994,
            "wet_area_ha": 2756.825439453125
          },
          {
            "frame": 22.0,
            "time_h": 5.5,
            "max_depth_m": 5.47637414932251,
            "max_speed_mps": 2.3900954723358154,
            "wet_area_ha": 2817.450927734375
          },
          {
            "frame": 23.0,
            "time_h": 5.75,
            "max_depth_m": 5.488739013671875,
            "max_speed_mps": 2.406583547592163,
            "wet_area_ha": 2868.46630859375
          },
          {
            "frame": 24.0,
            "time_h": 6.0,
            "max_depth_m": 5.499422550201416,
            "max_speed_mps": 2.417651891708374,
            "wet_area_ha": 2924.826904296875
          },
          {
            "frame": 25.0,
            "time_h": 6.25,
            "max_depth_m": 5.508596897125244,
            "max_speed_mps": 2.4278006553649902,
            "wet_area_ha": 2973.007080078125
          },
          {
            "frame": 26.0,
            "time_h": 6.5,
            "max_depth_m": 5.5163750648498535,
            "max_speed_mps": 2.4343817234039307,
            "wet_area_ha": 2993.746826171875
          },
          {
            "frame": 27.0,
            "time_h": 6.75,
            "max_depth_m": 5.522591590881348,
            "max_speed_mps": 2.438447952270508,
            "wet_area_ha": 3032.162109375
          },
          {
            "frame": 28.0,
            "time_h": 7.0,
            "max_depth_m": 5.5277252197265625,
            "max_speed_mps": 2.4410910606384277,
            "wet_area_ha": 3047.658935546875
          },
          {
            "frame": 29.0,
            "time_h": 7.25,
            "max_depth_m": 5.532339572906494,
            "max_speed_mps": 2.442587375640869,
            "wet_area_ha": 3064.931396484375
          },
          {
            "frame": 30.0,
            "time_h": 7.5,
            "max_depth_m": 5.536191940307617,
            "max_speed_mps": 2.4410929679870605,
            "wet_area_ha": 3103.980712890625
          },
          {
            "frame": 31.0,
            "time_h": 7.75,
            "max_depth_m": 5.54023551940918,
            "max_speed_mps": 2.439749240875244,
            "wet_area_ha": 3125.28125
          },
          {
            "frame": 32.0,
            "time_h": 8.0,
            "max_depth_m": 5.5438947677612305,
            "max_speed_mps": 2.4391002655029297,
            "wet_area_ha": 3161.17822265625
          },
          {
            "frame": 33.0,
            "time_h": 8.25,
            "max_depth_m": 5.545991897583008,
            "max_speed_mps": 2.4383163452148438,
            "wet_area_ha": 3187.179931640625
          },
          {
            "frame": 34.0,
            "time_h": 8.5,
            "max_depth_m": 5.548583030700684,
            "max_speed_mps": 2.4373157024383545,
            "wet_area_ha": 3204.3046875
          },
          {
            "frame": 35.0,
            "time_h": 8.75,
            "max_depth_m": 5.551069736480713,
            "max_speed_mps": 2.4367969036102295,
            "wet_area_ha": 3216.910888671875
          },
          {
            "frame": 36.0,
            "time_h": 9.0,
            "max_depth_m": 5.552530765533447,
            "max_speed_mps": 2.436084508895874,
            "wet_area_ha": 3244.46240234375
          },
          {
            "frame": 37.0,
            "time_h": 9.25,
            "max_depth_m": 5.5529351234436035,
            "max_speed_mps": 2.4335405826568604,
            "wet_area_ha": 3262.550537109375
          },
          {
            "frame": 38.0,
            "time_h": 9.5,
            "max_depth_m": 5.553927421569824,
            "max_speed_mps": 2.4287006855010986,
            "wet_area_ha": 3299.62744140625
          },
          {
            "frame": 39.0,
            "time_h": 9.75,
            "max_depth_m": 5.554664611816406,
            "max_speed_mps": 2.421079158782959,
            "wet_area_ha": 3365.369140625
          },
          {
            "frame": 40.0,
            "time_h": 10.0,
            "max_depth_m": 5.55566930770874,
            "max_speed_mps": 2.4097068309783936,
            "wet_area_ha": 3413.429931640625
          },
          {
            "frame": 41.0,
            "time_h": 10.25,
            "max_depth_m": 5.553122520446777,
            "max_speed_mps": 2.393975019454956,
            "wet_area_ha": 3421.55029296875
          },
          {
            "frame": 42.0,
            "time_h": 10.5,
            "max_depth_m": 5.553127288818359,
            "max_speed_mps": 2.3727753162384033,
            "wet_area_ha": 3473.08837890625
          },
          {
            "frame": 43.0,
            "time_h": 10.75,
            "max_depth_m": 5.55485200881958,
            "max_speed_mps": 2.3481359481811523,
            "wet_area_ha": 3538.51611328125
          },
          {
            "frame": 44.0,
            "time_h": 11.0,
            "max_depth_m": 5.554085731506348,
            "max_speed_mps": 2.318608045578003,
            "wet_area_ha": 3558.818115234375
          },
          {
            "frame": 45.0,
            "time_h": 11.25,
            "max_depth_m": 5.543526649475098,
            "max_speed_mps": 2.2822139263153076,
            "wet_area_ha": 3602.176025390625
          },
          {
            "frame": 46.0,
            "time_h": 11.5,
            "max_depth_m": 5.534637451171875,
            "max_speed_mps": 2.2371339797973633,
            "wet_area_ha": 3610.733154296875
          },
          {
            "frame": 47.0,
            "time_h": 11.75,
            "max_depth_m": 5.529098987579346,
            "max_speed_mps": 2.187965154647827,
            "wet_area_ha": 3618.21875
          },
          {
            "frame": 48.0,
            "time_h": 12.0,
            "max_depth_m": 5.524682998657227,
            "max_speed_mps": 2.140991687774658,
            "wet_area_ha": 3647.5
          }
        ]
      },
      "hist12h_hist_2024_budameru_peak_12h_elevated_q100": {
        "smooth_frame_pattern": "assets/video/scenarios/hist12h_hist_2024_budameru_peak_12h_elevated_q100/smooth_frame_{index}.png",
        "smooth_frame_count": 49,
        "smooth_poster": "assets/video/scenarios/hist12h_hist_2024_budameru_peak_12h_elevated_q100/smooth_flood_depth_poster.png",
        "smooth_visualization": "masked interpolation and normalized smoothing of timestep depth surface",
        "smooth_frame_width": 820,
        "smooth_frame_height": 924,
        "smooth_depth_cap_m": 4.627842903137207,
        "frame_metrics": [
          {
            "frame": 0.0,
            "time_h": 0.0,
            "max_depth_m": 0.8999999761581421,
            "max_speed_mps": 0.0,
            "wet_area_ha": 1499.5009765625
          },
          {
            "frame": 1.0,
            "time_h": 0.25,
            "max_depth_m": 4.992578506469727,
            "max_speed_mps": 3.044555187225342,
            "wet_area_ha": 1701.59521484375
          },
          {
            "frame": 2.0,
            "time_h": 0.5,
            "max_depth_m": 5.067755222320557,
            "max_speed_mps": 2.9103832244873047,
            "wet_area_ha": 1711.0533447265625
          },
          {
            "frame": 3.0,
            "time_h": 0.75,
            "max_depth_m": 5.101373195648193,
            "max_speed_mps": 2.738271951675415,
            "wet_area_ha": 1733.07177734375
          },
          {
            "frame": 4.0,
            "time_h": 1.0,
            "max_depth_m": 5.120139122009277,
            "max_speed_mps": 2.534600257873535,
            "wet_area_ha": 1751.194580078125
          },
          {
            "frame": 5.0,
            "time_h": 1.25,
            "max_depth_m": 5.1410064697265625,
            "max_speed_mps": 2.357644557952881,
            "wet_area_ha": 1772.755615234375
          },
          {
            "frame": 6.0,
            "time_h": 1.5,
            "max_depth_m": 5.165229797363281,
            "max_speed_mps": 2.192300796508789,
            "wet_area_ha": 1767.79443359375
          },
          {
            "frame": 7.0,
            "time_h": 1.75,
            "max_depth_m": 5.198290824890137,
            "max_speed_mps": 2.0573647022247314,
            "wet_area_ha": 1756.6390380859375
          },
          {
            "frame": 8.0,
            "time_h": 2.0,
            "max_depth_m": 5.244179725646973,
            "max_speed_mps": 1.909008502960205,
            "wet_area_ha": 1755.62744140625
          },
          {
            "frame": 9.0,
            "time_h": 2.25,
            "max_depth_m": 5.300817489624023,
            "max_speed_mps": 1.8957983255386353,
            "wet_area_ha": 1749.179443359375
          },
          {
            "frame": 10.0,
            "time_h": 2.5,
            "max_depth_m": 5.361371994018555,
            "max_speed_mps": 2.003502368927002,
            "wet_area_ha": 1819.900390625
          },
          {
            "frame": 11.0,
            "time_h": 2.75,
            "max_depth_m": 5.419297695159912,
            "max_speed_mps": 2.1502041816711426,
            "wet_area_ha": 1906.7164306640625
          },
          {
            "frame": 12.0,
            "time_h": 3.0,
            "max_depth_m": 5.4737772941589355,
            "max_speed_mps": 2.258671998977661,
            "wet_area_ha": 2084.701904296875
          },
          {
            "frame": 13.0,
            "time_h": 3.25,
            "max_depth_m": 5.523403644561768,
            "max_speed_mps": 2.3191490173339844,
            "wet_area_ha": 2176.77587890625
          },
          {
            "frame": 14.0,
            "time_h": 3.5,
            "max_depth_m": 5.568304061889648,
            "max_speed_mps": 2.3855323791503906,
            "wet_area_ha": 2260.11962890625
          },
          {
            "frame": 15.0,
            "time_h": 3.75,
            "max_depth_m": 5.60722017288208,
            "max_speed_mps": 2.4487693309783936,
            "wet_area_ha": 2323.223876953125
          },
          {
            "frame": 16.0,
            "time_h": 4.0,
            "max_depth_m": 5.640207767486572,
            "max_speed_mps": 2.4876763820648193,
            "wet_area_ha": 2408.41064453125
          },
          {
            "frame": 17.0,
            "time_h": 4.25,
            "max_depth_m": 5.6680521965026855,
            "max_speed_mps": 2.4873249530792236,
            "wet_area_ha": 2512.10205078125
          },
          {
            "frame": 18.0,
            "time_h": 4.5,
            "max_depth_m": 5.691162586212158,
            "max_speed_mps": 2.4882073402404785,
            "wet_area_ha": 2710.10498046875
          },
          {
            "frame": 19.0,
            "time_h": 4.75,
            "max_depth_m": 5.709929466247559,
            "max_speed_mps": 2.488640308380127,
            "wet_area_ha": 2841.35205078125
          },
          {
            "frame": 20.0,
            "time_h": 5.0,
            "max_depth_m": 5.725882530212402,
            "max_speed_mps": 2.490361452102661,
            "wet_area_ha": 2868.56640625
          },
          {
            "frame": 21.0,
            "time_h": 5.25,
            "max_depth_m": 5.738994121551514,
            "max_speed_mps": 2.4906210899353027,
            "wet_area_ha": 2940.850341796875
          },
          {
            "frame": 22.0,
            "time_h": 5.5,
            "max_depth_m": 5.749882698059082,
            "max_speed_mps": 2.49053692817688,
            "wet_area_ha": 2999.603515625
          },
          {
            "frame": 23.0,
            "time_h": 5.75,
            "max_depth_m": 5.758489608764648,
            "max_speed_mps": 2.4889988899230957,
            "wet_area_ha": 3026.936767578125
          },
          {
            "frame": 24.0,
            "time_h": 6.0,
            "max_depth_m": 5.765694618225098,
            "max_speed_mps": 2.487166166305542,
            "wet_area_ha": 3040.719970703125
          },
          {
            "frame": 25.0,
            "time_h": 6.25,
            "max_depth_m": 5.771553039550781,
            "max_speed_mps": 2.484966993331909,
            "wet_area_ha": 3081.281982421875
          },
          {
            "frame": 26.0,
            "time_h": 6.5,
            "max_depth_m": 5.776242733001709,
            "max_speed_mps": 2.4833126068115234,
            "wet_area_ha": 3105.057861328125
          },
          {
            "frame": 27.0,
            "time_h": 6.75,
            "max_depth_m": 5.779492378234863,
            "max_speed_mps": 2.482558012008667,
            "wet_area_ha": 3131.415283203125
          },
          {
            "frame": 28.0,
            "time_h": 7.0,
            "max_depth_m": 5.78181266784668,
            "max_speed_mps": 2.482665777206421,
            "wet_area_ha": 3146.299560546875
          },
          {
            "frame": 29.0,
            "time_h": 7.25,
            "max_depth_m": 5.783793926239014,
            "max_speed_mps": 2.4824745655059814,
            "wet_area_ha": 3156.35888671875
          },
          {
            "frame": 30.0,
            "time_h": 7.5,
            "max_depth_m": 5.785217761993408,
            "max_speed_mps": 2.480524778366089,
            "wet_area_ha": 3194.52001953125
          },
          {
            "frame": 31.0,
            "time_h": 7.75,
            "max_depth_m": 5.787180423736572,
            "max_speed_mps": 2.4779601097106934,
            "wet_area_ha": 3220.996337890625
          },
          {
            "frame": 32.0,
            "time_h": 8.0,
            "max_depth_m": 5.788992881774902,
            "max_speed_mps": 2.474388599395752,
            "wet_area_ha": 3264.91162109375
          },
          {
            "frame": 33.0,
            "time_h": 8.25,
            "max_depth_m": 5.7892560958862305,
            "max_speed_mps": 2.468385934829712,
            "wet_area_ha": 3318.39306640625
          },
          {
            "frame": 34.0,
            "time_h": 8.5,
            "max_depth_m": 5.790368556976318,
            "max_speed_mps": 2.4579849243164062,
            "wet_area_ha": 3402.589111328125
          },
          {
            "frame": 35.0,
            "time_h": 8.75,
            "max_depth_m": 5.791637420654297,
            "max_speed_mps": 2.441558361053467,
            "wet_area_ha": 3434.1064453125
          },
          {
            "frame": 36.0,
            "time_h": 9.0,
            "max_depth_m": 5.792011737823486,
            "max_speed_mps": 2.4187843799591064,
            "wet_area_ha": 3465.04931640625
          },
          {
            "frame": 37.0,
            "time_h": 9.25,
            "max_depth_m": 5.79155158996582,
            "max_speed_mps": 2.388547420501709,
            "wet_area_ha": 3567.85400390625
          },
          {
            "frame": 38.0,
            "time_h": 9.5,
            "max_depth_m": 5.792128562927246,
            "max_speed_mps": 2.350939989089966,
            "wet_area_ha": 3608.362060546875
          },
          {
            "frame": 39.0,
            "time_h": 9.75,
            "max_depth_m": 5.792784214019775,
            "max_speed_mps": 2.306940793991089,
            "wet_area_ha": 3623.20556640625
          },
          {
            "frame": 40.0,
            "time_h": 10.0,
            "max_depth_m": 5.7941412925720215,
            "max_speed_mps": 2.2575454711914062,
            "wet_area_ha": 3644.99169921875
          },
          {
            "frame": 41.0,
            "time_h": 10.25,
            "max_depth_m": 5.791796684265137,
            "max_speed_mps": 2.205753803253174,
            "wet_area_ha": 3678.17041015625
          },
          {
            "frame": 42.0,
            "time_h": 10.5,
            "max_depth_m": 5.792786121368408,
            "max_speed_mps": 2.153486490249634,
            "wet_area_ha": 3748.481689453125
          },
          {
            "frame": 43.0,
            "time_h": 10.75,
            "max_depth_m": 5.796091079711914,
            "max_speed_mps": 2.1044411659240723,
            "wet_area_ha": 3774.18115234375
          },
          {
            "frame": 44.0,
            "time_h": 11.0,
            "max_depth_m": 5.796742916107178,
            "max_speed_mps": 2.0620791912078857,
            "wet_area_ha": 3807.51171875
          },
          {
            "frame": 45.0,
            "time_h": 11.25,
            "max_depth_m": 5.785984992980957,
            "max_speed_mps": 2.023578643798828,
            "wet_area_ha": 3861.57470703125
          },
          {
            "frame": 46.0,
            "time_h": 11.5,
            "max_depth_m": 5.777353286743164,
            "max_speed_mps": 1.9832948446273804,
            "wet_area_ha": 3883.28955078125
          },
          {
            "frame": 47.0,
            "time_h": 11.75,
            "max_depth_m": 5.772457122802734,
            "max_speed_mps": 1.9454760551452637,
            "wet_area_ha": 3895.458740234375
          },
          {
            "frame": 48.0,
            "time_h": 12.0,
            "max_depth_m": 5.768939971923828,
            "max_speed_mps": 1.9130398035049438,
            "wet_area_ha": 3936.278076171875
          }
        ]
      },
      "hist12h_hist_2024_budameru_peak_12h_high_q060": {
        "smooth_frame_pattern": "assets/video/scenarios/hist12h_hist_2024_budameru_peak_12h_high_q060/smooth_frame_{index}.png",
        "smooth_frame_count": 49,
        "smooth_poster": "assets/video/scenarios/hist12h_hist_2024_budameru_peak_12h_high_q060/smooth_flood_depth_poster.png",
        "smooth_visualization": "masked interpolation and normalized smoothing of timestep depth surface",
        "smooth_frame_width": 820,
        "smooth_frame_height": 924,
        "smooth_depth_cap_m": 4.123164653778076,
        "frame_metrics": [
          {
            "frame": 0.0,
            "time_h": 0.0,
            "max_depth_m": 1.399999976158142,
            "max_speed_mps": 0.0,
            "wet_area_ha": 1499.5009765625
          },
          {
            "frame": 1.0,
            "time_h": 0.25,
            "max_depth_m": 4.595335483551025,
            "max_speed_mps": 2.6862683296203613,
            "wet_area_ha": 1937.564453125
          },
          {
            "frame": 2.0,
            "time_h": 0.5,
            "max_depth_m": 4.775155544281006,
            "max_speed_mps": 2.619821786880493,
            "wet_area_ha": 1948.528564453125
          },
          {
            "frame": 3.0,
            "time_h": 0.75,
            "max_depth_m": 4.775326251983643,
            "max_speed_mps": 2.5103325843811035,
            "wet_area_ha": 1936.2701416015625
          },
          {
            "frame": 4.0,
            "time_h": 1.0,
            "max_depth_m": 4.772687911987305,
            "max_speed_mps": 2.3950881958007812,
            "wet_area_ha": 1976.6612548828125
          },
          {
            "frame": 5.0,
            "time_h": 1.25,
            "max_depth_m": 4.76583194732666,
            "max_speed_mps": 2.2573859691619873,
            "wet_area_ha": 1969.187744140625
          },
          {
            "frame": 6.0,
            "time_h": 1.5,
            "max_depth_m": 4.756805896759033,
            "max_speed_mps": 2.1349728107452393,
            "wet_area_ha": 1996.6484375
          },
          {
            "frame": 7.0,
            "time_h": 1.75,
            "max_depth_m": 4.746890544891357,
            "max_speed_mps": 2.011612892150879,
            "wet_area_ha": 2003.454833984375
          },
          {
            "frame": 8.0,
            "time_h": 2.0,
            "max_depth_m": 4.744007110595703,
            "max_speed_mps": 1.905510663986206,
            "wet_area_ha": 2039.829833984375
          },
          {
            "frame": 9.0,
            "time_h": 2.25,
            "max_depth_m": 4.767782688140869,
            "max_speed_mps": 1.8000962734222412,
            "wet_area_ha": 2055.7744140625
          },
          {
            "frame": 10.0,
            "time_h": 2.5,
            "max_depth_m": 4.797128677368164,
            "max_speed_mps": 1.695325493812561,
            "wet_area_ha": 2116.77587890625
          },
          {
            "frame": 11.0,
            "time_h": 2.75,
            "max_depth_m": 4.830031394958496,
            "max_speed_mps": 1.5952656269073486,
            "wet_area_ha": 2137.55908203125
          },
          {
            "frame": 12.0,
            "time_h": 3.0,
            "max_depth_m": 4.8657426834106445,
            "max_speed_mps": 1.504201889038086,
            "wet_area_ha": 2161.286376953125
          },
          {
            "frame": 13.0,
            "time_h": 3.25,
            "max_depth_m": 4.901980876922607,
            "max_speed_mps": 1.5511295795440674,
            "wet_area_ha": 2191.746337890625
          },
          {
            "frame": 14.0,
            "time_h": 3.5,
            "max_depth_m": 4.9385786056518555,
            "max_speed_mps": 1.679152488708496,
            "wet_area_ha": 2235.63818359375
          },
          {
            "frame": 15.0,
            "time_h": 3.75,
            "max_depth_m": 4.973663330078125,
            "max_speed_mps": 1.8007614612579346,
            "wet_area_ha": 2317.8046875
          },
          {
            "frame": 16.0,
            "time_h": 4.0,
            "max_depth_m": 5.006493091583252,
            "max_speed_mps": 1.8555041551589966,
            "wet_area_ha": 2379.279052734375
          },
          {
            "frame": 17.0,
            "time_h": 4.25,
            "max_depth_m": 5.03717565536499,
            "max_speed_mps": 1.900455355644226,
            "wet_area_ha": 2436.955322265625
          },
          {
            "frame": 18.0,
            "time_h": 4.5,
            "max_depth_m": 5.065630912780762,
            "max_speed_mps": 1.9360028505325317,
            "wet_area_ha": 2489.33544921875
          },
          {
            "frame": 19.0,
            "time_h": 4.75,
            "max_depth_m": 5.090932846069336,
            "max_speed_mps": 1.9556894302368164,
            "wet_area_ha": 2556.0771484375
          },
          {
            "frame": 20.0,
            "time_h": 5.0,
            "max_depth_m": 5.11359977722168,
            "max_speed_mps": 1.995863437652588,
            "wet_area_ha": 2605.1103515625
          },
          {
            "frame": 21.0,
            "time_h": 5.25,
            "max_depth_m": 5.133577823638916,
            "max_speed_mps": 2.032087564468384,
            "wet_area_ha": 2654.83837890625
          },
          {
            "frame": 22.0,
            "time_h": 5.5,
            "max_depth_m": 5.151230335235596,
            "max_speed_mps": 2.061411142349243,
            "wet_area_ha": 2711.9736328125
          },
          {
            "frame": 23.0,
            "time_h": 5.75,
            "max_depth_m": 5.166321754455566,
            "max_speed_mps": 2.0874345302581787,
            "wet_area_ha": 2800.388427734375
          },
          {
            "frame": 24.0,
            "time_h": 6.0,
            "max_depth_m": 5.179506778717041,
            "max_speed_mps": 2.1096198558807373,
            "wet_area_ha": 2868.954833984375
          },
          {
            "frame": 25.0,
            "time_h": 6.25,
            "max_depth_m": 5.191213130950928,
            "max_speed_mps": 2.1291122436523438,
            "wet_area_ha": 2973.23876953125
          },
          {
            "frame": 26.0,
            "time_h": 6.5,
            "max_depth_m": 5.201480388641357,
            "max_speed_mps": 2.1468327045440674,
            "wet_area_ha": 3037.539306640625
          },
          {
            "frame": 27.0,
            "time_h": 6.75,
            "max_depth_m": 5.210152626037598,
            "max_speed_mps": 2.1604878902435303,
            "wet_area_ha": 3084.145751953125
          },
          {
            "frame": 28.0,
            "time_h": 7.0,
            "max_depth_m": 5.217676639556885,
            "max_speed_mps": 2.170039415359497,
            "wet_area_ha": 3144.290283203125
          },
          {
            "frame": 29.0,
            "time_h": 7.25,
            "max_depth_m": 5.224620342254639,
            "max_speed_mps": 2.17822527885437,
            "wet_area_ha": 3166.52587890625
          },
          {
            "frame": 30.0,
            "time_h": 7.5,
            "max_depth_m": 5.230732440948486,
            "max_speed_mps": 2.1847455501556396,
            "wet_area_ha": 3203.201904296875
          },
          {
            "frame": 31.0,
            "time_h": 7.75,
            "max_depth_m": 5.236861228942871,
            "max_speed_mps": 2.190152406692505,
            "wet_area_ha": 3213.9951171875
          },
          {
            "frame": 32.0,
            "time_h": 8.0,
            "max_depth_m": 5.242460250854492,
            "max_speed_mps": 2.1952884197235107,
            "wet_area_ha": 3254.623291015625
          },
          {
            "frame": 33.0,
            "time_h": 8.25,
            "max_depth_m": 5.246537208557129,
            "max_speed_mps": 2.2002739906311035,
            "wet_area_ha": 3280.1103515625
          },
          {
            "frame": 34.0,
            "time_h": 8.5,
            "max_depth_m": 5.250890254974365,
            "max_speed_mps": 2.204693555831909,
            "wet_area_ha": 3299.78173828125
          },
          {
            "frame": 35.0,
            "time_h": 8.75,
            "max_depth_m": 5.25502347946167,
            "max_speed_mps": 2.2094526290893555,
            "wet_area_ha": 3317.734375
          },
          {
            "frame": 36.0,
            "time_h": 9.0,
            "max_depth_m": 5.258126735687256,
            "max_speed_mps": 2.213937282562256,
            "wet_area_ha": 3335.103515625
          },
          {
            "frame": 37.0,
            "time_h": 9.25,
            "max_depth_m": 5.260120868682861,
            "max_speed_mps": 2.2172701358795166,
            "wet_area_ha": 3341.449462890625
          },
          {
            "frame": 38.0,
            "time_h": 9.5,
            "max_depth_m": 5.26246452331543,
            "max_speed_mps": 2.2196035385131836,
            "wet_area_ha": 3369.144775390625
          },
          {
            "frame": 39.0,
            "time_h": 9.75,
            "max_depth_m": 5.264427661895752,
            "max_speed_mps": 2.2218661308288574,
            "wet_area_ha": 3374.83154296875
          },
          {
            "frame": 40.0,
            "time_h": 10.0,
            "max_depth_m": 5.2664384841918945,
            "max_speed_mps": 2.2237563133239746,
            "wet_area_ha": 3400.38232421875
          },
          {
            "frame": 41.0,
            "time_h": 10.25,
            "max_depth_m": 5.265226364135742,
            "max_speed_mps": 2.224782943725586,
            "wet_area_ha": 3399.48388671875
          },
          {
            "frame": 42.0,
            "time_h": 10.5,
            "max_depth_m": 5.26597261428833,
            "max_speed_mps": 2.2239255905151367,
            "wet_area_ha": 3402.479248046875
          },
          {
            "frame": 43.0,
            "time_h": 10.75,
            "max_depth_m": 5.267983436584473,
            "max_speed_mps": 2.2226362228393555,
            "wet_area_ha": 3428.3125
          },
          {
            "frame": 44.0,
            "time_h": 11.0,
            "max_depth_m": 5.267636299133301,
            "max_speed_mps": 2.2219302654266357,
            "wet_area_ha": 3448.0615234375
          },
          {
            "frame": 45.0,
            "time_h": 11.25,
            "max_depth_m": 5.258993148803711,
            "max_speed_mps": 2.219569444656372,
            "wet_area_ha": 3486.634765625
          },
          {
            "frame": 46.0,
            "time_h": 11.5,
            "max_depth_m": 5.251409530639648,
            "max_speed_mps": 2.2116189002990723,
            "wet_area_ha": 3508.129150390625
          },
          {
            "frame": 47.0,
            "time_h": 11.75,
            "max_depth_m": 5.246624946594238,
            "max_speed_mps": 2.198551893234253,
            "wet_area_ha": 3529.709228515625
          },
          {
            "frame": 48.0,
            "time_h": 12.0,
            "max_depth_m": 5.242278575897217,
            "max_speed_mps": 2.1857340335845947,
            "wet_area_ha": 3543.174072265625
          }
        ]
      },
      "hist12h_hist_2024_budameru_peak_12h_high_q080": {
        "smooth_frame_pattern": "assets/video/scenarios/hist12h_hist_2024_budameru_peak_12h_high_q080/smooth_frame_{index}.png",
        "smooth_frame_count": 49,
        "smooth_poster": "assets/video/scenarios/hist12h_hist_2024_budameru_peak_12h_high_q080/smooth_flood_depth_poster.png",
        "smooth_visualization": "masked interpolation and normalized smoothing of timestep depth surface",
        "smooth_frame_width": 820,
        "smooth_frame_height": 924,
        "smooth_depth_cap_m": 4.399689197540283,
        "frame_metrics": [
          {
            "frame": 0.0,
            "time_h": 0.0,
            "max_depth_m": 1.399999976158142,
            "max_speed_mps": 0.0,
            "wet_area_ha": 1499.5009765625
          },
          {
            "frame": 1.0,
            "time_h": 0.25,
            "max_depth_m": 4.812071800231934,
            "max_speed_mps": 2.8732593059539795,
            "wet_area_ha": 1964.09619140625
          },
          {
            "frame": 2.0,
            "time_h": 0.5,
            "max_depth_m": 4.874205589294434,
            "max_speed_mps": 2.7751853466033936,
            "wet_area_ha": 1963.546142578125
          },
          {
            "frame": 3.0,
            "time_h": 0.75,
            "max_depth_m": 4.905877590179443,
            "max_speed_mps": 2.635420560836792,
            "wet_area_ha": 1973.114013671875
          },
          {
            "frame": 4.0,
            "time_h": 1.0,
            "max_depth_m": 4.921772003173828,
            "max_speed_mps": 2.4702391624450684,
            "wet_area_ha": 2002.75
          },
          {
            "frame": 5.0,
            "time_h": 1.25,
            "max_depth_m": 4.937749862670898,
            "max_speed_mps": 2.309164047241211,
            "wet_area_ha": 2015.221435546875
          },
          {
            "frame": 6.0,
            "time_h": 1.5,
            "max_depth_m": 4.955865859985352,
            "max_speed_mps": 2.1580796241760254,
            "wet_area_ha": 2053.622802734375
          },
          {
            "frame": 7.0,
            "time_h": 1.75,
            "max_depth_m": 4.978878974914551,
            "max_speed_mps": 2.025944948196411,
            "wet_area_ha": 2054.779541015625
          },
          {
            "frame": 8.0,
            "time_h": 2.0,
            "max_depth_m": 5.010976791381836,
            "max_speed_mps": 1.9017012119293213,
            "wet_area_ha": 2117.64453125
          },
          {
            "frame": 9.0,
            "time_h": 2.25,
            "max_depth_m": 5.049615383148193,
            "max_speed_mps": 1.774133563041687,
            "wet_area_ha": 2129.71240234375
          },
          {
            "frame": 10.0,
            "time_h": 2.5,
            "max_depth_m": 5.0948805809021,
            "max_speed_mps": 1.6544691324234009,
            "wet_area_ha": 2196.52734375
          },
          {
            "frame": 11.0,
            "time_h": 2.75,
            "max_depth_m": 5.14354944229126,
            "max_speed_mps": 1.8540418148040771,
            "wet_area_ha": 2232.9609375
          },
          {
            "frame": 12.0,
            "time_h": 3.0,
            "max_depth_m": 5.192795753479004,
            "max_speed_mps": 1.9410778284072876,
            "wet_area_ha": 2319.781494140625
          },
          {
            "frame": 13.0,
            "time_h": 3.25,
            "max_depth_m": 5.238043308258057,
            "max_speed_mps": 2.0032358169555664,
            "wet_area_ha": 2452.63671875
          },
          {
            "frame": 14.0,
            "time_h": 3.5,
            "max_depth_m": 5.280218124389648,
            "max_speed_mps": 2.0954856872558594,
            "wet_area_ha": 2536.10888671875
          },
          {
            "frame": 15.0,
            "time_h": 3.75,
            "max_depth_m": 5.318546295166016,
            "max_speed_mps": 2.1693484783172607,
            "wet_area_ha": 2592.16796875
          },
          {
            "frame": 16.0,
            "time_h": 4.0,
            "max_depth_m": 5.352136135101318,
            "max_speed_mps": 2.2197391986846924,
            "wet_area_ha": 2623.919677734375
          },
          {
            "frame": 17.0,
            "time_h": 4.25,
            "max_depth_m": 5.381975173950195,
            "max_speed_mps": 2.2539443969726562,
            "wet_area_ha": 2674.7919921875
          },
          {
            "frame": 18.0,
            "time_h": 4.5,
            "max_depth_m": 5.408068656921387,
            "max_speed_mps": 2.2903499603271484,
            "wet_area_ha": 2740.519287109375
          },
          {
            "frame": 19.0,
            "time_h": 4.75,
            "max_depth_m": 5.430232524871826,
            "max_speed_mps": 2.315810203552246,
            "wet_area_ha": 2805.675048828125
          },
          {
            "frame": 20.0,
            "time_h": 5.0,
            "max_depth_m": 5.449612617492676,
            "max_speed_mps": 2.3478078842163086,
            "wet_area_ha": 2892.91357421875
          },
          {
            "frame": 21.0,
            "time_h": 5.25,
            "max_depth_m": 5.4661784172058105,
            "max_speed_mps": 2.3738749027252197,
            "wet_area_ha": 3039.13720703125
          },
          {
            "frame": 22.0,
            "time_h": 5.5,
            "max_depth_m": 5.480451583862305,
            "max_speed_mps": 2.3958609104156494,
            "wet_area_ha": 3084.232177734375
          },
          {
            "frame": 23.0,
            "time_h": 5.75,
            "max_depth_m": 5.492321014404297,
            "max_speed_mps": 2.409902811050415,
            "wet_area_ha": 3112.259521484375
          },
          {
            "frame": 24.0,
            "time_h": 6.0,
            "max_depth_m": 5.502569198608398,
            "max_speed_mps": 2.4208180904388428,
            "wet_area_ha": 3151.166015625
          },
          {
            "frame": 25.0,
            "time_h": 6.25,
            "max_depth_m": 5.511358261108398,
            "max_speed_mps": 2.4302313327789307,
            "wet_area_ha": 3167.143798828125
          },
          {
            "frame": 26.0,
            "time_h": 6.5,
            "max_depth_m": 5.518798828125,
            "max_speed_mps": 2.4359588623046875,
            "wet_area_ha": 3181.9580078125
          },
          {
            "frame": 27.0,
            "time_h": 6.75,
            "max_depth_m": 5.524729251861572,
            "max_speed_mps": 2.4394853115081787,
            "wet_area_ha": 3217.26220703125
          },
          {
            "frame": 28.0,
            "time_h": 7.0,
            "max_depth_m": 5.5296125411987305,
            "max_speed_mps": 2.4420108795166016,
            "wet_area_ha": 3241.17236328125
          },
          {
            "frame": 29.0,
            "time_h": 7.25,
            "max_depth_m": 5.534000873565674,
            "max_speed_mps": 2.442291021347046,
            "wet_area_ha": 3263.9033203125
          },
          {
            "frame": 30.0,
            "time_h": 7.5,
            "max_depth_m": 5.537649631500244,
            "max_speed_mps": 2.4406986236572266,
            "wet_area_ha": 3297.44482421875
          },
          {
            "frame": 31.0,
            "time_h": 7.75,
            "max_depth_m": 5.541515350341797,
            "max_speed_mps": 2.4394524097442627,
            "wet_area_ha": 3311.2373046875
          },
          {
            "frame": 32.0,
            "time_h": 8.0,
            "max_depth_m": 5.545022010803223,
            "max_speed_mps": 2.4387738704681396,
            "wet_area_ha": 3349.05224609375
          },
          {
            "frame": 33.0,
            "time_h": 8.25,
            "max_depth_m": 5.546986103057861,
            "max_speed_mps": 2.4378693103790283,
            "wet_area_ha": 3374.75634765625
          },
          {
            "frame": 34.0,
            "time_h": 8.5,
            "max_depth_m": 5.549461841583252,
            "max_speed_mps": 2.4368062019348145,
            "wet_area_ha": 3395.43798828125
          },
          {
            "frame": 35.0,
            "time_h": 8.75,
            "max_depth_m": 5.551848411560059,
            "max_speed_mps": 2.4361042976379395,
            "wet_area_ha": 3428.087158203125
          },
          {
            "frame": 36.0,
            "time_h": 9.0,
            "max_depth_m": 5.553223133087158,
            "max_speed_mps": 2.4345390796661377,
            "wet_area_ha": 3456.67431640625
          },
          {
            "frame": 37.0,
            "time_h": 9.25,
            "max_depth_m": 5.553556442260742,
            "max_speed_mps": 2.4307637214660645,
            "wet_area_ha": 3479.75390625
          },
          {
            "frame": 38.0,
            "time_h": 9.5,
            "max_depth_m": 5.5544939041137695,
            "max_speed_mps": 2.4238388538360596,
            "wet_area_ha": 3528.04638671875
          },
          {
            "frame": 39.0,
            "time_h": 9.75,
            "max_depth_m": 5.5551958084106445,
            "max_speed_mps": 2.413856029510498,
            "wet_area_ha": 3584.357177734375
          },
          {
            "frame": 40.0,
            "time_h": 10.0,
            "max_depth_m": 5.556186199188232,
            "max_speed_mps": 2.399365186691284,
            "wet_area_ha": 3607.033935546875
          },
          {
            "frame": 41.0,
            "time_h": 10.25,
            "max_depth_m": 5.553648948669434,
            "max_speed_mps": 2.3807764053344727,
            "wet_area_ha": 3609.04443359375
          },
          {
            "frame": 42.0,
            "time_h": 10.5,
            "max_depth_m": 5.553686618804932,
            "max_speed_mps": 2.356050729751587,
            "wet_area_ha": 3671.89990234375
          },
          {
            "frame": 43.0,
            "time_h": 10.75,
            "max_depth_m": 5.555472373962402,
            "max_speed_mps": 2.3284716606140137,
            "wet_area_ha": 3718.244384765625
          },
          {
            "frame": 44.0,
            "time_h": 11.0,
            "max_depth_m": 5.5547990798950195,
            "max_speed_mps": 2.294424533843994,
            "wet_area_ha": 3765.93798828125
          },
          {
            "frame": 45.0,
            "time_h": 11.25,
            "max_depth_m": 5.544365882873535,
            "max_speed_mps": 2.255640983581543,
            "wet_area_ha": 3770.1552734375
          },
          {
            "frame": 46.0,
            "time_h": 11.5,
            "max_depth_m": 5.535626411437988,
            "max_speed_mps": 2.207976818084717,
            "wet_area_ha": 3773.116455078125
          },
          {
            "frame": 47.0,
            "time_h": 11.75,
            "max_depth_m": 5.53024959564209,
            "max_speed_mps": 2.15848708152771,
            "wet_area_ha": 3793.580322265625
          },
          {
            "frame": 48.0,
            "time_h": 12.0,
            "max_depth_m": 5.52600622177124,
            "max_speed_mps": 2.111117362976074,
            "wet_area_ha": 3836.664794921875
          }
        ]
      },
      "hist12h_hist_2024_budameru_peak_12h_high_q100": {
        "smooth_frame_pattern": "assets/video/scenarios/hist12h_hist_2024_budameru_peak_12h_high_q100/smooth_frame_{index}.png",
        "smooth_frame_count": 49,
        "smooth_poster": "assets/video/scenarios/hist12h_hist_2024_budameru_peak_12h_high_q100/smooth_flood_depth_poster.png",
        "smooth_visualization": "masked interpolation and normalized smoothing of timestep depth surface",
        "smooth_frame_width": 820,
        "smooth_frame_height": 924,
        "smooth_depth_cap_m": 4.62990665435791,
        "frame_metrics": [
          {
            "frame": 0.0,
            "time_h": 0.0,
            "max_depth_m": 1.399999976158142,
            "max_speed_mps": 0.0,
            "wet_area_ha": 1499.5009765625
          },
          {
            "frame": 1.0,
            "time_h": 0.25,
            "max_depth_m": 4.9999542236328125,
            "max_speed_mps": 3.038874387741089,
            "wet_area_ha": 2000.6966552734375
          },
          {
            "frame": 2.0,
            "time_h": 0.5,
            "max_depth_m": 5.071895599365234,
            "max_speed_mps": 2.899477481842041,
            "wet_area_ha": 1992.611572265625
          },
          {
            "frame": 3.0,
            "time_h": 0.75,
            "max_depth_m": 5.102878570556641,
            "max_speed_mps": 2.7236616611480713,
            "wet_area_ha": 2030.5008544921875
          },
          {
            "frame": 4.0,
            "time_h": 1.0,
            "max_depth_m": 5.12168550491333,
            "max_speed_mps": 2.5188000202178955,
            "wet_area_ha": 2030.6600341796875
          },
          {
            "frame": 5.0,
            "time_h": 1.25,
            "max_depth_m": 5.143211841583252,
            "max_speed_mps": 2.3369245529174805,
            "wet_area_ha": 2071.125732421875
          },
          {
            "frame": 6.0,
            "time_h": 1.5,
            "max_depth_m": 5.169680118560791,
            "max_speed_mps": 2.170607566833496,
            "wet_area_ha": 2095.78759765625
          },
          {
            "frame": 7.0,
            "time_h": 1.75,
            "max_depth_m": 5.20609188079834,
            "max_speed_mps": 2.028494358062744,
            "wet_area_ha": 2118.67138671875
          },
          {
            "frame": 8.0,
            "time_h": 2.0,
            "max_depth_m": 5.2550950050354,
            "max_speed_mps": 1.8786113262176514,
            "wet_area_ha": 2170.576171875
          },
          {
            "frame": 9.0,
            "time_h": 2.25,
            "max_depth_m": 5.313467502593994,
            "max_speed_mps": 1.91737961769104,
            "wet_area_ha": 2203.27490234375
          },
          {
            "frame": 10.0,
            "time_h": 2.5,
            "max_depth_m": 5.3738532066345215,
            "max_speed_mps": 2.0331711769104004,
            "wet_area_ha": 2322.5771484375
          },
          {
            "frame": 11.0,
            "time_h": 2.75,
            "max_depth_m": 5.431118965148926,
            "max_speed_mps": 2.177919864654541,
            "wet_area_ha": 2436.147705078125
          },
          {
            "frame": 12.0,
            "time_h": 3.0,
            "max_depth_m": 5.484705448150635,
            "max_speed_mps": 2.2703752517700195,
            "wet_area_ha": 2567.406494140625
          },
          {
            "frame": 13.0,
            "time_h": 3.25,
            "max_depth_m": 5.5334153175354,
            "max_speed_mps": 2.3298847675323486,
            "wet_area_ha": 2634.264404296875
          },
          {
            "frame": 14.0,
            "time_h": 3.5,
            "max_depth_m": 5.577144622802734,
            "max_speed_mps": 2.400242567062378,
            "wet_area_ha": 2689.377685546875
          },
          {
            "frame": 15.0,
            "time_h": 3.75,
            "max_depth_m": 5.61496114730835,
            "max_speed_mps": 2.4597015380859375,
            "wet_area_ha": 2742.43310546875
          },
          {
            "frame": 16.0,
            "time_h": 4.0,
            "max_depth_m": 5.646801948547363,
            "max_speed_mps": 2.4897654056549072,
            "wet_area_ha": 2782.19921875
          },
          {
            "frame": 17.0,
            "time_h": 4.25,
            "max_depth_m": 5.673614501953125,
            "max_speed_mps": 2.488079786300659,
            "wet_area_ha": 2901.17236328125
          },
          {
            "frame": 18.0,
            "time_h": 4.5,
            "max_depth_m": 5.695879936218262,
            "max_speed_mps": 2.4882664680480957,
            "wet_area_ha": 3078.775146484375
          },
          {
            "frame": 19.0,
            "time_h": 4.75,
            "max_depth_m": 5.713954925537109,
            "max_speed_mps": 2.4890682697296143,
            "wet_area_ha": 3142.444091796875
          },
          {
            "frame": 20.0,
            "time_h": 5.0,
            "max_depth_m": 5.729311466217041,
            "max_speed_mps": 2.490725517272949,
            "wet_area_ha": 3168.79541015625
          },
          {
            "frame": 21.0,
            "time_h": 5.25,
            "max_depth_m": 5.741917610168457,
            "max_speed_mps": 2.4906387329101562,
            "wet_area_ha": 3217.270263671875
          },
          {
            "frame": 22.0,
            "time_h": 5.5,
            "max_depth_m": 5.752406597137451,
            "max_speed_mps": 2.4903101921081543,
            "wet_area_ha": 3229.1142578125
          },
          {
            "frame": 23.0,
            "time_h": 5.75,
            "max_depth_m": 5.760669231414795,
            "max_speed_mps": 2.488717794418335,
            "wet_area_ha": 3243.8212890625
          },
          {
            "frame": 24.0,
            "time_h": 6.0,
            "max_depth_m": 5.767575263977051,
            "max_speed_mps": 2.486809253692627,
            "wet_area_ha": 3245.811279296875
          },
          {
            "frame": 25.0,
            "time_h": 6.25,
            "max_depth_m": 5.773168563842773,
            "max_speed_mps": 2.4845738410949707,
            "wet_area_ha": 3278.340087890625
          },
          {
            "frame": 26.0,
            "time_h": 6.5,
            "max_depth_m": 5.77763032913208,
            "max_speed_mps": 2.483123779296875,
            "wet_area_ha": 3288.210205078125
          },
          {
            "frame": 27.0,
            "time_h": 6.75,
            "max_depth_m": 5.780683517456055,
            "max_speed_mps": 2.4826784133911133,
            "wet_area_ha": 3315.063720703125
          },
          {
            "frame": 28.0,
            "time_h": 7.0,
            "max_depth_m": 5.782838344573975,
            "max_speed_mps": 2.482919931411743,
            "wet_area_ha": 3336.118896484375
          },
          {
            "frame": 29.0,
            "time_h": 7.25,
            "max_depth_m": 5.784680366516113,
            "max_speed_mps": 2.4820327758789062,
            "wet_area_ha": 3353.975341796875
          },
          {
            "frame": 30.0,
            "time_h": 7.5,
            "max_depth_m": 5.785981178283691,
            "max_speed_mps": 2.4796254634857178,
            "wet_area_ha": 3387.552001953125
          },
          {
            "frame": 31.0,
            "time_h": 7.75,
            "max_depth_m": 5.787841320037842,
            "max_speed_mps": 2.476320266723633,
            "wet_area_ha": 3413.46044921875
          },
          {
            "frame": 32.0,
            "time_h": 8.0,
            "max_depth_m": 5.789571285247803,
            "max_speed_mps": 2.4714560508728027,
            "wet_area_ha": 3473.423583984375
          },
          {
            "frame": 33.0,
            "time_h": 8.25,
            "max_depth_m": 5.789776802062988,
            "max_speed_mps": 2.4636876583099365,
            "wet_area_ha": 3568.735107421875
          },
          {
            "frame": 34.0,
            "time_h": 8.5,
            "max_depth_m": 5.790858745574951,
            "max_speed_mps": 2.449923515319824,
            "wet_area_ha": 3609.4111328125
          },
          {
            "frame": 35.0,
            "time_h": 8.75,
            "max_depth_m": 5.792122840881348,
            "max_speed_mps": 2.4301390647888184,
            "wet_area_ha": 3645.0615234375
          },
          {
            "frame": 36.0,
            "time_h": 9.0,
            "max_depth_m": 5.792524814605713,
            "max_speed_mps": 2.4036026000976562,
            "wet_area_ha": 3747.625244140625
          },
          {
            "frame": 37.0,
            "time_h": 9.25,
            "max_depth_m": 5.792126178741455,
            "max_speed_mps": 2.369513750076294,
            "wet_area_ha": 3793.263916015625
          },
          {
            "frame": 38.0,
            "time_h": 9.5,
            "max_depth_m": 5.792797565460205,
            "max_speed_mps": 2.327993154525757,
            "wet_area_ha": 3806.792724609375
          },
          {
            "frame": 39.0,
            "time_h": 9.75,
            "max_depth_m": 5.793576717376709,
            "max_speed_mps": 2.2810323238372803,
            "wet_area_ha": 3816.32275390625
          },
          {
            "frame": 40.0,
            "time_h": 10.0,
            "max_depth_m": 5.795078277587891,
            "max_speed_mps": 2.229118824005127,
            "wet_area_ha": 3857.38232421875
          },
          {
            "frame": 41.0,
            "time_h": 10.25,
            "max_depth_m": 5.792903423309326,
            "max_speed_mps": 2.178076982498169,
            "wet_area_ha": 3890.89404296875
          },
          {
            "frame": 42.0,
            "time_h": 10.5,
            "max_depth_m": 5.794065475463867,
            "max_speed_mps": 2.12668776512146,
            "wet_area_ha": 3932.8876953125
          },
          {
            "frame": 43.0,
            "time_h": 10.75,
            "max_depth_m": 5.797529220581055,
            "max_speed_mps": 2.0797810554504395,
            "wet_area_ha": 3972.52197265625
          },
          {
            "frame": 44.0,
            "time_h": 11.0,
            "max_depth_m": 5.798327922821045,
            "max_speed_mps": 2.0405476093292236,
            "wet_area_ha": 4013.546875
          },
          {
            "frame": 45.0,
            "time_h": 11.25,
            "max_depth_m": 5.787708759307861,
            "max_speed_mps": 2.004725456237793,
            "wet_area_ha": 4037.9208984375
          },
          {
            "frame": 46.0,
            "time_h": 11.5,
            "max_depth_m": 5.7791829109191895,
            "max_speed_mps": 1.965304970741272,
            "wet_area_ha": 4042.527099609375
          },
          {
            "frame": 47.0,
            "time_h": 11.75,
            "max_depth_m": 5.774349689483643,
            "max_speed_mps": 1.9278297424316406,
            "wet_area_ha": 4068.960693359375
          },
          {
            "frame": 48.0,
            "time_h": 12.0,
            "max_depth_m": 5.770875453948975,
            "max_speed_mps": 1.896356463432312,
            "wet_area_ha": 4084.0419921875
          }
        ]
      },
      "hist12h_hist_2024_budameru_peak_12h_normal_q060": {
        "smooth_frame_pattern": "assets/video/scenarios/hist12h_hist_2024_budameru_peak_12h_normal_q060/smooth_frame_{index}.png",
        "smooth_frame_count": 49,
        "smooth_poster": "assets/video/scenarios/hist12h_hist_2024_budameru_peak_12h_normal_q060/smooth_flood_depth_poster.png",
        "smooth_visualization": "masked interpolation and normalized smoothing of timestep depth surface",
        "smooth_frame_width": 820,
        "smooth_frame_height": 924,
        "smooth_depth_cap_m": 4.118148326873779,
        "frame_metrics": [
          {
            "frame": 0.0,
            "time_h": 0.0,
            "max_depth_m": 0.4000000059604645,
            "max_speed_mps": 0.0,
            "wet_area_ha": 1499.5009765625
          },
          {
            "frame": 1.0,
            "time_h": 0.25,
            "max_depth_m": 4.5694804191589355,
            "max_speed_mps": 2.693182945251465,
            "wet_area_ha": 1247.8388671875
          },
          {
            "frame": 2.0,
            "time_h": 0.5,
            "max_depth_m": 4.630284786224365,
            "max_speed_mps": 2.637740135192871,
            "wet_area_ha": 1319.3077392578125
          },
          {
            "frame": 3.0,
            "time_h": 0.75,
            "max_depth_m": 4.668060779571533,
            "max_speed_mps": 2.5351295471191406,
            "wet_area_ha": 1315.9798583984375
          },
          {
            "frame": 4.0,
            "time_h": 1.0,
            "max_depth_m": 4.686683177947998,
            "max_speed_mps": 2.425899028778076,
            "wet_area_ha": 1319.401611328125
          },
          {
            "frame": 5.0,
            "time_h": 1.25,
            "max_depth_m": 4.698014736175537,
            "max_speed_mps": 2.2921524047851562,
            "wet_area_ha": 1334.3934326171875
          },
          {
            "frame": 6.0,
            "time_h": 1.5,
            "max_depth_m": 4.709195613861084,
            "max_speed_mps": 2.16849422454834,
            "wet_area_ha": 1319.064208984375
          },
          {
            "frame": 7.0,
            "time_h": 1.75,
            "max_depth_m": 4.72051477432251,
            "max_speed_mps": 2.0618035793304443,
            "wet_area_ha": 1302.05126953125
          },
          {
            "frame": 8.0,
            "time_h": 2.0,
            "max_depth_m": 4.73463249206543,
            "max_speed_mps": 1.9573196172714233,
            "wet_area_ha": 1271.1702880859375
          },
          {
            "frame": 9.0,
            "time_h": 2.25,
            "max_depth_m": 4.752830982208252,
            "max_speed_mps": 1.8646293878555298,
            "wet_area_ha": 1240.542236328125
          },
          {
            "frame": 10.0,
            "time_h": 2.5,
            "max_depth_m": 4.777698040008545,
            "max_speed_mps": 1.7623496055603027,
            "wet_area_ha": 1265.6103515625
          },
          {
            "frame": 11.0,
            "time_h": 2.75,
            "max_depth_m": 4.8075032234191895,
            "max_speed_mps": 1.659928798675537,
            "wet_area_ha": 1281.3868408203125
          },
          {
            "frame": 12.0,
            "time_h": 3.0,
            "max_depth_m": 4.841001033782959,
            "max_speed_mps": 1.5639485120773315,
            "wet_area_ha": 1323.3575439453125
          },
          {
            "frame": 13.0,
            "time_h": 3.25,
            "max_depth_m": 4.876351833343506,
            "max_speed_mps": 1.499230980873108,
            "wet_area_ha": 1355.3665771484375
          },
          {
            "frame": 14.0,
            "time_h": 3.5,
            "max_depth_m": 4.9129180908203125,
            "max_speed_mps": 1.5749236345291138,
            "wet_area_ha": 1399.4993896484375
          },
          {
            "frame": 15.0,
            "time_h": 3.75,
            "max_depth_m": 4.948992729187012,
            "max_speed_mps": 1.7205277681350708,
            "wet_area_ha": 1482.4661865234375
          },
          {
            "frame": 16.0,
            "time_h": 4.0,
            "max_depth_m": 4.983224868774414,
            "max_speed_mps": 1.821236252784729,
            "wet_area_ha": 1606.497314453125
          },
          {
            "frame": 17.0,
            "time_h": 4.25,
            "max_depth_m": 5.015539646148682,
            "max_speed_mps": 1.8703292608261108,
            "wet_area_ha": 1684.167236328125
          },
          {
            "frame": 18.0,
            "time_h": 4.5,
            "max_depth_m": 5.045513153076172,
            "max_speed_mps": 1.9132144451141357,
            "wet_area_ha": 1763.8614501953125
          },
          {
            "frame": 19.0,
            "time_h": 4.75,
            "max_depth_m": 5.072673320770264,
            "max_speed_mps": 1.9421193599700928,
            "wet_area_ha": 1887.4677734375
          },
          {
            "frame": 20.0,
            "time_h": 5.0,
            "max_depth_m": 5.09727144241333,
            "max_speed_mps": 1.965844988822937,
            "wet_area_ha": 1988.8404541015625
          },
          {
            "frame": 21.0,
            "time_h": 5.25,
            "max_depth_m": 5.118988037109375,
            "max_speed_mps": 2.0070412158966064,
            "wet_area_ha": 2060.784423828125
          },
          {
            "frame": 22.0,
            "time_h": 5.5,
            "max_depth_m": 5.138192176818848,
            "max_speed_mps": 2.0407874584198,
            "wet_area_ha": 2133.003173828125
          },
          {
            "frame": 23.0,
            "time_h": 5.75,
            "max_depth_m": 5.154773235321045,
            "max_speed_mps": 2.0686302185058594,
            "wet_area_ha": 2267.14404296875
          },
          {
            "frame": 24.0,
            "time_h": 6.0,
            "max_depth_m": 5.169309616088867,
            "max_speed_mps": 2.093219757080078,
            "wet_area_ha": 2376.13720703125
          },
          {
            "frame": 25.0,
            "time_h": 6.25,
            "max_depth_m": 5.18207311630249,
            "max_speed_mps": 2.1149120330810547,
            "wet_area_ha": 2469.24560546875
          },
          {
            "frame": 26.0,
            "time_h": 6.5,
            "max_depth_m": 5.193325519561768,
            "max_speed_mps": 2.1336333751678467,
            "wet_area_ha": 2570.6396484375
          },
          {
            "frame": 27.0,
            "time_h": 6.75,
            "max_depth_m": 5.2028584480285645,
            "max_speed_mps": 2.1504974365234375,
            "wet_area_ha": 2628.252197265625
          },
          {
            "frame": 28.0,
            "time_h": 7.0,
            "max_depth_m": 5.211123943328857,
            "max_speed_mps": 2.162400245666504,
            "wet_area_ha": 2661.963134765625
          },
          {
            "frame": 29.0,
            "time_h": 7.25,
            "max_depth_m": 5.218729496002197,
            "max_speed_mps": 2.171605110168457,
            "wet_area_ha": 2722.861328125
          },
          {
            "frame": 30.0,
            "time_h": 7.5,
            "max_depth_m": 5.225428104400635,
            "max_speed_mps": 2.179340124130249,
            "wet_area_ha": 2779.330078125
          },
          {
            "frame": 31.0,
            "time_h": 7.75,
            "max_depth_m": 5.2320876121521,
            "max_speed_mps": 2.1854779720306396,
            "wet_area_ha": 2833.787109375
          },
          {
            "frame": 32.0,
            "time_h": 8.0,
            "max_depth_m": 5.238168716430664,
            "max_speed_mps": 2.1910364627838135,
            "wet_area_ha": 2870.63525390625
          },
          {
            "frame": 33.0,
            "time_h": 8.25,
            "max_depth_m": 5.242672443389893,
            "max_speed_mps": 2.196218252182007,
            "wet_area_ha": 2897.3798828125
          },
          {
            "frame": 34.0,
            "time_h": 8.5,
            "max_depth_m": 5.247398376464844,
            "max_speed_mps": 2.2007806301116943,
            "wet_area_ha": 2918.822265625
          },
          {
            "frame": 35.0,
            "time_h": 8.75,
            "max_depth_m": 5.251869201660156,
            "max_speed_mps": 2.205265760421753,
            "wet_area_ha": 2931.42431640625
          },
          {
            "frame": 36.0,
            "time_h": 9.0,
            "max_depth_m": 5.255275249481201,
            "max_speed_mps": 2.2101387977600098,
            "wet_area_ha": 2944.231689453125
          },
          {
            "frame": 37.0,
            "time_h": 9.25,
            "max_depth_m": 5.257545471191406,
            "max_speed_mps": 2.213846445083618,
            "wet_area_ha": 2954.13623046875
          },
          {
            "frame": 38.0,
            "time_h": 9.5,
            "max_depth_m": 5.260142803192139,
            "max_speed_mps": 2.2165942192077637,
            "wet_area_ha": 2965.69189453125
          },
          {
            "frame": 39.0,
            "time_h": 9.75,
            "max_depth_m": 5.262336730957031,
            "max_speed_mps": 2.219273328781128,
            "wet_area_ha": 2974.1796875
          },
          {
            "frame": 40.0,
            "time_h": 10.0,
            "max_depth_m": 5.264554023742676,
            "max_speed_mps": 2.2216179370880127,
            "wet_area_ha": 2987.7646484375
          },
          {
            "frame": 41.0,
            "time_h": 10.25,
            "max_depth_m": 5.263523101806641,
            "max_speed_mps": 2.2232704162597656,
            "wet_area_ha": 2998.771728515625
          },
          {
            "frame": 42.0,
            "time_h": 10.5,
            "max_depth_m": 5.264435768127441,
            "max_speed_mps": 2.223187208175659,
            "wet_area_ha": 3005.257080078125
          },
          {
            "frame": 43.0,
            "time_h": 10.75,
            "max_depth_m": 5.266595840454102,
            "max_speed_mps": 2.2228944301605225,
            "wet_area_ha": 3017.29931640625
          },
          {
            "frame": 44.0,
            "time_h": 11.0,
            "max_depth_m": 5.2663750648498535,
            "max_speed_mps": 2.2234878540039062,
            "wet_area_ha": 3040.078857421875
          },
          {
            "frame": 45.0,
            "time_h": 11.25,
            "max_depth_m": 5.2578277587890625,
            "max_speed_mps": 2.2226455211639404,
            "wet_area_ha": 3047.5703125
          },
          {
            "frame": 46.0,
            "time_h": 11.5,
            "max_depth_m": 5.25031852722168,
            "max_speed_mps": 2.216777801513672,
            "wet_area_ha": 3059.939697265625
          },
          {
            "frame": 47.0,
            "time_h": 11.75,
            "max_depth_m": 5.245590686798096,
            "max_speed_mps": 2.2066800594329834,
            "wet_area_ha": 3098.33251953125
          },
          {
            "frame": 48.0,
            "time_h": 12.0,
            "max_depth_m": 5.241270065307617,
            "max_speed_mps": 2.197240114212036,
            "wet_area_ha": 3133.963623046875
          }
        ]
      },
      "hist12h_hist_2024_budameru_peak_12h_normal_q080": {
        "smooth_frame_pattern": "assets/video/scenarios/hist12h_hist_2024_budameru_peak_12h_normal_q080/smooth_frame_{index}.png",
        "smooth_frame_count": 49,
        "smooth_poster": "assets/video/scenarios/hist12h_hist_2024_budameru_peak_12h_normal_q080/smooth_flood_depth_poster.png",
        "smooth_visualization": "masked interpolation and normalized smoothing of timestep depth surface",
        "smooth_frame_width": 820,
        "smooth_frame_height": 924,
        "smooth_depth_cap_m": 4.393340110778809,
        "frame_metrics": [
          {
            "frame": 0.0,
            "time_h": 0.0,
            "max_depth_m": 0.4000000059604645,
            "max_speed_mps": 0.0,
            "wet_area_ha": 1499.5009765625
          },
          {
            "frame": 1.0,
            "time_h": 0.25,
            "max_depth_m": 4.792351245880127,
            "max_speed_mps": 2.885316848754883,
            "wet_area_ha": 1277.649169921875
          },
          {
            "frame": 2.0,
            "time_h": 0.5,
            "max_depth_m": 4.862370014190674,
            "max_speed_mps": 2.7962045669555664,
            "wet_area_ha": 1337.485107421875
          },
          {
            "frame": 3.0,
            "time_h": 0.75,
            "max_depth_m": 4.9016547203063965,
            "max_speed_mps": 2.6595404148101807,
            "wet_area_ha": 1350.256103515625
          },
          {
            "frame": 4.0,
            "time_h": 1.0,
            "max_depth_m": 4.918985366821289,
            "max_speed_mps": 2.502824068069458,
            "wet_area_ha": 1385.634765625
          },
          {
            "frame": 5.0,
            "time_h": 1.25,
            "max_depth_m": 4.934497833251953,
            "max_speed_mps": 2.3392860889434814,
            "wet_area_ha": 1376.592529296875
          },
          {
            "frame": 6.0,
            "time_h": 1.5,
            "max_depth_m": 4.951039791107178,
            "max_speed_mps": 2.203136444091797,
            "wet_area_ha": 1378.7921142578125
          },
          {
            "frame": 7.0,
            "time_h": 1.75,
            "max_depth_m": 4.969561576843262,
            "max_speed_mps": 2.0720911026000977,
            "wet_area_ha": 1360.92041015625
          },
          {
            "frame": 8.0,
            "time_h": 2.0,
            "max_depth_m": 4.995811462402344,
            "max_speed_mps": 1.9603192806243896,
            "wet_area_ha": 1343.8939208984375
          },
          {
            "frame": 9.0,
            "time_h": 2.25,
            "max_depth_m": 5.029782772064209,
            "max_speed_mps": 1.8363265991210938,
            "wet_area_ha": 1317.9080810546875
          },
          {
            "frame": 10.0,
            "time_h": 2.5,
            "max_depth_m": 5.071435451507568,
            "max_speed_mps": 1.7124723196029663,
            "wet_area_ha": 1359.9405517578125
          },
          {
            "frame": 11.0,
            "time_h": 2.75,
            "max_depth_m": 5.117909908294678,
            "max_speed_mps": 1.7627007961273193,
            "wet_area_ha": 1371.8133544921875
          },
          {
            "frame": 12.0,
            "time_h": 3.0,
            "max_depth_m": 5.1675591468811035,
            "max_speed_mps": 1.8997812271118164,
            "wet_area_ha": 1450.8607177734375
          },
          {
            "frame": 13.0,
            "time_h": 3.25,
            "max_depth_m": 5.214702606201172,
            "max_speed_mps": 1.9689871072769165,
            "wet_area_ha": 1571.7840576171875
          },
          {
            "frame": 14.0,
            "time_h": 3.5,
            "max_depth_m": 5.258555889129639,
            "max_speed_mps": 2.049323558807373,
            "wet_area_ha": 1688.8963623046875
          },
          {
            "frame": 15.0,
            "time_h": 3.75,
            "max_depth_m": 5.298858165740967,
            "max_speed_mps": 2.133852243423462,
            "wet_area_ha": 1793.916748046875
          },
          {
            "frame": 16.0,
            "time_h": 4.0,
            "max_depth_m": 5.33463191986084,
            "max_speed_mps": 2.1980347633361816,
            "wet_area_ha": 1896.2947998046875
          },
          {
            "frame": 17.0,
            "time_h": 4.25,
            "max_depth_m": 5.366385459899902,
            "max_speed_mps": 2.2356748580932617,
            "wet_area_ha": 2028.0655517578125
          },
          {
            "frame": 18.0,
            "time_h": 4.5,
            "max_depth_m": 5.3943257331848145,
            "max_speed_mps": 2.2719814777374268,
            "wet_area_ha": 2116.018310546875
          },
          {
            "frame": 19.0,
            "time_h": 4.75,
            "max_depth_m": 5.418152809143066,
            "max_speed_mps": 2.3003287315368652,
            "wet_area_ha": 2187.59423828125
          },
          {
            "frame": 20.0,
            "time_h": 5.0,
            "max_depth_m": 5.439044952392578,
            "max_speed_mps": 2.3308088779449463,
            "wet_area_ha": 2321.325439453125
          },
          {
            "frame": 21.0,
            "time_h": 5.25,
            "max_depth_m": 5.456937313079834,
            "max_speed_mps": 2.3602123260498047,
            "wet_area_ha": 2495.641845703125
          },
          {
            "frame": 22.0,
            "time_h": 5.5,
            "max_depth_m": 5.472326278686523,
            "max_speed_mps": 2.3841757774353027,
            "wet_area_ha": 2613.306396484375
          },
          {
            "frame": 23.0,
            "time_h": 5.75,
            "max_depth_m": 5.485179901123047,
            "max_speed_mps": 2.402923345565796,
            "wet_area_ha": 2638.630126953125
          },
          {
            "frame": 24.0,
            "time_h": 6.0,
            "max_depth_m": 5.496297836303711,
            "max_speed_mps": 2.4143905639648438,
            "wet_area_ha": 2666.003173828125
          },
          {
            "frame": 25.0,
            "time_h": 6.25,
            "max_depth_m": 5.5058512687683105,
            "max_speed_mps": 2.4251208305358887,
            "wet_area_ha": 2753.95654296875
          },
          {
            "frame": 26.0,
            "time_h": 6.5,
            "max_depth_m": 5.51397180557251,
            "max_speed_mps": 2.432636022567749,
            "wet_area_ha": 2787.904296875
          },
          {
            "frame": 27.0,
            "time_h": 6.75,
            "max_depth_m": 5.520473003387451,
            "max_speed_mps": 2.43715763092041,
            "wet_area_ha": 2818.43603515625
          },
          {
            "frame": 28.0,
            "time_h": 7.0,
            "max_depth_m": 5.52585506439209,
            "max_speed_mps": 2.440096139907837,
            "wet_area_ha": 2840.71875
          },
          {
            "frame": 29.0,
            "time_h": 7.25,
            "max_depth_m": 5.530694484710693,
            "max_speed_mps": 2.4422929286956787,
            "wet_area_ha": 2855.885498046875
          },
          {
            "frame": 30.0,
            "time_h": 7.5,
            "max_depth_m": 5.5347466468811035,
            "max_speed_mps": 2.4414000511169434,
            "wet_area_ha": 2891.936767578125
          },
          {
            "frame": 31.0,
            "time_h": 7.75,
            "max_depth_m": 5.5389723777771,
            "max_speed_mps": 2.4399876594543457,
            "wet_area_ha": 2929.86328125
          },
          {
            "frame": 32.0,
            "time_h": 8.0,
            "max_depth_m": 5.542784214019775,
            "max_speed_mps": 2.4392616748809814,
            "wet_area_ha": 2967.029541015625
          },
          {
            "frame": 33.0,
            "time_h": 8.25,
            "max_depth_m": 5.545014381408691,
            "max_speed_mps": 2.4386467933654785,
            "wet_area_ha": 2990.748046875
          },
          {
            "frame": 34.0,
            "time_h": 8.5,
            "max_depth_m": 5.547723770141602,
            "max_speed_mps": 2.437483787536621,
            "wet_area_ha": 3015.485595703125
          },
          {
            "frame": 35.0,
            "time_h": 8.75,
            "max_depth_m": 5.5503129959106445,
            "max_speed_mps": 2.436976194381714,
            "wet_area_ha": 3029.284912109375
          },
          {
            "frame": 36.0,
            "time_h": 9.0,
            "max_depth_m": 5.55186128616333,
            "max_speed_mps": 2.4368252754211426,
            "wet_area_ha": 3055.038330078125
          },
          {
            "frame": 37.0,
            "time_h": 9.25,
            "max_depth_m": 5.552337646484375,
            "max_speed_mps": 2.435243606567383,
            "wet_area_ha": 3068.0390625
          },
          {
            "frame": 38.0,
            "time_h": 9.5,
            "max_depth_m": 5.553387641906738,
            "max_speed_mps": 2.431767702102661,
            "wet_area_ha": 3088.999755859375
          },
          {
            "frame": 39.0,
            "time_h": 9.75,
            "max_depth_m": 5.554165363311768,
            "max_speed_mps": 2.4263477325439453,
            "wet_area_ha": 3122.2001953125
          },
          {
            "frame": 40.0,
            "time_h": 10.0,
            "max_depth_m": 5.555192470550537,
            "max_speed_mps": 2.4175479412078857,
            "wet_area_ha": 3194.063720703125
          },
          {
            "frame": 41.0,
            "time_h": 10.25,
            "max_depth_m": 5.552646160125732,
            "max_speed_mps": 2.4048848152160645,
            "wet_area_ha": 3223.001708984375
          },
          {
            "frame": 42.0,
            "time_h": 10.5,
            "max_depth_m": 5.5526299476623535,
            "max_speed_mps": 2.3865773677825928,
            "wet_area_ha": 3230.52587890625
          },
          {
            "frame": 43.0,
            "time_h": 10.75,
            "max_depth_m": 5.554310321807861,
            "max_speed_mps": 2.364417791366577,
            "wet_area_ha": 3300.87451171875
          },
          {
            "frame": 44.0,
            "time_h": 11.0,
            "max_depth_m": 5.553470134735107,
            "max_speed_mps": 2.339567184448242,
            "wet_area_ha": 3352.352294921875
          },
          {
            "frame": 45.0,
            "time_h": 11.25,
            "max_depth_m": 5.542803764343262,
            "max_speed_mps": 2.306013822555542,
            "wet_area_ha": 3371.94287109375
          },
          {
            "frame": 46.0,
            "time_h": 11.5,
            "max_depth_m": 5.533781051635742,
            "max_speed_mps": 2.2636494636535645,
            "wet_area_ha": 3394.31689453125
          },
          {
            "frame": 47.0,
            "time_h": 11.75,
            "max_depth_m": 5.528095722198486,
            "max_speed_mps": 2.216675043106079,
            "wet_area_ha": 3415.753662109375
          },
          {
            "frame": 48.0,
            "time_h": 12.0,
            "max_depth_m": 5.523514747619629,
            "max_speed_mps": 2.169419050216675,
            "wet_area_ha": 3436.275634765625
          }
        ]
      },
      "hist12h_hist_2024_budameru_peak_12h_normal_q100": {
        "smooth_frame_pattern": "assets/video/scenarios/hist12h_hist_2024_budameru_peak_12h_normal_q100/smooth_frame_{index}.png",
        "smooth_frame_count": 49,
        "smooth_poster": "assets/video/scenarios/hist12h_hist_2024_budameru_peak_12h_normal_q100/smooth_flood_depth_poster.png",
        "smooth_visualization": "masked interpolation and normalized smoothing of timestep depth surface",
        "smooth_frame_width": 820,
        "smooth_frame_height": 924,
        "smooth_depth_cap_m": 4.625974178314209,
        "frame_metrics": [
          {
            "frame": 0.0,
            "time_h": 0.0,
            "max_depth_m": 0.4000000059604645,
            "max_speed_mps": 0.0,
            "wet_area_ha": 1499.5009765625
          },
          {
            "frame": 1.0,
            "time_h": 0.25,
            "max_depth_m": 4.984479904174805,
            "max_speed_mps": 3.0491809844970703,
            "wet_area_ha": 1315.0589599609375
          },
          {
            "frame": 2.0,
            "time_h": 0.5,
            "max_depth_m": 5.063140392303467,
            "max_speed_mps": 2.921393394470215,
            "wet_area_ha": 1351.679443359375
          },
          {
            "frame": 3.0,
            "time_h": 0.75,
            "max_depth_m": 5.0998334884643555,
            "max_speed_mps": 2.7518725395202637,
            "wet_area_ha": 1387.355712890625
          },
          {
            "frame": 4.0,
            "time_h": 1.0,
            "max_depth_m": 5.118712425231934,
            "max_speed_mps": 2.5495493412017822,
            "wet_area_ha": 1410.8641357421875
          },
          {
            "frame": 5.0,
            "time_h": 1.25,
            "max_depth_m": 5.139283180236816,
            "max_speed_mps": 2.3725194931030273,
            "wet_area_ha": 1436.82421875
          },
          {
            "frame": 6.0,
            "time_h": 1.5,
            "max_depth_m": 5.162088394165039,
            "max_speed_mps": 2.208252191543579,
            "wet_area_ha": 1423.3426513671875
          },
          {
            "frame": 7.0,
            "time_h": 1.75,
            "max_depth_m": 5.1922993659973145,
            "max_speed_mps": 2.081364154815674,
            "wet_area_ha": 1428.84619140625
          },
          {
            "frame": 8.0,
            "time_h": 2.0,
            "max_depth_m": 5.234954833984375,
            "max_speed_mps": 1.9369533061981201,
            "wet_area_ha": 1402.0621337890625
          },
          {
            "frame": 9.0,
            "time_h": 2.25,
            "max_depth_m": 5.289150238037109,
            "max_speed_mps": 1.83391273021698,
            "wet_area_ha": 1388.1363525390625
          },
          {
            "frame": 10.0,
            "time_h": 2.5,
            "max_depth_m": 5.349328517913818,
            "max_speed_mps": 1.9991344213485718,
            "wet_area_ha": 1441.3790283203125
          },
          {
            "frame": 11.0,
            "time_h": 2.75,
            "max_depth_m": 5.407753944396973,
            "max_speed_mps": 2.124664306640625,
            "wet_area_ha": 1546.058349609375
          },
          {
            "frame": 12.0,
            "time_h": 3.0,
            "max_depth_m": 5.463050365447998,
            "max_speed_mps": 2.24385142326355,
            "wet_area_ha": 1721.823974609375
          },
          {
            "frame": 13.0,
            "time_h": 3.25,
            "max_depth_m": 5.513550281524658,
            "max_speed_mps": 2.3096048831939697,
            "wet_area_ha": 1805.8446044921875
          },
          {
            "frame": 14.0,
            "time_h": 3.5,
            "max_depth_m": 5.559523582458496,
            "max_speed_mps": 2.37032151222229,
            "wet_area_ha": 1892.18359375
          },
          {
            "frame": 15.0,
            "time_h": 3.75,
            "max_depth_m": 5.599545478820801,
            "max_speed_mps": 2.437593698501587,
            "wet_area_ha": 2015.8590087890625
          },
          {
            "frame": 16.0,
            "time_h": 4.0,
            "max_depth_m": 5.6336445808410645,
            "max_speed_mps": 2.4829964637756348,
            "wet_area_ha": 2127.8076171875
          },
          {
            "frame": 17.0,
            "time_h": 4.25,
            "max_depth_m": 5.662503719329834,
            "max_speed_mps": 2.487744092941284,
            "wet_area_ha": 2247.603759765625
          },
          {
            "frame": 18.0,
            "time_h": 4.5,
            "max_depth_m": 5.68646764755249,
            "max_speed_mps": 2.4881296157836914,
            "wet_area_ha": 2461.627197265625
          },
          {
            "frame": 19.0,
            "time_h": 4.75,
            "max_depth_m": 5.7059245109558105,
            "max_speed_mps": 2.488349437713623,
            "wet_area_ha": 2611.208251953125
          },
          {
            "frame": 20.0,
            "time_h": 5.0,
            "max_depth_m": 5.722472667694092,
            "max_speed_mps": 2.4898738861083984,
            "wet_area_ha": 2669.34228515625
          },
          {
            "frame": 21.0,
            "time_h": 5.25,
            "max_depth_m": 5.736089706420898,
            "max_speed_mps": 2.490605354309082,
            "wet_area_ha": 2691.101318359375
          },
          {
            "frame": 22.0,
            "time_h": 5.5,
            "max_depth_m": 5.747383117675781,
            "max_speed_mps": 2.4906134605407715,
            "wet_area_ha": 2774.9892578125
          },
          {
            "frame": 23.0,
            "time_h": 5.75,
            "max_depth_m": 5.756333827972412,
            "max_speed_mps": 2.489205837249756,
            "wet_area_ha": 2828.1005859375
          },
          {
            "frame": 24.0,
            "time_h": 6.0,
            "max_depth_m": 5.763834476470947,
            "max_speed_mps": 2.487456798553467,
            "wet_area_ha": 2842.512939453125
          },
          {
            "frame": 25.0,
            "time_h": 6.25,
            "max_depth_m": 5.76995325088501,
            "max_speed_mps": 2.485292434692383,
            "wet_area_ha": 2867.12890625
          },
          {
            "frame": 26.0,
            "time_h": 6.5,
            "max_depth_m": 5.774868965148926,
            "max_speed_mps": 2.4834470748901367,
            "wet_area_ha": 2895.67529296875
          },
          {
            "frame": 27.0,
            "time_h": 6.75,
            "max_depth_m": 5.778313636779785,
            "max_speed_mps": 2.4824094772338867,
            "wet_area_ha": 2924.466064453125
          },
          {
            "frame": 28.0,
            "time_h": 7.0,
            "max_depth_m": 5.780798435211182,
            "max_speed_mps": 2.4823410511016846,
            "wet_area_ha": 2936.79931640625
          },
          {
            "frame": 29.0,
            "time_h": 7.25,
            "max_depth_m": 5.782918453216553,
            "max_speed_mps": 2.4825663566589355,
            "wet_area_ha": 2953.212890625
          },
          {
            "frame": 30.0,
            "time_h": 7.5,
            "max_depth_m": 5.784465789794922,
            "max_speed_mps": 2.481060266494751,
            "wet_area_ha": 2984.26171875
          },
          {
            "frame": 31.0,
            "time_h": 7.75,
            "max_depth_m": 5.786533832550049,
            "max_speed_mps": 2.4789607524871826,
            "wet_area_ha": 3021.7841796875
          },
          {
            "frame": 32.0,
            "time_h": 8.0,
            "max_depth_m": 5.788432598114014,
            "max_speed_mps": 2.4763553142547607,
            "wet_area_ha": 3067.87939453125
          },
          {
            "frame": 33.0,
            "time_h": 8.25,
            "max_depth_m": 5.788760662078857,
            "max_speed_mps": 2.471853256225586,
            "wet_area_ha": 3116.4560546875
          },
          {
            "frame": 34.0,
            "time_h": 8.5,
            "max_depth_m": 5.789914608001709,
            "max_speed_mps": 2.4638006687164307,
            "wet_area_ha": 3181.6943359375
          },
          {
            "frame": 35.0,
            "time_h": 8.75,
            "max_depth_m": 5.791201114654541,
            "max_speed_mps": 2.450747013092041,
            "wet_area_ha": 3230.236083984375
          },
          {
            "frame": 36.0,
            "time_h": 9.0,
            "max_depth_m": 5.791563510894775,
            "max_speed_mps": 2.4314002990722656,
            "wet_area_ha": 3268.234375
          },
          {
            "frame": 37.0,
            "time_h": 9.25,
            "max_depth_m": 5.79105806350708,
            "max_speed_mps": 2.404982089996338,
            "wet_area_ha": 3348.792724609375
          },
          {
            "frame": 38.0,
            "time_h": 9.5,
            "max_depth_m": 5.7915568351745605,
            "max_speed_mps": 2.3710176944732666,
            "wet_area_ha": 3420.5703125
          },
          {
            "frame": 39.0,
            "time_h": 9.75,
            "max_depth_m": 5.7921037673950195,
            "max_speed_mps": 2.3305585384368896,
            "wet_area_ha": 3429.0068359375
          },
          {
            "frame": 40.0,
            "time_h": 10.0,
            "max_depth_m": 5.793329238891602,
            "max_speed_mps": 2.2839086055755615,
            "wet_area_ha": 3448.5439453125
          },
          {
            "frame": 41.0,
            "time_h": 10.25,
            "max_depth_m": 5.790829181671143,
            "max_speed_mps": 2.2326953411102295,
            "wet_area_ha": 3473.899169921875
          },
          {
            "frame": 42.0,
            "time_h": 10.5,
            "max_depth_m": 5.791649341583252,
            "max_speed_mps": 2.1800553798675537,
            "wet_area_ha": 3522.2548828125
          },
          {
            "frame": 43.0,
            "time_h": 10.75,
            "max_depth_m": 5.794793128967285,
            "max_speed_mps": 2.1298258304595947,
            "wet_area_ha": 3553.2431640625
          },
          {
            "frame": 44.0,
            "time_h": 11.0,
            "max_depth_m": 5.795290470123291,
            "max_speed_mps": 2.083606719970703,
            "wet_area_ha": 3614.8447265625
          },
          {
            "frame": 45.0,
            "time_h": 11.25,
            "max_depth_m": 5.784381866455078,
            "max_speed_mps": 2.0427329540252686,
            "wet_area_ha": 3649.24560546875
          },
          {
            "frame": 46.0,
            "time_h": 11.5,
            "max_depth_m": 5.775632381439209,
            "max_speed_mps": 2.000547409057617,
            "wet_area_ha": 3677.80078125
          },
          {
            "frame": 47.0,
            "time_h": 11.75,
            "max_depth_m": 5.770659923553467,
            "max_speed_mps": 1.9614735841751099,
            "wet_area_ha": 3697.759521484375
          },
          {
            "frame": 48.0,
            "time_h": 12.0,
            "max_depth_m": 5.76709508895874,
            "max_speed_mps": 1.9280829429626465,
            "wet_area_ha": 3724.775634765625
          }
        ]
      },
      "hist12h_hist_extreme_2001_2025_12h_elevated_q060": {
        "smooth_frame_pattern": "assets/video/scenarios/hist12h_hist_extreme_2001_2025_12h_elevated_q060/smooth_frame_{index}.png",
        "smooth_frame_count": 49,
        "smooth_poster": "assets/video/scenarios/hist12h_hist_extreme_2001_2025_12h_elevated_q060/smooth_flood_depth_poster.png",
        "smooth_visualization": "masked interpolation and normalized smoothing of timestep depth surface",
        "smooth_frame_width": 820,
        "smooth_frame_height": 924,
        "smooth_depth_cap_m": 4.144354343414307,
        "frame_metrics": [
          {
            "frame": 0.0,
            "time_h": 0.0,
            "max_depth_m": 0.8999999761581421,
            "max_speed_mps": 0.0,
            "wet_area_ha": 1499.5009765625
          },
          {
            "frame": 1.0,
            "time_h": 0.25,
            "max_depth_m": 4.584057807922363,
            "max_speed_mps": 2.6931276321411133,
            "wet_area_ha": 1647.4945068359375
          },
          {
            "frame": 2.0,
            "time_h": 0.5,
            "max_depth_m": 4.638063430786133,
            "max_speed_mps": 2.6286799907684326,
            "wet_area_ha": 1683.4219970703125
          },
          {
            "frame": 3.0,
            "time_h": 0.75,
            "max_depth_m": 4.67193603515625,
            "max_speed_mps": 2.5224175453186035,
            "wet_area_ha": 1653.628173828125
          },
          {
            "frame": 4.0,
            "time_h": 1.0,
            "max_depth_m": 4.6886186599731445,
            "max_speed_mps": 2.4103691577911377,
            "wet_area_ha": 1682.8455810546875
          },
          {
            "frame": 5.0,
            "time_h": 1.25,
            "max_depth_m": 4.69954776763916,
            "max_speed_mps": 2.2745048999786377,
            "wet_area_ha": 1691.758056640625
          },
          {
            "frame": 6.0,
            "time_h": 1.5,
            "max_depth_m": 4.710809230804443,
            "max_speed_mps": 2.1529219150543213,
            "wet_area_ha": 1686.650146484375
          },
          {
            "frame": 7.0,
            "time_h": 1.75,
            "max_depth_m": 4.722728729248047,
            "max_speed_mps": 2.040468215942383,
            "wet_area_ha": 1660.462158203125
          },
          {
            "frame": 8.0,
            "time_h": 2.0,
            "max_depth_m": 4.73861837387085,
            "max_speed_mps": 1.9344907999038696,
            "wet_area_ha": 1645.8702392578125
          },
          {
            "frame": 9.0,
            "time_h": 2.25,
            "max_depth_m": 4.759603023529053,
            "max_speed_mps": 1.8336436748504639,
            "wet_area_ha": 1639.21875
          },
          {
            "frame": 10.0,
            "time_h": 2.5,
            "max_depth_m": 4.786938667297363,
            "max_speed_mps": 1.7292206287384033,
            "wet_area_ha": 1652.733154296875
          },
          {
            "frame": 11.0,
            "time_h": 2.75,
            "max_depth_m": 4.818531513214111,
            "max_speed_mps": 1.6269526481628418,
            "wet_area_ha": 1650.58203125
          },
          {
            "frame": 12.0,
            "time_h": 3.0,
            "max_depth_m": 4.853471755981445,
            "max_speed_mps": 1.5325813293457031,
            "wet_area_ha": 1682.25439453125
          },
          {
            "frame": 13.0,
            "time_h": 3.25,
            "max_depth_m": 4.889493942260742,
            "max_speed_mps": 1.5258240699768066,
            "wet_area_ha": 1728.3095703125
          },
          {
            "frame": 14.0,
            "time_h": 3.5,
            "max_depth_m": 4.926281452178955,
            "max_speed_mps": 1.6309400796890259,
            "wet_area_ha": 1768.7891845703125
          },
          {
            "frame": 15.0,
            "time_h": 3.75,
            "max_depth_m": 4.961969375610352,
            "max_speed_mps": 1.765485167503357,
            "wet_area_ha": 1858.6590576171875
          },
          {
            "frame": 16.0,
            "time_h": 4.0,
            "max_depth_m": 4.995590686798096,
            "max_speed_mps": 1.8389568328857422,
            "wet_area_ha": 2006.1214599609375
          },
          {
            "frame": 17.0,
            "time_h": 4.25,
            "max_depth_m": 5.027073383331299,
            "max_speed_mps": 1.8868803977966309,
            "wet_area_ha": 2066.75341796875
          },
          {
            "frame": 18.0,
            "time_h": 4.5,
            "max_depth_m": 5.056327819824219,
            "max_speed_mps": 1.9283905029296875,
            "wet_area_ha": 2145.768798828125
          },
          {
            "frame": 19.0,
            "time_h": 4.75,
            "max_depth_m": 5.08262825012207,
            "max_speed_mps": 1.94948410987854,
            "wet_area_ha": 2229.58447265625
          },
          {
            "frame": 20.0,
            "time_h": 5.0,
            "max_depth_m": 5.106245517730713,
            "max_speed_mps": 1.9822566509246826,
            "wet_area_ha": 2277.8369140625
          },
          {
            "frame": 21.0,
            "time_h": 5.25,
            "max_depth_m": 5.1281633377075195,
            "max_speed_mps": 2.0224831104278564,
            "wet_area_ha": 2363.849609375
          },
          {
            "frame": 22.0,
            "time_h": 5.5,
            "max_depth_m": 5.147583961486816,
            "max_speed_mps": 2.0552961826324463,
            "wet_area_ha": 2460.838623046875
          },
          {
            "frame": 23.0,
            "time_h": 5.75,
            "max_depth_m": 5.1643524169921875,
            "max_speed_mps": 2.0838959217071533,
            "wet_area_ha": 2616.66259765625
          },
          {
            "frame": 24.0,
            "time_h": 6.0,
            "max_depth_m": 5.179056167602539,
            "max_speed_mps": 2.10846209526062,
            "wet_area_ha": 2728.133056640625
          },
          {
            "frame": 25.0,
            "time_h": 6.25,
            "max_depth_m": 5.192606449127197,
            "max_speed_mps": 2.1305651664733887,
            "wet_area_ha": 2825.69970703125
          },
          {
            "frame": 26.0,
            "time_h": 6.5,
            "max_depth_m": 5.204584121704102,
            "max_speed_mps": 2.15084171295166,
            "wet_area_ha": 2936.846435546875
          },
          {
            "frame": 27.0,
            "time_h": 6.75,
            "max_depth_m": 5.21486234664917,
            "max_speed_mps": 2.164242744445801,
            "wet_area_ha": 3065.449951171875
          },
          {
            "frame": 28.0,
            "time_h": 7.0,
            "max_depth_m": 5.223886013031006,
            "max_speed_mps": 2.1755638122558594,
            "wet_area_ha": 3128.7236328125
          },
          {
            "frame": 29.0,
            "time_h": 7.25,
            "max_depth_m": 5.232762813568115,
            "max_speed_mps": 2.1845271587371826,
            "wet_area_ha": 3199.364990234375
          },
          {
            "frame": 30.0,
            "time_h": 7.5,
            "max_depth_m": 5.24071741104126,
            "max_speed_mps": 2.1920628547668457,
            "wet_area_ha": 3277.773681640625
          },
          {
            "frame": 31.0,
            "time_h": 7.75,
            "max_depth_m": 5.2485833168029785,
            "max_speed_mps": 2.1991066932678223,
            "wet_area_ha": 3358.486328125
          },
          {
            "frame": 32.0,
            "time_h": 8.0,
            "max_depth_m": 5.2558183670043945,
            "max_speed_mps": 2.207491397857666,
            "wet_area_ha": 3400.477294921875
          },
          {
            "frame": 33.0,
            "time_h": 8.25,
            "max_depth_m": 5.260875701904297,
            "max_speed_mps": 2.2148594856262207,
            "wet_area_ha": 3451.6708984375
          },
          {
            "frame": 34.0,
            "time_h": 8.5,
            "max_depth_m": 5.266090393066406,
            "max_speed_mps": 2.2212533950805664,
            "wet_area_ha": 3487.697265625
          },
          {
            "frame": 35.0,
            "time_h": 8.75,
            "max_depth_m": 5.270967483520508,
            "max_speed_mps": 2.2275538444519043,
            "wet_area_ha": 3522.763671875
          },
          {
            "frame": 36.0,
            "time_h": 9.0,
            "max_depth_m": 5.274733066558838,
            "max_speed_mps": 2.2334346771240234,
            "wet_area_ha": 3543.031982421875
          },
          {
            "frame": 37.0,
            "time_h": 9.25,
            "max_depth_m": 5.277632713317871,
            "max_speed_mps": 2.238292932510376,
            "wet_area_ha": 3571.865234375
          },
          {
            "frame": 38.0,
            "time_h": 9.5,
            "max_depth_m": 5.280770301818848,
            "max_speed_mps": 2.242295026779175,
            "wet_area_ha": 3596.599609375
          },
          {
            "frame": 39.0,
            "time_h": 9.75,
            "max_depth_m": 5.28344202041626,
            "max_speed_mps": 2.246086597442627,
            "wet_area_ha": 3647.35400390625
          },
          {
            "frame": 40.0,
            "time_h": 10.0,
            "max_depth_m": 5.2860798835754395,
            "max_speed_mps": 2.249570369720459,
            "wet_area_ha": 3675.1884765625
          },
          {
            "frame": 41.0,
            "time_h": 10.25,
            "max_depth_m": 5.285346508026123,
            "max_speed_mps": 2.2530345916748047,
            "wet_area_ha": 3670.00390625
          },
          {
            "frame": 42.0,
            "time_h": 10.5,
            "max_depth_m": 5.286494731903076,
            "max_speed_mps": 2.2545721530914307,
            "wet_area_ha": 3694.025146484375
          },
          {
            "frame": 43.0,
            "time_h": 10.75,
            "max_depth_m": 5.288834095001221,
            "max_speed_mps": 2.254835367202759,
            "wet_area_ha": 3712.2060546875
          },
          {
            "frame": 44.0,
            "time_h": 11.0,
            "max_depth_m": 5.28884220123291,
            "max_speed_mps": 2.254966974258423,
            "wet_area_ha": 3729.580078125
          },
          {
            "frame": 45.0,
            "time_h": 11.25,
            "max_depth_m": 5.278942108154297,
            "max_speed_mps": 2.251396417617798,
            "wet_area_ha": 3715.47412109375
          },
          {
            "frame": 46.0,
            "time_h": 11.5,
            "max_depth_m": 5.270185947418213,
            "max_speed_mps": 2.2412421703338623,
            "wet_area_ha": 3716.138916015625
          },
          {
            "frame": 47.0,
            "time_h": 11.75,
            "max_depth_m": 5.264101505279541,
            "max_speed_mps": 2.225623846054077,
            "wet_area_ha": 3719.0224609375
          },
          {
            "frame": 48.0,
            "time_h": 12.0,
            "max_depth_m": 5.258552074432373,
            "max_speed_mps": 2.208969831466675,
            "wet_area_ha": 3746.660888671875
          }
        ]
      },
      "hist12h_hist_extreme_2001_2025_12h_elevated_q080": {
        "smooth_frame_pattern": "assets/video/scenarios/hist12h_hist_extreme_2001_2025_12h_elevated_q080/smooth_frame_{index}.png",
        "smooth_frame_count": 49,
        "smooth_poster": "assets/video/scenarios/hist12h_hist_extreme_2001_2025_12h_elevated_q080/smooth_flood_depth_poster.png",
        "smooth_visualization": "masked interpolation and normalized smoothing of timestep depth surface",
        "smooth_frame_width": 820,
        "smooth_frame_height": 924,
        "smooth_depth_cap_m": 4.412875175476074,
        "frame_metrics": [
          {
            "frame": 0.0,
            "time_h": 0.0,
            "max_depth_m": 0.8999999761581421,
            "max_speed_mps": 0.0,
            "wet_area_ha": 1499.5009765625
          },
          {
            "frame": 1.0,
            "time_h": 0.25,
            "max_depth_m": 4.803338527679443,
            "max_speed_mps": 2.8802568912506104,
            "wet_area_ha": 1671.13525390625
          },
          {
            "frame": 2.0,
            "time_h": 0.5,
            "max_depth_m": 4.868998050689697,
            "max_speed_mps": 2.7856438159942627,
            "wet_area_ha": 1703.364013671875
          },
          {
            "frame": 3.0,
            "time_h": 0.75,
            "max_depth_m": 4.904073238372803,
            "max_speed_mps": 2.647338390350342,
            "wet_area_ha": 1686.5152587890625
          },
          {
            "frame": 4.0,
            "time_h": 1.0,
            "max_depth_m": 4.92059326171875,
            "max_speed_mps": 2.485389232635498,
            "wet_area_ha": 1727.965576171875
          },
          {
            "frame": 5.0,
            "time_h": 1.25,
            "max_depth_m": 4.936183929443359,
            "max_speed_mps": 2.324542999267578,
            "wet_area_ha": 1738.251953125
          },
          {
            "frame": 6.0,
            "time_h": 1.5,
            "max_depth_m": 4.953206539154053,
            "max_speed_mps": 2.1833527088165283,
            "wet_area_ha": 1742.9896240234375
          },
          {
            "frame": 7.0,
            "time_h": 1.75,
            "max_depth_m": 4.973635673522949,
            "max_speed_mps": 2.051470994949341,
            "wet_area_ha": 1711.94482421875
          },
          {
            "frame": 8.0,
            "time_h": 2.0,
            "max_depth_m": 5.002838134765625,
            "max_speed_mps": 1.9319785833358765,
            "wet_area_ha": 1733.699951171875
          },
          {
            "frame": 9.0,
            "time_h": 2.25,
            "max_depth_m": 5.0392632484436035,
            "max_speed_mps": 1.8053607940673828,
            "wet_area_ha": 1715.7803955078125
          },
          {
            "frame": 10.0,
            "time_h": 2.5,
            "max_depth_m": 5.08311128616333,
            "max_speed_mps": 1.682503342628479,
            "wet_area_ha": 1738.127197265625
          },
          {
            "frame": 11.0,
            "time_h": 2.75,
            "max_depth_m": 5.1308817863464355,
            "max_speed_mps": 1.8192514181137085,
            "wet_area_ha": 1757.01025390625
          },
          {
            "frame": 12.0,
            "time_h": 3.0,
            "max_depth_m": 5.1805925369262695,
            "max_speed_mps": 1.921345829963684,
            "wet_area_ha": 1823.562744140625
          },
          {
            "frame": 13.0,
            "time_h": 3.25,
            "max_depth_m": 5.226848602294922,
            "max_speed_mps": 1.9792050123214722,
            "wet_area_ha": 1940.2900390625
          },
          {
            "frame": 14.0,
            "time_h": 3.5,
            "max_depth_m": 5.269932270050049,
            "max_speed_mps": 2.0731029510498047,
            "wet_area_ha": 2102.632080078125
          },
          {
            "frame": 15.0,
            "time_h": 3.75,
            "max_depth_m": 5.309338569641113,
            "max_speed_mps": 2.1536552906036377,
            "wet_area_ha": 2174.463134765625
          },
          {
            "frame": 16.0,
            "time_h": 4.0,
            "max_depth_m": 5.3440260887146,
            "max_speed_mps": 2.209970235824585,
            "wet_area_ha": 2253.218505859375
          },
          {
            "frame": 17.0,
            "time_h": 4.25,
            "max_depth_m": 5.374828815460205,
            "max_speed_mps": 2.2445335388183594,
            "wet_area_ha": 2338.60205078125
          },
          {
            "frame": 18.0,
            "time_h": 4.5,
            "max_depth_m": 5.40185022354126,
            "max_speed_mps": 2.282487154006958,
            "wet_area_ha": 2414.553466796875
          },
          {
            "frame": 19.0,
            "time_h": 4.75,
            "max_depth_m": 5.42485237121582,
            "max_speed_mps": 2.30832839012146,
            "wet_area_ha": 2485.281982421875
          },
          {
            "frame": 20.0,
            "time_h": 5.0,
            "max_depth_m": 5.444986343383789,
            "max_speed_mps": 2.3403806686401367,
            "wet_area_ha": 2612.020263671875
          },
          {
            "frame": 21.0,
            "time_h": 5.25,
            "max_depth_m": 5.463296413421631,
            "max_speed_mps": 2.3691656589508057,
            "wet_area_ha": 2786.837890625
          },
          {
            "frame": 22.0,
            "time_h": 5.5,
            "max_depth_m": 5.4791083335876465,
            "max_speed_mps": 2.3935368061065674,
            "wet_area_ha": 2862.45263671875
          },
          {
            "frame": 23.0,
            "time_h": 5.75,
            "max_depth_m": 5.492373943328857,
            "max_speed_mps": 2.409583568572998,
            "wet_area_ha": 2955.78564453125
          },
          {
            "frame": 24.0,
            "time_h": 6.0,
            "max_depth_m": 5.5038743019104,
            "max_speed_mps": 2.421894073486328,
            "wet_area_ha": 2996.814697265625
          },
          {
            "frame": 25.0,
            "time_h": 6.25,
            "max_depth_m": 5.514262676239014,
            "max_speed_mps": 2.4320530891418457,
            "wet_area_ha": 3070.53857421875
          },
          {
            "frame": 26.0,
            "time_h": 6.5,
            "max_depth_m": 5.523169040679932,
            "max_speed_mps": 2.4377222061157227,
            "wet_area_ha": 3121.419921875
          },
          {
            "frame": 27.0,
            "time_h": 6.75,
            "max_depth_m": 5.530449390411377,
            "max_speed_mps": 2.4412879943847656,
            "wet_area_ha": 3201.570556640625
          },
          {
            "frame": 28.0,
            "time_h": 7.0,
            "max_depth_m": 5.536550045013428,
            "max_speed_mps": 2.4410274028778076,
            "wet_area_ha": 3236.71484375
          },
          {
            "frame": 29.0,
            "time_h": 7.25,
            "max_depth_m": 5.5425543785095215,
            "max_speed_mps": 2.4385359287261963,
            "wet_area_ha": 3292.01806640625
          },
          {
            "frame": 30.0,
            "time_h": 7.5,
            "max_depth_m": 5.5477070808410645,
            "max_speed_mps": 2.4362053871154785,
            "wet_area_ha": 3372.36279296875
          },
          {
            "frame": 31.0,
            "time_h": 7.75,
            "max_depth_m": 5.552999019622803,
            "max_speed_mps": 2.43711519241333,
            "wet_area_ha": 3447.83349609375
          },
          {
            "frame": 32.0,
            "time_h": 8.0,
            "max_depth_m": 5.557804107666016,
            "max_speed_mps": 2.4372365474700928,
            "wet_area_ha": 3516.1279296875
          },
          {
            "frame": 33.0,
            "time_h": 8.25,
            "max_depth_m": 5.560389518737793,
            "max_speed_mps": 2.437163829803467,
            "wet_area_ha": 3569.023681640625
          },
          {
            "frame": 34.0,
            "time_h": 8.5,
            "max_depth_m": 5.563396453857422,
            "max_speed_mps": 2.436464309692383,
            "wet_area_ha": 3602.884033203125
          },
          {
            "frame": 35.0,
            "time_h": 8.75,
            "max_depth_m": 5.566209316253662,
            "max_speed_mps": 2.4352855682373047,
            "wet_area_ha": 3639.052490234375
          },
          {
            "frame": 36.0,
            "time_h": 9.0,
            "max_depth_m": 5.5679473876953125,
            "max_speed_mps": 2.4329206943511963,
            "wet_area_ha": 3669.676513671875
          },
          {
            "frame": 37.0,
            "time_h": 9.25,
            "max_depth_m": 5.56890344619751,
            "max_speed_mps": 2.4284281730651855,
            "wet_area_ha": 3720.34033203125
          },
          {
            "frame": 38.0,
            "time_h": 9.5,
            "max_depth_m": 5.570362091064453,
            "max_speed_mps": 2.421297550201416,
            "wet_area_ha": 3773.30078125
          },
          {
            "frame": 39.0,
            "time_h": 9.75,
            "max_depth_m": 5.57151460647583,
            "max_speed_mps": 2.41066837310791,
            "wet_area_ha": 3838.489501953125
          },
          {
            "frame": 40.0,
            "time_h": 10.0,
            "max_depth_m": 5.572899341583252,
            "max_speed_mps": 2.395789861679077,
            "wet_area_ha": 3893.048828125
          },
          {
            "frame": 41.0,
            "time_h": 10.25,
            "max_depth_m": 5.570645809173584,
            "max_speed_mps": 2.3789260387420654,
            "wet_area_ha": 3892.75
          },
          {
            "frame": 42.0,
            "time_h": 10.5,
            "max_depth_m": 5.570927619934082,
            "max_speed_mps": 2.3536744117736816,
            "wet_area_ha": 3928.874755859375
          },
          {
            "frame": 43.0,
            "time_h": 10.75,
            "max_depth_m": 5.572936058044434,
            "max_speed_mps": 2.3200109004974365,
            "wet_area_ha": 3974.75244140625
          },
          {
            "frame": 44.0,
            "time_h": 11.0,
            "max_depth_m": 5.57253885269165,
            "max_speed_mps": 2.281754493713379,
            "wet_area_ha": 3987.822021484375
          },
          {
            "frame": 45.0,
            "time_h": 11.25,
            "max_depth_m": 5.560858249664307,
            "max_speed_mps": 2.2381880283355713,
            "wet_area_ha": 3976.43408203125
          },
          {
            "frame": 46.0,
            "time_h": 11.5,
            "max_depth_m": 5.551001071929932,
            "max_speed_mps": 2.186605453491211,
            "wet_area_ha": 3961.439208984375
          },
          {
            "frame": 47.0,
            "time_h": 11.75,
            "max_depth_m": 5.5445237159729,
            "max_speed_mps": 2.13399600982666,
            "wet_area_ha": 4008.05908203125
          },
          {
            "frame": 48.0,
            "time_h": 12.0,
            "max_depth_m": 5.539318084716797,
            "max_speed_mps": 2.0847740173339844,
            "wet_area_ha": 4027.0048828125
          }
        ]
      },
      "hist12h_hist_extreme_2001_2025_12h_elevated_q100": {
        "smooth_frame_pattern": "assets/video/scenarios/hist12h_hist_extreme_2001_2025_12h_elevated_q100/smooth_frame_{index}.png",
        "smooth_frame_count": 49,
        "smooth_poster": "assets/video/scenarios/hist12h_hist_extreme_2001_2025_12h_elevated_q100/smooth_flood_depth_poster.png",
        "smooth_visualization": "masked interpolation and normalized smoothing of timestep depth surface",
        "smooth_frame_width": 820,
        "smooth_frame_height": 924,
        "smooth_depth_cap_m": 4.6395182609558105,
        "frame_metrics": [
          {
            "frame": 0.0,
            "time_h": 0.0,
            "max_depth_m": 0.8999999761581421,
            "max_speed_mps": 0.0,
            "wet_area_ha": 1499.5009765625
          },
          {
            "frame": 1.0,
            "time_h": 0.25,
            "max_depth_m": 4.992668151855469,
            "max_speed_mps": 3.0444657802581787,
            "wet_area_ha": 1702.0030517578125
          },
          {
            "frame": 2.0,
            "time_h": 0.5,
            "max_depth_m": 5.067920207977295,
            "max_speed_mps": 2.91011381149292,
            "wet_area_ha": 1713.210205078125
          },
          {
            "frame": 3.0,
            "time_h": 0.75,
            "max_depth_m": 5.10156774520874,
            "max_speed_mps": 2.737631320953369,
            "wet_area_ha": 1735.656005859375
          },
          {
            "frame": 4.0,
            "time_h": 1.0,
            "max_depth_m": 5.120388984680176,
            "max_speed_mps": 2.533525228500366,
            "wet_area_ha": 1759.3232421875
          },
          {
            "frame": 5.0,
            "time_h": 1.25,
            "max_depth_m": 5.141183376312256,
            "max_speed_mps": 2.356522560119629,
            "wet_area_ha": 1794.2835693359375
          },
          {
            "frame": 6.0,
            "time_h": 1.5,
            "max_depth_m": 5.165454864501953,
            "max_speed_mps": 2.1913485527038574,
            "wet_area_ha": 1782.299560546875
          },
          {
            "frame": 7.0,
            "time_h": 1.75,
            "max_depth_m": 5.198631763458252,
            "max_speed_mps": 2.0561368465423584,
            "wet_area_ha": 1780.1319580078125
          },
          {
            "frame": 8.0,
            "time_h": 2.0,
            "max_depth_m": 5.244656085968018,
            "max_speed_mps": 1.9076509475708008,
            "wet_area_ha": 1777.7099609375
          },
          {
            "frame": 9.0,
            "time_h": 2.25,
            "max_depth_m": 5.301377773284912,
            "max_speed_mps": 1.8970566987991333,
            "wet_area_ha": 1778.5262451171875
          },
          {
            "frame": 10.0,
            "time_h": 2.5,
            "max_depth_m": 5.361934185028076,
            "max_speed_mps": 2.0040905475616455,
            "wet_area_ha": 1853.333251953125
          },
          {
            "frame": 11.0,
            "time_h": 2.75,
            "max_depth_m": 5.419830322265625,
            "max_speed_mps": 2.151463031768799,
            "wet_area_ha": 1949.824951171875
          },
          {
            "frame": 12.0,
            "time_h": 3.0,
            "max_depth_m": 5.474266052246094,
            "max_speed_mps": 2.259100914001465,
            "wet_area_ha": 2108.619384765625
          },
          {
            "frame": 13.0,
            "time_h": 3.25,
            "max_depth_m": 5.523937702178955,
            "max_speed_mps": 2.3197133541107178,
            "wet_area_ha": 2193.264892578125
          },
          {
            "frame": 14.0,
            "time_h": 3.5,
            "max_depth_m": 5.568861484527588,
            "max_speed_mps": 2.3864338397979736,
            "wet_area_ha": 2266.3076171875
          },
          {
            "frame": 15.0,
            "time_h": 3.75,
            "max_depth_m": 5.607797145843506,
            "max_speed_mps": 2.4495534896850586,
            "wet_area_ha": 2362.460205078125
          },
          {
            "frame": 16.0,
            "time_h": 4.0,
            "max_depth_m": 5.640793800354004,
            "max_speed_mps": 2.487978458404541,
            "wet_area_ha": 2442.42431640625
          },
          {
            "frame": 17.0,
            "time_h": 4.25,
            "max_depth_m": 5.668626308441162,
            "max_speed_mps": 2.4874777793884277,
            "wet_area_ha": 2549.34716796875
          },
          {
            "frame": 18.0,
            "time_h": 4.5,
            "max_depth_m": 5.691728591918945,
            "max_speed_mps": 2.488208055496216,
            "wet_area_ha": 2767.814453125
          },
          {
            "frame": 19.0,
            "time_h": 4.75,
            "max_depth_m": 5.710490703582764,
            "max_speed_mps": 2.4886574745178223,
            "wet_area_ha": 2861.626953125
          },
          {
            "frame": 20.0,
            "time_h": 5.0,
            "max_depth_m": 5.726437568664551,
            "max_speed_mps": 2.490427255630493,
            "wet_area_ha": 2890.53271484375
          },
          {
            "frame": 21.0,
            "time_h": 5.25,
            "max_depth_m": 5.740631103515625,
            "max_speed_mps": 2.4904704093933105,
            "wet_area_ha": 2970.044677734375
          },
          {
            "frame": 22.0,
            "time_h": 5.5,
            "max_depth_m": 5.7524614334106445,
            "max_speed_mps": 2.4902360439300537,
            "wet_area_ha": 3046.134033203125
          },
          {
            "frame": 23.0,
            "time_h": 5.75,
            "max_depth_m": 5.761909008026123,
            "max_speed_mps": 2.4885499477386475,
            "wet_area_ha": 3088.000732421875
          },
          {
            "frame": 24.0,
            "time_h": 6.0,
            "max_depth_m": 5.7698540687561035,
            "max_speed_mps": 2.4864935874938965,
            "wet_area_ha": 3113.189208984375
          },
          {
            "frame": 25.0,
            "time_h": 6.25,
            "max_depth_m": 5.776837348937988,
            "max_speed_mps": 2.484304666519165,
            "wet_area_ha": 3178.80908203125
          },
          {
            "frame": 26.0,
            "time_h": 6.5,
            "max_depth_m": 5.78253173828125,
            "max_speed_mps": 2.4830410480499268,
            "wet_area_ha": 3227.555908203125
          },
          {
            "frame": 27.0,
            "time_h": 6.75,
            "max_depth_m": 5.786694526672363,
            "max_speed_mps": 2.4834203720092773,
            "wet_area_ha": 3295.53662109375
          },
          {
            "frame": 28.0,
            "time_h": 7.0,
            "max_depth_m": 5.789855003356934,
            "max_speed_mps": 2.4831149578094482,
            "wet_area_ha": 3334.053955078125
          },
          {
            "frame": 29.0,
            "time_h": 7.25,
            "max_depth_m": 5.79310417175293,
            "max_speed_mps": 2.481275796890259,
            "wet_area_ha": 3381.468505859375
          },
          {
            "frame": 30.0,
            "time_h": 7.5,
            "max_depth_m": 5.795672416687012,
            "max_speed_mps": 2.4790804386138916,
            "wet_area_ha": 3458.239990234375
          },
          {
            "frame": 31.0,
            "time_h": 7.75,
            "max_depth_m": 5.798670768737793,
            "max_speed_mps": 2.475672960281372,
            "wet_area_ha": 3542.39794921875
          },
          {
            "frame": 32.0,
            "time_h": 8.0,
            "max_depth_m": 5.801416873931885,
            "max_speed_mps": 2.4708757400512695,
            "wet_area_ha": 3615.2236328125
          },
          {
            "frame": 33.0,
            "time_h": 8.25,
            "max_depth_m": 5.8019843101501465,
            "max_speed_mps": 2.4625329971313477,
            "wet_area_ha": 3708.9931640625
          },
          {
            "frame": 34.0,
            "time_h": 8.5,
            "max_depth_m": 5.803341388702393,
            "max_speed_mps": 2.4483683109283447,
            "wet_area_ha": 3766.485107421875
          },
          {
            "frame": 35.0,
            "time_h": 8.75,
            "max_depth_m": 5.8048095703125,
            "max_speed_mps": 2.4287545680999756,
            "wet_area_ha": 3859.03955078125
          },
          {
            "frame": 36.0,
            "time_h": 9.0,
            "max_depth_m": 5.8053812980651855,
            "max_speed_mps": 2.401695489883423,
            "wet_area_ha": 3909.288330078125
          },
          {
            "frame": 37.0,
            "time_h": 9.25,
            "max_depth_m": 5.805438995361328,
            "max_speed_mps": 2.363469123840332,
            "wet_area_ha": 3958.6591796875
          },
          {
            "frame": 38.0,
            "time_h": 9.5,
            "max_depth_m": 5.806491851806641,
            "max_speed_mps": 2.3203299045562744,
            "wet_area_ha": 3983.912109375
          },
          {
            "frame": 39.0,
            "time_h": 9.75,
            "max_depth_m": 5.807611465454102,
            "max_speed_mps": 2.268035888671875,
            "wet_area_ha": 4054.0126953125
          },
          {
            "frame": 40.0,
            "time_h": 10.0,
            "max_depth_m": 5.809441566467285,
            "max_speed_mps": 2.213209390640259,
            "wet_area_ha": 4076.97412109375
          },
          {
            "frame": 41.0,
            "time_h": 10.25,
            "max_depth_m": 5.807530879974365,
            "max_speed_mps": 2.1594326496124268,
            "wet_area_ha": 4112.458984375
          },
          {
            "frame": 42.0,
            "time_h": 10.5,
            "max_depth_m": 5.808955669403076,
            "max_speed_mps": 2.1070683002471924,
            "wet_area_ha": 4166.37939453125
          },
          {
            "frame": 43.0,
            "time_h": 10.75,
            "max_depth_m": 5.812700271606445,
            "max_speed_mps": 2.06062650680542,
            "wet_area_ha": 4183.2783203125
          },
          {
            "frame": 44.0,
            "time_h": 11.0,
            "max_depth_m": 5.8138580322265625,
            "max_speed_mps": 2.020777702331543,
            "wet_area_ha": 4214.091796875
          },
          {
            "frame": 45.0,
            "time_h": 11.25,
            "max_depth_m": 5.802100658416748,
            "max_speed_mps": 1.9822149276733398,
            "wet_area_ha": 4202.4326171875
          },
          {
            "frame": 46.0,
            "time_h": 11.5,
            "max_depth_m": 5.7925615310668945,
            "max_speed_mps": 1.941041111946106,
            "wet_area_ha": 4206.11376953125
          },
          {
            "frame": 47.0,
            "time_h": 11.75,
            "max_depth_m": 5.7867584228515625,
            "max_speed_mps": 1.9046066999435425,
            "wet_area_ha": 4207.94091796875
          },
          {
            "frame": 48.0,
            "time_h": 12.0,
            "max_depth_m": 5.7824530601501465,
            "max_speed_mps": 1.8721567392349243,
            "wet_area_ha": 4241.09423828125
          }
        ]
      },
      "hist12h_hist_extreme_2001_2025_12h_high_q060": {
        "smooth_frame_pattern": "assets/video/scenarios/hist12h_hist_extreme_2001_2025_12h_high_q060/smooth_frame_{index}.png",
        "smooth_frame_count": 49,
        "smooth_poster": "assets/video/scenarios/hist12h_hist_extreme_2001_2025_12h_high_q060/smooth_flood_depth_poster.png",
        "smooth_visualization": "masked interpolation and normalized smoothing of timestep depth surface",
        "smooth_frame_width": 820,
        "smooth_frame_height": 924,
        "smooth_depth_cap_m": 4.148361682891846,
        "frame_metrics": [
          {
            "frame": 0.0,
            "time_h": 0.0,
            "max_depth_m": 1.399999976158142,
            "max_speed_mps": 0.0,
            "wet_area_ha": 1499.5009765625
          },
          {
            "frame": 1.0,
            "time_h": 0.25,
            "max_depth_m": 4.5954508781433105,
            "max_speed_mps": 2.6861982345581055,
            "wet_area_ha": 1938.179443359375
          },
          {
            "frame": 2.0,
            "time_h": 0.5,
            "max_depth_m": 4.776556968688965,
            "max_speed_mps": 2.6195766925811768,
            "wet_area_ha": 1961.9376220703125
          },
          {
            "frame": 3.0,
            "time_h": 0.75,
            "max_depth_m": 4.777390956878662,
            "max_speed_mps": 2.5097882747650146,
            "wet_area_ha": 1938.772216796875
          },
          {
            "frame": 4.0,
            "time_h": 1.0,
            "max_depth_m": 4.775341510772705,
            "max_speed_mps": 2.394059181213379,
            "wet_area_ha": 1987.6236572265625
          },
          {
            "frame": 5.0,
            "time_h": 1.25,
            "max_depth_m": 4.768613815307617,
            "max_speed_mps": 2.25618839263916,
            "wet_area_ha": 1981.775146484375
          },
          {
            "frame": 6.0,
            "time_h": 1.5,
            "max_depth_m": 4.75957727432251,
            "max_speed_mps": 2.1337149143218994,
            "wet_area_ha": 2012.793212890625
          },
          {
            "frame": 7.0,
            "time_h": 1.75,
            "max_depth_m": 4.74959659576416,
            "max_speed_mps": 2.0099639892578125,
            "wet_area_ha": 2018.7281494140625
          },
          {
            "frame": 8.0,
            "time_h": 2.0,
            "max_depth_m": 4.744316577911377,
            "max_speed_mps": 1.9040502309799194,
            "wet_area_ha": 2063.281005859375
          },
          {
            "frame": 9.0,
            "time_h": 2.25,
            "max_depth_m": 4.768186569213867,
            "max_speed_mps": 1.7985224723815918,
            "wet_area_ha": 2075.658203125
          },
          {
            "frame": 10.0,
            "time_h": 2.5,
            "max_depth_m": 4.797610759735107,
            "max_speed_mps": 1.6937434673309326,
            "wet_area_ha": 2151.795166015625
          },
          {
            "frame": 11.0,
            "time_h": 2.75,
            "max_depth_m": 4.830569744110107,
            "max_speed_mps": 1.5937987565994263,
            "wet_area_ha": 2172.137939453125
          },
          {
            "frame": 12.0,
            "time_h": 3.0,
            "max_depth_m": 4.866305828094482,
            "max_speed_mps": 1.5029207468032837,
            "wet_area_ha": 2191.58349609375
          },
          {
            "frame": 13.0,
            "time_h": 3.25,
            "max_depth_m": 4.902638912200928,
            "max_speed_mps": 1.5523968935012817,
            "wet_area_ha": 2214.413818359375
          },
          {
            "frame": 14.0,
            "time_h": 3.5,
            "max_depth_m": 4.939293384552002,
            "max_speed_mps": 1.6816679239273071,
            "wet_area_ha": 2243.2958984375
          },
          {
            "frame": 15.0,
            "time_h": 3.75,
            "max_depth_m": 4.974422931671143,
            "max_speed_mps": 1.8029471635818481,
            "wet_area_ha": 2326.989013671875
          },
          {
            "frame": 16.0,
            "time_h": 4.0,
            "max_depth_m": 5.00728702545166,
            "max_speed_mps": 1.8567461967468262,
            "wet_area_ha": 2411.263671875
          },
          {
            "frame": 17.0,
            "time_h": 4.25,
            "max_depth_m": 5.0379862785339355,
            "max_speed_mps": 1.9015368223190308,
            "wet_area_ha": 2465.036376953125
          },
          {
            "frame": 18.0,
            "time_h": 4.5,
            "max_depth_m": 5.066458225250244,
            "max_speed_mps": 1.9365864992141724,
            "wet_area_ha": 2523.5712890625
          },
          {
            "frame": 19.0,
            "time_h": 4.75,
            "max_depth_m": 5.09175443649292,
            "max_speed_mps": 1.9562796354293823,
            "wet_area_ha": 2568.472412109375
          },
          {
            "frame": 20.0,
            "time_h": 5.0,
            "max_depth_m": 5.114412784576416,
            "max_speed_mps": 1.9972527027130127,
            "wet_area_ha": 2615.22607421875
          },
          {
            "frame": 21.0,
            "time_h": 5.25,
            "max_depth_m": 5.135470867156982,
            "max_speed_mps": 2.034575939178467,
            "wet_area_ha": 2700.996826171875
          },
          {
            "frame": 22.0,
            "time_h": 5.5,
            "max_depth_m": 5.154110908508301,
            "max_speed_mps": 2.065487861633301,
            "wet_area_ha": 2783.016357421875
          },
          {
            "frame": 23.0,
            "time_h": 5.75,
            "max_depth_m": 5.1701154708862305,
            "max_speed_mps": 2.0929481983184814,
            "wet_area_ha": 2912.678466796875
          },
          {
            "frame": 24.0,
            "time_h": 6.0,
            "max_depth_m": 5.1841816902160645,
            "max_speed_mps": 2.116375684738159,
            "wet_area_ha": 3011.677490234375
          },
          {
            "frame": 25.0,
            "time_h": 6.25,
            "max_depth_m": 5.197208404541016,
            "max_speed_mps": 2.1376802921295166,
            "wet_area_ha": 3144.579833984375
          },
          {
            "frame": 26.0,
            "time_h": 6.5,
            "max_depth_m": 5.208693027496338,
            "max_speed_mps": 2.1563589572906494,
            "wet_area_ha": 3249.18505859375
          },
          {
            "frame": 27.0,
            "time_h": 6.75,
            "max_depth_m": 5.218565940856934,
            "max_speed_mps": 2.1686322689056396,
            "wet_area_ha": 3345.065673828125
          },
          {
            "frame": 28.0,
            "time_h": 7.0,
            "max_depth_m": 5.227226257324219,
            "max_speed_mps": 2.1791234016418457,
            "wet_area_ha": 3432.345703125
          },
          {
            "frame": 29.0,
            "time_h": 7.25,
            "max_depth_m": 5.235788822174072,
            "max_speed_mps": 2.187431573867798,
            "wet_area_ha": 3502.091552734375
          },
          {
            "frame": 30.0,
            "time_h": 7.5,
            "max_depth_m": 5.243453025817871,
            "max_speed_mps": 2.1946699619293213,
            "wet_area_ha": 3591.246337890625
          },
          {
            "frame": 31.0,
            "time_h": 7.75,
            "max_depth_m": 5.251046180725098,
            "max_speed_mps": 2.2020840644836426,
            "wet_area_ha": 3644.12353515625
          },
          {
            "frame": 32.0,
            "time_h": 8.0,
            "max_depth_m": 5.25803279876709,
            "max_speed_mps": 2.21022629737854,
            "wet_area_ha": 3687.372802734375
          },
          {
            "frame": 33.0,
            "time_h": 8.25,
            "max_depth_m": 5.2628679275512695,
            "max_speed_mps": 2.2173407077789307,
            "wet_area_ha": 3718.61962890625
          },
          {
            "frame": 34.0,
            "time_h": 8.5,
            "max_depth_m": 5.267882347106934,
            "max_speed_mps": 2.2235372066497803,
            "wet_area_ha": 3735.998291015625
          },
          {
            "frame": 35.0,
            "time_h": 8.75,
            "max_depth_m": 5.272576332092285,
            "max_speed_mps": 2.229856491088867,
            "wet_area_ha": 3777.001220703125
          },
          {
            "frame": 36.0,
            "time_h": 9.0,
            "max_depth_m": 5.276181221008301,
            "max_speed_mps": 2.2364861965179443,
            "wet_area_ha": 3790.100341796875
          },
          {
            "frame": 37.0,
            "time_h": 9.25,
            "max_depth_m": 5.278962135314941,
            "max_speed_mps": 2.2436013221740723,
            "wet_area_ha": 3826.813232421875
          },
          {
            "frame": 38.0,
            "time_h": 9.5,
            "max_depth_m": 5.282050132751465,
            "max_speed_mps": 2.2493858337402344,
            "wet_area_ha": 3869.34130859375
          },
          {
            "frame": 39.0,
            "time_h": 9.75,
            "max_depth_m": 5.284738063812256,
            "max_speed_mps": 2.253584861755371,
            "wet_area_ha": 3910.172119140625
          },
          {
            "frame": 40.0,
            "time_h": 10.0,
            "max_depth_m": 5.287429332733154,
            "max_speed_mps": 2.2566728591918945,
            "wet_area_ha": 3938.820068359375
          },
          {
            "frame": 41.0,
            "time_h": 10.25,
            "max_depth_m": 5.286749839782715,
            "max_speed_mps": 2.2581787109375,
            "wet_area_ha": 3974.269287109375
          },
          {
            "frame": 42.0,
            "time_h": 10.5,
            "max_depth_m": 5.287901878356934,
            "max_speed_mps": 2.2575483322143555,
            "wet_area_ha": 3987.266357421875
          },
          {
            "frame": 43.0,
            "time_h": 10.75,
            "max_depth_m": 5.290191650390625,
            "max_speed_mps": 2.256256341934204,
            "wet_area_ha": 4010.41845703125
          },
          {
            "frame": 44.0,
            "time_h": 11.0,
            "max_depth_m": 5.290131568908691,
            "max_speed_mps": 2.254917621612549,
            "wet_area_ha": 4027.71435546875
          },
          {
            "frame": 45.0,
            "time_h": 11.25,
            "max_depth_m": 5.280162811279297,
            "max_speed_mps": 2.2493395805358887,
            "wet_area_ha": 4017.2607421875
          },
          {
            "frame": 46.0,
            "time_h": 11.5,
            "max_depth_m": 5.271345615386963,
            "max_speed_mps": 2.2370848655700684,
            "wet_area_ha": 4011.486083984375
          },
          {
            "frame": 47.0,
            "time_h": 11.75,
            "max_depth_m": 5.265209197998047,
            "max_speed_mps": 2.219034433364868,
            "wet_area_ha": 4003.31689453125
          },
          {
            "frame": 48.0,
            "time_h": 12.0,
            "max_depth_m": 5.2596306800842285,
            "max_speed_mps": 2.1996963024139404,
            "wet_area_ha": 3997.12646484375
          }
        ]
      },
      "hist12h_hist_extreme_2001_2025_12h_high_q080": {
        "smooth_frame_pattern": "assets/video/scenarios/hist12h_hist_extreme_2001_2025_12h_high_q080/smooth_frame_{index}.png",
        "smooth_frame_count": 49,
        "smooth_poster": "assets/video/scenarios/hist12h_hist_extreme_2001_2025_12h_high_q080/smooth_flood_depth_poster.png",
        "smooth_visualization": "masked interpolation and normalized smoothing of timestep depth surface",
        "smooth_frame_width": 820,
        "smooth_frame_height": 924,
        "smooth_depth_cap_m": 4.4159255027771,
        "frame_metrics": [
          {
            "frame": 0.0,
            "time_h": 0.0,
            "max_depth_m": 1.399999976158142,
            "max_speed_mps": 0.0,
            "wet_area_ha": 1499.5009765625
          },
          {
            "frame": 1.0,
            "time_h": 0.25,
            "max_depth_m": 4.812176704406738,
            "max_speed_mps": 2.873168468475342,
            "wet_area_ha": 1964.728759765625
          },
          {
            "frame": 2.0,
            "time_h": 0.5,
            "max_depth_m": 4.874389171600342,
            "max_speed_mps": 2.774914026260376,
            "wet_area_ha": 1972.584228515625
          },
          {
            "frame": 3.0,
            "time_h": 0.75,
            "max_depth_m": 4.90609884262085,
            "max_speed_mps": 2.634830951690674,
            "wet_area_ha": 1975.612548828125
          },
          {
            "frame": 4.0,
            "time_h": 1.0,
            "max_depth_m": 4.922032833099365,
            "max_speed_mps": 2.46919846534729,
            "wet_area_ha": 2013.3966064453125
          },
          {
            "frame": 5.0,
            "time_h": 1.25,
            "max_depth_m": 4.937926292419434,
            "max_speed_mps": 2.307978630065918,
            "wet_area_ha": 2029.399658203125
          },
          {
            "frame": 6.0,
            "time_h": 1.5,
            "max_depth_m": 4.956069469451904,
            "max_speed_mps": 2.156611680984497,
            "wet_area_ha": 2068.43603515625
          },
          {
            "frame": 7.0,
            "time_h": 1.75,
            "max_depth_m": 4.979175567626953,
            "max_speed_mps": 2.0246777534484863,
            "wet_area_ha": 2069.981201171875
          },
          {
            "frame": 8.0,
            "time_h": 2.0,
            "max_depth_m": 5.011388301849365,
            "max_speed_mps": 1.9002630710601807,
            "wet_area_ha": 2137.649658203125
          },
          {
            "frame": 9.0,
            "time_h": 2.25,
            "max_depth_m": 5.050113677978516,
            "max_speed_mps": 1.772654414176941,
            "wet_area_ha": 2150.14013671875
          },
          {
            "frame": 10.0,
            "time_h": 2.5,
            "max_depth_m": 5.095439910888672,
            "max_speed_mps": 1.653136134147644,
            "wet_area_ha": 2232.5732421875
          },
          {
            "frame": 11.0,
            "time_h": 2.75,
            "max_depth_m": 5.1441473960876465,
            "max_speed_mps": 1.8550872802734375,
            "wet_area_ha": 2267.319091796875
          },
          {
            "frame": 12.0,
            "time_h": 3.0,
            "max_depth_m": 5.193363189697266,
            "max_speed_mps": 1.9419924020767212,
            "wet_area_ha": 2348.029052734375
          },
          {
            "frame": 13.0,
            "time_h": 3.25,
            "max_depth_m": 5.238650798797607,
            "max_speed_mps": 2.0045406818389893,
            "wet_area_ha": 2474.806396484375
          },
          {
            "frame": 14.0,
            "time_h": 3.5,
            "max_depth_m": 5.2808613777160645,
            "max_speed_mps": 2.0967226028442383,
            "wet_area_ha": 2542.953857421875
          },
          {
            "frame": 15.0,
            "time_h": 3.75,
            "max_depth_m": 5.319211006164551,
            "max_speed_mps": 2.1702911853790283,
            "wet_area_ha": 2600.661865234375
          },
          {
            "frame": 16.0,
            "time_h": 4.0,
            "max_depth_m": 5.352818489074707,
            "max_speed_mps": 2.220440149307251,
            "wet_area_ha": 2655.92431640625
          },
          {
            "frame": 17.0,
            "time_h": 4.25,
            "max_depth_m": 5.382657051086426,
            "max_speed_mps": 2.254800796508789,
            "wet_area_ha": 2713.615234375
          },
          {
            "frame": 18.0,
            "time_h": 4.5,
            "max_depth_m": 5.408747673034668,
            "max_speed_mps": 2.2912440299987793,
            "wet_area_ha": 2777.347900390625
          },
          {
            "frame": 19.0,
            "time_h": 4.75,
            "max_depth_m": 5.430907726287842,
            "max_speed_mps": 2.316871166229248,
            "wet_area_ha": 2818.268310546875
          },
          {
            "frame": 20.0,
            "time_h": 5.0,
            "max_depth_m": 5.450283050537109,
            "max_speed_mps": 2.3488965034484863,
            "wet_area_ha": 2926.694091796875
          },
          {
            "frame": 21.0,
            "time_h": 5.25,
            "max_depth_m": 5.46793794631958,
            "max_speed_mps": 2.3759822845458984,
            "wet_area_ha": 3084.753662109375
          },
          {
            "frame": 22.0,
            "time_h": 5.5,
            "max_depth_m": 5.483192443847656,
            "max_speed_mps": 2.398874282836914,
            "wet_area_ha": 3152.207763671875
          },
          {
            "frame": 23.0,
            "time_h": 5.75,
            "max_depth_m": 5.495965957641602,
            "max_speed_mps": 2.4132025241851807,
            "wet_area_ha": 3212.694091796875
          },
          {
            "frame": 24.0,
            "time_h": 6.0,
            "max_depth_m": 5.50703763961792,
            "max_speed_mps": 2.4252383708953857,
            "wet_area_ha": 3265.80810546875
          },
          {
            "frame": 25.0,
            "time_h": 6.25,
            "max_depth_m": 5.517040729522705,
            "max_speed_mps": 2.434037685394287,
            "wet_area_ha": 3325.630615234375
          },
          {
            "frame": 26.0,
            "time_h": 6.5,
            "max_depth_m": 5.525623321533203,
            "max_speed_mps": 2.4389419555664062,
            "wet_area_ha": 3393.919189453125
          },
          {
            "frame": 27.0,
            "time_h": 6.75,
            "max_depth_m": 5.532623767852783,
            "max_speed_mps": 2.4424262046813965,
            "wet_area_ha": 3478.3466796875
          },
          {
            "frame": 28.0,
            "time_h": 7.0,
            "max_depth_m": 5.53847599029541,
            "max_speed_mps": 2.4406118392944336,
            "wet_area_ha": 3521.1484375
          },
          {
            "frame": 29.0,
            "time_h": 7.25,
            "max_depth_m": 5.54425573348999,
            "max_speed_mps": 2.438140869140625,
            "wet_area_ha": 3600.13232421875
          },
          {
            "frame": 30.0,
            "time_h": 7.5,
            "max_depth_m": 5.549220561981201,
            "max_speed_mps": 2.4363110065460205,
            "wet_area_ha": 3682.530029296875
          },
          {
            "frame": 31.0,
            "time_h": 7.75,
            "max_depth_m": 5.554330825805664,
            "max_speed_mps": 2.4375298023223877,
            "wet_area_ha": 3736.07275390625
          },
          {
            "frame": 32.0,
            "time_h": 8.0,
            "max_depth_m": 5.558967590332031,
            "max_speed_mps": 2.4371278285980225,
            "wet_area_ha": 3804.658447265625
          },
          {
            "frame": 33.0,
            "time_h": 8.25,
            "max_depth_m": 5.561404705047607,
            "max_speed_mps": 2.436854839324951,
            "wet_area_ha": 3833.044921875
          },
          {
            "frame": 34.0,
            "time_h": 8.5,
            "max_depth_m": 5.564280986785889,
            "max_speed_mps": 2.435699224472046,
            "wet_area_ha": 3849.115966796875
          },
          {
            "frame": 35.0,
            "time_h": 8.75,
            "max_depth_m": 5.566982269287109,
            "max_speed_mps": 2.4338784217834473,
            "wet_area_ha": 3900.337646484375
          },
          {
            "frame": 36.0,
            "time_h": 9.0,
            "max_depth_m": 5.568633556365967,
            "max_speed_mps": 2.4309847354888916,
            "wet_area_ha": 3924.6240234375
          },
          {
            "frame": 37.0,
            "time_h": 9.25,
            "max_depth_m": 5.569549083709717,
            "max_speed_mps": 2.426166534423828,
            "wet_area_ha": 3989.34228515625
          },
          {
            "frame": 38.0,
            "time_h": 9.5,
            "max_depth_m": 5.571037769317627,
            "max_speed_mps": 2.4174838066101074,
            "wet_area_ha": 4058.0615234375
          },
          {
            "frame": 39.0,
            "time_h": 9.75,
            "max_depth_m": 5.572286128997803,
            "max_speed_mps": 2.404031753540039,
            "wet_area_ha": 4124.5673828125
          },
          {
            "frame": 40.0,
            "time_h": 10.0,
            "max_depth_m": 5.57381010055542,
            "max_speed_mps": 2.387751579284668,
            "wet_area_ha": 4137.2216796875
          },
          {
            "frame": 41.0,
            "time_h": 10.25,
            "max_depth_m": 5.5717034339904785,
            "max_speed_mps": 2.366163730621338,
            "wet_area_ha": 4201.96728515625
          },
          {
            "frame": 42.0,
            "time_h": 10.5,
            "max_depth_m": 5.572103023529053,
            "max_speed_mps": 2.3337295055389404,
            "wet_area_ha": 4247.34375
          },
          {
            "frame": 43.0,
            "time_h": 10.75,
            "max_depth_m": 5.57420539855957,
            "max_speed_mps": 2.2959890365600586,
            "wet_area_ha": 4271.4755859375
          },
          {
            "frame": 44.0,
            "time_h": 11.0,
            "max_depth_m": 5.573908805847168,
            "max_speed_mps": 2.254437208175659,
            "wet_area_ha": 4268.7431640625
          },
          {
            "frame": 45.0,
            "time_h": 11.25,
            "max_depth_m": 5.56234884262085,
            "max_speed_mps": 2.2084310054779053,
            "wet_area_ha": 4261.0458984375
          },
          {
            "frame": 46.0,
            "time_h": 11.5,
            "max_depth_m": 5.5526275634765625,
            "max_speed_mps": 2.156475782394409,
            "wet_area_ha": 4301.3271484375
          },
          {
            "frame": 47.0,
            "time_h": 11.75,
            "max_depth_m": 5.546286106109619,
            "max_speed_mps": 2.1046197414398193,
            "wet_area_ha": 4292.01416015625
          },
          {
            "frame": 48.0,
            "time_h": 12.0,
            "max_depth_m": 5.541223049163818,
            "max_speed_mps": 2.0575501918792725,
            "wet_area_ha": 4301.99853515625
          }
        ]
      },
      "hist12h_hist_extreme_2001_2025_12h_high_q100": {
        "smooth_frame_pattern": "assets/video/scenarios/hist12h_hist_extreme_2001_2025_12h_high_q100/smooth_frame_{index}.png",
        "smooth_frame_count": 49,
        "smooth_poster": "assets/video/scenarios/hist12h_hist_extreme_2001_2025_12h_high_q100/smooth_flood_depth_poster.png",
        "smooth_visualization": "masked interpolation and normalized smoothing of timestep depth surface",
        "smooth_frame_width": 820,
        "smooth_frame_height": 924,
        "smooth_depth_cap_m": 4.641932964324951,
        "frame_metrics": [
          {
            "frame": 0.0,
            "time_h": 0.0,
            "max_depth_m": 1.399999976158142,
            "max_speed_mps": 0.0,
            "wet_area_ha": 1499.5009765625
          },
          {
            "frame": 1.0,
            "time_h": 0.25,
            "max_depth_m": 5.000050067901611,
            "max_speed_mps": 3.038790702819824,
            "wet_area_ha": 2001.31396484375
          },
          {
            "frame": 2.0,
            "time_h": 0.5,
            "max_depth_m": 5.072065353393555,
            "max_speed_mps": 2.899183750152588,
            "wet_area_ha": 2001.51904296875
          },
          {
            "frame": 3.0,
            "time_h": 0.75,
            "max_depth_m": 5.103079319000244,
            "max_speed_mps": 2.7229859828948975,
            "wet_area_ha": 2033.0196533203125
          },
          {
            "frame": 4.0,
            "time_h": 1.0,
            "max_depth_m": 5.121943473815918,
            "max_speed_mps": 2.517693281173706,
            "wet_area_ha": 2041.8468017578125
          },
          {
            "frame": 5.0,
            "time_h": 1.25,
            "max_depth_m": 5.143405437469482,
            "max_speed_mps": 2.33566951751709,
            "wet_area_ha": 2083.803466796875
          },
          {
            "frame": 6.0,
            "time_h": 1.5,
            "max_depth_m": 5.169942855834961,
            "max_speed_mps": 2.1695191860198975,
            "wet_area_ha": 2110.57470703125
          },
          {
            "frame": 7.0,
            "time_h": 1.75,
            "max_depth_m": 5.206478118896484,
            "max_speed_mps": 2.0271899700164795,
            "wet_area_ha": 2133.820556640625
          },
          {
            "frame": 8.0,
            "time_h": 2.0,
            "max_depth_m": 5.255610942840576,
            "max_speed_mps": 1.8772270679473877,
            "wet_area_ha": 2190.845703125
          },
          {
            "frame": 9.0,
            "time_h": 2.25,
            "max_depth_m": 5.314055442810059,
            "max_speed_mps": 1.91864812374115,
            "wet_area_ha": 2224.76171875
          },
          {
            "frame": 10.0,
            "time_h": 2.5,
            "max_depth_m": 5.374427795410156,
            "max_speed_mps": 2.034841775894165,
            "wet_area_ha": 2357.864990234375
          },
          {
            "frame": 11.0,
            "time_h": 2.75,
            "max_depth_m": 5.4316606521606445,
            "max_speed_mps": 2.1791179180145264,
            "wet_area_ha": 2478.55908203125
          },
          {
            "frame": 12.0,
            "time_h": 3.0,
            "max_depth_m": 5.485200881958008,
            "max_speed_mps": 2.2708816528320312,
            "wet_area_ha": 2596.26220703125
          },
          {
            "frame": 13.0,
            "time_h": 3.25,
            "max_depth_m": 5.533953666687012,
            "max_speed_mps": 2.3301773071289062,
            "wet_area_ha": 2655.8125
          },
          {
            "frame": 14.0,
            "time_h": 3.5,
            "max_depth_m": 5.577702522277832,
            "max_speed_mps": 2.401093006134033,
            "wet_area_ha": 2695.99951171875
          },
          {
            "frame": 15.0,
            "time_h": 3.75,
            "max_depth_m": 5.615538597106934,
            "max_speed_mps": 2.460481643676758,
            "wet_area_ha": 2753.1123046875
          },
          {
            "frame": 16.0,
            "time_h": 4.0,
            "max_depth_m": 5.647387981414795,
            "max_speed_mps": 2.489551305770874,
            "wet_area_ha": 2840.369384765625
          },
          {
            "frame": 17.0,
            "time_h": 4.25,
            "max_depth_m": 5.674188137054443,
            "max_speed_mps": 2.488053798675537,
            "wet_area_ha": 2929.16845703125
          },
          {
            "frame": 18.0,
            "time_h": 4.5,
            "max_depth_m": 5.696446418762207,
            "max_speed_mps": 2.4882726669311523,
            "wet_area_ha": 3127.425048828125
          },
          {
            "frame": 19.0,
            "time_h": 4.75,
            "max_depth_m": 5.7145161628723145,
            "max_speed_mps": 2.4891724586486816,
            "wet_area_ha": 3154.90283203125
          },
          {
            "frame": 20.0,
            "time_h": 5.0,
            "max_depth_m": 5.729865550994873,
            "max_speed_mps": 2.4907724857330322,
            "wet_area_ha": 3179.010986328125
          },
          {
            "frame": 21.0,
            "time_h": 5.25,
            "max_depth_m": 5.743556976318359,
            "max_speed_mps": 2.4904534816741943,
            "wet_area_ha": 3260.189697265625
          },
          {
            "frame": 22.0,
            "time_h": 5.5,
            "max_depth_m": 5.75499153137207,
            "max_speed_mps": 2.4899449348449707,
            "wet_area_ha": 3294.523193359375
          },
          {
            "frame": 23.0,
            "time_h": 5.75,
            "max_depth_m": 5.764097690582275,
            "max_speed_mps": 2.4882805347442627,
            "wet_area_ha": 3345.177734375
          },
          {
            "frame": 24.0,
            "time_h": 6.0,
            "max_depth_m": 5.77174711227417,
            "max_speed_mps": 2.486110210418701,
            "wet_area_ha": 3358.560302734375
          },
          {
            "frame": 25.0,
            "time_h": 6.25,
            "max_depth_m": 5.778471946716309,
            "max_speed_mps": 2.484096050262451,
            "wet_area_ha": 3434.77490234375
          },
          {
            "frame": 26.0,
            "time_h": 6.5,
            "max_depth_m": 5.783945083618164,
            "max_speed_mps": 2.483189821243286,
            "wet_area_ha": 3494.874755859375
          },
          {
            "frame": 27.0,
            "time_h": 6.75,
            "max_depth_m": 5.787921905517578,
            "max_speed_mps": 2.4838054180145264,
            "wet_area_ha": 3573.126708984375
          },
          {
            "frame": 28.0,
            "time_h": 7.0,
            "max_depth_m": 5.790923595428467,
            "max_speed_mps": 2.4828755855560303,
            "wet_area_ha": 3616.152099609375
          },
          {
            "frame": 29.0,
            "time_h": 7.25,
            "max_depth_m": 5.794033527374268,
            "max_speed_mps": 2.480807065963745,
            "wet_area_ha": 3686.564697265625
          },
          {
            "frame": 30.0,
            "time_h": 7.5,
            "max_depth_m": 5.796482086181641,
            "max_speed_mps": 2.4780995845794678,
            "wet_area_ha": 3772.241943359375
          },
          {
            "frame": 31.0,
            "time_h": 7.75,
            "max_depth_m": 5.799371719360352,
            "max_speed_mps": 2.473724842071533,
            "wet_area_ha": 3834.345947265625
          },
          {
            "frame": 32.0,
            "time_h": 8.0,
            "max_depth_m": 5.802024841308594,
            "max_speed_mps": 2.467085123062134,
            "wet_area_ha": 3913.793212890625
          },
          {
            "frame": 33.0,
            "time_h": 8.25,
            "max_depth_m": 5.802525043487549,
            "max_speed_mps": 2.4562206268310547,
            "wet_area_ha": 3993.209228515625
          },
          {
            "frame": 34.0,
            "time_h": 8.5,
            "max_depth_m": 5.803843975067139,
            "max_speed_mps": 2.43898868560791,
            "wet_area_ha": 4036.467529296875
          },
          {
            "frame": 35.0,
            "time_h": 8.75,
            "max_depth_m": 5.805307865142822,
            "max_speed_mps": 2.4160168170928955,
            "wet_area_ha": 4140.02099609375
          },
          {
            "frame": 36.0,
            "time_h": 9.0,
            "max_depth_m": 5.805920124053955,
            "max_speed_mps": 2.3834221363067627,
            "wet_area_ha": 4193.64501953125
          },
          {
            "frame": 37.0,
            "time_h": 9.25,
            "max_depth_m": 5.8060832023620605,
            "max_speed_mps": 2.3441598415374756,
            "wet_area_ha": 4213.60546875
          },
          {
            "frame": 38.0,
            "time_h": 9.5,
            "max_depth_m": 5.807322025299072,
            "max_speed_mps": 2.2967655658721924,
            "wet_area_ha": 4258.234375
          },
          {
            "frame": 39.0,
            "time_h": 9.75,
            "max_depth_m": 5.808695316314697,
            "max_speed_mps": 2.2425119876861572,
            "wet_area_ha": 4317.9013671875
          },
          {
            "frame": 40.0,
            "time_h": 10.0,
            "max_depth_m": 5.810819149017334,
            "max_speed_mps": 2.18711256980896,
            "wet_area_ha": 4372.3583984375
          },
          {
            "frame": 41.0,
            "time_h": 10.25,
            "max_depth_m": 5.809192657470703,
            "max_speed_mps": 2.1332223415374756,
            "wet_area_ha": 4417.04052734375
          },
          {
            "frame": 42.0,
            "time_h": 10.5,
            "max_depth_m": 5.810835838317871,
            "max_speed_mps": 2.0833740234375,
            "wet_area_ha": 4439.47021484375
          },
          {
            "frame": 43.0,
            "time_h": 10.75,
            "max_depth_m": 5.814743995666504,
            "max_speed_mps": 2.038978338241577,
            "wet_area_ha": 4481.86572265625
          },
          {
            "frame": 44.0,
            "time_h": 11.0,
            "max_depth_m": 5.816019058227539,
            "max_speed_mps": 1.9988489151000977,
            "wet_area_ha": 4488.427734375
          },
          {
            "frame": 45.0,
            "time_h": 11.25,
            "max_depth_m": 5.804366588592529,
            "max_speed_mps": 1.9601397514343262,
            "wet_area_ha": 4480.095703125
          },
          {
            "frame": 46.0,
            "time_h": 11.5,
            "max_depth_m": 5.794898986816406,
            "max_speed_mps": 1.9199416637420654,
            "wet_area_ha": 4491.10986328125
          },
          {
            "frame": 47.0,
            "time_h": 11.75,
            "max_depth_m": 5.789146423339844,
            "max_speed_mps": 1.88337242603302,
            "wet_area_ha": 4486.3984375
          },
          {
            "frame": 48.0,
            "time_h": 12.0,
            "max_depth_m": 5.784895896911621,
            "max_speed_mps": 1.8524516820907593,
            "wet_area_ha": 4479.09423828125
          }
        ]
      },
      "hist12h_hist_extreme_2001_2025_12h_normal_q060": {
        "smooth_frame_pattern": "assets/video/scenarios/hist12h_hist_extreme_2001_2025_12h_normal_q060/smooth_frame_{index}.png",
        "smooth_frame_count": 49,
        "smooth_poster": "assets/video/scenarios/hist12h_hist_extreme_2001_2025_12h_normal_q060/smooth_flood_depth_poster.png",
        "smooth_visualization": "masked interpolation and normalized smoothing of timestep depth surface",
        "smooth_frame_width": 820,
        "smooth_frame_height": 924,
        "smooth_depth_cap_m": 4.141944408416748,
        "frame_metrics": [
          {
            "frame": 0.0,
            "time_h": 0.0,
            "max_depth_m": 0.4000000059604645,
            "max_speed_mps": 0.0,
            "wet_area_ha": 1499.5009765625
          },
          {
            "frame": 1.0,
            "time_h": 0.25,
            "max_depth_m": 4.569586753845215,
            "max_speed_mps": 2.693171501159668,
            "wet_area_ha": 1248.3704833984375
          },
          {
            "frame": 2.0,
            "time_h": 0.5,
            "max_depth_m": 4.630463600158691,
            "max_speed_mps": 2.6375482082366943,
            "wet_area_ha": 1320.592041015625
          },
          {
            "frame": 3.0,
            "time_h": 0.75,
            "max_depth_m": 4.66830587387085,
            "max_speed_mps": 2.534642457962036,
            "wet_area_ha": 1325.5855712890625
          },
          {
            "frame": 4.0,
            "time_h": 1.0,
            "max_depth_m": 4.686960697174072,
            "max_speed_mps": 2.425004243850708,
            "wet_area_ha": 1333.2294921875
          },
          {
            "frame": 5.0,
            "time_h": 1.25,
            "max_depth_m": 4.6981730461120605,
            "max_speed_mps": 2.291050434112549,
            "wet_area_ha": 1349.023193359375
          },
          {
            "frame": 6.0,
            "time_h": 1.5,
            "max_depth_m": 4.7093353271484375,
            "max_speed_mps": 2.1674447059631348,
            "wet_area_ha": 1347.6048583984375
          },
          {
            "frame": 7.0,
            "time_h": 1.75,
            "max_depth_m": 4.720669269561768,
            "max_speed_mps": 2.060621976852417,
            "wet_area_ha": 1330.451904296875
          },
          {
            "frame": 8.0,
            "time_h": 2.0,
            "max_depth_m": 4.73483943939209,
            "max_speed_mps": 1.9562880992889404,
            "wet_area_ha": 1301.758056640625
          },
          {
            "frame": 9.0,
            "time_h": 2.25,
            "max_depth_m": 4.753124237060547,
            "max_speed_mps": 1.8632804155349731,
            "wet_area_ha": 1284.335693359375
          },
          {
            "frame": 10.0,
            "time_h": 2.5,
            "max_depth_m": 4.778085708618164,
            "max_speed_mps": 1.7609254121780396,
            "wet_area_ha": 1292.5673828125
          },
          {
            "frame": 11.0,
            "time_h": 2.75,
            "max_depth_m": 4.807955741882324,
            "max_speed_mps": 1.6585341691970825,
            "wet_area_ha": 1310.99658203125
          },
          {
            "frame": 12.0,
            "time_h": 3.0,
            "max_depth_m": 4.841501712799072,
            "max_speed_mps": 1.5626370906829834,
            "wet_area_ha": 1341.3525390625
          },
          {
            "frame": 13.0,
            "time_h": 3.25,
            "max_depth_m": 4.876953125,
            "max_speed_mps": 1.5004916191101074,
            "wet_area_ha": 1403.855712890625
          },
          {
            "frame": 14.0,
            "time_h": 3.5,
            "max_depth_m": 4.913595199584961,
            "max_speed_mps": 1.5760587453842163,
            "wet_area_ha": 1468.9178466796875
          },
          {
            "frame": 15.0,
            "time_h": 3.75,
            "max_depth_m": 4.9497246742248535,
            "max_speed_mps": 1.7231751680374146,
            "wet_area_ha": 1538.0540771484375
          },
          {
            "frame": 16.0,
            "time_h": 4.0,
            "max_depth_m": 4.984001159667969,
            "max_speed_mps": 1.8223145008087158,
            "wet_area_ha": 1676.09912109375
          },
          {
            "frame": 17.0,
            "time_h": 4.25,
            "max_depth_m": 5.016327857971191,
            "max_speed_mps": 1.871462106704712,
            "wet_area_ha": 1739.6241455078125
          },
          {
            "frame": 18.0,
            "time_h": 4.5,
            "max_depth_m": 5.04632043838501,
            "max_speed_mps": 1.9143552780151367,
            "wet_area_ha": 1796.814453125
          },
          {
            "frame": 19.0,
            "time_h": 4.75,
            "max_depth_m": 5.073490142822266,
            "max_speed_mps": 1.9427064657211304,
            "wet_area_ha": 1906.9859619140625
          },
          {
            "frame": 20.0,
            "time_h": 5.0,
            "max_depth_m": 5.098081588745117,
            "max_speed_mps": 1.9672362804412842,
            "wet_area_ha": 2013.98681640625
          },
          {
            "frame": 21.0,
            "time_h": 5.25,
            "max_depth_m": 5.1208648681640625,
            "max_speed_mps": 2.009739637374878,
            "wet_area_ha": 2112.13818359375
          },
          {
            "frame": 22.0,
            "time_h": 5.5,
            "max_depth_m": 5.141054630279541,
            "max_speed_mps": 2.0450215339660645,
            "wet_area_ha": 2186.86767578125
          },
          {
            "frame": 23.0,
            "time_h": 5.75,
            "max_depth_m": 5.158563137054443,
            "max_speed_mps": 2.0743396282196045,
            "wet_area_ha": 2332.04931640625
          },
          {
            "frame": 24.0,
            "time_h": 6.0,
            "max_depth_m": 5.173941135406494,
            "max_speed_mps": 2.099957227706909,
            "wet_area_ha": 2449.49609375
          },
          {
            "frame": 25.0,
            "time_h": 6.25,
            "max_depth_m": 5.18801736831665,
            "max_speed_mps": 2.1229538917541504,
            "wet_area_ha": 2582.501708984375
          },
          {
            "frame": 26.0,
            "time_h": 6.5,
            "max_depth_m": 5.200493335723877,
            "max_speed_mps": 2.143648386001587,
            "wet_area_ha": 2715.453125
          },
          {
            "frame": 27.0,
            "time_h": 6.75,
            "max_depth_m": 5.211188316345215,
            "max_speed_mps": 2.1594018936157227,
            "wet_area_ha": 2830.553955078125
          },
          {
            "frame": 28.0,
            "time_h": 7.0,
            "max_depth_m": 5.220577239990234,
            "max_speed_mps": 2.171293020248413,
            "wet_area_ha": 2898.220703125
          },
          {
            "frame": 29.0,
            "time_h": 7.25,
            "max_depth_m": 5.229772567749023,
            "max_speed_mps": 2.180935859680176,
            "wet_area_ha": 2995.38330078125
          },
          {
            "frame": 30.0,
            "time_h": 7.5,
            "max_depth_m": 5.238018989562988,
            "max_speed_mps": 2.188687324523926,
            "wet_area_ha": 3097.800048828125
          },
          {
            "frame": 31.0,
            "time_h": 7.75,
            "max_depth_m": 5.246135711669922,
            "max_speed_mps": 2.195481538772583,
            "wet_area_ha": 3169.63037109375
          },
          {
            "frame": 32.0,
            "time_h": 8.0,
            "max_depth_m": 5.25357723236084,
            "max_speed_mps": 2.203463315963745,
            "wet_area_ha": 3205.70068359375
          },
          {
            "frame": 33.0,
            "time_h": 8.25,
            "max_depth_m": 5.258817195892334,
            "max_speed_mps": 2.2110273838043213,
            "wet_area_ha": 3254.740966796875
          },
          {
            "frame": 34.0,
            "time_h": 8.5,
            "max_depth_m": 5.264197826385498,
            "max_speed_mps": 2.2176878452301025,
            "wet_area_ha": 3312.404052734375
          },
          {
            "frame": 35.0,
            "time_h": 8.75,
            "max_depth_m": 5.26922607421875,
            "max_speed_mps": 2.224043607711792,
            "wet_area_ha": 3354.21728515625
          },
          {
            "frame": 36.0,
            "time_h": 9.0,
            "max_depth_m": 5.273133754730225,
            "max_speed_mps": 2.230656623840332,
            "wet_area_ha": 3387.44970703125
          },
          {
            "frame": 37.0,
            "time_h": 9.25,
            "max_depth_m": 5.276166915893555,
            "max_speed_mps": 2.236022710800171,
            "wet_area_ha": 3415.69482421875
          },
          {
            "frame": 38.0,
            "time_h": 9.5,
            "max_depth_m": 5.279440879821777,
            "max_speed_mps": 2.2402961254119873,
            "wet_area_ha": 3440.482421875
          },
          {
            "frame": 39.0,
            "time_h": 9.75,
            "max_depth_m": 5.282248497009277,
            "max_speed_mps": 2.2444190979003906,
            "wet_area_ha": 3491.826416015625
          },
          {
            "frame": 40.0,
            "time_h": 10.0,
            "max_depth_m": 5.28501033782959,
            "max_speed_mps": 2.2476067543029785,
            "wet_area_ha": 3521.22412109375
          },
          {
            "frame": 41.0,
            "time_h": 10.25,
            "max_depth_m": 5.284363269805908,
            "max_speed_mps": 2.249603748321533,
            "wet_area_ha": 3521.935546875
          },
          {
            "frame": 42.0,
            "time_h": 10.5,
            "max_depth_m": 5.285534381866455,
            "max_speed_mps": 2.2496492862701416,
            "wet_area_ha": 3547.05126953125
          },
          {
            "frame": 43.0,
            "time_h": 10.75,
            "max_depth_m": 5.287835597991943,
            "max_speed_mps": 2.2493836879730225,
            "wet_area_ha": 3553.0908203125
          },
          {
            "frame": 44.0,
            "time_h": 11.0,
            "max_depth_m": 5.287766933441162,
            "max_speed_mps": 2.250178098678589,
            "wet_area_ha": 3554.19189453125
          },
          {
            "frame": 45.0,
            "time_h": 11.25,
            "max_depth_m": 5.277785778045654,
            "max_speed_mps": 2.2488338947296143,
            "wet_area_ha": 3556.06640625
          },
          {
            "frame": 46.0,
            "time_h": 11.5,
            "max_depth_m": 5.268979549407959,
            "max_speed_mps": 2.241295576095581,
            "wet_area_ha": 3556.5283203125
          },
          {
            "frame": 47.0,
            "time_h": 11.75,
            "max_depth_m": 5.262887954711914,
            "max_speed_mps": 2.228224277496338,
            "wet_area_ha": 3563.87158203125
          },
          {
            "frame": 48.0,
            "time_h": 12.0,
            "max_depth_m": 5.257347106933594,
            "max_speed_mps": 2.2143473625183105,
            "wet_area_ha": 3580.41162109375
          }
        ]
      },
      "hist12h_hist_extreme_2001_2025_12h_normal_q080": {
        "smooth_frame_pattern": "assets/video/scenarios/hist12h_hist_extreme_2001_2025_12h_normal_q080/smooth_frame_{index}.png",
        "smooth_frame_count": 49,
        "smooth_poster": "assets/video/scenarios/hist12h_hist_extreme_2001_2025_12h_normal_q080/smooth_flood_depth_poster.png",
        "smooth_visualization": "masked interpolation and normalized smoothing of timestep depth surface",
        "smooth_frame_width": 820,
        "smooth_frame_height": 924,
        "smooth_depth_cap_m": 4.410914421081543,
        "frame_metrics": [
          {
            "frame": 0.0,
            "time_h": 0.0,
            "max_depth_m": 0.4000000059604645,
            "max_speed_mps": 0.0,
            "wet_area_ha": 1499.5009765625
          },
          {
            "frame": 1.0,
            "time_h": 0.25,
            "max_depth_m": 4.7924485206604,
            "max_speed_mps": 2.8852450847625732,
            "wet_area_ha": 1278.1807861328125
          },
          {
            "frame": 2.0,
            "time_h": 0.5,
            "max_depth_m": 4.862550258636475,
            "max_speed_mps": 2.795969009399414,
            "wet_area_ha": 1338.8028564453125
          },
          {
            "frame": 3.0,
            "time_h": 0.75,
            "max_depth_m": 4.901867389678955,
            "max_speed_mps": 2.6590356826782227,
            "wet_area_ha": 1360.779541015625
          },
          {
            "frame": 4.0,
            "time_h": 1.0,
            "max_depth_m": 4.91923189163208,
            "max_speed_mps": 2.5017900466918945,
            "wet_area_ha": 1399.04833984375
          },
          {
            "frame": 5.0,
            "time_h": 1.25,
            "max_depth_m": 4.934657096862793,
            "max_speed_mps": 2.338253974914551,
            "wet_area_ha": 1392.1910400390625
          },
          {
            "frame": 6.0,
            "time_h": 1.5,
            "max_depth_m": 4.951199054718018,
            "max_speed_mps": 2.2020318508148193,
            "wet_area_ha": 1406.020751953125
          },
          {
            "frame": 7.0,
            "time_h": 1.75,
            "max_depth_m": 4.9697747230529785,
            "max_speed_mps": 2.0711240768432617,
            "wet_area_ha": 1389.2171630859375
          },
          {
            "frame": 8.0,
            "time_h": 2.0,
            "max_depth_m": 4.996130466461182,
            "max_speed_mps": 1.9590651988983154,
            "wet_area_ha": 1374.8111572265625
          },
          {
            "frame": 9.0,
            "time_h": 2.25,
            "max_depth_m": 5.030188083648682,
            "max_speed_mps": 1.8349820375442505,
            "wet_area_ha": 1361.8045654296875
          },
          {
            "frame": 10.0,
            "time_h": 2.5,
            "max_depth_m": 5.071926593780518,
            "max_speed_mps": 1.7111775875091553,
            "wet_area_ha": 1387.1263427734375
          },
          {
            "frame": 11.0,
            "time_h": 2.75,
            "max_depth_m": 5.118447303771973,
            "max_speed_mps": 1.7657513618469238,
            "wet_area_ha": 1401.036376953125
          },
          {
            "frame": 12.0,
            "time_h": 3.0,
            "max_depth_m": 5.168105125427246,
            "max_speed_mps": 1.900747537612915,
            "wet_area_ha": 1467.774169921875
          },
          {
            "frame": 13.0,
            "time_h": 3.25,
            "max_depth_m": 5.215289115905762,
            "max_speed_mps": 1.9694517850875854,
            "wet_area_ha": 1618.827880859375
          },
          {
            "frame": 14.0,
            "time_h": 3.5,
            "max_depth_m": 5.259183883666992,
            "max_speed_mps": 2.050647258758545,
            "wet_area_ha": 1754.994384765625
          },
          {
            "frame": 15.0,
            "time_h": 3.75,
            "max_depth_m": 5.299518585205078,
            "max_speed_mps": 2.1350462436676025,
            "wet_area_ha": 1846.515625
          },
          {
            "frame": 16.0,
            "time_h": 4.0,
            "max_depth_m": 5.335307598114014,
            "max_speed_mps": 2.1992311477661133,
            "wet_area_ha": 1949.6175537109375
          },
          {
            "frame": 17.0,
            "time_h": 4.25,
            "max_depth_m": 5.367060661315918,
            "max_speed_mps": 2.236323833465576,
            "wet_area_ha": 2075.52685546875
          },
          {
            "frame": 18.0,
            "time_h": 4.5,
            "max_depth_m": 5.3949995040893555,
            "max_speed_mps": 2.273045778274536,
            "wet_area_ha": 2143.943359375
          },
          {
            "frame": 19.0,
            "time_h": 4.75,
            "max_depth_m": 5.418824672698975,
            "max_speed_mps": 2.301093578338623,
            "wet_area_ha": 2195.7548828125
          },
          {
            "frame": 20.0,
            "time_h": 5.0,
            "max_depth_m": 5.4397125244140625,
            "max_speed_mps": 2.3318376541137695,
            "wet_area_ha": 2352.566650390625
          },
          {
            "frame": 21.0,
            "time_h": 5.25,
            "max_depth_m": 5.458686828613281,
            "max_speed_mps": 2.362247943878174,
            "wet_area_ha": 2557.0888671875
          },
          {
            "frame": 22.0,
            "time_h": 5.5,
            "max_depth_m": 5.47504997253418,
            "max_speed_mps": 2.3875932693481445,
            "wet_area_ha": 2667.105224609375
          },
          {
            "frame": 23.0,
            "time_h": 5.75,
            "max_depth_m": 5.488807678222656,
            "max_speed_mps": 2.405977249145508,
            "wet_area_ha": 2709.503173828125
          },
          {
            "frame": 24.0,
            "time_h": 6.0,
            "max_depth_m": 5.500741481781006,
            "max_speed_mps": 2.4184412956237793,
            "wet_area_ha": 2756.532470703125
          },
          {
            "frame": 25.0,
            "time_h": 6.25,
            "max_depth_m": 5.511514663696289,
            "max_speed_mps": 2.4296133518218994,
            "wet_area_ha": 2847.09765625
          },
          {
            "frame": 26.0,
            "time_h": 6.5,
            "max_depth_m": 5.520750999450684,
            "max_speed_mps": 2.4360439777374268,
            "wet_area_ha": 2935.878662109375
          },
          {
            "frame": 27.0,
            "time_h": 6.75,
            "max_depth_m": 5.528311252593994,
            "max_speed_mps": 2.4398763179779053,
            "wet_area_ha": 3003.811279296875
          },
          {
            "frame": 28.0,
            "time_h": 7.0,
            "max_depth_m": 5.534661769866943,
            "max_speed_mps": 2.441256523132324,
            "wet_area_ha": 3057.768310546875
          },
          {
            "frame": 29.0,
            "time_h": 7.25,
            "max_depth_m": 5.540894031524658,
            "max_speed_mps": 2.438561201095581,
            "wet_area_ha": 3108.13330078125
          },
          {
            "frame": 30.0,
            "time_h": 7.5,
            "max_depth_m": 5.546232223510742,
            "max_speed_mps": 2.436053514480591,
            "wet_area_ha": 3196.41357421875
          },
          {
            "frame": 31.0,
            "time_h": 7.75,
            "max_depth_m": 5.551679611206055,
            "max_speed_mps": 2.4360194206237793,
            "wet_area_ha": 3261.90380859375
          },
          {
            "frame": 32.0,
            "time_h": 8.0,
            "max_depth_m": 5.556615829467773,
            "max_speed_mps": 2.4369895458221436,
            "wet_area_ha": 3320.5458984375
          },
          {
            "frame": 33.0,
            "time_h": 8.25,
            "max_depth_m": 5.559313774108887,
            "max_speed_mps": 2.436885356903076,
            "wet_area_ha": 3371.325927734375
          },
          {
            "frame": 34.0,
            "time_h": 8.5,
            "max_depth_m": 5.562420845031738,
            "max_speed_mps": 2.436553478240967,
            "wet_area_ha": 3430.00048828125
          },
          {
            "frame": 35.0,
            "time_h": 8.75,
            "max_depth_m": 5.5653228759765625,
            "max_speed_mps": 2.4359817504882812,
            "wet_area_ha": 3469.4140625
          },
          {
            "frame": 36.0,
            "time_h": 9.0,
            "max_depth_m": 5.567136764526367,
            "max_speed_mps": 2.434657335281372,
            "wet_area_ha": 3506.30322265625
          },
          {
            "frame": 37.0,
            "time_h": 9.25,
            "max_depth_m": 5.568160057067871,
            "max_speed_mps": 2.4314589500427246,
            "wet_area_ha": 3540.771240234375
          },
          {
            "frame": 38.0,
            "time_h": 9.5,
            "max_depth_m": 5.569682598114014,
            "max_speed_mps": 2.425980806350708,
            "wet_area_ha": 3591.66650390625
          },
          {
            "frame": 39.0,
            "time_h": 9.75,
            "max_depth_m": 5.570887565612793,
            "max_speed_mps": 2.4178271293640137,
            "wet_area_ha": 3670.43310546875
          },
          {
            "frame": 40.0,
            "time_h": 10.0,
            "max_depth_m": 5.572299480438232,
            "max_speed_mps": 2.405205249786377,
            "wet_area_ha": 3736.739990234375
          },
          {
            "frame": 41.0,
            "time_h": 10.25,
            "max_depth_m": 5.570021629333496,
            "max_speed_mps": 2.388608932495117,
            "wet_area_ha": 3738.1796875
          },
          {
            "frame": 42.0,
            "time_h": 10.5,
            "max_depth_m": 5.5702033042907715,
            "max_speed_mps": 2.3676681518554688,
            "wet_area_ha": 3757.0888671875
          },
          {
            "frame": 43.0,
            "time_h": 10.75,
            "max_depth_m": 5.57204008102417,
            "max_speed_mps": 2.3385820388793945,
            "wet_area_ha": 3814.647216796875
          },
          {
            "frame": 44.0,
            "time_h": 11.0,
            "max_depth_m": 5.571423530578613,
            "max_speed_mps": 2.303590774536133,
            "wet_area_ha": 3820.660400390625
          },
          {
            "frame": 45.0,
            "time_h": 11.25,
            "max_depth_m": 5.559504508972168,
            "max_speed_mps": 2.263526201248169,
            "wet_area_ha": 3823.54248046875
          },
          {
            "frame": 46.0,
            "time_h": 11.5,
            "max_depth_m": 5.5494303703308105,
            "max_speed_mps": 2.2145979404449463,
            "wet_area_ha": 3806.25244140625
          },
          {
            "frame": 47.0,
            "time_h": 11.75,
            "max_depth_m": 5.542774200439453,
            "max_speed_mps": 2.1623473167419434,
            "wet_area_ha": 3824.120849609375
          },
          {
            "frame": 48.0,
            "time_h": 12.0,
            "max_depth_m": 5.537409782409668,
            "max_speed_mps": 2.1123437881469727,
            "wet_area_ha": 3857.97607421875
          }
        ]
      },
      "hist12h_hist_extreme_2001_2025_12h_normal_q100": {
        "smooth_frame_pattern": "assets/video/scenarios/hist12h_hist_extreme_2001_2025_12h_normal_q100/smooth_frame_{index}.png",
        "smooth_frame_count": 49,
        "smooth_poster": "assets/video/scenarios/hist12h_hist_extreme_2001_2025_12h_normal_q100/smooth_flood_depth_poster.png",
        "smooth_visualization": "masked interpolation and normalized smoothing of timestep depth surface",
        "smooth_frame_width": 820,
        "smooth_frame_height": 924,
        "smooth_depth_cap_m": 4.637462139129639,
        "frame_metrics": [
          {
            "frame": 0.0,
            "time_h": 0.0,
            "max_depth_m": 0.4000000059604645,
            "max_speed_mps": 0.0,
            "wet_area_ha": 1499.5009765625
          },
          {
            "frame": 1.0,
            "time_h": 0.25,
            "max_depth_m": 4.9845662117004395,
            "max_speed_mps": 3.049097776412964,
            "wet_area_ha": 1315.5904541015625
          },
          {
            "frame": 2.0,
            "time_h": 0.5,
            "max_depth_m": 5.063302040100098,
            "max_speed_mps": 2.9211137294769287,
            "wet_area_ha": 1353.0428466796875
          },
          {
            "frame": 3.0,
            "time_h": 0.75,
            "max_depth_m": 5.1000261306762695,
            "max_speed_mps": 2.7512619495391846,
            "wet_area_ha": 1396.96728515625
          },
          {
            "frame": 4.0,
            "time_h": 1.0,
            "max_depth_m": 5.118956565856934,
            "max_speed_mps": 2.5484888553619385,
            "wet_area_ha": 1426.7000732421875
          },
          {
            "frame": 5.0,
            "time_h": 1.25,
            "max_depth_m": 5.139450550079346,
            "max_speed_mps": 2.3714799880981445,
            "wet_area_ha": 1452.01416015625
          },
          {
            "frame": 6.0,
            "time_h": 1.5,
            "max_depth_m": 5.162287712097168,
            "max_speed_mps": 2.2071642875671387,
            "wet_area_ha": 1449.5643310546875
          },
          {
            "frame": 7.0,
            "time_h": 1.75,
            "max_depth_m": 5.192601680755615,
            "max_speed_mps": 2.08023738861084,
            "wet_area_ha": 1457.0860595703125
          },
          {
            "frame": 8.0,
            "time_h": 2.0,
            "max_depth_m": 5.235387325286865,
            "max_speed_mps": 1.9356403350830078,
            "wet_area_ha": 1432.672607421875
          },
          {
            "frame": 9.0,
            "time_h": 2.25,
            "max_depth_m": 5.289680480957031,
            "max_speed_mps": 1.8377724885940552,
            "wet_area_ha": 1432.2813720703125
          },
          {
            "frame": 10.0,
            "time_h": 2.5,
            "max_depth_m": 5.3498735427856445,
            "max_speed_mps": 1.999538779258728,
            "wet_area_ha": 1468.409912109375
          },
          {
            "frame": 11.0,
            "time_h": 2.75,
            "max_depth_m": 5.408273696899414,
            "max_speed_mps": 2.12593150138855,
            "wet_area_ha": 1573.108154296875
          },
          {
            "frame": 12.0,
            "time_h": 3.0,
            "max_depth_m": 5.463531017303467,
            "max_speed_mps": 2.244610071182251,
            "wet_area_ha": 1736.7747802734375
          },
          {
            "frame": 13.0,
            "time_h": 3.25,
            "max_depth_m": 5.514077663421631,
            "max_speed_mps": 2.310121774673462,
            "wet_area_ha": 1851.2703857421875
          },
          {
            "frame": 14.0,
            "time_h": 3.5,
            "max_depth_m": 5.560076713562012,
            "max_speed_mps": 2.371218204498291,
            "wet_area_ha": 1965.21044921875
          },
          {
            "frame": 15.0,
            "time_h": 3.75,
            "max_depth_m": 5.600118637084961,
            "max_speed_mps": 2.4384005069732666,
            "wet_area_ha": 2072.280517578125
          },
          {
            "frame": 16.0,
            "time_h": 4.0,
            "max_depth_m": 5.6342291831970215,
            "max_speed_mps": 2.483444929122925,
            "wet_area_ha": 2175.268310546875
          },
          {
            "frame": 17.0,
            "time_h": 4.25,
            "max_depth_m": 5.663076877593994,
            "max_speed_mps": 2.4877066612243652,
            "wet_area_ha": 2296.474853515625
          },
          {
            "frame": 18.0,
            "time_h": 4.5,
            "max_depth_m": 5.687032699584961,
            "max_speed_mps": 2.488128185272217,
            "wet_area_ha": 2486.3046875
          },
          {
            "frame": 19.0,
            "time_h": 4.75,
            "max_depth_m": 5.706485271453857,
            "max_speed_mps": 2.488374948501587,
            "wet_area_ha": 2618.94580078125
          },
          {
            "frame": 20.0,
            "time_h": 5.0,
            "max_depth_m": 5.723027229309082,
            "max_speed_mps": 2.4899380207061768,
            "wet_area_ha": 2694.0625
          },
          {
            "frame": 21.0,
            "time_h": 5.25,
            "max_depth_m": 5.737725734710693,
            "max_speed_mps": 2.4904251098632812,
            "wet_area_ha": 2740.697998046875
          },
          {
            "frame": 22.0,
            "time_h": 5.5,
            "max_depth_m": 5.74995756149292,
            "max_speed_mps": 2.490401268005371,
            "wet_area_ha": 2833.98388671875
          },
          {
            "frame": 23.0,
            "time_h": 5.75,
            "max_depth_m": 5.759746551513672,
            "max_speed_mps": 2.4887120723724365,
            "wet_area_ha": 2891.73193359375
          },
          {
            "frame": 24.0,
            "time_h": 6.0,
            "max_depth_m": 5.76798677444458,
            "max_speed_mps": 2.486765146255493,
            "wet_area_ha": 2914.84912109375
          },
          {
            "frame": 25.0,
            "time_h": 6.25,
            "max_depth_m": 5.775229454040527,
            "max_speed_mps": 2.48435115814209,
            "wet_area_ha": 2973.820068359375
          },
          {
            "frame": 26.0,
            "time_h": 6.5,
            "max_depth_m": 5.7811479568481445,
            "max_speed_mps": 2.482778310775757,
            "wet_area_ha": 3042.517822265625
          },
          {
            "frame": 27.0,
            "time_h": 6.75,
            "max_depth_m": 5.785499095916748,
            "max_speed_mps": 2.4827940464019775,
            "wet_area_ha": 3104.3818359375
          },
          {
            "frame": 28.0,
            "time_h": 7.0,
            "max_depth_m": 5.788818359375,
            "max_speed_mps": 2.4830503463745117,
            "wet_area_ha": 3153.818115234375
          },
          {
            "frame": 29.0,
            "time_h": 7.25,
            "max_depth_m": 5.792206764221191,
            "max_speed_mps": 2.4812920093536377,
            "wet_area_ha": 3199.9130859375
          },
          {
            "frame": 30.0,
            "time_h": 7.5,
            "max_depth_m": 5.794894695281982,
            "max_speed_mps": 2.4793479442596436,
            "wet_area_ha": 3282.597412109375
          },
          {
            "frame": 31.0,
            "time_h": 7.75,
            "max_depth_m": 5.797981262207031,
            "max_speed_mps": 2.4765708446502686,
            "wet_area_ha": 3349.7841796875
          },
          {
            "frame": 32.0,
            "time_h": 8.0,
            "max_depth_m": 5.8007893562316895,
            "max_speed_mps": 2.4729485511779785,
            "wet_area_ha": 3396.93359375
          },
          {
            "frame": 33.0,
            "time_h": 8.25,
            "max_depth_m": 5.801399230957031,
            "max_speed_mps": 2.466770887374878,
            "wet_area_ha": 3501.558349609375
          },
          {
            "frame": 34.0,
            "time_h": 8.5,
            "max_depth_m": 5.80277681350708,
            "max_speed_mps": 2.4556829929351807,
            "wet_area_ha": 3591.844482421875
          },
          {
            "frame": 35.0,
            "time_h": 8.75,
            "max_depth_m": 5.8042426109313965,
            "max_speed_mps": 2.438997983932495,
            "wet_area_ha": 3638.748779296875
          },
          {
            "frame": 36.0,
            "time_h": 9.0,
            "max_depth_m": 5.804782867431641,
            "max_speed_mps": 2.416303873062134,
            "wet_area_ha": 3746.211181640625
          },
          {
            "frame": 37.0,
            "time_h": 9.25,
            "max_depth_m": 5.804780006408691,
            "max_speed_mps": 2.383031129837036,
            "wet_area_ha": 3799.195556640625
          },
          {
            "frame": 38.0,
            "time_h": 9.5,
            "max_depth_m": 5.805749893188477,
            "max_speed_mps": 2.342466354370117,
            "wet_area_ha": 3829.935302734375
          },
          {
            "frame": 39.0,
            "time_h": 9.75,
            "max_depth_m": 5.806765079498291,
            "max_speed_mps": 2.2949259281158447,
            "wet_area_ha": 3882.1220703125
          },
          {
            "frame": 40.0,
            "time_h": 10.0,
            "max_depth_m": 5.808454513549805,
            "max_speed_mps": 2.2400527000427246,
            "wet_area_ha": 3915.595947265625
          },
          {
            "frame": 41.0,
            "time_h": 10.25,
            "max_depth_m": 5.806356906890869,
            "max_speed_mps": 2.184894323348999,
            "wet_area_ha": 3966.627685546875
          },
          {
            "frame": 42.0,
            "time_h": 10.5,
            "max_depth_m": 5.807543754577637,
            "max_speed_mps": 2.129025936126709,
            "wet_area_ha": 3998.98828125
          },
          {
            "frame": 43.0,
            "time_h": 10.75,
            "max_depth_m": 5.81102180480957,
            "max_speed_mps": 2.080491781234741,
            "wet_area_ha": 4029.32958984375
          },
          {
            "frame": 44.0,
            "time_h": 11.0,
            "max_depth_m": 5.811920166015625,
            "max_speed_mps": 2.0380072593688965,
            "wet_area_ha": 4042.001953125
          },
          {
            "frame": 45.0,
            "time_h": 11.25,
            "max_depth_m": 5.799936294555664,
            "max_speed_mps": 1.9998642206192017,
            "wet_area_ha": 4058.396728515625
          },
          {
            "frame": 46.0,
            "time_h": 11.5,
            "max_depth_m": 5.790251731872559,
            "max_speed_mps": 1.9580905437469482,
            "wet_area_ha": 4039.8056640625
          },
          {
            "frame": 47.0,
            "time_h": 11.75,
            "max_depth_m": 5.784372806549072,
            "max_speed_mps": 1.9213474988937378,
            "wet_area_ha": 4068.117919921875
          },
          {
            "frame": 48.0,
            "time_h": 12.0,
            "max_depth_m": 5.780035495758057,
            "max_speed_mps": 1.8900532722473145,
            "wet_area_ha": 4095.620361328125
          }
        ]
      }
    },
    "smooth_frame_pattern": "assets/video/scenarios/hist12h_hist_extreme_2001_2025_12h_high_q100/smooth_frame_{index}.png?v=20260504062612",
    "smooth_frame_count": 49,
    "smooth_poster": "assets/video/scenarios/hist12h_hist_extreme_2001_2025_12h_high_q100/smooth_flood_depth_poster.png?v=20260504062612",
    "smooth_visualization": "masked interpolation and normalized smoothing of timestep depth surface",
    "smooth_frame_width": 820,
    "smooth_frame_height": 924,
    "smooth_depth_cap_m": 4.641932964324951,
    "frame_metrics": [
      {
        "frame": 0.0,
        "time_h": 0.0,
        "max_depth_m": 1.399999976158142,
        "max_speed_mps": 0.0,
        "wet_area_ha": 1499.5009765625
      },
      {
        "frame": 1.0,
        "time_h": 0.25,
        "max_depth_m": 5.000050067901611,
        "max_speed_mps": 3.038790702819824,
        "wet_area_ha": 2001.31396484375
      },
      {
        "frame": 2.0,
        "time_h": 0.5,
        "max_depth_m": 5.072065353393555,
        "max_speed_mps": 2.899183750152588,
        "wet_area_ha": 2001.51904296875
      },
      {
        "frame": 3.0,
        "time_h": 0.75,
        "max_depth_m": 5.103079319000244,
        "max_speed_mps": 2.7229859828948975,
        "wet_area_ha": 2033.0196533203125
      },
      {
        "frame": 4.0,
        "time_h": 1.0,
        "max_depth_m": 5.121943473815918,
        "max_speed_mps": 2.517693281173706,
        "wet_area_ha": 2041.8468017578125
      },
      {
        "frame": 5.0,
        "time_h": 1.25,
        "max_depth_m": 5.143405437469482,
        "max_speed_mps": 2.33566951751709,
        "wet_area_ha": 2083.803466796875
      },
      {
        "frame": 6.0,
        "time_h": 1.5,
        "max_depth_m": 5.169942855834961,
        "max_speed_mps": 2.1695191860198975,
        "wet_area_ha": 2110.57470703125
      },
      {
        "frame": 7.0,
        "time_h": 1.75,
        "max_depth_m": 5.206478118896484,
        "max_speed_mps": 2.0271899700164795,
        "wet_area_ha": 2133.820556640625
      },
      {
        "frame": 8.0,
        "time_h": 2.0,
        "max_depth_m": 5.255610942840576,
        "max_speed_mps": 1.8772270679473877,
        "wet_area_ha": 2190.845703125
      },
      {
        "frame": 9.0,
        "time_h": 2.25,
        "max_depth_m": 5.314055442810059,
        "max_speed_mps": 1.91864812374115,
        "wet_area_ha": 2224.76171875
      },
      {
        "frame": 10.0,
        "time_h": 2.5,
        "max_depth_m": 5.374427795410156,
        "max_speed_mps": 2.034841775894165,
        "wet_area_ha": 2357.864990234375
      },
      {
        "frame": 11.0,
        "time_h": 2.75,
        "max_depth_m": 5.4316606521606445,
        "max_speed_mps": 2.1791179180145264,
        "wet_area_ha": 2478.55908203125
      },
      {
        "frame": 12.0,
        "time_h": 3.0,
        "max_depth_m": 5.485200881958008,
        "max_speed_mps": 2.2708816528320312,
        "wet_area_ha": 2596.26220703125
      },
      {
        "frame": 13.0,
        "time_h": 3.25,
        "max_depth_m": 5.533953666687012,
        "max_speed_mps": 2.3301773071289062,
        "wet_area_ha": 2655.8125
      },
      {
        "frame": 14.0,
        "time_h": 3.5,
        "max_depth_m": 5.577702522277832,
        "max_speed_mps": 2.401093006134033,
        "wet_area_ha": 2695.99951171875
      },
      {
        "frame": 15.0,
        "time_h": 3.75,
        "max_depth_m": 5.615538597106934,
        "max_speed_mps": 2.460481643676758,
        "wet_area_ha": 2753.1123046875
      },
      {
        "frame": 16.0,
        "time_h": 4.0,
        "max_depth_m": 5.647387981414795,
        "max_speed_mps": 2.489551305770874,
        "wet_area_ha": 2840.369384765625
      },
      {
        "frame": 17.0,
        "time_h": 4.25,
        "max_depth_m": 5.674188137054443,
        "max_speed_mps": 2.488053798675537,
        "wet_area_ha": 2929.16845703125
      },
      {
        "frame": 18.0,
        "time_h": 4.5,
        "max_depth_m": 5.696446418762207,
        "max_speed_mps": 2.4882726669311523,
        "wet_area_ha": 3127.425048828125
      },
      {
        "frame": 19.0,
        "time_h": 4.75,
        "max_depth_m": 5.7145161628723145,
        "max_speed_mps": 2.4891724586486816,
        "wet_area_ha": 3154.90283203125
      },
      {
        "frame": 20.0,
        "time_h": 5.0,
        "max_depth_m": 5.729865550994873,
        "max_speed_mps": 2.4907724857330322,
        "wet_area_ha": 3179.010986328125
      },
      {
        "frame": 21.0,
        "time_h": 5.25,
        "max_depth_m": 5.743556976318359,
        "max_speed_mps": 2.4904534816741943,
        "wet_area_ha": 3260.189697265625
      },
      {
        "frame": 22.0,
        "time_h": 5.5,
        "max_depth_m": 5.75499153137207,
        "max_speed_mps": 2.4899449348449707,
        "wet_area_ha": 3294.523193359375
      },
      {
        "frame": 23.0,
        "time_h": 5.75,
        "max_depth_m": 5.764097690582275,
        "max_speed_mps": 2.4882805347442627,
        "wet_area_ha": 3345.177734375
      },
      {
        "frame": 24.0,
        "time_h": 6.0,
        "max_depth_m": 5.77174711227417,
        "max_speed_mps": 2.486110210418701,
        "wet_area_ha": 3358.560302734375
      },
      {
        "frame": 25.0,
        "time_h": 6.25,
        "max_depth_m": 5.778471946716309,
        "max_speed_mps": 2.484096050262451,
        "wet_area_ha": 3434.77490234375
      },
      {
        "frame": 26.0,
        "time_h": 6.5,
        "max_depth_m": 5.783945083618164,
        "max_speed_mps": 2.483189821243286,
        "wet_area_ha": 3494.874755859375
      },
      {
        "frame": 27.0,
        "time_h": 6.75,
        "max_depth_m": 5.787921905517578,
        "max_speed_mps": 2.4838054180145264,
        "wet_area_ha": 3573.126708984375
      },
      {
        "frame": 28.0,
        "time_h": 7.0,
        "max_depth_m": 5.790923595428467,
        "max_speed_mps": 2.4828755855560303,
        "wet_area_ha": 3616.152099609375
      },
      {
        "frame": 29.0,
        "time_h": 7.25,
        "max_depth_m": 5.794033527374268,
        "max_speed_mps": 2.480807065963745,
        "wet_area_ha": 3686.564697265625
      },
      {
        "frame": 30.0,
        "time_h": 7.5,
        "max_depth_m": 5.796482086181641,
        "max_speed_mps": 2.4780995845794678,
        "wet_area_ha": 3772.241943359375
      },
      {
        "frame": 31.0,
        "time_h": 7.75,
        "max_depth_m": 5.799371719360352,
        "max_speed_mps": 2.473724842071533,
        "wet_area_ha": 3834.345947265625
      },
      {
        "frame": 32.0,
        "time_h": 8.0,
        "max_depth_m": 5.802024841308594,
        "max_speed_mps": 2.467085123062134,
        "wet_area_ha": 3913.793212890625
      },
      {
        "frame": 33.0,
        "time_h": 8.25,
        "max_depth_m": 5.802525043487549,
        "max_speed_mps": 2.4562206268310547,
        "wet_area_ha": 3993.209228515625
      },
      {
        "frame": 34.0,
        "time_h": 8.5,
        "max_depth_m": 5.803843975067139,
        "max_speed_mps": 2.43898868560791,
        "wet_area_ha": 4036.467529296875
      },
      {
        "frame": 35.0,
        "time_h": 8.75,
        "max_depth_m": 5.805307865142822,
        "max_speed_mps": 2.4160168170928955,
        "wet_area_ha": 4140.02099609375
      },
      {
        "frame": 36.0,
        "time_h": 9.0,
        "max_depth_m": 5.805920124053955,
        "max_speed_mps": 2.3834221363067627,
        "wet_area_ha": 4193.64501953125
      },
      {
        "frame": 37.0,
        "time_h": 9.25,
        "max_depth_m": 5.8060832023620605,
        "max_speed_mps": 2.3441598415374756,
        "wet_area_ha": 4213.60546875
      },
      {
        "frame": 38.0,
        "time_h": 9.5,
        "max_depth_m": 5.807322025299072,
        "max_speed_mps": 2.2967655658721924,
        "wet_area_ha": 4258.234375
      },
      {
        "frame": 39.0,
        "time_h": 9.75,
        "max_depth_m": 5.808695316314697,
        "max_speed_mps": 2.2425119876861572,
        "wet_area_ha": 4317.9013671875
      },
      {
        "frame": 40.0,
        "time_h": 10.0,
        "max_depth_m": 5.810819149017334,
        "max_speed_mps": 2.18711256980896,
        "wet_area_ha": 4372.3583984375
      },
      {
        "frame": 41.0,
        "time_h": 10.25,
        "max_depth_m": 5.809192657470703,
        "max_speed_mps": 2.1332223415374756,
        "wet_area_ha": 4417.04052734375
      },
      {
        "frame": 42.0,
        "time_h": 10.5,
        "max_depth_m": 5.810835838317871,
        "max_speed_mps": 2.0833740234375,
        "wet_area_ha": 4439.47021484375
      },
      {
        "frame": 43.0,
        "time_h": 10.75,
        "max_depth_m": 5.814743995666504,
        "max_speed_mps": 2.038978338241577,
        "wet_area_ha": 4481.86572265625
      },
      {
        "frame": 44.0,
        "time_h": 11.0,
        "max_depth_m": 5.816019058227539,
        "max_speed_mps": 1.9988489151000977,
        "wet_area_ha": 4488.427734375
      },
      {
        "frame": 45.0,
        "time_h": 11.25,
        "max_depth_m": 5.804366588592529,
        "max_speed_mps": 1.9601397514343262,
        "wet_area_ha": 4480.095703125
      },
      {
        "frame": 46.0,
        "time_h": 11.5,
        "max_depth_m": 5.794898986816406,
        "max_speed_mps": 1.9199416637420654,
        "wet_area_ha": 4491.10986328125
      },
      {
        "frame": 47.0,
        "time_h": 11.75,
        "max_depth_m": 5.789146423339844,
        "max_speed_mps": 1.88337242603302,
        "wet_area_ha": 4486.3984375
      },
      {
        "frame": 48.0,
        "time_h": 12.0,
        "max_depth_m": 5.784895896911621,
        "max_speed_mps": 1.8524516820907593,
        "wet_area_ha": 4479.09423828125
      }
    ]
  },
  "satellite_browse": [
    {
      "label": "OPERA_L3_DSWx-S1_T44QMD_20240827T002253Z_20251107T121515Z_S1A_30_v1.0",
      "date": "2024-08-27",
      "href": "../satellite_calibration_v0/browse/OPERA_L3_DSWx-S1_T44QMD_20240827T002253Z_20251107T121515Z_S1A_30_v1.0_BROWSE.png"
    },
    {
      "label": "OPERA_L3_DSWx-S1_T44QMD_20240901T003106Z_20251107T124716Z_S1A_30_v1.0",
      "date": "2024-09-01",
      "href": "../satellite_calibration_v0/browse/OPERA_L3_DSWx-S1_T44QMD_20240901T003106Z_20251107T124716Z_S1A_30_v1.0_BROWSE.png"
    },
    {
      "label": "OPERA_L3_DSWx-S1_T44QMD_20240901T003129Z_20251107T144634Z_S1A_30_v1.0",
      "date": "2024-09-01",
      "href": "../satellite_calibration_v0/browse/OPERA_L3_DSWx-S1_T44QMD_20240901T003129Z_20251107T144634Z_S1A_30_v1.0_BROWSE.png"
    },
    {
      "label": "OPERA_L3_DSWx-S1_T44QMD_20240908T002253Z_20251107T122603Z_S1A_30_v1.0",
      "date": "2024-09-08",
      "href": "../satellite_calibration_v0/browse/OPERA_L3_DSWx-S1_T44QMD_20240908T002253Z_20251107T122603Z_S1A_30_v1.0_BROWSE.png"
    },
    {
      "label": "OPERA_L3_DSWx-S1_T44QMD_20240908T002311Z_20251107T112135Z_S1A_30_v1.0",
      "date": "2024-09-08",
      "href": "../satellite_calibration_v0/browse/OPERA_L3_DSWx-S1_T44QMD_20240908T002311Z_20251107T112135Z_S1A_30_v1.0_BROWSE.png"
    },
    {
      "label": "OPERA_L3_DSWx-S1_T44QMD_20240908T125236Z_20251107T081928Z_S1A_30_v1.0",
      "date": "2024-09-08",
      "href": "../satellite_calibration_v0/browse/OPERA_L3_DSWx-S1_T44QMD_20240908T125236Z_20251107T081928Z_S1A_30_v1.0_BROWSE.png"
    },
    {
      "label": "OPERA_L3_DSWx-S1_T44QMD_20240913T003108Z_20240913T082433Z_S1A_30_v1.0",
      "date": "2024-09-13",
      "href": "../satellite_calibration_v0/browse/OPERA_L3_DSWx-S1_T44QMD_20240913T003108Z_20240913T082433Z_S1A_30_v1.0_BROWSE.png"
    }
  ],
  "calibration": {},
  "forcing": {
    "boundary_conditions": [
      {
        "feature_name": "PRAKASAM BARRAGE",
        "feature_type": "reservoir",
        "forcing_kind": "stage_time_series_template",
        "source_status": "dem_bank_rating_curve_low_confidence_needs_observed_stage",
        "normal_stage_m": 23.05823621791342,
        "elevated_stage_m": 25.052188068472823,
        "high_stage_m": 27.54528541005176,
        "very_high_stage_m": 29.398606196279108
      },
      {
        "feature_name": "Krishna River",
        "feature_type": "river",
        "forcing_kind": "stage_time_series_template",
        "source_status": "dem_bank_rating_curve_low_confidence_needs_observed_stage",
        "normal_stage_m": 18.178526401519775,
        "elevated_stage_m": 20.220801262233568,
        "high_stage_m": 22.37166853365691,
        "very_high_stage_m": 25.913043478260867
      },
      {
        "feature_name": "Krishna",
        "feature_type": "river",
        "forcing_kind": "stage_time_series_template",
        "source_status": "dem_bank_rating_curve_low_confidence_needs_observed_stage",
        "normal_stage_m": 21.1655325238601,
        "elevated_stage_m": 23.722707923806233,
        "high_stage_m": 26.273469685886216,
        "very_high_stage_m": 27.748860436149265
      },
      {
        "feature_name": "Budameru canal",
        "feature_type": "budameru_canal",
        "forcing_kind": "stage_time_series_template",
        "source_status": "dem_bank_rating_curve_low_confidence_needs_observed_stage",
        "normal_stage_m": 20.654028560804285,
        "elevated_stage_m": 21.60869565217391,
        "high_stage_m": 22.73533061898273,
        "very_high_stage_m": 23.60937789419423
      },
      {
        "feature_name": "Bandar / Machilipatnam Canal",
        "feature_type": "osm_major_canal",
        "forcing_kind": "stage_or_flow_operations_template",
        "source_status": "requires_official_canal_operation_stage_or_discharge_series",
        "normal_stage_m": null,
        "elevated_stage_m": null,
        "high_stage_m": null,
        "very_high_stage_m": null
      },
      {
        "feature_name": "Eluru Canal",
        "feature_type": "osm_major_canal",
        "forcing_kind": "stage_or_flow_operations_template",
        "source_status": "requires_official_canal_operation_stage_or_discharge_series",
        "normal_stage_m": null,
        "elevated_stage_m": null,
        "high_stage_m": null,
        "very_high_stage_m": null
      },
      {
        "feature_name": "Krishna Eastern Main Canal",
        "feature_type": "osm_major_canal",
        "forcing_kind": "stage_or_flow_operations_template",
        "source_status": "requires_official_canal_operation_stage_or_discharge_series",
        "normal_stage_m": null,
        "elevated_stage_m": null,
        "high_stage_m": null,
        "very_high_stage_m": null
      },
      {
        "feature_name": "Ryves Canal",
        "feature_type": "osm_major_canal",
        "forcing_kind": "stage_or_flow_operations_template",
        "source_status": "requires_official_canal_operation_stage_or_discharge_series",
        "normal_stage_m": null,
        "elevated_stage_m": null,
        "high_stage_m": null,
        "very_high_stage_m": null
      },
      {
        "feature_name": "Budameru extended river/canal waterway",
        "feature_type": "osm_budameru_waterway",
        "forcing_kind": "stage_or_flow_operations_template",
        "source_status": "requires_official_budameru_stage_discharge_or_channel_operation_series",
        "normal_stage_m": null,
        "elevated_stage_m": null,
        "high_stage_m": null,
        "very_high_stage_m": null
      }
    ],
    "boundary_plot": "assets/maps/boundary_conditions_stage_profiles.png",
    "boundary_csv": "assets/forcing/river_canal_stage_templates.csv",
    "budameru_hydrograph_source": "NRSC/APSAC Budameru Flood Modelling report, page 3 digitized flow hydrograph",
    "rainfall_plot": "assets/maps/rainfall_hyetograph.png",
    "rainfall_csv": "assets/forcing/selected_rainfall_hyetograph.csv",
    "rainfall_summary": {
      "base_total_mm": 80.0,
      "base_peak_intensity_mm_hr": 35.0,
      "selected_run_id": "hist12h_hist_extreme_2001_2025_12h_high_q100",
      "selected_total_mm": 132.70250000000001,
      "selected_duration_h": 12.0,
      "selected_peak_intensity_mm_hr": 21.097916666666663,
      "source_status": "NASA POWER MERRA-2 historical hourly PRECTOTCORR analysis",
      "source_detail": "historical hourly hyetograph: hist_extreme_2001_2025_12h; NASA POWER MERRA-2 PRECTOTCORR converted from mm/day",
      "event_label": "hist_extreme_2001_2025_12h",
      "event_start": "2006-10-30 03:00:00",
      "event_end": "2006-10-30 14:00:00"
    },
    "notes": [
      "Budameru inflow boundary is sourced from the NRSC/APSAC Budameru Flood Modelling report digitized hydrograph.",
      "Rainfall forcing in this ensemble is generated from historical hourly rainfall analysis; observed IMD station, radar or gridded rainfall can be inserted as the next data upgrade.",
      "Krishna river, reservoir and canal antecedent states use stage/depth templates and are ready for official observed or forecast hydrographs and operation records."
    ]
  },
  "urban_routine": {
    "selected_run_id": "hist12h_hist_extreme_2001_2025_12h_high_q100",
    "map": "assets/maps/urban_ward_routine.png",
    "summary_csv": "../urban_ward_routines_v0/vijayawada_urban_ward_summary_current_verification.csv",
    "summary_geojson": "../urban_ward_routines_v0/vijayawada_urban_ward_summary_current_verification.geojson",
    "ward_count": 69,
    "total_buildings": 122737,
    "exposed_buildings": 52388,
    "top_wards": [
      {
        "ward_id": "1",
        "ward_label": "Ward 1",
        "ward_area_ha": 596.5989188178426,
        "wet_area_ha": 609.12,
        "wet_fraction": 0.9884621001898641,
        "max_depth_m": 5.116120338439941,
        "p95_depth_m": 4.477908134460449,
        "mean_wet_depth_m": 3.0961475372314453,
        "max_speed_mps": 1.4341826438903809,
        "p95_speed_mps": 0.7808924913406372,
        "building_count": 3773,
        "building_area_m2": 353833.1838865745,
        "exposed_buildings": 3651,
        "exposed_building_area_m2": 341001.34887962847,
        "max_building_sample_depth_m": 5.116120338439941,
        "urban_risk_score": 92.5731613400077,
        "rank": 1
      },
      {
        "ward_id": "58",
        "ward_label": "Ward 58",
        "ward_area_ha": 133.64702236559563,
        "wet_area_ha": 144.27,
        "wet_fraction": 0.9962709757613425,
        "max_depth_m": 4.138487339019775,
        "p95_depth_m": 3.337103843688965,
        "mean_wet_depth_m": 2.1564111709594727,
        "max_speed_mps": 1.077223777770996,
        "p95_speed_mps": 0.7648874521255493,
        "building_count": 5197,
        "building_area_m2": 278349.42170760926,
        "exposed_buildings": 5194,
        "exposed_building_area_m2": 277967.58537830366,
        "max_building_sample_depth_m": 4.138487339019775,
        "urban_risk_score": 59.54052354711712,
        "rank": 2
      },
      {
        "ward_id": "52",
        "ward_label": "Ward 52",
        "ward_area_ha": 210.24885082369047,
        "wet_area_ha": 227.7,
        "wet_fraction": 1.0,
        "max_depth_m": 5.807892322540283,
        "p95_depth_m": 4.190184593200684,
        "mean_wet_depth_m": 2.8971481323242188,
        "max_speed_mps": 2.640209913253784,
        "p95_speed_mps": 1.1263374090194702,
        "building_count": 2158,
        "building_area_m2": 263226.6370685063,
        "exposed_buildings": 2158,
        "exposed_building_area_m2": 263226.6370685063,
        "max_building_sample_depth_m": 4.862215042114258,
        "urban_risk_score": 56.96695735686437,
        "rank": 3
      },
      {
        "ward_id": "52A",
        "ward_label": "Ward 52A",
        "ward_area_ha": 205.52025005423857,
        "wet_area_ha": 219.06,
        "wet_fraction": 0.9890288500609509,
        "max_depth_m": 5.807892322540283,
        "p95_depth_m": 4.005633354187012,
        "mean_wet_depth_m": 2.3742759227752686,
        "max_speed_mps": 2.4811346530914307,
        "p95_speed_mps": 0.9633811116218567,
        "building_count": 2323,
        "building_area_m2": 144561.133632662,
        "exposed_buildings": 2302,
        "exposed_building_area_m2": 143838.29644837097,
        "max_building_sample_depth_m": 4.695771217346191,
        "urban_risk_score": 55.704267443658296,
        "rank": 4
      },
      {
        "ward_id": "14",
        "ward_label": "Ward 14",
        "ward_area_ha": 318.30521103369125,
        "wet_area_ha": 261.72,
        "wet_fraction": 0.7855213398163156,
        "max_depth_m": 4.392253398895264,
        "p95_depth_m": 4.220086574554443,
        "mean_wet_depth_m": 2.2074766159057617,
        "max_speed_mps": 1.2164334058761597,
        "p95_speed_mps": 1.0626916885375977,
        "building_count": 3270,
        "building_area_m2": 246666.60025909808,
        "exposed_buildings": 617,
        "exposed_building_area_m2": 34839.474148627705,
        "max_building_sample_depth_m": 2.533459424972534,
        "urban_risk_score": 52.11585289538597,
        "rank": 5
      },
      {
        "ward_id": "2A",
        "ward_label": "Ward 2A",
        "ward_area_ha": 202.06739540916547,
        "wet_area_ha": 206.1,
        "wet_fraction": 0.9621848739495799,
        "max_depth_m": 3.656952142715454,
        "p95_depth_m": 3.656952142715454,
        "mean_wet_depth_m": 1.7588177919387817,
        "max_speed_mps": 1.5291913747787476,
        "p95_speed_mps": 1.443948745727539,
        "building_count": 2403,
        "building_area_m2": 397476.20685516566,
        "exposed_buildings": 2275,
        "exposed_building_area_m2": 379605.96004549076,
        "max_building_sample_depth_m": 3.656952142715454,
        "urban_risk_score": 52.11108223021519,
        "rank": 6
      },
      {
        "ward_id": "56",
        "ward_label": "Ward 56",
        "ward_area_ha": 139.5323069297529,
        "wet_area_ha": 142.83,
        "wet_fraction": 0.950868783702816,
        "max_depth_m": 3.0349247455596924,
        "p95_depth_m": 2.8208982944488525,
        "mean_wet_depth_m": 1.9044119119644165,
        "max_speed_mps": 0.8302276730537415,
        "p95_speed_mps": 0.7837937474250793,
        "building_count": 3942,
        "building_area_m2": 253741.9481762559,
        "exposed_buildings": 3901,
        "exposed_building_area_m2": 242679.81225766207,
        "max_building_sample_depth_m": 3.0349247455596924,
        "urban_risk_score": 49.4135223692022,
        "rank": 7
      },
      {
        "ward_id": "53",
        "ward_label": "Ward 53",
        "ward_area_ha": 130.0617066490235,
        "wet_area_ha": 134.37,
        "wet_fraction": 0.9533844189016603,
        "max_depth_m": 4.095367908477783,
        "p95_depth_m": 3.5648934841156006,
        "mean_wet_depth_m": 2.079143762588501,
        "max_speed_mps": 2.4455621242523193,
        "p95_speed_mps": 1.0499773025512695,
        "building_count": 2920,
        "building_area_m2": 268327.8757581218,
        "exposed_buildings": 2761,
        "exposed_building_area_m2": 248302.15125332557,
        "max_building_sample_depth_m": 4.095367908477783,
        "urban_risk_score": 48.825970390338746,
        "rank": 8
      },
      {
        "ward_id": "2",
        "ward_label": "Ward 2",
        "ward_area_ha": 211.51541993113017,
        "wet_area_ha": 173.79,
        "wet_fraction": 0.7690163281561131,
        "max_depth_m": 3.0962164402008057,
        "p95_depth_m": 2.91579532623291,
        "mean_wet_depth_m": 1.6133724451065063,
        "max_speed_mps": 0.31061744689941406,
        "p95_speed_mps": 0.2555558681488037,
        "building_count": 3734,
        "building_area_m2": 674095.9210255307,
        "exposed_buildings": 2948,
        "exposed_building_area_m2": 528939.6280694111,
        "max_building_sample_depth_m": 3.0962164402008057,
        "urban_risk_score": 47.660595516176315,
        "rank": 9
      },
      {
        "ward_id": "59",
        "ward_label": "Ward 59",
        "ward_area_ha": 272.4304317784858,
        "wet_area_ha": 159.93,
        "wet_fraction": 0.5476117103235747,
        "max_depth_m": 3.4127845764160156,
        "p95_depth_m": 2.552403211593628,
        "mean_wet_depth_m": 1.6224457025527954,
        "max_speed_mps": 1.1801323890686035,
        "p95_speed_mps": 0.6395230293273926,
        "building_count": 3767,
        "building_area_m2": 194830.12574821207,
        "exposed_buildings": 2774,
        "exposed_building_area_m2": 124950.33659594983,
        "max_building_sample_depth_m": 3.4127845764160156,
        "urban_risk_score": 43.189394210456335,
        "rank": 10
      }
    ],
    "alignment": [
      "Matched in this DSS: TUM building footprints, ward-scale flood metrics, building exposure, depth/extent/velocity reporting, and pump/drainage sensitivity summaries.",
      "Next computation upgrades: building-mask roughness/obstruction, gridded infiltration classes, transmissive or tailwater-controlled urban boundaries, and capacity-limited 1D surcharge exchange."
    ]
  },
  "model_readiness": {
    "available": true,
    "dir": "../model_readiness_layers_v0",
    "layers": [
      "lulc_proxy",
      "terrain_dem",
      "terrain_hillshade",
      "terrain_slope",
      "hydroconditioned_dem_delta",
      "domain_continuity"
    ],
    "summary": [
      {
        "artifact": "LULC proxy overlay",
        "status": "proxy_from_local_gis",
        "source": "TUM buildings, local roads, drainage, merged waterbodies",
        "output": "lulc_proxy.png",
        "model_use": "roughness zoning and visual QA",
        "notes": "Not an official classified LULC product."
      },
      {
        "artifact": "DEM/DTM source raster",
        "status": "available_dem_no_separate_dtm",
        "source": "/Users/mirlab/Documents/Vijaywada/raw_data/vijaywada_source/datasets/DEM/DEM/DEM_VMB.tif",
        "output": "dem_dtm_source_20m.tif, dem_dtm_gap_filled_model_surface_20m.tif, terrain_dem.png",
        "model_use": "2D terrain base after datum review",
        "notes": "Current folder has DEM_VMB.tif. No distinct DTM/DSM pair was found locally. A separate nearest-neighbour gap-filled model surface is written to keep the FloodRESQ domain continuous."
      },
      {
        "artifact": "Hydroconditioned DEM proxy",
        "status": "draft_modeling_proxy",
        "source": "DEM burn-in from merged waterbodies, OSM canals/Budameru, local drainage",
        "output": "hydroconditioned_dem_proxy_20m.tif, hydroconditioned_dem_delta.png",
        "model_use": "candidate continuity surface for fast screening runs",
        "notes": "Requires review against surveyed cross-sections, culverts, canals and embankments before production runs."
      },
      {
        "artifact": "Satellite / ortho reference",
        "status": "reference_map_not_georeferenced_ortho",
        "source": "/Users/mirlab/Documents/Vijaywada/raw_data/vijaywada_source/datasets/all_maps/Vijayawada_water_bodies_satellite_map.png",
        "output": "satellite_reference_map.png",
        "model_use": "visual interpretation and stakeholder context",
        "notes": "No georeferenced orthomosaic was found in the Vijayawada working directory."
      },
      {
        "artifact": "Domain continuity QA",
        "status": "generated",
        "source": "FloodRESQ domain, DEM valid cells, hydro corridors",
        "output": "domain_continuity.png, domain_continuity_summary.json",
        "model_use": "pre-run QA for continuous model domain",
        "notes": "Flags DEM gaps and connected hydro-corridor components on the model grid."
      }
    ],
    "manifest": {
      "generated_at_utc": "2026-05-02T16:10:09.354637+00:00",
      "root": "/Users/mirlab/Documents/Vijaywada",
      "batch_dir": "/Users/mirlab/Documents/Vijaywada/dss_dev/derived/floodresq_runs/floodresq_soilgrids_spatial_physics_single_mpi18_v0",
      "bounds_utm44n": [
        455909.1916,
        1821868.8515,
        466289.1916,
        1833568.8515
      ],
      "resolution_m": 20.0,
      "dem": {
        "source": "/Users/mirlab/Documents/Vijaywada/raw_data/vijaywada_source/datasets/DEM/DEM/DEM_VMB.tif",
        "source_crs": "EPSG:32644",
        "source_resolution_m": [
          0.999911071702454,
          0.9999530317203958
        ],
        "target_resolution_m": 20.0,
        "shape": [
          585,
          519
        ],
        "nodata": -9999.0
      },
      "feature_counts_inside_extent": {
        "boundary_points": 1,
        "buildings": 122764,
        "roads": 22765,
        "drainage": 16846,
        "manholes": 12259,
        "pumps": 13,
        "merged_water": 4,
        "canals": 3,
        "budameru_osm": 3
      },
      "lulc_proxy_cell_counts": {
        "domain_other_cells": 78834,
        "building_cells": 15703,
        "road_corridor_cells": 19385,
        "drainage_corridor_cells": 68516,
        "water_cells": 31170
      },
      "hydroconditioning": {
        "waterbody_burn_m": 1.5,
        "major_canal_and_budameru_buffer_m": 25.0,
        "major_canal_and_budameru_burn_m": 1.0,
        "drainage_buffer_m": 8.0,
        "drainage_burn_m": 0.4,
        "burned_cell_count": 99099,
        "max_burn_depth_m": 1.5,
        "terrain_gap_fill": {
          "source_gap_cells_inside_domain": 74065,
          "source_gap_fill_method": "nearest_valid_dem_cell_inside_or_near_domain",
          "model_surface_valid_cells_inside_domain": 213608,
          "model_surface_valid_fraction_inside_domain": 1.0
        }
      },
      "continuity": {
        "dem_valid_cells_inside_domain": 139543,
        "dem_gap_cells_inside_domain": 74065,
        "dem_valid_fraction_inside_domain": 0.6532667315830868,
        "dem_valid_connected_components_inside_domain": 1,
        "largest_dem_valid_component_fraction": 1.0,
        "hydro_corridor_components_inside_domain": 1,
        "largest_hydro_corridor_component_fraction": 1.0,
        "source_gap_cells_inside_domain": 74065,
        "source_gap_fill_method": "nearest_valid_dem_cell_inside_or_near_domain",
        "model_surface_valid_cells_inside_domain": 213608,
        "model_surface_valid_fraction_inside_domain": 1.0
      },
      "outputs": {
        "lulc_proxy_png": "lulc_proxy.png",
        "terrain_dem_png": "terrain_dem.png",
        "terrain_hillshade_png": "terrain_hillshade.png",
        "terrain_slope_png": "terrain_slope.png",
        "hydroconditioned_dem_delta_png": "hydroconditioned_dem_delta.png",
        "domain_continuity_png": "domain_continuity.png",
        "dem_dtm_source_tif": "dem_dtm_source_20m.tif",
        "dem_dtm_gap_filled_model_surface_tif": "dem_dtm_gap_filled_model_surface_20m.tif",
        "hydroconditioned_dem_proxy_tif": "hydroconditioned_dem_proxy_20m.tif",
        "hydroconditioned_dem_burn_tif": "hydroconditioned_dem_burn_depth_m_20m.tif",
        "satellite_reference_png": "satellite_reference_map.png",
        "satellite_reference_pdf": "satellite_reference_map.pdf",
        "merged_water_bodies_zip": "merged_water_bodies_shapefile.zip",
        "budameru_boundary_condition_zip": "budameru_boundary_condition_package.zip"
      },
      "recommended_future_layers": [
        "Reviewed land-use/land-cover classes for Manning roughness",
        "Surveyed DTM/DSM or LiDAR-derived bare-earth terrain",
        "Georeferenced orthomosaic or current high-resolution satellite imagery",
        "Culverts, bridge openings, canal regulators, sluice gates and embankment crest lines",
        "Pump curves, pump operating rules, power-failure assumptions and outlet levels",
        "Rain-gauge/radar rainfall grids and observed hydrographs at Budameru, Krishna and canal boundaries",
        "Critical infrastructure, population/exposure grids and evacuation-relevant facilities"
      ]
    }
  },
  "physics_layers": {
    "available": true,
    "dir": "../physics_layers_v0",
    "layers": [
      "physics_surface_class",
      "spatial_manning_n",
      "infiltration_capacity",
      "soil_hydrologic_group_proxy",
      "building_obstruction_fraction",
      "conditioned_hydraulic_terrain"
    ],
    "manifest": {
      "generated_utc": "2026-05-02T15:45:57Z",
      "root": "/Users/mirlab/Documents/Vijaywada",
      "output_dir": "/Users/mirlab/Documents/Vijaywada/dss_dev/derived/physics_layers_v0",
      "crs": "EPSG:32644",
      "resolution_m": 20.0,
      "bounds_utm44n": [
        452707.40152664995,
        1820091.1206384662,
        468396.5898559372,
        1836636.9934199261
      ],
      "terrain": {
        "source_dem": "/Users/mirlab/Documents/Vijaywada/raw_data/vijaywada_source/datasets/DEM/DEM/DEM_VMB.tif",
        "conditioned_hydraulic_terrain": "conditioned_hydraulic_terrain_20m.tif",
        "hydroconditioned_dem_without_building_raise": "hydroconditioned_dem_no_building_raise_20m.tif",
        "building_obstruction_height_m": 0.25,
        "hydro_burn": {
          "waterbody_burn_m": 1.5,
          "canal_budameru_buffer_m": 25.0,
          "canal_budameru_burn_m": 1.0,
          "drainage_buffer_m": 8.0,
          "drainage_burn_m": 0.4,
          "burned_cell_count": 103514,
          "max_burn_depth_m": 1.5
        },
        "gap_fill": {
          "source_gap_cells_inside_domain": 105637,
          "source_gap_fill_method": "nearest_valid_dem_cell_inside_or_near_domain",
          "model_surface_valid_cells_inside_domain": 245373,
          "model_surface_valid_fraction_inside_domain": 1.0
        },
        "dem_metadata": {
          "source": "/Users/mirlab/Documents/Vijaywada/raw_data/vijaywada_source/datasets/DEM/DEM/DEM_VMB.tif",
          "source_crs": "EPSG:32644",
          "source_resolution_m": [
            0.999911071702454,
            0.9999530317203958
          ],
          "target_resolution_m": 20.0,
          "shape": [
            828,
            785
          ],
          "nodata": -9999.0
        },
        "contour_qa": {
          "contour_vertex_sample_count": 85083,
          "mean_error_m": -0.2077457469271561,
          "median_abs_error_m": 0.5298328399658203,
          "rmse_m": 2.5434601398847008,
          "p95_abs_error_m": 5.706365203857421,
          "status": "computed_against_gap_filled_surface_before_hydro_burn"
        }
      },
      "lulc": {
        "worldcover_source": "/Users/mirlab/Documents/Vijaywada/raw_data/vijaywada_source/datasets/LULC_WorldCover/tiles/ESA_WorldCover_10m_2021_v200_N15E078_Map.tif",
        "worldcover_classes": {
          "10": "Tree cover",
          "20": "Shrubland",
          "30": "Grassland",
          "40": "Cropland",
          "50": "Built-up",
          "60": "Bare or sparse vegetation",
          "70": "Snow and ice",
          "80": "Permanent water bodies",
          "90": "Herbaceous wetland",
          "95": "Mangroves",
          "100": "Moss and lichen"
        },
        "local_overrides": [
          "TUM building footprints override built/impervious and obstruction fraction.",
          "Local road network overrides road/paved roughness.",
          "Local drainage, canal and merged-water layers override channel/water roughness and no-infiltration zones."
        ],
        "physics_class_counts": [
          {
            "code": 1,
            "name": "waterbody",
            "cell_count": 51397,
            "area_ha": 2055.88
          },
          {
            "code": 2,
            "name": "drainage_corridor",
            "cell_count": 17276,
            "area_ha": 691.04
          },
          {
            "code": 3,
            "name": "building_obstruction",
            "cell_count": 66385,
            "area_ha": 2655.4
          },
          {
            "code": 4,
            "name": "road_paved",
            "cell_count": 15078,
            "area_ha": 603.12
          },
          {
            "code": 5,
            "name": "built_up_open",
            "cell_count": 18504,
            "area_ha": 740.16
          },
          {
            "code": 6,
            "name": "tree_cover",
            "cell_count": 24844,
            "area_ha": 993.76
          },
          {
            "code": 7,
            "name": "shrub_grass",
            "cell_count": 8575,
            "area_ha": 343.0
          },
          {
            "code": 8,
            "name": "cropland",
            "cell_count": 40869,
            "area_ha": 1634.76
          },
          {
            "code": 9,
            "name": "bare_sparse",
            "cell_count": 2298,
            "area_ha": 91.92
          },
          {
            "code": 10,
            "name": "wetland_lowland",
            "cell_count": 147,
            "area_ha": 5.88
          },
          {
            "code": 11,
            "name": "other_pervious",
            "cell_count": 0,
            "area_ha": 0.0
          }
        ]
      },
      "roughness": {
        "raster": "manning_n_20m.tif",
        "min": 0.017999999225139618,
        "mean": 0.06594444066286087,
        "max": 0.11999999731779099,
        "parameter_table": "physics_parameter_table.csv"
      },
      "infiltration": {
        "raster": "infiltration_capacity_mm_h_20m.tif",
        "soil_group_raster": "soil_hydrologic_group_proxy_20m.tif",
        "soil_group_status": "SoilGrids texture-derived hydrologic soil group applied to pervious classes",
        "external_soil": {
          "external_hsg_cells_used": 67792,
          "status": "applied_to_pervious_physics_classes",
          "enabled": true,
          "source_raster": "/Users/mirlab/Documents/Vijaywada/dss_dev/derived/open_soils_v0/soilgrids_texture_hsg_20m.tif",
          "source": "SoilGrids-derived 0-30 cm texture hydrologic soil group raster"
        },
        "min_mm_h": 0.0,
        "mean_mm_h": 2.074827194213867,
        "max_mm_h": 18.0,
        "soil_group_counts": [
          {
            "code": 1,
            "name": "A",
            "cell_count": 0,
            "area_ha": 0.0
          },
          {
            "code": 2,
            "name": "B",
            "cell_count": 4356,
            "area_ha": 174.24
          },
          {
            "code": 3,
            "name": "C",
            "cell_count": 67698,
            "area_ha": 2707.92
          },
          {
            "code": 4,
            "name": "D",
            "cell_count": 4679,
            "area_ha": 187.16
          },
          {
            "code": 5,
            "name": "impervious",
            "cell_count": 99967,
            "area_ha": 3998.68
          },
          {
            "code": 6,
            "name": "water_or_channel",
            "cell_count": 68673,
            "area_ha": 2746.92
          }
        ]
      },
      "building_obstruction": {
        "fraction_raster": "building_obstruction_fraction_20m.tif",
        "mean_fraction_inside_domain": 0.13223515450954437,
        "cells_with_fraction_ge_0p05": 83111
      },
      "outputs": {
        "conditioned_hydraulic_terrain_tif": "conditioned_hydraulic_terrain_20m.tif",
        "manning_n_tif": "manning_n_20m.tif",
        "infiltration_capacity_tif": "infiltration_capacity_mm_h_20m.tif",
        "building_obstruction_fraction_tif": "building_obstruction_fraction_20m.tif",
        "physics_surface_class_tif": "physics_surface_class_20m.tif",
        "soil_hydrologic_group_proxy_tif": "soil_hydrologic_group_proxy_20m.tif",
        "conditioned_hydraulic_terrain_png": "conditioned_hydraulic_terrain.png",
        "spatial_manning_n_png": "spatial_manning_n.png",
        "infiltration_capacity_png": "infiltration_capacity.png",
        "building_obstruction_fraction_png": "building_obstruction_fraction.png",
        "physics_surface_class_png": "physics_surface_class.png",
        "soil_hydrologic_group_proxy_png": "soil_hydrologic_group_proxy.png",
        "parameter_table_csv": "physics_parameter_table.csv"
      }
    }
  },
  "rtgs_hotspots": {
    "rows": [
      {
        "rank": 1,
        "hotspot_id": "H01",
        "easting_m": 459314.1916,
        "northing_m": 1829863.8515,
        "max_depth_m": 5.807892322540283,
        "p95_depth_m": 4.173616886138916,
        "area_ha": 3026.79,
        "source_run": "hist12h_hist_extreme_2001_2025_12h_high_q100",
        "interpretation": "RTGS AWARE target hotspot from FloodRESQ max-depth verification raster"
      },
      {
        "rank": 2,
        "hotspot_id": "H02",
        "easting_m": 456524.1916,
        "northing_m": 1826773.8515,
        "max_depth_m": 4.539922714233398,
        "p95_depth_m": 3.3245084285736084,
        "area_ha": 1329.84,
        "source_run": "hist12h_hist_extreme_2001_2025_12h_high_q100",
        "interpretation": "RTGS AWARE target hotspot from FloodRESQ max-depth verification raster"
      },
      {
        "rank": 3,
        "hotspot_id": "H03",
        "easting_m": 459734.1916,
        "northing_m": 1826263.8515,
        "max_depth_m": 2.999699354171753,
        "p95_depth_m": 2.9254159927368164,
        "area_ha": 2.97,
        "source_run": "hist12h_hist_extreme_2001_2025_12h_high_q100",
        "interpretation": "RTGS AWARE target hotspot from FloodRESQ max-depth verification raster"
      },
      {
        "rank": 4,
        "hotspot_id": "H04",
        "easting_m": 457754.1916,
        "northing_m": 1830013.8515,
        "max_depth_m": 2.383101224899292,
        "p95_depth_m": 1.399999976158142,
        "area_ha": 73.44,
        "source_run": "hist12h_hist_extreme_2001_2025_12h_high_q100",
        "interpretation": "RTGS AWARE target hotspot from FloodRESQ max-depth verification raster"
      },
      {
        "rank": 5,
        "hotspot_id": "H05",
        "easting_m": 460424.1916,
        "northing_m": 1826773.8515,
        "max_depth_m": 1.7610348463058472,
        "p95_depth_m": 1.677262306213379,
        "area_ha": 10.71,
        "source_run": "hist12h_hist_extreme_2001_2025_12h_high_q100",
        "interpretation": "RTGS AWARE target hotspot from FloodRESQ max-depth verification raster"
      },
      {
        "rank": 6,
        "hotspot_id": "H06",
        "easting_m": 460784.1916,
        "northing_m": 1826143.8515,
        "max_depth_m": 1.7143999338150024,
        "p95_depth_m": 1.4634374380111694,
        "area_ha": 4.95,
        "source_run": "hist12h_hist_extreme_2001_2025_12h_high_q100",
        "interpretation": "RTGS AWARE target hotspot from FloodRESQ max-depth verification raster"
      },
      {
        "rank": 7,
        "hotspot_id": "H07",
        "easting_m": 460154.1916,
        "northing_m": 1826053.8515,
        "max_depth_m": 1.3612502813339233,
        "p95_depth_m": 1.3612502813339233,
        "area_ha": 7.29,
        "source_run": "hist12h_hist_extreme_2001_2025_12h_high_q100",
        "interpretation": "RTGS AWARE target hotspot from FloodRESQ max-depth verification raster"
      },
      {
        "rank": 8,
        "hotspot_id": "H08",
        "easting_m": 456764.1916,
        "northing_m": 1828363.8515,
        "max_depth_m": 1.324015498161316,
        "p95_depth_m": 1.324015498161316,
        "area_ha": 3.06,
        "source_run": "hist12h_hist_extreme_2001_2025_12h_high_q100",
        "interpretation": "RTGS AWARE target hotspot from FloodRESQ max-depth verification raster"
      },
      {
        "rank": 9,
        "hotspot_id": "H09",
        "easting_m": 462134.1916,
        "northing_m": 1823803.8515,
        "max_depth_m": 1.3007757663726807,
        "p95_depth_m": 1.2797743082046509,
        "area_ha": 8.01,
        "source_run": "hist12h_hist_extreme_2001_2025_12h_high_q100",
        "interpretation": "RTGS AWARE target hotspot from FloodRESQ max-depth verification raster"
      },
      {
        "rank": 10,
        "hotspot_id": "H10",
        "easting_m": 461384.1916,
        "northing_m": 1824253.8515,
        "max_depth_m": 1.292678713798523,
        "p95_depth_m": 1.2191814184188843,
        "area_ha": 2.34,
        "source_run": "hist12h_hist_extreme_2001_2025_12h_high_q100",
        "interpretation": "RTGS AWARE target hotspot from FloodRESQ max-depth verification raster"
      }
    ],
    "csv": "../rtgs_aware_hotspots_v0/rtgs_aware_flood_hotspots_current_verification.csv",
    "layer": "assets/maps/rtgs_aware_hotspots.png"
  },
  "boundary_hydrographs": {
    "layer": "assets/maps/boundary_hydrographs.svg",
    "hydrograph_csv": "assets/forcing/budameru_inflow_hydrograph.csv",
    "source_hydrograph_csv": "raw_data/vijaywada_source/datasets/boundary_condition/Boundary_Condition_Hydrograph.csv",
    "start_datetime": "2024-08-31 14:17:00",
    "end_datetime": "2024-09-01 02:17:00",
    "scale": 1.0,
    "raw_peak_m3_s": 1549.85,
    "selected_peak_m3_s": 1549.85,
    "selected_mean_m3_s": 1489.6503883495145,
    "selected_volume_m3": 64355172.0,
    "stage_templates": [
      {
        "feature_name": "PRAKASAM BARRAGE",
        "feature_type": "reservoir",
        "normal_stage_m": 23.05823621791342
      },
      {
        "feature_name": "Krishna River",
        "feature_type": "river",
        "normal_stage_m": 18.178526401519775
      },
      {
        "feature_name": "Krishna",
        "feature_type": "river",
        "normal_stage_m": 21.1655325238601
      },
      {
        "feature_name": "Budameru canal",
        "feature_type": "budameru canal",
        "normal_stage_m": 20.654028560804285
      }
    ]
  },
  "downloads": [
    {
      "label": "Batch summary CSV",
      "href": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/batch_summary.csv"
    },
    {
      "label": "Scenario matrix CSV",
      "href": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenario_matrix.csv"
    },
    {
      "label": "Envelope GeoTIFF",
      "href": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenario_envelope_max_depth_m.tif"
    },
    {
      "label": "Envelope PNG",
      "href": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenario_envelope_max_depth.png"
    },
    {
      "label": "Review GeoPackage",
      "href": "../basemap_review/vijayawada_review_layers.gpkg"
    },
    {
      "label": "Satellite scene inventory",
      "href": "../satellite_calibration_v0/budameru_satellite_scene_inventory.csv"
    },
    {
      "label": "Observed extent summary",
      "href": "../satellite_calibration_v0/opera_browse_observed_extents/observed_extent_summary.csv"
    },
    {
      "label": "TUM building footprints GeoPackage",
      "href": "../buildings_tum_gba_vijayawada/tum_gba_lod1_buildings_vijayawada_utm44n.gpkg"
    },
    {
      "label": "TUM building footprints summary",
      "href": "../buildings_tum_gba_vijayawada/tum_gba_lod1_buildings_vijayawada_summary.json"
    },
    {
      "label": "TUM building footprints preview",
      "href": "../buildings_tum_gba_vijayawada/tum_gba_lod1_buildings_vijayawada_preview.png"
    },
    {
      "label": "Boundary templates CSV (NRSC source plus stage templates)",
      "href": "../floodresq_config_v0/river_canal_stage_boundary_templates.csv"
    },
    {
      "label": "NRSC Budameru inflow hydrograph CSV",
      "href": "../floodresq_config_v0/budameru_boundary_inflow_hydrograph.csv"
    },
    {
      "label": "NASA POWER/MERRA-2 hyetograph CSV",
      "href": "dss_dev/derived/historical_forcing_ensemble_v0/hyetographs/hist_extreme_2001_2025_12h.csv"
    },
    {
      "label": "Boundary templates chart",
      "href": "assets/maps/boundary_conditions_stage_profiles.png"
    },
    {
      "label": "Rainfall hyetograph chart",
      "href": "assets/maps/rainfall_hyetograph.png"
    },
    {
      "label": "Urban ward routine CSV",
      "href": "../urban_ward_routines_v0/vijayawada_urban_ward_summary_current_verification.csv"
    },
    {
      "label": "Urban ward routine GeoJSON",
      "href": "../urban_ward_routines_v0/vijayawada_urban_ward_summary_current_verification.geojson"
    },
    {
      "label": "Urban ward routine map",
      "href": "assets/maps/urban_ward_routine.png"
    },
    {
      "label": "RTGS AWARE hotspot targets CSV",
      "href": "../rtgs_aware_hotspots_v0/rtgs_aware_flood_hotspots_current_verification.csv"
    },
    {
      "label": "RTGS AWARE hotspot targets layer",
      "href": "assets/maps/rtgs_aware_hotspots.png"
    },
    {
      "label": "Boundary hydrograph map layer",
      "href": "assets/maps/boundary_hydrographs.svg"
    },
    {
      "label": "Model readiness manifest",
      "href": "../model_readiness_layers_v0/model_readiness_layer_manifest.json"
    },
    {
      "label": "Model readiness summary CSV",
      "href": "../model_readiness_layers_v0/model_readiness_summary.csv"
    },
    {
      "label": "Domain continuity summary",
      "href": "../model_readiness_layers_v0/domain_continuity_summary.json"
    },
    {
      "label": "DEM/DTM source raster, 20 m",
      "href": "../model_readiness_layers_v0/dem_dtm_source_20m.tif"
    },
    {
      "label": "Gap-filled DEM/DTM model surface, 20 m",
      "href": "../model_readiness_layers_v0/dem_dtm_gap_filled_model_surface_20m.tif"
    },
    {
      "label": "Hydroconditioned DEM proxy, 20 m",
      "href": "../model_readiness_layers_v0/hydroconditioned_dem_proxy_20m.tif"
    },
    {
      "label": "Hydroconditioning burn depth raster",
      "href": "../model_readiness_layers_v0/hydroconditioned_dem_burn_depth_m_20m.tif"
    },
    {
      "label": "LULC proxy overlay PNG",
      "href": "../model_readiness_layers_v0/lulc_proxy.png"
    },
    {
      "label": "Domain continuity overlay PNG",
      "href": "../model_readiness_layers_v0/domain_continuity.png"
    },
    {
      "label": "Satellite reference map PNG",
      "href": "../model_readiness_layers_v0/satellite_reference_map.png"
    },
    {
      "label": "Satellite reference map PDF",
      "href": "../model_readiness_layers_v0/satellite_reference_map.pdf"
    },
    {
      "label": "Merged water bodies shapefile package",
      "href": "../model_readiness_layers_v0/merged_water_bodies_shapefile.zip"
    },
    {
      "label": "Budameru boundary condition package",
      "href": "../model_readiness_layers_v0/budameru_boundary_condition_package.zip"
    },
    {
      "label": "Physics layer manifest",
      "href": "../physics_layers_v0/physics_layer_manifest.json"
    },
    {
      "label": "Physics parameter table",
      "href": "../physics_layers_v0/physics_parameter_table.csv"
    },
    {
      "label": "Conditioned hydraulic terrain raster",
      "href": "../physics_layers_v0/conditioned_hydraulic_terrain_20m.tif"
    },
    {
      "label": "Spatial Manning n raster",
      "href": "../physics_layers_v0/manning_n_20m.tif"
    },
    {
      "label": "Infiltration capacity raster",
      "href": "../physics_layers_v0/infiltration_capacity_mm_h_20m.tif"
    },
    {
      "label": "Hydrologic soil group proxy raster",
      "href": "../physics_layers_v0/soil_hydrologic_group_proxy_20m.tif"
    },
    {
      "label": "Building obstruction fraction raster",
      "href": "../physics_layers_v0/building_obstruction_fraction_20m.tif"
    },
    {
      "label": "Physics surface class raster",
      "href": "../physics_layers_v0/physics_surface_class_20m.tif"
    },
    {
      "label": "Spatial Manning n map",
      "href": "../physics_layers_v0/spatial_manning_n.png"
    },
    {
      "label": "Infiltration capacity map",
      "href": "../physics_layers_v0/infiltration_capacity.png"
    },
    {
      "label": "Hydrologic soil group proxy map",
      "href": "../physics_layers_v0/soil_hydrologic_group_proxy.png"
    },
    {
      "label": "Building obstruction fraction map",
      "href": "../physics_layers_v0/building_obstruction_fraction.png"
    },
    {
      "label": "SoilGrids open soil manifest",
      "href": "../open_soils_v0/soilgrids_open_soil_manifest.json"
    },
    {
      "label": "SoilGrids texture-derived HSG map",
      "href": "../open_soils_v0/soilgrids_texture_hsg.png"
    },
    {
      "label": "SoilGrids texture-derived HSG raster",
      "href": "../open_soils_v0/soilgrids_texture_hsg_20m.tif"
    },
    {
      "label": "SoilGrids HSG class areas",
      "href": "../open_soils_v0/soilgrids_texture_hsg_classes.csv"
    },
    {
      "label": "SoilGrids sand 0-30 cm raster",
      "href": "../open_soils_v0/soilgrids_top_0_30_sand_pct_20m.tif"
    },
    {
      "label": "SoilGrids silt 0-30 cm raster",
      "href": "../open_soils_v0/soilgrids_top_0_30_silt_pct_20m.tif"
    },
    {
      "label": "SoilGrids clay 0-30 cm raster",
      "href": "../open_soils_v0/soilgrids_top_0_30_clay_pct_20m.tif"
    },
    {
      "label": "Exposure refinement zones GeoJSON",
      "href": "../population_exposure_refinement_v0/exposure_refinement_zones.geojson"
    },
    {
      "label": "Building-density proxy grid",
      "href": "../population_exposure_refinement_v0/building_density_proxy_grid_250m.geojson"
    },
    {
      "label": "Exposure refinement summary",
      "href": "../population_exposure_refinement_v0/population_exposure_refinement_summary.json"
    },
    {
      "label": "Exposure refinement preview",
      "href": "../population_exposure_refinement_v0/exposure_refinement_zones_preview.png"
    }
  ],
  "generated_utc": "2026-05-04T06:26:12Z",
  "dashboard_type": "RTGS AWARE multi-tab FloodRESQ DSS",
  "forcing_review": {
    "panel": "assets/maps/forcing_hydrograph_panel.png",
    "peak_rainfall_mm_h": 21.097916666666663,
    "peak_budameru_inflow_m3s": 1549.85,
    "peak_depth_m": 5.8160188908979755,
    "peak_wet_area_ha": 4491.109865862032
  },
  "ml": {
    "schema": "assets/ml/ml_dataset_schema.json",
    "global_timestep_seed": "assets/ml/ml_global_timestep_seed.csv",
    "spatiotemporal_catalog": "assets/ml/ml_spatiotemporal_output_catalog.csv",
    "seed_rows": 49,
    "scenario_rows": 18,
    "schema_detail": {
      "generated_utc": "2026-05-04T06:29:37Z",
      "purpose": "Scenario evidence design for FloodRESQ historical forcing ensembles",
      "current_seed_status": "global timestep summaries, dynamic forcing rows, static triangle features, and per-location timestep response variables are available for completed exported scenarios",
      "primary_keys": [
        "run_id",
        "time_s",
        "location_id"
      ],
      "X_static_location": [
        "x_utm44n",
        "y_utm44n",
        "ward_id",
        "elevation_m",
        "slope_deg",
        "distance_to_budameru_m",
        "distance_to_krishna_m",
        "distance_to_canal_m",
        "distance_to_drainage_m",
        "distance_to_pump_m",
        "building_obstruction_fraction",
        "physics_surface_class",
        "manning_n",
        "infiltration_capacity_mm_h",
        "soil_hydrologic_group_proxy"
      ],
      "X_dynamic_forcing": [
        "time_s",
        "rainfall_intensity_mm_h",
        "cumulative_rainfall_mm",
        "budameru_inflow_m3s",
        "krishna_stage_m",
        "canal_stage_m",
        "antecedent_depth_scale",
        "drainage_sink_rate_mm_h",
        "pump_available_fraction"
      ],
      "X_scenario": [
        "scenario_family",
        "rainfall_total_mm",
        "river_profile",
        "budameru_profile",
        "canal_profile",
        "budameru_inflow_scale",
        "pump_availability",
        "drainage_availability",
        "grid_resolution_m",
        "outer_area_m2",
        "refined_area_m2"
      ],
      "Y_targets_per_location_timestep": [
        "depth_m",
        "velocity_x_mps",
        "velocity_y_mps",
        "velocity_magnitude_mps",
        "wet_extent_flag",
        "water_surface_elevation_m",
        "arrival_time_s",
        "recession_time_s"
      ],
      "Y_targets_global_timestep_seed": [
        "run_id",
        "time_h",
        "time_s",
        "surface_volume_m3",
        "wet_area_ha_gt_threshold",
        "max_depth_m",
        "mean_wet_depth_m",
        "max_speed_m_s",
        "rainfall_intensity_mm_h",
        "budameru_inflow_m3s",
        "breach_inflow_m3s",
        "rainfall_cumulative_m3",
        "infiltration_removed_m3",
        "budameru_boundary_inflow_m3",
        "breach_added_m3",
        "drainage_removed_m3",
        "pump_removed_m3",
        "rainfall_total_mm",
        "river_profile",
        "budameru_profile",
        "canal_profile",
        "antecedent_depth_scale",
        "budameru_inflow_scale",
        "pump_availability",
        "drainage_availability",
        "drainage_sink_rate_mm_h",
        "finaltime_s",
        "yieldstep_s"
      ],
      "recommended_storage": {
        "spatial_features": "Parquet partitioned by domain tile or ward",
        "time_series_targets": "Parquet partitioned by run_id and timestep",
        "raster_snapshots": "Cloud-optimized GeoTIFF or Zarr for depth, velocity and wet-extent grids",
        "scenario_catalog": "CSV or Parquet with one row per hyetograph and hydrograph ensemble member"
      },
      "current_files": {
        "global_timestep_seed_csv": "assets/ml/ml_global_timestep_seed.csv",
        "spatiotemporal_output_catalog_csv": "assets/ml/ml_spatiotemporal_output_catalog.csv",
        "scenario_matrix_csv": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/scenario_matrix.csv",
        "batch_summary_csv": "../floodresq_runs/historical_hourly_12h_ensemble_mpi10x3_v0/batch_summary.csv"
      }
    }
  },
  "ensemble_plan": {
    "scenario_toggle_ready": true,
    "completed_historical_ensemble": [
      "historical hourly rainfall hyetographs from NASA POWER MERRA-2 analysis",
      "Budameru hydrograph scales: 0.6, 0.8, 1.0",
      "Krishna/canal antecedent states: normal, elevated, high",
      "12-hour run duration with 15-minute reporting"
    ],
    "timestep_exports_available": [
      "depth_m per grid cell",
      "velocity_x_mps and velocity_y_mps per grid cell",
      "wet_extent_flag per grid cell",
      "surface elevation per grid cell"
    ]
  },
  "review_label": "Completed review ensemble",
  "cursor_probe": {
    "path": "assets/cursor_probe.js",
    "grid_width": 220,
    "grid_height": 248,
    "scenarios": 18
  }
};
