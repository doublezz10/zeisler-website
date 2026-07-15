# Copy Deck — ZachZeisler.com

Status: **Copy Gate A approved — source of truth for implementation**

This document is a proposed copy set for the website redesign. It is not production content. No row should be implemented until its status is changed to `Approved` by Zach.

## Review instructions

For each row, respond with one of:

- `Approved`
- `Revise: [your wording]`
- `Reject`
- `Needs fact check: [answer or source]`

For rows with alternatives, choose one option or provide a third version. Do not approve a row with unresolved factual questions.

Status values in this document are intentionally set to `Pending`, `Needs fact check`, or `Choice required`.

## Open decisions requested

1. Should the public name be `Zach Zeisler` or `Zachary R. Zeisler`? The draft uses `Zach Zeisler` for the site and reserves the full name for formal citation contexts.
2. Is the exact current role `Postdoctoral Fellow`? Confirm capitalization and whether `Postdoctoral Research Fellow` is preferred.
3. Should the homepage say `systems neuroscientist`, `neuroscientist`, or another description?
4. For postdoctoral research, choose the detailed or conservative version in `HOME-RESEARCH-003` and `CV-RESEARCH-003`.
5. Confirm the exact names, dates, locations, and types of all presentations.
6. Confirm publication author lists and complete citation details from authoritative sources.
7. Confirm whether detailed ongoing results should be public.
8. Confirm the CV filename and update date.

---

## Global copy

| ID | Location | Current copy | Proposed copy/action | Reason | Fact check | Status |
|---|---|---|---|---|---|---|
| GLOBAL-001 | Brand | `zz · Zach Zeisler` | `Zach Zeisler` | Remove unexplained monogram treatment; make identity immediately legible. | Confirm preferred public name. | Approved |
| GLOBAL-002 | Navigation | `Home` | `Home` | Use a direct label for the homepage. | Structural choice resolved. | Approved |
| GLOBAL-002A | Navigation | `[NEW]` | `Research` linking to the homepage Research section (`index.html#research`) | Add the requested research entry to primary navigation without creating an unnecessary separate page. | Explicitly approved as a homepage anchor. | Approved |
| GLOBAL-003 | Navigation | `Publications` | `Publications` | Clear and conventional. | None. | Approved |
| GLOBAL-004 | Navigation | `Presentations` | `Presentations` | Retain as requested. | The page is explicitly approved as selected presentations. | Approved |
| GLOBAL-005 | Navigation | `CV` | `[REMOVE FROM PRIMARY NAVIGATION]` | The first four requested navigation items are Home, Research, Publications, and Presentations; the CV remains prominent through page actions. | None. | Approved |
| GLOBAL-006 | Homepage CTA | `Download CV` | `View CV` | The primary action opens the web CV; the PDF has a separate download label. | Explicitly approved. | Approved |
| GLOBAL-007 | Homepage CTA | `Email` | `Email me` | Makes the action explicit and personal. | None. | Approved |
| GLOBAL-008 | PDF CTA | `Download the full CV (PDF) →` | `Download CV (PDF)` | Shorter and more direct; remove the decorative arrow. | Explicitly approved. | Approved |
| GLOBAL-009 | Footer | `Zach Zeisler · New York, NY · MMXXVI` | `Zach Zeisler` | Remove the location because it is changing and remove the decorative Roman-numeral year. | Confirm. | Approved |
| GLOBAL-010 | Decorative marker | `▶︎` in header, hero, page headers, and footer | `[DELETE]` | Remove unexplained repeated motif. | Explicitly approved for deletion. | Approved |
| GLOBAL-011 | Decorative footer year | `MMXXVI` | `[DELETE]` | Replace ornamental date with no date; the CV update label is handled separately. | Explicitly approved for deletion. | Approved |
| GLOBAL-012 | Decorative playback text | `4/4 = 80` | `[DELETE]` | Remove unexplained music/tempo reference. | Explicitly approved for deletion. | Approved |
| GLOBAL-013 | Decorative playback text | `00:00:00` / `00:01:30` | `[DELETE]` | Remove simulated media-player language. | Explicitly approved for deletion. | Approved |

## Global metadata

