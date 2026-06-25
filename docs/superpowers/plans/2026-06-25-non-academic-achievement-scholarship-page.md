# Non-Academic Achievement Scholarship Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a new `/admission/non-academic-achievement-scholarship` page that reuses the Academic Scholarship page design, refactors the shared scholarship sections to be data-driven, and adds a bento-style eligibility section for the seven achievement categories.

**Architecture:** Keep the existing `src/sections/scholarship/*.astro` visual design but make them accept typed data props. Introduce a shared `ScholarshipPageData` type and per-page data files (`academic-scholarship.ts`, `non-academic-scholarship.ts`). Add a new `EligibilitySection.astro` based on `ProgramStrengthsBentoSection.astro`.

**Tech Stack:** Astro 6, TypeScript, Tailwind CSS v4, Bun.

---

## File Structure

| File | Responsibility |
|------|----------------|
| `src/types/scholarship-page.ts` | Shared `ScholarshipPageData` interface used by both scholarship pages. |
| `src/data/academic-scholarship.ts` | Content object for the existing Academic Scholarship page. |
| `src/data/non-academic-scholarship.ts` | Content object for the new Non-Academic Achievement Scholarship page. |
| `src/sections/scholarship/ScholarshipHero.astro` | Hero section; refactored to accept hero data. |
| `src/sections/scholarship/ScholarshipAbout.astro` | About section; refactored to accept about data. |
| `src/sections/scholarship/EligibilitySection.astro` | New bento-style eligibility categories section. |
| `src/sections/scholarship/ScholarshipRequirements.astro` | Requirements section; refactored to accept requirements data. |
| `src/sections/scholarship/ScholarshipTimeline.astro` | Timeline section; refactored to accept timeline data. |
| `src/pages/admission/academic-scholarship.astro` | Existing page; updated to import and pass academic data. |
| `src/pages/admission/non-academic-achievement-scholarship.astro` | New page; imports non-academic data and all sections. |

---

### Task 1: Create the shared scholarship page type

**Files:**
- Create: `src/types/scholarship-page.ts`

- [ ] **Step 1: Write the type file**

```ts
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
  };
}
```

- [ ] **Step 2: Commit**

```bash
git add src/types/scholarship-page.ts
git commit -m "types: add ScholarshipPageData interface"
```

---

### Task 2: Create the Academic Scholarship data file

**Files:**
- Create: `src/data/academic-scholarship.ts`

- [ ] **Step 1: Write the data file**

```ts
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
  },
};
```

- [ ] **Step 2: Commit**

```bash
git add src/data/academic-scholarship.ts
git commit -m "data: add academic scholarship page data"
```

---

### Task 3: Refactor `ScholarshipHero.astro` to accept data props

**Files:**
- Modify: `src/sections/scholarship/ScholarshipHero.astro`

- [ ] **Step 1: Replace the frontmatter and hero content**

Replace the entire file with:

