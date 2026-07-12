---
title: Software and code
eyebrow: Prepare
display_title: Connect development, preservation, execution, and review.
lede: Software central to a result needs an exact archived release, clear rights, documentation, tests, environment information, and an explicit relationship to the manuscript and data.
description: JORN requirements for source code, archived software releases, identifiers, environments, tests, citation, and external software review.
---

<div class="info-banner"><strong>Status: draft guidance.</strong> Named software-review organisations are examples for investigation, not current JORN partners.</div>

## Core package

Where software is central, normally provide public source code; an appropriate open-source licence; an immutable archived release; DOI, SWHID or equivalent identifier; documentation and installation instructions; tests; dependencies and environment specification; a citation file; contribution guidance; and links to the exact manuscript and data versions.

## Do not conflate these objects

| Object or process | Purpose |
| --- | --- |
| Development repository | Ongoing collaboration and change history |
| Archived release | Immutable, citable version assessed with the research |
| Software publication | Scholarly description and editorial record |
| Executable environment | Dependencies and configuration needed to run the version |
| Software peer review | Assessment of software under the provider’s defined criteria |
| Result reproduction | Execution of a specified research workflow and comparison of outputs |

An external review from JOSS, pyOpenSci, rOpenSci, or a discipline-specific community may be relevant evidence only after JORN checks the exact version, criteria, scope, reviewer process, conflicts and report. Their processes are not identical, not every script is eligible, and software review does not validate the paper’s scientific conclusions.

## Evidence for a verified claim

Name the release and commit, identifier, assessor, assessment date, criteria version, environment, tests or workflows run, outcomes, differences, exclusions and limitations. A later development commit does not inherit the claim automatically.

[Read external-assessment recognition](../external-assessments/){ .button .button--ink }
[Read the evidence badges](../badges/){ .button .button--outline }
