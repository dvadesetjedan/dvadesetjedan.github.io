import fs from "node:fs/promises"
import path from "node:path"

import sharp from "sharp"

const root = process.cwd()
const widths = [480, 960, 1440]
const sourceGroups = [
  {
    directory: path.join(root, "public/images/events"),
    responsive: true,
  },
  {
    directory: path.join(root, "public/images/livestream"),
    responsive: true,
  },
]
const force = process.argv.includes("--force")
const sourceExtension = /\.(jpe?g|png)$/i

async function sourceFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true })

  return entries
    .filter(
      (entry) =>
        entry.isFile() &&
        sourceExtension.test(entry.name) &&
        !/-\d+\.webp$/i.test(entry.name),
    )
    .map((entry) => path.join(directory, entry.name))
}

async function needsGeneration(source, target) {
  if (force) return true

  try {
    const [sourceStat, targetStat] = await Promise.all([
      fs.stat(source),
      fs.stat(target),
    ])
    return sourceStat.mtimeMs > targetStat.mtimeMs
  } catch {
    return true
  }
}

async function generateDerivative(source, width, suffix = `-${width}`) {
  const parsed = path.parse(source)
  const target = path.join(parsed.dir, `${parsed.name}${suffix}.webp`)
  if (!(await needsGeneration(source, target))) return false

  await sharp(source)
    .rotate()
    .resize({ width, fit: "inside", withoutEnlargement: false })
    .webp({ quality: 80, effort: 4 })
    .toFile(target)

  return true
}

const groups = await Promise.all(
  sourceGroups.map(async (group) => ({
    ...group,
    files: await sourceFiles(group.directory),
  })),
)
let generated = 0
let expected = 0

for (const group of groups) {
  for (const source of group.files) {
    expected += 1
    if (await generateDerivative(source, 1440, "")) generated += 1

    if (group.responsive) {
      expected += widths.length
      for (const width of widths) {
        if (await generateDerivative(source, width)) generated += 1
      }
    }
  }
}

console.log(
  `WebP slike: ${generated} generirano, ${expected - generated} već ažurno.`,
)
