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
  terms?: { term: string; explanation: string }[]
  needsShownotes?: boolean
}

export const episodes: EpisodeEntry[] = [
  {
    slug: "dvadesetjedan-livestream-2026-06-21",
    title: "DvadesetJedan Uživo - epizoda emitirana 21. 6. 2026.",
    summary:
      "Bitcoin livestream DvadesetJedan zajednice s razgovorom o aktualnim temama, pitanjima i regionalnoj perspektivi.",
    youtubeUrl: "https://www.youtube.com/watch?v=J-Yw-G-bImc",
    publishedAt: "2026-06-21",
    needsShownotes: true,
  },
  {
    slug: "dvadesetjedan-livestream-2026-06-14",
    title: "DvadesetJedan Uživo - epizoda emitirana 14. 6. 2026.",
    summary:
      "Bitcoin livestream DvadesetJedan zajednice s razgovorom o aktualnim temama, pitanjima i regionalnoj perspektivi.",
    youtubeUrl: "https://www.youtube.com/watch?v=NWgWBywiXVM",
    publishedAt: "2026-06-14",
    needsShownotes: true,
  },
  {
    slug: "dvadesetjedan-livestream-2026-06-07",
    title: "DvadesetJedan Uživo - epizoda emitirana 7. 6. 2026.",
    summary:
      "Bitcoin livestream DvadesetJedan zajednice s razgovorom o aktualnim temama, pitanjima i regionalnoj perspektivi.",
    youtubeUrl: "https://www.youtube.com/live/kCBeqS-k7Ak?si=S_YdbAp0iTFLp56F",
    publishedAt: "2026-06-07",
    needsShownotes: true,
  },
  {
    slug: "dvadesetjedan-livestream-2026-05-31",
    title: "DvadesetJedan Uživo - epizoda emitirana 31. 5. 2026.",
    summary:
      "Bitcoin livestream DvadesetJedan zajednice s razgovorom o aktualnim temama, pitanjima i regionalnoj perspektivi.",
    youtubeUrl: "https://www.youtube.com/live/S9WmtBVGVY0?si=mdlw-4nOSwtMIJf5",
    publishedAt: "2026-05-31",
    needsShownotes: true,
  },
  {
    slug: "dvadesetjedan-livestream-2026-05-24",
    title: "DvadesetJedan Uživo - epizoda emitirana 24. 5. 2026.",
    summary:
      "Bitcoin livestream DvadesetJedan zajednice s razgovorom o aktualnim temama, pitanjima i regionalnoj perspektivi.",
    youtubeUrl: "https://www.youtube.com/live/DKjB-gg61bo?si=EYnQ7MqQPKBnXtLt",
    publishedAt: "2026-05-24",
    needsShownotes: true,
  },
  {
    slug: "dvadesetjedan-livestream-2026-05-17",
    title: "DvadesetJedan Uživo - epizoda emitirana 17. 5. 2026.",
    summary:
      "Bitcoin livestream DvadesetJedan zajednice s razgovorom o aktualnim temama, pitanjima i regionalnoj perspektivi.",
    youtubeUrl: "https://www.youtube.com/live/P01tcWSENpc?si=57hQTcjeSmiBjsxB",
    publishedAt: "2026-05-17",
    needsShownotes: true,
  },
  {
    slug: "dvadesetjedan-livestream-2026-05-10",
    title: "DvadesetJedan Uživo - epizoda emitirana 10. 5. 2026.",
    summary:
      "Bitcoin livestream DvadesetJedan zajednice s razgovorom o aktualnim temama, pitanjima i regionalnoj perspektivi.",
    youtubeUrl: "https://youtube.com/live/BYV-FgTY7pQ",
    publishedAt: "2026-05-10",
    needsShownotes: true,
  },
  {
    slug: "dvadesetjedan-livestream-2026-05-03",
    title: "DvadesetJedan Uživo - epizoda emitirana 3. 5. 2026.",
    summary:
      "Bitcoin livestream DvadesetJedan zajednice s razgovorom o aktualnim temama, pitanjima i regionalnoj perspektivi.",
    youtubeUrl: "https://www.youtube.com/live/IA-HH1JMkNM?si=hmlLZYr0GQgIReQ_",
    publishedAt: "2026-05-03",
    needsShownotes: true,
  },
  {
    slug: "dvadesetjedan-livestream-2026-04-26",
    title: "DvadesetJedan Uživo - epizoda emitirana 26. 4. 2026.",
    summary:
      "Bitcoin livestream DvadesetJedan zajednice s razgovorom o aktualnim temama, pitanjima i regionalnoj perspektivi.",
    youtubeUrl: "https://www.youtube.com/live/qtV8qzJo2FQ?si=pKx4NhEiJQsH-aTP",
    publishedAt: "2026-04-26",
    needsShownotes: true,
  },
  {
    slug: "dvadesetjedan-livestream-2026-04-19",
    title: "DvadesetJedan Uživo - epizoda emitirana 19. 4. 2026.",
    summary:
      "Bitcoin livestream DvadesetJedan zajednice s razgovorom o aktualnim temama, pitanjima i regionalnoj perspektivi.",
    youtubeUrl: "https://www.youtube.com/live/Hrvw-zK64BI?si=md1uLbo6GHjk3AAc",
    publishedAt: "2026-04-19",
    needsShownotes: true,
  },
  {
    slug: "dvadesetjedan-livestream-2026-04-12",
    title: "DvadesetJedan Uživo - epizoda emitirana 12. 4. 2026.",
    summary:
      "Bitcoin livestream DvadesetJedan zajednice s razgovorom o aktualnim temama, pitanjima i regionalnoj perspektivi.",
    youtubeUrl: "https://www.youtube.com/live/22K27sRKTHw?si=tL0T8pbylM5N0fsu",
    publishedAt: "2026-04-12",
    needsShownotes: true,
  },
]
