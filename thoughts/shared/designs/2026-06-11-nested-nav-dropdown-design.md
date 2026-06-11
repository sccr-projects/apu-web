---
date: 2026-06-11
topic: "Nested Navigation Dropdown for Admissions → Scholarship → Academic/Non-Academic"
status: validated
---

## Problem Statement

The current navigation only supports single-level dropdowns. We need to add a **two-level hierarchy** under the Admissions nav item:
- **Admissions** (top-level nav)
  - **Scholarship** (dropdown item)
    - **Academic** (child of Scholarship)
    - **Non-Academic** (child of Scholarship)

This requires extending the existing data model, desktop hover interaction, and mobile accordion to support nested children.

## Constraints

- Must reuse existing design tokens and glassmorphism patterns from `global.css`
- Must not break existing single-level dropdown behavior
- Must maintain accessibility (ARIA roles, keyboard navigation, focus management)
- Must follow existing hover timer conventions (150ms open / 400ms close delay)
- Must support both desktop (hover flyout) and mobile (nested accordion)
- Must not change the JS interaction contracts of existing nav items
- No new dependencies

## Approach

**Chosen: Flyout panel for desktop + nested accordion for mobile**

I chose the flyout pattern over a grouped single-panel layout because:
- It scales better if more nested items are added later
- It's the standard UX expectation for nested navigation
- It keeps individual panels compact and scannable
- It mirrors the existing desktop/mobile paradigm (hover vs tap)

## Architecture

### Data Model Extension

Extend `NavItem` with an optional `children` array:

```
NavItem {
  label: string
  href: string
  description: string
  kind: "route" | "anchor" | "external"
  section?: string
  placeholder?: boolean
  badge?: string
  target?: string
  rel?: string
  children?: NavItem[]  // NEW
}
```

The "Admissions" `NavSection` gains an `items` array containing a single `NavItem` for "Scholarship", which has `children` for "Academic" and "Non-Academic".

### Desktop Render Tree

```
li.nav-item[data-has-dropdown="true"]
  button.nav-trigger (Admissions)
  .nav-dropdown (primary panel)
    ul.nav-dropdown-list
      li
        a.nav-dropdown-item.nav-dropdown-item--has-children (Scholarship)
          .nav-dropdown-item-main
            span.nav-dropdown-label
            svg.nav-dropdown-chevron (points right)
          .nav-dropdown-subpanel (secondary flyout)
            ul.nav-dropdown-sublist
              li
                a.nav-dropdown-subitem (Academic)
              li
                a.nav-dropdown-subitem (Non-Academic)
```

### Mobile Render Tree

```
li.mobile-nav-item
  .mobile-nav-group
    button.mobile-nav-trigger (Admissions)
    ul.mobile-nav-submenu
      li
        .mobile-nav-subgroup
          button.mobile-nav-subtrigger (Scholarship)
          ul.mobile-nav-subsubmenu (nested accordion)
            li
              a.mobile-nav-submenu-item (Academic)
            li
              a.mobile-nav-submenu-item (Non-Academic)
```

## Components

### 1. Extended Type Definitions
- Add `children?: NavItem[]` to the `NavItem` interface
- No changes needed to `NavSection`

### 2. Desktop Primary Dropdown (existing, unchanged structure)
- Reuse existing `.nav-dropdown` panel
- Items with `children` get additional markup for the sub-trigger and sub-panel

### 3. Desktop Secondary Flyout Panel (new)
- `.nav-dropdown-subpanel`: positioned absolutely to the right of the parent item
- Same glassmorphism styling as primary panel (background, border, shadow, radius)
- No arrow tip needed for the secondary panel (it's clearly connected to its parent)
- Hover behavior: hovering the parent item OR the subpanel keeps it open
- Same timer delays as primary dropdown for consistency

### 4. Mobile Nested Accordion (new)
- `.mobile-nav-subtrigger`: toggle button inside the primary accordion
- `.mobile-nav-subsubmenu`: secondary accordion panel
- Uses the same `max-height` CSS transition pattern as the existing `.mobile-nav-submenu`
- Chevron rotation on expand

### 5. JS Interaction Controller (extended)
- Extend the existing desktop hover loop to also wire up sub-panel triggers
- Extend the existing mobile accordion loop to also wire up nested sub-triggers
- Reuse all existing timer, focus, and keyboard logic

## Data Flow

1. **Astro build time:** Navigation data is hardcoded in component frontmatter
2. **Server render:** Astro outputs the full nested markup (desktop + mobile)
3. **Client hydration:**
   - Primary dropdowns: existing `mouseenter`/`mouseleave` listeners on `.nav-trigger` + `.nav-dropdown`
   - Secondary flyouts: new `mouseenter`/`mouseleave` listeners on `.nav-dropdown-item--has-children` + `.nav-dropdown-subpanel`
   - Mobile nested: new click listeners on `.mobile-nav-subtrigger`

## Error Handling

- If a nav item has `children` but is also a `placeholder`, the children are not rendered (placeholder items are disabled)
- If JavaScript fails to load, the primary dropdowns still work via CSS hover (if we add `:hover` fallbacks) or the nav degrades to simple links
- Mobile menu close (Escape, backdrop click, link click) closes the entire menu including nested accordions

## Testing Strategy

- **Visual:** Verify the secondary panel appears on hover over Scholarship
- **Interaction:** Verify hover timers work (150ms delay, 400ms close)
- **Accessibility:** Verify `aria-expanded` toggles on sub-triggers, keyboard Escape closes sub-panel
- **Mobile:** Verify tapping Scholarship expands/collapses its children
- **Route highlighting:** Verify current route highlighting works for nested items
- **No regression:** Verify existing single-level dropdowns still work correctly

## Open Questions

None — the approach is validated against the existing codebase patterns.
