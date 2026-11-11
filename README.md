# TokenWise

**Stop wasting AI allowance. Ship more with fewer agent loops.**

[Русская версия](README.ru.md) · [Web app](website/) · [Guides](docs/) · [Prompt library](prompts/)

TokenWise is a **free, static, privacy-first, bilingual (EN/RU) guide and task preset builder** for ChatGPT, Work and Codex users. It helps you **scope work, choose an appropriate mode, and measure actual usage**. It does **not** access your account or claim to predict token cost.

## What it includes

- Interactive task configurator with Chat / Work / Codex suggestions and editable, copyable task prompts.
- Plain-language explanations of tokens, five-hour and weekly allowance windows, and usage analytics.
- Ready-to-adapt task prompts and a lean `AGENTS.md` starter template.
- A manual before/after measurement worksheet that never uploads your usage information.
- Official source links and a last-reviewed date: **2026-11-11**.

## Quick start

Open `website/index.html` in a browser. No install, API key, cookies, external requests, backend, or build tooling required.

To host as GitHub Pages: Settings → Pages → Deploy from a branch → `/docs` is not used in this repo, so either publish `website/` via a Pages GitHub Action or configure a Pages workflow. A ready-to-use Action is provided in `.github/workflows/pages.yml`; enable Pages source **GitHub Actions**.

## Scope and limitations

- This is an **independent community project**, not affiliated with or endorsed by OpenAI.
- Presets are **heuristics**, not guarantees. A smaller model may need more retries; performance and consumption vary by task, plan, context, model, reasoning settings and tools.
- Model availability and resets depend on plan and rollout. Read the dates shown in **Settings → Usage** rather than assuming a fixed refresh time.
- ChatGPT subscription allowance is **not** the same as API token pricing. Do not convert allowance percentages to dollars or token counts.
- No promises of a fixed percent reduction. Compare **similar completed tasks** and their observable usage.
- Guidance may change. Please open an issue with a primary-source link when you spot a change.

## Project layout

```text
docs/           Explanations and official references
prompts/        Focused instructions for agents
templates/      Small AGENTS.md template
presets/        Task presets and selection rationale
website/        Dependency-free interactive web app
tests/          Static smoke checks
.github/        Pages deployment and checks
```

## Test

```bash
python3 -m unittest discover -s tests -v
node --check website/app.js
```

## Contribute

See [CONTRIBUTING.md](CONTRIBUTING.md). For model/limit claims, cite an official source and include a verified date. Never upload screenshots with account details, secrets or private repo content.

MIT licensed. See [LICENSE](LICENSE).