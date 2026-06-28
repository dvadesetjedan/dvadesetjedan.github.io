import type { SeoMetadata } from "@/lib/seo"
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo"

export const coreRouteManifest: SeoMetadata[] = [
  {
    path: "/",
    title: "DvadesetJedan | Bitcoin Zajednica",
    description:
      "Bitcoin signal za ljude koji govore našim jezicima: članci, livestream, događaji i zajednica bez tradinga, tokena i obećanja zarade.",
    routeType: "home",
    jsonLd: [organizationJsonLd(), websiteJsonLd()],
  },
  {
    path: "/o-projektu/",
    title: "O projektu | DvadesetJedan",
    description:
      "DvadesetJedan je regionalni Bitcoin-only signal na našem jeziku i dio otvorenog TwentyOne.World koncepta.",
    routeType: "page",
  },
  {
    path: "/pocni-ovdje/",
    title: "Počni ovdje | DvadesetJedan",
    description:
      "Početni put za ljude koji žele razumjeti Bitcoin bez žurbe, hypea i početničkih sigurnosnih grešaka.",
    routeType: "page",
  },
  {
    path: "/teme/",
    title: "Teme | DvadesetJedan",
    description:
      "Teme kroz koje DvadesetJedan obrađuje Bitcoin: novac, sigurnost, štednja, zajednica i dugoročno razmišljanje.",
    routeType: "page",
  },
  {
    path: "/faq/",
    title: "Česta pitanja | DvadesetJedan",
    description:
      "Kratki odgovori za ljude koji upoznaju DvadesetJedan, Bitcoin-only pristup i načine uključivanja u zajednicu.",
    routeType: "page",
  },
  {
    path: "/resursi/",
    title: "Resursi | DvadesetJedan",
    description:
      "Polazna mjesta za učenje o Bitcoinu, provjeru mreže i kvalitetne izvore bez crypto buke.",
    routeType: "page",
  },
  {
    path: "/sigurnost/",
    title: "Sigurnost | DvadesetJedan",
    description:
      "Početnički Bitcoin sigurnosni vodič: seed phrase, privatni ključevi, exchange, phishing, Telegram i meetupi.",
    routeType: "page",
  },
  {
    path: "/clanci/",
    title: "Članci | DvadesetJedan",
    description:
      "Pisani Bitcoin signal DvadesetJedan zajednice: početni redoslijed čitanja, tematski putokazi i arhiva tekstova.",
    routeType: "page",
  },
  {
    path: "/livestream/",
    title: "Livestream | DvadesetJedan",
    description:
      "Bitcoin livestream DvadesetJedan zajednice: vijesti, komentari, razgovori, pitanja uživo i regionalna perspektiva.",
    routeType: "page",
  },
  {
    path: "/dogadaji/",
    title: "Događaji | DvadesetJedan",
    description:
      "Nadolazeći Bitcoin događaji, arhiva druženja i način kako predložiti lokalni događaj kroz DvadesetJedan zajednicu.",
    routeType: "page",
  },
  {
    path: "/bitcoin-na-univerzitetima-beograd/",
    title: "Bitcoin na univerzitetima: Beograd 2026 | DvadesetJedan",
    description:
      "Serija predavanja i radionica za studente u Beogradu o Bitcoinu kao novcu, tehnologiji, štednji, sigurnosti i osobnoj financijskoj odgovornosti.",
    ogTitle: "Bitcoin na univerzitetima: Beograd 2026",
    ogDescription:
      "Obrazovni serijal DvadesetJedan za studente u Beogradu: Bitcoin kao novac, tehnologija, štednja i sigurnost — bez trading hypea i bez altcoina.",
    routeType: "page",
  },
  {
    path: "/bitcoin-kao-novac-beograd-2026/",
    title: "Bitcoin kao novac: Beograd 2026 | DvadesetJedan",
    description:
      "Pilot edukacijski dan u Beogradu: jedno fakultetsko predavanje i jedan otvoreni meetup o Bitcoinu kao novcu, tehnologiji, štednji i osobnoj odgovornosti.",
    ogTitle: "Bitcoin kao novac: Beograd 2026",
    ogDescription:
      "DvadesetJedan pokreće pilot edukacijski dan u Beogradu: Bitcoin kao novac, jedno fakultetsko predavanje i jedan otvoreni meetup.",
    image: "/images/bitcoin-kao-novac-beograd-2026-hero.png",
    routeType: "page",
  },
  {
    path: "/gradovi/",
    title: "Gradovi | DvadesetJedan",
    description:
      "Regionalne DvadesetJedan ulazne točke za gradove, lokalne događaje i pokretanje Bitcoin-only susreta.",
    routeType: "page",
  },
  {
    path: "/zajednica/",
    title: "Zajednica | DvadesetJedan",
    description:
      "Ulaz u DvadesetJedan zajednicu: Telegram, YouTube, događaji, načela razgovora i Bitcoin-only pravila.",
    routeType: "page",
  },
  {
    path: "/iz-zajednice/",
    title: "Iz zajednice | DvadesetJedan",
    description:
      "Projekti, prijevodi, događaji i edukacijske inicijative ljudi iz DvadesetJedan kruga.",
    routeType: "communityProjects",
  },
  {
    path: "/doprinesi/",
    title: "Doprinesi | DvadesetJedan",
    description:
      "Načini kako doprinijeti DvadesetJedan zajednici kroz članke, prijevode, događaje, kod i kvalitetne Bitcoin resurse.",
    routeType: "page",
  },
]
