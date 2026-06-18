# GitHub Pages Website — Requirements Document

> **Project:** 3-Day Surprise Party VBS Website
> **Date:** 2026-06-17
> **Author:** Christ Central Buffalo / Spicy97repo
> **Status:** Draft

---

## 1. Project Overview

| Field | Details |
|---|---|
| **Purpose** | Promote the church's 3-Day Surprise Party Vacation Bible School (VBS) event, allow families to save their spot, and introduce the church to prospective visitors |
| **Target audience** | Families with children, parents looking for VBS programs, prospective church members in the local community |
| **Success criteria** | Families can easily find event details, register/save their spot, and the church can showcase its community atmosphere. Popup displays on every site visit. A dedicated VBS tab is accessible from the main navigation. |
| **Launch deadline** | Before 8/21/2026 (event starts August 21) — ideally 2–4 weeks prior for promotion |

---

## 2. Site Type & Repository

| Field | Details |
|---|---|
| **Site type** | ☑ Project site (`Spicy97repo.github.io/repo-name`) — hosted under Spicy97repo's GitHub account |
| **Repository name** | *e.g., `christ-central-vbs` or `vbs-2026` — to be confirmed* |
| **GitHub username/org** | `Spicy97repo` |
| **Repository visibility** | ☑ Public |
| **Published URL** | `https://christcentralbuffalo.com/` (existing church domain) — VBS page will live at `https://christcentralbuffalo.com/vbs/` if DNS is pointed at GitHub Pages, or at `https://spicy97repo.github.io/<repo-name>/` as interim URL |

---

## 3. Content & Structure

### Pages
List all pages the site will include:

| Page | URL Path | Description |
|---|---|---|
| Home | `/` | Main landing page with event hero banner, brief description, and call-to-action to register |
| VBS Event | `/vbs/` | Dedicated VBS tab — full event details, schedule, activities, cost, and registration |
| About / Our Church | `/about/` | Introduction to the church, values, and community for prospective families |
| Contact | `/contact/` | Contact information for questions about the event |
| 404 | `/404.html` | Custom error page (required) |

### Navigation Structure

```
[Header Nav]
├── Home
├── VBS Event          ← dedicated tab as requested
├── About Our Church
└── Contact

[Footer]
└── Church name, address, contact info, copyright
```

### Key Content Blocks (VBS Page)
The VBS event page must include:
- **Event name:** "3-Day Surprise Party VBS"
- **Tagline:** "Every day brings a new surprise, a new story, and a new reminder that God's love is for everyone."
- **Theme description:** Kids dive into the Bible, discover how Jesus welcomed all kinds of people, and learn God's love is freely given — not earned. Activities include games, crafts, music, snacks, and laughter.
- **Family angle:** Chance for families to meet the church, connect with other parents, and see what the church is about.
- **Schedule:**
  - Day 1 — Thursday, August 21: 9:00 AM – 3:00 PM (lunch and snacks provided)
  - Day 2 — Friday, August 22: 9:00 AM – 3:00 PM (lunch and snacks provided)
  - Day 3 — Sunday, August 23: 10:30 AM church service, followed by backyard party with food and bounce house for the entire family
- **Cost:** $5 per child
- **Call to action:** "Save your spot today!" / Registration button or link
- **Popup:** Modal/popup on every site visit promoting the VBS event with a "Save My Spot" call-to-action and dismiss button

### Content Ownership
| Field | Details |
|---|---|
| **Who provides content?** | Church staff / requester |
| **Update frequency** | Low — static event page; may need registration count updates or last-minute detail changes |
| **Content format** | ☑ Markdown &nbsp;&nbsp; ☐ HTML &nbsp;&nbsp; ☐ Both |

---

## 4. Technology Stack

| Field | Details |
|---|---|
| **Static site generator** | ☑ Jekyll (GitHub built-in) — simplest option for a church event site |
| **Jekyll theme** | Recommended: `minima` as base, customized with cheerful, party-themed colors; or `remote_theme` if a more polished theme is preferred |
| **Required plugins** | `jekyll-seo-tag` (meta tags), `jekyll-sitemap` (sitemap) |
| **Unsupported plugins?** | ☑ No — standard supported plugins are sufficient |
| **JavaScript frameworks** | Vanilla JS for the popup modal (no framework needed) |
| **CSS approach** | ☑ Sass/SCSS — custom styles built on top of theme |

