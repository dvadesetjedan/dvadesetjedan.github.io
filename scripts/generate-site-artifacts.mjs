import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const distDir = path.join(root, "dist")
const siteUrl = "https://dvadesetjedan.com"
const defaultImage = `${siteUrl}/social-preview.png`
const organizationId = `${siteUrl}/#organization`
const websiteId = `${siteUrl}/#website`

const organizationReference = {
  "@type": "Organization",
  "@id": organizationId,
  name: "DvadesetJedan",
  url: `${siteUrl}/`,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/images/bitcoin-logo.png`,
    width: 512,
    height: 512,
  },
  sameAs: [
    "https://www.youtube.com/@dvadesetjedan/streams",
    "https://t.me/+ud6ARwb7rX5lZjU0",
    "https://github.com/dvadesetjedan/dvadesetjedan.github.io",
    "https://twentyone.world/",
  ],
}

const coreRoutes = [
  [
    "/",
    "DvadesetJedan | Bitcoin Zajednica",
    "Bitcoin signal za ljude koji govore našim jezicima: članci, livestream, događaji i zajednica bez tradinga, tokena i obećanja zarade.",
  ],
  [
    "/o-projektu/",
    "O projektu | DvadesetJedan",
    "DvadesetJedan je regionalni Bitcoin-only signal na našem jeziku i dio otvorenog TwentyOne.World koncepta.",
  ],
  [
    "/pocni-ovdje/",
    "Počni ovdje | DvadesetJedan",
    "Početni put za ljude koji žele razumjeti Bitcoin bez žurbe, hypea i početničkih sigurnosnih grešaka.",
  ],
  [
    "/teme/",
    "Teme | DvadesetJedan",
    "Teme kroz koje DvadesetJedan obrađuje Bitcoin: novac, sigurnost, štednja, zajednica i dugoročno razmišljanje.",
  ],
  [
    "/faq/",
    "Česta pitanja | DvadesetJedan",
    "Kratki odgovori za ljude koji upoznaju DvadesetJedan, Bitcoin-only pristup i načine uključivanja u zajednicu.",
  ],
  [
    "/resursi/",
    "Resursi | DvadesetJedan",
    "Polazna mjesta za učenje o Bitcoinu, provjeru mreže i kvalitetne izvore bez crypto buke.",
  ],
  [
    "/sigurnost/",
    "Sigurnost | DvadesetJedan",
    "Početnički Bitcoin sigurnosni vodič: seed phrase, privatni ključevi, exchange, phishing, Telegram i meetupi.",
  ],
  [
    "/clanci/",
    "Članci | DvadesetJedan",
    "Pisani Bitcoin signal DvadesetJedan zajednice: početni redoslijed čitanja, tematski putokazi i arhiva tekstova.",
  ],
  [
    "/livestream/",
    "Livestream | DvadesetJedan",
    "Bitcoin livestream DvadesetJedan zajednice: vijesti, komentari, razgovori, pitanja uživo i regionalna perspektiva.",
  ],
  [
    "/dogadaji/",
    "Događaji | DvadesetJedan",
    "Nadolazeći Bitcoin događaji, arhiva druženja i način kako predložiti lokalni događaj kroz DvadesetJedan zajednicu.",
  ],
  [
    "/gradovi/",
    "Gradovi | DvadesetJedan",
    "Regionalne DvadesetJedan ulazne točke za gradove, lokalne događaje i pokretanje Bitcoin-only susreta.",
  ],
  [
    "/zajednica/",
    "Zajednica | DvadesetJedan",
    "Ulaz u DvadesetJedan zajednicu: Telegram, YouTube, događaji, načela razgovora i Bitcoin-only pravila.",
  ],
  [
    "/iz-zajednice/",
    "Iz zajednice | DvadesetJedan",
    "Projekti, prijevodi, događaji i edukacijske inicijative ljudi iz DvadesetJedan kruga.",
  ],
  [
    "/doprinesi/",
    "Doprinesi | DvadesetJedan",
    "Načini kako doprinijeti DvadesetJedan zajednici kroz članke, prijevode, događaje, kod i kvalitetne Bitcoin resurse.",
  ],
].map(([routePath, title, description, ogTitle, ogDescription, image]) => ({
  path: routePath,
  title,
  description,
  ogTitle,
  ogDescription,
  image,
  type:
    routePath === "/iz-zajednice/"
      ? "communityProjects"
      : routePath === "/"
        ? "website"
        : "page",
}))

function readSource(filePath) {
  return fs.readFileSync(path.join(root, filePath), "utf8")
}

function htmlToText(value = "") {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8211;|&ndash;/g, "–")
    .replace(/&#8220;|&#8221;|&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim()
}

function truncate(value, length = 180) {
  if (value.length <= length) return value
  return `${value.slice(0, length - 1).trim()}…`
}

function zagrebOffset(datePart) {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "Europe/Zagreb",
      timeZoneName: "shortOffset",
    }).formatToParts(new Date(`${datePart}T12:00:00Z`))
    const label = parts.find((part) => part.type === "timeZoneName")?.value
    const match = label?.match(/^GMT([+-])(\d{1,2})(?::(\d{2}))?$/)

    if (match) {
      return `${match[1]}${match[2].padStart(2, "0")}:${match[3] ?? "00"}`
    }
  } catch {
    // Keep a valid local ISO timestamp if this Node build has limited Intl data.
  }

  return ""
}

function normalizeDate(value) {
  if (!value) return undefined

  const trimmed = value.trim()
  const legacyDateTime = trimmed.match(
    /^(\d{4}-\d{2}-\d{2})\s+(\d{2}:\d{2}:\d{2})$/,
  )
  const normalized = legacyDateTime
    ? `${legacyDateTime[1]}T${legacyDateTime[2]}${zagrebOffset(legacyDateTime[1])}`
    : trimmed

  return Number.isNaN(new Date(normalized).getTime()) ? undefined : normalized
}

function feedDate(value) {
  const normalized = normalizeDate(value)
  if (!normalized) return undefined
  if (/^\d{4}-\d{2}-\d{2}$/.test(normalized)) {
    return `${normalized}T00:00:00Z`
  }

  return new Date(normalized).toISOString()
}

function resolveImage(image) {
  if (!image || /\/social-preview\.svg(?:[?#]|$)/i.test(image)) {
    return defaultImage
  }
  if (image.startsWith("http")) return image
  return `${siteUrl}${image.startsWith("/") ? image : `/${image}`}`
}

function imageMimeType(image) {
  const pathname = new URL(image).pathname.toLowerCase()
  if (pathname.endsWith(".webp")) return "image/webp"
  if (pathname.endsWith(".jpg") || pathname.endsWith(".jpeg")) {
    return "image/jpeg"
  }
  if (pathname.endsWith(".svg")) return "image/svg+xml"
  return "image/png"
}

function articleLanguage(languageVariant) {
  return (
    {
      regional: "hr",
      hr: "hr",
      "sr-latn": "sr-Latn",
      bs: "bs",
      me: "cnr",
      en: "en",
    }[languageVariant] ?? "hr"
  )
}

function eventLanguages(language) {
  if (!language) return "hr"

  const languages = []
  if (/hrvatsk/i.test(language)) languages.push("hr")
  if (/srpsk/i.test(language)) languages.push("sr-Latn")
  if (/bosansk/i.test(language)) languages.push("bs")
  if (/englesk/i.test(language)) languages.push("en")

  return languages.length <= 1 ? (languages[0] ?? "hr") : languages
}

function externalSourceUrl(value) {
  if (!value) return undefined

  try {
    const source = new URL(value)
    return ["dvadesetjedan.com", "www.dvadesetjedan.com"].includes(
      source.hostname,
    )
      ? undefined
      : source.href
  } catch {
    return undefined
  }
}

function youtubeVideoId(value) {
  if (!value) return undefined

  try {
    const url = new URL(value)
    if (url.hostname === "youtu.be") return url.pathname.split("/")[1]

    const queryId = url.searchParams.get("v")
    if (queryId) return queryId

    const segments = url.pathname.split("/").filter(Boolean)
    const markerIndex = segments.findIndex((segment) =>
      ["live", "embed", "shorts"].includes(segment),
    )
    return markerIndex >= 0 ? segments[markerIndex + 1] : undefined
  } catch {
    return undefined
  }
}

function readString(objectSource, key) {
  const match = objectSource.match(new RegExp(`${key}:\\s*"([^"]*)"`, "s"))
  return match?.[1]
}

