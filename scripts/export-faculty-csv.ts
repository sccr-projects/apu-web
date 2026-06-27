import * as fs from "node:fs";
import * as path from "node:path";

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

function escapeCsv(value: unknown): string {
  const text = value == null ? "" : String(value);
  if (text.includes(",") || text.includes('"') || text.includes("\n")) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

const fieldGetters: Record<
  (typeof fields)[number],
  (member: (typeof allLecturers)[number]) => unknown
> = {
  name: (m) => m.name,
  id: (m) => m.id,
  title: (m) => m.title,
  photo: () => "",
  nidn: (m) => m.nidn,
  link: () => "",
  scopus_id: (m) => m.scopusLink,
  scopus_index: (m) => m.scopusIndex,
  sinta_id: (m) => m.sintaLink,
  sinta_index: (m) => m.sintaIndex,
  specialization: (m) => m.specialization,
};

const rows: string[][] = [["program", ...fields]];

for (const programKey of programs) {
  for (const member of allLecturers) {
    if (!member.programs.includes(programKey)) continue;
    rows.push([programKey, ...fields.map((field) => fieldGetters[field](member) ?? "")]);
  }
}

const csv = rows.map((row) => row.map(escapeCsv).join(",")).join("\n");
const outPath = path.resolve(process.cwd(), "program-faculty.csv");

fs.writeFileSync(outPath, csv);
console.log(`Wrote ${outPath} (${rows.length - 1} members)`);
