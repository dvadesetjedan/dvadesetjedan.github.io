import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Coffee,
  MapPinned,
  MessageCircle,
  Network,
  Play,
  Radio,
  Send,
} from "lucide-react"

import { ActionButton } from "@/components/ActionButton"
import { OptimizedImage } from "@/components/OptimizedImage"
import { Layout } from "@/components/Layout"
import { RegionalCommunityMap } from "@/components/RegionalCommunityMap"
import { Section } from "@/components/Section"
import { TelegramIcon, YouTubeIcon } from "@/components/Icons"
import type { EventEntry } from "@/data/events"
import { cities } from "@/data/cities"
import { episodes } from "@/data/episodes"
import { events } from "@/data/events"
import { featuredArticles } from "@/data/featuredArticles"
import {
  ARTICLES_URL,
  CITIES_URL,
  CONTRIBUTE_URL,
  LIVESTREAM_URL,
  YOUTUBE_URL,
  media,
} from "@/data/site"
import {
  articleHref,
  cityHref,
  communityHref,
  episodeHref,
  eventHref,
  formatEpisodeDate,
  formatEventDate,
} from "@/lib/content"
import { usePageMeta } from "@/lib/usePageMeta"

function eventKind(event: EventEntry) {
  return event.tags?.some((tag) => tag.toLowerCase() === "meetup")
    ? "Malo, otvoreno druženje"
    : "Veći Bitcoin događaj"
}

function eventCityName(event: EventEntry) {
  return event.citySlug
    ? (cities.find((city) => city.slug === event.citySlug)?.name ?? event.city)
    : event.city
}

function LiveCard({
  eyebrow,
  title,
  meta,
  href,
  cta,
  icon,
}: {
  eyebrow: string
  title: string
  meta: string
  href: string
  cta: string
  icon: React.ReactNode
}) {
  return (
    <a
      className="group grid min-h-48 gap-6 rounded-[1.7rem] bg-card px-5 py-5 shadow-[var(--shadow-border)] transition-[translate,scale,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 sm:grid-cols-[auto_minmax(0,1fr)] sm:px-6"
      href={href}
    >
      <span className="flex size-12 items-center justify-center rounded-full bg-primary/12 text-primary-strong">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-strong">
          {eyebrow}
        </span>
        <span className="mt-3 block text-xl font-semibold tracking-[-0.03em] text-foreground">
          {title}
        </span>
        <span className="mt-3 block text-sm leading-6 text-muted-foreground tabular-nums">
          {meta}
        </span>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground">
          {cta}
          <ArrowRight className="size-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none" />
        </span>
      </span>
    </a>
  )
}

function MeetupCard({ event }: { event: EventEntry }) {
  return (
    <article className="overflow-hidden rounded-[1.8rem] bg-card shadow-[var(--shadow-border)]">
      <div className="relative">
        <OptimizedImage
          alt={`${event.venue}, lokacija događaja ${event.title}`}
          className="image-depth h-56 w-full object-cover sm:h-64"
          decoding="async"
          height={900}
          loading="lazy"
          pictureClassName="block"
          sizes="(min-width: 1024px) 50vw, 100vw"
          src={event.coverImage}
          width={1600}
        />
        <p className="absolute left-4 top-4 rounded-full bg-[#100d09]/90 px-3 py-1.5 text-xs font-medium text-[#fff8ee] shadow-sm backdrop-blur-sm sm:left-6 sm:top-6">
          {eventKind(event)}
        </p>
      </div>

      <div className="px-5 py-6 sm:px-7">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-strong">
          {eventCityName(event)}
        </p>
        <h3 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-foreground">
          {event.title}
        </h3>

        <dl className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          <div className="flex gap-3">
            <CalendarDays className="mt-0.5 size-4 shrink-0 text-primary-strong" />
            <div>
              <dt className="sr-only">Datum</dt>
              <dd className="tabular-nums">{formatEventDate(event)}</dd>
            </div>
          </div>
          <div className="flex gap-3">
            <MapPinned className="mt-0.5 size-4 shrink-0 text-primary-strong" />
            <div>
              <dt className="sr-only">Lokacija</dt>
              <dd>
                {event.venue}, {eventCityName(event)}
              </dd>
            </div>
          </div>
          {event.organizer ? (
            <div className="flex gap-3 sm:col-span-2">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary-strong" />
              <div>
                <dt className="sr-only">Host</dt>
                <dd>Host: {event.organizer}</dd>
              </div>
            </div>
          ) : null}
        </dl>

        <div className="mt-6">
          <ActionButton
            href={eventHref(event.slug)}
            icon={<ArrowUpRight className="size-4" />}
            primary
          >
            Detalji i RSVP
          </ActionButton>
        </div>
      </div>
    </article>
  )
}

