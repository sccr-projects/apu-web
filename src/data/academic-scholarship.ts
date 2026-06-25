import type { ScholarshipPageData } from '@/types/scholarship-page';
import loby1 from '@/assets/images/loby1.webp';
import podiumstage from '@/assets/images/scholarship/podiumstage.webp';
import cap from '@/assets/images/scholarship/cap.webp';
import { contact } from '@data/contact';

export const academicScholarshipData: ScholarshipPageData = {
  meta: {
    title: 'Academic Scholarship | APU',
    description:
      'Apply for the APU Academic Scholarship 2026/2027. Get up to 50% tuition fee reduction for high-achieving students. Simple requirements, transparent process.',
  },
  hero: {
    kicker: 'ACADEMIC SCHOLARSHIP 2026/2027',
    title: 'Academic Scholarship',
    titleAccent: 'APU',
    subtitle:
      'Get up to 50% Tuition or Development Fee reduction for high-achieving students. Make your academic dreams a reality with APU.',
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
    headline: 'We reward academic excellence',
    description:
      'The APU Academic Scholarship is designed to recognize and support high-achieving students who want to continue their studies at a quality university.',
    image: podiumstage,
    imageAlt: 'Graduation podium stage',
    overlay: {
      image: cap,
      title: '50%',
      subtitle: 'Development Fee (SPI)',
    },
  },
  requirements: {
    kicker: 'REQUIREMENTS',
    title: 'Scholarship Eligibility Requirements',
    description:
      'Make sure you meet the following requirements before applying for the APU Academic Scholarship.',
    items: [
      {
        number: '01',
        title: 'SMA/SMK/Equivalent Graduate',
        description:
          'Graduate of SMA/SMK/equivalent or currently in Grade 12 in the current academic year.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 2.24 3 5 3s5-1.34 5-3v-5"/></svg>',
      },
      {
        number: '02',
        title: 'Minimum Report Card Average of 80',
        description:
          'Have a minimum report card average of 80 in the most recent or previous semester.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
      },
      {
        number: '03',
        title: 'Report Card/Transcript Copy',
        description:
          'Attach a copy of your report card or transcript that has been legalized as academic proof.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
      },
      {
        number: '04',
        title: 'Online Registration Form',
        description:
          'Fill out the online registration form through the APU scholarship portal with complete and valid data.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
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
          'Submit your scholarship application through the APU admission system. Complete your personal data, upload required documents, and select the academic scholarship pathway.',
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
    contactCtaButtonLabel: 'Contact Admissions Team',
  },
};
