export const BITCOIN_MONEY_BELGRADE_URL =
  "/bitcoin-kao-novac-beograd-2026/"

export const BITCOIN_MONEY_BELGRADE_HERO_IMAGE =
  "/images/bitcoin-kao-novac-beograd-2026-hero.png"

export const BITCOIN_MONEY_BELGRADE_HERO_WEBP =
  "/images/bitcoin-kao-novac-beograd-2026-hero.webp"

const subject = (value: string) =>
  `mailto:kontakt@dvadesetjedan.com?subject=${encodeURIComponent(value)}`

export const bitcoinMoneyBelgradeLinks = {
  host: subject("Bitcoin kao novac Beograd 2026 - domaćin"),
  support: subject("Bitcoin kao novac Beograd 2026 - sponzorstvo"),
  interest: subject("Bitcoin kao novac Beograd 2026 - interes"),
  organize: subject("Bitcoin kao novac Beograd 2026 - organizacija"),
} as const

export type PilotCard = {
  title: string
  text: string
}

export type PilotTopicCard = PilotCard & {
  image: string
  imageAlt: string
}

export type ProgramBlock = {
  time: string
  title: string
  format: string[]
  text: string
}

export type SponsorshipOption = {
  title: string
  price: string
  text: string
  includes: string[]
}

export type FaqItem = {
  question: string
  answer: string
}

export const pilotPrinciples: PilotCard[] = [
  {
    title: "Jednostavno",
    text: "Jedan dan, dva događaja, jasan fokus.",
  },
  {
    title: "Ozbiljno",
    text: "Bez hypea, bez tokena, bez trading kulture.",
  },
  {
    title: "Mjerljivo",
    text: "Ako pilot uspije, može postati veći univerzitetski serijal 2027.",
  },
]

export const pilotProgram: ProgramBlock[] = [
  {
    time: "Popodne: fakultetsko predavanje",
    title:
      "Bitcoin kao novac - što studenti ekonomije, tehnologije i poslovanja trebaju razumjeti",
    format: [
      "60 minuta predavanja",
      "30 minuta pitanja",
      "bez kotizacije",
      "bez prodaje",
      "bez sponsor pitcha na pozornici",
      "snimanje ako domaćin dopusti",
    ],
    text: "Predavanje je namijenjeno studentima i profesorima koji žele ozbiljno razumjeti zašto Bitcoin postoji, kako se razlikuje od crypto tržišta i zašto se o njemu može razgovarati kao o novcu, tehnologiji i dugoročnoj štednji.",
  },
  {
    time: "Navečer: otvoreni meetup",
    title:
      "Kako početi ozbiljno s Bitcoinom - sigurnost, štednja i osobni standard",
    format: [
      "30-45 minuta uvodnog predavanja",
      "45-60 minuta pitanja i razgovora",
      "neformalno druženje",
      "mogućnost snimanja kratkih razgovora i izjava",
      "prostor za upoznavanje lokalne zajednice",
    ],
    text: "Meetup je otvoren za studente, mlade profesionalce, developere, poduzetnike i sve koji žele razumjeti Bitcoin bez buke tržišta, altcoina i kratkoročnog spekuliranja.",
  },
]

export const pilotTopics: PilotTopicCard[] = [
  {
    title: "Što je novac?",
    text: "Inflacija, štednja, dug, kupovna moć i zašto novac nije samo sredstvo plaćanja.",
    image: "/images/beograd-2026/topics/sto-je-novac.webp",
    imageAlt:
      "Osoba za stolom pregledava kućni proračun, račune, novac i osnovne troškove",
  },
  {
    title: "Zašto Bitcoin postoji?",
    text: "Problem fiat novca, oskudica, decentralizacija i otvorena monetarna mreža.",
    image: "/images/beograd-2026/topics/zasto-bitcoin-postoji.webp",
    imageAlt:
      "Bitcoin simbol povezan u decentraliziranu mrežu uz papirnati novac u pozadini",
  },
  {
    title: "Kako Bitcoin radi?",
    text: "Proof-of-work, nodeovi, rudarenje, konsenzus i sigurnost mreže.",
    image: "/images/beograd-2026/topics/kako-bitcoin-radi.webp",
    imageAlt:
      "Predavanje o Bitcoin mreži, nodeovima, rudarenju i sigurnosti sustava",
  },
  {
    title: "Bitcoin i osobne financije",
    text: "Proračun, dug, štednja, DCA, volatilnost i dugoročno razmišljanje.",
    image: "/images/beograd-2026/topics/bitcoin-i-osobne-financije.webp",
    imageAlt:
      "Par planira osobne financije, proračun, štednju i redovitu kupnju Bitcoina",
  },
  {
    title: "Self-custody i sigurnost",
    text: "Što znači stvarno posjedovati Bitcoin i koje greške početnici najčešće rade.",
    image: "/images/beograd-2026/topics/self-custody-i-sigurnost.webp",
    imageAlt:
      "Osobe pažljivo postavljaju Bitcoin self-custody uz hardware wallet, backup i sef",
  },
  {
    title: "Lightning i plaćanja",
    text: "Kako Bitcoin može služiti i kao mreža za plaćanja, ne samo kao dugoročna štednja.",
    image: "/images/beograd-2026/topics/lightning-i-placanja.webp",
    imageAlt:
      "Plaćanje Bitcoin Lightningom u kafiću pomoću mobitela i QR koda",
  },
]

