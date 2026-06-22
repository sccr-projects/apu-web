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
  title: "A Message from Head of Communication Science Study Program",
  quote: [
    "Assalamualaikum warahmatullahi wabarakatuh",
    "Welcome to the official website of the Communications Department.",
    "",
    "The world of communications is evolving rapidly. Digital technology, creative content, and the dynamics of the media industry have formed a highly connected and ever-changing communications ecosystem. Today's communication is not only about how people interact, but also about how the media industry evolves, how journalism adapts, how communication business strategies are designed, and how technology shapes people's information consumption patterns. In this current of transformation, higher education is required to continuously adapt to prepare graduates who are not only technically competent but also competitive and resilient in the face of constant change.",
    "",
    "The Communications Department strives to address these challenges by designing a curriculum relevant to the needs of today's communications industry. The developed curriculum ensures graduates can adapt quickly and compete effectively in various industry sectors. Students are equipped with the skills to analyze media dynamics, produce multimedia content, understand branding, public relations, and practice lobbying and negotiation. This combination of theory and practice ensures graduates possess competencies ready to compete in various sectors and industries.",
    "",
    "With a commitment to academic quality and the development of the communications world, the Bachelor of Communication Studies Program continues to create an innovative, creative, and strategic learning ecosystem. Join us and grow together as a generation of communicators ready to face global challenges.",
    "",
    "Wassalamualaikum warahmatullahi wabarakatuh",
  ],
  leaderName: "Muhamad Agung Setiawan, S.sos., M.Sos",
  leaderTitle: "Head of Communication Study Program",
  leaderImage: assetUrl("/images/academic/communication-kaprodi.webp"),
  cta: {
    href: "/academic",
    label: "Discover the Campus Vision",
  },
};
