# ScholarshipAbout Section Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace `src/sections/scholarship/ScholarshipAbout.astro` with the approved cap-on-podium design.

**Architecture:** Single Astro section component. Markup is self-contained; styles use existing Tailwind/design-system tokens plus one local SVG illustration. No new data files or shared components needed.

**Tech Stack:** Astro, Tailwind v4, existing `ScrollReveal` and `BackgroundBlobs` components.

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `src/sections/scholarship/ScholarshipAbout.astro` | Replace | New section markup, SVG cap, podium, copy. |
| `docs/superpowers/specs/2026-06-24-scholarship-about-redesign.md` | Reference | Approved design spec. |

---

## Task 1: Rewrite ScholarshipAbout.astro

**Files:**
- Modify: `src/sections/scholarship/ScholarshipAbout.astro`

- [ ] **Step 1: Replace the file contents with the new component**

```astro
---
import ScrollReveal from "@components/ScrollReveal.astro";
import BackgroundBlobs from "@components/BackgroundBlobs.astro";
---

<section
  id="about"
  class="apu-section-shell relative isolate overflow-hidden bg-gradient-to-b from-brand-surface via-[rgb(var(--color-apu-navy)_/_0.03)] to-brand-surface-alt py-24 md:py-32 before:content-[''] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgb(var(--color-apu-accent)_/_0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgb(var(--color-apu-navy)_/_0.16),transparent_38%)] after:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[rgb(var(--color-apu-accent)_/_0.65)] after:to-transparent"
>
  <BackgroundBlobs seed="ScholarshipAbout" />
  <div class="pointer-events-none absolute inset-0 overflow-hidden">
    <div class="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[rgb(var(--color-apu-accent)_/_0.14)] blur-3xl"></div>
    <div class="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[rgb(var(--color-apu-navy)_/_0.12)] blur-3xl"></div>
  </div>

  <div class="content-max relative z-10">
    <!-- Heading + subtitle -->
    <ScrollReveal>
      <div class="text-center mb-10 md:mb-14">
        <h2 class="text-h2 text-[rgb(var(--color-apu-navy))] mb-4">
          We reward academic excellency
        </h2>
        <p class="text-body text-brand-text-muted max-w-2xl mx-auto leading-relaxed">
          The APU Academic Scholarship is designed to recognize and support high-achieving students who want to continue their studies at a quality university.
        </p>
      </div>
    </ScrollReveal>

    <!-- Cap + podium illustration -->
    <ScrollReveal delay={150}>
      <div
        class="flex flex-col items-center"
        role="img"
        aria-label="Academic scholarship podium with a graduation cap on the first place block"
      >
        <!-- Graduation cap -->
        <div class="relative z-10 mb-[-1.25rem] md:mb-[-1.75rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="72"
            viewBox="0 0 96 72"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-20 h-16 md:w-24 md:h-[4.5rem] text-[rgb(var(--color-apu-navy))]"
          >
            <path d="M4 28 L48 8 L92 28 L48 48 Z" />
            <path d="M14 34 v12 c0 10 34 18 68 0 v-12" />
            <path d="M48 48 v14" />
            <circle cx="48" cy="62" r="4" />
          </svg>
          <span
            class="pointer-events-none absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[0.65rem] md:text-[0.75rem] font-bold bg-gradient-to-r from-[rgb(252_188_85)] to-[rgb(200_130_40)] bg-clip-text text-transparent"
            style="font-family: 'Space Grotesk', sans-serif;"
          >
            50% SPI
          </span>
        </div>

        <!-- Podium -->
        <div class="flex items-end gap-2 md:gap-4">
          <!-- 2nd -->
          <div
            class="flex h-20 w-16 md:h-28 md:w-20 items-center justify-center rounded-xl border border-[rgb(var(--color-brand-border)_/_0.5)] bg-[rgb(var(--color-brand-surface-soft))] shadow-[0_8px_24px_rgb(var(--color-apu-navy)_/_0.08)]"
          >
            <span class="font-display text-2xl md:text-3xl font-semibold text-brand-text-muted">2</span>
          </div>

          <!-- 1st -->
          <div
            class="flex h-32 w-20 md:h-44 md:w-28 items-center justify-center rounded-2xl border border-[rgb(252_188_85_/_0.8)] bg-[rgb(var(--color-apu-accent))] shadow-[0_12px_32px_rgb(var(--color-apu-navy)_/_0.12)]"
          >
            <span class="font-display text-4xl md:text-5xl font-semibold text-[rgb(var(--color-apu-navy))]">1</span>
          </div>

          <!-- 3rd -->
          <div
            class="flex h-16 w-16 md:h-24 md:w-20 items-center justify-center rounded-xl border border-[rgb(180_130_100_/_0.5)] bg-[rgb(212_164_127)] shadow-[0_8px_24px_rgb(var(--color-apu-navy)_/_0.08)]"
          >
            <span class="font-display text-2xl md:text-3xl font-semibold text-[rgb(90_55_35)]">3</span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  </div>
</section>
```

- [ ] **Step 2: Verify no syntax errors**

Run: `bunx --bun astro check`
Expected: no TypeScript/Astro errors in `ScholarshipAbout.astro`.

---

## Task 2: Validate the page builds

**Files:**
- Verify: `src/pages/admission/academic-scholarship.astro`

- [ ] **Step 1: Build the static frontend**

Run: `bun run build:frontend`
Expected: build completes without errors and the scholarship page is emitted.

- [ ] **Step 2: Commit**

```bash
git add src/sections/scholarship/ScholarshipAbout.astro
git commit -m "feat(scholarship): redesign ScholarshipAbout with cap-on-podium illustration"
```

---

## Spec Coverage Check

| Spec Requirement | Task |
|------------------|------|
| Heading: "We reward academic excellency" | Task 1 |
| Subtitle reuses existing copy | Task 1 |
| Graduation cap replaces trophy | Task 1 (inline SVG) |
| 50% SPI in gold on cap | Task 1 (gradient text overlay) |
| Podium 1/2/3, center tallest | Task 1 |
| Section shell + tokens preserved | Task 1 |
| Accessibility: role/aria-label | Task 1 |
| Build verification | Task 2 |
