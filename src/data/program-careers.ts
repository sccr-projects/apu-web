export interface CareerPath {
  title: string;
  description: string;
}

export interface ProgramCareersData {
  kicker?: string;
  title?: string;
  description: string;
  gridClass: string;
  careerPaths: CareerPath[];
  careerIcons: string[];
}

const genericCareerIcons = [
  // file/document
  '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>',
  // shield
  '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  // monitor
  '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
  // lock/briefcase
  '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  // check
  '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  // network/kaleidoscope
  '<path d="M12 2v20"/><path d="M2 12h20"/><path d="m4.93 4.93 14.14 14.14"/><path d="m19.07 4.93-14.14 14.14"/>',
];

const biotechCareerIcons = [
  // Biotechnology Research Scientist - microscope
  '<path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 0 0 7-7h-4a3 3 0 0 1-3 3Z"/><path d="M9 14 4 9l2-2 5 5Z"/><path d="m11 12 4-4"/><path d="m13 6 3 3"/><path d="M16 3l5 5"/>',

  // Regulatory Affairs Specialist - shield check
  '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',

  // Bioinformatics Analyst - dna + data nodes
  '<path d="M4 14c5-5 11 5 16 0"/><path d="M4 10c5 5 11-5 16 0"/><path d="M8 12h8"/><circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 7.5 16 16.5"/>',

  // Biotech Data Specialist - database lock
  '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3 1.1 0 2.2-.1 3.1-.3"/><rect x="15" y="14" width="6" height="7" rx="1"/><path d="M17 14v-2a2 2 0 0 1 4 0v2"/>',

  // Quality Assurance & Quality Control Specialist - clipboard check
  '<rect x="4" y="4" width="16" height="18" rx="2"/><path d="M9 2h6a2 2 0 0 1 2 2v2H7V4a2 2 0 0 1 2-2Z"/><path d="m8 14 2.5 2.5L16 11"/><path d="M8 19h8"/>',

  // Industrial Bioprocess Developer - factory + leaf
  '<path d="M3 21h18"/><path d="M5 21V9l5 4V9l5 4V5a2 2 0 0 1 2-2h2v18"/><path d="M8 17h1"/><path d="M12 17h1"/><path d="M16 17h1"/><path d="M18 8c-3 0-5 2-5 5 3 0 5-2 5-5Z"/>',
];

export const biomedicalCareers: ProgramCareersData = {
  kicker: "CAREERS",
  title: "Career Opportunities",
  description:
    "APU Biomedical Science graduates are ready to build careers across biomedical research, clinical development, and healthcare innovation sectors.",
  gridClass: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
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
  careerIcons: genericCareerIcons,
};

export const biotechnologyCareers: ProgramCareersData = {
  kicker: "CAREERS",
  title: "Career Opportunities",
  description:
    "APU Biotechnology graduates are ready to build careers across industry and research sectors",
  gridClass: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
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
  careerIcons: biotechCareerIcons,
};

export const communicationCareers: ProgramCareersData = {
  kicker: "CAREERS",
  title: "Career Opportunities",
  description:
    "APU Communication Science graduates are ready to build careers across digital communication and creative industry",
  gridClass: "grid-cols-1 md:grid-cols-2",
  careerPaths: [
    {
      title: "Multimedia Specialist (Journalist and Editor)",
      description:
        "Designs, produces, and manages multimedia content (audio, audiovisual, and written) for cross-platform mass communication. They play a key role in production and editing, such as journalists, writers, videographers, or editors.",
    },
    {
      title: "Media and Content Innovator",
      description:
        "Content innovators design creative concepts and manage the entire media production cycle, from pre-production to multi-platform distribution. They develop new ideas, develop communication strategies, and integrate various forms of content to enhance the value and appeal of media.",
    },
    {
      title: "Digital Communication Entrepreneur",
      description:
        "Building and developing businesses based on digital media and communication technology, such as startups, digital agencies, and professional personal brands.",
    },
    {
      title: "Public Relations Specialist/Agency",
      description:
        "Designs, implements, and evaluates communication strategies to build reputation and positive public relations.",
    },
  ],
  careerIcons: genericCareerIcons,
};

