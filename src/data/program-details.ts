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

export const biomedicalProgram: ProgramDetail = {
  programId: 'biomedical-science',
  name: 'Biomedical Science',
  degree: 'S1',
  faculty: 'Fakultas Sains dan Teknologi',
  head: {
    name: 'Nadya Audina NS. S.Si., M.Biomed',
    title: 'Kepala Program Studi',
    message: `Assalamualaikum warahmatullahi wabarakatuh
May peace and blessings be upon us all

The Bachelor of Biomedical Science Study Program has a vision to produce graduates with international-standard expertise in the field of Regenerative Medicine. Our curriculum is designed through research-based learning, practical laboratory work, and strategic collaborations with both healthcare institutions and the industry.

To support the development of student competencies, we provide three specialized tracks: Biomedical Cell Therapy, Biomedical AI, and Biomedical Industry, equipping our students to face future advancements in healthcare technology.

We believe that being a biomedical scientist is a noble role in building knowledge, driving innovation, and contributing to human health. Therefore, we invite the younger generation who possess high curiosity and an innovative spirit to join us and become a vital part of the advancement of Indonesia's biomedical field.

Wassalamualaikum warahmatullahi wabarakatuh`,
  },
  strengths: [
    {
      title: 'Regenerative Medicine Focus',
      description: 'Curriculum centered on cell therapy, tissue engineering, and advanced biomedical research.',
      icon: 'microscope',
    },
    {
      title: 'Biomedical AI Track',
      description: 'Integration of artificial intelligence and data science into biomedical problem solving.',
      icon: 'cpu',
    },
    {
      title: 'Biomedical Industry Track',
      description: 'Industry-oriented training for product development, regulation, and commercialization.',
      icon: 'factory',
    },
    {
      title: 'Research-Based Learning',
      description: 'Hands-on laboratory work and applied research starting from early semesters.',
      icon: 'flask',
    },
    {
      title: 'Healthcare Collaboration',
      description: 'Strategic partnerships with healthcare institutions and the biomedical industry.',
      icon: 'network',
    },
    {
      title: 'Global Standard',
      description: 'Education designed to meet international standards in biomedical science.',
      icon: 'globe',
    },
  ],
  vision:
    'To produce graduates with international-standard expertise in the field of Regenerative Medicine.',
  mission: [
    'To deliver internationally standardized biomedical science education through research-based learning and practical laboratory work.',
    'To develop innovative research in regenerative medicine, biomedical AI, and biomedical industry.',
    'To build strategic partnerships with healthcare institutions and industry at home and abroad.',
    'To produce graduates who are curious, innovative, ethical, and ready to advance human health.',
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
      description: 'Selalu berinovasi dan mencari peluang baru di bidang biomedis.',
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
    'Menghasilkan lulusan yang menguasai konsep fundamental dan aplikasi biomedical science.',
    'Membekali mahasiswa dengan keterampilan riset laboratorium dan analisis data biomedis.',
    'Mengintegrasikan teknologi informasi dan kecerdasan buatan dalam riset biomedis.',
    'Membangun jiwa entrepreneur dan kemampuan manajemen proyek sains.',
  ],
  careerPaths: [
    {
      title: 'Biomedical Research Scientist',
      description: 'Conduct research in regenerative medicine, cell therapy, and biomedical laboratories.',
    },
    {
      title: 'Biomedical AI Specialist',
      description: 'Develop and apply artificial intelligence solutions for biomedical data and diagnostics.',
    },
    {
      title: 'Clinical Research Associate',
      description: 'Coordinate and monitor clinical trials and research studies in healthcare settings.',
    },
    {
      title: 'Regulatory Affairs Specialist',
      description: 'Ensure biomedical products and therapies comply with safety and regulatory standards.',
    },
    {
      title: 'Biomedical Product Developer',
      description: 'Develop biomedical products and processes for health and industry sectors.',
    },
    {
      title: 'Healthcare Data Analyst',
      description: 'Analyze health and research data to support evidence-based biomedical decisions.',
    },
  ],
  facultyMembers: [
    {
      name: 'Nadya Audina NS. S.Si., M.Biomed',
      title: 'Head of Study Program',
      nidn: '-',
    },
  ],
  focusAreas: [
    'Biomedical Cell Therapy',
    'Biomedical AI',
    'Biomedical Industry',
  ],
};

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
    'Fostering critical, analytical, and independent thinking skills, while shaping lifelong learners who apply biotechnology in an innovative, ethical, and sustainable manner.',
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

