export interface FacultyMember {
  name: string;
  title: string;
  photo?: string;
  nidn: string;
  link?: string;
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
      name: "Nadya Audina NS. S.Si., M.Biomed",
      title: "Head of Study Program",
      nidn: "-",
    },
  ],
};

export const biotechnologyFaculty: ProgramFacultyData = {
  description:
    "Internationally qualified faculty guiding students in research and innovation",
  facultyMembers: [
    {
      name: "Fauziah Novita Putri Rifai, S.Si, M.Biotech",
      title: "Head of Study Program",
      nidn: "-",
    },
    {
      name: "Nurul Hidayah S.Si, M.Biotech",
      title: "Lecturer",
      nidn: "-",
    },
    {
      name: "Salindri Prawitasari, S.Si, M.Si.",
      title: "Lecturer",
      nidn: "-",
    },
    {
      name: "Dini Cahyani, S.Si, M.Biotech",
      title: "Lecturer",
      nidn: "-",
    },
    {
      name: "Iffan Alif, S.Si, M.Biotech",
      title: "Lecturer",
      nidn: "-",
    },
    {
      name: "Waheni Rizki Aprilia, S.Si., Ph.D.",
      title: "Lecturer",
      nidn: "-",
    },
    {
      name: "Adzani Gaisani Arda M.Sc",
      title: "Lecturer",
      nidn: "-",
    },
    {
      name: "Fikriya Novita Sari, S.Si., M.Si",
      title: "Lecturer",
      nidn: "-",
    },
  ],
};

export const communicationFaculty: ProgramFacultyData = {
  description:
    "Internationally qualified faculty guiding students in communication science",
  facultyMembers: [
    {
      name: "Muhamad Agung Setiawan, S.Sos., M.Sos",
      title: "lecturer",
      nidn: "0610089602",
    },
    {
      name: "Lakna Tulas'un, S.Sos., M.I.Kom.",
      title: "lecturer",
      nidn: "0626099702",
    },
    {
      name: "Sutinnarto,S.I.Kom.,M.I.Kom",
      title: "Lecturer",
      nidn: "0614028102",
    },
    {
      name: "Najmi Rizki Khairani, S.Sos., M.I.Kom",
      title: "Lecturer",
      nidn: "0610048605",
    },
    {
      name: "Rif'atul Himmah, S.Sos., M.I.Kom",
      title: "Lecturer",
      nidn: "2461772673230292",
    },
  ],
};

export const lawFaculty: ProgramFacultyData = {
  description: "Internationally qualified faculty guiding students in law",
  facultyMembers: [
    {
      name: "dr. Erwin, S.H., M.H",
      title: "lecturer",
      nidn: "6965892",
    },
    {
      name: "Zain Arfin Utama S.H.,M.H.",
      title: "lecturer",
      nidn: "0615119301",
    },
    {
      name: "Muhamad Chabib F.S.HI.,M.H.",
      title: "Lecturer",
      nidn: "0613059402",
    },
    {
      name: "Pandam Bayu Seto Aji, M.H.",
      title: "Lecturer",
      nidn: "2734775676130202",
    },
    {
      name: "Eko Setiyo Ary Wibowo S.H.I, M.H.",
      title: "Lecturer",
      nidn: "0608119001",
    },
  ],
};

export const managementFaculty: ProgramFacultyData = {
  description:
    "Internationally qualified faculty guiding students in research and innovation",
  facultyMembers: [
    {
      name: "Reni Nur Arifah, S.E., M.M.",
      title: "Head of Study Program",
      nidn: "-",
    },
    {
      name: "Yetty Yuliany K, S.E., M.M",
      title: "Lecturer",
      nidn: "-",
    },
    {
      name: "Putri Aryo Jelang Fitri Khothimah, S.E., M.M.",
      title: "Lecturer",
      nidn: "-",
    },
    {
      name: "Randika Shafly Fawwaz, S.M., M.M",
      title: "Lecturer",
      nidn: "-",
    },
    {
      name: "Anindya Putri Utami, S.M., M.M.",
      title: "Lecturer",
      nidn: "-",
    },
    {
      name: "Eva Fachria, S.E., M.S.M",
      title: "Lecturer",
      nidn: "-",
    },
    {
      name: "Dr. Ir. Agus F. Abdillah, MBA, ERMAP",
      title: "Lecturer",
      nidn: "-",
    },
    {
      name: "dr. Suharto Abdul Majid, M.M",
      title: "Lecturer",
      nidn: "-",
    },
    {
      name: "Dr. Mohammad Annas, S. Tr.Par, M.M.",
      title: "Lecturer",
      nidn: "-",
    },
  ],
};

export const midwiferyAssociateFaculty: ProgramFacultyData = {
  description:
    "Internationally qualified faculty guiding students in midwifery",
  facultyMembers: [
    {
      name: "Bdn, Titik Kurniawati, S.SiT., M.Kes., M.Keb",
      title: "lecturer",
      nidn: "0622058101",
    },
    {
      name: "Dewi Elliana, SKM., S.Tr.Keb., M.Kes",
      title: "lecturer",
      nidn: "0611027703",
    },
    {
      name: "dr. Rita Agustina, M.Biomed",
      title: "Lecturer",
      nidn: "NUPK 4133752653230133",
    },
    {
      name: "Diah Widiyatun, S.ST., M.Tr.Keb",
      title: "Lecturer",
      nidn: "0617069002",
    },
    {
      name: "Erna Setyaningsih, SST., M.Tr.Keb",
      title: "Lecturer",
      nidn: "-",
    },
  ],
};

export const midwiferyBachelorFaculty: ProgramFacultyData = {
  description:
    "Internationally qualified faculty guiding students in midwifery",
  facultyMembers: [
    {
      name: "Bd. Rizqitha, S.Tr.Keb., M.Tr.Keb",
      title: "lecturer",
      nidn: "0608049401",
    },
    {
      name: "Rizki Muji Lestari, S.SiT., M.Kes",
      title: "lecturer",
      nidn: "1124088901",
    },
    {
      name: "Rizqi Dian Pratiwi, S.Tr.Keb., M.Tr.Keb",
      title: "Lecturer",
      nidn: "0616089605",
    },
    {
      name: "Bd. Mariza Mustika Dewi, S.Tr.Keb., M.Tr.Keb",
      title: "Lecturer",
      nidn: "0618039302",
    },
    {
      name: "Bdn. Sri Mularsih, S.SiT., M.Kes",
      title: "Lecturer",
      nidn: "0618048001",
    },
    {
      name: "Bdn. Lia Ayu Kusumaningrum, S.ST., M.Tr.Keb",
      title: "Lecturer",
      nidn: "9990626978",
    },
    {
      name: "Endah Wijayanti, S.SiT., M.Kes",
      title: "Lecturer",
      nidn: "0601097901",
    },
  ],
};
