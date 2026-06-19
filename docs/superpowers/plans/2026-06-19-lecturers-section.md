# LecturersSection Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single reusable `LecturersSection` Astro component and its constants file, combining a featured-researcher card with a faculty-directory carousel.

**Architecture:** One section component (`src/sections/LecturersSection.astro`) renders a dark featured-researcher card and a scrollable carousel of faculty cards. Copy and featured-lecturer metadata live in `src/data/lecturers-section.ts`; the directory reuses the existing `src/data/lecturers.ts` array. Client-side carousel controls are implemented with a small inline script using native `scrollBy`. Visual behavior is validated with `astro check` and `astro build`.

**Tech Stack:** Astro 6, Tailwind CSS v4, TypeScript, Bun.

---

## File Structure

| File | Responsibility |
|------|----------------|
| `src/data/lecturers-section.ts` | Hardcoded section copy and featured-lecturer metadata. Imports the existing `lecturers` array and selects the featured entry. |
| `src/sections/LecturersSection.astro` | Combined section component: featured card + directory header + carousel. |
| `src/pages/lecturers-preview.astro` | Temporary preview page used only for visual verification; deleted before finishing. |

---

## Task 1: Create the constants file

**Files:**
- Create: `src/data/lecturers-section.ts`

- [ ] **Step 1: Write the constants file**

```typescript
import { lecturers } from './lecturers';

export const featuredLecturerId = 'marcus-chen';

const featured = lecturers.find((l) => l.id === featuredLecturerId);
if (!featured) {
  throw new Error(`Featured lecturer "${featuredLecturerId}" not found in lecturers.ts`);
}

export { featured as featuredLecturer };

export const sectionCopy = {
  meta: {
    title: 'Lecturers | Agung Putra University',
    description:
      'Meet the internationally qualified faculty and researchers at Agung Putra University.',
  },
  featured: {
    kicker: 'Featured Researcher',
    department: 'Department of Constitutional Law',
    pastExperience: {
      label: 'Past Experience',
      items: [
        'Ph.D. in Constitutional Law, University of Melbourne',
        'Visiting Scholar, Max Planck Institute',
        'Senior Legal Advisor, ASEAN Secretariat',
      ],
    },
    notableResearch: {
      label: 'Notable Research',
      text: 'Leading comparative research on constitutional reform and human-rights frameworks in Southeast Asia, with published work on judicial independence and democratic transitions.',
    },
    ctas: {
      primary: { label: 'View Full Portfolio', href: '#' },
      secondary: { label: 'Contact Office', href: '#' },
    },
  },
  directory: {
    kicker: 'Faculty Directory',
    title: 'Faculty Directory',
    description:
      'Browse our world-class team of educators and researchers guiding the next generation.',
    viewProfileLabel: 'View Profile',
  },
} as const;
```

- [ ] **Step 2: Verify the constants file compiles**

Run:

```bash
bunx tsc --noEmit src/data/lecturers-section.ts
```

Expected: no TypeScript errors.

---

## Task 2: Create the section component

**Files:**
- Create: `src/sections/LecturersSection.astro`

- [ ] **Step 1: Write the component**

