import { assetUrl } from "@lib/assets";
export interface FacultyMember {
  name: string;
  id: string;
  title: string;
  photo?: string;
  nidn: string;
  link?: string;
  scopus_id?: string;
  scopus_index?: string;
  sinta_id?: string;
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
    },
    {
      id: "dendi-krisna-nugraha",
      name: "Dendi Krisna Nugraha, M.Sc., Ph.D.",
      title: "Lecturer",
      specialization: "Genetic Engineering",
      nidn: "8363770671130253",
      photo: assetUrl(
        "/images/academic/lecturer_images/biomedic/Dendi_Krisna_Nugraha.webp",
      ),
      link: "https://scholar.google.com.my/citations?user=1uphszUAAAAJ",
    },
    {
      id: "nadya-audina-ns",
      name: "Nadya Audina NS. S.Si., M.Biomed",
      title: "Head of Biomedical Science Study Program",
      specialization: "Herbal Immunomodulation",
      nidn: "5960775676230172",
      photo: assetUrl(
        "/images/academic/lecturer_images/biomedic/Nadya_Audina_Nurkhafiya.webp",
      ),
      link: "https://scholar.google.com.my/citations?user=7bIu0yoAAAAJ&hl=en&oi=ao",
    },
    {
      id: "mohammad-ariq-nazar",
      name: "Mohammad Ariq Nazar, S.Si, M.Biomed",
      title: "Vice Rector I",
      specialization: "Bioengineering",
      nidn: "0614029302",
      photo: assetUrl(
        "/images/academic/lecturer_images/biomedic/Mohammad_Ariq_Nazar.webp",
      ),
      link: "https://scholar.google.com/citations?user=YaYgh0AAAAAJ&hl=id",
    },
    {
      id: "dian-respati-ayu",
      name: "Dian Respati Ayu, S.Si., M.Biomed",
      title: "Lecturer",
      specialization: "Secretome and Exosome",
      nidn: "9933777678230112",
      photo: assetUrl(
        "/images/academic/lecturer_images/biomedic/Dian_Respati_Ayu.webp",
      ),
      link: "https://scholar.google.com.my/citations?user=DwjZbLMAAAAJ&hl=en&oi=ao",
    },
    {
      id: "risky-chandra-satria-irawan",
      name: "Risky Chandra Satria Irawan S.Si, M.Biomed",
      title: "Lecturer",
      specialization: "Stem Cell",
      nidn: "0540771672130323",
      photo: assetUrl(
        "/images/academic/lecturer_images/biomedic/Risky_Chandra_Satria_Irawan.webp",
      ),
      link: "https://scholar.google.com.my/citations?user=TAjcHpYAAAAJ&hl=en&oi=ao",
    },


    {
      id: "naufal-sebastian-anggoro",
      name: "Naufal Sebastian Anggoro, S.Si., M.Si",
      title: "Lecturer",
      nidn: "1149776677130313",
    },
    {
      id: "endah-agustina-lestari",
      name: "Endah Agustina Lestari, S.Si, M.Mol.Biol.",
      title: "Lecturer",
      nidn: "7134765666230333",
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
    },
    {
      id: "fauziah-novita-putri-rifai",
      name: "Fauziah Novita Putri Rifai, S.Si, M.Biotech",
      title: "Head of Biotechnology Study Program",
      nidn: "5438774675230243",
    },
    {
      id: "iffan-alif",
      name: "Iffan Alif, S.Si, M.Biotech",
      title: "Lecturer",
      nidn: "5454772673130273",
    },
    {
      id: "nurul-hidayah",
      name: "Nurul Hidayah S.Si, M.Biotech",
      title: "Lecturer",
      nidn: "6960774675230252",
    },
    {
      id: "salindri-prawitasari",
      name: "Salindri Prawitasari, S.Si, M.Si.",
      title: "Lecturer",
      nidn: "9659774675230242",
    },
    {
      id: "dini-cahyani",
      name: "Dini Cahyani, S.Si, M.Biotech",
      title: "Lecturer",
      specialization: "Immunology",
      nidn: "8237775676230193",
    },
    {
      id: "fikriya-novita-sari",
      name: "Fikriya Novita Sari, M.Si",
      title: "Lecturer",
      nidn: "1459777678230243",
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
      photo: assetUrl(
        "/images/academic/lecturer_images/communication/Muhamad_Agung_Setiawan.webp",
      ),
      link: "https://scholar.google.com/citations?user=be-n4nUAAAAJ&hl=id",
    },
    {
      id: "sutinnarto",
      name: "Sutinnarto, S.I.Kom., M.I.Kom",
      title: "Lecturer",
      specialization: "Public Speaking",
      nidn: "0614028102",
      link: "https://scholar.google.com/citations?user=swEkGVoAAAAJ&hl=en",
      photo: assetUrl(
        "/images/academic/lecturer_images/communication/Sutinnarto.webp",
      ),
    },
    {
      id: "lakna-tulasun",
      name: "Lakna Tulas'un, S.Sos, M.I.Kom",
      title: "Lecturer",
      specialization: "Journalism",
      nidn: "0626099702",
      link: "https://scholar.google.com/citations?user=v61mGoQAAAAJ&hl=id&authuser=2",
      photo: assetUrl(
        "/images/academic/lecturer_images/communication/Lakna_Tulasun.webp",
      ),
    },
    {
      id: "rifatul-himmah",
      name: "Rif'atul Himmah, S.Sos. M.I.Kom.",
      title: "Lecturer",
      specialization: "Media and Gender",
      nidn: "2461772673230292",
      link: "https://scholar.google.com/citations?hl=id&user=80w7fDEAAAAJ",
      photo: assetUrl(
        "/images/academic/lecturer_images/communication/Rifatul_Himmah.webp",
      ),
    },
    {
      id: "bondan-eko-suratno",
      name: "Bondan Eko Suratno, M.Hum",
      title: "Lecturer",
      nidn: "610108603",
    },
  ],
};

