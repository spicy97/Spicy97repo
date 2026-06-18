# Cline Prompting — Behavioral Guidelines

> **Sources:** [cline_docs – Prompting Guide](https://github.com/nickbaumann98/cline_docs/blob/766f777a6593fcd9dd72dae1628c6b7d5652ec7c/prompting/README.md), [Cline Blog – Cline Rules](https://cline.bot/blog/cline-rules)

These guidelines are always active and govern how every interaction with Cline should be conducted to maximize quality, accuracy, and reliability.

---

## 1. Communication Style

- Use **natural, conversational language** — Cline understands plain English well.
- **Explain goals and context**, not just the specific action to take. The more Cline understands the "why," the better its output.
- Use `@filename` or `@folder` mentions to give Cline direct context about specific files or directories relevant to a task.

---

## 2. Providing Clear Context

- Clearly explain the **goal** of the task, not just the mechanical steps.
- Reference relevant parts of the codebase explicitly (e.g., "Update `src/services/user.ts`" rather than "update the user service").
- For complex tasks, **break them down into smaller steps** and work through them sequentially.
- Ask specific questions to guide toward the desired outcome rather than leaving ambiguity.

---

## 3. Advanced Prompting Techniques

### Constraint Stuffing
Prevent truncating or omitting code by including explicit completeness requirements:
- `"Ensure the code is complete."`
- `"Always provide the full function definition."`
- `"DO NOT omit any code. DO NOT be lazy."`

### Confidence Checks
Rate confidence before and after key actions to catch uncertainty early:
- `"On a scale of 1–10, how confident are you in this solution?"`
- `"Rate your confidence before saving, after saving, and before marking the task complete."`

### Challenge Assumptions
Prevent locking in on incorrect approaches:
- `"Are you sure this is the best way to implement this?"`
- `"What assumptions are you making here? List them."`
- `"What are the potential edge cases or issues with this approach?"`

### Verify Understanding
Confirm full understanding of a complex prompt before acting:
- `"If you understand my prompt fully, respond with 'CONFIRMED' before proceeding."`
- `"Summarize what you're about to do before doing it."`

---

## 4. Code Quality Prompting

- Reinforce adherence to custom instructions: `"Follow all custom instructions when implementing this."`
- Influence code style with descriptive words: `"Write an elegant, simple solution."` produces better-structured code than a bare instruction.
- For large files: `"[FILENAME] has grown too large. Analyze how this file works and suggest safe ways to break it apart."`
- After making changes: `"Don't forget to update the documentation and README with these changes."`

---

## 5. Analysis & Planning Prompts

- Before implementing: `"Analyze the codebase thoroughly, get full context, write an implementation plan, then implement the code."`
- For thorough investigation: `"State your confidence score. Don't start coding until you've fully analyzed the problem. Continue analyzing even if you think you've found a solution."`
- For catching issues early: `"List all assumptions and uncertainties before proceeding."`
- For reflection: `"Take a moment to consider whether this is the right approach before acting."` (or simply: `"Count to 10."`)

---

## 6. Project Integrity

- Before suggesting structural or dependency changes: `"Check the existing project files and structure first before recommending any changes."`
- Set clear boundaries: `"Do not modify any files outside of [directory]. Ask me first if you think you need to."`

---

## 7. Sources

1. **cline_docs – Prompting Guide**: https://github.com/nickbaumann98/cline_docs/blob/766f777a6593fcd9dd72dae1628c6b7d5652ec7c/prompting/README.md
2. **Cline Blog – Chapter 2: Cline Rules**: https://cline.bot/blog/cline-rules
