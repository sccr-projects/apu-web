# Biomedical Science Game Preview Section — Design Spec

**Date:** 2026-06-18
**Scope:** Add a "What is Biomedical Science?" interactive preview section to `/academic/biomedical` that links to the existing game page.
**Approach:** Minimal Section Link (Option A).

---

## 1. Goal

Create a narrative entry point on the Biomedical Science program page. Visitors see an inviting "What is Biomedical Science?" scene, click it, and are taken to the existing interactive game at `/academic/biomedical/game`.

---

## 2. Placement

Insert the new section on `src/pages/academic/biomedical.astro` **after** `ProgramStrengthsSection` and before `ProgramStrengthsBentoSection`.

```astro
<!-- current flow -->
<ProgramHeroSection />
<ProgramMsgFromHead variant="light" />
<ProgramStrengthsSection />
<BiomedicalGamePreviewSection />   <!-- new -->
<ProgramStrengthsBentoSection />
<!-- remaining sections -->
```

---

## 3. Component

**File:** `src/sections/academic/program/BiomedicalGamePreviewSection.astro`

**Responsibilities:**
- Render a section header.
- Render a clickable preview card.
- Link to `/academic/biomedical/game`.
- Use existing APU design-system tokens and primitives only.

---

## 4. Visual Design

### Section Shell
- `.apu-section-shell` wrapper.
- Program accent color: `program-biomedical-science` (`rgb(11, 75, 140)`).
- Ambient radial gradient decoration using the biomedical blue and the APU accent (`--apu-accent`).

### Header Block
- **Kicker:** `Interactive Learning` — `.apu-section-kicker`.
- **Title:** `What is Biomedical Science?` — `.text-h2`.
- **Divider:** `.apu-gradient-line` centered under title, biomedical blue → APU accent.
- **Lead copy:** `Jelajahi dunia mikroskopis biomedical science secara interaktif.` — `.text-body` muted.

### Preview Card
- `.apu-glass-card.apu-interactive-card` container.
- Two-column layout on desktop; single column on mobile.
- **Left column:** animated SVG petri dish with floating cells/particles.
- **Right column:**
  - Subheading: `Masuk ke Dunia Mikroskopis` — `.text-h3`.
  - Body: `Kendalikan sel, serap nutrisi, dan hindari predator dalam petualangan interaktif yang mengenalkan dasar-dasar biomedical science secara menyenangkan.`
  - CTA: `Mulai Petualangan →` — `CtaButton` primary variant, linking to `/academic/biomedical/game`.

### Interaction
- Entire card is wrapped in an anchor so the whole surface is clickable.
- Hover: card lifts via `.apu-interactive-card` transition.
- Focus-visible: standard APU focus ring.
- ScrollReveal: header and card fade/slide in on scroll.

### Assets
- No external images. The preview illustration is an inline SVG with CSS keyframe animation for floating cells.

---

## 5. Behavior

1. User scrolls to the section on `/academic/biomedical`.
2. The section reveals with `ScrollReveal`.
3. User clicks the card or the CTA button.
4. Browser navigates to `/academic/biomedical/game`.
5. The existing game page loads and displays its own starting scene / game canvas.

**No Fullscreen API is used.** The existing game page already renders the iframe nearly viewport-filling; that is treated as sufficient for the "fullscreen" feel.

---

## 6. Scope Exclusions

- Do not modify `src/pages/academic/biomedical/game.astro`.
- Do not modify `public/game/` or the compiled game assets.
- Do not add new dependencies.
- Do not implement browser-native fullscreen toggling.

---

## 7. Files to Create/Modify

| Action | Path |
|--------|------|
| Create | `src/sections/academic/program/BiomedicalGamePreviewSection.astro` |
| Modify | `src/pages/academic/biomedical.astro` (import + insert section) |

---

## 8. Mockup

Browser mockup saved at:
- `.omo/drafts/biomedical-game-preview-mockup.html`
- `.omo/drafts/biomedical-game-preview-mockup.png`

---

## 9. Acceptance Criteria

- [ ] `/academic/biomedical` renders the new section after strengths.
- [ ] Section uses existing APU primitives and biomedical program color tokens.
- [ ] Clicking the card or CTA navigates to `/academic/biomedical/game`.
- [ ] Preview illustration is self-contained (inline SVG, no new image assets).
- [ ] Section is responsive down to mobile.
- [ ] Keyboard focus and hover states are visible.
- [ ] Existing game page remains unchanged and functional.
