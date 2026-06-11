# Academic Scholarship Page Implementation Plan

**Goal:** Create a dedicated `beasiswa-akademik` Astro page with four custom section components, following established APU design system patterns.

**Architecture:** Compose page from four new section components under `src/sections/scholarship/`, reusing animation patterns from AdmissionsHero/AdmissionsTimeline/AdmissionsRequirements, shared primitives from `global.css`, and shared Astro components (SectionHeader, CtaButton, ScrollReveal, ContactSection).

**Design:** [thoughts/shared/designs/2026-06-11-academic-scholarship-design.md](../designs/2026-06-11-academic-scholarship-design.md)

---

## Dependency Graph

```
Batch 1 (parallel): 1.1, 1.2, 1.3, 1.4 [section components - no deps]
Batch 2 (parallel): 2.1 [page assembly - depends on all batch 1 tasks]
```

---

## Batch 1: Section Components (parallel — 4 implementers)

All tasks in this batch are independent and can run simultaneously. Each implementer only needs the design doc and reference files (already read above).

---

### Task 1.1: ScholarshipHero.astro
**File:** `src/sections/scholarship/ScholarshipHero.astro`
**Test:** `none` (visual only; verify by rendering page)
**Depends:** none

**What to implement:** Full-viewport hero section with parallax background, floating particles, staggered entrance animation, and scroll-fade behavior. Simplified single-column layout compared to AdmissionsHero (no info card).

**Patterns to reuse:**
- Copy animation structure and CSS from `src/sections/AdmissionsHero.astro`
- Reuse `CtaButton.astro` for CTAs
- Reuse `contact` data for links
- Reuse background image `/images/loby1.webp`

**Key decisions (design gaps filled):**
- Using `contact.scholarshipLink` for primary CTA (design assumption confirmed)
- Secondary CTA scrolls to `#persyaratan` via `href="#persyaratan"`
- All CSS class prefixes changed to `scholarship-hero-*` to avoid collisions with AdmissionsHero
- Keeping same stagger timing: bg → kicker (450ms) → headline (760ms) → subtitle (1120ms) → CTAs (1480ms) → scroll indicator (2100ms)

```astro
---
import CtaButton from "../../components/CtaButton.astro";
import { contact } from "../../data/contact";
---

<section
  id="beranda"
  class="scholarship-hero relative min-h-[100dvh] flex items-end overflow-hidden"
>
  <!-- Background Image with Parallax -->
  <div
    id="scholarship-hero-bg"
    class="absolute inset-0 z-[1] will-change-transform opacity-0 scale-[1.04]"
  >
    <img
      src="/images/loby1.webp"
      alt="Kampus Agung Putra University"
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
          <span class="scholarship-hero-kicker-text"
            >BEASISWA AKADEMIK 2026/2027</span
          >
        </div>

        <h1
          id="scholarship-hero-headline"
          class="text-h1 mb-6 max-w-4xl opacity-0 translate-y-3 scholarship-hero-headline"
        >
          <span class="block">Beasiswa Akademik</span>
          <span class="block"
            ><span class="text-brand-accent-soft">APU</span></span
          >
        </h1>

        <p
          id="scholarship-hero-subtitle"
          class="text-body max-w-2xl mb-10 opacity-0 translate-y-2 scholarship-hero-subtitle"
        >
          Dapatkan potongan biaya kuliah hingga 50% untuk pelajar berprestasi.
          Wujudkan impian akademikmu bersama APU.
        </p>

        <div
          id="scholarship-hero-cta"
          class="flex flex-wrap gap-4 opacity-0 translate-y-2"
        >
          <CtaButton
            href={contact.scholarshipLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            withArrow={true}
          >
            <span>Daftar Sekarang</span>
          </CtaButton>
          <CtaButton href="#persyaratan" variant="secondary">
            <span>Lihat Persyaratan</span>
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
        >Gulir untuk menjelajah</span
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
    // Floating particles
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

    // Add float animation
    const style = document.createElement("style");
    style.textContent = `
      @keyframes scholarshipHeroFloat {
        0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
        25% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
        50% { transform: translateY(-40px) translateX(-5px); opacity: 0.3; }
        75% { transform: translateY(-20px) translateX(15px); opacity: 0.4; }
      }
    `;
    document.head.appendChild(style);

    // Elements for animation
    const bg = document.getElementById("scholarship-hero-bg");
    const kicker = document.getElementById("scholarship-hero-kicker");
    const headline = document.getElementById("scholarship-hero-headline");
    const subtitle = document.getElementById("scholarship-hero-subtitle");
    const cta = document.getElementById("scholarship-hero-cta");
    const scrollIndicator = document.getElementById("scholarship-hero-scroll");
    const bgImg = document.getElementById("scholarship-hero-bg-img");

    // Staggered reveal on page load
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

    // Mouse parallax effect
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
    });

    function animateParallax() {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;
      if (bgImg) {
        bgImg.style.transform = `translate(${currentX}px, ${currentY}px) scale(1.05)`;
      }
      requestAnimationFrame(animateParallax);
    }
    animateParallax();

    // Scroll-based fade out
    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            const heroHeight =
              document.querySelector("#beranda")?.clientHeight || window.innerHeight;
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
      { passive: true },
    );
  })();
</script>
```

