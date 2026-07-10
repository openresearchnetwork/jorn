---
title: Publishing model
eyebrow: Distributed by design
display_title: The journal is the connective layer.
lede: Repositories preserve research objects. JORN coordinates review, certifies an accepted version, and maintains the authoritative relationship among them.
description: Understand JORN's proposed overlay publishing model and connected scholarly record.
---

## An overlay journal

A conventional journal often combines submission, file storage, peer review, production, metadata, and preservation in one system. JORN’s proposed overlay model separates these responsibilities so that each service can focus on what it does best.

Authors deposit research objects in established open services. JORN then provides editorial selection, peer review, integrity checks, certification, publication metadata, and continuing stewardship.

## A distributed architecture

| Research component | Possible host | JORN’s role |
| --- | --- | --- |
| Manuscript or preprint | arXiv, bioRxiv, medRxiv, Zenodo, or another trusted repository | Review and certify an exact version |
| Data | Zenodo, Figshare, OSF, institutional or disciplinary repositories | Assess availability, documentation, licensing, and links |
| Software | GitHub, GitLab, Codeberg, archived releases, Software Heritage | Review code, tests, documentation, license, and reproducibility |
| Protocol or preregistration | OSF, protocols.io, Zenodo, specialist services | Connect the study plan and methods to the reported work |
| Researcher identity | ORCID | Reliably identify authors, editors, and reviewers |
| Contributor roles | CRediT | Describe individual contributions |
| Journal record | JORN | Publish the certification, review history, metadata, and status |

## Two identifiers, two purposes

The repository identifier describes the deposited research object and its version history. A separate JORN DOI will identify the journal-certified publication. Metadata will connect the two, allowing readers to distinguish the preprint from the accepted work without erasing the research chronology.

## What JORN cannot outsource

The journal may distribute hosting and technical work, but it remains accountable for its identity, scope, governance, editorial independence, reviewer selection, final decisions, conflicts, integrity investigations, corrections, retractions, metadata, and continuity.

<div class="note-card" markdown>
### Platform direction

The first option to evaluate is Episciences, which is designed for repository-based overlay journals. Open Journal Systems or a lightweight open workflow may be considered if they better meet JORN’s needs. A fully custom platform is not the preferred starting point because it would add avoidable security, privacy, maintenance, and preservation responsibilities.
</div>

## Preservation and portability

Distributed publishing does not eliminate preservation duties. JORN will need exportable metadata, off-site backups, archived editorial records, stable identifiers, documented migration procedures, domain continuity, and a succession plan. It should avoid dependence on any single commercial platform.