| ID | Location | Current copy | Proposed copy/action | Reason | Fact check | Status |
|---|---|---|---|---|---|---|
| META-001 | Homepage title | `Zach Zeisler, PhD — Systems Neuroscience` | `Zach Zeisler, PhD — Systems Neuroscience` | Keep a clear, conventional page title. | Explicitly approved. | Approved |
| META-002 | Homepage description | `Zach Zeisler, PhD — systems neuroscientist studying the structural and functional organization of primate frontal and limbic circuits for advanced cognition. Postdoctoral Fellow in the Rudebeck Lab at the Icahn School of Medicine at Mount Sinai.` | `Zach Zeisler, PhD, is a systems neuroscientist studying how frontal and limbic circuits support learning and decision-making in non-human primates.` | More concise and less abstract. | Revised wording explicitly approved. | Approved |
| META-003 | CV title | `CV — Zach Zeisler, PhD` | `CV — Zach Zeisler, PhD` | Conventional. | None. | Approved |
| META-004 | Publications title | `Publications — Zach Zeisler, PhD` | `Publications — Zach Zeisler, PhD` | Conventional. | None. | Approved |
| META-005 | Presentations title | `Presentations — Zach Zeisler, PhD` | `Presentations — Zach Zeisler, PhD` | Conventional. | None. | Approved |
| META-006 | Social description | `[NEW]` | `Zach Zeisler, PhD, is a systems neuroscientist studying how frontal and limbic circuits support learning and decision-making in non-human primates.` | Keep shared links consistent. | Exact META-002 wording explicitly approved. | Approved |

## Homepage: introduction and hero

| ID | Location | Current copy | Proposed copy/action | Reason | Fact check | Status |
|---|---|---|---|---|---|---|
| HOME-HERO-001 | Kicker | `Systems neuroscience · New York` | `Systems neuroscience` | Remove a location that is about to change. | None. | Approved |
| HOME-HERO-002 | Name | `Zach Zeisler, PhD.` | `Zach Zeisler, PhD` | Conventional degree punctuation; avoid using a period as a visual device. | Confirm preferred name/degree format. | Approved |
| HOME-HERO-003 | Research summary | `How the wiring and population dynamics of frontal & limbic circuits give rise to learning, decision-making, and flexible behavior in primates.` | `I study how the organization and dynamics of frontal–limbic circuits support learning, decision-making, and flexible behavior in primates.` | More specialized and concise. | Confirm final punctuation and preferred use of `frontal–limbic`. | Approved |
| HOME-HERO-004 | Current role | `Postdoc Rudebeck Lab` | `Postdoctoral Fellow, Rudebeck Lab` | Natural professional title and affiliation. | Confirm exact lab name. | Approved |
| HOME-HERO-005 | Institution | `At Icahn School of Medicine at Mount Sinai` | `Icahn School of Medicine at Mount Sinai` | Remove interface-like label. | Confirm official institutional name. | Approved |
| HOME-HERO-006 | Primary action | `Download CV` | `View CV` | The browser-open action should be named accurately. | Explicitly approved. | Approved |
| HOME-HERO-007 | Secondary action | `Email` | `Email me` | Clearer action. | Explicitly approved. | Approved |

## Homepage: About

| ID | Location | Current copy | Proposed copy/action | Reason | Fact check | Status |
|---|---|---|---|---|---|---|
| HOME-ABOUT-001 | Section heading | `About` | `About` | Clear and conventional. | None. | Approved |
| HOME-ABOUT-002 | Lead paragraph | `I study how the structural and functional organization of frontal and limbic circuits gives rise to advanced cognition in primates. My research combines comparative neuroanatomy, electrophysiology in behaving macaques, and population-level analyses to identify the circuit motifs that support learning, decision-making, and flexible behavior.` | `I am a systems neuroscientist interested in how the organization and dynamics of frontal–limbic circuits support learning, decision-making, and flexible behavior in primates. My work combines single-neuron neuroanatomy, electrophysiology, and comparative neuroscience.` | More direct and uses the methods and field language selected by Zach. | Confirm final terminology only. | Approved |
| HOME-ABOUT-003 | Biography paragraph | `I completed my PhD with Peter Rudebeck at the Icahn School of Medicine at Mount Sinai in 2024, where my thesis used MAPseq-based single-neuron neuroanatomy and cross-species population analyses to characterize the anatomical and physiological organization of amygdala–frontal circuits. I am now continuing in the Rudebeck Lab as a postdoctoral fellow, where my work has shifted toward the circuit physiology of credit assignment in macaques performing reinforcement-learning tasks.` | `I completed my PhD in Peter Rudebeck’s lab at the Icahn School of Medicine at Mount Sinai in 2024. My doctoral research combined single-neuron projection mapping with cross-species analyses of neural activity to study the organization of amygdala–frontal circuits. I am now a postdoctoral fellow in the Rudebeck Lab, where I study the circuit mechanisms underlying probabilistic learning.` | More readable and uses the research description selected by Zach. | Confirm final terminology only. | Approved |

## Homepage: research overview

