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
import usBg from "@/assets/images/academic/diaspora/countries-bg/usa.jpg";


export interface DiasporaPerson {
  id: string;
  name: string;
  role: string;
  univ: string;
  country: string;
  flag: string;
  href: string;
  google_scholar: string;
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
    google_scholar: "",
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
    google_scholar: "",
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
    google_scholar: "https://scholar.google.com/citations?hl=en&user=Yif5VZQAAAAJ",
    image: mrJutadi,
    background_image: chinaBg,
    position: 20,
    pastExperience: {
      items: [
        "Medical doctor (MBBS) graduated from Changsha Medical University, Hunan, China",
        "Marketing & Partnership Manager at Stem Cell and Cancer Research (SCCR) Indonesia",
        "Doping Control Officer and Blood Control Officer for the Indonesia Anti-Doping Organization; previously served on the FIFA U-17 World Cup medical team",
      ],
    },
    notableResearch: {
      text: "Regenerative medicine using human umbilical cord-derived mesenchymal stem cells (hUC-MSCs) combined with extracellular vesicle booster therapy for metabolic and degenerative conditions.",
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
    google_scholar: "https://scholar.google.com/citations?user=vUj63aUAAAAJ",
    image: msDina,
    background_image: japanBg,
    position: 28,
    pastExperience: {
      items: [
        "Researcher at Nara Institute of Science and Technology (NAIST), Japan",
        "Pharmacy Study Program, Chemistry Department, Universitas Negeri Semarang",
        "Cancer Chemoprevention Research Center, Faculty of Pharmacy, Universitas Gadjah Mada",
      ],
    },
    notableResearch: {
      text: "Mesenchymal stem cell secretome and natural-product-based cancer therapeutics, focusing on oxidative stress, apoptosis, and metastasis signaling in breast cancer.",
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
    google_scholar: "https://scholar.google.com/citations?user=tt8x-8IAAAAJ&hl=en",
    image: mrFaheem,
    background_image: usBg,
    position: 37,
    pastExperience: {
      items: [
        "MS and PhD in genetics/breeding and animal reproduction at Huazhong Agricultural University, China",
        "Postdoctoral fellowships at Tongji Hospital, China and BRIN, Indonesia",
        "Senior Researcher at Stem Cell and Cancer Research Indonesia, Semarang",
      ],
    },
    notableResearch: {
      text: "Reproductive genetics, stem cell and cancer biology, CRISPR/Cas9 genome editing, and microbiome engineering across plant and animal systems.",
    },
  },
  {
    id: "prof-agung",
    name: "Prof. Dr. dr. Agung Putra, M.Si. Med.",
    role: "Founder & Commissioner SCCR Indonesia",
    univ: "University of Calgary, Canada",
    country: "Canada",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
    href: "#",
    google_scholar: "https://scholar.google.com/citations?user=wy-Vlt0AAAAJ",
    image: profAgung,
    position: 50,
    pastExperience: {
      items: [
        "Faculty of Medicine / Postgraduate Biomedical Science, Universitas Islam Sultan Agung (UNISSULA), Semarang",
        "Founded Stem Cell and Cancer Research (SCCR) Indonesia, an independent stem-cell research and pharmaceutical institution, in June 2013",
      ],
    },
    notableResearch: {
      text: "Mesenchymal stem cells, particularly their immunomodulatory, anti-inflammatory, and regenerative mechanisms in wound healing, organ failure, autoimmune disease, COVID-19, and cancer.",
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
    google_scholar: "https://scholar.google.com/citations?user=K6XkHHgAAAAJ&hl=en",
    image: msWaheni,
    background_image: thaiBg,
    position: 62,
    pastExperience: {
      items: [
        "Post Graduate Researcher at Molecular Biotechnology Lab, Suranaree University of Technology (SUT), Thailand",
        "Biotechnology Doctoral at Suranaree University of Technology",
      ],
    },
    notableResearch: {
      text: "Enzyme biotechnology and bioconversion of chitosan into anti-inflammatory chitosan-oligosaccharides (CHOS).",
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
    google_scholar: "https://scholar.google.com/citations?user=3AVmz6gAAAAJ",
    image: profYayuk,
    background_image: ukBg,
    position: 71,
    pastExperience: {
      items: [
        "Professor of Chemistry at Diponegoro University (Kimia UNDIP)",
        "PhD from Newcastle University (2009–2014) on nano- and micro-sized diamond powder treatments",
        "B.S. in Chemistry from Universitas Diponegoro (2001–2005)",
      ],
    },
    notableResearch: {
      text: "Synthesis, characterization, and application of photocatalysts, hydrophobic silica films, carbon quantum dots, and nanomaterials for environmental remediation, energy, and surface modification.",
    },
  },
  {
    id: "dendi",
    name: "Dendi Krisna Nugraha, M.Sc., Ph.D.",
    role: "TBD",
    univ: "Research Institute of Microbial Diseases, Osaka Japan",
    country: "Japan",
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
    href: "#",
    google_scholar: "https://scholar.google.com/citations?user=1uphszUAAAAJ",
    image: mrDendi,
    background_image: japanBg,
    position: 79,
    pastExperience: {
      items: [
        "Bachelor's in Microbiology at SITH, Institut Teknologi Bandung (ITB)",
        "Master's and PhD in Molecular Bacteriology at RIMD, The University of Osaka",
        "Postdoctoral researcher in the Department of Molecular Bacteriology (Horiguchi Lab), RIMD, The University of Osaka",
      ],
    },
    notableResearch: {
      text: "Molecular bacteriology and genetic engineering, with key work on Bordetella bronchiseptica survival and pathogenesis, antibody specificity and infection-enhancing antibodies, and mesenchymal stem cell therapeutic applications.",
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
    google_scholar: "https://scholar.google.com/citations?hl=en&user=e_Xv4EwAAAAJ",
    image: mrAgus,
    background_image: ukBg,
    position: 87,
    pastExperience: {
      items: [
        "S1 Engineering Physics – Institut Teknologi Bandung (1990); MBA – University of Birmingham (1998); S3 Social Sciences/Business Administration – Universitas Diponegoro (2025)",
        "30+ years in ICT/fintech/digital transformation leadership",
      ],
    },
    notableResearch: {
      text: "Enterprise risk management, sustainability, digital platform ecosystems, and CSR/ESG accountability in business and society.",
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
    google_scholar: "https://scholar.google.com/citations?user=8nkEolEAAAAJ",
    image: msEndah,
    background_image: aussieBg,
    position: 96,
    pastExperience: {
      items: [
        "Researcher in metabolic engineering and bioelectrochemical systems using Pseudomonas putida",
        "Co-author on publications with a University of Queensland-linked research group",
        "Recent work on cancer immunotherapy at International Journal of Cell and Biomedical Science",
      ],
    },
    notableResearch: {
      text: "Metabolic engineering of Pseudomonas putida for biochemical production and advancing NK-cell immunotherapy through CAR engineering and metabolic reprogramming.",
    },
  },
];