**Verify:** Run `bun run dev` and navigate to the scholarship page. Check that:
1. Background image loads with parallax on mouse move
2. Particles are visible
3. Staggered animation plays on load (kicker → headline → subtitle → CTAs → scroll indicator)
4. Scroll indicator fades on scroll
5. Headline and kicker fade/scale on scroll

**Commit:** `feat(scholarship): add ScholarshipHero section`

---

### Task 1.2: ScholarshipAbout.astro
**File:** `src/sections/scholarship/ScholarshipAbout.astro`
**Test:** `none` (visual only)
**Depends:** none

**What to implement:** Two-column about section explaining the academic scholarship and highlighting the 50% tuition benefit. Uses glass cards and icon chip.

**Patterns to reuse:**
- `SectionHeader.astro` for section header
- `ScrollReveal.astro` for entrance animation
- `.apu-section-shell` and `.apu-glass-card` from design system
- `.apu-icon-chip` for the benefit icon
- `.apu-interactive-card` for hover transitions
- Aurora shell background pattern from AdmissionsTimeline/AdmissionsRequirements

**Key decisions (design gaps filled):**
- Left card contains descriptive paragraph about the scholarship
- Right card is the "50%" benefit highlight with a trophy/award icon (using `.apu-icon-chip`)
- Two-column grid on desktop (`lg:grid-cols-2`), single column on mobile
- Cards have progressive reveal delay (left first, then right)

