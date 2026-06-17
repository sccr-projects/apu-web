# Program Strengths Bento Section — Design Spec

## Goal
Create a new reusable Astro section component, `ProgramStrengthsBentoSection.astro`, that reinterprets the `design.png` bento layout for the APU program-page design system while reusing the existing copy source (`biotechnologyProgram.strengths`).

The section is interactive: a row of four small bento cards sits at the bottom; clicking a card animates it up into a large stage area while its description appears on the opposite side.

## Decisions from brainstorming
- **Deliverable:** Reusable section component in `src/sections/academic/program/ProgramStrengthsBentoSection.astro`.
- **Content scope:** 4 featured strengths from the 7 available in `biotechnologyProgram.strengths`.
- **Theme:** APU light palette (sage/ivory surface, navy text, burnt-copper accent). No dark theme block.
- **Layout:** A large stage area on top + a single row of 4 cards at the bottom.
- **Interaction:** Click a bottom card to expand it into the stage. Left-half cards (01, 02) expand to the right panel; right-half cards (03, 04) expand to the left panel. Description appears in the opposite panel.
- **Mobile:** Clicked card expands to full width at the top of the stage; description appears below it.
- **Language:** English copywriting, per explicit user request.

## Layout

### Section shell
- Uses `.apu-section-shell` + `.motion-aurora-shell` for ambient background continuity.
- Background: `bg-gradient-to-b from-brand-surface via-brand-surface-alt to-brand-surface-soft`.
- Vertical padding: `py-24 md:py-32`.
- Inner wrapper: `.content-max`.

### Header
- Reuses `src/components/SectionHeader.astro`.
- `kicker`: `WHY US`
- `title`: `Why Biotechnology at APU?`
- `description`: short lead paragraph:  
  *"A curriculum combining molecular biology, information technology, and sustainable industrial engineering to tackle global challenges."*
- Alignment: centered.

### Stage area
- Container: full-width card acting as the expansion canvas.
- Desktop: `grid grid-cols-1 md:grid-cols-2 gap-6` inside the stage, min-height ~520px.
- Mobile: single column, min-height ~320px.
- Two panels:
  - **Card target panel** — the clicked card animates into this panel and scales up.
  - **Description panel** — shows the selected strength's description.
- Initially, the stage shows a subtle prompt or is empty; no panel is visible until a card is clicked.

### Bottom row
- 4 small cards in one row on desktop.
- Desktop: `grid-cols-4`.
- Mobile: `grid-cols-2` (fallback; touch targets remain large).
- Each card is a `<button>` and contains:
  - mono index number (`01`–`04`)
  - icon chip
  - title
- Cards do **not** show the description; the description is revealed only in the stage.

## Interaction design

### Desktop expansion rule
- Cards `01` and `02` (left half) expand into the **right** stage panel; description appears in the **left** panel.
- Cards `03` and `04` (right half) expand into the **left** stage panel; description appears in the **right** panel.

### Animation (FLIP)
1. User clicks a bottom card.
2. The original card is hidden (`opacity: 0`, `aria-hidden="true"`).
3. A clone of the card is appended to the stage and positioned exactly over the original card.
4. The clone animates to the target panel (size + position) using CSS transitions.
5. The description panel on the opposite side fades in after the card settles.
6. The expanded card gains a close button (`×`) and a larger icon/title treatment.

### Close / switch
- Clicking the expanded card closes it (animate back to the bottom row).
- Clicking the close button closes it.
- Clicking a different bottom card switches the expanded view without a full close/open cycle.
- `Escape` key closes the expanded view.

### Mobile
- Clicked card expands to full width inside the stage.
- Description appears below the expanded card within the same column.
- Bottom row remains visible; the clicked card is hidden while expanded.

## Motion tokens
- Transition duration: 500ms for the card move/scale.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`.
- Description fade-in delay: 150ms after card animation starts.
- Per `AGENTS.md`, animation is always on.

## Card states

### Collapsed (bottom row)
- Base: `.apu-glass-card`
- Hover: `.apu-interactive-card` lift.
- Focus-visible: inherited primitive ring.

### Expanded (stage)
- Base: `.apu-glass-card` filling the target panel.
- Larger icon chip and title.
- Close button top-right.

## Tokens used

All values already exist in `src/styles/global.css`:

- `--color-apu-navy`
- `--color-apu-accent`
- `--color-brand-surface`
- `--color-brand-surface-alt`
- `--color-brand-surface-soft`
- `--color-brand-primary-deep`
- `--color-brand-text-muted`
- `.apu-section-shell`
- `.motion-aurora-shell`
- `.apu-glass-card`
- `.apu-interactive-card`
- `.apu-icon-chip`
- `.text-h2`, `.text-h3`, `.text-body-s`, `.text-mono`
- `.content-max`

## Accessibility

- Bottom cards are `<button>` elements with `aria-expanded`.
- Expanded card has a visible close button and `aria-label="Close detail"`.
- Decorative SVGs use `aria-hidden="true"`.
- Focus is returned to the trigger card when the expanded view closes.
- Keyboard: `Tab` moves through bottom cards; `Enter`/`Space` expands; `Escape` closes.

## File location

```
src/sections/academic/program/ProgramStrengthsBentoSection.astro
```

## Integration

The section can be imported and used on any program page:

```astro
---
import ProgramStrengthsBentoSection from "@sections/academic/program/ProgramStrengthsBentoSection.astro";
---

<ProgramStrengthsBentoSection />
```

It does **not** replace `ProgramStrengthsSection.astro` unless explicitly swapped on a page.

## Open questions / assumptions
- The 4 featured strengths are the first 4 items in `biotechnologyProgram.strengths`, translated into English.
- The description paragraph is a compressed English sentence from the program head message.
- Mobile layout uses a 2-column bottom row; if a true single-row mobile carousel is needed, the plan can be revised.

## Pre-implementation check
- [x] Reuses existing section header component.
- [x] Reuses existing glass/interactive card primitives.
- [x] Stays within APU brand color tokens.
- [x] Responsive collapse defined.
- [x] Motion uses FLIP + CSS transitions.
- [x] Keyboard and focus states defined.
