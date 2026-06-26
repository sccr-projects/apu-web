import type { ImageMetadata } from "astro";

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

export interface FacultyMember {
  name: string;
  id: string;
  title: string;
  image?: ImageMetadata;
  nidn: string;
  google_link?: string;
  google_index?: string;
  scopus_link?: string;
  scopus_index?: string;
  sinta_link?: string;
  sinta_index?: string;
  specialization?: string;
}

export interface ProgramFacultyData {
  description: string;
  facultyMembers: FacultyMember[];
}

export const biomedicalFaculty: ProgramFacultyData = {
  description:
    "Internationally qualified faculty guiding students in research and innovation",
  facultyMembers: [
    {
      id: "faheem-ahmed-khan",
      name: "Faheem Ahmed Khan, BSc, MS, PhD",
      title: "Lecturer",
      nidn: "-",
      image: mrFaheem,
      google_link: "https://scholar.google.com/citations?user=4nfHqz8AAAAJ&hl=en",
      google_index: "29",
    },
    {
      id: "dendi-krisna-nugraha",
      name: "Dendi Krisna Nugraha, M.Sc., Ph.D.",
      title: "Lecturer",
      specialization: "Genetic Engineering",
      nidn: "8363770671130253",
      image: dendiKrisnaNugraha,
      google_link: "https://scholar.google.com.my/citations?user=1uphszUAAAAJ",
      google_index: "4",
    },
    {
      id: "nadya-audina-ns",
      name: "Nadya Audina NS. S.Si., M.Biomed",
      title: "Head of Biomedical Science Study Program",
      specialization: "Herbal Immunomodulation",
      nidn: "5960775676230172",
      image: nadyaAudinaNurkhafiya,
      google_link: "https://scholar.google.com.my/citations?user=7bIu0yoAAAAJ&hl=en&oi=ao",
      google_index: "2",
    },
    {
      id: "mohammad-ariq-nazar",
      name: "Mohammad Ariq Nazar, S.Si, M.Biomed",
      title: "Vice Rector I",
      specialization: "Bioengineering",
      nidn: "0614029302",
      image: mohammadAriqNazar,
      google_link: "https://scholar.google.com/citations?user=YaYgh0AAAAAJ&hl=id",
      google_index: "4",
    },
    {
      id: "dian-respati-ayu",
      name: "Dian Respati Ayu, S.Si., M.Biomed",
      title: "Lecturer",
      specialization: "Secretome and Exosome",
      nidn: "9933777678230112",
      image: dianRespatiAyu,
      google_link: "https://scholar.google.com.my/citations?user=DwjZbLMAAAAJ&hl=en&oi=ao",
      google_index: "1",
    },
    {
      id: "risky-chandra-satria-irawan",
      name: "Risky Chandra Satria Irawan S.Si, M.Biomed",
      title: "Lecturer",
      specialization: "Stem Cell",
      nidn: "0540771672130323",
      image: riskyChandraSatriaIrawan,
      google_link: "https://scholar.google.com.my/citations?user=TAjcHpYAAAAJ&hl=en&oi=ao",
      google_index: "4",
    },


    {
      id: "naufal-sebastian-anggoro",
      name: "Naufal Sebastian Anggoro, S.Si., M.Si",
      title: "Lecturer",
      nidn: "1149776677130313",
      google_link: "https://scholar.google.com/citations?user=ACiCpMsAAAAJ&hl=en",
      google_index: "2",
    },
    {
      id: "endah-agustina-lestari",
      name: "Endah Agustina Lestari, S.Si, M.Mol.Biol.",
      title: "Lecturer",
      nidn: "7134765666230333",
      google_link: "https://scholar.google.com/citations?user=8nkEolEAAAAJ&hl=en",
      google_index: "2",
    },
  ],
};

