---
date: 2026-06-18
topic: "Biomedical game fullscreen start"
status: validated
---

## Problem Statement

The biomedical game is embedded in `/academic/biomedical` via an iframe that already fills the viewport, but the fixed APU navbar sits above it. When the player clicks the in-frame **Start** button, the game should take over the entire screen: request browser fullscreen and hide the navbar.

## Constraints

- Game source lives in a separate repo (`biomedical-science-game`) and is copied into `public/game/`.
- Avoid editing generated files under `public/game/` if possible.
- The iframe is same-origin (`/game/index.html`), so the parent page can access its DOM.
- Existing navbar behavior must remain intact for every other page.
- Degrade gracefully if the Fullscreen API is unavailable or denied.

## Approach

**Chosen approach: parent-side controller in the section component.**

- Wait for the iframe to finish loading.
- Attach a delegated click listener to the iframe document that detects the **Start** button (`#start-game-btn`).
- On Start click: add a `game-fullscreen` state class to `<body>`, hide the navbar, and request fullscreen on the iframe.
- Listen for `fullscreenchange`; when the user exits fullscreen, restore the navbar.

**Alternative considered: `postMessage` bridge.** This is more robust for cross-origin iframes, but it requires modifying the external game source and rebuilding. Because the current deployment is same-origin and the user wants the change scoped to the section, the direct listener keeps the work inside `apu-web`.

## Architecture

- `BiomedicalGamePreviewSection.astro` hosts the iframe and a small client controller script.
- `NavigationAPU.astro` requires no changes; it is hidden via a global state class.
- A global CSS rule hides `#apu-nav` while `body.game-fullscreen` is active.

## Components

- **Section markup**: keeps the existing iframe with `allow="fullscreen"` and wraps it in a minimal container.
- **Client controller script**: runs after the iframe loads, queries `#apu-nav` and the iframe element, and manages the fullscreen state.
- **Global CSS rule**: `.game-fullscreen #apu-nav { display: none; }` (or equivalent). The rule lives in `global.css` or an `is:global` style block in the section.

## Data Flow

1. Page loads; iframe lazily loads `/game/index.html`.
2. Controller waits for the iframe `load` event.
3. Controller attaches a click listener to `iframe.contentDocument`.
4. User clicks the **Start** button.
5. Controller adds `game-fullscreen` to `<body>`.
6. Controller hides the navbar (`aria-hidden="true"`) and calls `iframe.requestFullscreen()`.
7. If fullscreen is denied or unsupported, the navbar still stays hidden so the game remains full-viewport.
8. On `fullscreenchange` exit, the controller removes the body class and restores the navbar.

## Error Handling

- If the iframe DOM is unreachable, the controller fails silently without throwing.
- If `requestFullscreen` is unsupported, fallback to viewport-fill only.
- If the user denies fullscreen permission, keep the navbar hidden.
- Restore navbar on page unload or navigation if it was hidden.

## Testing Strategy

- Click **Start** on `/academic/biomedical`: navbar disappears and fullscreen engages.
- Press **Esc** or exit fullscreen: navbar reappears.
- Test on mobile Safari, which lacks Fullscreen API support: at minimum the navbar should hide.
- Verify other pages are not affected by the global CSS rule.

## Open Questions

- Should the hero **Click Me** button also trigger fullscreen? Current assumption: no — only the **Start** button inside the tutorial overlay.
- Is a visible exit-fullscreen button needed, or is Esc sufficient?
