import type { ImageMetadata } from 'astro';
import type { ProgramStrengthsBentoData } from '@data/program-strengths-bento';

export interface ScholarshipPageData {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    kicker: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: {
      label: string;
      href: string;
      target?: string;
      rel?: string;
    };
    ctaSecondary: {
      label: string;
      href: string;
    };
    bgImage: ImageMetadata;
  };
  about: {
    headline: string;
    description: string;
    benefitTitle?: string;
    benefitTiers?: string[];
    image: ImageMetadata;
    imageAlt: string;
    overlay?: {
      image: ImageMetadata;
      title: string;
      subtitle: string;
    };
  };
  eligibility?: ProgramStrengthsBentoData;
  requirements: {
    kicker: string;
    title: string;
    description: string;
    items: {
      number: string;
      title: string;
      description: string;
      icon: string;
    }[];
  };
  timeline: {
    kicker: string;
    title: string;
    description: string;
    steps: {
      number: string;
      title: string;
      description: string;
      icon: string;
    }[];
    contactCtaText: string;
    contactCtaButtonLabel: string;
  };
}
