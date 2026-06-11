---
date: 2026-06-11
topic: "Biotechnology Program Detail Page"
status: validated
---

# Biotechnology Program Detail Page Design

## Problem Statement

APU currently links externally to KMB microsites for program details (e.g., biotechnology.kmb.ac.id). This fragments the user experience, hurts brand cohesion, and reduces conversion visibility. We need to bring the Biotechnology program content into APU's own website using our established design language.

## Constraints

- Must follow APU design system (tokens, primitives, typography)
- Must reuse existing Astro components (SectionHeader, CtaButton, ScrollReveal)
- Must maintain accessibility (focus-visible, contrast, keyboard nav)
- Must be responsive (mobile-first, desktop-enhanced)
- Must not duplicate external site verbatim — adapt content to APU voice
- Must be extensible to other programs (Biomedical, Law, etc.)
- No new CSS primitives unless absolutely necessary

## Approach

**Chosen approach:** Create a dedicated page `bioteknologi.astro` with multiple sections, plus a reusable data structure for program details.

This mirrors our existing page architecture (pendaftaran.astro, akademik.astro, about-apu.astro) where each page composes multiple section components.

**Why not a generic `[program].astro` dynamic route yet?**
We only have content for Biotechnology right now. Building the dynamic route prematurely adds complexity without value. We'll hardcode the Biotechnology page first, extract patterns, then generalize when we add a second program.

**Content adaptation strategy:**
- Preserve all factual content (vision, mission, strengths, faculty)
- Rewrite for APU voice: shorter sentences, benefit-first, action-oriented
- Remove KMB-specific references, replace with APU/SCCR where applicable
- Structure content for scannability (cards, grids, icons) rather than long paragraphs

## Architecture

### Page Structure

```
bioteknologi.astro (page)
├── NavigationAPU
├── ProgramHeroSection (new)
├── ProgramStrengthsSection (new)
├── ProgramVisionMissionSection (new)
├── ProgramValuesSection (new) — Graduate Attributes
├── ProgramCareersSection (new)
├── ProgramFacultySection (new)
├── ContactSection (existing reuse)
└── Footer
```

### Data Layer

**New file: `src/data/program-details.ts`**

Contains the full content for the Biotechnology program. When we add a second program, this becomes an array/map keyed by program ID.

Structure:
- `programId`: 'biotechnology'
- `name`: 'Biotechnology'
- `degree`: 'S1'
- `head`: { name, title, photo, message }
- `strengths`: array of { title, description, icon }
- `vision`: string
- `mission`: string[]
- `graduateAttributes`: array of { letter, word, meaning, description }
- `objectives`: string[]
- `careerPaths`: array of { title, description }
- `faculty`: array of { name, title, photo, nidn, link? }
- `focusAreas`: string[] — the three sub-programs

### Component Design

#### 1. ProgramHeroSection

**Purpose:** Welcome from program head + program identity

**Layout:**
- Two-column on desktop: head photo + message on left, program identity card on right
- Stacked on mobile

**Content:**
- Kicker: "PROGRAM STUDI" (using `.apu-section-kicker`)
- Title: "Biotechnology" (`.text-h1`)
- Subtitle: "S1 — Fakultas Sains dan Teknologi" (`.text-body` muted)
- Program head photo (rounded, with subtle border)
- Head name and title
- Welcome message excerpt (2-3 paragraphs max, collapsible on mobile if longer)
- Focus area badges: Medical Biotechnology, Biotechnology Informatics, Biotechnology Industry (`.apu-pill-badge`)

**Tokens:**
- Uses navy/ivory/orange hero mood (same as main hero)
- Override `--apu-surface` to ivory, `--apu-navy` to deep navy

**Animation:**
- ScrollReveal on title and message
- Staggered fade-in for focus area badges

---

#### 2. ProgramStrengthsSection

**Purpose:** Showcase 7 program advantages in scannable card grid

**Layout:**
- SectionHeader: kicker "KEUNGGULAN", title "Mengapa Bioteknologi APU?"
- Desktop: 3-column grid (last row: 1 card centered or 2 + 1)
- Mobile: single column stack

**Card design:**
- `.apu-glass-card.apu-interactive-card`
- Top: `.apu-icon-chip` with program-appropriate icon (DNA, computer, factory, globe, etc.)
- Title: `.text-h3`
- Description: `.text-body-s` muted

**Content (7 strengths from reference, adapted):**
1. **Interdisipliner** — Medical biotech + informatics + industrial biotech with green technology
2. **Sarana Modern** — GLP/GMP standard labs (SCCR), complete equipment
3. **Pendidik Internasional** — Global-qualified faculty active in research
4. **Orientasi Industri** — Internships, applied projects with industry partners
5. **Biotech Digital & AI** — Computational modeling, biological data analysis, AI in biotech
6. **Entrepreneurship** — Entrepreneur mindset and leadership development
7. **Jaringan Global** — National and international partnerships for career opportunities

**Animation:**
- ScrollReveal with stagger: `delay={index * 120}`

---

#### 3. ProgramVisionMissionSection

**Purpose:** Display vision and mission with visual weight

**Layout:**
- Two-part section:
  - Top: Vision as a large quote/statement block (centered, prominent)
  - Bottom: Mission as a numbered list (01–05) in a 2-column grid on desktop

**Vision block:**
- `.apu-glass-card` with accent left border (4px accent)
- Large text: `.text-h3` or custom large quote style
- Subtle background: navy gradient at low opacity

**Mission list:**
- Each item: number (`.text-mono` accent color) + title + description
- Uses the numbered checklist pattern from RequirementsSection
- `.apu-glass-card` per item or clean list with divider lines

