import type { ImageMetadata } from "astro";

// Program faculty images
import dendiKrisnaNugraha from "@/assets/images/academic/lecturer_images/biomedic/Dendi_Krisna_Nugraha.webp";
import nadyaAudinaNurkhafiya from "@/assets/images/academic/lecturer_images/biomedic/Nadya_Audina_Nurkhafiya.webp";
import mohammadAriqNazar from "@/assets/images/academic/lecturer_images/biomedic/Mohammad_Ariq_Nazar.webp";
import dianRespatiAyu from "@/assets/images/academic/lecturer_images/biomedic/Dian_Respati_Ayu.webp";
import riskyChandraSatriaIrawan from "@/assets/images/academic/lecturer_images/biomedic/Risky_Chandra_Satria_Irawan.webp";

import muhamadAgungSetiawan from "@/assets/images/academic/lecturer_images/communication/Muhamad_Agung_Setiawan.webp";
import sutinnarto from "@/assets/images/academic/lecturer_images/communication/Sutinnarto.webp";
import laknaTulasun from "@/assets/images/academic/lecturer_images/communication/Lakna_Tulasun.webp";
import rifatulHimmah from "@/assets/images/academic/lecturer_images/communication/Rifatul_Himmah.webp";

import reniNurArifah from "@/assets/images/academic/lecturer_images/management/Reni_Nur_Arifah.webp";
import yettyYulianyKusumaningrum from "@/assets/images/academic/lecturer_images/management/Yetty_Yuliany_Kusumaningrum.webp";
import putriAryoJelangFitriKhothimah from "@/assets/images/academic/lecturer_images/management/Putri_Aryo_Jelang_Fitri_Khothimah.webp";
import randikaShaflyFawwaz from "@/assets/images/academic/lecturer_images/management/Randika_Shafly_Fawwaz.webp";
import mrAgus from "@/assets/images/academic/diaspora/mr-agus.webp";

import titikKurniawati from "@/assets/images/academic/lecturer_images/d3_midwifery/Titik_Kurniawati.webp";
import diahWidyatun from "@/assets/images/academic/lecturer_images/d3_midwifery/Diah_Widyatun.webp";
import dewiElliana from "@/assets/images/academic/lecturer_images/d3_midwifery/Dewi_Elliana.webp";
import ritaAgustina from "@/assets/images/academic/lecturer_images/d3_midwifery/Rita_Agustina.webp";
import ernaSetyaningsih from "@/assets/images/academic/lecturer_images/d3_midwifery/Erna_Setyaningsih.webp";

import rizqitha from "@/assets/images/academic/lecturer_images/bachelor_midwifery/Rizqitha.webp";
import marizaMustikaDewi from "@/assets/images/academic/lecturer_images/bachelor_midwifery/Mariza_Mustika_Dewi.webp";
import sriMularsih from "@/assets/images/academic/lecturer_images/bachelor_midwifery/Sri_Mularsih.webp";

import zain from "@/assets/images/academic/lecturer_images/law/zain.webp";
import erwin from "@/assets/images/academic/lecturer_images/law/erwin.webp";

import fauziahNovitaPutriRifai from "@/assets/images/academic/lecturer_images/biotechnology/Fauziah_Novita_Putri_Rifai.webp";
import iffanAlif from "@/assets/images/academic/lecturer_images/biotechnology/Iffan_Alif.webp";
import nurulHidayah from "@/assets/images/academic/lecturer_images/biotechnology/Nurul_Hidayah.webp";
import salindriPrawitasari from "@/assets/images/academic/lecturer_images/biotechnology/Salindri_Prawitasari.webp";
import diniCahyani from "@/assets/images/academic/lecturer_images/biotechnology/Dini_Cahyani.webp";
import mrFaheem from "@/assets/images/academic/diaspora/mr-faheem.webp";
import msWaheni from "@/assets/images/academic/diaspora/ms-waheni.webp";

