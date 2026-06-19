# ProgramStrengthsBentoSection Alpine + GSAP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor `src/sections/academic/program/ProgramStrengthsBentoSection.astro` to use Alpine.js for declarative state and GSAP (with Flip plugin) for the card-to-panel FLIP animations, inside a `client:visible` Astro island.

**Architecture:** Extract the interactive bento markup into a dedicated Alpine island component that receives data via Astro props. The parent section renders static header/background and imports the island with `client:visible`. Alpine owns state (`activeIndex`, `isAnimating`) and accessibility attributes; GSAP/Flip owns the clone-to-stage morph and panel transitions.

**Tech Stack:** Astro 6, Alpine.js 3, GSAP 3 + Flip plugin, Bun, Tailwind CSS v4

---

## File Structure

- `src/components/ProgramStrengthsBentoIsland.astro` (create)
  - Alpine island component. Contains `x-data`, trigger grid, stage panels, and GSAP-driven FLIP animation script.
- `src/sections/academic/program/ProgramStrengthsBentoSection.astro` (modify)
  - Removes all inline JS and bento markup. Imports `ProgramStrengthsBentoIsland` with `client:visible`.
- `src/alpine-entry.ts` (create)
  - Registers the `bento` Alpine data provider and starts Alpine.
- `astro.config.mjs` (modify)
  - Registers `@astrojs/alpinejs` integration pointing to `src/alpine-entry.ts`.
- `package.json` (modify)
  - Adds `@astrojs/alpinejs`, `alpinejs`, and `gsap`.

---

### Task 1: Install dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Add dependencies**

Run:
```bash
bun add @astrojs/alpinejs alpinejs gsap
```

Expected: `package.json` now lists the three packages under `dependencies`.

- [ ] **Step 2: Verify lockfile**

Run:
```bash
bun install
```

Expected: `bun.lockb` updates without errors.

- [ ] **Step 3: Commit**

```bash
git add package.json bun.lockb
git commit -m "deps: add alpinejs, gsap, and @astrojs/alpinejs integration"
```

---

### Task 2: Register Alpine integration with entrypoint

**Files:**
- Create: `src/alpine-entry.ts`
- Modify: `astro.config.mjs`

- [ ] **Step 1: Create Alpine entrypoint**

Write the following to `src/alpine-entry.ts`:

```ts
import type { Alpine } from 'alpinejs';

export default (Alpine: Alpine) => {
  Alpine.data('bento', () => ({
    items: [] as Array<{
      title: string;
      description: string;
      icon: string;
      number: string;
      expandTo: 'left' | 'right';
    }>,
    activeIndex: 0,

    get activeItem() {
      return this.activeIndex !== null ? this.items[this.activeIndex] : null;
    },

    get activePanel() {
      if (this.activeIndex === null) return null;
      return this.items[this.activeIndex].expandTo;
    },

    init() {
      this.items = JSON.parse(this.$el.dataset.items || '[]');
      this.activeIndex = 0;
    },

    expand(index: number) {
      if (this.activeIndex === index) return;
      this.activeIndex = index;
    },

    close() {
      if (this.activeIndex === null) return;
      this.activeIndex = null;
    },
  }));
};
```

- [ ] **Step 2: Register the entrypoint in Astro config**

Replace the contents of `astro.config.mjs` with:

```js
// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import alpine from "@astrojs/alpinejs";
import path from "node:path";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [alpine({ entrypoint: "/src/alpine-entry.ts" })],
  adapter: node({ mode: "standalone" }),
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
        "@components": path.resolve("./src/components"),
        "@data": path.resolve("./src/data"),
        "@db": path.resolve("./src/db"),
        "@layouts": path.resolve("./src/layouts"),
        "@lib": path.resolve("./src/lib"),
        "@mapsection": path.resolve("./mapsection"),
        "@pages": path.resolve("./src/pages"),
        "@sections": path.resolve("./src/sections"),
        "@styles": path.resolve("./src/styles"),
      },
    },
  },
  output: "server",
});
```

- [ ] **Step 3: Start dev server to verify**

Run:
```bash
bun run astro:dev
```

Expected: server starts on port 4322 with no Alpine integration errors.

