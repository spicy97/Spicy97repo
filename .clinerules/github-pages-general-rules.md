# GitHub Pages — General Rules & Policies

> **Sources:** [GitHub Pages Docs](https://docs.github.com/en/pages), [GitHub Pages Limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits), [GitHub Terms for Additional Products](https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features)

These rules apply at all times when working with GitHub Pages, regardless of the specific task.

---

## 1. Overview & Intended Use

- GitHub Pages is a **static web hosting service** — it is designed to host static HTML, CSS, and JavaScript files.
- Appropriate use cases include: personal portfolios, project documentation, blogs, organization landing pages, and educational showcases.
- GitHub Pages is **not** intended to be used as a free web hosting service for:
  - Online businesses or e-commerce sites.
  - Commercial SaaS (Software as a Service) products.
  - Sites primarily facilitating commercial transactions.
- Do **not** use GitHub Pages for sensitive transactions such as collecting passwords, credit card numbers, or other personal data.
- Monetization is limited to donation buttons and crowdfunding links.
- Prohibited content includes: get-rich-quick schemes, sexually obscene content, and violent or threatening content.
- Educational recreations of existing websites are permitted **only if**:
  - You write the code yourself.
  - The site collects no user data.
  - A prominent disclaimer is displayed stating the site is not affiliated with the original and was created for educational purposes only.
- GitHub reserves the right to reclaim any GitHub subdomain at any time.

---

## 2. Limits & Restrictions

| Resource | Limit |
|---|---|
| User/Organization sites | 1 per account |
| Project sites | 1 per repository |
| Source repository size | 1 GB (recommended) |
| Published site size | 1 GB (hard limit) |
| Monthly bandwidth | 100 GB (soft limit) |
| Builds per hour (branch-based) | 10 (soft limit) |
| Deployment timeout | 10 minutes |
| GitHub Actions artifact (tar file) | 10 GB max, no symbolic/hard links |

- **Rate limits** may be applied to ensure consistent quality of service for all users.
- The 10 builds/hour limit **does not apply** when using a custom GitHub Actions workflow.

---

## 3. Jekyll & Liquid Rules (Learned from Production)

These rules apply when writing or editing Jekyll templates, layouts, includes, and Markdown files.

- **Never put Liquid tags in HTML comments.** Jekyll processes `{% %}` and `{{ }}` tags *before* parsing HTML — they are NOT ignored inside `<!-- -->` comments. A `{% include footer.html %}` inside a comment will actually execute, causing infinite recursion ("stack level too deep"). Always use plain English in comments to describe Liquid behavior.
- **Always wrap JSON-LD blocks in `{% raw %}`/`{% endraw %}`.** Any `<script type="application/ld+json">` block must be wrapped to prevent Jekyll from misinterpreting the JSON's `{ }` braces as Liquid template expressions. Without this, the build will fail with a Liquid parse error.
- **Never put YAML front matter in `_includes/` files.** Include files must not have `layout:` or any other YAML front matter — it causes Jekyll to render the include as a full page, re-invoking the layout and causing circular render loops.
- **Test the build locally before pushing.** Run `bundle exec jekyll build --trace` locally to catch Liquid parse errors, recursion issues, and YAML problems before they appear in GitHub Actions. The `--trace` flag shows the full include stack on failure.
- **Do not assume a build failure is a code bug if DNS verification is pending.** When a custom domain is newly configured, GitHub Actions deploy jobs can fail with exit code 1 even when the build succeeds. Check Settings → Pages for DNS/certificate status before investigating code.

---

## 4. Sources

1. **GitHub Docs – Getting Started with GitHub Pages**: https://docs.github.com/en/pages/getting-started-with-github-pages
2. **GitHub Docs – GitHub Pages Limits**: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
3. **GitHub Terms for Additional Products and Features**: https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features
