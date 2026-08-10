import fs from "node:fs"
import path from "node:path"

const eventDirectory = "public/images/events"
const livestreamDirectory = "public/images/livestream"
const gallerySource = fs.readFileSync("src/data/eventGalleries.ts", "utf8")
const eventSource = fs.readFileSync("src/data/events.ts", "utf8")
const failures = []
const originalPattern = /\.(jpe?g|png)$/i
const derivativePattern = /-\d+\.webp$/i
const widths = [480, 960, 1440]

const originals = fs
  .readdirSync(eventDirectory)
  .filter((name) => originalPattern.test(name) && !derivativePattern.test(name))
  .sort((left, right) => left.localeCompare(right))

const referencedNames = new Set(
  [...gallerySource.matchAll(/"([^"\n]+\.(?:jpe?g|png))"/gi)].map((match) =>
    path.basename(match[1]),
  ),
)

for (const name of originals) {
  if (!referencedNames.has(name)) {
    failures.push(`Fotografija nije inventarizirana: ${name}`)
  }

  const parsed = path.parse(name)
  for (const width of widths) {
    const derivative = path.join(eventDirectory, `${parsed.name}-${width}.webp`)
    if (!fs.existsSync(derivative)) {
      failures.push(`Nedostaje responsive slika: ${derivative}`)
    }
  }
}

for (const name of referencedNames) {
  if (!originals.includes(name)) {
    failures.push(`Galerija upućuje na nepostojeću fotografiju: ${name}`)
  }
}

const gallerySlugs = [...gallerySource.matchAll(/eventSlug:\s*"([^"]+)"/g)].map(
  (match) => match[1],
)
const eventSlugs = new Set(
  [...eventSource.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]),
)

for (const slug of new Set(gallerySlugs)) {
  if (!eventSlugs.has(slug)) {
    failures.push(`Galerija nema odgovarajući događaj: ${slug}`)
  }
}

const livestreamSource = path.join(
  livestreamDirectory,
  "dvadesetjedan-signal-uzivo.png",
)
if (!fs.existsSync(livestreamSource)) {
  failures.push(`Nedostaje livestream izvor: ${livestreamSource}`)
} else {
  for (const width of widths) {
    const derivative = path.join(
      livestreamDirectory,
      `dvadesetjedan-signal-uzivo-${width}.webp`,
    )
    if (!fs.existsSync(derivative)) {
      failures.push(`Nedostaje livestream responsive slika: ${derivative}`)
    }
  }
}

if (failures.length) {
  console.error(failures.join("\n"))
  process.exit(1)
}

console.log(
  `Galerije su povezane: ${originals.length} izvornih fotografija i ${new Set(gallerySlugs).size} galerija.`,
)