| ID | Location | Current copy | Proposed copy/action | Reason | Fact check | Status |
|---|---|---|---|---|---|---|
| HOME-RESEARCH-001 | Section heading | `[NEW]` | `Research` | Make the scientific program visible from the homepage. | None. | Approved |
| HOME-RESEARCH-002 | Research area 1 | Current research appears only in the web CV. | **Title:** `Amygdala–frontal anatomy`<br>**Description:** `Mapping how individual amygdala neurons project across frontal cortex and how those projection patterns differ between species.` | Concise entry point into doctoral work. | None. | Approved |
| HOME-RESEARCH-003 | Research area 2 | Current research appears only in the web CV. | **Title:** `Neural timescales across species`<br>**Description:** `Studying how differences in the temporal structure of neural activity organize frontal and limbic circuits across mice, macaques, and humans.` | Makes the cross-species work understandable without a long gloss. | None. | Approved |
| HOME-RESEARCH-004 | Research area 3 | Current research appears in the hero and CV. | **Title:** `Reward learning in macaques`<br>**Description:** `I study how interactions between the amygdala and frontal cortex support learning from outcomes during reinforcement learning tasks in macaques.` | Conservative public-facing description selected. | None. | Approved |
| HOME-RESEARCH-005 | Research CTA | `[NEW]` | `[DELETE]` | The primary navigation links directly to the homepage Research section; a second CTA is redundant. | Explicitly approved for deletion. | Approved |

## Homepage: selected work and experience

| ID | Location | Current copy | Proposed copy/action | Reason | Fact check | Status |
|---|---|---|---|---|---|---|
| HOME-WORK-001 | Section heading | `[NEW]` | `Selected work` | Surface useful evidence of experience on the homepage without limiting the section to publications. | None. | Approved |
| HOME-WORK-002 | Selected publication 1 | `[NEW]` | Feature the 2023 *Neuron* paper using its approved full citation. | Put a representative doctoral publication first. | Full author list and citation verified and approved. | Approved |
| HOME-WORK-003 | Selected publication 2 | `[NEW]` | Feature the 2025 timescales paper using its approved full citation. | Follow with a representative cross-species publication. | Full author list and citation verified and approved. | Approved |
| HOME-WORK-004 | Selected work CTA | `[NEW]` | `[DELETE]` | Publications is already in primary navigation; the homepage should show selected work without a redundant CTA. | Explicitly approved for deletion. | Approved |
| HOME-EXPERIENCE-001 | Section heading | `[NEW]` | `Experience` | Give the homepage a quick CV-level orientation. | None. | Approved |
| HOME-EXPERIENCE-002 | Current position | `[NEW]` | `Postdoctoral Fellow, Rudebeck Lab`<br>`Icahn School of Medicine at Mount Sinai` | Surface current appointment without duplicating a long CV entry. | Explicitly approved. | Approved |
| HOME-EXPERIENCE-003 | Education | `[NEW]` | `PhD in Neuroscience, Icahn School of Medicine at Mount Sinai, 2024`<br>`BS in Neuroscience and BA in Latin, Mercer University, 2019` | Make education easy to scan. | Degree wording and years explicitly approved. | Approved |
| HOME-EXPERIENCE-004 | Recognition | `[NEW]` | `Cajal Club Krieg Cortical Scholar Award, 2025` | Surface an approved recognition without promotional prose. | None. | Approved |

## Homepage: contact and profiles

| ID | Location | Current copy | Proposed copy/action | Reason | Fact check | Status |
|---|---|---|---|---|---|---|
| HOME-CONTACT-001 | Section heading | `Contact` | `Contact` | Clear and conventional. | None. | Approved |
| HOME-CONTACT-002 | Contact introduction | `I'm always glad to hear from colleagues working on primate circuit neuroscience, comparative anatomy, or population dynamics.` | `I welcome questions about my research, opportunities to collaborate, and invitations to speak.` | Broader and more direct than the current wording. | None. | Approved |
| HOME-CONTACT-003 | Email label | `Email` | `Email` | Clear. | None. | Approved |
| HOME-CONTACT-004 | Email address | `zachzeisler1@gmail.com` | `zachzeisler1@gmail.com` | Retain. | Explicitly confirmed. | Approved |
| HOME-CONTACT-005 | Scholar label | `Scholar` | `Google Scholar` | More immediately recognizable. | Explicitly approved. | Approved |
| HOME-CONTACT-006 | Scholar link | `Google Scholar profile` | `View Google Scholar profile` | Makes link action explicit. | Existing Google Scholar URL retained and approved. | Approved |
| HOME-CONTACT-007 | GitHub label | `GitHub` | `GitHub` | Clear. | Explicitly approved. | Approved |
| HOME-CONTACT-008 | GitHub link | `github.com/DoubleZZ10` | `github.com/DoubleZZ10` | Retain visible URL. | Explicitly approved. | Approved |
| HOME-CONTACT-009 | LinkedIn label | `LinkedIn` | `LinkedIn` | Clear. | Explicitly approved. | Approved |
| HOME-CONTACT-010 | LinkedIn link | `linkedin.com/in/zacharyzeisler` | `linkedin.com/in/zacharyzeisler` | Retain visible URL. | Explicitly approved. | Approved |
| HOME-CONTACT-011 | ORCID label | `[NEW]` | `ORCID` | Add requested academic identifier. | Explicitly approved. | Approved |
| HOME-CONTACT-012 | ORCID link | `[NEW]` | `orcid.org/0000-0003-1371-497X` | Add requested profile. | Explicitly approved. | Approved |
| HOME-CONTACT-013 | CV label | `CV` | `CV` | Clear. | None. | Approved |
| HOME-CONTACT-014 | CV link | `Download PDF` | `Download CV (PDF)` | Make document and action explicit. | Link wording explicitly approved; filename and update date remain separate technical decisions. | Approved |

