# IRON·LOG 🏋️

A fast, offline-first **hybrid-athlete gym tracker** — log strength work and conditioning, track weekly muscle volume and PRs, and export to Excel or JSON. Zero build step, no backend, no account. Your data lives in your browser.

**Live app:** https://jeffersonpikejr.github.io/Iron-Log/

## Features

- **Day-by-day logging** — sets, weight, reps, RIR for lifts; duration / speed / elevation for cardio
- **Per-exercise references** — last session + PRs surfaced inline as you log
- **Custom exercises** and reorderable exercise lists
- **Weekly volume** rollups by muscle group and an **all-time PR** sheet
- **Export** — one-click `.xlsx` (Training Log + Weekly Volume + PRs) or `.json` backup; **import** to merge a backup back in
- **Installable PWA** — add to home screen, works fully offline
- **Local-first & private** — all data persists in `localStorage` on your device; nothing is sent anywhere

## Tech

A single static `index.html` (inline HTML/CSS/vanilla JS using a tiny `h()` hyperscript helper), a PWA `manifest.json`, a service worker (`sw.js`), and the app icons. [SheetJS](https://sheetjs.com/) is loaded on demand from CDN only when you export to Excel, so it never blocks first paint.

## Run locally

It's a static site — serve the folder with any static server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

A plain server (rather than opening the file directly) is needed so the service worker and manifest register correctly.

## Deployment

Hosted on **GitHub Pages** via branch publishing: pushing to `main` republishes the site automatically (Settings → Pages → "Deploy from a branch", `main` / root). All asset paths are relative, so the app works correctly when served from the `/Iron-Log/` project subpath. A `.nojekyll` file tells Pages to serve the files verbatim (skip Jekyll).

To ship a change: edit the files, commit, and push to `main`.

```bash
git add -A
git commit -m "your message"
git push
```

When the service worker assets change, bump `CACHE` in `sw.js` (e.g. `ironlog-v8` → `ironlog-v9`) so installed clients pick up the new version.

## Data & privacy

There is no server. Your training history never leaves your device. Use **Export → JSON** regularly to back up; clearing site data or uninstalling the PWA wipes `localStorage`.
