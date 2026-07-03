# CLAUDE.md — Claude & Cline Configuration

> Claude Code / Cline-specific configuration for Spicy97repo.
> For cross-tool agent instructions, see [@AGENTS.md](./AGENTS.md).

@AGENTS.md

---

## Cline-Specific Rules

- **Always check `.clinerules/`** for active rules and available skills before starting any task
- **Use skills on demand** — skills in `.clinerules/skills/` are procedural guides; invoke them when the task matches
- **Plan before acting** — for non-trivial tasks, use Plan mode to explore the codebase and design an approach before making changes
- **Exclude AI config files from Jekyll** — `AGENTS.md`, `CLAUDE.md`, and `.clinerules/` must remain in the `exclude:` list in `_config.yml` so they are never published to the live site

## Subagents in This Project

When working on this repository with subagents:

- **Preferred use:** Spawn subagents for isolated research tasks (e.g., "research Jekyll plugin X and return a summary") or parallel investigations of multiple pages/components
- **Avoid:** Using subagents for tasks that require modifying shared files (e.g., `_config.yml`, `_layouts/default.html`) — coordinate those in the main session to avoid conflicts
- **Return format:** Subagents should return concise summaries with specific, actionable findings — not raw dumps of all content read

## Sources

- [Cline Docs — Rules](https://docs.cline.bot/customization/cline-rules)
- [Anthropic — Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents)
- [Anthropic — Claude Code Advanced Patterns](https://resources.anthropic.com/hubfs/Claude%20Code%20Advanced%20Patterns_%20Subagents%2C%20MCP%2C%20and%20Scaling%20to%20Real%20Codebases.pdf)
