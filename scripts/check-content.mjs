import fs from "node:fs"

const episodesPath = "src/data/episodes.ts"
const source = fs.readFileSync(episodesPath, "utf8")
const episodesStart = source.indexOf("export const episodes")
const arrayStart = source.indexOf("[", episodesStart)
const arrayEnd = source.lastIndexOf("]")
const episodesSource =
  episodesStart >= 0 && arrayStart >= 0 && arrayEnd > arrayStart
    ? source.slice(arrayStart, arrayEnd + 1)
    : ""

const entryMatches = [...episodesSource.matchAll(/\{[\s\S]*?\}/g)].filter((match) =>
  match[0].includes("youtubeUrl:"),
)

const episodes = entryMatches.map((match) => {
  const entry = match[0]
  const readString = (key) => {
    const valueMatch = entry.match(new RegExp(`${key}:\\s*"([^"]*)"`))
    return valueMatch?.[1]
  }

  return {
    slug: readString("slug"),
    title: readString("title"),
    youtubeUrl: readString("youtubeUrl"),
    publishedAt: readString("publishedAt"),
  }
})

const failures = []
const slugs = new Map()

episodes.forEach((episode, index) => {
  const label = `Epizoda ${index + 1}`

  for (const field of ["slug", "title", "youtubeUrl"]) {
    if (!episode[field]) {
      failures.push(`${label}: ${field} ne smije biti prazan.`)
    }
  }

  if (episode.slug) {
    if (slugs.has(episode.slug)) {
      failures.push(`${label}: dupliciran slug "${episode.slug}".`)
    }
    slugs.set(episode.slug, true)
  }

  if (
    episode.youtubeUrl &&
    !(
      episode.youtubeUrl.startsWith("https://www.youtube.com/") ||
      episode.youtubeUrl.startsWith("https://youtube.com/")
    )
  ) {
    failures.push(`${label}: youtubeUrl mora biti YouTube URL.`)
  }

  if (episode.publishedAt && !/^\d{4}-\d{2}-\d{2}$/.test(episode.publishedAt)) {
    failures.push(`${label}: publishedAt mora biti u formatu YYYY-MM-DD.`)
  }
})

const datedEpisodes = episodes.filter((episode) => episode.publishedAt)
if (datedEpisodes.length === episodes.length && datedEpisodes.length > 1) {
  for (let index = 1; index < datedEpisodes.length; index += 1) {
    const previous = datedEpisodes[index - 1].publishedAt
    const current = datedEpisodes[index].publishedAt

    if (previous && current && previous < current) {
      failures.push(
        `Epizode nisu sortirane od najnovije prema starijoj: ${previous} prije ${current}.`,
      )
    }
  }
}

if (failures.length) {
  console.error(failures.join("\n"))
  process.exit(1)
}

console.log("Content check passed.")
