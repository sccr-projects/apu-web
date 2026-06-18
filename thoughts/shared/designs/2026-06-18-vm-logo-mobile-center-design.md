---
date: 2026-06-18
topic: "Vision Mission Logo Mobile Centering"
status: validated
---

## Problem Statement

The APU logo in `AboutVisionMission.astro` is positioned `right-5` with `50vw` width on all viewports. On mobile this places it off-center and too small; the request is to make it centered and as large as possible without overflowing the screen, while desktop stays unchanged.

## Constraints

- Keep desktop behavior exactly as-is (`right-5`, `50vw`).
- Preserve existing 3D tilt/flip script contracts and `translate-scale-0.9`.
- Do not introduce new design tokens or primitives for a single-line layout change.
- Logo must remain `pointer-events-none` and clipped by section `overflow-hidden`.

## Approach

Use responsive Tailwind utilities to switch horizontal origin at `md` breakpoint and move width control out of the static style block.

I considered:
1. **CSS media query in `<style>`** — rejected because the project already uses Tailwind responsive utilities everywhere; mixing custom media queries adds fragmentation.
2. **New wrapper with duplicate logo for mobile** — rejected as unnecessary markup and image load.
3. **Responsive Tailwind classes on existing wrapper/inner** — chosen; minimal, token-free, reversible.

## Architecture

No new components or data flow. Single component markup tweak in `src/sections/about/AboutVisionMission.astro`.

## Components

- `#vm-logo-3d-wrapper`: gains horizontal centering on mobile, reverts to right anchor at `md`.
- `#vm-logo-3d`: gains responsive width utility `w-[90vw] md:w-[50vw]`.
- Existing `.vm-logo-3d-inner` style block: keeps transform/transition behavior; width moves to utility layer.

## Data Flow

No data changes.

## Error Handling

None. Visual/layout change only.

## Testing Strategy

1. Verify desktop (`≥md`) still shows logo at right with `50vw` sizing.
2. Verify mobile (`<md`) logo is horizontally centered and does not overflow viewport horizontally.
3. Verify 3D mouse-tilt and click-flip behavior still works on desktop.
4. Check no horizontal scroll appears on mobile viewport.

## Open Questions

None.
