# Faculty Spotlight — Conditional Diaspora Featured Card Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make `ProgramFacultySpotlightSection.astro` swap its featured-card area to the diaspora researcher layout whenever a selected lecturer exists in `src/data/diaspora.ts`, while keeping the existing lecturers carousel.

**Architecture:** Extract the featured-researcher block from `DiasporaDetailsSection.astro` into a new presentational component `DiasporaFeaturedCard.astro`. Refactor `DiasporaDetailsSection.astro` to consume that component. In `ProgramFacultySpotlightSection.astro`, render both the standard featured card and the diaspora featured card, toggle their visibility with client JS, and keep the carousel untouched.

**Tech Stack:** Astro, TypeScript, Tailwind CSS, inline client scripts.

---

## File Structure

- **Create:** `src/components/DiasporaFeaturedCard.astro`
  - Presentational featured-researcher glass card.
  - Props: `person: DiasporaPerson`, `class?: string`.
- **Modify:** `src/sections/DiasporaDetailsSection.astro`
  - Replace inline featured-researcher block with `<DiasporaFeaturedCard person={featuredLecturer} />`.
- **Modify:** `src/sections/academic/program/ProgramFacultySpotlightSection.astro`
  - Import diaspora data + new component.
  - Server-render both standard and diaspora featured cards.
  - Extend inline script to toggle visibility and update diaspora fields.

---

### Task 1: Create `DiasporaFeaturedCard.astro`

**Files:**
- Create: `src/components/DiasporaFeaturedCard.astro`

- [ ] **Step 1: Write the component**

```astro
---
import type { DiasporaPerson } from "@data/diaspora";
import canada from "@/assets/images/academic/canada-bg.jpg";

interface Props {
  person: DiasporaPerson;
  class?: string;
}

const { person, class: className = "" } = Astro.props;
const bgSrc = person.background_image?.src ?? canada.src;
---

<div
  class:list={["relative flex justify-center", className]}
  data-diaspora-featured-card
>
  <img
    src={bgSrc}
    alt={person.name}
    class="pointer-events-none absolute top-0 left-0 h-full w-full object-cover opacity-30"
    aria-hidden="true"
    data-featured-background
  />
  <img
    src={person.flag}
    alt={`Flag of ${person.country}`}
    class="absolute top-4 right-4 h-20 w-auto rounded-sm opacity-75 shadow-lg"
    loading="eager"
    data-featured-flag
  />

  <div class="relative z-10 flex w-full flex-col justify-center md:flex-row">
    <div
      class="order-2 flex w-full flex-col justify-center px-4 md:order-1 md:w-1/2 md:px-0 md:pl-10"
    >
      <h2 class="text-h2 mb-3 text-white" data-featured-name>
        {person.name}
      </h2>
      <p class="text-body mb-3 text-apu-accent" data-featured-role>
        {person.role}
      </p>

      <div class="mb-6 backdrop-blur-md">
        <h3 class="text-body mb-6 text-apu-accent">
          <p data-featured-univ>{person.univ}</p>
        </h3>
        <h3
          class="text-caption mb-3 uppercase tracking-widest text-white/70"
        >
          Past Experience
        </h3>
        <ul class="space-y-2" data-featured-past-experience>
          {
            person.pastExperience.items.map((item) => (
              <li class="text-body-s flex items-start gap-3 text-white/90">
                <span
                  class="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-apu-accent"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))
          }
        </ul>
      </div>

      <div class="mb-8 backdrop-blur-md">
        <h3
          class="text-caption mb-3 uppercase tracking-widest text-white/70"
        >
          Notable Research
        </h3>
        <p
          class="text-body-s leading-relaxed text-white/90"
          data-featured-notable-research
        >
          {person.notableResearch.text}
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-4">
        <a
          href={person.google_scholar}
          target="_blank"
          rel="noopener noreferrer"
          class="apu-btn apu-btn--primary inline-flex items-center gap-2"
          data-featured-profile
        >
          View Researcher Profile
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
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>

    <div class="relative order-1 mb-4 w-full md:order-2 md:mb-0 md:w-96">
      <div class="relative aspect-[4/5] overflow-hidden rounded-2xl md:aspect-auto md:h-full">
        <img
          src={person.image.src}
          alt={`Portrait of ${person.name}`}
          class="h-full w-full border-0 object-cover"
          style={`object-position: ${person.position}% center;`}
          loading="eager"
          data-featured-image
        />
      </div>
    </div>
  </div>
</div>
```

