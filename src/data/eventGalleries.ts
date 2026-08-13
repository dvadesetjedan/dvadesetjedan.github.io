export type GalleryPhoto = {
  src: string
  alt: string
  caption: string
  eventSlug?: string
  featured?: boolean
}

export type EventGallery = {
  eventSlug: string
  photos: GalleryPhoto[]
}

type GalleryDefinition = {
  eventSlug: string
  eventLabel: string
  location: string
  dateLabel?: string
  files: string[]
  featuredFiles?: string[]
}

const eventImagePath = (file: string) => `/images/events/${file}`

function createGallery({
  eventSlug,
  eventLabel,
  location,
  dateLabel,
  files,
  featuredFiles = [],
}: GalleryDefinition): EventGallery {
  const context = [eventLabel, location, dateLabel].filter(Boolean).join(", ")

  return {
    eventSlug,
    photos: files.map((file, index) => ({
      src: eventImagePath(file),
      alt: `${context} — fotografija ${index + 1}.`,
      caption: context,
      eventSlug,
      featured: featuredFiles.includes(file),
    })),
  }
}

const galleryDefinitions: GalleryDefinition[] = [
  {
    eventSlug: "bridging-bitcoin-beograd-2024",
    eventLabel: "Bridging Bitcoin",
    location: "Beograd",
    dateLabel: "listopad 2024.",
    files: [
      "Bridging Bitcoin Belgrade October 2024 15.jpeg",
      "Bridging Bitcoin Belgrade October 2024 21.JPG",
      "Bridging Bitcoin Belgrade October 2024 25.JPG",
      "Bridging Bitcoin Belgrade October 2024 26.JPG",
      "Bridging Bitcoin Belgrade October 2024 27.JPG",
      "Bridging Bitcoin Belgrade October 2024 28.JPG",
      "Bridging Bitcoin Belgrade October 2024 29.JPG",
      "Bridging Bitcoin Belgrade October 2024 30.JPG",
      "Bridging Bitcoin Belgrade October 2024 31.JPG",
      "Bridging Bitcoin Belgrade October 2024 32.JPG",
      "Bridging Bitcoin Belgrade October 2024 34.JPG",
      "Bridging Bitcoin Belgrade October 2024 74.jpeg",
      "Bridging Bitcoin Belgrade October 2024 83.jpeg",
      "Bridging Bitcoin Belgrade October 2024 84.jpeg",
      "Bridging Bitcoin Belgrade October 2024 85.jpeg",
      "Bridging Bitcoin Belgrade October 2024 86.jpeg",
      "Bridging Bitcoin Belgrade October 2024 89.jpeg",
      "Bridging Bitcoin Belgrade October 2024 91.jpeg",
      "Bridging Bitcoin Belgrade October 2024 93.jpeg",
      "Bridging Bitcoin Belgrade October 2024 99.jpeg",
      "bridging bitcoin 2024  agenda.jpeg",
      "bridging bitcoin 2024  flyer.jpeg",
      "bridging bitcoin 2024 posters.JPG",
      "bridging bitcoin belgrade october 202441.06.jpeg",
      "bridging bitcoin belgrade october 202441.10.jpeg",
      "bridging bitcoin belgrade october 202441.15.jpeg",
      "bridging bitcoin belgrade october 202441.20.jpeg",
      "bridging bitcoin belgrade october 202441.34.jpeg",
      "bridging bitcoin belgrade october 202441.40.jpeg",
    ],
    featuredFiles: [
      "Bridging Bitcoin Belgrade October 2024 89.jpeg",
      "Bridging Bitcoin Belgrade October 2024 93.jpeg",
    ],
  },
  {
    eventSlug: "rab-meetup-2022",
    eventLabel: "Bitcoin druženje",
    location: "Rab",
    dateLabel: "2022.",
    files: [
      "Rab meetup 2022.02.jpeg",
      "Rab meetup 2022.27.jpeg",
      "Rab meetup 2022.32.jpeg",
      "Rab meetup 2022.37.jpeg",
      "Rab meetup 2022.42.jpeg",
      "Rab meetup 2022.46.jpeg",
      "Rab meetup 2022.52.jpeg",
      "rab meetup 2022.jpeg",
    ],
    featuredFiles: ["Rab meetup 2022.37.jpeg"],
  },
  {
    eventSlug: "beograd-bitcoin-meetup-2024",
    eventLabel: "Bitcoin meetup",
    location: "Beograd",
    dateLabel: "2024.",
    files: ["belgrade bitcoin meetup 2024.jpeg", "belgrade meetup 2024 3.jpeg"],
    featuredFiles: ["belgrade bitcoin meetup 2024.jpeg"],
  },
  {
    eventSlug: "bitcoin-knjige-beograd-2023",
    eventLabel: "Bitcoin knjige",
    location: "Beograd",
    dateLabel: "2023.",
    files: [
      "belgrade btc books 2023 2.jpeg",
      "belgrade btc books 2023 3.jpeg",
      "belgrade btc books 2023.jpeg",
      "bitcoin books belgrade 2023.jpeg",
    ],
  },
  {
    eventSlug: "bitcoin-halloween-beograd-2023",
    eventLabel: "Bitcoin Halloween",
    location: "Beograd",
    dateLabel: "2023.",
    files: ["belgrade halloween party 2023.jpeg"],
  },
  {
    eventSlug: "halving-meetup-beograd-2024",
    eventLabel: "Halving meetup",
    location: "Beograd",
    dateLabel: "travanj 2024.",
    files: [
      "belgrade meetup halving 2.jpeg",
      "belgrade meetup halving 2024.jpeg",
    ],
  },
  {
    eventSlug: "beograd-meetup-svibanj-2022",
    eventLabel: "Bitcoin meetup",
    location: "Beograd",
    dateLabel: "svibanj 2022.",
    files: [
      "belgrade meetup may 2022 .08.jpeg",
      "belgrade meetup may 2022.01.jpeg",
      "belgrade meetup may 2022.05.jpeg",
      "belgrade meetup may 2022.10.jpeg",
      "belgrade meetup may 2022.13.jpeg",
      "belgrade meetup may 2022.24.jpeg",
      "belgrade meetup may 2022.45.jpeg",
    ],
  },
  {
    eventSlug: "beograd-meetup-svibanj-2023",
    eventLabel: "Bitcoin meetup",
    location: "Beograd",
    dateLabel: "svibanj 2023.",
    files: [
      "belgrade meetup may 2023.12.jpeg",
      "belgrade meetup may 2023.18.jpeg",
    ],
    featuredFiles: ["belgrade meetup may 2023.12.jpeg"],
  },
  {
    eventSlug: "beograd-meetup-2023",
    eventLabel: "Bitcoin meetup",
    location: "Beograd",
    dateLabel: "2023.",
    files: ["belgrade meetup september 2023.jpeg"],
  },
  {
    eventSlug: "bitcoin-jam-beograd",
    eventLabel: "Bitcoin Jam",
    location: "Beograd",
    files: ["bitcoin jam belgrade 2023.jpeg"],
  },
  {
    eventSlug: "rab-meetup-srpanj-2025",
    eventLabel: "Bitcoin druženje",
    location: "Rab",
    dateLabel: "srpanj 2025.",
    files: ["bitko rab juli.jpeg", "rab meetup juli 2025.jpg"],
  },
  {
    eventSlug: "meetup-rab",
    eventLabel: "DvadesetJedan druženje",
    location: "Rab",
    dateLabel: "kolovoz 2025.",
    files: ["rab meetup august 2025.jpeg"],
  },
  {
    eventSlug: "btc-prague-2026",
    eventLabel: "BTC Prague",
    location: "Prag",
    dateLabel: "lipanj 2026.",
    files: ["btc prague june 2026.jpeg"],
  },
  {
    eventSlug: "btc-prague-2023",
    eventLabel: "BTC Prague",
    location: "Prag",
    dateLabel: "2023.",
    files: ["btc prague may 2023.jpeg"],
  },
  {
    eventSlug: "bitcoin-van-beograd-2023",
    eventLabel: "Posjet Bitcoin vana",
    location: "Beograd",
    dateLabel: "2023.",
    files: [
      "btc van visit belgrade 2023.12.jpeg",
      "btc van visit belgrade 2023.16.jpeg",
      "btc van visit belgrade 2023.23.jpeg",
      "btc van visit belgrade june 2023 2.jpeg",
      "btc van visit belgrade june 2023 3.jpeg",
      "btc van visit belgrade june 2023 4.jpeg",
      "btc van visit belgrade june 2023 5.jpeg",
      "btc van visit belgrade june 2023.jpeg",
    ],
    featuredFiles: ["btc van visit belgrade 2023.23.jpeg"],
  },
  {
    eventSlug: "btcpay-server-beograd-2023",
    eventLabel: "BTCPay Server prezentacija",
    location: "Beograd",
    dateLabel: "2023.",
    files: [
      "btcpayserver presentation belgrade 2.jpeg",
      "btcpayserver presentation belgrade.jpeg",
    ],
  },
  {
    eventSlug: "btc-prague-2024",
    eventLabel: "BTC Prague",
    location: "Prag",
    dateLabel: "lipanj 2024.",
    files: [
      "BTC prague june 2024.jpeg",
      "btcprague 2024 2.jpeg",
      "btcprague 2024 3.jpeg",
      "btcprague 2024 4.jpeg",
      "btcprague 2024 5.jpeg",
      "btcprague 2024 6.jpeg",
      "btcprague 2024.jpeg",
    ],
  },
  {
    eventSlug: "hub21-otvaranje-beograd-2023",
    eventLabel: "Otvaranje Hub21",
    location: "Beograd",
    dateLabel: "2023.",
    files: ["hub21 belgrade opening 2023.jpeg"],
  },
  {
    eventSlug: "kraljevica-meetup-ozujak-2024",
    eventLabel: "Bitcoin meetup",
    location: "Kraljevica",
    dateLabel: "ožujak 2024.",
    files: [
      "kraljevica meetup 2024 2.jpeg",
      "kraljevica meetup 2024 4.jpeg",
      "kraljevica meetup 2024 5.jpeg",
      "kraljevica meetup 2024 6.jpeg",
      "kraljevica meetup 2024.jpeg",
    ],
  },
  {
    eventSlug: "kraljevica-meetup-kolovoz-2024",
    eventLabel: "Bitcoin meetup",
    location: "Kraljevica",
    dateLabel: "kolovoz 2024.",
    files: ["kraljevica meetup august 2024.jpeg"],
    featuredFiles: ["kraljevica meetup august 2024.jpeg"],
  },
  {
    eventSlug: "plan-b-lugano-2024",
    eventLabel: "Plan ₿",
    location: "Lugano",
    dateLabel: "2024.",
    files: [
      "lugano 2024 planb 2.jpeg",
      "lugano 2024 planb.jpeg",
      "lugano satoshi statue 2024.jpeg",
    ],
  },
  {
    eventSlug: "bitcoin-konferencija-maribor-2024",
    eventLabel: "Bitcoin konferencija",
    location: "Maribor",
    dateLabel: "2024.",
    files: [
      "maribor btc conference october 2024 2.jpeg",
      "maribor conference 2024.jpeg",
      "maribor conference november 2024 3.jpeg",
      "maribor conference november 2024.jpeg",
      "maribor conferrence 2024 4.jpeg",
    ],
    featuredFiles: ["maribor conference november 2024.jpeg"],
  },
  {
    eventSlug: "bitcoin-konferencija-podgorica-2024",
    eventLabel: "Bitcoin konferencija",
    location: "Podgorica",
    dateLabel: "2024.",
    files: [
      "podgorica conference 2024 2.jpeg",
      "podgorica conference 2024 3.jpeg",
      "podgorica conference 2024.jpeg",
    ],
    featuredFiles: ["podgorica conference 2024 3.jpeg"],
  },
  {
    eventSlug: "revolution-rocks-belgrade-2026",
    eventLabel: "Revolution.Rocks",
    location: "Beograd",
    dateLabel: "lipanj 2026.",
    files: [
      "revolution rocks belgrade june 2026 3.jpeg",
      "revolution rocks belgrade june 2026 5.jpeg",
      "revolution rocks belgrade june 2026 9.jpeg",
    ],
    featuredFiles: ["revolution rocks belgrade june 2026 3.jpeg"],
  },
  {
    eventSlug: "rockstar-prezentacija-beograd-2024",
    eventLabel: "Rockstar prezentacija",
    location: "Beograd",
    dateLabel: "2024.",
    files: ["rockstar belgrade presentation may 2024.jpeg"],
  },
  {
    eventSlug: "rockstar-posjet-beograd",
    eventLabel: "Rockstar posjet",
    location: "Beograd",
    files: ["rockstar belgrade visit.jpeg"],
  },
  {
    eventSlug: "posjet-hub21-beograd",
    eventLabel: "Posjet Hub21",
    location: "Beograd",
    files: [
      "samson hub visit 2024.jpeg",
      "samson mow belgrade visit 2024 2.jpeg",
      "samson mow belgrade visit 2024.jpeg",
      "samson mow visit 2024.33.jpeg",
      "samson mow visit 2024.38.jpeg",
      "samson mow visit 2024.50.jpeg",
    ],
  },
  {
    eventSlug: "sofia-bitcoin-2025",
    eventLabel: "Bitcoin događaj",
    location: "Sofija",
    dateLabel: "listopad 2025.",
    files: ["sofia btc october 2025.jpeg"],
  },
  {
    eventSlug: "warsaw-bitcoin-film-fest-2024",
    eventLabel: "Bitcoin Film Fest",
    location: "Varšava",
    dateLabel: "2024.",
    files: ["warsaw btc film fest 2024.jpeg"],
  },
  {
    eventSlug: "btc-beer-nis",
    eventLabel: "BTC Beer",
    location: "Niš",
    files: ["btc beer nis october 2024.jpeg"],
  },
]

