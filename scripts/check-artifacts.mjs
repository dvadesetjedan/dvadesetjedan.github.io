import fs from "node:fs"
import path from "node:path"

const distDir = path.join(process.cwd(), "dist")
const failures = []

function readFile(relativePath) {
  return fs.readFileSync(path.join(process.cwd(), relativePath), "utf8")
}

function exists(relativePath) {
  return fs.existsSync(path.join(distDir, relativePath))
}

function walkFiles(directory) {
  if (!fs.existsSync(directory)) return []

  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name)

    if (entry.isDirectory()) return walkFiles(entryPath)
    return entryPath
  })
}

function toWebpPath(filePath) {
  return filePath.replace(/\.(png|jpe?g)$/i, ".webp")
}

for (const file of [
  "index.html",
  "404.html",
  "sitemap.xml",
  "robots.txt",
  "rss.xml",
  "feed.json",
]) {
  if (!exists(file)) failures.push(`Nedostaje dist/${file}.`)
}

if (exists("robots.txt")) {
  const robots = fs.readFileSync(path.join(distDir, "robots.txt"), "utf8")
  if (!robots.includes("Sitemap: https://dvadesetjedan.com/sitemap.xml")) {
    failures.push("robots.txt ne referencira canonical sitemap.")
  }
}

if (exists("sitemap.xml")) {
  const sitemap = fs.readFileSync(path.join(distDir, "sitemap.xml"), "utf8")
  for (const route of [
    "/",
    "/pocni-ovdje/",
    "/sigurnost/",
    "/clanci/",
    "/dogadaji/",
    "/livestream/",
    "/gradovi/",
    "/zajednica/",
    "/iz-zajednice/",
    "/iz-zajednice/bitchamler/",
    "/iz-zajednice/croatianhodl/",
    "/iz-zajednice/lux-bitcoin-clanci-i-prijevodi/",
    "/iz-zajednice/bitcoin-diploma-na-nasem-jeziku/",
    "/iz-zajednice/villa-btc/",
    "/iz-zajednice/bitcoin-drustvo-slovenije/",
    "/iz-zajednice/bitcoin-filozofija-2022/",
  ]) {
    if (!sitemap.includes(`https://dvadesetjedan.com${route}`)) {
      failures.push(`Sitemap ne sadrži ${route}.`)
    }
  }
  if (sitemap.includes("https://dvadesetjedan.com/events/")) {
    failures.push(
      "Legacy redirect /events/ ne smije biti canonical sitemap URL.",
    )
  }
}

if (!exists("events/index.html")) {
  failures.push(
    "Nedostaje barem jedan legacy redirect page: dist/events/index.html.",
  )
}

if (exists("index.html")) {
  const home = fs.readFileSync(path.join(distDir, "index.html"), "utf8")
  if (home.includes("bitcoin-diploma-na-nasem-jeziku")) {
    failures.push(
      "Homepage ne smije sadržavati Bitcoin Diploma projekt ako nije featured.",
    )
  }
}

const optimizedImageRoots = [
  path.join(distDir, "events"),
  path.join(distDir, "images"),
]
const optimizedImages = optimizedImageRoots
  .flatMap(walkFiles)
  .filter((file) => /\.(png|jpe?g)$/i.test(file))

if (exists("social-preview.png")) {
  optimizedImages.push(path.join(distDir, "social-preview.png"))
}

for (const imagePath of optimizedImages) {
  const webpPath = toWebpPath(imagePath)

  if (!fs.existsSync(webpPath)) {
    failures.push(
      `Nedostaje WebP par za dist/${path.relative(distDir, imagePath)}.`,
    )
  }
}

const appJs = fs
  .readdirSync(path.join(distDir, "assets"))
  .filter((file) => file.endsWith(".js"))
  .map((file) => fs.readFileSync(path.join(distDir, "assets", file), "utf8"))
  .join("\n")

if (!appJs.includes("image/webp") || !appJs.includes(".webp")) {
  failures.push("Build ne sadrži WebP picture/source reference.")
}

const optimizedImageSource = readFile("src/components/OptimizedImage.tsx")
for (const requiredSnippet of [
  "<picture",
  '<source srcSet={resolvedWebpSrc} type="image/webp" />',
  "<img",
]) {
  if (!optimizedImageSource.includes(requiredSnippet)) {
    failures.push("OptimizedImage ne čuva očekivani WebP + img fallback markup.")
  }
}

const appSource = readFile("src/App.tsx")
for (const routeImport of [
  'import("@/pages/AboutPage")',
  'import("@/pages/CitiesPage")',
]) {
  if (!appSource.includes(routeImport)) {
    failures.push(`Nedostaje lazy route import: ${routeImport}.`)
  }
}

for (const route of [
  "iz-zajednice/index.html",
  "iz-zajednice/bitchamler/index.html",
  "iz-zajednice/croatianhodl/index.html",
  "iz-zajednice/lux-bitcoin-clanci-i-prijevodi/index.html",
  "iz-zajednice/bitcoin-diploma-na-nasem-jeziku/index.html",
  "iz-zajednice/villa-btc/index.html",
  "iz-zajednice/bitcoin-drustvo-slovenije/index.html",
  "iz-zajednice/bitcoin-filozofija-2022/index.html",
]) {
  if (!exists(route)) failures.push(`Nedostaje dist/${route}.`)
}

if (failures.length) {
  console.error(failures.join("\n"))
  process.exit(1)
}

console.log("Artifact check passed.")
