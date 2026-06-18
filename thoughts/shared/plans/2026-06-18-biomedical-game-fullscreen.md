# Biomedical Game Fullscreen Implementation Plan

**Goal:** When the player clicks the in-frame **Start** button on `/academic/biomedical`, hide the APU navbar and request fullscreen on the embedded biomedical game iframe. Restore the navbar when fullscreen exits.

**Architecture:** Parent-side controller lives inside `BiomedicalGamePreviewSection.astro`. It listens for clicks on the same-origin iframe's `#start-game-btn`, toggles a `game-fullscreen` class on `<body>`, and calls the Fullscreen API on the iframe. A single global CSS rule hides `#apu-nav` whenever that body class is active. `NavigationAPU.astro` is not modified; navbar behavior on every other page stays unchanged.

**Design:** [thoughts/shared/designs/2026-06-18-biomedical-game-fullscreen-design.md](../designs/2026-06-18-biomedical-game-fullscreen-design.md)

---

## Scope of Changes

| File | Change Type | Reason |
|------|-------------|--------|
| `src/sections/academic/program/BiomedicalGamePreviewSection.astro` | Modify | Add iframe selector and client controller script. |
| `src/styles/global.css` | Modify | Add global rule that hides `#apu-nav` while `body.game-fullscreen` is active. |

**Files intentionally not changed:**
- `src/components/NavigationAPU.astro` — hidden via global state class, so no nav logic changes.
- `public/game/index.html` and `public/game/_assets/*` — generated game files; avoid edits per design constraints.

---

## Dependency Graph

```
Batch 1 (parallel): 1.1, 1.2
Batch 2 (verification): 2.1  [depends on 1.1 + 1.2]
```

Tasks 1.1 and 1.2 are independent file edits and can be done in parallel. Verification must wait until both are merged.

---

## Batch 1: File Edits (parallel — 2 implementers)

### Task 1.1: Add Global Navbar-Hide Rule
**File:** `src/styles/global.css`
**Test:** none (visual/behavioral verification only)
**Depends:** none

**What to do:**
1. Open `src/styles/global.css`.
2. Append a new rule at the very end of the file (after the closing `}*/` of the commented `prefers-reduced-motion` block, currently around line 1386).
3. Add a single selector that hides the navbar only when `body.game-fullscreen` is present:
   ```css
   /* Biomedical game fullscreen state */
   body.game-fullscreen #apu-nav {
     display: none;
   }
   ```
4. Do **not** use `!important` unless the existing nav styles force a conflicting `display`. The nav is already `position: fixed`, so `display: none` is sufficient.
5. Keep the rule scoped to `#apu-nav`; this ensures no other component is affected and the rule only applies when the biomedical section's controller adds the body class.

**Acceptance criteria:**
- The file builds without CSS syntax errors.
- No other page shows a hidden navbar because the body class is not added anywhere else.

**Verify:** `bun run astro:build`
**Commit suggestion:** `feat(biomedical-game): hide APU navbar during game fullscreen`

---

### Task 1.2: Add Parent-Side Fullscreen Controller
**File:** `src/sections/academic/program/BiomedicalGamePreviewSection.astro`
**Test:** none (manual browser QA, see Batch 2)
**Depends:** none

**What to do:**
1. Keep the existing `<section id="biomedical-game-preview" class="apu-section-shell">` wrapper, `BackgroundBlobs`, `ScrollReveal`, and iframe markup unchanged to preserve the current APU design system.
2. Add a stable attribute to the iframe so the controller can find it. The `allow="fullscreen"` attribute is already present and must remain.
3. Add a client `<script>` at the bottom of the component that:
   - Waits for the iframe to finish loading.
   - Attaches a delegated click listener to `iframe.contentDocument`.
   - Detects clicks that originate from the `#start-game-btn` element (use `event.target.closest('#start-game-btn')`).
   - On Start click:
     - Add `game-fullscreen` to `document.body`.
     - Set `aria-hidden="true"` on `#apu-nav`.
     - Call `iframe.requestFullscreen()` inside a `try/catch`. If the Fullscreen API is unavailable or the user denies permission, the navbar remains hidden as a graceful viewport-fill fallback.
   - Listen for `fullscreenchange` on `document`. When `document.fullscreenElement` becomes `null`, remove the `game-fullscreen` body class and restore `aria-hidden="false"` on the navbar.
   - Listen for `beforeunload` and restore the navbar state if it was hidden, preventing a stale hidden navbar on navigation.
   - Fails silently if `contentDocument` is unreachable or if any expected element is missing.

