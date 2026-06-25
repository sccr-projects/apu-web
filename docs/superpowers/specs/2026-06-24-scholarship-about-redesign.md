# ScholarshipAbout Section Redesign — Design Spec

**Date:** 2026-06-24  
**Component:** `src/sections/scholarship/ScholarshipAbout.astro`  
**Page:** `src/pages/admission/academic-scholarship.astro`  
**Reference:** `design.png`

---

## 1. Goal

Replace the existing `ScholarshipAbout` section with a visually stronger hero-style block that communicates the APU Academic Scholarship as a reward for academic excellence.

---

## 2. Copy

### Heading

> We reward academic excellency

### Subtitle

> The APU Academic Scholarship is designed to recognize and support high-achieving students who want to continue their studies at a quality university.

*Decision:* Reuse existing ScholarshipAbout description.

### Scholarship highlight

> 50% SPI

*Decision:* Static gold-gradient text placed on the graduation cap.

---

## 3. Layout

Chosen direction: **B — Cap as podium topper**.

Stacked, centered composition inside the section container:

1. Large heading.
2. Short subtitle paragraph.
3. Graduation-cap icon sitting on top of the center podium block.
4. Three podium blocks aligned by their bottoms:
   - Left block: rank **2**, silver/sage tone, shortest.
   - Center block: rank **1**, gold tone, tallest.
   - Right block: rank **3**, bronze/copper tone, medium height.

The visual is treated as an illustration, not a data chart.

---

## 4. Visual Design

### Section Container

- Keep `apu-section-shell`.
- Keep subtle ambient radial glow (navy + accent).
- Background follows the existing section gradient.

### Typography

- Heading: `.text-h2`, navy (`rgb(var(--color-apu-navy))`), centered.
- Subtitle: `.text-body`, muted text, max-width ~640px, centered.

### Graduation Cap

- Image asset: `src/assets/images/scholarship/cap.png`.
- Rendered with `<img>` (width ~80–100px on desktop, height auto).
- Positioned centered, overlapping the top edge of the #1 podium block.

### 50% SPI Text

- Rendered on the cap top (mortarboard area).
- Gold gradient fill using the APU accent/gold tokens.
- Font: Space Grotesk, bold, small size so it fits inside the cap.
- Static; no shimmer animation.

### Podium Blocks

| Block | Rank | Color | Height (desktop) | Height (mobile) |
|-------|------|-------|------------------|-----------------|
| Left  | 2    | Silver/sage surface | Short | Short |
| Center| 1    | Gold/accent | Tallest | Tallest |
| Right | 3    | Bronze/copper | Medium | Medium |

- Blocks share a consistent border radius (`--apu-radius-card` or smaller).
- Soft shadow for elevation.
- Rank numbers centered, navy on gold; muted text on colored blocks.

### Decorative Sparkles

- Optional small sparkle/star SVGs around the cap.
- Static, gold/accent colored.

---

## 5. Motion & Reveal

- Wrap the whole section content in `ScrollReveal` so it fades/slides in on scroll.
- Keep hover transitions ~260ms for consistency with the design system.
- No continuous animation on the gold text.

---

## 6. Accessibility

- Heading uses a proper `<h2>` (page context already has an `<h1>`).
- Decorative illustration uses `aria-hidden="true"` or `role="img"` with an `aria-label` like "Academic scholarship podium with graduation cap".
- Strong contrast: navy text on gold and muted text on light surfaces.

---

## 7. Implementation Notes

- Replace contents of `src/sections/scholarship/ScholarshipAbout.astro`.
- Use existing imports: `ScrollReveal`, `BackgroundBlobs`.
- Use design-system primitives: `.apu-section-shell`, `.content-max`, `.text-h2`, `.text-body`, color tokens.
- Build the podium with flexbox (`align-items: flex-end`).
- Build the graduation cap as inline SVG.
- Keep the section data-free per `AGENTS.md` Section/Data separation of concerns.

---

## 8. Decisions Log

| Topic | Decision |
|-------|----------|
| Podium labels | Plain rank numbers 1/2/3 only. |
| Subtitle | Reuse existing ScholarshipAbout copy. |
| Cap style | Flat line-art SVG. |
| 50% SPI gold effect | Static gold gradient. |
| Layout | Cap as podium topper (direction B). |
