# Nasadenie hlavného webu

Stav: web je nasadený. Zdroj je vo verejnom repozitári `tipekk/caco-space`, produkčný Cloudflare Pages projekt je `caco-webpage` a hlavná doména je `https://caco.space`.

## Aktuálne statické cesty

- `/` — neutrálny výber jazyka
- `/sk/` ↔ `/en/`
- `/sk/prax/` ↔ `/en/practice/`
- `/sk/cv/` ↔ `/en/cv/`
- `/sk/hry/` ↔ `/en/games/`
- `/sk/homelab/` ↔ `/en/homelab/`
- `/sk/foto-a-dron/` ↔ `/en/photo-and-drone/`

Build generuje tieto cesty do `dist/`, overuje jazykové páry a platné interné odkazy. `src/_redirects` už zabezpečuje lokalizované skutočné 404 pre neznáme SK a EN adresy.

Interné agentové zápisy, osobné zdrojové podklady, pracovné prototypy, lokálne fotografie a `dist/` sú zámerne mimo Git. Produkčný repozitár obsahuje iba aktívny zdroj, verejnú dokumentáciu a používaný social thumbnail.

## Produkčné nasadenie

- Build príkaz: `npm run build`
- Výstup: `dist`
- Pages projekt: `caco-webpage`
- Pages adresa: `https://caco-webpage.pages.dev`
- Produkcia: `https://caco.space`
- `https://www.caco.space` presmeruje na kanonické `https://caco.space/`.

Projekt bol vytvorený ako Cloudflare Pages Direct Upload projekt a aktuálny build bol odoslaný cez Wrangler. Keďže Direct Upload projekt nemožno dodatočne prepnúť na natívnu Pages Git integráciu, repozitár používa GitHub Actions workflow `.github/workflows/deploy-pages.yml`. Workflow pri pushi do `main` spustí `npm run build` a nasadí `dist` do existujúceho projektu `caco-webpage` cez `cloudflare/wrangler-action`.

Na aktiváciu workflow treba v GitHub Actions nastaviť iba tieto repository secrets; ich hodnoty nepatria do Git-u ani dokumentácie:

- `CLOUDFLARE_API_TOKEN` — úzko obmedzený token s oprávnením nasadiť Cloudflare Pages.
- `CLOUDFLARE_ACCOUNT_ID` — identifikátor Cloudflare účtu.

Workflow bol aktivovaný 2026-11-08. Prvý beh z commitu `b6c27e7` úspešne dokončil checkout, build aj Cloudflare Pages deploy; produkčná doména následne vrátila HTTP 200 a očakávané bezpečnostné hlavičky. Ďalší push do `main` preto automaticky publikuje nový overený build.

Po prepnutí boli overené HTTP 200, bezpečnostné hlavičky a nový SK/EN obsah na hlavnej doméne. Starý Pages projekt `caco-space` už neslúži produkčnej doméne. Read-only kontrola 2026-11-08 ho nenašla medzi aktívnymi projektmi a `caco-space.pages.dev` vracia DNS `NXDOMAIN`, takže názov sa javí ako uvoľnený. Úplná dostupnosť na opätovné vytvorenie nebola otestovaná vytvorením projektu; kontrola nie je súhlasom na vytvorenie projektu, deploy ani DNS zmenu.

Samostatné obsahové stránky zostávajú cestami hlavnej domény. Ďalšie vlastné subdomény majú zmysel iba pre samostatné aplikácie alebo služby a vyžadujú samostatné rozhodnutie, DNS záznam a test presmerovania.
