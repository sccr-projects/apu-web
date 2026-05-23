# APU Semarang Content Coverage Audit + Implementation Plan (Doc-Only)

_Generated from live crawl evidence in this change session. Scope: no code changes._

## 1) Crawl Targets & Evidence Index

### Primary domain
- https://kmb.ac.id/

### Core content pages
- https://kmb.ac.id/admissions-aid
- https://kmb.ac.id/academic-calendar
- https://kmb.ac.id/history
- https://kmb.ac.id/vision-and-mission
- https://kmb.ac.id/message-from-the-chairman-of-the-foundation
- https://kmb.ac.id/pusat-riset-pelayanan-dan-animal-model
- https://kmb.ac.id/pusat-riset-herbal
- https://kmb.ac.id/pusat-riset-stem-cell-dan-secretome
- https://kmb.ac.id/pusat-riset-kanker
- https://kmb.ac.id/tutorial-siakad-ikmb

### Subdomains crawled
- https://scholarship.kmb.ac.id/
- https://international.kmb.ac.id/
- https://biotechnology.kmb.ac.id/
- https://biomedical.kmb.ac.id/
- https://management.kmb.ac.id/
- https://communication.kmb.ac.id/
- https://law.kmb.ac.id/
- https://bachelor-midwifery.kmb.ac.id/
- https://d3-midwifery.kmb.ac.id/

### Retrieval date
- 2026-05-23

## 2) Coverage Matrix (Per Page)

Verdict legend: **FULFILLED / PARTIAL / MISSING**

| Page | Verdict | Evidence summary |
|---|---|---|
| Homepage | PARTIAL | Positioning, programs, scholarships, leadership excerpt, links exist on `kmb.ac.id`; but featured stories feed quality/social handles/key-facts strip incomplete. |
| Admissions | FULFILLED | `admissions-aid` includes intake window, pathways, fee, step flow, schedule, SPI payment, refund policy, docs/CTA/contact/payment verification. |
| Scholarships | PARTIAL | `scholarship.kmb.ac.id` has 4 scholarship categories (Academic, Non-Academic, Content Creator, Partnership/Pre-Univ framing) but detailed normalized benefit matrix/FAQ depth still uneven. |
| Academics | PARTIAL | 7 program subdomains and narratives, vision/mission, differentiators, system links exist; hard data (SKS, duration, accreditation code/validity, full matrix outcomes) not complete. |
| Research | PARTIAL | 4 centers available on `kmb.ac.id` + SCCR linkage from nav; governance/ethics contacts, PI directory, project KPI depth missing. |
| About APU | PARTIAL | History, vision/mission, chairman message exist; org structure endpoint unresolved in crawl output and key stats/legal disclosure packaging not complete. |
| Leadership | PARTIAL | Chairman profile/message exists; full leadership roster/biographies/governance contacts missing. |
| Student Life & Services | PARTIAL | Strong systems directory (SIAKAD/LMS/Library/E-Ujian/KIP/Email/Tracer + tutorials); support service descriptions/SLA/escalation/wellbeing details missing. |
| International | PARTIAL | `international.kmb.ac.id` has office narrative, programs, mobility, contact, news; policy depth (visa/onboarding/housing/requirements) incomplete. |
| News & Stories | PARTIAL | News stream exists on International and external SCCR context, but unified APU editorial taxonomy/workflow not present. |
| Contact | PARTIAL | Address + primary WA/phone + some emails found; full departmental directory, hours policy, and official social handle set incomplete. |

## 3) Gap Classification Register

| Page/Block | Gap type | Missing item | Suggested owner | Priority |
|---|---|---|---|---|
| Academics hard data | content-incomplete | SKS, duration, accreditation number/validity, intake quota | Academics | P0 |
| Academics outcomes | content-incomplete | Career outcomes, employer evidence, curriculum matrix completeness | Academics | P0 |
| Scholarships normalization | content-incomplete | Canonical naming/benefit rule consistency across 4th type | Admissions + Scholarship | P0 |
| Contact directory | contact-missing | Department emails + SLA + social handles | Admissions/Comms | P0 |
| Leadership roster | content-absent | Team bios beyond chairman | Leadership Office | P2 |
| Student support operations | governance-missing | Service SOP, escalation, grievance, wellbeing channels | Student Affairs | P1 |
| Research governance | governance-missing | PI directory, ethics process, governance contacts | Research/LPPM | P1 |
| International policy | policy-missing | Visa, onboarding, housing, intl admissions checklist | International Office | P2 |
| News governance | governance-missing | Editorial owner, cadence, taxonomy | Comms/Marketing | P1 |

