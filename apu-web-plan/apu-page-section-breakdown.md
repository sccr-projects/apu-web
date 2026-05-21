# APU Page Section Breakdown (Expanded from Content Plan Entry #2)

Source: `apu-web/apu-website-content-plan.md` section **2) Page-by-Page Content Plan (What Must Exist)**.  
Scan reference for current implementation: `src/pages/index.astro`, `src/sections/*.astro`.

---

## A. Homepage (Must Exist)

### 1) Hero / Institutional Positioning
**Contains:**
- APU one-line identity + promise
- Transition clarity: “APU (under transition from IKMB)” when needed
- Primary CTA (Apply Now)
- Secondary CTA (Admissions Guide / Explore Programs)

**Current section coverage:**
- `src/sections/HeroSection.astro` ✅ (positioning, CTA, intake headline)

### 2) Key Facts Strip
**Contains:**
- Program count (7)
- Research centers count (4)
- Scholarship types
- Optional: campus location and year founded

**Current section coverage:**
- No dedicated section yet ❌

### 3) Programs Snapshot
**Contains:**
- 7 study programs (name + short differentiator)
- Links to Academics page/program anchors
- Program level tags (S1/D3/Profession)

**Current section coverage:**
- `src/sections/ProgramsSection.astro` ✅ (strong visual program listing; link targets need validation for future multi-page IA)

### 4) Admissions Quick Actions
**Contains:**
- Apply now
- Admission guide download
- Academic calendar
- Optional quick “how to apply” link

**Current section coverage:**
- Partial via `HeroSection.astro` and `PathwaysSection.astro` ⚠️

### 5) Scholarships Snapshot
**Contains:**
- Scholarship type list
- Deadline/timeline teaser
- Link to full scholarship details

**Current section coverage:**
- `src/sections/ScholarshipSection.astro` exists but commented out in `src/pages/index.astro` ⚠️

### 6) Research Highlights
**Contains:**
- 4 research centers (name + 1-line theme)
- 1–3 recent outputs/news
- Link to Research page

**Current section coverage:**
- No dedicated section yet ❌

### 7) Leadership Message Excerpt
**Contains:**
- Short chairman/president quote
- Name/title
- Link to Leadership page

**Current section coverage:**
- No dedicated section yet ❌

### 8) Student Systems Quick Links
**Contains:**
- SIAKAD, LMS, E-library, E-Ujian
- One-line purpose per system

**Current section coverage:**
- No dedicated section yet ❌

### 9) Contact Snapshot
**Contains:**
- Address
- WhatsApp
- Email
- Social links

**Current section coverage:**
- `src/sections/ContactSection.astro` exists but commented out in `src/pages/index.astro` ⚠️

### 10) Featured Stories / News
**Contains:**
- 3–6 latest items
- Category (institutional/research/student/event)
- Publish date + link

**Current section coverage:**
- No dedicated section yet ❌

---

## B. Admissions Page (Must Exist)

### 1) Admissions Overview
**Contains:**
- Who should apply
- Intake year/period
- Eligibility at a glance

### 2) Registration Waves & Deadlines
**Contains:**
- Wave name
- Date range
- Benefit note (if applicable)

### 3) Application Pathways
**Contains:**
- Online pathway
- On-campus pathway
- Decision hints (which pathway fits whom)

**Current reusable section coverage:**
- `src/sections/PathwaysSection.astro` ✅ (strong base for this block)

### 4) Fees & Payment Methods
**Contains:**
- Application fee amount
- Payment channels
- Payment proof instructions

### 5) Step-by-Step Process
**Contains:**
- Submission → test → interview → offer → payment → verification
- SLA/timeline per step if available

### 6) Assessment Schedule & Result Timeline
**Contains:**
- Test/interview schedule windows
- Result announcement timeline

### 7) SPI Rules
**Contains:**
- SPI amount/range
- Payment terms
- Due dates/rules

### 8) Refund Policy
**Contains:**
- Eligibility conditions
- Non-refundable cases
- Claim process and timeframe

### 9) Required Documents Checklist
**Contains:**
- Document items
- Format constraints
- Submission method