## Publications page

| ID | Location | Current copy | Proposed copy/action | Reason | Fact check | Status |
|---|---|---|---|---|---|---|
| PUB-001 | Page kicker | `Peer-reviewed` | `[DELETE]` | The page title already establishes the purpose; avoid ornamental kicker. | None. | Approved |
| PUB-002 | Page title | `Publications.` | `Publications` | Remove decorative period. | None. | Approved |
| PUB-003 | Page introduction | `Papers spanning single-neuron neuroanatomy, cross-species population dynamics, and the comparative organization of primate frontal and limbic circuits.` | `[DELETE]` | Let the citations establish the page without an extra introductory gloss. | None. | Approved |
| PUB-004 | Author/citation format | Authors are omitted from all current entries. | Use full author lists for the homepage-selected 2023 *Neuron* and 2025 timescales papers. Use an abbreviated list with `et al.` for the remaining publication entries. Format: `Authors. Article title. Journal volume, pages/article number (year). DOI · PubMed when available.` | Preserve academic usefulness while keeping the page scannable. | Confirm the exact cutoff/format during implementation if a long author list needs a visual treatment. | Approved |
| PUB-005 | Author emphasis | No author is emphasized. | Bold `Zeisler` in each author list. | Helps visitors identify Zach's contribution without promotional prose. | None. | Approved |
| PUB-006 | Publication descriptions | Each paper has a short italicized gloss. | Use one concise, factual summary for every publication entry, following `PUB-007` through `PUB-011`. | Treat all entries consistently and avoid uneven promotional emphasis. | None. | Approved |
| PUB-007 | 2026 dataset paper | Current title: `Dataset of cortical and subcortical single neuron activity during value-based tasks in macaque monkey.` Venue: `Scientific Data.` Gloss: `Public release of a large single-neuron dataset from frontal and subcortical regions in macaques performing value-based tasks, supporting reproducible reanalysis by the community.` | Citation: `London L, Love M, Zeisler ZR, Rudebeck PH, Stoll FM. Dataset of cortical and subcortical single neuron activity during value-based tasks in macaque monkey. Scientific Data 13, 989 (2026).` Link: `DOI: https://doi.org/10.1038/s41597-026-07129-y`<br><br>Summary: `Dataset of 16,495 neurons recorded across 22 frontal and subcortical areas in two macaques during probabilistic value-based decision-making tasks.` | Uses the published volume/article number and verified author order. | None. | Approved |
| PUB-008 | 2025 timescales paper | Current title: `Consistent hierarchies of single-neuron timescales in mice, macaques, and humans.` Venue: `Journal of Neuroscience 45(19).` Gloss: `Cross-species analysis of ~20,000 single neurons identifies intrinsic timescale hierarchies as a conserved organizing principle of cortical and limbic regions.` | Citation: `Zeisler ZR, Love M, Rutishauser U, Stoll FM, Rudebeck PH. Consistent hierarchies of single-neuron timescales in mice, macaques, and humans. Journal of Neuroscience 45(19), e2155242025 (2025).` Links: `DOI: https://doi.org/10.1523/JNEUROSCI.2155-24.2025` · `PubMed: https://pubmed.ncbi.nlm.nih.gov/40180571/`<br><br>Summary: `Cross-species analysis identifying largely consistent neural timescale hierarchies across frontal and limbic regions.` | Uses the published article identifier and verified author order. | None. | Approved |
| PUB-009 | 2025 book chapter | Current title: `Evolutionary road to primate prefrontal cortex.` Venue: `In: The Evolution of Nervous Systems, 3rd ed., Vol. 3 — invited book chapter.` Gloss: `A review of the comparative anatomy and functional organization of primate prefrontal cortex.` | Citation: `Zeisler ZR, Rudebeck PH. Evolutionary road to primate prefrontal cortex. In: The Evolution of Nervous Systems, 3rd ed., Vol. 3, 338–362. Elsevier (2025).` Link: `DOI: https://doi.org/10.1016/B978-0-443-27380-3.00020-8`<br><br>Summary: `Review of the evolution and organization of the primate prefrontal cortex.` | Uses author, book, volume, page range, publisher, year, and DOI found in authoritative records. | None. | Approved |
| PUB-010 | 2024 Current Biology paper | Current title: `Comparative basolateral amygdala connectomics reveals dissociable single-neuron projection patterns to frontal cortex in macaques and mice.` Venue: `Current Biology 34(14).` Gloss: `Identifies significant species differences in the multi-area projection patterns of branching amygdala neurons — a candidate anatomical substrate for brain-wide broadcasting of information.` | Citation: `Zeisler ZR, Heslin KA, Stoll FM, Hof PR, Clem RL, Rudebeck PH. Comparative basolateral amygdala connectomics reveals dissociable single-neuron projection patterns to frontal cortex in macaques and mice. Current Biology 34, 3249–3257 (2024).` Links: `DOI: https://doi.org/10.1016/j.cub.2024.06.012` · `PubMed: https://pubmed.ncbi.nlm.nih.gov/38964318/`<br><br>Summary: `Comparison of single-neuron basolateral amygdala projection patterns in macaques and mice using MAPseq.` | Uses a verified author list, page range, DOI, and PubMed record. | None. | Approved |
| PUB-011 | 2023 Neuron paper | Current title: `Single basolateral amygdala neurons in macaques exhibit distinct connectional motifs with frontal cortex.` Venue: `Neuron 111.` Gloss: `First successful use of MAPseq (RNA-barcode-based neuroanatomy) in macaques — characterizing single-neuron projection patterns from basolateral amygdala to frontal cortex.` | Citation: `Zeisler ZR, London L, Janssen WG, Fredericks JM, Elorette C, Fujimoto A, Zhan H, Russ BE, Clem RL, Hof PR, Stoll FM, Rudebeck PH. Single basolateral amygdala neurons in macaques exhibit distinct connectional motifs with frontal cortex. Neuron 111(20), 3307–3320.e5 (2023).` Links: `DOI: https://doi.org/10.1016/j.neuron.2023.09.024` · `PubMed: https://pubmed.ncbi.nlm.nih.gov/37857091/`<br><br>Summary: `Characterization of projection patterns from more than 3,000 macaque basolateral amygdala neurons, revealing structured multi-area projection motifs.` | Uses a verified author list, issue, page/article range, DOI, and PubMed record. | None. | Approved |
| PUB-012 | Publications CTA | `[NEW]` | `[DELETE]` | Publications is already in primary navigation; the homepage should show selected work without a redundant CTA. | Explicitly approved for deletion. | Approved |

