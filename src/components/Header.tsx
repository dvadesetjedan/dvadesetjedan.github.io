import { useEffect, useRef, useState } from "react"

import { TelegramIcon } from "@/components/Icons"
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
  const mobileNavRef = useRef<HTMLElement>(null)
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

  useEffect(() => {
    const mobileNav = mobileNavRef.current
    const activeLink = mobileNav?.querySelector<HTMLAnchorElement>(
      'a[aria-current="page"]',
    )

    if (!mobileNav || !activeLink) return

    window.requestAnimationFrame(() => {
      const navRect = mobileNav.getBoundingClientRect()
      const linkRect = activeLink.getBoundingClientRect()
      const targetLeft =
        mobileNav.scrollLeft +
        linkRect.left -
        navRect.left -
        (navRect.width - linkRect.width) / 2

      mobileNav.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: "smooth",
      })
    })
  }, [route])

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-2.5 sm:gap-4 sm:px-8 sm:py-4">
        <a className="min-w-0 shrink-0 grow-0" href="/">
          {media.logoUrl ? (
            <img
              alt="DvadesetJedan"
              className="block h-auto w-auto max-h-6 max-w-[10rem] object-contain sm:max-h-8 sm:max-w-[13rem]"
              src={media.logoUrl}
            />
          ) : (
            <span className="text-lg font-semibold tracking-[-0.03em] text-foreground">
              DvadesetJedan
            </span>
          )}
        </a>

        <nav className="hidden items-center gap-4 text-sm text-muted-foreground min-[1160px]:flex xl:gap-6">
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
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/80 bg-card px-3 py-1.5 text-sm font-medium text-foreground sm:gap-2 sm:px-4 sm:py-2"
          href={communityHref()}
          rel="noopener noreferrer"
          target="_blank"
        >
          <TelegramIcon />
          <span className="hidden sm:inline">Uđi u Telegram</span>
          <span className="sm:hidden">Telegram</span>
        </a>
      </div>

      <div className="border-t border-border/60 min-[1160px]:hidden">
        <nav
          aria-label="Glavna navigacija"
          className="mobile-scroll-nav mx-auto flex max-w-7xl gap-5 overflow-x-auto px-5 py-3 text-sm text-muted-foreground sm:px-8"
          ref={mobileNavRef}
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
      </div>
    </header>
  )
}
