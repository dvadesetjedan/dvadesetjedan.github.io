# Iz zajednice

`/iz-zajednice/` je kurirani prikaz korisnog Bitcoin-only rada koji dolazi od
članova, prijatelja i bliskih sudionika DvadesetJedan zajednice.

Stranica nije imenik članova, oglasnik ni službena potvrda kvalitete projekta.
Cilj je pokazati živu regionalnu mrežu: edukaciju, prijevode, događaje, video
kanale, pisanje, lokalne zajednice, alate i praktične inicijative.

## Što kvalificira projekt

- Bitcoin-only rad ili jasno koristan doprinos Bitcoin obrazovanju.
- Lokalni ili regionalni doprinos zajednici.
- Edukacijski materijali, prijevodi, članci, video i audio sadržaj.
- Događaji, meetupi i regionalne poveznice.
- Praktične inicijative koje šire otvoren Bitcoin signal.

## Što ne kvalificira projekt

- Trading signali, leverage, tokeni i obećanja zarade.
- Projekti kojima je primarni cilj affiliate ili referral prihod.
- Šire crypto promocije bez jasnog Bitcoin-only fokusa.
- Neprovjerene tvrdnje o rezultatima, brojevima ili partnerstvima.
- Privatni kontakti bez izričitog pristanka za javnu objavu.

## Pravila pristanka

Javno se prikazuju samo projekti koji imaju `consentConfirmed: true` i nisu
označeni kao `draft`.

Planirani ili nacrtni unosi mogu stajati u `src/data/communityProjects.ts` radi
održavanja, ali se ne smiju pojaviti na javnoj stranici, u sitemapu ili u
statički generiranim rutama dok nije potvrđen pristanak.

## Donacije

Donation linkovi smiju se prikazati samo kao opcionalna podrška autoru ili
projektu. Uz njih mora postojati napomena u podacima i javni disclaimer:

> Donacije idu izravno autoru ili projektu. DvadesetJedan ne posreduje i ne
> jamči za korištenje sredstava.

DvadesetJedan ne obrađuje donacije i ne jamči za način korištenja sredstava.

## Kako dodati projekt

1. Dodaj unos u `src/data/communityProjects.ts`.
2. Koristi postojeći `CommunityProject` tip.
3. Popuni `slug`, `title`, `summary`, `description`, `category`, `status`,
   `relationship`, `tags`, `links` i `consentConfirmed`.
4. Ako projekt još nije za javnu objavu, koristi `status: "planned"` ili
   `status: "draft"` i `consentConfirmed: false`.
5. Donation linkovi trebaju `donationNote`.
6. Ne dodaj privatne kontakte dok osoba nije izričito potvrdila javnu objavu.
7. Pokreni `npm run check` i `npm run build`.

## Ažuriranje i uklanjanje

Ako autor pošalje novu javnu informaciju, ažuriraj opis ili linkove u data
datoteci i po potrebi `lastVerified`.

Ako autor traži uklanjanje, najčišći put je postaviti `status: "draft"` ili
`consentConfirmed: false`, a zatim u posebnom commitu ukloniti javne ostatke ako
ih više ne treba čuvati radi povijesti održavanja.

## Privatni kontakti

Telegram, email, Nostr identitet ili drugi osobni kontakt prikazuj samo ako je
u podacima jasno zabilježeno da je javna objava dopuštena. Ako nisi siguran,
kontakt ostaje interni TODO ili `contactNote`, ali se ne renderira javno.