- [ ] **Step 2: Verify the file was created**

Run:
```bash
ls -la src/components/DiasporaFeaturedCard.astro
```
Expected: file exists.

- [ ] **Step 3: Commit**

```bash
git add src/components/DiasporaFeaturedCard.astro
git commit -m "feat: add DiasporaFeaturedCard presentational component"
```

---

### Task 2: Refactor `DiasporaDetailsSection.astro` to use the new component

**Files:**
- Modify: `src/sections/DiasporaDetailsSection.astro`

- [ ] **Step 1: Add the import and remove the inline featured block**

Replace lines 21-123 (the entire `ScrollReveal` containing the featured researcher) with:

```astro
    <ScrollReveal>
      <div class="apu-glass-card rounded-none lecturers-featured-card mb-10 overflow-hidden flex justify-center py-6 md:py-10 relative">
        <DiasporaFeaturedCard person={featuredLecturer} />
      </div>
    </ScrollReveal>
```

Add the import near the top of the frontmatter:

```astro
import DiasporaFeaturedCard from "@components/DiasporaFeaturedCard.astro";
```

- [ ] **Step 2: Build to confirm no regressions**

Run:
```bash
bun run build
```
Expected: build succeeds without TypeScript/Astro errors.

- [ ] **Step 3: Commit**

```bash
git add src/sections/DiasporaDetailsSection.astro
git commit -m "refactor: use DiasporaFeaturedCard in DiasporaDetailsSection"
```

---

### Task 3: Modify `ProgramFacultySpotlightSection.astro` server markup

**Files:**
- Modify: `src/sections/academic/program/ProgramFacultySpotlightSection.astro`

- [ ] **Step 1: Add imports and diaspora lookups**

Add these imports in the frontmatter:

```astro
import DiasporaFeaturedCard from "@components/DiasporaFeaturedCard.astro";
import { people as diasporaPeople } from "@data/diaspora";
```

After `const featured = members[0];`, add:

```astro
const diasporaIds = new Set(diasporaPeople.map((p) => p.id));
const isFeaturedDiaspora = featured ? diasporaIds.has(featured.id) : false;
const initialDiasporaPerson = isFeaturedDiaspora
  ? diasporaPeople.find((p) => p.id === featured!.id) ?? diasporaPeople[0]
  : diasporaPeople[0];
```

- [ ] **Step 2: Add diaspora data to the section element**

Change the `<section>` opening tag to include the diaspora people payload:

```astro
<section
  id="dosen-spotlight"
  class="apu-section-shell relative overflow-hidden py-12"
  aria-label="Faculty spotlight"
  data-members={JSON.stringify(members)}
  data-diaspora-people={JSON.stringify(diasporaPeople)}
>
```

- [ ] **Step 3: Wrap the featured area with both variants**

Replace the `<!-- Featured lecturer -->` `ScrollReveal` block with the following. The existing standard markup stays inside `[data-standard-featured]`, and the diaspora variant is added inside `[data-diaspora-featured]`.

```astro
    <!-- Featured lecturer -->
    <ScrollReveal>
      <div
        class="apu-glass-card rounded-none lecturers-featured-card mb-10 overflow-hidden flex justify-center py-6 md:py-10 relative"
      >
        <div
          data-standard-featured
          class:list={[
            "relative z-10 flex flex-col justify-center w-full md:flex-row",
            { hidden: isFeaturedDiaspora },
          ]}
        >
          <div
            class="order-2 w-full flex flex-col justify-center px-4 md:order-1 md:w-1/2 md:px-0 md:pl-10"
          >
            <h2
              class="text-h2 mb-3 text-white"
              data-featured-name
            >
              {featured?.name}
            </h2>
            <p
              class="text-body mb-3 text-apu-accent"
              data-featured-title
            >
              {featured?.title}
            </p>

            <p
              class:list={[
                "text-body-s text-white/80 mb-3",
                { hidden: !featured?.specialization },
              ]}
              data-featured-specialization
            >
              {featured?.specialization || ""}
            </p>

            <p
              class:list={[
                "text-caption text-white/60 mb-6",
                { hidden: !featured?.nidn || featured?.nidn === "-" },
              ]}
              data-featured-nidn
            >
              {featured?.nidn && featured.nidn !== "-"
                ? `NIDN ${featured.nidn}`
                : ""}
            </p>

            <div data-featured-link-wrapper class="flex flex-wrap items-center gap-4">
              <a
                href={featured?.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                class="apu-btn apu-btn--primary inline-flex items-center gap-2"
                data-featured-link
              >
                View Profile
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
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div
            class="relative order-1 w-full mb-4 md:mb-0 md:order-2 md:w-96"
          >
            <div
              class="relative h-80 md:h-96 w-full overflow-hidden rounded-2xl flex items-center justify-center"
              data-featured-visual
            >
              <Fragment set:html={featuredVisual} />
            </div>
          </div>
        </div>

        <div
          data-diaspora-featured
          class:list={[
            "w-full",
            { hidden: !isFeaturedDiaspora },
          ]}
        >
          <DiasporaFeaturedCard person={initialDiasporaPerson} />
        </div>
      </div>
    </ScrollReveal>
```