function readStringArray(objectSource, key) {
  const match = objectSource.match(
    new RegExp(`${key}:\\s*\\[([^\\]]*)\\]`, "s"),
  )
  if (!match) return []
  return [...match[1].matchAll(/"([^"]*)"/g)].map((entry) => entry[1])
}

function extractObjects(source, anchor) {
  const start = source.indexOf(anchor)
  const arrayStart = source.indexOf("[", start)
  const arrayEnd = source.lastIndexOf("]")
  const arraySource = source.slice(arrayStart + 1, arrayEnd)
  const objects = []
  let depth = 0
  let objectStart = -1

  for (let index = 0; index < arraySource.length; index += 1) {
    const char = arraySource[index]
    if (char === "{") {
      if (depth === 0) objectStart = index
      depth += 1
    }
    if (char === "}") {
      depth -= 1
      if (depth === 0 && objectStart >= 0) {
        objects.push(arraySource.slice(objectStart, index + 1))
        objectStart = -1
      }
    }
  }

  return objects
}

function loadArticles() {
  return extractObjects(
    readSource("src/data/articles.ts"),
    "export const articles",
  )
    .map((objectSource) => {
      const slug = readString(objectSource, "slug")
      const title = readString(objectSource, "title")
      const date = readString(objectSource, "date")
      const excerpt = htmlToText(readString(objectSource, "excerpt"))
      const image = readString(objectSource, "image")
      const originalUrl = readString(objectSource, "originalUrl")
      const author = readString(objectSource, "author")
      const translator = readString(objectSource, "translator")
      const sourceName = readString(objectSource, "sourceName")
      const languageVariant = readString(objectSource, "languageVariant")
      const articleType = readString(objectSource, "type")
      const tags = readStringArray(objectSource, "tags")
      const topics = readStringArray(objectSource, "topics")
      const categories = readStringArray(objectSource, "categories")
      const publishedAt = normalizeDate(date)

      return slug && title
        ? {
            path: `/clanci/${slug}/`,
            title: `${title} | DvadesetJedan`,
            description: truncate(excerpt || title),
            type: "article",
            date: publishedAt,
            lastmod: publishedAt?.slice(0, 10),
            image,
            originalUrl,
            author,
            translator,
            sourceName,
            language: articleLanguage(languageVariant),
            articleType,
            tags: [...new Set([...tags, ...topics])],
            categories,
          }
        : null
    })
    .filter(Boolean)
}

