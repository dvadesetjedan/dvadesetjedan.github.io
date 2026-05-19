# Kako doprinijeti preko GitHuba

Ovaj vodič je za ljude koji žele konkretno pomoći DvadesetJedan zajednici, ali nisu sigurni gdje početi.

Ne moraš biti programer. GitHub ovdje služi kao javna bilježnica za prijedloge, greške, izvore, shownotes, prijevode, događaje i male promjene na stranici.

## Što možeš doprinijeti

- prijaviti grešku na stranici
- predložiti temu za članak ili livestream
- dodati shownotes, poglavlja ili korisne linkove za epizodu
- predložiti lokalni Bitcoin-only događaj
- predložiti projekt za stranicu Iz zajednice
- predložiti prijevod Bitcoin-only teksta
- poslati bolji javni izvor ili ispravak netočnog podatka
- pomoći oko dizajna, responzivnosti, pristupačnosti ili koda

## Najlakši put: otvori issue

1. Otvori GitHub repozitorij.
2. Klikni `Issues`.
3. Klikni `New issue`.
4. Odaberi predložak koji najbolje odgovara doprinosu.
5. Upiši što predlažeš i zašto je korisno.

Ako se radi o činjenici, događaju, prijevodu, autoru, lokaciji ili vanjskom linku, dodaj javni izvor. Ako izvor nije provjeren, napiši da nije provjeren.

## Koji predložak odabrati

- `Prijava greške`: nešto ne radi, krivo se prikazuje ili je tekst nejasan.
- `Livestream shownotes`: sažetak, poglavlja, pojmovi ili linkovi za epizodu.
- `Prijedlog članka`: originalni Bitcoin-only tekst ili tema koju netko može obraditi.
- `Prijedlog prijevoda`: Bitcoin-only tekst koji ima smisla prevesti.
- `Prijedlog događaja`: javni Bitcoin-only događaj s potvrđenim podacima.
- `Lokalni susret`: ideja za mali meetup u gradu.
- `Predloži projekt iz zajednice`: projekt, kanal, prijevod, alat, događaj ili inicijativa iz zajednice.

## Kako izgleda dobar prijedlog

Dobar prijedlog odgovara na četiri pitanja:

- Na što se odnosi?
- Što treba promijeniti ili dodati?
- Zašto je korisno zajednici?
- Koji je javni izvor?

Primjer:

```text
Stranica: /livestream/naziv-epizode/
Prijedlog: dodati 5 shownotes točaka i link na spomenuti projekt.
Zašto: epizoda trenutno nema sažetak, a početniku je teško znati o čemu se govori.
Izvor: YouTube epizoda i javna stranica projekta.
```

## Ako šalješ pull request

Pull request ima smisla kada želiš izravno promijeniti datoteke.

1. Napravi fork ili novu granu iz `main`.
2. Promijeni najmanji broj datoteka koji je potreban.
3. Ne miješaj nepovezane promjene.
4. Pokreni:

```bash
npm run lint
npm run check
npm run build
```

5. U PR opisu napiši što je promijenjeno i koje provjere su prošle.

## Gdje se što mijenja

- članci: `src/data/articles.ts`
- događaji: `src/data/events.ts`
- livestream epizode: `src/data/episodes.ts`
- gradovi: `src/data/cities.ts`
- navigacija, footer i opći copy: `src/data/site.ts`
- stranice i UI: `src/pages/` i `src/components/`

## Pravila za sadržaj

- Ne izmišljaj datume, autore, lokacije, linkove, brojke ili kontakte.
- Ne objavljuj privatne kontakte bez jasnog pristanka.
- Ne šalji seed phrase, privatne ključeve, screenshotove novčanika ili financijske podatke.
- Ne dodaj tokene, trading signale, leverage ili obećanja zarade.
- Zadrži Bitcoin-only fokus.
- Piši latinicom i jasno.

## Ako nisi siguran

Otvori issue i napiši što imaš. Bolje je poslati mali, iskren i provjerljiv prijedlog nego čekati savršen tekst.
