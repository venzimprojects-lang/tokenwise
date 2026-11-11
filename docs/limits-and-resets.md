# Allowance, tokens and resets / Лимиты, токены и сбросы

_Last verified / Проверено: 2026-11-11._

- **Tokens** represent input/output content and sometimes internal reasoning; they are not identical to subscription allowance percentages.
- **Allowance** in Work and Codex depends on task, model, reasoning, context and tools. It is not a fixed number of messages. Work and Codex share an included allowance on applicable plans.
- Some plans have a **five-hour** and a **weekly** window. Both need remaining allowance to continue. A new five-hour window starts with the first Work/Codex message after the preceding window ends; the weekly period is independent.
- A subscription payment date is **not** automatically a weekly reset date. Some enterprise workspaces also have monthly credit allowances.
- **Settings → Usage** is the authoritative place for account-specific remaining allowance and reset timestamps.
- OpenAI has announced further changes to combined ChatGPT/Codex accounting starting December 2026. Re-check this guide then.

Русский: не путайте токены API, проценты тарифного лимита, платные кредиты и срок подписки. В отдельном пятчасовом окне можно исчерпать объём за полчаса; недельный лимит при этом ещё может оставаться. Для точных дат и доступного остатка используйте **Настройки → Использование**.

## Official sources

- https://help.openai.com/en/articles/20001516-managing-usage-with-gpt-6-astra-in-work-and-codex
- https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits
- https://help.openai.com/en/articles/20001478-reviewing-work-and-codex-usage-and-using-personal-analytics-in-chatgpt-desktop
