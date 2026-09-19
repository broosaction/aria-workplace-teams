# Aria Workplace teams

Public team playbooks, catalog, and submit directory for [Aria Workplace](https://github.com/broosaction/aria-workplace-releases/releases).

The desktop app loads [`catalog.json`](catalog.json) from this repository in **+ → Teams → Explore**. The same playbooks are listed on the web directory, and anyone can submit a team by opening a pull request.

## Browse and install

| Playbook | Outcome | Bots | Markdown |
| --- | --- | ---: | --- |
| [SEO Growth Team](teams/seo-growth) | Prioritize search work most likely to grow qualified traffic | 4 | [Open](packages/seo-growth.md) |
| [Engineering Team](teams/engineering) | Take a software change from intent to a verified release | 4 | [Open](packages/engineering.md) |
| [100x Marketing Team](teams/100x-marketing) | Launch a focused campaign and make a stop-or-scale decision | 4 | [Open](packages/100x-marketing.md) |
| [Reddit Lead Miner](teams/reddit-lead-miner) | Find qualified Reddit leads with source evidence | 2 | [Open](packages/reddit-lead-miner.md) |
| [Competitor Watch](teams/competitor-watch) | Turn material competitor changes into a decision brief | 2 | [Open](packages/competitor-watch.md) |
| [Inbox Follow-up](teams/inbox-follow-up) | Recover sales conversations where your team owes the next step | 2 | [Open](packages/inbox-follow-up.md) |

1. Open a listing such as [`/bots/seo-growth`](https://broosaction.github.io/aria-workplace-teams/bots/seo-growth/).
2. Click **Add to Aria Workplace**, or copy the Markdown and give it to a Chief of Staff.
3. Review the preview in the app. Connections stay off and routines start paused.

Install links use `aria-workplace://install?url=` pointing at the raw GitHub Markdown file.

## Submit a team

1. Read [CONTRIBUTING.md](CONTRIBUTING.md) and [FORMAT.md](FORMAT.md).
2. Create a file under [`packages/`](https://github.com/broosaction/aria-workplace-teams/new/main/packages).
3. Open a pull request. GitHub Actions validate the playbook before it can merge.
4. Catalog teams also need a folder under `teams/` and an entry in `catalog.json`.

This repository does not accept secrets, generated binary bundles, or executable playbook scripts.

## Repository structure

- [`packages/`](packages) one-file Markdown playbooks
- [`catalog.json`](catalog.json) Aria Workplace Explore index (`aria.catalog` v1)
- [`teams/`](teams) compatibility manifests for older imports
- [`app/`](app) Next.js directory and `/publish` submit page

## Local site

```bash
npm install
npm test
npm run dev
```

The directory runs at `http://localhost:3011`. Connect this repository to Vercel if you want a custom domain, or use the GitHub Pages workflow on `main`.

## License

MIT. See [NOTICE](NOTICE) for upstream attribution.