```astro
---
import { Image } from "astro:assets";
import CtaButton from "@components/CtaButton.astro";
import type { ScholarshipPageData } from "@/types/scholarship-page";

interface Props {
  data: ScholarshipPageData["hero"];
}

const { data } = Astro.props;
---

<section
  id="home"
  class="scholarship-hero relative min-h-[100dvh] flex items-end overflow-hidden"
>
  <!-- Background Image with Parallax -->
  <div
    id="scholarship-hero-bg"
    class="absolute inset-0 z-[1] will-change-transform opacity-0 scale-[1.04]"
  >
    <Image
      src={data.bgImage}
      alt="Agung Putra University Campus"
      class="w-full h-full object-cover"
      loading="eager"
      id="scholarship-hero-bg-img"
    />
    <div class="absolute inset-0 scholarship-hero-overlay-main"></div>
    <div class="absolute inset-0 scholarship-hero-overlay-side"></div>
    <div class="absolute inset-0 scholarship-hero-overlay-soft"></div>
  </div>

  <!-- Floating Particles -->
  <div
    id="scholarship-hero-particles"
    class="absolute inset-0 z-[2] overflow-hidden pointer-events-none"
  ></div>

  <!-- Content -->
  <div class="relative z-[3] w-full pb-20">
    <div class="px-6 md:px-16 lg:px-28 flex flex-col items-start gap-10">
      <div>
        <div id="scholarship-hero-kicker" class="mb-6 opacity-0 translate-y-2">
          <span class="scholarship-hero-kicker-text">{data.kicker}</span>
        </div>

        <h1
          id="scholarship-hero-headline"
          class="text-h1 mb-6 max-w-4xl opacity-0 translate-y-3 scholarship-hero-headline"
        >
          <span class="block">{data.title}</span>
          <span class="block"
            ><span class="text-brand-accent-soft">{data.titleAccent}</span></span
          >
        </h1>

        <p
          id="scholarship-hero-subtitle"
          class="text-body max-w-2xl mb-10 opacity-0 translate-y-2 scholarship-hero-subtitle"
        >
          {data.subtitle}
        </p>

        <div
          id="scholarship-hero-cta"
          class="flex flex-wrap gap-4 opacity-0 translate-y-2"
        >
          <CtaButton
            href={data.ctaPrimary.href}
            target={data.ctaPrimary.target}
            rel={data.ctaPrimary.rel}
            variant="primary"
            withArrow={true}
          >
            <span>{data.ctaPrimary.label}</span>
          </CtaButton>
          <CtaButton href={data.ctaSecondary.href} variant="secondary">
            <span>{data.ctaSecondary.label}</span>
          </CtaButton>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      id="scholarship-hero-scroll"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
    >
      <span class="text-caption scholarship-hero-scroll-text"
        >Scroll to explore</span
      >
      <svg
        class="animate-bounce-slow scholarship-hero-scroll-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><path d="m6 9 6 6 6-6"></path></svg
      >
    </div>
  </div>
</section>

<style>
  .scholarship-hero {
    --hero-navy: #132842;
    --hero-navy-deep: #0b1f35;
    --hero-navy-soft: #274977;
    --hero-orange: #f4bf61;
    --hero-orange-soft: #ffd992;
    --hero-ivory: #fffaf0;
    --hero-accent: #fcbc55;

    --apu-surface: 255 250 240;
    --apu-navy: 19 40 66;
    --apu-accent: 252 188 85;
    --apu-text: 255 250 240;
    --apu-text-muted: 239 232 218;
    --apu-border: 255 255 255;
  }

  .scholarship-hero-overlay-main {
    background: linear-gradient(
      to top,
      rgb(244 191 97 / 0.58),
      rgb(21 48 87 / 0.42),
      transparent
    );
  }
  .scholarship-hero-overlay-side {
    background: linear-gradient(
      to right,
      rgb(15 39 71 / 0.36),
      transparent,
      rgb(15 39 71 / 0.36)
    );
  }
  .scholarship-hero-overlay-soft {
    background: rgb(250 246 238 / 0.18);
  }

  .scholarship-hero-kicker-text,
  .scholarship-hero-subtitle,
  .scholarship-hero-scroll-text,
  .scholarship-hero-scroll-icon {
    color: var(--hero-ivory);
  }

  .scholarship-hero-kicker-text {
    display: inline-flex;
    align-items: center;
    border: 1px solid rgb(252 188 85 / 0.45);
    border-radius: 999px;
    padding: 0.45rem 0.9rem;
    background: rgb(255 250 240 / 0.1);
    font-family: "Space Mono", monospace;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.28em;
    text-transform: uppercase;
  }

  .scholarship-hero-headline {
    color: var(--hero-ivory);
    text-shadow: 0 8px 26px rgb(15 39 71 / 0.3);
  }
</style>

<script>
  (function () {
    let abortController = null;
    let rafId = null;

    function cleanup() {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      if (abortController) {
        abortController.abort();
        abortController = null;
      }
    }

    function initHero() {
      cleanup();
      abortController = new AbortController();
      const signal = abortController.signal;

      const particleContainer = document.getElementById("scholarship-hero-particles");
      if (particleContainer) {
        for (let i = 0; i < 30; i++) {
          const particle = document.createElement("div");
          const size = Math.random() * 3 + 1;
          particle.className = "absolute rounded-full";
          particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            background: rgba(255, 223, 153, 0.3);
            animation: scholarshipHeroFloat ${Math.random() * 6 + 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
          `;
          particleContainer.appendChild(particle);
        }
      }

      if (!document.getElementById("scholarship-hero-animations")) {
        const style = document.createElement("style");
        style.id = "scholarship-hero-animations";
        style.textContent = `
          @keyframes scholarshipHeroFloat {
            0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
            25% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
            50% { transform: translateY(-40px) translateX(-5px); opacity: 0.3; }
            75% { transform: translateY(-20px) translateX(15px); opacity: 0.4; }
          }
        `;
        document.head.appendChild(style);
      }

      const bg = document.getElementById("scholarship-hero-bg");
      const kicker = document.getElementById("scholarship-hero-kicker");
      const headline = document.getElementById("scholarship-hero-headline");
      const subtitle = document.getElementById("scholarship-hero-subtitle");
      const cta = document.getElementById("scholarship-hero-cta");
      const scrollIndicator = document.getElementById("scholarship-hero-scroll");
      const bgImg = document.getElementById("scholarship-hero-bg-img");

      document.fonts.ready.then(() => {
        if (bg) {
          bg.style.transition = "opacity 2.2s ease-out, transform 2.6s ease-out";
          bg.style.opacity = "1";
          bg.style.transform = "scale(1)";
        }

        setTimeout(() => {
          if (kicker) {
            kicker.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            kicker.style.opacity = "1";
            kicker.style.transform = "translateY(0)";
          }
        }, 450);

        setTimeout(() => {
          if (headline) {
            headline.style.transition = "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)";
            headline.style.opacity = "1";
            headline.style.transform = "translateY(0)";
          }
        }, 760);

        setTimeout(() => {
          if (subtitle) {
            subtitle.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            subtitle.style.opacity = "1";
            subtitle.style.transform = "translateY(0)";
          }
        }, 1120);

        setTimeout(() => {
          if (cta) {
            cta.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            cta.style.opacity = "1";
            cta.style.transform = "translateY(0)";
          }
        }, 1480);

        setTimeout(() => {
          if (scrollIndicator) {
            scrollIndicator.style.transition = "opacity 0.6s ease-out";
            scrollIndicator.style.opacity = "1";
          }
        }, 2100);
      });

      let mouseX = 0;
      let mouseY = 0;
      let currentX = 0;
      let currentY = 0;

      document.addEventListener("mousemove", (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
      }, { signal });

      function animateParallax() {
        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;
        if (bgImg) {
          bgImg.style.transform = `translate(${currentX}px, ${currentY}px) scale(1.05)`;
        }
        rafId = requestAnimationFrame(animateParallax);
      }
      animateParallax();

      let ticking = false;
      window.addEventListener(
        "scroll",
        () => {
          if (!ticking) {
            requestAnimationFrame(() => {
              const scrollY = window.scrollY;
              const heroHeight =
                document.querySelector("#home")?.clientHeight || window.innerHeight;
              const progress = Math.min(scrollY / heroHeight, 1);

              if (headline) {
                const scale = 1 - progress * 0.08;
                const yOffset = -progress * 12;
                const opacity = 1 - progress * 0.85;
                headline.style.transform = `scale(${scale}) translateY(${yOffset}%)`;
                headline.style.opacity = String(Math.max(opacity, 0));
              }

              if (kicker) {
                kicker.style.transform = `translateY(${-progress * 25}%)`;
                kicker.style.opacity = String(Math.max(1 - progress, 0));
              }

              if (scrollIndicator) {
                scrollIndicator.style.opacity = String(Math.max(1 - progress * 3, 0));
              }

              ticking = false;
            });
            ticking = true;
          }
        },
        { passive: true, signal }
      );
    }

    document.addEventListener("astro:page-load", initHero);
    document.addEventListener("astro:before-swap", cleanup);
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initHero);
    } else {
      initHero();
    }
  })();
