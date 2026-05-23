# apu-content-migration-planning Specification

## Purpose
Define migration-planning outputs that convert fulfillable audited source content into implementation-ready APU page plans and explicit missing-content handoff.

## Requirements
### Requirement: Implementation plan for fulfillable pages
The system SHALL produce a detailed implementation plan for each page whose must-have criteria are fully fulfillable from available source content.

#### Scenario: Build plan for admissions page
- **WHEN** admissions criteria are marked fulfillable
- **THEN** the output SHALL include section-by-section content mapping, CTA mapping, and build order aligned to APU page architecture

### Requirement: Design-language mapping
The system MUST map planned sections to APU design primitives/components (`apu-section-shell`, `apu-glass-card`, `apu-btn`, `SectionHeader.astro`, `CtaButton.astro`) where applicable.

#### Scenario: Map scholarship catalog section
- **WHEN** scholarship page implementation is planned
- **THEN** catalog, benefit tables, and CTA sections SHALL include explicit component/primitive mapping

### Requirement: Missing-content markdown output
The system SHALL generate a markdown gap document for non-fulfillable criteria, including missing field, reason, and recommended data owner.

#### Scenario: Produce missing matrix for international policy depth
- **WHEN** visa/onboarding/housing details are not found
- **THEN** markdown output SHALL list those missing blocks with owner suggestions and priority phase