export const biotechnologyFaculty: ProgramFacultyData = {
  description:
    "Internationally qualified faculty guiding students in research and innovation",
  facultyMembers: [
    {
      id: "waheni-rizki-aprilia",
      name: "Waheni Rizki Aprilia, S.Si., Ph.D.",
      title: "Vice Rector II",
      nidn: "8734771672230402",
      image: msWaheni,
      google_link: "https://scholar.google.com/citations?hl=en&user=K6XkHHgAAAAJ",
      google_index: "1",
    },
    {
      id: "fauziah-novita-putri-rifai",
      name: "Fauziah Novita Putri Rifai, S.Si, M.Biotech",
      title: "Head of Biotechnology Study Program",
      nidn: "5438774675230243",
      image: fauziahNovitaPutriRifai,
      google_link: "https://scholar.google.com/citations?hl=en&user=1UJe3asAAAAJ",
      google_index: "2",
    },
    {
      id: "iffan-alif",
      name: "Iffan Alif, S.Si, M.Biotech",
      title: "Lecturer",
      nidn: "5454772673130273",
      image: iffanAlif,
      google_link: "https://scholar.google.com/citations?user=3djlgEEAAAAJ&hl=en&oi=sra",
      google_index: "10",
    },
    {
      id: "nurul-hidayah",
      name: "Nurul Hidayah S.Si, M.Biotech",
      title: "Lecturer",
      nidn: "6960774675230252",
      image: nurulHidayah,
      google_link: "https://scholar.google.com/citations?user=hGchFnoAAAAJ&hl=en",
      google_index: "4",
    },
    {
      id: "salindri-prawitasari",
      name: "Salindri Prawitasari, S.Si, M.Si.",
      title: "Lecturer",
      nidn: "9659774675230242",
      image: salindriPrawitasari,
      google_link: "https://scholar.google.com/citations?hl=en&user=kRILrrwAAAAJ",
      google_index: "3",
    },
    {
      id: "dini-cahyani",
      name: "Dini Cahyani, S.Si, M.Biotech",
      title: "Lecturer",
      specialization: "Immunology",
      nidn: "8237775676230193",
      image: diniCahyani,
      google_link: "https://scholar.google.com/citations?hl=en&user=8lhVAWkAAAAJ",
      google_index: "1",
    },
    {
      id: "fikriya-novita-sari",
      name: "Fikriya Novita Sari, M.Si",
      title: "Lecturer",
      nidn: "1459777678230243",
      google_link: "https://scholar.google.com/citations?user=CgzGGz0AAAAJ",
      google_index: "2",
    },
  ],
};

export const communicationFaculty: ProgramFacultyData = {
  description:
    "Internationally qualified faculty guiding students in communication science",
  facultyMembers: [
    {
      id: "muhamad-agung",
      name: "Muhamad Agung S, S.Sos., M.Sos",
      title: "Head of Communication Study Program",
      specialization: "Social Communication",
      nidn: "0610089602",
      image: muhamadAgungSetiawan,
      google_link: "https://scholar.google.com/citations?user=be-n4nUAAAAJ&hl=id",
      google_index: "2",
    },
    {
      id: "sutinnarto",
      name: "Sutinnarto, S.I.Kom., M.I.Kom",
      title: "Lecturer",
      specialization: "Public Speaking",
      nidn: "0614028102",
      image: sutinnarto,
      google_link: "https://scholar.google.com/citations?user=swEkGVoAAAAJ&hl=en",
      google_index: "3",
    },
    {
      id: "lakna-tulasun",
      name: "Lakna Tulas'un, S.Sos, M.I.Kom",
      title: "Lecturer",
      specialization: "Journalism",
      nidn: "0626099702",
      image: laknaTulasun,
      google_link: "https://scholar.google.com/citations?user=v61mGoQAAAAJ&hl=id&authuser=2",
      google_index: "2",
    },
    {
      id: "rifatul-himmah",
      name: "Rif'atul Himmah, S.Sos. M.I.Kom.",
      title: "Lecturer",
      specialization: "Media and Gender",
      nidn: "2461772673230292",
      image: rifatulHimmah,
      google_link: "https://scholar.google.com/citations?hl=id&user=80w7fDEAAAAJ",
      google_index: "1",
    },
    {
      id: "bondan-eko-suratno",
      name: "Bondan Eko Suratno, M.Hum",
      title: "Lecturer",
      nidn: "610108603",
      google_link: "https://scholar.google.com/citations?user=dmbqZSIAAAAJ&hl=en",
      google_index: "1",
    },
  ],
};