**Current reusable section coverage:**
- `src/sections/RequirementsSection.astro` ✅ (generic checklist foundation)

### 10) Apply CTA Cluster
**Contains:**
- Portal apply link
- Direct registration
- Guide PDF
- Camaba login

### 11) Admissions Contacts
**Contains:**
- Admissions WhatsApp
- Email and office hours
- Escalation contact

---

## C. Scholarships Page (Must Exist)

### 1) Scholarship Overview
**Contains:**
- Scholarship period + intake year
- Purpose/value proposition

### 2) Timeline
**Contains:**
- Register period
- H+7 announcement
- Validation/NIM issuance timeline

### 3) Scholarship Catalog
**Contains:**
- Academic
- Non-academic achievement
- Content creator
- 4th type with final normalized naming

**Current reusable section coverage:**
- `src/sections/ScholarshipSection.astro` ✅ (core catalog card base)

### 4) Benefits Table
**Contains:**
- Benefit types by scholarship
- Duration/coverage
- Exclusions or cap

### 5) Requirements per Type
**Contains:**
- Eligibility criteria
- Required documents
- Minimum standards (grade/achievement/etc.)

**Current reusable section coverage:**
- `ScholarshipSection.astro` + scholarship popover in `PathwaysSection.astro` ⚠️ (needs normalization + full table)

### 6) How to Apply
**Contains:**
- Step sequence
- Submission links
- Validation notes

### 7) FAQ
**Contains:**
- Stacking rules
- Max benefit policy
- Docs format/technical questions

### 8) Help Desk
**Contains:**
- Scholarship admin contact
- Response time/hours

---

## D. Academics / Education Page (Must Exist)

### 1) Academic Philosophy
**Contains:**
- Learning philosophy statement
- Teaching model references (e.g., SCL/OBE)

### 2) Program Directory (7 Programs)
**Contains:**
- Program name + level
- Short differentiator
- Link to detail page/profile

**Current reusable section coverage:**
- `src/sections/ProgramsSection.astro` ✅ (good basis for directory)

### 3) Program Structure Levels
**Contains:**
- Bachelor / Diploma / Profession definition
- Typical study pathway

### 4) Academic Calendar
**Contains:**
- Semester windows
- Key dates (registration, exam, break)

### 5) Learning Platforms
**Contains:**
- LMS and SIAKAD functions
- Access notes/support contact

### 6) Library & Exam Systems
**Contains:**
- E-library access
- E-Ujian overview

### 7) Regulations & Handbook
**Contains:**
- Academic rules
- Handbook download links

### 8) New Student Academic Onboarding
**Contains:**
- Orientation
- Academic advising
- Class readiness checklist

---

## E. Research Page (Must Exist)

### 1) Research Mission
**Contains:**
- Institutional research direction
- Priority domains

### 2) Research Center Directory
**Contains:**
- 4 center names
- Theme/focus
- Contact or link per center

### 3) Projects / Publications Highlights
**Contains:**
- Featured outputs
- Title/date/link
- Attribution/context

### 4) Partnerships & Collaboration
**Contains:**
- Industry/government/academic collaboration options
- Partnership inquiry CTA

### 5) Governance & Ethics Contact
**Contains:**
- Research governance/ethics contact
- Process references (if available)

### 6) Related Units & Facilities
**Contains:**
- LPPM
- Labs/core facilities
- Supporting units

---

## F. About APU Page (Must Exist)

### 1) Institutional Story / History
**Contains:**
- Historical timeline
- Transition from IKMB context

### 2) Vision & Mission
**Contains:**
- Official statements
- Supporting values narrative

### 3) Institutional Profile
**Contains:**
- APU naming policy
- Legal identity context

### 4) Organizational Structure
**Contains:**
- High-level org chart
- Main functional units

### 5) Chairman Message
**Contains:**
- Leadership message excerpt
- Signature/name/title

### 6) Institutional Units
**Contains:**
- LPMI
- LPPM
- Additional core units if available

### 7) Key Stats
**Contains:**
- Students/faculty/campuses (only verified figures)

### 8) Legal & Accreditation Disclosure
**Contains:**
- Decree reference (e.g., SK Kemendikbudristek No. 813/E/O/2023)
- Program accreditation publication policy

