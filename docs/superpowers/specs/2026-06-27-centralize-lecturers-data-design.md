# Centralize Lecturers Data — Design

## Goal

Replace the split, duplicated lecturer data in `src/data/program-faculty.ts` and `src/data/diaspora.ts` with a single source of truth in `src/data/lecturers.ts`. Each lecturer exists once; program pages and diaspora pages filter the same registry by program tags. This removes duplicate person records, prevents drift between program and diaspora views, and makes it easier to add or move lecturers across programs.

## Context

- `src/data/program-faculty.ts` exports one `ProgramFacultyData` object per study program (biomedical, biotechnology, communication, law, management, midwifery associate, midwifery bachelor). Each contains a `description` and a `facultyMembers: FacultyMember[]` array.
- `src/data/diaspora.ts` exports a flat `people: DiasporaPerson[]` array with richer researcher profiles (university, country, flag, background image, past experience, notable research, h-index).
- Several people appear in both files with overlapping but not identical data (e.g., `faheem-ahmed-khan`, `waheni-rizki-aprilia`, `dendi-krisna-nugraha`, `agus-abdillah`, `endah-agustina-lestari`, `prof-agung`).
- `ProgramFacultySpotlightSection.astro` already cross-references diaspora IDs at runtime to swap the featured card layout. This proves the two datasets are logically one set of people viewed in different contexts.

## Architecture

### New file: `src/data/lecturers.ts`

A single registry that owns every lecturer record.

```ts
export interface Lecturer {
  id: string;
  name: string;
  image?: ImageMetadata;

  // Program context
  title?: string;           // e.g., "Head of Biomedical Science Study Program"
  nidn?: string;
  specialization?: string;

  // Research indices
  googleScholar?: string;
  googleIndex?: string;     // faculty context index
  scopusLink?: string;
  scopusIndex?: string;
  sintaLink?: string;
  sintaIndex?: string;

  // Diaspora context
  role?: string;            // diaspora role, falls back to title where needed
  university?: string;      // renamed from `univ`
  country?: string;
  flag?: string;            // URL to flag SVG
  href?: string;            // directory link, usually "#"
  backgroundImage?: ImageMetadata;
  position?: number;        // object-position percentage for portrait
  pastExperience?: string[];
  notableResearch?: string;

  // Membership
  programs: string[];       // e.g., ["biomedical", "diaspora"]
}
```

- `allLecturers: Lecturer[]` is the flat, canonical list.
- Helper exports derived from `allLecturers`:
  - `getLecturersByProgram(slug: string): Lecturer[]`
  - `getDiasporaLecturers(): Lecturer[]`
  - `getLecturerById(id: string): Lecturer | undefined`
- Program tags match existing program slugs:
  - `biomedical`, `biotechnology`, `communication`, `law`, `management`, `midwifery-associate`, `midwifery-bachelor`
- The special tag `diaspora` marks diaspora members.

### Deleted files

- `src/data/program-faculty.ts`
- `src/data/diaspora.ts`

### Merged duplicate records

For any person present in both old files, create one `Lecturer` record that combines the union of fields and lists all applicable `programs`. For example:

- `faheem-ahmed-khan`: programs `["biomedical", "diaspora"]`
- `waheni-rizki-aprilia`: programs `["biotechnology", "diaspora"]`
- `dendi-krisna-nugraha`: programs `["biomedical", "diaspora"]`
- `agus-abdillah`: programs `["management", "diaspora"]`
- `endah-agustina-lestari`: programs `["biomedical", "diaspora"]`
- `prof-agung`: programs `["diaspora"]` (no program faculty entry today)

When the same field exists in both contexts with different values, prefer the diaspora value for diaspora-specific fields (e.g., `role`, `university`, `notableResearch`) and the program value for program-specific fields (e.g., `title`, `nidn`, `specialization`). For `googleScholar`/`googleIndex`, keep the diaspora's `h_index` as `googleIndex` only if the faculty value is missing or lower; otherwise keep the faculty value. (Implementation will reconcile each manually because counts differ today.)

### Program faculty descriptions

Move the `description` strings out of `program-faculty.ts` into `src/data/academic-programs.ts` as a new export:

```ts
export const programFacultyDescriptions: Record<string, string> = {
  biomedical: "Internationally qualified faculty guiding students in research and innovation",
  biotechnology: "Internationally qualified faculty guiding students in research and innovation",
  communication: "Internationally qualified faculty guiding students in communication science",
  law: "Internationally qualified faculty guiding students in law",
  management: "Internationally qualified faculty guiding students in research and innovation",
  "midwifery-associate": "Internationally qualified faculty guiding students in midwifery",
  "midwifery-bachelor": "Internationally qualified faculty guiding students in midwifery",
};
```

Pages import this map by program slug and pass the description into `ProgramFacultySpotlightSection`.

## Updated consumers

### Components