function loadEvents() {
  return extractObjects(readSource("src/data/events.ts"), "export const events")
    .map((objectSource) => {
      const slug = readString(objectSource, "slug")
      const title = readString(objectSource, "title")
      const summary = readString(objectSource, "summary")
      const start = readString(objectSource, "start")
      const end = readString(objectSource, "end")
      const venue = readString(objectSource, "venue")
      const address = readString(objectSource, "address")
      const city = readString(objectSource, "city")
      const country = readString(objectSource, "country")
      const registrationUrl = readString(objectSource, "registrationUrl")
      const image = readString(objectSource, "coverImage")
      const organizer = readString(objectSource, "organizer")
      const language = readString(objectSource, "language")
      const status = readString(objectSource, "status")
      const tags = readStringArray(objectSource, "tags")
      const canonical = `${siteUrl}/dogadaji/${slug}/`
      const startDate = normalizeDate(start)
      const endDate = normalizeDate(end)

      return slug && title
        ? {
            path: `/dogadaji/${slug}/`,
            title: `${title} | DvadesetJedan`,
            description: truncate(summary || title),
            type: "event",
            date: startDate,
            image,
            jsonLd: {
              "@context": "https://schema.org",
              "@type": "Event",
              "@id": `${canonical}#event`,
              name: title,
              startDate,
              endDate,
              description: summary,
              url: canonical,
              image: resolveImage(image),
              eventStatus:
                status === "cancelled"
                  ? "https://schema.org/EventCancelled"
                  : "https://schema.org/EventScheduled",
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              inLanguage: eventLanguages(language),
              keywords: tags.length ? tags : undefined,
              location: {
                "@type": "Place",
                name: venue,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: address,
                  addressLocality: city,
                  addressCountry: country,
                },
              },
              organizer:
                organizer && organizer !== "DvadesetJedan"
                  ? { "@type": "Person", name: organizer }
                  : { "@id": organizationId },
              offers: registrationUrl
                ? {
                    "@type": "Offer",
                    url: registrationUrl,
                  }
                : undefined,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": canonical,
              },
            },
          }
        : null
    })
    .filter(Boolean)
}

