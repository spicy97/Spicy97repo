# CHANGELOG

All notable changes to the VBS site are recorded here in reverse-chronological order.
This file is excluded from the Jekyll build (`_config.yml` → `exclude:`).

---

## [2026-07-03] — Site Audit & Improvement Pass

### Removed
- **Google Analytics (GA4)** completely removed from `_layouts/default.html`.
  - Removed the `<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX">` loader tag.
  - Removed the `gtag()` initialization script block.
  - Removed all `onclick="if(typeof gtag==='function'){...}"` event tracking calls from `index.md` and `vbs/index.md`.
  - Removed Google Fonts `<link rel="preconnect">` and `<link>` stylesheet tags (font is now self-hosted).
  - **Rollback:** To restore GA, add back the two `<script>` tags in `<head>` of `_layouts/default.html` with a real Measurement ID from Google Analytics → Admin → Data Streams.

- **Dead `@font-face` block for CHALOPS** removed from `_sass/vbs.scss`.
  - The font files (`CHALOPS.woff2`, `CHALOPS.woff`) were referenced but never existed in `/assets/fonts/`.
  - **Rollback:** Add the font files to `/assets/fonts/` and restore the `@font-face` block.

### Added
- **`<meta name="theme-color" content="#323095">`** added to `_layouts/default.html`.
  - Sets the browser chrome color on Android Chrome and iOS when added to home screen.
  - Value matches `$navy` in `vbs.scss`.

- **Self-hosted Lilita One font** via `@font-face` in `_sass/vbs.scss`.
  - Font files: `/assets/fonts/LilitaOne-Regular.woff2` and `/assets/fonts/LilitaOne-Regular.woff`.
  - Eliminates the external Google Fonts request entirely (faster loads, no privacy concerns).
  - `font-display: swap` prevents invisible text during load (FOIT).
  - **If files are missing:** Download from [Google Fonts](https://fonts.google.com/specimen/Lilita+One) and place in `/assets/fonts/`. Alternatively, restore the Google Fonts `<link>` tags in `default.html`.

- **`@media (prefers-reduced-motion: reduce)` block** added at the end of `_sass/vbs.scss`.
  - Disables all CSS animations (confetti, letter bounce-ins, button pulse, popup entrance) for users who have enabled "Reduce Motion" in their OS accessibility settings.
  - Complies with WCAG 2.1 Success Criterion 2.3.3 (Animation from Interactions).

- **`width`, `height`, and `loading="lazy"` attributes** on balloon images in `index.md`.
  - Prevents Cumulative Layout Shift (CLS) — a Core Web Vital — while images load.
  - `loading="lazy"` defers loading of decorative images until they're near the viewport.

- **JSON-LD Event structured data** added to `vbs/index.md` (bottom of file, `<script type="application/ld+json">`).
  - Tells Google this page describes a local event.
  - Enables rich results (event card with dates, location, price) in Google Search.
  - Uses Schema.org `Event` type with `Place`, `PostalAddress`, `Organization`, and `Offer` sub-types.
  - **Verify:** After deployment, test at [Google Rich Results Test](https://search.google.com/test/rich-results).

- **`image:` key** added to `_config.yml` pointing to `/assets/images/vbs-social-share.jpg`.
  - Used by `jekyll-seo-tag` to populate `og:image` for social sharing previews (Facebook, iMessage, Slack, etc.).
  - **Action needed:** Create a 1200×630px image and save it as `/assets/images/vbs-social-share.jpg`.

- **Honeypot field** added to the registration form in `vbs-registration/index.md`.
  - A hidden `<input name="website">` field that real users never see or fill in.
  - The form's JavaScript checks this field and silently rejects submissions where it's filled (bots fill all fields indiscriminately).
  - No external dependencies — invisible to real users.

- **`fetch()` timeout (15 seconds)** added to registration form in `vbs-registration/index.md`.
  - Uses `Promise.race()` to race the fetch against a 15-second timeout.
  - If the Google Apps Script doesn't respond in time, the error state is shown with a retry message instead of the submit button being permanently disabled.

- **Live registration summary** added above the submit button in `vbs-registration/index.md`.
  - Shows "Registering X child(ren) for [Parent Name]" dynamically as the form is filled.
  - Helps parents confirm their information before submitting.
  - `aria-live="polite"` announces updates to screen readers.

- **`CHANGELOG.md`** added to repo root and excluded from Jekyll build.

### Changed
- `_config.yml`: Added `CHANGELOG.md` to the `exclude:` list.
- `vbs/index.md`: Cleaned up CTA comment (removed outdated GA reference in the comment).

---

## Rollback Instructions

All changes are in version control (git). To revert any individual file:

```bash
# Revert a single file to the last committed version
git checkout HEAD -- Spicy97repo/_layouts/default.html

# Or revert ALL changes since the last commit
git checkout HEAD -- Spicy97repo/
```

To revert to a specific earlier commit, use:
```bash
git log --oneline          # Find the commit hash you want
git checkout <hash> -- .   # Restore all files to that state
```
