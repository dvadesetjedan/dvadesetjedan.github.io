import { ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

import { navigation, media } from "@/data/site"
import { communityHref } from "@/lib/content"
import { parseRouteFromPath, type Route } from "@/lib/routes"

function isActiveNavigationItem(route: Route, href: string) {
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
    "/pocni-ovdje/": "beginners",
    "/zajednica/": "community",
    "/doprinesi/": "contribute",
  }

  return routeByHref[href] === route.type
}

export function Header() {
  const [route, setRoute] = useState<Route>(() =>
    parseRouteFromPath(window.location.pathname),
  )

  useEffect(() => {
    const onPopState = () => setRoute(parseRouteFromPath(window.location.pathname))

    window.addEventListener("popstate", onPopState)
    window.addEventListener("dvadesetjedan:navigation", onPopState)
    return () => {
      window.removeEventListener("popstate", onPopState)
      window.removeEventListener("dvadesetjedan:navigation", onPopState)
    }
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 sm:gap-4 sm:px-8">
        <a className="min-w-0 shrink-0 grow-0" href="/">
          {media.logoUrl ? (
            <img
              alt="DvadesetJedan"
              className="block h-auto w-auto max-h-7 max-w-[11rem] object-contain sm:max-h-8 sm:max-w-[13rem]"
              src={media.logoUrl}
            />
          ) : (
            <span className="text-lg font-semibold tracking-[-0.03em] text-foreground">
              DvadesetJedan
            </span>
          )}
        </a>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {navigation.map((item) => {
            const isActive = isActiveNavigationItem(route, item.href)

            return (
              <a
                key={item.label}
                aria-current={isActive ? "page" : undefined}
                className={`whitespace-nowrap border-b transition-colors ${
                  isActive
                    ? "border-primary text-foreground"
                    : "border-transparent hover:text-foreground"
                }`}
                href={item.href}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                target={item.href.startsWith("http") ? "_blank" : undefined}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <a
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border/80 bg-card px-3 py-2 text-sm font-medium text-foreground sm:px-4"
          href={communityHref()}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="hidden sm:inline">Uđi u Telegram</span>
          <span className="sm:hidden">Telegram</span>
        </a>
      </div>

      <div className="relative border-t border-border/60 md:hidden">
        <nav
          aria-label="Glavna navigacija"
          className="mobile-scroll-nav mx-auto flex max-w-7xl gap-5 overflow-x-auto px-5 py-3 pr-16 text-sm text-muted-foreground sm:px-8 sm:pr-20"
        >
          {navigation.map((item) => {
            const isActive = isActiveNavigationItem(route, item.href)

            return (
              <a
                key={item.label}
                aria-current={isActive ? "page" : undefined}
                className={`shrink-0 whitespace-nowrap border-b transition-colors ${
                  isActive
                    ? "border-primary text-foreground"
                    : "border-transparent hover:text-foreground"
                }`}
                href={item.href}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                target={item.href.startsWith("http") ? "_blank" : undefined}
              >
                {item.label}
              </a>
            )
          })}
        </nav>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 flex w-20 items-center justify-end bg-gradient-to-l from-background from-45% via-background/92 to-transparent pr-4 sm:w-24 sm:pr-6"
        >
          <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
            <ChevronRight className="size-4" />
          </span>
        </div>
      </div>
    </header>
  )
}
