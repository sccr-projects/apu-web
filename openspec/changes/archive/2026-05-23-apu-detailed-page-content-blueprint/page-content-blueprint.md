# APU Semarang — Detailed Page Content Blueprint (Content-First)

Last evidence retrieval: **2026-05-23**  
Primary source ecosystem: `kmb.ac.id` + linked subdomains

## A. Block Contract Schema (Global)

Setiap blok di semua halaman wajib pakai kontrak ini:

- **Block ID**
- **Order** (top→bottom)
- **Purpose**
- **Required fields**
- **Optional fields**
- **Primary CTA + Secondary CTA**
- **Evidence source(s)**
- **Readiness**: `Ready` | `Ready-with-caveat` | `Missing-input`
- **Fallback policy**: `placeholder` | `hide` | `reduced variant`
- **Design mapping** (`apu-*`, `SectionHeader.astro`, `CtaButton.astro`)

---

## 1) HOME

### H-01 Hero Positioning
- Purpose: positioning APU Semarang + immediate action
- Required: headline, subheadline, transition note (if needed), primary CTA (Daftar), secondary CTA (Jalur)
- Evidence: `https://kmb.ac.id/` hero + admissions links
- Readiness: Ready-with-caveat (copy polishing)
- Fallback: reduced variant (without KPI claims)
- Design: `apu-section-shell`, `SectionHeader.astro`, `CtaButton.astro`

### H-02 Admissions Quick Actions
- Required: Apply now, Guide PDF, Academic calendar
- Evidence: `/admissions-aid`, registration guide URL, `/academic-calendar`
- Readiness: Ready

### H-03 Program Snapshot (7 Program)
- Required: 7 cards (title, short differentiator, link)
- Evidence: 7 program subdomains
- Readiness: Ready

### H-04 Scholarship Snapshot
- Required: 4 scholarship tracks + short benefit hint + CTA
- Evidence: `https://scholarship.kmb.ac.id/`
- Readiness: Ready-with-caveat (benefit standardization)

### H-05 Research Highlights
- Required: 4 centers (name + one-line scope + link)
- Evidence: 4 riset pages on `kmb.ac.id`
- Readiness: Ready

### H-06 Leadership Message Excerpt
- Required: chairman excerpt + link to leadership/about
- Evidence: `/message-from-the-chairman-of-the-foundation`
- Readiness: Ready

### H-07 Student Systems Quick Links
- Required: SIAKAD, LMS, Library, E-Ujian, KIP, Email
- Evidence: site nav
- Readiness: Ready

### H-08 Contact Strip
- Required: address, WA/phone, email, social placeholders
- Evidence: homepage + international contact block
- Readiness: Ready-with-caveat (social handles incomplete)
- Fallback: placeholder for unverified channels

---

## 2) ADMISSIONS

### A-01 Hero + Intake Context
- Required: intake year, date window, primary action
- Evidence: `/admissions-aid`
- Readiness: Ready

### A-02 Registration Waves + Deadlines
- Required: wave timeline table/date range
- Evidence: admissions page date range
- Readiness: Ready

### A-03 Pathways
- Required: Online + On-campus path, step entry points
- Evidence: admissions process section
- Readiness: Ready

### A-04 Fee & Payment Method
- Required: application fee, bank details, payment channel rules
- Evidence: admissions page payment section
- Readiness: Ready

### A-05 Admission Process (Step 1-7)
- Required: submission → assessment → interview → offer → SPI payment → verification
- Evidence: admissions page long-form flow
- Readiness: Ready

### A-06 Assessment Schedule & Result Timeline
- Required: schedule cadence + result release timing
- Evidence: admissions assessment section
- Readiness: Ready

### A-07 SPI Rules + Refund Policy
- Required: SPI split payment + refund conditions
- Evidence: admissions policy block
- Readiness: Ready

### A-08 Required Documents Checklist
- Required: checklist cards/list
- Evidence: admissions supporting content and PMB flow
- Readiness: Ready-with-caveat (normalize final doc list)

### A-09 CTA Stack
- Required: portal, guide, direct registration, camaba login
- Evidence: admissions page links
- Readiness: Ready

### A-10 Admissions Contact
- Required: WA + response hours + escalation rule
- Evidence: admissions WA listed
- Readiness: Ready-with-caveat (hours/SLA)

---

## 3) SCHOLARSHIPS

### S-01 Hero + Period
- Required: scholarship cycle statement + intake year
- Evidence: scholarship homepage
- Readiness: Ready

