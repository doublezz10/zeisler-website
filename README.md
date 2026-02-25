# Zach Zeisler Portfolio Website

A digital CV and portfolio website for employers, showcasing the work of Zach Zeisler, PhD - a computational neuroscientist specializing in high-dimensional signal processing, machine learning, and complex data analysis.

## Purpose

This site serves as a professional portfolio to attract opportunities in:
- Data science roles
- Brain-computer interface (BCI) engineering
- Research scientist positions
- Neural data / biosensor applications

Primary audience: hiring managers, recruiters, and potential collaborators in NYC or remote positions.

## Design Choices

### Dark Theme
- **Background**: Deep black (`#0d0d0d`) for a modern, sophisticated look
- **Cards**: Slightly elevated dark gray (`#161616`) with subtle borders
- **Text**: High contrast white primary text with muted secondary text

The dark theme communicates technical sophistication and aligns with the neuroscience/tech intersection of the brand.

### Bento Grid Layout
- Sections arranged as modular "tiles" on a 12-column grid
- Creates visual hierarchy while maintaining a clean, organized feel
- Hover effects add subtle interactivity without being distracting
- Fully responsive - collapses gracefully on mobile

### Color Palette
- **Primary accent**: Blue (`#3b82f6`) - conveys trust, intelligence, technology
- **Secondary accent**: Cyan (`#0ea5e9`) - adds depth with gradient effects
- **Borders**: Very subtle white transparencies for depth without harsh lines

### Typography
- **Headings**: Outfit (modern, geometric sans-serif)
- **Body**: Inter (highly readable, clean)

Both Google Fonts are loaded via CDN for fast loading and consistent rendering.

### Sections
1. **Hero** - Name, tagline, call-to-action buttons (CV, GitHub, Email)
2. **About** - Brief professional background
3. **What I'm Looking For** - Role/location preferences, impact goals
4. **Projects** - Featured research and technical projects
5. **Skills** - Matrix of technical expertise
6. **Experience** - Work history and leadership
7. **Publications** - Academic papers and citations
8. **Awards** - Recognition (includes photo)
9. **Contact** - Call to action with links

## Tech Stack

- **HTML5** - Semantic, accessible markup
- **CSS3** - Custom styles with CSS variables, Grid, Flexbox
- **JavaScript** - Minimal (mobile nav toggle)
- **No frameworks** - Lightweight, fast-loading static site
- **Deployed via GitHub Pages** - Free hosting with custom domain support

## Deployment

1. Push changes to the `main` branch
2. GitHub Pages automatically deploys from `/ (root)`
3. Custom domain `zachzeisler.com` configured via CNAME

## File Structure

```
/
├── index.html          # Main page content
├── style.css           # All styles
├── script.js           # Mobile navigation
├── _config.yml         # Jekyll config (for GitHub Pages)
├── CNAME               # Custom domain
├── assets/
│   ├── headshot.jpg    # Profile photo
│   └── cajalclub_award.jpg
├── Zeisler CV.pdf      # Downloadable resume
└── README.md           # This file
```

## Updating Content

- Edit `index.html` to change text content
- Edit `style.css` to modify styling
- Replace images in `assets/` folder
- Update `Zeisler CV.pdf` with latest resume version
- Commit and push changes - deployment is automatic
