---
name: subagent-best-practices
description: Step-by-step guidance for deciding when and how to use subagents effectively. Invoke this skill when asked to use subagents, spawn parallel agents, delegate tasks to a subagent, or when a task is large enough to consider breaking into subagent-handled pieces.
---

# Skill: Subagent Best Practices

> Sources: [Anthropic — Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) · [Anthropic — Multi-Agent Research System](https://www.anthropic.com/engineering/multi-agent-research-system) · [Anthropic — Claude Code Advanced Patterns (PDF)](https://resources.anthropic.com/hubfs/Claude%20Code%20Advanced%20Patterns_%20Subagents%2C%20MCP%2C%20and%20Scaling%20to%20Real%20Codebases.pdf) · [OpenAI — Practical Guide to Building AI Agents](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/)

---

## Step 1 — Decide If Subagents Are Appropriate

Ask these questions before spawning a subagent:

| Question | If YES → | If NO → |
|---|---|---|
| Can the subtasks run independently (no shared state)? | Subagents are suitable | Handle in the main session |
| Does the task exceed a single context window? | Subagents help manage context | Single agent is fine |
| Do you only need conclusions, not step-by-step visibility? | Hands-off delegation works | Keep in main session for oversight |
| Are there 2+ distinct areas to investigate in parallel? | Use parallel subagents | Sequential single agent is simpler |

**Default to the main session.** Only spawn subagents when the above criteria clearly apply.

---

## Step 2 — Define the Subagent's Role

Before spawning, define:

1. **Role:** What is this subagent's specific job? (e.g., "Research Jekyll SEO plugin options and return a ranked comparison")
2. **Tools allowed:** What tools does it need? Restrict to only what's necessary
3. **Success criteria:** What does "done" look like? Be explicit
4. **Return format:** What should the subagent report back? (e.g., "Return a bullet-point summary of findings, max 200 words")
5. **Scope boundaries:** What is out of scope? (e.g., "Do not make any file changes — research only")

---

## Step 3 — Choose the Right Architecture Pattern

### Orchestrator-Worker (most common)
Use when you have parallel, independent subtasks.

```
Main Agent (Orchestrator)
├── Subagent A → specialized task A → returns summary
├── Subagent B → specialized task B → returns summary
└── Subagent C → specialized task C → returns summary
Main Agent synthesizes all summaries
```

**When to use:** Broad research, parallel audits, multi-component investigations.

### Evaluator-Optimizer
Use when you need iterative refinement with clear quality criteria.

```
Generator Agent → produces output
Evaluator Agent → scores/critiques output
→ loop until criteria met or max iterations reached
```

**When to use:** Content generation with quality gates, code review loops.

### Prompt Chaining (sequential, not parallel)
Use when subtasks must happen in order and each step depends on the previous.

```
Step 1 → [programmatic check] → Step 2 → [programmatic check] → Step 3
```

**When to use:** Multi-step processes with validation gates between steps.

---

## Step 4 — Write the Subagent Prompt

A good subagent prompt includes:

```
You are a [specific role] agent.

Your task: [precise description of what to do]

Tools available: [list only what's needed]

Constraints:
- [What NOT to do]
- [Boundaries of this task]

Return format:
[Exact format of what to return to the orchestrator]

Success criteria:
[How the orchestrator will know this task is complete]
```

---

## Step 5 — Implement Guardrails

Before running subagents, ensure:

- [ ] **Max iterations** are set — subagents must have a stopping condition
- [ ] **Scope is bounded** — subagent cannot take irreversible actions without approval
- [ ] **Human checkpoint** — identify if/when a human should review before the subagent proceeds
- [ ] **Error handling** — define what the subagent should do if it gets stuck or encounters an unexpected blocker
- [ ] **Sandboxed if needed** — for agents that make changes, test in a safe environment first

---

## Step 6 — Synthesize Results

When subagents return:

1. **Validate completeness** — did each subagent meet its success criteria?
2. **Resolve conflicts** — if subagents reached different conclusions, investigate before proceeding
3. **Compress and integrate** — synthesize subagent outputs into a coherent whole
4. **Document sources** — note which subagent produced which finding for traceability

---

## Quick Reference: Do's and Don'ts

| ✅ Do | ❌ Don't |
|---|---|
| Give subagents a single, focused job | Give subagents vague or overlapping tasks |
| Restrict tool access to only what's needed | Give subagents unrestricted tool access |
| Specify the exact return format | Let subagents decide how to format output |
| Set a max-iteration stopping condition | Run subagents without stopping conditions |
| Test in sandboxed environments first | Deploy subagents directly to production tasks |
| Start simple; add subagents only when needed | Default to subagents for every task |
| Prefer reversible actions | Allow irreversible actions without human review |
