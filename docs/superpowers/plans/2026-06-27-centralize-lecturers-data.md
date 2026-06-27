# Centralize Lecturers Data Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace `src/data/program-faculty.ts` and `src/data/diaspora.ts` with a single `src/data/lecturers.ts` registry, merge duplicate records, and update all consumers.

**Architecture:** One flat `Lecturer[]` array tagged with `programs: string[]`. Pages filter by program slug. Diaspora pages filter by the `diaspora` tag. Helper functions expose common queries. Program descriptions move to `src/data/academic-programs.ts`.

**Tech Stack:** Astro, TypeScript, Tailwind v4, bun.

---

## Task 1: Create central registry `src/data/lecturers.ts`

**Files:**
- Create: `src/data/lecturers.ts`
- Reference: `src/data/program-faculty.ts`, `src/data/diaspora.ts`

- [ ] **Step 1: Define unified `Lecturer` interface**

```ts
import type { ImageMetadata } from "astro";

export interface Lecturer {
  id: string;
  name: string;
  image?: ImageMetadata;

  title?: string;
  nidn?: string;
  specialization?: string;

  googleScholar?: string;
  googleIndex?: string;
  scopusLink?: string;
  scopusIndex?: string;
  sintaLink?: string;
  sintaIndex?: string;

  role?: string;
  university?: string;
  country?: string;
  flag?: string;
  href?: string;
  backgroundImage?: ImageMetadata;
  position?: number;
  pastExperience?: string[];
  notableResearch?: string;

  programs: string[];
}
```

- [ ] **Step 2: Import all lecturer images**

Migrate the import statements from `src/data/program-faculty.ts` and `src/data/diaspora.ts` into the new file. Keep the same image aliases to minimize naming churn.

- [ ] **Step 3: Build `allLecturers` array**

Create one record per person. For people present in both old files, merge into a single record and list all applicable program tags. Example merged records:

```ts
export const allLecturers: Lecturer[] = [
  {
    id: "faheem-ahmed-khan",
    name: "Faheem Ahmed Khan, BSc, MS, PhD",
    title: "Lecturer",
    role: "Lecturer and Researcher",
    nidn: "-",
    university: "M.I.T. USA",
    country: "United States",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    href: "#",
    image: mrFaheem,
    backgroundImage: usBg,
    position: 37,
    googleScholar: "https://scholar.google.com/citations?user=4nfHqz8AAAAJ&hl=en",
    googleIndex: "29",
    h_index: 29,
    pastExperience: [
      "MS and PhD in genetics/breeding and animal reproduction at Huazhong Agricultural University, China",
      "Postdoctoral fellowships at Tongji Hospital, China and BRIN, Indonesia",
      "Senior Researcher at Stem Cell and Cancer Research Indonesia, Semarang",
    ],
    notableResearch:
      "Reproductive genetics, stem cell and cancer biology, CRISPR/Cas9 genome editing, and microbiome engineering across plant and animal systems.",
    programs: ["biomedical", "diaspora"],
  },
  // ... migrate every remaining record
];
```

For each merged record prefer:
- Faculty values for `title`, `nidn`, `specialization`.
- Diaspora values for `role`, `university`, `country`, `flag`, `backgroundImage`, `position`, `pastExperience`, `notableResearch`.
- For Google Scholar index, keep the faculty `google_index` if present; otherwise use diaspora `h_index` as a string.

- [ ] **Step 4: Add helper functions**

```ts
export function getLecturersByProgram(slug: string): Lecturer[] {
  return allLecturers.filter((l) => l.programs.includes(slug));
}

export function getDiasporaLecturers(): Lecturer[] {
  return allLecturers.filter((l) => l.programs.includes("diaspora"));
}

export function getLecturerById(id: string): Lecturer | undefined {
  return allLecturers.find((l) => l.id === id);
}
```

- [ ] **Step 5: Verify TypeScript compiles**

Run: `bunx tsc --noEmit src/data/lecturers.ts`
Expected: no errors.

---

## Task 2: Move program descriptions to `src/data/academic-programs.ts`

**Files:**
- Modify: `src/data/academic-programs.ts`

- [ ] **Step 1: Add description map after imports**