- [ ] **Step 4: Build to confirm markup compiles**

Run:
```bash
bun run build
```
Expected: build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/sections/academic/program/ProgramFacultySpotlightSection.astro
git commit -m "feat: render both standard and diaspora featured cards"
```

---

### Task 4: Update the client script in `ProgramFacultySpotlightSection.astro`

**Files:**
- Modify: `src/sections/academic/program/ProgramFacultySpotlightSection.astro` (the inline `<script>`)

- [ ] **Step 1: Read diaspora data and add helper functions**

Inside the IIFE, after `const members = JSON.parse(...);`, add:

```javascript
const diasporaPeople = JSON.parse(section?.getAttribute("data-diaspora-people") || "[]");
const diasporaById = new Map(diasporaPeople.map((p) => [p.id, p]));

const standardFeatured = section?.querySelector("[data-standard-featured]");
const diasporaFeatured = section?.querySelector("[data-diaspora-featured]");
```

- [ ] **Step 2: Add diaspora update function**

After the existing `updateFeatured` function, add:

```javascript
const updateDiasporaFeatured = (id) => {
  const person = diasporaById.get(id);
  if (!person || !diasporaFeatured) return;

  const dName = diasporaFeatured.querySelector("[data-featured-name]");
  const dRole = diasporaFeatured.querySelector("[data-featured-role]");
  const dUniv = diasporaFeatured.querySelector("[data-featured-univ]");
  const dPast = diasporaFeatured.querySelector("[data-featured-past-experience]");
  const dResearch = diasporaFeatured.querySelector("[data-featured-notable-research]");
  const dImage = diasporaFeatured.querySelector("[data-featured-image]");
  const dFlag = diasporaFeatured.querySelector("[data-featured-flag]");
  const dBg = diasporaFeatured.querySelector("[data-featured-background]");
  const dProfile = diasporaFeatured.querySelector("[data-featured-profile]");

  if (dName) dName.textContent = person.name;
  if (dRole) dRole.textContent = person.role;
  if (dUniv) dUniv.textContent = person.univ;
  if (dResearch) dResearch.textContent = person.notableResearch.text;

  if (dPast) {
    dPast.innerHTML = person.pastExperience.items
      .map(
        (item) =>
          `<li class="text-body-s flex items-start gap-3 text-white/90"><span class="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-apu-accent" aria-hidden="true"></span>${item}</li>`
      )
      .join("");
  }

  if (dImage) {
    dImage.src = person.image.src;
    dImage.alt = `Portrait of ${person.name}`;
    dImage.style.objectPosition = `${person.position}% center`;
  }

  if (dFlag) {
    dFlag.src = person.flag;
    dFlag.alt = `Flag of ${person.country}`;
  }

  if (dBg) {
    dBg.src = person.background_image?.src || dBg.src;
    dBg.alt = person.name;
  }

  if (dProfile) {
    dProfile.href = person.google_scholar || "#";
  }
};
```

- [ ] **Step 3: Add visibility toggle helper**

Add after `updateDiasporaFeatured`:

```javascript
const showStandard = () => {
  if (standardFeatured) standardFeatured.classList.remove("hidden");
  if (diasporaFeatured) diasporaFeatured.classList.add("hidden");
};

