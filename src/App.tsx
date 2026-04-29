import type { ReactNode } from "react"
import { useEffect, useMemo, useState } from "react"

import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPinned,
  MoveRight,
  PlayCircle,
  Send,
  ShieldCheck,
} from "lucide-react"

import { Separator } from "@/components/ui/separator"
import { events, type EventEntry } from "@/data/events"
import type { ArticleEntry } from "@/data/articles"
import {
  ARTICLES_URL,
  BEGINNERS_URL,
  COMMUNITY_URL,
  CONTACT_EMAIL,
  EVENTS_URL,
  YOUTUBE_URL,
  aboutCards,
  articleCategories,
  articleCurations,
  audienceItems,
  beginnerHighlights,
  beginnerTopics,
  conceptCards,
  contributionItems,
  faqItems,
  footerLinks,
  heroContent,
  involvementCards,
  media,
  navigation,
  notItems,
  openCommunityItems,
  principles,
  readingOrder,
  startSteps,
  topics,
  trustItems,
} from "@/data/site"

type Route =
  | { type: "home" }
  | { type: "articles" }
  | { type: "article"; slug: string }
  | { type: "beginners" }
  | { type: "contribute" }
  | { type: "events" }
  | { type: "event"; slug: string }

function parseRoute(hash: string): Route {
  const cleanHash = hash.replace(/^#/, "") || "/"

  if (cleanHash === "/" || cleanHash === "") return { type: "home" }
  if (cleanHash === "/clanci") return { type: "articles" }
  if (cleanHash.startsWith("/clanci/")) {
    return { type: "article", slug: cleanHash.replace("/clanci/", "") }
  }
  if (cleanHash === "/pocetnici") return { type: "beginners" }
  if (cleanHash === "/doprinesi") return { type: "contribute" }
  if (cleanHash === "/dogadaji" || cleanHash === "/eventi") {
    return { type: "events" }
  }
  if (cleanHash.startsWith("/dogadaji/") || cleanHash.startsWith("/eventi/")) {
    return {
      type: "event",
      slug: cleanHash.replace(/^\/(dogadaji|eventi)\//, ""),
    }
  }

  return { type: "home" }
}

function formatEventDate(event: EventEntry) {
  const start = new Date(event.start)
  const end = new Date(event.end)

  const sameDay = start.toDateString() === end.toDateString()
  const dateFormatter = new Intl.DateTimeFormat("hr-HR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  const timeFormatter = new Intl.DateTimeFormat("hr-HR", {
    hour: "2-digit",
    minute: "2-digit",
  })

  if (sameDay) {
    return `${dateFormatter.format(start)} • ${timeFormatter.format(start)}`
  }

  return `${dateFormatter.format(start)} – ${dateFormatter.format(end)}`
}

function formatEventTimeRange(event: EventEntry) {
  const start = new Date(event.start)
  const end = new Date(event.end)
  const formatter = new Intl.DateTimeFormat("hr-HR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  return `${formatter.format(start)} – ${formatter.format(end)}`
}

function formatArticleDate(value: string) {
  return new Intl.DateTimeFormat("hr-HR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value))
}

function articleHref(slug: string) {
  return `#/clanci/${slug}`
}

function getArticleCuration(slug: string) {
  return articleCurations.find((item) => item.slug === slug)
}

function sortArticles(entries: ArticleEntry[]) {
  return [...entries].sort((left, right) => {
    const leftOrder = getArticleCuration(left.slug)?.order ?? 999
    const rightOrder = getArticleCuration(right.slug)?.order ?? 999

    if (leftOrder !== rightOrder) return leftOrder - rightOrder
    return new Date(right.date).getTime() - new Date(left.date).getTime()
  })
}

function isTranslatedArticle(article: ArticleEntry) {
  return (
    article.categories.some(
      (category) => category.toLowerCase() === "prevodi",
    ) || article.tags.some((tag) => tag.toLowerCase() === "prevod")
  )
}

function makeGoogleCalendarUrl(event: EventEntry) {
  const toCalendarStamp = (value: string) =>
    new Date(value).toISOString().replace(/[-:]/g, "").replace(".000", "")

  const start = toCalendarStamp(event.start)
  const end = toCalendarStamp(event.end)
  const details = encodeURIComponent(event.description.join("\n\n"))
  const location = encodeURIComponent(
    `${event.venue}, ${event.address}, ${event.city}, ${event.country}`,
  )

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${start}/${end}&details=${details}&location=${location}`
}

function makeIcsUrl(event: EventEntry) {
  const toUtcStamp = (value: string) =>
    new Date(value).toISOString().replace(/[-:]/g, "").replace(".000", "")

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//DvadesetJedan//Events//HR",
    "BEGIN:VEVENT",
    `UID:${event.slug}@dvadesetjedan.com`,
    `DTSTAMP:${toUtcStamp(new Date().toISOString())}`,
    `DTSTART:${toUtcStamp(event.start)}`,
    `DTEND:${toUtcStamp(event.end)}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description.join("\\n\\n")}`,
    `LOCATION:${event.venue}, ${event.address}, ${event.city}, ${event.country}`,
    `URL:${event.meetupUrl}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\n")

  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`
}

function communityHref() {
  return COMMUNITY_URL || "#ukljucite-se"
}

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

  const articleRoutesReady =
    route.type !== "articles" &&
    route.type !== "article" &&
    route.type !== "beginners"
      ? true
      : Boolean(articleEntries)

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 sm:gap-4 sm:px-8">
          <a className="min-w-0 shrink-0 grow-0" href="#/">
            {media.logoUrl ? (
              <img
                alt="DvadesetJedan"
                className="block h-auto w-auto max-h-8 max-w-[9.75rem] object-contain sm:max-w-[11rem] md:max-w-none"
                src={media.logoUrl}
              />
            ) : (
              <span className="text-lg font-semibold tracking-[-0.03em] text-foreground">
                DvadesetJedan
              </span>
            )}
          </a>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                className="whitespace-nowrap hover:text-foreground"
                href={item.href}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                target={item.href.startsWith("http") ? "_blank" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border/80 bg-card px-3 py-2 text-sm font-medium text-foreground sm:px-4"
            href={communityHref()}
            rel={COMMUNITY_URL ? "noreferrer" : undefined}
            target={COMMUNITY_URL ? "_blank" : undefined}
          >
            <span className="hidden sm:inline">Uđi u Telegram</span>
            <span className="sm:hidden">Telegram</span>
          </a>
        </div>

        <div className="border-t border-border/60 md:hidden">
          <nav className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-5 py-3 text-sm text-muted-foreground sm:px-8">
            {navigation.map((item) => (
              <a
                key={item.label}
                className="shrink-0 whitespace-nowrap hover:text-foreground"
                href={item.href}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                target={item.href.startsWith("http") ? "_blank" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {route.type === "home" && <HomeView />}
      {route.type === "articles" && articleEntries && (
        <ArticlesView articles={articleEntries} />
      )}
      {route.type === "article" && selectedArticle && (
        <ArticleDetailView article={selectedArticle} />
      )}
      {route.type === "article" && articleEntries && !selectedArticle && (
        <ArticleNotFoundView />
      )}
      {route.type === "beginners" && articleEntries && (
        <BeginnersView articles={articleEntries} />
      )}
      {route.type === "contribute" && <ContributeView />}
      {route.type === "events" && <EventsView />}
      {route.type === "event" && selectedEvent && (
        <EventDetailView event={selectedEvent} />
      )}
      {!articleRoutesReady ? <ArticlesLoadingView /> : null}
    </div>
  )
}

function TelegramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M21.638 4.956c.14-.9-.64-1.646-1.495-1.318L2.98 10.48c-.756.3-.74 1.396.025 1.673l3.54 1.283 1.368 4.399c.198.636.98.826 1.44.35l1.973-2.044 3.87 2.84c.708.52 1.717.13 1.88-.726zm-13.72 8.159-.514 3.741-.796-2.56zm1.333 2.052-.247-.18-.145-.467 8.21-6.858a.375.375 0 0 0-.466-.586l-9.672 6.055-2.601-.942 14.785-5.902-2.189 11.123z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8M9.6 15.7V8.3l6.4 3.7z" />
    </svg>
  )
}

function EventsIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
      <path
        d="M7 2.75v2.5M17 2.75v2.5M3.75 8.25h16.5M6.75 5.25h10.5A2.25 2.25 0 0 1 19.5 7.5v9.75a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 17.25V7.5a2.25 2.25 0 0 1 2.25-2.25ZM8 11.5h3M8 14.5h8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function HomeView() {
  return (
    <>
      <main>
        <section className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-18">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_26rem] lg:items-center">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
                DvadesetJedan / Balkan / TwentyOne.World
              </p>
              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-foreground sm:text-7xl">
                {heroContent.title}
              </h1>
              <p className="mt-5 max-w-3xl text-xl leading-8 text-foreground/90">
                {heroContent.subtitle}
              </p>
              <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                {heroContent.body}
              </p>
              <p className="mt-6 max-w-3xl rounded-[1.4rem] border border-primary/20 bg-primary/8 px-5 py-4 text-sm leading-7 text-foreground">
                {heroContent.highlight}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ActionButton
                  href={communityHref()}
                  icon={<Send className="size-4" />}
                  external={Boolean(COMMUNITY_URL)}
                  primary
                >
                  Uđi u Telegram grupu
                </ActionButton>
                <ActionButton
                  href={YOUTUBE_URL || "#emisije"}
                  icon={<PlayCircle className="size-4" />}
                  external={Boolean(YOUTUBE_URL)}
                >
                  Prati livestream
                </ActionButton>
                <ActionButton
                  href={ARTICLES_URL}
                  icon={<ArrowUpRight className="size-4" />}
                >
                  Čitaj članke
                </ActionButton>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <InlineLink
                  href={communityHref()}
                  icon={<TelegramIcon />}
                  label="Telegram"
                  external={Boolean(COMMUNITY_URL)}
                />
                <InlineLink
                  href={YOUTUBE_URL || "#emisije"}
                  icon={<YouTubeIcon />}
                  label="YouTube"
                  external={Boolean(YOUTUBE_URL)}
                />
                <InlineLink
                  href={EVENTS_URL}
                  icon={<EventsIcon />}
                  label="Događaji"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-[2.4rem] border border-border/80 bg-card shadow-[var(--shadow-soft)]">
              <img
                alt="DvadesetJedan vizual"
                className="h-full min-h-[24rem] w-full object-cover"
                src={media.heroUrl}
              />
            </div>
          </div>
        </section>

        <section className="border-y border-border/70 bg-card/50">
          <div className="mx-auto grid max-w-7xl gap-3 px-5 py-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item}
                className="rounded-[1.2rem] border border-border/70 bg-background/80 px-4 py-4 text-sm font-medium text-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <Section title="Kako se uključiti">
          <ActionCardGrid items={involvementCards} />
        </Section>

        <Section
          title="Zašto Bitcoin-only?"
          intro="DvadesetJedan nije crypto grupa. Ne promoviramo tokene, altcoine, trading signale ni brzu zaradu. Fokus je Bitcoin: novac, sloboda, odgovornost, tehnologija i dugoročno razmišljanje."
        >
          <div className="rounded-[1.6rem] border border-border/80 bg-card px-6 py-6">
            <p className="text-base leading-8 text-foreground">
              Naš signal je namjerno uzak: Bitcoin prije hypea, razumijevanje
              prije šuma i dugoročna perspektiva prije kratkoročnih impulsa.
            </p>
          </div>
        </Section>

        <Section
          id="o-projektu"
          title="Dio otvorenog twentyone koncepta"
          intro="Twentyone.World nastao je kao otvoreni nacrt za lokalne Bitcoin zajednice: stvoriti javan digitalni signal, govoriti lokalnim jezikom, okupiti otvorenu skupinu ljudi i ostati dosljedan. DvadesetJedan je regionalni izraz te ideje za ljude koji govore i razumiju srodne jezike našeg prostora."
        >
          <CardGrid
            items={conceptCards.map((item) => ({
              title: item.title,
              text: item.text,
            }))}
          />
          <div className="mt-6">
            <ActionButton
              href={media.twentyOneUrl}
              icon={<ArrowUpRight className="size-4" />}
              external
            >
              Pogledaj TwentyOne.World
            </ActionButton>
          </div>
        </Section>

        <Section
          title="Zašto DvadesetJedan postoji?"
          intro="Većina ljudi prvi put čuje za Bitcoin kroz cijenu, medijske naslove, cikluse rasta i pada ili površne rasprave o kriptovalutama. Takav ulaz često stvara više buke nego razumijevanja."
          introTwo="DvadesetJedan postoji kako bi se Bitcoin promatrao mirnije i dublje: kroz pitanje što je novac, zašto je štednja važna, kako inflacija mijenja društvo, zašto je osobna odgovornost važna i kako se dugoročno razmišljanje razlikuje od kratkoročne špekulacije."
        >
          <div className="rounded-[1.6rem] border border-border/80 bg-card px-6 py-6">
            <p className="text-lg leading-8 text-foreground">
              Problem nije samo u tome da ljudi ne znaju dovoljno o Bitcoinu.
              Problem je u tome što o novcu često nikada nisu imali priliku
              razmišljati iz prvih načela.
            </p>
          </div>
        </Section>

        <Section title="Što je DvadesetJedan?">
          <CardGrid items={aboutCards} />
        </Section>

        <Section
          title="Za koga je DvadesetJedan?"
          intro="DvadesetJedan je namijenjen ljudima iz regije koji žele ozbiljnije razumjeti Bitcoin, bez potrebe da odmah prihvate gotove zaključke ili sudjeluju u buci tržišta."
        >
          <BulletedPanel items={audienceItems} />
        </Section>

        <Section
          title="Što DvadesetJedan nije?"
          intro="Jasne granice su važne jer se Bitcoin često miješa s potpuno drukčijim pojavama. DvadesetJedan nije prostor za kratkoročnu špekulaciju, trgovanje ni obećanja prinosa."
        >
          <BulletedPanel items={notItems} />
          <p className="mt-6 text-base leading-8 text-foreground">
            Cilj nije reći ljudima što da misle, nego pomoći im da bolje
            razumiju Bitcoin.
          </p>
        </Section>

        <Section title="Novi si u Bitcoinu?">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <div className="rounded-[1.8rem] border border-border/80 bg-card px-6 py-6">
              <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                Kreni od osnova i izbjegni najčešće greške. Pripremili smo
                početni put kroz najvažnije teme.
              </p>
              <ul className="mt-6 grid gap-3 text-base leading-8 text-foreground sm:grid-cols-2">
                {beginnerTopics.map((topic) => (
                  <li key={topic} className="flex gap-3">
                    <ShieldCheck className="mt-1 size-4 shrink-0 text-primary" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <ActionButton
                  href={BEGINNERS_URL}
                  icon={<ArrowUpRight className="size-4" />}
                  primary
                >
                  Počni ovdje
                </ActionButton>
              </div>
            </div>

            <div className="grid gap-4">
              {beginnerHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-border/80 bg-card px-5 py-5"
                >
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="teme" title="Teme koje obrađujemo">
          <CardGrid items={topics} />
        </Section>

        <Section
          id="emisije"
          title="Emisije i razgovori"
          intro="Redovito objavljujemo razgovore i prijenose uživo o Bitcoinu, novcu, društvu, poduzetništvu i dugoročnom razmišljanju. To je naš javni signal: sadržaj koji se može pronaći, dijeliti i pratiti kroz vrijeme."
        >
          <ActionButton
            href={YOUTUBE_URL || "#emisije"}
            icon={<ArrowUpRight className="size-4" />}
            external={Boolean(YOUTUBE_URL)}
            primary
          >
            Pogledajte YouTube kanal
          </ActionButton>
        </Section>

        <Section
          id="ukljucite-se"
          title="Otvorena zajednica"
          intro="Twentyone koncept naglašava da se zajednice ne grade samo kroz sadržaj, nego i kroz otvoren prostor u kojem se ljudi mogu povezati. DvadesetJedan treba biti mjesto za pitanja, suradnju, prijevode, razgovore, nove ideje i projekte koji nastaju iz zajednice."
        >
          <BulletedPanel items={openCommunityItems} />
          <div className="mt-6">
            <ActionButton
              href={communityHref()}
              icon={<Send className="size-4" />}
              external={Boolean(COMMUNITY_URL)}
            >
              Uključite se
            </ActionButton>
          </div>
        </Section>

        <Section title="Kako krenuti?">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {startSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[1.5rem] border border-border/80 bg-card px-5 py-6"
              >
                <p className="text-sm text-muted-foreground">
                  Korak {index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Načela DvadesetJedan">
          <CardGrid items={principles} />
        </Section>

        <Section id="pitanja" title="Česta pitanja">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-[1.5rem] border border-border/80 bg-card px-5 py-5"
              >
                <summary className="cursor-pointer list-none text-lg font-medium text-foreground">
                  {item.question}
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Section>

        <section className="mx-auto max-w-7xl px-5 pb-18 sm:px-8">
          <div className="rounded-[2.2rem] border border-border/80 bg-card px-6 py-8 sm:px-10 sm:py-10">
            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
              Počnite s boljim pitanjima o novcu.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
              Ako želite razumjeti Bitcoin bez buke, špekulacija i površnih
              objašnjenja, krenite od razgovora, uključite se u zajednicu i
              gradite vlastito razumijevanje korak po korak.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionButton
                href={YOUTUBE_URL || "#emisije"}
                icon={<PlayCircle className="size-4" />}
                external={Boolean(YOUTUBE_URL)}
                primary
              >
                Pogledajte najnovije emisije
              </ActionButton>
              <ActionButton
                href={communityHref()}
                icon={<Send className="size-4" />}
                external={Boolean(COMMUNITY_URL)}
              >
                Uđi u Telegram grupu
              </ActionButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function Section({
  id,
  title,
  intro,
  introTwo,
  children,
}: {
  id?: string
  title: string
  intro?: string
  introTwo?: string
  children: ReactNode
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14" id={id}>
      <div className="max-w-4xl">
        <h2 className="text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
          {title}
        </h2>
        {intro ? (
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            {intro}
          </p>
        ) : null}
        {introTwo ? (
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            {introTwo}
          </p>
        ) : null}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  )
}

function CardGrid({
  items,
}: {
  items: ReadonlyArray<{ title: string; text: string }>
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-[1.5rem] border border-border/80 bg-card px-5 py-6"
        >
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  )
}

function ActionCardGrid({
  items,
}: {
  items: ReadonlyArray<{
    title: string
    text: string
    buttonLabel: string
    href: string
    external: boolean
  }>
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-[1.6rem] border border-border/80 bg-card px-5 py-6"
        >
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {item.text}
          </p>
          <div className="mt-5">
            <ActionButton
              href={item.href}
              icon={<ArrowUpRight className="size-4" />}
              external={item.external}
              primary
            >
              {item.buttonLabel}
            </ActionButton>
          </div>
        </div>
      ))}
    </div>
  )
}

function BulletedPanel({ items }: { items: ReadonlyArray<string> }) {
  return (
    <div className="rounded-[1.6rem] border border-border/80 bg-card px-6 py-6">
      <ul className="grid gap-3 text-base leading-8 text-muted-foreground md:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <ShieldCheck className="mt-1 size-4 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function InlineLink({
  href,
  icon,
  label,
  external = false,
}: {
  href: string
  icon: ReactNode
  label: string
  external?: boolean
}) {
  return (
    <a
      className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {icon}
      {label}
    </a>
  )
}

function ActionButton({
  href,
  icon,
  children,
  external = false,
  primary = false,
}: {
  href: string
  icon: ReactNode
  children: ReactNode
  external?: boolean
  primary?: boolean
}) {
  return (
    <a
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors ${
        primary
          ? "bg-primary text-primary-foreground"
          : "border border-border/80 bg-card text-foreground"
      }`}
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {icon}
      {children}
    </a>
  )
}

