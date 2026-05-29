# About APU Page — Implementation Plan

> **Source:** Based on `apu-website-content-plan.md` (Section F) + live crawl of `kmb.ac.id` and `international.kmb.ac.id` (May 2026).
> **Scope:** Content and structural implementation plan for the About APU page.
> **Status:** Content gathered from public sources; some gaps remain for institutional verification.

---

## 1) Page Purpose

**Goal:** Establish institutional identity, trust, and transparency for prospective students, parents, partners, and stakeholders.

**Primary audience:**
- Prospective students and parents (needs clarity on legitimacy, vision, and stability)
- Academic partners and collaborators (needs institutional profile and governance info)
- Government/regulatory bodies (needs legal standing and accreditation evidence)

---

## 2) Must-Have Blocks (from Content Plan) + Crawl Findings

### Block 1: History / Latar Belakang

**Status:** ✅ Content gathered from `kmb.ac.id`

**Verified facts:**
- **Founding date:** 17 October 2023
- **Legal basis:** SK Menteri Pendidikan, Kebudayaan, Riset dan Teknologi No. 813/E/O/2023, dated 17 October 2023
- **Managing foundation:** Yayasan Karya Mulia Keluarga (Yayasan KMK)
- **Foundation established:** 1990 (per `international.kmb.ac.id` footer: "SINCE 1990")
- **Legal framework:** Pancasila, UUD 1945, UU No. 20/2003 (Sistem Pendidikan Nasional), UU No. 12/2012 (Pendidikan Tinggi), Permenristekdikti No. 16/2018
- **Governance document:** STATUTA serves as the foundational charter for all institutional activities

**Narrative angle:**
> Institut Karya Mulia Bangsa (IKMB) was established on 17 October 2023 under SK Kemendikbudristek No. 813/E/O/2023, managed by Yayasan Karya Mulia Keluarga — a foundation with roots dating back to 1990. APU represents the evolution of IKMB into a comprehensive university positioned for global competitiveness.

**Content note:** The Chairman's message references location as "Ungaran, Kabupaten Semarang," while the approved official address is Jl. Nongkosawit Raya, Nongkosawit, Kec. Gn. Pati, Kota Semarang, Jawa Tengah 50224. The international subdomain also lists "Semarang, Central Java, 50224." **Use the approved official address (Kota Semarang) as primary; clarify campus location if needed.**

---

### Block 2: Vision & Mission / Visi & Misi

**Status:** ✅ Content gathered from `kmb.ac.id/vision-and-mission`

**Vision (Visi):**
> Menjadi Institusi yang unggul, inovatif, berkarakter, berdaya saing di tingkat global di tahun 2043

**Mission (Misi):**
1. Melaksanakan pendidikan yang bermutu untuk menghasilkan lulusan yang unggul, berkarakter, inovatif, berdaya saing di tingkat global sesuai perkembangan ilmu dan teknologi
2. Melaksanakan penelitian yang berkontribusi kepada pengembangan ilmu pengetahuan dan teknologi
3. Melaksanakan pengabdian masyarakat yang berkontribusi pada pengembangan ilmu pengetahuan dan teknologi
4. Mengembangkan jejaring nasional dan internasional untuk mendukung Tri Dharma Perguruan Tinggi

**Presentation recommendation:** Display vision prominently (large typography), followed by the four mission points as a numbered or icon-led list. Consider bilingual presentation (ID primary, EN secondary) given international engagement.

---

### Block 3: Institution Profile / Naming Clarity

**Status:** ✅ Content policy already defined in content plan + crawl confirms transition language

**Naming policy:**
- **Primary public name:** Agung Putra University (APU)
- **Transition qualifier:** "under transition from Institut Karya Mulia Bangsa (IKMB)"
- **Contextual usage:** Use IKMB only when referencing legal founding documents or historical context

**Profile elements to include:**
- Institution type: Perguruan Tinggi Swasta (Private University)
- Legal status: Established under SK Kemendikbudristek No. 813/E/O/2023
- Foundation: Yayasan Karya Mulia Keluarga (est. 1990)
- Campus location: Jl. Nongkosawit Raya, Nongkosawit, Kec. Gn. Pati, Kota Semarang, Jawa Tengah 50224
- Geographic context: Provincial capital region of Central Java; strategic location near Semarang

**Positioning statement (derived from crawl + content plan):**
> Agung Putra University is a forward-looking private institution dedicated to integrating science, technology, health sciences, and humanities to develop globally competitive human resources. Built on the legacy of Yayasan Karya Mulia Keluarga (est. 1990) and formally established as a higher education institution in 2023, APU is committed to excellence, innovation, and human-centered impact.

---

### Block 4: Organizational Structure

**Status:** ⚠ Partial — page exists at `kmb.ac.id/organizational-structure` but contains no extractable text content (likely image/diagram only)

**What was found:**
- URL exists: `https://kmb.ac.id/organizational-structure`
- No text content accessible via crawl

