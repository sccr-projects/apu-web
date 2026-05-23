## Why

Current `NavigationAPU.astro` is section-anchor based and optimized for a single-page scroll flow. APU now needs `src/pages/apu.astro` to function as the main homepage with a clearer, NUS-inspired information architecture (minimal header + full menu access) that supports broader institutional journeys.

## What Changes

- Redesign `NavigationAPU.astro` to a minimal, content-first header pattern inspired by NUS (logo-first, compact utility controls, expandable full navigation).
- Replace homepage in-page anchor emphasis with route-capable primary navigation aligned to APU page plan (Admissions, Academics, Research, Student Life & Services, Scholarships, News & Stories, About, Leadership, International, Contact).
- Add structured mobile/overlay navigation behavior for grouped links and placeholders where final destination pages are not yet implemented.
- Preserve and align component styling with existing APU design system tokens/primitives (navy/accent/surface language, focus-visible, motion consistency).
- Confirm integration context where `src/pages/apu.astro` is treated as the primary homepage entry.

## Capabilities

### New Capabilities
- `homepage-navigation`: Define requirements for a NUS-inspired, APU-branded primary homepage navigation system with desktop and mobile behavior, placeholder-safe links, and accessibility guarantees.

### Modified Capabilities
- None.

## Impact

- Affected code: `src/components/NavigationAPU.astro`, `src/pages/apu.astro` integration expectations.
- UX impact: top-level information architecture and mobile menu interaction model.
- Accessibility impact: keyboard navigation, focus states, aria-expanded/menu semantics must remain compliant.
- Content dependency: uses `apu-web-plan/nus-website-analysis.md` and `apu-web-plan/apu-website-content-plan.md` as IA reference, with placeholders allowed for not-yet-built routes.
