export interface FacultyMember {
  name: string;
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
  description: "Internationally qualified faculty guiding students in research and innovation",
  facultyMembers: [
    {
      name: "Nadya Audina NS. S.Si., M.Biomed",
      title: "Head of Biomedical Science Study Program",
      specialization: "Herbal Immunomodulation",
      nidn: "5960775676230172",
    },
    {
      name: "Mohammad Ariq Nazar, S.Si, M.Biomed",
      title: "Vice Rector I",
      specialization: "Bioengineering",
      nidn: "0614029302",
    },
    {
      name: "Dian Respati Ayu, S.Si., M.Biomed",
      title: "Lecturer",
      specialization: "Secretome and Exosome",
      nidn: "9933777678230112",
    },
    {
      name: "Risky Chandra Satria Irawan S.Si, M.Biomed",
      title: "Lecturer",
      specialization: "Stem Cell",
      nidn: "0540771672130323",
    },
    {
      name: "Dendi Krisna Nugraha, M.Sc., Ph.D.",
      title: "Lecturer",
      specialization: "Genetic Engineering",
      nidn: "8363770671130253",
    },
    {
      name: "Faheem Ahmed Khan, BSc, MS, PhD",
      title: "Lecturer",
      nidn: "-",
    },
    {
      name: "Naufal Sebastian Anggoro, S.Si., M.Si",
      title: "Lecturer",
      nidn: "1149776677130313",
    },
    {
      name: "Endah Agustina Lestari, S.Si, M.Mol.Biol.",
      title: "Lecturer",
      nidn: "7134765666230333",
    }
  ],
};

export const biotechnologyFaculty: ProgramFacultyData = {
  description: "Internationally qualified faculty guiding students in research and innovation",
  facultyMembers: [
    {
      name: "Fauziah Novita Putri Rifai, S.Si, M.Biotech",
      title: "Head of Biotechnology Study Program",
      nidn: "5438774675230243",
    },
    {
      name: "Waheni Rizki Aprilia, S.Si., Ph.D.",
      title: "Vice Rector II",
      nidn: "8734771672230402",
    },
    {
      name: "Iffan Alif, S.Si, M.Biotech",
      title: "Lecturer",
      nidn: "5454772673130273",
    },
    {
      name: "Nurul Hidayah S.Si, M.Biotech",
      title: "Lecturer",
      nidn: "6960774675230252",
    },
    {
      name: "Salindri Prawitasari, S.Si, M.Si.",
      title: "Lecturer",
      nidn: "9659774675230242",
    },
    {
      name: "Dini Cahyani, S.Si, M.Biotech",
      title: "Lecturer",
      specialization: "Immunology",
      nidn: "8237775676230193",
    },
    {
      name: "Fikriya Novita Sari, M.Si",
      title: "Lecturer",
      nidn: "1459777678230243",
    }
  ],
};

export const communicationFaculty: ProgramFacultyData = {
  description: "Internationally qualified faculty guiding students in communication science",
  facultyMembers: [
    {
      name: "Muhamad Agung S, S.Sos., M.Sos",
      title: "Head of Communication Study Program",
      specialization: "Social Communication",
      nidn: "0610089602",
    },
    {
      name: "Sutinnarto, S.I.Kom., M.I.Kom",
      title: "Lecturer",
      specialization: "Public Speaking",
      nidn: "0614028102",
    },
    {
      name: "Lakna Tulas'un, S.Sos, M.I.Kom",
      title: "Lecturer",
      specialization: "Journalism",
      nidn: "0626099702",
    },
    {
      name: "Rif'atul Himmah, S.Sos. M.I.Kom.",
      title: "Lecturer",
      specialization: "Media and Gender",
      nidn: "2461772673230292",
    },
    {
      name: "Bondan Eko Suratno, M.Hum",
      title: "Lecturer",
      nidn: "610108603",
    }
  ],
};

