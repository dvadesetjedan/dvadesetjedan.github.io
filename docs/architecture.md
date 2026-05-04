# Arhitektura

DvadesetJedan je statični Vite + React + TypeScript web hub za regionalnu Bitcoin-only zajednicu.

## Audit Phase 1

- Routing je prije Phase 1 koristio hash URL-ove kroz `src/lib/routes.ts` i `window.location.hash`.
- Sadržaj je već bio koncentriran u `src/data/articles.ts`, `src/data/events.ts`, `src/data/episodes.ts` i `src/data/site.ts`.
- Postojale su stranice za home, o projektu, početnike, članke, događaje, livestream, resurse, teme, FAQ i doprinos.
- Postojale su osnovne validacije za rute i livestream sadržaj.
- Projekt je već imao GitHub Pages workflow i CI workflow.

## Phase 1 odluka

Zadržan je Vite + React + TypeScript. Nije uveden backend, baza, CMS ni framework migracija.

Canonical routing sada koristi path URL-ove:

- `/pocni-ovdje/`
- `/clanci/:slug/`
- `/dogadaji/:slug/`
- `/livestream/:slug/`
- `/gradovi/:slug/`

Legacy hash URL-ovi se preusmjeravaju na početnom učitavanju. Nakon `vite build`, skripta `scripts/generate-site-artifacts.mjs` generira route-specific HTML, `sitemap.xml`, `robots.txt`, `rss.xml`, `feed.json` i `404.html`.

## Phase 2 odluka

Phase 2 zadržava isti statični Vite/React smjer i dodaje održavateljske slojeve oko canonical sitea:

- stare WordPress-style rute generiraju statične redirect HTML stranice iz `src/data/legacyRedirects.ts`
- `/sigurnost/` postaje dedicated beginner safety hub
- event freshness copy i opcionalni Meetup compare workflow ne ovise o runtime API-ju
- livestream epizode imaju `needsShownotes` i polja za provjerene sažetke, poglavlja, linkove, pojmove i povezani sadržaj
- emerging gradovi postoje kao poziv zajednici, bez izmišljenih lokalnih voditelja ili događaja
- default social preview koristi PNG fallback na `/social-preview.png`

Generator artefakata je i dalje mala Node skripta koja čita postojeće TypeScript data datoteke kontroliranim parserima. Migracija na direktan TypeScript import kroz `tsx` ostaje dobar sljedeći korak, ali nije uvedena u ovom passu jer bi dodala novu dev ovisnost i veći rizik bez potrebe za runtime promjenu.

## Održavateljska pravila

- Ne izmišljati događaje, autore, datume, linkove ili kontakte.
- Sadržaj ostaje Bitcoin-only.
- Runtime ne smije ovisiti o vanjskim API-jima.
- Vanjska sinkronizacija može biti skripta, ali ne runtime uvjet.