---

## 5. Design & Branding

| Field | Details |
|---|---|
| **Brand colors** | Six-color party palette from official VBS Style Guide:<br>• `#3387c8` — Blue (primary)<br>• `#fdd31b` — Yellow<br>• `#ec342a` — Red<br>• `#00b401` — Green<br>• `#dc39d3` — Pink/Magenta<br>• `#323095` — Dark Navy/Purple |
| **Typography** | **CHALOPS** — official VBS display/heading font (from Style Guide). Body text: standard readable sans-serif (e.g., system font stack or Google Font pairing to be determined). |
| **Logo/favicon** | *[OPEN QUESTION — no logo file found in branding folder; confirm if a church logo exists for favicon and header use]* |
| **Theme verse** | Luke 5:29 — *"Then Levi held a great banquet for Jesus at his house, and a large crowd of tax collectors and others were eating with them."* — to be featured on VBS page |
| **Available brand assets** | Official VBS kit includes: Background Slides, Balloons graphics, Memory Verse art, Message Slides, Name Tags, Postcards, Posters and Banners, T-shirt Files, Editable EPS image — extract relevant graphics from ZIPs for use on site |
| **Design reference** | Festive, welcoming, family-friendly. Use the official 6-color party palette. CHALOPS font for headings and display text. |
| **Responsive design** | ☑ Mobile-first — parents will likely view on phones. Breakpoints: 320px, 768px, 1024px |
| **Accessibility target** | ☑ WCAG 2.1 AA (recommended minimum) — note: verify color contrast ratios for all 6 brand colors against backgrounds |

---

## 6. Deployment & CI/CD

| Field | Details |
|---|---|
| **Deployment method** | ☑ GitHub Actions (recommended) |
| **Publishing source** | ☑ `main` branch |
| **Workflow file** | `.github/workflows/pages.yml` |
| **Branch strategy** | ☑ Feature branches + PRs (recommended) |
| **Environment protection** | ☑ Enable `github-pages` deployment environment |

---

## 7. Domain & DNS

| Field | Details |
|---|---|
| **Domain type** | ☑ Custom domain — `christcentralbuffalo.com` (existing church website) |
| **Custom domain** | `www.christcentralbuffalo.com` — VBS page at `https://christcentralbuffalo.com/vbs/` |
| **Apex domain redirect** | ☑ Yes — configure both apex (`christcentralbuffalo.com`) and `www` subdomain |
| **DNS provider** | *[OPEN QUESTION — who manages DNS for christcentralbuffalo.com?]* |
| **Domain verified?** | ☐ Not yet — must verify `christcentralbuffalo.com` in GitHub account before adding to repo |
| **HTTPS enforcement** | ☑ Required (always enable in Settings > Pages > Enforce HTTPS) |

---

## 8. SEO Requirements

| Field | Details |
|---|---|
| **Site title** | "3-Day Surprise Party VBS — Christ Central Buffalo" |
| **Site description** | "Join us for our 3-Day Surprise Party VBS August 21–23 at Christ Central Buffalo! Games, crafts, music, snacks, and Bible stories for kids. $5 per child. Lunch and snacks provided." |
| **SEO plugin** | ☑ `jekyll-seo-tag` |
| **Sitemap** | ☑ Required — use `jekyll-sitemap` plugin |
| **Robots.txt** | ☑ Required — allow all crawlers |
| **Open Graph / social cards** | ☑ Required — families will share the event on Facebook, Instagram, etc. |
| **URL / permalink format** | `/:title/` |
| **Google Analytics / tracking** | *[OPEN QUESTION — does the church want analytics?]* |

---

## 9. Performance Requirements

| Field | Details |
|---|---|
| **Target Lighthouse score** | Performance: 90+/100 &nbsp;&nbsp; Accessibility: 95+/100 &nbsp;&nbsp; Best Practices: 90+/100 &nbsp;&nbsp; SEO: 95+/100 |
| **Target page load time** | < 3 seconds on mobile on 4G |
| **Image optimization** | ☑ Compress all images before committing &nbsp;&nbsp; ☑ Use WebP format &nbsp;&nbsp; ☐ Lazy load images |
| **Asset minification** | ☑ Minify CSS &nbsp;&nbsp; ☑ Minify JS |
| **Caching strategy** | GitHub Pages default caching — no special requirements |