function loadEpisodes() {
  return extractObjects(
    readSource("src/data/episodes.ts"),
    "export const episodes",
  )
    .map((objectSource) => {
      const slug = readString(objectSource, "slug")
      const title = readString(objectSource, "title")
      const summary = readString(objectSource, "summary")
      const publishedAt = readString(objectSource, "publishedAt")
      const youtubeUrl = readString(objectSource, "youtubeUrl")
      const videoId = youtubeVideoId(youtubeUrl)
      const uploadDate = normalizeDate(publishedAt)
      const canonical = `${siteUrl}/livestream/${slug}/`

      return slug && title
        ? {
            path: `/livestream/${slug}/`,
            title: `${title} | DvadesetJedan`,
            description: truncate(summary || title),
            type: "livestreamEpisode",
            date: uploadDate,
            lastmod: uploadDate?.slice(0, 10),
            image: videoId
              ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
              : undefined,
            jsonLd: videoId
              ? {
                  "@context": "https://schema.org",
                  "@type": "VideoObject",
                  "@id": `${canonical}#video`,
                  name: title,
                  description: truncate(summary || title),
                  thumbnailUrl: [
                    `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
                  ],
                  uploadDate,
                  embedUrl: `https://www.youtube.com/embed/${videoId}`,
                  sameAs: youtubeUrl,
                  url: canonical,
                  inLanguage: "hr",
                  publisher: { "@id": organizationId },
                  mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": canonical,
                  },
                }
              : undefined,
          }
        : null
    })
    .filter(Boolean)
}

function loadCities() {
  return extractObjects(readSource("src/data/cities.ts"), "export const cities")
    .map((objectSource) => {
      const slug = readString(objectSource, "slug")
      const name = readString(objectSource, "name")
      const summary = readString(objectSource, "summary")

      return slug && name
        ? {
            path: `/gradovi/${slug}/`,
            title: `${name} | DvadesetJedan gradovi`,
            description: truncate(summary || name),
            type: "city",
          }
        : null
    })
    .filter(Boolean)
}

function loadCommunityProjects() {
  return extractObjects(
    readSource("src/data/communityProjects.ts"),
    "export const communityProjects",
  )
    .map((objectSource) => {
      const slug = readString(objectSource, "slug")
      const title = readString(objectSource, "title")
      const summary = readString(objectSource, "summary")
      const status = readString(objectSource, "status")
      const consentConfirmed = objectSource.includes("consentConfirmed: true")
      const featured = objectSource.includes("featured: true")

      return slug && title && summary && status !== "draft" && consentConfirmed
        ? {
            path: `/iz-zajednice/${slug}/`,
            title: `${title} | DvadesetJedan`,
            description: truncate(summary || title),
            type: "communityProject",
            featured,
            jsonLd: {
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: title,
              description: summary,
              url: `${siteUrl}/iz-zajednice/${slug}/`,
              isPartOf: {
                "@type": "WebSite",
                name: "DvadesetJedan",
                url: siteUrl,
              },
            },
          }
        : null
    })
    .filter(Boolean)
}