**What NOT to do:**
- Do not call `event.preventDefault()` on the Start click — the game still needs to start.
- Do not modify `NavigationAPU.astro`.
- Do not edit files under `public/game/`.
- Do not remove the existing `<style>` block (`.preview-visual`, `.cell`, etc.) unless it conflicts with the new behavior; leaving it in place preserves existing behavior.

**Acceptance criteria:**
- The script only runs on the biomedical page because the section is only imported there.
- The controller does not throw if the iframe DOM is unreachable.
- Clicking **Start** hides the navbar; exiting fullscreen restores it.

**Verify:** `bun run astro:build`
**Commit suggestion:** `feat(biomedical-game): parent controller for fullscreen start button`

---

## Batch 2: Verification (depends on 1.1 + 1.2)

### Task 2.1: Manual QA Checklist
**Depends:** 1.1, 1.2

**Run the dev/preview server:**
```bash
bun run astro:build
bun run astro:preview
```
Or, for active iteration:
```bash
bun run astro:dev
```

**Checklist:**
1. **Initial state**
   - Open `http://localhost:4322/academic/biomedical`.
   - Confirm `#apu-nav` is visible at the top of the page.
   - Confirm `body` does **not** have the `game-fullscreen` class.
2. **Start click → fullscreen**
   - Click the **Start** button inside the embedded game overlay.
   - Confirm `#apu-nav` disappears.
   - Confirm `body.game-fullscreen` is present.
   - Confirm the iframe is in fullscreen mode (`:fullscreen` in DevTools or the browser UI indicates fullscreen).
3. **Exit fullscreen → restore**
   - Press `Esc` or use the browser exit control.
   - Confirm the fullscreen element is null.
   - Confirm `body.game-fullscreen` is removed.
   - Confirm `#apu-nav` reappears and `aria-hidden` is restored to `"false"`.
4. **Fullscreen denied / unsupported**
   - Temporarily disable the Fullscreen API in DevTools (or test mobile Safari) and click **Start**.
   - Confirm the navbar still hides and no JavaScript error is thrown.
   - Refresh the page to confirm the navbar returns on load (defensive reset).
5. **Other pages unaffected**
   - Visit `/academic`, `/admission`, and `/`.
   - Confirm the navbar is visible on each page and `body.game-fullscreen` is never present.
6. **Build / type check**
   - Run `bun run astro:build` and confirm zero errors.
   - Optional: run `bunx --bun astro check` for Astro/TypeScript validation.

**Verify:** Manual browser inspection + `bun run astro:build`
**Commit suggestion:** `chore(biomedical-game): verify fullscreen navbar behavior`

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Game rebuild changes `#start-game-btn` id. | Controller uses `event.target.closest('#start-game-btn')` and fails silently if the element is missing; future rebuilds only require updating the selector in one place. |
| Fullscreen API unsupported or denied. | Navbar still hides, giving a viewport-fill fallback. |
| Stale `aria-hidden` if user navigates away while fullscreen. | `beforeunload` handler restores navbar visibility/state. |
| Global CSS accidentally hides nav elsewhere. | Rule is scoped to `body.game-fullscreen #apu-nav`; no other code adds that body class. |
| `contentDocument` null due to cross-origin in future deployments. | Script guards against null and exits silently; if the game is later served cross-origin, switch to a `postMessage` bridge. |

---

## Rollback Notes

If anything breaks in production or during QA, revert the two modified files to their pre-change state:

```bash
git checkout -- src/styles/global.css src/sections/academic/program/BiomedicalGamePreviewSection.astro
```

If the changes were already committed, revert the commit:

```bash
git revert <commit-hash>
```

After reverting, rebuild and preview to confirm the navbar behaves exactly as it did before:

```bash
bun run astro:build
bun run astro:preview
```

---

## Design Decisions Preserved

- **APU design system:** No new colors, shadows, or typography tokens are added. The section keeps `apu-section-shell` and the existing iframe classes.
- **Navbar behavior:** `NavigationAPU.astro` is untouched; scroll state, mobile menu, dropdowns, and active-route highlighting remain identical on every page.
- **No generated game edits:** All logic lives in the parent section, honoring the constraint to avoid modifying `public/game/`.
