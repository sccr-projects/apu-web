# Procedure: Build and Deploy Biomedical Science Game into APU Web

## Purpose
This document describes the repeatable build procedure for integrating the `biomedical-science-game` project into `apu-web` as a static drop-in served under `/game/` and embedded via iframe at `/academic/biomedical/game`.

## Prerequisites
- Node.js >= 22.12.0
- Working copies of both projects at:
  - `D:\work\biomedical-science-game`
  - `D:\work\apu-web`
- `apu-web` uses `@astrojs/node` standalone adapter and `output: 'server'`.

## Step 1 — Configure Game Base Path

In `D:\work\biomedical-science-game\astro.config.mjs`, ensure `base` is set:

```js
export default defineConfig({
  output: 'static',
  base: '/game/',
  build: {
    assets: '_assets'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
```

Reason: without `base`, built asset URLs point to `/_assets/...`, which conflicts with APU's own `_assets` directory. With `base: '/game/'`, assets are emitted as `/game/_assets/...`.

## Step 2 — Install Dependencies (if needed)

```powershell
Set-Location D:\work\biomedical-science-game
npm install
```

## Step 3 — Build the Game

```powershell
Set-Location D:\work\biomedical-science-game
if (Test-Path dist) { Remove-Item -Recurse -Force dist }
npm run build
```

Expected output:
- `dist/index.html`
- `dist/_assets/*` (hashed JS and CSS)
- `dist/favicon.svg`
- `dist/favicon.ico`

## Step 4 — Copy Built Output into APU Web

```powershell
Set-Location D:\work\apu-web
if (Test-Path public/game) { Remove-Item -Recurse -Force public/game }
Copy-Item -Recurse -Path D:\work\biomedical-science-game\dist -Destination public/game
```

After copy, `apu-web/public/game/` should contain `index.html` and `_assets/`.

## Step 5 — Apply Iframe Layout Override

The game is designed for full viewport. When embedded in an iframe, the hero content overflows. Inject the following CSS just before the closing `</head>` tag in `apu-web/public/game/index.html`:

```html
<style>
  html, body { height: 100%; margin: 0; overflow: hidden; }
  .biomedical-section { height: 100vh; min-height: 0; overflow: hidden; }
  .hero-view { min-height: 0; height: 100%; }
  .hero-content { transform: scale(0.85); gap: 1.5rem; padding: 1rem; max-width: 720px; }
  .hero-title { font-size: 2.75rem; }
  .hero-subtitle { font-size: 1rem; max-width: 520px; }
  .petri-dish { width: 280px; height: 280px; }
  .click-button { padding: 0.75rem 2rem; }
  .button-text { font-size: 1rem; }
  .button-hint { font-size: 0.75rem; }
</style>
```

This override must be reapplied every time the game is rebuilt and copied, because `public/game/index.html` is a generated artifact.

## Step 6 — Verify APU Page Source Uses Correct Iframe Src

In `apu-web/src/pages/academic/biomedical/game.astro`, the iframe should point to:

```astro
<iframe src="/game/index.html" ... />
```

Do not use `/game/` alone. The Astro Node adapter's static handler (`send`) does not serve directory indexes.

## Step 7 — Build APU Web

```powershell
Set-Location D:\work\apu-web
bun install
bun run astro:build
```

Expected output:
- `dist/client/game/index.html`
- `dist/client/game/_assets/*`
- Server routes include `/academic/biomedical/game`.

## Step 8 — Preview and Verify

Start the preview server:

```powershell
Set-Location D:\work\apu-web
bun run astro:preview
```

Open `http://localhost:4322/academic/biomedical/game` in a browser.

Verify:
1. APU navigation renders.
2. Game iframe loads without 404.
3. Petri dish and "Click Me" button are visible.
4. Clicking the button triggers the zoom transition.
5. Canvas appears and fills the iframe.
6. First-time tutorial overlay appears.
7. After clicking Start, the HUD time increments.
8. Keyboard controls work when the iframe has focus.

## Step 9 — Redeployment Checklist

Every time the game source changes, repeat:

- [ ] Step 1 — confirm `base: '/game/'` is set.
- [ ] Step 3 — rebuild the game.
- [ ] Step 4 — copy `dist/` to `apu-web/public/game/`.
- [ ] Step 5 — reapply the iframe layout CSS override.
- [ ] Step 7 — rebuild APU web.
- [ ] Step 8 — verify in browser.

## Known Issues and Notes

- **Manual CSS override**: because the game is built as a standalone full-page app, the override in `public/game/index.html` is required for a clean iframe fit. A better long-term solution is to refactor the game components for bounded-container embedding.
- **Keyboard focus**: the iframe must receive focus before keyboard controls work. Users can click inside the iframe or tab into it.
- **Restart behavior**: the game uses `location.reload()` for restart. Inside an iframe this reloads only the iframe, not the APU page.
- **Static assets**: `public/game/` is copied as-is into `dist/client/game/` during the APU build. No further processing is done.

## Files Affected

- `D:\work\biomedical-science-game\astro.config.mjs`
- `D:\work\apu-web\public\game\index.html` (generated + override)
- `D:\work\apu-web\public\game\_assets\*` (generated)
- `D:\work\apu-web\src\pages\academic\biomedical\game.astro`
- `D:\work\apu-web\src\pages\game.astro`
- `D:\work\apu-web\src\components\NavigationAPU.astro`