**Implementation recommendation:**
- Request an updated organizational structure diagram from institutional governance
- If image-only, provide accessible alt-text and consider a complementary text outline
- Include at minimum:
  - Board of Trustees / Yayasan level
  - Rectorate level
  - Vice Rector positions (Academic, Student Affairs, Finance/Admin, Global Engagement — per international page: Vice Rector IV for Global Engagement and Partnership exists)
  - Faculty/Program level
  - Support units (LPPM, LPMI, etc.)

**Gap:** Organizational structure diagram needs to be provided or recreated.

---

### Block 5: Foundation / Chairman Message

**Status:** ✅ Content gathered from `kmb.ac.id/message-from-the-chairman-of-the-foundation`

**Chairman identity:**
- **Name:** Prof. Dr. dr. Agung Putra, M.Si.Med
- **Title:** Ketua Yayasan Karya Mulia Keluarga
- **Additional role:** Founder, SCCR Indonesia

**Key themes from message:**
- Welcome and introduction to IKMB/APU
- Vision: excellent, innovative, characterized, globally competitive institution
- Commitment to Tri Dharma Perguruan Tinggi (education, research, community service)
- Location: Ungaran, Kabupaten Semarang (note: use approved address)
- Emphasis on Good Governance: transparency, accountability, responsibility, independence, fairness
- Call to action: "Selamat menikmati website... Semoga bermanfaat"

**Implementation recommendation:**
- Display as a featured quote block with chairman's photo (if available)
- Extract key quote for prominence:
  > "Institut Karya Mulia Bangsa memiliki potensi dan peluang untuk menjadi Institusi pendidikan yang berkualitas... dengan berlandaskan prinsip Good Governance."
- Include full message in expandable or secondary section

---

### Block 6: Institutional Units

**Status:** ✅ Content gathered for LPPM and LPMI

#### LPPM (Lembaga Penelitian dan Pengabdian Masyarakat)

**URL:** `https://kmb.ac.id/lppm`

**Description:**
LPPM is the unit responsible for managing, developing, and coordinating research and community service activities conducted by faculty and students. LPPM drives quality research, fosters innovation, and applies knowledge for community welfare through service programs. It collaborates with government, industry, and communities to enhance research relevance and impact.

**Key functions:**
- Research management and development
- Community service (pengabdian masyarakat) coordination
- Innovation and knowledge application
- External collaboration (government, industry, community)

#### LPMI (Lembaga Penjaminan Mutu Internal)

**URL:** `https://kmb.ac.id/lpmi`

**Description:**
LPMI is responsible for developing, implementing, and evaluating internal quality assurance systems for academic and non-academic activities. It ensures educational, research, and service standards comply with applicable regulations and national/international standards.

**Key functions:**
- Quality assurance system development
- Internal quality audits
- Continuous improvement initiatives
- Compliance with national and international standards

**Additional units to include (if verified):**
- International Office (confirmed: exists under Vice Rector IV)
- Career/Alumni Center (if exists)
- Student Affairs (if exists)
- IT/Support Services (if exists)

---

### Block 7: Key Stats

**Status:** ❌ Not found on public pages

**What was NOT found during crawl:**
- Student enrollment numbers
- Faculty/lecturer count
- Number of campuses
- Research output metrics
- Graduate outcome statistics

**Content plan guidance:**
> "APU is new; avoid heavy KPI blocks until verified datasets are available."

**Implementation recommendation:**
- **Option A (Recommended):** Omit detailed stats block for initial launch. Replace with qualitative strengths:
  - 7 study programs (1 D3, 6 S1/Profesi)
  - 4 research centers
  - Foundation since 1990, university since 2023
  - Strategic location in Central Java
  - International partnerships (Malaysia, Germany, etc.)

- **Option B (if verified data available):** Create a lightweight stats strip with confirmed numbers only

**Gap:** Student count, faculty count, and campus count need institutional verification before publication.

---

### Block 8: Legal / Accreditation Disclosures

**Status:** ⚠ Partial — legal founding document confirmed; program-level accreditation pending verification

**Confirmed legal standing:**
- **Founding decree:** SK Kemendikbudristek No. 813/E/O/2023 (17 October 2023)
- **Legal basis:** UU No. 12/2012 tentang Pendidikan Tinggi; Permenristekdikti No. 16/2018
- **Foundation:** Yayasan Karya Mulia Keluarga

**Accreditation status:**
- Institution-level: APU/IKMB is a legally recognized private higher education institution
- Program-level: Details to be published after per-program verification (per content plan)

**Implementation recommendation:**
- Display founding SK prominently as trust signal
- Include a note: "Program-level accreditation details available upon request" or link to per-program pages
- Consider a downloadable legal profile PDF (if available)

---

## 3) Suggested Institutional Values

Derived from existing KMB narrative and Chairman's message:

1. **Excellence** — Commitment to quality in education, research, and service
2. **Innovation** — Integrating science and technology for future-ready graduates
3. **Integrity** — Good Governance principles: transparency, accountability, responsibility
4. **Collaboration** — National and international networks supporting Tri Dharma
5. **Human-Centered Impact** — Community welfare through knowledge application