const showDiaspora = () => {
  if (standardFeatured) standardFeatured.classList.add("hidden");
  if (diasporaFeatured) diasporaFeatured.classList.remove("hidden");
};
```

- [ ] **Step 4: Replace card click/keydown handlers**

Replace the existing card event listener block:

```javascript
section?.querySelectorAll("[data-member-id]").forEach((card) => {
  card.addEventListener("mousedown", (event) => {
    event.preventDefault();
  }, { signal });

  card.addEventListener("click", (event) => {
    event.preventDefault();
    const id = card.getAttribute("data-member-id");
    if (!id) return;

    if (diasporaById.has(id)) {
      showDiaspora();
      updateDiasporaFeatured(id);
    } else {
      showStandard();
      updateFeatured(id);
    }
  }, { signal });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const id = card.getAttribute("data-member-id");
      if (!id) return;

      if (diasporaById.has(id)) {
        showDiaspora();
        updateDiasporaFeatured(id);
      } else {
        showStandard();
        updateFeatured(id);
      }
    }
  }, { signal });
});
```

- [ ] **Step 5: Update hash routing**

Replace:

```javascript
const hashMatch = location.hash.match(/^#dosen-spotlight-(.+)/);
if (hashMatch) updateFeatured(hashMatch[1]);
```

with:

```javascript
const hashMatch = location.hash.match(/^#dosen-spotlight-(.+)/);
if (hashMatch) {
  const id = hashMatch[1];
  if (diasporaById.has(id)) {
    showDiaspora();
    updateDiasporaFeatured(id);
  } else {
    showStandard();
    updateFeatured(id);
  }
}
```

- [ ] **Step 6: Build to confirm script compiles**

Run:
```bash
bun run build
```
Expected: build succeeds.

- [ ] **Step 7: Commit**

```bash
git add src/sections/academic/program/ProgramFacultySpotlightSection.astro
git commit -m "feat: toggle diaspora featured card on lecturer selection"
```

---

### Task 5: Verification

**Files:**
- `src/sections/academic/program/ProgramFacultySpotlightSection.astro`
- `src/sections/DiasporaDetailsSection.astro`
- `src/components/DiasporaFeaturedCard.astro`

- [ ] **Step 1: Run the production build**

Run:
```bash
bun run build
```
Expected: build completes with exit code 0.

- [ ] **Step 2: Run lint/type-check if available**

Run:
```bash
bun run check
```
(or `bunx astro check` if no check script)
Expected: no TypeScript/Astro errors.

- [ ] **Step 3: Manual UI checks**

Open the biomedical program page (`/program/biomedical-science` or equivalent).

1. Click `Dendi Krisna Nugraha` in the carousel.
   - Expected: featured card shows diaspora layout (flag, Past Experience, Notable Research, Google Scholar link).
2. Click a non-diaspora lecturer (e.g., `Nadya Audina NS`).
   - Expected: standard featured card returns (NIDN, specialization, View Profile link).
3. Use keyboard Enter on a carousel item.
   - Expected: same toggle behavior.
4. Visit `#dosen-spotlight-dendi-krisna-nugraha` directly.
   - Expected: diaspora layout visible on load.
5. Confirm carousel prev/next buttons still scroll.
6. Confirm no console errors.

- [ ] **Step 4: Commit any final fixes**

```bash
git add -A
git commit -m "fix: final verification tweaks for diaspora faculty spotlight"
```

---

## Spec Coverage Check

| Spec Requirement | Task(s) |
|---|---|
| Extract `DiasporaFeaturedCard.astro` | Task 1 |
| Refactor `DiasporaDetailsSection.astro` to use it | Task 2 |
| Keep original `SectionHeader` visible | Task 3 (header untouched, only featured card area changes) |
| Server-render both standard and diaspora variants | Task 3 |
| Initial load respects `members[0]` diaspora status | Task 3 (`isFeaturedDiaspora` + `hidden`) |
| Client toggle on carousel selection | Task 4 |
| Selecting non-diaspora reverts to standard | Task 4 |
| Keep existing carousel | Tasks 3-4 (carousel markup/script unchanged) |
| Hash routing works | Task 4 |
| Build verification | Task 5 |

## Placeholder Scan

- No TBD/TODO/fill-in-later items.
- All code snippets are concrete Astro/TypeScript.
- Exact file paths provided.
- Exact verification commands provided.

## Type Consistency

- `DiasporaPerson` imported from `@data/diaspora` matches usage in both parent sections.
- `person.background_image?.src` fallback uses the same default background (`canada-bg.jpg`) as before.
- `data-featured-*` attribute names match those used in the diaspora update function.
