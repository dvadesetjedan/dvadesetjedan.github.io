# Content model

Glavni izvori sadržaja:

- `src/data/articles.ts`
- `src/data/events.ts`
- `src/data/episodes.ts`
- `src/data/cities.ts`
- `src/data/communityProjects.ts`
- `src/data/onboarding.ts`
- `src/data/site.ts`
- `src/data/siteConfig.ts`

## Članci

Članci imaju postojeće obavezne podatke i dodatna opcionalna polja za autora, prevoditelja, originalni URL, tip sadržaja, težinu, vrijeme čitanja, teme i `permissionStatus`.

Ako podaci nisu poznati, polje se izostavlja. Za prijevode je preporučeno pratiti `originalUrl`, autora originala i status dopuštenja.

## Događaji

Događaji moraju imati potvrđene datume, lokaciju, grad, državu, RSVP link i mapu. Opcionalno mogu imati `citySlug`, `meetupUrl`, `sourceUrl`, oznake i status.

Ne dodavati događaj bez javno potvrđenih informacija.

`src/data/eventMeta.ts` opisuje primarni javni izvor i freshness note. `lastManualCheck` se upisuje samo nakon stvarne ručne provjere izvora.

## Livestream

Epizode se održavaju u `src/data/episodes.ts`. Najnovija epizoda ide prva. Shownotes, poglavlja, linkovi i povezani sadržaji su opcionalni i dodaju se samo kad su poznati.

Ako epizoda još nema provjerene shownotes, postavi `needsShownotes: true`. UI tada prikazuje pozitivan poziv da netko pomogne sa sažetkom, poglavljima i linkovima.

## Gradovi

Gradovi se izvode iz postojećih javnih događaja i poznatog javnog konteksta. Ne dodaju se voditelji, privatni kontakti ili neprovjerene lokalne tvrdnje.

Status grada može biti `active`, `emerging` ili `archive`. Emerging gradovi ne smiju imati izmišljene eventSlugs, voditelje ili privatne kontakte.

## Iz zajednice

`src/data/communityProjects.ts` sadrži kurirane Bitcoin-only projekte,
prijevode, događaje, pisanje, video/audio sadržaj i regionalne poveznice ljudi
iz DvadesetJedan kruga.

Javno se koriste samo unosi iz `publishedCommunityProjects`: status ne smije
biti `draft`, a `consentConfirmed` mora biti `true`. Planirani unosi bez
pristanka mogu ostati u data datoteci za održavatelje, ali se ne smiju pojaviti
u javnim rutama, sitemapu ni na homepageu.

Donation linkovi trebaju `donationNote`, a privatni kontakti se ne prikazuju bez
izričitog pristanka. Detaljnija pravila su u `docs/community-projects.md`.

## Onboarding i sigurnost

`src/data/onboarding.ts` sadrži točno 21 korak. Svaki korak ima naslov, kratki tekst, objašnjenje, opcionalne safety napomene i preporučene članke ili epizode.

`src/data/safety.ts` je dedicated beginner safety model za `/sigurnost/`. Sadržaj mora ostati praktičan, miran i bez investicijskih, poreznih ili pravnih savjeta.

## Legacy redirecti

`src/data/legacyRedirects.ts` sadrži stare URL-ove koji se mapiraju na postojeće canonical rute. Redirect target mora postojati u generiranim rutama i ne smije biti hash URL.
