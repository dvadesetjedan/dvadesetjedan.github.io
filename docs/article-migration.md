# Article migration

Trenutni članci su u `src/data/articles.ts`. Dio legacy sadržaja koristi repository-controlled HTML blobove. To je prihvatljivo za sada jer sadržaj dolazi iz repozitorija, ali dugoročno je cilj migrirati članke u Markdown ili MDX.

## Dugoročni target

Svaki članak bi trebao imati frontmatter:

```yaml
---
title:
slug:
date:
author:
translator:
originalTitle:
originalUrl:
sourceName:
permissionStatus:
type:
difficulty:
languageVariant:
tags: []
recommendedNextSlugs: []
---
```

## Pravila za prijevode

- Ne importati treći sadržaj bez jasnog izvora.
- Pratiti `originalUrl`, autora originala i `permissionStatus`.
- Ako dopuštenje nije poznato, ne tvrditi da je potvrđeno.
- Licenciranje prijevoda ovisi o izvornom tekstu i dopuštenju.

## Migracijski pristup

1. Zadržati postojeće članke dok se migracija ne pripremi.
2. Za nove članke preferirati Markdown template iz `docs/templates/article.md`.
3. Migrirati jedan po jedan članak i provjeriti render, metadata i feed.
4. Nakon migracije ukloniti legacy HTML samo za taj članak.
5. Pokrenuti `npm run check` i `npm run build`.
