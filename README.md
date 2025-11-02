# Personal Profile Site

This repository contains a simple, fast, and accessible personal site you can deploy with GitHub Pages to showcase your background, experience, and projects.

Live URL (after enabling GitHub Pages):
- https://mayad123.github.io/

## Quick Start

1. Replace placeholder text in `index.html` with your details:
   - Name, title, location, about blurb
   - Experience roles with Skills sub-bullets (see below)
   - Projects and tags
   - Social links (GitHub, LinkedIn, email)
2. Optionally add a resume PDF to the repo and update the resume link in `index.html`.
3. Commit and push your changes.
4. Enable GitHub Pages:
   - Go to your repo on GitHub → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` and folder: `/ (root)`
   - Save. Your site will be available at the URL above.

## Customize

- Colors and spacing are defined in `assets/style.css` under CSS variables.
- You can toggle light/dark theme from the UI; it’s stored in `localStorage`.
- Replace the favicon in `assets/favicon.svg` if you want a custom icon.

## Local Preview

Open `index.html` directly in a browser, or run a small local server:

- Python: `python -m http.server` (visit http://localhost:8000)
- Node: `npx serve .` (requires Node.js)

## Structure

```
./
├─ index.html
├─ assets/
│  ├─ style.css
│  ├─ script.js
│  └─ favicon.svg
└─ README.md
```

## Experience + Skills

The Experience section keeps job titles and company names as headings and lists a “Skills” block beneath each role with categorized sub-bullets.

- Edit: `mayad123.github.io/index.html: <section id="experience">`
- Add a new role by duplicating a `<li>` inside `<ul class="timeline">`.
- Keep titles/companies in the `.role` header; customize the Skills categories per role.

Example role entry:

```
<li>
  <div class="role">
    <div>
      <strong>MBSE Solution Architect</strong> — Dassault Systèmes
    </div>
    <div class="meta">Jul 2024 — Present — Seattle, WA</div>
  </div>
  <p><strong>Skills</strong></p>
  <ul class="bullets">
    <li>Systems Modeling
      <ul class="bullets">
        <li>SysML, UAF for distributed architectures</li>
        <li>Reliability assessment of structural/behavioral views</li>
      </ul>
    </li>
    <li>Data &amp; ETL
      <ul class="bullets">
        <li>ETL pipelines extracting/transforming model data</li>
        <li>Feature engineering for analytics</li>
      </ul>
    </li>
  </ul>
</li>
```

Styling: nested lists use the same `.bullets` class for consistent spacing and color. Adjust spacing in `assets/style.css` if you prefer deeper indentation.

## Notes

- For a user site (root domain), create a repo named `YOUR_USERNAME.github.io`. The site will be served at `https://YOUR_USERNAME.github.io/`.
- No build step or dependencies are required; this is plain HTML/CSS/JS.

