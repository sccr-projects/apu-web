## Context

APU content launch planning needs to convert existing `kmb.ac.id` ecosystem content into a page-complete APU Semarang website aligned with `apu-web-plan/apu-website-content-plan.md` criteria. Source quality is uneven: admissions and program narratives are rich, while leadership roster depth, student services SOPs, international policy details, and contact directory completeness are partial.

Constraints:
- Must base coverage decisions on crawl evidence from `kmb.ac.id` and relevant subdomains (`scholarship`, `international`, program subdomains, and linked research context).
- Must follow APU design-system primitives in `src/styles/global.css` and reusable Astro components (`SectionHeader.astro`, `CtaButton.astro`).
- Must normalize public naming from IKMB to **APU Semarang** while preserving legal/historical context where required.
- Must separate implementable scope vs missing-data backlog to avoid blocking P0 launch pages.

Stakeholders:
- Admissions/marketing (conversion content)
- Academic units (program correctness)
- International office
- Research/LPPM ecosystem owners
- Web implementation team

## Goals / Non-Goals

**Goals:**
- Produce deterministic page-by-page coverage verdicts against must-have criteria.
- Define implementation blueprint for pages that can be shipped now, mapped to APU section/component language.
- Produce a missing-content register for all unmet criteria with source gap and owner suggestions.
- Standardize naming migration rules so new copy is consistent with APU Semarang positioning.

**Non-Goals:**
- No direct coding/UI implementation in this change.
- No legal claim hardening for SCCR ownership language (keep collaboration framing).
- No invention of unverifiable KPI/outcome metrics.

## Decisions

1. **Decision: Criteria-first audit matrix per sitemap page**  
   - Why: Gives objective pass/partial/fail results and direct traceability to must-have blocks.  
   - Alternative considered: Narrative summary only; rejected because it hides requirement-level gaps.

2. **Decision: Dual-output planning model (implementation plan + missing markdown)**  
   - Why: User requested implementation when criteria can be fulfilled, and explicit missing list when not.  
   - Alternative considered: Single blended doc; rejected because execution and gap-remediation owners differ.

3. **Decision: Componentized content mapping to APU design primitives**  
   - Why: Ensures content migration is directly buildable in current Astro/Tailwind v4 design contract with low fragmentation.  
   - Alternative considered: Free-form section design; rejected due to inconsistency risk.

4. **Decision: Naming normalization policy with exception classes**  
   - Why: Prevents inconsistent replacement and protects legal/historical references.  
   - Alternative considered: Global string replacement; rejected due to provenance and compliance errors.

5. **Decision: Phase prioritization aligned with existing plan P0/P1/P2**  
   - Why: Keeps implementation momentum on conversion-critical pages while tracking missing institutional data separately.  
   - Alternative considered: Big-bang completion; rejected due to dependency on unavailable data.

## Risks / Trade-offs

- **[Risk] Live source volatility (content/URLs change during implementation)** → Mitigation: capture source URL + retrieval date in audit artifacts; re-verify before coding each page.
- **[Risk] Naming replacement over-corrects legal/historical references** → Mitigation: use rule-based replacement categories (public marketing copy vs legal/history citations).
- **[Risk] Incomplete stakeholder-owned datasets (leadership, service SOPs, accreditation details)** → Mitigation: classify as blocking/non-blocking; ship P0 with clearly marked placeholders and backlog tickets.
- **[Risk] Cross-domain style/content mismatch after migration** → Mitigation: enforce section composition through existing `apu-*` primitives and shared components.
- **[Risk] SCCR wording interpreted as ownership claim** → Mitigation: keep “collaboration ecosystem” wording unless legal approval provided.
