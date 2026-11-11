# Choosing a mode / Выбор режима

_Last verified: 2026-11-11._

1. **Chat:** discuss goals, draft specifications, review plans, write or summarize. Usually start here if no tools or external actions are needed.
2. **Codex:** changes to code, tests, repository work. Start with a bounded file set and definition of done.
3. **Work:** multi-step browser and app actions where a conversational answer is not enough.
4. Choose the least expensive **adequate** available model and reasoning level, then escalate when the task fails to meet acceptance criteria. Never imply that a low setting always consumes less end-to-end.
5. Standard speed avoids paying a speed premium where one applies; check actual plan specifics.

**Task heuristics (not official rankings):**

| Task | Suggested starting point |
| --- | --- |
| Brainstorm / draft | Chat / Instant |
| Simple browser form | Work / lighter available model / Low |
| Focused code change | Codex / Sol-class / Low |
| Complex debugging | Codex / Sol-class / Medium |
| Security architecture | Strong available model / Medium–High, narrow scope |

Some available Work/Codex models may include GPT-6 Luna, GPT-6 Sol, GPT-6.1 Terra, GPT-6.1 Sol and GPT-6 Astra. **Never assume every model is shown to every user.** There is no model selector within TokenWise; recommendations must be applied in the ChatGPT/Codex UI.

## Official sources

- https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex
- https://help.openai.com/en/articles/20001516-managing-usage-with-gpt-6-astra-in-work-and-codex
- https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra
