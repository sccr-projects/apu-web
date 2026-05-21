/** @type {import('tailwindcss').Config} */
const semanticColors = {
  surface: 'rgb(var(--color-semantic-surface) / <alpha-value>)',
  'surface-alt': 'rgb(var(--color-semantic-surface-alt) / <alpha-value>)',
  'surface-soft': 'rgb(var(--color-semantic-surface-soft) / <alpha-value>)',
  primary: 'rgb(var(--color-semantic-primary) / <alpha-value>)',
  'primary-deep': 'rgb(var(--color-semantic-primary-deep) / <alpha-value>)',
  'primary-deeper': 'rgb(var(--color-semantic-primary-deeper) / <alpha-value>)',
  text: 'rgb(var(--color-semantic-text) / <alpha-value>)',
  'text-muted': 'rgb(var(--color-semantic-text-muted) / <alpha-value>)',
  border: 'rgb(var(--color-semantic-border) / <alpha-value>)',
  accent: 'rgb(var(--color-semantic-accent) / <alpha-value>)',
  'accent-soft': 'rgb(var(--color-semantic-accent-soft) / <alpha-value>)',
  glow: 'rgb(var(--color-semantic-glow) / <alpha-value>)',
  aurora: 'rgb(var(--color-semantic-aurora) / <alpha-value>)',
};

const compatibilityColors = {
  'brand-surface': 'rgb(var(--color-brand-surface) / <alpha-value>)',
  'brand-surface-alt': 'rgb(var(--color-brand-surface-alt) / <alpha-value>)',
  'brand-surface-soft': 'rgb(var(--color-brand-surface-soft) / <alpha-value>)',
  'brand-primary': 'rgb(var(--color-brand-primary) / <alpha-value>)',
  'brand-primary-deep': 'rgb(var(--color-brand-primary-deep) / <alpha-value>)',
  'brand-primary-deeper': 'rgb(var(--color-brand-primary-deeper) / <alpha-value>)',
  'brand-text': 'rgb(var(--color-brand-text) / <alpha-value>)',
  'brand-text-muted': 'rgb(var(--color-brand-text-muted) / <alpha-value>)',
  'brand-border': 'rgb(var(--color-brand-border) / <alpha-value>)',
  'brand-accent': 'rgb(var(--color-brand-accent) / <alpha-value>)',
  'brand-accent-soft': 'rgb(var(--color-brand-accent-soft) / <alpha-value>)',
  'brand-glow': 'rgb(var(--color-brand-glow) / <alpha-value>)',
  'brand-aurora': 'rgb(var(--color-brand-aurora) / <alpha-value>)',
  'deep-space': 'rgb(var(--color-deep-space) / <alpha-value>)',
  'warm-ivory': 'rgb(var(--color-warm-ivory) / <alpha-value>)',
  'soft-sage': 'rgb(var(--color-soft-sage) / <alpha-value>)',
  'burnt-copper': 'rgb(var(--color-burnt-copper) / <alpha-value>)',
  'deep-sage': 'rgb(var(--color-deep-sage) / <alpha-value>)',
  charcoal: 'rgb(var(--color-charcoal) / <alpha-value>)',
  'apu-navy': 'rgb(var(--color-apu-navy) / <alpha-value>)',
  'apu-accent': 'rgb(var(--color-apu-accent) / <alpha-value>)',
};

export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ...semanticColors,
        ...compatibilityColors,
        slate: {
          DEFAULT: 'rgb(var(--color-slate-500) / <alpha-value>)',
          50: 'rgb(var(--color-slate-50) / <alpha-value>)',
          100: 'rgb(var(--color-slate-100) / <alpha-value>)',
          200: 'rgb(var(--color-slate-200) / <alpha-value>)',
          300: 'rgb(var(--color-slate-300) / <alpha-value>)',
          400: 'rgb(var(--color-slate-400) / <alpha-value>)',
          500: 'rgb(var(--color-slate-500) / <alpha-value>)',
          600: 'rgb(var(--color-slate-600) / <alpha-value>)',
          700: 'rgb(var(--color-slate-700) / <alpha-value>)',
          800: 'rgb(var(--color-slate-800) / <alpha-value>)',
          900: 'rgb(var(--color-slate-900) / <alpha-value>)',
        },
        gold: {
          500: 'rgb(var(--color-gold-500) / <alpha-value>)',
          400: 'rgb(var(--color-gold-400) / <alpha-value>)',
          300: 'rgb(var(--color-gold-300) / <alpha-value>)',
        },
        teal: {
          500: 'rgb(var(--color-teal-500) / <alpha-value>)',
          400: 'rgb(var(--color-teal-400) / <alpha-value>)',
        },
        navy: {
          900: 'rgb(var(--color-navy-900) / <alpha-value>)',
          800: 'rgb(var(--color-navy-800) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounceSlow 1.5s ease-in-out infinite',
        'shimmer': 'shimmer 0.8s ease-in-out forwards',
      },
      keyframes: {
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
};
