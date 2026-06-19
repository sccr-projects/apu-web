# Program Strengths Bento Mobile Overflow Fix

**Goal:** Shrink expanded-clone typography and icon chip below the `md` breakpoint so the mobile bento panel no longer overflows, while keeping desktop styling unchanged.

**Architecture:** Pure CSS responsive addition inside the existing second `<style>` block of the Astro section. No JS, markup, or data changes.

**Design:** [thoughts/shared/designs/2026-06-18-bento-mobile-overflow-design.md](../designs/2026-06-18-bento-mobile-overflow-design.md)

---

## Dependency Graph

```
Batch 1 (parallel): 1.1 [single file CSS edit - no deps]
```

---

## Batch 1: Foundation (parallel - 1 implementer)

### Task 1.1: Add mobile media query to expanded bento clone
**File:** `src/sections/academic/program/ProgramStrengthsBentoSection.astro`
**Test:** Manual/visual verification on mobile + desktop viewports; build smoke test.
**Depends:** none

Replace the second `<style>` block (lines 375-399) with the same rules plus a `max-width: 767px` media query that overrides the expanded clone sizes.

**Before:**

```astro
<style>
  .bento-clone h3,
  .bento-clone .apu-icon-chip,
  .bento-clone .apu-icon-chip svg,
  .bento-clone [class*="text-mono"] {
    transition: font-size 500ms linear,
                width 500ms linear,
                height 500ms linear;
  }

  .bento-clone.is-expanded h3 {
    font-size: 3rem !important;
  }
  .bento-clone.is-expanded .apu-icon-chip {
    width: 3.5rem !important;
    height: 3.5rem !important;
  }
  .bento-clone.is-expanded .apu-icon-chip svg {
    width: 28px !important;
    height: 28px !important;
  }
  .bento-clone.is-expanded [class*="text-mono"] {
    font-size: 1rem !important;
  }
</style>
```

**After:**

```astro
<style>
  .bento-clone h3,
  .bento-clone .apu-icon-chip,
  .bento-clone .apu-icon-chip svg,
  .bento-clone [class*="text-mono"] {
    transition: font-size 500ms linear,
                width 500ms linear,
                height 500ms linear;
  }

  .bento-clone.is-expanded h3 {
    font-size: 3rem !important;
  }
  .bento-clone.is-expanded .apu-icon-chip {
    width: 3.5rem !important;
    height: 3.5rem !important;
  }
  .bento-clone.is-expanded .apu-icon-chip svg {
    width: 28px !important;
    height: 28px !important;
  }
  .bento-clone.is-expanded [class*="text-mono"] {
    font-size: 1rem !important;
  }

  @media (max-width: 767px) {
    .bento-clone.is-expanded h3 {
      font-size: 1.5rem !important;
    }
    .bento-clone.is-expanded .apu-icon-chip {
      width: 3rem !important;
      height: 3rem !important;
    }
    .bento-clone.is-expanded .apu-icon-chip svg {
      width: 20px !important;
      height: 20px !important;
    }
    .bento-clone.is-expanded [class*="text-mono"] {
      font-size: 0.875rem !important;
    }
  }
</style>
```

**Verification:**

1. Build passes:
   ```bash
   bun run build
   ```
2. Start dev server:
   ```bash
   bun run astro:dev
   ```
3. Open `http://localhost:4322/academic/biomedical`.
4. Mobile check (Chrome DevTools device mode, iPhone SE / 375px width):
   - First bento item auto-expands.
   - Verify expanded clone title fits on one or two lines without truncation or horizontal scroll.
   - Verify icon chip is 3rem × 3rem and SVG is 20px × 20px via computed styles.
   - Verify no horizontal overflow on the page.
5. Desktop check (>= 768px width):
   - Verify expanded clone still uses `font-size: 3rem`, icon chip `3.5rem × 3.5rem`, SVG `28px × 28px`, mono text `1rem`.
6. Interaction regression check (both viewports):
   - Click other bento triggers to expand.
   - Click the × button to close.
   - Click outside the clone to close.
   - Press `Escape` to close.
   - Confirm the first item still auto-expands on load.

**Commit:** `fix(bento): shrink expanded clone text and icon on mobile`