</script>
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/scholarship/ScholarshipHero.astro
git commit -m "refactor(sections): make ScholarshipHero data-driven"
```

---

### Task 4: Refactor `ScholarshipAbout.astro` to accept data props

**Files:**
- Modify: `src/sections/scholarship/ScholarshipAbout.astro`

- [ ] **Step 1: Replace the file**

```astro
---
import { Image } from "astro:assets";
import ScrollReveal from "@components/ScrollReveal.astro";
import type { ScholarshipPageData } from "@/types/scholarship-page";

interface Props {
  data: ScholarshipPageData["about"];
}

const { data } = Astro.props;
---

<section
  id="about"
  class="apu-section-shell relative isolate overflow-hidden bg-gradient-to-b from-brand-surface via-[rgb(var(--color-apu-navy)_/_0.03)] to-brand-surface-alt pt-24 md:pt-32 before:content-[''] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgb(var(--color-apu-accent)_/_0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgb(var(--color-apu-navy)_/_0.16),transparent_38%)] after:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[rgb(var(--color-apu-accent)_/_0.65)] after:to-transparent"
>
  <Image
    src={data.image}
    alt={data.imageAlt}
    loading="eager"
    class="absolute object-cover w-full h-full top-0"
  />
  <div class="pointer-events-none absolute inset-0 overflow-hidden">
    <div class="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[rgb(var(--color-apu-accent)_/_0.14)] blur-3xl"></div>
    <div class="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[rgb(var(--color-apu-navy)_/_0.12)] blur-3xl"></div>
  </div>

  <div class="relative z-10">
    <!-- Heading + subtitle -->
    <ScrollReveal class="flex justify-center">
      <div class="text-center mb-10 md:mb-2 backdrop-blur-sm w-fit p-6 rounded-xl self-center">
        <h2 class="text-h2 text-apu-accent mb-4 text-shadow-sm text-shadow-blue-950">
          {data.headline}
        </h2>
        <p class="text-body text-gray-100 text-shadow-blue-950 text-shadow-sm max-w-2xl mx-auto text-2xl font-semibold leading-relaxed">
          {data.description}
        </p>
        {
          data.benefitTitle && data.benefitTiers && data.benefitTiers.length > 0 && (
            <div class="mt-6 text-left inline-block">
              <h3 class="text-body-s font-semibold text-apu-accent mb-2">{data.benefitTitle}</h3>
              <ul class="space-y-1">
                {data.benefitTiers.map((tier) => (
                  <li class="text-body-s text-gray-100 text-shadow-blue-950 text-shadow-sm">{tier}</li>
                ))}
              </ul>
            </div>
          )
        }
      </div>
    </ScrollReveal>

    <!-- Optional overlay illustration -->
    {
      data.overlay && (
        <ScrollReveal delay={150}>
          <div
            class="flex flex-col items-center"
            role="img"
            aria-label={data.imageAlt}
          >
            <div class="relative z-10 mb-[-1.25rem] md:mb-[-14rem]">
              <Image
                src={data.overlay.image}
                alt=""
                loading="eager"
                class="w-64 h-auto md:w-[47rem] drop-shadow-lg justify-center relative"
              />
              <div
                class="pointer-events-none flex flex-col text-center justify-center absolute left-1/2 top-[25%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-4xl md:text-9xl font-bold font-sans bg-gradient-to-r from-[rgb(var(--color-apu-accent))] to-[rgb(var(--color-semantic-accent))] backdrop-blur-sm bg-clip-text text-transparent drop-shadow-sm"
              >
                <p>{data.overlay.title}</p>
                <p class="text-lg md:text-xl">{data.overlay.subtitle}</p>
              </div>
            </div>

            <div class="flex w-full items-end">
              <div class="flex grow h-20 md:h-48 items-center justify-center border border-[rgb(var(--color-brand-border)_/_0.5)] bg-[rgb(var(--color-brand-surface-soft))] shadow-[0_8px_24px_rgb(var(--color-apu-navy)_/_0.08)]">
                <span class="font-display text-2xl md:text-3xl font-semibold text-brand-text-muted">2</span>
              </div>
              <div class="flex grow h-32 md:h-80 items-center justify-center border border-[rgb(var(--color-apu-accent)_/_0.8)] bg-[rgb(var(--color-apu-accent))] shadow-[0_12px_32px_rgb(var(--color-apu-navy)_/_0.12)]">
                <span class="font-display text-4xl md:text-5xl font-semibold text-[rgb(var(--color-apu-navy))]">1</span>
              </div>
              <div class="flex grow h-16 md:h-36 items-center justify-center border border-[rgb(var(--color-semantic-accent)_/_0.8)] bg-[rgb(var(--color-semantic-accent))] shadow-[0_8px_24px_rgb(var(--color-apu-navy)_/_0.08)]">
                <span class="font-display text-2xl md:text-3xl font-semibold text-[rgb(var(--color-apu-navy))]">3</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      )
    }
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/scholarship/ScholarshipAbout.astro
git commit -m "refactor(sections): make ScholarshipAbout data-driven"
```

---

### Task 5: Create `EligibilitySection.astro`

**Files:**
- Create: `src/sections/scholarship/EligibilitySection.astro`
- Reference: `src/sections/academic/program/ProgramStrengthsBentoSection.astro`

- [ ] **Step 1: Copy and adapt the bento section**

```astro
---
import ScrollReveal from "@components/ScrollReveal.astro";
import SectionHeader from "@components/SectionHeader.astro";
import BackgroundBlobs from "@components/BackgroundBlobs.astro";
import type { ProgramStrengthsBentoData } from "@data/program-strengths-bento";
import { defaultStrengthsBentoStageMinHeightClass } from "@data/program-strengths-bento";

