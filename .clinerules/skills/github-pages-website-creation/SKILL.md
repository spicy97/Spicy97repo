---
name: github-pages-website-creation
description: Use this skill when creating, configuring, or deploying a website using GitHub Pages. Covers repository setup, GitHub Actions deployment, Jekyll configuration, custom domains, HTTPS, performance, SEO, accessibility, and troubleshooting.
---

# Skill: Building a Website with GitHub Pages

> **Sources:** [GitHub Pages Docs](https://docs.github.com/en/pages), [GitHub Pages Quickstart](https://docs.github.com/en/pages/quickstart), [Custom Workflows Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), [Jekyll & GitHub Pages](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll), [Custom Domains Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

---

## 1. Repository Setup

### Naming Conventions
- **User/Organization site:** Name the repository `<username>.github.io` (replacing `<username>` with your exact GitHub username or organization name).
- **Project site:** Can use any repository name; the site will be published at `<username>.github.io/<repository-name>`.
- There is a maximum of **one user or organization site per account** and **one project site per repository**.

### Branch Strategy
- Use `main` as the default branch for all source code.
- Publish from the `main` branch, `gh-pages` branch, or a `/docs` folder on `main` (configurable in Settings > Pages).
- Never commit directly to the publishing branch. Use **feature branches** and merge via **pull requests** after review.
- Test changes in feature branches before merging, using GitHub Actions to validate builds.

### Repository & Folder Structure
- Place the site entry point (`index.html` or `index.md`) at the root of the publishing source.
- For Jekyll sites, follow this recommended structure:
  ```
  .github/
    workflows/
      pages.yml       # GitHub Actions deployment workflow
  _layouts/           # Custom HTML layout templates
  _posts/             # Blog posts (YYYY-MM-DD-title.md format)
  assets/
    css/
      style.scss      # Custom styles (must include empty front matter: ---)
    images/
  _config.yml         # Jekyll site configuration
  Gemfile             # Ruby gem dependencies
  index.md            # Homepage content
  404.html            # Custom 404 error page
  README.md
  ```
- Always include a `README.md` in your repository.
- Use `.gitignore` to exclude build artifacts, local config, and unnecessary files (e.g., `_site/`, `.jekyll-cache/`, `node_modules/`, `vendor/`).

### Repository Size
- Keep source repositories **under 1 GB** (recommended hard limit).
- Published sites may be **no larger than 1 GB**.
- Avoid committing large binary files, media, or build artifacts to the repository. Use Git LFS or external hosting for large assets.

---

## 2. Deployment

### Recommended: GitHub Actions
- **GitHub Actions is the recommended deployment method** for GitHub Pages — it provides the most flexibility, control, and avoids the 10 builds/hour soft limit.
- Select **"GitHub Actions"** as the source under Settings > Pages > Build and deployment.
- Use GitHub-provided workflow templates or create a custom `.github/workflows/pages.yml` file.

### GitHub Actions Workflow Best Practices
- Set the correct **permissions** on your workflow jobs:
  ```yaml
  permissions:
    contents: read
    pages: write
    id-token: write
  ```
- Configure **concurrency** to avoid simultaneous deployments overwriting each other:
  ```yaml
  concurrency:
    group: "pages"
    cancel-in-progress: true
  ```
- Always set the `needs` parameter on the `deploy` job to reference the `build` job's ID to prevent deploying before the artifact is ready.
- Establish an `environment` for the deploy job (default: `github-pages`) to enforce branch and deployment protection rules:
  ```yaml
  environment:
    name: github-pages
    url: ${{ steps.deployment.outputs.page_url }}
  ```
- Use pinned, up-to-date action versions:
  - `actions/checkout@v4`
  - `actions/configure-pages@v4`
  - `actions/upload-pages-artifact@v3` (artifact must be a gzip-compressed tar file, max 10 GB, no symbolic or hard links)
  - `actions/deploy-pages@v4`
  - `ruby/setup-ruby@v1` (for Jekyll, with `bundler-cache: true`)
- Monitor all builds via the **Actions tab** in your repository.
- Deployments will **timeout if they take longer than 10 minutes** — optimize build steps accordingly.

### Branch-Based Publishing (Legacy)
- If not using GitHub Actions, configure publishing from a specific branch (e.g., `main` or `gh-pages`) under Settings > Pages.
- The **soft limit is 10 builds per hour** for branch-based publishing.
- Changes can take **up to 10 minutes** to appear after pushing.

---

## 3. Jekyll Configuration

### `_config.yml`
- Use `_config.yml` at the repository root to configure your Jekyll site (title, description, theme, plugins, baseurl, etc.).
  ```yaml
  title: My Site
  description: A brief description of my site
  theme: minima
  plugins:
    - jekyll-seo-tag
    - jekyll-remote-theme
    - jekyll-relative-links
  ```
- Be aware that the following settings **cannot be changed** for GitHub Pages sites (they are overridden by GitHub):
  - `lsi: false`
  - `safe: true`
  - `source: [repo root]`
  - `incremental: false`
  - `highlighter: rouge`
  - `gist.noscript: false`
  - `kramdown.math_engine: mathjax`
  - `kramdown.syntax_highlighter: rouge`

### Front Matter
- Add YAML front matter to the top of every Markdown and HTML file to set layout, title, and other metadata:
  ```yaml
  ---
  layout: default
  title: Page Title
  ---
  ```
- SCSS/CSS files processed by Jekyll must include empty front matter:
  ```scss
  ---
  ---
  /* your styles here */
  ```

### Plugins
- GitHub Pages enables several plugins by default that cannot be disabled (e.g., `jekyll-coffeescript`, `jekyll-gist`, `jekyll-github-metadata`).
- Enable additional plugins via the `plugins` key in `_config.yml`. Only [GitHub Pages-supported plugins](https://pages.github.com/versions/) are available for branch-based builds.
- If you need **unsupported plugins**, use a GitHub Actions workflow to build the site locally and push the static output to the publishing branch.
- Keep your `github-pages` gem updated to ensure you're using the latest plugin versions.

### Themes
- Add a Jekyll theme to customize your site's appearance via `_config.yml` (`theme:` or `remote_theme:`).
- Override any theme default by creating the corresponding file in your repository (e.g., `_layouts/default.html`).

### Syntax Highlighting
- Jekyll uses **Rouge** by default (compatible with Pygments). Do not specify a different highlighter — it will be ignored or cause build warnings.
- Use **lowercase language identifiers** in fenced code blocks.
- To disable Jekyll's syntax highlighting (e.g., to use highlight.js), add to `_config.yml`:
  ```yaml
  kramdown:
    syntax_highlighter_opts:
      disable: true
  ```
- Generate GitHub-style syntax highlighting CSS with: `rougify style github > assets/css/syntax.css`

### Local Testing
- **Always test your Jekyll site locally** before pushing to GitHub:
  ```bash
  bundle exec jekyll serve
  ```
- This catches build errors, broken links, and rendering issues before they appear in production.
- Validate all YAML files with a linter before committing.

---

## 4. Custom Domains

### Setup
- Add a `CNAME` file in your repository root containing your custom domain (e.g., `www.example.com`).
- Configure DNS records through your DNS provider:
  - **Subdomain** (e.g., `www`): Use a `CNAME` record pointing to `<username>.github.io`.
  - **Apex domain** (e.g., `example.com`): Use `A`, `ALIAS`, or `ANAME` records pointing to GitHub Pages' IP addresses.
- It is **recommended to always set up a `www` subdomain**, even when also using an apex domain. GitHub Pages automatically attempts to secure the associated apex domain when `www` is configured, and will set up redirects between the two automatically.
- Domain names beginning with `www.www.` are not supported.

### Security
- **Always verify your custom domain before adding it to your repository** to prevent domain takeover attacks.
- If your GitHub Pages site is disabled but still has a custom domain configured and that domain is **not verified**, immediately update or remove your DNS records to prevent domain takeover.
- Override inherited custom domains for project sites by adding a custom domain directly in that project repository's settings.

### HTTPS
- **Always enforce HTTPS** for your GitHub Pages site (Settings > Pages > Enforce HTTPS).
- This transparently redirects all HTTP requests to HTTPS and prevents mixed-content warnings.
- If using a custom domain, ensure your SSL/TLS certificate is valid (GitHub provisions this automatically for supported setups). Renew or check certificates annually.

---

## 5. Performance & Optimization

- **Minify CSS, JavaScript, and HTML** assets before publishing. Use tools like Webpack, esbuild, or Jekyll's built-in Sass compilation.
- **Optimize images**: compress images before committing; consider using WebP format for better compression.
- **Audit site speed** regularly with [Google PageSpeed Insights](https://pagespeed.web.dev/) or Lighthouse.
- Exclude unnecessary files using `.gitignore` to keep the repository lean.
- Avoid including `node_modules/`, build cache directories, or OS-generated files (e.g., `.DS_Store`, `Thumbs.db`) in your repository.
- For Jekyll sites, use `bundler-cache: true` in your GitHub Actions workflow to cache Ruby gems and speed up builds.

---

## 6. Security

- **Enforce HTTPS** at all times (see Custom Domains > HTTPS above).
- Do **not** commit secrets, API keys, credentials, or tokens into the repository. Use GitHub Actions secrets (`${{ secrets.MY_SECRET }}`) for sensitive values used in build steps.
- Do not collect or process sensitive user data (passwords, payment info, personal data) on a GitHub Pages site — it is not a suitable platform for sensitive transactions.
- Keep all dependencies (Jekyll gems, npm packages) up to date to avoid known vulnerabilities.
- Use GitHub's [security advisories](https://github.com/advisories) and Dependabot alerts in your repository to track vulnerable dependencies.

---

## 7. SEO & Accessibility

### SEO
- Use the `jekyll-seo-tag` plugin to automatically generate meta tags for search engines and social media:
  ```yaml
  # _config.yml
  plugins:
    - jekyll-seo-tag
  ```
  ```html
  <!-- _layouts/default.html, inside <head> -->
  {% seo %}
  ```
- Set a meaningful `title` and `description` in `_config.yml` and in each page's front matter.
- Use descriptive, human-readable URLs (Jekyll's `permalink` setting can help).
- Add a `sitemap.xml` (use the `jekyll-sitemap` plugin).
- Add a `robots.txt` file to control crawler access.

### Accessibility
- Use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`).
- Provide `alt` attributes on all images.
- Ensure sufficient color contrast for text readability.
- Make all interactive elements keyboard-navigable.
- Test with accessibility tools (e.g., axe, Lighthouse accessibility audit).

### Custom 404 Page
- Always create a custom `404.html` (or `404.md` with front matter) in your repository root so users see a helpful error page instead of a generic GitHub 404:
  ```yaml
  ---
  layout: default
  title: Page Not Found
  permalink: /404.html
  ---
  # 404 - Page Not Found
  Sorry, the page you're looking for doesn't exist.
  ```

---

## 8. Troubleshooting

### 404 Errors
- Ensure an `index.html` or `index.md` exists at the root of your publishing source.
- Verify the correct publishing branch is selected in Settings > Pages.
- Check the `CNAME` file for typos if using a custom domain.
- Confirm DNS records are correctly configured if using a custom domain.

### Build Failures
- Check the **Actions tab** in your repository for detailed build logs.
- Validate all YAML files (especially `_config.yml` and workflow files) with a linter.
- Verify your `Gemfile` has the correct dependencies for Jekyll builds.
- If build fails due to unsupported plugins, switch to a GitHub Actions workflow that builds the site with full plugin support and deploys the static output.
- Test your Jekyll build locally with `bundle exec jekyll build` before pushing.
- **Jekyll executes Liquid tags inside HTML comments** — `{% %}` and `{{ }}` tags inside `<!-- -->` HTML comments are NOT ignored — Jekyll executes them before parsing HTML. Never put live Liquid syntax (e.g., `{% include footer.html %}`) inside an HTML comment; it will actually run and can cause infinite recursion ("stack level too deep"). Use plain English descriptions in comments instead.
- **JSON-LD structured data needs `{% raw %}`** — Wrap any `<script type="application/ld+json">` blocks in `{% raw %}{% endraw %}` tags to prevent Jekyll's Liquid parser from misinterpreting the JSON's `{ }` braces as Liquid template expressions. Without this, Jekyll will throw a Liquid parse error and the build will fail.
- **"Stack level too deep"** — Almost always caused by a circular include/render loop. Most common cause: an `_includes/` file contains `{% include itself.html %}` in a comment (see above), or an include file accidentally has YAML front matter with `layout:` set (which causes Jekyll to render the include as a full page, re-invoking the layout). Check includes for YAML front matter and remove any `{% include %}` / `{% %}` tags from HTML comments.

### Custom Domain Issues
- Confirm DNS records are propagated (can take up to 48 hours).
- Verify the `CNAME` file contains only your domain name with no extra characters or whitespace.
- Use the **GitHub Pages health check** in your repository's Settings > Pages to diagnose DNS and certificate issues.
- Ensure your custom domain is **verified** in your GitHub account settings.
- **Deploy jobs fail until DNS verification completes** — When a custom domain is first configured (or DNS records are changed), GitHub Actions deploy jobs may fail with exit code 1 even when the build step passes. This happens because GitHub's backend hasn't finished verifying the domain and provisioning the TLS certificate yet. **Fix:** Check Settings → Pages — if it shows "DNS check in progress" or a certificate error, wait for it to resolve (minutes to 48 hours), then manually re-run the failed workflow from the Actions tab ("Re-run failed jobs"). Do not assume the failure is a code bug until you've confirmed the domain shows a green "DNS check successful" status.

### General Debugging
- Use the GitHub Pages health check in Settings > Pages.
- Review GitHub Actions workflow logs step-by-step.
- Replicate the build locally to isolate environment-specific issues.
- Check the [GitHub Status page](https://www.githubstatus.com/) if builds suddenly stop working across the board.

---

## 9. Sources

1. **GitHub Docs – Getting Started with GitHub Pages**: https://docs.github.com/en/pages/getting-started-with-github-pages
2. **GitHub Docs – GitHub Pages Quickstart**: https://docs.github.com/en/pages/quickstart
3. **GitHub Docs – Using Custom Workflows with GitHub Pages**: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
4. **GitHub Docs – About GitHub Pages and Jekyll**: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll
5. **GitHub Docs – About Custom Domains and GitHub Pages**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages
