## Context

APU homepage currently composes sections via `src/pages/apu.astro` and uses `NavigationAPU.astro` with anchor links for one-page navigation. Product direction now treats `apu.astro` as the main homepage and requires a more institutional navigation model inspired by NUS: minimal top bar, strong IA, expandable full menu, and clear journeys beyond section scrolling.

Constraints:
- Keep APU visual language from tokenized design system (`src/styles/global.css`, `apu-*` primitives).
- Preserve accessibility (keyboard navigation, focus-visible, semantic controls, aria states).
- Allow placeholder destinations for pages not shipped yet.
- Keep behavior scripts stable and avoid breaking existing page interactions.

## Goals / Non-Goals

**Goals:**
- Implement a minimal, premium/futuristic APU header pattern aligned with NUS-style architecture.
- Define route-capable top-level navigation consistent with APU content plan.
- Provide robust mobile menu/overlay behavior for grouped and extended links.
- Ensure graceful fallback placeholders for unimplemented routes.

**Non-Goals:**
- Building all destination pages listed in navigation.
- Rewriting non-navigation homepage sections in this change.
- Introducing a new global design token system beyond current APU primitives.

## Decisions

1. **Adopt hybrid nav model (primary routes + optional in-page links).**
   - Rationale: homepage is now primary entry, but sections still exist and benefit from anchors during phased rollout.
   - Alternative considered: route-only nav now; rejected due to temporary dead-end UX before all pages exist.

2. **Use NUS-inspired minimal chrome, not NUS visual cloning.**
   - Rationale: preserve APU brand system while adopting NUS information architecture and interaction principles.
   - Alternative considered: direct style mimic; rejected to avoid violating APU design contract and consistency.

3. **Implement grouped expandable mobile/overlay menu with placeholders.**
   - Rationale: supports broad sitemap and phased implementation without blocking navigation refresh.
   - Alternative considered: flat short menu; rejected because it under-represents planned IA and future growth.

4. **Keep navigation logic inside `NavigationAPU.astro` script with strict ARIA state handling.**
   - Rationale: bounded component-level change, lowest integration risk for existing page.
   - Alternative considered: extracting new shared nav state module; deferred as premature complexity.

## Risks / Trade-offs

- **[Risk] Placeholder links can confuse users** → Mitigation: label placeholders clearly (e.g., “Segera Hadir”), keep only critical links active first.
- **[Risk] Larger nav structure can reduce scannability** → Mitigation: prioritize top-level items and group secondary links under concise labels.
- **[Risk] Behavior regressions on mobile overlay** → Mitigation: preserve close-on-link, escape/outside-close patterns, and body scroll lock with cleanup.
- **[Risk] Anchor active-state logic mismatches with route links** → Mitigation: apply active state only to same-page anchors and use pathname matching for route items.

## Migration Plan

1. Refactor nav data model (top-level + grouped submenu + placeholder metadata).
2. Update desktop/header markup to minimal NUS-inspired shell with APU tokens.
3. Replace mobile panel with overlay full-menu behavior.
4. Update script for aria state, active link logic, and close interactions.
5. Validate in `src/pages/apu.astro` as primary homepage entry.
6. Run UI sanity check across breakpoints and keyboard interaction paths.

Rollback: restore prior `NavigationAPU.astro` implementation from git history if regressions are found.

## Open Questions

- Which exact top-level items should remain direct-first-launch vs placeholder in production?
- Should language toggle/search utility be shipped now or deferred behind placeholders?
- Do we want a dedicated utility row (Apply, Systems Login, Downloads) inside overlay from day one?
