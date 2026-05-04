# Legacy redirecti

Stari WordPress-style URL-ovi mogu ostati u tražilicama, newsletterima i chatovima. Budući da je site statičan na GitHub Pagesu, redirecti nisu pravi server-side 301, nego statične HTML stranice koje odmah šalju korisnika na canonical rutu.

## Gdje se održava

Popis je u `src/data/legacyRedirects.ts`.

Svaki zapis mora imati:

- `from`: stari URL path, mora početi i završiti sa `/`
- `to`: canonical URL path, mora početi i završiti sa `/`
- `reason`: kratko objašnjenje za održavatelje

## Što generator radi

`npm run build` generira `dist/<legacy-path>/index.html` s:

- `noindex`
- canonical linkom na target
- meta refreshom
- JavaScript redirectom
- vidljivim fallback linkom

Legacy rute se ne dodaju u `sitemap.xml`.

## Pravila

- Ne dodavati redirect na nepostojeću rutu.
- Ne koristiti hash URL-ove.
- Ne mapirati URL sam na sebe.
- Ne dodavati redirecte za sadržaj koji nije prenesen ili nema siguran canonical target.
