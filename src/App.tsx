import { useEffect, useMemo, useState } from "react"

import type { ArticleEntry } from "@/data/articles"
import { events } from "@/data/events"
import { AboutPage } from "@/pages/AboutPage"
import { ArticlesPage } from "@/pages/ArticlesPage"
import { ArticlePage } from "@/pages/ArticlePage"
import { BeginnersPage } from "@/pages/BeginnersPage"
import { ContributePage } from "@/pages/ContributePage"
import { EventsPage } from "@/pages/EventsPage"
import { EventPage } from "@/pages/EventPage"
import { FaqPage } from "@/pages/FaqPage"
import { HomePage } from "@/pages/HomePage"
import { LivestreamPage } from "@/pages/LivestreamPage"
import { LoadingPage } from "@/pages/LoadingPage"
import { NotFoundPage } from "@/pages/NotFoundPage"
import { ResourcesPage } from "@/pages/ResourcesPage"
import { TopicsPage } from "@/pages/TopicsPage"
import { parseRoute, type Route } from "@/lib/routes"

function App() {
  const [route, setRoute] = useState<Route>(() =>
    parseRoute(window.location.hash),
  )
  const [articleEntries, setArticleEntries] = useState<ArticleEntry[] | null>(
    null,
  )

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseRoute(window.location.hash))
      window.scrollTo({ top: 0, behavior: "auto" })
    }

    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
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
    case "livestream":
      return <LivestreamPage />
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
        <ArticlePage article={selectedArticle} />
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
    case "events":
      return <EventsPage events={events} />
    case "event":
      return selectedEvent ? (
        <EventPage event={selectedEvent} />
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
