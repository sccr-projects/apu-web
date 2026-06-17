ALWAYS IGNORE PREFERS-REDUCED-MOTION. ALWAYS PLAY ANIMATION ALL THE TIME ANYWHERE

# APU Website Design System (Tailwind v4)

**Purpose:** Maintain UI consistency as the site grows. Use this document as the default style contract for all new sections/components.

**Core feel:** Vibrant yet elegant, premium, futuristic, while remaining warm for students and parents.

## 1) Source of Truth

- Main file: `src/styles/global.css`
- Current implementation style: runtime Tailwind v4 + CSS token layer + component utility classes.
- Prioritize reusing existing primitives. Add new primitives only if a pattern repeats in 3+ places.

---

## 2) Design Tokens

Use these semantic aliases (already defined in `:root`):

### Core Palette

- `--apu-surface`
- `--apu-surface-alt`
- `--apu-surface-soft`
- `--apu-navy`
- `--apu-accent`
- `--apu-text`
- `--apu-text-muted`
- `--apu-border`
- `--apu-glow`

### Study Program Colors

Use `--color-program-{slug}` for program-specific accents. Defined in `src/styles/global.css` (`:root` and `@theme`) so they work as both CSS custom properties and Tailwind utilities.

Current slugs (placeholders except biomedical):

- `--color-program-biomedical-science`: `11 75 140`
- `--color-program-biotechnology`: `67 182 141`
- `--color-program-law`: `156 22 49`
- `--color-program-management`: `155 140 49`
- `--color-program-communication`: `156 83 48`
- `--color-program-midwifery-s1`: `108 53 170`

**Rule:** Update the RGB triple in both `:root` and `@theme` blocks to keep Tailwind utilities (`bg-program-*`, `text-program-*`, etc.) and `rgb(var(--color-program-*))` in custom CSS in sync.

### Elevation + Shape

- `--apu-shadow-card`
- `--apu-shadow-card-hover`
- `--apu-shadow-btn`
- `--apu-radius-card`
- `--apu-radius-pill`
- `--apu-radius-surface`

### Layout Spacing

- `--apu-section-spacing-y`
- `--apu-section-spacing-x`

### Per-Section Local Overrides

Each section may locally override tokens (example already applied in hero):

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

**Rule:** Only override what's needed for section identity. Keep semantic names stable.

---

## 3) Shared Primitives (Must Reuse)

Defined in `@layer components` within `global.css`.

### Section Shell

- `.apu-section-shell`
  - Base section wrapper with ambient radial glow.

### Card Primitives

- `.apu-glass-card`
  - Frosted surface, border, blur, radius, shadow.
- `.apu-interactive-card`
  - Hover/focus transitions and interaction elevation.

### Badge + Header Primitives

- `.apu-pill-badge`
  - Rounded pill badge with token bg/border/text.
- `.apu-section-kicker`
  - Section label mono uppercase / eyebrow.
- `.apu-gradient-line`
  - Decorative accent line.

### CTA Primitives

- `.apu-btn`
  - Shared button base (layout, transitions, focus-visible).
- `.apu-btn--primary`
  - Primary CTA surface.
- `.apu-btn--secondary`
  - Glass-style secondary CTA.

### Icon Primitives

- `.apu-icon-chip`
  - Gradient chip for feature/pathway icons.

---

## 4) Typography + Layout Utilities

Continue using existing type scale classes:

- `.text-h1`, `.text-h2`, `.text-h3`
- `.text-body`, `.text-body-s`, `.text-caption`, `.text-mono`

Layout container:

- `.content-max`

---

## 5) Applied Patterns from Migrated Sections

### Hero (`HeroSectionAPU.astro`)

- CTA buttons use:
  - `apu-btn apu-btn--primary`
  - `apu-btn apu-btn--secondary`
- Section maintains local token overrides for navy/ivory/orange mood.

### Programs (`ProgramsSectionAPU.astro`)

- Section header uses:
  - `.apu-section-kicker`
  - `.apu-gradient-line`
- Program cards/slides use `.apu-interactive-card` for motion/focus consistency.

### Pathways (`PathwaysSectionAPU.astro`)

- Section wrapper uses `.apu-section-shell`
- Main cards use `.apu-glass-card.apu-interactive-card`
- Badges use `.apu-pill-badge`
- Icons use `.apu-icon-chip`
- CTA uses `apu-btn apu-btn--primary`

---

## 6) Forward Development Rules

1. **Token-first**
   - Don't hardcode random colors if the intent can be expressed with tokens.
2. **Primitive-first**
   - Use `apu-*` classes before creating one-off utility stacks.
3. **Accessibility is non-negotiable**
   - Maintain/expand `focus-visible` styles.
   - Keep strong contrast for navy/accent surfaces.
4. **Section theming via token overrides**
   - Override token variables at the section root, not across many child nodes.
