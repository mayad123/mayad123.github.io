# Personal Profile Introduction

This repository contains a simple, fast, and accessible personal site you can deploy with GitHub Pages to showcase yourself for recruiting.

Live URL (after enabling GitHub Pages):
- `https://mayad123.github.io/mayad123.github.io/`

## Quick Start

1. Replace placeholder text in `index.html` with your details:
   - Name, title, location, about blurb
   - Experience, projects, skills
   - Social links (GitHub, LinkedIn, email)
2. Optionally add a resume PDF to the repo and update the resume link in `index.html`.
3. Commit and push your changes.
4. Enable GitHub Pages:
   - Go to your repo on GitHub â†’ Settings â†’ Pages
   - Source: `Deploy from a branch`
   - Branch: `main` and folder: `/ (root)`
   - Save. Your site will be available at the URL above.

## Customize

- Colors and spacing are defined in `assets/style.css` under CSS variables.
- You can toggle light/dark theme from the UI; itâ€™s stored in `localStorage`.
- Replace the favicon in `assets/favicon.svg` if you want a custom icon.

## Local Preview

You can open `index.html` directly in a browser. For best results, run a tiny local server:

- Python: `python -m http.server` (then visit http://localhost:8000)
- Node: `npx serve .` (requires Node.js)

## Structure

```
./
â”œâ”€ index.html
â”œâ”€ assets/
â”‚  â”œâ”€ style.css
â”‚  â”œâ”€ script.js
â”‚  â””â”€ favicon.svg
â””â”€ README.md
```

## Notes

- If you prefer a user site (root domain), create a repo named `YOUR_USERNAME.github.io` and place these files there. The site will be served at `https://YOUR_USERNAME.github.io/`.
- No build step or dependencies are required; this is plain HTML/CSS/JS.

