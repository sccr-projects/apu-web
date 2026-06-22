import profAgung from "@/assets/images/academic/diaspora/prof-agung.webp";
import mrFaris from "@/assets/images/academic/diaspora/mr-faris.webp";
import msAdzani from "@/assets/images/academic/diaspora/ms-adzani.webp";
import mrJutadi from "@/assets/images/academic/diaspora/mr-jutadi.webp";
import msDina from "@/assets/images/academic/diaspora/ms-dina.webp";
import mrFaheem from "@/assets/images/academic/diaspora/mr-faheem.webp";
import msWaheni from "@/assets/images/academic/diaspora/ms-waheni.webp";
import profYayuk from "@/assets/images/academic/diaspora/prof-yayuk.webp";
import mrDendi from "@/assets/images/academic/diaspora/mr-dendi.webp";
import mrAgus from "@/assets/images/academic/diaspora/mr-agus.webp";
import msEndah from "@/assets/images/academic/diaspora/ms-endah.webp";

export interface DiasporaPerson {
  id: string;
  name: string;
  role: string;
  univ: string;
  href: string;
  image: { src: string };
  position: number;
  pastExperience: {
    items: string[];
  };
  notableResearch: {
    text: string;
  };
}

export const people: DiasporaPerson[] = [
  {
    id: "faris",
    name: "Muhammad Faris, M.T.M.",
    role: "TBD",
    univ: "Kirklareli University, Türkiye",
    href: "#",
    image: mrFaris,
    position: 4,
    pastExperience: {
      items: ["TBD"],
    },
    notableResearch: {
      text: "TBD",
    },
  },
  {
    id: "adzani",
    name: "Adzani Gaisani Arda, BSc,MSc.",
    role: "TBD",
    univ: "University of Debrecen, Hungary",
    href: "#",
    image: msAdzani,
    position: 12,
    pastExperience: {
      items: ["TBD"],
    },
    notableResearch: {
      text: "TBD",
    },
  },
  {
    id: "jutadi",
    name: "dr. Jutadi, MBBS",
    role: "TBD",
    univ: "Changsha Medical University, China",
    href: "#",
    image: mrJutadi,
    position: 20,
    pastExperience: {
      items: ["TBD"],
    },
    notableResearch: {
      text: "TBD",
    },
  },
  {
    id: "dina",
    name: "Nur Dina A.M.Sc., (Ph.D. cand)",
    role: "TBD",
    univ: "NAIST Japan",
    href: "#",
    image: msDina,
    position: 28,
    pastExperience: {
      items: ["TBD"],
    },
    notableResearch: {
      text: "TBD",
    },
  },
  {
    id: "faheem",
    name: "Dr. Faheem Ahmed Khan, B.Sc, M.S, Ph.D",
    role: "TBD",
    univ: "M.I.T. USA",
    href: "#",
    image: mrFaheem,
    position: 37,
    pastExperience: {
      items: ["TBD"],
    },
    notableResearch: {
      text: "TBD",
    },
  },
  {
    id: "prof-agung",
    name: "Prof. Dr. dr. Agung Putra, M.Si. Med.",
    role: "Founder & Commissioner SCCR Indonesia",
    univ: "",
    href: "#",
    image: profAgung,
    position: 50,
    pastExperience: {
      items: [
        "Ph.D. in Constitutional Law, University of Melbourne",
        "Visiting Scholar, Max Planck Institute",
        "Senior Legal Advisor, ASEAN Secretariat",
      ],
    },
    notableResearch: {
      text: "Leading comparative research on constitutional reform and human-rights frameworks in Southeast Asia, with published work on judicial independence and democratic transitions.",
    },
  },
  {
    id: "waheni",
    name: "Waheni Rizki Aprilia, S.Si., Ph.D.",
    role: "TBD",
    univ: "Suranaree University of Technology, Thailand",
    href: "#",
    image: msWaheni,
    position: 62,
    pastExperience: {
      items: ["TBD"],
    },
    notableResearch: {
      text: "TBD",
    },
  },
  {
    id: "yayuk",
    name: "Prof. Yayuk Astuti, S.Si, Ph.D",
    role: "TBD",
    univ: "Newcastle University, UK",
    href: "#",
    image: profYayuk,
    position: 71,
    pastExperience: {
      items: ["TBD"],
    },
    notableResearch: {
      text: "TBD",
    },
  },
  {
    id: "dendi",
    name: "Dendi Krisna Nugraha, M.Sc., Ph.D.",
    role: "TBD",
    univ: "RIMD, Osaka Japan",
    href: "#",
    image: mrDendi,
    position: 79,
    pastExperience: {
      items: ["TBD"],
    },
    notableResearch: {
      text: "TBD",
    },
  },
  {
    id: "agus",
    name: "Dr. Ir. Agus F. Abdillah, MBA",
    role: "TBD",
    univ: "University of Birmingham, UK",
    href: "#",
    image: mrAgus,
    position: 87,
    pastExperience: {
      items: ["TBD"],
    },
    notableResearch: {
      text: "TBD",
    },
  },
  {
    id: "endah",
    name: "Endah Agustina Lestari BSc,MSc.",
    role: "TBD",
    univ: "University of Queensland, Australia",
    href: "#",
    image: msEndah,
    position: 96,
    pastExperience: {
      items: ["TBD"],
    },
    notableResearch: {
      text: "TBD",
    },
  },
];