export const lawFaculty: ProgramFacultyData = {
  description: "Internationally qualified faculty guiding students in law",
  facultyMembers: [
    {
      id: "erwin",
      name: "Dr. Erwin, S.H., M.H., M.Kn.",
      title: "Head of Law Study Program",
      nidn: "9990637233",
      image: erwin,
      google_link: "https://scholar.google.com/citations?user=Ov4mPDsAAAAJ&hl=en",
      google_index: "2",
    },
    {
      id: "zain-arfin-utama",
      name: "Zain Arfin Utama, S.H., M.H.",
      title: "Lecturer",
      specialization: "Criminal Law Reform",
      nidn: "0615119301",
      image: zain,
      google_link: "https://scholar.google.com/citations?user=uUEzUqAAAAAJ&hl=id",
      google_index: "2",
    },
    {
      id: "naufal-sebastian",
      name: "Naufal Sebastian, S.H.,M.H.",
      title: "Lecturer",
      nidn: "7435775676130282",
    },
  ],
};

export const managementFaculty: ProgramFacultyData = {
  description:
    "Internationally qualified faculty guiding students in research and innovation",
  facultyMembers: [
    {
      id: "agus-abdillah",
      name: "Dr. Ir. Agus F. Abdillah, MBA, ERMAP",
      title: "Lecturer",
      nidn: "6137744645130133",
      scopus_link: "59912689000",
      image: mrAgus,
      google_link: "https://scholar.google.com/citations?user=e_Xv4EwAAAAJ&hl=en",
      google_index: "1",
    },
    {
      id: "suharto-abdul-majid",
      name: "Dr. Suharto Abdul Majid, AMTrU, S.Sos, M.M.",
      title: "Lecturer",
      nidn: "315037102",
    },
    {
      id: "mohammad-annas",
      name: "Dr. Mohammad Annas, S. Tr.Par, M.M.",
      title: "Lecturer",
      nidn: "312087404",
      scopus_link: "57886387600",
      google_link: "https://scholar.google.com/citations?user=9CJNrb8AAAAJ&hl=en",
      google_index: "13",
    },
    {
      id: "reni-nur-arifah",
      name: "Reni Nur Arifah, S.E., M.M.",
      title: "Head of Management Study Program",
      specialization: "Financial Management",
      nidn: "0625069301",
      image: reniNurArifah,
      google_link: "https://scholar.google.com/citations?user=eaGmE2AAAAAJ&hl=id",
      google_index: "1",
    },
    {
      id: "yetty-yuliany",
      name: "Yetty Yuliany K, S.E., M.M",
      title: "Lecturer",
      specialization: "Human Resource Management",
      nidn: "0605077402",
      image: yettyYulianyKusumaningrum,
      google_link: "https://scholar.google.com/citations?user=86pLtjMAAAAJ&hl=id&oi=sra",
      google_index: "1",
    },
    {
      id: "putri-aryo-jelang-fitri-khothimah",
      name: "Putri Aryo Jelang Fitri Khothimah, S.E., M.M.",
      title: "Lecturer",
      specialization: "Financial Management",
      nidn: "0601039501",
      image: putriAryoJelangFitriKhothimah,
      google_link: "https://scholar.google.com/citations?user=aZglriAAAAAJ&hl=id",
      google_index: "2",
    },
    {
      id: "randika-shafly-fawwaz",
      name: "Randika Shafly Fawwaz, S.M., M.M",
      title: "Lecturer",
      specialization: "Human Resources",
      nidn: "2433775676130432",
      image: randikaShaflyFawwaz,
      google_link: "https://scholar.google.com/citations?user=PmlArwYAAAAJ&hl=en",
      google_index: "1",
    },
    {
      id: "eva-fachria",
      name: "Eva Fachria, S.E., M.S.M",
      title: "Lecturer",
      nidn: "9053772673230383",
      google_link: "https://scholar.google.com/citations?user=E1NJcz0AAAAJ&hl=en",
      google_index: "2",
    },
  ],
};