```ts
export const programFacultyDescriptions: Record<string, string> = {
  biomedical:
    "Internationally qualified faculty guiding students in research and innovation",
  biotechnology:
    "Internationally qualified faculty guiding students in research and innovation",
  communication:
    "Internationally qualified faculty guiding students in communication science",
  law: "Internationally qualified faculty guiding students in law",
  management:
    "Internationally qualified faculty guiding students in research and innovation",
  "midwifery-associate":
    "Internationally qualified faculty guiding students in midwifery",
  "midwifery-bachelor":
    "Internationally qualified faculty guiding students in midwifery",
};
```

- [ ] **Step 2: Update leadership message leader lookups**

Replace imports from `./program-faculty` with imports from `./lecturers` and update each `leader` lookup.

Example for biomedical:

```ts
import { getLecturerById } from "./lecturers";

export const biomedicalLeadershipMessage: LeadershipMessage = {
  // ... existing fields
  leader: getLecturerById("nadya-audina-ns")!,
  // ...
};
```

Repeat for biotechnology, communication, law, management, midwifery-associate, midwifery-bachelor.

- [ ] **Step 3: Verify TypeScript**

Run: `bunx tsc --noEmit src/data/academic-programs.ts`
Expected: no errors.

---

## Task 3: Update `src/data/leadership.ts`

**Files:**
- Modify: `src/data/leadership.ts`

- [ ] **Step 1: Replace imports and type**

```ts
import type { Lecturer } from "./lecturers";
import { getLecturerById } from "./lecturers";

export interface LeadershipMessage {
  kicker: string;
  title: string;
  quote: string[];
  leader: Lecturer;
  cta: {
    href: string;
    label: string;
  };
}
```

- [ ] **Step 2: Update `leadershipMessage` lookup**

```ts
export const leadershipMessage: LeadershipMessage = {
  // ... existing fields
  leader: getLecturerById("prof-agung")!,
  // ...
};
```

- [ ] **Step 3: Verify TypeScript**

Run: `bunx tsc --noEmit src/data/leadership.ts`
Expected: no errors.

---

## Task 4: Delete old data files

**Files:**
- Delete: `src/data/program-faculty.ts`
- Delete: `src/data/diaspora.ts`

- [ ] **Step 1: Delete files**

```bash
rm src/data/program-faculty.ts src/data/diaspora.ts
```

- [ ] **Step 2: Confirm deletion**

Run: `ls src/data/program-faculty.ts src/data/diaspora.ts`
Expected: `No such file or directory`.

---

## Task 5: Update `src/components/DiasporaFeaturedCard.astro`

**Files:**
- Modify: `src/components/DiasporaFeaturedCard.astro`

- [ ] **Step 1: Update import and props**

```ts
import type { Lecturer } from "@data/lecturers";

interface Props {
  person: Lecturer;
  class?: string;
}
```

- [ ] **Step 2: Update field references**

Replace all `person.univ` with `person.university`, `person.background_image` with `person.backgroundImage`, `person.google_scholar` with `person.googleScholar`, `person.h_index` with `person.googleIndex`.

- [ ] **Step 3: Verify build**

Run: `bun run build`
Expected: build succeeds or errors are limited to other consumers.

---

## Task 6: Update `src/sections/academic/program/ProgramFacultySpotlightSection.astro`

**Files:**
- Modify: `src/sections/academic/program/ProgramFacultySpotlightSection.astro`

- [ ] **Step 1: Update imports and props**

```ts
import type { Lecturer } from "@data/lecturers";
import { allLecturers, getDiasporaLecturers } from "@data/lecturers";

interface Props {
  lecturers: Lecturer[];
  description: string;
}

const { lecturers, description } = Astro.props;
const members = lecturers;
const featured = members[0];

const diasporaPeople = getDiasporaLecturers();
const diasporaIds = new Set(diasporaPeople.map((p) => p.id));
const isFeaturedDiaspora = featured ? diasporaIds.has(featured.id) : false;
const initialDiasporaPerson = isFeaturedDiaspora
  ? diasporaPeople.find((p) => p.id === featured!.id) ?? diasporaPeople[0]
  : diasporaPeople[0];
```

- [ ] **Step 2: Pass description to SectionHeader**

```astro
<SectionHeader
  kicker="LECTURER SPOTLIGHT"
  title="Meet Our Expert Lecturers"
  description={description}
  // ...
/>
```

- [ ] **Step 3: Update featured standard card fields**

