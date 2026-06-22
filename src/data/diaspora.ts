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

import turkeyBg from "@/assets/images/academic/diaspora/countries-bg/turkey.jpg";
import hungaryBg from "@/assets/images/academic/diaspora/countries-bg/hungary.jpg";
import chinaBg from "@/assets/images/academic/diaspora/countries-bg/china.jpg";
import japanBg from "@/assets/images/academic/diaspora/countries-bg/japan.jpg";
import thaiBg from "@/assets/images/academic/diaspora/countries-bg/thai.jpg";
import ukBg from "@/assets/images/academic/diaspora/countries-bg/uk.jpg";
import aussieBg from "@/assets/images/academic/diaspora/countries-bg/aussie.jpg";
import usaBg from "@/assets/images/academic/diaspora/countries-bg/usa.jpg";

export interface DiasporaPerson {
  id: string;
  name: string;
  role: string;
  univ: string;
  country: string;
  flag: string;
  href: string;
  image: { src: string };
  background_image?: { src: string };
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
    country: "Turkey",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
    href: "#",
    image: mrFaris,
    background_image: turkeyBg,
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
    country: "Hungary",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
    href: "#",
    image: msAdzani,
    background_image: hungaryBg,
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
    country: "China",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    href: "#",
    image: mrJutadi,
    background_image: chinaBg,
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
    country: "Japan",
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
    href: "#",
    image: msDina,
    background_image: japanBg,
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
    country: "United States",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    href: "#",
    image: mrFaheem,
    background_image: usaBg,
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
    country: "Canada",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
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
    country: "Thailand",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg",
    href: "#",
    image: msWaheni,
    background_image: thaiBg,
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
    country: "United Kingdom",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    href: "#",
    image: profYayuk,
    background_image: ukBg,
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
    country: "Japan",
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
    href: "#",
    image: mrDendi,
    background_image: japanBg,
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
    country: "United Kingdom",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    href: "#",
    image: mrAgus,
    background_image: ukBg,
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
    country: "Australia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
    href: "#",
    image: msEndah,
    background_image: aussieBg,
    position: 96,
    pastExperience: {
      items: ["TBD"],
    },
    notableResearch: {
      text: "TBD",
    },
  },
];