export const pilotAudience = [
  "studenti ekonomije",
  "studenti elektrotehnike, računalstva i organizacijskih znanosti",
  "studenti financija i menadžmenta",
  "profesori i asistenti",
  "developeri",
  "mladi poduzetnici",
  "lokalna Bitcoin zajednica",
  "ljudi koji žele razumjeti Bitcoin bez trading kulture",
] as const

export const pilotNotItems = [
  "nije trading seminar",
  "nije promocija altcoina",
  "nije prodaja investicijskih proizvoda",
  "nije nagovor na kupnju",
  "nije financijski savjet",
  "nije onboarding kampanja za burze",
  "nije crypto-casino event",
] as const

export const pilotPartners = [
  "fakulteti",
  "studentske organizacije",
  "profesori i asistenti",
  "Bitcoin i tech zajednice",
  "coworking prostori",
  "lokalni organizatori",
  "ljudi koji mogu pomoći oko promocije, prostora ili snimanja",
] as const

export const pilotBudgetItems = [
  "put i smještaj",
  "prostor za večernji meetup",
  "snimanje i fotografija",
  "dizajn i promocija",
  "piće i hrana za networking",
  "tehnička i organizacijska rezerva",
] as const

export const pilotSponsorshipOptions: SponsorshipOption[] = [
  {
    title: "Supporter",
    price: "500 €",
    text: "Za one koji žele pomoći da se pilot dogodi.",
    includes: [
      "ime/logo na stranici",
      "zahvala nakon eventa",
      "spomen u objavi sažetka",
    ],
  },
  {
    title: "Partner",
    price: "1.500 €",
    text: "Za firme ili pojedince koji žele jače podržati pilot.",
    includes: [
      "sve iz Supporter paketa",
      "istaknutiji logo na stranici",
      "spomen na večernjem meetupu",
      "mogućnost podjele edukativnih materijala ako se uklapaju u karakter eventa",
    ],
  },
  {
    title: "Main partner",
    price: "3.000-5.000 €",
    text: "Za glavnog pokrovitelja pilota.",
    includes: [
      "sve iz Partner paketa",
      "status glavnog partnera",
      "prisutnost na oba događaja ako domaćin dopusti",
      "isticanje u video materijalima i objavama",
      "mogućnost kratkog uvodnog pozdrava na meetupu, bez prodajnog pitcha",
    ],
  },
]

export const pilotFaq: FaqItem[] = [
  {
    question: "Kada je planiran event?",
    answer:
      "Plan je jesen 2026., nakon početka nove akademske godine. Točan datum bit će dogovoren s lokalnim domaćinima i partnerima.",
  },
  {
    question: "Gdje će se održati?",
    answer:
      "Plan je jedno fakultetsko predavanje tijekom dana i jedan otvoreni meetup navečer u Beogradu. Lokacije još nisu potvrđene.",
  },
  {
    question: "Je li event besplatan?",
    answer:
      "Cilj je da fakultetsko predavanje bude besplatno. Za meetup će format ovisiti o prostoru i partnerima, ali cilj je zadržati ga što dostupnijim.",
  },
  {
    question: "Je li ovo investicijski savjet?",
    answer:
      "Ne. Event nije financijski savjet, nije trading seminar i nije nagovor na kupnju. Cilj je razumjeti Bitcoin kao monetarnu i tehnološku pojavu.",
  },
  {
    question: "Hoće li se pričati o drugim kriptovalutama?",
    answer:
      "Fokus je Bitcoin. Druge kriptovalute mogu se spomenuti samo kontekstualno, ali event nije o altcoinima, tokenima ni Web3 investiranju.",
  },
  {
    question: "Može li firma sponzorirati event?",
    answer:
      "Da, ako prihvaća obrazovni karakter eventa. Sponzorstvo ne uključuje promociju tokena, trading ponuda, airdropova, investicijskih proizvoda ili pritisak na studente da postanu korisnici neke platforme.",
  },
  {
    question: "Mogu li pomoći oko organizacije?",
    answer:
      "Da. Posebno tražimo ljude u Beogradu koji mogu pomoći oko kontakata na fakultetima, prostora za meetup, promocije, snimanja i lokalne logistike.",
  },
]
