export type CityEntry = {
  slug: string
  name: string
  country: string
  region?: string
  summary: string
  status: "active" | "emerging" | "archive"
  image?: {
    src: string
    alt: string
    credit: string
    sourceUrl: string
    license: string
  }
  meetupUrl?: string
  telegramUrl?: string
  eventSlugs?: string[]
  notes?: string[]
}

export const cities: CityEntry[] = [
  {
    slug: "beograd",
    name: "Beograd",
    country: "Serbia",
    summary:
      "Beograd ima javno najavljene Bitcoin-only susrete kroz DvadesetJedan Meetup arhivu. Za aktualnu koordinaciju koristi službene najave i Telegram zajednicu.",
    status: "active",
    image: {
      src: "/images/cities/beograd.jpg",
      alt: "Panorama Beograda",
      credit: "Jovan Marković / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Beograd_Panorama_(6645290383).jpg",
      license: "CC BY 2.0",
    },
    meetupUrl: "https://www.meetup.com/dvadeset-jedan/",
    eventSlugs: ["bitcoin-only-meetup-belgrade-2026-05-23"],
    notes: [
      "Ne objavljuj privatne kontakte ni lokacijske detalje koji nisu već javni u najavi događaja.",
    ],
  },
  {
    slug: "split",
    name: "Split",
    country: "Croatia",
    region: "Dalmacija",
    summary:
      "Split je vezan uz javno najavljeni Villa BTC 2026 događaj. Stranica služi kao ulaz u postojeće događaje i regionalnu zajednicu, bez izmišljanja lokalnih voditelja.",
    status: "active",
    image: {
      src: "/images/cities/split.jpg",
      alt: "Splitska Riva i Marjan",
      credit: "Alistair Young / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Split_Waterfront,_Looking_Towards_the_Marjan_Peninsula.jpg",
      license: "CC BY 2.0",
    },
    eventSlugs: ["villa-btc-2026"],
  },
  {
    slug: "rab",
    name: "Rab",
    country: "Croatia",
    summary:
      "Rab je dio arhive javno najavljenih DvadesetJedan druženja. Buduće najave ovise o zajednici i službenim kanalima.",
    status: "archive",
    image: {
      src: "/images/cities/rab.jpg",
      alt: "Stari grad Rab s karakterističnim tornjevima",
      credit: "Isiwal / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:20140505_Rab_old_town_1.jpg",
      license: "CC BY-SA 3.0",
    },
    meetupUrl: "https://www.meetup.com/dvadeset-jedan/",
    eventSlugs: ["meetup-rab"],
  },
  {
    slug: "zagreb",
    name: "Zagreb",
    country: "Croatia",
    summary:
      "Još nema javno potvrđenih DvadesetJedan događaja u ovom gradu. Ako želiš pokrenuti mali Bitcoin-only susret, javi se u zajednicu.",
    status: "emerging",
    image: {
      src: "/images/cities/zagreb.jpg",
      alt: "Pogled na Zagreb s kule Lotrščak",
      credit: "Sei F / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Zagreb_city_from_Lotr%C5%A1%C4%8Dak_Tower_-_Zagreb_(42532052864).jpg",
      license: "CC BY-SA 2.0",
    },
  },
  {
    slug: "ljubljana",
    name: "Ljubljana",
    country: "Slovenia",
    summary:
      "Još nema javno potvrđenih DvadesetJedan događaja u ovom gradu. Ako želiš pokrenuti mali Bitcoin-only susret, javi se u zajednicu.",
    status: "emerging",
    image: {
      src: "/images/cities/ljubljana.jpg",
      alt: "Panorama Ljubljane",
      credit: "Tiia Monto / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Ljubljana_panorama_2.jpg",
      license: "CC BY-SA 3.0",
    },
  },
  {
    slug: "sarajevo",
    name: "Sarajevo",
    country: "Bosnia and Herzegovina",
    summary:
      "Još nema javno potvrđenih DvadesetJedan događaja u ovom gradu. Ako želiš pokrenuti mali Bitcoin-only susret, javi se u zajednicu.",
    status: "emerging",
    image: {
      src: "/images/cities/sarajevo.jpg",
      alt: "Panorama Sarajeva",
      credit: "Felky / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Sarajevo_Panorama_2022.jpg",
      license: "CC BY 4.0",
    },
  },
  {
    slug: "novi-sad",
    name: "Novi Sad",
    country: "Serbia",
    summary:
      "Još nema javno potvrđenih DvadesetJedan događaja u ovom gradu. Ako želiš pokrenuti mali Bitcoin-only susret, javi se u zajednicu.",
    status: "emerging",
    image: {
      src: "/images/cities/novi-sad.jpg",
      alt: "Gradska kuća u Novom Sadu",
      credit: "Tournasol7 / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:City_hall_of_Novi_Sad_(8).jpg",
      license: "CC BY-SA 4.0",
    },
  },
  {
    slug: "podgorica",
    name: "Podgorica",
    country: "Montenegro",
    summary:
      "Još nema javno potvrđenih DvadesetJedan događaja u ovom gradu. Ako želiš pokrenuti mali Bitcoin-only susret, javi se u zajednicu.",
    status: "emerging",
    image: {
      src: "/images/cities/podgorica.jpg",
      alt: "Centar Podgorice iz zraka",
      credit: "Wusel007 / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Podgorica_from_plane.jpg",
      license: "CC BY-SA 3.0",
    },
  },
  {
    slug: "rijeka",
    name: "Rijeka",
    country: "Croatia",
    summary:
      "Još nema javno potvrđenih DvadesetJedan događaja u ovom gradu. Ako želiš pokrenuti mali Bitcoin-only susret, javi se u zajednicu.",
    status: "emerging",
    image: {
      src: "/images/cities/rijeka.jpg",
      alt: "Panorama Rijeke",
      credit: "Jernej Furman / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Panorama_of_Rijeka_(52829644470).jpg",
      license: "CC BY 2.0",
    },
  },
  {
    slug: "banja-luka",
    name: "Banja Luka",
    country: "Bosnia and Herzegovina",
    summary:
      "Još nema javno potvrđenih DvadesetJedan događaja u ovom gradu. Ako želiš pokrenuti mali Bitcoin-only susret, javi se u zajednicu.",
    status: "emerging",
    image: {
      src: "/images/cities/banja-luka.jpg",
      alt: "Panorama Banje Luke",
      credit: "Aurelio221 / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Banja_Luka,_panorama_from_the_southern_side.jpg",
      license: "CC BY-SA 4.0",
    },
  },
]
