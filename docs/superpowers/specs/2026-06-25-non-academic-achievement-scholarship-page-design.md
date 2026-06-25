# Non-Academic Achievement Scholarship Page — Design Spec

## 1. Goal

Create a new scholarship detail page at `/admission/non-academic-achievement-scholarship` that reuses the visual design and section structure of `/admission/academic-scholarship` but is populated with content from `https://scholarship.apu.ac.id/non-academic-achievement-scholarship/`.

## 2. Decisions from Brainstorming

- **Page structure:** Hero → About → **Eligibility** → Requirements → Timeline → Contact.
- **Eligibility section:** uses the bento interaction design from `src/sections/academic/program/ProgramStrengthsBentoSection.astro` to display the seven eligible achievement categories.
- **About section:** provides only the overall description of the Non-Academic Scholarship; categories and SPI benefit tiers are handled elsewhere.
- **Implementation approach (B):** refactor the existing `src/sections/scholarship/*.astro` components to accept data props, add a dedicated data file for the non-academic page, and update the existing academic page to pass its own data for consistency.

## 3. Page File

```
src/pages/admission/non-academic-achievement-scholarship.astro
```

**Route:** `/admission/non-academic-achievement-scholarship`

**Layout props:**

- `title`: `Non-Academic Achievement Scholarship | APU`
- `description`: short SEO summary of the non-academic scholarship (≈ 150 chars).

**Imports:**

- `MainLayout`, `NavigationAPU`, `Footer`
- Shared sections: `ScholarshipHero`, `ScholarshipAbout`, `EligibilitySection`, `ScholarshipRequirements`, `ScholarshipTimeline`, `ContactSection`
- Data: `nonAcademicScholarshipData` from `src/data/non-academic-scholarship.ts`

## 4. Data File

```
src/data/non-academic-scholarship.ts
```

Defines a typed `ScholarshipPageData` object exported as `nonAcademicScholarshipData`.

### 4.1 Data shape

```ts
export interface ScholarshipPageData {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    kicker: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: { label: string; href: string; };
    ctaSecondary: { label: string; href: string; };
    bgImage: ImageMetadata;
  };
  about: {
    headline: string;
    description: string;
    benefitTitle?: string;
    benefitTiers?: string[];
    image: ImageMetadata;
    imageAlt: string;
  };
  eligibility: {
    kicker: string;
    title: string;
    description: string;
    hint: string;
    stageMinHeightClass?: string;
    featured: { title: string; description: string; icon: string }[];
    iconMap: Record<string, string>;
  };
  requirements: {
    kicker: string;
    title: string;
    description: string;
    items: { number: string; title: string; description: string; icon: string }[];
  };
  timeline: {
    kicker: string;
    title: string;
    description: string;
    steps: { number: string; title: string; description: string; icon: string }[];
    contactCtaText: string;
  };
}
```

### 4.2 Non-academic content mapping

**Hero**

- Kicker: `NON-ACADEMIC ACHIEVEMENT SCHOLARSHIP 2026/2027`
- Title: `Non-Academic Achievement Scholarship` + `APU`
- Subtitle: `Get up to 100% SPI tuition reduction for outstanding achievements in sports, arts, non-academic science competitions, technology & innovation, leadership, organization, and Tahfidz.`
- CTA Primary: `Apply Now` → `contact.scholarshipLink`
- CTA Secondary: `View Requirements` → `#requirements`
- Background image: reuse `src/assets/images/loby1.webp` (same hero asset as academic page for visual consistency).

**About**

- Headline: `We celebrate talent beyond the classroom`
- Description: overview of the scholarship recognizing outstanding accomplishments beyond academic performance — sports, arts, non-academic science competitions, technology and innovation, leadership, organizational involvement, and officially recognized competitions. Also mentions the special Tahfidz scheme and that SPI reductions are based on achievement level within the last three years.
- Benefit title: `SPI Reduction Tiers`
- Achievement-based tiers:
  - International Level: 100% SPI
  - National Level: 75% SPI
  - Provincial Level: 50% SPI
  - City/Regency Level: 30% SPI
  - District/School Level: 10% SPI
- Tahfidz tiers:
  - 30 Juz: 100% SPI (UKT Semester 1–2 reduction subject to interview evaluation)
  - 15 Juz: 50% SPI
  - 10 Juz: 35% SPI
  - < 10 Juz: 20% SPI
- Image: `src/assets/images/scholarship/podiumstage.webp`
- Image alt: `Achievement podium stage`

**Eligibility (Bento Section)**

