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
        'Producing professional, character-based, and superior midwives in Women\'s Health and Beauty Care throughout the life cycle of women.',
  mission: [
    'Organizing quality Midwifery Education to produce Professional Midwife graduates, with character, competitive, and superior in providing Women Health & Beauty Care-based midwifery services throughout the life cycle of women.',
    'Conducting midwifery research that contributes to the development of science and technology in Women\'s Health & Beauty Care throughout the life cycle of women.',
    'Organizing community service that contributes to the development of midwifery science and technology based on Women\'s Health & Beauty Care throughout the life cycle of women.',
    'Developing national and international networks to support the Tri Dharma of Higher Education.' 
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
      title: 'Multimedia Specialist (Journalist and Editor)',
      description: 'Designs, produces, and manages multimedia content (audio, audiovisual, and written) for cross-platform mass communication. They play a key role in production and editing, such as journalists, writers, videographers, or editors.',
    },
    {
      title: 'Media and Content Innovator',
      description: 'Content innovators design creative concepts and manage the entire media production cycle, from pre-production to multi-platform distribution. They develop new ideas, develop communication strategies, and integrate various forms of content to enhance the value and appeal of media.',
    },
    {
      title: 'Digital Communication Entrepreneur',
      description: 'Building and developing businesses based on digital media and communication technology, such as startups, digital agencies, and professional personal brands.',
    },

    {
      title: 'Public Relations Specialist/Agency',
      description: 'Designs, implements, and evaluates communication strategies to build reputation and positive public relations.',
    },
  ],
  facultyMembers: [
    {
       name: 'Bd. Rizqitha, S.Tr.Keb., M.Tr.Keb',
      title: 'lecturer',
      nidn: '0608049401',
    },    
    // {
    //    name: 'Rizki Muji Lestari, S.SiT., M.Kes',
    //   title: 'lecturer',
    //   nidn: '1124088901',
    // },
    {
      name: 'Rizqi Dian Pratiwi, S.Tr.Keb., M.Tr.Keb',
      title: 'Lecturer',
      nidn: '0616089605',
    },
    {
      name: 'Bd. Mariza Mustika Dewi, S.Tr.Keb., M.Tr.Keb',
      title: 'Lecturer',
      nidn: '0618039302',
    },
    {
      name: 'Bdn. Sri Mularsih, S.SiT., M.Kes',
      title: 'Lecturer',
      nidn: '0618048001',
    },
     {
      name: 'Bdn. Lia Ayu Kusumaningrum, S.ST., M.Tr.Keb',
      title: 'Lecturer',
      nidn: '9990626978',
    },
    {
      name: 'Endah Wijayanti, S.SiT., M.Kes',
      title: 'Lecturer',
      nidn: '0601097901',
    },
  ],
  focusAreas: [
    'Medical Biotechnology',
    'Biotechnology Informatics',
    'Biotechnology Industry',
  ],
};
