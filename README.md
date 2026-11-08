# caco.space

Dvojjazyčný osobný CV/portfólio web generovaný ako statická stránka. Jediný obsahový register je `src/site.mjs`; HTML generuje `scripts/render.mjs`. Projekt nepoužíva externé balíky, fonty, analytiku ani veľké médiá.

## Lokálne spustenie

Node.js 18 alebo novší:

```sh
npm run build
npm run dev
```

Náhľad: http://127.0.0.1:4173. Koreň ponúka výber jazyka; hlavné stránky sú `/sk/` a `/en/`. Build generuje ignorovaný adresár `dist/` a kontroluje SK/EN páry, preklady, duplicitné cesty, kotvy a interné odkazy.

## Ďalšia práca

Najprv `AGENTS.md`, potom relevantné dokumenty. Aktuálne úlohy sú v `docs/TASKS.md`; dizajn a publikačné pravidlá v `docs/DESIGN_PLAYBOOK.md`. Interné agentové zápisy a osobné zdrojové podklady sú zámerne mimo Git repozitára.

GitHub je zdroj kódu. Produkčný Cloudflare Pages projekt `caco-webpage` používa príkaz `npm run build` a výstup `dist`. Workflow `.github/workflows/deploy-pages.yml` po aktivácii automaticky zostaví a nasadí vetvu `main`; vyžaduje GitHub secrets `CLOUDFLARE_API_TOKEN` a `CLOUDFLARE_ACCOUNT_ID`. Podrobnosti sú v `docs/DEPLOYMENT_HANDOFF.md`.