export const communicationProgram: ProgramDetail = {
  programId: 'communication',
  name: 'Communication Science',
  degree: 'S1',
  faculty: 'Fakultas Ilmu Komunikasi',
  head: {
    name: 'Muhamad Agung Setiawan, S.Sos., M.Sos',
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
    'To become an internationally recognized Communication Science study program that excels in innovation in communication science and technology to support a futuristic global civilization.',
  mission: [
    'Developing internationally standardized Communication Studies education that integrates science and communication technology.',
    'Conducting research in the field of communications to support technological advancement, strengthen national competitiveness, and produce communications works that help solve various social, cultural, and technological problems in the global community.',
    'Implementing community service programs that utilize communication skills to empower communities, improve communication literacy, and create a positive impact on welfare and civilization.',
    'Building international networks to encourage collaboration in the development of science and technology, communications, and innovation that contribute to global civilization.',
    'Cultivating critical, analytical, and independent thinking skills, as well as fostering a lifelong learning attitude and the application of innovative, ethical, and sustainable communication skills.',
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
      name: 'Muhamad Agung Setiawan, S.Sos., M.Sos',
      title: 'lecturer',
      nidn: '0610089602',
    },
    {
      name: "Lakna Tulas'un, S.Sos., M.I.Kom.",
      title: 'lecturer',
      nidn: '0626099702',
    },
    {
      name: 'Sutinnarto,S.I.Kom.,M.I.Kom',
      title: 'Lecturer',
      nidn: '0614028102',
    },
    {
      name: 'Najmi Rizki Khairani, S.Sos., M.I.Kom',
      title: 'Lecturer',
      nidn: '0610048605',
    },
    {
      name: "Rif'atul Himmah, S.Sos., M.I.Kom",
      title: 'Lecturer',
      nidn: '2461772673230292',
    },
  ],
  focusAreas: [
    'Medical Biotechnology',
    'Biotechnology Informatics',
    'Biotechnology Industry',
  ],
};

export const lawProgram: ProgramDetail = {
  programId: 'law',
  name: 'Law',
  degree: 'S1',
  faculty: 'Fakultas Hukum',
  head: {
    name: 'dr. Erwin, S.H., M.H',
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
    'Producing superior, innovative, character-based law graduates who transform Pancasila values ​​into globally competitive legal science by 2043.',
  mission: [
    'Character-Based Education: Providing superior and excellent education to produce law graduates who have Pancasila character, are able to innovate, and are globally competitive.',
    'Research & Publication: Conducting professional research and scientific publications with a Pancasila character regarding the latest legal developments and issues.',
    'Community Service and Science and Technology: Carrying out quality community service, in line with developments in science and technology, and with a Pancasila character.',
    'Institutional Cooperation: Establishing institutional partnerships that are oriented towards developing knowledge in the legal field.',
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
      name: 'dr. Erwin, S.H., M.H',
      title: 'lecturer',
      nidn: '6965892',
    },
    {
      name: 'Zain Arfin Utama S.H.,M.H.',
      title: 'lecturer',
      nidn: '0615119301',
    },
    {
      name: 'Muhamad Chabib F.S.HI.,M.H.',
      title: 'Lecturer',
      nidn: '0613059402',
    },
    {
      name: 'Pandam Bayu Seto Aji, M.H.',
      title: 'Lecturer',
      nidn: '2734775676130202',
    },
    {
      name: 'Eko Setiyo Ary Wibowo S.H.I, M.H.',
      title: 'Lecturer',
      nidn: '0608119001',
    },
  ],
  focusAreas: [
    'Medical Biotechnology',
    'Biotechnology Informatics',
    'Biotechnology Industry',
  ],
};