function loadLegacyRedirects() {
  return extractObjects(
    readSource("src/data/legacyRedirects.ts"),
    "export const legacyRedirects",
  )
    .map((objectSource) => {
      const from = readString(objectSource, "from")
      const to = readString(objectSource, "to")
      const reason = readString(objectSource, "reason")

      return from && to ? { from, to, reason } : null
    })
    .filter(Boolean)
}

function routeJsonLd(route) {
  const base = [
    {
      "@context": "https://schema.org",
      ...organizationReference,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      name: "DvadesetJedan",
      url: `${siteUrl}/`,
      inLanguage: "hr",
      publisher: { "@id": organizationId },
    },
  ]
  if (route.type === "article") {
    const canonical = `${siteUrl}${route.path}`
    const author = route.author
      ? { "@type": "Person", name: route.author }
      : undefined
    const sourceUrl = externalSourceUrl(route.originalUrl)

    base.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${canonical}#article`,
      headline: route.title.replace(" | DvadesetJedan", ""),
      datePublished: route.date,
      dateModified: route.date,
      description: route.description,
      url: canonical,
      image: [resolveImage(route.image)],
      author,
      translator: route.translator
        ? { "@type": "Person", name: route.translator }
        : undefined,
      publisher: { "@id": organizationId },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": canonical,
      },
      isPartOf: { "@id": websiteId },
      inLanguage: route.language,
      keywords: route.tags?.length ? route.tags : undefined,
      articleSection: route.categories?.length ? route.categories : undefined,
      isBasedOn: sourceUrl,
      sourceOrganization: route.sourceName
        ? { "@type": "Organization", name: route.sourceName }
        : undefined,
    })
  }
  if (route.jsonLd) base.push(route.jsonLd)
  if (route.path !== "/") {
    const parts = route.path.split("/").filter(Boolean)
    base.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "DvadesetJedan",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: parts[0],
          item: `${siteUrl}/${parts[0]}/`,
        },
        ...(parts[1]
          ? [
              {
                "@type": "ListItem",
                position: 3,
                name: route.title.split("|")[0].trim(),
                item: `${siteUrl}${route.path}`,
              },
            ]
          : []),
      ],
    })
  }

  return base.filter(Boolean)
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

function extractAssetTags(template) {
  const head = template.match(/<head>([\s\S]*?)<\/head>/)?.[1] ?? ""
  return head
    .split("\n")
    .filter(
      (line) =>
        line.includes('<script type="module"') ||
        line.includes('rel="modulepreload"') ||
        line.includes('rel="stylesheet"'),
    )
    .join("\n")
}

