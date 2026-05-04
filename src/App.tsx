import { useEffect, useMemo, useState } from "react"

import type { ArticleEntry } from "@/data/articles"
import { cities } from "@/data/cities"
import { episodes } from "@/data/episodes"
import { events } from "@/data/events"
import { AboutPage } from "@/pages/AboutPage"
import { ArticlesPage } from "@/pages/ArticlesPage"
import { ArticlePage } from "@/pages/ArticlePage"
import { BeginnersPage } from "@/pages/BeginnersPage"
import { ContributePage } from "@/pages/ContributePage"
import { CitiesPage } from "@/pages/CitiesPage"
import { CityPage } from "@/pages/CityPage"
import { CommunityPage } from "@/pages/CommunityPage"
import { EventsPage } from "@/pages/EventsPage"
import { EventPage } from "@/pages/EventPage"
import { FaqPage } from "@/pages/FaqPage"
import { HomePage } from "@/pages/HomePage"
import { LivestreamPage } from "@/pages/LivestreamPage"
import { LivestreamEpisodePage } from "@/pages/LivestreamEpisodePage"
import { LoadingPage } from "@/pages/LoadingPage"
import { NotFoundPage } from "@/pages/NotFoundPage"
import { ResourcesPage } from "@/pages/ResourcesPage"
import { SafetyPage } from "@/pages/SafetyPage"
import { TopicsPage } from "@/pages/TopicsPage"
import {
  cleanPathFromLegacyHash,
  parseRouteFromPath,
  type Route,
} from "@/lib/routes"

function App() {
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
      setRoute(parseRouteFromPath(window.location.pathname))
      window.scrollTo({ top: 0, behavior: "auto" })
    }

    const onClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const anchor = target.closest("a")
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith("/") || href.startsWith("//")) return
      if (anchor.target || event.metaKey || event.ctrlKey || event.shiftKey) {
        return
      }

      event.preventDefault()
      window.history.pushState(null, "", href)
      onPopState()
      window.dispatchEvent(new Event("dvadesetjedan:navigation"))
    }

    window.addEventListener("popstate", onPopState)
    document.addEventListener("click", onClick)
    return () => {
      window.removeEventListener("popstate", onPopState)
      document.removeEventListener("click", onClick)
    }
  }, [])

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

  const selectedArticle = useMemo(() => {
    if (!articleEntries || route.type !== "article") return undefined
    return articleEntries.find((article) => article.slug === route.slug)
  }, [articleEntries, route])

  switch (route.type) {
    case "home":
      return <HomePage />
    case "about":
      return <AboutPage />
    case "topics":
      return <TopicsPage />
    case "faq":
      return <FaqPage />
    case "resources":
      return <ResourcesPage />
    case "safety":
      return <SafetyPage />
    case "livestream":
      return <LivestreamPage />
    case "livestreamEpisode":
      return selectedEpisode ? (
        <LivestreamEpisodePage episode={selectedEpisode} />
      ) : (
        <NotFoundPage />
      )
    case "articles":
      return articleEntries ? (
        <ArticlesPage articles={articleEntries} />
      ) : (
        <LoadingPage
          eyebrow="Članci"
          message="Pripremamo statične članke i početni redoslijed za čitanje."
          title="Učitavamo pisani signal."
        />
      )
    case "article":
      if (!articleEntries) {
        return (
          <LoadingPage
            eyebrow="Članci"
            message="Pripremamo odabrani članak."
            title="Učitavamo članak."
          />
        )
      }

      return selectedArticle ? (
        <ArticlePage article={selectedArticle} articles={articleEntries} />
      ) : (
        <NotFoundPage />
      )
    case "beginners":
      return articleEntries ? (
        <BeginnersPage articles={articleEntries} />
      ) : (
        <LoadingPage
          eyebrow="Početnici"
          message="Pripremamo početni put kroz najvažnije teme."
          title="Učitavamo početni put."
        />
      )
    case "contribute":
      return <ContributePage />
    case "community":
      return <CommunityPage />
    case "events":
      return <EventsPage events={events} />
    case "event":
      return selectedEvent ? (
        <EventPage event={selectedEvent} />
      ) : (
        <NotFoundPage />
      )
    case "cities":
      return <CitiesPage cities={cities} events={events} />
    case "city":
      return selectedCity ? (
        <CityPage city={selectedCity} events={events} />
      ) : (
        <NotFoundPage />
      )
    case "notFound":
      return <NotFoundPage />
    default:
      return <NotFoundPage />
  }
}

export default App