export const eventGalleries = Object.fromEntries(
  galleryDefinitions.map((definition) => {
    const gallery = createGallery(definition)
    return [gallery.eventSlug, gallery]
  }),
) as Record<string, EventGallery>

export const generalCommunityPhotos: GalleryPhoto[] = [
  {
    src: eventImagePath("Braiin mining pool presentation belgrade 2024.jpeg"),
    alt: "Plakat za Bitcoin Mining prezentaciju u Beogradu.",
    caption: "Događaj u Beogradu, godina navedena u nazivu datoteke: 2024.",
  },
  {
    src: eventImagePath("belgrade uasf hat 2024.jpeg"),
    alt: "Sudionik lokalne Bitcoin zajednice s UASF kapom.",
    caption: "Beogradska Bitcoin zajednica; godina nije potvrđena.",
  },
  {
    src: eventImagePath("bitcoin informacija flajer.jpeg"),
    alt: "Informativni Bitcoin letci na stolu.",
    caption: "Materijali zajednice; događaj nije potvrđen.",
  },
  {
    src: eventImagePath("bitcoin magazines belgrade 2024 3.jpeg"),
    alt: "Bitcoin časopisi u prostoru zajednice u Beogradu.",
    caption: "Materijali zajednice u Beogradu, 2024.",
  },
  {
    src: eventImagePath("bitcoin shirt 2024.jpeg"),
    alt: "DvadesetJedan Bitcoin majica na narančastoj podlozi.",
    caption: "Predmet zajednice, 2024.",
  },
  {
    src: eventImagePath("bitko badnjak beograd 2024.jpeg"),
    alt: "Blagdanski Bitko crtež.",
    caption: "Rad zajednice u Beogradu, 2024.",
  },
  {
    src: eventImagePath("bitko nalepnice.jpeg"),
    alt: "Bitko naljepnice na metalnoj površini.",
    caption: "Materijali zajednice; događaj nije potvrđen.",
  },
  {
    src: eventImagePath("btcprague 2024 8.jpeg"),
    alt: "Pozornica Bitcoin konferencije u Pragu.",
    caption: "Godina u nazivu datoteke proturječi metapodacima.",
  },
  {
    src: eventImagePath("burning the ocean.jpeg"),
    alt: "Bitcoin umjetnički rad pod naslovom Burning the Ocean.",
    caption: "Umjetnički rad; događaj nije potvrđen.",
  },
  {
    src: eventImagePath("heatbit presentation belgrade august 2023.jpeg"),
    alt: "Najava Heatbit prezentacije u beogradskom Hub21 prostoru.",
    caption: "Arhivska najava, kolovoz 2023.",
  },
  {
    src: eventImagePath("home mining bitaxe.jpeg"),
    alt: "Dva Bitaxe uređaja za kućno rudarenje Bitcoina.",
    caption: "Praktični Bitcoin hardver; događaj nije potvrđen.",
  },
  {
    src: eventImagePath("hub21 photo books.jpg"),
    alt: "Knjiga Bitcoin Clarity u prostoru Hub21.",
    caption: "Hub21 u Beogradu; događaj nije potvrđen.",
  },
]

export const communityArchivePhotos = [
  ...Object.values(eventGalleries).flatMap((gallery) => gallery.photos),
  ...generalCommunityPhotos,
]

export function getEventGallery(eventSlug: string) {
  return eventGalleries[eventSlug]
}
