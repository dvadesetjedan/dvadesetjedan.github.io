export type Route =
  | { type: "home" }
  | { type: "about" }
  | { type: "topics" }
  | { type: "faq" }
  | { type: "livestream" }
  | { type: "articles" }
  | { type: "article"; slug: string }
  | { type: "beginners" }
  | { type: "contribute" }
  | { type: "events" }
  | { type: "event"; slug: string }
  | { type: "notFound"; path: string }

export function parseRoute(hash: string): Route {
  const cleanHash = hash.replace(/^#/, "") || "/"

  if (cleanHash === "/" || cleanHash === "") return { type: "home" }
  if (cleanHash === "/o-projektu") return { type: "about" }
  if (cleanHash === "/teme") return { type: "topics" }
  if (cleanHash === "/faq") return { type: "faq" }
  if (cleanHash === "/livestream") return { type: "livestream" }
  if (cleanHash === "/clanci") return { type: "articles" }
  if (cleanHash.startsWith("/clanci/")) {
    const slug = cleanHash.replace("/clanci/", "")
    return slug
      ? { type: "article", slug }
      : { type: "notFound", path: cleanHash }
  }
  if (cleanHash === "/pocetnici") return { type: "beginners" }
  if (cleanHash === "/doprinesi") return { type: "contribute" }
  if (cleanHash === "/dogadaji" || cleanHash === "/eventi") {
    return { type: "events" }
  }
  if (cleanHash.startsWith("/dogadaji/") || cleanHash.startsWith("/eventi/")) {
    const slug = cleanHash.replace(/^\/(dogadaji|eventi)\//, "")
    return slug
      ? { type: "event", slug }
      : { type: "notFound", path: cleanHash }
  }

  return { type: "notFound", path: cleanHash }
}