## Presentations page

| ID | Location | Current copy | Proposed copy/action | Reason | Fact check | Status |
|---|---|---|---|---|---|---|
| TALK-001 | Page kicker | `Selected` | `[DELETE]` | Remove redundant kicker. | None. | Approved |
| TALK-002 | Page title | `Presentations.` | `Presentations` | Remove decorative period. | None. | Approved |
| TALK-003 | Page introduction | `Conference talks, symposia, posters, and invited lectures — most recent first.` | `Selected talks, posters, and invited presentations.` | Shorter and accurately describes the page. | None. | Approved |
| TALK-004 | Date format | `2025 · 09` | `September 2025` | Natural date format. | None. | Approved |
| TALK-005 | Type format | `[INVITED]`, `[ORAL]`, `[POSTER]` | `Invited talk`, `Contributed talk`, `Poster` | Remove terminal-like brackets and all-caps styling. | None. | Approved |
| TALK-006 | Talk-title quotation | Titles are in literal double quotation marks and CSS also adds quotation marks. | Use one approved quotation treatment in markup; do not duplicate through CSS. | Fixes doubled quotation marks. | None. | Approved |
| TALK-007 | November 2025 presentation | `Society for Neuroscience Nanosymposium` — `Neural circuit mechanisms of bottom-up reward learning.` — San Diego, CA. | `November 2025 · Contributed talk · Society for Neuroscience Nanosymposium · Neural circuit mechanisms of bottom-up reward learning. · San Diego, CA` | This should precede September 2025 in reverse chronological order. | Confirmed by Zach. | Approved |
| TALK-008 | September 2025 presentation | `New York Memory Hub Conference` — `The neural circuits and mechanisms of short-term memory during reward learning.` — New York, NY. | `September 2025 · Invited talk · New York Memory Hub Conference · The neural circuits and mechanisms of short-term memory during reward learning. · New York, NY` | Natural date/type format. | Confirmed by Zach. | Approved |
| TALK-009 | March 2025 Janelia presentation | `Janelia Mechanistic Cognitive Neuroscience Workshop` — `Circuit mechanisms of bottom-up influences on reversal learning in macaques.` — Ashburn, VA. | `March 2025 · Invited talk · Janelia Mechanistic Cognitive Neuroscience Workshop · Circuit mechanisms of bottom-up influences on reversal learning in macaques. · Ashburn, VA` | Natural date/type format. | Confirmed by Zach. | Approved |
| TALK-010 | March 2025 COSYNE presentation | `COSYNE` — `Neural circuit mechanisms of bottom-up reward learning.` — Montreal, QC. | `March 2025 · Poster · COSYNE · Neural circuit mechanisms of bottom-up reward learning. · Montreal, QC` | Natural date/type format. | Confirmed by Zach. | Approved |
| TALK-011 | September 2024 presentation | `From Neuroscience to Artificially Intelligent Systems` — `Neural dynamics supporting affective reward learning.` — Cold Spring Harbor, NY. | `September 2024 · Poster · From Neuroscience to Artificially Intelligent Systems · Neural dynamics supporting affective reward learning. · Cold Spring Harbor, NY` | Natural date/type format. | Confirmed by Zach. | Approved |
| TALK-012 | August 2022 presentation | `Gordon Research Conference — Frontal Cortex` — `High-throughput sequencing of macaque basolateral amygdala projections.` — Ventura, CA. | `[DELETE]` | The work is now published and the poster is not worth highlighting. | None. | Approved |

