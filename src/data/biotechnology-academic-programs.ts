import { assetUrl } from "@lib/assets";
import type { LeadershipMessage } from "@data/leadership";

export const leadershipMessage: LeadershipMessage = {
  kicker: "A MESSAGE",
  title: "A Message from Head of Biotechnology Study Program",
  quote: [
    "Assalamualaikum warahmatullahi wabarakatuh",
    "May peace and blessings be upon us all",
    "",
    "Welcome to the Biotechnology Study Program, which has three main focuses: Medical Biotechnology, Biotechnology Informatics, and Biotechnology Industry. Our graduates are prepared to contribute as research scientists, clinical regulators, bioinformatics experts, data security specialists, quality assurance professionals, and industrial biotechnology developers.",
    "",
    "The Biotechnology Study Program is committed to becoming an internationally recognized program through innovation in green technology and cell engineering. Our mission is to educate competent graduates with an entrepreneurial spirit, capable of conducting innovative research and community service. Through this website, we hope to establish effective communication and share information with the entire academic community and stakeholders.",
    "",
    "",
    "Wassalamualaikum warahmatullahi wabarakatuh",
  ],
  leaderName: "Fauziah Novita Putri Rifai, S.Si, M.Biotech",
  leaderTitle: "Head of Biotechnology Study Program",
  leaderImage: assetUrl("/images/academic/biotechnology-kaprodi.webp"),
  cta: {
    href: "/academic",
    label: "Discover the Campus Vision",
  },
};
