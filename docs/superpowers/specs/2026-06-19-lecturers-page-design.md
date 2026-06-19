# Lecturers Section Design

**Date:** 2026-06-19  
**Status:** Approved

## Goal
Create a single reusable Astro section, `LecturersSection`, inspired by `@lecturersdesign.png`. It combines the featured-researcher card and the faculty directory carousel into one section component. The section follows the project's APU design language (Tailwind v4 tokens, `apu-*` primitives, Space Grotesk/Mono, glass cards, section shell) and can be dropped into any page.

## Design Decisions

### 1. Scope
- One section component only. No new page route or layout is created.
- The consumer page imports and renders `<LecturersSection />` wherever the faculty spotlight is needed.

### 2. Files to Create

| File | Purpose |
|------|---------|
| `src/sections/LecturersSection.astro` | Combined featured-researcher + faculty directory section |
| `src/data/lecturers-section.ts` | Hardcoded section copy, featured-lecturer details, CTA labels |

### 3. Section Component (`LecturersSection`)
A single `.apu-section-shell` wrapper contains two stacked blocks.

#### Block A — Featured Researcher
- Dark navy inner card using `.apu-glass-card` with local token overrides.
- Layout: two-column on desktop, stacked on mobile.
- Left content:
  - `apu-pill-badge` kicker: "FEATURED RESEARCHER".
  - Lecturer name (display font) and role / department.
  - "Past Experience" list with hardcoded credentials.
  - "Notable Research" paragraph.
  - Two CTAs using `CtaButton.astro`:
    - Primary: "View Full Portfolio"
    - Secondary: "Contact Office"
- Right content:
  - Featured lecturer photo from `src/data/lecturers.ts`, framed in a rounded card with subtle border/shadow.

#### Block B — Faculty Directory
- `SectionHeader.astro` with kicker "FACULTY DIRECTORY", title, and description.
- Carousel:
  - Track of `.apu-glass-card.apu-interactive-card` items built from the `lecturers` array.
  - Each card shows the lecturer photo, name, role, and a "View Profile →" link.
  - Previous / next arrow buttons control scroll position.
  - Keyboard accessible (arrow keys optional), with visible `focus-visible` states.
  - Responsive behavior:
    - Mobile: 1 card visible with peek of next card.
    - Tablet: 2 cards.
    - Desktop: 4 cards.

### 5. Data Sources
- Featured lecturer: **Dr. Marcus Chen** from `src/data/lecturers.ts`.
- Directory cards: full `lecturers` array from `src/data/lecturers.ts`.
- Section copy, featured-lecturer biography, experience, research, and CTA labels: hardcoded in `src/data/lecturers-section.ts`.

### 6. Tokens & Motion
- Reuses existing APU primitives: `.apu-section-shell`, `.apu-glass-card`, `.apu-interactive-card`, `.apu-pill-badge`, `.apu-btn`, `.apu-section-kicker`, `.apu-gradient-line`.
- `ScrollReveal.astro` wraps the featured card, directory header, and directory cards for entrance animation.
- Local CSS token overrides only at the section root.
- Transitions stay in the 220–300 ms range.

### 7. Accessibility
- Strong contrast for text on navy and accent surfaces.
- `focus-visible` outlines on carousel controls and profile links.
- Meaningful `alt` text on every lecturer photo.
- Semantic heading hierarchy (`h2` for section title, `h3` for featured-lecturer name and card names).

## Out of Scope
- No backend or CMS integration; all data is hardcoded or sourced from existing `src/data/lecturers.ts`.
- No individual lecturer detail pages; "View Profile" links are placeholders (`#`).
- No search or filtering in the directory.
