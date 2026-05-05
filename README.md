# GEOG 499 Electronic Portfolio
**Mario Jinesta** · Geography & Sustainability · University of Tennessee, Knoxville · Class of 2027

---

## About

This is a static portfolio website built for GEOG 499 (Senior Capstone). It covers all four required rubric components:

| Section | File(s) |
|---|---|
| **I. Introduction** | `index.html` |
| **II. Resume** | `resume.html` |
| **III. Critical Learning Elements** | `projects/cmip6.html`, `projects/cartography.html`, `projects/meteorology.html`, `projects/gis.html`, `projects/usability.html` |
| **IV. Additional Items** | `additional.html` |

---

## File Structure

```
portfolio/
├── index.html              ← Landing / Introduction page
├── resume.html             ← Resume (HTML + PDF download)
├── additional.html         ← Policy minor, Spanish, bonus projects
├── projects/
│   ├── cmip6.html          ← ★ Core Research: CMIP6 climate analysis
│   ├── cartography.html    ← Critical Analysis: narrative & critical carto
│   ├── meteorology.html    ← Critical Analysis: GEOG 334 skills
│   ├── gis.html            ← GIS Gallery: GSMN/Zelda map + others
│   └── usability.html      ← Critical Analysis: ENGL 360 report
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    ├── images/             ← Map images, headshot, etc.
    │   ├── gsmn-zelda.png  ← Zelda/Smokies QGIS map (already copied)
    │   └── ...
    ├── docs/               ← Downloadable PDFs
    │   ├── MarioJinesta_Resume.pdf   (already copied)
    │   └── CMIP6_Analysis_FAST.pdf   (already copied)
    └── figures/            ← CMIP6 analysis figures
```

---

## Deploying to GitHub Pages

### 1. Create the GitHub repository

1. Go to [github.com](https://github.com) and create a new repository named **`portfolio`** (keep it public).
2. Do **not** initialize with a README — you already have one.

### 2. Push from your local machine

Open a terminal in the `portfolio/` directory and run:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### 3. Enable GitHub Pages

1. Go to your repo on GitHub → **Settings** → **Pages** (left sidebar).
2. Under **Source**, choose **Deploy from a branch**.
3. Select branch: **main**, folder: **/ (root)**.
4. Click **Save**.

Your site will be live at: `https://mariojnesta.github.io/portfolio_marioj/`

It may take 1–2 minutes to build the first time.

---

## Filling in Placeholders

Every section that needs your actual content is marked with a `<!-- TODO: [MJ] ... -->` comment in the HTML and styled with a dashed amber border on the page. Search across all files for `TODO: [MJ]` to find everything at once.

**Priority order:**
1. `index.html` — personal statement (2 paragraphs) + headshot
2. `resume.html` — actual resume content
3. `projects/cmip6.html` — research question, findings, figures
4. `projects/gis.html` — add additional map images
5. All other project pages

**Adding a headshot:**
- Name your photo `headshot.jpg` (or `.png`/`.webp`)
- Place it in `assets/images/`
- In `index.html`, replace the `.hero-photo-ph` div with:
  ```html
  <img src="assets/images/headshot.jpg" alt="Mario Jinesta, Geography student at UTK">
  ```

**Adding CMIP6 figures:**
- Place figures in `assets/figures/` (e.g., `fig1-temperature.png`)
- In `projects/cmip6.html`, swap each `.figure-ph` div for a real `<img>` tag with `data-lightbox` attribute (see comments in the file)

**Adding map images to the GIS gallery:**
- Place map files in `assets/images/`
- In `projects/gis.html`, swap `.map-card-ph` divs for `<img>` tags

**Updating your GitHub username:**
- Search all HTML files for `USERNAME` and replace with your actual GitHub username

---

## Tech Notes

- Pure HTML/CSS/JS — no build step, no dependencies, no Node
- Google Fonts loaded via CDN (Inter + Merriweather)
- Lightbox: custom vanilla JS (click any map or figure to enlarge)
- Mobile nav: hamburger menu with dropdown, keyboard accessible
- Responsive breakpoints at 900px and 600px
- All images use `loading="lazy"` where appropriate
- Semantic HTML with ARIA labels throughout

---

*Built for GEOG 499, University of Tennessee, Knoxville.*
