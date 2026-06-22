export interface Scholarship {
  id: string;
  name: string;
  description: string;
  benefit: string;
  requirements: string[];
}

export const scholarships: Scholarship[] = [
  {
    id: 'akademik',
    name: 'Academic Scholarship',
    description:
      'For 12th-grade students with an average score above 80',
    benefit: 'Up to 50% SPI discount',
    requirements: [
      'Graduated from senior high school/vocational school/equivalent or currently in 12th grade.',
      'Minimum average score of 85 in specific subjects (depending on chosen study program)',
      'Overall report card average of 80',
      'Legalized photocopies of grade X–XII report cards',
      'Submit the online registration form',
    ],
  },
  {
    id: 'non-akademik',
    name: 'Non-Academic Scholarship',
    description:
      'For athletes, artists, and student organization achievers with at least city-level accomplishments',
    benefit: 'Up to 100% SPI discount',
    requirements: [
      'Graduated from senior high school/vocational school/equivalent or currently in 12th grade.',
      'Achievements must be obtained within the last 3 years (for the non-academic category)',
      'Original achievement certificates/awards',
      'Legalized photocopies of grade X–XII report cards',
      'Submit the online registration form',
    ],
  },
  {
    id: 'content-creator',
    name: 'Content Creator Scholarship',
    description:
      'For digital creators with ≥5,000 followers',
    benefit: 'SPI & tuition fee discount',
    requirements: [
      'Graduated from senior high school/vocational school/equivalent or currently in 12th grade.',
      'Have an active account with authentic engagement',
      'Minimum 10,000 followers (Instagram/TikTok/YouTube)',
      'Submit social media analytics data if requested',
      'Legalized photocopies of grade X–XII report cards',
      'Submit the online registration form',
    ],
  },
  {
    id: 'partnership',
    name: 'Partnership Scholarship',
    description:
      'Collaborative scholarship with partner institutions—corporates, local governments, and public health organizations—to expand access to higher education and develop competitive human resources.',
    benefit: '100% UKT + SPI coverage up to 4 years',
    requirements: [
      'Graduated from senior high school/vocational school/equivalent or currently in 12th grade.',
      'Minimum average score of 85 in selected major subjects (e.g. Mathematics, Biology, Sociology depending on study program)',
      'Overall report card average of 80',
      'Submit academic transcripts/report cards and the online registration form',
      'Complete and upload the official assessment form provided',
    ],
  },
  {
    id: 'pre-university',
    name: 'Pre-University Scholarship',
    description: 'University preparation program with early academic support',
    benefit: 'Up to 50% SPI discount',
    requirements: [
      '12th-grade student (senior high/vocational/equivalent) or graduated within the last 2 years.',
      'Attend at least 4 Pre-University lecture sessions',
      'Active participation and punctuality in the Pre-University program',
      'Submit the online registration form',
    ],
  },
];
