---
title: Synthetic data
eyebrow: Prepare
display_title: Name the purpose, evidence, privacy risk, and limits.
lede: Synthetic companion data, synthetic evaluation data, and simulation-generated data support different claims and must not be treated as interchangeable with restricted real data.
description: JORN guidance for synthetic companion, synthetic evaluation, simulation-generated, and restricted real data.
---

<div class="info-banner"><strong>Status: draft policy for pilot evaluation.</strong> JORN does not yet operate a secure clinical-data environment or an approved synthetic-data certification process.</div>

## Three categories

### Synthetic companion data

Used mainly to reproduce schema, formats, valid ranges, example inputs and outputs, software execution, or demonstration workflows. It may not preserve properties needed to validate scientific results.

### Synthetic evaluation data

Designed to preserve defined statistical, clinical, imaging, subgroup, or task-relevant properties for a stated evaluation. It needs stronger utility, fidelity, fairness, and privacy evidence.

### Simulation-generated data

Produced from a biological, physical, clinical, social, or technical model rather than synthesised directly from individual records. The model, assumptions, parameters and validation require documentation.

## Documentation required

Record why synthetic data were needed; intended use; relationship to source data; method, generator and version; source population and setting; excluded variables; statistical and task-specific utility; subgroup fidelity and rare-case behaviour; domain-expert review; disclosure-risk assessment; differential-privacy parameters where relevant; training, tuning, testing or demonstration use; validation against real data; ethics and governance; identifier, version, licence, provenance and limitations.

Do not state: “The data are synthetic and therefore anonymous.” State instead:

> The synthetic dataset underwent the disclosure-risk assessment described in this record.

## Separate claims

| Claim | Evidence required | What it does not establish |
| --- | --- | --- |
| Workflow executed using synthetic data | Exact workflow, synthetic version, environment and outputs | Agreement with restricted real data |
| Synthetic-data utility assessed | Purpose-specific fidelity and utility tests | Privacy safety |
| Synthetic-data privacy assessed | Threat model, disclosure-risk method, results and limitations | Scientific utility |
| Reported analysis checked against restricted real data | Authorised evaluator, secure route, exact versions and comparisons | Independent clinical validation |
| Model validated using independent real clinical data | Independent cohort, protocol, outcomes, governance and limitations | General safety or deployment approval |

## Medical and sensitive contexts

Clinical utility, subgroup behaviour, rare cases and disclosure risk require qualified specialists. AI triage must not ingest patient-level data. If JORN lacks a lawful, secure, independently reviewed access route, it must decline or pause that verification rather than imply it occurred.

[Read data and responsible-access guidance](../data/){ .button .button--ink }
[See the illustrative record](../publications/illustrative-record/){ .button .button--outline }
