export type ScheduledEventEntry = {
  kind?: "scheduled"
  slug: string
  title: string
  summary: string
  description: string[]
  coverImage: string
  start: string
  end: string
  displayDate?: string
  allDay?: boolean
  venue: string
  address: string
  city: string
  country: string
  registrationUrl: string
  mapUrl: string
  sourceName?: string
  sourceUrl?: string
  meetupUrl?: string
  organizer?: string
  language?: string
  capacityNote?: string
  status?: "upcoming" | "past" | "cancelled"
  citySlug?: string
  tags?: string[]
  relatedLinks?: { label: string; href: string }[]
}

export type ArchiveEventEntry = {
  kind: "archive"
  slug: string
  title: string
  summary: string
  description: string[]
  coverImage: string
  dateLabel: string
  sortDate?: string
  venue?: string
  city: string
  country: string
  citySlug?: string
  status: "past"
  tags?: string[]
}

export type EventEntry = ScheduledEventEntry | ArchiveEventEntry

export function isArchiveEvent(event: EventEntry): event is ArchiveEventEntry {
  return event.kind === "archive"
}

export function isScheduledEvent(
  event: EventEntry,
): event is ScheduledEventEntry {
  return event.kind !== "archive"
}

export function eventSortTime(event: EventEntry) {
  const value = isArchiveEvent(event) ? event.sortDate : event.start
  return value ? new Date(value).getTime() : Number.NEGATIVE_INFINITY
}

export type EventStatus = "upcoming" | "past" | "cancelled"

export function getEventStatus(
  event: EventEntry,
  now = new Date(),
): EventStatus {
  if (isArchiveEvent(event)) return "past"
  if (event.status) return event.status
  return new Date(event.end) >= now ? "upcoming" : "past"
}