## Web CV: page framing

| ID | Location | Current copy | Proposed copy/action | Reason | Fact check | Status |
|---|---|---|---|---|---|---|
| CV-001 | Page kicker | `Curriculum vitae` | `[DELETE]` | The page title and PDF link make the kicker redundant. | Explicitly approved for deletion. | Approved |
| CV-002 | Page title | `CV.` | `CV` | Remove decorative period. | None. | Approved |
| CV-003 | Page introduction | `Research, appointments, recognition, and teaching & outreach. Download the full CV (PDF) →` | `A concise overview of my research, appointments, publications, and training.` | Set expectations for a hybrid overview; the separate approved PDF action is recorded in `CV-004`. | Final framing implemented with the approved separate PDF action. | Approved |
| CV-004 | CV link label | `Download the full CV (PDF) →` | `View CV` plus `Download CV (PDF)` | Distinguish the web CV from the authoritative downloadable PDF. | `View CV` opens the web CV; `Download CV (PDF)` downloads the authoritative PDF. | Approved |
| CV-005 | CV section order | `Research`, `Recognition`, `Appointments`, `Teaching, mentoring & outreach` | `Current appointment`, `Education`, `Research`, `Publications`, `Recognition`, `Presentations`, `Teaching, mentoring & outreach` | Detailed hybrid web CV selected; publications and presentations remain available as dedicated pages as well. | None. | Approved |

## Web CV: research entries

| ID | Location | Current copy | Proposed copy/action | Reason | Fact check | Status |
|---|---|---|---|---|---|---|
| CV-RESEARCH-001 | Research section heading | `Research` | `Research` | Clear. | None. | Approved |
| CV-RESEARCH-002 | PhD research title | `Comparative anatomy of amygdala–frontal circuits` | `Comparative anatomy of amygdala–frontal circuits` | Strong and concise. | Explicitly approved. | Approved |
| CV-RESEARCH-003 | Postdoctoral research title | `Circuit physiology of reward learning in macaques` | `Circuit mechanisms of reinforcement learning in macaques` | Conservative public-facing title selected. | Confirm final terminology. | Approved |
| CV-RESEARCH-004 | PhD research bullets | `First use of MAPseq — an RNA-barcode neuroanatomy technique — in macaques to characterize single-neuron projection patterns from basolateral amygdala to frontal cortex (Neuron 2023).`<br>`Extended to mice, revealing significant species differences in the multi-area wiring of branching amygdala neurons (Current Biology 2024).`<br>`Identified a substantial proportion of branching neurons innervating multiple distinct cortical areas — a candidate anatomical substrate for brain-wide broadcasting.` | `Used single-neuron projection mapping to characterize amygdala–frontal connectivity in macaques and mice, revealing species differences in branching projection patterns.` | Reduce promotional and potentially over-specific claims. | Concise Option B explicitly approved. | Approved |
| CV-RESEARCH-005 | Timescale research bullets | `Analyzed ~20,000 single neurons across mice, macaques, and humans.`<br>`Identified consistent hierarchies of intrinsic timescales in frontal and limbic regions — a conserved organizing principle of cortical circuits.`<br>`Timescales index how long a neuron's activity integrates information over time, bridging single-cell properties and network-level computation.` | `Analyzed neural activity across mice, macaques, and humans to study how intrinsic timescales vary across frontal and limbic regions.` | More compact and less explanatory. | Concise Option B explicitly approved. | Approved |
| CV-RESEARCH-006 | Postdoctoral detailed bullets | `Trained 5 rhesus macaques on a probabilistic reversal-learning task with variable trace intervals (up to 3 s), recording from amygdala and frontal cortex across 200,000+ trials.`<br>`Identified a specific credit-assignment deficit when choice and outcome are separated in time, with strongest neural effects in amygdala, agranular insula, and ventromedial PFC.`<br>`Complemented by data-constrained recurrent neural network models and ongoing chemogenetic inactivation of amygdala → vlPFC projections.`<br>`Current analyses target inter-region communication channels underlying credit assignment.` | `I study how amygdala–frontal circuits support credit assignment during reinforcement learning in macaques, combining behavioral tasks, electrophysiology, computational modeling, and pathway-specific manipulation.` | Conservative public-facing description selected; detailed ongoing results are not carried into the web CV by default. | Confirm that all named methods are approved for public use. | Approved |
| CV-RESEARCH-007 | Research tags | `MAPseq · Single-neuron tracing · Comparative anatomy · Amygdala → frontal` | `[DELETE]` | Omit research tags to keep the CV entries focused and avoid adding another layer of terminology. | Explicitly approved for deletion. | Approved |
| CV-RESEARCH-008 | Research tags | `Intrinsic timescales · Cross-species · Population dynamics · Frontal & limbic` | `[DELETE]` | Omit research tags to keep the CV entries focused and avoid adding another layer of terminology. | Explicitly approved for deletion. | Approved |
| CV-RESEARCH-009 | Research tags | `Reversal learning · Credit assignment · Amygdala → vlPFC · Chemogenetics` | `[DELETE]` | Omit research tags to keep the CV entries focused and avoid adding another layer of terminology. | Explicitly approved for deletion. | Approved |

