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
  programId: "biomedical",
  name: "Biomedical Science",
  degree: "S1",
  faculty: "Fakultas Sains dan Teknologi",
  head: {
    name: "Nadya Audina NS. S.Si., M.Biomed",
    title: "Head of Biomedical Science Study Program",
    message: `The Bachelor of Biomedical Science Study Program has a vision to produce graduates with international-standard expertise in the field of Regenerative Medicine. Our curriculum is designed through research-based learning, practical laboratory work, and strategic collaborations with both healthcare institutions and the industry.

To support the development of student competencies, we provide three specialized tracks: Biomedical Cell Therapy, Biomedical AI, and Biomedical Industry, equipping our students to face future advancements in healthcare technology.

We believe that being a biomedical scientist is a noble role in building knowledge, driving innovation, and contributing to human health.`,
  },
  strengths: [
    {
      title: "Interdisciplinary",
      description: "Biology + informatics + green technology",
      icon: "dna",
    },
    {
      title: "Modern Facilities",
      description:
        "GLP/GMP-standard (SCCR) laboratory with complete and cutting-edge equipment",
      icon: "flask",
    },
    {
      title: "International Educators",
      description:
        "Globally qualified lecturers active in research and publication",
      icon: "globe",
    },
    {
      title: "Industry Orientation",
      description:
        "Internships, applied projects, and collaboration with biomedical science or industrial partners",
      icon: "factory",
    },
  ],
  vision:
    "To become an internationally recognized Biomedical Science Study Program that produces graduates with expertise in Regenerative Medicine and contributes to advancing human health through research, innovation, and ethical practice.",
  mission: [
    "To deliver international-standard biomedical science education through research-based learning and practical laboratory experience.",
    "To develop innovative research in regenerative medicine, biomedical technology, and related life sciences.",
    "To build strategic partnerships with healthcare institutions and industry to enhance student competencies and career readiness.",
    "To produce graduates who are scientifically competent, ethically grounded, and capable of contributing to global health advancement.",
  ],
  graduateAttributes: [
    {
      letter: "A",
      word: "Analytical",
      meaning: "Analitis",
      description:
        "Able to analyze complex biomedical problems using scientific and evidence-based approaches.",
    },
    {
      letter: "B",
      word: "Bold",
      meaning: "Berani",
      description:
        "Confident to explore new ideas and contribute to biomedical innovation.",
    },
    {
      letter: "U",
      word: "United",
      meaning: "Bersatu",
      description:
        "Works collaboratively across disciplines and cultures to advance health outcomes.",
    },
    {
      letter: "S",
      word: "Scientific",
      meaning: "Ilmiah",
      description:
        "Applies rigorous scientific methods and critical thinking in research and practice.",
    },
  ],
  objectives: [
    "To produce graduates who master fundamental and applied concepts in biomedical science.",
    "To equip students with laboratory research skills and data analysis competencies.",
    "To integrate information technology and biomedical applications into the learning process.",
    "To develop ethical, innovative, and globally competitive biomedical professionals.",
  ],
  careerPaths: [
    {
      title: "Research Scientist",
      description:
        "Conduct research in biomedical, pharmaceutical, and regenerative medicine laboratories.",
    },
    {
      title: "Clinical Research Associate",
      description:
        "Coordinate and monitor clinical trials to ensure safety, quality, and regulatory compliance.",
    },
    {
      title: "Biomedical AI Specialist",
      description:
        "Apply artificial intelligence and data science to biomedical research and diagnostics.",
    },
    {
      title: "Quality Assurance Professional",
      description:
        "Ensure biomedical products and processes meet GLP, GMP, and international standards.",
    },
    {
      title: "Biomedical Industry Developer",
      description:
        "Develop innovative products and processes in the biomedical and healthcare industry.",
    },
  ],
  facultyMembers: [
    {
      name: "Nadya Audina NS. S.Si., M.Biomed",
      title: "Head of Study Program",
      nidn: "-",
    },
  ],
  focusAreas: ["Regenerative Medicine", "Biomedical AI", "Biomedical Industry"],
};