const flowSteps = [
  {
    label: "01 / Signal",
    title: "Bitcoin signal. Bez šuma.",
    text: "Redovni livestream i Bitcoin-only sadržaj, godinama iz tjedna u tjedan.",
    icon: Radio,
  },
  {
    label: "02 / Zajednica",
    title: "Čuješ signal? Uđi u razgovor.",
    text: "Telegram je otvoren. Uđi, prati, pitaj i upoznaj ljude na našim jezicima.",
    icon: MessageCircle,
  },
  {
    label: "03 / Uživo",
    title: "Dvoje ljudi na kavi već je meetup.",
    text: "Online se upoznajemo. Uživo gradimo povjerenje i lokalnu zajednicu.",
    icon: Coffee,
  },
] as const

export function HomePage() {
  usePageMeta(
    "DvadesetJedan | Bitcoin signal i druženja uživo",
    "Bitcoin signal, otvorena zajednica i druženja uživo za ljude koji govore našim jezicima.",
  )

  const now = new Date()
  const latestEpisode = episodes[0]
  const upcomingEvents = events
    .filter(
      (event) =>
        event.status !== "cancelled" &&
        new Date(event.end).getTime() >= now.getTime(),
    )
    .sort(
      (left, right) =>
        new Date(left.start).getTime() - new Date(right.start).getTime(),
    )
  const nextEvent = upcomingEvents[0]
  const visibleCities = [...cities]
    .sort((left, right) => {
      const leftUpcoming = upcomingEvents.some(
        (event) => event.citySlug === left.slug,
      )
      const rightUpcoming = upcomingEvents.some(
        (event) => event.citySlug === right.slug,
      )

      if (leftUpcoming !== rightUpcoming) return leftUpcoming ? -1 : 1
      if (left.status !== right.status) {
        const order = { active: 0, emerging: 1, archive: 2 }
        return order[left.status] - order[right.status]
      }

      return left.name.localeCompare(right.name, "hr")
    })
    .slice(0, 6)

  return (
    <Layout>
      <main>
        <section className="relative isolate flex min-h-[calc(100svh-8.25rem)] overflow-hidden bg-[#fbf6ef] min-[1160px]:min-h-[calc(100svh-4.75rem)]">
          <OptimizedImage
            alt={
              nextEvent
                ? `Ljudi za stolovima u ${nextEvent.venue}, lokaciji sljedećeg DvadesetJedan druženja`
                : "DvadesetJedan Bitcoin signal"
            }
            className="absolute inset-0 h-full w-full object-cover object-[68%_center] sm:object-center lg:object-right"
            decoding="async"
            fetchPriority="high"
            height={1080}
            loading="eager"
            pictureClassName="absolute inset-0 block"
            sizes="100vw"
            src={nextEvent?.coverImage ?? media.heroUrl}
            width={1920}
          />
          <div
            aria-hidden="true"
            className="hero-light-fade absolute inset-0"
          />

          <div className="relative mx-auto flex min-h-[calc(100svh-8.25rem)] w-full max-w-7xl flex-col justify-center px-5 py-10 sm:px-8 sm:py-14 min-[1160px]:min-h-[calc(100svh-4.75rem)]">
            <div className="hero-copy w-full max-w-3xl lg:max-w-[43rem]">
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#6d5b4a]">
                <span className="size-2 rounded-full bg-primary shadow-[0_0_0_5px_rgba(247,147,26,0.13)]" />
                Bitcoin-only / na našim jezicima
              </p>
              <h1 className="safe-heading mt-7 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#1e1811] sm:text-6xl lg:text-[4.75rem]">
                Bitcoin signal. Lokalna zajednica. Stvarna druženja.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-[#5f4d3c] sm:text-xl">
                Kontinuirani Bitcoin-only signal za ljude koji govore našim
                jezicima. Prati livestream, uđi u otvorenu zajednicu i upoznaj
                bitcoinere uživo.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ActionButton
                  className="w-full sm:w-fit"
                  external
                  href={communityHref()}
                  icon={<TelegramIcon />}
                  primary
                >
                  Uđi u Telegram grupu
                </ActionButton>
                <a
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#fffaf4]/88 px-5 py-3 text-sm font-medium text-[#1e1811] shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_8px_24px_rgba(52,35,14,0.08)] backdrop-blur-sm transition-[translate,scale,background-color,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:bg-[#fffaf4] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_10px_28px_rgba(52,35,14,0.11)] active:scale-[0.96] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 sm:w-fit"
                  href="#druzenja"
                >
                  <MapPinned className="size-4" />
                  Pronađi druženje
                </a>
              </div>

              <a
                className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-[#5f4d3c] underline decoration-black/20 underline-offset-4 transition-colors duration-150 ease-out hover:text-[#1e1811] hover:decoration-primary"
                href="#pokreni-druzenje"
              >
                Već ideš na kavu? Pokreni druženje.
                <ArrowRight className="size-4" />
              </a>
            </div>

            {nextEvent ? (
              <a
                className="mt-10 w-full rounded-[1.4rem] bg-[#fffaf4]/90 p-5 text-[#1e1811] shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_16px_38px_rgba(52,35,14,0.12)] backdrop-blur-md transition-[translate,scale,background-color,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:bg-[#fffaf4] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_18px_42px_rgba(52,35,14,0.15)] active:scale-[0.96] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 sm:max-w-md sm:p-6 lg:absolute lg:bottom-8 lg:right-8 lg:mt-0 lg:w-[22rem]"
                href={eventHref(nextEvent.slug)}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-strong">
                  Sljedeće druženje
                </p>
                <p className="mt-2 text-xl font-semibold tracking-[-0.03em]">
                  {eventCityName(nextEvent)}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#6d5b4a] tabular-nums">
                  {formatEventDate(nextEvent)} · {nextEvent.venue}
                </p>
              </a>
            ) : null}
          </div>
        </section>

        <section
          aria-labelledby="sada-heading"
          className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10"
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-strong">
                Uživo sada
              </p>
              <h2
                className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-4xl"
                id="sada-heading"
              >
                Što se događa u DvadesetJedan
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {latestEpisode ? (
              <LiveCard
                cta="Poslušaj epizodu"
                eyebrow="Najnoviji signal"
                href={episodeHref(latestEpisode.slug)}
                icon={<Radio className="size-5" />}
                meta={
                  latestEpisode.publishedAt
                    ? formatEpisodeDate(latestEpisode.publishedAt)
                    : "Najnovija epizoda"
                }
                title={latestEpisode.title}
              />
            ) : (
              <LiveCard
                cta="Otvori signal"
                eyebrow="Bitcoin signal"
                href={LIVESTREAM_URL}
                icon={<Radio className="size-5" />}
                meta="Redovni Bitcoin-only razgovori"
                title="Signal ne prestaje."
              />
            )}

            {nextEvent ? (
              <LiveCard
                cta="Pogledaj detalje"
                eyebrow="Sljedeće druženje"
                href={eventHref(nextEvent.slug)}
                icon={<Coffee className="size-5" />}
                meta={`${formatEventDate(nextEvent)} · ${nextEvent.venue}`}
                title={nextEvent.title}
              />
            ) : (
              <LiveCard
                cta="Pokreni druženje"
                eyebrow="Tvoj grad"
                href={CONTRIBUTE_URL}
                icon={<Coffee className="size-5" />}
                meta="Predloži grad, datum i jednostavno javno mjesto."
                title="Trenutno nema potvrđenog druženja."
              />
            )}
          </div>
        </section>

        <Section
          id="od-signala-do-kave"
          title="Cyberspace treba proizvoditi meatspace."
          intro="Signal nije krajnji cilj. Otvorena grupa nije krajnji cilj. Cilj su ljudi koji se upoznaju i s vremenom sjednu za isti stol."
        >
          <ol className="grid gap-4 lg:grid-cols-3">
            {flowSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <li
                  className="relative rounded-[1.7rem] bg-card px-5 py-6 shadow-[var(--shadow-border)] sm:px-7 sm:py-7"
                  key={step.label}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-strong">
                      {step.label}
                    </span>
                    <span className="flex size-11 items-center justify-center rounded-full bg-primary/12 text-primary-strong">
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {step.text}
                  </p>
                  {index < flowSteps.length - 1 ? (
                    <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden size-6 -translate-y-1/2 text-primary lg:block" />
                  ) : null}
                </li>
              )
            })}
          </ol>
        </Section>

        <section
          className="scroll-mt-32 bg-[#efe5d6]/55 py-12 sm:py-16 dark:bg-black/10"
          id="druzenja"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-strong">
                  Družimo se uživo
                </p>
                <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl">
                  Nađi ekipu u svom gradu.
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Ne treba ti konferencija ni organizacijski tim. Dvoje
                  bitcoinera na kavi već je meetup.
                </p>
              </div>
              <p className="rounded-[1.4rem] bg-card px-5 py-4 text-sm leading-7 text-muted-foreground shadow-[var(--shadow-border)]">
                Nadolazeća druženja uvijek imaju najjači marker. Ostali gradovi
                pokazuju gdje zajednica već ima trag ili gdje ga tek možeš
                pokrenuti.
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">
              <div className="grid gap-5">
                {upcomingEvents.length ? (
                  upcomingEvents
                    .slice(0, 2)
                    .map((event) => (
                      <MeetupCard event={event} key={event.slug} />
                    ))
                ) : (
                  <div className="rounded-[1.8rem] bg-card px-6 py-8 shadow-[var(--shadow-border)]">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                      Trenutno nema najavljenog druženja.
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      Predloži vrijeme i mjesto. Mi ćemo pomoći da ekipa sazna.
                    </p>
                  </div>
                )}

                <div
                  className="rounded-[1.8rem] bg-[#0b0907] px-6 py-8 text-[#fff8ee] shadow-[var(--shadow-border)] sm:px-8"
                  id="pokreni-druzenje"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Počni malim
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.045em]">
                    Već ideš na kavu? Pozovi još nekoga.
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#d9c9b5]">
                    Javi grad, datum, vrijeme i okvirnu lokaciju. Bez pozornice,
                    bez sponzora, bez pritiska.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <ActionButton
                      className="w-full sm:w-fit"
                      external
                      href={communityHref()}
                      icon={<Send className="size-4" />}
                      primary
                    >
                      Pokreni druženje u Telegramu
                    </ActionButton>
                    <a
                      className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-white/8 px-5 py-3 text-sm font-medium text-[#fff8ee] shadow-[0_0_0_1px_rgba(255,255,255,0.12)] transition-[scale,background-color,box-shadow] duration-150 ease-out hover:bg-white/12 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.18)] active:scale-[0.96] motion-reduce:transition-none motion-reduce:active:scale-100 sm:w-fit"
                      href={CONTRIBUTE_URL}
                    >
                      Kako to radi
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                <RegionalCommunityMap cities={cities} events={events} />
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {visibleCities.map((city) => {
                    const upcoming = upcomingEvents.some(
                      (event) => event.citySlug === city.slug,
                    )

                    return (
                      <a
                        className="group rounded-[1.2rem] bg-card px-4 py-4 shadow-[var(--shadow-border)] transition-[translate,scale,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 sm:px-6 sm:py-5"
                        href={cityHref(city.slug)}
                        key={city.slug}
                      >
                        <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                          <span
                            className={`size-2 rounded-full ${upcoming ? "bg-primary" : city.status === "emerging" ? "bg-primary/35" : "bg-foreground/60"}`}
                          />
                          {city.name}
                        </span>
                        <span className="mt-2 block text-xs text-muted-foreground">
                          {upcoming
                            ? "Nadolazeće druženje"
                            : city.status === "emerging"
                              ? "Pokreni prvo druženje"
                              : "Pogledaj arhivu"}
                        </span>
                      </a>
                    )
                  })}
                </div>
                <a
                  className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors duration-150 ease-out hover:text-primary-strong hover:decoration-primary"
                  href={CITIES_URL}
                >
                  Svi gradovi
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="signal"
          title="Signal ne prestaje."
          intro="Internet je pun šuma. DvadesetJedan redovno emitira Bitcoin-only razgovore i sadržaj — bez tradinga, tokena i obećanja lake zarade."
        >
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)]">
            <div className="relative overflow-hidden rounded-[1.9rem] bg-[#0b0907] px-6 py-8 text-[#fff8ee] shadow-[var(--shadow-border)] sm:px-9 sm:py-10">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-20 size-64 rounded-full border border-primary/20 shadow-[0_0_80px_rgba(247,147,26,0.18)]"
              />
              <p className="relative flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/12">
                  <Radio className="size-5" />
                </span>
                Aktualni signal
              </p>
              <h3 className="relative mt-8 max-w-3xl text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                {latestEpisode?.title ?? "Bitcoin signal na našim jezicima"}
              </h3>
              <p className="relative mt-5 max-w-2xl text-sm leading-7 text-[#d9c9b5]">
                {latestEpisode?.summary ??
                  "Redovni Bitcoin-only razgovori na jezicima koje prirodno razumijemo."}
              </p>
              <div className="relative mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ActionButton
                  className="w-full sm:w-fit"
                  href={
                    latestEpisode
                      ? episodeHref(latestEpisode.slug)
                      : LIVESTREAM_URL
                  }
                  icon={<Play className="ml-0.5 size-4 fill-current" />}
                  primary
                >
                  Gledaj posljednji signal
                </ActionButton>
                <a
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-white/8 px-5 py-3 text-sm font-medium text-[#fff8ee] shadow-[0_0_0_1px_rgba(255,255,255,0.12)] transition-[scale,background-color,box-shadow] duration-150 ease-out hover:bg-white/12 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.18)] active:scale-[0.96] motion-reduce:transition-none motion-reduce:active:scale-100 sm:w-fit"
                  href={YOUTUBE_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <YouTubeIcon />
                  YouTube arhiva
                </a>
              </div>
            </div>

            <div className="rounded-[1.9rem] bg-card px-6 py-7 shadow-[var(--shadow-border)] sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-strong">
                Posljednje epizode
              </p>
              <ol className="mt-5 divide-y divide-border/70">
                {episodes.slice(0, 4).map((episode) => (
                  <li key={episode.slug}>
                    <a
                      className="group flex min-h-20 items-center justify-between gap-4 py-4"
                      href={episodeHref(episode.slug)}
                    >
                      <span className="min-w-0">
                        <span className="block text-sm font-medium leading-6 text-foreground">
                          {episode.title}
                        </span>
                        {episode.publishedAt ? (
                          <span className="mt-1 block text-xs text-muted-foreground tabular-nums">
                            {formatEpisodeDate(episode.publishedAt)}
                          </span>
                        ) : null}
                      </span>
                      <Play className="size-4 shrink-0 text-primary-strong transition-transform duration-150 ease-out group-hover:scale-110 motion-reduce:transition-none" />
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Section>

        <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
          <div className="overflow-hidden rounded-[2rem] bg-primary text-primary-foreground shadow-[var(--shadow-border)] sm:rounded-[2.4rem]">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
              <div className="px-6 py-9 sm:px-10 sm:py-12">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">
                  Otvorena zajednica
                </p>
                <h2 className="mt-3 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
                  Čuješ signal? Uđi u razgovor.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-primary-foreground/80 sm:text-lg">
                  Telegram nije premium članstvo ni zatvoreni klub. Uđi, prati,
                  pitaj, upoznaj ljude i vidi što se događa u gradovima oko
                  tebe.
                </p>
              </div>
              <div className="px-6 pb-9 sm:px-10 sm:pb-12 lg:pl-0">
                <a
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0b0907] px-6 py-3 text-sm font-semibold text-[#fff8ee] shadow-[0_14px_30px_rgba(64,34,4,0.2)] transition-[translate,scale,background-color] duration-150 ease-out hover:-translate-y-0.5 hover:bg-[#17110c] active:scale-[0.96] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100"
                  href={communityHref()}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <TelegramIcon />
                  Uđi u Telegram grupu
                </a>
              </div>
            </div>
          </div>
        </section>

        <Section
          title="Jedan lokalni čvor. Dio veće mreže."
          intro="DvadesetJedan je lokalna 21 zajednica za ljude koji govore našim jezicima. Slični Bitcoin-only čvorovi postoje drugdje — pa i na putovanju možeš pronaći lokalne bitcoinere."
        >
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center">
            <div className="relative overflow-hidden rounded-[1.9rem] bg-[#0b0907] px-6 py-9 text-[#fff8ee] shadow-[var(--shadow-border)] sm:px-10 sm:py-12">
              <div className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <Network className="size-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Network of networks
                  </p>
                  <p className="mt-1 text-sm text-[#d9c9b5]">
                    Lokalni signal, globalno povezana mreža.
                  </p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3" aria-hidden="true">
                {["DvadesetJedan", "21", "Lokalni čvor"].map((label) => (
                  <div
                    className="flex aspect-square items-center justify-center rounded-full bg-white/5 p-3 text-center text-xs font-semibold text-[#d9c9b5] shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
                    key={label}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-semibold tracking-[-0.045em] text-foreground">
                Putuješ? Pronađi lokalni 21.
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Globalna mreža nije zamjena za lokalnu zajednicu. Ona je most do
                drugih lokalnih zajednica kada odeš izvan svoje regije.
              </p>
              <div className="mt-6">
                <ActionButton
                  external
                  href={media.twentyOneUrl}
                  icon={<ArrowUpRight className="size-4" />}
                >
                  Istraži TwentyOne.World
                </ActionButton>
              </div>
            </div>
          </div>
        </Section>

        <Section
          title="Uči i kopaj dublje."
          intro="Signal i druženja su na prvom mjestu. Vodiči i članci ostaju ovdje kada želiš razumjeti Bitcoin dublje i mirnije."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {featuredArticles.map((article) => (
              <a
                className="group rounded-[1.7rem] bg-card px-5 py-6 shadow-[var(--shadow-border)] transition-[translate,scale,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 sm:px-6"
                href={articleHref(article.slug)}
                key={article.slug}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-strong">
                  Bitcoin osnove
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  {article.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {article.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  Čitaj tekst
                  <ArrowRight className="size-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none" />
                </span>
              </a>
            ))}
          </div>
          <div className="mt-6">
            <ActionButton
              href={ARTICLES_URL}
              icon={<ArrowUpRight className="size-4" />}
            >
              Svi članci
            </ActionButton>
          </div>
        </Section>

        <section className="mx-auto max-w-7xl px-5 pb-8 pt-2 sm:px-8 sm:pb-12">
          <div className="flex flex-col gap-5 rounded-[1.8rem] bg-card px-6 py-7 shadow-[var(--shadow-border)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-strong">
                Fotografije zajednice
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                Imaš fotografije s prethodnog druženja?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                Repo još nema potvrđenu galeriju stvarnih DvadesetJedan meetupa.
                Pošalji fotografije uz grad, datum i dopuštenje za objavu — ovaj
                layout je spreman da ih pokaže ljudima, ne stock vizuale.
              </p>
            </div>
            <ActionButton
              external
              href={communityHref()}
              icon={<Send className="size-4" />}
              primary
            >
              Pošalji fotografije
            </ActionButton>
          </div>
        </section>
      </main>
    </Layout>
  )
}
