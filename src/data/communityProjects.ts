export type CommunityProjectCategory =
  | "education"
  | "translation"
  | "event"
  | "video"
  | "writing"
  | "regional-community"
  | "tool"
  | "environment"
  | "audio"
  | "other"

export type CommunityProjectRelationship =
  | "member-project"
  | "community-initiative"
  | "regional-partner"

export type CommunityProjectStatus = "active" | "planned" | "archive" | "draft"

export type CommunityProjectLinkType =
  | "website"
  | "youtube"
  | "pdf"
  | "github"
  | "telegram"
  | "nostr"
  | "donation"
  | "instagram"
  | "substack"
  | "spotify"
  | "fountain"
  | "event"
  | "other"

export type CommunityProjectLink = {
  label: string
  href: string
  type: CommunityProjectLinkType
  public: boolean
}

export type CommunityProject = {
  slug: string
  title: string
  displayName?: string
  personName?: string
  category: CommunityProjectCategory
  secondaryCategories?: CommunityProjectCategory[]
  summary: string
  description: string[]
  status: CommunityProjectStatus
  relationship: CommunityProjectRelationship
  tags: string[]
  links: CommunityProjectLink[]
  topics?: string[]
  featured?: boolean
  image?: string
  consentConfirmed: boolean
  needsDetails?: boolean
  donationNote?: string
  contactNote?: string
  lastVerified?: string
}

export const communityProjectCategoryLabels: Record<
  CommunityProjectCategory,
  string
> = {
  education: "Edukacija",
  translation: "Prijevod",
  event: "Događaj",
  video: "Video",
  writing: "Pisanje",
  "regional-community": "Regionalna zajednica",
  tool: "Alat",
  environment: "Ekologija",
  audio: "Audio",
  other: "Ostalo",
}

export const communityProjectStatusLabels: Record<
  CommunityProjectStatus,
  string
> = {
  active: "Aktivno",
  planned: "U planu",
  archive: "Arhiva",
  draft: "Nacrt",
}

export const communityProjectRelationshipLabels: Record<
  CommunityProjectRelationship,
  string
> = {
  "member-project": "Projekt člana zajednice",
  "community-initiative": "Inicijativa iz zajednice",
  "regional-partner": "Regionalna poveznica",
}

