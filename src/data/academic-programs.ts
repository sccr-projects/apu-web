import { assetUrl } from "@lib/assets";
export interface LeadershipMessage {
  kicker: string;
  title: string;
  quote: string[];
  leaderName: string;
  leaderTitle: string;
  leaderImage: string;
  cta: {
    href: string;
    label: string;
  };
}

export const leadershipMessage: LeadershipMessage = {
  kicker: "A MESSAGE",
  title: "A Message from Head of Biomedical Science Study Program",
  quote: [
    "Assalamualaikum warahmatullahi wabarakatuh",
    "May peace and blessings be upon us all",
    "",
    "The Bachelor of Biomedical Science Study Program has a vision to produce graduates with international-standard expertise in the field of Regenerative Medicine. Our curriculum is designed through research-based learning, practical laboratory work, and strategic collaborations with both healthcare institutions and the industry.",
    "",
    "To support the development of student competencies, we provide three specialized tracks: Biomedical Cell Therapy, Biomedical AI, and Biomedical Industry, equipping our students to face future advancements in healthcare technology.",
    "",
    "We believe that being a biomedical scientist is a noble role in building knowledge, driving innovation, and contributing to human health. Therefore, we invite the younger generation who possess high curiosity and an innovative spirit to join us and become a vital part of the advancement of Indonesia's biomedical field.",
    "",
    "Wassalamualaikum warahmatullahi wabarakatuh",
  ],
  leaderName: "Nadya Audina NS. S.Si., M.Biomed",
  leaderTitle: "Head of Biomedical Science Study Program",
  leaderImage: assetUrl("/images/academic/biomedical-kaprodi.webp"),
  cta: {
    href: "/academic",
    label: "Discover the Campus Vision",
  },
};
