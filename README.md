# Vijayawada FloodRESQ DSS

Static proof-of-concept decision support dashboard for the Vijayawada FloodRESQ review bundle.

## Contents

- `index.html` - stakeholder-facing multi-tab DSS.
- `assets/maps/` - map layers, result overlays, forcing plots and review graphics.
- `assets/video/` - animation frames and scenario-selectable flood ingress/egress media.
- `assets/forcing/` - rainfall and boundary-condition CSVs used by the dashboard.
- `assets/ml/` - lightweight scenario and timestep data descriptors for later ML workflow design.

## GitHub Pages

This folder is designed to be published directly from the repository root using GitHub Pages.

Recommended setup:

1. Create a GitHub repository, for example `vijayawada-floodresq-dss`.
2. Push this folder to the repository `main` branch.
3. In GitHub, open `Settings -> Pages`.
4. Select `Deploy from a branch`, choose `main` and `/root`, then save.

The site entrypoint is `index.html`.