interface Props {
  data: ProgramStrengthsBentoData;
}

const { data } = Astro.props;
const { kicker, title, description, hint, featured, iconMap } = data;
const stageMinHeightClass = data.stageMinHeightClass ?? defaultStrengthsBentoStageMinHeightClass;
const fallbackIcon = Object.keys(iconMap)[0] ?? "sports";
---

<section
  id="eligible-categories"
  class="apu-section-shell py-24 md:py-32 bg-gradient-to-b from-brand-surface via-brand-surface-alt to-brand-surface-soft"
  data-bento-section
  data-icon-map={JSON.stringify(iconMap)}
>
  <BackgroundBlobs seed="EligibilitySection" />
  <div class="content-max relative z-10">
    <ScrollReveal>
      <SectionHeader
        kicker={kicker}
        title={title}
        description={description}
        class="text-center mb-12"
        titleClass="text-h2 text-[rgb(var(--color-apu-navy))] mb-4"
      />
    </ScrollReveal>

    <!-- Stage -->
    <div
      class:list={[
        "bento-stage",
        "apu-glass-card",
        "relative",
        "mb-8",
        "flex",
        "flex-col",
        "p-4",
        "md:p-6",
        stageMinHeightClass,
      ]}
      data-bento-stage
    >
      <!-- Panels -->
      <div class="bento-panels grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-1">
        <div
          class="bento-panel-left apu-glass-card opacity-0 pointer-events-none transition-opacity duration-500 p-6 md:p-8 flex flex-col justify-center"
          data-panel="left"
        >
          <p class="text-body-s text-[1.2cqw] text-brand-text-muted leading-relaxed" data-desc-text></p>
        </div>
        <div
          class="bento-panel-right apu-glass-card opacity-0 pointer-events-none transition-opacity duration-500 p-6 md:p-8 flex flex-col justify-center"
          data-panel="right"
        >
          <p class="text-body-s text-[1.2cqw] text-brand-text-muted leading-relaxed" data-desc-text></p>
        </div>
      </div>

      <!-- Empty-state hint -->
      <div
        class="bento-hint absolute inset-0 flex items-center justify-center text-center p-6 transition-opacity duration-300"
        data-bento-hint
      >
        <p class="text-body-s text-brand-text-muted">
          {hint}
        </p>
      </div>

      <!-- Moving clone container -->
      <div class="bento-clone-layer absolute inset-0 pointer-events-none" data-clone-layer></div>
    </div>

    <!-- Bottom row -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" data-bento-row>
      {
        featured.map((item, index) => {
          const number = (index + 1).toString().padStart(2, "0");
          const isRightHalf = index >= 2;
          return (
            <button
              type="button"
              class="bento-trigger apu-glass-card apu-interactive-card text-left p-5 md:p-6 min-h-[140px] md:min-h-[160px] flex flex-col"
              data-bento-trigger
              data-index={index}
              data-title={item.title}
              data-description={item.description}
              data-icon={item.icon}
              data-number={number}
              data-expand-to={isRightHalf ? "left" : "right"}
              aria-expanded="false"
            >
              <span class="text-mono text-[rgb(var(--color-apu-navy))] mb-3">{number}</span>
              <div class="apu-icon-chip h-10 w-10 rounded-lg flex-shrink-0 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                  set:html={iconMap[item.icon] || iconMap[fallbackIcon]}
                />
              </div>
              <h3 class="font-semibold font-epilogue text-brand-primary-deep text-base">{item.title}</h3>
            </button>
          );
        })
      }
    </div>
  </div>
</section>