export const events: EventEntry[] = [
  {
    slug: "bitcoin-only-meetup-belgrade-2026-08-19",
    title: "Bitcoin-only meetup u Beogradu",
    summary:
      "Otvoreno DvadesetJedan druženje u Docker Brewery & Beer Garden u Beogradu za razgovor o Bitcoinu, ekonomiji, tehnologiji, filozofiji i zajednici.",
    description: [
      "DvadesetJedan meetup u Beogradu održava se u srijedu, 19. kolovoza 2026. od 19:00 do 22:00 u Docker Brewery & Beer Garden.",
      "Format je otvoreno Bitcoin-only druženje: razgovor o Bitcoinu, ekonomiji, tehnologiji, filozofiji, projektima i zajednici.",
      "Najava navodi da se grupa okuplja svake treće srijede u mjesecu do 30. rujna 2026., ali ovaj unos se odnosi na javno najavljeni termin 19. kolovoza.",
      "Govori se srpski i engleski. Dobrodošli su svi bez obzira na razinu znanja o Bitcoinu, a početnici su posebno dobrodošli.",
      "Ako ne možeš prepoznati ekipu po Bitcoin majicama ili merchu, provjeri Telegram grupu za točan broj stola.",
      "RSVP, broj slobodnih mjesta i eventualne zadnje promjene provjeri na Meetup stranici događaja.",
      "Cover fotografija: Docker Brewery & Beer Garden.",
    ],
    coverImage: "/events/docker-brewery-belgrade.png",
    start: "2026-08-19T19:00:00+02:00",
    end: "2026-08-19T22:00:00+02:00",
    venue: "Docker Brewery & Beer Garden",
    address: "Žorža Klemansoa 27b",
    city: "Belgrade",
    country: "Serbia",
    registrationUrl: "https://www.meetup.com/dvadeset-jedan/events/314211200/",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Docker+Brewery+Beer+Garden+Zorza+Klemansoa+27b+Belgrade+Serbia",
    sourceName: "Meetup",
    sourceUrl: "https://www.meetup.com/dvadeset-jedan/events/314211200/",
    meetupUrl: "https://www.meetup.com/dvadeset-jedan/events/314211200/",
    organizer: "Plumski",
    language: "srpski i engleski",
    capacityNote: "Meetup najava navodi 29 slobodnih mjesta u trenutku unosa.",
    citySlug: "beograd",
    tags: ["Bitcoin-only", "Meetup", "Beograd"],
    relatedLinks: [
      {
        label: "Telegram koordinacija",
        href: "https://t.me/dvadesetjedan21",
      },
      {
        label: "YouTube podcast",
        href: "https://www.youtube.com/@dvadesetjedan/streams",
      },
    ],
  },
  {
    slug: "revolution-rocks-belgrade-2026",
    title: "Revolution.Rocks Belgrade 2026",
    summary:
      "Dvodnevni glazbeno-edukacijski događaj na Zappa Barki u Beogradu: koncertna večer, paneli, razgovori i value-for-value model uz Bitcoin Lightning.",
    description: [
      "Revolution.Rocks je dvodnevni događaj u Beogradu, 19. i 20. lipnja 2026., na Zappa Barki, plutajućem klubu na Dunavu kod Nebojšine kule.",
      "Prva večer je glazbena: nastupaju The Higher Low, Joe Martin, Longy, Scardust, Roger 9000 i još jedan izvođač koji će biti potvrđen naknadno, uz DJ after-party nakon ponoći.",
      "Drugi dan donosi panele, razgovore i networking o budućnosti glazbe, neovisnosti kreatora i tehnologiji koja umjetnicima može dati izravniji odnos s publikom.",
      "Brief događaja: ovo nije klasična tehnološka konferencija s glazbom u pozadini, nego glazbeni događaj s idejama o tome kako publika, umjetnici i platforme mogu graditi drukčiji model vrijednosti.",
      "Središnja tema je value-for-value: sadržaj se može pratiti besplatno, a publika dobrovoljno šalje vrijednost izravno autorima. Bitcoin Lightning omogućuje instant mikroplaćanja u satoshijima, globalno i uz vrlo male troškove.",
      "Ako ne možeš doći u Beograd, oba dana najavljena su za livestream na Tunestru i drugim platformama, uz mogućnost podrške izvođačima u stvarnom vremenu.",
      "Full Festival Pass pokriva Music Night, Education Day i oba after-partyja. Službena stranica navodi plaćanje Bitcoinom preko Lightninga ili karticom.",
      "Cover fotografija: Revolution.Rocks.",
    ],
    coverImage: "/images/events/revolution rocks belgrade june 2026 3.jpeg",
    start: "2026-06-19T18:00:00+02:00",
    end: "2026-06-21T00:00:00+02:00",
    displayDate: "19. – 20. lipnja 2026.",
    venue: "Zappa Barka",
    address: "Bulevar vojvode Bojovića, kod Nebojšine kule",
    city: "Belgrade",
    country: "Serbia",
    registrationUrl: "https://www.revolution.rocks/#tickets",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Zappa+Barka+Bulevar+vojvode+Bojovica+Belgrade+Serbia",
    sourceName: "Revolution.Rocks",
    sourceUrl: "https://www.revolution.rocks/",
    language: "engleski",
    citySlug: "beograd",
    tags: ["Bitcoin", "Lightning", "Value-for-value", "Glazba", "Beograd"],
  },
  {
    slug: "bitcoin-only-meetup-belgrade-2026-06-17",
    title: "Bitcoin-only meetup u Beogradu",
    summary:
      "Otvoreno DvadesetJedan druženje u Docker Brewery & Beer Garden u Beogradu za razgovor o Bitcoinu, ekonomiji, tehnologiji, filozofiji i zajednici.",
    description: [
      "DvadesetJedan meetup u Beogradu održava se u srijedu, 17. lipnja 2026. od 19:00 do 22:00 u Docker Brewery & Beer Garden.",
      "Format je otvoreno Bitcoin-only druženje: razgovor o Bitcoinu, ekonomiji, tehnologiji, filozofiji, projektima i zajednici.",
      "Najava navodi da se grupa okuplja svake treće srijede u mjesecu do 30. rujna 2026., ali ovaj unos se odnosi na javno najavljeni termin 17. lipnja.",
      "Govori se srpski i engleski. Dobrodošli su svi bez obzira na razinu znanja o Bitcoinu, a početnici su posebno dobrodošli.",
      "RSVP, broj slobodnih mjesta i eventualne zadnje promjene provjeri na Meetup stranici događaja.",
      "Cover fotografija: Docker Brewery & Beer Garden.",
    ],
    coverImage: "/events/docker-brewery-belgrade.png",
    start: "2026-06-17T19:00:00+02:00",
    end: "2026-06-17T22:00:00+02:00",
    venue: "Docker Brewery & Beer Garden",
    address: "Žorža Klemansoa 27b",
    city: "Belgrade",
    country: "Serbia",
    registrationUrl: "https://www.meetup.com/dvadeset-jedan/events/314211200/",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Docker+Brewery+Beer+Garden+Zorza+Klemansoa+27b+Belgrade+Serbia",
    sourceName: "Meetup",
    sourceUrl: "https://www.meetup.com/dvadeset-jedan/events/314211200/",
    meetupUrl: "https://www.meetup.com/dvadeset-jedan/events/314211200/",
    organizer: "DvadesetJedan",
    language: "srpski i engleski",
    citySlug: "beograd",
    tags: ["Bitcoin-only", "Meetup", "Beograd"],
  },
  {
    slug: "villa-btc-2026",
    title: "Villa BTC 2026",
    summary:
      "Bitcoin iskustvo u srcu Mediterana: ograničen privatni događaj u Splitu s druženjem, predavanjima, izletima i prostorom za povezivanje bitcoinera.",
    description: [
      "Villa BTC je Bitcoin događaj u srcu Mediterana, od 5. do 7. lipnja 2026. u Splitu.",
      "Događaj je privatnog karaktera i ima ograničen broj sudionika. Fokus je na kvalitetnom umrežavanju, razgovorima i iskustvima s ljudima koji ozbiljno pristupaju Bitcoinu.",
      "Program uključuje pristup vili tijekom događaja, panel rasprave, radionice i dodatna iskustva poput izleta brodom, ovisno o odabranoj ulaznici.",
      "Dostupne su Networking, Experience i Villa ulaznice. Broj mjesta je ograničen, a detalji i kupnja ulaznica dostupni su na službenoj Villa BTC stranici.",
      "Cover fotografija: Villa BTC.",
    ],
    coverImage: "/events/villa-btc-split-podstrana.jpg",
    start: "2026-06-05T00:00:00+02:00",
    end: "2026-06-08T00:00:00+02:00",
    displayDate: "5. – 7. lipnja 2026.",
    allDay: true,
    venue: "Villa BTC",
    address: "Split",
    city: "Split",
    country: "Croatia",
    registrationUrl: "https://villabtc.net/#tickets",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Split+Croatia",
    sourceName: "Villa BTC",
    sourceUrl: "https://villabtc.net/",
    citySlug: "split",
    tags: ["Bitcoin-only", "Split"],
  },
  {
    slug: "bitcoin-only-meetup-belgrade-2026-05-30",
    title: "Bitcoin-only događaj u Beogradu",
    summary:
      "Dvadeset Jedan događaj u Beogradu na posebnoj lokaciji na Adi Ciganliji. Otvoreno druženje za bitcoinere, početnike i sve koji žele razgovarati o Bitcoinu, ekonomiji, tehnologiji i zajednici.",
    description: [
      "Ovog mjeseca događaj se održava na posebnoj novoj lokaciji na Adi Ciganliji.",
      "Dvadeset Jedan je grupa Bitcoin maksimalista s ex-yu prostora. Okupljamo se kako bismo razgovarali o Bitcoinu, ekonomiji, tehnologiji, filozofiji i povezanim temama. Ponekad predstavljamo projekte, organiziramo radionice i snimamo podcast.",
      "Druženje se održava 30. svibnja u 16:00 u restoranu Druga Kuća na Adi Ciganliji u Beogradu.",
      "Govorimo srpski i engleski. Dobrodošli su svi, bez obzira na razinu znanja o Bitcoinu. Početnici su posebno dobrodošli.",
      "Ako nas ne pronađete po Bitcoin majicama, provjerite Telegram grupu za točnu lokaciju kod restorana Druga Kuća: https://t.me/dvadesetjedan21",
      "RSVP i detalji događaja dostupni su na Meetup stranici.",
      "Cover fotografija: Beogradski izlet.",
    ],
    coverImage:
      "https://beogradskiizlet.com/wp-content/uploads/2026/03/Biciklisticka-staza-Ada-Ciganlija-sa-pogledom-na-jezero.jpg",
    start: "2026-05-30T16:00:00+02:00",
    end: "2026-05-30T19:00:00+02:00",
    venue: "Restaurant Druga Kuća - Ada Ciganlija",
    address: "Ada Ciganlija 2",
    city: "Belgrade",
    country: "Serbia",
    registrationUrl:
      "https://www.meetup.com/dvadeset-jedan/events/314211199/?eventOrigin=group_upcoming_events",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Restaurant+Druga+Kuca+Ada+Ciganlija+2+Belgrade+Serbia",
    sourceName: "Meetup",
    sourceUrl:
      "https://www.meetup.com/dvadeset-jedan/events/314211199/?eventOrigin=group_upcoming_events",
    meetupUrl:
      "https://www.meetup.com/dvadeset-jedan/events/314211199/?eventOrigin=group_upcoming_events",
    language: "srpski i engleski",
    citySlug: "beograd",
    tags: ["Bitcoin-only", "Meetup", "Beograd"],
  },
  {
    slug: "meetup-rab",
    title: "Druženje na Rabu",
    summary:
      "Pozivamo sve bitcoinere na neformalno druženje na otoku Rabu! Dio ekipe stiže već 13. kolovoza i ostaje do 15. kolovoza – planiramo kupanje, druženje, možda ribolov, kajak... sve ovisi o vremenu i raspoloženju. Pridruži se kad možeš i koliko možeš.",
    description: [
      "Bitcoin druženje na Rabu u organizaciji DvadesetJedan i Bull Bitcoin.",
      "Pridruži se DvadesetJedan događaju na Rabu uz opušten razgovor o Bitcoinu, zajednici i lokalnom povezivanju.",
      "Dio ekipe stiže već 13. kolovoza i ostaje do 15. kolovoza, pa su planirani kupanje, druženje i spontana okupljanja ovisno o vremenu i raspoloženju.",
      "Glavno druženje održava se 14. kolovoza u 19:30 na lokaciji navedenoj u detaljima događaja. Za eventualne zadnje promjene i koordinaciju prati Telegram grupu događaja.",
      "Telegram grupa za koordinaciju: https://t.me/+EFNsWuB8lV1mODlk",
    ],
    coverImage: "/images/events/rab meetup august 2025.jpeg",
    start: "2025-08-14T19:30:00+02:00",
    end: "2025-08-15T23:00:00+02:00",
    venue: "Žal Beach Bar",
    address: "Frkanj",
    city: "Rab",
    country: "Croatia",
    registrationUrl:
      "https://www.meetup.com/dvadeset-jedan/events/310212249/?recId=b3b4279a-a2d9-4141-a319-38545eb81020&recSource=ml-popular-events-nearby-offline&searchId=bc533620-1f0c-4eac-a1fe-2092a5845a10&eventOrigin=find_page%24all",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=%C5%BDal+Beach+Bar+Frkanj+Rab+Croatia",
    sourceName: "Meetup",
    sourceUrl:
      "https://www.meetup.com/dvadeset-jedan/events/310212249/?recId=b3b4279a-a2d9-4141-a319-38545eb81020&recSource=ml-popular-events-nearby-offline&searchId=bc533620-1f0c-4eac-a1fe-2092a5845a10&eventOrigin=find_page%24all",
    meetupUrl:
      "https://www.meetup.com/dvadeset-jedan/events/310212249/?recId=b3b4279a-a2d9-4141-a319-38545eb81020&recSource=ml-popular-events-nearby-offline&searchId=bc533620-1f0c-4eac-a1fe-2092a5845a10&eventOrigin=find_page%24all",
    citySlug: "rab",
    tags: ["Bitcoin-only", "Meetup", "Rab"],
  },
  {
    kind: "archive",
    slug: "bridging-bitcoin-beograd-2024",
    title: "Bridging Bitcoin Beograd 2024",
    summary:
      "Dokumentirano Bitcoin okupljanje u Beogradu s predavanjima, razgovorima i lokalnom zajednicom.",
    description: [
      "Fotografije i sačuvani programski materijali potvrđuju Bridging Bitcoin događaj u Beogradu tijekom listopada 2024.",
      "Arhivski unos namjerno ne navodi lokaciju ni točno vrijeme izvan onoga što je vidljivo u izvornoj dokumentaciji.",
    ],
    coverImage: "/images/events/Bridging Bitcoin Belgrade October 2024 89.jpeg",
    dateLabel: "listopad 2024.",
    sortDate: "2024-10-01",
    venue: "Hub21",
    city: "Beograd",
    country: "Srbija",
    citySlug: "beograd",
    status: "past",
    tags: ["Bitcoin", "Konferencija", "Beograd"],
  },
  {
    kind: "archive",
    slug: "rab-meetup-2022",
    title: "Bitcoin druženje na Rabu 2022",
    summary:
      "Rano DvadesetJedan druženje na Rabu, sačuvano kroz fotografije razgovora i zajedničkog vremena na otvorenom.",
    description: [
      "Nazivi fotografija pouzdano povezuju ovu skupinu s meetupom na Rabu 2022. Točan datum i lokacija nisu potvrđeni u podacima repozitorija.",
    ],
    coverImage: "/images/events/Rab meetup 2022.37.jpeg",
    dateLabel: "2022.",
    sortDate: "2022-01-01",
    city: "Rab",
    country: "Hrvatska",
    citySlug: "rab",
    status: "past",
    tags: ["Bitcoin-only", "Meetup", "Rab"],
  },
  {
    kind: "archive",
    slug: "beograd-bitcoin-meetup-2024",
    title: "Bitcoin meetup u Beogradu 2024",
    summary:
      "Dokumentirano lokalno Bitcoin okupljanje u Beogradu tijekom 2024.",
    description: [
      "Fotografije prikazuju meetup i razgovor u Hub21 prostoru. Točan termin nije potvrđen u repozitoriju.",
    ],
    coverImage: "/images/events/belgrade bitcoin meetup 2024.jpeg",
    dateLabel: "2024.",
    sortDate: "2024-01-01",
    venue: "Hub21",
    city: "Beograd",
    country: "Srbija",
    citySlug: "beograd",
    status: "past",
    tags: ["Bitcoin-only", "Meetup", "Beograd"],
  },
  {
    kind: "archive",
    slug: "bitcoin-knjige-beograd-2023",
    title: "Bitcoin knjige u Beogradu 2023",
    summary:
      "Susret u Beogradu dokumentiran fotografijama Bitcoin knjiga i materijala za zajedničko učenje.",
    description: [
      "Nazivi fotografija pouzdano povezuju ovu skupinu s Bitcoin knjigama u Beogradu 2023. Dodatna logistika nije sačuvana u podacima stranice.",
    ],
    coverImage: "/images/events/belgrade btc books 2023.jpeg",
    dateLabel: "2023.",
    sortDate: "2023-09-01",
    city: "Beograd",
    country: "Srbija",
    citySlug: "beograd",
    status: "past",
    tags: ["Knjige", "Učenje", "Beograd"],
  },
  {
    kind: "archive",
    slug: "bitcoin-halloween-beograd-2023",
    title: "Bitcoin Halloween u Beogradu 2023",
    summary: "Arhivski trag tematskog okupljanja beogradske Bitcoin zajednice.",
    description: [
      "Povezanost s događajem proizlazi iz naziva fotografije. Točan datum i program nisu potvrđeni u repozitoriju.",
    ],
    coverImage: "/images/events/belgrade halloween party 2023.jpeg",
    dateLabel: "2023.",
    sortDate: "2023-10-01",
    city: "Beograd",
    country: "Srbija",
    citySlug: "beograd",
    status: "past",
    tags: ["Zajednica", "Beograd"],
  },
  {
    kind: "archive",
    slug: "halving-meetup-beograd-2024",
    title: "Halving meetup u Beogradu 2024",
    summary:
      "Beogradsko Bitcoin druženje uz halving, dokumentirano fotografijama prostora i razgovora.",
    description: [
      "Nazivi fotografija i vidljivi detalji prostora povezuju ovu skupinu s halving meetupom u Beogradu 2024.",
    ],
    coverImage: "/images/events/belgrade meetup halving 2.jpeg",
    dateLabel: "travanj 2024.",
    sortDate: "2024-04-01",
    venue: "Hub21",
    city: "Beograd",
    country: "Srbija",
    citySlug: "beograd",
    status: "past",
    tags: ["Halving", "Meetup", "Beograd"],
  },
  {
    kind: "archive",
    slug: "beograd-meetup-svibanj-2022",
    title: "Bitcoin meetup u Beogradu, svibanj 2022",
    summary:
      "Jedno od ranijih dokumentiranih okupljanja beogradske Bitcoin zajednice.",
    description: [
      "Skupina fotografija u repozitoriju označena je kao beogradski meetup iz svibnja 2022. Točna lokacija nije potvrđena.",
    ],
    coverImage: "/images/events/belgrade meetup may 2022.01.jpeg",
    dateLabel: "svibanj 2022.",
    sortDate: "2022-05-01",
    city: "Beograd",
    country: "Srbija",
    citySlug: "beograd",
    status: "past",
    tags: ["Bitcoin-only", "Meetup", "Beograd"],
  },
  {
    kind: "archive",
    slug: "beograd-meetup-svibanj-2023",
    title: "Bitcoin meetup u Beogradu, svibanj 2023",
    summary:
      "Druženje beogradske Bitcoin zajednice na otvorenom u svibnju 2023.",
    description: [
      "Nazivi fotografija pouzdano određuju grad, mjesec i godinu. Točna lokacija nije navedena.",
    ],
    coverImage: "/images/events/belgrade meetup may 2023.12.jpeg",
    dateLabel: "svibanj 2023.",
    sortDate: "2023-05-01",
    city: "Beograd",
    country: "Srbija",
    citySlug: "beograd",
    status: "past",
    tags: ["Bitcoin-only", "Meetup", "Beograd"],
  },
  {
    kind: "archive",
    slug: "beograd-meetup-2023",
    title: "Bitcoin meetup u Beogradu 2023",
    summary:
      "Neformalno druženje beogradske Bitcoin zajednice dokumentirano jednom fotografijom.",
    description: [
      "Godina i grad potvrđeni su nazivom fotografije. Mjesec se javno ne navodi jer naziv i metapodaci nisu usklađeni.",
    ],
    coverImage: "/images/events/belgrade meetup september 2023.jpeg",
    dateLabel: "2023.",
    sortDate: "2023-08-01",
    city: "Beograd",
    country: "Srbija",
    citySlug: "beograd",
    status: "past",
    tags: ["Bitcoin-only", "Meetup", "Beograd"],
  },
  {
    kind: "archive",
    slug: "rab-meetup-srpanj-2025",
    title: "Bitcoin druženje na Rabu, srpanj 2025",
    summary:
      "Ljetno Bitcoin druženje na Rabu dokumentirano fotografijama zajednice i lokalnog Bitko motiva.",
    description: [
      "Nazivi fotografija ovu skupinu povezuju s Rabom i srpnjem 2025. Dodatni detalji susreta nisu navedeni.",
    ],
    coverImage: "/images/events/rab meetup juli 2025.jpg",
    dateLabel: "srpanj 2025.",
    sortDate: "2025-07-01",
    city: "Rab",
    country: "Hrvatska",
    citySlug: "rab",
    status: "past",
    tags: ["Bitcoin-only", "Meetup", "Rab"],
  },
  {
    kind: "archive",
    slug: "btc-prague-2026",
    title: "BTC Prague 2026",
    summary:
      "Trag prisutnosti regionalne Bitcoin zajednice na događaju BTC Prague 2026.",
    description: [
      "Arhivski unos temelji se na nazivu fotografije. Ne navodimo osobe ni dodatni program koji nije dokumentiran u repozitoriju.",
    ],
    coverImage: "/images/events/btc prague june 2026.jpeg",
    dateLabel: "lipanj 2026.",
    sortDate: "2026-06-01",
    city: "Prag",
    country: "Češka",
    status: "past",
    tags: ["Konferencija", "Prag"],
  },
  {
    kind: "archive",
    slug: "btc-prague-2023",
    title: "BTC Prague 2023",
    summary: "Arhivska fotografija s Bitcoin konferencije u Pragu 2023.",
    description: [
      "Naziv fotografije potvrđuje događaj i godinu. Točan datum nije naveden.",
    ],
    coverImage: "/images/events/btc prague may 2023.jpeg",
    dateLabel: "2023.",
    sortDate: "2023-05-01",
    city: "Prag",
    country: "Češka",
    status: "past",
    tags: ["Konferencija", "Prag"],
  },
  {
    kind: "archive",
    slug: "bitcoin-van-beograd-2023",
    title: "Posjet Bitcoin vana Beogradu 2023",
    summary:
      "Predstavljanje, razgovori i zajednička fotografija uz Bitcoin van u Beogradu.",
    description: [
      "Fotografije pouzdano pripadaju istom posjetu Bitcoin vana Beogradu 2023. Mjesec se ne navodi zbog neusklađenih naziva i metapodataka.",
    ],
    coverImage: "/images/events/btc van visit belgrade 2023.23.jpeg",
    dateLabel: "2023.",
    sortDate: "2023-06-01",
    venue: "Hub21",
    city: "Beograd",
    country: "Srbija",
    citySlug: "beograd",
    status: "past",
    tags: ["Bitcoin", "Posjet", "Beograd"],
  },
  {
    kind: "archive",
    slug: "btcpay-server-beograd-2023",
    title: "BTCPay Server prezentacija u Beogradu 2023",
    summary:
      "Praktična prezentacija BTCPay Servera dokumentirana u beogradskom prostoru Hub21.",
    description: [
      "Nazivi fotografija i metapodaci potvrđuju prezentaciju u Beogradu 2023. Točan javni termin nije sačuvan u podacima stranice.",
    ],
    coverImage: "/images/events/btcpayserver presentation belgrade.jpeg",
    dateLabel: "2023.",
    sortDate: "2023-03-01",
    venue: "Hub21",
    city: "Beograd",
    country: "Srbija",
    citySlug: "beograd",
    status: "past",
    tags: ["BTCPay Server", "Prezentacija", "Beograd"],
  },
  {
    kind: "archive",
    slug: "btc-prague-2024",
    title: "BTC Prague 2024",
    summary:
      "Fotografski zapis konferencijskih predavanja, izlagača i Bitcoin projekata u Pragu 2024.",
    description: [
      "Skupina je povezana s BTC Prague 2024 nazivima fotografija i metapodacima. Jedna datoteka s proturječnim metapodacima ostavljena je izvan galerije.",
    ],
    coverImage: "/images/events/BTC prague june 2024.jpeg",
    dateLabel: "lipanj 2024.",
    sortDate: "2024-06-01",
    city: "Prag",
    country: "Češka",
    status: "past",
    tags: ["Konferencija", "Prag"],
  },
  {
    kind: "archive",
    slug: "hub21-otvaranje-beograd-2023",
    title: "Otvaranje Hub21 u Beogradu 2023",
    summary:
      "Arhivska fotografija okupljanja povodom otvaranja prostora Hub21 u Beogradu.",
    description: [
      "Događaj, grad i godina proizlaze iz naziva fotografije. Dodatni detalji nisu potvrđeni.",
    ],
    coverImage: "/images/events/hub21 belgrade opening 2023.jpeg",
    dateLabel: "2023.",
    sortDate: "2023-06-01",
    venue: "Hub21",
    city: "Beograd",
    country: "Srbija",
    citySlug: "beograd",
    status: "past",
    tags: ["Hub21", "Beograd"],
  },
  {
    kind: "archive",
    slug: "kraljevica-meetup-ozujak-2024",
    title: "Bitcoin meetup u Kraljevici, ožujak 2024",
    summary:
      "Druženje uz more, razgovor, hranu i lokalne Bitcoin detalje u Kraljevici.",
    description: [
      "Nazivi fotografija i metapodaci pouzdano povezuju skupinu s Kraljevicom u ožujku 2024.",
    ],
    coverImage: "/images/events/kraljevica meetup 2024 5.jpeg",
    dateLabel: "ožujak 2024.",
    sortDate: "2024-03-01",
    city: "Kraljevica",
    country: "Hrvatska",
    citySlug: "kraljevica",
    status: "past",
    tags: ["Bitcoin-only", "Meetup", "Kraljevica"],
  },
  {
    kind: "archive",
    slug: "kraljevica-meetup-kolovoz-2024",
    title: "Bitcoin meetup u Kraljevici, kolovoz 2024",
    summary:
      "Ljetno okupljanje Bitcoin zajednice u Kraljevici dokumentirano zajedničkom fotografijom.",
    description: [
      "Grad, mjesec i godina proizlaze iz naziva fotografije. Ostala logistika nije potvrđena.",
    ],
    coverImage: "/images/events/kraljevica meetup august 2024.jpeg",
    dateLabel: "kolovoz 2024.",
    sortDate: "2024-08-01",
    city: "Kraljevica",
    country: "Hrvatska",
    citySlug: "kraljevica",
    status: "past",
    tags: ["Bitcoin-only", "Meetup", "Kraljevica"],
  },
  {
    kind: "archive",
    slug: "plan-b-lugano-2024",
    title: "Plan ₿ Lugano 2024",
    summary:
      "Fotografski zapis Bitcoin sadržaja i prostora s Plan ₿ događaja u Luganu 2024.",
    description: [
      "Nazivi fotografija potvrđuju događaj, grad i godinu. Točan termin nije naveden.",
    ],
    coverImage: "/images/events/lugano 2024 planb.jpeg",
    dateLabel: "2024.",
    sortDate: "2024-06-01",
    city: "Lugano",
    country: "Švicarska",
    status: "past",
    tags: ["Konferencija", "Lugano"],
  },
  {
    kind: "archive",
    slug: "bitcoin-konferencija-maribor-2024",
    title: "Bitcoin konferencija u Mariboru 2024",
    summary:
      "Predavanja, paneli i susreti na Bitcoin konferenciji u Mariboru 2024.",
    description: [
      "Fotografije pouzdano pripadaju istom konferencijskom događaju u Mariboru 2024. Mjesec se ne navodi jer nazivi datoteka nisu usklađeni.",
    ],
    coverImage: "/images/events/maribor conference november 2024.jpeg",
    dateLabel: "2024.",
    sortDate: "2024-11-01",
    city: "Maribor",
    country: "Slovenija",
    citySlug: "maribor",
    status: "past",
    tags: ["Konferencija", "Maribor"],
  },
  {
    kind: "archive",
    slug: "bitcoin-konferencija-podgorica-2024",
    title: "Bitcoin konferencija u Podgorici 2024",
    summary:
      "Predavanja i zajedničko vrijeme na Bitcoin konferenciji u Podgorici 2024.",
    description: [
      "Nazivi fotografija i metapodaci potvrđuju događaj u Podgorici tijekom 2024.",
    ],
    coverImage: "/images/events/podgorica conference 2024 3.jpeg",
    dateLabel: "2024.",
    sortDate: "2024-04-01",
    city: "Podgorica",
    country: "Crna Gora",
    citySlug: "podgorica",
    status: "past",
    tags: ["Konferencija", "Podgorica"],
  },
  {
    kind: "archive",
    slug: "posjet-hub21-beograd",
    title: "Posjet Hub21 u Beogradu",
    summary:
      "Razgovor i zajednička fotografija tijekom dokumentiranog posjeta prostoru Hub21.",
    description: [
      "Fotografije pouzdano pripadaju istom posjetu Hub21 u Beogradu. Godina u nazivima datoteka proturječi metapodacima pa datum nije javno naveden.",
    ],
    coverImage: "/images/events/samson mow visit 2024.33.jpeg",
    dateLabel: "datum nije potvrđen",
    venue: "Hub21",
    city: "Beograd",
    country: "Srbija",
    citySlug: "beograd",
    status: "past",
    tags: ["Hub21", "Posjet", "Beograd"],
  },
  {
    kind: "archive",
    slug: "sofia-bitcoin-2025",
    title: "Bitcoin događaj u Sofiji 2025",
    summary:
      "Arhivska fotografija s Bitcoin događaja u Sofiji u listopadu 2025.",
    description: [
      "Grad, mjesec i godina proizlaze iz naziva fotografije. Naziv samog događaja nije potvrđen.",
    ],
    coverImage: "/images/events/sofia btc october 2025.jpeg",
    dateLabel: "listopad 2025.",
    sortDate: "2025-10-01",
    city: "Sofija",
    country: "Bugarska",
    status: "past",
    tags: ["Bitcoin", "Sofija"],
  },
  {
    kind: "archive",
    slug: "warsaw-bitcoin-film-fest-2024",
    title: "Bitcoin Film Fest u Varšavi 2024",
    summary:
      "Arhivska fotografija regionalne ekipe s Bitcoin filmskog festivala u Varšavi.",
    description: [
      "Događaj, grad i godina proizlaze iz naziva fotografije. Ne navodimo identitete osoba na fotografiji.",
    ],
    coverImage: "/images/events/warsaw btc film fest 2024.jpeg",
    dateLabel: "2024.",
    sortDate: "2024-01-01",
    city: "Varšava",
    country: "Poljska",
    status: "past",
    tags: ["Film", "Varšava"],
  },
  {
    kind: "archive",
    slug: "btc-beer-nis",
    title: "BTC Beer u Nišu",
    summary: "Dokumentiran susret Bitcoin zajednice uz razgovor i piće u Nišu.",
    description: [
      "Naziv fotografije potvrđuje događaj i grad. Godina u nazivu proturječi metapodacima pa datum nije javno naveden.",
    ],
    coverImage: "/images/events/btc beer nis october 2024.jpeg",
    dateLabel: "datum nije potvrđen",
    city: "Niš",
    country: "Srbija",
    citySlug: "nis",
    status: "past",
    tags: ["Bitcoin-only", "Meetup", "Niš"],
  },
  {
    kind: "archive",
    slug: "rockstar-prezentacija-beograd-2024",
    title: "Rockstar prezentacija u Beogradu 2024",
    summary:
      "Prezentacija i razgovor u beogradskom Hub21 prostoru tijekom 2024.",
    description: [
      "Grad i godina potvrđeni su nazivom fotografije i metapodacima. Mjesec nije naveden jer se izvori ne podudaraju.",
    ],
    coverImage: "/images/events/rockstar belgrade presentation may 2024.jpeg",
    dateLabel: "2024.",
    sortDate: "2024-06-01",
    venue: "Hub21",
    city: "Beograd",
    country: "Srbija",
    citySlug: "beograd",
    status: "past",
    tags: ["Prezentacija", "Beograd"],
  },
  {
    kind: "archive",
    slug: "rockstar-posjet-beograd",
    title: "Rockstar posjet Beogradu",
    summary:
      "Arhivska fotografija posjeta i razgovora u beogradskoj Bitcoin zajednici.",
    description: [
      "Povezanost s posjetom proizlazi iz naziva fotografije. Javni datum nije potvrđen.",
    ],
    coverImage: "/images/events/rockstar belgrade visit.jpeg",
    dateLabel: "datum nije potvrđen",
    venue: "Hub21",
    city: "Beograd",
    country: "Srbija",
    citySlug: "beograd",
    status: "past",
    tags: ["Posjet", "Beograd"],
  },
  {
    kind: "archive",
    slug: "bitcoin-jam-beograd",
    title: "Bitcoin Jam u Beogradu",
    summary:
      "Neformalni Bitcoin susret u Beogradu dokumentiran arhivskom fotografijom.",
    description: [
      "Naziv fotografije potvrđuje događaj i grad. Godina u nazivu proturječi metapodacima pa datum nije javno naveden.",
    ],
    coverImage: "/images/events/bitcoin jam belgrade 2023.jpeg",
    dateLabel: "datum nije potvrđen",
    city: "Beograd",
    country: "Srbija",
    citySlug: "beograd",
    status: "past",
    tags: ["Bitcoin-only", "Meetup", "Beograd"],
  },
]