---

## 10. Security & Compliance

| Field | Details |
|---|---|
| **HTTPS** | ☑ Enforced (required) |
| **Sensitive data policy** | No personal data collected or stored on the site itself. If a registration form is used, it must link to an external service (e.g., Google Forms, Eventbrite) — not a self-hosted form that stores data on GitHub Pages. |
| **Secrets in CI/CD** | None anticipated — no API keys needed for a static event site |
| **Dependency updates** | ☑ Dependabot alerts enabled |
| **Content policy** | ☑ Site content is appropriate: church event, family-friendly, community-oriented. No prohibited content. |

---

## 11. GitHub Pages Hard Constraints

| Constraint | Limit | Status |
|---|---|---|
| Repository size | < 1 GB (recommended) | ☑ Well within limit for a simple event site |
| Published site size | < 1 GB (hard limit) | ☑ Well within limit |
| Monthly bandwidth | 100 GB soft limit | ☑ Acceptable for a local church event's expected traffic |
| Build timeout | 10 minutes max | ☑ Simple Jekyll build will complete in < 1 minute |
| Deployment type | Static files only | ☑ No server-side code required |

---

## 12. Maintenance & Ownership

| Field | Details |
|---|---|
| **Site owner** | Christ Central Buffalo — repository hosted under `Spicy97repo` GitHub account |
| **Primary maintainer** | `Spicy97repo` (repository owner) |
| **Content contributors** | Church staff / event organizer |
| **Update process** | Feature branch → PR review → merge to main → auto-deploy via GitHub Actions |
| **Review cadence** | Monitor leading up to event (August 21–23); site can be archived or repurposed after event |
| **Backup strategy** | Git history provides full version control |
| **Monitoring** | Check GitHub Actions build status after each update; optionally set up Google Search Console |

---

## 13. Out of Scope

- ☑ User authentication or login
- ☑ E-commerce or payment processing (the $5 fee will be collected at the door or via an external payment link — not processed on the site)
- ☑ Server-side API endpoints
- ☑ Database integration
- ☑ Storing registration data on the site (use an external form service such as Google Forms or Church Center)

---

## 14. Open Questions

| # | Question | Status | Owner | Due Date |
|---|---|---|---|---|
| 1 | What is the church's name? | ✅ **Christ Central Buffalo** | — | Resolved |
| 2 | What is the GitHub username or organization for the repository? | ✅ **`Spicy97repo`** | — | Resolved |
| 3 | Does the church have an existing website or custom domain? | ✅ **Yes — `https://christcentralbuffalo.com/`** | — | Resolved |
| 4 | What is the preferred URL? | ✅ **`https://christcentralbuffalo.com/vbs/`** | — | Resolved |
| 5 | What are the church's brand colors and fonts, if any? | ✅ **Found in VBS Style Guide** — 6-color palette + CHALOPS font (see Section 5) | — | Resolved |
| 6 | Does the church have a logo? If so, please provide the file. (No logo found in branding folder) | ⬜ Open | Requester | Before build |
| 7 | What is the age range for children attending VBS? | ⬜ Open | Requester | ASAP |
| 8 | How should families register/save their spot? (Google Form, email, phone, Eventbrite link?) | ⬜ Open | Requester | ASAP |
| 9 | What is the contact email/phone for questions about the event? | ⬜ Open | Requester | ASAP |
| 10 | Who manages DNS for `christcentralbuffalo.com`? (needed to configure GitHub Pages custom domain) | ⬜ Open | Requester | ASAP |
| 11 | Does the church want Google Analytics or any other tracking? | ⬜ Open | Requester | ASAP |
| 12 | Any photos or graphics to include (event flyers, church photos, VBS theme art)? | ✅ **Yes — official VBS brand kit available** in `C:\Users\Elliot\OneDrive\Documents\GitHub\VBS Branding\` (posters, banners, balloons, postcard graphics, etc.) | — | Resolved |
| 13 | Should the popup appear only once per session, or on every page load? | ⬜ Open | Requester | Before build |

---

## 15. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Requester | | | |
| Developer | | | |
| Reviewer | | | |

---

*This document was generated from the [GitHub Pages Website Requirements Template](./requirements-template.md) based on a project description provided by the event requester. Sections marked [OPEN QUESTION] require answers before development begins.*
