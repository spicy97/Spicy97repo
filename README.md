# Spicy97repo — Christ Central Buffalo VBS Website

> **Live site:** https://vbs.christcentralbuffalo.com

This is the source code for the **3-Day Surprise Party VBS** registration and info website for Christ Central Buffalo. It is a static website built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/).

---

## What This Site Does

- Displays event information (dates, times, location, activities) for the VBS
- Provides an online registration form for parents to sign up their children
- Links to the online payment page for the $5-per-child registration fee
- Tells visitors about Christ Central Buffalo church

---

## Tech Stack

| Technology | What It Does |
|---|---|
| **Jekyll** | Static site generator — turns Markdown + HTML templates into a complete website |
| **GitHub Pages** | Free hosting — automatically builds and publishes the site when you push to `main` |
| **Sass (SCSS)** | CSS preprocessor — lets you use variables, nesting, and loops in your stylesheets |
| **Liquid** | Jekyll's templating language — the `{{ }}` and `{% %}` tags in HTML files |
| **GitHub Actions** | Automated CI/CD pipeline — runs the Jekyll build and deploys to GitHub Pages |

> **New to Jekyll?** Think of it like a content management system, but instead of a database, everything is plain text files. Jekyll reads your Markdown pages and HTML templates, then combines them into a final website that can be hosted anywhere.

---

## Project Structure

```
Spicy97repo/
│
├── _config.yml               ← Jekyll site settings (title, URL, plugins, nav, excludes)
├── Gemfile                   ← Ruby dependencies (Jekyll version, plugins)
│
├── _layouts/
│   └── default.html          ← The master page template — every page wraps inside this
│
├── _includes/
│   ├── footer.html           ← Site footer (injected into default.html with {% include %})
│   └── popup.html            ← VBS announcement popup modal (injected into default.html)
│
├── _sass/
│   └── vbs.scss              ← All site styles (compiled by Jekyll into assets/css/main.css)
│
├── assets/
│   ├── css/main.scss         ← Entry point for Sass — imports vbs.scss
│   ├── js/
│   │   ├── nav.js            ← Mobile hamburger menu toggle
│   │   └── popup.js          ← Popup show/hide logic (uses sessionStorage)
│   └── images/               ← Logos, balloons, favicons, etc.
│
├── index.md                  ← Home page (/)
├── vbs/index.md              ← VBS event info page (/vbs/)
├── about/index.md            ← About the church page (/about/)
├── contact/index.md          ← Contact + FAQ page (/contact/)
├── pay/index.md              ← Payment page (/pay/)
├── vbs-registration/index.md ← Registration form page with JavaScript (/vbs-registration/)
├── 404.html                  ← Custom "Page Not Found" error page
│
├── AGENTS.md                 ← AI agent config (cross-tool: Copilot, Codex, Cursor, etc.)
├── CLAUDE.md                 ← Claude/Cline-specific config (imports AGENTS.md)
├── .clinerules/              ← Cline AI rules and on-demand skills
│   ├── general-rules.md
│   ├── cline-plan-and-act.md
│   ├── cline-prompting.md
│   ├── github-pages-general-rules.md
│   └── skills/
│       ├── cline-memory-bank/
│       ├── github-pages-website-creation/
│       └── subagent-best-practices/
│
├── .github/
│   └── workflows/
│       └── pages.yml         ← GitHub Actions workflow — builds and deploys the site
│
├── robots.txt                ← Tells search engine crawlers what to index
└── CNAME                     ← Custom domain config (vbs.christcentralbuffalo.com)
```

---

## How Jekyll Pages Work

Every content page (`.md` or `.html`) starts with **front matter** — a YAML block at the top between `---` lines:

```yaml
---
layout: default        # Which layout template to use (from _layouts/)
title: VBS Event       # Page title — shown in browser tab and SEO
description: "..."     # Meta description for search engines
permalink: /vbs/       # The URL path for this page
---
```

Jekyll reads this front matter, then inserts the page's content into the layout template at the `{{ content }}` tag in `_layouts/default.html`.

### Liquid Template Tags

The `{{ }}` and `{% %}` syntax is called **Liquid** — Jekyll's templating language:

| Syntax | What it does |
|---|---|
| `{{ page.title }}` | Outputs the value of a variable |
| `{% if page.url == '/' %}` | Conditional logic |
| `{% include footer.html %}` | Inserts a file from `_includes/` |
| `{{ '/assets/css/main.css' \| relative_url }}` | Outputs a URL, adjusted for the site's base path |
| `{{ 'now' \| date: "%Y" }}` | Outputs the current year |

---

## How to Run Locally

**Prerequisites:** Ruby and Bundler must be installed. ([Install guide](https://jekyllrb.com/docs/installation/))

```bash
# 1. Clone the repo
git clone https://github.com/Spicy97/Spicy97repo.git
cd Spicy97repo

# 2. Install Ruby dependencies (only needed once)
bundle install

# 3. Start the local development server
bundle exec jekyll serve

# 4. Open in your browser
# → http://localhost:4000
```

The site auto-reloads when you save changes to files. Press `Ctrl+C` to stop the server.

---

## How Deployment Works

Deployment is fully **automatic**:

1. You push code to the `main` branch on GitHub
2. GitHub Actions detects the push and runs `.github/workflows/pages.yml`
3. The workflow:
   - Installs Ruby and Jekyll
   - Runs `bundle exec jekyll build` (compiles Sass, processes Liquid, generates `_site/`)
   - Uploads the `_site/` folder to GitHub Pages
4. The live site at `vbs.christcentralbuffalo.com` updates within ~1–2 minutes

> **Note:** Never commit the `_site/` folder — it's gitignored. GitHub Actions builds it fresh every time.

---

## How to Make Common Edits

### Update event dates or text
Edit the relevant `.md` file directly. For example, to change the VBS dates on the home page, edit `index.md`.

### Update site-wide info (title, description, URL)
Edit `_config.yml`. Note: you must restart `jekyll serve` after changing `_config.yml` for changes to appear locally.

### Change styles
Edit `_sass/vbs.scss`. Jekyll automatically recompiles Sass on save. All brand colors are defined as variables at the top of the file (`$blue`, `$yellow`, `$red`, etc.).

### Add a new page
1. Create a new folder (e.g., `newpage/`)
2. Add `index.md` inside it with front matter
3. Add the page to `header_pages` in `_config.yml` if it should appear in the nav

### Update contact info
Search for the email and phone number across the `.md` files and `_includes/footer.html`.

---

## Registration Form

The registration form (`vbs-registration/index.md`) uses a plain JavaScript `fetch()` call to submit data to a **Google Apps Script** endpoint, which writes to a Google Sheet. No backend server is required.

- The Google Apps Script URL is stored in the `SCRIPT_URL` variable at the top of the `<script>` block in `vbs-registration/index.md`
- The form uses the browser's native validation (`required`, `type="email"`, etc.) before sending
- After submission, the form is hidden and a success message is shown
- A **15-second timeout** is used via `Promise.race()` so the button never stays permanently disabled if the Apps Script is slow
- A **honeypot field** (`name="website"`) silently catches bot submissions without needing CAPTCHA

---

## Analytics

**Google Analytics has been removed from this site** (removed 2026-07-03). No tracking scripts are loaded. See `CHANGELOG.md` for details and rollback instructions if analytics are needed in the future.

---

## Key Contacts

| Role | Person | Contact |
|---|---|---|
| VBS Coordinator | Jonathan Choi | jonathan.choi@christcentralbuffalo.com |
| Church Website | Christ Central Buffalo | https://christcentralbuffalo.com |
