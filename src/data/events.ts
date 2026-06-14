export type EventEntry = {
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

export const events: EventEntry[] = [
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
      "Cover fotografija: Revolution.Rocks / Scardust.",
    ],
    coverImage:
      "https://o5ukxfhhcdiyrb5y.public.blob.vercel-storage.com/Scardust.jpeg",
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
      "Cover fotografija: Meetup.",
    ],
    coverImage:
      "https://secure.meetupstatic.com/photos/event/6/5/c/highres_530401628.jpeg",
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
    coverImage:
      "https://secure.meetupstatic.com/photos/event/e/1/7/8/highres_529317720.jpeg",
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
]
