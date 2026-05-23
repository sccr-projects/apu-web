## ADDED Requirements

### Requirement: Readiness badge per wireframe section
Each wireframe section SHALL include readiness annotation: `Ready`, `Ready-with-caveat`, or `Missing-input`.

#### Scenario: Annotate international policy section
- **WHEN** International policy guidance section is wireframed
- **THEN** it SHALL be marked `Missing-input` if policy details are unavailable

### Requirement: Fallback behavior declaration
Sections not `Ready` MUST define fallback behavior (`placeholder`, `hide`, or `reduced variant`).

#### Scenario: Fallback for leadership team roster
- **WHEN** leadership roster data is absent
- **THEN** wireframe SHALL declare reduced variant with chairman-only spotlight

### Requirement: Blocker ownership note
Each `Missing-input` section SHALL include owner and unblock condition annotation.

#### Scenario: Missing student services SLA
- **WHEN** service SLA section lacks confirmed data
- **THEN** annotation SHALL include owner unit and required input to unblock