```astro
---
import SectionHeader from '@components/SectionHeader.astro';
import CtaButton from '@components/CtaButton.astro';
import ScrollReveal from '@components/ScrollReveal.astro';
import { lecturers } from '@data/lecturers';
import { featuredLecturer, sectionCopy } from '@data/lecturers-section';

const { featured, directory } = sectionCopy;
---

<section
  id="lecturers"
  class="apu-section-shell relative overflow-hidden bg-brand-surface py-24 md:py-32"
  aria-labelledby="lecturers-directory-title"
>
  <div class="content-max">
    {/* Featured researcher */}
    <ScrollReveal>
      <div class="apu-glass-card lecturers-featured-card mb-20 overflow-hidden">
        <div class="grid gap-8 p-8 md:grid-cols-2 md:gap-10 md:p-12">
          <div class="flex flex-col justify-center order-2 md:order-1">
            <span class="apu-pill-badge mb-6 self-start">{featured.kicker}</span>
            <h2 class="text-h2 mb-3 text-white">
              {featuredLecturer.name}
            </h2>
            <p class="text-body mb-6 text-[rgb(var(--color-apu-accent))]">
              {featuredLecturer.role} — {featured.department}
            </p>

            <div class="mb-6">
              <h3 class="text-caption mb-3 text-white/70 uppercase tracking-widest">
                {featured.pastExperience.label}
              </h3>
              <ul class="space-y-2">
                {featured.pastExperience.items.map((item) => (
                  <li class="flex items-start gap-3 text-body-s text-white/90">
                    <span
                      class="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[rgb(var(--color-apu-accent))]"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div class="mb-8">
              <h3 class="text-caption mb-3 text-white/70 uppercase tracking-widest">
                {featured.notableResearch.label}
              </h3>
              <p class="text-body-s text-white/90 leading-relaxed">
                {featured.notableResearch.text}
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-4">
              <CtaButton
                href={featured.ctas.primary.href}
                variant="primary"
                withArrow
              >
                {featured.ctas.primary.label}
              </CtaButton>
              <CtaButton
                href={featured.ctas.secondary.href}
                variant="secondary"
              >
                {featured.ctas.secondary.label}
              </CtaButton>
            </div>
          </div>

          <div class="relative order-1 md:order-2">
            <div class="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 md:aspect-auto md:h-full">
              <img
                src={featuredLecturer.image}
                alt={`Portrait of ${featuredLecturer.name}`}
                class="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>

    {/* Faculty directory */}
    <div class="flex items-end justify-between gap-6 mb-10">
      <ScrollReveal class="flex-1">
        <SectionHeader
          kicker={directory.kicker}
          title={directory.title}
          description={directory.description}
          class="text-left mb-0"
          titleClass="text-h2 text-brand-primary-deep mb-4"
          descriptionClass="text-body text-brand-text-muted max-w-xl leading-relaxed"
          dividerClass="apu-gradient-line mt-4 w-16 sm:w-24 md:w-32 lg:w-48"
        />
      </ScrollReveal>

      <div class="hidden md:flex items-center gap-2" data-lecturers-carousel="controls">
        <button
          type="button"
          data-lecturers-prev
          aria-label="Previous lecturers"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-border bg-white/80 text-brand-primary-deep shadow-sm transition hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-apu-accent))]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        <button
          type="button"
          data-lecturers-next
          aria-label="Next lecturers"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-border bg-white/80 text-brand-primary-deep shadow-sm transition hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-apu-accent))]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>

    <ScrollReveal delay={150}>
      <div class="relative" data-lecturers-carousel>
        <div
          data-lecturers-track
          class="lecturers-track flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6"
          tabindex="0"
          aria-label="Faculty directory carousel"
        >
          {lecturers.map((lecturer) => (
            <article class="apu-glass-card apu-interactive-card w-[82%] flex-shrink-0 snap-start p-5 sm:w-[47%] lg:w-[calc(25%-0.75rem)]">
              <div class="aspect-[3/4] overflow-hidden rounded-xl mb-5">
                <img
                  src={lecturer.image}
                  alt={`Portrait of ${lecturer.name}`}
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 class="text-h3 text-brand-text mb-1 text-lg">
                {lecturer.name}
              </h3>
              <p class="text-caption text-brand-text-muted mb-4">
                {lecturer.role}
              </p>
              <a
                href="#"
                class="text-caption font-medium text-brand-primary-deep hover:text-[rgb(var(--color-apu-accent))] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-apu-accent))] rounded"
              >
                {directory.viewProfileLabel} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
</section>

<script>
  (function () {
    const carousels = document.querySelectorAll('[data-lecturers-carousel]');

    carousels.forEach((root) => {
      const track = root.querySelector('[data-lecturers-track]') as HTMLElement | null;
      const prev = root.parentElement?.querySelector('[data-lecturers-prev]') as HTMLButtonElement | null;
      const next = root.parentElement?.querySelector('[data-lecturers-next]') as HTMLButtonElement | null;

      if (!track) return;

      const scrollStep = () => track.clientWidth;

      const scrollBy = (direction: number) => {
        track.scrollBy({ left: direction * scrollStep(), behavior: 'smooth' });
      };

      prev?.addEventListener('click', () => scrollBy(-1));
      next?.addEventListener('click', () => scrollBy(1));

      track.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          scrollBy(-1);
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          scrollBy(1);
        }
      });
    });
  })();
</script>

<style>
  .lecturers-featured-card {
    --apu-card-bg: rgb(var(--color-apu-navy));
    --apu-card-border: rgb(var(--color-apu-accent) / 0.22);
    --apu-card-shadow: 0 28px 80px rgb(var(--color-apu-navy) / 0.35);
    --apu-btn-primary-bg: rgb(var(--color-apu-accent));
    --apu-btn-primary-color: rgb(var(--color-apu-navy));
    --apu-btn-primary-hover-bg: rgb(var(--color-base-surface));
    --apu-btn-primary-hover-color: rgb(var(--color-apu-navy));
  }

  .lecturers-track {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .lecturers-track::-webkit-scrollbar {
    display: none;
  }
</style>
```

