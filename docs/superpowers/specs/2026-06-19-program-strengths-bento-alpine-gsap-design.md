# ProgramStrengthsBentoSection — Alpine.js + GSAP Refactor

**Date:** 2026-06-19  
**Status:** Approved for implementation planning  
**Scope:** `src/sections/academic/program/ProgramStrengthsBentoSection.astro`

---

## 1. Context

The current bento section uses a vanilla JS inline script with manual DOM state and CSS transitions. It clones a trigger card, FLIP-animates it into a stage panel, swaps description panels, and manages focus/close behavior. The code works, but state and animation are tightly coupled, making the section harder to extend or debug.

## 2. Goals

- Replace manual JS state with declarative Alpine.js state.
- Replace CSS-driven FLIP/clone animations with GSAP (plus Flip plugin).
- Preserve existing UX: first item auto-expanded, click to switch, close button / outside click / Escape to close.
- Keep the section responsive and performant.
- Keep Astro SSR/build compatibility.

## 3. Non-Goals

- Do not refactor other sections.
- Do not switch to a different framework island (React/Vue/Svelte).
- Do not change visual design tokens or content.

## 4. Compatibility with Astro

Yes. Both libraries are compatible with Astro:

- **Alpine.js** is designed for progressive enhancement on static HTML. It can be loaded via a global `<script defer src="...">` or imported into a client island.
- **GSAP** can be imported inside a `<script>` block with a `client:*` directive.
- Both evaluate only on the client, so they do not interfere with static SSR generation.

## 5. Proposed Architecture

### 5.1 Island Boundary

Use the official `@astrojs/alpinejs` integration and extract the interactive bento markup into a dedicated Astro island component (e.g. `ProgramStrengthsBentoIsland.astro`). The parent section renders static chrome/header and imports the island with `client:visible`:

- The section renders static HTML at build time.
- Alpine/GSAP hydrate only when the island enters the viewport.
- This defers the extra JS cost until the user is likely to interact.

### 5.2 State Ownership (Alpine.js)

A single Alpine `x-data` object on the section root owns all interactive state:

```js
{
  activeIndex: 0,
  isAnimating: false,
  items: [...],           // injected from Astro frontmatter
  get activeItem() { return this.items[this.activeIndex]; },
  expand(index) { ... },
  close() { ... },
  isActive(index) { return this.activeIndex === index; }
}
```

Alpine drives:
- `aria-expanded`
- panel visibility
- active/inactive trigger styling
- focus management after close

### 5.3 Animation Ownership (GSAP)

GSAP owns all motion, using the Flip plugin for the card-to-panel morph:

- **Expand:** capture trigger card state with `Flip.getState()`, move a clone to the target panel bounds, then `Flip.from()` animates position/size. A GSAP timeline handles panel content fade/slide.
- **Switch:** when a new trigger is clicked while another is open, either cross-fade panels or run a quick collapse + expand sequence.
- **Close:** reverse the Flip animation back to the trigger card, then restore focus.

Boundary rule: GSAP mutates transforms/opacity during animation; Alpine reads/writes state only at animation start/end, not during the tween.

### 5.4 Hydration Strategy

- Pre-render the first item as expanded in the static HTML so there is no layout shift on hydration.
- Use `client:visible` so scripts load only when the section is near the viewport.
- Load Alpine globally once (recommended if other sections will adopt it) or scope it to this island.

## 6. Dependencies

Add to `package.json`:

```json
{
  "@astrojs/alpinejs": "^0.x",
  "alpinejs": "^3.x",
  "gsap": "^3.x"
}
```

- `@astrojs/alpinejs` enables Astro island hydration for Alpine components.
- GSAP Flip plugin ships with the main GSAP package (`gsap/Flip`). No extra plugin install required.
- Register the Alpine integration in `astro.config.mjs`.

## 7. Performance & Load-Time Impact

| Cost | Approximate Size | Mitigation |
|------|------------------|------------|
| Alpine.js | ~15 kB gzipped | Loaded once, reused across islands |
| GSAP core | ~38 kB gzipped | Code-split per page/island |
| GSAP Flip plugin | ~7 kB gzipped | Imported only where used |
| **Total incremental** | **~60 kB gzipped** | Deferred by `client:visible` |

Responsiveness impact:
- GSAP uses `requestAnimationFrame`, which generally gives smoother FLIP animations than CSS transitions for layout-driven motion.
- Declarative Alpine state reduces manual DOM sync bugs, which can cause jank or stale UI.
- On viewport resize, Flip state may need recalculation; add a `ResizeObserver` or debounced reset to avoid misaligned clones.

## 8. Accessibility

- Maintain `aria-expanded` on triggers.
- Move focus to the opened panel on expand; return focus to the trigger on close.
- Close on `Escape` and outside click.
- Per project directive (`AGENTS.md`), animations play regardless of `prefers-reduced-motion`; focus/keyboard behavior remains intact.

## 9. Risks & Mitigation

| Risk | Mitigation |
|------|------------|
| Alpine and GSAP both mutate the same DOM elements | Clear boundary: Alpine owns state/classes, GSAP owns transforms during animation only |
| Animation breaks on window resize | Recalculate Flip state on resize; or reset to closed state on major layout changes |
| Bundle bloat on pages that do not need Alpine/GSAP | Keep imports scoped to this island; do not load globally unless other sections adopt it |
| Hydration mismatch | Use `client:visible`; pre-render initial state matches Alpine initial state |

## 10. Verification / Acceptance Criteria

- [ ] First bento item opens automatically on page load.
- [ ] Clicking another trigger swaps the active item smoothly.
- [ ] Close button, outside click, and Escape all close the active item.
- [ ] Focus moves correctly on open/close.
- [ ] Mobile layout (2×2 grid + stacked panels) animates correctly.
- [ ] No layout shift during hydration.
- [ ] Lighthouse performance score does not regress significantly.
- [ ] Bundle analyzer confirms GSAP/Alpine are code-split to this route.

## 11. Open Questions

1. Should Alpine be loaded globally so future sections can reuse it, or scoped only to this island?
2. Should the section auto-play the first item on mobile, or start collapsed to save viewport space?

---

## 12. Decision Log

- **Approach:** Alpine.js for state + GSAP/Flip for animation inside an Astro `client:visible` island.
- **Alternatives considered:**
  - Alpine-only with CSS transitions: lighter but keeps weak FLIP support.
  - Vanilla JS + GSAP: avoids new state framework but does not solve state complexity.
- **Approved by:** user on 2026-06-19.