- Kicker: `ELIGIBLE CATEGORIES`
- Title: `Who Can Apply?`
- Description: `The Non-Academic Achievement Scholarship is open to students with proven accomplishments in one or more of the following areas.`
- Hint: `Select a category to learn more.`
- Featured items (title / description / icon key):
  1. `Sports` — Proven achievements in individual or team sports at school, district, city, provincial, national, or international level.
  2. `Arts` — Excellence in music, dance, theater, fine arts, or other recognized artistic fields.
  3. `Non-Academic Science Competitions` — Participation and awards in science, robotics, or other academic-adjacent competitions outside the classroom.
  4. `Technology & Innovation` — Demonstrated work in technology, startups, invention, or applied innovation.
  5. `Leadership / Organization` — Active leadership or organizational experience such as OSIS, student council, or similar bodies.
  6. `Officially Recognized Competitions` — Awards from government, institutional, or nationally recognized competitions.
  7. `Tahfidz (Qur’an Memorization)` — Memorization of the Qur’an verified through official certification.
- Icon map: a small set of SVG paths keyed to each category (sports, arts, science, tech, leadership, award, tahfidz).
- Section file: `src/sections/scholarship/EligibilitySection.astro`
- Design source: copy/adapt `src/sections/academic/program/ProgramStrengthsBentoSection.astro`, preserving the stage, trigger cards, panel reveal, clone animation, mobile fallback, and keyboard/Escape handling.

**Requirements**

- Kicker: `REQUIREMENTS`
- Title: `Scholarship Eligibility Requirements`
- Description: `Make sure you meet the following requirements before applying for the APU Non-Academic Achievement Scholarship.`
- Items:
  1. `SMA/SMK/Equivalent Graduate` — Graduate of SMA/SMK/equivalent or currently in Grade 12 in the current academic year.
  2. `Achievement Within Last 3 Years` — Achievement must be obtained within the last 3 years (for non-academic categories).
  3. `Official Certificate or Award` — Provide official certificate, award letter, or recognition from an authorized institution.
  4. `Tahfidz Certification` — For Tahfidz applicants, provide official Tahfidz certification stating the number of Juz memorized.
  5. `Online Registration Form` — Fill out the online registration form through the APU scholarship portal with complete and valid data.
  6. `Official Assessment Form` — Complete and upload the official assessment form provided.

**Timeline**

- Same 3-step timeline as the academic page.
- Kicker: `REGISTRATION PROCESS`
- Title: `3 Steps to Your Scholarship`
- Description: `Follow a transparent and structured scholarship registration process. We are ready to help at every stage.`
- Steps:
  1. Online Registration
  2. Announcement (D+7)
  3. Document Validation & NIM Issuance
- Contact CTA text: `Need help? Contact our admissions team via WhatsApp.`

## 5. Refactored Shared Sections

All section components live in `src/sections/scholarship/`.

### 5.1 `ScholarshipHero.astro`

```astro
interface Props {
  data: ScholarshipPageData['hero'];
}
```

- Render kicker, title, subtitle, CTAs using the passed data.
- Keep all existing visual effects (parallax, particles, entrance animations, scroll fade).
- If the component currently hardcodes academic text, replace it with `Astro.props.data` references.

### 5.2 `ScholarshipAbout.astro`

```astro
interface Props {
  data: ScholarshipPageData['about'];
}
```

- Render headline, description, optional SPI benefit tiers note, and image.
- Keep existing podium/background visuals.

### 5.3 `EligibilitySection.astro`

```astro
interface Props {
  data: ScholarshipPageData['eligibility'];
}
```

- New scholarship section based on `ProgramStrengthsBentoSection.astro`.
- Render the bento stage, category trigger cards, icon map, and panel reveal.
- Place between About and Requirements on the non-academic page.

### 5.4 `ScholarshipRequirements.astro`

```astro
interface Props {
  data: ScholarshipPageData['requirements'];
}
```

- Render section header and requirement cards from `data.items`.
- Keep existing grid, icons, hover states, and bottom CTAs.

### 5.5 `ScholarshipTimeline.astro`

```astro
interface Props {
  data: ScholarshipPageData['timeline'];
}
```

- Render section header, timeline steps, and WhatsApp CTA from data.
- Keep alternating desktop layout and node animations.

## 6. Existing Academic Page Update

Update `src/pages/admission/academic-scholarship.astro` to import `academicScholarshipData` from a new `src/data/academic-scholarship.ts` file and pass it into every section component.

This keeps both pages sharing the same components and avoids hardcoded content drift.

## 7. Assets

- Hero background: `src/assets/images/loby1.webp` (existing).
- About image: `src/assets/images/scholarship/podiumstage.webp` (existing).
- No new images are required for this task.

## 8. SEO / Meta

- `title`: `Non-Academic Achievement Scholarship | APU`
- `description`: focused on non-academic achievements and SPI reduction.
- Canonical URL handled by `MainLayout` if configured; otherwise none required.

## 9. Acceptance Criteria

- `src/pages/admission/non-academic-achievement-scholarship.astro` exists and renders correctly.
- Route `/admission/non-academic-achievement-scholarship` shows the expected sections.
- Content matches the source page (categories, benefit tiers, requirements, timeline).
- Existing `/admission/academic-scholarship` still renders and looks unchanged.
- `bun run build` completes without errors.
- `bun run dev` loads the new route without 404.