export const managementProgram: ProgramDetail = {
  programId: 'management',
  name: 'Management',
  degree: 'S1',
  faculty: 'Fakultas Ekonomi dan Bisnis',
  head: {
    name: 'Reni Nur Arifah, S.E., M.M.',
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
    'To foster critical, analytical, and independent thinking skills, while shaping lifelong learners who apply management knowledge in an innovative, ethical, and sustainable manner.',
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
      name: 'Putri Aryo Jelang Fitri Khothimah, S.E., M.M.',
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

export const midwiferyAssociateProgram: ProgramDetail = {
  programId: 'midwifery-associate',
  name: 'Midwifery Associate',
  degree: 'D3',
  faculty: 'Fakultas Kesehatan',
  head: {
    name: 'Bdn, Titik Kurniawati, S.SiT., M.Kes., M.Keb',
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
    'To become a World Class Diploma III Midwifery Study Program to develop science and technology that produces skilled midwife graduates with character and entrepreneurial spirit.',
  mission: [
    'Organizing vocational midwifery education that produces superior graduates based on science and technology that meets global standards.',
    'Developing applied research in the field of midwifery that is oriented towards science and technology that is relevant to the needs of society and global developments.',
    'Organizing community service based on empirical and appropriate technology to improve the health of mothers and children in the life cycle.',
    'Building national and international networks to support the achievement of global competitiveness of study programs.',
    'Cultivating critical, analytical and independent thinking skills, as well as shaping the attitude of lifelong learners in the application of innovative, ethical and sustainable midwifery.',
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
      title: 'Care Provider',
      description: 'Able to provide comprehensive, high-quality midwifery care, focusing on integrated health services across the woman\'s life cycle.',
    },
    {
      title: 'Care Provider for International Customer',
      description: 'Ability to work in internationally recognized healthcare settings, both domestically and internationally. Strengthen international standards and respect cultural diversity and global healthcare systems.',
    },
    {
      title: 'Educator',
      description: 'Actively participate in efforts to improve maternal and child health through health promotion, public education, and global insight-based advocacy. Continue studies in midwifery to advance scientific knowledge.',
    },
  ],
  facultyMembers: [
    {
      name: 'Bdn, Titik Kurniawati, S.SiT., M.Kes., M.Keb',
      title: 'lecturer',
      nidn: '0622058101',
    },
    {
      name: 'Dewi Elliana, SKM., S.Tr.Keb., M.Kes',
      title: 'lecturer',
      nidn: '0611027703',
    },
    {
      name: 'dr. Rita Agustina, M.Biomed',
      title: 'Lecturer',
      nidn: 'NUPK 4133752653230133',
    },
    {
      name: 'Diah Widiyatun, S.ST., M.Tr.Keb',
      title: 'Lecturer',
      nidn: '0617069002',
    },
    {
      name: 'Erna Setyaningsih, SST., M.Tr.Keb',
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

export const midwiferyBachelorProgram: ProgramDetail = {
  programId: 'midwifery-bachelor',
  name: 'Midwifery Bachelor',
  degree: 'S1',
  faculty: 'Fakultas Kesehatan',
  head: {
    name: 'Bd. Rizqitha, S.Tr.Keb., M.Tr.Keb',
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
    'Developing national and international networks to support the Tri Dharma of Higher Education.',
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
    {
      name: 'Rizki Muji Lestari, S.SiT., M.Kes',
      title: 'lecturer',
      nidn: '1124088901',
    },
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