export const lawCareers: ProgramCareersData = {
  kicker: "CAREERS",
  title: "Career Opportunities",
  description:
    "APU Law graduates are prepared to pursue careers in legal practice, advocacy, corporate law, governance, public institutions, and justice sectors.",
  gridClass: "grid-cols-1 md:grid-cols-2",
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
  careerIcons: genericCareerIcons,
};

export const managementCareers: ProgramCareersData = {
  kicker: "CAREERS",
  title: "Career Opportunities",
  description:
    "APU Biotechnology graduates are ready to build careers across industry and research sectors",
  gridClass: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  careerPaths: [
    {
      title: "Research Scientist",
      description:
        "Research and development in pharmaceutical, food, and health biotechnology laboratories.",
    },
    {
      title: "Clinical Regulator",
      description:
        "Regulation and oversight of biomedical products to ensure safety and quality.",
    },
    {
      title: "Bioinformatics Expert",
      description:
        "Biological data analysis, computational modeling, and genomic algorithm development.",
    },
    {
      title: "Data Security Specialist",
      description:
        "Research data and health information security within the digital biotechnology ecosystem.",
    },
    {
      title: "Quality Assurance Professional",
      description:
        "Quality assurance for biotechnology products according to GLP, GMP, and international standards.",
    },
    {
      title: "Industrial Biotech Developer",
      description:
        "Product and process development in green and sustainable biotechnology industries.",
    },
  ],
  careerIcons: genericCareerIcons,
};

export const midwiferyAssociateCareers: ProgramCareersData = {
  kicker: "CAREERS",
  title: "Career Opportunities",
  description:
    "APU Midwifery graduates are ready to build careers in hospitals, clinics, maternity centers, community health services, reproductive health programs, and professional midwifery practice.",
  gridClass: "grid-cols-1 md:grid-cols-2",
  careerPaths: [
    {
      title: "Care Provider",
      description:
        "Able to provide comprehensive, high-quality midwifery care, focusing on integrated health services across the woman's life cycle.",
    },
    {
      title: "Care Provider for International Customer",
      description:
        "Ability to work in internationally recognized healthcare settings, both domestically and internationally. Strengthen international standards and respect cultural diversity and global healthcare systems.",
    },
    {
      title: "Educator",
      description:
        "Actively participate in efforts to improve maternal and child health through health promotion, public education, and global insight-based advocacy. Continue studies in midwifery to advance scientific knowledge.",
    },
  ],
  careerIcons: genericCareerIcons,
};

export const midwiferyBachelorCareers: ProgramCareersData = {
  kicker: "CAREERS",
  title: "Career Opportunities",
  description:
    "APU Law graduates are prepared to pursue careers in legal practice, advocacy, corporate law, governance, public institutions, and justice sectors.",
  gridClass: "grid-cols-1 md:grid-cols-2",
  careerPaths: [
    {
      title: "Multimedia Specialist (Journalist and Editor)",
      description:
        "Designs, produces, and manages multimedia content (audio, audiovisual, and written) for cross-platform mass communication. They play a key role in production and editing, such as journalists, writers, videographers, or editors.",
    },
    {
      title: "Media and Content Innovator",
      description:
        "Content innovators design creative concepts and manage the entire media production cycle, from pre-production to multi-platform distribution. They develop new ideas, develop communication strategies, and integrate various forms of content to enhance the value and appeal of media.",
    },
    {
      title: "Digital Communication Entrepreneur",
      description:
        "Building and developing businesses based on digital media and communication technology, such as startups, digital agencies, and professional personal brands.",
    },
    {
      title: "Public Relations Specialist/Agency",
      description:
        "Designs, implements, and evaluates communication strategies to build reputation and positive public relations.",
    },
  ],
  careerIcons: genericCareerIcons,
};
