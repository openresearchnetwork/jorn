---
title: Open Science Workflow and Services Guide
eyebrow: Prepare
display_title: Prepare a complete, connected research package.
lede: Follow the research lifecycle, distinguish required outcomes from optional services, assess what is missing, and understand what JORN may verify or recognise.
description: JORN's founding-stage workflow and services guide for research objects, identifiers, licences, evidence, review routes, implementation levels, and equivalent platforms.
---

<div class="info-banner"><strong>Status: draft guide for public testing.</strong> JORN is in a founding and feasibility phase. These requirements are proposed for the pilot and become operational only after approval. Using this guide does not imply endorsement, peer review, certification, scientific validity, journal acceptance, or compliance with every legal or ethical duty.</div>

## Assess your research package

Use this guide to identify the objects and declarations your work needs, separate mandatory outcomes from recommended practices, compare suitable services, record responsible exceptions, and prepare evidence for human review.

[Download the readiness checklist (CSV)](../assets/jorn-open-science-readiness-checklist.csv){ .button .button--ink }
[Propose pilot work](../submit/){ .button .button--outline }

> **Self-assessment—not reviewed or certified by JORN.**

## Research lifecycle

<div class="lifecycle-map" aria-label="Open-science lifecycle from identity to continuing stewardship">
<span>1. Identity & contributors</span><b aria-hidden="true">→</b><span>2. Plan & register</span><b aria-hidden="true">→</b><span>3. Manuscript & objects</span><b aria-hidden="true">→</b><span>4. Screen & review</span><b aria-hidden="true">→</b><span>5. Decide & certify</span><b aria-hidden="true">→</b><span>6. Preserve & correct</span>
</div>

The detailed sequence is: researcher identity; affiliation; contributor roles; planning and collaboration; protocols and preregistration; manuscript and preprint; research data; sensitive data; synthetic and simulated data; source code; archived software release; computational environment and workflow; figures and media; resources and materials; scientific peer review; open-science review; artifact assessment; AI-assisted editorial triage; certification and badges; the JORN Open Research Record; and continuing stewardship.

## How to read the labels

<div class="card-grid card-grid--two" markdown>
<div class="plain-card" markdown>
### Required standard or outcome
The author must satisfy the outcome unless a published exception applies. A required outcome does not make one platform mandatory.</div>
<div class="plain-card" markdown>
### Recommended service
A practical option. An equivalent service is acceptable when it meets the same criteria. Recommendation is not partnership, universal endorsement, guaranteed preservation, or automatic certification.</div>
<div class="plain-card" markdown>
### Recognised assessment provider
JORN may accept a defined, version-specific external assessment as evidence after reviewing its criteria, process, report, limitations, and need for supplementary assessment. **None is confirmed yet.**</div>
<div class="plain-card" markdown>
### Integrated provider or formal partner
Integration requires a working, documented technical exchange. Partnership requires a formal agreement covering responsibilities, data, conflicts, governance, branding, duration, and editorial independence. **None is confirmed yet.**</div>
</div>

JORN prescribes outcomes and evidence, not vendors. Service availability, fees, scope, access controls, and terms may change; authors must check the official service documentation and choose an appropriate option.

## Implementation levels

| Level | Meaning | Minimum evidence |
| --- | --- | --- |
| **0 — Not documented** | The applicable object or practice is absent, unclear, or not assessable. | Gap and next action recorded |
| **1 — Transparent** | Existence, location, owner, access status, restrictions, and limitations are disclosed. | Versioned statement and links |
| **2 — Accessible, citable, and responsibly managed** | The object is appropriately deposited or registered, identified, versioned, documented, connected, licensed or governed, and preserved. | Exact object, metadata, identifier, version, rights, and access evidence |
| **3 — Independently verified** | JORN or a qualifying external evaluator examined the exact object under published criteria. | Assessor, date, criteria, report, outcomes, differences, exclusions, and limits |

For every dimension, record the current level, evidence, missing elements, next action, verifier, and limitations. Do not average levels into a score. Any overall designation would conservatively use the lowest level among applicable mandatory dimensions **[TO BE CONFIRMED]**.

> This level describes implementation of the JORN Open Science Framework. It is not a measure of scientific quality, correctness, novelty, importance, or impact.

[Read the full implementation-level explanation](../implementation-levels/)

## Requirements and services map

<div class="matrix-table" markdown>