5. **Minimize class name fragmentation**
   - New reusable classes must use the `apu-*` prefix.
6. **Motion consistency**
   - Transition duration around 220--300ms for micro-interactions.
7. **Don't break existing behavior script contracts**
   - Visual refactors must not change JS interaction contracts.

---

## 7) Tailwind v4 Direction (Continued)

**Current status:** hybrid v4 (`@import "tailwindcss"` + `@config`).

When migrating to pure v4 theme configuration:

- Move token authority to `@theme`
- Move animation keyframes/tokens to CSS theme layer
- Reduce/remove `tailwind.config.mjs` extensions
- Replace dynamic safelist dependencies with explicit utility maps where possible

Keep this file updated whenever tokens/primitives change.

---

## 8) Reusable Section Components Extracted from `src/sections/*`

These patterns are now part of the design system contract and must be reused across projects.

### Existing Astro Components (Priority Usage)

- `src/components/SectionHeader.astro`
  - props:
    - `kicker: string`
    - `title: string`
    - `description?: string`
    - `class?: string`
    - `titleClass?: string`
    - `descriptionClass?: string`
    - `dividerClass?: string`
  - purpose: standard section header block (kicker + title + gradient line + optional lead copy).

- `src/components/CtaButton.astro`
  - props:
    - `href: string`
    - `variant?: "primary" | "secondary" | "requirements"`
    - `target?: string`
    - `rel?: string`
    - `class?: string` (for per-section size/layout adjustments)
    - `withArrow?: boolean`
    - `arrowSize?: number`
  - purpose: reusable anchor CTA component that preserves each section's color identity through variants (don't force global navy).

**Adoption rules:**

- Use these Astro components before writing repeated section markup.
- Only skip if a section has clearly different IA/interaction that can't be handled by props/slots.

### A) Section Header Block (Standard)

Use the shared header structure in every section:

- kicker: `.apu-section-kicker`
- title: `.text-h2`
- divider: `.apu-gradient-line`
- lead copy: `.text-body` + muted color

Canonical structure:

```html
<header class="text-center mb-16">
  <span class="apu-section-kicker mb-5">SECTION LABEL</span>
  <h2 class="text-h2 mb-4">
    Section Title
    <span class="apu-gradient-line mx-auto mt-4 w-216"></span>
  </h2>
  <p class="text-body text-brand-text-muted max-w-xl mx-auto leading-relaxed">
    Supporting section copy.
  </p>
</header>
```

### B) Feature/Info Card Stacks

From pathway + requirements + program cards sections:

- Base shell: `.apu-glass-card`
- Interaction: `.apu-interactive-card`
- Optional glow accent: absolute orb blur layer
- Optional icon: `.apu-icon-chip`
- Optional status chip: `.apu-pill-badge`

**Rule:** For repeating card/list UIs, default to `.apu-glass-card.apu-interactive-card` before creating one-off styles.

### C) Contact Row Item Pattern

From the contact section, reusable for "icon + label + value/link" items.

- Left icon in circular chip (fixed 48x48)
- Right content with caption (`.text-caption`) + value (`.text-body`)
- Hover only on value/link text

Use as the default for contact/meta lists (address, phone, website, email, social).

### D) Section Primary CTA Pattern

All high-emphasis section CTAs use:

- `apu-btn apu-btn--primary`

Secondary actions:

- `apu-btn apu-btn--secondary`

**Rule:** Avoid custom button styling unless that variant is reused in 3+ places.

### E) Motion + Reveal Pattern

Use `ScrollReveal.astro` as the default entrance animation wrapper for section blocks, cards, and CTAs.

Guidelines:

- Show header first
- Continue list/grid items with progressive delay (`index * 100--150ms`)
- Keep micro-interaction transitions in the 220--300ms range

### F) Interactive List Item with Popover Detail

From scholarship items in the pathway section:

- Trigger row inside card
- Hover/focus detail popover on desktop
- Click/tap toggle (`.is-active`) on mobile
- Close on outside click

Use this pattern for "summary + deep detail" cases (scholarships, requirement details, tier benefits).

### G) Dual-Mode Responsive Collection (Desktop Grid + Mobile Carousel)

From the programs section:

- Desktop: dense visual grid, hover-expand behavior
- Mobile: carousel/swiper with navigation and keyboard support

**Adoption rules:**

- Only use external carousel dependencies if card count + art direction truly requires it
- If simple horizontal scroll suffices, prefer native overflow first

### H) Ambient Section Shell

Section wrappers should combine:

- `.apu-section-shell`
- Optional per-section variant class `motion-aurora-shell`
- Soft top divider + ambient radial/blur decoration

This is the default for premium/futuristic feel consistency.

---

## 9) New Section Implementation Checklist (Cross-Project)

