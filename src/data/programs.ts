export interface Program {
  id: string;
  name: string;
  degree: string;
  subPrograms: string[];
  image: string;
  link: string;
}

export const programs: Program[] = [
  {
    id: 'biomedical-science',
    name: 'Biomedical Science',
    degree: 'S1',
    subPrograms: [
      'Biomedical Cell Therapy',
      'Biomedical Industry',
      'Biomedical AI',
    ],
    image: '/images/programs/biomedical.jpg',
    link: 'https://biomedical.kmb.ac.id/'
  },
  {
    id: 'biotechnology',
    name: 'Biotechnology',
    degree: 'S1',
    subPrograms: [
      'Medical Biotechnology',
      'Biotechnology Informatics',
      'Biotechnology Industry',
    ],
    image: '/images/programs/biotech.jpg',
    link: 'https://biotechnology.kmb.ac.id/'
  },
  {
    id: 'law',
    name: 'Hukum',
    degree: 'S1',
    subPrograms: ['Law & Litigation', 'Medical Law'],
    image: '/images/programs/law.jpg',
    link: 'https://law.kmb.ac.id/'
  },
  {
    id: 'management',
    name: 'Manajemen',
    degree: 'S1',
    subPrograms: [
      'International Business Management',
      'Digital Business Management',
      'Entrepreneur Business Management',
    ],
    image: '/images/programs/management.jpg',
    link: 'https://management.kmb.ac.id/'
  },
  {
    id: 'communication',
    name: 'Ilmu Komunikasi',
    degree: 'S1',
    subPrograms: [
      'Digital and New Media Communication Science',
      'Strategic Business Communication Science',
    ],
    image: '/images/programs/communication.jpg',
    link: 'https://communication.kmb.ac.id/'
  },
  {
    id: 'midwifery-s1',
    name: 'Kebidanan',
    degree: 'S1',
    subPrograms: [
      'Innovative Women Health & Beauty Care in Midwifery',
      'Entrepreneur in Midwifery Business',
    ],
    image: '/images/programs/midwiferys1.jpg',
    link: 'https://bachelor-midwifery.kmb.ac.id/'
  },

];