export const lawFaculty: ProgramFacultyData = {
  description: "Internationally qualified faculty guiding students in law",
  facultyMembers: [
    {
      id: "erwin",
      name: "Dr. Erwin, SH., MH., MKn.",
      title: "Head of Law Study Program",
      nidn: "9990637233",
    },
    {
      id: "zain-arfin-utama",
      name: "Zain Arfin Utama, S.H., M.H.",
      title: "Lecturer",
      specialization: "Criminal Law Reform",
      nidn: "0615119301",
      link: "https://scholar.google.com/citations?user=uUEzUqAAAAAJ&hl=id",
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
      scopus_id: "59912689000",
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
      scopus_id: "57886387600",
    },
    {
      id: "reni-nur-arifah",
      name: "Reni Nur Arifah, S.E., M.M.",
      title: "Head of Management Study Program",
      specialization: "Financial Management",
      nidn: "0625069301",
      photo: assetUrl(
        "/images/academic/lecturer_images/management/Reni_Nur_Arifah.webp",
      ),
    },
    {
      id: "yetty-yuliany",
      name: "Yetty Yuliany K, S.E., M.M",
      title: "Lecturer",
      specialization: "Human Resource Management",
      nidn: "0605077402",
      photo: assetUrl(
        "/images/academic/lecturer_images/management/Yetty_Yuliany_Kusumaningrum.webp",
      ),
      link: "https://scholar.google.com/citations?user=86pLtjMAAAAJ&hl=id&oi=sra",
    },
    {
      id: "putri-aryo-jelang-fitri-khothimah",
      name: "Putri Aryo Jelang Fitri Khothimah, S.E., M.M.",
      title: "Lecturer",
      specialization: "Financial Management",
      nidn: "0601039501",
      photo: assetUrl(
        "/images/academic/lecturer_images/management/Putri_Aryo_Jelang_Fitri_Khothimah.webp",
      ),
      link: "https://scholar.google.com/citations?user=aZglriAAAAAJ&hl=id",
    },
    {
      id: "randika-shafly-fawwaz",
      name: "Randika Shafly Fawwaz, S.M., M.M",
      title: "Lecturer",
      specialization: "Human Resources",
      nidn: "2433775676130432",
      photo: assetUrl(
        "/images/academic/lecturer_images/management/Randika_Shafly_Fawwaz.webp",
      ),
    },
    {
      id: "eva-fachria",
      name: "Eva Fachria, S.E., M.S.M",
      title: "Lecturer",
      nidn: "9053772673230383",
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
      photo: assetUrl(
        "/images/academic/lecturer_images/d3_midwifery/Titik_Kurniawati.webp",
      ),
      link: "https://scholar.google.com/citations?hl=id&user=F-nyArIAAAAJ",
    },

    {
      id: "diah-widyatun",
      name: "Diah Widyatun, S.S.T., M.Tr.Keb",
      title: "Lecturer",
      specialization:
        "Postpartum and Lactation Care / Midwifery Postpartum Care",
      nidn: "0617069002",
      photo: assetUrl(
        "/images/academic/lecturer_images/d3_midwifery/Diah_Widyatun.webp",
      ),
      link: "https://scholar.google.com/citations?user=yb_RfHgAAAAJ&hl=id",
    },
    {
      id: "dewi-elliana",
      name: "Dewi Elliana, SKM, S.Tr.Keb, M.Kes",
      title: "Lecturer",
      specialization: "Reproductive Health",
      nidn: "0611027703",
      photo: assetUrl(
        "/images/academic/lecturer_images/d3_midwifery/Dewi_Elliana.webp",
      ),
      link: "https://scholar.google.com/citations?user=Tw4V_ykAAAAJ&hl=id",
    },
    {
      id: "rita-agustina",
      name: "dr. Rita Agustina, M.Biomed",
      title: "Lecturer",
      nidn: "4133752653230133",
      photo: assetUrl(
        "/images/academic/lecturer_images/d3_midwifery/Rita_Agustina.webp",
      ),
      link: "https://scholar.google.com.my/citations?user=2gvPGvYAAAAJ&hl=en&oi=ao",
    },
    {
      id: "erna-setyaningsih",
      name: "Erna Setyaningsih, S.S.T.,M.Tr.Keb",
      title: "Lecturer",
      specialization: "Postpartum and Infant Care",
      nidn: "0356771672230323",
      photo: assetUrl(
        "/images/academic/lecturer_images/d3_midwifery/Erna_Setyaningsih.webp",
      ),
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
      link: "https://scholar.google.com/citations?user=dHKOQMYAAAAJ&hl=en&oi=ao",
      photo: assetUrl(
        "/images/academic/lecturer_images/bachelor_midwifery/Rizqitha.webp"
      )
    },
    {
      id: "mariza-mustika",
      name: "Bd. Mariza Mustika D, S.Tr.Keb., M.Tr.Keb",
      title: "Lecturer",
      specialization: "Nifas and Breastfeeding Midwifery",
      nidn: "0618039302",
      link: "https://scholar.google.com/citations?user=sMzeApYAAAAJ&hl=id&oi=ao",
      photo: assetUrl(
        "/images/academic/lecturer_images/bachelor_midwifery/Mariza_Mustika_Dewi.webp"
      )
    },
    {
      id: "sri-mularsih",
      name: "Bdn. Sri Mularsih, S.SiT, M.Kes",
      title: "Lecturer",
      specialization: "Reproductive Health",
      nidn: "0618048001",
      link: "https://scholar.google.com/citations?user=8OnkCmsAAAAJ&hl=id",
      photo: assetUrl(
        "/images/academic/lecturer_images/bachelor_midwifery/Sri_Mularsih.webp"
      )
    },
    {
      id: "lia-ayu",
      name: "Bdn. Lia Ayu Kusumawardani, S.ST., M.Tr.Keb",
      title: "Lecturer",
      specialization: "",
      nidn: "",
    },
  ],
};
