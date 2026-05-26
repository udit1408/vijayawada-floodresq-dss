<!-- live-release: 2026-05-26T11:45:00Z -->
# Vijayawada FloodRESQ DSS

Live decision-support dashboard for the Vijayawada FloodReSQ review bundle.

## Open The DSS

Current canonical stakeholder link:

https://vijayawada.airesqclimsols.com/

Direct full layer DSS:

https://vijayawada.airesqclimsols.com/map_dashboard.html

This link is served by the FloodAstra nowcast backend on the office Mac through the persistent Cloudflare tunnel. It is the only link currently verified to open the latest DSS and connect to chat, live-data checks, and GPU-backed nowcast runs.

Do not use the old GitHub Pages URL for stakeholder review until it is re-verified. GitHub Pages is currently treated as a static fallback, not the canonical deployment.

## Contents

- `index.html` - stakeholder-facing Vijayawada FloodReSQ Live DSS shell served by the backend.
- `map_dashboard.html` - supporting layer-rich map dashboard opened from the live DSS when detailed map review is needed.
- `nowcast.html` - backward-compatible redirect to `index.html` for older links.
- `assets/config.js` - optional deployment-time API endpoint setting for GitHub Pages or other static hosting.
- `assets/branding/floodresq.png` - FloodReSQ logo used in the dashboard header.
- `assets/maps/` - map layers, result overlays, forcing plots and review graphics.
- `assets/video/` - animation frames and scenario-selectable flood ingress/egress media.
- `assets/forcing/` - rainfall and boundary-condition CSVs used by the dashboard.
- `assets/ml/` - lightweight scenario and timestep data descriptors for later ML workflow design.

## Deployment Status

- Canonical live server: `https://vijayawada.airesqclimsols.com/`
- Backend/API health: `https://vijayawada.airesqclimsols.com/api/assistant/health`
- Nowcast options: `https://vijayawada.airesqclimsols.com/api/nowcast/options`
- GitHub Pages: static fallback only until a Pages build is verified to serve this same `index.html`.

For static hosting, `index.html` can serve the same live DSS shell, but chat and run controls require a reachable FloodAstra backend. Set `window.FLOODASTRA_VIJAYAWADA_API_BASE` in `assets/config.js` to the HTTPS backend URL, or pass `?api=https://backend.example.com/` while testing.

For same-machine review, run the backend and open the local page:

```bash
cd /Users/mirlab/Documents/FloodAstra
python3 -m floodastra.vijayawada_nowcast_server --project-root /Users/mirlab/Documents/FloodAstra/projects/vijayawada_rtgs --host 127.0.0.1 --port 8788
```

Then use `http://127.0.0.1:8788/` for the live runner, or open `index.html?api=http://127.0.0.1:8788/` from this static bundle.
