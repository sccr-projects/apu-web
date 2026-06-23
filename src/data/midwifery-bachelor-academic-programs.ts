import { assetUrl } from "@lib/assets";
import type { LeadershipMessage } from "@data/leadership";

export const leadershipMessage: LeadershipMessage = {
  kicker: "A MESSAGE",
  title: "A Message from Head of Midwifery Bachelor Study Program",
  quote: [
    "Assalamualaikum warahmatullahi wabarakatuh",
    "Welcome to the official website of the Undergraduate Midwifery and Midwifery Professional Education Program.",
    "",
    "The Undergraduate Midwifery and Midwifery Professional Education Program exists to address the increasingly complex challenges of women's health. We are committed to producing graduates who not only possess strong scientific competence and clinical skills, but also possess a humanistic, innovative, and visionary spirit.",
    "",
    "With the hallmark of 'Women Health & Beauty Care,' we strive to integrate the concepts of women's health, wellness, and beauty into every aspect of learning. Students not only understand reproductive health and pregnancy, but also develop a holistic perspective—from physical and psychological balance to aesthetics.",
    "",
    "We believe that being a midwife is not just a profession, but a calling to serve, accompany, and empower women at every stage of their lives. Therefore, we invite young people who have a passion for learning, social awareness, and leadership skills to join us – to be part of a positive change for the future of Indonesian women's health.",
    "",
    "Wassalamualaikum warahmatullahi wabarakatuh",
  ],
  leaderName: "Bd. Rizqitha, S.Tr.Keb., M.Tr.Keb",
  leaderTitle: "Head of Midwifery Bachelor Study Program",
  leaderImage: assetUrl("/images/academic/midwifery-bachelor-kaprodi.webp"),
  cta: {
    href: "/academic",
    label: "Discover the Campus Vision",
  },
};
