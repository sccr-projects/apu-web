import type { ScholarshipPageData } from '@/types/scholarship-page';
import loby1 from '@/assets/images/loby1.webp';
import podiumstage from '@/assets/images/scholarship/podiumstage.webp';
import { contact } from '@data/contact';

const eligibilityIcons: Record<string, string> = {
  sports:
    '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  arts:
    '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  science:
    '<path d="M10 2v7.31"/><path d="M14 2v7.31"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/>',
  tech:
    '<rect width="18" height="12" x="3" y="4" rx="2" ry="2"/><line x1="2" x2="22" y1="20" y2="20"/>',
  leadership:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  award:
    '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
  tahfidz:
    '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',
};

export const nonAcademicScholarshipData: ScholarshipPageData = {
  meta: {
    title: 'Non-Academic Achievement Scholarship | APU',
    description:
      'Apply for the APU Non-Academic Achievement Scholarship 2026/2027. Get up to 100% SPI reduction for achievements in sports, arts, technology, leadership, and Tahfidz.',
  },
  hero: {
    kicker: 'NON-ACADEMIC ACHIEVEMENT SCHOLARSHIP 2026/2027',
    title: 'Non-Academic Achievement Scholarship',
    titleAccent: 'APU',
    subtitle:
      'Get up to 100% SPI tuition reduction for outstanding achievements in sports, arts, non-academic science competitions, technology & innovation, leadership & organization, and Tahfidz.',
    ctaPrimary: {
      label: 'Apply Now',
      href: contact.scholarshipLink,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    ctaSecondary: {
      label: 'View Requirements',
      href: '#requirements',
    },
    bgImage: loby1,
  },
  about: {
    headline: 'We celebrate talent beyond the classroom',
    description:
      'The Non-Academic Achievement Scholarship is designed for prospective students who demonstrate outstanding accomplishments beyond academic performance. This scholarship recognizes achievements in sports, arts, non-academic science competitions, technology and innovation, leadership, organizational involvement, and other officially recognized competitions. A special scheme is also available for students with excellence in Tahfidz (Qur’an memorization) as part of character strength and spiritual achievement.',
    benefitTitle: 'SPI Reduction Tiers',
    benefitTiers: [
      'Achievement-based scheme: International 100% SPI, National 75% SPI, Provincial 50% SPI, City/Regency 30% SPI, District/School 10% SPI.',
      'Tahfidz scheme: 30 Juz 100% SPI (UKT Semester 1–2 reduction subject to interview evaluation), 15 Juz 50% SPI, 10 Juz 35% SPI, <10 Juz 20% SPI.',
    ],
    image: podiumstage,
    imageAlt: 'Achievement podium stage',
  },
  eligibility: {
    kicker: 'ELIGIBLE CATEGORIES',
    title: 'Who Can Apply?',
    description:
      'The Non-Academic Achievement Scholarship is open to students with proven accomplishments in one or more of the following areas.',
    hint: 'Select a category to learn more.',
    featured: [
      {
        title: 'Sports',
        description:
          'Proven achievements in individual or team sports at school, district, city, provincial, national, or international level.',
        icon: 'sports',
      },
      {
        title: 'Arts',
        description:
          'Excellence in music, dance, theater, fine arts, or other recognized artistic fields.',
        icon: 'arts',
      },
      {
        title: 'Non-Academic Science Competitions',
        description:
          'Participation and awards in science, robotics, or other academic-adjacent competitions outside the classroom.',
        icon: 'science',
      },
      {
        title: 'Technology & Innovation',
        description:
          'Demonstrated work in technology, startups, invention, or applied innovation.',
        icon: 'tech',
      },
      {
        title: 'Leadership / Organization',
        description:
          'Active leadership or organizational experience such as OSIS, student council, or similar bodies.',
        icon: 'leadership',
      },
      {
        title: 'Officially Recognized Competitions',
        description:
          'Awards from government, institutional, or nationally recognized competitions.',
        icon: 'award',
      },
      {
        title: 'Tahfidz (Qur’an Memorization)',
        description:
          'Memorization of the Qur’an verified through official certification.',
        icon: 'tahfidz',
      },
    ],
    iconMap: eligibilityIcons,
  },
  requirements: {
    kicker: 'REQUIREMENTS',
    title: 'Scholarship Eligibility Requirements',
    description:
      'Make sure you meet the following requirements before applying for the APU Non-Academic Achievement Scholarship.',
    items: [
      {
        number: '01',
        title: 'SMA/SMK/Equivalent Graduate',
        description:
          'Graduated from SMA/SMK/equivalent or currently in Grade 12 in the current academic year.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 2.24 3 5 3s5-1.34 5-3v-5"/></svg>',
      },
      {
        number: '02',
        title: 'Achievement Within Last 3 Years',
        description:
          'Achievement must be obtained within the last 3 years (for non-academic categories).',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
      },
      {
        number: '03',
        title: 'Official Certificate or Award',
        description:
          'Provide official certificate, award letter, or recognition from an authorized institution.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
      },
      {
        number: '04',
        title: 'Tahfidz Certification',
        description:
          'For Tahfidz applicants, provide official Tahfidz certification stating the number of Juz memorized.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>',
      },
      {
        number: '05',
        title: 'Online Registration Form',
        description:
          'Fill out the online registration form through the APU scholarship portal with complete and valid data.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
      },
      {
        number: '06',
        title: 'Official Assessment Form',
        description:
          'All applicants are required to complete and upload the official assessment form provided.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/></svg>',
      },
    ],
  },
  timeline: {
    kicker: 'REGISTRATION PROCESS',
    title: '3 Steps to Your Scholarship',
    description:
      'Follow a transparent and structured scholarship registration process. We are ready to help at every stage.',
    steps: [
      {
        number: '01',
        title: 'Online Registration',
        description:
          'Submit your scholarship application through the APU admission system. Complete your personal data, upload required documents, and select the non-academic scholarship pathway.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
      },
      {
        number: '02',
        title: 'Announcement (D+7)',
        description:
          'The selection team will announce the results within a maximum of 7 working days after document verification. Monitor your email and applicant portal for status updates.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
      },
      {
        number: '03',
        title: 'Document Validation & NIM Issuance',
        description:
          'Once accepted, complete original document validation and pay the registration fee. Your Student Identification Number (NIM) will be issued after the validation process is complete.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/></svg>',
      },
    ],
    contactCtaText: 'Need help? Contact our admissions team via WhatsApp.',
  },
};
