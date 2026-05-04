# Event maintenance

Događaji se održavaju ručno iz javnih izvora. Nema runtime Meetup API ovisnosti.

## Tjedni workflow

1. Otvori službeni Meetup ili drugi javni izvor događaja.
2. Usporedi nadolazeće događaje s `src/data/events.ts`.
3. Ažuriraj samo potvrđene podatke: naslov, vrijeme, lokaciju, grad, RSVP/source link i mapu.
4. Ako je provjera stvarno napravljena, ažuriraj `src/data/eventMeta.ts` i `lastManualCheck`.
5. Pokreni `npm run check`.
6. Pregledaj `/dogadaji/`.
7. Pregledaj `/gradovi/` i relevantne city stranice.

## Opcionalna usporedba s exportom

Ako imaš JSON export iz Meetupa, pokreni:

```bash
npm run check:meetup -- --source path/to/meetup-events.json
```

Skripta samo ispisuje razlike. Ne mijenja `src/data/events.ts`.

## Pravila

- Ne izmišljati venue, vrijeme, program, organizatore ili RSVP linkove.
- Ako događaj nije potvrđen, ne dodavati ga.
- Ako je događaj otkazan, koristi `status: "cancelled"` i smanji istaknutost RSVP CTA-a.
- Za zadnje promjene korisnike uputi na službenu najavu, RSVP/Meetup link i Telegram zajednicu.