export const biotechnologyProgram: ProgramDetail = {
  programId: "biotechnology",
  name: "Biotechnology",
  degree: "S1",
  faculty: "Fakultas Sains dan Teknologi",
  head: {
    name: "Fauziah Novita Putri Rifai, S.Si, M.Biotech",
    title: "Kepala Program Studi",
    message: `Selamat datang di Program Studi Biotechnology APU. Kami membangun kurikulum yang menggabungkan kekuatan biologi molekuler, teknologi informasi, dan rekayasa industri berkelanjutan. Mahasiswa kami tidak hanya belajar di laboratorium standar GLP/GMP, tetapi juga terlibat langsung dalam proyek riset dan magang industri sejak semester awal.

Lulusan Biotechnology APU siap menghadapi tantangan global di bidang medis, digital, dan industri hijau. Bergabunglah dengan kami untuk menjadi bagian dari generasi yang mengubah dunia melalui sains dan inovasi.`,
  },
  strengths: [
    {
      title: "Interdisipliner",
      description:
        "Medical biotech + informatics + industrial biotech dengan green technology",
      icon: "dna",
    },
    {
      title: "Sarana Modern",
      description:
        "Laboratorium standar GLP/GMP (SCCR) dengan peralatan lengkap dan mutakhir",
      icon: "flask",
    },
    {
      title: "Pendidik Internasional",
      description:
        "Dosen berkualifikasi global yang aktif dalam penelitian dan publikasi",
      icon: "globe",
    },
    {
      title: "Orientasi Industri",
      description:
        "Magang, proyek terapan, dan kolaborasi dengan mitra industri bioteknologi",
      icon: "factory",
    },
    {
      title: "Biotech Digital & AI",
      description:
        "Pemodelan komputasional, analisis data biologis, dan penerapan AI dalam bioteknologi",
      icon: "cpu",
    },
    {
      title: "Entrepreneurship",
      description:
        "Pembentukan mindset entrepreneur dan pengembangan kepemimpinan di bidang sains",
      icon: "trending-up",
    },
    {
      title: "Jaringan Global",
      description:
        "Kemitraan nasional dan internasional untuk peluang karir dan riset",
      icon: "network",
    },
  ],
  vision:
    "To become an internationally recognized leading Biotechnology Study Program through innovation in green technology and the development of cell engineering.",
  mission: [
    "Organizing international-standard biotechnology education that develops competent graduates with the spirit of a scientist, entrepreneur, and leader.",
    "Conducting innovative and solution-oriented research that supports national and international competitiveness, while advancing downstream development in cell engineering for industrial growth.",
    "Serving the community through the application of biotechnology to improve quality of life and contribute to the advancement of civilization.",
    "Building national and international collaboration networks focused on the development of biotechnology science.",
    "Fostering critical, analytical, and independent thinking skills, while shaping lifelong learners who apply biotechnology in an innovative, ethical, and sustainable manner.",
  ],
  graduateAttributes: [
    {
      letter: "A",
      word: "Adaptable",
      meaning: "Adaptif",
      description:
        "Mampu merespons perubahan dunia yang cepat dengan pembelajaran berkelanjutan.",
    },
    {
      letter: "P",
      word: "Persistence",
      meaning: "Tangguh",
      description:
        "Pantang menyerah dalam menghadapi tantangan akademik dan profesional.",
    },
    {
      letter: "U",
      word: "Universal",
      meaning: "Universal",
      description: "Berwawasan global dan menghargai nilai kebaikan universal.",
    },
    {
      letter: "S",
      word: "Smart",
      meaning: "Cerdas",
      description:
        "Cerdas dan maju secara intelektual dengan dasar sains yang kuat.",
    },
    {
      letter: "S",
      word: "Creative",
      meaning: "Kreatif",
      description:
        "Selalu berinovasi dan mencari peluang baru di bidang bioteknologi.",
    },
    {
      letter: "C",
      word: "Collaborative",
      meaning: "Kolaboratif",
      description:
        "Bekerja sama dalam tim sebagai pemimpin efektif dan anggota yang berkontribusi.",
    },
    {
      letter: "R",
      word: "Responsible",
      meaning: "Bertanggung Jawab",
      description:
        "Tanggung jawab sosial kepada masyarakat, bangsa, dan Tuhan.",
    },
  ],
  objectives: [
    "Menghasilkan lulusan yang menguasai konsep fundamental dan aplikasi bioteknologi.",
    "Membekali mahasiswa dengan keterampilan riset laboratorium dan analisis data.",
    "Mengintegrasikan teknologi informasi dan kecerdasan buatan dalam proses bioteknologi.",
    "Membangun jiwa entrepreneur dan kemampuan manajemen proyek sains.",
  ],
  careerPaths: [
    {
      title: "Biotechnology Research Scientist",
      description:
        "Conduct research in molecular biology, cell technology, genetics, microbiology, and applied biotechnology laboratories.",
    },
    {
      title: "Regulatory Affairs Specialist",
      description:
        "Ensure biotechnology, biomedical, and laboratory-based products comply with safety, quality, and regulatory standards.",
    },
    {
      title: "Bioinformatics Analyst",
      description:
        "Analyze genomic, molecular, and biological data using computational tools and biotechnology informatics approaches.",
    },
    {
      title: "Biotech Data Specialist",
      description:
        "Manage, protect, and interpret research data within digital biotechnology, laboratory, and healthcare ecosystems.",
    },
    {
      title: "Quality Assurance & Quality Control Specialist",
      description:
        "Maintain biotechnology product quality through GLP, GMP, validation, documentation, and international laboratory standards.",
    },
    {
      title: "Industrial Bioprocess Developer",
      description:
        "Develop sustainable biotechnology products and processes for health, food, agriculture, environment, and bioindustry sectors.",
    },
  ],
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
  focusAreas: [
    "Medical Biotechnology",
    "Biotechnology Informatics",
    "Biotechnology Industry",
  ],
};

