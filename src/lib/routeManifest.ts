import type { SeoMetadata } from "@/lib/seo"
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo"

export const coreRouteManifest: SeoMetadata[] = [
  {
    path: "/",
    title: "DvadesetJedan | Regionalni Bitcoin signal",
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
    path: "/doprinesi/",
    title: "Doprinesi | DvadesetJedan",
    description:
      "Načini kako doprinijeti DvadesetJedan zajednici kroz članke, prijevode, događaje, kod i kvalitetne Bitcoin resurse.",
    routeType: "page",
  },
]
