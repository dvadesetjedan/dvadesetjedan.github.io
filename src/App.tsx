import {
  lazy,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"

import type { ArticleEntry } from "@/data/articles"
import { cities } from "@/data/cities"
import { publishedCommunityProjects } from "@/data/communityProjects"
import { episodes } from "@/data/episodes"
import { events } from "@/data/events"
import { HomePage } from "@/pages/HomePage"
import { LoadingPage } from "@/pages/LoadingPage"
import { NotFoundPage } from "@/pages/NotFoundPage"
import {
  cleanPathFromLegacyHash,
  parseRouteFromPath,
  type Route,
} from "@/lib/routes"

const AboutPage = lazy(() =>
  import("@/pages/AboutPage").then((module) => ({
    default: module.AboutPage,
  })),
)

const TopicsPage = lazy(() =>
  import("@/pages/TopicsPage").then((module) => ({
    default: module.TopicsPage,
  })),
)

const FaqPage = lazy(() =>
  import("@/pages/FaqPage").then((module) => ({
    default: module.FaqPage,
  })),
)

const ResourcesPage = lazy(() =>
  import("@/pages/ResourcesPage").then((module) => ({
    default: module.ResourcesPage,
  })),
)

const SafetyPage = lazy(() =>
  import("@/pages/SafetyPage").then((module) => ({
    default: module.SafetyPage,
  })),
)

const LivestreamPage = lazy(() =>
  import("@/pages/LivestreamPage").then((module) => ({
    default: module.LivestreamPage,
  })),
)

const LivestreamEpisodePage = lazy(() =>
  import("@/pages/LivestreamEpisodePage").then((module) => ({
    default: module.LivestreamEpisodePage,
  })),
)

const ArticlesPage = lazy(() =>
  import("@/pages/ArticlesPage").then((module) => ({
    default: module.ArticlesPage,
  })),
)

const ArticlePage = lazy(() =>
  import("@/pages/ArticlePage").then((module) => ({
    default: module.ArticlePage,
  })),
)

const BeginnersPage = lazy(() =>
  import("@/pages/BeginnersPage").then((module) => ({
    default: module.BeginnersPage,
  })),
)

const ContributePage = lazy(() =>
  import("@/pages/ContributePage").then((module) => ({
    default: module.ContributePage,
  })),
)

const CommunityPage = lazy(() =>
  import("@/pages/CommunityPage").then((module) => ({
    default: module.CommunityPage,
  })),
)

const CommunityProjectsPage = lazy(() =>
  import("@/pages/CommunityProjectsPage").then((module) => ({
    default: module.CommunityProjectsPage,
  })),
)

const CommunityProjectPage = lazy(() =>
  import("@/pages/CommunityProjectPage").then((module) => ({
    default: module.CommunityProjectPage,
  })),
)

const EventsPage = lazy(() =>
  import("@/pages/EventsPage").then((module) => ({
    default: module.EventsPage,
  })),
)

const EventPage = lazy(() =>
  import("@/pages/EventPage").then((module) => ({
    default: module.EventPage,
  })),
)

const CitiesPage = lazy(() =>
  import("@/pages/CitiesPage").then((module) => ({
    default: module.CitiesPage,
  })),
)

const CityPage = lazy(() =>
  import("@/pages/CityPage").then((module) => ({
    default: module.CityPage,
  })),
)

function App() {
  const navigationKind = useRef<"initial" | "push" | "pop">("initial")
  const [route, setRoute] = useState<Route>(() => {
    const legacyPath = cleanPathFromLegacyHash(window.location.hash)

    if (legacyPath) {
      window.history.replaceState(null, "", legacyPath)
      return parseRouteFromPath(legacyPath)
    }

    return parseRouteFromPath(window.location.pathname)
  })
  const [articleEntries, setArticleEntries] = useState<ArticleEntry[] | null>(
    null,
  )

  useEffect(() => {
    const onPopState = () => {
      navigationKind.current = "pop"
      setRoute(parseRouteFromPath(window.location.pathname))
      window.dispatchEvent(new Event("dvadesetjedan:navigation"))
    }

    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      const target = event.target
      if (!(target instanceof Element)) return

      const anchor = target.closest<HTMLAnchorElement>("a[href]")
      if (!anchor) return
      if (anchor.hasAttribute("download")) return
      if (anchor.target && anchor.target !== "_self") return

      const url = new URL(anchor.href, window.location.href)
      if (url.origin !== window.location.origin) return
      if (/\/[^/]+\.[a-z0-9]{2,8}$/i.test(url.pathname)) return

      event.preventDefault()
      navigationKind.current = "push"
      window.history.pushState(
        null,
        "",
        `${url.pathname}${url.search}${url.hash}`,
      )
      setRoute(parseRouteFromPath(url.pathname))
      window.dispatchEvent(new Event("dvadesetjedan:navigation"))
    }

    window.history.scrollRestoration = "auto"
    window.addEventListener("popstate", onPopState)
    document.addEventListener("click", onClick)
    return () => {
      window.removeEventListener("popstate", onPopState)
      document.removeEventListener("click", onClick)
    }
  }, [])

  useEffect(() => {
    let frame = 0
    let attempts = 0
    let cancelled = false

    const settleNavigation = () => {
      if (cancelled) return

      const rawHash = window.location.hash.slice(1)
      const hashTarget = rawHash
        ? document.getElementById(decodeURIComponent(rawHash))
        : null

      if (rawHash && !hashTarget && attempts < 120) {
        attempts += 1
        frame = window.requestAnimationFrame(settleNavigation)
        return
      }

      if (
        !rawHash &&
        navigationKind.current !== "initial" &&
        document.querySelector('[data-route-loading="true"]') &&
        attempts < 120
      ) {
        attempts += 1
        frame = window.requestAnimationFrame(settleNavigation)
        return
      }

      if (hashTarget) {
        hashTarget.scrollIntoView({ block: "start" })
        hashTarget.setAttribute("tabindex", "-1")
        hashTarget.focus({ preventScroll: true })
      } else {
        if (navigationKind.current === "push") {
          window.scrollTo({ top: 0, behavior: "auto" })
        }

        if (navigationKind.current !== "initial") {
          document
            .getElementById("main-content")
            ?.focus({ preventScroll: true })
        }
      }

      navigationKind.current = "initial"
    }

    frame = window.requestAnimationFrame(settleNavigation)

    return () => {
      cancelled = true
      window.cancelAnimationFrame(frame)
    }
  }, [route])

  useEffect(() => {
    if (
      route.type !== "articles" &&
      route.type !== "article" &&
      route.type !== "beginners"
    ) {
      return
    }

    if (articleEntries) return

    import("@/data/articles").then((module) => {
      setArticleEntries(module.articles)
    })
  }, [articleEntries, route.type])

  const selectedEvent = useMemo(() => {
    if (route.type !== "event") return undefined
    return events.find((event) => event.slug === route.slug)
  }, [route])

  const selectedEpisode = useMemo(() => {
    if (route.type !== "livestreamEpisode") return undefined
    return episodes.find((episode) => episode.slug === route.slug)
  }, [route])

  const selectedCity = useMemo(() => {
    if (route.type !== "city") return undefined
    return cities.find((city) => city.slug === route.slug)
  }, [route])

  const selectedCommunityProject = useMemo(() => {
    if (route.type !== "communityProject") return undefined
    return publishedCommunityProjects.find(
      (project) => project.slug === route.slug,
    )
  }, [route])

  const selectedArticle = useMemo(() => {
    if (!articleEntries || route.type !== "article") return undefined
    return articleEntries.find((article) => article.slug === route.slug)
  }, [articleEntries, route])

  let page: ReactNode

  switch (route.type) {
    case "home":
      page = <HomePage />
      break
    case "about":
      page = <AboutPage />
      break
    case "topics":
      page = <TopicsPage />
      break
    case "faq":
      page = <FaqPage />
      break
    case "resources":
      page = <ResourcesPage />
      break
    case "safety":
      page = <SafetyPage />
      break
    case "livestream":
      page = <LivestreamPage />
      break
    case "livestreamEpisode":
      page = selectedEpisode ? (
        <LivestreamEpisodePage episode={selectedEpisode} />
      ) : (
        <NotFoundPage />
      )
      break
    case "articles":
      page = articleEntries ? (
        <ArticlesPage articles={articleEntries} />
      ) : (
        <LoadingPage
          eyebrow="Članci"
          message="Pripremamo statične članke i početni redoslijed za čitanje."
          title="Učitavamo pisani signal."
        />
      )
      break
    case "article":
      if (!articleEntries) {
        page = (
          <LoadingPage
            eyebrow="Članci"
            message="Pripremamo odabrani članak."
            title="Učitavamo članak."
          />
        )
        break
      }

      page = selectedArticle ? (
        <ArticlePage article={selectedArticle} articles={articleEntries} />
      ) : (
        <NotFoundPage />
      )
      break
    case "beginners":
      page = articleEntries ? (
        <BeginnersPage articles={articleEntries} />
      ) : (
        <LoadingPage
          eyebrow="Početnici"
          message="Pripremamo početni put kroz najvažnije teme."
          title="Učitavamo početni put."
        />
      )
      break
    case "contribute":
      page = <ContributePage />
      break
    case "community":
      page = <CommunityPage />
      break
    case "communityProjects":
      page = <CommunityProjectsPage />
      break
    case "communityProject":
      page = selectedCommunityProject ? (
        <CommunityProjectPage project={selectedCommunityProject} />
      ) : (
        <NotFoundPage />
      )
      break
    case "events":
      page = <EventsPage events={events} />
      break
    case "event":
      page = selectedEvent ? (
        <EventPage event={selectedEvent} />
      ) : (
        <NotFoundPage />
      )
      break
    case "cities":
      page = <CitiesPage cities={cities} events={events} />
      break
    case "city":
      page = selectedCity ? (
        <CityPage city={selectedCity} events={events} />
      ) : (
        <NotFoundPage />
      )
      break
    case "notFound":
      page = <NotFoundPage />
      break
    default:
      page = <NotFoundPage />
  }

  return (
    <Suspense
      fallback={
        <LoadingPage
          eyebrow="DvadesetJedan"
          message="Pripremamo traženu stranicu."
          title="Učitavamo sadržaj."
        />
      }
    >
      {page}
    </Suspense>
  )
}

export default App
