# TokenWise

**Stop wasting AI allowance. Ship more with fewer agent loops.**

## [🚀 OPEN TOKENWISE — LAUNCH WEB APP](https://venzimprojects-lang.github.io/tokenwise/)

<p align="center">
  <a href="https://venzimprojects-lang.github.io/tokenwise/">
    <img src="assets/open-tokenwise.svg" alt="Open TokenWise — launch the free interactive web app" width="780">
  </a>
</p>

<p align="center">
  <a href="https://venzimprojects-lang.github.io/tokenwise/"><strong>▶ Launch the web app</strong></a> ·
  <a href="README.ru.md">Русский</a> ·
  <a href="CONTRIBUTING.md">Contribute</a>
</p>

TokenWise is a **free, privacy-first, bilingual (EN/RU) interactive encyclopedia** for people using ChatGPT, Work and Codex. It offers practical guidance according to what you need help with and how experienced you are. No login, API key, backend or installation needed.

## Start in 3 steps

1. **[Open TokenWise](https://venzimprojects-lang.github.io/tokenwise/)** and select your question: limits, models, prompts, usage, agent tools, or coding.
2. Pick an explanation level: **beginner, everyday user, AI project builder or developer**. Follow your suggested steps. You can switch levels at any time.
3. Explore **seven concise encyclopedia topics**, look up unfamiliar terms, or adapt and copy one of five ready-to-use prompts. An advanced Work/Codex configurator and optional usage calculator are below.

TokenWise cannot access your subscription, remove limits or change model settings automatically. Advice is informational, not a guarantee of savings.

## What you'll find

- Adaptive guidance for 4 experience levels and 6 common problems.
- Searchable 7-topic encyclopedia, glossary and 5 editable everyday/developer prompts.
- Manual usage comparison that runs entirely inside your browser; no account data is sent.
- Focused prompts, a short `AGENTS.md` template, and bilingual documentation.

## Important limitations

- This project is **independent, not affiliated with or endorsed by OpenAI**.
- Presets are suggestions, **not guarantees** or official pricing. Smaller models may require retries; costs vary by task, context, reasoning and tools.
- Subscription allowance percentages are **not** API token counts or dollars. Compare similar completed tasks.
- Model availability and resets vary by plan and change over time. **Settings → Usage** is authoritative for your account.
- The explanatory sources were last reviewed on **November 11, 2026**.

## Developers

The app is static HTML/CSS/JS in [website/](website/); all source is included. You can clone the repository and open `website/index.html` locally.

```bash
python3 -m unittest discover -s tests -v
node --check website/app.js
```

Project directories: `website/` (web app), `docs/` (guides and sources), `prompts/` (task prompts), `presets/` (selection rationale), `templates/` (AGENTS.md), `tests/` (checks).

Contribute via [CONTRIBUTING.md](CONTRIBUTING.md) or [Русское руководство](CONTRIBUTING.ru.md). Please never post private usage screenshots, keys or account details.

MIT licensed — see [LICENSE](LICENSE).