// Diaspora-only images
import profAgung from "@/assets/images/academic/diaspora/prof-agung.webp";
import mrFaris from "@/assets/images/academic/diaspora/mr-faris.webp";
import msAdzani from "@/assets/images/academic/diaspora/ms-adzani.webp";
import mrJutadi from "@/assets/images/academic/diaspora/mr-jutadi.webp";
import msDina from "@/assets/images/academic/diaspora/ms-dina.webp";
import profYayuk from "@/assets/images/academic/diaspora/prof-yayuk.webp";
import mrDendi from "@/assets/images/academic/diaspora/mr-dendi.webp";
import msEndah from "@/assets/images/academic/diaspora/ms-endah.webp";

// Diaspora country backgrounds
import turkeyBg from "@/assets/images/academic/diaspora/countries-bg/turkey.jpg";
import hungaryBg from "@/assets/images/academic/diaspora/countries-bg/hungary.jpg";
import chinaBg from "@/assets/images/academic/diaspora/countries-bg/china.jpg";
import japanBg from "@/assets/images/academic/diaspora/countries-bg/japan.jpg";
import thaiBg from "@/assets/images/academic/diaspora/countries-bg/thai.jpg";
import ukBg from "@/assets/images/academic/diaspora/countries-bg/uk.jpg";
import aussieBg from "@/assets/images/academic/diaspora/countries-bg/aussie.jpg";
import usBg from "@/assets/images/academic/diaspora/countries-bg/usa.jpg";

export interface Lecturer {
  id: string;
  name: string;
  image?: ImageMetadata;
  diasporaImage?: ImageMetadata;

  title?: string;
  nidn?: string;
  specialization?: string;

  googleScholar?: string;
  googleIndex?: string;
  scopusId?: string;
  scopusIndex?: string;
  sintaLink?: string;
  sintaIndex?: string;

  role?: string;
  university?: string;
  country?: string;
  flag?: string;
  href?: string;
  backgroundImage?: ImageMetadata;
  position?: number;
  pastExperience?: string[];
  notableResearch?: string;

  programs: string[];
}

