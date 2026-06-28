import { useEffect, useRef, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import { TelegramIcon } from "@/components/Icons"
import { OptimizedImage } from "@/components/OptimizedImage"
import { navigation, media } from "@/data/site"
import { communityHref } from "@/lib/content"
import { parseRouteFromPath, type Route } from "@/lib/routes"
import {
  applyTheme,
  getInitialTheme,
  storeTheme,
  type ColorTheme,
} from "@/lib/theme"

function isActiveNavigationItem(route: Route, href: string) {
  if (href.startsWith("http")) return false

  if (href === "/clanci/") {
    return route.type === "articles" || route.type === "article"
  }

  if (href === "/dogadaji/") {
    return (
      route.type === "events" ||
      route.type === "event" ||
      route.type === "universityProgram"
    )
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
  const [theme, setTheme] = useState<ColorTheme>(() => getInitialTheme())

  useEffect(() => {
    const onPopState = () =>
      setRoute(parseRouteFromPath(window.location.pathname))

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

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"

    setTheme(nextTheme)
    storeTheme(nextTheme)
    applyTheme(nextTheme)
  }

  const logoUrl =
    theme === "dark" ? "/images/dvadesetjedan-logo-dark.png" : media.logoUrl

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-2.5 sm:gap-4 sm:px-8 sm:py-4">
        <a className="min-w-0 shrink-0 grow-0" href="/">
          {media.logoUrl ? (
            <OptimizedImage
              alt="DvadesetJedan"
              className="block h-auto w-auto max-h-6 max-w-[10rem] object-contain sm:max-h-8 sm:max-w-[13rem]"
              decoding="async"
              pictureClassName="block"
              src={logoUrl}
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
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                target={item.href.startsWith("http") ? "_blank" : undefined}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            aria-label={
              theme === "dark"
                ? "Prebaci na svijetli način"
                : "Prebaci na tamni način"
            }
            className="relative inline-flex size-10 items-center justify-center rounded-full bg-card text-foreground shadow-[var(--shadow-border)] transition-[translate,scale,box-shadow,background-color,color] duration-150 ease-out hover:-translate-y-0.5 hover:bg-background hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100"
            onClick={toggleTheme}
            type="button"
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.span
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                className="absolute inset-0 flex items-center justify-center"
                exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                key={theme}
                transition={{ type: "spring", duration: 0.3, bounce: 0 }}
              >
                {theme === "dark" ? (
                  <Sun className="size-4" />
                ) : (
                  <Moon className="size-4" />
                )}
              </motion.span>
            </AnimatePresence>
          </button>

          <a
            aria-label="Uđi u Telegram"
            className="inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-full bg-card py-2 pl-3 pr-3 text-sm font-medium text-foreground shadow-[var(--shadow-border)] transition-[translate,scale,box-shadow,background-color,color] duration-150 ease-out hover:-translate-y-0.5 hover:bg-background hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 sm:gap-2 sm:pl-3.5 sm:pr-4"
            href={communityHref()}
            rel="noopener noreferrer"
            target="_blank"
          >
            <TelegramIcon />
            <span className="hidden sm:inline">Uđi u Telegram</span>
          </a>
        </div>
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
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
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
