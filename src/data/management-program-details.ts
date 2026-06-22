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
    'To become a world-class Management Study Program in the development of digital-based and global management knowledge, grounded in the values of entrepreneurship and leadership. To become a Management Study Program that produces excellent, innovative, and character-driven graduates with a digital-based entrepreneurial mindset and global competitiveness.',
  mission: [
    'To provide international-standard management education focused on digital business enablers and international business management in order to produce graduates with strong entrepreneurial and leadership qualities.',
    'To conduct innovative and applied research in digital transformation, entrepreneurship, and global strategy that strengthens national competitiveness and supports the advancement of management science and technology.',
    'To carry out community service through the application of digital business innovation that empowers business actors and improves community welfare.',
    'To build international networks and collaborations with industry, educational institutions, and global communities to expand the program’s contribution in digital business, entrepreneurship, and international management.',
    'To foster critical, analytical, and independent thinking skills, while shaping lifelong learners who apply management knowledge in an innovative, ethical, and sustainable manner.'
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
      title: 'Research Scientist',
      description: 'Research and development in pharmaceutical, food, and health biotechnology laboratories.',
    },
    {
      title: 'Clinical Regulator',
      description: 'Regulation and oversight of biomedical products to ensure safety and quality.',
    },
    {
      title: 'Bioinformatics Expert',
      description: 'Biological data analysis, computational modeling, and genomic algorithm development.',
    },
    {
      title: 'Data Security Specialist',
      description: 'Research data and health information security within the digital biotechnology ecosystem.',
    },
    {
      title: 'Quality Assurance Professional',
      description: 'Quality assurance for biotechnology products according to GLP, GMP, and international standards.',
    },
    {
      title: 'Industrial Biotech Developer',
      description: 'Product and process development in green and sustainable biotechnology industries.',
    },
  ],
  facultyMembers: [
    {
      name: 'Reni Nur Arifah, S.E., M.M.',
      title: 'Head of Study Program',
      nidn: '-',
    },
    {
      name: 'Yetty Yuliany K, S.E., M.M',
      title: 'Lecturer',
      nidn: '-',
    },
    {
      name: 'Putri Aryo Jelang Fitri Khothimah, S.E., M.M.',
      title: 'Lecturer',
      nidn: '-',
    },
    {
      name: 'Randika Shafly Fawwaz, S.M., M.M',
      title: 'Lecturer',
      nidn: '-',
    },
    {
      name: 'Anindya Putri Utami, S.M., M.M.',
      title: 'Lecturer',
      nidn: '-',
    },
    {
      name: 'Eva Fachria, S.E., M.S.M',
      title: 'Lecturer',
      nidn: '-',
    },
    {
      name: 'Dr. Ir. Agus F. Abdillah, MBA, ERMAP',
      title: 'Lecturer',
      nidn: '-',
    },
    {
      name: 'dr. Suharto Abdul Majid, M.M',
      title: 'Lecturer',
      nidn: '-',
    },
    {
      name: 'Dr. Mohammad Annas, S. Tr.Par, M.M.',
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
