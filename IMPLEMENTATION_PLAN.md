# ZachZeisler.com Redesign and Content Cleanup Plan

## 1. Purpose

Refine `zachzeisler.com` into a clear, credible, easy-to-scan academic profile and online CV. The finished site should make it immediately obvious:

1. Who Zach Zeisler is.
2. His current role and institutional affiliation.
3. What scientific questions and methods define his work.
4. What he has published and presented.
5. How to view or download his current CV.
6. How to contact him.

The site should feel personal, restrained, and professionally maintained. It should not feel like a themed creative portfolio, an academic template, or a model-generated design exercise.

## 2. Critical content-approval rule

**Do not change, delete, add, paraphrase, or reorder any public-facing copy until Zach has reviewed and explicitly approved a complete copy deck.**

This applies to:

- Navigation labels
- Headings and section titles
- Hero text
- Role and affiliation text
- Biography and research descriptions
- Publication citations and summaries
- Presentation titles, labels, locations, and dates
- CV descriptions
- Award descriptions
- Contact text
- Link labels
- Image captions and alt text
- Page titles and meta descriptions
- Open Graph and structured-data descriptions
- CV update labels
- Footer text

Removing decorative UI text such as `4/4 = 80`, `00:01:30`, `MMXXVI`, or repeated `▶︎` characters also counts as a copy/content change and must be listed in the copy deck for approval.

### Required approval workflow

1. Inventory every current public-facing string.
2. Prepare a proposed copy deck showing each current string beside its proposed replacement or deletion.
3. Mark factual questions and unverifiable claims separately.
4. Ask Zach to approve or revise every item.
5. Record the approved wording in a dedicated source-of-truth document.
6. Only then modify HTML metadata or visible copy.
7. If implementation reveals a new wording decision, stop and request approval for that item rather than improvising.

Approval should be explicit. Silence, broad aesthetic approval, or approval of this implementation plan does not count as approval of individual copy.

## 3. Non-goals and constraints

- Do not alter the scientific meaning of Zach's work.
- Do not invent achievements, citations, authors, affiliations, metrics, or research outcomes.
- Do not publish confidential or unpublished details without Zach's confirmation.
- Do not infer publication author lists from memory; verify them from authoritative sources.
- Do not rewrite the downloadable CV itself unless Zach separately requests it.
- Do not replace the headshot or award photograph without approval.
- Do not add a framework or build system unless a concrete requirement justifies it.
- Do not add analytics, tracking, cookies, contact forms, or third-party services without approval.
- Do not add dependencies solely for visual effects.
- Keep the site suitable for GitHub Pages and the existing custom domain.
- Preserve unrelated user work and do not commit or deploy unless explicitly requested.

## 4. Current repository and live-site baseline

Relevant files:

- `index.html` — homepage, biography, links, contact
- `publications.html` — publication list
- `talks.html` — selected presentations
- `cv.html` — web CV and research summaries
- `style.css` — all visual styling and responsive behavior
- `script.js` — playback animation, reveal animation, header behavior, anchor scrolling
- `assets/headshot.jpg` — homepage portrait
- `assets/cajalclub_award.jpg` — award photograph
- `Zeisler CV.pdf` — downloadable CV
- `Zeisler CV.docx` — editable CV
- `README.md` — stale documentation describing a previous design
- `_config.yml` — GitHub Pages/Jekyll configuration
- `sync_website.sh` — local sync script pointing outside this repository
- `CNAME` — custom domain configuration

Observed issues to preserve in the handoff context:

