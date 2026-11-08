# Aktuálne úlohy

## Pred publikovaním

- [ ] Uzavrieť privacy audit: potvrdiť prevádzkovateľa/kontakt, účely a právny základ, Cloudflare funkcie, logy, retencie a prenosy; až potom publikovať úplný SK/EN privacy pár. Otázky a zistenia: `docs/agents/2026-10-27-privacy-audit.md`. Aktuálna verejná doména má inú staršiu verziu s Google Fonts a nefunkčným riadením súhlasu.

- [ ] Vizuálne overiť všetky verejné cesty v SK/EN, light/dark a na mobilnom aj desktopovom breakpointe.
- [ ] Dokončiť manuálny audit klávesnice, čítačky obrazovky a 200 % zväčšenia textu.
- [ ] Potvrdiť finálny verejný rozsah pracovných realizácií; ak nemožno hranice zachovať bez interných detailov, konkrétnu realizáciu nezverejniť.
- [ ] Skontrolovať metadata, canonical/hreflang, sitemap, `robots.txt`, presmerovania a lokalizované 404 na preview URL.
- [ ] Overiť čistý checkout príkazmi `npm install` a `npm run build`.

## GitHub a nasadenie

- [x] Aktívny verejný GitHub repozitár je `tipekk/caco-space`; vetva `main` je odoslaná (overené 2026-11-08).
- [x] Osobné podklady, interné agentové zápisy, prototypy, `dist/` a veľké médiá sú v aktívnej pracovnej kópii ignorované Gitom (overené 2026-11-08).
- [x] Produkcia je pripojená cez Cloudflare Pages projekt `caco-webpage`: build `npm run build`, výstup `dist`.
- [x] Pages preview, hlavná doména a presmerovanie `www` boli overené pri produkčnom prepnutí podľa `docs/DEPLOYMENT_HANDOFF.md`.
- [x] Read-only overenie 2026-11-08: `caco-space` nie je medzi aktívnymi Pages projektmi prihláseného účtu a `caco-space.pages.dev` je DNS `NXDOMAIN`; názov sa javí ako uvoľnený. Nový projekt nebol vytvorený.
- [x] Pripraviť a lokálne overiť GitHub Actions workflow pre automatický build a deploy `main` do existujúceho projektu `caco-webpage` (2026-11-08).
- [x] Nastaviť GitHub secrets `CLOUDFLARE_API_TOKEN` a `CLOUDFLARE_ACCOUNT_ID` (2026-11-08; hodnoty nie sú v Git-e ani dokumentácii).
- [x] Odoslať workflow a overiť prvý automatický deploy: GitHub Actions run `42492629101` a produkcia HTTP 200 (2026-11-08).

## Budúci obsah

- [ ] Doplniť iba potvrdený kontakt alebo odkazy, ktoré používateľ chce verejne zdieľať.
- [x] Zachovaný pôvodný veľký vizuál PLAY na homepage; karta odkazuje na samostatnú SK/EN stránku Hry s Orbit Shifter, Bastion Grid a Glowzu (2026-11-07).
- [ ] Vybrať úložisko a konkrétne fotografie/videá mimo Git; pred publikovaním odstrániť citlivé metadata.

Každá nová úloha začína samostatným taskom/agentom alebo konverzáciou podľa `AGENTS.md`.
