# Kako doprinijeti DvadesetJedan stranici

Hvala na interesu za doprinos DvadesetJedan stranici. Ovaj projekt je statični Vite + React + TypeScript hub za regionalnu Bitcoin-only zajednicu.

## Pokretanje lokalno

Pokreni projekt lokalno ovim redom:

```bash
npm install
npm run dev
```

Prije slanja promjena primarno pokreni:

```bash
npm run check
```

Po potrebi možeš pokrenuti i pojedinačne komande:

```bash
npm run lint
npm run build
npm run format
```

## Kako dodati ili urediti članak

- Popis i sadržaj članaka nalazi se u `src/data/articles.ts`.
- Za manje tekstualne ispravke ili kuratorske oznake koristi i `src/data/site.ts`.
- Ne izmišljaj nove članke, autore, prijevode ili vanjske poveznice ako nisu potvrđeni.
- Provjeri da članak nema mrtvih linkova i da se ispravno otvara kroz `#/clanci/<slug>`.

## Kako dodati događaj

- Događaji se nalaze u `src/data/events.ts`.
- Svaki događaj treba imati točne metapodatke: naslov, vrijeme, lokaciju, adresu, grad, državu, Meetup poveznicu i kartu.
- Ne izmišljaj događaje, datume, lokacije ili RSVP poveznice.
- Ako informacija nije potvrđena, radije koristi neutralnu formulaciju nego kontradiktoran opis.

## Kako dodati livestream epizodu

- Dodaj epizodu u `src/data/episodes.ts`.
- Najnovija epizoda ide prva.
- Koristi potvrđeni YouTube URL.
- Ne izmišljaj specifične teme ako nisu potvrđene.
- Ako nema stvarnog naslova, koristi neutralni naslov s datumom.
- `publishedAt` format je `YYYY-MM-DD`.
- Pokreni `npm run check`.

## Kako predložiti promjenu teksta

- Većina sadržaja za stranicu nalazi se u `src/data/site.ts`.
- Predlaži promjene koje poboljšavaju jasnoću, regionalnu razumljivost i Bitcoin-only ton.
- Provjeri da nova formulacija ne zvuči previše usko lokalno i da ne uvodi nepotrebne anglizme.

## Jezične smjernice

- Koristi hrvatski jezik u latinici.
- Piši regionalno razumljivo, bez usko administrativnog ili institucionalnog tona.
- Održavaj miran, ozbiljan i jasan stil.
- Prevedi preostale engleske UI fraze kada je to jednostavno i smisleno.

## Bitcoin-only smjernice

- Ne dodavaj shitcoin, token, trading ili signal sadržaj.
- Ne uvodi hype, obećanja zarade ni tržišni žargon.
- Fokus treba ostati na Bitcoinu, obrazovanju, zajednici, dugoročnom razmišljanju i osobnoj odgovornosti.

## Otvaranje pull requesta

- Radi manje, jasne promjene koje je lako pregledati.
- Prije slanja obavezno pokreni `npm run check`.
- Provjeri da nema mrtvih linkova, praznih placeholdera ni izmišljenih podataka.
- U opisu pull requesta ukratko napiši što si promijenio i koje si komande pokrenuo.
