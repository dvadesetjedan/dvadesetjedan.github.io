import fs from "node:fs"
import path from "node:path"

const sourceRoot = "src"
const failures = []

const validInternalPrefixes = [
  "/",
  "/o-projektu/",
  "/pocni-ovdje/",
  "/teme/",
  "/faq/",
  "/resursi/",
  "/clanci/",
  "/livestream/",
  "/dogadaji/",
  "/gradovi/",
  "/zajednica/",
  "/doprinesi/",
]

function listSourceFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name)

    if (entry.isDirectory()) return listSourceFiles(fullPath)
    if (/\.(ts|tsx)$/.test(entry.name)) return [fullPath]

    return []
  })
}

for (const filePath of listSourceFiles(sourceRoot)) {
  const source = fs.readFileSync(filePath, "utf8")

  if (filePath !== "src/lib/routes.ts" && source.includes("#/")) {
    failures.push(`Canonical source must not use hash route in ${filePath}.`)
  }
}

const siteSource = fs.readFileSync("src/data/site.ts", "utf8")
for (const route of validInternalPrefixes.slice(1)) {
  if (!siteSource.includes(route)) {
    failures.push(`Missing clean internal route in src/data/site.ts: ${route}`)
  }
}

const routeSource = fs.readFileSync("src/lib/routes.ts", "utf8")
for (const route of validInternalPrefixes) {
  if (!routeSource.includes(route)) {
    failures.push(`Route parser does not mention ${route}`)
  }
}

for (const alias of ["/pocetnici/", "/eventi/"]) {
  if (!routeSource.includes(alias)) {
    failures.push(`Route parser is missing legacy alias ${alias}`)
  }
}

if (failures.length) {
  console.error(failures.join("\n"))
  process.exit(1)
}

console.log("Route/link check passed.")
