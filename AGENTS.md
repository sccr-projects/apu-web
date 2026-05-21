# APU Website Design System (Tailwind v4)

Purpose: keep UI consistent as site grows. Use this as the default style contract for all new sections/components.

Main Vibe : Vibrant yet elegant, premium, and futuristic.

## 1) Source of truth

- Primary file: `src/styles/global.css`
- Current implementation style: Tailwind v4 runtime + CSS token layer + component utility classes.
- Reuse existing primitives first. Add new primitives only when repetition appears in 3+ places.

---

## 2) Design tokens

Use these semantic aliases (already defined in `:root`):

### Core palette

- `--apu-surface`
- `--apu-surface-alt`
- `--apu-surface-soft`
- `--apu-navy`
- `--apu-accent`
- `--apu-text`
- `--apu-text-muted`
- `--apu-border`
- `--apu-glow`

### Elevation + shape

- `--apu-shadow-card`
- `--apu-shadow-card-hover`
- `--apu-shadow-btn`
- `--apu-radius-card`
- `--apu-radius-pill`
- `--apu-radius-surface`

### Layout spacing

- `--apu-section-spacing-y`
- `--apu-section-spacing-x`

### Section-local overrides

Each section may override tokens locally (example already done in hero):

- `--apu-btn-primary-bg`
- `--apu-btn-primary-color`
- `--apu-btn-primary-border`
- `--apu-btn-primary-hover-bg`
- `--apu-btn-primary-hover-color`
- `--apu-btn-secondary-bg`
- `--apu-btn-secondary-color`
- `--apu-btn-secondary-border`
- `--apu-btn-secondary-hover-bg`
- `--apu-btn-secondary-hover-border`
- `--apu-badge-bg`
- `--apu-badge-border`
- `--apu-badge-color`

Rule: override only what needed for section identity. keep semantic names stable.

---

## 3) Shared primitives (must reuse)

Defined in `@layer components` inside `global.css`.

### Section shell

- `.apu-section-shell`
  - base section wrapper with ambient radial glow

### Card primitives

- `.apu-glass-card`
  - frosted surface, border, blur, radius, shadow
- `.apu-interactive-card`
  - hover/focus transitions and elevated interaction

### Badge + header primitives

- `.apu-pill-badge`
  - rounded pill badge with tokenized bg/border/text
- `.apu-section-kicker`
  - mono uppercase section label / eyebrow
- `.apu-gradient-line`
  - decorative accent divider line

### CTA primitives

- `.apu-btn`
  - shared button base (layout, transition, focus-visible)
- `.apu-btn--primary`
  - primary CTA surface
- `.apu-btn--secondary`
  - secondary/glass CTA

### Icon primitive

- `.apu-icon-chip`
  - gradient chip for feature/pathway icons

---

## 4) Typography + layout utilities

Keep using existing type scale classes:

- `.text-h1`, `.text-h2`, `.text-h3`
- `.text-body`, `.text-body-s`, `.text-caption`, `.text-mono`

Layout container:

- `.content-max`

---

## 5) Applied patterns from migrated sections

### Hero (`HeroSectionAPU.astro`)

- CTA buttons use:
  - `apu-btn apu-btn--primary`
  - `apu-btn apu-btn--secondary`
- Section keeps local token overrides for navy/ivory/orange mood.

### Programs (`ProgramsSectionAPU.astro`)

- Section header uses:
  - `.apu-section-kicker`
  - `.apu-gradient-line`
- program cards/slides use `.apu-interactive-card` for consistent motion/focus.

### Pathways (`PathwaysSectionAPU.astro`)

- section wrapper uses `.apu-section-shell`
- main cards use `.apu-glass-card.apu-interactive-card`
- badges use `.apu-pill-badge`
- icon uses `.apu-icon-chip`
- CTA uses `apu-btn apu-btn--primary`

---

## 6) Rules for future development

1. **Token-first**
   - no hardcoded random colors if token can express intent.
2. **Primitive-first**
   - use `apu-*` class before composing one-off utility pile.
3. **Accessibility non-negotiable**
   - preserve/extend `focus-visible` styles.
   - keep contrast strong for navy/accent surfaces.
4. **Section theming via overrides**
   - override token vars at section root, not inside many child nodes.
5. **Low-fragmentation class naming**
   - new reusable classes use `apu-*` prefix.
6. **Motion consistency**
   - keep transition duration around 220–300ms for micro-interactions.
7. **Do not break existing behavior scripts**
   - visual refactor must not change JS interaction contracts.

---

## 7) Tailwind v4 direction (next)

Current state is hybrid v4 (`@import "tailwindcss"` + `@config`).

When moving to pure v4 theme config:

- migrate token authority into `@theme`
- move keyframes/animation tokens into CSS theme layer
- reduce/remove `tailwind.config.mjs` extension surface
- replace dynamic safelist dependence with explicit utility maps where possible

Keep this file updated whenever tokens/primitives change.
