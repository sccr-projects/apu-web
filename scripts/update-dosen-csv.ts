import * as fs from "fs";
import Papa from "papaparse";

const CSV_PATH = "data-dosen.csv";
const DIASPORA_PATH = "src/data/diaspora.ts";
const FACULTY_PATH = "src/data/program-faculty.ts";

interface DiasporaRecord {
  name: string;
  google_scholar?: string;
  h_index?: number;
}

interface FacultyRecord {
  name: string;
  nidn?: string;
  link?: string;
  scopus_id?: string;
  scopus_index?: string;
}

function normalizeName(name: string): string {
  return name
    .toLowerCase()
    .replace(
      /\b(dr\.?|prof\.?|bdn?\.?|ir\.?|sh\.?|mh\.?|mkn\.?|skm|s\.tr\.keb\.?|s\.st\.?|s\.sit\.?|s\.si\.?|s\.sos\.?|s\.e\.?|s\.hum\.?|m\.tr\.keb\.?|m\.kes\.?|m\.keb\.?|m\.biomed\.?|m\.biotech\.?|m\.si\.?|m\.mol\.biol\.?|m\.ikom\.?|m\.msm\.?|mba\.?|ermap\.?|amtru\.?|s\.tr\.par\.?|bsc\.?|msc\.?|ph\.?d\.?)\b/g,
      " ",
    )
    .replace(/[,\.]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractStringLiteral(text: string, key: string): string | undefined {
  const regex = new RegExp(`${key}\\s*:\\s*([\"\'])(.*?)(?!\\\\)\\1`, "s");
  const match = text.match(regex);
  return match ? match[2] : undefined;
}

function extractDiasporaRecords(text: string): DiasporaRecord[] {
  const records: DiasporaRecord[] = [];
  const objectRegex =
    /\{\s*id:\s*["'][^"']+["'][^}]*name:\s*["']([^"']+)["'][^}]*\}/gs;
  let match;
  while ((match = objectRegex.exec(text)) !== null) {
    const block = match[0];
    const name = extractStringLiteral(block, "name");
    if (!name) continue;
    const google_scholar = extractStringLiteral(block, "google_scholar");
    const hIndexMatch = block.match(/h_index\s*:\s*(\d+)/);
    records.push({
      name,
      google_scholar,
      h_index: hIndexMatch ? parseInt(hIndexMatch[1], 10) : undefined,
    });
  }
  return records;
}

function extractFacultyRecords(text: string): FacultyRecord[] {
  const records: FacultyRecord[] = [];
  const objectRegex =
    /\{\s*id:\s*["'][^"']+["'][^}]*name:\s*["']([^"']+)["'][^}]*\}/gs;
  let match;
  while ((match = objectRegex.exec(text)) !== null) {
    const block = match[0];
    const name = extractStringLiteral(block, "name");
    if (!name) continue;
    const nidn = extractStringLiteral(block, "nidn");
    const link = extractStringLiteral(block, "link");
    const scopus_id = extractStringLiteral(block, "scopus_id");
    const scopus_index = extractStringLiteral(block, "scopus_index");
    records.push({ name, nidn, link, scopus_id, scopus_index });
  }
  return records;
}

const diasporaText = fs.readFileSync(DIASPORA_PATH, "utf-8");
const facultyText = fs.readFileSync(FACULTY_PATH, "utf-8");

const diasporaRecords = extractDiasporaRecords(diasporaText);
const facultyRecords = extractFacultyRecords(facultyText);

const facultyByNidn = new Map<string, FacultyRecord>();
const facultyByName = new Map<string, FacultyRecord>();
for (const f of facultyRecords) {
  if (f.nidn && f.nidn !== "-") facultyByNidn.set(f.nidn, f);
  facultyByName.set(normalizeName(f.name), f);
}

const diasporaByName = new Map<string, DiasporaRecord>();
for (const p of diasporaRecords) {
  diasporaByName.set(normalizeName(p.name), p);
}

const raw = fs.readFileSync(CSV_PATH, "utf-8");
const parsed = Papa.parse<string[]>(raw, { delimiter: ",", newline: "\r\n" });
const rows = parsed.data;

const NAME_INDEX = 2;
const NIDN_INDEX = 5;
const INSERT_AT = 6;

const GS_PROFILE_LABEL = "Google Scholar Profile";
const GS_INDEX_LABEL = "Google Scholar Index";
const SCOPUS_PROFILE_LABEL = "Scopus Profile";
const SCOPUS_INDEX_LABEL = "Scopus Index";

function insertColumns(row: string[], values: string[]): string[] {
  return [
    ...row.slice(0, INSERT_AT),
    ...values,
    ...row.slice(INSERT_AT),
  ];
}

let matchedFaculty = 0;
let matchedDiaspora = 0;

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  const name = row[NAME_INDEX]?.trim() ?? "";

  if (i === 0) {
    rows[i] = insertColumns(row, [
      GS_PROFILE_LABEL,
      GS_INDEX_LABEL,
      SCOPUS_PROFILE_LABEL,
      SCOPUS_INDEX_LABEL,
    ]);
    continue;
  }

  if (!name) {
    rows[i] = insertColumns(row, ["", "", "", ""]);
    continue;
  }

  const nidn = row[NIDN_INDEX]?.trim() ?? "";
  const normName = normalizeName(name);

  const gsProfile: string[] = ["", ""];
  const scopusProfile: string[] = ["", ""];

  let faculty = facultyByNidn.get(nidn);
  if (!faculty && normName) faculty = facultyByName.get(normName);

  if (faculty) {
    matchedFaculty++;
    if (faculty.link) gsProfile[0] = faculty.link;
    if (faculty.scopus_id) {
      scopusProfile[0] =
        `https://www.scopus.com/authid/detail.uri?authorId=${faculty.scopus_id}`;
    }
    if (faculty.scopus_index) scopusProfile[1] = faculty.scopus_index;
  }

  const diaspora = diasporaByName.get(normName);
  if (diaspora && diaspora.google_scholar) {
    matchedDiaspora++;
    gsProfile[0] = diaspora.google_scholar;
    if (diaspora.h_index !== undefined) {
      gsProfile[1] = String(diaspora.h_index);
    }
  }

  rows[i] = insertColumns(row, [
    gsProfile[0],
    gsProfile[1],
    scopusProfile[0],
    scopusProfile[1],
  ]);
}

const output = Papa.unparse(rows, {
  delimiter: ",",
  newline: "\r\n",
  quotes: false,
});

fs.writeFileSync(CSV_PATH, output, "utf-8");
console.log(`Updated ${CSV_PATH}`);
console.log(`Matched faculty: ${matchedFaculty}`);
console.log(`Matched diaspora: ${matchedDiaspora}`);