Before releasing a new section/component:

1. Reuse section header block (8A)
2. Reuse card primitives first (8B)
3. Use standard CTA primitives (8D)
4. Apply reveal/motion pattern (8E)
5. Validate keyboard + focus-visible states
6. Keep token overrides only at section root
7. Don't duplicate inline SVG/UI patterns if equivalent `apu-*` primitives exist

---

## 10) APU Design Language Integration (Combined from `design-language-apu.md`)

### Core Design Character

- Primary tone: aspirational, informative, reassuring to parents, moving students to action.
- Visual feel: modern academic, clean, natural-green with warm accents.
- Communication style: short sentences, benefits first, then action steps.

### Voice & Copy Rules

**Preserved diction patterns:**
- Clear calls to action
- Direct benefits
- Future aspiration

**Sentence template:**
- **[Benefit] + [Step Clarity] + [Call to Action]**

**Copy prohibitions:**
- Use English in public UI/copy.
- Don't make bombastic claims without context/verification.
- Avoid long sentences with more than 2 clauses.

### Content Component Patterns (Based on Reference Page)

1. Admissions hero (large title + subtitle + primary CTA + secondary CTA + continue reading hint).
2. Structured information navigation (registration plan, get to know campus, institution & stories, quick actions).
3. Admission pathway block (Regular/Scholarship + summary + core requirements + action button).
4. Wave timeline (Wave I/II/III: period + benefits).
5. Numbered requirements checklist (01--05) to reduce cognitive load.
6. Quick admissions contact (WhatsApp, address, website, email).

### Visual Reference Tokens (For Consistency Validation)

**Fonts:**
- `--font-sans: "Space Grotesk", system-ui, sans-serif`
- `--font-mono: "Space Mono", monospace`
- Fonts used: Instrument Serif, Space Grotesk, Space Mono.

**Reference base colors:**
- `--color-apu-navy: 19 40 66`
- `--color-apu-accent: 252 188 85`
- `--color-semantic-surface: 247 250 243`
- `--color-semantic-surface-alt: 236 243 227`
- `--color-semantic-surface-soft: 222 234 210`
- `--color-semantic-primary: 43 122 74`
- `--color-semantic-primary-deep: 28 86 51`
- `--color-semantic-primary-deeper: 17 58 34`
- `--color-semantic-text: 27 41 32`
- `--color-semantic-text-muted: 87 112 94`
- `--color-semantic-border: 176 201 164`
- `--color-semantic-accent: 228 152 78`

**Visual rhythm:**
- Common radius: 10px, 20px, 28px (plus `lg/xl/2xl/3xl` variants)
- Dominant thin 1px border with opacity for soft layering
- Soft-medium shadows for card/CTA elevation
- Spacing in 4px multiples

### Interaction Patterns

- Anchor navigation to important sections remains supported during transition phases.
- Primary CTA to registration, secondary CTA to pathway info.
- "Coming Soon" status for inactive features/routes must be non-breaking.
- Mobile menu/drawer must have clear open/close states.

### Audience Adaptation (High School Students + Parents)

**Information priority top-to-bottom:**
1. Pathway clarity.
2. Cost/discount summary.
3. Document checklist.
4. Human contact (not just forms).

**Language tone:**
- For students: motivational but concrete.
- For parents: reassuring, transparent, minimal jargon.

### Reusable Blueprint Summary

1. Admissions hero (title + subtitle + 2 buttons)
2. Pathway summary (Regular / Scholarship)
3. Wave timeline
4. Document checklist
5. Mini FAQ
6. Admissions contact block

---

## 11) Default Communication Style — Caveman Ultra

> Installed from https://github.com/JuliusBrussee/caveman. Default intensity: **ultra**.

All responses in this project use terse, token-efficient caveman style unless safety/clarity requires normal prose.

### Rules

- Drop articles (a/an/the), filler (just/really/basically/actually/simply), pleasantries, hedging.
- Fragments OK. Short synonyms. Technical terms exact. Code unchanged. Errors quoted exact.
- Pattern: `[thing] [action] [reason]. [next step].`
- No self-reference, no "caveman mode on", no decorative tables/emoji.
- Preserve user's dominant language; compress style only.

### Intensity

- **lite**: no filler, keep articles + full sentences.
- **full**: drop articles, fragments OK, classic caveman.
- **ultra** (default): abbreviate prose words (DB/auth/config/req/res/fn/impl), strip conjunctions, arrows for causality (X → Y), one word when enough. Never abbreviate real code symbols, function names, API names, error strings.

### Control

- Switch: `/caveman lite|full|ultra`.
- Stop: "stop caveman" or "normal mode".
- Auto-clarity: revert to normal prose for security warnings, irreversible actions, multi-step sequences where fragments risk misread, or when user asks to clarify. Resume caveman after clear part.