export const midwiferyAssociateFaculty: ProgramFacultyData = {
  description:
    "Internationally qualified faculty guiding students in midwifery",
  facultyMembers: [
    {
      id: "titik-kurniawati",
      name: "Bdn. Titik Kurniawati, S.SiT, M.Kes, M.Keb",
      title: "Head of Associate Midwifery Study Program",
      specialization: "Obstetrics",
      nidn: "0622058101",
      image: titikKurniawati,
      google_link: "https://scholar.google.com/citations?hl=id&user=F-nyArIAAAAJ",
      google_index: "9",
    },

    {
      id: "diah-widyatun",
      name: "Diah Widyatun, S.S.T., M.Tr.Keb",
      title: "Lecturer",
      specialization:
        "Postpartum and Lactation Care / Midwifery Postpartum Care",
      nidn: "0617069002",
      image: diahWidyatun,
      google_link: "https://scholar.google.com/citations?user=yb_RfHgAAAAJ&hl=id",
      google_index: "3",
    },
    {
      id: "dewi-elliana",
      name: "Dewi Elliana, SKM, S.Tr.Keb, M.Kes",
      title: "Lecturer",
      specialization: "Reproductive Health",
      nidn: "0611027703",
      image: dewiElliana,
      google_link: "https://scholar.google.com/citations?user=Tw4V_ykAAAAJ&hl=id",
      google_index: "7",
    },
    {
      id: "rita-agustina",
      name: "dr. Rita Agustina, M.Biomed",
      title: "Lecturer",
      nidn: "4133752653230133",
      image: ritaAgustina,
      google_link: "https://scholar.google.com.my/citations?user=2gvPGvYAAAAJ&hl=en&oi=ao",
      google_index: "6",
    },
    {
      id: "erna-setyaningsih",
      name: "Erna Setyaningsih, S.S.T.,M.Tr.Keb",
      title: "Lecturer",
      specialization: "Postpartum and Infant Care",
      nidn: "0356771672230323",
      image: ernaSetyaningsih,
    },
  ],
};

export const midwiferyBachelorFaculty: ProgramFacultyData = {
  description:
    "Internationally qualified faculty guiding students in midwifery",
  facultyMembers: [
    {
      id: "rizqitha",
      name: "Rizqitha, S.Tr.Keb., M.Tr.Keb",
      title: "Head of Bachelor Midwifery Program ",
      specialization:
        "Midwifery Care for Infants, Toddlers, and Preschool Children",
      nidn: "0608049401",
      image: rizqitha,
      google_link: "https://scholar.google.com/citations?user=dHKOQMYAAAAJ&hl=en&oi=ao",
      google_index: "2",
    },
    {
      id: "mariza-mustika",
      name: "Bd. Mariza Mustika D, S.Tr.Keb., M.Tr.Keb",
      title: "Lecturer",
      specialization: "Nifas and Breastfeeding Midwifery",
      nidn: "0618039302",
      image: marizaMustikaDewi,
      google_link: "https://scholar.google.com/citations?user=sMzeApYAAAAJ&hl=id&oi=ao",
      google_index: "5",
    },
    {
      id: "sri-mularsih",
      name: "Bdn. Sri Mularsih, S.SiT, M.Kes",
      title: "Lecturer",
      specialization: "Reproductive Health",
      nidn: "0618048001",
      image: sriMularsih,
      google_link: "https://scholar.google.com/citations?user=8OnkCmsAAAAJ&hl=id",
      google_index: "8",
    },
    {
      id: "lia-ayu",
      name: "Bdn. Lia Ayu Kusumawardani, S.ST., M.Tr.Keb",
      title: "Lecturer",
      specialization: "",
      nidn: "",
      google_link: "https://scholar.google.com/citations?user=7k52NB8AAAAJ&hl=en",
      google_index: "0",
    },
  ],
};
