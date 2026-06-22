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
    "Welcome to the official website of the Undergraduate Law Study Program.",
    "",
    "The Undergraduate Law Study Program serves as an educational center focused on producing legal practitioners and academics who are adaptive, possess integrity, and are competent in facing the complexities of contemporary global legal issues.",
    "",
    "Students are encouraged to generate creative ideas, create technology business solutions, and be ready to compete in the digital entrepreneurship ecosystem at both the national and global levels.",
    "",
    "We emphasize critical research, clinical legal practice, and strengthening professional ethics to produce legal professionals who are ready to make a real contribution: not just following the rules, but also shaping a fairer and more efficient future of law enforcement.",
    "",
    "We invite young people with a strong sense of curiosity and a spirit of innovation to join us, become agents of change, and contribute to the nation's progress.",
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