function extractFontPreloads() {
  const assetsDir = path.join(distDir, "assets")
  if (!fs.existsSync(assetsDir)) return ""

  const fontUrls = new Set()
  for (const file of fs.readdirSync(assetsDir)) {
    if (!file.endsWith(".css")) continue

    const css = fs.readFileSync(path.join(assetsDir, file), "utf8")
    for (const match of css.matchAll(
      /url\((['"]?)(\/assets\/geist-(?:latin|latin-ext)-[^)'"\s]+\.woff2)\1\)/g,
    )) {
      if (fs.existsSync(path.join(distDir, match[2].slice(1)))) {
        fontUrls.add(match[2])
      }
    }
  }

  return [...fontUrls]
    .sort((left, right) => left.localeCompare(right))
    .map(
      (fontUrl) =>
        `    <link rel="preload" href="${fontUrl}" as="font" type="font/woff2" crossorigin />`,
    )
    .join("\n")
}

function renderHead(route, assetTags, fontPreloads) {
  const canonical = `${siteUrl}${route.path}`
  const ogTitle = route.ogTitle ?? route.title
  const ogDescription = route.ogDescription ?? route.description
  const image = resolveImage(route.image)
  const imageType = imageMimeType(image)
  const imageAlt = route.imageAlt ?? ogTitle
  const ogType =
    route.type === "article"
      ? "article"
      : route.type === "livestreamEpisode"
        ? "video.other"
        : "website"
  const imageDimensions =
    image === defaultImage
      ? `    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />`
      : ""
  const articleMeta =
    route.type === "article"
      ? [
          route.date
            ? `    <meta property="article:published_time" content="${escapeHtml(route.date)}" />`
            : "",
          route.date
            ? `    <meta property="article:modified_time" content="${escapeHtml(route.date)}" />`
            : "",
          ...(route.tags ?? []).map(
            (tag) =>
              `    <meta property="article:tag" content="${escapeHtml(tag)}" />`,
          ),
        ]
          .filter(Boolean)
          .join("\n")
      : ""
  const jsonLd = routeJsonLd(route)
    .map(
      (item) =>
        `<script type="application/ld+json">${JSON.stringify(item)}</script>`,
    )
    .join("\n    ")

  return `    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(route.title)}</title>
    <meta name="description" content="${escapeHtml(route.description)}" />
    <meta name="theme-color" content="#fbf6ef" />
    <script>
      ;(() => {
        try {
          const stored = localStorage.getItem("dvadesetjedan-theme")
          const dark = stored === "dark" || (stored !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches)
          document.documentElement.classList.toggle("dark", dark)
          document.documentElement.style.colorScheme = dark ? "dark" : "light"
          document.querySelector('meta[name="theme-color"]').content = dark ? "#19130f" : "#fbf6ef"
        } catch {}
      })()
    </script>
    <meta name="robots" content="${route.noindex ? "noindex, follow" : "index, follow"}" />
    <link rel="canonical" href="${canonical}" />
    <link rel="alternate" type="application/rss+xml" title="DvadesetJedan RSS" href="${siteUrl}/rss.xml" />
    <link rel="alternate" type="application/feed+json" title="DvadesetJedan JSON Feed" href="${siteUrl}/feed.json" />
    <meta property="og:title" content="${escapeHtml(ogTitle)}" />
    <meta property="og:description" content="${escapeHtml(ogDescription)}" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="DvadesetJedan" />
    <meta property="og:locale" content="hr_HR" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:type" content="${imageType}" />
    <meta property="og:image:alt" content="${escapeHtml(imageAlt)}" />
${imageDimensions}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(ogTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(ogDescription)}" />
    <meta name="twitter:image" content="${image}" />
    <meta name="twitter:image:alt" content="${escapeHtml(imageAlt)}" />
${articleMeta}
${fontPreloads}
${assetTags}
    ${jsonLd}`
}

function renderNoscript(route) {
  const heading = route.title.split("|")[0].trim()

  return `    <noscript>
      <main>
        <h1>${escapeHtml(heading)}</h1>
        <p>${escapeHtml(route.description)}</p>
        <nav aria-label="Glavna navigacija">
          <a href="/">Naslovnica</a>
          <a href="/pocni-ovdje/">Počni ovdje</a>
          <a href="/clanci/">Članci</a>
          <a href="/livestream/">Livestream</a>
          <a href="/dogadaji/">Događaji</a>
          <a href="/zajednica/">Zajednica</a>
        </nav>
      </main>
    </noscript>`
}

function renderHtml(template, route) {
  const renderedHead = template.replace(
    /<head>[\s\S]*?<\/head>/,
    `<head>\n${renderHead(
      route,
      extractAssetTags(template),
      extractFontPreloads(),
    )}\n  </head>`,
  )

  return renderedHead.replace(
    /<noscript>[\s\S]*?<\/noscript>/,
    renderNoscript(route),
  )
}

function writeRoute(template, route) {
  const html = renderHtml(template, route)
  const filePath =
    route.path === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, route.path, "index.html")

  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, html)
}

function renderLegacyRedirect(redirect) {
  const canonical = `${siteUrl}${redirect.to}`
  const reason = redirect.reason ? `<p>${escapeHtml(redirect.reason)}</p>` : ""

  return `<!doctype html>
<html lang="hr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Preusmjeravanje | DvadesetJedan</title>
    <meta name="robots" content="noindex" />
    <link rel="canonical" href="${canonical}" />
    <meta http-equiv="refresh" content="0; url=${redirect.to}" />
    <script>window.location.replace(${JSON.stringify(redirect.to)})</script>
  </head>
  <body>
    <main>
      <h1>Preusmjeravanje</h1>
      ${reason}
      <p>Nova stranica je <a href="${redirect.to}">${canonical}</a>.</p>
    </main>
  </body>
</html>
`
}

function writeLegacyRedirect(redirect) {
  const filePath = path.join(distDir, redirect.from, "index.html")
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, renderLegacyRedirect(redirect))
}