- The live site matches the checked-in HTML.
- The fake playback rail, timestamp, `4/4 = 80`, repeated triangles, section numbers, and Roman-numeral year are decorative rather than informative.
- The visual system combines an editorial serif, monospace labels, grain, animations, oversized titles, and numerous rules. The accumulation makes the site feel over-conceptualized.
- The homepage does not surface selected work, education, or recognition, forcing visitors into inner pages.
- `publications.html` omits author lists and conventional citation details.
- `talks.html` claims reverse chronological order but lists September 2025 before November 2025.
- Presentation text includes literal quotation marks while CSS also adds quotation marks.
- `cv.html` behaves more like a narrative research portfolio than a conventional online CV.
- Some detailed postdoctoral results may be ongoing or unpublished and need explicit review before being retained.
- The PDF CV link works and the current PDF is four pages. Its metadata indicates creation on July 5, 2026, but its textual contents were not extracted during the audit.
- The link labeled “Download CV” opens the PDF in a new tab rather than forcing a download.
- `README.md` describes a bento-grid site using cyan, blue, Outfit, and Inter, none of which match the current implementation.
- `sync_website.sh` references unrelated `new_website` directories and does not target this repository.
- `_config.yml` declares the Minima theme even though the site is plain custom HTML/CSS.

## 5. Target experience and design principles

The intended impression is: **serious scientist, clear communicator, distinctive but not performative.**

Design principles:

- Information first; decoration should never compete with content.
- Restrained editorial character rather than a generic academic template.
- One accent color and no decorative motif that requires explanation.
- Strong typography, conventional dates, natural labels, and generous but not excessive whitespace.
- Fast, static, accessible, and maintainable.
- No content hidden behind JavaScript-dependent reveals.
- Direct access to CV, publications, email, lab, institution, and academic profiles.
- Responsive behavior that is deliberately tested rather than assumed.

Recommended visual baseline, subject to Zach's design approval:

- Retain a dark neutral or indigo-black background unless Zach requests a light theme.
- Retain Fraunces for headings if desired.
- Use a readable sans serif for body copy; reserve monospace for limited metadata.
- Reduce display-heading scale by approximately 20–30%.
- Remove grain, simulated playback UI, timestamps, triangles, and ornamental section numbering.
- Remove scroll-reveal animation and other nonfunctional motion.
- Use thin rules sparingly and rely primarily on type hierarchy and spacing.
- Crop the existing headshot more tightly through CSS before considering a replacement image.

## 6. Project phases and approval gates

### Phase 0 — Preserve baseline and document decisions

No website changes in this phase.

Tasks:

1. Inspect repository status and preserve any pre-existing user changes.
2. Capture desktop and mobile screenshots of the current live site for comparison.
3. Confirm whether the repository root is the GitHub Pages publishing source.
4. Confirm whether `Zeisler CV.docx` is intended to remain public.
5. Confirm whether `sync_website.sh` has any current personal workflow value.
6. Confirm preferred theme direction: refined dark editorial versus light academic editorial.
7. Confirm whether Presentations should remain a primary page or become a CV section.
8. Confirm whether the web CV should be a complete CV or a concise HTML overview pointing to the PDF.
9. Confirm whether an ORCID profile exists and should be shown.
10. Confirm whether a custom-domain email exists or Gmail should remain primary.

Deliverable: a short decision log. Do not proceed on unresolved structural questions that would cause rework.

### Phase 1 — Complete copy inventory and copy deck

No HTML, metadata, or visible-copy changes in this phase.

Create `COPY_DECK.md` with a stable identifier for every string, using this schema:

| ID | Page/location | Current copy | Proposed copy/action | Reason | Fact check | Status |
|---|---|---|---|---|---|---|
| HOME-HERO-001 | Homepage hero | Exact current text | Exact proposed text | Clarity | Confirm role | Pending |

Rules:

- Quote current and proposed wording exactly.
- Use one row per independently reviewable string.
- For deletion, write `[DELETE]`; never leave the proposal blank.
- Include punctuation, capitalization, dates, link labels, alt text, and metadata.
- Separate factual correction from stylistic rewriting.
- Do not silently normalize degree abbreviations, advisor names, institutional names, species terminology, or paper titles.
- Preserve official paper, thesis, award, and event titles exactly unless Zach confirms otherwise.
- Mark all statements about unpublished research as `SENSITIVE/UNPUBLISHED REVIEW`.
- Mark each item `Pending`, `Approved`, `Revise`, or `Rejected`.