## Web CV: recognition, appointments, education

| ID | Location | Current copy | Proposed copy/action | Reason | Fact check | Status |
|---|---|---|---|---|---|---|
| CV-RECOG-001 | Recognition heading | `Recognition` | `Recognition` | Clear and consistent with the homepage. | Explicitly approved. | Approved |
| CV-RECOG-002 | Award title | `Cajal Club Krieg Cortical Scholar Award` | `Cajal Club Krieg Cortical Scholar Award` | Retain official title. | Explicitly approved. | Approved |
| CV-RECOG-003 | Award description | `The Krieg Cortical Kudos recognize outstanding scientists working on the cerebral cortex across three career stages. I was honored to receive the Scholar award for contributions to understanding cortical structure and function.` | `Awarded in 2025 for contributions to research on cortical structure and function.` | More concise and less self-promotional. | Explicitly approved. | Approved |
| CV-RECOG-004 | Award image caption | `Receiving the Scholar award, 2025.` | `Receiving the Cajal Club Krieg Cortical Scholar Award, 2025.` | More descriptive for accessibility and context. | Explicitly approved. | Approved |
| CV-RECOG-005 | Award link | `About the Krieg Cortical Kudos →` | `About the Krieg Cortical Kudos` | Remove decorative arrow. | Explicitly approved. | Approved |
| CV-APPT-001 | Appointments heading | `Appointments` | `Appointments` | Clear and conventional. | None. | Approved |
| CV-APPT-002 | Current appointment | `Postdoctoral Fellow — Rudebeck Lab` | `Postdoctoral Fellow, Rudebeck Lab`<br>`2024–present` | More natural punctuation and includes the approved date range. | Explicitly approved. | Approved |
| CV-APPT-003 | Current institution | `Icahn School of Medicine at Mount Sinai` | `Icahn School of Medicine at Mount Sinai` | Retain official name. | Explicitly approved. | Approved |
| CV-APPT-004 | Current appointment detail | `Advisor: Peter Rudebeck, D.Phil. Project: circuit mechanisms of reinforcement learning in macaques. Techniques: electrophysiology, NHP behavior, computational modeling, chemogenetics, large-animal surgery.` | `Advisor: Peter Rudebeck, D.Phil. Research: circuit mechanisms of reinforcement learning in macaques.` | Keep the appointment entry concise; methods can appear in approved Research copy. | Explicitly approved. | Approved |
| CV-APPT-005 | Doctoral appointment | `PhD in Neuroscience` | `PhD in Neuroscience`<br>`2019–2024` | Retain the official degree name and approved date range. | Explicitly approved. | Approved |
| CV-APPT-006 | Thesis detail | `Advisor: Peter Rudebeck, D.Phil. Thesis: A comparative analysis of amygdala anatomy and physiology in mice, macaques, and man.` | `Advisor: Peter Rudebeck, D.Phil. Thesis: A comparative analysis of amygdala anatomy and physiology in mice, macaques, and man.` | Retain the exact official title because it is meaningful and personally preferred. | Confirm that this is the exact official title and capitalization. | Approved |
| CV-APPT-007 | Undergraduate degree | `BS Neuroscience · BA Latin, summa cum laude` | `BS in Neuroscience and BA in Latin, summa cum laude`<br>`2015–2019` | Natural degree phrasing with the approved date range. | Explicitly approved. | Approved |
| CV-APPT-008 | Education institution | `Mercer University` | `Mercer University` | Retain. | Explicitly approved. | Approved |
| CV-APPT-009 | Education advisors | `Advisors: Katherine Northcutt, PhD & Achim Kopp, PhD.` | `[DELETE]` | Reduce detail that is not central to visitor needs. | Explicitly approved for deletion. | Approved |