```astro
---
import ScrollReveal from "../../components/ScrollReveal.astro";
import SectionHeader from "../../components/SectionHeader.astro";
---

<section
  id="tentang"
  class="apu-section-shell motion-aurora-shell motion-aurora-shell--about relative isolate overflow-hidden bg-gradient-to-b from-brand-surface via-[rgb(var(--color-apu-navy)_/_0.03)] to-brand-surface-alt py-24 md:py-32 before:content-[''] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgb(var(--color-apu-accent)_/_0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgb(var(--color-apu-navy)_/_0.16),transparent_38%)] after:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[rgb(var(--color-apu-accent)_/_0.65)] after:to-transparent"
>
  <div class="pointer-events-none absolute inset-0 overflow-hidden">
    <div class="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[rgb(var(--color-apu-accent)_/_0.14)] blur-3xl"></div>
    <div class="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[rgb(var(--color-apu-navy)_/_0.12)] blur-3xl"></div>
  </div>

  <div class="content-max relative z-10">
    <!-- Section Header -->
    <ScrollReveal>
      <SectionHeader
        kicker="TENTANG BEASISWA"
        title="Dukungan untuk Pelajar Berprestasi"
        description="Beasiswa Akademik APU dirancang untuk menghargai dan mendukung siswa berprestasi yang ingin melanjutkan studi di perguruan tinggi berkualitas."
        class="text-center mb-16"
        titleClass="text-h2 text-[rgb(var(--color-apu-navy))] mb-4"
      />
    </ScrollReveal>

    <!-- Two Column Content -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Left: Description -->
      <ScrollReveal delay={100}>
        <div class="apu-glass-card apu-interactive-card p-8 h-full">
          <h3 class="text-h3 text-[rgb(var(--color-apu-navy))] mb-4">
            Apa itu Beasiswa Akademik?
          </h3>
          <p class="text-body text-brand-text-muted leading-relaxed mb-4">
            Beasiswa Akademik APU adalah program beasiswa berbasis prestasi akademik yang memberikan potongan biaya kuliah hingga <strong class="text-[rgb(var(--color-apu-navy))]">50%</strong> bagi siswa yang memenuhi kriteria nilai rata-rata rapor minimal 80.
          </p>
          <p class="text-body text-brand-text-muted leading-relaxed">
            Program ini terbuka untuk lulusan SMA/SMK/sederajat atau siswa kelas 12 yang sedang menyelesaikan pendidikannya. Dengan beasiswa ini, kamu bisa fokus pada pengembangan diri tanpa beban finansial yang berat.
          </p>
        </div>
      </ScrollReveal>

      <!-- Right: Benefit Highlight -->
      <ScrollReveal delay={250}>
        <div class="apu-glass-card apu-interactive-card p-8 h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
          <!-- Decorative blur orb -->
          <div class="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[rgb(var(--color-apu-accent)_/_0.18)] blur-2xl"></div>

          <div class="apu-icon-chip w-20 h-20 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
          </div>

          <div class="text-[5rem] font-bold leading-none text-[rgb(var(--color-apu-navy))] mb-2" style="font-family: 'Space Grotesk', sans-serif;">
            50<span class="text-[3rem]">%</span>
          </div>
          <p class="text-h3 text-[rgb(var(--color-apu-navy))] mb-2">Potongan Biaya Kuliah</p>
          <p class="text-body-s text-brand-text-muted max-w-xs leading-relaxed">
            Nikmati pengurangan biaya kuliah signifikan selama masa studi dengan memenuhi persyaratan akademik yang berlaku.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>
```

**Verify:** Run `bun run dev`, navigate to page, scroll to about section. Check:
1. Two-column layout on desktop, single column on mobile
2. Glass cards have hover lift effect
3. Section header reveals on scroll
4. Left card reveals first, then right card (staggered)
5. "50%" text is prominent and readable

**Commit:** `feat(scholarship): add ScholarshipAbout section`

---

### Task 1.3: ScholarshipRequirements.astro
**File:** `src/sections/scholarship/ScholarshipRequirements.astro`
**Test:** `none` (visual only)
**Depends:** none

**What to implement:** 4-item requirements grid with numbered badges, icons, titles, and descriptions. Uses same card pattern as AdmissionsRequirements but with 4 items (2×2 layout).

**Patterns to reuse:**
- Same background shell as AdmissionsRequirements
- `SectionHeader`, `ScrollReveal`, `CtaButton`
- Card pattern from AdmissionsRequirements (top accent line, blur orb, icon circle, hover transitions)
- Grid uses `sm:grid-cols-2` for 2×2 layout (instead of `lg:grid-cols-5`)

**Key decisions (design gaps filled):**
- Requirements are inline (static) as specified in design
- Icons: graduation cap, bar-chart, file-text, clipboard-check (matching the requirement themes)
- Bottom CTAs: "Download Formulir PDF" (secondary, placeholder href `#`) + "Daftar Sekarang" (primary, links to `contact.scholarshipLink`)
- Numbered badges use `apu-pill-badge` style

