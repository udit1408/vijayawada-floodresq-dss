<!-- pages-release: 2026-05-26T10:51:35Z -->
# Vijayawada FloodRESQ DSS

Static proof-of-concept decision support dashboard for the Vijayawada FloodRESQ review bundle.

## Open The DSS

Use the GitHub Pages link for the interactive dashboard:

https://udit1408.github.io/vijayawada-floodresq-dss/

Do not open `index.html` from the GitHub file viewer if you want the interactive DSS. The GitHub repository view shows source files; GitHub Pages serves the actual dashboard.

## Contents

- `index.html` - canonical stakeholder-facing Vijayawada FloodReSQ Live DSS. This is the one public link to share.
- `map_dashboard.html` - supporting layer-rich map dashboard opened from the live DSS when detailed map review is needed.
- `nowcast.html` - backward-compatible redirect to `index.html` for older links.
- `assets/config.js` - optional deployment-time API endpoint setting for GitHub Pages or other static hosting.
- `assets/branding/floodresq.png` - FloodReSQ logo used in the dashboard header.
- `assets/maps/` - map layers, result overlays, forcing plots and review graphics.
- `assets/video/` - animation frames and scenario-selectable flood ingress/egress media.
- `assets/forcing/` - rainfall and boundary-condition CSVs used by the dashboard.
- `assets/ml/` - lightweight scenario and timestep data descriptors for later ML workflow design.

## GitHub Pages

This repository is published from the `main` branch root. The single public entrypoint is `index.html`.
Deployment is handled by `.github/workflows/pages.yml` so the public URL is rebuilt from the latest `main` commit.

For GitHub Pages, `index.html` serves the latest live DSS shell. Chat and run controls require a reachable FloodAstra backend. Set `window.FLOODASTRA_VIJAYAWADA_API_BASE` in `assets/config.js` to the HTTPS backend URL, or pass `?api=https://backend.example.com/` while testing. If the backend is password-protected, use the connection box on the live DSS or set the optional user/password variables in `assets/config.js` on the deployment server only.

For same-machine review, run the backend and open the local page:

```bash
cd /Users/mirlab/Documents/FloodAstra
python3 -m floodastra.vijayawada_nowcast_server --project-root /Users/mirlab/Documents/FloodAstra/projects/vijayawada_rtgs --host 127.0.0.1 --port 8788
```

Then use `http://127.0.0.1:8788/` for the live runner, or open `index.html?api=http://127.0.0.1:8788/` from this static bundle.
