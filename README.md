# Zachary Zeisler — Personal Website

The academic website of **Zachary R. Zeisler, PhD**, a systems neuroscientist studying the structural and functional organization of frontal and limbic circuits that support advanced cognition in primates.

## Purpose

This site documents ongoing and published research on:
- Comparative neuroanatomy of amygdala–frontal circuits (mice, macaques, humans)
- Circuit physiology of reward learning in behaving macaques
- Population dynamics and intrinsic timescales across species

Primary audience: neuroscience colleagues, students, collaborators, and reviewers in the primate systems-neuroscience community.

## Sections

1. **Hero** — Name, research focus, affiliation, links to CV and academic profiles
2. **About** — Research interests and brief biography
3. **Recognition** — Cajal Club Krieg Cortical Scholar Award (2025)
4. **Research** — Three thematic threads spanning PhD and postdoctoral work
5. **Publications** — Peer-reviewed papers and invited book chapters
6. **Invited Talks & Selected Presentations** — Conference and departmental talks
7. **Appointments** — Current postdoctoral position, PhD, and undergraduate training
8. **Teaching, Mentoring & Outreach** — TA, mentorship, and STEM-advocacy service
9. **Contact** — Email and academic profile links

## Design Choices

### Dark Theme
- **Background**: Deep near-black (`#050508`) for a clean, low-glare academic reading experience
- **Cards**: Slightly elevated dark (`#0a0a10`) with subtle borders
- **Text**: High contrast white primary text with muted secondary text

The dark theme is professional, screen-friendly, and avoids the visual heaviness of light themes for long reading sessions.

### Bento Grid Layout
- Sections arranged as modular "tiles" on a 12-column grid
- Creates clear visual hierarchy without the rigidity of stacked sections
- Each tile is self-contained and can be re-ordered without layout breakage
- Fully responsive — collapses gracefully on tablet and mobile

### Color Palette
- **Primary accent**: Cyan (`#06b6d4`)
- **Secondary accent**: Blue (`#3b82f6`)
- **Borders**: Very subtle white transparencies for depth without harsh lines

### Typography
- **Headings**: Outfit (modern, geometric sans-serif)
- **Body**: Inter (highly readable, designed for screens)

Both Google Fonts are loaded via CDN for fast, consistent rendering.

## Tech Stack

- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom styles with CSS variables, Grid, and Flexbox
- **JavaScript** — Minimal (mobile nav toggle only)
- **No frameworks** — Lightweight, fast-loading static site
- **Deployed via GitHub Pages** — Free hosting with custom domain support

## Deployment

1. Push changes to the `main` branch
2. GitHub Pages automatically deploys from `/ (root)`
3. Custom domain `zachzeisler.com` configured via `CNAME`

## File Structure

```
/
├── index.html              # Main page content
├── style.css               # All styles
├── script.js               # Mobile navigation
├── _config.yml             # Jekyll config (for GitHub Pages)
├── CNAME                   # Custom domain
├── assets/
│   ├── headshot.jpg        # Profile photo
│   └── cajalclub_award.jpg # Cajal Club award ceremony photo
├── Zeisler CV.pdf          # Downloadable academic CV
└── README.md               # This file
```

## Updating Content

- Edit `index.html` to change text content
- Edit `style.css` to modify styling
- Replace images in `assets/` folder
- Update `Zeisler CV.pdf` with the latest CV version
- Commit and push changes — deployment is automatic