The inventory must cover:

- Global header, navigation, brand, footer, and repeated CTAs
- `index.html`: title, description, hero, affiliations, About, Contact, links, image alt text
- `publications.html`: title, description, header, every citation, venue, gloss, and link label
- `talks.html`: title, description, header, every date, tag, event, title, location, and type
- `cv.html`: title, description, all research summaries, tags, awards, appointments, education, teaching, outreach, captions, and CTAs
- Proposed favicon/preview-image alt text
- Open Graph, canonical, structured-data, and CV-update text
- Decorative strings proposed for deletion

Prepare a separate fact-check list for Zach:

- Preferred public name: Zach versus Zachary; inclusion of middle initial
- Exact current title and capitalization
- Exact lab and institution wording
- PhD completion year and official thesis title
- Whether the thesis’s official use of “man” must remain where cited
- Publication author lists, author order, citation details, and status
- Whether the 2026 dataset paper is published, online-first, or forthcoming
- Exact award title and approved description
- Presentation dates, types, titles, locations, and selection criteria
- Whether ongoing postdoctoral results, sample sizes, trial counts, target regions, modeling, chemogenetics, and surgery should be public
- Preferred CV updated date
- Preferred contact language and email address
- Google Scholar, GitHub, LinkedIn, ORCID, lab, and institutional URLs

**Approval Gate A:** Zach must review every row of `COPY_DECK.md`. No public-facing copy implementation begins until every row needed for the initial release is marked `Approved`.

### Phase 2 — Structural prototype with approved copy unchanged

Begin only after Phase 0 decisions and Approval Gate A.

Goal: establish information architecture and semantic markup without visual polish or unapproved wording.

Recommended homepage order:

1. Compact introduction with name, role, affiliation, research summary, portrait, and primary actions
2. About/research overview
3. Three research areas or selected projects
4. Selected publications
5. Current appointment, education, and recognition summary
6. Contact and academic profiles

Recommended primary navigation:

- Home or About
- Research, if it remains a distinct section
- Publications
- CV
- Contact or Email

Decide whether Presentations remains in navigation based on Phase 0. If removed from primary navigation, retain the approved content in the web CV rather than deleting it silently.

Structural tasks:

- Replace decorative containers with semantic `header`, `nav`, `main`, `section`, `article`, `figure`, and `footer` elements.
- Ensure one clear `h1` per page and a logical heading hierarchy.
- Keep CV and Email visible without scrolling on common desktop and mobile sizes.
- Add lab and institution links if approved.
- Add selected publications to the homepage only after their exact selection and wording are approved.
- Use conventional publication markup with authors, title, venue, year, and approved resource links.
- Bold or otherwise identify Zach in author lists only if approved in the copy deck.
- Correct presentation ordering using approved dates.
- Remove duplicate CSS-generated quotation marks while preserving approved title punctuation.
- Reorganize the web CV according to the chosen Phase 0 model.
- Keep the PDF as the authoritative downloadable CV unless Zach chooses otherwise.

Deliverable: an unpolished but complete structural version for Zach to inspect. Do not combine this review with a major visual redesign; separating structure from styling makes feedback actionable.

**Approval Gate B:** Zach approves page structure, section order, navigation, and content selection. Copy remains frozen to the approved deck.

### Phase 3 — Visual-system refinement

Begin after Approval Gate B.

Tasks in `style.css`:

1. Replace the current concept-heavy token set with a smaller set of colors, typography, spacing, widths, borders, and focus styles.
2. Remove the grain overlay.
3. Remove styles for playback rail, playhead, timestamp, tempo caption, decorative triangles, section numbers, and footer marker.
4. Reduce display and page-title sizes.
5. Use the mono face only for dates or limited metadata.
6. Use a readable body face and verify fallback fonts.
7. Reduce the number of horizontal rules and tiny uppercase labels.
8. Create a compact responsive header that does not obscure content.
9. Use a tighter portrait crop with `object-position` and an appropriate aspect ratio; do not edit the original image destructively.
10. Use consistent styles for primary actions, inline links, citations, metadata, and contact links.
11. Add responsive layouts for approximately 320, 375, 768, 1024, and 1440 pixel widths.
12. Add print styles for `cv.html` if the web CV remains substantial.
13. Preserve visible keyboard focus and sufficient touch-target sizes.
14. Verify color contrast, especially secondary and tertiary text.