export const allLecturers: Lecturer[] = [
  // Biomedical Science
  {
    id: "faheem-ahmed-khan",
    name: "Faheem Ahmed Khan, BSc, MS, PhD",
    image: mrFaheem,
    diasporaImage: mrFaheem,
    title: "Lecturer",
    nidn: "-",
    googleScholar: "https://scholar.google.com/citations?user=tt8x-8IAAAAJ&hl=en",
    googleIndex: "29",
    role: "Lecturer and Researcher",
    university: "M.I.T. USA",
    country: "United States",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    href: "#",
    backgroundImage: usBg,
    position: 37,
    pastExperience: [
      "MS and PhD in genetics/breeding and animal reproduction at Huazhong Agricultural University, China",
      "Postdoctoral fellowships at Tongji Hospital, China and BRIN, Indonesia",
      "Senior Researcher at Stem Cell and Cancer Research Indonesia, Semarang",
    ],
    notableResearch:
      "Reproductive genetics, stem cell and cancer biology, CRISPR/Cas9 genome editing, and microbiome engineering across plant and animal systems.",
    programs: ["biomedical", "diaspora"],
  },
  {
    id: "dendi-krisna-nugraha",
    name: "Dendi Krisna Nugraha, M.Sc., Ph.D.",
    image: dendiKrisnaNugraha,
    diasporaImage: mrDendi,
    title: "Lecturer",
    nidn: "8363770671130253",
    specialization: "Genetic Engineering",
    googleScholar: "https://scholar.google.com/citations?user=1uphszUAAAAJ",
    googleIndex: "4",
    role: "Lecturer and Researcher",
    university: "Research Institute of Microbial Diseases, Osaka Japan",
    country: "Japan",
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
    href: "#",
    backgroundImage: japanBg,
    position: 79,
    pastExperience: [
      "Bachelor's in Microbiology at SITH, Institut Teknologi Bandung (ITB)",
      "Master's and PhD in Molecular Bacteriology at RIMD, The University of Osaka",
      "Postdoctoral researcher in the Department of Molecular Bacteriology (Horiguchi Lab), RIMD, The University of Osaka",
    ],
    notableResearch:
      "Molecular bacteriology and genetic engineering, with key work on Bordetella bronchiseptica survival and pathogenesis, antibody specificity and infection-enhancing antibodies, and mesenchymal stem cell therapeutic applications.",
    programs: ["biomedical", "diaspora"],
  },
  {
    id: "nadya-audina-ns",
    name: "Nadya Audina NS. S.Si., M.Biomed",
    image: nadyaAudinaNurkhafiya,
    title: "Head of Biomedical Science Study Program",
    nidn: "5960775676230172",
    specialization: "Herbal Immunomodulation",
    googleScholar: "https://scholar.google.com.my/citations?user=7bIu0yoAAAAJ&hl=en&oi=ao",
    googleIndex: "2",
    programs: ["biomedical"],
  },
  {
    id: "mohammad-ariq-nazar",
    name: "Mohammad Ariq Nazar, S.Si, M.Biomed",
    image: mohammadAriqNazar,
    title: "Vice Rector I",
    nidn: "0614029302",
    specialization: "Bioengineering",
    googleScholar: "https://scholar.google.com/citations?user=YaYgh0AAAAAJ&hl=id",
    googleIndex: "4",
    programs: ["biomedical"],
  },
  {
    id: "dian-respati-ayu",
    name: "Dian Respati Ayu, S.Si., M.Biomed",
    image: dianRespatiAyu,
    title: "Lecturer",
    nidn: "9933777678230112",
    specialization: "Secretome and Exosome",
    googleScholar: "https://scholar.google.com.my/citations?user=DwjZbLMAAAAJ&hl=en&oi=ao",
    googleIndex: "1",
    programs: ["biomedical"],
  },
  {
    id: "risky-chandra-satria-irawan",
    name: "Risky Chandra Satria Irawan S.Si, M.Biomed",
    image: riskyChandraSatriaIrawan,
    title: "Lecturer",
    nidn: "0540771672130323",
    specialization: "Stem Cell",
    googleScholar: "https://scholar.google.com.my/citations?user=TAjcHpYAAAAJ&hl=en&oi=ao",
    googleIndex: "4",
    programs: ["biomedical"],
  },
  {
    id: "naufal-sebastian-anggoro",
    name: "Naufal Sebastian Anggoro, S.Si., M.Si",
    title: "Lecturer",
    nidn: "1149776677130313",
    googleScholar: "https://scholar.google.com/citations?user=ACiCpMsAAAAJ&hl=en",
    googleIndex: "2",
    programs: ["biomedical"],
  },
  {
    id: "endah-agustina-lestari",
    name: "Endah Agustina Lestari, S.Si, M.Mol.Biol.",
    diasporaImage: msEndah,
    title: "Lecturer",
    nidn: "7134765666230333",
    googleScholar: "https://scholar.google.com/citations?user=8nkEolEAAAAJ",
    googleIndex: "2",
    role: "Lecturer",
    university: "University of Queensland, Australia",
    country: "Australia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
    href: "#",
    backgroundImage: aussieBg,
    position: 96,
    pastExperience: [
      "Researcher in metabolic engineering and bioelectrochemical systems using Pseudomonas putida",
      "Co-author on publications with a University of Queensland-linked research group",
      "Recent work on cancer immunotherapy at International Journal of Cell and Biomedical Science",
    ],
    notableResearch:
      "Metabolic engineering of Pseudomonas putida for biochemical production and advancing NK-cell immunotherapy through CAR engineering and metabolic reprogramming.",
    programs: ["biomedical", "diaspora"],
  },

  // Biotechnology
  {
    id: "waheni-rizki-aprilia",
    name: "Waheni Rizki Aprilia, S.Si., Ph.D.",
    image: msWaheni,
    diasporaImage: msWaheni,
    title: "Vice Rector II",
    nidn: "8734771672230402",
    googleScholar: "https://scholar.google.com/citations?user=K6XkHHgAAAAJ&hl=en",
    googleIndex: "1",
    role: "Vice Rector II",
    university: "Suranaree University of Technology, Thailand",
    country: "Thailand",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg",
    href: "#",
    backgroundImage: thaiBg,
    position: 62,
    pastExperience: [
      "Post Graduate Researcher at Molecular Biotechnology Lab, Suranaree University of Technology (SUT), Thailand",
      "Biotechnology Doctoral at Suranaree University of Technology",
    ],
    notableResearch:
      "Enzyme biotechnology and bioconversion of chitosan into anti-inflammatory chitosan-oligosaccharides (CHOS).",
    programs: ["biotechnology", "diaspora"],
  },
  {
    id: "fauziah-novita-putri-rifai",
    name: "Fauziah Novita Putri Rifai, S.Si, M.Biotech",
    image: fauziahNovitaPutriRifai,
    title: "Head of Biotechnology Study Program",
    nidn: "5438774675230243",
    googleScholar: "https://scholar.google.com/citations?hl=en&user=1UJe3asAAAAJ",
    googleIndex: "2",
    programs: ["biotechnology"],
  },
  {
    id: "iffan-alif",
    name: "Iffan Alif, S.Si, M.Biotech",
    image: iffanAlif,
    title: "Lecturer",
    nidn: "5454772673130273",
    googleScholar: "https://scholar.google.com/citations?user=3djlgEEAAAAJ&hl=en&oi=sra",
    googleIndex: "10",
    programs: ["biotechnology"],
  },
  {
    id: "nurul-hidayah",
    name: "Nurul Hidayah S.Si, M.Biotech",
    image: nurulHidayah,
    title: "Lecturer",
    nidn: "6960774675230252",
    googleScholar: "https://scholar.google.com/citations?user=hGchFnoAAAAJ&hl=en",
    googleIndex: "4",
    programs: ["biotechnology"],
  },
  {
    id: "salindri-prawitasari",
    name: "Salindri Prawitasari, S.Si, M.Si.",
    image: salindriPrawitasari,
    title: "Lecturer",
    nidn: "9659774675230242",
    googleScholar: "https://scholar.google.com/citations?hl=en&user=kRILrrwAAAAJ",
    googleIndex: "3",
    programs: ["biotechnology"],
  },
  {
    id: "dini-cahyani",
    name: "Dini Cahyani, S.Si, M.Biotech",
    image: diniCahyani,
    title: "Lecturer",
    nidn: "8237775676230193",
    specialization: "Immunology",
    googleScholar: "https://scholar.google.com/citations?hl=en&user=8lhVAWkAAAAJ",
    googleIndex: "1",
    programs: ["biotechnology"],
  },
  {
    id: "fikriya-novita-sari",
    name: "Fikriya Novita Sari, M.Si",
    title: "Lecturer",
    nidn: "1459777678230243",
    googleScholar: "https://scholar.google.com/citations?user=CgzGGz0AAAAJ",
    googleIndex: "2",
    programs: ["biotechnology"],
  },

  // Communication
  {
    id: "muhamad-agung",
    name: "Muhamad Agung S, S.Sos., M.Sos",
    image: muhamadAgungSetiawan,
    title: "Head of Communication Study Program",
    nidn: "0610089602",
    specialization: "Social Communication",
    googleScholar: "https://scholar.google.com/citations?user=be-n4nUAAAAJ&hl=id",
    googleIndex: "2",
    programs: ["communication"],
  },
  {
    id: "sutinnarto",
    name: "Sutinnarto, S.I.Kom., M.I.Kom",
    image: sutinnarto,
    title: "Lecturer",
    nidn: "0614028102",
    specialization: "Public Speaking",
    googleScholar: "https://scholar.google.com/citations?user=swEkGVoAAAAJ&hl=en",
    googleIndex: "3",
    programs: ["communication"],
  },
  {
    id: "lakna-tulasun",
    name: "Lakna Tulas'un, S.Sos, M.I.Kom",
    image: laknaTulasun,
    title: "Lecturer",
    nidn: "0626099702",
    specialization: "Journalism",
    googleScholar: "https://scholar.google.com/citations?user=v61mGoQAAAAJ&hl=id&authuser=2",
    googleIndex: "2",
    programs: ["communication"],
  },
  {
    id: "rifatul-himmah",
    name: "Rif'atul Himmah, S.Sos. M.I.Kom.",
    image: rifatulHimmah,
    title: "Lecturer",
    nidn: "2461772673230292",
    specialization: "Media and Gender",
    googleScholar: "https://scholar.google.com/citations?hl=id&user=80w7fDEAAAAJ",
    googleIndex: "1",
    programs: ["communication"],
  },
  {
    id: "bondan-eko-suratno",
    name: "Bondan Eko Suratno, M.Hum",
    title: "Lecturer",
    nidn: "610108603",
    googleScholar: "https://scholar.google.com/citations?user=dmbqZSIAAAAJ&hl=en",
    googleIndex: "1",
    programs: ["communication"],
  },

  // Law
  {
    id: "erwin",
    name: "Dr. Erwin, S.H., M.H., M.Kn.",
    image: erwin,
    title: "Head of Law Study Program",
    nidn: "9990637233",
    googleScholar: "https://scholar.google.com/citations?user=Ov4mPDsAAAAJ&hl=en",
    googleIndex: "2",
    programs: ["law"],
  },
  {
    id: "zain-arfin-utama",
    name: "Zain Arfin Utama, S.H., M.H.",
    image: zain,
    title: "Lecturer",
    nidn: "0615119301",
    specialization: "Criminal Law Reform",
    googleScholar: "https://scholar.google.com/citations?user=uUEzUqAAAAAJ&hl=id",
    googleIndex: "2",
    programs: ["law"],
  },
  {
    id: "naufal-sebastian",
    name: "Naufal Sebastian, S.H.,M.H.",
    title: "Lecturer",
    nidn: "7435775676130282",
    programs: ["law"],
  },

  // Management
  {
    id: "agus-abdillah",
    name: "Dr. Ir. Agus F. Abdillah, MBA, ERMAP",
    image: mrAgus,
    diasporaImage: mrAgus,
    title: "Lecturer",
    nidn: "6137744645130133",
    scopusId: "59912689000",
    googleScholar: "https://scholar.google.com/citations?hl=en&user=e_Xv4EwAAAAJ",
    googleIndex: "1",
    role: "Lecturer",
    university: "University of Birmingham, UK",
    country: "United Kingdom",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    href: "#",
    backgroundImage: ukBg,
    position: 87,
    pastExperience: [
      "S1 Engineering Physics – Institut Teknologi Bandung (1990); MBA – University of Birmingham (1998); S3 Social Sciences/Business Administration – Universitas Diponegoro (2025)",
      "30+ years in ICT/fintech/digital transformation leadership",
    ],
    notableResearch:
      "Enterprise risk management, sustainability, digital platform ecosystems, and CSR/ESG accountability in business and society.",
    programs: ["management", "diaspora"],
  },
  {
    id: "suharto-abdul-majid",
    name: "Dr. Suharto Abdul Majid, AMTrU, S.Sos, M.M.",
    title: "Lecturer",
    nidn: "315037102",
    programs: ["management"],
    scopusId: "59912689000",
  },
  {
    id: "mohammad-annas",
    name: "Dr. Mohammad Annas, S. Tr.Par, M.M.",
    title: "Lecturer",
    nidn: "312087404",
    scopusId: "57886387600",
    googleScholar: "https://scholar.google.com/citations?user=9CJNrb8AAAAJ&hl=en",
    googleIndex: "13",
    programs: ["management"],
  },
  {
    id: "reni-nur-arifah",
    name: "Reni Nur Arifah, S.E., M.M.",
    image: reniNurArifah,
    title: "Head of Management Study Program",
    nidn: "0625069301",
    specialization: "Financial Management",
    googleScholar: "https://scholar.google.com/citations?user=eaGmE2AAAAAJ&hl=id",
    googleIndex: "1",
    programs: ["management"],
  },
  {
    id: "yetty-yuliany",
    name: "Yetty Yuliany K, S.E., M.M",
    image: yettyYulianyKusumaningrum,
    title: "Lecturer",
    nidn: "0605077402",
    specialization: "Human Resource Management",
    googleScholar: "https://scholar.google.com/citations?user=86pLtjMAAAAJ&hl=id&oi=sra",
    googleIndex: "1",
    programs: ["management"],
  },
  {
    id: "putri-aryo-jelang-fitri-khothimah",
    name: "Putri Aryo Jelang Fitri Khothimah, S.E., M.M.",
    image: putriAryoJelangFitriKhothimah,
    title: "Lecturer",
    nidn: "0601039501",
    specialization: "Financial Management",
    googleScholar: "https://scholar.google.com/citations?user=aZglriAAAAAJ&hl=id",
    googleIndex: "2",
    programs: ["management"],
  },
  {
    id: "randika-shafly-fawwaz",
    name: "Randika Shafly Fawwaz, S.M., M.M",
    image: randikaShaflyFawwaz,
    title: "Lecturer",
    nidn: "2433775676130432",
    specialization: "Human Resources",
    googleScholar: "https://scholar.google.com/citations?user=PmlArwYAAAAJ&hl=en",
    googleIndex: "1",
    programs: ["management"],
  },
  {
    id: "eva-fachria",
    name: "Eva Fachria, S.E., M.S.M",
    title: "Lecturer",
    nidn: "9053772673230383",
    googleScholar: "https://scholar.google.com/citations?user=AXHcedAAAAAJ&hl=en",
    googleIndex: "2",
    programs: ["management"],
  },

  // Associate Midwifery (D3)
  {
    id: "titik-kurniawati",
    name: "Bdn. Titik Kurniawati, S.SiT, M.Kes, M.Keb",
    image: titikKurniawati,
    title: "Head of Associate Midwifery Study Program",
    nidn: "0622058101",
    specialization: "Obstetrics",
    googleScholar: "https://scholar.google.com/citations?hl=id&user=F-nyArIAAAAJ",
    googleIndex: "9",
    programs: ["midwifery-associate"],
  },
  {
    id: "diah-widyatun",
    name: "Diah Widyatun, S.S.T., M.Tr.Keb",
    image: diahWidyatun,
    title: "Lecturer",
    nidn: "0617069002",
    specialization: "Postpartum and Lactation Care / Midwifery Postpartum Care",
    googleScholar: "https://scholar.google.com/citations?user=yb_RfHgAAAAJ&hl=id",
    googleIndex: "3",
    programs: ["midwifery-associate"],
  },
  {
    id: "dewi-elliana",
    name: "Dewi Elliana, SKM, S.Tr.Keb, M.Kes",
    image: dewiElliana,
    title: "Lecturer",
    nidn: "0611027703",
    specialization: "Reproductive Health",
    googleScholar: "https://scholar.google.com/citations?user=Tw4V_ykAAAAJ&hl=id",
    googleIndex: "7",
    programs: ["midwifery-associate"],
  },
  {
    id: "rita-agustina",
    name: "dr. Rita Agustina, M.Biomed",
    image: ritaAgustina,
    title: "Lecturer",
    nidn: "4133752653230133",
    googleScholar: "https://scholar.google.com.my/citations?user=2gvPGvYAAAAJ&hl=en&oi=ao",
    googleIndex: "6",
    programs: ["midwifery-associate"],
  },
  {
    id: "erna-setyaningsih",
    name: "Erna Setyaningsih, S.S.T.,M.Tr.Keb",
    image: ernaSetyaningsih,
    title: "Lecturer",
    nidn: "0356771672230323",
    specialization: "Postpartum and Infant Care",
    programs: ["midwifery-associate"],
  },

  // Bachelor Midwifery (S1)
  {
    id: "rizqitha",
    name: "Rizqitha, S.Tr.Keb., M.Tr.Keb",
    image: rizqitha,
    title: "Head of Bachelor Midwifery Program ",
    nidn: "0608049401",
    specialization: "Midwifery Care for Infants, Toddlers, and Preschool Children",
    googleScholar: "https://scholar.google.com/citations?user=dHKOQMYAAAAJ&hl=en&oi=ao",
    googleIndex: "2",
    programs: ["midwifery-bachelor"],
  },
  {
    id: "mariza-mustika",
    name: "Bd. Mariza Mustika D, S.Tr.Keb., M.Tr.Keb",
    image: marizaMustikaDewi,
    title: "Lecturer",
    nidn: "0618039302",
    specialization: "Nifas and Breastfeeding Midwifery",
    googleScholar: "https://scholar.google.com/citations?user=sMzeApYAAAAJ&hl=id&oi=ao",
    googleIndex: "5",
    programs: ["midwifery-bachelor"],
  },
  {
    id: "sri-mularsih",
    name: "Bdn. Sri Mularsih, S.SiT, M.Kes",
    image: sriMularsih,
    title: "Lecturer",
    nidn: "0618048001",
    specialization: "Reproductive Health",
    googleScholar: "https://scholar.google.com/citations?user=8OnkCmsAAAAJ&hl=id",
    googleIndex: "8",
    programs: ["midwifery-bachelor"],
  },
  {
    id: "lia-ayu",
    name: "Bdn. Lia Ayu Kusumawardani, S.ST., M.Tr.Keb",
    title: "Lecturer",
    nidn: "",
    specialization: "",
    googleScholar: "https://scholar.google.com/citations?user=7k52NB8AAAAJ&hl=en",
    googleIndex: "0",
    programs: ["midwifery-bachelor"],
  },

  // Diaspora-only members
  {
    id: "faris",
    name: "Muhammad Faris, M.T.M.",
    role: "TBD",
    image: mrFaris,
    university: "Kirklareli University, Türkiye",
    country: "Turkey",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
    href: "#",
    googleScholar: "",
    backgroundImage: turkeyBg,
    position: 4,
    pastExperience: ["TBD"],
    notableResearch: "TBD",
    programs: ["diaspora"],
  },
  {
    id: "adzani",
    name: "Adzani Gaisani Arda, BSc,MSc.",
    role: "Lecturer",
    image: msAdzani,
    university: "University of Debrecen, Hungary",
    country: "Hungary",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
    href: "#",
    googleScholar: "",
    backgroundImage: hungaryBg,
    position: 12,
    pastExperience: ["TBD"],
    notableResearch: "TBD",
    programs: ["diaspora"],
  },
  {
    id: "jutadi",
    name: "dr. Jutadi, MBBS",
    role: "TBD",
    image: mrJutadi,
    university: "Changsha Medical University, China",
    country: "China",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    href: "#",
    googleScholar: "https://scholar.google.com/citations?hl=en&user=Yif5VZQAAAAJ",
    backgroundImage: chinaBg,
    position: 20,
    pastExperience: [
      "Medical doctor (MBBS) graduated from Changsha Medical University, Hunan, China",
      "Marketing & Partnership Manager at Stem Cell and Cancer Research (SCCR) Indonesia",
      "Doping Control Officer and Blood Control Officer for the Indonesia Anti-Doping Organization; previously served on the FIFA U-17 World Cup medical team",
    ],
    notableResearch:
      "Regenerative medicine using human umbilical cord-derived mesenchymal stem cells (hUC-MSCs) combined with extracellular vesicle booster therapy for metabolic and degenerative conditions.",
    programs: ["diaspora"],
  },
  {
    id: "dina",
    name: "Nur Dina A.M.Sc., (Ph.D. cand)",
    role: "TBD",
    image: msDina,
    university: "NAIST Japan",
    country: "Japan",
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
    href: "#",
    googleScholar: "https://scholar.google.com/citations?user=vUj63aUAAAAJ",
    googleIndex: "17",
    backgroundImage: japanBg,
    position: 28,
    pastExperience: [
      "Researcher at Nara Institute of Science and Technology (NAIST), Japan",
      "Pharmacy Study Program, Chemistry Department, Universitas Negeri Semarang",
      "Cancer Chemoprevention Research Center, Faculty of Pharmacy, Universitas Gadjah Mada",
    ],
    notableResearch:
      "Mesenchymal stem cell secretome and natural-product-based cancer therapeutics, focusing on oxidative stress, apoptosis, and metastasis signaling in breast cancer.",
    programs: ["diaspora"],
  },
  {
    id: "prof-agung",
    name: "Prof. Dr. dr. Agung Putra, M.Si. Med.",
    role: "Founder & Commissioner SCCR Indonesia",
    image: profAgung,
    university: "University of Calgary, Canada",
    country: "Canada",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
    href: "#",
    googleScholar: "https://scholar.google.com/citations?user=wy-Vlt0AAAAJ",
    googleIndex: "23",
    position: 50,
    pastExperience: [
      "Faculty of Medicine / Postgraduate Biomedical Science, Universitas Islam Sultan Agung (UNISSULA), Semarang",
      "Founded Stem Cell and Cancer Research (SCCR) Indonesia, an independent stem-cell research and pharmaceutical institution, in June 2013",
    ],
    notableResearch:
      "Mesenchymal stem cells, particularly their immunomodulatory, anti-inflammatory, and regenerative mechanisms in wound healing, organ failure, autoimmune disease, COVID-19, and cancer.",
    programs: ["diaspora"],
  },
  {
    id: "yayuk",
    name: "Prof. Yayuk Astuti, S.Si, Ph.D",
    role: "Vice Rector IV",
    image: profYayuk,
    university: "Newcastle University, UK",
    country: "United Kingdom",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    href: "#",
    googleScholar: "https://scholar.google.com/citations?user=3AVmz6gAAAAJ",
    googleIndex: "20",
    backgroundImage: ukBg,
    position: 71,
    pastExperience: [
      "Professor of Chemistry at Diponegoro University (Kimia UNDIP)",
      "PhD from Newcastle University (2009–2014) on nano- and micro-sized diamond powder treatments",
      "B.S. in Chemistry from Universitas Diponegoro (2001–2005)",
    ],
    notableResearch:
      "Synthesis, characterization, and application of photocatalysts, hydrophobic silica films, carbon quantum dots, and nanomaterials for environmental remediation, energy, and surface modification.",
    programs: ["diaspora"],
  },
];

export function getLecturersByProgram(slug: string): Lecturer[] {
  return allLecturers.filter((l) => l.programs.includes(slug));
}

export function getDiasporaLecturers(): Lecturer[] {
  const order = [
    "faris", "adzani", "dina", "jutadi", "faheem-ahmed-khan",
    "prof-agung", "agus-abdillah", "yayuk", "waheni-rizki-aprilia",
    "endah-agustina-lestari", "dendi-krisna-nugraha",
  ];
  const map = new Map(allLecturers.filter((l) => l.programs.includes("diaspora")).map((l) => [l.id, l]));
  return order.map((id) => map.get(id)).filter(Boolean) as Lecturer[];
}

export function getLecturerById(id: string): Lecturer | undefined {
  return allLecturers.find((l) => l.id === id);
}
