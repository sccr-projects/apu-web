## 1. Source Crawl & Evidence Capture

- [x] 1.1 Enumerate crawl targets from `apu-web-plan/apu-website-content-plan.md` sitemap and linked subdomains.
- [x] 1.2 Crawl `kmb.ac.id` and relevant subdomains (admissions, scholarship, international, program sites, research pages) and store evidence references.
- [x] 1.3 Normalize evidence records into a per-page criteria matrix (criterion, verdict, URL, note, retrieval date).

## 2. Coverage Audit Output

- [x] 2.1 Evaluate every must-have block per page and mark `FULFILLED` / `PARTIAL` / `MISSING`.
- [x] 2.2 Classify all non-fulfilled criteria by gap type (`content-absent`, `content-incomplete`, `policy-missing`, `contact-missing`, `governance-missing`).
- [x] 2.3 Generate an audit summary table with launch-phase recommendation (P0/P1/P2).

## 3. Implementation Planning for Fulfillable Scope

- [x] 3.1 Create detailed implementation plan for fulfillable pages with section-by-section content mapping.
- [x] 3.2 Map each section to APU design language primitives/components (`apu-*`, `SectionHeader.astro`, `CtaButton.astro`).
- [x] 3.3 Define page build order, content dependencies, and handoff notes for implementation.

## 4. Missing Content Register

- [x] 4.1 Create markdown gap register listing unmet criteria, missing fields, and source evidence of absence.
- [x] 4.2 Add suggested data owner per gap (Admissions, Academics, Student Affairs, International Office, Research/LPPM, Leadership).
- [x] 4.3 Add priority and unblock conditions for each gap (what data enables implementation).

## 5. Institutional Naming Normalization

- [x] 5.1 Define replacement rules to migrate public-facing references from IKMB naming to `APU Semarang`.
- [x] 5.2 Define exception rules for legal/historical provenance content and citation handling.
- [x] 5.3 Run naming QA checklist on planned content outputs and log unresolved exceptions.

## 6. Final Validation & Handoff

- [x] 6.1 Verify all pages in sitemap are covered by either implementation plan or missing register.
- [x] 6.2 Verify no unsupported KPI/performance claims are introduced.
- [x] 6.3 Publish final artifacts and readiness note for `/opsx-apply`.
