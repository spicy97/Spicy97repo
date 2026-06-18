---
name: cline-memory-bank
description: Use this skill when setting up, initializing, updating, or maintaining a Cline Memory Bank for a project. Covers file structure, key commands, update cadence, and context window management.
---

# Skill: Using Cline Memory Bank

> **Sources:** [Cline GitHub – Memory Bank Best Practices](https://github.com/cline/cline/blob/8a6441fd/docs/best-practices/memory-bank.mdx)

---

## 1. What Is Memory Bank?

Memory Bank transforms Cline from a stateless assistant into a persistent development partner. Because Cline's memory resets between sessions, it relies **entirely** on its Memory Bank to understand the project and continue work effectively. Memory Bank is a structured documentation methodology that works with any AI that can read files.

---

## 2. Setup & Initialization

- Copy the Memory Bank custom instructions into a Cline Rules file (e.g., `.clinerules/memory-bank.md`) or your global custom instructions.
- For a **new project**, ask Cline to **"initialize memory bank"** to create the initial file structure.
- For team projects, use Cline Rules for Memory Bank instructions so they are version-controlled and shareable with collaborators.
- Consider using **conditional rules** (YAML frontmatter with `paths: ["memory-bank/**"]`) to activate Memory Bank instructions only when working with files in the `memory-bank/` directory.

---

## 3. Core File Structure

Maintain a `memory-bank/` directory at the project root containing these core files:

| File | Purpose |
|---|---|
| `projectbrief.md` | Foundation document — core requirements, goals, and source of truth for project scope |
| `productContext.md` | Why the project exists, problems it solves, UX goals |
| `activeContext.md` | Current work focus, recent changes, next steps, active decisions, important patterns *(changes most frequently)* |
| `systemPatterns.md` | System architecture, key technical decisions, design patterns, component relationships, critical implementation paths |
| `techContext.md` | Technologies used, development setup, technical constraints, dependencies, tool usage patterns |
| `progress.md` | What works, what's left, current status, known issues, evolution of project decisions |

- Create additional files or subfolders within `memory-bank/` for complex features, integrations, APIs, testing strategies, or deployment procedures when they help organize information.
- Start with a basic `projectbrief.md` and let the structure evolve naturally.

---

## 4. Key Commands

| Command | Effect |
|---|---|
| `"initialize memory bank"` | Creates the initial Memory Bank file structure for a new project |
| `"follow your custom instructions"` | Tells Cline to read the Memory Bank and continue where you left off |
| `"update memory bank"` | Triggers a **full review of ALL memory bank files** — use at important checkpoints |

> ⚠️ Cline **MUST** read ALL memory bank files at the start of every task — this is not optional.

---

## 5. Updating & Maintenance

- `activeContext.md` changes most frequently — update it after each session.
- `progress.md` tracks milestones — review it whenever resuming work after a break.
- Update the Memory Bank after:
  - Significant milestones or direction changes.
  - Discovering new project patterns.
  - Implementing significant changes.
  - When context needs clarification.
- For active development, update every few sessions at minimum.
- Let **Auto Compact** handle routine context management. Reserve manual `"update memory bank"` for important checkpoints.
- Maintain the Memory Bank with **precision and clarity** — Cline's effectiveness depends entirely on its accuracy.

---

## 6. Managing Context Windows

When the context window fills up:
1. Ask Cline to **"update memory bank"** to document the current state fully.
2. **Start a new conversation.**
3. Ask Cline to **"follow your custom instructions"** to continue seamlessly from where you left off.

Also use Cline's built-in slash commands `/newtask` and `/smol` to help manage context windows without losing progress.

---

## 7. Sources

1. **Cline GitHub – Memory Bank Best Practices**: https://github.com/cline/cline/blob/8a6441fd/docs/best-practices/memory-bank.mdx
