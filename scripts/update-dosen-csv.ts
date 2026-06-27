import * as fs from "fs";
import Papa from "papaparse";

const CSV_PATH = "data-dosen.csv";
const LECTURERS_PATH = "src/data/lecturers.ts";

interface LecturerRecord {
  name: string;
  googleScholar?: string;
  googleIndex?: string;
  nidn?: string;
  scopusLink?: string;
  scopusIndex?: string;
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

const lecturersText = fs.readFileSync(LECTURERS_PATH, "utf-8");
const lecturerRecords = extractLecturerRecords(lecturersText);

const lecturerByNidn = new Map<string, LecturerRecord>();
const lecturerByName = new Map<string, LecturerRecord>();
for (const l of lecturerRecords) {
  if (l.nidn && l.nidn !== "-") lecturerByNidn.set(l.nidn, l);
  lecturerByName.set(normalizeName(l.name), l);
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

let matchedLecturer = 0;

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

  let lecturer = lecturerByNidn.get(nidn);
  if (!lecturer && normName) lecturer = lecturerByName.get(normName);

  if (lecturer) {
    matchedLecturer++;
    if (lecturer.googleScholar) gsProfile = lecturer.googleScholar;
    if (lecturer.googleIndex) gsIndex = lecturer.googleIndex;
    if (lecturer.scopusLink) {
      scopusProfile = lecturer.scopusLink.startsWith("http")
        ? lecturer.scopusLink
        : `https://www.scopus.com/authid/detail.uri?authorId=${lecturer.scopusLink}`;
    }
    if (lecturer.scopusIndex) scopusIndex = lecturer.scopusIndex;
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
console.log(`Matched lecturer: ${matchedLecturer}`);
