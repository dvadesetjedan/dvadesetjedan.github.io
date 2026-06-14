import { ArrowUpRight, CalendarDays, Clock3, MapPinned } from "lucide-react"
import type { ReactNode } from "react"

import type { EventEntry } from "@/data/events"
import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { InfoTile } from "@/components/InfoTile"
import { Layout } from "@/components/Layout"
import { SafeImage } from "@/components/SafeImage"
import { eventMeta } from "@/data/eventMeta"
import { EVENTS_URL } from "@/data/site"
import {
  cityHref,
  formatEventTimeRange,
  makeGoogleCalendarUrl,
  makeIcsUrl,
} from "@/lib/content"
import { truncateText } from "@/lib/text"
import { usePageMeta } from "@/lib/usePageMeta"

const BULL_BITCOIN_LABEL = "Bull Bitcoin"
const BULL_BITCOIN_URL = "https://www.bullbitcoin.com/"
const REVOLUTION_ROCKS_LABEL = "Revolution.Rocks"
const REVOLUTION_ROCKS_URL = "https://www.revolution.rocks/"

const DESCRIPTION_LINKS = [
  { label: BULL_BITCOIN_LABEL, href: BULL_BITCOIN_URL },
  { label: REVOLUTION_ROCKS_LABEL, href: REVOLUTION_ROCKS_URL },
] as const

function renderDescriptionParagraph(paragraph: string) {
  return DESCRIPTION_LINKS.reduce<ReactNode[]>((segments, link) => {
    return segments.flatMap((segment, segmentIndex) => {
      if (typeof segment !== "string" || !segment.includes(link.label)) {
        return segment
      }

      return segment.split(link.label).map((part, partIndex, parts) => (
        <span key={`${link.label}-${segmentIndex}-${partIndex}`}>
          {part}
          {partIndex < parts.length - 1 ? (
            <a
              className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.label}
            </a>
          ) : null}
        </span>
      ))
    })
  }, [paragraph])
}

export function EventPage({ event }: { event: EventEntry }) {
  usePageMeta(
    `${event.title} | DvadesetJedan`,
    truncateText(event.summary),
  )

  const isCancelled = event.status === "cancelled"

  return (
    <Layout>
      <main className="mx-auto max-w-5xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href={EVENTS_URL}>Svi događaji</BackLink>

        <article className="overflow-hidden rounded-[2.2rem] border border-border/80 bg-card/75">
          <SafeImage
            alt=""
            className="h-[24rem] w-full object-cover"
            fallbackClassName="h-[24rem] w-full"
            src={event.coverImage}
          />

          <div className="grid gap-10 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div>
              <h1 className="safe-heading text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl">
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
                  value={
                    event.address ? (
                      <a
                        className="inline-flex items-center gap-1 text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                        href={event.mapUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {event.address}
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    ) : (
                      "Lokacija će biti objavljena naknadno."
                    )
                  }
                />
                <InfoTile
                  icon={<CalendarDays className="size-4" />}
                  label="Status"
                  value={
                    isCancelled
                      ? "Otkazano"
                      : new Date(event.end) >= new Date()
                      ? "Nadolazeći događaj"
                      : "Prošli događaj"
                  }
                />
              </div>

              <div className="mt-10 space-y-5 text-base leading-8 text-foreground">
                {event.description.map((paragraph) => (
                  <p key={paragraph}>{renderDescriptionParagraph(paragraph)}</p>
                ))}
              </div>
              <p className="mt-8 rounded-[1.4rem] border border-primary/20 bg-primary/8 px-5 py-4 text-sm leading-7 text-foreground">
                Početnici su dobrodošli gdje je to u skladu s najavom događaja.
                Zadnje promjene provjeri kroz službenu prijavu ili Telegram
                koordinaciju navedenu u opisu događaja.
              </p>
              <p className="mt-4 rounded-[1.4rem] border border-border/80 bg-background/70 px-5 py-4 text-sm leading-7 text-muted-foreground">
                {eventMeta.freshnessNote}
              </p>
            </div>

            <aside className="space-y-4">
              {!isCancelled ? (
                <ActionButton
                  href={event.registrationUrl}
                  icon={<ArrowUpRight className="size-4" />}
                  external
                  primary
                  className="w-full justify-center"
                >
                  Otvori prijavu
                </ActionButton>
              ) : null}
              <ActionButton
                href={event.mapUrl}
                icon={<MapPinned className="size-4" />}
                external
                className="w-full justify-center"
              >
                Otvori Google Maps
              </ActionButton>
              <ActionButton
                href={makeGoogleCalendarUrl(event)}
                icon={<CalendarDays className="size-4" />}
                external
                className="w-full justify-center"
              >
                Dodaj u Google kalendar
              </ActionButton>
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border/80 bg-card px-5 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background hover:shadow-md active:translate-y-0"
                download={`${event.slug}.ics`}
                href={makeIcsUrl(event)}
              >
                <CalendarDays className="size-4" />
                Preuzmi ICS
              </a>
              {event.citySlug ? (
                <ActionButton
                  href={cityHref(event.citySlug)}
                  icon={<MapPinned className="size-4" />}
                  className="w-full justify-center"
                >
                  Stranica grada
                </ActionButton>
              ) : null}
              {event.sourceUrl ? (
                <ActionButton
                  href={event.sourceUrl}
                  icon={<ArrowUpRight className="size-4" />}
                  external
                  className="w-full justify-center"
                >
                  {event.sourceName ?? "Izvor"}
                </ActionButton>
              ) : null}
            </aside>
          </div>
        </article>
      </main>
    </Layout>
  )
}
