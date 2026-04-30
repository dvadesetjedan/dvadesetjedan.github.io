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

## Članci

- Sadržaj je u `src/data/articles.ts`.
- Ne izmišljaj autore, izvore, prijevode, datume ili vanjske poveznice.
- Ako je tekst prijevod, prati `originalUrl`, autora originala i `permissionStatus` kad je poznato.
- Canonical ruta je `/clanci/<slug>/`.

## Događaji

- Događaji su u `src/data/events.ts`.
- Potrebni su potvrđeni naslov, vrijeme, lokacija, grad, država, prijava i karta.
- Ne izmišljaj venue, vrijeme, program, city leadove ili RSVP linkove.
- Ako događaj pripada postojećem gradu, koristi `citySlug`.

## Livestream epizode

- Epizode su u `src/data/episodes.ts`.
- Najnovija epizoda ide prva.
- Koristi potvrđeni YouTube URL.
- Shownotes, poglavlja i povezane linkove dodaj samo kad su provjereni.

## Gradovi

- Gradovi su u `src/data/cities.ts`.
- Grad se dodaje kada postoji javni događaj ili siguran javni kontekst.
- Ne dodavati privatne kontakte, city leadove ili neprovjerene lokalne tvrdnje.

## Jezična politika

Piši regionalno razumljivo na latinici. Prihvatljive su hrvatska, srpska, bosanska i crnogorska varijanta; cilj je jasnoća, ne jezična uniformnost.

## Bitcoin-only editorial policy

DvadesetJedan nije investicijski savjet, trading grupa ni projekt o kriptovalutama općenito. Ne dodavati altcoin, token, leverage, price prediction, “get rich quick” ili porezno-pravno savjetovanje.

## Pull request

- Radi manje, jasne promjene koje je lako pregledati.
- U PR opisu napiši što si promijenio i koje si komande pokrenuo.
- Provjeri da nema hash URL-ova za canonical internu navigaciju.
- Provjeri da nema izmišljenih činjenica.