Remove `script.js` if no approved feature requires JavaScript. If mobile navigation needs JavaScript, replace the file with only the minimal accessible menu behavior and no decorative animation.

Deliverable: visual prototype using only approved copy.

**Approval Gate C:** Zach approves the desktop and mobile visual direction before metadata, repository cleanup, or final polish.

### Phase 4 — CV and document-link behavior

Tasks:

1. Confirm that the PDF is the intended current CV.
2. Rename it to a stable web filename such as `Zach-Zeisler-CV.pdf` only after Zach approves the filename.
3. Update every reference atomically so no link breaks.
4. Use the approved distinction between “View CV” and “Download PDF.”
5. Use `download` only on links intended to force a download.
6. Add the approved update date near the CV link.
7. Verify the PDF opens directly, downloads correctly, and has useful document metadata.
8. Decide whether `Zeisler CV.docx` should be removed from the public repository. Do not remove it without explicit approval.
9. Do not alter the contents of the PDF or DOCX under this plan.

### Phase 5 — Metadata, discoverability, and accessibility

All wording introduced here must already exist in the approved copy deck.

Tasks:

- Add a canonical URL to each page.
- Add Open Graph title, description, URL, type, and approved preview image.
- Add appropriate social-card metadata.
- Add a favicon and touch icon.
- Add `Person` structured data with only approved facts and URLs.
- Include approved `sameAs` links for Scholar, ORCID, GitHub, and LinkedIn.
- Review page titles and meta descriptions for uniqueness and accuracy.
- Verify image alt text; decorative images should use empty alt text, informative images should have approved descriptions.
- Verify landmark structure, heading order, link purpose, focus order, keyboard navigation, and reduced-motion behavior.
- Ensure external links use appropriate `rel` attributes.
- Ensure the site remains usable if Google Fonts fail.
- Ensure JavaScript is not required to reveal core content.
- Add a skip link if navigation remains fixed.
- Test the web CV in browser print preview.

### Phase 6 — Repository cleanup

This phase is primarily non-public maintenance, but any visible outcome still requires copy approval.

Tasks:

1. Rewrite `README.md` to describe the actual site, deployment method, file structure, and update workflow.
2. Remove stale claims about a bento grid, cyan palette, Outfit, Inter, and a mobile-nav-only script.
3. Replace promotional design rationale with concise maintenance documentation.
4. Remove the internal “INK & PULSE” label from `style.css`.
5. Remove comments that merely narrate obvious CSS; retain comments explaining non-obvious constraints.
6. Remove unused selectors only after confirming they have no references.
7. Decide whether `_config.yml` should remove `theme: minima`; validate GitHub Pages behavior before and after.
8. Delete or repair `sync_website.sh` only after Zach confirms whether it is used.
9. Confirm whether editable CV source files belong in the public repository.
10. Do not add generated design documentation or extensive process narration to production files.

### Phase 7 — Validation and final review

Run the narrowest checks first, then broader checks.

#### Content integrity

- Compare every visible string and metadata value against approved `COPY_DECK.md` entries.
- Generate or manually prepare a final copy diff grouped by page.
- Confirm no model introduced unapproved wording while adjusting markup.
- Verify official titles and citations against authoritative sources.
- Confirm November 2025 precedes September 2025 if reverse chronology remains approved.
- Confirm unpublished/sensitive content matches Zach's explicit choices.

#### Functional checks

