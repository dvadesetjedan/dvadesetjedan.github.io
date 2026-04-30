# Content model

Glavni izvori sadržaja:

- `src/data/articles.ts`
- `src/data/events.ts`
- `src/data/episodes.ts`
- `src/data/cities.ts`
- `src/data/onboarding.ts`
- `src/data/site.ts`
- `src/data/siteConfig.ts`

## Članci

Članci imaju postojeće obavezne podatke i dodatna opcionalna polja za autora, prevoditelja, originalni URL, tip sadržaja, težinu, vrijeme čitanja, teme i `permissionStatus`.

Ako podaci nisu poznati, polje se izostavlja. Za prijevode je preporučeno pratiti `originalUrl`, autora originala i status dopuštenja.

## Događaji

Događaji moraju imati potvrđene datume, lokaciju, grad, državu, RSVP link i mapu. Opcionalno mogu imati `citySlug`, `meetupUrl`, `sourceUrl`, oznake i status.

Ne dodavati događaj bez javno potvrđenih informacija.

## Livestream

Epizode se održavaju u `src/data/episodes.ts`. Najnovija epizoda ide prva. Shownotes, poglavlja, linkovi i povezani sadržaji su opcionalni i dodaju se samo kad su poznati.

## Gradovi

Gradovi se izvode iz postojećih javnih događaja i poznatog javnog konteksta. Ne dodaju se voditelji, privatni kontakti ili neprovjerene lokalne tvrdnje.
