# TokenWise

**Stop wasting AI allowance. Ship more with fewer agent loops.**

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

TokenWise is a **free, static, privacy-first, bilingual (EN/RU) guide and task preset builder** for ChatGPT, Work and Codex. It helps you **scope work, choose an appropriate mode, and measure actual usage**. No account, API key, backend or installation needed.

## Start in 3 steps

1. **[Open TokenWise](https://venzimprojects-lang.github.io/tokenwise/)** and select what you want to do — planning, browsing, coding, debugging or auditing.
2. Review the suggested settings, describe your task, and **copy the focused prompt** into ChatGPT or Codex. Settings must be selected manually in your own interface.
3. Optionally record remaining allowance in **Settings → Usage** before and after to compare a single task. Make comparisons only in the same window, without resets or concurrent agents.

## What you'll find

- Interactive task configurator with five scenarios, reasoning guidance and copyable prompts.
- Plain-language explanations of tokens, five-hour/weekly allowance and usage resets.
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
