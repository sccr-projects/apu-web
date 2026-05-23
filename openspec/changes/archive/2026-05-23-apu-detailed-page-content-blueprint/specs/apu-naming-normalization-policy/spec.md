## ADDED Requirements

### Requirement: APU Semarang default naming
The system SHALL use `APU Semarang` as the default public-facing institutional name in all blueprinted page copy.

#### Scenario: Normalize homepage institutional statement
- **WHEN** homepage positioning copy is drafted
- **THEN** institutional references SHALL use `APU Semarang`

### Requirement: Controlled legal/history exception
The system MUST allow original IKMB naming only in legal/history provenance contexts and SHALL pair it with transition wording.

#### Scenario: Preserve decree citation language
- **WHEN** history block references establishment decree
- **THEN** original naming MAY remain with explicit transition context to APU Semarang

### Requirement: Naming QA gate
Before blueprint finalization, the system SHALL run a checklist confirming no unauthorized IKMB references remain.

#### Scenario: QA review of scholarships page copy
- **WHEN** scholarships blueprint is marked complete
- **THEN** QA output SHALL list all naming exceptions and confirm policy compliance