1. **`src/components/DiasporaFeaturedCard.astro`**
   - Change prop type from `DiasporaPerson` to `Lecturer`.
   - Map fields:
     - `person.role` → role line
     - `person.university` → university line
     - `person.pastExperience` → past experience list
     - `person.notableResearch` → notable research text
     - `person.flag` → flag image
     - `person.backgroundImage` → background image
     - `person.googleScholar` → profile link
     - `person.googleIndex` → index shown next to Google Scholar icon
     - `person.position` → portrait `object-position`

2. **`src/sections/academic/program/ProgramFacultySpotlightSection.astro`**
   - Props change from `data: ProgramFacultyData` to `{ lecturers: Lecturer[]; description: string }`.
   - Derive `members` from `lecturers`.
   - Derive `diasporaPeople` for the client script from `allLecturers.filter((p) => p.programs.includes("diaspora"))`.
   - Featured-card logic stays the same; only data sources and field names change.
   - Update inline script to use new field names (`googleScholar`, `googleIndex`, etc.).

3. **`src/sections/akademi/biomedical/BiomedicalLecturersSection.astro`**
   - Import `getDiasporaLecturers` from `@data/lecturers` instead of `people` from `@data/diaspora`.
   - Map `person.role` and `person.university` where used.

4. **`src/sections/DiasporaSection.astro`**
   - Import `getDiasporaLecturers` from `@data/lecturers`.
   - Use `person.university`, `person.flag`, `person.position`.

5. **`src/sections/DiasporaDetailsSection.astro`**
   - Import `getDiasporaLecturers` and `allLecturers` from `@data/lecturers`.
   - Update inline script to use new field names.

### Data files

6. **`src/data/academic-programs.ts`**
   - Remove all imports from `./program-faculty`.
   - Import lecturers from `./lecturers`.
   - Add `programFacultyDescriptions` map.
   - Update each `LeadershipMessage.leader` lookup to use `getLecturerById` or filter `allLecturers`.

7. **`src/data/leadership.ts`**
   - Remove `FacultyMember` and `DiasporaPerson` imports.
   - Import `Lecturer` from `./lecturers`.
   - Change `LeadershipMessage.leader` type to `Lecturer`.
   - Update `leadershipMessage.leader` lookup to use `getLecturerById`.

### Pages

8. **Program pages** (`src/pages/academic/biomedical.astro`, `biotechnology.astro`, `communication.astro`, `law.astro`, `management.astro`, `midwifery-associate.astro`, `midwifery-bachelor.astro`)
   - Replace `import { xxxFaculty } from "@data/program-faculty"` with:
     ```ts
     import { getLecturersByProgram, allLecturers } from "@data/lecturers";
     import { programFacultyDescriptions } from "@data/academic-programs";
     ```
   - Build props for the section:
     ```ts
     const lecturers = getLecturersByProgram("biomedical");
     const description = programFacultyDescriptions.biomedical;
     ```
   - Pass `<ProgramFacultySpotlightSection lecturers={lecturers} description={description} />`.

### Scripts

9. **`scripts/export-faculty-csv.ts`**
   - Update imports from `@data/program-faculty` to `@data/lecturers`.
   - Filter by program tag instead of using `ProgramFacultyData` objects.

10. **`scripts/update-dosen-csv.ts`**
    - Update imports and types to use `Lecturer`.
    - Adjust CSV generation to read from the central registry.

## Type migrations

- Delete `FacultyMember`, `ProgramFacultyData`, and `DiasporaPerson` interfaces.
- Replace with `Lecturer` everywhere.
- Where consumers previously checked `"title" in leader ? leader.title : leader.role`, they can now use `lecturer.title ?? lecturer.role` because both fields live on the same object.

## Error handling

- `getLecturerById` returns `Lecturer | undefined`; callers must handle missing IDs (use non-null assertions only where the old code already did).
- If a program slug has no matching lecturers, return an empty array and let the section render its empty state.
- When diaspora-specific fields are missing (e.g., `pastExperience`), the featured card should render empty sections gracefully.

## Testing / verification

1. Run `bun run build` and confirm no TypeScript or import errors.
2. Open each program page and verify:
   - Faculty carousel renders all lecturers for that program.
   - Section description matches the old description.
   - Featured card swaps to diaspora layout when a diaspora lecturer is selected.
   - Selecting a non-diaspora lecturer reverts to standard layout.
3. Open `/diaspora` and verify:
   - Hero carousel shows all diaspora lecturers.
   - Details section featured card and list render correctly.
   - Clicking a diaspora card updates the featured card.
4. Verify `ProgramMsgFromHead` still renders the correct leader portrait and title on each program page.
5. Run any existing CSV scripts (`bun run scripts/export-faculty-csv.ts`, `bun run scripts/update-dosen-csv.ts`) and confirm output is unchanged.
6. Search the repo for any remaining references to `@data/program-faculty` or `@data/diaspora`.

## Scope

- In scope: data consolidation, type unification, updating all direct consumers.
- Out of scope: visual redesign, adding new lecturer fields, changing carousel behavior, modifying the `ProgramMsgFromHead` UI beyond the data source update.