Replace `featured?.google_link` with `featured?.googleScholar`, `featured?.google_index` with `featured?.googleIndex`.

- [ ] **Step 4: Update client script field names**

In the inline script, replace `member.google_link` with `member.googleScholar`, `member.google_index` with `member.googleIndex`. Replace `person.google_scholar` with `person.googleScholar`, `person.h_index` with `person.googleIndex`, `person.background_image` with `person.backgroundImage`.

- [ ] **Step 5: Verify build**

Run: `bun run build`
Expected: no errors from this file.

---

## Task 7: Update `src/sections/akademi/biomedical/BiomedicalLecturersSection.astro`

**Files:**
- Modify: `src/sections/akademi/biomedical/BiomedicalLecturersSection.astro`

- [ ] **Step 1: Replace diaspora import**

```ts
import { getDiasporaLecturers } from "@data/lecturers";
const { featured, directory } = sectionCopy;
const people = getDiasporaLecturers();
const featuredPerson = people.find((p) => p.id === "prof-agung") ?? people[0];
```

- [ ] **Step 2: Update field references**

Replace `featuredPerson.role` and `featured.department` usage with `featuredPerson.role` (department text should come from `featured.department` in `sectionCopy` unchanged). Replace `person.univ` with `person.university` where used.

- [ ] **Step 3: Verify build**

Run: `bun run build`
Expected: no errors from this file.

---

## Task 8: Update `src/sections/DiasporaSection.astro`

**Files:**
- Modify: `src/sections/DiasporaSection.astro`

- [ ] **Step 1: Replace import**

```ts
import { getDiasporaLecturers } from "@data/lecturers";
const people = getDiasporaLecturers();
```

- [ ] **Step 2: Update field references**

Replace `person.univ` with `person.university`, `person.background_image` with `person.backgroundImage`.

- [ ] **Step 3: Verify build**

Run: `bun run build`
Expected: no errors from this file.

---

## Task 9: Update `src/sections/DiasporaDetailsSection.astro`

**Files:**
- Modify: `src/sections/DiasporaDetailsSection.astro`

- [ ] **Step 1: Replace import**

```ts
import { getDiasporaLecturers } from "@data/lecturers";
const people = getDiasporaLecturers();
```

- [ ] **Step 2: Update field references in template and script**

Replace `person.univ` with `person.university`, `person.href` stays as-is, `person.background_image` with `person.backgroundImage`, `person.google_scholar` with `person.googleScholar`, `person.h_index` with `person.googleIndex`, `person.notableResearch.text` with `person.notableResearch`, `person.pastExperience.items` with `person.pastExperience`.

- [ ] **Step 3: Verify build**

Run: `bun run build`
Expected: no errors from this file.

---

## Task 10: Update program pages

**Files:**
- Modify: `src/pages/academic/biomedical.astro`
- Modify: `src/pages/academic/biotechnology.astro`
- Modify: `src/pages/academic/communication.astro`
- Modify: `src/pages/academic/law.astro`
- Modify: `src/pages/academic/management.astro`
- Modify: `src/pages/academic/midwifery-associate.astro`
- Modify: `src/pages/academic/midwifery-bachelor.astro`

- [ ] **Step 1: Replace imports and build props (example: biomedical)**

```ts
import { getLecturersByProgram } from "@data/lecturers";
import { programFacultyDescriptions } from "@data/academic-programs";

const lecturers = getLecturersByProgram("biomedical");
const description = programFacultyDescriptions.biomedical;
```

- [ ] **Step 2: Update section usage**

```astro
<ProgramFacultySpotlightSection lecturers={lecturers} description={description} />
```

- [ ] **Step 3: Repeat for all seven program pages**

Use the matching slug for each page.

- [ ] **Step 4: Verify build**

Run: `bun run build`
Expected: no errors.

---

## Task 11: Update `scripts/export-faculty-csv.ts`

**Files:**
- Modify: `scripts/export-faculty-csv.ts`

- [ ] **Step 1: Replace data source**

```ts
import { allLecturers } from "../src/data/lecturers";

const programs = [
  "biomedical",
  "biotechnology",
  "communication",
  "law",
  "management",
  "midwifery-associate",
  "midwifery-bachelor",
] as const;

const fields = [
  "name",
  "id",
  "title",
  "photo",
  "nidn",
  "link",
  "scopus_id",
  "scopus_index",
  "sinta_id",
  "sinta_index",
  "specialization",
] as const;
```

