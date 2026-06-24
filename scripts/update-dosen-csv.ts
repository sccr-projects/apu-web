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
      /\b(dr\.?|prof\.?|bdn?\.?|ir\.?|sh\.?|mh\.?|mkn\.?|skm|mbbs|s\.tr\.keb\.?|s\.st\.?|s\.sit\.?|s\.si\.?|s\.sos\.?|s\.e\.?|s\.hum\.?|s\.h\.?|s\.ikom\.?|s\.kom\.?|m\.tr\.keb\.?|m\.kes\.?|m\.keb\.?|m\.biomed\.?|m\.biotech\.?|m\.si\.?|m\.mol\.biol\.?|m\.ikom\.?|m\.msm\.?|m\.hum\.?|m\.h\.?|m\.m\.?|m\.sos\.?|m\.sc\.?|m\.s\.?|mba\.?|ermap\.?|amtru\.?|s\.tr\.par\.?|bsc\.?|b\.sc\.?|bs\.?|msc\.?|ms\.?|ph\.?d\.?|phd\.?)\b/g,
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

const GS_PROFILE_LABEL = "Google Scholar Profile";
const GS_INDEX_LABEL = "Google Scholar Index";
const SCOPUS_PROFILE_LABEL = "Scopus Profile";
const SCOPUS_INDEX_LABEL = "Scopus Index";

function findOrCreateColumnIndices(row: string[]): {
  gsProfile: number;
  gsIndex: number;
  scopusProfile: number;
  scopusIndex: number;
  insert: boolean;
} {
  const gsProfile = row.indexOf(GS_PROFILE_LABEL);
  const gsIndex = row.indexOf(GS_INDEX_LABEL);
  const scopusProfile = row.indexOf(SCOPUS_PROFILE_LABEL);
  const scopusIndex = row.indexOf(SCOPUS_INDEX_LABEL);
  if (
    gsProfile !== -1 &&
    gsIndex !== -1 &&
    scopusProfile !== -1 &&
    scopusIndex !== -1
  ) {
    return { gsProfile, gsIndex, scopusProfile, scopusIndex, insert: false };
  }
  return { gsProfile: 6, gsIndex: 7, scopusProfile: 8, scopusIndex: 9, insert: true };
}

let matchedFaculty = 0;
let matchedDiaspora = 0;

const headerIndices = findOrCreateColumnIndices(rows[0]);

if (headerIndices.insert) {
  rows[0] = [
    ...rows[0].slice(0, headerIndices.gsProfile),
    GS_PROFILE_LABEL,
    GS_INDEX_LABEL,
    SCOPUS_PROFILE_LABEL,
    SCOPUS_INDEX_LABEL,
    ...rows[0].slice(headerIndices.gsProfile),
  ];
}

for (let i = 1; i < rows.length; i++) {
  const row = rows[i];
  const name = row[NAME_INDEX]?.trim() ?? "";

  if (headerIndices.insert) {
    rows[i] = [
      ...row.slice(0, headerIndices.gsProfile),
      "",
      "",
      "",
      "",
      ...row.slice(headerIndices.gsProfile),
    ];
    continue;
  }

  if (!name) continue;

  const nidn = row[NIDN_INDEX]?.trim() ?? "";
  const normName = normalizeName(name);

  let gsProfile = "";
  let gsIndex = "";
  let scopusProfile = "";
  let scopusIndex = "";

  let faculty = facultyByNidn.get(nidn);
  if (!faculty && normName) faculty = facultyByName.get(normName);

  if (faculty) {
    matchedFaculty++;
    if (faculty.link) gsProfile = faculty.link;
    if (faculty.scopus_id) {
      scopusProfile =
        `https://www.scopus.com/authid/detail.uri?authorId=${faculty.scopus_id}`;
    }
    if (faculty.scopus_index) scopusIndex = faculty.scopus_index;
  }

  const diaspora = diasporaByName.get(normName);
  if (diaspora && diaspora.google_scholar) {
    matchedDiaspora++;
    gsProfile = diaspora.google_scholar;
    if (diaspora.h_index !== undefined) {
      gsIndex = String(diaspora.h_index);
    }
  }

  row[headerIndices.gsProfile] = gsProfile;
  row[headerIndices.gsIndex] = gsIndex;
  row[headerIndices.scopusProfile] = scopusProfile;
  row[headerIndices.scopusIndex] = scopusIndex;
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