| Stage | Research object or practice | Required outcome | Mandatory? | Recommended services | Equivalent alternative | External assessment | Evidence and JORN check |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Identity | Individual author | Authenticated ORCID iD before final acceptance | Required for each living individual author; exceptions below | [ORCID](https://orcid.org/) | No equivalent identifier for this proposed requirement | None confirmed | Authentication record; match to author; connection to final record |
| Affiliation | Author status and organisation | Truthful status; ROR when a genuine named organisation has a suitable record | Required | [ROR](https://ror.org/) for organisations | Independent, unaffiliated, self-employed, retired, community, or another accurate status | None | Author declaration; current genuine relationship; ROR match where applicable |
| Contributions | Contributor statement | Confirmed CRediT roles | Required | [CRediT](https://credit.niso.org/) | Mapped structured roles only if JORN approves equivalence | None | Each contributor confirms assigned roles |
| Planning | Collaborative project record | Access, history, documentation, versioned files, export, and links | Recommended unless needed by design or policy | [OSF](https://osf.io/) | Institutional environments, Git, ELNs, or disciplinary systems meeting the outcome | None | Project record and export; access and change history |
| Registration | Protocol or preregistration | Timestamped, versioned plan and transparent deviations | Required when applicable to design or claim | [OSF Registrations](https://help.osf.io/article/330-welcome-to-registrations), [protocols.io](https://www.protocols.io/), [ClinicalTrials.gov](https://clinicaltrials.gov/), [PROSPERO](https://www.crd.york.ac.uk/prospero/) | Qualified discipline-specific registry | None | Identifier, timestamp, version, terms, plan–study comparison |
| Manuscript | Preprint or repository manuscript | Public, stable, versioned, citable manuscript; restricted-review exception where justified | Required | [arXiv](https://arxiv.org/), [bioRxiv](https://www.biorxiv.org/), [medRxiv](https://www.medrxiv.org/), [SciELO Preprints](https://preprints.scielo.org/), [Zenodo](https://zenodo.org/) | Suitable disciplinary or institutional repository | External scientific review may be assessed separately | Identifier, version, title, authors, ORCIDs, licence, date, abstract, object links |
| Data | Claim-supporting dataset | Identified, versioned, cited, documented, governed, preserved, and connected | Required when data support a claim | Discipline repository first; then institutional; [Dataverse](https://dataverse.org/), [Dryad](https://datadryad.org/), [Zenodo](https://zenodo.org/), [Figshare](https://figshare.com/); discover via [re3data](https://www.re3data.org/) | Any repository meeting JORN criteria | Qualified data assessment **[TO BE CONFIRMED]** | DOI/PID, version, metadata, provenance, dictionary, licence/access, preservation |
| Sensitive data | Controlled dataset | Public metadata plus lawful access, governance, custodian, and verification route | Required where applicable | Qualified controlled-access or institutional repository | Secure environment meeting policy | Secure verification **[TO BE CONFIRMED]** | Data-use terms, permissions, security, retention, disclosure limits |
| Cloud data | Large externally stored release | Scholarly citation and metadata layer over frozen, manifested cloud objects | Required if cloud storage is used | Repository or institutional [DataCite](https://datacite.org/) record; [RO-Crate](https://www.researchobject.org/ro-crate/) | Any compliant PID, landing page, manifest, governance, and preservation layer | None confirmed | DOI/PID, version IDs, checksums, manifest, custodian, retention and exit plan |
| Synthetic data | Synthetic or simulated release | Purpose, method, source relationship, risk, utility, provenance, licence, and limits | Required where supplied | Appropriate data repository | Equivalent repository meeting data criteria | Utility/privacy/secure verification assessed separately **[TO BE CONFIRMED]** | DOI, exact generator/version, risk and fidelity evidence; claims kept distinct |
| Source code | Development repository | Public history, documentation, OSI-approved licence, tag, tests where practical, and object links | Required when code materially supports a claim | [GitHub](https://github.com/), [GitLab](https://gitlab.com/), [Codeberg](https://codeberg.org/) | Institutional or community Git service with equivalent access and export | JOSS, pyOpenSci, rOpenSci are candidates only | Repository, history, licence file, tag, docs, dependencies, tests |
| Software release | Immutable archived release | DOI, SWHID, or equivalent PID for the exact release | Required when software materially supports a claim | [Zenodo](https://zenodo.org/), [Software Heritage](https://www.softwareheritage.org/) | Qualified institutional software archive | External software assessment may be recognised **[TO BE CONFIRMED]** | Release, commit, archive PID, citation metadata, manuscript/data relationships |
| Environment | Computational environment | Sufficient versioned information and instructions to recreate execution | Required when computation is central | Conda or language lockfiles, [Docker](https://www.docker.com/), [Apptainer](https://apptainer.org/), [Binder](https://mybinder.org/) | Any equivalent environment or workflow technology | Artifact evaluator | Lockfile, manifest, image ID, OS/hardware, seeds, commands, archived release |
| Figures | Substantive visual or media package | Traceable source, method, rights, version, provenance, caption, and alt text | Required where applicable | [Figshare](https://figshare.com/), [Zenodo](https://zenodo.org/), disciplinary image repositories | Institutional or specialist repository meeting criteria | Artifact or accessibility assessment where applicable | Source data/code, package version, licence, attribution, alt text, manuscript link |
| Resources | Materials, models, samples, instruments | Identified, described, accessible or responsibly restricted, and connected | Required when material to a claim | Discipline registries and repositories | Equivalent persistent record | Specialist assessment where applicable | Identifier, version/batch, provider, terms, provenance and availability |
| Scientific review | Manuscript and claims | Qualified disciplinary review of methods, analysis, interpretation, ethics, and conclusions | Required for publication | Qualified external community where available | JORN-appointed reviewers | [PCI](https://peercommunityin.org/), [Review Commons](https://www.reviewcommons.org/), [PREreview](https://prereview.org/) are candidates for investigation, not recognised providers | Exact reviewed version, expertise, selection, conflicts, reports, responses, revisions |
| Open-science review | Implementation evidence | Review of identifiers, versions, repositories, rights, access, metadata, and provenance | Required for certification | JORN reviewer or qualifying external evaluator | Equivalent qualified assessment | None confirmed | Criteria version, evidence, level, assessor, differences and limits |
| Artifact review | Software, data, workflow, outputs | Bounded functional, usability, execution, or reproduction finding | When claimed or required by article type | JORN evaluator or qualifying specialist | Equivalent documented assessment | JOSS, pyOpenSci, rOpenSci and other communities assessed claim by claim | Exact artifact, version, environment, commands, outcomes, tolerances, exclusions |
| Triage | Submitted research package | Human-confirmed route into review | Proposed pilot stage | Approved deterministic tools and AI system **[TO BE CONFIRMED]** | Human editorial triage | Not an external assessment or peer review | Inputs, system/version, criteria, uncertainty, report, editor confirmation, corrections |
| Certification | Dimensional profile and badges | Exact, bounded, human-approved verified claims | Required after acceptance for certification | JORN record | None | Qualifying evidence may be recognised | Levels, evidence, verifier, criteria, date, limitations and status |
| Publication | JORN Open Research Record | One citable record connecting exact objects, reviews, decisions, evidence, and status | Required after acceptance | JORN platform and DOI route **[TO BE CONFIRMED]**; metadata may use [Crossref](https://www.crossref.org/documentation/), [DataCite](https://datacite.org/), [RO-Crate](https://www.researchobject.org/ro-crate/), or [COAR Notify](https://coar-notify.net/) where applicable | No substitute for the journal record | Recognised evidence linked, not relabelled | Accessible HTML/PDF, DOI, BibTeX, RIS, CSL JSON, JSON-LD, RO-Crate or equivalent |
| Stewardship | Preservation and status | Maintain metadata, corrections, concerns, withdrawals, retractions, and current links | Required | JORN plus underlying repositories | Approved preservation and migration routes | None | Change history, notices, checks, current status, closure plan |

</div>

No named service is a JORN partner, integration, or currently recognised provider unless it appears with evidence in the [relationship register](../community/relationships/).

## Detailed lifecycle guidance

### 1. Researcher identity

**Purpose and applicability:** identify every individual author and connect contributions reliably. **Required:** every living individual author authenticates an ORCID iD before final acceptance; manually typed iDs do not satisfy the proposed rule. **Evidence/JORN check:** OAuth authentication record, author match, and connection to the Open Research Record. **Exceptions:** deceased authors cannot authenticate; the editor documents identity and contribution. Consortium authorship must identify accountable individuals and group-author metadata. Reviewer and editor iDs may be collected privately and are disclosed only under the review policy. **Common mistake:** copying an ORCID from a manuscript without authentication. **Next action:** authenticate through the approved workflow **[TO BE CONFIRMED]**.

### 2. Affiliation and organisations

**Purpose:** report a truthful research context without excluding independent scholars. **Required:** choose an accurate organisational, independent, unaffiliated, self-employed, retired or emeritus, community or civil-society, or other described status. Add a ROR identifier only for a current, genuine organisation with an appropriate record. **Recommended examples:** [IGDORE](https://igdore.org/affiliation/) and the [Ronin Institute](https://www.ronin-institute.org/terms-of-membership) may support eligible independent researchers under their own current terms, but membership is optional and must be genuine; JORN neither assigns those affiliations nor claims partnership. **Mistake:** joining or naming an organisation only to appear eligible. **Next action:** confirm the status and current relationship.

### 3. Contributor roles

**Purpose:** make responsibility and credit explicit. **Required:** assign CRediT roles to authors and named contributors and let each person review them. CRediT complements rather than determines authorship. **Evidence:** confirmed contribution statement. **Mistake:** assigning roles without contributor review. **Next action:** circulate the final role matrix for confirmation.

### 4. Project planning and collaboration

**Purpose:** preserve decisions, access, history, and links before publication. **Recommended:** OSF is one option; institutional environments, Git repositories, electronic lab notebooks, and discipline platforms are equivalent when they support appropriate access, documentation, versioning, registration, export, and links. **Exception:** the platform may remain private during active work. **JORN check:** only the evidence needed for the declared claim. **Next action:** export or freeze the relevant project history.

### 5. Protocols and preregistration

**Applicability:** required when relevant to the design or stated claim, not for every study. **Required evidence:** PID, timestamp, exact version, licence or access terms, and a transparent comparison of plan and final study. **Recommended services:** OSF Registrations, protocols.io, ClinicalTrials.gov, PROSPERO, or a suitable disciplinary registry. **Mistakes:** retrospective registration presented as prospective; silent deviations. **Responsible exception:** explain why registration was not applicable or could not be public. **Next action:** link the plan and deviation statement.

### 6. Manuscript and preprint

**Purpose:** preserve the exact scholarly argument reviewed and accepted. **Required:** a public, versioned, citable manuscript unless a documented restricted-review exception applies; include PID, version, title, authors, authenticated ORCIDs by acceptance, licence, date, abstract, and object links. Choose a service by discipline and policy. **Mistake:** linking a mutable file or only a project homepage. **JORN check:** exact version and accepted-version preservation. **Next action:** deposit or version the manuscript.

### 7. Research data

**Applicability:** required whenever data support a claim. Prefer a suitable disciplinary repository, then trusted institutional, then general repository. **Required:** PID, exact version, citation, access status, metadata, provenance, documentation or dictionary, licence or terms, preservation plan, and relationships. **Initial open-data licence options:** [CC0](https://creativecommons.org/publicdomain/zero/1.0/) for maximum reuse, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) where attribution is a legal condition, and [ODC-By, ODbL, or PDDL](https://opendatacommons.org/licenses/) for intentionally selected database terms. The accepted list requires qualified legal review **[TO BE CONFIRMED]**. **Mistake:** applying an open licence without authority or to controlled personal data. **Next action:** select a repository and obtain rights review.

### 8. Sensitive and controlled-access data

**Purpose:** enable accountable review without irresponsible disclosure. **Required:** public metadata where appropriate, access conditions, data-use agreement, permitted purposes, security and disclosure controls, retention or destruction terms, custodian, and lawful verification route. Do not apply an open licence to restricted patient, personal, confidential, security-sensitive, or community-governed data. **JORN check:** justification and whether qualified review is possible; JORN has no confirmed secure-data capability. **Next action:** document governance before proposing work.

### 9. Synthetic and simulated data

**Purpose:** support workflow demonstration or a defined evaluation where real data cannot be shared. Distinguish synthetic companion, synthetic evaluation, simulation-generated, controlled real data, and secure verification. **Required:** purpose, generator and version, source relationship, population, privacy risk, statistical and task utility, subgroup behaviour, domain review, limitations, use stage, real-data validation, ethics, DOI, version, licence, and provenance. **Mistake:** saying synthetic means anonymous or clinically validated. **JORN check:** keep workflow execution, utility, privacy, restricted-data verification, and independent real-data validation as separate claims. **Next action:** state exactly which claim the synthetic release supports.

### 10. Software and source code

**Applicability:** required when code materially supports a claim. **Required:** public source, version history, tagged release, documentation, execution instructions, dependencies, environment, tests where practical, citation metadata, object relationships, and a licence from the [OSI-approved list](https://opensource.org/licenses). **Recommended:** GitHub, GitLab, Codeberg, or equivalent Git service. **Mistake:** using a Creative Commons content licence for source code or linking only a mutable branch. **Next action:** add the licence file, documentation, tag, and archive link.

### 11. Archived software releases

**Purpose:** make the exact assessed software immutable and citable. **Required:** archive the tagged release with DOI, SWHID, or equivalent identifier; a development repository alone is insufficient. **Recommended:** Zenodo, Software Heritage, or qualified institutional archive. **JORN check:** release–commit–manuscript relationship. **Next action:** archive the release and cite it.

### 12. Computational environments and workflows

**Applicability:** required when computation is central. **Evidence options:** lockfile, package manifest, container definition and immutable image identifier, workflow, notebook, seeds, hardware and operating-system requirements, instructions, and archived environment. No specific container or language is mandatory. **Mistake:** naming only “Python” or a moving container tag. **JORN check:** whether the declared environment is sufficiently exact for the bounded assessment. **Next action:** freeze dependencies and write execution instructions.

### 13. Figures, images, tables, and media

**Purpose:** connect substantive visuals to their evidence and make them accessible. **Required:** source data, generation method or code, caption, attribution, licence, exact version, provenance, alt text, and manuscript relationship. A separate DOI is not required for every decorative image or panel; one versioned figure-and-source package is usually preferable. **Recommended:** Figshare, Zenodo, specialist image or institutional repositories. **Next action:** package sources and accessibility text.

### 14. Research resources and materials

**Applicability:** samples, models, reagents, instruments, surveys, stimuli, hardware, or other resources material to a claim. **Required:** stable identifier where available, version or batch, provider, provenance, availability, rights, restrictions, and manuscript relationship. **Exception:** physical or protected material may be described without public distribution. **Next action:** create a persistent catalogue or repository record.

### 15. Scientific disciplinary review

**Purpose:** evaluate field relevance, question, contribution, methods, analysis, interpretation, supported conclusions, ethics, and disciplinary standards. JORN seeks qualified external-community review when suitable; otherwise it appoints reviewers. **Evidence:** exact version, reviewer expertise and selection, conflicts, criteria, reports, response, revisions, transfer permission, and integrity. **Mistake:** treating open comments or software checks as scientific review. **Next action:** identify required expertise and any existing review.

### 16. Open-science implementation review

**Purpose:** assess identifiers, versions, repositories, licences, access, metadata, documentation, provenance, and levels. **Required for certification:** version-specific report with evidence and limits. It does not determine scientific correctness. **External recognition:** none confirmed. **Next action:** resolve Level 0 and Level 1 gaps before verification.

### 17. Artifact and reproducibility assessment

**Purpose:** make bounded findings about software function, data usability, environment execution, outputs, synthetic-data utility, or secure verification. **Candidate providers:** [JOSS](https://joss.readthedocs.io/en/latest/review_criteria.html), [pyOpenSci](https://www.pyopensci.org/software-peer-review/), [rOpenSci](https://ropensci.org/software-review/), and qualified disciplinary communities; none is currently recognised by JORN. Their scopes differ, and their software review does not validate the associated paper. JORN may assess artifacts directly. **Next action:** identify the exact artifact, version, claim, environment, and tolerance.

### 18. AI-assisted editorial triage

**Purpose:** help determine whether the package appears sufficiently complete, in scope, and reviewable to enter the human-review pipeline. Outcomes are **Ready for human review**, **Author action required**, or **Human editorial triage required**. During the pilot, an editor confirms every route; authors can correct facts and request human reconsideration; AI cannot autonomously reject, select reviewers, certify, or decide publication. Confidential or restricted content must not enter an unapproved system. **Next action:** review the [detailed triage safeguards](../ai-triage/).

### 19. Certification and evidence badges

**Purpose:** publish a dimensional implementation profile and independent bounded claims after acceptance. **Required evidence:** exact object, version, assessor, date, criteria, checks, results, differences, exclusions, limits, and status. Self-assessment cannot generate a badge. JORN will not add new pilot badges without policy approval. **Next action:** read [certification](../certification/) and [badge criteria](../badges/).

### 20. JORN Open Research Record

**Purpose:** provide the citable journal publication after a JORN editor accepts the exact package. It connects title, abstracts, authors, ORCIDs, affiliations, RORs, CRediT roles, manuscript, preprint, data, synthetic data, software, releases, environments, workflows, figures, protocols, reviews, responses, external assessments, triage disclosure, levels, certification, badges, limits, corrections, and current status. The JORN record receives the journal DOI; underlying objects retain their identifiers. Planned outputs include accessible HTML and PDF plus BibTeX, RIS, CSL JSON, JSON-LD, and RO-Crate or equivalent export **[TO BE CONFIRMED BEFORE PUBLICATION]**. **Next action:** review the [record specification](../open-research-record/).

### 21. Preservation, corrections, and continuing status

**Purpose:** keep the meaning and status of the publication clear when objects, links, evidence, or conclusions change. **Required:** preserved metadata, monitored critical links, visible version and status history, correction and integrity notices, migration and closure arrangements. **Mistake:** silently replacing an accepted object. **Next action:** identify the steward and preservation route for every critical object.

## Responsible exceptions

A responsible exception is documented, justified, reviewable, and no broader than necessary. It does not silently waive a requirement.

- **Identity:** deceased authors cannot authenticate; group authorship needs accountable individuals and structured group metadata.
- **Affiliation:** independent or unaffiliated status is acceptable; false or convenience affiliations are not.
- **Registration:** applicability depends on design and claim; explain non-applicability and deviations.
- **Manuscript:** temporary restricted review may be considered only under an approved policy.
- **Data and materials:** privacy, consent, security, community or Indigenous governance, legal restrictions, and physical limits may require controlled access or non-distribution.
- **Synthetic data:** may support a demonstration or defined evaluation, but cannot silently substitute for real-data validation.
- **Discipline variation:** a different identifier, repository, workflow, or evidence form may be accepted when it meets the published outcome and an editor documents equivalence.

## Review routing

```text
AI-assisted editorial triage
        ↓
Editor confirmation
        ↓
Qualified external community available?
        ├── Yes → external or coordinated review
        └── No  → JORN-appointed reviewers
        ↓
Open-science and artifact assessment
        ↓
JORN editorial decision
        ↓
Open Research Record and certification
```

An external review can be recognised in full, in part, supplemented, or declined. Public comments do not automatically become commissioned peer review. In every route, an unconflicted JORN editor remains responsible for reviewer sufficiency, revisions, and the final decision.

## Readiness checklist

For each lifecycle stage, record:

- applicable, not applicable, or restricted with justification;
- Level 0, 1, 2, or 3;
- required outcome met, partial, or missing;
- exact identifier and version;
- evidence link and access status;
- licence or access terms;
- external assessment and its scope;
- missing element and next action;
- responsible person;
- human or specialist verification required;
- known limitations.

[Download the readiness checklist (CSV)](../assets/jorn-open-science-readiness-checklist.csv){ .button .button--ink }
[Use the readiness guidance](../readiness/){ .button .button--outline }

> **Self-assessment—not reviewed or certified by JORN.**

## Decisions required before operation

The founding bodies must approve the final ORCID exceptions and authentication workflow; ROR matching rule; CRediT confirmation process; accepted data-licence list; cloud-data and repository criteria; recognised repositories and software reviews; external-review recognition process; implementation-level applicability and any overall designation; AI provider, inputs, privacy, security, performance thresholds, and reconsideration route; secure-data capability; and reviewer workload and compensation model.

Until a decision is published with an owner, criteria version, date, and change history, it remains **[TO BE CONFIRMED]**.

## Related JORN pages

- [Aims and scope](../scope/)
- [Editorial process](../editorial-process/)
- [Founding pilot](../pilot/)
- [Propose pilot work](../submit/)
- [Certification](../certification/)
- [Evidence badges](../badges/)
- [Reviewer network](../reviewers/)
- [Policy register](../about/policies/)
- [Frequently asked questions](../faq/)

## Ownership, review, and change history

**Content owner:** **[TO BE CONFIRMED BEFORE POLICY APPROVAL]**
**Editorial and legal review:** **[TO BE CONFIRMED]**
**Review schedule:** at least annually and whenever a named service, criteria version, licence policy, or JORN workflow materially changes **[TO BE APPROVED]**
**Current version:** Draft 0.2 · 12 July 2026
**Change history:** Draft 0.2 adds identity, affiliation, cloud-data, licensing, service-equivalence, review-routing, and lifecycle requirements. Earlier drafts remain available through the public source history.
