import { ArrowRight, Coffee, MapPinned, Radio } from "lucide-react"

import { ActionButton } from "@/components/ActionButton"
import { HomepageCommunityProof } from "@/components/HomepageCommunityProof"
import { OptimizedImage } from "@/components/OptimizedImage"
import { Layout } from "@/components/Layout"
import { Section } from "@/components/Section"
import { TelegramIcon } from "@/components/Icons"
import { TwentyOneWorldNetwork } from "@/components/TwentyOneWorldNetwork"
import { cities } from "@/data/cities"
import { episodes } from "@/data/episodes"
import {
  eventSortTime,
  getEventStatus,
  isScheduledEvent,
  events,
  type EventEntry,
} from "@/data/events"
import { CONTRIBUTE_URL, LIVESTREAM_URL, media } from "@/data/site"
import {
  communityHref,
  episodeHref,
  eventHref,
  formatEpisodeDate,
  formatEventDate,
} from "@/lib/content"
import { usePageMeta } from "@/lib/usePageMeta"

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

  return (
    <Layout>
      <main>
        <section className="relative isolate flex min-h-[calc(100svh-8.25rem)] overflow-hidden bg-[#fbf6ef] dark:bg-background min-[1160px]:min-h-[calc(100svh-4.75rem)]">
          <OptimizedImage
            alt={
              nextEvent
                ? `Ljudi za stolovima u ${nextEvent.venue}, lokaciji sljedećeg DvadesetJedan druženja`
                : "DvadesetJedan Bitcoin signal"
            }
            className="absolute inset-0 h-full w-full object-cover object-[68%_center] transition-[filter] duration-200 dark:brightness-[0.72] dark:saturate-[0.85] motion-reduce:transition-none sm:object-center lg:object-right"
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
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#6d5b4a] dark:text-[#d7bea5]">
                <span className="size-2 rounded-full bg-primary shadow-[0_0_0_5px_rgba(247,147,26,0.13)]" />
                Bitcoin-only / na našim jezicima
              </p>
              <h1 className="safe-heading mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#1e1811] dark:text-[#fff4e6] sm:text-6xl lg:text-[4.75rem]">
                Bitcoin signal. Lokalna zajednica. Stvarna druženja.
              </h1>
              <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-[#5f4d3c] dark:text-[#d3bfa8] sm:text-xl">
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
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#fffaf4]/88 px-5 py-3 text-sm font-medium text-[#1e1811] shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_8px_24px_rgba(52,35,14,0.08)] backdrop-blur-sm transition-[translate,scale,background-color,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:bg-[#fffaf4] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_10px_28px_rgba(52,35,14,0.11)] active:scale-[0.96] dark:bg-[#241b15]/88 dark:text-[#fff4e6] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_24px_rgba(0,0,0,0.22)] dark:hover:bg-[#2d2119] dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_10px_28px_rgba(0,0,0,0.28)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 sm:w-fit"
                  href="#druzenja"
                >
                  <MapPinned className="size-4" />
                  Pronađi druženje
                </a>
              </div>

              <a
                className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-[#5f4d3c] underline decoration-black/20 underline-offset-4 transition-colors duration-150 ease-out hover:text-[#1e1811] hover:decoration-primary dark:text-[#d3bfa8] dark:decoration-white/25 dark:hover:text-[#fff4e6]"
                href="#pokreni-druzenje"
              >
                Već ideš na kavu? Pokreni druženje.
                <ArrowRight className="size-4" />
              </a>
            </div>

            {nextEvent ? (
              <a
                className="mt-10 w-full rounded-[1.4rem] bg-[#fffaf4]/90 p-5 text-[#1e1811] shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_16px_38px_rgba(52,35,14,0.12)] backdrop-blur-md transition-[translate,scale,background-color,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:bg-[#fffaf4] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_18px_42px_rgba(52,35,14,0.15)] active:scale-[0.96] dark:bg-[#241b15]/92 dark:text-[#fff4e6] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_16px_38px_rgba(0,0,0,0.3)] dark:hover:bg-[#2d2119] dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_18px_42px_rgba(0,0,0,0.36)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 sm:max-w-md sm:p-6 lg:absolute lg:bottom-8 lg:right-8 lg:mt-0 lg:w-[22rem]"
                href={eventHref(nextEvent.slug)}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-strong">
                  Sljedeće druženje
                </p>
                <p className="mt-2 text-xl font-semibold tracking-[-0.03em]">
                  {eventCityName(nextEvent)}
                </p>
                <p className="mt-2 text-pretty text-sm leading-6 text-[#6d5b4a] dark:text-[#c9b197] tabular-nums">
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

        <HomepageCommunityProof upcomingEvents={upcomingEvents} />

        <Section
          title="Jedan lokalni čvor. Dio veće mreže."
          intro="DvadesetJedan je lokalna 21 zajednica za ljude koji govore našim jezicima. Slični Bitcoin-only čvorovi postoje drugdje — pa i na putovanju možeš pronaći lokalne bitcoinere."
        >
          <TwentyOneWorldNetwork href={media.twentyOneUrl} />
        </Section>
      </main>
    </Layout>
  )
}