- [ ] **Step 2: Update CSV generation loop**

```ts
for (const programKey of programs) {
  for (const member of allLecturers) {
    if (!member.programs.includes(programKey)) continue;
    rows.push([programKey, ...fields.map((field) => member[field] ?? "")]);
  }
}
```

- [ ] **Step 3: Run script and compare output**

Run: `bun run scripts/export-faculty-csv.ts`
Expected: `program-faculty.csv` is created with the same rows as before (order may differ).

---

## Task 12: Update `scripts/update-dosen-csv.ts`

**Files:**
- Modify: `scripts/update-dosen-csv.ts`

- [ ] **Step 1: Replace data source**

```ts
const LECTURERS_PATH = "src/data/lecturers.ts";

interface LecturerRecord {
  name: string;
  googleScholar?: string;
  googleIndex?: string;
  nidn?: string;
  scopusLink?: string;
  scopusIndex?: string;
}

function extractLecturerRecords(text: string): LecturerRecord[] {
  const records: LecturerRecord[] = [];
  const objectRegex =
    /\{\s*id:\s*["'][^"']+["'][^}]*name:\s*["']([^"']+)["'][^}]*\}/gs;
  let match;
  while ((match = objectRegex.exec(text)) !== null) {
    const block = match[0];
    const name = extractStringLiteral(block, "name");
    if (!name) continue;
    records.push({
      name,
      googleScholar: extractStringLiteral(block, "googleScholar"),
      googleIndex: extractStringLiteral(block, "googleIndex"),
      nidn: extractStringLiteral(block, "nidn"),
      scopusLink: extractStringLiteral(block, "scopusLink"),
      scopusIndex: extractStringLiteral(block, "scopusIndex"),
    });
  }
  return records;
}
```

- [ ] **Step 2: Replace file reads and merge logic**

```ts
const lecturersText = fs.readFileSync(LECTURERS_PATH, "utf-8");
const lecturerRecords = extractLecturerRecords(lecturersText);

const lecturerByNidn = new Map<string, LecturerRecord>();
const lecturerByName = new Map<string, LecturerRecord>();
for (const l of lecturerRecords) {
  if (l.nidn && l.nidn !== "-") lecturerByNidn.set(l.nidn, l);
  lecturerByName.set(normalizeName(l.name), l);
}

// ... inside loop ...
let lecturer = lecturerByNidn.get(nidn);
if (!lecturer && normName) lecturer = lecturerByName.get(normName);

if (lecturer) {
  matchedLecturer++;
  if (lecturer.googleScholar) gsProfile = lecturer.googleScholar;
  if (lecturer.scopusLink) {
    scopusProfile =
      lecturer.scopusLink.startsWith("http")
        ? lecturer.scopusLink
        : `https://www.scopus.com/authid/detail.uri?authorId=${lecturer.scopusLink}`;
  }
  if (lecturer.scopusIndex) scopusIndex = lecturer.scopusIndex;
  if (lecturer.googleIndex) gsIndex = lecturer.googleIndex;
}
```

- [ ] **Step 3: Run script and compare output**

Run: `bun run scripts/update-dosen-csv.ts`
Expected: `data-dosen.csv` updates with similar match counts.

---

## Task 13: Final verification

**Files:** all touched files

- [ ] **Step 1: Search for stale imports**

Run:
```bash
grep -R "@data/program-faculty\|@data/diaspora" src scripts --include="*.ts" --include="*.astro" || echo "No stale imports"
```
Expected: no matches.

- [ ] **Step 2: Full build**

Run: `bun run build`
Expected: succeeds with no TypeScript errors.

- [ ] **Step 3: Type-check**

Run: `bunx tsc --noEmit`
Expected: succeeds.

---

## Self-review

- **Spec coverage:**
  - Central registry → Task 1
  - Descriptions → Task 2
  - Leadership updates → Task 3
  - Old file deletion → Task 4
  - Component/section updates → Tasks 5-9
  - Page updates → Task 10
  - Script updates → Tasks 11-12
  - Verification → Task 13
- **Placeholder scan:** No TBD/TODO; data migration references existing source files.
- **Type consistency:** `Lecturer` type is used throughout; field names (`googleScholar`, `googleIndex`, `university`, `backgroundImage`) are consistent.