export const communityProjects: CommunityProject[] = [
  {
    slug: "bitchamler",
    title: "BitChamler",
    displayName: "BitChamler ekipa",
    personName: "Toni",
    category: "environment",
    secondaryCategories: ["video", "education", "audio"],
    summary:
      "Čiste rijeke, izvlače staro gvožđe i pretvaraju prikupljenu vrijednost u Bitcoin.",
    description: [
      "BitChamler je projekt iz Srbije koji spaja lokalnu akciju, ekologiju, Bitcoin edukaciju i stvarni rad na terenu.",
      "Kroz video serijale dokumentiraju čišćenje rijeka, magnet fishing, praktičnu uporabu Bitcoina i kratka objašnjenja Bitcoin pojmova.",
      "Njihov sadržaj uključuje serijal “Od otpada do Bitkoina”, kratka objašnjenja Bitcoin pojmova, primjere plaćanja Bitcoinom, audio priče o Bitcoinu i srpski audio prijevod knjige Bitcoin Standard.",
      "Ovo nije službeni projekt DvadesetJedan zajednice. Projekt vodi BitChamler ekipa, a DvadesetJedan ga prikazuje jer je dobar primjer Bitcoin-only inicijative iz regionalne zajednice.",
    ],
    status: "active",
    relationship: "member-project",
    tags: [
      "Bitcoin-only",
      "Video",
      "Ekologija",
      "Edukacija",
      "Audio",
      "Bitcoin u praksi",
      "Srbija",
      "Od otpada do Bitcoina",
    ],
    links: [
      {
        label: "YouTube kanal",
        href: "https://www.youtube.com/@bitchamler",
        type: "youtube",
        public: true,
      },
      {
        label: "Podrži na Geyseru",
        href: "https://geyser.fund/project/bitchamler",
        type: "donation",
        public: true,
      },
      {
        label: "Lightning donacija",
        href: "https://coinos.io/bitchamler/receive",
        type: "donation",
        public: true,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/bitchamler",
        type: "instagram",
        public: true,
      },
      {
        label: "Nostr",
        href: "npub197dv7sgfyr64zeqf3jmhd2s2v28arkxv567wd88zrwkl0ae63qmsx7mk00",
        type: "nostr",
        public: true,
      },
      {
        label: "Fountain.fm",
        href: "https://fountain.fm/artist/6xlkqjMBSj8VuyOGkovD",
        type: "fountain",
        public: true,
      },
      {
        label: "Spotify",
        href: "https://open.spotify.com/show/1bgPT6i0XepDnNlJTP1IT8",
        type: "spotify",
        public: true,
      },
    ],
    featured: true,
    consentConfirmed: true,
    needsDetails: false,
    donationNote: "Podrška ide izravno BitChamler projektu.",
    // TODO: Add Toni Telegram contact only after explicit public consent.
    contactNote: "Privatni kontakt se ne prikazuje javno bez dodatne potvrde.",
  },
  {
    slug: "croatianhodl",
    title: "CroatianHODL",
    displayName: "CroatianHODL",
    personName: "Marin",
    category: "education",
    secondaryCategories: ["video"],
    summary: "Edukativni Bitcoin video sadržaj na hrvatskom jeziku.",
    description: [
      "CroatianHODL je edukativni YouTube kanal koji vodi Marin, član DvadesetJedan zajednice.",
      "Kanal je namijenjen ljudima koji žele razumjeti Bitcoin kroz video sadržaj na hrvatskom jeziku.",
      "Ovo nije službeni projekt DvadesetJedan zajednice. DvadesetJedan ga prikazuje jer doprinosi lokalnom Bitcoin obrazovanju i pomaže ljudima iz regije učiti na jeziku koji razumiju prirodno.",
    ],
    status: "active",
    relationship: "member-project",
    tags: [
      "Bitcoin-only",
      "Edukacija",
      "Video",
      "Hrvatski jezik",
      "Bitcoin za početnike",
    ],
    links: [
      {
        label: "YouTube kanal",
        href: "https://www.youtube.com/@CroatianHODL",
        type: "youtube",
        public: true,
      },
    ],
    featured: true,
    consentConfirmed: true,
    needsDetails: true,
  },
  {
    slug: "lux-bitcoin-clanci-i-prijevodi",
    title: "Lux — Bitcoin članci i prijevodi",
    displayName: "Lux",
    category: "writing",
    secondaryCategories: ["translation", "education"],
    summary:
      "Bitcoin tekstovi, prijevodi i korisni materijali kroz Luxov Substack.",
    description: [
      "Lux je član DvadesetJedan zajednice koji piše i dijeli Bitcoin tekstove, prijevode i korisne materijale kroz svoj Substack.",
      "DvadesetJedan ga prikazuje kao primjer člana zajednice koji doprinosi pisanom Bitcoin signalu na našem jeziku.",
      "Ovo nije službeni projekt DvadesetJedan zajednice. Lux sam uređuje svoj Substack i sadržaj koji tamo objavljuje.",
    ],
    status: "active",
    relationship: "member-project",
    tags: ["Bitcoin-only", "Članci", "Prijevodi", "Edukacija", "Substack"],
    links: [
      {
        label: "Luxov Substack",
        href: "https://luxb.substack.com/",
        type: "substack",
        public: true,
      },
    ],
    featured: true,
    consentConfirmed: true,
    needsDetails: true,
  },
  {
    slug: "bitcoin-diploma-na-nasem-jeziku",
    title: "Bitcoin Diploma na našem jeziku",
    displayName: "Bitcoin Diploma prevod",
    personName: "Dalibor",
    category: "translation",
    secondaryCategories: ["education"],
    summary:
      "Prevod Bitcoin Diploma edukativnog programa za ljude koji žele da uče o Bitcoinu na našem jeziku.",
    description: [
      "Bitcoin Diploma je edukativni program inicijative My First Bitcoin.",
      "Dalibor, član DvadesetJedan zajednice, radi na tome da materijali Bitcoin Diploma programa budu dostupni na našem jeziku.",
      "Cilj je da strukturirano Bitcoin obrazovanje približi ljudima iz regiona i olakša buduće radionice, škole ili lokalne edukativne susrete.",
    ],
    status: "active",
    relationship: "member-project",
    tags: [
      "Bitcoin-only",
      "Edukacija",
      "Prevod",
      "Bitcoin Diploma",
      "My First Bitcoin",
    ],
    links: [
      {
        label: "My First Bitcoin",
        href: "https://myfirstbitcoin.org/",
        type: "website",
        public: true,
      },
      {
        label: "Preuzmi Bitcoin Diploma PDF",
        href: "/files/bitcoin-diploma.pdf",
        type: "pdf",
        public: true,
      },
    ],
    featured: false,
    consentConfirmed: true,
    needsDetails: false,
  },
  {
    slug: "bitcoin-filozofija-2022",
    title: "Bitcoin Filozofija 2022.",
    displayName: "Bitcoin Filozofija 2022.",
    personName: "Matija",
    category: "education",
    secondaryCategories: ["video"],
    summary:
      "Arhiva 21 duljeg razgovora o slobodi, odgovornosti, privatnosti, energiji, dugu, prirodnom pravu i drugim filozofskim temama oko Bitcoina.",
    description: [
      "Bitcoin Filozofija 2022. je serijal od 21 duljeg razgovora objavljenog na DvadesetJedan YouTube kanalu.",
      "Matija je vodio razgovore u ovom serijalu i kroz njih otvarao filozofske, društvene i praktične teme oko Bitcoina.",
      "Teme serijala uključuju slobodu, odgovornost, privatnost, Lightning, Bitcoin kulturu, toksični maksimalizam, dug, energiju, prirodno pravo, cenzuru, Bitcoin standard i druga pitanja koja se nalaze ispod površine svakodnevnih Bitcoin rasprava.",
      "Serijal je danas arhiva ranog DvadesetJedan sadržaja i dobar ulaz za ljude koje zanima dublji, filozofski sloj Bitcoina.",
      "Ovo nije zaseban vanjski projekt, nego arhivski doprinos člana zajednice kroz DvadesetJedan kanal.",
    ],
    status: "archive",
    relationship: "community-initiative",
    tags: [
      "Bitcoin-only",
      "Filozofija",
      "Edukacija",
      "Video",
      "Arhiva",
      "Sloboda",
      "Odgovornost",
      "Privatnost",
      "Bitcoin standard",
    ],
    links: [
      {
        label: "YouTube playlista",
        href: "https://www.youtube.com/playlist?list=PLZip6DrfABU_3y27Crgg3qSe2AD72EpMw",
        type: "youtube",
        public: true,
      },
    ],
    topics: [
      "Sloboda i odgovornost",
      "Zašto Bitcoin?",
      "Bitcoin edukacija i kultura",
      "Privatnost i Lightning",
      "Toksični maksimalizam",
      "Razvoj Bitcoina i bitcoinera",
      "Pitanja o budućnosti",
      "Bitcoin mijenja ljude",
      "Sloboda govora",
      "Fiat zvijer",
      "Marketing Bitcoina",
      "Prirodno pravo",
      "Očekivana vrijednost",
      "Energija",
      "Uvod u Bitcoin standard",
      "Problemi zaduživanja",
      "Je li Bitcoin dovoljan?",
      "Bitcoin i cenzura",
      "Baltic Honeybadger 2022",
      "Kako smo tu završili?",
      "Od tave/tiganja do Bitcoina",
    ],
    featured: false,
    consentConfirmed: true,
    needsDetails: false,
  },
  {
    slug: "villa-btc",
    title: "Villa BTC",
    displayName: "Villa BTC",
    personName: "Grgo",
    category: "event",
    summary:
      "Bitcoin druženje u Splitu koje okuplja bitcoinere kroz razgovore, povezivanje i mediteransko iskustvo.",
    description: [
      "Villa BTC je Bitcoin događaj u Splitu koji okuplja manju grupu bitcoinera kroz druženje, razgovore i program uživo.",
      "Projekt vodi Grgo, član DvadesetJedan zajednice.",
      "DvadesetJedan ga prikazuje kao primjer regionalne Bitcoin inicijative i događaja koji povezuje ljude iz zajednice.",
    ],
    status: "active",
    relationship: "member-project",
    tags: ["Bitcoin-only", "Događaj", "Split", "Villa BTC", "Zajednica"],
    links: [
      {
        label: "Villa BTC",
        href: "https://villabtc.net/",
        type: "website",
        public: true,
      },
      {
        label: "Događaj na DvadesetJedan",
        href: "/dogadaji/villa-btc-2026/",
        type: "event",
        public: true,
      },
    ],
    featured: true,
    consentConfirmed: true,
    needsDetails: false,
  },
  {
    slug: "bitcoin-drustvo-slovenije",
    title: "Bitcoin Društvo Slovenije",
    displayName: "Bitcoin Društvo Slovenije",
    category: "regional-community",
    summary:
      "Slovenska Bitcoin zajednica s vlastitim događajima, edukacijom i lokalnim okupljanjima.",
    description: [
      "Bitcoin Društvo Slovenije je regionalna Bitcoin zajednica sa svojim događajima, edukacijom i lokalnim okupljanjima.",
      "Dio ljudi iz Slovenije sudjeluje i u DvadesetJedan razgovorima, pa ovaj unos služi kao regionalna poveznica, a ne kao službeni DvadesetJedan projekt.",
    ],
    status: "active",
    relationship: "regional-partner",
    tags: ["Bitcoin", "Slovenija", "Regionalna zajednica", "Događaji"],
    links: [
      {
        label: "Bitcoin Društvo Slovenije",
        href: "https://bitcoin.si/",
        type: "website",
        public: true,
      },
    ],
    featured: false,
    consentConfirmed: true,
    needsDetails: true,
  },
]

export const publishedCommunityProjects = communityProjects.filter(
  (project) => project.status !== "draft" && project.consentConfirmed,
)
