# Cline Plan & Act Mode — Behavioral Guidelines

> **Sources:** [Cline Docs – Plan & Act Mode](https://docs.cline.bot/core-workflows/plan-and-act)

These guidelines are always active and govern how every task should be approached in Cline.

---

## 1. Core Philosophy

- **Think first, then build.** Separate the thinking phase (Plan mode) from the doing phase (Act mode).
- **Plan first, act second.** Even when jumping directly into Act mode is possible, planning first builds necessary context for effective and accurate implementation.
- **Cycle between modes.** For complex projects, return to Plan mode whenever you encounter unexpected complexity or need to rethink your approach, then switch back to Act mode to continue.

---

## 2. When to Use Plan Mode

Use Plan mode when:

- Starting a new feature where the approach is not obvious.
- Debugging a tricky issue where the root cause is unclear.
- Making architectural decisions that affect multiple files.
- Understanding a complex workflow before modifying it.
- Performing code review or security analysis.
- Learning or exploring an unfamiliar codebase.
- Discussing architecture decisions and trade-offs.
- Identifying edge cases and potential issues upfront.
- Creating a clear implementation strategy before writing code.

---

## 3. When to Use Act Mode

Use Act mode when:

- Implementing a solution that has already been planned.
- Making routine changes with a clear, well-understood approach.
- Following established patterns already present in the codebase.
- Running tests and making adjustments based on results.
- Applying quick fixes where the solution is obvious.

---

## 4. Task Size Guidelines

| Task Size | Examples | Recommended Approach |
|---|---|---|
| **Small** | Typo fix, simple bug fix, well-understood pattern | Start directly in Act mode |
| **Medium** | New API endpoint, UI component, bug needing investigation, single-module refactor | Start in Plan mode to understand scope and approach, then switch to Act mode |
| **Large** | New feature across frontend/backend, major refactoring, new system integration, multi-step migration | Use `/deep-planning` slash command for thorough analysis before acting |

---

## 5. Best Practices

- **Deep Planning:** For complex tasks requiring thorough analysis, use the `/deep-planning` slash command to generate a detailed, structured plan before implementing anything.
- **Model Configuration:** Configure separate models for Plan and Act modes — a stronger reasoning model for planning and a faster model for implementation — to balance cost and quality.
- **Document the Plan:** Ask Cline to write a markdown file summarizing the plan before switching to Act mode. This serves as a reference and keeps the context clear.
- **Use File Mentions:** Point Cline at relevant files during the planning phase using `@filename` mentions to ensure the plan is grounded in the actual codebase.
- **Enable Checkpoints:** Turn on Checkpoints before entering Act mode on significant tasks so you can roll back if needed.
- **Task Management:** For large tasks, ask Cline to create a todo list during planning that you can track progress against in Act mode.

---

## 6. CI/CD Debugging Guidelines (Learned from Production)

When a GitHub Actions build (or any CI/CD pipeline) fails:

1. **Get the exact error first.** Before making any code changes, read the full build log and identify the specific error message. Do not guess at the cause based on symptoms alone.
2. **Determine if the failure predates your changes.** Check `git log` and the Actions run history to see whether the failure existed before your last commit. If the previous run passed and yours failed, your change is the cause — focus there.
3. **Use `--trace` for Jekyll builds.** Add `bundle exec jekyll build --trace` to get the full include stack on failure — it shows the exact file and line that caused the error.
4. **Consider environmental causes.** A failure that looks like a code bug may be caused by DNS propagation, certificate provisioning, or a GitHub Pages infrastructure issue. Check Settings → Pages and the GitHub Status page before assuming code is the problem.
5. **Fix one thing at a time.** After each fix, push and wait for the build result before making additional changes. Batching multiple speculative fixes makes it harder to identify what actually resolved the issue.

---

## 7. Sources

1. **Cline Docs – Plan & Act Mode**: https://docs.cline.bot/core-workflows/plan-and-act