- [ ] **Step 4: Commit**

```bash
git add src/alpine-entry.ts astro.config.mjs
git commit -m "config: add alpine entrypoint with bento data provider"
```

---

### Task 3: Create Alpine island shell (state only, no GSAP yet)

**Files:**
- Create: `src/components/ProgramStrengthsBentoIsland.astro`

This task ports the markup and adds Alpine state. Animations remain simple CSS transitions; GSAP is added in Task 5.

- [ ] **Step 1: Create the island component file**

Write the following to `src/components/ProgramStrengthsBentoIsland.astro`:

```astro
---
export interface BentoItem {
  title: string;
  description: string;
  icon: string;
  number: string;
  expandTo: 'left' | 'right';
}

interface Props {
  items: BentoItem[];
}

const { items } = Astro.props;
const itemsJson = JSON.stringify(items).replace(/"/g, '&quot;');
---

<div
  class="bento-island"
  x-data="bento"
  data-items={itemsJson}
  @keydown.escape.window="close()"
  @click.outside="close()"
>
  <!-- Stage -->
  <div class="bento-stage apu-glass-card relative mb-8 flex flex-col min-h-[320px] md:min-h-[520px] p-4 md:p-6">
    <!-- Panels -->
    <div class="bento-panels grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-1">
      <div
        class="bento-panel-left apu-glass-card p-6 md:p-8 flex flex-col justify-center transition-opacity duration-300"
        :class="activePanel === 'left' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
      >
        <span class="text-mono text-[rgb(var(--color-apu-navy))] mb-3" x-text="activeItem?.number ?? ''"></span>
        <p class="text-body-s text-brand-text-muted leading-relaxed" x-text="activeItem?.description ?? ''"></p>
      </div>
      <div
        class="bento-panel-right apu-glass-card p-6 md:p-8 flex flex-col justify-center transition-opacity duration-300"
        :class="activePanel === 'right' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
      >
        <span class="text-mono text-[rgb(var(--color-apu-navy))] mb-3" x-text="activeItem?.number ?? ''"></span>
        <p class="text-body-s text-brand-text-muted leading-relaxed" x-text="activeItem?.description ?? ''"></p>
      </div>
    </div>

    <!-- Empty-state hint -->
    <div
      class="bento-hint absolute inset-0 flex items-center justify-center text-center p-6 transition-opacity duration-300"
      :class="activeIndex === null ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
    >
      <p class="text-body-s text-brand-text-muted">
        Select a strength below to explore what makes Biomedical Science at APU stand out.
      </p>
    </div>

    <!-- Clone layer -->
    <div class="bento-clone-layer absolute inset-0 pointer-events-none" x-ref="cloneLayer"></div>
  </div>

  <!-- Trigger row -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
    {
      items.map((item, index) => (
        <button
          type="button"
          class="bento-trigger apu-glass-card apu-interactive-card text-left p-5 md:p-6 min-h-[140px] md:min-h-[160px] flex flex-col transition-opacity duration-300"
          :class={`activeIndex === ${index} ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'`}
          @click={`expand(${index})`}
          :aria-expanded={`activeIndex === ${index}`}
          data-index={index}
          data-trigger
        >
          <span class="text-mono text-[rgb(var(--color-apu-navy))] mb-3">{item.number}</span>
          <div class="apu-icon-chip h-10 w-10 rounded-lg flex-shrink-0 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              set:html={item.icon}
            />
          </div>
          <h3 class="text-h3 text-brand-primary-deep text-base md:text-lg">{item.title}</h3>
        </button>
      ))
    }
  </div>
</div>
```

- [ ] **Step 2: Verify file syntax**

Run:
```bash
bunx --bun astro check
```

Expected: no TypeScript or Astro errors in the new component.

- [ ] **Step 3: Commit**

```bash
git add src/components/ProgramStrengthsBentoIsland.astro
git commit -m "feat(bento): add alpine island shell with state management"
```

---

### Task 4: Refactor section to use the island

**Files:**
- Modify: `src/sections/academic/program/ProgramStrengthsBentoSection.astro`

- [ ] **Step 1: Replace inline markup with island import**

Replace the contents of `src/sections/academic/program/ProgramStrengthsBentoSection.astro` with:

```astro
---
import ScrollReveal from "@components/ScrollReveal.astro";
import SectionHeader from "@components/SectionHeader.astro";
import BackgroundBlobs from "@components/BackgroundBlobs.astro";
import ProgramStrengthsBentoIsland from "@components/ProgramStrengthsBentoIsland.astro";