**Presentation:** Display as a visual grid or icon-led list, possibly with brief descriptions.

---

## 4) Content Gaps Requiring Institutional Verification

| Gap | Priority | Action Required |
|-----|----------|-----------------|
| Organizational structure diagram/text | P0 | Request from institutional governance |
| Student enrollment numbers | P1 | Request from registrAR/student affairs |
| Faculty/lecturer count | P1 | Request from HR/academic affairs |
| Campus count and descriptions | P1 | Verify if single campus or multiple |
| Program-level accreditation details | P0 | Verify per-program before publishing |
| Chairman/foundation photo | P1 | Request high-resolution portrait |
| LPMI/LPPM leadership names | P2 | Request from respective units |
| Additional institutional units (Career Center, Library, etc.) | P2 | Verify existence and scope |
| Location clarity | P0 | Confirm: Kota Semarang vs Kabupaten Semarang |

---

## 5) Page Structure Proposal

```
About APU
├── Hero Section
│   ├── Page title: "Tentang APU" / "About APU"
│   └── Subtitle: positioning statement
├── Institution Profile
│   ├── Naming clarity (APU primary, IKMB transition)
│   ├── Legal standing (SK 813/E/O/2023)
│   ├── Foundation info (Yayasan KMK, est. 1990)
│   └── Location (approved official address)
├── History / Latar Belakang
│   ├── Founding story (2023)
│   ├── Legal framework
│   └── Foundation legacy (1990)
├── Vision & Mission
│   ├── Vision statement (2043)
│   └── 4 Mission points
├── Chairman's Message
│   ├── Featured quote
│   ├── Full message (expandable)
│   └── Chairman profile (name, title, SCCR founder)
├── Institutional Values
│   └── 5 values with descriptions
├── Organizational Structure
│   ├── Structure diagram (when available)
│   └── Text outline (when available)
├── Institutional Units
│   ├── LPPM
│   ├── LPMI
│   └── International Office
├── Key Facts (lightweight, no unverified stats)
│   ├── 7 programs
│   ├── 4 research centers
│   ├── Foundation since 1990
│   └── Location: Semarang, Central Java
└── Legal / Accreditation
    ├── Founding decree reference
    └── Program accreditation note
```

---

## 6) SEO & Metadata

**Recommended page title:**
> Tentang APU — Agung Putra University | Sejarah, Visi Misi, dan Profil Institusi

**Recommended meta description:**
> Kenali Agung Putra University (APU): institusi pendidikan tinggi swasta di Semarang, Jawa Tengah. Pelajari sejarah, visi misi, struktur organisasi, dan profil institusi kami.

**Recommended URL slug:** `/about-apu` or `/tentang-apu`

---

## 7) Cross-References to Other Pages

| This Page | Links To | Reason |
|-----------|----------|--------|
| About APU | Leadership | For expanded leadership roster (when available) |
| About APU | Research | For research center details |
| About APU | Academics | For program listings |
| About APU | International | For global engagement details |
| About APU | Contact | For full contact directory |
| About APU | SCCR Indonesia | External link (chairman's affiliation) |

---

## 8) Content Production Notes

### Writing style guidelines:
- **Language:** Bahasa Indonesia primary; English optional for international context
- **Tone:** Aspirational yet grounded, formal but accessible
- **Length:** Medium — enough detail to establish trust, not overwhelming
- **Voice:** Institutional third-person

### Accessibility requirements:
- Alt text for all images (especially organizational structure diagram)
- Semantic HTML headings (H1 → H2 → H3)
- Focus-visible styles for interactive elements
- Sufficient color contrast for text on backgrounds

### Mobile considerations:
- Chairman message: stack photo above text on mobile
- Values grid: 1 column on mobile, 2-3 on desktop
- Organizational structure: ensure diagram is readable on small screens or provide text alternative

---

## 9) Asset Requirements

| Asset | Source | Status |
|-------|--------|--------|
| Chairman portrait photo | Request from Yayasan KMK | ❌ Needed |
| Organizational structure diagram | Request from governance | ❌ Needed |
| Campus photo(s) | Request from communications | ❌ Needed |
| Foundation/institution logo (high-res) | Existing brand assets | ⚠ Verify availability |
| SCCR Indonesia logo (for chairman affiliation) | External (sccr.id) | ⚠ Request permission |

---

## 10) Approval Checklist Before Publication

- [ ] Institution profile text approved by Rectorate/Yayasan
- [ ] Chairman message approved by Prof. Agung Putra (or delegate)
- [ ] Vision & mission text verified as current official version
- [ ] Location/campus address confirmed (Kota Semarang vs Kabupaten Semarang)
- [ ] Organizational structure approved for public display
- [ ] LPPM and LPMI descriptions approved by respective unit heads
- [ ] Legal/accreditation text reviewed by legal/compliance
- [ ] All photos/assets have usage rights confirmed
- [ ] Naming convention (APU vs IKMB) approved by communications team

---

*Plan compiled from live crawl of kmb.ac.id and international.kmb.ac.id on May 2026. Content subject to institutional verification and approval.*
