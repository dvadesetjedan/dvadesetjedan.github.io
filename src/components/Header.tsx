import { useEffect, useRef, useState } from "react"
import { Languages, Moon, Sun } from "lucide-react"

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
import {
  getInitialLocale,
  localeLabels,
  locales,
  storeLocale,
  type Locale,
} from "@/lib/locale"

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

const headerCopy = {
  hr: {
    navigation: ["O projektu", "Počni ovdje", "Članci", "Livestream", "Događaji", "Gradovi", "Zajednica", "Doprinesi"],
    chooseLanguage: "Odaberi jezik",
    telegram: "Uđi u Telegram",
    light: "Prebaci na svijetli način",
    dark: "Prebaci na tamni način",
    navigationLabel: "Glavna navigacija",
  },
  sr: {
    navigation: ["O projektu", "Počni ovde", "Članci", "Prenos uživo", "Događaji", "Gradovi", "Zajednica", "Doprinesi"],
    chooseLanguage: "Izaberi jezik",
    telegram: "Uđi u Telegram",
    light: "Prebaci na svetli prikaz",
    dark: "Prebaci na tamni prikaz",
    navigationLabel: "Glavna navigacija",
  },
  sl: {
    navigation: ["O projektu", "Začni tukaj", "Članki", "Prenos v živo", "Dogodki", "Mesta", "Skupnost", "Prispevaj"],
    chooseLanguage: "Izberi jezik",
    telegram: "Vstopi v Telegram",
    light: "Preklopi na svetli način",
    dark: "Preklopi na temni način",
    navigationLabel: "Glavna navigacija",
  },
} as const

export function Header() {
  const mobileNavRef = useRef<HTMLElement>(null)
  const [route, setRoute] = useState<Route>(() =>
    parseRouteFromPath(window.location.pathname),
  )
  const [theme, setTheme] = useState<ColorTheme>(() => getInitialTheme())
  const [locale, setLocale] = useState<Locale>(() => getInitialLocale())

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
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
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
  const copy = headerCopy[locale]

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-2.5 sm:gap-4 sm:px-8 sm:py-4">
        <a
          aria-label="DvadesetJedan početna"
          className="inline-flex min-h-11 min-w-0 shrink-0 grow-0 items-center"
          href="/"
        >
          {media.logoUrl ? (
            <OptimizedImage
              alt="DvadesetJedan"
              className="block h-auto w-auto max-h-6 max-w-[10rem] object-contain sm:max-h-8 sm:max-w-[13rem]"
              decoding="async"
              pictureClassName="block"
              src={logoUrl}
              width={850}
              height={74}
            />
          ) : (
            <span className="text-lg font-semibold tracking-[-0.03em] text-foreground">
              DvadesetJedan
            </span>
          )}
        </a>

        <nav className="hidden items-center gap-4 text-sm text-muted-foreground min-[1160px]:flex xl:gap-6">
          {navigation.map((item, index) => {
            const isActive = isActiveNavigationItem(route, item.href)

            return (
              <a
                key={item.label}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex min-h-11 items-center whitespace-nowrap border-b transition-colors ${
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
                {copy.navigation[index]}
              </a>
            )
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <label className="relative inline-flex size-11 items-center justify-center rounded-full bg-card text-foreground shadow-[var(--shadow-border)] transition-[translate,scale,box-shadow,background-color,color] duration-150 ease-out hover:-translate-y-0.5 hover:bg-background hover:shadow-[var(--shadow-border-hover)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
            <Languages aria-hidden="true" className="pointer-events-none absolute size-4" />
            <select
              aria-label={copy.chooseLanguage}
              className="absolute inset-0 cursor-pointer appearance-none bg-transparent text-transparent outline-none"
              onChange={(event) => {
                const nextLocale = event.target.value as Locale
                setLocale(nextLocale)
                storeLocale(nextLocale)
              }}
              value={locale}
            >
              {locales.map((item) => (
                <option key={item} value={item}>
                  {localeLabels[item]}
                </option>
              ))}
            </select>
          </label>
          <button
            aria-label={
              theme === "dark" ? copy.light : copy.dark
            }
            className="relative inline-flex size-11 items-center justify-center rounded-full bg-card text-foreground shadow-[var(--shadow-border)] transition-[translate,scale,box-shadow,background-color,color] duration-150 ease-out hover:-translate-y-0.5 hover:bg-background hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100"
            onClick={toggleTheme}
            type="button"
          >
            <span
              aria-hidden="true"
              className={`absolute inset-0 flex items-center justify-center transition-[opacity,scale,filter] duration-200 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none ${
                theme === "dark"
                  ? "scale-100 opacity-100 blur-0"
                  : "scale-[0.25] opacity-0 blur-[4px]"
              }`}
            >
              <Sun className="size-4" />
            </span>
            <span
              aria-hidden="true"
              className={`absolute inset-0 flex items-center justify-center transition-[opacity,scale,filter] duration-200 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none ${
                theme === "light"
                  ? "scale-100 opacity-100 blur-0"
                  : "scale-[0.25] opacity-0 blur-[4px]"
              }`}
            >
              <Moon className="size-4" />
            </span>
          </button>

          <a
            aria-label={copy.telegram}
            className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full bg-card py-2 pl-3 pr-3 text-sm font-medium text-foreground shadow-[var(--shadow-border)] transition-[translate,scale,box-shadow,background-color,color] duration-150 ease-out hover:-translate-y-0.5 hover:bg-background hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 sm:gap-2 sm:pl-3.5 sm:pr-6"
            href={communityHref()}
            rel="noopener noreferrer"
            target="_blank"
          >
            <TelegramIcon />
            <span className="hidden sm:inline">{copy.telegram}</span>
          </a>
        </div>
      </div>

      <div className="border-t border-border/60 min-[1160px]:hidden">
        <nav
          aria-label={copy.navigationLabel}
          className="mobile-scroll-nav mx-auto flex max-w-7xl gap-5 overflow-x-auto px-5 py-3 text-sm text-muted-foreground sm:px-8"
          ref={mobileNavRef}
        >
          {navigation.map((item, index) => {
            const isActive = isActiveNavigationItem(route, item.href)

            return (
              <a
                key={item.label}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex min-h-11 shrink-0 items-center whitespace-nowrap border-b transition-colors ${
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
                {copy.navigation[index]}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