const iconMap: Record<string, string> = {
  dna: '<path d="M2 15c6.667-6 13.333 0 20-6"/><path d="M9 22c1.5-2.5 3.5-2.5 5 0"/><path d="M15 2c-1.5 2.5-3.5 2.5-5 0"/><path d="M22 9c-6.667 6-13.333 0-20 6"/>',
  flask: '<path d="M10 2v7.31"/><path d="M14 2v7.31"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  factory: '<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/>',
};

const featured = [
  {
    title: "Interdisciplinary",
    description: "biology + informatics + green technology.",
    icon: iconMap.dna,
  },
  {
    title: "Modern Facilities",
    description: "GLP/GMP-standard (SCCR) laboratory with complete and cutting-edge equipment.",
    icon: iconMap.flask,
  },
  {
    title: "International Educators",
    description: "Globally qualified lecturers active in research and publication.",
    icon: iconMap.globe,
  },
  {
    title: "Industry Orientation",
    description: "Internships, applied projects, and collaboration with biomedical science or industrial partners.",
    icon: iconMap.factory,
  },
].map((item, index) => ({
  ...item,
  number: (index + 1).toString().padStart(2, "0"),
  expandTo: index >= 2 ? ('left' as const) : ('right' as const),
}));
---

<section
  id="keunggulan-bento"
  class="apu-section-shell py-24 md:py-32 bg-gradient-to-b from-brand-surface via-brand-surface-alt to-brand-surface-soft"
>
  <BackgroundBlobs seed="ProgramStrengthsBentoSection" />
  <div class="content-max relative z-10">
    <ScrollReveal>
      <SectionHeader
        kicker="WHY US"
        title="Why Study Biomedical Science at APU?"
        description="A curriculum combining molecular biology, information technology, and sustainable industrial engineering to tackle global challenges."
        class="text-center mb-12"
        titleClass="text-h2 text-[rgb(var(--color-apu-navy))] mb-4"
      />
    </ScrollReveal>

    <ProgramStrengthsBentoIsland items={featured} client:visible />
  </div>
</section>
```

- [ ] **Step 2: Verify dev server renders the section**

Run:
```bash
bun run astro:dev
```

Then open `http://localhost:4322` (or the relevant program page) and confirm:
- Section header renders.
- Four trigger cards render.
- First item content appears in the stage panel.
- Clicking another trigger swaps the panel content.

- [ ] **Step 3: Commit**

```bash
git add src/sections/academic/program/ProgramStrengthsBentoSection.astro
git commit -m "refactor(bento): use ProgramStrengthsBentoIsland with client:visible"
```

---

### Task 5: Implement GSAP Flip animation in Alpine entrypoint

**Files:**
- Modify: `src/alpine-entry.ts`
- Modify: `src/components/ProgramStrengthsBentoIsland.astro` (styles only)

- [ ] **Step 1: Replace entrypoint with full bento logic**

Replace the contents of `src/alpine-entry.ts` with:

```ts
import type { Alpine } from 'alpinejs';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);

export default (Alpine: Alpine) => {
  Alpine.data('bento', () => ({
    items: [] as Array<{
      title: string;
      description: string;
      icon: string;
      number: string;
      expandTo: 'left' | 'right';
    }>,
    activeIndex: 0,
    isAnimating: false,
    clone: null as HTMLElement | null,
    resizeObserver: null as ResizeObserver | null,

    get activeItem() {
      return this.activeIndex !== null ? this.items[this.activeIndex] : null;
    },

    get activePanel() {
      if (this.activeIndex === null) return null;
      return this.items[this.activeIndex].expandTo;
    },

    init() {
      this.items = JSON.parse(this.$el.dataset.items || '[]');
      this.activeIndex = 0;

      this.resizeObserver = new ResizeObserver(() => {
        if (this.activeIndex !== null && !this.isAnimating) {
          this.collapse().then(() => {
            this.activeIndex = null;
          });
        }
      });
      this.resizeObserver.observe(this.$el);
    },

    destroy() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
    },

    async expand(index: number) {
      if (this.isAnimating || this.activeIndex === index) return;
      this.isAnimating = true;

      const trigger = this.$el.querySelector(`[data-index="${index}"][data-trigger]`) as HTMLElement | null;
      if (!trigger) {
        this.isAnimating = false;
        return;
      }

      if (this.activeIndex !== null) {
        await this.collapse();
      }

      // Capture trigger state BEFORE Alpine hides it.
      const state = Flip.getState(trigger);

      this.clone = this.createClone(trigger);
      this.$refs.cloneLayer.appendChild(this.clone);

      this.activeIndex = index;
      await this.$nextTick();

      this.positionCloneOverPanel(this.clone);

      Flip.from(state, {
        targets: this.clone,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          this.isAnimating = false;
        },
      });
    },

    async close() {
      if (this.isAnimating || this.activeIndex === null) return;
      this.isAnimating = true;
      const closedIndex = this.activeIndex;
      await this.collapse();
      this.activeIndex = null;
      this.isAnimating = false;

      const trigger = this.$el.querySelector(`[data-index="${closedIndex}"][data-trigger]`) as HTMLElement | null;
      if (trigger) trigger.focus();
    },

    collapse() {
      return new Promise<void>((resolve) => {
        if (!this.clone || this.activeIndex === null) {
          resolve();
          return;
        }

        const trigger = this.$el.querySelector(`[data-index="${this.activeIndex}"][data-trigger]`) as HTMLElement | null;
        if (!trigger) {
          this.clone.remove();
          this.clone = null;
          resolve();
          return;
        }

        const state = Flip.getState(this.clone);
        this.positionCloneOverTrigger(this.clone, trigger);

        Flip.from(state, {
          targets: this.clone,
          duration: 0.4,
          ease: 'power2.inOut',
          onComplete: () => {
            if (this.clone) {
              this.clone.remove();
              this.clone = null;
            }
            resolve();
          },
        });
      });
    },

    createClone(trigger: HTMLElement) {
      const stage = this.$el.querySelector('.bento-stage') as HTMLElement;
      const stageRect = stage.getBoundingClientRect();
      const triggerRect = trigger.getBoundingClientRect();

      const el = trigger.cloneNode(true) as HTMLElement;
      el.classList.add('bento-clone');
      el.classList.remove('apu-interactive-card');
      el.style.position = 'absolute';
      el.style.top = `${triggerRect.top - stageRect.top}px`;
      el.style.left = `${triggerRect.left - stageRect.left}px`;
      el.style.width = `${triggerRect.width}px`;
      el.style.height = `${triggerRect.height}px`;
      el.style.margin = '0';
      el.style.zIndex = '20';
      el.style.pointerEvents = 'auto';
      el.setAttribute('aria-expanded', 'true');

      const closeBtn = document.createElement('button');
      closeBtn.type = 'button';
      closeBtn.className = 'absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-[rgb(var(--color-apu-navy))] text-[rgb(var(--color-apu-accent))] text-lg leading-none';
      closeBtn.setAttribute('aria-label', 'Close detail');
      closeBtn.innerHTML = '&times;';
      closeBtn.addEventListener('click', (e: Event) => {
        e.stopPropagation();
        this.close();
      });
      el.appendChild(closeBtn);

      return el;
    },

    positionCloneOverPanel(clone: HTMLElement) {
      const stage = this.$el.querySelector('.bento-stage') as HTMLElement;
      const stageRect = stage.getBoundingClientRect();
      const panelClass = this.activePanel === 'left' ? '.bento-panel-left' : '.bento-panel-right';
      const panel = this.$el.querySelector(panelClass) as HTMLElement;
      const panelRect = panel.getBoundingClientRect();

      clone.style.top = `${panelRect.top - stageRect.top}px`;
      clone.style.left = `${panelRect.left - stageRect.left}px`;
      clone.style.width = `${panelRect.width}px`;
      clone.style.height = `${panelRect.height}px`;
    },

    positionCloneOverTrigger(clone: HTMLElement, trigger: HTMLElement) {
      const stage = this.$el.querySelector('.bento-stage') as HTMLElement;
      const stageRect = stage.getBoundingClientRect();
      const triggerRect = trigger.getBoundingClientRect();

      clone.style.top = `${triggerRect.top - stageRect.top}px`;
      clone.style.left = `${triggerRect.left - stageRect.left}px`;
      clone.style.width = `${triggerRect.width}px`;
      clone.style.height = `${triggerRect.height}px`;
    },
  }));
};
```