<style>
.bento-clone h3,
.bento-clone .apu-icon-chip,
.bento-clone .apu-icon-chip svg,
.bento-clone [class*="text-mono"] {
  transition: font-size 500ms cubic-bezier(0.4, 0, 0.2, 1),
  width 500ms cubic-bezier(0.4, 0, 0.2, 1),
  height 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

.bento-clone {
    transition: 500ms ;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.bento-clone h3 {
    font-size: 1.5rem ;
}

.bento-clone.is-expanded {
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem
    }
}

.bento-clone.is-expanded h3 {
  font-size: 2.5rem ;
  @media screen and (max-width: 768px) {
      font-size: 1.2rem ;
  }
}

.bento-clone .apu-icon-chip {
  width: 3.5rem;
  height: 3.5rem;
}

.bento-clone.is-expanded .apu-icon-chip {
  width: 8rem ;
  height: 8rem ;
  @media screen and (max-width: 768px) {
      width: 3rem;
      height: 3rem;
  }
}

.bento-clone .apu-icon-chip svg {
  width: 80%;
  height: 80%;
}

.bento-clone.is-expanded .apu-icon-chip svg {
  width: 80% ;
  height: 80% ;
  @media screen and (max-width: 768px) {
    width: 50%;
    height: 50%;
  }
}

.bento-clone [class*="text-mono"] {
  font-size: 1rem;
}
.bento-clone.is-expanded [class*="text-mono"] {
  font-size: 2rem ;
  @media screen and (max-width: 768px) {
      font-size: 1rem ;
  }
}

@media (max-width: 1023px) {
  .bento-stage {
    min-height: 200px;
  }
  .bento-panels {
    flex: none;
    display: block;
  }
  .bento-panels > .opacity-0 {
    display: none;
  }
  .bento-panel-left:not(.opacity-0),
  .bento-panel-right:not(.opacity-0) {
    display: flex;
    animation: bentoFadeIn 300ms ease-out;
  }
  .bento-panel-left,
  .bento-panel-right {
    padding: 1rem;
  }
}

@keyframes bentoFadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<script is:inline data-astro-rerun>
  (function () {
    const section = document.querySelector('[data-bento-section]');
    if (!section) return;

    const stage = section.querySelector('[data-bento-stage]');
    const cloneLayer = section.querySelector('[data-clone-layer]');
    const hint = section.querySelector('[data-bento-hint]');
    const leftPanel = section.querySelector('[data-panel="left"]');
    const rightPanel = section.querySelector('[data-panel="right"]');
    const triggers = Array.from(section.querySelectorAll('[data-bento-trigger]'));

    if (!stage || !cloneLayer || !hint || !leftPanel || !rightPanel || triggers.length === 0) return;

    let activeIndex = null;
    let clone = null;
    let isAnimating = false;
    const isMobile = window.innerWidth < 1024;

    var iconPaths = {};
    try {
      iconPaths = JSON.parse(section.dataset.iconMap || '{}');
    } catch (e) {
      iconPaths = {};
    }

    function hideHint() {
      hint.style.opacity = '0';
      hint.style.pointerEvents = 'none';
    }

    function showHint() {
      hint.style.opacity = '1';
      hint.style.pointerEvents = 'auto';
    }

    function hidePanels() {
      leftPanel.classList.add('opacity-0', 'pointer-events-none');
      rightPanel.classList.add('opacity-0', 'pointer-events-none');
    }

    function showPanel(side, number, description, icon, title) {
      const panel = side === 'left' ? leftPanel : rightPanel;
      const other = side === 'left' ? rightPanel : leftPanel;
      var numberEl = panel.querySelector('[data-desc-number]');
      var textEl = panel.querySelector('[data-desc-text]');
      var iconEl = panel.querySelector('[data-desc-icon]');
      var titleEl = panel.querySelector('[data-desc-title]');
      if (numberEl) numberEl.textContent = number;
      if (textEl) textEl.textContent = description;
      if (iconEl && icon) iconEl.innerHTML = iconPaths[icon] || '';
      if (titleEl) titleEl.textContent = title || '';
      other.classList.add('opacity-0', 'pointer-events-none');
      panel.classList.remove('opacity-0', 'pointer-events-none');
    }

    function createClone(trigger) {
      const rect = trigger.getBoundingClientRect();
      const stageRect = stage.getBoundingClientRect();
      const el = trigger.cloneNode(true);
      el.classList.add('bento-clone');
      el.classList.remove('apu-interactive-card');
      el.style.position = 'absolute';
      el.style.top = rect.top - stageRect.top + 'px';
      el.style.left = rect.left - stageRect.left + 'px';
      el.style.width = rect.width + 'px';
      el.style.height = rect.height + 'px';
      el.style.margin = '0';
      el.style.transition = 'none';
      el.style.zIndex = '20';
      el.style.pointerEvents = 'auto';
      el.setAttribute('aria-expanded', 'true');

      const close = document.createElement('button');
      close.type = 'button';
      close.className = 'absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-[rgb(var(--color-apu-navy))] text-[rgb(var(--color-apu-accent))] text-lg leading-none';
      close.setAttribute('aria-label', 'Close detail');
      close.innerHTML = '&times;';
      close.addEventListener('click', function (e) {
        e.stopPropagation();
        closeExpanded();
      });
      el.appendChild(close);

      return el;
    }

    function removeClone() {
      if (clone) {
        clone.remove();
        clone = null;
      }
    }

    function collapseActive(onDone) {
      if (activeIndex === null) {
        if (onDone) onDone();
        return;
      }
      const trigger = triggers[activeIndex];
      if (!trigger) {
        removeClone();
        activeIndex = null;
        if (onDone) onDone();
        return;
      }
      const sourceRect = trigger.getBoundingClientRect();
      const stageRect = stage.getBoundingClientRect();

      if (isMobile) {
        removeClone();
        trigger.classList.remove('opacity-0', 'pointer-events-none');
        trigger.setAttribute('aria-expanded', 'false');
        hidePanels();
        activeIndex = null;
        if (onDone) onDone();
        return;
      }

      if (clone) {
        clone.classList.remove('is-expanded');
        clone.style.transition = 'top 400ms linear, left 400ms linear, width 400ms linear, height 400ms linear';
        clone.style.top = sourceRect.top - stageRect.top + 'px';
        clone.style.left = sourceRect.left - stageRect.left + 'px';
        clone.style.width = sourceRect.width + 'px';
        clone.style.height = sourceRect.height + 'px';
      }

      hidePanels();

      setTimeout(function () {
        removeClone();
        trigger.classList.remove('opacity-0', 'pointer-events-none');
        trigger.setAttribute('aria-expanded', 'false');
        activeIndex = null;
        if (onDone) onDone();
      }, 400);
    }

    function expand(trigger) {
      if (isAnimating) return;
      const index = Number(trigger.dataset.index);
      if (activeIndex === index) return;

      if (isMobile) {
        activeIndex = index;
        triggers.forEach(function (t) {
          t.setAttribute('aria-expanded', 'false');
          t.classList.remove('opacity-0', 'pointer-events-none');
        });
        hideHint();
        trigger.setAttribute('aria-expanded', 'true');
        trigger.classList.add('opacity-0', 'pointer-events-none');
        var targetSide = trigger.dataset.expandTo;
        showPanel(targetSide === 'left' ? 'right' : 'left', trigger.dataset.number || '', trigger.dataset.description || '', trigger.dataset.icon, trigger.dataset.title);
        return;
      }

      isAnimating = true;

      function doExpand() {
        activeIndex = index;
        triggers.forEach(function (t) {
          t.setAttribute('aria-expanded', 'false');
          t.classList.remove('opacity-0', 'pointer-events-none');
        });

        hideHint();
        clone = createClone(trigger);
        cloneLayer.appendChild(clone);
        void clone.offsetWidth;

        trigger.setAttribute('aria-expanded', 'true');
        trigger.classList.add('opacity-0', 'pointer-events-none');

        const targetSide = trigger.dataset.expandTo;
        const targetPanel = targetSide === 'left' ? leftPanel : rightPanel;
        const targetRect = targetPanel.getBoundingClientRect();
        const stageRect = stage.getBoundingClientRect();

        requestAnimationFrame(function () {
          clone.classList.add('is-expanded');
          clone.style.transition = 'top 500ms linear, left 500ms linear, width 500ms linear, height 500ms linear';
          clone.style.top = targetRect.top - stageRect.top + 'px';
          clone.style.left = targetRect.left - stageRect.left + 'px';
          clone.style.width = targetRect.width + 'px';
          clone.style.height = targetRect.height + 'px';
        });

        setTimeout(function () {
          showPanel(targetSide === 'left' ? 'right' : 'left', trigger.dataset.number || '', trigger.dataset.description || '', trigger.dataset.icon, trigger.dataset.title);
          isAnimating = false;
        }, 150);
      }

      if (activeIndex !== null) {
        collapseActive(doExpand);
      } else {
        doExpand();
      }
    }

    function closeExpanded() {
      if (isAnimating || activeIndex === null) return;
      const trigger = triggers[activeIndex];
      isAnimating = true;
      collapseActive(function () {
        showHint();
        if (trigger) trigger.focus({ preventScroll: true });
        isAnimating = false;
      });
    }

    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        expand(trigger);
      });
    });

    if (!window.__apuBentoGlobalBound) {
      window.__apuBentoGlobalBound = true;
      document.addEventListener('click', function (e) {
        if (activeIndex === null || isAnimating) return;
        const target = e.target;
        const isTrigger = target.closest('[data-bento-trigger]');
        const isClone = target.closest('.bento-clone');
        if (!isTrigger && !isClone) {
          closeExpanded();
        }
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && activeIndex !== null && !isAnimating) {
          closeExpanded();
        }
      });
    }

    if (triggers.length > 0) {
      expand(triggers[0]);
    }
  })();
