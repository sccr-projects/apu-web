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
  title: "A Message from Head of Midwifery Associate Study Program",
  quote: [
    "Assalamualaikum warahmatullahi wabarakatuh",
    "We express our gratitude to God Almighty for His grace and blessings, enabling the Diploma 3 Midwifery Study Program to continue its active role in producing competent, ethical, and globally competitive professional midwives.",
    "",
    "As a vital component of the healthcare system, midwives play a strategic role in improving maternal and child health. Therefore, the Diploma 3 Midwifery Study Program provides education oriented toward science, technology, entrepreneurship, and leadership to produce graduates who not only possess superior clinical skills but also critical and innovative thinking, and are able to adapt to the dynamic developments in the midwifery world.",
    "",
    "We continually develop a curriculum based on Outcome-Based Education (OBE) and adhere to the National Higher Education Standards (SN-Dikti) and the competencies of the Indonesian Midwifery Education Association (AIPKIND). The learning process is supported by professional lecturers, modern laboratory facilities, and a network of partnerships with various hospitals, clinics, and healthcare institutions in Indonesia and abroad.",
    "",
    "We believe that being a midwife is not only about technical skills, but also about caring, empathy, responsibility, and moral integrity. Through this spirit, we hope that Diploma 3 Midwifery graduates will be able to partner with women and families in every phase of their reproductive lives, while also becoming agents of change in improving public health.",
    "",
    "Finally, we invite all prospective students, partners, and the public to learn more about the Diploma 3 Midwifery Study Program through this website. Together, let's create midwives who are knowledgeable, moral, and globally competitive for a better future for maternal and child health in Indonesia.",
    "",
    "Wassalamualaikum warahmatullahi wabarakatuh",
  ],
  leaderName: "Bdn, Titik Kurniawati, S.SiT., M.Kes., M.Keb",
  leaderTitle: "Head of Midwifery Associate Study Program",
  leaderImage: assetUrl("/images/academic/midwifery-associate-kaprodi.webp"),
  cta: {
    href: "/academic",
    label: "Discover the Campus Vision",
  },
};
