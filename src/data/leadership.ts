import type { ImageMetadata } from "astro";
import profAgung from "@/assets/images/academic/diaspora/prof-agung.webp";
import type { FacultyMember } from "./program-faculty";
import type { DiasporaPerson } from "./diaspora";
import { people } from "./diaspora";

export interface LeadershipMessage {
  kicker: string;
  title: string;
  quote: string[];
  leader: FacultyMember | DiasporaPerson;
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
  leader: people.find((p) => p.id === "prof-agung")!,
  cta: {
    href: "/academic",
    label: "Discover the Campus Vision",
  },
};
