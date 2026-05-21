export interface Wave {
  name: string;
  period: string;
  benefit: string;
  badgeType: "active" | "upcoming" | "normal";
}

export interface Scholarship {
  name: string;
  link: string;
}

export interface Pathway {
  id: string;
  name: string;
  description: string;
  icon: string;
  waves?: Wave[];
  scholarships?: Scholarship[];
  ctaText: string;
  ctaLink: string;
}

export const pathways: Pathway[] = [
  {
    id: "jalur-reguler",
    name: "Jalur Reguler",
    description:
      "Pendaftaran umum bagi lulusan SMA/SMK/MA dan sederajat. Tersedia 3 gelombang pendaftaran dengan berbagai keuntungan.",
    icon: "graduation-cap",
    waves: [
      {
        name: "Gelombang I",
        period: "Oktober 2025 – Mei 2026",
        benefit: "Diskon 50%",
        badgeType: "active",
      },
      {
        name: "Gelombang II",
        period: "Juni 2026 – Juli 2026",
        benefit: "Diskon 30%",
        badgeType: "upcoming",
      },
      {
        name: "Gelombang III",
        period: "September 2026",
        benefit: "Harga Normal",
        badgeType: "normal",
      },
    ],
    ctaText: "Daftar Reguler",
    ctaLink: "http://49.50.9.214:8060/index.php/pendaftaran_pmb",
  },
  {
    id: "jalur-beasiswa",
    name: "Jalur Beasiswa",
    description:
      "Program beasiswa untuk mahasiswa berprestasi akademik, non-akademik, dan content creator. Potongan biaya hingga 100%.",
    icon: "award",
    scholarships: [
      {
        name: "Beasiswa Akademik",
        link: "https://scholarship.kmb.ac.id/academic-scholarship/",
      },
      {
        name: "Beasiswa Non-Akademik",
        link: "https://scholarship.kmb.ac.id/non-academic-achievement-scholarship/",
      },
      {
        name: "Beasiswa Konten Kreator",
        link: "https://scholarship.kmb.ac.id/content-creator-scholarship/",
      },
      {
        name: "Beasiswa Partnership",
        link: "https://scholarship.kmb.ac.id/partnership-scholarship/",
      },
    ],
    ctaText: "Daftar Beasiswa",
    ctaLink: "https://scholarship.kmb.ac.id",
  },
];