</script>
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/scholarship/EligibilitySection.astro
git commit -m "feat(sections): add EligibilitySection based on ProgramStrengthsBentoSection"
```

---

### Task 6: Refactor `ScholarshipRequirements.astro` to accept data props

**Files:**
- Modify: `src/sections/scholarship/ScholarshipRequirements.astro`

- [ ] **Step 1: Replace the file**

```astro
---
import ScrollReveal from "@components/ScrollReveal.astro";
import SectionHeader from "@components/SectionHeader.astro";
import CtaButton from "@components/CtaButton.astro";
import BackgroundBlobs from "@components/BackgroundBlobs.astro";
import { contact } from "@data/contact";
import type { ScholarshipPageData } from "@/types/scholarship-page";

interface Props {
  data: ScholarshipPageData["requirements"];
}

const { data } = Astro.props;
---

<section
  id="requirements"
  class="relative isolate overflow-hidden bg-gradient-to-b from-brand-surface via-[rgb(var(--color-apu-navy)_/_0.03)] to-brand-surface-alt py-24 md:py-32 before:content-[''] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgb(var(--color-apu-accent)_/_0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgb(var(--color-apu-navy)_/_0.16),transparent_38%)] after:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[rgb(var(--color-apu-accent)_/_0.65)] after:to-transparent"
