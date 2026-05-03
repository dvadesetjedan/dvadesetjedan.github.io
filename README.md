# DvadesetJedan

DvadesetJedan je regionalni Bitcoin-only hub: lokalni jezik, javni signal, livestream, članci, događaji, gradovi i otvorena zajednica u duhu [twentyone.world](https://twentyone.world/) koncepta.

Canonical URL:

```text
https://dvadesetjedan.com
```

## Naredbe

```bash
npm install
npm run dev
npm run lint
npm run check
npm run build
```

`npm run build` generira Vite build i statičke artefakte: route-specific HTML, `sitemap.xml`, `robots.txt`, `rss.xml`, `feed.json` i `404.html`.

## Sadržaj

- članci: `src/data/articles.ts`
- događaji: `src/data/events.ts`
- livestream epizode: `src/data/episodes.ts`
- gradovi: `src/data/cities.ts`
- 21-step onboarding: `src/data/onboarding.ts`
- site copy i navigacija: `src/data/site.ts`
- canonical config: `src/data/siteConfig.ts`

## Pravila

- ne izmišljati događaje, epizode, autore, linkove, datume, lokacije ili kontakte
- zadržati Bitcoin-only fokus
- bez trading signala, tokena, leveragea i obećanja zarade
- sadržaj je obrazovni i nije financijski, porezni ili pravni savjet
- pisati latinicom i regionalno razumljivo

## Dokumentacija

Pogledaj `docs/architecture.md`, `docs/content-model.md`, `docs/editorial-policy.md`, `docs/deployment.md` i `CONTRIBUTING.md`.