function ArticlesLoadingView() {
  return (
    <>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <section className="rounded-[2.2rem] border border-border/80 bg-card/70 px-6 py-8 sm:px-10 sm:py-12">
          <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
            Članci
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
            Učitavamo pisani signal.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Pripremamo statične članke i početni redoslijed za čitanje.
          </p>
        </section>
      </main>

      <Footer />
    </>
  )
}

function ArticlesView({ articles }: { articles: ArticleEntry[] }) {
  const orderedArticles = sortArticles(articles)

  return (
    <>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <section className="rounded-[2.2rem] border border-border/80 bg-card/70 px-6 py-8 sm:px-10 sm:py-12">
          <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
            Članci
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
            Pisani signal za ljude koji žele razumjeti Bitcoin mirnije i dublje.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Pisani dio projekta raste postupno. Ovdje su početni redoslijed
            čitanja, tematski putokazi i arhiva tekstova koji čine jezgru
            DvadesetJedan sadržaja.
          </p>
        </section>

        <section className="mt-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {articleCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-[1.5rem] border border-border/80 bg-card px-5 py-5"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-primary">
                  {category.label}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">
                  {category.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {category.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[22rem_minmax(0,1fr)]">
          <div className="rounded-[1.8rem] border border-border/80 bg-card px-6 py-6">
            <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
              Ako si nov u Bitcoinu
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
              Čitaj ovim redom
            </h2>
            <ol className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
              {readingOrder.map((item, index) => {
                const article = articles.find(
                  (entry) => entry.slug === item.slug,
                )

                return (
                  <li key={item.slug} className="flex gap-3">
                    <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/12 text-xs font-semibold text-primary">
                      {index + 1}
                    </span>
                    {article ? (
                      <div>
                        <a
                          className="font-medium text-foreground hover:text-primary"
                          href={articleHref(article.slug)}
                        >
                          {item.label}
                        </a>
                        <p className="mt-1 text-xs leading-6 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <span className="font-medium text-foreground">
                          {item.label}
                        </span>
                        <p className="mt-1 text-xs leading-6 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </li>
                )
              })}
            </ol>
            <div className="mt-6 flex flex-wrap gap-3">
              <ActionButton
                href={BEGINNERS_URL}
                icon={<ArrowUpRight className="size-4" />}
                primary
              >
                Početni put
              </ActionButton>
              <ActionButton
                href={communityHref()}
                icon={<Send className="size-4" />}
                external={Boolean(COMMUNITY_URL)}
              >
                Pitaj u Telegramu
              </ActionButton>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {orderedArticles.map((article) => {
              const curation = getArticleCuration(article.slug)

              return (
                <div
                  key={article.slug}
                  className="rounded-[1.6rem] border border-border/80 bg-card px-5 py-6"
                >
                  <div className="flex flex-wrap gap-2">
                    {curation ? (
                      <span className="inline-flex rounded-full bg-primary/12 px-3 py-1 text-xs font-medium text-primary">
                        {curation.topic}
                      </span>
                    ) : null}
                    {isTranslatedArticle(article) ? (
                      <span className="inline-flex rounded-full bg-foreground/6 px-3 py-1 text-xs font-medium text-muted-foreground">
                        Prijevod
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                    <a
                      className="hover:text-primary"
                      href={articleHref(article.slug)}
                    >
                      {article.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {formatArticleDate(article.date)}
                  </p>
                  <div
                    className="mt-3 text-sm leading-7 text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: article.excerpt }}
                  />
                  {curation ? (
                    <p className="mt-3 text-sm leading-7 text-foreground/80">
                      {curation.blurb}
                    </p>
                  ) : null}
                  <div className="mt-5">
                    <ActionButton
                      href={articleHref(article.slug)}
                      icon={<ArrowUpRight className="size-4" />}
                    >
                      Čitaj članak
                    </ActionButton>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function ArticleNotFoundView() {
  return (
    <>
      <main className="mx-auto max-w-5xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <section className="rounded-[2.2rem] border border-border/80 bg-card/70 px-6 py-8 sm:px-10 sm:py-12">
          <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
            Članci
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl">
            Ovaj članak nije pronađen.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Vrati se na pregled svih članaka ili otvori početni put za
            preporučeni redoslijed čitanja.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionButton
              href={ARTICLES_URL}
              icon={<ArrowUpRight className="size-4" />}
              primary
            >
              Natrag na članke
            </ActionButton>
            <ActionButton
              href={BEGINNERS_URL}
              icon={<ArrowUpRight className="size-4" />}
            >
              Početni put
            </ActionButton>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function ArticleDetailView({ article }: { article: ArticleEntry }) {
  const curation = getArticleCuration(article.slug)

  return (
    <>
      <main className="mx-auto max-w-5xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <div className="mb-6 text-sm text-muted-foreground">
          <a href={ARTICLES_URL}>← Natrag na članke</a>
        </div>

        <article className="overflow-hidden rounded-[2.2rem] border border-border/80 bg-card/75">
          {article.image ? (
            <img
              alt={article.title}
              className="h-[20rem] w-full object-cover sm:h-[24rem]"
              src={article.image}
            />
          ) : null}

          <div className="px-6 py-8 sm:px-10 sm:py-12">
            <div className="flex flex-wrap gap-2">
              {curation ? (
                <span className="inline-flex rounded-full bg-primary/12 px-3 py-1 text-xs font-medium text-primary">
                  {curation.topic}
                </span>
              ) : null}
              {isTranslatedArticle(article) ? (
                <span className="inline-flex rounded-full bg-foreground/6 px-3 py-1 text-xs font-medium text-muted-foreground">
                  Prijevod
                </span>
              ) : null}
            </div>

            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl">
              {article.title}
            </h1>
            {curation ? (
              <p className="mt-4 max-w-3xl text-base leading-8 text-foreground/80">
                {curation.blurb}
              </p>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span>{formatArticleDate(article.date)}</span>
              {article.tags.length ? (
                <span>{article.tags.join(" • ")}</span>
              ) : null}
              <a href={article.originalUrl} rel="noreferrer" target="_blank">
                Originalna objava
              </a>
            </div>

            <div
              className="wp-content mt-10 text-base leading-8 text-foreground"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}

function BeginnersView({ articles }: { articles: ArticleEntry[] }) {
  const beginnerLinks = readingOrder
    .map((item) => articles.find((article) => article.slug === item.slug))
    .filter(Boolean) as ArticleEntry[]

  return (
    <>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <section className="rounded-[2.2rem] border border-border/80 bg-card/70 px-6 py-8 sm:px-10 sm:py-12">
          <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
            Početnici
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
            Novi si u Bitcoinu?
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Kreni od osnova i izbjegni najčešće greške. Ovo je početni put kroz
            najvažnije teme za prvi smiren ulazak u Bitcoin.
          </p>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="rounded-[1.8rem] border border-border/80 bg-card px-6 py-6">
            <ul className="grid gap-3 text-base leading-8 text-foreground sm:grid-cols-2">
              {beginnerTopics.map((topic) => (
                <li key={topic} className="flex gap-3">
                  <ShieldCheck className="mt-1 size-4 shrink-0 text-primary" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <ActionButton
                href={
                  beginnerLinks[0]
                    ? articleHref(beginnerLinks[0].slug)
                    : ARTICLES_URL
                }
                icon={<ArrowUpRight className="size-4" />}
                primary
              >
                Počni ovdje
              </ActionButton>
              <ActionButton
                href={YOUTUBE_URL || "#emisije"}
                icon={<PlayCircle className="size-4" />}
                external={Boolean(YOUTUBE_URL)}
              >
                Prati livestream
              </ActionButton>
            </div>
          </div>

          <div className="grid gap-4">
            {beginnerHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-border/80 bg-card px-5 py-5"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {beginnerLinks.length ? (
          <section className="mt-10">
            <div className="rounded-[1.8rem] border border-border/80 bg-card px-6 py-6">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
                Preporučeni prvi tekstovi
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {beginnerLinks.map((article) => (
                  <a
                    key={article.slug}
                    className="rounded-[1.4rem] border border-border/70 bg-background/70 px-5 py-5 hover:border-primary/40"
                    href={articleHref(article.slug)}
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {formatArticleDate(article.date)}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-foreground">
                      {article.title}
                    </h3>
                    <div
                      className="mt-3 text-sm leading-7 text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: article.excerpt }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>

      <Footer />
    </>
  )
}

function ContributeView() {
  return (
    <>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <section className="rounded-[2.2rem] border border-border/80 bg-card/70 px-6 py-8 sm:px-10 sm:py-12">
          <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
            Doprinesi
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
            Doprinesi DvadesetJedan
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            DvadesetJedan raste kroz doprinos zajednice. Možeš pomoći pisanjem
            članaka, prijevodima, organizacijom lokalnih druženja, prijavom
            grešaka, dizajnom, tehničkim poboljšanjima ili dijeljenjem
            kvalitetnih Bitcoin resursa.
          </p>
        </section>

        <section className="mt-10">
          <BulletedPanel items={contributionItems} />
          <div className="mt-6">
            <ActionButton
              href={communityHref()}
              icon={<Send className="size-4" />}
              external={Boolean(COMMUNITY_URL)}
              primary
            >
              Javi se u Telegram grupi
            </ActionButton>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function EventsView() {
  const now = new Date()
  const upcomingEvents = events.filter((event) => new Date(event.end) >= now)
  const pastEvents = events.filter((event) => new Date(event.end) < now)

  return (
    <>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <section className="overflow-hidden rounded-[2.4rem] border border-border/80 bg-card/70">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_24rem]">
            <div className="px-6 py-8 sm:px-10 sm:py-12">
              <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
                Događaji
              </p>
              <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
                Pregled svih meetupova na jednom mjestu.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Nadolazeći događaji i arhiva prethodnih druženja, sa zasebnim
                pageom za svaki meetup, Meetup prijavom, kartom i kalendar
                izvozom.
              </p>
            </div>

            <img
              alt=""
              className="h-full min-h-80 w-full object-cover"
              src={media.heroUrl}
            />
          </div>
        </section>

        <section className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-foreground">
              Nadolazeći događaji
            </h2>
            <p className="text-sm text-muted-foreground">
              {upcomingEvents.length} događaja
            </p>
          </div>

          {upcomingEvents.length === 0 ? (
            <div className="mt-6 rounded-[1.8rem] border border-dashed border-border/80 bg-card/60 px-6 py-10">
              <p className="text-base leading-8 text-foreground">
                Trenutno nema javno najavljenih događaja.
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                Najave se prvo pojavljuju u Telegram grupi. Ako želiš
                organizirati meetup u svom gradu, javi se zajednici.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ActionButton
                  href={communityHref()}
                  icon={<Send className="size-4" />}
                  external={Boolean(COMMUNITY_URL)}
                  primary
                >
                  Uđi u Telegram grupu
                </ActionButton>
                <ActionButton
                  href={communityHref()}
                  icon={<ArrowUpRight className="size-4" />}
                  external={Boolean(COMMUNITY_URL)}
                >
                  Predloži meetup
                </ActionButton>
              </div>
            </div>
          ) : (
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {upcomingEvents.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          )}
        </section>

        <section className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-foreground">
              Arhiva druženja
            </h2>
            <p className="text-sm text-muted-foreground">
              {pastEvents.length} događaja
            </p>
          </div>

          {pastEvents.length > 0 ? (
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {pastEvents.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-[1.8rem] border border-dashed border-border/80 px-6 py-10 text-base leading-8 text-muted-foreground">
              Arhiva će se pojaviti ovdje kako budemo dodavali prethodna
              okupljanja.
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  )
}

function EventCard({ event }: { event: EventEntry }) {
  return (
    <a
      className="group overflow-hidden rounded-[1.8rem] border border-border/80 bg-card/70 transition-transform hover:-translate-y-0.5"
      href={`${EVENTS_URL}/${event.slug}`}
    >
      <img alt="" className="h-60 w-full object-cover" src={event.coverImage} />
      <div className="space-y-5 px-5 py-5">
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="size-4" />
            {formatEventDate(event)}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPinned className="size-4" />
            {event.city}, {event.country}
          </span>
        </div>

        <div>
          <h3 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
            {event.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {event.summary}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{event.venue}</span>
          <span className="inline-flex items-center gap-2 text-foreground">
            Detalji
            <MoveRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </a>
  )
}

function EventDetailView({ event }: { event: EventEntry }) {
  return (
    <>
      <main className="mx-auto max-w-5xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <div className="mb-6 text-sm text-muted-foreground">
          <a href={EVENTS_URL}>← Natrag na događaje</a>
        </div>

        <article className="overflow-hidden rounded-[2.2rem] border border-border/80 bg-card/75">
          <img
            alt=""
            className="h-[24rem] w-full object-cover"
            src={event.coverImage}
          />

          <div className="grid gap-10 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div>
              <h1 className="text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl">
                {event.title}
              </h1>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <InfoTile
                  icon={<CalendarDays className="size-4" />}
                  label="Datum i vrijeme"
                  value={formatEventTimeRange(event)}
                />
                <InfoTile
                  icon={<MapPinned className="size-4" />}
                  label="Lokacija"
                  value={`${event.venue}, ${event.city}, ${event.country}`}
                />
                <InfoTile
                  icon={<Clock3 className="size-4" />}
                  label="Adresa"
                  value={event.address}
                />
                <InfoTile
                  icon={<CalendarDays className="size-4" />}
                  label="Status"
                  value={
                    new Date(event.end) >= new Date()
                      ? "Nadolazeći događaj"
                      : "Prošli događaj"
                  }
                />
              </div>

              <div className="mt-10 space-y-5 text-base leading-8 text-foreground">
                {event.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="space-y-4">
              <ActionButton
                href={event.meetupUrl}
                icon={<ArrowUpRight className="size-4" />}
                external
                primary
              >
                Otvori Meetup prijavu
              </ActionButton>
              <ActionButton
                href={event.mapUrl}
                icon={<MapPinned className="size-4" />}
                external
              >
                Otvori Google Maps
              </ActionButton>
              <ActionButton
                href={makeGoogleCalendarUrl(event)}
                icon={<CalendarDays className="size-4" />}
                external
              >
                Dodaj u Google kalendar
              </ActionButton>
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border/80 bg-card px-5 py-3 text-sm font-medium text-foreground"
                download={`${event.slug}.ics`}
                href={makeIcsUrl(event)}
              >
                <CalendarDays className="size-4" />
                Preuzmi ICS
              </a>
            </aside>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}

function InfoTile({
  icon,
  label,
  value,
}: {
  icon: ReactNode
  label: string
  value: string
}) {
  return (
    <div className="rounded-[1.4rem] border border-border/80 bg-background/70 px-4 py-4">
      <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {icon}
        {label}
      </p>
      <p className="mt-3 text-sm leading-7 text-foreground">{value}</p>
    </div>
  )
}

function Footer() {
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
          <ul className="space-y-3 text-sm text-muted-foreground">
            {footerLinks.slice(0, 5).map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  rel={item.external ? "noreferrer" : undefined}
                  target={item.external ? "_blank" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="space-y-3 text-sm text-muted-foreground">
            {footerLinks.slice(5).map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  rel={item.external ? "noreferrer" : undefined}
                  target={item.external ? "_blank" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
            {CONTACT_EMAIL ? (
              <li id="kontakt">
                <a href={`mailto:${CONTACT_EMAIL}`}>Kontakt</a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default App