- Open every internal page from every navigation state.
- Test all CV view and download links.
- Test email, lab, institution, Scholar, ORCID, GitHub, LinkedIn, DOI, PubMed, PDF, code, and data links.
- Check for broken local assets and case-sensitive path errors.
- Verify canonical and social URLs use `https://zachzeisler.com`.
- Verify the `CNAME` file remains correct.
- Verify deployment does not expose or break unintended files.

#### Responsive visual checks

Review at minimum:

- 320 × 568
- 375 × 667
- 768 × 1024
- 1024 × 768
- 1440 × 900

Check:

- Fixed or sticky header overlap
- Navigation wrapping and menu operation
- Hero hierarchy and portrait crop
- Link tap targets
- Long publication titles and author lists
- Email and URL wrapping
- Entry date alignment
- Footer layout
- Horizontal overflow
- Unnecessary empty space

#### Accessibility checks

- Keyboard-only navigation
- Visible focus state
- Logical focus order
- Skip-link behavior
- Heading hierarchy
- Landmarks and labels
- Alternative text
- Color contrast
- 200% text zoom
- Reduced-motion preference
- Content availability with JavaScript disabled
- Basic screen-reader reading order

#### Performance and quality checks

- Validate HTML and inspect CSS/JavaScript diagnostics.
- Check browser console for errors.
- Measure image dimensions and avoid serving unnecessarily large files.
- Confirm font loading does not block access to content.
- Confirm no layout shift or invisible-content delay is caused by animation code.
- Check image compression without visibly degrading photographs.
- Run a local static server for browser testing; do not rely solely on opening `file://` URLs.
- If available, run Lighthouse or equivalent audits for accessibility, best practices, SEO, and performance. Treat scores as signals rather than the sole acceptance criterion.

#### Final approval gates

**Approval Gate D — Copy fidelity:** Give Zach the final page-by-page copy diff. Zach confirms all implemented copy matches his approvals.

**Approval Gate E — Release candidate:** Give Zach desktop and mobile screenshots plus the validation summary. Do not deploy until he explicitly approves the release candidate.

**Deployment Gate:** Commit, push, or deploy only if Zach explicitly requests it. After deployment, perform a live smoke test and compare the deployed version to the approved release candidate.

## 7. File-by-file implementation map

### `index.html`

- Simplify header and hero structure.
- Remove approved decorative UI elements.
- Implement approved role, affiliation, research summary, and actions.
- Add approved research areas, selected publications, experience/education/recognition summary, and contact structure.
- Add approved metadata, social tags, canonical URL, structured data, and icon links.
- Preserve the current headshot unless a separate image change is approved.

### `publications.html`

- Convert entries to conventional citations using verified data and approved formatting.
- Identify Zach in author lists only as approved.
- Add approved DOI, PubMed, PDF, code, and data links where available.
- Retain only approved summaries; do not auto-generate paper glosses.
- Add Scholar and ORCID links if approved.

### `talks.html`

- Correct chronological order based on verified dates.
- Replace terminal-like date and type labels with approved natural labels.
- Fix quotation duplication.
- Retain, merge, or retire the page according to the approved information architecture.
- If the page is retired, create deliberate redirects or link updates as appropriate; do not leave broken navigation.

### `cv.html`

- Implement the approved complete-CV or concise-overview model.
- Use a familiar scan order such as appointment, education, research, publications, recognition, presentations, teaching, mentoring, and service, subject to Zach's approval.
- Ensure all sensitive current-research details are explicitly approved.
- Add clear approved CV view/download behavior and print styling.

### `style.css`

- Replace the concept-heavy system with the approved restrained visual system.
- Remove unused decorative and animation styles.
- Add compact responsive header, readable content layouts, citation styles, accessible interactions, and print rules.
- Reduce comments to useful implementation guidance.

### `script.js`

- Delete if no functional behavior remains.
- Otherwise restrict it to an accessible mobile menu or other explicitly approved functional interaction.
- Do not retain playback, reveal, header-opacity, or redundant smooth-scroll code without a demonstrated need.

### Assets and CV files

