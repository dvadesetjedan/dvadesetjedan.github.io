import fs from "node:fs"

const siteSource = fs.readFileSync("src/data/site.ts", "utf8")

const forbiddenAnchors = [
  '"#o-projektu"',
  '"#teme"',
  '"#pitanja"',
  '"#emisije"',
  "href: \"#\"",
]

const requiredRoutes = [
  "#/o-projektu",
  "#/pocetnici",
  "#/clanci",
  "#/teme",
  "#/resursi",
  "#/faq",
  "#/livestream",
  "#/dogadaji",
  "#/doprinesi",
]

const failures = [
  ...forbiddenAnchors
    .filter((anchor) => siteSource.includes(anchor))
    .map((anchor) => `Zabranjen goli anchor u src/data/site.ts: ${anchor}`),
  ...requiredRoutes
    .filter((route) => !siteSource.includes(route))
    .map((route) => `Nedostaje poznata interna ruta u src/data/site.ts: ${route}`),
]

if (failures.length) {
  console.error(failures.join("\n"))
  process.exit(1)
}

console.log("Route/link check passed.")
