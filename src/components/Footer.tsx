import { useEffect, useState } from "react"

import { Separator } from "@/components/ui/separator"
import { footerLinks } from "@/data/site"
import { parseRouteFromPath, type Route } from "@/lib/routes"

function isActiveFooterLink(route: Route, href: string) {
  if (href.startsWith("http")) return false

  if (href === "/clanci/") {
    return route.type === "articles" || route.type === "article"
  }

  if (href === "/dogadaji/") {
    return route.type === "events" || route.type === "event"
  }

  if (href === "/livestream/") {
    return route.type === "livestream" || route.type === "livestreamEpisode"
  }

  if (href === "/gradovi/") {
    return route.type === "cities" || route.type === "city"
  }

  const routeByHref: Record<string, Route["type"]> = {
    "/o-projektu/": "about",
    "/teme/": "topics",
    "/faq/": "faq",
    "/resursi/": "resources",
    "/sigurnost/": "safety",
    "/pocni-ovdje/": "beginners",
    "/zajednica/": "community",
    "/doprinesi/": "contribute",
  }

  return routeByHref[href] === route.type
}

export function Footer() {
  const midpoint = Math.ceil(footerLinks.length / 2)
  const [route, setRoute] = useState<Route>(() =>
    parseRouteFromPath(window.location.pathname),
  )

  useEffect(() => {
    const onNavigation = () =>
      setRoute(parseRouteFromPath(window.location.pathname))

    window.addEventListener("popstate", onNavigation)
    window.addEventListener("dvadesetjedan:navigation", onNavigation)
    return () => {
      window.removeEventListener("popstate", onNavigation)
      window.removeEventListener("dvadesetjedan:navigation", onNavigation)
    }
  }, [])

  return (
    <footer className="mx-auto max-w-7xl px-5 pb-12 sm:px-8">
      <Separator className="mb-8" />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem]">
        <div>
          <h2 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
            DvadesetJedan
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
            Regionalni Bitcoin-only signal za Balkan. Lokalni jezik. Otvorena
            zajednica.
          </p>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">
            Sadržaj je obrazovne naravi i ne predstavlja financijsko, porezno ni
            pravno savjetovanje.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {[footerLinks.slice(0, midpoint), footerLinks.slice(midpoint)].map(
            (group, index) => (
              <ul
                key={index}
                className="space-y-3 text-sm text-muted-foreground"
              >
                {group.map((item) => {
                  const isActive = isActiveFooterLink(route, item.href)

                  return (
                    <li key={item.label}>
                      <a
                        aria-current={isActive ? "page" : undefined}
                        className={`inline-flex w-fit border-b-2 pb-1 transition-colors ${
                          isActive
                            ? "border-primary text-foreground"
                            : "border-transparent hover:border-primary/50 hover:text-foreground"
                        }`}
                        href={item.href}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        target={item.external ? "_blank" : undefined}
                      >
                        {item.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            ),
          )}
        </div>
      </div>
    </footer>
  )
}
