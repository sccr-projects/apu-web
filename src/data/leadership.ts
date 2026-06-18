import { assetUrl } from "@lib/assets";
export interface LeadershipMessage {
  kicker: string;
  title: string;
  quote: string[];
  leaderName: string;
  leaderTitle: string;
  leaderTitle2?: string;
  leaderImage: string;
  cta: {
    href: string;
    label: string;
  };
}

export const leadershipMessage: LeadershipMessage = {
  kicker: "MESSAGE FROM LEADERSHIP",
  title: "Building the Future Together",
  quote: [
    "Welcome to Agung Putra University. We are here with a strong commitment to cultivate an outstanding generation ready to face global challenges with intelligence, integrity, and a spirit of collaboration.",
    "APU is more than a campus. It is a futuristic learning ecosystem where every student is empowered to discover their best potential, supported by an innovative curriculum and an inspiring environment.",
    "Join us, and together let us realize a great dream for a better Indonesia.",
  ],
  leaderName: "Prof. Dr. dr. Agung Putra, M.Si.Med.",
  leaderTitle: "Founder and Commissioner PT. SCCR",
  leaderTitle2: "President and Founder of Agung Putra University",

  leaderImage: assetUrl("/images/leadership-portrait.webp"),
  cta: {
    href: "/academic",
    label: "Discover the Campus Vision",
  },
};
