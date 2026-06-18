# General Rules — Cline Workspace Standards

> **Sources:** [Cline Docs – Rules](https://docs.cline.bot/customization/cline-rules), [Cline Blog – Chapter 2: Cline Rules](https://cline.bot/blog/cline-rules)

These rules apply at all times, across all tasks and projects in this workspace.

---

## 1. How to Write Good Rules

Rules are most effective when they are clear, specific, and actionable. Follow these principles when creating or updating any rule file:

- **Be specific, not vague.** State exact, measurable expectations. For example: "Use camelCase for variables, PascalCase for classes, and UPPER_SNAKE_CASE for constants" — not "use descriptive variable names."
- **Include the "why."** Explain the reason behind a rule, especially if it might seem arbitrary. For example: "Do not modify files in `/legacy` — this code is scheduled for removal in Q2."
- **Use actionable language.** Document rules with specific, actionable instructions rather than aspirational or open-ended guidance.
- **Avoid ambiguity.** Do not use vague language such as "optimize code where possible" or "use proper coding techniques."
- **Point to examples.** Reference existing patterns in the codebase where applicable. For example: "Follow the error handling pattern in `/src/utils/errors.ts`."
- **One concern per file.** Split rules by topic (e.g., `coding-style.md`, `testing.md`, `architecture.md`) for clarity and easier toggling.
- **Keep rules concise.** Rules consume context tokens. Keep them brief; link to external documentation for details rather than pasting entire style guides.
- **Use markdown structure.** Use headers (`#`, `##`) to organize rules and bullet points for individual requirements to make rules scannable.

---

## 2. Rule Quality & Conflict Resolution

- **Avoid contradictions.** Ensure different rules do not conflict with each other.
- **Establish a hierarchy.** When two rules could conflict, make it explicit which takes precedence in specific situations (e.g., a general principle with a language-specific exception).
- **Prioritize impact.** Focus first on rules that prevent security vulnerabilities, maintain system stability, or ensure code quality.
- **Reflect actual practices.** Rules must reflect the team's real practices, not just aspirational ideals.

---

## 3. Rule Maintenance

- **Treat rules as living documentation.** Rules should evolve as projects, tech stacks, and workflows change.
- **Remove outdated rules.** Delete or update rules when they no longer apply.
- **Review regularly.** Conduct periodic reviews to ensure all rules align with current standards and practices.
- **Update when adopting new tools.** Update rules when adopting new frameworks, languages, security practices, or deployment processes.

---

## 4. Rule Organization in `.clinerules/`

- **Workspace rules** are stored in `.clinerules/` at the project root and are version-controlled and team-shareable.
- **Always-on rules** (like this file) have no YAML frontmatter and are loaded in every task.
- **Conditional rules** use YAML frontmatter with a `paths:` array to activate only when relevant files are in context — keeping context focused and saving tokens.
- **Numeric prefixes** (e.g., `01-coding.md`) can be used for ordering, though they are optional.
- **Descriptive filenames** should indicate the scope of the rule file (e.g., `api-endpoints.md`, `react-components.md`).
- Workspace rules take **precedence over global rules** in case of conflict.

### Rules vs. Skills — When to Use Each

| | **Rules Files** | **Skills Files** |
|---|---|---|
| **Nature** | Behavioral — "always behave this way" | Procedural — "here's how to do X when needed" |
| **Loading** | Always active, appended to system prompt on every message | Load **on-demand** only when triggered by a matching request |
| **Token cost** | Consumed on **every** message | Consumed **only when invoked** |
| **Use when** | Standards, constraints, policies, guidelines that should always influence Cline | Step-by-step procedures, domain-specific workflows for tasks you repeat but don't always need |

**Skills file format:** Skills must be organized as **directories** inside `.clinerules/skills/`, each containing a `SKILL.md` file with YAML frontmatter:
```
.clinerules/skills/
  my-skill-name/
    SKILL.md    ← requires name: and description: in YAML frontmatter
```
The `description:` field is critical — it tells Cline what the skill does and when to load it.

---

## 5. Online Research & Source Trustworthiness

When using web search or web fetch to look up information, documentation, or best practices:

- **Do not trust sources published within the last 7 days.** Newly published content has not had sufficient time to be peer-reviewed, fact-checked, or validated by the community, and may contain errors or incomplete information.
- **Prioritize newer sources** when multiple sources are available (beyond the 7-day exclusion window), as they are more likely to reflect current best practices, up-to-date APIs, and recent changes.
- **Prefer authoritative sources** in this order:
  1. Official product documentation (e.g., `docs.github.com`, `docs.cline.bot`, `developer.mozilla.org`)
  2. Official GitHub repositories and release notes
  3. Established organizations and standards bodies
  4. Well-known, reputable community references with clear authorship and dates
  5. Blog posts and tutorials (use with caution; verify against official docs)
- **When publication date is unknown,** treat the source with additional skepticism and cross-reference against official documentation.
- **Cross-reference important facts** across multiple sources before treating them as authoritative.

---

## 6. Sources

1. **Cline Docs – Rules**: https://docs.cline.bot/customization/cline-rules
2. **Cline Blog – Chapter 2: Cline Rules**: https://cline.bot/blog/cline-rules
