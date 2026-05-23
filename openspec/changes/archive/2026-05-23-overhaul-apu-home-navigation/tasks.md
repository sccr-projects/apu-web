## 1. Navigation Information Architecture

- [x] 1.1 Define final nav data structure for top-level categories, grouped submenu items, and placeholder metadata
- [x] 1.2 Map APU content-plan categories to route targets or temporary placeholders
- [x] 1.3 Confirm `src/pages/apu.astro` keeps `NavigationAPU.astro` as main homepage header entry

## 2. Header and Desktop Navigation Refactor

- [x] 2.1 Refactor `src/components/NavigationAPU.astro` header markup to minimal NUS-inspired shell with APU brand styling
- [x] 2.2 Replace section-anchor-only desktop links with mixed route-capable and optional anchor-capable items
- [x] 2.3 Apply APU token-aligned styles for nav states, hover, focus-visible, and scrolled behavior

## 3. Mobile Overlay Navigation

- [x] 3.1 Implement full-menu overlay layout with grouped links and utility actions
- [x] 3.2 Preserve and harden mobile interactions (aria-expanded sync, body scroll lock, close-on-link)
- [x] 3.3 Add placeholder-safe UI treatment for not-yet-live destinations

## 4. Navigation Behavior and Accessibility

- [x] 4.1 Update active-link logic to differentiate route-based links from same-page anchors
- [x] 4.2 Ensure keyboard navigation and focus-visible states remain clear across desktop and mobile
- [x] 4.3 Validate semantic roles/labels for toggle, menu regions, and navigation links

## 5. Verification

- [x] 5.1 Run responsive manual checks (mobile/tablet/desktop) on `src/pages/apu.astro`
- [x] 5.2 Verify no regressions in existing scroll behavior and menu transitions
- [x] 5.3 Confirm placeholders render safely without broken navigation or runtime errors
