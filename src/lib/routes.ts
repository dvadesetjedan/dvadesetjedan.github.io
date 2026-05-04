export type Route =
  | { type: "home" }
  | { type: "about" }
  | { type: "topics" }
  | { type: "faq" }
  | { type: "resources" }
  | { type: "safety" }
  | { type: "livestream" }
  | { type: "livestreamEpisode"; slug: string }
  | { type: "articles" }
  | { type: "article"; slug: string }
  | { type: "beginners" }
  | { type: "community" }
  | { type: "contribute" }
  | { type: "events" }
  | { type: "event"; slug: string }
  | { type: "cities" }
  | { type: "city"; slug: string }
  | { type: "notFound"; path: string }

const routeAliases = new Map([
  ["/pocetnici/", "/pocni-ovdje/"],
  ["/eventi/", "/dogadaji/"],
])

export function normalizePath(pathname: string) {
  const withoutQuery = pathname.split("?")[0]?.split("#")[0] || "/"
  const leadingSlash = withoutQuery.startsWith("/")
    ? withoutQuery
    : `/${withoutQuery}`
  const withTrailingSlash = leadingSlash.endsWith("/")
    ? leadingSlash
    : `${leadingSlash}/`

  return routeAliases.get(withTrailingSlash) ?? withTrailingSlash
}

export function cleanPathFromLegacyHash(hash: string) {
  if (!hash.startsWith("#/")) return null

  const legacyPath = normalizePath(hash.replace(/^#/, ""))

  if (legacyPath.startsWith("/eventi/")) {
    return legacyPath.replace(/^\/eventi\//, "/dogadaji/")
  }

  return normalizePath(legacyPath)
}

export function parseRouteFromPath(pathname: string): Route {
  const cleanPath = normalizePath(pathname)

  if (cleanPath === "/") return { type: "home" }
  if (cleanPath === "/o-projektu/") return { type: "about" }
  if (cleanPath === "/teme/") return { type: "topics" }
  if (cleanPath === "/faq/") return { type: "faq" }
  if (cleanPath === "/resursi/") return { type: "resources" }
  if (cleanPath === "/sigurnost/") return { type: "safety" }
  if (cleanPath === "/livestream/") return { type: "livestream" }
  if (cleanPath.startsWith("/livestream/")) {
    const slug = cleanPath.replace(/^\/livestream\//, "").replace(/\/$/, "")

    return slug
      ? { type: "livestreamEpisode", slug }
      : { type: "notFound", path: cleanPath }
  }
  if (cleanPath === "/clanci/") return { type: "articles" }
  if (cleanPath.startsWith("/clanci/")) {
    const slug = cleanPath.replace(/^\/clanci\//, "").replace(/\/$/, "")
    return slug
      ? { type: "article", slug }
      : { type: "notFound", path: cleanPath }
  }
  if (cleanPath === "/pocni-ovdje/") return { type: "beginners" }
  if (cleanPath === "/zajednica/") return { type: "community" }
  if (cleanPath === "/doprinesi/") return { type: "contribute" }
  if (cleanPath === "/dogadaji/") {
    return { type: "events" }
  }
  if (cleanPath.startsWith("/dogadaji/")) {
    const slug = cleanPath.replace(/^\/dogadaji\//, "").replace(/\/$/, "")
    return slug
      ? { type: "event", slug }
      : { type: "notFound", path: cleanPath }
  }
  if (cleanPath === "/gradovi/") return { type: "cities" }
  if (cleanPath.startsWith("/gradovi/")) {
    const slug = cleanPath.replace(/^\/gradovi\//, "").replace(/\/$/, "")

    return slug
      ? { type: "city", slug }
      : { type: "notFound", path: cleanPath }
  }

  return { type: "notFound", path: cleanPath }
}

export const parseRoute = parseRouteFromPath
