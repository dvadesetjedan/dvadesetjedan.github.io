import fs from "node:fs"
import path from "node:path"

const sourceRoot = "src"
const sitePath = "src/data/site.ts"
const routesPath = "src/lib/routes.ts"

const forbiddenAnchors = [
  '"#o-projektu"',
  '"#teme"',
  '"#pitanja"',
  '"#emisije"',
  'href="#"',
  'href: "#"',
]

const requiredHashRoutes = [
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

const requiredRoutePaths = [
  "/o-projektu",
  "/pocetnici",
  "/clanci",
  "/teme",
  "/resursi",
  "/faq",
  "/livestream",
  "/dogadaji",
  "/doprinesi",
]

function listSourceFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name)

    if (entry.isDirectory()) return listSourceFiles(fullPath)
    if (/\.(ts|tsx)$/.test(entry.name)) return [fullPath]

    return []
  })
}

const failures = []

for (const filePath of listSourceFiles(sourceRoot)) {
  const source = fs.readFileSync(filePath, "utf8")

  for (const pattern of forbiddenAnchors) {
    if (source.includes(pattern)) {
      failures.push(`Zabranjen goli anchor u ${filePath}: ${pattern}`)
    }
  }
}

const siteSource = fs.readFileSync(sitePath, "utf8")
for (const route of requiredHashRoutes) {
  if (!siteSource.includes(route)) {
    failures.push(`Nedostaje poznata interna ruta u ${sitePath}: ${route}`)
  }
}

const routesSource = fs.readFileSync(routesPath, "utf8")
for (const routePath of requiredRoutePaths) {
  if (!routesSource.includes(routePath)) {
    failures.push(`Ruta nije podržana u ${routesPath}: ${routePath}`)
  }
}

if (failures.length) {
  console.error(failures.join("\n"))
  process.exit(1)
}

console.log("Route/link check passed.")
