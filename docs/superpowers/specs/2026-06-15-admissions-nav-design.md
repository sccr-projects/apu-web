# Admissions Nav Desktop Behavior

## Context

`src/components/NavigationAPU.astro` renders the site navigation. The Admissions entry currently has no `href` and renders as a `<button>`. On desktop, clicking it toggles the Scholarship dropdown instead of navigating.

## Goal

On desktop, clicking the **Admissions** nav label navigates to `/admission`. The Scholarship dropdown should still appear on hover so sub-links remain reachable.

## Decision

Use **Approach 1: Link label + hover dropdown**.

## Behavior

### Desktop
- Admissions label is an `<a href="/admission">`.
- Hover over the label (or the dropdown) opens the Scholarship dropdown.
- Clicking the label navigates to `/admission`.
- Keyboard `Enter` / `Space` on the label navigates (native link behavior).
- `Escape` still closes an open dropdown.
- Dropdown auto-close timer on mouseleave remains.

### Mobile
- Admissions stays a button that expands the accordion.
- The dropdown contains the Scholarship link, which points to `/admission`.
- No change to mobile interaction.

## Implementation Notes

- Add `href: "/admission"` to the Admissions object in `navSections`.
- Update desktop markup so sections with both `href` and `items` render an `<a class="nav-trigger">` instead of `<button>`.
- Keep hover timers (`mouseenter` / `mouseleave`) unchanged.
- For link triggers, skip the click `e.preventDefault()` toggle and the `Enter`/`Space` keyboard toggle on desktop.
- Preserve existing ARIA attributes (`aria-expanded`, `aria-haspopup`, `role`).
- Ensure focus-visible styles work for the anchor trigger.

## Acceptance Criteria

- [ ] Clicking Admissions on desktop navigates to `/admission`.
- [ ] Hovering Admissions on desktop still reveals the Scholarship dropdown.
- [ ] Dropdown sub-links continue to work.
- [ ] Mobile accordion behavior is unchanged.
- [ ] No TypeScript or runtime errors in `NavigationAPU.astro`.
