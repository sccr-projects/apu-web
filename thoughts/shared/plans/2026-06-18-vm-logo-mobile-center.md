# Vision Mission Logo Mobile Centering Implementation Plan

**Goal:** Center the APU logo horizontally on mobile viewports while keeping the existing right-aligned, 50vw desktop layout unchanged in `AboutVisionMission.astro`.

**Architecture:** Responsive Tailwind utility classes switch the wrapper's horizontal origin and the inner logo's width at the `md` breakpoint. The static `width: 50vw` rule moves out of the `<style>` block and into the utility layer so it can be responsive.

**Design:** [thoughts/shared/designs/2026-06-18-vm-logo-mobile-center-design.md](../designs/2026-06-18-vm-logo-mobile-center-design.md)

---

## Dependency Graph

```
Batch 1 (parallel): 1.1 [single layout tweak — no deps]
```

---

## Batch 1: Layout Tweak

All edits are in one file. No other files depend on this change.

### Task 1.1: Responsive Logo Positioning in AboutVisionMission.astro

**File:** `src/sections/about/AboutVisionMission.astro`
**Test:** Visual regression check (no unit test for this layout change)
**Depends:** none

#### Edit 1 — Wrapper horizontal centering on mobile, right anchor on desktop

Replace the wrapper class on line 11:

**Before:**
```astro
<div id="vm-logo-3d-wrapper" class="translate-scale-0.9 absolute right-5 inset-y-0 z-0 flex items-center justify-center pointer-events-none" style="perspective: 500px;">
```

**After:**
```astro
<div id="vm-logo-3d-wrapper" class="translate-scale-0.9 absolute inset-y-0 z-0 flex items-center justify-center pointer-events-none left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-5" style="perspective: 500px;">
```

**Reasoning:**
- Base (`<md`): `left-1/2 -translate-x-1/2` centers the wrapper in the section.
- `md:`: `left-auto` removes the left offset, `translate-x-0` removes the centering transform, and `right-5` restores the original right anchor.
- `translate-scale-0.9` is preserved as requested by the design, even though it has no active project-level definition.

#### Edit 2 — Responsive width on the logo inner element

Replace the inner class on line 12:

**Before:**
```astro
<div id="vm-logo-3d" class="pointer-events-none vm-logo-3d-inner">
```

**After:**
```astro
<div id="vm-logo-3d" class="pointer-events-none vm-logo-3d-inner w-[90vw] md:w-[50vw]">
```

**Reasoning:**
- `w-[90vw]` gives the logo the largest safe width on mobile before the existing `translate-scale-0.9` scale is applied.
- `md:w-[50vw]` restores the original desktop sizing exactly.

#### Edit 3 — Remove fixed width from the style block

Update the `.vm-logo-3d-inner` style block (lines 162–169):

**Before:**
```css
.vm-logo-3d-inner {
  width: 50vw;
  aspect-ratio: 1;
  transition: transform 0.1s ease-out;
  transform-style: preserve-3d;
  will-change: transform;
  cursor: pointer;
}
```

**After:**
```css
.vm-logo-3d-inner {
  aspect-ratio: 1;
  transition: transform 0.1s ease-out;
  transform-style: preserve-3d;
  will-change: transform;
  cursor: pointer;
}
```

**Reasoning:**
- Width is now controlled by Tailwind utilities so it can respond to breakpoints.
- Transform, transition, and 3D behavior are unchanged.

---

## Verification Steps

1. Start the dev server:
   ```bash
   bun run dev:frontend
   ```
2. Open a page that renders the section:
   - `http://localhost:4322/about-apu`
   - `http://localhost:4322/academic`
3. Open DevTools responsive mode and check:

   | Viewport | Expected |
   |----------|----------|
   | `< 768px` | Logo horizontally centered; width computed from `w-[90vw]` (~90vw before scale, ~81vw after `translate-scale-0.9`); no horizontal overflow. |
   | `≥ 768px` | Logo anchored to `right: 1.25rem` (`right-5`); width computed from `w-[50vw]` (identical to previous `width: 50vw`). |

4. Confirm no horizontal scroll on mobile viewport:
   ```js
   document.documentElement.scrollWidth <= window.innerWidth
   // should be true
   ```
5. Confirm the 3D mouse-tilt and click-flip script still works on desktop.
6. Confirm the logo remains clipped by the section's `overflow-hidden`.

---

## Rollback Notes

If the change needs to be reverted, restore these three edits in `src/sections/about/AboutVisionMission.astro`:

1. Wrapper class back to:
   ```astro
   class="translate-scale-0.9 absolute right-5 inset-y-0 z-0 flex items-center justify-center pointer-events-none"
   ```
2. Inner class back to:
   ```astro
   class="pointer-events-none vm-logo-3d-inner"
   ```
3. Style block `.vm-logo-3d-inner` back to:
   ```css
   .vm-logo-3d-inner {
     width: 50vw;
     aspect-ratio: 1;
     transition: transform 0.1s ease-out;
     transform-style: preserve-3d;
     will-change: transform;
     cursor: pointer;
   }
   ```

---

## Commit Message

```
fix(about): center vision-mission logo on mobile while preserving desktop layout
```
