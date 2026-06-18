# Biomedical Science Game Preview Section — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "What is Biomedical Science?" interactive preview section to `/academic/biomedical` that links to the existing game page.

**Architecture:** A single new Astro section component renders the preview card using existing APU design-system primitives. The section is imported into the biomedical program page between strengths and bento sections. No game assets or game page are changed.

**Tech Stack:** Astro 6, Tailwind CSS v4, project design tokens in `src/styles/global.css`.

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `src/sections/academic/program/BiomedicalGamePreviewSection.astro` | Create | New section: header + animated preview card + CTA link. |
| `src/pages/academic/biomedical.astro` | Modify | Import section and insert it after `ProgramStrengthsSection`. |

---

## Task 1: Create `BiomedicalGamePreviewSection.astro`

**Files:**
- Create: `src/sections/academic/program/BiomedicalGamePreviewSection.astro`

### Step 1: Write the component

Create the file with the following content. The whole card is a single anchor so the surface is clickable; the button is a styled span inside to avoid nested anchors.

```astro
---
import ScrollReveal from "@components/ScrollReveal.astro";
---

<section
  id="biomedical-game-preview"
  class="apu-section-shell motion-aurora-shell relative isolate overflow-hidden py-24 md:py-32"
>
  <div class="pointer-events-none absolute inset-0 overflow-hidden">
    <div class="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[rgb(var(--color-program-biomedical-science)_/_0.10)] blur-3xl"></div>
    <div class="absolute -right-24 bottom-8 h-80 w-80 rounded-full bg-[rgb(var(--color-apu-accent)_/_0.12)] blur-3xl"></div>
  </div>

  <div class="content-max relative z-10">
    <ScrollReveal>
      <header class="text-center mb-16">
        <span class="apu-section-kicker mb-5 inline-flex">Interactive Learning</span>
        <h2 class="text-h2 text-[rgb(var(--apu-navy))] mb-4">
          What is Biomedical Science?
          <span class="apu-gradient-line mx-auto mt-4 w-56"></span>
        </h2>
        <p class="text-body text-brand-text-muted max-w-xl mx-auto leading-relaxed">
          Jelajahi dunia mikroskopis biomedical science secara interaktif.
        </p>
      </header>
    </ScrollReveal>

    <ScrollReveal delay={150}>
      <a
        href="/academic/biomedical/game"
        class="apu-glass-card apu-interactive-card block max-w-4xl mx-auto no-underline"
        aria-label="Mulai petualangan biomedical science"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-10 items-center">
          <div class="preview-visual relative aspect-square flex items-center justify-center rounded-2xl bg-[rgb(var(--color-program-biomedical-science)_/_0.06)]">
            <svg
              class="petri-dish w-48 h-48 md:w-56 md:h-56"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="100" cy="100" r="96" stroke="rgba(11,75,140,0.25)" stroke-width="2" fill="rgba(11,75,140,0.04)" />
              <circle cx="100" cy="100" r="86" stroke="rgba(11,75,140,0.12)" stroke-width="1" fill="rgba(11,75,140,0.03)" />

              <g class="cell cell-1">
                <circle cx="70" cy="75" r="14" fill="rgba(11,75,140,0.85)" />
                <circle cx="66" cy="71" r="4" fill="rgba(255,255,255,0.35)" />
              </g>
              <g class="cell cell-2">
                <circle cx="130" cy="65" r="10" fill="rgba(252,188,85,0.9)" />
                <circle cx="127" cy="62" r="3" fill="rgba(255,255,255,0.4)" />
              </g>
              <g class="cell cell-3">
                <circle cx="120" cy="130" r="16" fill="rgba(11,75,140,0.8)" />
                <circle cx="115" cy="125" r="5" fill="rgba(255,255,255,0.3)" />
              </g>
              <g class="cell cell-4">
                <circle cx="65" cy="135" r="9" fill="rgba(252,188,85,0.85)" />
                <circle cx="62" cy="132" r="3" fill="rgba(255,255,255,0.35)" />
              </g>

              <circle cx="95" cy="100" r="3" fill="rgba(11,75,140,0.25)">
                <animate attributeName="cy" values="100;105;100" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="150" cy="105" r="2" fill="rgba(11,75,140,0.2)">
                <animate attributeName="cx" values="150;147;150" dur="5s" repeatCount="indefinite" />
              </circle>
              <circle cx="50" cy="100" r="2.5" fill="rgba(252,188,85,0.35)">
                <animate attributeName="cy" values="100;96;100" dur="4.5s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>

          <div class="flex flex-col gap-5">
            <h3 class="text-h3 text-[rgb(var(--apu-navy))]">Masuk ke Dunia Mikroskopis</h3>
            <p class="text-body-s text-brand-text-muted leading-relaxed">
              Kendalikan sel, serap nutrisi, dan hindari predator dalam petualangan interaktif yang mengenalkan dasar-dasar biomedical science secara menyenangkan.
            </p>
            <span class="apu-btn apu-btn--primary w-fit">
              Mulai Petualangan
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ml-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </a>
    </ScrollReveal>
  </div>
</section>

<style>
  .cell {
    animation: float 6s ease-in-out infinite;
    transform-origin: center;
  }
  .cell-1 { animation-delay: 0s; }
  .cell-2 { animation-delay: -1.5s; }
  .cell-3 { animation-delay: -3s; }
  .cell-4 { animation-delay: -4.5s; }

  @keyframes float {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(6px, -8px); }
    50% { transform: translate(-4px, 4px); }
    75% { transform: translate(8px, 6px); }
  }
</style>
```

