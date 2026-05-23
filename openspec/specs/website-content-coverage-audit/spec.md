# website-content-coverage-audit Specification

## Purpose
Define how APU website source-content audits measure page criteria coverage, capture evidence, and classify gaps for migration planning.

## Requirements
### Requirement: Page criteria coverage audit
The system SHALL evaluate each sitemap page defined in `apu-web-plan/apu-website-content-plan.md` against its must-have blocks and assign a coverage verdict of `FULFILLED`, `PARTIAL`, or `MISSING`.

#### Scenario: Evaluate admissions page criteria
- **WHEN** admissions source content is collected from `kmb.ac.id` and related subdomains
- **THEN** each admissions must-have block SHALL be marked with a verdict and supporting evidence URL(s)

### Requirement: Evidence traceability
The system MUST include evidence references for every block-level verdict, including source URL and short evidence note.

#### Scenario: Record evidence for research center directory
- **WHEN** a research-center criterion is marked `FULFILLED`
- **THEN** the audit SHALL include source URLs and the extracted evidence summary proving the criterion

### Requirement: Gap classification
The system SHALL classify every `PARTIAL` and `MISSING` criterion by gap type: `content-absent`, `content-incomplete`, `policy-missing`, `contact-missing`, or `governance-missing`.

#### Scenario: Classify missing leadership roster
- **WHEN** leadership team list is unavailable in source sites
- **THEN** the criterion SHALL be classified as `content-absent` and flagged for stakeholder fill-in
