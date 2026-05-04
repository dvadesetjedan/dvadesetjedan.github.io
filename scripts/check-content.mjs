import fs from "node:fs"

const failures = []

function readSource(filePath) {
  return fs.readFileSync(filePath, "utf8")
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

function readBoolean(objectSource, key) {
  const match = objectSource.match(new RegExp(`${key}:\\s*(true|false)`, "s"))
  return match ? match[1] === "true" : undefined
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

function assertUnique(entries, label) {
  const seen = new Set()
  for (const entry of entries) {
    if (!entry.slug) continue
    if (seen.has(entry.slug)) failures.push(`${label}: dupliciran slug ${entry.slug}.`)
    seen.add(entry.slug)
  }
}

function validDate(value) {
  return Boolean(value && !Number.isNaN(new Date(value).getTime()))
}

function validUrl(value) {
  return !value || /^https?:\/\/|^\//.test(value)
}

const articles = extractObjects(readSource("src/data/articles.ts"), "export const articles").map((objectSource, index) => ({
  label: `Članak ${index + 1}`,
  slug: readString(objectSource, "slug"),
  title: readString(objectSource, "title"),
  date: readString(objectSource, "date"),
  excerpt: readString(objectSource, "excerpt"),
  image: readString(objectSource, "image"),
  originalUrl: readString(objectSource, "originalUrl"),
  tags: readStringArray(objectSource, "tags"),
  recommendedNextSlugs: readStringArray(objectSource, "recommendedNextSlugs"),
}))

const events = extractObjects(readSource("src/data/events.ts"), "export const events").map((objectSource, index) => ({
  label: `Događaj ${index + 1}`,
  slug: readString(objectSource, "slug"),
  title: readString(objectSource, "title"),
  start: readString(objectSource, "start"),
  end: readString(objectSource, "end"),
  city: readString(objectSource, "city"),
  country: readString(objectSource, "country"),
  registrationUrl: readString(objectSource, "registrationUrl"),
  mapUrl: readString(objectSource, "mapUrl"),
  sourceUrl: readString(objectSource, "sourceUrl"),
  meetupUrl: readString(objectSource, "meetupUrl"),
  status: readString(objectSource, "status"),
  citySlug: readString(objectSource, "citySlug"),
}))

const episodes = extractObjects(readSource("src/data/episodes.ts"), "export const episodes").map((objectSource, index) => ({
  label: `Epizoda ${index + 1}`,
  slug: readString(objectSource, "slug"),
  title: readString(objectSource, "title"),
  youtubeUrl: readString(objectSource, "youtubeUrl"),
  publishedAt: readString(objectSource, "publishedAt"),
  needsShownotes: readBoolean(objectSource, "needsShownotes"),
  chapters: [...objectSource.matchAll(/time:\s*"([^"]+)"\s*,\s*title:\s*"([^"]+)"/g)].map((match) => ({
    time: match[1],
    title: match[2],
  })),
  links: [...objectSource.matchAll(/label:\s*"([^"]+)"\s*,\s*href:\s*"([^"]+)"/g)].map((match) => ({
    label: match[1],
    href: match[2],
  })),
  terms: [...objectSource.matchAll(/term:\s*"([^"]+)"\s*,\s*explanation:\s*"([^"]+)"/g)].map((match) => ({
    term: match[1],
    explanation: match[2],
  })),
  relatedArticleSlugs: readStringArray(objectSource, "relatedArticleSlugs"),
  relatedEventSlugs: readStringArray(objectSource, "relatedEventSlugs"),
}))

const cities = extractObjects(readSource("src/data/cities.ts"), "export const cities").map((objectSource, index) => ({
  label: `Grad ${index + 1}`,
  slug: readString(objectSource, "slug"),
  name: readString(objectSource, "name"),
  country: readString(objectSource, "country"),
  status: readString(objectSource, "status"),
  eventSlugs: readStringArray(objectSource, "eventSlugs"),
}))

const onboarding = extractObjects(readSource("src/data/onboarding.ts"), "export const onboardingSteps").map((objectSource, index) => ({
  label: `Onboarding korak ${index + 1}`,
  title: readString(objectSource, "title"),
  shortText: readString(objectSource, "shortText"),
  explanation: readString(objectSource, "explanation"),
  safetyLevel: readString(objectSource, "safetyLevel"),
  recommendedArticleSlugs: readStringArray(objectSource, "recommendedArticleSlugs"),
  recommendedEpisodeSlugs: readStringArray(objectSource, "recommendedEpisodeSlugs"),
}))

const legacyRedirects = extractObjects(readSource("src/data/legacyRedirects.ts"), "export const legacyRedirects").map((objectSource, index) => ({
  label: `Legacy redirect ${index + 1}`,
  from: readString(objectSource, "from"),
  to: readString(objectSource, "to"),
  reason: readString(objectSource, "reason"),
}))

assertUnique(articles, "Članci")
assertUnique(events, "Događaji")
assertUnique(episodes, "Epizode")
assertUnique(cities, "Gradovi")

const articleSlugs = new Set(articles.map((entry) => entry.slug))
const eventSlugs = new Set(events.map((entry) => entry.slug))
const citySlugs = new Set(cities.map((entry) => entry.slug))
const episodeSlugs = new Set(episodes.map((entry) => entry.slug))
const knownRoutes = new Set([
  "/",
  "/o-projektu/",
  "/pocni-ovdje/",
  "/teme/",
  "/faq/",
  "/resursi/",
  "/sigurnost/",
  "/clanci/",
  "/livestream/",
  "/dogadaji/",
  "/gradovi/",
  "/zajednica/",
  "/doprinesi/",
  ...articles.map((entry) => `/clanci/${entry.slug}/`),
  ...events.map((entry) => `/dogadaji/${entry.slug}/`),
  ...episodes.map((entry) => `/livestream/${entry.slug}/`),
  ...cities.map((entry) => `/gradovi/${entry.slug}/`),
])

for (const article of articles) {
  if (!article.slug || !article.title || !article.excerpt) {
    failures.push(`${article.label}: slug, title i excerpt su obavezni.`)
  }
  if (!validDate(article.date)) failures.push(`${article.label}: date nije validan.`)
  if (!Array.isArray(article.tags)) failures.push(`${article.label}: tags mora biti array.`)
  if (!validUrl(article.originalUrl)) failures.push(`${article.label}: originalUrl nije validan.`)
  if (!validUrl(article.image)) failures.push(`${article.label}: image nije validan URL/path.`)
  for (const slug of article.recommendedNextSlugs) {
    if (!articleSlugs.has(slug)) failures.push(`${article.label}: recommendedNextSlugs ne postoji: ${slug}.`)
  }
}

for (const event of events) {
  if (!event.slug || !event.title || !event.city || !event.country) {
    failures.push(`${event.label}: slug, title, city i country su obavezni.`)
  }
  if (!validDate(event.start) || !validDate(event.end)) {
    failures.push(`${event.label}: start/end nisu validni datumi.`)
  } else if (new Date(event.end) <= new Date(event.start)) {
    failures.push(`${event.label}: end mora biti nakon start.`)
  }
  if (!validUrl(event.registrationUrl)) failures.push(`${event.label}: registrationUrl nije validan.`)
  if (!validUrl(event.mapUrl)) failures.push(`${event.label}: mapUrl nije validan.`)
  if (!validUrl(event.sourceUrl)) failures.push(`${event.label}: sourceUrl nije validan.`)
  if (!validUrl(event.meetupUrl)) failures.push(`${event.label}: meetupUrl nije validan.`)
  if (event.status && !["upcoming", "past", "cancelled"].includes(event.status)) {
    failures.push(`${event.label}: status nije validan.`)
  }
  if (event.citySlug && !citySlugs.has(event.citySlug)) {
    failures.push(`${event.label}: citySlug ne postoji: ${event.citySlug}.`)
  }
}

for (const episode of episodes) {
  if (!episode.slug || !episode.title) failures.push(`${episode.label}: slug i title su obavezni.`)
  if (episode.youtubeUrl && !/^https:\/\/(www\.)?youtube\.com\//.test(episode.youtubeUrl)) {
    failures.push(`${episode.label}: youtubeUrl mora biti YouTube URL.`)
  }
  if (episode.publishedAt && !/^\d{4}-\d{2}-\d{2}$/.test(episode.publishedAt)) {
    failures.push(`${episode.label}: publishedAt mora biti YYYY-MM-DD.`)
  }
  if (episode.needsShownotes !== undefined && typeof episode.needsShownotes !== "boolean") {
    failures.push(`${episode.label}: needsShownotes mora biti boolean.`)
  }
  for (const chapter of episode.chapters) {
    if (!/^\d{1,2}:\d{2}(?::\d{2})?$/.test(chapter.time)) {
      failures.push(`${episode.label}: chapter time nije validan: ${chapter.time}.`)
    }
  }
  for (const link of episode.links) {
    if (!link.label || !validUrl(link.href)) failures.push(`${episode.label}: link nije validan.`)
  }
  for (const term of episode.terms) {
    if (!term.term || !term.explanation) failures.push(`${episode.label}: terms trebaju term i explanation.`)
  }
  for (const slug of episode.relatedArticleSlugs) {
    if (!articleSlugs.has(slug)) failures.push(`${episode.label}: relatedArticleSlugs ne postoji: ${slug}.`)
  }
  for (const slug of episode.relatedEventSlugs) {
    if (!eventSlugs.has(slug)) failures.push(`${episode.label}: relatedEventSlugs ne postoji: ${slug}.`)
  }
}

for (const city of cities) {
  if (!city.slug || !city.name || !city.country) {
    failures.push(`${city.label}: slug, name i country su obavezni.`)
  }
  if (!["active", "emerging", "archive"].includes(city.status)) {
    failures.push(`${city.label}: status nije validan.`)
  }
  if (city.status === "emerging" && city.eventSlugs.length) {
    failures.push(`${city.label}: emerging grad ne smije imati eventSlugs bez javno potvrđenog događaja.`)
  }
  for (const slug of city.eventSlugs) {
    if (!eventSlugs.has(slug)) failures.push(`${city.label}: eventSlugs ne postoji: ${slug}.`)
  }
}

if (onboarding.length !== 21) failures.push(`Onboarding mora imati točno 21 korak, trenutno ima ${onboarding.length}.`)
for (const step of onboarding) {
  if (!step.title || !step.shortText || !step.explanation) {
    failures.push(`${step.label}: title, shortText i explanation su obavezni.`)
  }
  if (step.safetyLevel && !["normal", "important", "critical"].includes(step.safetyLevel)) {
    failures.push(`${step.label}: safetyLevel nije validan.`)
  }
  for (const slug of step.recommendedArticleSlugs) {
    if (!articleSlugs.has(slug)) failures.push(`${step.label}: recommendedArticleSlugs ne postoji: ${slug}.`)
  }
  for (const slug of step.recommendedEpisodeSlugs) {
    if (!episodeSlugs.has(slug)) failures.push(`${step.label}: recommendedEpisodeSlugs ne postoji: ${slug}.`)
  }
}

const redirectFromValues = new Set()
for (const redirect of legacyRedirects) {
  if (!redirect.from || !redirect.to || !redirect.reason) failures.push(`${redirect.label}: from, to i reason su obavezni.`)
  if (redirect.from?.includes("#") || redirect.to?.includes("#")) failures.push(`${redirect.label}: hash rute nisu dozvoljene.`)
  if (!redirect.from?.startsWith("/") || !redirect.from?.endsWith("/")) failures.push(`${redirect.label}: from mora početi i završiti s /.`)
  if (!redirect.to?.startsWith("/") || !redirect.to?.endsWith("/")) failures.push(`${redirect.label}: to mora početi i završiti s /.`)
  if (redirect.from === redirect.to) failures.push(`${redirect.label}: from i to ne smiju biti isti.`)
  if (redirectFromValues.has(redirect.from)) failures.push(`${redirect.label}: dupliciran from ${redirect.from}.`)
  redirectFromValues.add(redirect.from)
  if (redirect.to && !knownRoutes.has(redirect.to)) failures.push(`${redirect.label}: target route ne postoji: ${redirect.to}.`)
  if (legacyRedirects.some((entry) => entry.from === redirect.to)) failures.push(`${redirect.label}: target ne smije biti legacy route: ${redirect.to}.`)
}

const eventMetaSource = readSource("src/data/eventMeta.ts")
const lastManualCheck = readString(eventMetaSource, "lastManualCheck")
if (lastManualCheck && !/^\d{4}-\d{2}-\d{2}$/.test(lastManualCheck)) {
  failures.push("eventMeta.lastManualCheck mora biti YYYY-MM-DD ako postoji.")
}

if (failures.length) {
  console.error(failures.join("\n"))
  process.exit(1)
}

console.log("Content check passed.")