- [ ] **Step 2: Run type check**

Run:

```bash
bunx astro check
```

Expected: no type errors related to `LecturersSection` or `lecturers-section.ts`.

---

## Task 3: Create a temporary preview page

**Files:**
- Create: `src/pages/lecturers-preview.astro`

- [ ] **Step 1: Write the preview page**

```astro
---
import MainLayout from '@layouts/MainLayout.astro';
import LecturersSection from '@sections/LecturersSection.astro';
import { sectionCopy } from '@data/lecturers-section';
---

<MainLayout title={sectionCopy.meta.title} description={sectionCopy.meta.description}>
  <main>
    <LecturersSection />
  </main>
</MainLayout>
```

- [ ] **Step 2: Build the project**

Run:

```bash
bun run astro:build
```

Expected: build completes successfully and `dist/lecturers-preview/index.html` exists.

- [ ] **Step 3: Visually verify (optional)**

Run:

```bash
bun run astro:preview
```

Open `http://localhost:4322/lecturers-preview` in a browser. Confirm:
- Featured researcher card renders with navy background, accent text, and two CTAs.
- Directory carousel shows lecturer cards and responds to previous / next buttons.
- Layout is responsive (stacked on mobile, two-column hero on desktop).

---

## Task 4: Clean up the preview page

**Files:**
- Delete: `src/pages/lecturers-preview.astro`

- [ ] **Step 1: Remove the preview page**

```bash
rm src/pages/lecturers-preview.astro
```

- [ ] **Step 2: Re-run the build to confirm the section still compiles standalone**

```bash
bun run astro:build
```

Expected: build succeeds.

---

## Spec Coverage Check

| Spec requirement | Task that implements it |
|------------------|-------------------------|
| Single reusable section component | Task 2 |
| Hardcoded copy in constants file | Task 1 |
| Featured-researcher card | Task 2, Block A |
| Faculty directory carousel | Task 2, Block B |
| Reuse `src/data/lecturers.ts` | Task 1 (featured lookup) + Task 2 (directory map) |
| APU design tokens / primitives | Task 2 markup and style block |
| Responsive behavior | Task 2 grid + carousel width classes |
| Accessibility (focus, alt, headings) | Task 2 markup |
| Verification | Task 3 + Task 4 |

## Placeholder Scan

- No "TBD", "TODO", or "implement later" strings.
- All CTAs use `#` as an explicit placeholder; this matches the spec's out-of-scope note.
- All file paths and commands are exact.
