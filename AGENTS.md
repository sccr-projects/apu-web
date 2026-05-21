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

---

## 8) Reusable section components extracted from `src/sections/*`

These patterns are now part of the design system contract and should be reused across projects.

### Implemented Astro components (must reuse first)

- `src/components/SectionHeader.astro`
  - props:
    - `kicker: string`
    - `title: string`
    - `description?: string`
    - `class?: string`
    - `titleClass?: string`
    - `descriptionClass?: string`
    - `dividerClass?: string`
  - purpose: standard section header block with kicker + title + gradient line + optional lead copy.

- `src/components/CtaButton.astro`
  - props:
    - `href: string`
    - `variant?: "primary" | "secondary" | "requirements"`
    - `target?: string`
    - `rel?: string`
    - `class?: string` (for per-section size/layout adjustments)
    - `withArrow?: boolean`
    - `arrowSize?: number`
  - purpose: reusable CTA anchor component that keeps section-specific color identity through variants (do not force navy globally).

Adoption rule:

- use these Astro components before writing repeated section markup.
- only bypass when a section has clearly different IA/interaction that cannot fit via props/slots.

### A) Section header block (standardized)

Use a shared header structure in every section:

- kicker: `.apu-section-kicker`
- title: `.text-h2`
- divider: `.apu-gradient-line`
- lead copy: `.text-body` + muted color

Canonical structure:

```html
<header class="text-center mb-16">
  <span class="apu-section-kicker mb-5">SECTION LABEL</span>
  <h2 class="text-h2 mb-4">
    Section headline
    <span class="apu-gradient-line mx-auto mt-4 w-216"></span>
  </h2>
  <p class="text-body text-brand-text-muted max-w-xl mx-auto leading-relaxed">
    Section supporting copy.
  </p>
</header>
```

### B) Feature/info card stack

From pathways + requirements + program cards:

- base shell: `.apu-glass-card`
- interaction: `.apu-interactive-card`
- optional glow accent: absolute blurred orb layer
- optional icon: `.apu-icon-chip`
- optional status chip: `.apu-pill-badge`

Rule: for any repeatable card/list UI, default to `.apu-glass-card.apu-interactive-card` before creating a one-off style.

### C) Contact row item pattern

From contact section, reusable for any "icon + label + value/link" line item.

- left icon in circular chip (fixed 48x48)
- right content with caption (`.text-caption`) + value (`.text-body`)
- hover only on value/link text

Use this as default for contact/meta lists (address, phone, web, email, social).

### D) Primary section CTA pattern

All high-emphasis section CTAs should use:

- `apu-btn apu-btn--primary`

Secondary action:

- `apu-btn apu-btn--secondary`

Rule: avoid custom CTA button styling unless the variant is reused in 3+ places.

### E) Motion + reveal pattern

Use `ScrollReveal.astro` as default entry animation wrapper for section blocks, cards, and CTAs.

Guidelines:

- reveal header first
- then list/grid items with progressive delay (`index * 100–150ms`)
- keep micro interaction transitions in 220–300ms range

### F) Interactive list item with detail popover

From scholarship items in pathways:

- trigger row inside card
- hover/focus detail popover on desktop
- click/tap toggle (`.is-active`) on mobile
- close on outside click

Use this pattern for compact "summary row + deep detail" use-cases (scholarships, requirements detail, benefit tiers).

### G) Responsive dual-mode collection (desktop grid + mobile carousel)

From programs section:

- desktop: dense visual grid, hover-expand behavior
- mobile: carousel/swiper with navigation and keyboard support

Adoption rule:

- only use external carousel dependency when card count + art direction needs it
- if simple horizontal scroll is enough, prefer native overflow first

### H) Section ambient shell

Section wrappers should compose:

- `.apu-section-shell`
- optional `motion-aurora-shell` variant class per section
- subtle top divider and radial/blur ambient decorations

This is default for premium/futuristic mood consistency.

---

## 9) Implementation checklist for new sections (cross-project)

Before shipping any new section/component:

1. Reuse section header block (8A)
2. Reuse card primitives first (8B)
3. Use standard CTA primitives (8D)
4. Apply reveal/motion pattern (8E)
5. Validate keyboard + focus-visible states
6. Keep token overrides at section root only
7. Do not duplicate inline SVG/UI patterns if equivalent `apu-*` primitive exists
