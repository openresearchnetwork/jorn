---
title: Publishing model
eyebrow: Overlay architecture
display_title: Repositories hold the objects. JORN publishes the journal record.
lede: The proposed model separates repository preservation from editorial responsibility while connecting exact versions through a permanent, citable JORN Publication Record.
description: Understand JORN's proposed overlay architecture, DOI model, versioning, metadata, preservation, and certification boundary.
---

## How the overlay works

Authors place manuscripts and supporting objects in repositories appropriate to each object. JORN does not merely point to those deposits. It conducts editorial screening, appoints reviewers, assesses revisions, makes a formal decision, and publishes accepted work under the JORN title.

| Layer | Holds or performs | Continuing responsibility |
| --- | --- | --- |
| External repositories | Manuscript files, data, software releases, protocols, preregistrations, and version history | Object access and preservation under repository terms |
| JORN editorial process | Screening, editor assignment, scientific review, optional artifact or computational assessment, revision, and decision | Fair process, conflicts, integrity, appeals, and decision quality |
| JORN Publication Record | Citation, DOI, abstract, accepted versions, connections, reports, decision, certification profile, and current status | Metadata, evidence, corrections, retractions, and continuity |

## What JORN publishes

The primary publication is the **JORN Publication Record**. It identifies the exact accepted manuscript and every supporting object within the review scope; states which objects were unavailable, restricted, or not applicable; presents the editorial history; and records the scope and limits of certification.

The manuscript may remain in its repository rather than being silently copied into an independent, unversioned journal file. JORN must nevertheless retain enough metadata and editorial evidence to preserve the meaning of its decision.

## The certificate supports the publication; it does not replace it

The **JORN Certified Record** seal is a status attached after JORN has reviewed, accepted, and published the work. It links back to the Publication Record. A technical certificate, successful software run, or badge without a formal editorial decision is not a JORN publication.

Optional badges document specific additional assessments and do not create levels of publication quality.

## Identifiers have different purposes

- The **JORN DOI** identifies the journal Publication Record.
- A manuscript or preprint identifier identifies the repository-hosted manuscript and its version history.
- Data identifiers identify exact datasets or access records.
- Archived-release identifiers identify preserved software releases.
- Protocol and preregistration identifiers identify their own research objects.

Crossref- and DataCite-compatible relationships should express connections such as version, supplement, software, data, review, correction, and update. The DOI registration agency and metadata workflow are **[TO BE CONFIRMED BEFORE PUBLICATION]**.

## Exact versions and computational environments

Acceptance applies to an exact manuscript version. Software should have an archived release separate from the changing development repository. The record should identify source commit, release identifier, dependencies, container or environment specification where available, operating context, and assessment date.

If authors revise work after acceptance, JORN should publish a correction, update, or superseding record according to the significance of the change. It must not silently move certification to a different object version.

## If an external object changes or disappears

JORN should monitor critical links, retain deposited metadata and checksums where appropriate, use preservation services, and direct authors toward repositories with durable versioning. If an object becomes unavailable, the Publication Record will state the change, its effect on access or assessment, and whether the certification remains current, corrected, suspended, superseded, or withdrawn.

JORN remains responsible for its citation, DOI, editorial evidence, status history, and notices even when it does not host the underlying files.

## Architecture diagram

The intended public diagram has three levels:

1. **Research repositories:** exact manuscript, data, software release, source, environment, protocol, and preregistration.
2. **Journal process:** screening, editor, scientific review, optional artifact evaluation, optional computational check, revision, and decision.
3. **JORN Publication Record:** citation and DOI, connected identifiers, public editorial history, certification profile, badges and limitations, and continuing status.

Arrows should show version-specific metadata flowing into the journal process and the final record linking back to—not replacing—the repository objects.

## Platform and preservation direction

JORN should evaluate a mature overlay platform before building custom submission software. Relevant benchmarks include Episciences and repository-based review models. Selection must consider privacy, role-based access, public-review support, metadata export, DOI workflows, preservation, accessibility, security, and migration.

Platform selection, repository eligibility, preservation partners, backup schedule, and closure plan are **[TO BE CONFIRMED BEFORE PILOT LAUNCH]**.

