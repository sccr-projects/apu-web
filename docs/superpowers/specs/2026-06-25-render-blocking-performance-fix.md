# Mobile Performance Fix — Render-Blocking Requests + LCP Preload

## Goal
Cut mobile render-blocking time and improve LCP using the smallest high-impact changes identified in the Lighthouse report.

## Findings
- Lighthouse mobile performance score: **0.81**
- **Render-blocking requests** cost ~1,250–1,460 ms:
  - `/_astro/NavigationAPU.*.css` (largest)
  - `/_astro/ProgramsSectionAPU.*.css`
  - `/_astro/index.*.css`
  - Google Fonts CSS (`fonts.googleapis.com/css2?family=…`)
- **LCP image** is currently the nav logo (`/images/apu.webp`). Lighthouse flagged it as missing `fetchpriority=high`.
- The same font families loaded by Google Fonts (Instrument Serif, Space Grotesk, Space Mono) are already imported via `@fontsource` in `src/styles/global.css`, so the Google Fonts link is duplicate work.

## Changes

### 1. Inline Astro component styles
File: `astro.config.mjs`
Add:
```js
build: {
  inlineStylesheets: 'always',
},
```
This embeds all component `<style>` blocks directly into each page HTML, eliminating the separate render-blocking CSS files.

### 2. Remove duplicate Google Fonts request
File: `src/layouts/MainLayout.astro`
Remove:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Space+Grotesk:wght@300;400;500&family=Space+Mono&display=swap"
  rel="stylesheet"
/>
```
Font loading stays unchanged because `src/styles/global.css` already imports the same families from `@fontsource`.

### 3. Preload and prioritize the LCP logo image
File: `src/layouts/MainLayout.astro`
Add in `<head>`:
```html
<link rel="preload" as="image" href={assetUrl('/images/apu.webp')} type="image/webp" />
```
File: `src/components/NavigationAPU.astro`
Update the logo `<img>`:
```html
<img
  src={assetUrl('/images/apu.webp')}
  alt="Agung Putra University"
  class="h-18 w-auto shrink-0"
  loading="eager"
  fetchpriority="high"
/>
```

## Verification
1. Run `bun run build:frontend`.
2. Inspect `dist/index.html`:
   - No `<link rel="stylesheet" href="/_astro/NavigationAPU.*.css">` or similar component CSS links.
   - No Google Fonts link or preconnects.
   - Contains a preload link for the logo image.
3. Re-run Lighthouse mobile audit and confirm:
   - Render-blocking request count/savings drop.
   - LCP discovery insight no longer flags missing `fetchpriority=high`.

## Trade-offs
- HTML size per page grows by ~30 KB uncompressed (inlined CSS) but saves 4 network round trips and ~1.25 s of render-blocking time.
- Fonts remain `font-display: swap`, so a brief fallback-font flash is still possible.
- This fix targets render-blocking and LCP only; further image compression and hero reveal timing remain separate opportunities.

## Scope
Limited to `astro.config.mjs`, `src/layouts/MainLayout.astro`, and `src/components/NavigationAPU.astro`. No content or data changes.
