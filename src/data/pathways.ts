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
    name: "Regular Pathway",
    description:
      "General registration for graduates of senior high/vocational/Islamic high school and equivalent. 3 admission waves are available with various benefits.",
    icon: "graduation-cap",
    waves: [
      {
        name: "Wave I",
        period: "October 2025 – May 2026",
        benefit: "50% Discount",
        badgeType: "active",
      },
      {
        name: "Wave II",
        period: "June 2026 – July 2026",
        benefit: "30% Discount",
        badgeType: "upcoming",
      },
      {
        name: "Wave III",
        period: "September 2026",
        benefit: "Regular Price",
        badgeType: "normal",
      },
    ],
    ctaText: "Apply Regular",
    ctaLink: "http://49.50.9.214:8060/index.php/pendaftaran_pmb",
  },
  {
    id: "jalur-beasiswa",
    name: "Scholarship Pathway",
    description:
      "Scholarship program for students with academic, non-academic, and content creator achievements. Fee reduction up to 50%.",
    icon: "award",
    scholarships: [
      {
        name: "Academic Scholarship",
        link: "https://scholarship.apu.ac.id/academic-scholarship/",
      },
      {
        name: "Non-Academic Scholarship",
        link: "https://scholarship.apu.ac.id/non-academic-achievement-scholarship/",
      },
      {
        name: "Content Creator Scholarship",
        link: "https://scholarship.apu.ac.id/content-creator-scholarship/",
      },
      {
        name: "Partnership Scholarship",
        link: "https://scholarship.apu.ac.id/partnership-scholarship/",
      },
    ],
    ctaText: "Apply for Scholarship",
    ctaLink: "https://scholarship.apu.ac.id",
  },
];
