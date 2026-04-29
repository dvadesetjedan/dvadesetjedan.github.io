import {
  ARTICLES_URL,
  BEGINNERS_URL,
  BITCOIN_CORE_URL,
  COMMUNITY_URL,
  CONTRIBUTE_URL,
  FAQ_URL,
  GITHUB_URL,
  LIVESTREAM_URL,
  MEMPOOL_URL,
  WHITEPAPER_URL,
  media,
} from "@/data/site"

export type ResourceItem = {
  title: string
  text: string
  href: string
  external: boolean
}

export type ResourceGroup = {
  title: string
  items: ResourceItem[]
}

export const resourceGroups: ResourceGroup[] = [
  {
    title: "Osnovni Bitcoin izvori",
    items: [
      {
        title: "Bitcoin whitepaper",
        text: "Izvorni tekst koji opisuje Bitcoin kao peer-to-peer elektronički novac.",
        href: WHITEPAPER_URL,
        external: true,
      },
      {
        title: "Bitcoin Core",
        text: "Referentni open-source softver za Bitcoin mrežu.",
        href: BITCOIN_CORE_URL,
        external: true,
      },
      {
        title: "Mempool.space",
        text: "Pregled stanja Bitcoin mreže, blokova, naknada i transakcija.",
        href: MEMPOOL_URL,
        external: true,
      },
      {
        title: "TwentyOne.World",
        text: "Otvoreni koncept za lokalne Bitcoin zajednice i javni signal.",
        href: media.twentyOneUrl,
        external: true,
      },
    ],
  },
  {
    title: "DvadesetJedan resursi",
    items: [
      {
        title: "Počni ovdje",
        text: "Početni put za ljude koji tek ulaze u Bitcoin.",
        href: BEGINNERS_URL,
        external: false,
      },
      {
        title: "Članci",
        text: "Pisani Bitcoin signal i tekstovi za mirnije razumijevanje.",
        href: ARTICLES_URL,
        external: false,
      },
      {
        title: "Livestream",
        text: "Razgovori, pitanja uživo i regionalna perspektiva.",
        href: LIVESTREAM_URL,
        external: false,
      },
      {
        title: "FAQ",
        text: "Kratki odgovori o projektu, zajednici i Bitcoin-only pristupu.",
        href: FAQ_URL,
        external: false,
      },
    ],
  },
  {
    title: "Zajednica",
    items: [
      {
        title: "Telegram grupa",
        text: "Otvoreni prostor za pitanja, prijedloge i povezivanje.",
        href: COMMUNITY_URL,
        external: true,
      },
      {
        title: "Doprinesi",
        text: "Načini kako pomoći člancima, prijevodima, događajima ili kodom.",
        href: CONTRIBUTE_URL,
        external: false,
      },
      {
        title: "GitHub repozitorij",
        text: "Javni kod stranice i mjesto za tehničke doprinose.",
        href: GITHUB_URL,
        external: true,
      },
    ],
  },
]
