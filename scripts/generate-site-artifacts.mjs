import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const distDir = path.join(root, "dist")
const siteUrl = "https://dvadesetjedan.com"
const defaultImage = `${siteUrl}/social-preview.png`

const coreRoutes = [
  ["/", "DvadesetJedan / Zajednica", "Bitcoin signal za ljude koji govore našim jezicima: članci, livestream, događaji i zajednica bez tradinga, tokena i obećanja zarade."],
  ["/o-projektu/", "O projektu | DvadesetJedan", "DvadesetJedan je regionalni Bitcoin-only signal na našem jeziku i dio otvorenog TwentyOne.World koncepta."],
  ["/pocni-ovdje/", "Počni ovdje | DvadesetJedan", "Početni put za ljude koji žele razumjeti Bitcoin bez žurbe, hypea i početničkih sigurnosnih grešaka."],
  ["/teme/", "Teme | DvadesetJedan", "Teme kroz koje DvadesetJedan obrađuje Bitcoin: novac, sigurnost, štednja, zajednica i dugoročno razmišljanje."],
  ["/faq/", "Česta pitanja | DvadesetJedan", "Kratki odgovori za ljude koji upoznaju DvadesetJedan, Bitcoin-only pristup i načine uključivanja u zajednicu."],
  ["/resursi/", "Resursi | DvadesetJedan", "Polazna mjesta za učenje o Bitcoinu, provjeru mreže i kvalitetne izvore bez crypto buke."],
  ["/sigurnost/", "Sigurnost | DvadesetJedan", "Početnički Bitcoin sigurnosni vodič: seed phrase, privatni ključevi, exchange, phishing, Telegram i meetupi."],
  ["/clanci/", "Članci | DvadesetJedan", "Pisani Bitcoin signal DvadesetJedan zajednice: početni redoslijed čitanja, tematski putokazi i arhiva tekstova."],
  ["/livestream/", "Livestream | DvadesetJedan", "Bitcoin livestream DvadesetJedan zajednice: vijesti, komentari, razgovori, pitanja uživo i regionalna perspektiva."],
  ["/dogadaji/", "Događaji | DvadesetJedan", "Nadolazeći Bitcoin događaji, arhiva druženja i način kako predložiti lokalni događaj kroz DvadesetJedan zajednicu."],
  ["/gradovi/", "Gradovi | DvadesetJedan", "Regionalne DvadesetJedan ulazne točke za gradove, lokalne događaje i pokretanje Bitcoin-only susreta."],
  ["/zajednica/", "Zajednica | DvadesetJedan", "Ulaz u DvadesetJedan zajednicu: Telegram, YouTube, događaji, načela razgovora i Bitcoin-only pravila."],
  ["/doprinesi/", "Doprinesi | DvadesetJedan", "Načini kako doprinijeti DvadesetJedan zajednici kroz članke, prijevode, događaje, kod i kvalitetne Bitcoin resurse."],
].map(([routePath, title, description]) => ({
  path: routePath,
  title,
  description,
  type: routePath === "/" ? "website" : "page",
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

function readString(objectSource, key) {
  const match = objectSource.match(new RegExp(`${key}:\\s*"([^"]*)"`, "s"))
  return match?.[1]
}

function readStringArray(objectSource, key) {
  const match = objectSource.match(new RegExp(`${key}:\\s*\\[([^\\]]*)\\]`, "s"))
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
  return extractObjects(readSource("src/data/articles.ts"), "export const articles")
    .map((objectSource) => {
      const slug = readString(objectSource, "slug")
      const title = readString(objectSource, "title")
      const date = readString(objectSource, "date")
      const excerpt = htmlToText(readString(objectSource, "excerpt"))
      const image = readString(objectSource, "image")
      const originalUrl = readString(objectSource, "originalUrl")
      const tags = readStringArray(objectSource, "tags")

      return slug && title
        ? {
            path: `/clanci/${slug}/`,
            title: `${title} | DvadesetJedan`,
            description: truncate(excerpt || title),
            type: "article",
            date,
            image,
            originalUrl,
            tags,
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

      return slug && title
        ? {
            path: `/dogadaji/${slug}/`,
            title: `${title} | DvadesetJedan`,
            description: truncate(summary || title),
            type: "event",
            date: start,
            image,
            jsonLd: {
              "@context": "https://schema.org",
              "@type": "Event",
              name: title,
              startDate: start,
              endDate: end,
              description: summary,
              url: `${siteUrl}/dogadaji/${slug}/`,
              location: {
                "@type": "Place",
                name: venue,
                address: [address, city, country].filter(Boolean).join(", "),
              },
              offers: registrationUrl
                ? { "@type": "Offer", url: registrationUrl, availability: "https://schema.org/InStock" }
                : undefined,
            },
          }
        : null
    })
    .filter(Boolean)
}

function loadEpisodes() {
  return extractObjects(readSource("src/data/episodes.ts"), "export const episodes")
    .map((objectSource) => {
      const slug = readString(objectSource, "slug")
      const title = readString(objectSource, "title")
      const summary = readString(objectSource, "summary")
      const publishedAt = readString(objectSource, "publishedAt")

      return slug && title
        ? {
            path: `/livestream/${slug}/`,
            title: `${title} | DvadesetJedan`,
            description: truncate(summary || title),
            type: "livestreamEpisode",
            date: publishedAt,
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

function loadLegacyRedirects() {
  return extractObjects(readSource("src/data/legacyRedirects.ts"), "export const legacyRedirects")
    .map((objectSource) => {
      const from = readString(objectSource, "from")
      const to = readString(objectSource, "to")
      const reason = readString(objectSource, "reason")

      return from && to ? { from, to, reason } : null
    })
    .filter(Boolean)
}

function routeJsonLd(route) {
  const base = []
  if (route.path === "/") {
    base.push(
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "DvadesetJedan",
        url: siteUrl,
        sameAs: [
          "https://www.youtube.com/@dvadesetjedan/streams",
          "https://t.me/+ud6ARwb7rX5lZjU0",
          "https://github.com/dvadesetjedan/dvadesetjedan.github.io",
          "https://twentyone.world/",
        ],
      },
      { "@context": "https://schema.org", "@type": "WebSite", name: "DvadesetJedan", url: siteUrl, inLanguage: "hr" },
    )
  }
  if (route.type === "article") {
    base.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: route.title.replace(" | DvadesetJedan", ""),
      datePublished: route.date,
      description: route.description,
      url: `${siteUrl}${route.path}`,
      image: route.image?.startsWith("http") ? route.image : defaultImage,
    })
  }
  if (route.jsonLd) base.push(route.jsonLd)
  if (route.path !== "/") {
    const parts = route.path.split("/").filter(Boolean)
    base.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "DvadesetJedan", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: parts[0], item: `${siteUrl}/${parts[0]}/` },
        ...(parts[1]
          ? [{ "@type": "ListItem", position: 3, name: route.title.split("|")[0].trim(), item: `${siteUrl}${route.path}` }]
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
    .filter((line) => line.includes("/assets/") || line.includes('type="module"'))
    .join("\n")
}

function renderHead(route, assetTags) {
  const canonical = `${siteUrl}${route.path}`
  const image = route.image?.startsWith("http")
    ? route.image
    : route.image?.startsWith("/")
      ? `${siteUrl}${route.image}`
      : defaultImage
  const ogType = route.type === "article" ? "article" : "website"
  const jsonLd = routeJsonLd(route)
    .map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`)
    .join("\n    ")

  return `    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/favicon.png?v=bitcoin-official" />
    <link rel="shortcut icon" href="/favicon.png?v=bitcoin-official" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(route.title)}</title>
    <meta name="description" content="${escapeHtml(route.description)}" />
    <meta name="theme-color" content="#f5efe4" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${escapeHtml(route.title)}" />
    <meta property="og:description" content="${escapeHtml(route.description)}" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:alt" content="DvadesetJedan / Zajednica" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(route.title)}" />
    <meta name="twitter:description" content="${escapeHtml(route.description)}" />
    <meta name="twitter:image" content="${image}" />
${assetTags}
    ${jsonLd}`
}

function renderHtml(template, route) {
  return template.replace(
    /<head>[\s\S]*?<\/head>/,
    `<head>\n${renderHead(route, extractAssetTags(template))}\n  </head>`,
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
  const reason = redirect.reason
    ? `<p>${escapeHtml(redirect.reason)}</p>`
    : ""

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
    .map((route) => `  <url><loc>${siteUrl}${route.path}</loc></url>`)
    .join("\n")
  fs.writeFileSync(
    path.join(distDir, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
  )
}

function writeFeeds(routes) {
  const feedItems = routes
    .filter((route) => ["article", "livestreamEpisode", "event"].includes(route.type))
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
        <pubDate>${new Date(item.date).toUTCString()}</pubDate>
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
          date_published: item.date,
        })),
      },
      null,
      2,
    ),
  )
}

const templatePath = path.join(distDir, "index.html")
if (!fs.existsSync(templatePath)) {
  throw new Error("dist/index.html ne postoji. Pokreni Vite build prije generatora.")
}

const template = fs.readFileSync(templatePath, "utf8")
const routes = [
  ...coreRoutes,
  ...loadArticles(),
  ...loadEvents(),
  ...loadEpisodes(),
  ...loadCities(),
]
const legacyRedirects = loadLegacyRedirects()

for (const route of routes) writeRoute(template, route)
for (const redirect of legacyRedirects) writeLegacyRedirect(redirect)

fs.writeFileSync(path.join(distDir, "404.html"), renderHtml(template, {
  path: "/404/",
  title: "Stranica nije pronađena | DvadesetJedan",
  description: "Poveznica je možda promijenjena ili stranica više ne postoji.",
  type: "page",
}))
fs.writeFileSync(path.join(distDir, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`)
writeSitemap(routes)
writeFeeds(routes)

console.log(`Generated ${routes.length} static routes, ${legacyRedirects.length} legacy redirects, sitemap, RSS, JSON feed, robots and 404.`)