- Preserve original images.
- Prefer non-destructive CSS cropping.
- Add optimized derivatives only when needed and document their source.
- Rename the PDF only after approval and update all links together.
- Treat the DOCX as a separate public-repository decision.

### Repository configuration and documentation

- Update `README.md` only after the implemented architecture is stable.
- Keep `CNAME` unchanged unless domain requirements change.
- Simplify `_config.yml` only after validating GitHub Pages behavior.
- Delete or repair `sync_website.sh` only after confirming its purpose.

## 8. Copy review packets

To avoid overwhelming a single review while still obtaining approval for every string, `COPY_DECK.md` may be presented in these packets:

1. **Global:** preferred name, titles, navigation, repeated CTAs, footer, and global metadata
2. **Homepage:** hero, About, research areas, selected work, recognition, and Contact
3. **Publications:** author lists, citations, links, and any retained summaries
4. **Presentations:** dates, types, event names, titles, locations, and introductory text
5. **Web CV:** section labels and every descriptive entry
6. **Technical copy:** alt text, PDF labels, update date, Open Graph descriptions, structured data, and error/aria labels

Each packet must show the exact proposed final text in context. Zach may approve packet by packet, but implementation of a page cannot begin until every string on that page is approved.

## 9. Acceptance criteria

The redesign is complete only when:

- A first-time visitor can identify Zach's role, affiliation, research focus, CV, publications, and email from the homepage without guesswork.
- The CV is both viewable and downloadable through clearly labeled approved links.
- Publication entries use verified, conventional citation information.
- Presentations are correctly ordered and consistently formatted.
- No unapproved unpublished detail is exposed.
- No fake playback, unexplained tempo, timestamp, Roman-numeral date, or repeated decorative triangle remains unless Zach explicitly chooses to retain it.
- The site does not depend on JavaScript to show core content.
- Navigation and content work at the specified mobile, tablet, laptop, and desktop sizes.
- Keyboard navigation, focus styles, contrast, headings, landmarks, alt text, zoom, and reduced motion have been checked.
- All internal and external links have been tested.
- Repository documentation describes the implementation that actually exists.
- Stale or unused scripts/configuration have been resolved through explicit decisions.
- The final implementation contains no public-facing text absent from the approved copy deck.
- Zach has approved the copy diff and release-candidate screenshots.

## 10. Recommended execution order

1. Read this plan and inspect current files; make no edits.
2. Complete Phase 0 questions with Zach.
3. Build `COPY_DECK.md` and request line-by-line review.
4. Freeze approved copy.
5. Build and review structural markup.
6. Build and review visual styling.
7. Implement CV file behavior.
8. Add approved metadata and accessibility enhancements.
9. Clean repository documentation and stale code/configuration.
10. Validate locally and prepare the final copy diff and screenshots.
11. Obtain final approval.
12. Deploy only on explicit request and smoke-test the live site.

## 11. Instructions to the receiving model

- Treat this as an existing-site refinement, not a greenfield redesign.
- Start by reading `IMPLEMENTATION_PLAN.md`; do not immediately edit production files.
- The first substantive deliverable is the copy inventory and proposed `COPY_DECK.md`, not HTML or CSS.
- Ask focused questions only after inspecting the repository and identifying decisions that cannot be inferred safely.
- Never treat draft copy in prior chat transcripts or recommendations as approved copy.
- Never silently “improve” wording while implementing markup.
- Cite the exact copy-deck ID when implementing or discussing a text change.
- Keep changes surgical and consistent with the approved direction.
- Validate claims using the PDF CV, authoritative publication pages, and Zach's responses; do not fill gaps from general knowledge.
- Preserve user work, do not commit without permission, and report exactly what validation was run.

Suggested opening message to Zach:

> I have read the implementation plan. I will not change the website or any public-facing copy yet. I will first inventory every visible and metadata string, prepare a page-by-page copy deck with exact proposed replacements or deletions, flag factual and unpublished-research questions, and return it for your explicit review.