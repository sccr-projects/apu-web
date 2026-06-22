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
  title: "A Message from Head of Law Study Program",
  quote: [
    "Assalamualaikum warahmatullahi wabarakatuh",
    "Welcome to the Law Study Program at Agung Putra University.",
    "",
    "In an era of rapid digital transformation and globalization, the world needs law graduates who possess an international outlook, adaptability, and a global edge. Our program integrates academic excellence, professional practice, technological innovation, and a global perspective into a progressive curriculum designed for the future.",
    "",
    "We specialize in Legal Science and Medical Law, utilizing modern learning approaches that strengthen analytical legal thinking, research, and practical application.",
    "",
    "Students learn interactively through moot courts, legal clinics, legal drafting laboratories, and case-based learning. We emphasize professional communication, problem-solving, leadership, and an entrepreneurial mindset to ensure our graduates adapt seamlessly to both national and international professional environments.",
    "",
    "Supported by expert academics, seasoned practitioners, and a robust collaborative network, the Law Study Program at Agung Putra University is committed to being a premier center for modern, internationally oriented legal education in Indonesia. Join us to become the next generation of innovative, adaptive, and world-class legal professionals.",
    "",
    "Wassalamualaikum warahmatullahi wabarakatuh",
  ],
  leaderName: "dr. Erwin, S.H., M.H",
  leaderTitle: "Head of Law Study Program",
  leaderImage: assetUrl("/images/academic/law-kaprodi.jpeg"),
  cta: {
    href: "/academic",
    label: "Discover the Campus Vision",
  },
};
