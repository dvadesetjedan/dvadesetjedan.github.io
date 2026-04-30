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
  citySlug: readString(objectSource, "citySlug"),
}))

const episodes = extractObjects(readSource("src/data/episodes.ts"), "export const episodes").map((objectSource, index) => ({
  label: `Epizoda ${index + 1}`,
  slug: readString(objectSource, "slug"),
  title: readString(objectSource, "title"),
  youtubeUrl: readString(objectSource, "youtubeUrl"),
  publishedAt: readString(objectSource, "publishedAt"),
  relatedArticleSlugs: readStringArray(objectSource, "relatedArticleSlugs"),
  relatedEventSlugs: readStringArray(objectSource, "relatedEventSlugs"),
}))

const cities = extractObjects(readSource("src/data/cities.ts"), "export const cities").map((objectSource, index) => ({
  label: `Grad ${index + 1}`,
  slug: readString(objectSource, "slug"),
  name: readString(objectSource, "name"),
  country: readString(objectSource, "country"),
  eventSlugs: readStringArray(objectSource, "eventSlugs"),
}))

assertUnique(articles, "Članci")
assertUnique(events, "Događaji")
assertUnique(episodes, "Epizode")
assertUnique(cities, "Gradovi")

const articleSlugs = new Set(articles.map((entry) => entry.slug))
const eventSlugs = new Set(events.map((entry) => entry.slug))
const citySlugs = new Set(cities.map((entry) => entry.slug))

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
  for (const slug of city.eventSlugs) {
    if (!eventSlugs.has(slug)) failures.push(`${city.label}: eventSlugs ne postoji: ${slug}.`)
  }
}

if (failures.length) {
  console.error(failures.join("\n"))
  process.exit(1)
}

console.log("Content check passed.")