export const lawFaculty: ProgramFacultyData = {
  description: "Internationally qualified faculty guiding students in law",
  facultyMembers: [
    {
      name: "Dr. Erwin, SH., MH., MKn.",
      title: "Head of Law Study Program",
      nidn: "9990637233",
    },
    {
      name: "Zain Arfin Utama, S.H., M.H.",
      title: "Lecturer",
      specialization: "Criminal Law Reform",
      nidn: "0615119301",
    },
    {
      name: "Naufal Sebastian, S.H.,M.H.",
      title: "Lecturer",
      nidn: "7435775676130282",
    },
  ],
};

export const managementFaculty: ProgramFacultyData = {
  description: "Internationally qualified faculty guiding students in research and innovation",
  facultyMembers: [
    {
      name: "Dr. Ir. Agus F. Abdillah, MBA, ERMAP",
      title: "Lecturer",
      nidn: "6137744645130133",
      scopus_id: "59912689000",
    },
    {
      name: "Dr. Suharto Abdul Majid, AMTrU, S.Sos, M.M.",
      title: "Lecturer",
      nidn: "315037102",
    },
    {
      name: "Dr. Mohammad Annas, S. Tr.Par, M.M.",
      title: "Lecturer",
      nidn: "312087404",
      scopus_id: "57886387600",
    },
    {
      name: "Reni Nur Arifah, S.E., M.M.",
      title: "Head of Management Study Program",
      specialization: "Financial Management",
      nidn: "0625069301",
    },
    {
      name: "Yetty Yuliany K, S.E., M.M",
      title: "Lecturer",
      specialization: "Human Resource Management",
      nidn: "0605077402",
    },
    {
      name: "Putri Aryo Jelang Fitri Khothimah, S.E., M.M.",
      title: "Lecturer",
      specialization: "Financial Management",
      nidn: "0601039501",
    },
    {
      name: "Randika Shafly Fawwaz, S.M., M.M",
      title: "Lecturer",
      specialization: "Human Resources",
      nidn: "2433775676130432",
    },
    {
      name: "Eva Fachria, S.E., M.S.M",
      title: "Lecturer",
      nidn: "9053772673230383",
    },

  ],
};

export const midwiferyAssociateFaculty: ProgramFacultyData = {
  description: "Internationally qualified faculty guiding students in midwifery",
  facultyMembers: [
    {
      name: "Rizqitha, S.Tr.Keb., M.Tr.Keb",
      title: "Head of Bachelor Midwifery Program ",
      specialization: "Midwifery Care for Infants, Toddlers, and Preschool Children",
      nidn: "0608049401",
    },
    {
      name: "Diah Widyatun, S.S.T., M.Tr.Keb",
      title: "Lecturer",
      specialization: "Postpartum and Lactation Care / Midwifery Postpartum Care",
      nidn: "0617069002",
    },

    {
      name: "Bdn. Sri Mularsih, S.SiT, M.Kes",
      title: "Lecturer",
      specialization: "Reproductive Health",
      nidn: "0618048001",
    },
    {
      name: "Dewi Elliana, SKM, S.Tr.Keb, M.Kes",
      title: "Lecturer",
      specialization: "Reproductive Health",
      nidn: "0611027703",
    },
    {
      name: "dr. Rita Agustina, M.Biomed",
      title: "Lecturer",
      nidn: "4133752653230133",
    },
    {
      name: "Erna Setyaningsih, S.S.T.,M.Tr.Keb",
      title: "Lecturer",
      specialization: "Postpartum and Infant Care",
      nidn: "0356771672230323",
    }
  ],
};

export const midwiferyBachelorFaculty: ProgramFacultyData = {
  description: "Internationally qualified faculty guiding students in midwifery",
  facultyMembers: [
    {
      name: "Bd. Mariza Mustika D, S.Tr.Keb., M.Tr.Keb",
      title: "Lecturer",
      specialization: "Nifas and Breastfeeding Midwifery",
      nidn: "0618039302",
    },
    {
      name: "Bdn. Titik Kurniawati, S.SiT, M.Kes, M.Keb",
      title: "Lecturer",
      specialization: "Obstetrics",
      nidn: "0622058101",
    },
  ],
};