export const communicationProgram: ProgramDetail = {
  programId: "communication",
  name: "Communication Science",
  degree: "S1",
  faculty: "Fakultas Ilmu Sosial dan Ilmu Politik",
  head: {
    name: "Muhamad Agung Setiawan, S.Sos., M.Sos",
    title: "Kepala Program Studi",
    message: `Selamat datang di Program Studi Communication Science APU. Dunia komunikasi berkembang pesat didorong oleh teknologi digital, konten kreatif, dan dinamika industri media. Program ini dirancang untuk membekali mahasiswa dengan keterampilan analisis media, produksi konten multimedia, pemahaman branding, public relations, serta praktik lobbying dan negosiasi.

Kombinasi teori dan praktik memastikan lulusan memiliki kompetensi yang siap bersaing di berbagai sektor dan industri.`,
  },
  strengths: [
    {
      title: "Program Sesuai Potensi Mahasiswa",
      description:
        "Digital & New Media Communication dan Strategic Business Communication",
      icon: "newspaper",
    },
    {
      title: "Kurikulum Relevan Industri",
      description:
        "Digital Filmmaking, Broadcast Journalism, Brand Storytelling, Event Management",
      icon: "monitor",
    },
    {
      title: "Sistem Pembelajaran Inovatif",
      description:
        "Kulikasi kampus dan enrichment program termasuk pertukaran mahasiswa dan magang industri",
      icon: "users",
    },
    {
      title: "Mitra Kolaboratif",
      description:
        "Kerja sama dengan organisasi media, agensi, dan perusahaan untuk pembelajaran lapangan",
      icon: "handshake",
    },
  ],
  vision:
    "To become an internationally recognized Communication Science study program that excels in innovation in communication science and technology to support a futuristic global civilization.",
  mission: [
    "Developing internationally standardized Communication Studies education that integrates science and communication technology.",
    "Conducting research in the field of communications to support technological advancement, strengthen national competitiveness, and produce communications works that help solve various social, cultural, and technological problems in the global community.",
    "Implementing community service programs that utilize communication skills to empower communities, improve communication literacy, and create a positive impact on welfare and civilization.",
    "Building international networks to encourage collaboration in the development of science and technology, communications, and innovation that contribute to global civilization.",
    "Cultivating critical, analytical, and independent thinking skills, as well as fostering a lifelong learning attitude and the application of innovative, ethical, and sustainable communication skills.",
  ],
  graduateAttributes: [
    {
      letter: "A",
      word: "Adaptable",
      meaning: "Adaptif",
      description:
        "Mampu beradaptasi dengan perkembangan teknologi dan industri komunikasi.",
    },
    {
      letter: "P",
      word: "Persistence",
      meaning: "Tangguh",
      description:
        "Pantang menyerah dalam menghadapi tantangan akademik dan profesional.",
    },
    {
      letter: "U",
      word: "Universal",
      meaning: "Universal",
      description: "Berwawasan global dan menghargai nilai kebaikan universal.",
    },
    {
      letter: "S",
      word: "Smart",
      meaning: "Cerdas",
      description:
        "Cerdas dan maju secara intelektual dengan dasar ilmu komunikasi yang kuat.",
    },
    {
      letter: "S",
      word: "Creative",
      meaning: "Kreatif",
      description:
        "Selalu berinovasi dan mencari peluang baru di bidang komunikasi.",
    },
    {
      letter: "C",
      word: "Collaborative",
      meaning: "Kolaboratif",
      description:
        "Bekerja sama dalam tim sebagai pemimpin efektif dan anggota yang berkontribusi.",
    },
    {
      letter: "R",
      word: "Responsible",
      meaning: "Bertanggung Jawab",
      description:
        "Tanggung jawab sosial kepada masyarakat, bangsa, dan Tuhan.",
    },
  ],
  objectives: [
    "Menghasilkan lulusan yang menguasai konsep fundamental dan aplikasi ilmu komunikasi.",
    "Membekali mahasiswa dengan keterampilan produksi konten digital dan analisis media.",
    "Mengintegrasikan teknologi informasi dalam praktik komunikasi profesional.",
    "Membangun jiwa entrepreneur dan kemampuan manajemen komunikasi.",
  ],
  careerPaths: [
    {
      title: "Multimedia Specialist (Journalist and Editor)",
      description:
        "Designs, produces, and manages multimedia content (audio, audiovisual, and written) for cross-platform mass communication.",
    },
    {
      title: "Media and Content Innovator",
      description:
        "Designs creative concepts and manages the entire media production cycle, from pre-production to multi-platform distribution.",
    },
    {
      title: "Digital Communication Entrepreneur",
      description:
        "Building and developing businesses based on digital media and communication technology.",
    },
    {
      title: "Public Relations Specialist/Agency",
      description:
        "Designs, implements, and evaluates communication strategies to build reputation and positive public relations.",
    },
  ],
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
  focusAreas: [
    "Digital and New Media Communication",
    "Strategic Business Communication",
    "Media and Communication Technology",
  ],
};

