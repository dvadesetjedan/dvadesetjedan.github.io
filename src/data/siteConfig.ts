export const siteConfig = {
  siteName: "DvadesetJedan",
  siteUrl: "https://dvadesetjedan.com",
  githubPagesUrl: "https://dvadesetjedan.github.io",
  defaultTitle: "DvadesetJedan | Regionalni Bitcoin signal",
  defaultDescription:
    "Bitcoin signal za ljude koji govore našim jezicima: članci, livestream, događaji i zajednica bez tradinga, tokena i obećanja zarade.",
  defaultOgImage: "/social-preview.svg",
  locale: "hr_HR",
  languagePolicy:
    "Piši regionalno razumljivo na latinici. Prihvatljive su hrvatska, srpska, bosanska i crnogorska varijanta; cilj je jasnoća, ne jezična uniformnost.",
  socials: {
    youtube: "https://www.youtube.com/@dvadesetjedan/streams",
    telegram: "https://t.me/+ud6ARwb7rX5lZjU0",
    github: "https://github.com/dvadesetjedan/dvadesetjedan.github.io",
    meetup: "https://www.meetup.com/dvadeset-jedan/",
    twentyOneWorld: "https://twentyone.world/",
  },
  disclaimers: {
    educationalOnly: "Sadržaj je obrazovne naravi.",
    noFinancialAdvice: "Ne predstavlja financijski savjet.",
    noLegalAdvice: "Ne predstavlja pravni savjet.",
    noTaxAdvice: "Ne predstavlja porezni savjet.",
    bitcoinOnly: "DvadesetJedan je Bitcoin-only projekt.",
  },
} as const

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path

  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${siteConfig.siteUrl}${normalizedPath}`
}
