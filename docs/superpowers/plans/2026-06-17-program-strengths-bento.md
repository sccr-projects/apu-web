# Program Strengths Bento Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace `src/sections/academic/program/ProgramStrengthsBentoSection.astro` with an interactive click-to-expand bento section: four cards in a bottom row; clicking a card animates it up into a large stage while its description appears on the opposite side.

**Architecture:** A single Astro component renders static markup for the header, stage, and bottom-row cards. A client `<script>` handles click/keyboard events, creates a FLIP-animated clone of the clicked card, moves it into the stage, and toggles the description panel. No external JS dependencies.

**Tech Stack:** Astro, Tailwind v4, project CSS primitives, vanilla JS inside `<script>`.

---

## File structure

- **Modify:** `src/sections/academic/program/ProgramStrengthsBentoSection.astro`
- **No new files required.**

---

## Task 1: Rewrite the component markup

**Files:**
- Modify: `src/sections/academic/program/ProgramStrengthsBentoSection.astro`

- [ ] **Step 1: Replace the file contents with the new markup**

```astro
---
import ScrollReveal from "@components/ScrollReveal.astro";
import SectionHeader from "@components/SectionHeader.astro";

const iconMap: Record<string, string> = {
  dna: '<path d="M2 15c6.667-6 13.333 0 20-6"/><path d="M9 22c1.5-2.5 3.5-2.5 5 0"/><path d="M15 2c-1.5 2.5-3.5 2.5-5 0"/><path d="M22 9c-6.667 6-13.333 0-20 6"/>',
  flask: '<path d="M10 2v7.31"/><path d="M14 2v7.31"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  factory: '<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/>',
};

const featured = [
  {
    title: "Interdisciplinary",
    description: "Medical biotech + informatics + industrial biotech with green technology.",
    icon: "dna",
  },
  {
    title: "Modern Facilities",
    description: "GLP/GMP-standard (SCCR) laboratory with complete and cutting-edge equipment.",
    icon: "flask",
  },
  {
    title: "International Educators",
    description: "Globally qualified lecturers active in research and publication.",
    icon: "globe",
  },
  {
    title: "Industry Orientation",
    description: "Internships, applied projects, and collaboration with biotechnology industry partners.",
    icon: "factory",
  },
];
---

<section
  id="keunggulan-bento"
  class="apu-section-shell motion-aurora-shell py-24 md:py-32 bg-gradient-to-b from-brand-surface via-brand-surface-alt to-brand-surface-soft"
  data-bento-section
>
  <div class="content-max relative z-10">
    <ScrollReveal>
      <SectionHeader
        kicker="WHY US"
        title="Why Biotechnology at APU?"
        description="A curriculum combining molecular biology, information technology, and sustainable industrial engineering to tackle global challenges."
        class="text-center mb-12"
        titleClass="text-h2 text-[rgb(var(--color-apu-navy))] mb-4"
      />
    </ScrollReveal>

    <!-- Stage -->
    <div
      class="bento-stage apu-glass-card relative mb-8 min-h-[320px] md:min-h-[520px] p-4 md:p-6"
      data-bento-stage
    >
      <!-- Panels -->
      <div class="bento-panels grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 h-full">
        <div
          class="bento-panel-left apu-glass-card hidden opacity-0 transition-opacity duration-500 p-6 md:p-8 flex flex-col justify-center"
          data-panel="left"
        >
          <span class="text-mono text-[rgb(var(--color-apu-navy))] mb-3" data-desc-number></span>
          <p class="text-body-s text-brand-text-muted leading-relaxed" data-desc-text></p>
        </div>
        <div
          class="bento-panel-right apu-glass-card hidden opacity-0 transition-opacity duration-500 p-6 md:p-8 flex flex-col justify-center"
          data-panel="right"
        >
          <span class="text-mono text-[rgb(var(--color-apu-navy))] mb-3" data-desc-number></span>
          <p class="text-body-s text-brand-text-muted leading-relaxed" data-desc-text></p>
        </div>
      </div>

      <!-- Empty-state hint -->
      <div
        class="bento-hint absolute inset-0 flex items-center justify-center text-center p-6"
        data-bento-hint
      >
        <p class="text-body-s text-brand-text-muted">
          Select a strength below to explore what makes Biotechnology at APU stand out.
        </p>
      </div>

      <!-- Moving clone container -->
      <div class="bento-clone-layer absolute inset-0 pointer-events-none" data-clone-layer></div>
    </div>

    <!-- Bottom row -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" role="list" data-bento-row>
      {
        featured.map((item, index) => {
          const number = (index + 1).toString().padStart(2, "0");
          const isRightHalf = index >= 2;
          return (
            <button
              type="button"
              class="bento-trigger apu-glass-card apu-interactive-card text-left p-5 md:p-6 min-h-[140px] md:min-h-[160px] flex flex-col"
              role="listitem"
              data-index={index}
              data-title={item.title}
              data-description={item.description}
              data-icon={item.icon}
              data-number={number}
              data-expand-to={isRightHalf ? "left" : "right"}
              aria-expanded="false"
            >
              <span class="text-mono text-[rgb(var(--color-apu-navy))] mb-3">{number}</span>
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
                  set:html={iconMap[item.icon] || iconMap['dna']}
                />
              </div>
              <h3 class="text-h3 text-brand-primary-deep text-base md:text-lg">{item.title}</h3>
            </button>
          );
        })
      }
    </div>
  </div>
</section>

<script>
  (function () {
    const section = document.querySelector('[data-bento-section]');
    if (!section) return;

    const stage = section.querySelector('[data-bento-stage]') as HTMLElement | null;
    const row = section.querySelector('[data-bento-row]') as HTMLElement | null;
    const cloneLayer = section.querySelector('[data-clone-layer]') as HTMLElement | null;
    const hint = section.querySelector('[data-bento-hint]') as HTMLElement | null;
    const leftPanel = section.querySelector('[data-panel="left"]') as HTMLElement | null;
    const rightPanel = section.querySelector('[data-panel="right"]') as HTMLElement | null;
    const triggers = Array.from(section.querySelectorAll('[data-bento-trigger]')) as HTMLElement[];

    if (!stage || !row || !cloneLayer || !hint || !leftPanel || !rightPanel) return;

    let activeIndex: number | null = null;
    let clone: HTMLElement | null = null;

    function hideHint() {
      hint.style.opacity = '0';
      hint.style.pointerEvents = 'none';
    }

    function showHint() {
      hint.style.opacity = '1';
      hint.style.pointerEvents = 'auto';
    }

    function hidePanels() {
      leftPanel.classList.add('hidden', 'opacity-0');
      rightPanel.classList.add('hidden', 'opacity-0');
    }

    function showPanel(side: 'left' | 'right', number: string, description: string) {
      const panel = side === 'left' ? leftPanel : rightPanel;
      const other = side === 'left' ? rightPanel : leftPanel;
      const numberEl = panel.querySelector('[data-desc-number]') as HTMLElement;
      const textEl = panel.querySelector('[data-desc-text]') as HTMLElement;
      if (numberEl) numberEl.textContent = number;
      if (textEl) textEl.textContent = description;
      other.classList.add('hidden', 'opacity-0');
      panel.classList.remove('hidden');
      requestAnimationFrame(() => panel.classList.remove('opacity-0'));
    }

    function createClone(trigger: HTMLElement) {
      const rect = trigger.getBoundingClientRect();
      const stageRect = stage.getBoundingClientRect();
      const el = trigger.cloneNode(true) as HTMLElement;
      el.classList.add('bento-clone');
      el.classList.remove('apu-interactive-card');
      el.style.position = 'absolute';
      el.style.top = `${rect.top - stageRect.top}px`;
      el.style.left = `${rect.left - stageRect.left}px`;
      el.style.width = `${rect.width}px`;
      el.style.height = `${rect.height}px`;
      el.style.margin = '0';
      el.style.transition = 'none';
      el.style.zIndex = '20';
      el.style.pointerEvents = 'auto';
      el.setAttribute('aria-expanded', 'true');

      // Replace small title with larger title for expanded state
      const title = el.querySelector('h3');
      if (title) {
        title.classList.remove('text-base', 'md:text-lg');
        title.classList.add('text-xl', 'md:text-3xl');
      }

      // Add close button
      const close = document.createElement('button');
      close.type = 'button';
      close.className = 'absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-[rgb(var(--color-apu-navy))] text-[rgb(var(--color-apu-accent))] text-lg leading-none';
      close.setAttribute('aria-label', 'Close detail');
      close.innerHTML = '&times;';
      close.addEventListener('click', (e) => {
        e.stopPropagation();
        closeExpanded();
      });
      el.appendChild(close);

      return el;
    }

    function expand(trigger: HTMLElement) {
      const index = Number(trigger.dataset.index);
      if (activeIndex === index) return;
      if (activeIndex !== null) {
        // Switching: remove old clone, reset old trigger
        removeClone();
      }

      activeIndex = index;
      triggers.forEach((t) => {
        t.setAttribute('aria-expanded', 'false');
        t.classList.remove('opacity-0', 'pointer-events-none');
      });
      trigger.setAttribute('aria-expanded', 'true');
      trigger.classList.add('opacity-0', 'pointer-events-none');

      hideHint();
      clone = createClone(trigger);
      cloneLayer.appendChild(clone);

      const targetSide = trigger.dataset.expandTo as 'left' | 'right';
      const targetPanel = targetSide === 'left' ? leftPanel : rightPanel;
      const targetRect = targetPanel.getBoundingClientRect();
      const stageRect = stage.getBoundingClientRect();

      requestAnimationFrame(() => {
        clone.style.transition = 'top 500ms cubic-bezier(0.16, 1, 0.3, 1), left 500ms cubic-bezier(0.16, 1, 0.3, 1), width 500ms cubic-bezier(0.16, 1, 0.3, 1), height 500ms cubic-bezier(0.16, 1, 0.3, 1)';
        clone.style.top = `${targetRect.top - stageRect.top}px`;
        clone.style.left = `${targetRect.left - stageRect.left}px`;
        clone.style.width = `${targetRect.width}px`;
        clone.style.height = `${targetRect.height}px`;
      });

      setTimeout(() => {
        showPanel(targetSide === 'left' ? 'right' : 'left', trigger.dataset.number || '', trigger.dataset.description || '');
      }, 150);
    }

    function removeClone() {
      if (clone) {
        clone.remove();
        clone = null;
      }
    }

    function closeExpanded() {
      if (activeIndex === null) return;
      const trigger = triggers[activeIndex];
      if (!trigger) return;
      const sourceRect = trigger.getBoundingClientRect();
      const stageRect = stage.getBoundingClientRect();

      if (clone) {
        clone.style.transition = 'top 400ms cubic-bezier(0.16, 1, 0.3, 1), left 400ms cubic-bezier(0.16, 1, 0.3, 1), width 400ms cubic-bezier(0.16, 1, 0.3, 1), height 400ms cubic-bezier(0.16, 1, 0.3, 1), opacity 300ms ease';
        clone.style.top = `${sourceRect.top - stageRect.top}px`;
        clone.style.left = `${sourceRect.left - stageRect.left}px`;
        clone.style.width = `${sourceRect.width}px`;
        clone.style.height = `${sourceRect.height}px`;
        clone.style.opacity = '0';
      }

      hidePanels();

      setTimeout(() => {
        removeClone();
        trigger.classList.remove('opacity-0', 'pointer-events-none');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.focus();
        activeIndex = null;
        showHint();
      }, 400);
    }

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', () => expand(trigger));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && activeIndex !== null) {
        closeExpanded();
      }
    });
  })();
</script>
```

