# homepage-navigation Specification

## Purpose
TBD - created by archiving change overhaul-apu-home-navigation. Update Purpose after archive.
## Requirements
### Requirement: Homepage header SHALL use a minimal institutional shell
The system SHALL render `NavigationAPU.astro` on `src/pages/apu.astro` as a minimal, fixed, top-level header that prioritizes brand identity and streamlined access to full navigation.

#### Scenario: Header renders as primary homepage navigation
- **WHEN** a user opens `src/pages/apu.astro`
- **THEN** the page SHALL display `NavigationAPU.astro` as the main header entry point

### Requirement: Navigation SHALL support NUS-inspired IA with APU branding
The system SHALL provide top-level navigation categories aligned to APU’s content plan (Admissions, Academics, Research, Student Life & Services, Scholarships, News & Stories, About, Leadership, International, Contact) while preserving APU design tokens and visual language.

#### Scenario: Top-level categories are available
- **WHEN** a user opens the primary menu
- **THEN** the user SHALL see the defined APU institutional categories and not only section-level anchors

### Requirement: Mobile navigation SHALL provide full-menu overlay behavior
The system SHALL provide a mobile menu overlay with accessible open/close controls, grouped link presentation, scroll lock while open, and close interactions on link selection.

#### Scenario: Mobile menu open and close flow
- **WHEN** a mobile user activates the menu toggle
- **THEN** the overlay menu SHALL open with `aria-expanded` set correctly, body scrolling locked, and links accessible via keyboard and pointer

### Requirement: Navigation SHALL support placeholder-safe links for phased rollout
The system SHALL allow navigation items to be marked as placeholders for not-yet-implemented destinations and SHALL communicate placeholder status in UI text/state.

#### Scenario: Placeholder item selection
- **WHEN** a user selects a placeholder navigation item
- **THEN** the UI SHALL provide a clear “coming soon” style indicator or equivalent non-breaking behavior without runtime errors

### Requirement: Navigation SHALL preserve accessibility and active-state clarity
The system SHALL preserve focus-visible cues, semantic button/link roles, and active-state logic that distinguishes same-page section anchors from route-based links.

#### Scenario: Keyboard and active-state behavior
- **WHEN** a keyboard user tabs through navigation and navigates between homepage sections/routes
- **THEN** visible focus SHALL remain present and active states SHALL map correctly to the relevant link type

