# Program Strengths Bento First Item Selected by Default

**Goal:** Expand the first bento trigger automatically when the page loads, reusing the existing `expand()` flow.

**Architecture:** Single inline script edit in `ProgramStrengthsBentoSection.astro`. After all event listeners are bound, guard against an empty trigger list and call `expand(triggers[0])`.

**Design:** [thoughts/shared/designs/2026-06-18-bento-first-selected-design.md](../designs/2026-06-18-bento-first-selected-design.md)

---

## Dependency Graph

```
Batch 1 (parallel): 1.1 [single inline script change, no deps]
```

---

## Batch 1: Inline Script Update (parallel - 1 implementer)

### Task 1.1: Auto-expand first bento trigger on load
**File:** `src/sections/academic/program/ProgramStrengthsBentoSection.astro`
**Test:** none (no automated test framework is configured in this repo; verify manually)
**Depends:** none

#### Edit

Insert the guarded auto-expand call immediately after the `keydown` listener and before the closing `})();` of the IIFE.

**Old string (lines 363-368):**

```javascript
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && activeIndex !== null && !isAnimating) {
        closeExpanded();
      }
    });
  })();
```

**New string:**

```javascript
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && activeIndex !== null && !isAnimating) {
        closeExpanded();
      }
    });

    if (triggers.length > 0) {
      expand(triggers[0]);
    }
  })();
```

#### Rationale

- `triggers.length === 0` is already handled by an early return, but the explicit guard keeps the intent clear and matches the design constraint.
- Calling `expand()` directly reuses the existing hide-hint, create-clone, animate, and show-panel logic. No duplicate state setup.
- The call is placed after all listeners (`click`, document `click`, `keydown`) are bound, so the expanded clone responds to close, outside-click, and Escape from the moment it appears.

**Verify:**

1. Start the dev server: `bun run dev` (or `npm run dev`).
2. Navigate to the program page containing `#keunggulan-bento`.
3. On load, confirm the first bento item ("Interdisciplinary") is expanded in the stage area and the hint is hidden.
4. Click the second item ("Modern Facilities") — expansion should switch and the first trigger should return to the grid.
5. Click outside the expanded clone — it should collapse and the hint should reappear.
6. Press `Escape` while expanded — it should collapse and the hint should reappear.
7. Click the first item again, then click its close button (`×`) — it should collapse and focus should return to the trigger.
8. Run the build to ensure the file still compiles: `bun run build` (or `npm run build`).

**Commit:** `feat(program): auto-expand first bento strength on page load`