---

## G. Leadership Page (Must Exist)

### 1) Chairman/President Profile
**Contains:**
- Biography summary
- Leadership focus

### 2) Leadership Team List
**Contains:**
- Management roster
- Roles and mandates

### 3) Strategic Messages / Speeches
**Contains:**
- Statement archive
- Institutional direction notes

### 4) Governance Contacts
**Contains:**
- Secretariat contact
- Protocol for formal correspondence

---

## H. Student Life & Services Page (Must Exist)

### 1) Systems Directory
**Contains:**
- SIAKAD, LMS, Email, E-library, E-Ujian
- One-line purpose + access links

### 2) Tutorials Center
**Contains:**
- System how-to guides
- Video/PDF tutorials

### 3) Academic Support Services
**Contains:**
- Advising/tutoring/remedial support
- Access mechanism

### 4) Wellbeing & Counselling
**Contains:**
- Service scope
- Appointment and emergency channel

### 5) Career / Alumni / Tracer
**Contains:**
- Career service overview
- Alumni/tracer links

### 6) KIP Kuliah Information
**Contains:**
- Eligibility and process
- Related contacts

### 7) Service Contacts & Hours
**Contains:**
- PIC by service
- Office hours and SLA

---

## I. International Page (Important)

### 1) International Vision
**Contains:**
- Global orientation statement
- International office mandate

### 2) Programs for International Students/Partners
**Contains:**
- Inbound options
- Partner-facing collaboration options

### 3) Exchange & Collaboration Opportunities
**Contains:**
- Student exchange
- Internship
- Research collaboration

### 4) International Admissions Guidance
**Contains:**
- Requirements
- Deadlines
- Process guidance

### 5) International Office Contact
**Contains:**
- Email/phone/address
- EN/ID channel hints

---

## J. News & Stories Page (Important)

### 1) Institutional News
**Contains:**
- Institutional updates
- Governance/academic announcements

### 2) Research Stories
**Contains:**
- Research highlights
- Publications/events context

### 3) Student/Alumni Stories
**Contains:**
- Success stories
- Impact narratives

### 4) Events & Announcements
**Contains:**
- Upcoming/past events
- Registration/info links

### 5) Media Assets / Downloads
**Contains:**
- Press kit or media files
- Downloadable assets if available

---

## K. Contact Page (Must Exist)

### 1) General Contact
**Contains:**
- Main phone/WhatsApp/email
- General inquiry channel

### 2) Admissions WhatsApp
**Contains:**
- Dedicated admissions number/link

### 3) Registration WhatsApp
**Contains:**
- Direct registration assistance channel

### 4) Payment Confirmation Contact
**Contains:**
- Payment proof submission channel
- Response SLA

### 5) Office Hours
**Contains:**
- Service hours by channel
- Holiday exceptions

### 6) Campus Location / Map
**Contains:**
- Full address
- Embedded map/direction links

### 7) Department Contacts
**Contains:**
- Admissions
- Scholarship
- Research
- International office
- Student services

**Current reusable section coverage:**
- `src/sections/ContactSection.astro` ✅ (strong baseline; currently disabled in homepage composition)

---

## Existing `src/sections` Coverage Summary vs Entry #2

### Already available and reusable now
- `HeroSection.astro` → Homepage Hero / positioning / primary CTA
- `ProgramsSection.astro` → Programs listing (Homepage + Academics)
- `PathwaysSection.astro` → Admissions pathways and wave-style blocks
- `RequirementsSection.astro` → Admissions checklist block
- `ScholarshipSection.astro` → Scholarship catalog block
- `ContactSection.astro` → Contact details + social links

### Exists but not active on current homepage
- `ScholarshipSection.astro` (commented out in `src/pages/index.astro`)
- `ContactSection.astro` (commented out in `src/pages/index.astro`)

### Not yet represented in `src/sections`
- Research highlights/home research teaser
- Leadership message block
- Key facts strip
- Systems quick links hub
- Featured stories/news block
- Any dedicated multi-page sections for: About, Leadership, Student Life, International, News, full Research
