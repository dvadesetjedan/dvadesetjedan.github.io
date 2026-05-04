export type CityEntry = {
  slug: string
  name: string
  country: string
  region?: string
  summary: string
  status: "active" | "emerging" | "archive"
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
    eventSlugs: ["villa-btc-2026"],
  },
  {
    slug: "rab",
    name: "Rab",
    country: "Croatia",
    summary:
      "Rab je dio arhive javno najavljenih DvadesetJedan druženja. Buduće najave ovise o zajednici i službenim kanalima.",
    status: "archive",
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
  },
  {
    slug: "ljubljana",
    name: "Ljubljana",
    country: "Slovenia",
    summary:
      "Još nema javno potvrđenih DvadesetJedan događaja u ovom gradu. Ako želiš pokrenuti mali Bitcoin-only susret, javi se u zajednicu.",
    status: "emerging",
  },
  {
    slug: "sarajevo",
    name: "Sarajevo",
    country: "Bosnia and Herzegovina",
    summary:
      "Još nema javno potvrđenih DvadesetJedan događaja u ovom gradu. Ako želiš pokrenuti mali Bitcoin-only susret, javi se u zajednicu.",
    status: "emerging",
  },
  {
    slug: "novi-sad",
    name: "Novi Sad",
    country: "Serbia",
    summary:
      "Još nema javno potvrđenih DvadesetJedan događaja u ovom gradu. Ako želiš pokrenuti mali Bitcoin-only susret, javi se u zajednicu.",
    status: "emerging",
  },
  {
    slug: "podgorica",
    name: "Podgorica",
    country: "Montenegro",
    summary:
      "Još nema javno potvrđenih DvadesetJedan događaja u ovom gradu. Ako želiš pokrenuti mali Bitcoin-only susret, javi se u zajednicu.",
    status: "emerging",
  },
  {
    slug: "rijeka",
    name: "Rijeka",
    country: "Croatia",
    summary:
      "Još nema javno potvrđenih DvadesetJedan događaja u ovom gradu. Ako želiš pokrenuti mali Bitcoin-only susret, javi se u zajednicu.",
    status: "emerging",
  },
  {
    slug: "banja-luka",
    name: "Banja Luka",
    country: "Bosnia and Herzegovina",
    summary:
      "Još nema javno potvrđenih DvadesetJedan događaja u ovom gradu. Ako želiš pokrenuti mali Bitcoin-only susret, javi se u zajednicu.",
    status: "emerging",
  },
]