- [ ] Step 1: Create the file with the code above.

### Step 2: Verify file was created

Run:

```bash
cat src/sections/academic/program/BiomedicalGamePreviewSection.astro | head -n 5
```

Expected output:

```
---
import ScrollReveal from "@components/ScrollReveal.astro";
---

<section
```

- [ ] Step 2: Confirm file exists and starts with the expected import.

### Step 3: Commit

```bash
git add src/sections/academic/program/BiomedicalGamePreviewSection.astro
git commit -m "feat(biomedical): add game preview section component"
```

- [ ] Step 3: Component committed.

---

## Task 2: Wire Section into `/academic/biomedical`

**Files:**
- Modify: `src/pages/academic/biomedical.astro`

### Step 1: Add import

Add this import after the existing `ProgramStrengthsBentoSection` import:

```astro
import BiomedicalGamePreviewSection from "@sections/academic/program/BiomedicalGamePreviewSection.astro";
```

The imports should look like:

```astro
import ProgramStrengthsBentoSection from "@/sections/academic/program/ProgramStrengthsBentoSection.astro";
import BiomedicalGamePreviewSection from "@sections/academic/program/BiomedicalGamePreviewSection.astro";
```

- [ ] Step 1: Import added.

### Step 2: Insert component after strengths

Insert `<BiomedicalGamePreviewSection />` between `ProgramStrengthsSection` and `ProgramStrengthsBentoSection`:

```astro
  <ProgramHeroSection />
  <ProgramMsgFromHead variant="light" />
  <ProgramStrengthsSection />
  <BiomedicalGamePreviewSection />
  <ProgramStrengthsBentoSection />
  <ProgramVisionMissionSection />
```

- [ ] Step 2: Component inserted in the page flow.

### Step 3: Verify the page file

Run:

```bash
grep -n "BiomedicalGamePreviewSection" src/pages/academic/biomedical.astro
```

Expected output (line numbers may vary):

```
14:import BiomedicalGamePreviewSection from "@sections/academic/program/BiomedicalGamePreviewSection.astro";
27:  <BiomedicalGamePreviewSection />
```

- [ ] Step 3: Import and usage are both present.

### Step 4: Commit

```bash
git add src/pages/academic/biomedical.astro
git commit -m "feat(biomedical): insert game preview section on program page"
```

- [ ] Step 4: Page wiring committed.

---

## Task 3: Verify Rendering and Link

**Files:**
- No files changed; manual/visual verification only.

### Step 1: Start dev server

Run:

```bash
bun run astro:dev
```

Wait until the terminal prints the local URL (usually `http://localhost:4322`).

- [ ] Step 1: Dev server is running on `http://localhost:4322`.

### Step 2: Open the page and check the section

In a browser, navigate to:

```
http://localhost:4322/academic/biomedical
```

Scroll to the section after strengths. Confirm:

1. The kicker "Interactive Learning" is visible.
2. The title "What is Biomedical Science?" is visible.
3. The glass card with the animated petri dish is visible.
4. The card body text and "Mulai Petualangan" button are visible.
5. Hovering the card lifts it.
6. Clicking anywhere on the card navigates to `/academic/biomedical/game`.

- [ ] Step 2: Section renders correctly and link works.

### Step 3: Check mobile layout

Use browser dev tools to emulate a mobile viewport (e.g., iPhone SE / 375px width). Confirm:

1. The card stacks into a single column.
2. Text remains readable.
3. The CTA button stays within the card bounds.

- [ ] Step 3: Mobile layout is acceptable.

### Step 4: Run Astro check (optional but recommended)

In another terminal, run:

```bash
bunx astro check
```

Expected: no type errors related to `BiomedicalGamePreviewSection.astro` or `src/pages/academic/biomedical.astro`.

- [ ] Step 4: Astro check passes for modified files.

### Step 5: Stop dev server

Stop the running dev server with `Ctrl+C`.

- [ ] Step 5: Server stopped.

---

## Self-Review

### Spec Coverage

| Spec Requirement | Implementing Task |
|------------------|-------------------|
| Add section on `/academic/biomedical` | Task 2 |
| Place after `ProgramStrengthsSection` | Task 2, Step 2 |
| Header: kicker, title, gradient line, lead copy | Task 1 |
| Glass card with animated SVG preview | Task 1 |
| CTA linking to `/academic/biomedical/game` | Task 1 |
| Entire card clickable | Task 1 (single anchor wrapper) |
| ScrollReveal animation | Task 1 |
| No game page changes | Scope exclusions |
| Responsive layout | Task 1 + Task 3, Step 3 |

### Placeholder Scan

No TBD, TODO, or vague steps. Every step includes exact file paths, code, or commands.

### Type Consistency

- Import alias `@sections/academic/program/BiomedicalGamePreviewSection.astro` matches the file location.
- Props used match `ScrollReveal.astro`'s published interface (`delay` is a number).
- No type errors expected from the new component.

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-06-18-biomedical-game-preview.md`.

Two execution options:

1. **Subagent-Driven (recommended)** — dispatch a fresh subagent per task, review between tasks, fast iteration.
2. **Inline Execution** — execute tasks in this session using executing-plans, batch execution with checkpoints.

Which approach would you like?
