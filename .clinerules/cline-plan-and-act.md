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

## 6. Sources

1. **Cline Docs – Plan & Act Mode**: https://docs.cline.bot/core-workflows/plan-and-act