>
  <BackgroundBlobs seed="ScholarshipRequirements" />
  <div class="pointer-events-none absolute inset-0 overflow-hidden">
    <div class="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[rgb(var(--color-apu-accent)_/_0.14)] blur-3xl"></div>
    <div class="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[rgb(var(--color-apu-navy)_/_0.12)] blur-3xl"></div>
  </div>

  <div class="content-max">
    <ScrollReveal>
      <SectionHeader
        kicker={data.kicker}
        title={data.title}
        description={data.description}
        class="text-center mb-16"
        titleClass="text-h2 text-[rgb(var(--color-apu-navy))] mb-4"
      />
    </ScrollReveal>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
      {data.items.map((req, index) => (
        <ScrollReveal delay={index * 120} direction="left">
          <div class="group relative h-full overflow-hidden rounded-tl-xl rounded-bl-xl rounded-br-xl apu-corner-accent--tr-6 bg-white/82 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(var(--color-apu-accent)_/_0.5)] hover:shadow-[0_24px_54px_rgb(var(--color-apu-navy)_/_0.12)]">
            <div class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-apu-navy"></div>
            <div class="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[rgb(var(--color-apu-accent)_/_0.12)] blur-2xl transition-opacity duration-300 group-hover:opacity-80"></div>

            <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl border border-[rgb(var(--color-apu-accent)_/_0.3)] bg-gradient-to-br from-[rgb(var(--color-apu-navy))] to-[rgb(var(--color-apu-navy)_/_0.86)] text-[rgb(var(--color-apu-accent))] shadow-[0_14px_26px_rgb(var(--color-apu-navy)_/_0.18)] ring-4 ring-[rgb(var(--color-apu-accent)_/_0.08)]">
              <Fragment set:html={req.icon} />
            </div>

            <span class="text-mono text-[rgb(var(--color-apu-navy))] block mb-2">{req.number}</span>
            <h4 class="text-body-s font-medium text-[rgb(var(--color-apu-navy))] mb-2 leading-snug">{req.title}</h4>
            <p class="text-caption text-brand-text-muted leading-relaxed">{req.description}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>

    <ScrollReveal class="text-center">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <CtaButton
          href="#"
          variant="secondary"
          ariaLabel="Download scholarship form (coming soon)"
        >
          <span>Download PDF Form</span>
        </CtaButton>
        <CtaButton
          href={contact.scholarshipLink}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          withArrow={true}
        >
          <span>Apply Now</span>
        </CtaButton>
      </div>
    </ScrollReveal>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/scholarship/ScholarshipRequirements.astro
git commit -m "refactor(sections): make ScholarshipRequirements data-driven"
```

---

### Task 7: Refactor `ScholarshipTimeline.astro` to accept data props

**Files:**
- Modify: `src/sections/scholarship/ScholarshipTimeline.astro`

- [ ] **Step 1: Replace the file**

```astro
---
import ScrollReveal from "@components/ScrollReveal.astro";
import SectionHeader from "@components/SectionHeader.astro";
import CtaButton from "@components/CtaButton.astro";
import BackgroundBlobs from "@components/BackgroundBlobs.astro";
import { contact } from "@data/contact";
import type { ScholarshipPageData } from "@/types/scholarship-page";

interface Props {
  data: ScholarshipPageData["timeline"];
}

const { data } = Astro.props;
---

<section
  id="registration-process"
  class="apu-section-shell relative isolate overflow-hidden bg-gradient-to-b from-brand-surface via-[rgb(var(--color-apu-navy)_/_0.03)] to-brand-surface-alt py-24 md:py-32 before:content-[''] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgb(var(--color-apu-accent)_/_0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgb(var(--color-apu-navy)_/_0.16),transparent_38%)] after:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[rgb(var(--color-apu-accent)_/_0.65)] after:to-transparent"
>
  <BackgroundBlobs seed="ScholarshipTimeline" />
  <div class="pointer-events-none absolute inset-0 overflow-hidden">
    <div class="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[rgb(var(--color-apu-accent)_/_0.14)] blur-3xl"></div>
    <div class="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[rgb(var(--color-apu-navy)_/_0.12)] blur-3xl"></div>
  </div>

  <div class="content-max">
    <ScrollReveal>
      <SectionHeader
        kicker={data.kicker}
        title={data.title}
        description={data.description}
        class="text-center mb-16"
        titleClass="text-h2 text-[rgb(var(--color-apu-navy))] mb-4"
      />
    </ScrollReveal>

    <div class="relative">
      <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[rgb(var(--color-apu-navy))] via-[rgb(var(--color-apu-accent))] to-[rgb(var(--color-apu-navy))] md:-translate-x-px"></div>

      <div class="space-y-12">
        {data.steps.map((step, index) => {
          const isLeft = index % 2 === 0;
          return (
            <ScrollReveal delay={index * 120}>
              <div class={`relative flex items-start gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div class={`flex-1 ml-16 md:ml-0 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div class="apu-glass-card apu-interactive-card p-6 group">
                    <div class={`flex items-center gap-3 mb-3 ${isLeft ? 'flex-row-reverse' : 'md:justify-start'}`}>
                      <span class="text-mono text-lg border rounded-full border-apu-navy p-2 text-[rgb(var(--color-apu-navy))]">{step.number}</span>
                      <h3 class="text-h3 text-[rgb(var(--color-apu-navy))]">{step.title}</h3>
                    </div>
                    <p class="text-body-s text-brand-text-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <div class="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div class="relative">
                    <div class="w-22 h-22 rounded-full object-cover bg-apu-navy flex items-center justify-center text-[rgb(var(--color-apu-accent))] shadow-[0_0_0_4px_rgb(var(--color-apu-accent)_/_0.15),0_14px_28px_rgb(var(--color-apu-navy)_/_0.18)] z-10 transition-all duration-300 group-hover:scale-110 group-hover:border-[rgb(var(--color-apu-accent))]">
                      <Fragment set:html={step.icon} />
                    </div>
                    <div class="absolute inset-0 rounded-full bg-[rgb(var(--color-apu-accent)_/_0.2)] animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div class="hidden md:block flex-1"></div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>

    <ScrollReveal class="text-center mt-16">
      <div class="apu-glass-card p-8 inline-block">
        <p class="text-body-s text-brand-text-muted mb-4">
          {data.contactCtaText}
        </p>
        <CtaButton
          href={contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          withArrow={true}
        >
          <span>Contact Admissions Team</span>
        </CtaButton>
      </div>
    </ScrollReveal>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/scholarship/ScholarshipTimeline.astro
git commit -m "refactor(sections): make ScholarshipTimeline data-driven"
```

---

### Task 8: Update the existing Academic Scholarship page to pass data

**Files:**
- Modify: `src/pages/admission/academic-scholarship.astro`

- [ ] **Step 1: Replace the file**

```astro
---
import MainLayout from "@layouts/MainLayout.astro";
import NavigationAPU from "@components/NavigationAPU.astro";
import Footer from "@components/Footer.astro";
import ScholarshipHero from "@sections/scholarship/ScholarshipHero.astro";
import ScholarshipAbout from "@sections/scholarship/ScholarshipAbout.astro";
import ScholarshipRequirements from "@sections/scholarship/ScholarshipRequirements.astro";
import ScholarshipTimeline from "@sections/scholarship/ScholarshipTimeline.astro";
import ContactSection from "@sections/ContactSection.astro";
import { academicScholarshipData } from "@data/academic-scholarship";
---

<MainLayout
  title={academicScholarshipData.meta.title}
  description={academicScholarshipData.meta.description}
>
  <NavigationAPU />
  <main>
    <ScholarshipHero data={academicScholarshipData.hero} />
    <ScholarshipAbout data={academicScholarshipData.about} />
    <ScholarshipRequirements data={academicScholarshipData.requirements} />
    <ScholarshipTimeline data={academicScholarshipData.timeline} />
    <ContactSection />
  </main>
  <Footer />
</MainLayout>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/admission/academic-scholarship.astro
git commit -m "refactor(pages): wire Academic Scholarship page to data file"
```

---

### Task 9: Create the Non-Academic Scholarship data file

**Files:**
- Create: `src/data/non-academic-scholarship.ts`

- [ ] **Step 1: Write the data file**

```ts
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
      'Get up to 100% SPI tuition reduction for outstanding achievements in sports, arts, non-academic science competitions, technology & innovation, leadership, organization, and Tahfidz.',
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
```

- [ ] **Step 2: Commit**

```bash
git add src/data/non-academic-scholarship.ts
git commit -m "data: add non-academic scholarship page data"
```

---

### Task 10: Create the Non-Academic Achievement Scholarship page

**Files:**
- Create: `src/pages/admission/non-academic-achievement-scholarship.astro`

- [ ] **Step 1: Write the page**

```astro
---
import MainLayout from "@layouts/MainLayout.astro";
import NavigationAPU from "@components/NavigationAPU.astro";
import Footer from "@components/Footer.astro";
import ScholarshipHero from "@sections/scholarship/ScholarshipHero.astro";
import ScholarshipAbout from "@sections/scholarship/ScholarshipAbout.astro";
import EligibilitySection from "@sections/scholarship/EligibilitySection.astro";
import ScholarshipRequirements from "@sections/scholarship/ScholarshipRequirements.astro";
import ScholarshipTimeline from "@sections/scholarship/ScholarshipTimeline.astro";
import ContactSection from "@sections/ContactSection.astro";
import { nonAcademicScholarshipData } from "@data/non-academic-scholarship";
---

<MainLayout
  title={nonAcademicScholarshipData.meta.title}
  description={nonAcademicScholarshipData.meta.description}
>
  <NavigationAPU />
  <main>
    <ScholarshipHero data={nonAcademicScholarshipData.hero} />
    <ScholarshipAbout data={nonAcademicScholarshipData.about} />
    {nonAcademicScholarshipData.eligibility && (
      <EligibilitySection data={nonAcademicScholarshipData.eligibility} />
    )}
    <ScholarshipRequirements data={nonAcademicScholarshipData.requirements} />
    <ScholarshipTimeline data={nonAcademicScholarshipData.timeline} />
    <ContactSection />
  </main>
  <Footer />
</MainLayout>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/admission/non-academic-achievement-scholarship.astro
git commit -m "feat(pages): add Non-Academic Achievement Scholarship page"
```

---

### Task 11: Type-check the project

**Files:**
- All modified files.

- [ ] **Step 1: Run Astro check**

```bash
bunx --bun astro check
```

Expected: no TypeScript errors.

- [ ] **Step 2: Fix any reported type errors**

If `astro check` reports missing imports or type mismatches, adjust the affected file and rerun until clean.

- [ ] **Step 3: Commit**

```bash
git commit -am "fix(types): resolve astro check errors" || echo "no changes to commit"
```

---

### Task 12: Build the project

**Files:**
- All modified files.

- [ ] **Step 1: Run the static build**

```bash
bun run build:frontend
```

Expected: build completes and writes output to `dist/`.

- [ ] **Step 2: Fix any build errors**

If the build fails, read the error trace, fix the offending file, and rerun.

- [ ] **Step 3: Commit**

```bash
git commit -am "fix(build): resolve build errors" || echo "no changes to commit"
```

---

### Task 13: Smoke test the new route in dev

**Files:**
- None (verification only).

- [ ] **Step 1: Start the dev server**

```bash
bun run dev:frontend
```

- [ ] **Step 2: Request the new page**

In a separate terminal:

```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:4322/admission/non-academic-achievement-scholarship
```

Expected: `200`.

- [ ] **Step 3: Request the existing academic page**

```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:4322/admission/academic-scholarship
```

Expected: `200`.

- [ ] **Step 4: Stop the dev server**

Use the appropriate terminal stop command (`Ctrl+C` or task stop).

- [ ] **Step 5: Commit if any fixes were needed**

```bash
git commit -am "fix(dev): smoke test fixes" || echo "no changes to commit"
```

---

## Plan Self-Review

**Spec coverage:**

| Spec item | Task |
|-----------|------|
| Shared type `ScholarshipPageData` | Task 1 |
| Academic data file | Task 2 |
| Refactor `ScholarshipHero` | Task 3 |
| Refactor `ScholarshipAbout` | Task 4 |
| New `EligibilitySection` based on bento | Task 5 |
| Refactor `ScholarshipRequirements` | Task 6 |
| Refactor `ScholarshipTimeline` | Task 7 |
| Update Academic Scholarship page | Task 8 |
| Non-academic data file with categories + tiers | Task 9 |
| New Non-Academic page with sections | Task 10 |
| Type/build/dev verification | Tasks 11–13 |

**Placeholder scan:** No TBD/TODO placeholders. All code blocks are complete.

**Type consistency:** `ScholarshipPageData` is used in every section prop and both data files. `EligibilitySection` uses the existing `ProgramStrengthsBentoData` type.
