# Visual Changes Proposal

**Status: implemented 2026-08-12** (all four tiers). Changes are CSS-only plus the removal of the section-rail markup/JS; cache-busting bumped to `style.css?v=5` / `site.js?v=4` on all pages.

Based on the design guidance in [`adamholter/one-shot-frontend-prompt`](https://github.com/adamholter/one-shot-frontend-prompt) (PROMPT.md), audited against the current site (index / publications / talks / cv + style.css + site.js).

## Verdict

The site is already close to the target. It passes several of the prompt's tests: entries use **dividers, not cards**; there are **no hero cards, stat strips, or badge clusters**; the palette is **one warm accent on near-black**; copy is **real**; and `prefers-reduced-motion` is handled properly. The proposal below is therefore **refinement, not redesign** — it removes the residual "generic AI polish" the prompt explicitly warns about and pushes the design one step further toward a product-grounded scientific identity. Every change preserves the existing tokens, component patterns, and interaction model.

---

## Tier 1 — Remove generic decoration (the prompt's "avoid" list)

### 1.1 Ambient spotlight gradients — remove (or nearly remove)
**Current:** `body::before` paints three radial washes (two gold, one cool) over the whole page.
**Change:** Delete the cool floor wash and the top-right wash; keep at most one very faint warm wash behind the hero. A scientific document should sit on a clean field.
**Why:** PROMPT.md: "decorative orbs, bokeh, blobs, and purposeless floating modules," "gratuitous … glow."

### 1.2 Portrait glow — replace with a "plate" treatment
**Current:** `.hero-right::before` puts a radial gold halo behind the headshot.
**Change:** Remove the halo. Give the portrait a printed-plate frame instead — a hairline border plus a 1px offset outer rule (classic plate-in-paper look, no glow):

```css
.portrait { position: relative; }
.portrait::after {
    content: "";
    position: absolute;
    inset: 10px 10px -10px -10px;
    z-index: -1;
    border: 1px solid var(--line-strong);
    pointer-events: none;
}
```

### 1.3 Animated hero trace — replace with a static spike-raster divider
**Current:** `.hero-trace` is a 2px gold gradient line that draws itself in on load (one-shot animation).
**Change:** Keep the divider but make it **static** and **product-specific**: a short strip of small gold vertical ticks, like a single-neuron spike raster (the canonical figure type in his field). No draw animation, `aria-hidden`, safe under reduced motion:

```css
.hero-trace {
    display: block;
    width: clamp(7rem, 22vw, 13rem);
    height: 14px;
    background-image:
        repeating-linear-gradient(90deg, var(--accent) 0 1.5px, transparent 1.5px 9px),
        repeating-linear-gradient(90deg, var(--accent) 0 1.5px, transparent 1.5px 13px),
        repeating-linear-gradient(90deg, var(--accent) 0 1.5px, transparent 1.5px 7px);
    background-position: 0 2px, 3px 7px, 0 11px;
    background-repeat: repeat-x;
    opacity: 0.85;
    /* drop the @keyframes draw + animation entirely */
}
```

### 1.4 Section rail — remove, or make labels persistent
**Current:** a right-edge dot rail whose labels only appear on hover (hidden control).
**Change (recommended):** remove `.section-rail` entirely. Wayfinding is already covered by the sticky header and the reading-progress hairline; the dot rail with hover-reveal labels is exactly the "purposefully-looking but decorative" widget the prompt warns about.
**Alternative if a TOC is wanted:** keep the rail but show the mono micro-labels always (no hover reveal), i.e. drop the `max-width: 0` trick.

### Keep as-is (these are legitimate, not decoration)
- **Reading-progress hairline** — it is feedback about reading position, which the prompt permits ("motion … for hierarchy, feedback, focus, or state change").
- **Sticky header blur** — standard sticky-header treatment, acceptable.

---

## Tier 2 — Tighten the first viewport ("one dominant anchor")

**Current:** the hero carries ~8 elements: kicker, giant name, trace, lede, roles list, two CTAs, portrait, caption.
**Change:** Let the **name be the single anchor** and make everything else read as a quieter supporting block:
- Remove the trace animation (Tier 1.3) — it currently competes with the name for attention on load.
- Tighten `hero-grid` gap and change `align-items: end` → `center` so the text block and the portrait plate feel like one composed object, not two stacks.
- Keep the huge display size — a personal homepage's name *is* the dominant anchor, and the prompt's "giant type in compact tools" warning doesn't apply here.

**Mobile (intentional adaptation):** the DOM already stacks text-first, so the name + lede + CTAs occupy the first fold. Two small fixes:
- Keep the portrait *after* the CTAs (already true) and cap it smaller (≈ 18–20rem) so it doesn't crowd the fold.
- Reduce the on-load reveal travel from 14px → 8px and shorten to ~0.5s so the page feels immediate, not staged.

---

## Tier 3 — Typography & color discipline

### 3.1 Normalize letter-spacing
The prompt: "Keep letter spacing at `0` unless the design system or requested style calls for something else." The mono micro-label convention *is* this site's system, but tracking currently ranges 0.01em → 0.2em across `kicker`, `.section-index`, `.entry-year`, `.cv-meta`, `.contact-label`, `.footer-col-label`, `.portrait-cap`, `.rail-label`, `.footer-text`.
**Change:** pick one value for uppercase mono labels (≈ `0.09em`) and one for sentence-case mono labels (≈ `0.02em`), and apply it consistently. Body and display text stay at 0 (they already are).

### 3.2 Accessible contrast for faint text
`--text-faint: #666762` is used for small captions/footnotes (portrait caption, entry-link separators, footer). It measures ≈ **3.3:1** on `#101112` — below the 4.5:1 floor for small text.
**Change:** raise to ≈ `#7d7e78` (≈ 4.6:1). Keep the muted hierarchy; just pass WCAG. `--text-muted` (≈ 6.3:1) and `--text-soft` are fine.

### 3.3 Complete interaction states
Prompt: "Include relevant hover, focus, active, disabled … states." Focus rings exist site-wide. Add the missing **pressed** state so controls give feedback on click, not just hover:
- `.cta:active { transform: translateY(0); background/color shift }`
- `.site-nav a:active { color: var(--text) }`

---

## Tier 4 — Product-grounded identity (one consistent scientific signature)

The prompt's core ask: "a clear point of view grounded in the actual product." The site's product is **single-neuron circuit neuroscience**.

**Change:** unify the small gold **spike-tick** already used as the entry-title hover tick into a consistent language:
- Hero divider becomes a raster strip (Tier 1.3).
- `.section-index::after` — currently a plain 1px rule — becomes a short raster tick (2–3 ticks, same geometry as the hero strip) so the numbering reads as part of the same signature.

This is a *static* motif, code-native (pure CSS gradients, no images), invisible without JS/CSS support, and it replaces generic rules with something specific to the science. If it feels too cute, plain rules are fine — the rest of the proposal stands without it.

---

## Explicitly keep (do not change)

- **Fonts:** Fraunces display + system sans + JetBrains Mono ("preserve established fonts").
- **Palette:** near-black + single gold accent ("small semantic palette with one or two meaningful accents"). No new colors.
- **Entry pattern:** hairline dividers and year rails — already the "dividers, alignment, grouping" the prompt prefers over cards.
- **Figures:** hairline frames, intrinsic aspect ratios, alt text, lightbox zoom (functional, not decorative).
- **Motion system:** scroll reveals, page transitions, lightbox — all gated behind `prefers-reduced-motion`, which the prompt requires.
- **Header/nav/footer structure and all copy.**

---

## Effort & risk

| Tier | Files | Risk |
|------|-------|------|
| 1 (decoration) | style.css (+ tiny HTML for hero-trace if kept as a div) | Low |
| 2 (hero) | style.css | Low |
| 3 (type/contrast/states) | style.css (`:root` + a few rules) | Low |
| 4 (spike-tick identity) | style.css | Low |

Everything is **CSS-only** except an optional 1-line HTML change for the hero divider. Reversible, no content changes, no new dependencies.
