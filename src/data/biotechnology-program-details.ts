export interface ProgramHead {
  name: string;
  title: string;
  photo?: string;
  message: string;
}

export interface ProgramStrength {
  title: string;
  description: string;
  icon: string; // SVG path data or identifier
}

export interface GraduateAttribute {
  letter: string;
  word: string;
  meaning: string;
  description: string;
}

export interface CareerPath {
  title: string;
  description: string;
}

export interface FacultyMember {
  name: string;
  title: string;
  photo?: string;
  nidn: string;
  link?: string;
}

export interface ProgramDetail {
  programId: string;
  name: string;
  degree: string;
  faculty: string;
  head: ProgramHead;
  strengths: ProgramStrength[];
  vision: string;
  mission: string[];
  graduateAttributes: GraduateAttribute[];
  objectives: string[];
  careerPaths: CareerPath[];
  facultyMembers: FacultyMember[];
  focusAreas: string[];
}

export const biotechnologyProgram: ProgramDetail = {
  programId: 'biotechnology',
  name: 'Biotechnology',
  degree: 'S1',
  faculty: 'Fakultas Sains dan Teknologi',
  head: {
    name: 'Fauziah Novita Putri Rifai, S.Si, M.Biotech',
    title: 'Kepala Program Studi',
    message: `Selamat datang di Program Studi Biotechnology APU. Kami membangun kurikulum yang menggabungkan kekuatan biologi molekuler, teknologi informasi, dan rekayasa industri berkelanjutan. Mahasiswa kami tidak hanya belajar di laboratorium standar GLP/GMP, tetapi juga terlibat langsung dalam proyek riset dan magang industri sejak semester awal.

Lulusan Biotechnology APU siap menghadapi tantangan global di bidang medis, digital, dan industri hijau. Bergabunglah dengan kami untuk menjadi bagian dari generasi yang mengubah dunia melalui sains dan inovasi.`,
  },
  strengths: [
    {
      title: 'Interdisipliner',
      description: 'Medical biotech + informatics + industrial biotech dengan green technology',
      icon: 'dna',
    },
    {
      title: 'Sarana Modern',
      description: 'Laboratorium standar GLP/GMP (SCCR) dengan peralatan lengkap dan mutakhir',
      icon: 'flask',
    },
    {
      title: 'Pendidik Internasional',
      description: 'Dosen berkualifikasi global yang aktif dalam penelitian dan publikasi',
      icon: 'globe',
    },
    {
      title: 'Orientasi Industri',
      description: 'Magang, proyek terapan, dan kolaborasi dengan mitra industri bioteknologi',
      icon: 'factory',
    },
    {
      title: 'Biotech Digital & AI',
      description: 'Pemodelan komputasional, analisis data biologis, dan penerapan AI dalam bioteknologi',
      icon: 'cpu',
    },
    {
      title: 'Entrepreneurship',
      description: 'Pembentukan mindset entrepreneur dan pengembangan kepemimpinan di bidang sains',
      icon: 'trending-up',
    },
    {
      title: 'Jaringan Global',
      description: 'Kemitraan nasional dan internasional untuk peluang karir dan riset',
      icon: 'network',
    },
  ],
  vision:
    'To become an internationally recognized leading Biotechnology Study Program through innovation in green technology and the development of cell engineering.',
  mission: [
    'Organizing international-standard biotechnology education that develops competent graduates with the spirit of a scientist, entrepreneur, and leader.',
    'Conducting innovative and solution-oriented research that supports national and international competitiveness, while advancing downstream development in cell engineering for industrial growth.',
    'Serving the community through the application of biotechnology to improve quality of life and contribute to the advancement of civilization.',
    'Building national and international collaboration networks focused on the development of biotechnology science.',
    'Fostering critical, analytical, and independent thinking skills, while shaping lifelong learners who apply biotechnology in an innovative, ethical, and sustainable manner.'
  ],
  graduateAttributes: [
    {
      letter: 'A',
      word: 'Adaptable',
      meaning: 'Adaptif',
      description: 'Mampu merespons perubahan dunia yang cepat dengan pembelajaran berkelanjutan.',
    },
    {
      letter: 'P',
      word: 'Persistence',
      meaning: 'Tangguh',
      description: 'Pantang menyerah dalam menghadapi tantangan akademik dan profesional.',
    },
    {
      letter: 'U',
      word: 'Universal',
      meaning: 'Universal',
      description: 'Berwawasan global dan menghargai nilai kebaikan universal.',
    },
    {
      letter: 'S',
      word: 'Smart',
      meaning: 'Cerdas',
      description: 'Cerdas dan maju secara intelektual dengan dasar sains yang kuat.',
    },
    {
      letter: 'S',
      word: 'Creative',
      meaning: 'Kreatif',
      description: 'Selalu berinovasi dan mencari peluang baru di bidang bioteknologi.',
    },
    {
      letter: 'C',
      word: 'Collaborative',
      meaning: 'Kolaboratif',
      description: 'Bekerja sama dalam tim sebagai pemimpin efektif dan anggota yang berkontribusi.',
    },
    {
      letter: 'R',
      word: 'Responsible',
      meaning: 'Bertanggung Jawab',
      description: 'Tanggung jawab sosial kepada masyarakat, bangsa, dan Tuhan.',
    },
  ],
  objectives: [
    'Menghasilkan lulusan yang menguasai konsep fundamental dan aplikasi bioteknologi.',
    'Membekali mahasiswa dengan keterampilan riset laboratorium dan analisis data.',
    'Mengintegrasikan teknologi informasi dan kecerdasan buatan dalam proses bioteknologi.',
    'Membangun jiwa entrepreneur dan kemampuan manajemen proyek sains.',
  ],
  careerPaths: [
    {
      title: 'Biotechnology Research Scientist',
      description: 'Conduct research in molecular biology, cell technology, genetics, microbiology, and applied biotechnology laboratories.',
    },
    {
      title: 'Regulatory Affairs Specialist',
      description: 'Ensure biotechnology, biomedical, and laboratory-based products comply with safety, quality, and regulatory standards.',
    },
    {
      title: 'Bioinformatics Analyst',
      description: 'Analyze genomic, molecular, and biological data using computational tools and biotechnology informatics approaches.',
    },
    {
      title: 'Biotech Data Specialist',
      description: 'Manage, protect, and interpret research data within digital biotechnology, laboratory, and healthcare ecosystems.',
    },
    {
      title: 'Quality Assurance & Quality Control Specialist',
      description: 'Maintain biotechnology product quality through GLP, GMP, validation, documentation, and international laboratory standards.',
    },
    {
      title: 'Industrial Bioprocess Developer',
      description: 'Develop sustainable biotechnology products and processes for health, food, agriculture, environment, and bioindustry sectors.',
    },
  ],
  facultyMembers: [
    {
      name: 'Fauziah Novita Putri Rifai, S.Si, M.Biotech',
      title: 'Head of Study Program',
      nidn: '-',
    },
    {
      name: 'Nurul Hidayah S.Si, M.Biotech',
      title: 'Lecturer',
      nidn: '-',
    },
    {
      name: 'Salindri Prawitasari, S.Si, M.Si.',
      title: 'Lecturer',
      nidn: '-',
    },
    {
      name: 'Dini Cahyani, S.Si, M.Biotech',
      title: 'Lecturer',
      nidn: '-',
    },
    {
      name: 'Iffan Alif, S.Si, M.Biotech',
      title: 'Lecturer',
      nidn: '-',
    },
    {
      name: 'Waheni Rizki Aprilia, S.Si., Ph.D.',
      title: 'Lecturer',
      nidn: '-',
    },
    {
      name: 'Adzani Gaisani Arda M.Sc',
      title: 'Lecturer',
      nidn: '-',
    },
    {
      name: 'Fikriya Novita Sari, S.Si., M.Si',
      title: 'Lecturer',
      nidn: '-',
    },
  ],
  focusAreas: [
    'Medical Biotechnology',
    'Biotechnology Informatics',
    'Biotechnology Industry',
  ],
};
