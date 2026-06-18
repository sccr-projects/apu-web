---
date: 2026-06-18
topic: "Biomedical game fullscreen start"
status: validated
---

## Problem Statement

The biomedical game is embedded in `/academic/biomedical` via an iframe that already fills the viewport, but the fixed APU navbar sits above it. When the player clicks the in-frame **Start** button, the game should take over the entire screen: request browser fullscreen and hide the navbar.

## Constraints

- Game source lives in a separate repo (`biomedical-science-game`) and is copied into `public/game/`.
- Avoid editing generated files under `public/game/`; rebuild the game from source.
- The iframe is same-origin (`/game/index.html`), so `postMessage` works without cross-origin friction.
- Existing navbar behavior must remain intact for every other page.
- Degrade gracefully if the Fullscreen API is unavailable or denied.

## Approach

**Chosen approach: request fullscreen from inside the iframe and notify the parent with `postMessage`.**

The first implementation tried to call `iframe.requestFullscreen()` from the parent page after detecting a click inside the iframe. That fails because browsers require the user gesture and the `requestFullscreen()` call to be in the same browsing context; a click inside a child iframe does not grant activation to the parent.

The fix:

- In the game source (`biomedical-science-game`), when the **Start** button is clicked, call `document.documentElement.requestFullscreen()` from within the iframe.
- At the same time, post `biomedical-game-started` to `window.parent`.
- In `BiomedicalGamePreviewSection.astro`, listen for the message, add a `game-fullscreen` body class, and hide the navbar.
- Listen for `biomedical-game-exited-fullscreen` from the iframe (or the parent's own `fullscreenchange` if the parent element were fullscreened) so the navbar is restored when the user exits.

**Why not parent-side direct DOM access?** The parent can read the iframe DOM because it is same-origin, but it cannot request fullscreen using a gesture from the child. `postMessage` keeps the two contexts loosely coupled and is the standard pattern for iframe-to-parent coordination.

## Architecture

- `biomedical-science-game` source — emits `postMessage` events and manages its own fullscreen entry/exit.
- `public/game/index.html` — rebuilt artifact with the new fullscreen/postMessage logic.
- `BiomedicalGamePreviewSection.astro` — hosts the iframe and a lightweight `postMessage` listener.
- `global.css` — hides `#apu-nav` while `body.game-fullscreen` is active.

## Components

- **Game start handler** (`GameCanvas.astro` / game engine): on `#start-game-btn` click, request fullscreen on the iframe document and post `{ type: 'biomedical-game-started' }` to parent.
- **Game fullscreen-change handler** (`GameCanvas.astro` / game engine): on `fullscreenchange`, if no longer fullscreen, post `{ type: 'biomedical-game-exited-fullscreen' }` to parent.
- **Parent controller script** (`BiomedicalGamePreviewSection.astro`): listens for `message` events from the game origin; toggles `game-fullscreen` body class and `aria-hidden` on `#apu-nav`.
- **Global CSS rule** (in `global.css` or `is:global`): `.game-fullscreen #apu-nav { display: none; }`.

## Data Flow

1. Page loads; iframe lazily loads `/game/index.html`.
2. User clicks **Start** inside the tutorial overlay.
3. Game calls `document.documentElement.requestFullscreen()` from inside the iframe (uses the iframe's own user activation).
4. Game posts `{ type: 'biomedical-game-started' }` to `window.parent`.
5. Parent receives the message, adds `game-fullscreen` to `<body>`, and sets `aria-hidden="true"` on `#apu-nav`.
6. User exits fullscreen (`Esc`, browser UI, etc.).
7. Game listens to its own `fullscreenchange` event and posts `{ type: 'biomedical-game-exited-fullscreen' }`.
8. Parent removes `game-fullscreen` and restores `aria-hidden="false"`.

## Error Handling

- If the game cannot enter fullscreen (API unsupported or denied), it still posts `biomedical-game-started`; the parent hides the navbar so the game remains full-viewport.
- If `postMessage` fails or the parent listener is missing, the game still works normally.
- Parent ignores messages from origins other than the game's origin (`window.origin` check).
- Parent resets the navbar on `beforeunload` if the fullscreen class is still active.

## Testing Strategy

- Rebuild the game and copy it to `public/game/`.
- On `/academic/biomedical`, click **Click Me**, then **Start**: navbar disappears and fullscreen engages.
- Press **Esc**: fullscreen exits and navbar reappears.
- Test in mobile Safari (no Fullscreen API): at minimum the navbar should hide.
- Verify other pages are not affected.

## Open Questions

- Should the hero **Click Me** button also trigger fullscreen? Current assumption: no — only the **Start** button inside the tutorial overlay.
- Is a visible exit-fullscreen button needed, or is Esc sufficient?
