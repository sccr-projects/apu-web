## ADDED Requirements

### Requirement: Public naming replacement rule
The system SHALL replace forward-facing occurrences of "Institut Karya Mulia Bangsa" and "IKMB" with "APU Semarang" in migrated page content.

#### Scenario: Migrate hero/about marketing copy
- **WHEN** marketing-oriented copy is migrated from source pages
- **THEN** institutional naming SHALL use "APU Semarang" as the primary name

### Requirement: Historical and legal exception handling
The system MUST preserve original institutional naming in historical/legal references where provenance is required, while adding APU transition context if needed.

#### Scenario: Preserve decree reference in history section
- **WHEN** a citation references SK or historical establishment text
- **THEN** original naming MAY be retained for legal accuracy and accompanied by transition wording

### Requirement: Naming QA checklist
The system SHALL include a validation checklist to detect inconsistent naming before publishing migrated content.

#### Scenario: Validate page before publish
- **WHEN** a page draft is marked ready
- **THEN** checklist output SHALL confirm no unintended IKMB references remain outside approved exception contexts