- [ ] **Step 2: Verify file path and syntax**

Run:
```bash
test -f src/sections/academic/program/ProgramStrengthsBentoSection.astro && echo "OK"
```
Expected: `OK`

- [ ] **Step 3: Run type check**

Run:
```bash
npx astro check
```
Expected: no errors related to `ProgramStrengthsBentoSection.astro`.

- [ ] **Step 4: Run build**

Run:
```bash
npm run build
```
Expected: build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/sections/academic/program/ProgramStrengthsBentoSection.astro
git commit -m "feat: interactive click-to-expand bento strengths section"
```

---

## Task 2: Manual interaction check

**Files:**
- None

- [ ] **Step 1: Start dev server**

Run:
```bash
npm run dev:frontend
```

- [ ] **Step 2: Create temporary preview page**

Create `src/pages/bento-preview.astro`:

```astro
---
import MainLayout from "@layouts/MainLayout.astro";
import NavigationAPU from "@components/NavigationAPU.astro";
import ProgramStrengthsBentoSection from "@sections/academic/program/ProgramStrengthsBentoSection.astro";
import Footer from "@components/Footer.astro";
---

<MainLayout title="Bento Section Preview | Agung Putra University">
  <NavigationAPU />
  <ProgramStrengthsBentoSection />
  <Footer />
</MainLayout>
```

- [ ] **Step 3: Test interactions**

Visit `http://localhost:4322/bento-preview` and verify:
1. Page loads with 4 bottom cards in one row on desktop.
2. Stage shows the hint initially.
3. Clicking card 01 or 02 animates the card to the right stage panel; description appears in the left panel.
4. Clicking card 03 or 04 animates the card to the left stage panel; description appears in the right panel.
5. Clicking the expanded card or the close button closes it and returns focus.
6. Pressing `Escape` closes the expanded view.
7. Mobile: expanded card fills the stage width and description appears below.

- [ ] **Step 4: Delete temporary preview page**

```bash
rm src/pages/bento-preview.astro
```

- [ ] **Step 5: Commit**

```bash
git add src/pages/bento-preview.astro
git commit -m "chore: preview and remove temporary bento page"
```

---

## Self-review

- [x] Spec coverage: stage + bottom row, FLIP animation, alternating left/right expansion, mobile behavior, keyboard/aria support all implemented in Task 1.
- [x] Placeholder scan: no `TBD`, `TODO`, or vague steps.
- [x] Type consistency: dataset attributes used in markup match the JS reads.
