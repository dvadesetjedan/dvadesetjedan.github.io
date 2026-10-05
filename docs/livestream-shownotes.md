# Livestream shownotes

Shownotes pomažu da epizoda ostane korisna i nakon prijenosa.

## Dodaj samo poznato

- stvarni aktualni naslov epizode s YouTubea, bez zamjene generičkim naslovom
- datum
- YouTube URL
- puni javni YouTube opis u `description`, preuzet bez prepisivanja
- uvodni opis epizode iz YouTube opisa u `summary`, bez timestampova i promotivnog podnožja
- poglavlja s vremenima ako su provjerena
- linkove koji su stvarno spomenuti

Ako sažetak ili poglavlja nisu poznati, ostavi polje prazno. UI će prikazati neutralni placeholder.

## Ponedjeljno osvježavanje

Automatizacija provjerava kanal ponedjeljkom u 08:00 (Europe/Zagreb),
nakon završetka nedjeljnog prijenosa i naknadnog uređivanja YouTube metapodataka.
Dodaje nove završene nedjeljne epizode i osvježava postojeće kad YouTube dobije
sadržajan naslov, opis ili poglavlja. Prijenosi uživo i najavljeni prijenosi ne dodaju se.

Slug `dvadesetjedan-livestream-YYYY-MM-DD` i `publishedAt` ostaju vezani uz
datum emitiranja, čak i kad se naslov na YouTubeu promijeni.
U `chapters` prenesi točne timestampove i nazive iz opisa ili YouTube poglavlja.
Stranica prikazuje opis s izvornim odlomcima, a timestampove kao poveznice na video.
Puni izvorni opis ostaje sačuvan u podatcima; njegove vremenske oznake ne prikazuju se dvaput.

Kad postoje sadržajan opis i potvrđena poglavlja, postavi `needsShownotes: false`.
Ako nedostaju, zadrži `needsShownotes: true`. Zajednički opis kanala i generički
naslov nisu zamjena za već dostupne sadržajne podatke epizode.
Ne izmišljaj sažetke ili poglavlja i ne mijenjaj druge ručno provjerene podatke.

Prije objave pokreni `npm run check` (uključuje sadržaj i produkcijski build).
Commit i push na `origin main` rade se samo nakon stvarne izmjene i uspješnih provjera.

## Shownotes template

```text
Epizoda:
YouTube URL:
Datum:
Kratki sažetak:
5 glavnih točaka:
Poglavlja:
Linkovi:
Pojmovi za početnike:
Mogući clipovi:
Povezani članci:
Provjerio:
```
