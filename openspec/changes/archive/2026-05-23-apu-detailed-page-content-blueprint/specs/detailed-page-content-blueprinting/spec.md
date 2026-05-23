## ADDED Requirements

### Requirement: Top-to-bottom blueprint for each required page
The system SHALL produce a detailed content blueprint for each required page in the sitemap, ordered from top to bottom as final reading flow.

#### Scenario: Build scholarships page blueprint order
- **WHEN** the Scholarships page is specified
- **THEN** the blueprint SHALL define ordered blocks from hero/intake context through FAQ, support contacts, and closing CTA

### Requirement: Block contract definition
Each blueprint block MUST define purpose, required fields, optional fields, content source, CTA target, and fallback behavior when data is missing.

#### Scenario: Define scholarship benefit table block
- **WHEN** a benefit table block is documented
- **THEN** it SHALL include required columns, evidence source mapping, and placeholder policy for missing entries

### Requirement: Block readiness state
Each block SHALL include readiness state `Ready`, `Ready-with-caveat`, or `Missing-input`.

#### Scenario: Mark leadership roster block
- **WHEN** leadership bios are unavailable
- **THEN** the leadership roster block SHALL be marked `Missing-input` with owner and unblock condition
