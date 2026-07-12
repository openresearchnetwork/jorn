---
title: Open Science Readiness Check
eyebrow: Prepare
display_title: Find missing evidence before human review.
lede: The proposed Readiness Check turns the Implementation Guide into an actionable, dimensional assessment without producing a score, badge, or publication decision.
description: Learn how the JORN Open Science Readiness Check records evidence, gaps, next actions, restrictions, and human-review needs.
---

<div class="info-banner"><strong>Status: specification for pilot testing.</strong> No operational checker or approved AI system is currently available. A completed check is not a submission, review, certification, or endorsement.</div>

## What the check records

For every applicable dimension, select one readiness state:

- Complete
- Partially complete
- Missing
- Not applicable
- Restricted with justification
- External assessment available
- Human verification required
- JORN verification complete

Every selection should link to evidence and name the person responsible for the answer. “Not applicable” and restrictions require a short explanation; they are not penalties.

## What users receive

For missing or partial items, the check should explain why the item matters, minimum requirements, next actions, acceptable evidence, service-selection criteria, equivalent alternatives, ethical or legal cautions, and discipline-specific guidance. An export should include criteria version, date, object versions, answers, evidence links, unresolved items, and an audit history.

> **Self-assessment or AI-assisted assessment—not reviewed or certified by JORN**

That statement must appear prominently on every non-verified export. Official badges must never be generated from self-assessment alone.

## Self-assessment and AI assistance

The self-assessment is controlled by the user. A future approved AI component may extract identifiers, detect licences and versions, find internal inconsistencies, and draft a remediation report. It must show its uncertainty and evidence. Authors can correct factual errors and request human reconsideration.

An AI result remains **AI-assisted screening**, even when all items appear complete. It cannot establish scientific quality, ethical adequacy, misconduct, certification, or acceptance. See the [AI-assisted triage framework](../ai-triage/).

## Example output

| Dimension | Readiness | Evidence | Next action | Verification need |
| --- | --- | --- | --- | --- |
| Manuscript | Complete | Preprint identifier and version | Freeze submitted version | Deterministic identifier check |
| Data | Restricted with justification | Public metadata and access procedure | Confirm lawful evaluator route | Privacy and domain specialist |
| Software | Partially complete | Source repository | Archive a release and add licence | Software evaluator |
| Figures | Missing | None supplied | Deposit source-data package and alt text | Open-science review |
| Scientific review | External assessment available | Version-specific reports | Assess recognition criteria | Handling editor |

This table is not an aggregate score. A complete package can still require substantial scientific revision, and an incomplete package may be improved before review.

## Privacy boundary

Public objects may be checked under a disclosed process. Unpublished manuscripts, confidential reviews, reviewer identities, controlled patient data, personal data, ethics files, security-sensitive code, and proprietary material must not enter consumer or unapproved AI systems. Sensitive processing requires an approved secure environment and published controls.

[Use the Implementation Guide](../guide/){ .button .button--ink }
[Read the triage safeguards](../ai-triage/){ .button .button--outline }
