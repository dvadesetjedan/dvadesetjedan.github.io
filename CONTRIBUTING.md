# Kako doprinijeti DvadesetJedan stranici

Hvala na interesu za doprinos. Projekt je statični Vite + React + TypeScript hub za regionalnu Bitcoin-only zajednicu.

## Pokretanje lokalno

```bash
npm install
npm run dev
```

Prije slanja promjena pokreni:

```bash
npm run lint
npm run check
npm run build
```

## Ako želiš pomoći, ali ne znaš odakle krenuti

Najjednostavniji doprinos je otvoriti GitHub issue:

- prijavi grešku na stranici
- predloži temu za članak ili livestream
- pošalji javni izvor koji nedostaje
- dodaj kratke shownotes za epizodu
- predloži lokalni Bitcoin-only susret
- predloži projekt iz zajednice
- napiši gdje je tekst nejasan ili zastario

Koristi predloške u `.github/ISSUE_TEMPLATE/`. Ako nisi siguran koji predložak odabrati, otvori najbliži i u opisu napiši kontekst. Nemoj slati privatne podatke, privatne kontakte, seed phrase, financijske podatke ili podatke koje ne želiš javno objaviti.

## Kako izgleda dobar GitHub issue

Dobar issue ne mora biti dug. Dovoljno je:

- link na stranicu ili epizodu na koju se odnosi
- što predlažeš ili što ne radi
- zašto je to korisno zajednici
- javni izvor ako se radi o činjenici, događaju, prijevodu ili vanjskoj poveznici
- napomena je li podatak provjeren ili je samo prijedlog

Primjeri dobrih doprinosa:

- “Na `/livestream/.../` nedostaje sažetak. Predlažem ove 4 točke.”
- “Ovaj događaj ima javni Meetup link i lokaciju. Može se dodati u `src/data/events.ts`.”
- “Ovaj članak bi vrijedilo prevesti jer objašnjava privatnost za početnike. Original je ovdje.”
- “Na mobilnom prikazu ova dva gumba se dodiruju.”

## Kako poslati pull request

Ako želiš izravno promijeniti datoteke:

1. Forkaj repozitorij ili napravi granu iz `main`.
2. Napravi malu, jasnu promjenu.
3. Ne miješaj nepovezane stvari u isti PR.
4. Pokreni `npm run lint`, `npm run check` i `npm run build`.
5. U PR opisu napiši što si promijenio, zašto i koje si provjere pokrenuo.

Za sadržaj je često dovoljno promijeniti jednu data datoteku. Za UI promjene provjeri da tekst ne izlazi iz kartica i da mobilni prikaz ostaje uredan.

## Članci

- Sadržaj je u `src/data/articles.ts`.
- Ne izmišljaj autore, izvore, prijevode, datume ili vanjske poveznice.
- Ako je tekst prijevod, prati `originalUrl`, autora originala i `permissionStatus` kad je poznato.
- Canonical ruta je `/clanci/<slug>/`.

## Događaji

- Događaji su u `src/data/events.ts`.
- Održavateljski meta podaci su u `src/data/eventMeta.ts`.
- Potrebni su potvrđeni naslov, vrijeme, lokacija, grad, država, prijava i karta.
- Ne izmišljaj venue, vrijeme, program, city leadove ili RSVP linkove.
- Ako događaj pripada postojećem gradu, koristi `citySlug`.
- Za ručnu provjeru Meetupa prati `docs/event-maintenance.md`.

## Livestream epizode

- Epizode su u `src/data/episodes.ts`.
- Najnovija epizoda ide prva.
- Koristi potvrđeni YouTube URL.
- Shownotes, poglavlja i povezane linkove dodaj samo kad su provjereni.
- Ako epizoda još nema provjerene shownotes, koristi `needsShownotes: true`.
- Predložak je u `docs/livestream-shownotes.md`.

## Gradovi

- Gradovi su u `src/data/cities.ts`.
- Grad se dodaje kada postoji javni događaj ili siguran javni kontekst.
- Ne dodavati privatne kontakte, city leadove ili neprovjerene lokalne tvrdnje.
- Emerging gradovi smiju imati samo poziv zajednici i starter checklistu, bez tvrdnje da meetup već postoji.

## Sigurnost za početnike

- Sigurnosni sadržaj je u `src/data/safety.ts`.
- Ruta je `/sigurnost/`.
- Ne dodavati product endorsement, investicijske savjete ili upute koje traže privatne podatke.

## Jezična politika

Piši regionalno razumljivo na latinici. Prihvatljive su hrvatska, srpska, bosanska i crnogorska varijanta; cilj je jasnoća, ne jezična uniformnost.

## Bitcoin-only editorial policy

DvadesetJedan nije investicijski savjet, trading grupa ni projekt o kriptovalutama općenito. Ne dodavati altcoin, token, leverage, price prediction, “get rich quick” ili porezno-pravno savjetovanje.

## Pull request

- Radi manje, jasne promjene koje je lako pregledati.
- U PR opisu napiši što si promijenio i koje si komande pokrenuo.
- Provjeri da nema hash URL-ova za canonical internu navigaciju.
- Provjeri da nema izmišljenih činjenica.
- Ako dodaješ stare URL-ove, koristi `src/data/legacyRedirects.ts` i provjeri `docs/legacy-redirects.md`.
