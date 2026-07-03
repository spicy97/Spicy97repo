# AGENTS.md — AI Agent Instructions for Spicy97repo

> Cross-tool AI agent configuration. Read by Claude Code, GitHub Copilot, OpenAI Codex, Cursor, Gemini CLI, and other AI coding agents.

---

## Project Overview

- **Site:** VBS registration and info site for Christ Central Buffalo
- **URL:** https://vbs.christcentralbuffalo.com
- **Stack:** Jekyll (Ruby), GitHub Pages, Minima theme (customized), Sass
- **Purpose:** Static website for a 3-day Vacation Bible School event

---

## Build & Dev Commands

```bash
# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

- Output goes to `_site/` (excluded from version control)
- GitHub Pages auto-builds on push to `main`

---

## Code Style Guidelines

- **Markdown:** Use front matter (`---`) for all Jekyll pages
- **Sass:** Styles live in `_sass/`. Follow existing variable naming in `vbs.scss`
- **HTML (Liquid):** Templates in `_layouts/` and `_includes/`. Use Liquid tags for dynamic content
- **No JavaScript frameworks** — vanilla JS only if needed
- **Mobile-first** responsive design

---

## Architecture

```
Spicy97repo/
  _config.yml          ← Jekyll config (site metadata, plugins, nav)
  _layouts/            ← Page templates (default.html)
  _includes/           ← Reusable partials (footer, popup, etc.)
  _sass/               ← Sass stylesheets
  assets/              ← Images, fonts, compiled CSS
  index.md             ← Home page
  about/               ← About page
  vbs/                 ← VBS info page
  contact/             ← Contact page
  pay/                 ← Payment page
  vbs-registration/    ← Registration form page
  .clinerules/         ← AI agent rules and skills (Cline-specific)
  AGENTS.md            ← This file (cross-tool AI config)
  CLAUDE.md            ← Claude/Cline-specific config
```

---

## Security Considerations

- Do **not** commit secrets, API keys, or payment credentials
- The `pay/` page links to an external payment processor — do not store payment data in the repo
- Do not read or modify `.git/` contents

---

## Commit & PR Guidelines

- Commit messages: short imperative present tense (e.g., `Add footer link`, `Fix registration form layout`)
- Branch naming: `feature/description` or `fix/description`
- All changes deploy automatically via GitHub Actions on push to `main`

---

## Subagent Best Practices

> Sources: [Anthropic — Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) · [Anthropic — Multi-Agent Research System](https://www.anthropic.com/engineering/multi-agent-research-system) · [Anthropic — Claude Code Advanced Patterns (PDF)](https://resources.anthropic.com/hubfs/Claude%20Code%20Advanced%20Patterns_%20Subagents%2C%20MCP%2C%20and%20Scaling%20to%20Real%20Codebases.pdf) · [OpenAI — Practical Guide to Building AI Agents](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/)

### When to Use Subagents

Use subagents when the task:
- Requires **parallel experimentation** or investigation across multiple areas
- Involves **isolated subtasks** that don't need shared context with the main session
- Exceeds a single context window and benefits from **context compression**
- Needs a **focused, specialized role** (e.g., a reviewer, researcher, or auditor)
- Is "hands-off" — you only need conclusions returned, not step-by-step visibility

Do **not** use subagents when:
- Tasks have heavy **inter-dependencies** requiring shared context
- The problem requires **sequential reasoning** where each step depends on the last
- A single well-prompted agent call would suffice (prefer simplicity)

### Subagent Role Design

- **Give each subagent a clear, specialized role** with defined tool access and explicit success/completion criteria
- **Scope tool access** — only grant the tools the subagent needs for its specific task
- **Define what to return** — specify the exact format and level of detail the subagent should report back
- **Isolate context** — subagents work best when their context is independent from the main agent

### Architecture Patterns

#### Orchestrator-Worker (recommended for parallel tasks)
A lead agent coordinates and delegates to specialized subagents operating in parallel. Each subagent compresses its findings and returns a summary.

```
Orchestrator
├── Subagent A (e.g., research task)
├── Subagent B (e.g., code review)
└── Subagent C (e.g., audit/validation)
```

#### Evaluator-Optimizer
Use when clear evaluation criteria exist and iterative refinement provides measurable value. One agent generates, another evaluates and provides feedback.

#### Prompt Chaining (for sequential workflows)
Break tasks into fixed sequential subtasks where each LLM call is easier than the whole. Add programmatic checks between steps.

### Guardrails & Safety

- **Layer guardrails** — use multiple specialized guardrails together, not a single check
- **Human-in-the-loop triggers:**
  - Agent fails to understand intent after multiple attempts
  - High-risk, sensitive, or irreversible actions
  - Actions exceeding a defined risk threshold
- **Stopping conditions:** Always implement a max-iteration limit to maintain control
- **Sandboxed testing:** Test agents extensively in non-production environments before deployment
- **Minimal footprint:** Request only necessary permissions; prefer reversible over irreversible actions

### Key Principles (Anthropic)

1. **Maintain simplicity** — start with the simplest solution; add complexity only when demonstrably needed
2. **Prioritize transparency** — explicitly show the agent's planning steps
3. **Carefully craft the Agent-Computer Interface (ACI)** — invest as much effort in tool documentation and testing as in user-facing interfaces
4. **Measure and iterate** — instrument performance and iterate on implementations
5. **Enable feedback loops** — design systems that allow for correction and human oversight

### Tool Design for Agents

- Make tool usage **obvious from the description and parameters** (like a great docstring)
- Include **example usage, edge cases, input format requirements**, and clear boundaries
- Use **absolute paths** instead of relative ones to reduce model errors
- **Test tool usage** with many example inputs to identify and fix mistakes before deployment
- Keep **format natural** — close to what the model has seen in training data

---

## File Exclusions (Jekyll Build)

These files/directories are excluded from the Jekyll build output (see `_config.yml`):
- `Gemfile`, `Gemfile.lock`, `vendor/`, `.bundle/`, `_site/`, `.jekyll-cache/`
- `VBS Branding/`, `*.zip`, `*.eps`, `*.pdf`
- `README.md`, `.clinerules/`, `AGENTS.md`, `CLAUDE.md`