### S-02 Common Timeline
- Required: register → H+7 announcement → validation/NIM
- Evidence: scholarship process framing + existing plan
- Readiness: Ready-with-caveat (confirm exact SLA wording)

### S-03 Scholarship Catalog (4 Types)
- Required: academic, non-academic, content creator, partnership/pre-univ naming
- Evidence: scholarship category cards
- Readiness: Ready-with-caveat (canonical naming for 4th type)

### S-04 Benefit Tables
- Required: per type benefit rows (tuition/SPI/other)
- Evidence: category pages (partial)
- Readiness: Missing-input
- Fallback: placeholder table + “menunggu konfirmasi resmi”

### S-05 Requirements per Type
- Required: eligibility, documents, thresholds
- Evidence: category narratives (partial)
- Readiness: Ready-with-caveat

### S-06 How to Apply
- Required: procedural steps + submission entry
- Evidence: scholarship domain + PMB links
- Readiness: Ready

### S-07 FAQ
- Required: stacking, max benefit, document format, timeline
- Evidence: not centrally published
- Readiness: Missing-input
- Fallback: reduced FAQ (only verified answers)

### S-08 Helpdesk
- Required: contact channel + hours + owner
- Evidence: WA available, owner details incomplete
- Readiness: Ready-with-caveat

---

## 4) ACADEMICS

### AC-01 Academic Philosophy
- Required: institutional academic statement
- Evidence: vision/mission + program narratives
- Readiness: Ready

### AC-02 Program Directory (7)
- Required: all 7 programs + links + differentiators
- Evidence: 7 subdomains
- Readiness: Ready

### AC-03 Level Structure
- Required: Bachelor, Diploma, Profession structure
- Evidence: program set
- Readiness: Ready

### AC-04 Academic Calendar
- Required: link + summary
- Evidence: `/academic-calendar`
- Readiness: Ready

### AC-05 Learning Platforms
- Required: LMS/SIAKAD purpose + link
- Evidence: nav links
- Readiness: Ready

### AC-06 Library & Exam
- Required: E-library + E-Ujian link + usage note
- Evidence: nav links
- Readiness: Ready

### AC-07 Regulations/Handbook
- Required: regulation references/download links
- Evidence: partial references
- Readiness: Missing-input

### AC-08 Post-Admission Pathway
- Required: orientation/advising/readiness narrative
- Evidence: partially inferable from ecosystem
- Readiness: Ready-with-caveat

### AC-09 Program Hard Data Panel
- Required: SKS, duration, accreditation, quota, language
- Evidence: largely absent
- Readiness: Missing-input
- Fallback: hide panel or publish “data segera diperbarui”

---

## 5) RESEARCH

### R-01 Mission Statement
- Required: institutional research mission copy
- Evidence: center pages + institutional narrative
- Readiness: Ready

### R-02 4-Center Directory
- Required: names, one-line theme, links
- Evidence: 4 center pages
- Readiness: Ready

### R-03 Publication/Project Highlights
- Required: latest highlights cards
- Evidence: partial via broader ecosystem
- Readiness: Ready-with-caveat

### R-04 Partnership Opportunities
- Required: collaboration CTA + contact intake
- Evidence: SCCR linkage + international collab narratives
- Readiness: Ready-with-caveat

### R-05 Governance/Ethics Contacts
- Required: ethics process/contact owner
- Evidence: not clearly published
- Readiness: Missing-input

### R-06 Related Units (LPPM/LPMI/Labs)
- Required: unit links + scope notes
- Evidence: nav links for LPPM/LPMI
- Readiness: Ready

---

## 6) ABOUT APU

### AB-01 History
- Required: institutional history paragraph + decree reference
- Evidence: `/history`
- Readiness: Ready

### AB-02 Vision & Mission
- Required: current vision and mission
- Evidence: `/vision-and-mission`
- Readiness: Ready

### AB-03 Transition Statement
- Required: APU Semarang primary naming + IKMB transition context
- Evidence: existing site wording
- Readiness: Ready

### AB-04 Organizational Structure
- Required: org structure summary + visual/link
- Evidence: endpoint uncertain in crawl output
- Readiness: Missing-input

### AB-05 Chairman/Foundation Message
- Required: message excerpt + full link
- Evidence: chairman page
- Readiness: Ready

### AB-06 Units & Governance Links
- Required: LPMI/LPPM links and role snippets
- Evidence: nav links
- Readiness: Ready-with-caveat

### AB-07 Legal & Accreditation Notes
- Required: decree citation + disclosure scope
- Evidence: history + planning datasets
- Readiness: Ready-with-caveat

---

## 7) LEADERSHIP