- [ ] **Step 2: Add clone-specific styles to the island**

Append the following `<style>` block to `src/components/ProgramStrengthsBentoIsland.astro`:

```astro
<style>
  .bento-clone {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: none;
  }
  .bento-clone h3 {
    font-size: 1.5rem !important;
    line-height: 1.2;
  }
  .bento-clone .apu-icon-chip {
    width: 3rem;
    height: 3rem;
  }
  .bento-clone .apu-icon-chip svg {
    width: 20px;
    height: 20px;
  }
  .bento-clone [class*="text-mono"] {
    font-size: 0.875rem;
  }

  @media (min-width: 768px) {
    .bento-clone h3 {
      font-size: 3rem !important;
    }
    .bento-clone .apu-icon-chip {
      width: 3.5rem;
      height: 3.5rem;
    }
    .bento-clone .apu-icon-chip svg {
      width: 28px;
      height: 28px;
    }
    .bento-clone [class*="text-mono"] {
      font-size: 1rem;
    }
  }
</style>
```

- [ ] **Step 3: Verify animation behavior**

Run:
```bash
bun run astro:dev
```

Open the program page and confirm:
- First item clone expands from trigger to stage panel on hydration.
- Clicking another trigger animates the clone back to its source, then expands the new trigger to the opposite panel.
- Close button animates the clone back to its trigger and shows the empty-state hint.
- Resize the browser while an item is expanded: the clone collapses and the empty hint appears.
- Press Escape or click outside: the active item closes and focus returns to the trigger.
- Icon and title inside the clone scale naturally during the animation; if they appear to snap, adjust `.bento-clone` transitions or let GSAP animate the clone's `scaleX/scaleY` instead of width/height.

- [ ] **Step 4: Commit**

```bash
git add src/alpine-entry.ts src/components/ProgramStrengthsBentoIsland.astro
git commit -m "feat(bento): add gsap flip clone-to-stage animation"
```

---

### Task 6: Build and performance verification

**Files:**
- None (verification only)

- [ ] **Step 1: Run production build**

Run:
```bash
bun run build
```

Expected: build completes with no errors.

- [ ] **Step 2: Preview and manually test**

Run:
```bash
bun run preview
```

Open the program page and verify all acceptance criteria:
- [ ] First bento item opens automatically.
- [ ] Clicking another trigger swaps the active item smoothly.
- [ ] Close button, outside click, and Escape all close the active item.
- [ ] Focus moves correctly on open/close.
- [ ] Mobile layout animates correctly.
- [ ] No layout shift during hydration.

- [ ] **Step 3: Check bundle size**

Run:
```bash
bunx --bun astro build --config astro.config.static.mjs
```

Inspect `dist/client/` JS chunks for Alpine and GSAP. Confirm they are separate from the main entry chunk.

- [ ] **Step 4: Commit verification notes (optional)**

If any adjustments are needed, fix and commit. Otherwise no new commit.

---

## Self-Review Checklist

- [ ] **Spec coverage:** Every section of `docs/superpowers/specs/2026-06-19-program-strengths-bento-alpine-gsap-design.md` maps to at least one task.
- [ ] **No placeholders:** No "TBD", "TODO", or "implement later" in the plan.
- [ ] **Type consistency:** `expandTo` is always `'left' | 'right'`, `activeIndex` is `number | null`, `items` shape matches between section and island.
- [ ] **Dependency alignment:** `@astrojs/alpinejs`, `alpinejs`, and `gsap` are installed and registered.
- [ ] **Island hydration:** `client:visible` is used on the island import in the section.