**Content:**
- Vision: "Menjadi program studi bioteknologi unggul bertaraf internasional, melalui inovasi green technology dan pengembangan rekayasa sel."
- 5 missions (from reference, condensed)

**Animation:**
- Vision block: ScrollReveal zoom-out or up
- Mission items: staggered left/right reveal alternating

---

#### 4. ProgramValuesSection (Graduate Attributes)

**Purpose:** Present APUSSCR graduate attributes in a memorable, visual way

**Layout:**
- SectionHeader: kicker "GRADUATE ATTRIBUTES", title "Nilai-Nilai Lulusan"
- Desktop: 7 cards in a row (horizontal scroll if needed, or 4+3 grid)
- Mobile: 2-column grid or horizontal scroll

**Card design (distinct from strengths):**
- Vertical card: large letter at top (A, P, U, S, S, C, R)
- Word below the letter
- Short description
- `.apu-glass-card` with hover lift
- Each letter has a subtle gradient background variation

**Content (APUSSCR):**
1. **A** — Adaptable — Mampu merespon perubahan dunia yang cepat
2. **P** — Persistence — Tangguh dan pantang menyerah
3. **U** — Universal — Berwawasan global dan nilai kebaikan universal
4. **S** — Smart — Cerdas dan maju secara intelektual
5. **S** — Creative — Selalu berinovasi dan mencari peluang
6. **C** — Collaborative — Bekerja sama dalam tim sebagai pemimpin efektif
7. **R** — Responsible — Tanggung jawab sosial kepada masyarakat, bangsa, dan Tuhan

**Animation:**
- ScrollReveal with cascade: each card delays 80ms after previous
- Subtle hover: letter scales up slightly

---

#### 5. ProgramCareersSection

**Purpose:** Show career outcomes to motivate prospective students

**Layout:**
- SectionHeader: kicker "KARIER", title "Peluang Profesi"
- Desktop: 3-column grid of career cards
- Mobile: stack

**Card design:**
- `.apu-glass-card.apu-interactive-card`
- Icon chip (briefcase, microscope, computer, etc.)
- Career title: `.text-h3`
- Brief description: `.text-body-s`

**Content (from reference intro):**
1. **Research Scientist** — Riset dan pengembangan di laboratorium bioteknologi
2. **Clinical Regulator** — Regulasi dan pengawasan produk biomedis
3. **Bioinformatics Expert** — Analisis data biologis dan pemodelan komputasional
4. **Data Security Specialist** — Keamanan data riset dan informasi kesehatan
5. **Quality Assurance Professional** — Jaminan mutu produk bioteknologi
6. **Industrial Biotech Developer** — Pengembangan produk di industri bioteknologi

**Animation:**
- ScrollReveal stagger at 100ms

---

#### 6. ProgramFacultySection

**Purpose:** Introduce key faculty members

**Layout:**
- SectionHeader: kicker "DOSEN", title "Tim Pengajar"
- Desktop: horizontal row of faculty cards (4-5 visible)
- Mobile: horizontal scroll or 2-column grid

**Card design:**
- Photo (rounded or soft-radius square, 1:1 aspect ratio)
- Name: `.text-h3` or `.text-body` bold
- Title: `.text-caption` muted
- NIDN: `.text-mono` small
- Optional: link to detail page (external or internal)
- `.apu-glass-card` without full interactive hover (subtle scale only)

**Content (from reference):**
1. Fauziah Novita Putri Rifai, S.Si, M.Biotech — Kepala Program Studi
2. Iffan Alif, M.Biotech — Dosen
3. Nurul Hidayah, S.Si, M.Biotech — Dosen
4. Salindri Prawitasari, S.Si, M.Si — Dosen
5. Dini Cahyani, S.Si, M.Biotech — Dosen

**Note:** Photos may not be available in APU assets yet. Use placeholder gradient avatars with initials as fallback.

**Animation:**
- ScrollReveal stagger at 100ms

---

## Data Flow

```
program-details.ts (data source)
  ↓
bioteknologi.astro (page composition)
  ↓
Individual section components (props from data)
  ↓
Shared components (SectionHeader, CtaButton, ScrollReveal)
  ↓
global.css (design tokens + primitives)
```

## Error Handling Strategy

- **Missing images:** Faculty photos fallback to gradient avatar with initials
- **Data incomplete:** Sections gracefully handle empty arrays (hide section or show placeholder)
- **External links:** All external faculty detail links open in new tab with `rel="noopener noreferrer"`
- **Accessibility:** All icons have aria-hidden; cards have proper focus-visible

## Testing Strategy

1. **Visual regression:** Compare against existing sections (Programs, Pathways) for consistency
2. **Responsive:** Test at 320px, 768px, 1024px, 1440px
3. **Accessibility:** Keyboard navigation through all cards, focus-visible states visible
4. **Performance:** Images lazy-loaded, no layout shift from async content
5. **Content accuracy:** Cross-check vision/mission/strengths against reference site

## Open Questions

1. Should we create a dynamic route `[program].astro` immediately, or wait for second program?
   → **Decision:** Wait. Hardcode first, generalize later.

2. Do we have faculty photos in APU assets, or should we use placeholders?
   → **Decision:** Use placeholder gradient avatars for now. Mark with TODO for photo integration.

3. Should the ProgramsSectionAPU homepage grid link to this new internal page instead of external?
   → **Decision:** Yes, update the biotechnology card link from external to `/bioteknologi`.

4. Should we include curriculum/RPS details, or keep it high-level?
   → **Decision:** Keep high-level for now. Curriculum details can be a Phase 2 addition (accordion or tabbed section).