export const lawProgram: ProgramDetail = {
  programId: "law",
  name: "Law",
  degree: "S1",
  faculty: "Fakultas Hukum",
  head: {
    name: "Dr. Erwin, S.H., M.H",
    title: "Kepala Program Studi",
    message: `Selamat datang di Program Studi Hukum APU. Program ini mengintegrasikan keunggulan akademik, praktik profesional, inovasi teknologi, dan perspektif global ke dalam kurikulum progresif yang dirancang untuk masa depan.

Kami mengkhususkan diri pada Ilmu Hukum dan Hukum Medis, menggunakan pendekatan pembelajaran modern yang memperkuat berpikir hukum analitis, riset, dan aplikasi praktis.`,
  },
  strengths: [
    {
      title: "Pembelajaran Inovatif",
      description:
        "Research- and practice-based learning dengan kolaborasi institusi terkemuka",
      icon: "newspaper",
    },
    {
      title: "Pembentukan Karakter",
      description:
        "Memperkuat karakter hukum yang berintegritas dan bertanggung jawab",
      icon: "monitor",
    },
    {
      title: "Kontribusi Nyata",
      description:
        "Menghasilkan riset hukum yang relevan dan berbasis nilai Pancasila",
      icon: "users",
    },
  ],
  vision:
    "Producing superior, innovative, character-based law graduates who transform Pancasila values into globally competitive legal science by 2043.",
  mission: [
    "Character-Based Education: Providing superior and excellent education to produce law graduates who have Pancasila character, are able to innovate, and are globally competitive.",
    "Research & Publication: Conducting professional research and scientific publications with a Pancasila character regarding the latest legal developments and issues.",
    "Community Service and Science and Technology: Carrying out quality community service, in line with developments in science and technology, and with a Pancasila character.",
    "Institutional Cooperation: Establishing institutional partnerships that are oriented towards developing knowledge in the legal field.",
  ],
  graduateAttributes: [
    {
      letter: "A",
      word: "Adaptable",
      meaning: "Adaptif",
      description:
        "Mampu merespons perubahan hukum dan masyarakat yang dinamis.",
    },
    {
      letter: "P",
      word: "Persistence",
      meaning: "Tangguh",
      description:
        "Pantang menyerah dalam menghadapi tantangan akademik dan profesional.",
    },
    {
      letter: "U",
      word: "Universal",
      meaning: "Universal",
      description: "Berwawasan global dan menghargai nilai kebaikan universal.",
    },
    {
      letter: "S",
      word: "Smart",
      meaning: "Cerdas",
      description:
        "Cerdas dan maju secara intelektual dengan dasar ilmu hukum yang kuat.",
    },
    {
      letter: "S",
      word: "Creative",
      meaning: "Kreatif",
      description: "Selalu berinovasi dalam menyelesaikan permasalahan hukum.",
    },
    {
      letter: "C",
      word: "Collaborative",
      meaning: "Kolaboratif",
      description:
        "Bekerja sama dalam tim sebagai pemimpin efektif dan anggota yang berkontribusi.",
    },
    {
      letter: "R",
      word: "Responsible",
      meaning: "Bertanggung Jawab",
      description:
        "Tanggung jawab sosial kepada masyarakat, bangsa, dan Tuhan.",
    },
  ],
  objectives: [
    "Menghasilkan lulusan yang menguasai konsep fundamental dan aplikasi ilmu hukum.",
    "Membekali mahasiswa dengan keterampilan riset hukum dan argumentasi hukum.",
    "Mengintegrasikan teknologi informasi dalam praktik hukum profesional.",
    "Membangun jiwa advokasi dan kemampuan penyelesaian sengketa.",
  ],
  careerPaths: [
    {
      title: "Legal Practitioner",
      description:
        "Practice as an advocate, legal consultant, or judge with strong analytical skills.",
    },
    {
      title: "Legal Researcher",
      description: "Conduct research on legal issues and policy development.",
    },
    {
      title: "Corporate Legal Officer",
      description:
        "Manage legal affairs, compliance, and contracts within organizations.",
    },
    {
      title: "Medico-Legal Specialist",
      description:
        "Apply legal expertise in healthcare, medical ethics, and patient rights.",
    },
  ],
  facultyMembers: [
    {
      name: "Dr. Erwin, S.H., M.H",
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
  focusAreas: ["Legal Science", "Medical Law", "Digital Law and Policy"],
};

export const managementProgram: ProgramDetail = {
  programId: "management",
  name: "Management",
  degree: "S1",
  faculty: "Fakultas Ekonomi dan Bisnis",
  head: {
    name: "Reni Nur Arifah, S.E., M.M.",
    title: "Kepala Program Studi",
    message: `Selamat datang di Program Studi Management APU. Program ini menjadi ruang belajar strategis bagi generasi muda yang ingin menjadi pemimpin perubahan, inovator bisnis, dan entrepreneur yang kompetitif secara global.

Sesuai perkembangan era ekonomi digital, program ini memiliki fokus khas Digital-Based Entrepreneurship yang mengintegrasikan pengetahuan manajemen modern dengan adaptasi teknologi, kreativitas inovatif, dan keterampilan literasi digital.`,
  },
  strengths: [
    {
      title: "Curriculum Based on Industry",
      description:
        "Relevant to industry needs, focusing on utilizing technology for business management and decision-making.",
      icon: "briefcase",
    },
    {
      title: "Development of the Best Students",
      description:
        "Direct role in economic development by leveraging technology as a driver for business growth.",
      icon: "award",
    },
    {
      title: "Student Exchange",
      description:
        "Student exchange programs to actively participate in cross-border business projects and research.",
      icon: "map",
    },
    {
      title: "Enrichment Program",
      description:
        "Enrichment programs connecting students to the professional world through internships.",
      icon: "users",
    },
  ],
  vision:
    "To become a world-class Management Study Program in the development of digital-based and global management knowledge, grounded in the values of entrepreneurship and leadership. To become a Management Study Program that produces excellent, innovative, and character-driven graduates with a digital-based entrepreneurial mindset and global competitiveness.",
  mission: [
    "To provide international-standard management education focused on digital business enablers and international business management in order to produce graduates with strong entrepreneurial and leadership qualities.",
    "To conduct innovative and applied research in digital transformation, entrepreneurship, and global strategy that strengthens national competitiveness and supports the advancement of management science and technology.",
    "To carry out community service through the application of digital business innovation that empowers business actors and improves community welfare.",
    "To build international networks and collaborations with industry, educational institutions, and global communities to expand the program’s contribution in digital business, entrepreneurship, and international management.",
    "To foster critical, analytical, and independent thinking skills, while shaping lifelong learners who apply management knowledge in an innovative, ethical, and sustainable manner.",
  ],
  graduateAttributes: [
    {
      letter: "A",
      word: "Adaptable",
      meaning: "Adaptif",
      description: "Mampu merespons perubahan dunia bisnis yang cepat.",
    },
    {
      letter: "P",
      word: "Persistence",
      meaning: "Tangguh",
      description:
        "Pantang menyerah dalam menghadapi tantangan akademik dan profesional.",
    },
    {
      letter: "U",
      word: "Universal",
      meaning: "Universal",
      description: "Berwawasan global dan menghargai nilai kebaikan universal.",
    },
    {
      letter: "S",
      word: "Smart",
      meaning: "Cerdas",
      description:
        "Cerdas dan maju secara intelektual dengan dasar manajemen yang kuat.",
    },
    {
      letter: "S",
      word: "Creative",
      meaning: "Kreatif",
      description:
        "Selalu berinovasi dan mencari peluang baru di bidang bisnis.",
    },
    {
      letter: "C",
      word: "Collaborative",
      meaning: "Kolaboratif",
      description:
        "Bekerja sama dalam tim sebagai pemimpin efektif dan anggota yang berkontribusi.",
    },
    {
      letter: "R",
      word: "Responsible",
      meaning: "Bertanggung Jawab",
      description:
        "Tanggung jawab sosial kepada masyarakat, bangsa, dan Tuhan.",
    },
  ],
  objectives: [
    "Menghasilkan lulusan yang menguasai konsep fundamental dan aplikasi manajemen.",
    "Membekali mahasiswa dengan keterampilan kewirausahaan digital dan kepemimpinan.",
    "Mengintegrasikan teknologi informasi dalam pengambilan keputusan bisnis.",
    "Membangun jiwa entrepreneur dan kemampuan manajemen strategis.",
  ],
  careerPaths: [
    {
      title: "Business Development Manager",
      description:
        "Identify growth opportunities and build strategic partnerships for organizations.",
    },
    {
      title: "Digital Entrepreneur",
      description: "Build and scale technology-based businesses and startups.",
    },
    {
      title: "International Business Specialist",
      description:
        "Manage cross-border operations, trade, and global supply chains.",
    },
    {
      title: "Management Consultant",
      description:
        "Advise organizations on strategy, operations, and digital transformation.",
    },
    {
      title: "Financial Analyst",
      description:
        "Analyze financial data and support investment and business decisions.",
    },
    {
      title: "Marketing Strategist",
      description:
        "Design and execute data-driven marketing and brand strategies.",
    },
  ],
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
  focusAreas: [
    "International Business Management",
    "Digital Business Management",
    "Digital Entrepreneurship",
  ],
};

export const midwiferyAssociateProgram: ProgramDetail = {
  programId: "midwifery-associate",
  name: "Midwifery Associate",
  degree: "D3",
  faculty: "Fakultas Kesehatan",
  head: {
    name: "Bdn, Titik Kurniawati, S.SiT., M.Kes., M.Keb",
    title: "Kepala Program Studi",
    message: `Program Studi Diploma III Kebidanan APU berperan aktif dalam menghasilkan bidan profesional, beretika, dan kompetitif secara global. Pendidikan diorientasikan pada sains, teknologi, entrepreneurship, dan kepemimpinan.

Kurikulum dikembangkan berbasis Outcome-Based Education (OBE) dan sesuai Standar Nasional Pendidikan Tinggi (SN-Dikti) serta kompetensi AIPKIND. Proses pembelajaran didukung oleh dosen profesional, fasilitas laboratorium modern, dan jaringan kerja sama dengan berbagai rumah sakit, klinik, dan lembaga kesehatan di Indonesia dan luar negeri.`,
  },
  strengths: [
    {
      title: "Teaching Staff & Competency Strengthening",
      description:
        "Dosen profesional domestik dan internasional dengan sertifikasi kompetensi",
      icon: "newspaper",
    },
    {
      title: "Modern Learning & Practice Facilities",
      description:
        "Laboratorium Kebidanan Terpadu, teaching hospital, smart classroom, asrama, dan fasilitas pendukung",
      icon: "monitor",
    },
    {
      title: "Professional Language & Communication Proficiency",
      description:
        "Bahasa Jepang, English for Academic Purposes, public speaking, dan English debate",
      icon: "users",
    },
    {
      title: "National & International Partnerships",
      description:
        "Kolaborasi untuk pembelajaran kontekstual dan relevan dengan dunia kesehatan",
      icon: "users",
    },
    {
      title: "Career Readiness in the Global Healthcare Industry",
      description:
        "Persiapan kerja di layanan kebidanan dan kesehatan domestik maupun internasional",
      icon: "users",
    },
    {
      title: "Innovation, Professionalism & Midwifery Entrepreneurship",
      description:
        "Evidence-based care, teknologi digital, inovasi stem cell, dan Entrepreneurial Midwife",
      icon: "users",
    },
  ],
  vision:
    "To become a World Class Diploma III Midwifery Study Program to develop science and technology that produces skilled midwife graduates with character and entrepreneurial spirit.",
  mission: [
    "Organizing vocational midwifery education that produces superior graduates based on science and technology that meets global standards.",
    "Developing applied research in the field of midwifery that is oriented towards science and technology that is relevant to the needs of society and global developments.",
    "Organizing community service based on empirical and appropriate technology to improve the health of mothers and children in the life cycle.",
    "Building national and international networks to support the achievement of global competitiveness of study programs.",
    "Cultivating critical, analytical and independent thinking skills, as well as shaping the attitude of lifelong learners in the application of innovative, ethical and sustainable midwifery.",
  ],
  graduateAttributes: [
    {
      letter: "A",
      word: "Adaptable",
      meaning: "Adaptif",
      description:
        "Mampu beradaptasi dengan perkembangan dunia kebidanan dan kesehatan.",
    },
    {
      letter: "P",
      word: "Persistence",
      meaning: "Tangguh",
      description:
        "Pantang menyerah dalam menghadapi tantangan akademik dan profesional.",
    },
    {
      letter: "U",
      word: "Universal",
      meaning: "Universal",
      description: "Berwawasan global dan menghargai nilai kebaikan universal.",
    },
    {
      letter: "S",
      word: "Smart",
      meaning: "Cerdas",
      description:
        "Cerdas dan maju secara intelektual dengan dasar kebidanan yang kuat.",
    },
    {
      letter: "S",
      word: "Creative",
      meaning: "Kreatif",
      description: "Selalu berinovasi dalam pelayanan kebidanan.",
    },
    {
      letter: "C",
      word: "Collaborative",
      meaning: "Kolaboratif",
      description:
        "Bekerja sama dalam tim kesehatan sebagai profesional yang berkontribusi.",
    },
    {
      letter: "R",
      word: "Responsible",
      meaning: "Bertanggung Jawab",
      description:
        "Tanggung jawab sosial kepada masyarakat, bangsa, dan Tuhan.",
    },
  ],
  objectives: [
    "Menghasilkan lulusan bidan profesional yang menguasai kompetensi kebidanan.",
    "Membekali mahasiswa dengan keterampilan praktik klinis dan pelayanan kesehatan ibu dan anak.",
    "Mengintegrasikan teknologi informasi dan inovasi dalam praktik kebidanan.",
    "Membangun jiwa entrepreneur dan kepemimpinan di bidang kebidanan.",
  ],
  careerPaths: [
    {
      title: "Care Provider",
      description:
        "Able to provide comprehensive, high-quality midwifery care across the woman's life cycle.",
    },
    {
      title: "Care Provider for International Customer",
      description:
        "Ability to work in internationally recognized healthcare settings, both domestically and internationally.",
    },
    {
      title: "Educator",
      description:
        "Actively participate in efforts to improve maternal and child health through health promotion and education.",
    },
  ],
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
  focusAreas: [
    "Midwifery Care",
    "Maternal and Child Health",
    "Global Midwifery Practice",
  ],
};

export const midwiferyBachelorProgram: ProgramDetail = {
  programId: "midwifery-bachelor",
  name: "Midwifery Bachelor",
  degree: "S1",
  faculty: "Fakultas Kesehatan",
  head: {
    name: "Bd. Rizqitha, S.Tr.Keb., M.Tr.Keb",
    title: "Kepala Program Studi",
    message: `Program Sarjana Kebidanan dan Pendidikan Profesi Bidan APU hadir untuk menjawab tantangan kesehatan perempuan yang semakin kompleks. Kami berkomitmen menghasilkan lulusan yang tidak hanya memiliki kompetensi ilmiah dan klinis yang kuat, tetapi juga memiliki jiwa humanis, inovatif, dan visioner.

Dengan ciri khas Women Health & Beauty Care, kami berupaya mengintegrasikan konsep kesehatan, wellness, dan kecantikan perempuan ke dalam setiap aspek pembelajaran. Mahasiswa tidak hanya memahami kesehatan reproduksi dan kehamilan, tetapi juga mengembangkan perspektif holistik.`,
  },
  strengths: [
    {
      title: "Characteristics of 'Women's Health & Beauty Care'",
      description:
        "Integrasi konsep kesehatan, kebugaran, dan kecantikan perempuan dalam proses pembelajaran",
      icon: "newspaper",
    },
    {
      title: "Competency-Based and Technology-Based Curriculum",
      description:
        "Kurikulum berbasis kompetensi dan teknologi modern dengan simulasi klinis dan riset",
      icon: "monitor",
    },
    {
      title: "Collaboration and Extensive Networking",
      description:
        "Kolaborasi dengan rumah sakit, klinik, institusi pendidikan, dan organisasi profesional",
      icon: "users",
    },
    {
      title: "Professional and Experienced Lecturers",
      description:
        "Dosen kompeten dengan pengalaman praktik klinis, riset, dan pengabdian masyarakat",
      icon: "users",
    },
    {
      title: "Developing Global and Entrepreneurial Character",
      description:
        "Membentuk scientist, entrepreneur, dan leader di sektor kesehatan perempuan",
      icon: "users",
    },
    {
      title: "Humanistic and Holistic Approach",
      description:
        "Pelayanan kebidanan yang etis, empatik, dan menghargai kesejahteraan budaya serta emosional",
      icon: "users",
    },
    {
      title: "Modern and Inspiring Learning Environment",
      description:
        "Laboratorium obstetri modern, ruang praktik nyaman, dan atmosfer akademik yang kreatif",
      icon: "users",
    },
  ],
  vision:
    "Producing professional, character-based, and superior midwives in Women's Health and Beauty Care throughout the life cycle of women.",
  mission: [
    "Organizing quality Midwifery Education to produce Professional Midwife graduates, with character, competitive, and superior in providing Women Health & Beauty Care-based midwifery services throughout the life cycle of women.",
    "Conducting midwifery research that contributes to the development of science and technology in Women's Health & Beauty Care throughout the life cycle of women.",
    "Organizing community service that contributes to the development of midwifery science and technology based on Women's Health & Beauty Care throughout the life cycle of women.",
    "Developing national and international networks to support the Tri Dharma of Higher Education.",
  ],
  graduateAttributes: [
    {
      letter: "A",
      word: "Adaptable",
      meaning: "Adaptif",
      description:
        "Mampu beradaptasi dengan perkembangan dunia kebidanan dan kesehatan.",
    },
    {
      letter: "P",
      word: "Persistence",
      meaning: "Tangguh",
      description:
        "Pantang menyerah dalam menghadapi tantangan akademik dan profesional.",
    },
    {
      letter: "U",
      word: "Universal",
      meaning: "Universal",
      description: "Berwawasan global dan menghargai nilai kebaikan universal.",
    },
    {
      letter: "S",
      word: "Smart",
      meaning: "Cerdas",
      description:
        "Cerdas dan maju secara intelektual dengan dasar kebidanan yang kuat.",
    },
    {
      letter: "S",
      word: "Creative",
      meaning: "Kreatif",
      description: "Selalu berinovasi dalam pelayanan kebidanan.",
    },
    {
      letter: "C",
      word: "Collaborative",
      meaning: "Kolaboratif",
      description:
        "Bekerja sama dalam tim kesehatan sebagai profesional yang berkontribusi.",
    },
    {
      letter: "R",
      word: "Responsible",
      meaning: "Bertanggung Jawab",
      description:
        "Tanggung jawab sosial kepada masyarakat, bangsa, dan Tuhan.",
    },
  ],
  objectives: [
    "Menghasilkan lulusan bidan sarjana profesional yang menguasai kompetensi kebidanan.",
    "Membekali mahasiswa dengan keterampilan praktik klinis dan pelayanan kesehatan perempuan.",
    "Mengintegrasikan teknologi informasi dan inovasi dalam praktik kebidanan.",
    "Membangun jiwa entrepreneur dan kepemimpinan di bidang kesehatan perempuan.",
  ],
  careerPaths: [
    {
      title: "Clinical Midwife Specialist",
      description:
        "Provide advanced midwifery care across the woman's life cycle in clinical settings.",
    },
    {
      title: "Women's Health Consultant",
      description:
        "Advise and support women's health, wellness, and beauty care needs.",
    },
    {
      title: "Midwifery Educator",
      description:
        "Teach and mentor future midwives in academic and clinical settings.",
    },
    {
      title: "Healthcare Entrepreneur",
      description:
        "Build businesses in women's health services, wellness, and beauty care.",
    },
  ],
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
  focusAreas: [
    "Women's Health and Beauty Care",
    "Midwifery Science and Technology",
    "Global Midwifery Entrepreneurship",
  ],
};
