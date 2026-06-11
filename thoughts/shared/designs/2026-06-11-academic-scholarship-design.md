---
date: 2026-06-11
topic: "Academic Scholarship Page"
status: validated
---

## Problem Statement

Create a dedicated Astro page for the Academic Scholarship program at APU. The page must present scholarship information clearly to prospective students and parents, following the content structure of the KMB reference site but using APU's established design language.

**Key goals:**
- Communicate scholarship benefits and eligibility clearly
- Guide users through the 3-stage registration timeline
- Provide clear CTAs for application and contact
- Maintain visual consistency with existing APU pages

## Constraints

- Must use existing APU design system (tokens, primitives, components)
- Must follow established page composition pattern (MainLayout → NavigationAPU → main → sections → Footer)
- Must use existing shared components: SectionHeader, CtaButton, ScrollReveal
- Must reuse existing section patterns where applicable (hero, timeline, requirements)
- Must support Indonesian language content (primary audience)
- Must work responsively (mobile-first)
- Must not duplicate inline SVG/UI patterns if equivalent `apu-*` primitives exist

## Approach

### Chosen Approach: Compose from Existing Patterns

Reuse and adapt existing section components rather than building entirely new ones:

1. **Hero** — Adapt `AdmissionsHero.astro` pattern with scholarship-specific content and a simpler single-column layout (no info card needed, but keep the visual richness)
2. **About/Benefits** — Create a new `ScholarshipAbout.astro` section using glass cards to highlight the scholarship description and the 50% benefit
3. **Requirements** — Create a new `ScholarshipRequirements.astro` section using the same grid card pattern as `AdmissionsRequirements.astro` but with 4 items instead of 5
4. **Timeline** — Adapt `AdmissionsTimeline.astro` pattern but simplify to 3 stages with scholarship-specific content
5. **Contact/CTA** — Use existing `ContactSection.astro` or a simple CTA section

**Why this approach:**
- Fastest path to consistency
- Minimizes new code
- Leverages battle-tested animations and responsive behavior
- Easy to maintain

**Rejected alternatives:**
- Building all-new sections from scratch — would introduce inconsistency and duplicate effort
- Using the generic `WireframePageSectionAPU` — too plain, doesn't match the premium feel of other pages

## Architecture

### Page Structure

```
src/pages/beasiswa-akademik.astro
src/sections/scholarship/
  ├── ScholarshipHero.astro
  ├── ScholarshipAbout.astro
  ├── ScholarshipRequirements.astro
  └── ScholarshipTimeline.astro
```

### Page Assembly

```astro
<MainLayout title="Beasiswa Akademik | APU" description="...">
  <NavigationAPU />
  <main>
    <ScholarshipHero />
    <ScholarshipAbout />
    <ScholarshipRequirements />
    <ScholarshipTimeline />
    <ContactSection />
  </main>
  <Footer />
</MainLayout>
```

## Components

### ScholarshipHero.astro

**Responsibilities:**
- First visual impression with scholarship branding
- Display registration period and academic year
- Primary CTA to apply
- Uses parallax background image (reuse campus photo or scholarship-related imagery)

**Design:**
- Full-viewport height hero with navy/orange theme
- Staggered entrance animation (same pattern as AdmissionsHero)
- Floating particles for visual richness
- Kicker pill: "BEASISWA AKADEMIK 2026/2027"
- Headline: "Beasiswa Akademik APU"
- Subtitle: description of the scholarship
- CTA: "Daftar Sekarang" (primary) + "Lihat Persyaratan" (secondary, scrolls to #persyaratan)

### ScholarshipAbout.astro

**Responsibilities:**
- Explain what the academic scholarship is
- Highlight the 50% tuition fee reduction benefit
- Build trust with prospective students

**Design:**
- Standard section shell with aurora background
- SectionHeader: kicker "TENTANG BEASISWA", title "Dukungan untuk Pelajar Berprestasi"
- Two-column layout on desktop:
  - Left: Text description in glass card
  - Right: Large benefit highlight card (50% off) with icon chip
- Single column stack on mobile
- ScrollReveal for entrance

### ScholarshipRequirements.astro

**Responsibilities:**
- List 4 eligibility requirements clearly
- Use visual cards for scannability

**Design:**
- Same grid pattern as AdmissionsRequirements but 4 columns on lg (or 2x2)
- SectionHeader: kicker "PERSYARATAN", title "Syarat Kelulusan Beasiswa"
- Each requirement gets:
  - Numbered badge (01–04)
  - Icon
  - Title
  - Brief description
- Cards use `.apu-glass-card.apu-interactive-card`
- Bottom row: Download PDF button (secondary) + Apply button (primary)

**Requirements data:**
1. Lulusan SMA/SMK/Sederajat atau sedang duduk di kelas 12
2. Nilai rata-rata rapor minimal 80
3. Melampirkan fotocopy rapor/transkrip nilai
4. Mengisi formulir pendaftaran online

### ScholarshipTimeline.astro

**Responsibilities:**
- Show the 3-stage registration process
- Set clear expectations for timeline

**Design:**
- Same timeline pattern as AdmissionsTimeline but simplified
- SectionHeader: kicker "ALUR PENDAFTARAN", title "3 Tahap Menuju Beasiswa"
- 3 stages:
  1. Pendaftaran Online — submit via admission system
  2. Pengumuman (H+7) — max 7 days after verification
  3. Validasi Dokumen & Penerbitan NIM — document verification and student ID
- Alternating left/right layout on desktop
- Mobile: single column with timeline line on left
- Each stage: icon, title, description

## Data Flow

All data is static/inline within section components. No external data fetching required.

- Hero content: inline in component frontmatter
- Requirements: inline array (or reuse `requirements` data module if structure matches)
- Timeline steps: inline array
- Contact info: imported from `../data/contact`

## Error Handling

- No runtime errors expected (static content)
- Images should use `loading="eager"` for hero, `loading="lazy"` for below-fold
- Fallback alt text for all images

## Testing Strategy

1. **Visual regression:** Compare with existing pages (pendaftaran, about-apu) for consistency
2. **Responsive:** Test at 320px, 768px, 1024px, 1440px
3. **Accessibility:**
   - Keyboard navigation through timeline
   - Focus-visible states on cards and buttons
   - Sufficient color contrast
   - Semantic heading hierarchy
4. **Performance:**
   - Hero image optimized
   - No layout shift from ScrollReveal
5. **Cross-browser:** Verify glassmorphism effects in Safari

## Open Questions

- Hero background image: reuse existing campus photo or need a scholarship-specific image?
- PDF download link: what is the actual URL for the self-assessment form?
- Application URL: confirm the PMB link from contact data is correct

**Assumptions made:**
- Reuse existing `/images/loby1.webp` or similar for hero background
- PDF link will be provided later; use placeholder for now
- Application URL uses `contact.pmbLink` from data module