```astro
---
import ScrollReveal from "../../components/ScrollReveal.astro";
import SectionHeader from "../../components/SectionHeader.astro";
import CtaButton from "../../components/CtaButton.astro";
import { contact } from "../../data/contact";

interface Requirement {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const requirements: Requirement[] = [
  {
    number: "01",
    title: "Lulusan SMA/SMK/Sederajat",
    description: "Lulusan SMA/SMK/sederajat atau sedang duduk di kelas 12 pada tahun ajaran berjalan.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 2.24 3 5 3s5-1.34 5-3v-5"/></svg>`,
  },
  {
    number: "02",
    title: "Nilai Rata-Rata Rapor Minimal 80",
    description: "Memiliki nilai rata-rata rapor minimal 80 pada semester terakhir atau semester sebelumnya.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  },
  {
    number: "03",
    title: "Fotocopy Rapor/Transkrip Nilai",
    description: "Melampirkan fotocopy rapor atau transkrip nilai yang telah dilegalisir sebagai bukti akademik.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  },
  {
    number: "04",
    title: "Formulir Pendaftaran Online",
    description: "Mengisi formulir pendaftaran online melalui portal beasiswa APU dengan data yang lengkap dan valid.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  },
];
---

<section
  id="persyaratan"
  class="motion-aurora-shell motion-aurora-shell--requirements relative isolate overflow-hidden bg-gradient-to-b from-brand-surface via-[rgb(var(--color-apu-navy)_/_0.03)] to-brand-surface-alt py-24 md:py-32 before:content-[''] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgb(var(--color-apu-accent)_/_0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgb(var(--color-apu-navy)_/_0.16),transparent_38%)] after:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[rgb(var(--color-apu-accent)_/_0.65)] after:to-transparent"
>
  <div class="pointer-events-none absolute inset-0 overflow-hidden">
    <div class="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[rgb(var(--color-apu-accent)_/_0.14)] blur-3xl"></div>
    <div class="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[rgb(var(--color-apu-navy)_/_0.12)] blur-3xl"></div>
  </div>

  <div class="content-max">
    <!-- Section Header -->
    <ScrollReveal>
      <SectionHeader
        kicker="PERSYARATAN"
        title="Syarat Kelulusan Beasiswa"
        description="Pastikan kamu memenuhi persyaratan berikut sebelum mendaftar beasiswa akademik APU."
        class="text-center mb-16"
        titleClass="text-h2 text-[rgb(var(--color-apu-navy))] mb-4"
      />
    </ScrollReveal>

    <!-- Requirements Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
      {requirements.map((req, index) => (
        <ScrollReveal delay={index * 120} direction="left">
          <div class="group relative h-full overflow-hidden rounded-3xl border-2 border-[rgb(var(--color-apu-navy)_/_0.12)] bg-white/82 p-6 text-center shadow-[0_14px_36px_rgb(var(--color-apu-navy)_/_0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(var(--color-apu-accent)_/_0.5)] hover:shadow-[0_24px_54px_rgb(var(--color-apu-navy)_/_0.12)]">
            <div class="pointer-events-none absolute inset-x-0 top-0 h-1 bg-apu-navy"></div>
            <div class="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[rgb(var(--color-apu-accent)_/_0.12)] blur-2xl transition-opacity duration-300 group-hover:opacity-80"></div>

            <!-- Icon -->
            <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl border border-[rgb(var(--color-apu-accent)_/_0.3)] bg-gradient-to-br from-[rgb(var(--color-apu-navy))] to-[rgb(var(--color-apu-navy)_/_0.86)] text-[rgb(var(--color-apu-accent))] shadow-[0_14px_26px_rgb(var(--color-apu-navy)_/_0.18)] ring-4 ring-[rgb(var(--color-apu-accent)_/_0.08)]">
              <Fragment set:html={req.icon} />
            </div>

            <!-- Number -->
            <span class="text-mono text-[rgb(var(--color-apu-navy))] block mb-2">{req.number}</span>

            <!-- Title -->
            <h4 class="text-body-s font-medium text-[rgb(var(--color-apu-navy))] mb-2 leading-snug">{req.title}</h4>

            <!-- Description -->
            <p class="text-caption text-brand-text-muted leading-relaxed">{req.description}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>

    <!-- Bottom CTA -->
    <ScrollReveal class="text-center">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <CtaButton
          href="#"
          variant="secondary"
          ariaLabel="Download formulir beasiswa (segera hadir)"
        >
          <span>Download Formulir PDF</span>
        </CtaButton>
        <CtaButton
          href={contact.scholarshipLink}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          withArrow={true}
        >
          <span>Daftar Sekarang</span>
        </CtaButton>
      </div>
    </ScrollReveal>
  </div>
</section>
```

**Verify:** Run `bun run dev`, navigate to page, scroll to requirements section. Check:
1. 4 cards in 2×2 grid on desktop, single column on mobile
2. Each card has icon, number, title, description
3. Cards have hover lift and border glow
4. Top accent line is present
5. CTA buttons are centered at bottom
6. "Download Formulir PDF" is a placeholder (`href="#"`) — will be updated later

**Commit:** `feat(scholarship): add ScholarshipRequirements section`

---

### Task 1.4: ScholarshipTimeline.astro
**File:** `src/sections/scholarship/ScholarshipTimeline.astro`
**Test:** `none` (visual only)
**Depends:** none

**What to implement:** 3-stage alternating timeline showing the scholarship registration process. Uses same pattern as AdmissionsTimeline but simplified to 3 stages.

**Patterns to reuse:**
- Same background shell and central line as AdmissionsTimeline
- `SectionHeader`, `ScrollReveal`, `CtaButton`
- Alternating left/right layout with timeline nodes
- Pulse ring animation on hover

**Key decisions (design gaps filled):**
- 3 stages: Pendaftaran Online → Pengumuman (H+7) → Validasi Dokumen & Penerbitan NIM
- Uses inline data array
- Alternating layout: stage 1 left, stage 2 right, stage 3 left
- Mobile: single column with timeline line on left (same as AdmissionsTimeline)
- Bottom CTA links to WhatsApp via `contact.whatsappLink`

```astro
---
import ScrollReveal from "../../components/ScrollReveal.astro";
import SectionHeader from "../../components/SectionHeader.astro";
import CtaButton from "../../components/CtaButton.astro";
import { contact } from "../../data/contact";

interface TimelineStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const timelineSteps: TimelineStep[] = [
  {
    number: "01",
    title: "Pendaftaran Online",
    description: "Submit pendaftaran beasiswa melalui sistem admission APU. Lengkapi data diri, unggah dokumen persyaratan, dan pilih jalur beasiswa akademik.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  },
  {
    number: "02",
    title: "Pengumuman (H+7)",
    description: "Tim seleksi akan mengumumkan hasil seleksi maksimal 7 hari kerja setelah verifikasi berkas. Pantau email dan portal camaba untuk update status.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  },
  {
    number: "03",
    title: "Validasi Dokumen & Penerbitan NIM",
    description: "Setelah diterima, lakukan validasi dokumen asli dan pembayaran biaya registrasi. NIM akan diterbitkan setelah proses validasi selesai.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/></svg>`,
  },
];
---

<section
  id="alur-pendaftaran"
  class="apu-section-shell motion-aurora-shell motion-aurora-shell--timeline relative isolate overflow-hidden bg-gradient-to-b from-brand-surface via-[rgb(var(--color-apu-navy)_/_0.03)] to-brand-surface-alt py-24 md:py-32 before:content-[''] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgb(var(--color-apu-accent)_/_0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgb(var(--color-apu-navy)_/_0.16),transparent_38%)] after:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-[rgb(var(--color-apu-accent)_/_0.65)] after:to-transparent"
>
  <div class="pointer-events-none absolute inset-0 overflow-hidden">
    <div class="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[rgb(var(--color-apu-accent)_/_0.14)] blur-3xl"></div>
    <div class="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[rgb(var(--color-apu-navy)_/_0.12)] blur-3xl"></div>
  </div>

  <div class="content-max">
    <!-- Section Header -->
    <ScrollReveal>
      <SectionHeader
        kicker="ALUR PENDAFTARAN"
        title="3 Tahap Menuju Beasiswa"
        description="Ikuti alur pendaftaran beasiswa yang transparan dan terstruktur. Kami siap membantu di setiap tahapan."
        class="text-center mb-16"
        titleClass="text-h2 text-[rgb(var(--color-apu-navy))] mb-4"
      />
    </ScrollReveal>

    <!-- Timeline -->
    <div class="relative">
      <!-- Central Line -->
      <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[rgb(var(--color-apu-navy))] via-[rgb(var(--color-apu-accent))] to-[rgb(var(--color-apu-navy))] md:-translate-x-px"></div>

      <div class="space-y-12">
        {timelineSteps.map((step, index) => {
          const isLeft = index % 2 === 0;
          return (
            <ScrollReveal delay={index * 120}>
              <div class={`relative flex items-start gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <!-- Content Card -->
                <div class={`flex-1 ml-16 md:ml-0 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div class="apu-glass-card apu-interactive-card p-6 group">
                    <div class={`flex items-center gap-3 mb-3 ${isLeft ? 'flex-row-reverse' : 'md:justify-start'}`}>
                      <span class="text-mono text-lg border rounded-full border-apu-navy p-2 text-[rgb(var(--color-apu-navy))]">{step.number}</span>
                      <h3 class="text-h3 text-[rgb(var(--color-apu-navy))]">{step.title}</h3>
                    </div>
                    <p class="text-body-s text-brand-text-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <!-- Timeline Node -->
                <div class="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div class="relative">
                    <div class="w-22 h-22 rounded-full object-cover bg-apu-navy flex items-center justify-center text-[rgb(var(--color-apu-accent))] shadow-[0_0_0_4px_rgb(var(--color-apu-accent)_/_0.15),0_14px_28px_rgb(var(--color-apu-navy)_/_0.18)] z-10 transition-all duration-300 group-hover:scale-110 group-hover:border-[rgb(var(--color-apu-accent))]">
                      <Fragment set:html={step.icon} />
                    </div>
                    <!-- Pulse ring -->
                    <div class="absolute inset-0 rounded-full bg-[rgb(var(--color-apu-accent)_/_0.2)] animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <!-- Spacer for opposite side -->
                <div class="hidden md:block flex-1"></div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>

    <!-- Bottom CTA -->
    <ScrollReveal class="text-center mt-16">
      <div class="apu-glass-card p-8 inline-block">
        <p class="text-body-s text-brand-text-muted mb-4">
          Butuh bantuan? Hubungi tim admisi kami melalui WhatsApp.
        </p>
        <CtaButton
          href={contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          withArrow={true}
        >
          <span>Hubungi Tim Admisi</span>
        </CtaButton>
      </div>
    </ScrollReveal>
  </div>
</section>
```

**Verify:** Run `bun run dev`, navigate to page, scroll to timeline section. Check:
1. 3 timeline stages with alternating left/right layout on desktop
2. Single column with left timeline line on mobile
3. Timeline nodes have icon and pulse ring on hover
4. Cards reveal with staggered scroll animation
5. Bottom CTA glass card is centered

**Commit:** `feat(scholarship): add ScholarshipTimeline section`

---

## Batch 2: Page Assembly (1 implementer)

Depends on all 4 section components from Batch 1 being present.

---

### Task 2.1: beasiswa-akademik.astro
**File:** `src/pages/beasiswa-akademik.astro`
**Test:** `none` (page-level visual verification)
**Depends:** 1.1, 1.2, 1.3, 1.4

**What to implement:** Page assembly following the exact composition pattern of `src/pages/pendaftaran.astro`.

**Patterns to reuse:**
- `MainLayout` for HTML shell
- `NavigationAPU` for nav
- `Footer` for footer
- `ContactSection` for contact block
- Import all 4 scholarship sections from `../sections/scholarship/`

**Key decisions (design gaps filled):**
- Page title: "Beasiswa Akademik | APU"
- Description: SEO-friendly Indonesian description
- Section order: Hero → About → Requirements → Timeline → Contact

```astro
---
import MainLayout from "../layouts/MainLayout.astro";
import NavigationAPU from "../components/NavigationAPU.astro";
import Footer from "../components/Footer.astro";
import ScholarshipHero from "../sections/scholarship/ScholarshipHero.astro";
import ScholarshipAbout from "../sections/scholarship/ScholarshipAbout.astro";
import ScholarshipRequirements from "../sections/scholarship/ScholarshipRequirements.astro";
import ScholarshipTimeline from "../sections/scholarship/ScholarshipTimeline.astro";
import ContactSection from "../sections/ContactSection.astro";
---

<MainLayout
  title="Beasiswa Akademik | APU"
  description="Daftar Beasiswa Akademik APU 2026/2027. Dapatkan potongan biaya kuliah hingga 50% untuk pelajar berprestasi. Syarat mudah, proses transparan."
>
  <NavigationAPU />
  <main>
    <ScholarshipHero />
    <ScholarshipAbout />
    <ScholarshipRequirements />
    <ScholarshipTimeline />
    <ContactSection />
  </main>
  <Footer />
</MainLayout>
```

**Verify:**
1. Run `bun run dev`
2. Navigate to `http://localhost:4321/beasiswa-akademik`
3. Verify all 5 sections render in order: Hero → About → Requirements → Timeline → Contact
4. Verify page title in browser tab: "Beasiswa Akademik | APU"
5. Verify NavigationAPU and Footer are present
6. Verify no console errors
7. Test responsive breakpoints: 320px, 768px, 1024px, 1440px
8. Test anchor link: click "Lihat Persyaratan" in hero → should scroll to requirements section
9. Test external links: "Daftar Sekarang" should open `contact.scholarshipLink`

**Commit:** `feat(scholarship): add beasiswa-akademik page`

---

## Testing & Verification Summary

### Visual Regression Checklist
- [ ] Hero background parallax and particles match AdmissionsHero richness
- [ ] About section two-column layout matches design system glass card pattern
- [ ] Requirements 2×2 grid is balanced and readable
- [ ] Timeline alternating layout is consistent with AdmissionsTimeline
- [ ] All sections use consistent aurora shell backgrounds
- [ ] Color scheme matches APU navy/accent palette throughout

### Responsive Checklist
- [ ] 320px: Single column, readable text, no horizontal scroll
- [ ] 768px: Timeline switches to single column with left line
- [ ] 1024px: About section shows two columns
- [ ] 1440px: Content centered with `content-max`, proper padding

### Accessibility Checklist
- [ ] Keyboard navigation works through all interactive elements
- [ ] Focus-visible states visible on CtaButton components
- [ ] Heading hierarchy: h1 (hero) → h2 (section headers) → h3 (cards)
- [ ] Alt text on hero image
- [ ] Sufficient color contrast on all text (WCAG AA)
- [ ] ScrollReveal does not cause layout shift (elements are opacity-0, not display:none)

### Performance Checklist
- [ ] Hero image uses `loading="eager"`
- [ ] Below-fold images (if any) use `loading="lazy"`
- [ ] No render-blocking resources introduced
- [ ] Glassmorphism effects render smoothly in Safari

### Cross-Browser
- [ ] Chrome/Edge: verify glass cards and backdrop-filter
- [ ] Safari: verify glassmorphism and gradient text
- [ ] Firefox: verify layout and animations
