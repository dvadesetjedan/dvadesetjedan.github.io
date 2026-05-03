export type EpisodeEntry = {
  slug: string
  title: string
  summary: string
  youtubeUrl: string
  publishedAt?: string
  summaryBullets?: string[]
  chapters?: { time: string; title: string }[]
  links?: { label: string; href: string }[]
  clips?: { label: string; href: string }[]
  transcriptUrl?: string
  relatedArticleSlugs?: string[]
  relatedEventSlugs?: string[]
}

export const episodes: EpisodeEntry[] = [
  {
    slug: "dvadesetjedan-livestream-2026-05-03",
    title: "DvadesetJedan livestream — 3.5.2026.",
    summary:
      "Bitcoin livestream DvadesetJedan zajednice s razgovorom o aktualnim temama, pitanjima i regionalnoj perspektivi.",
    youtubeUrl: "https://www.youtube.com/live/IA-HH1JMkNM?si=hmlLZYr0GQgIReQ_",
    publishedAt: "2026-05-03",
  },
  {
    slug: "dvadesetjedan-livestream-2026-04-26",
    title: "DvadesetJedan livestream — 26.4.2026.",
    summary:
      "Bitcoin livestream DvadesetJedan zajednice s razgovorom o aktualnim temama, pitanjima i regionalnoj perspektivi.",
    youtubeUrl: "https://www.youtube.com/live/qtV8qzJo2FQ?si=pKx4NhEiJQsH-aTP",
    publishedAt: "2026-04-26",
  },
  {
    slug: "dvadesetjedan-livestream-2026-04-19",
    title: "DvadesetJedan livestream — 19.4.2026.",
    summary:
      "Bitcoin livestream DvadesetJedan zajednice s razgovorom o aktualnim temama, pitanjima i regionalnoj perspektivi.",
    youtubeUrl: "https://www.youtube.com/live/Hrvw-zK64BI?si=md1uLbo6GHjk3AAc",
    publishedAt: "2026-04-19",
  },
  {
    slug: "dvadesetjedan-livestream-2026-04-12",
    title: "DvadesetJedan livestream — 12.4.2026.",
    summary:
      "Bitcoin livestream DvadesetJedan zajednice s razgovorom o aktualnim temama, pitanjima i regionalnoj perspektivi.",
    youtubeUrl: "https://www.youtube.com/live/22K27sRKTHw?si=tL0T8pbylM5N0fsu",
    publishedAt: "2026-04-12",
  },
]
