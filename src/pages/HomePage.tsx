import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Coffee,
  MapPin,
  MapPinned,
  MessageCircle,
  Network,
  Play,
  Radio,
  Send,
} from "lucide-react"

import { ActionButton } from "@/components/ActionButton"
import { CommunityMap } from "@/components/CommunityMap"
import { OptimizedImage } from "@/components/OptimizedImage"
import { Layout } from "@/components/Layout"
import { RegionalCommunityMap } from "@/components/RegionalCommunityMap"
import { SafeImage } from "@/components/SafeImage"
import { Section } from "@/components/Section"
import { TelegramIcon, YouTubeIcon } from "@/components/Icons"
import { cities } from "@/data/cities"
import { episodes } from "@/data/episodes"
import { featuredCommunityPhotos } from "@/data/eventGalleries"
import {
  eventSortTime,
  getEventStatus,
  isScheduledEvent,
  events,
  type EventEntry,
  type ScheduledEventEntry,
} from "@/data/events"
import { featuredArticles } from "@/data/featuredArticles"
import {
  ARTICLES_URL,
  CITIES_URL,
  CONTRIBUTE_URL,
  EVENTS_URL,
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
import { cn } from "@/lib/utils"
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

function MeetupCard({ event }: { event: ScheduledEventEntry }) {
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

const photoWallClasses = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
] as const

export function HomePage() {
  usePageMeta(
    "DvadesetJedan | Bitcoin signal i druženja uživo",
    "Bitcoin signal, otvorena zajednica i druženja uživo za ljude koji govore našim jezicima.",
  )

  const now = new Date()
  const latestEpisode = episodes[0]
  const upcomingEvents = events
    .filter(isScheduledEvent)
    .filter((event) => getEventStatus(event, now) === "upcoming")
    .sort((left, right) => eventSortTime(left) - eventSortTime(right))
  const nextEvent = upcomingEvents[0]
  const photoWall = featuredCommunityPhotos.slice(0, 6)
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

        <section className="border-y border-foreground/10 bg-[#fff8ef] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-strong">
                  Ljudi se pojavljuju
                </p>
                <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-foreground sm:text-6xl">
                  Zajednica se događa za istim stolom.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  DvadesetJedan nastaje kroz razgovore, druženja, konferencije,
                  kave i ljude koji se pojavljuju.
                </p>
              </div>
              <ActionButton
                href={`${EVENTS_URL}#arhiva`}
                icon={<ArrowUpRight className="size-4" />}
              >
                Pogledaj prošla druženja
              </ActionButton>
            </div>

            <div className="-mx-5 mt-9 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:auto-rows-[14rem] md:grid-cols-12 md:overflow-visible md:px-0 md:pb-0">
              {photoWall.map((photo, index) => (
                <figure
                  className={cn(
                    "group relative h-72 min-w-[82vw] snap-center overflow-hidden rounded-[1.5rem] bg-[#242022] md:h-auto md:min-w-0",
                    photoWallClasses[index],
                  )}
                  key={photo.src}
                >
                  <SafeImage
                    alt={photo.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    height={900}
                    sizes="(min-width: 768px) 50vw, 82vw"
                    src={photo.src}
                    width={1400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white sm:p-5">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#242022] py-16 text-[#fff8ef] sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-8 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#a9ecd5]">
                Gdje se družimo
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">
                Lokalna mreža i sljedeća druženja.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.18fr)_minmax(20rem,0.82fr)]">
              <CommunityMap cities={cities} events={events} />

              <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                    Sljedeća druženja
                  </h3>
                  <a
                    className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-[#ffd35f] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd35f]"
                    href={EVENTS_URL}
                  >
                    Sva <ArrowUpRight className="size-4" />
                  </a>
                </div>

                {upcomingEvents.length ? (
                  <div className="mt-5 space-y-3">
                    {upcomingEvents.slice(0, 3).map((event, index) => (
                      <a
                        className={cn(
                          "group block rounded-[1.25rem] border p-4 transition-[translate,border-color,background-color] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd35f] motion-reduce:transition-none motion-reduce:hover:translate-y-0",
                          index === 0
                            ? "border-[#f7931a]/50 bg-[#f7931a]/10"
                            : "border-white/10 bg-black/15 hover:border-white/25",
                        )}
                        href={eventHref(event.slug)}
                        key={event.slug}
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ffd35f]">
                          {formatEventDate(event)}
                        </p>
                        <h4 className="mt-2 text-xl font-semibold leading-tight tracking-[-0.035em]">
                          {event.title}
                        </h4>
                        <p className="mt-3 flex items-center gap-2 text-sm text-white/60">
                          <MapPin className="size-4 shrink-0 text-[#f7931a]" />
                          {eventCityName(event)} · {event.venue}
                        </p>
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="mt-5 rounded-[1.25rem] border border-dashed border-white/15 px-4 py-5 text-sm leading-7 text-white/60">
                    Trenutno nema javno najavljenih događaja. Najave se prvo
                    pojave u zajednici.
                  </p>
                )}

                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="font-semibold">Nema druženja u tvom gradu?</p>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Javi se u Telegram grupi i pokreni ga. Zajednica će se
                    dogovoriti ručno, a potvrđeni termin možemo dodati ovdje.
                  </p>
                  <a
                    className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#a9ecd5] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd35f]"
                    href={communityHref()}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Javi se zajednici <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid overflow-hidden rounded-[2rem] border border-foreground/10 bg-card shadow-soft lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
            <div className="relative aspect-video overflow-hidden bg-black lg:aspect-auto lg:min-h-[30rem]">
              <SafeImage
                alt="Prikaz stvarnog DvadesetJedan livestreama s više sudionika u razgovoru."
                className="absolute inset-0 h-full w-full object-cover"
                height={900}
                sizes="(min-width: 1024px) 60vw, 100vw"
                src="/images/livestream/dvadesetjedan-signal-uzivo.png"
                width={1600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
              <span className="absolute bottom-5 left-5 inline-flex min-h-10 items-center gap-2 rounded-full border border-white/20 bg-black/70 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                <span className="size-2 rounded-full bg-red-500" />
                Stvarni kadar uživo
              </span>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-strong">
                Signal uživo
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-foreground sm:text-5xl">
                Nedjeljom razgovaramo, ne emitiramo u prazno.
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                Svake nedjelje razgovaramo o Bitcoinu, vijestima, tehnologiji i
                idejama koje su obilježile tjedan.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ActionButton
                  href={LIVESTREAM_URL}
                  icon={<Play className="size-4" />}
                  primary
                >
                  Gledaj livestream
                </ActionButton>
                <ActionButton
                  external
                  href={YOUTUBE_URL}
                  icon={<ArrowUpRight className="size-4" />}
                >
                  YouTube kanal
                </ActionButton>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#242022] px-6 py-10 text-white sm:px-12 sm:py-14">
            <SafeImage
              alt="DvadesetJedan Bitcoin druženje na Rabu."
              className="absolute inset-0 h-full w-full object-cover opacity-55"
              height={900}
              sizes="(min-width: 1280px) 1280px, 100vw"
              src="/images/events/Rab meetup 2022.37.jpeg"
              width={1400}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#171315]/95 via-[#171315]/80 to-[#171315]/30" />
            <div className="relative max-w-3xl">
              <MessageCircle className="size-7 text-[#ffd35f]" />
              <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-6xl">
                Bitcoin je globalan. Zajednica počinje lokalno.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                Pronađi ljude iz regije, postavi pitanje i pomozi da se sljedeća
                dobra ideja dogodi baš u tvom gradu.
              </p>
              <div className="mt-8">
                <ActionButton
                  external
                  href={communityHref()}
                  icon={<ArrowUpRight className="size-4" />}
                  primary
                >
                  Pridruži se zajednici
                </ActionButton>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
