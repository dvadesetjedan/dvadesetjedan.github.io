import fs from "node:fs"
import path from "node:path"

const distDir = path.join(process.cwd(), "dist")
const failures = []

function exists(relativePath) {
  return fs.existsSync(path.join(distDir, relativePath))
}

for (const file of ["index.html", "404.html", "sitemap.xml", "robots.txt", "rss.xml", "feed.json"]) {
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
  for (const route of ["/", "/pocni-ovdje/", "/sigurnost/", "/clanci/", "/dogadaji/", "/livestream/", "/gradovi/", "/zajednica/"]) {
    if (!sitemap.includes(`https://dvadesetjedan.com${route}`)) {
      failures.push(`Sitemap ne sadrži ${route}.`)
    }
  }
  if (sitemap.includes("https://dvadesetjedan.com/events/")) {
    failures.push("Legacy redirect /events/ ne smije biti canonical sitemap URL.")
  }
}

if (!exists("events/index.html")) {
  failures.push("Nedostaje barem jedan legacy redirect page: dist/events/index.html.")
}

if (failures.length) {
  console.error(failures.join("\n"))
  process.exit(1)
}

console.log("Artifact check passed.")