function writeSitemap(routes) {
  const body = routes
    .map(
      (route) =>
        `  <url><loc>${siteUrl}${route.path}</loc>${
          route.lastmod ? `<lastmod>${route.lastmod}</lastmod>` : ""
        }</url>`,
    )
    .join("\n")
  fs.writeFileSync(
    path.join(distDir, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
  )
}

function writeFeeds(routes) {
  const feedItems = routes
    .filter((route) => ["article", "livestreamEpisode"].includes(route.type))
    .filter((route) => route.date)
    .sort((left, right) => String(right.date).localeCompare(String(left.date)))
    .slice(0, 20)

  const rssItems = feedItems
    .map(
      (item) => `<item>
        <title>${escapeHtml(item.title)}</title>
        <link>${siteUrl}${item.path}</link>
        <guid>${siteUrl}${item.path}</guid>
        <description>${escapeHtml(item.description)}</description>
        <pubDate>${new Date(feedDate(item.date)).toUTCString()}</pubDate>
      </item>`,
    )
    .join("\n")

  fs.writeFileSync(
    path.join(distDir, "rss.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>DvadesetJedan</title>
    <link>${siteUrl}/</link>
    <description>Regionalni Bitcoin-only signal.</description>
    ${rssItems}
  </channel>
</rss>
`,
  )

  fs.writeFileSync(
    path.join(distDir, "feed.json"),
    JSON.stringify(
      {
        version: "https://jsonfeed.org/version/1.1",
        title: "DvadesetJedan",
        home_page_url: `${siteUrl}/`,
        feed_url: `${siteUrl}/feed.json`,
        items: feedItems.map((item) => ({
          id: `${siteUrl}${item.path}`,
          url: `${siteUrl}${item.path}`,
          title: item.title,
          content_text: item.description,
          date_published: feedDate(item.date),
        })),
      },
      null,
      2,
    ),
  )
}

const templatePath = path.join(distDir, "index.html")
if (!fs.existsSync(templatePath)) {
  throw new Error(
    "dist/index.html ne postoji. Pokreni Vite build prije generatora.",
  )
}

const template = fs.readFileSync(templatePath, "utf8")
const routes = [
  ...coreRoutes,
  ...loadArticles(),
  ...loadEvents(),
  ...loadEpisodes(),
  ...loadCities(),
  ...loadCommunityProjects(),
]
const legacyRedirects = loadLegacyRedirects()

for (const route of routes) writeRoute(template, route)
for (const redirect of legacyRedirects) writeLegacyRedirect(redirect)

fs.writeFileSync(
  path.join(distDir, "404.html"),
  renderHtml(template, {
    path: "/404/",
    title: "Stranica nije pronađena | DvadesetJedan",
    description:
      "Poveznica je možda promijenjena ili stranica više ne postoji.",
    type: "page",
    noindex: true,
  }),
)
fs.writeFileSync(
  path.join(distDir, "robots.txt"),
  `User-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`,
)
writeSitemap(routes)
writeFeeds(routes)

console.log(
  `Generated ${routes.length} static routes, ${legacyRedirects.length} legacy redirects, sitemap, RSS, JSON feed, robots and 404.`,
)