### L-01 Chairman Spotlight
- Required: profile, message excerpt, portrait, credentials
- Evidence: chairman page
- Readiness: Ready

### L-02 Leadership Team Grid
- Required: rectorate/management roster + bios
- Evidence: not found
- Readiness: Missing-input
- Fallback: reduced variant (coming soon cards)

### L-03 Strategic Statements
- Required: curated quotes/speeches
- Evidence: limited
- Readiness: Ready-with-caveat

### L-04 Governance Contacts
- Required: office channel + response scope
- Evidence: partial
- Readiness: Missing-input

---

## 8) STUDENT LIFE & SERVICES

### SL-01 Systems Directory
- Required: SIAKAD/LMS/Email/E-Library/E-Ujian/KIP/Tracer links + one-line purpose
- Evidence: nav links
- Readiness: Ready

### SL-02 Tutorial Center
- Required: tutorial cards (SIAKAD/LMS)
- Evidence: tutorial pages
- Readiness: Ready

### SL-03 Academic Support Services
- Required: advising/admin support summary + contacts
- Evidence: limited
- Readiness: Missing-input

### SL-04 Wellbeing/Health/Counselling
- Required: service description + channel + escalation
- Evidence: absent
- Readiness: Missing-input

### SL-05 Career/Alumni/Tracer
- Required: support model + external links + PIC
- Evidence: tracer link exists
- Readiness: Ready-with-caveat

### SL-06 Service Hours + SLA
- Required: service windows and response promise
- Evidence: absent
- Readiness: Missing-input

---

## 9) INTERNATIONAL

### I-01 Hero Vision
- Required: international office positioning
- Evidence: `international.kmb.ac.id`
- Readiness: Ready

### I-02 Programs & Mobility
- Required: internship, exchange, research collaboration blocks
- Evidence: international site program cards
- Readiness: Ready

### I-03 Global Engagement/Partners
- Required: partners overview + active collab examples
- Evidence: international news + partner nav
- Readiness: Ready-with-caveat

### I-04 International Admissions Guidance
- Required: requirements, fees, process checklist
- Evidence: policy details incomplete
- Readiness: Missing-input

### I-05 International Contact Point
- Required: address, phone, email, office role
- Evidence: contact block on international site
- Readiness: Ready

### I-06 Policy Layer (Visa/Housing/Onboarding)
- Required: practical guidance docs
- Evidence: absent
- Readiness: Missing-input

---

## 10) NEWS & STORIES

### N-01 Taxonomy Header
- Required: filters for institutional/research/student/event/media
- Evidence: multi-source but not unified
- Readiness: Ready-with-caveat

### N-02 Featured Story
- Required: highlighted latest story
- Evidence: international news stream
- Readiness: Ready

### N-03 Story Listing
- Required: cards with category, date, excerpt, link
- Evidence: existing news cards
- Readiness: Ready

### N-04 Event/Announcement Stream
- Required: announcement list and date status
- Evidence: partial
- Readiness: Ready-with-caveat

### N-05 Media/Downloads
- Required: documents/media asset section
- Evidence: limited
- Readiness: Missing-input

### N-06 Editorial Governance Note
- Required: content owner/cadence/review flow
- Evidence: absent
- Readiness: Missing-input

---

## 11) CONTACT

### C-01 General Contact Hero
- Required: primary phone/WA/email/address summary
- Evidence: homepage + international page
- Readiness: Ready

### C-02 Admissions/Registration/Payment Channels
- Required: distinct channels by purpose
- Evidence: admissions page includes payment verification WA
- Readiness: Ready-with-caveat

### C-03 Office Hours
- Required: hours per service line
- Evidence: not explicit
- Readiness: Missing-input

### C-04 Campus Map & Location
- Required: map embed/location details
- Evidence: address available, embed unspecified
- Readiness: Ready-with-caveat

### C-05 Department Matrix
- Required: Admissions, Scholarship, Research, International, Student Services contacts
- Evidence: incomplete directory
- Readiness: Missing-input

---

## B. Design Mapping Rules (All Pages)

- Section wrapper: `apu-section-shell`
- Header: `SectionHeader.astro` (`kicker`, `title`, `description`)
- CTA links: `CtaButton.astro` variants
- Cards: `apu-glass-card apu-interactive-card`
- Minor labels: `apu-pill-badge`
- Icons: `apu-icon-chip`
- Reveal order: header first, then list/grid progressive delay

## C. Naming Policy (Applied)

- Public-facing copy uses **APU Semarang**.
- IKMB naming only retained in legal/history provenance contexts with transition qualifier.
