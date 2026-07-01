import type { ImageMetadata } from "astro";
import biomedImg from "@/assets/images/programs/edit/biomed-c.png";
import biotechImg from "@/assets/images/programs/edit/biotech-c.png";
import lawImg from "@/assets/images/programs/edit/law-c.png";
import managementImg from "@/assets/images/programs/edit/management-c.png";
import communicationImg from "@/assets/images/programs/edit/communication-c.png";
import midwiferyImg from "@/assets/images/programs/edit/midwiferys1-c.png";

export interface Program {
  id: string;
  name: string;
  degree: string;
  subPrograms: string[];
  image: ImageMetadata;
  link: string;
  desc: string;
}

export const programs: Program[] = [
  {
    id: 'biomedical-science',
    name: 'Biomedical Science',
    degree: 'Bachelor',
    subPrograms: [
      'Biomedical Cell Therapy',
      'Biomedical Industry',
      'Biomedical AI',
    ],
    image: biomedImg,
    link: '/academic/biomedical',
    desc: 'Our biomedical program trains you to engineer life-saving medical technology. You will bridge the gap between complex human biology and mechanical design, building exact solutions like prosthetics, artificial organs, and diagnostic systems. This is a rigorous, high-stakes track designed for students who want their technical engineering skills to directly impact human survival and physical capability.',
  },
  {
    id: 'biotechnology',
    name: 'Biotechnology',
    degree: 'Bachelor',
    subPrograms: [
      'Medical Biotechnology',
      'Biotechnology Informatics',
      'Biotechnology Industry',
    ],
    image: biotechImg,
    link: '/academic/biotechnology',
    desc:'Biotechnology is the frontline of global survival and medical advancement. You will learn to manipulate cellular and molecular processes to engineer breakthrough therapeutics, sustainable agriculture, and advanced biomaterials. This program demands intense laboratory discipline, equipping you with the exact technical expertise required to drive commercial innovation and solve biological crises.'
  },
  {
    id: 'law',
    name: 'Law',
    degree: 'Bachelor',
    subPrograms: ['Law & Litigation', 'Medical Law'],
    image: lawImg,
    link: '/academic/law',
    desc:'Law is the operating system of society. This program strips away the abstract to teach you the exact mechanics of contracts, jurisprudence, and governance. You will learn to deconstruct complex regulatory frameworks, build ironclad arguments, and wield the legal system to enforce structure, defend rights, and drive corporate or societal accountability.'
  },
  {
    id: 'management',
    name: 'Management',
    degree: 'Bachelor',
    subPrograms: [
      'International Business Management',
      'Digital Business Management',
      'Entrepreneur Business Management',
    ],
    image: managementImg,
    link: '/academic/management',
    desc:'Businesses fail without structural discipline and precise resource allocation. Our management program delivers the exact operational frameworks required to scale organizations, optimize supply chains, and direct personnel. You will bypass corporate guesswork and learn the hard metrics of financial strategy, risk mitigation, and enterprise leadership required to drive market success.'
  },
  {
    id: 'communication',
    name: 'Communication Science',
    degree: 'Bachelor',
    subPrograms: [
      'Digital and New Media Communication Science',
      'Strategic Business Communication Science',
    ],
    image: communicationImg,
    link: '/academic/communication',
    desc: 'Information controls markets, politics, and culture. This program teaches the precise architecture of how messages are constructed, distributed, and absorbed across global networks. You will master data-driven strategies and behavioral psychology to shape public perception, manage corporate crises, and command audience action in a highly saturated digital economy.'
  },
  {
    id: 'midwifery-s1',
    name: 'Midwifery',
    degree: 'Bachelor & Diploma',
    subPrograms: [
      'Innovative Women Health & Beauty Care in Midwifery',
      'Entrepreneur in Midwifery Business',
    ],
    image: midwiferyImg,
    link: '/academic/midwifery-bachelor',
    desc:'Midwifery is specialized, frontline maternal healthcare. You will master the strict clinical protocols required to manage pregnancy, execute safe deliveries, and prevent maternal and infant mortality. This program demands absolute precision, rapid decision-making, and profound resilience, preparing you to act as the primary medical authority in the delivery room.'
  },

];