## Web CV: teaching, mentoring, outreach

| ID | Location | Current copy | Proposed copy/action | Reason | Fact check | Status |
|---|---|---|---|---|---|---|
| CV-SERVICE-001 | Section heading | `Teaching, mentoring & outreach` | `Teaching, mentoring, and outreach` | Conventional punctuation and clearer scan. | None. | Approved |
| CV-SERVICE-002 | Project SHORT | `Project SHORT — Director of Outreach` | `Project SHORT — Director of Outreach`<br>`Mount Sinai · 2020–2023` | Retain the official program name and add the approved dates. | Explicitly approved. | Approved |
| CV-SERVICE-003 | Project SHORT detail | `Pro bono admissions consulting for students from underrepresented backgrounds applying to graduate or medical school. Led the website redesign and student mentorship; helped 10+ students matriculate into graduate or medical programs.` | `Led outreach, website redesign, and student mentorship for Project SHORT, a volunteer program supporting students applying to graduate or medical school.` | Avoid an unverified or unnecessarily precise outcome claim while preserving contribution. | The `10+` outcome claim is omitted; revised wording explicitly approved. | Approved |
| CV-SERVICE-004 | MiNDS | `MiNDS — Mentoring in Neuroscience Discovery at Sinai` | `MiNDS — Mentoring in Neuroscience Discovery at Sinai`<br>`Mount Sinai · 2019–2023` | Retain the official program name and add the approved dates. | Explicitly approved. | Approved |
| CV-SERVICE-005 | MiNDS detail | `Annual Brain Fair during Brain Awareness Week; monthly neuroscience classes at a local middle school; STEM advocacy across NYC.` | `Participated in Brain Awareness Week programming, neuroscience education, and STEM outreach in New York City.` | More concise and less list-like. | Explicitly approved. | Approved |
| CV-SERVICE-006 | Teaching assistant title | `Teaching Assistant — Behavioral & Cognitive Neuroscience` | `Teaching Assistant, Behavioral and Cognitive Neuroscience`<br>`Mount Sinai · Spring 2021 and Spring 2022` | Natural punctuation and clearer date formatting. | Explicitly approved. | Approved |
| CV-SERVICE-007 | Teaching detail | `PhD-level graduate course. Developed curriculum materials and mentored graduate students.` | `Teaching assistant for a graduate course in behavioral and cognitive neuroscience; developed course materials and mentored graduate students.` | Single clear sentence. | Explicitly approved. | Approved |

## Technical and accessibility copy

| ID | Location | Current copy | Proposed copy/action | Reason | Fact check | Status |
|---|---|---|---|---|---|---|
| TECH-001 | Headshot alt text | `Portrait of Zach Zeisler` | `Portrait of Zach Zeisler in a lab` | Include the requested laboratory context. | None. | Approved |
| TECH-002 | Award image alt text | `Receiving the Cajal Club Krieg Cortical Scholar Award, 2025` | `Zach Zeisler receiving the Cajal Club Krieg Cortical Scholar Award in 2025` | Include the subject’s name and action. | Award title and year explicitly approved. | Approved |
| TECH-003 | PDF link | `Download PDF` | `Download CV (PDF)` | Clear link purpose. | Explicitly approved. | Approved |
| TECH-004 | CV update label | `[NEW]` | `Updated July 2026` | Help visitors assess freshness. | Explicitly approved. | Approved |
| TECH-005 | Skip link | `[NEW]` | `Skip to main content` | Accessibility convention. | Explicitly approved. | Approved |
| TECH-006 | Mobile menu control | `[NEW if needed]` | `Menu` / `Close menu` | Only add if a collapsible mobile menu is implemented. | Labels explicitly approved if the structural prototype requires a mobile menu. | Approved |

## Copy-deck approval checklist

Before any production copy change:

- [x] Global decisions approved
- [x] Homepage copy approved
- [x] Research detail level selected and approved
- [x] Contact/profile URLs verified
- [x] Publication author lists and citation data verified
- [x] Presentation facts verified and ordered
- [x] Web CV structure and entries approved
- [x] Sensitive/unpublished research decisions approved
- [x] Image alt text and captions approved
- [x] Metadata and technical labels approved
- [x] Every row changed from `Pending`, `Choice required`, or `Needs fact check` to an explicit approval state

No website HTML, CSS, JavaScript, metadata, or file names should be changed until this checklist is complete for the relevant release.