## 4) Audit Summary (P0/P1/P2)

- **P0 (launch-critical and implement now):** Admissions (full), core Homepage blocks, About core narrative, Contact baseline, Scholarships baseline, Academics narrative + systems.
- **P1 (post-launch strengthening):** Research evidence layer, Student Life services SOP, News governance and starter editorial package.
- **P2 (policy depth / governance expansion):** Leadership full roster, International policy-grade operations, advanced KPI publication.

## 5) Detailed Implementation Plan (Fulfillable Scope)

### 5.1 Homepage (partial-fulfillable now)
- Sections to implement now:
  1) Positioning hero (APU Semarang narrative)
  2) Quick admissions actions (Apply, Guide, Calendar)
  3) Programs snapshot (7 links)
  4) Scholarship snapshot (4 tracks)
  5) Research highlights (4 centers)
  6) Leadership excerpt (chairman)
  7) Systems quick links
  8) Contact baseline
- Defer/placeholder: social handle completeness, validated key-facts KPI strip.

### 5.2 Admissions (fully fulfillable)
- Use `admissions-aid` as primary source of truth.
- Include exact flow: submission -> assessment -> interview -> offer -> SPI payment -> verification.
- Keep refund and official payment channel clearly surfaced.

### 5.3 Scholarships (baseline fulfillable)
- Publish 4 scholarship pathways.
- Add note where policy details still awaiting canonical source normalization.

### 5.4 Academics (narrative fulfillable)
- Publish 7 program cards with differentiators and links.
- Publish platforms and academic calendar links.
- Mark hard-data fields as “pending official validation.”

### 5.5 Research (initial fulfillable)
- Publish mission narrative + 4-center directory + collaboration ecosystem wording.
- Keep KPI/project deep metrics out until validated.

### 5.6 About APU (core fulfillable)
- Publish history + vision/mission + chairman message + transition narrative.
- Keep legal references in provenance style.

### 5.7 Student Life, International, Contact, News, Leadership
- Ship baseline sections where evidence exists; attach explicit missing-data cards for absent policy/governance details.

## 6) APU Design-Language Mapping

- Section wrapper: `apu-section-shell`
- Header: `SectionHeader.astro` + `apu-section-kicker` + `apu-gradient-line`
- Content cards: `apu-glass-card apu-interactive-card`
- CTA: `CtaButton.astro` with `apu-btn--primary` / `apu-btn--secondary`
- Small labels: `apu-pill-badge`
- Feature icons: `apu-icon-chip`
- Motion sequencing: `ScrollReveal.astro` (header then cards with incremental delay)

## 7) Build Order & Dependencies

1. Admissions
2. Scholarships
3. Academics
4. About
5. Contact
6. Homepage assembly
7. Research
8. Student Life & Services
9. Leadership
10. International + News/Stories

Dependency notes:
- Homepage finalization depends on P0 page extracts.
- Leadership/International policy depth depends on owner-provided governance docs.

## 8) Naming Normalization Rules (IKMB -> APU Semarang)

### Replacement rules (public-facing)
- Replace “Institut Karya Mulia Bangsa” -> “APU Semarang”.
- Replace “IKMB” -> “APU Semarang”.

### Exception rules (preserve provenance)
- Historical/legal contexts may retain original naming, e.g. decree references and archival quotes.
- If preserved, pair with transition context, e.g. “(under transition to APU Semarang)”.

### QA checklist
- [ ] No IKMB naming left in marketing/hero/CTA copy.
- [ ] Legal/history sections reviewed for provenance-safe exceptions.
- [ ] All preserved exceptions include transition context.
- [ ] SCCR references use collaboration ecosystem wording only.

## 9) Final Validation

- All sitemap pages are covered by either:
  - implement-now section plan, or
  - explicit gap register entry.
- No unverified KPI/performance claims added.
- Document-only implementation package complete.
