import fs from "node:fs"

const sourceIndex = process.argv.indexOf("--source")
const sourcePath = sourceIndex >= 0 ? process.argv[sourceIndex + 1] : null

if (!sourcePath) {
  console.log(`Meetup provjera je opcionalna i ne koristi mrežu.

Upotreba:
  npm run check:meetup -- --source path/to/meetup-events.json

Očekivanje:
  JSON može biti array događaja ili objekt s poljem events/items/results.
  Korisna polja su title/name, start/startDate/date, city, sourceUrl/meetupUrl/url i location/venue.

Skripta samo uspoređuje i ispisuje razlike. Ne uređuje src/data/events.ts.`)
  process.exit(0)
}

if (!fs.existsSync(sourcePath)) {
  console.error(`Source file ne postoji: ${sourcePath}`)
  process.exit(1)
}

function readSource(filePath) {
  return fs.readFileSync(filePath, "utf8")
}

function readString(objectSource, key) {
  const match = objectSource.match(new RegExp(`${key}:\\s*"([^"]*)"`, "s"))
  return match?.[1]
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

function normalizeText(value = "") {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
}

function day(value) {
  if (!value) return ""
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? String(value).slice(0, 10) : date.toISOString().slice(0, 10)
}

function getSourceEvents(value) {
  if (Array.isArray(value)) return value
  for (const key of ["events", "items", "results"]) {
    if (Array.isArray(value?.[key])) return value[key]
  }
  return []
}

const repoEvents = extractObjects(readSource("src/data/events.ts"), "export const events").map((objectSource) => ({
  title: readString(objectSource, "title"),
  start: readString(objectSource, "start"),
  city: readString(objectSource, "city"),
  sourceUrl: readString(objectSource, "sourceUrl") ?? readString(objectSource, "meetupUrl") ?? readString(objectSource, "registrationUrl"),
  venue: readString(objectSource, "venue"),
}))

const sourceEvents = getSourceEvents(JSON.parse(fs.readFileSync(sourcePath, "utf8"))).map((event) => ({
  title: event.title ?? event.name ?? "",
  start: event.start ?? event.startDate ?? event.date ?? event.time ?? "",
  city: event.city ?? event.group?.localized_location ?? event.venue?.city ?? "",
  sourceUrl: event.sourceUrl ?? event.meetupUrl ?? event.url ?? event.link ?? "",
  venue: event.venue?.name ?? event.location ?? event.venue ?? "",
}))

const bySourceUrl = new Map(repoEvents.filter((event) => event.sourceUrl).map((event) => [event.sourceUrl, event]))
const matchedRepo = new Set()
const missingInRepo = []
const changed = []

for (const sourceEvent of sourceEvents) {
  const urlMatch = sourceEvent.sourceUrl ? bySourceUrl.get(sourceEvent.sourceUrl) : null
  const fuzzyMatch =
    urlMatch ??
    repoEvents.find(
      (event) =>
        normalizeText(event.title) === normalizeText(sourceEvent.title) &&
        day(event.start) === day(sourceEvent.start) &&
        normalizeText(event.city) === normalizeText(sourceEvent.city),
    )

  if (!fuzzyMatch) {
    missingInRepo.push(sourceEvent)
    continue
  }

  matchedRepo.add(fuzzyMatch)
  const differences = []
  if (normalizeText(fuzzyMatch.title) !== normalizeText(sourceEvent.title)) differences.push("title")
  if (day(fuzzyMatch.start) !== day(sourceEvent.start)) differences.push("date/time")
  if (sourceEvent.city && normalizeText(fuzzyMatch.city) !== normalizeText(sourceEvent.city)) differences.push("city")
  if (sourceEvent.venue && normalizeText(fuzzyMatch.venue) !== normalizeText(sourceEvent.venue)) differences.push("location")
  if (differences.length) changed.push({ repo: fuzzyMatch, source: sourceEvent, differences })
}

const missingInMeetup = repoEvents.filter((event) => event.sourceUrl?.includes("meetup.com") && !matchedRepo.has(event))

console.log("Meetup usporedba")
console.log(`- U source JSON, ali nisu u repo: ${missingInRepo.length}`)
for (const event of missingInRepo) console.log(`  • ${event.title || "(bez naslova)"} — ${day(event.start)} — ${event.city}`)
console.log(`- U repo, ali nisu u source JSON: ${missingInMeetup.length}`)
for (const event of missingInMeetup) console.log(`  • ${event.title} — ${day(event.start)} — ${event.city}`)
console.log(`- Moguće promjene: ${changed.length}`)
for (const item of changed) console.log(`  • ${item.repo.title}: ${item.differences.join(", ")}`)
