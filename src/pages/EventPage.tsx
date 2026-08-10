import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Images,
  MapPinned,
  PlayCircle,
} from "lucide-react"
import type { ReactNode } from "react"

import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { EventPhotoGallery } from "@/components/EventPhotoGallery"
import { InfoTile } from "@/components/InfoTile"
import { Layout } from "@/components/Layout"
import { SafeImage } from "@/components/SafeImage"
import { getEventGallery } from "@/data/eventGalleries"
import { eventMeta } from "@/data/eventMeta"
import {
  getEventStatus,
  isArchiveEvent,
  isScheduledEvent,
  type EventEntry,
} from "@/data/events"
import { EVENTS_URL } from "@/data/site"
import {
  cityHref,
  formatEventTimeRange,
  makeGoogleCalendarUrl,
  makeIcsUrl,
} from "@/lib/content"
import { truncateText } from "@/lib/text"
import { usePageMeta } from "@/lib/usePageMeta"

const DESCRIPTION_LINKS = [
  { label: "Bull Bitcoin", href: "https://www.bullbitcoin.com/" },
  { label: "Revolution.Rocks", href: "https://www.revolution.rocks/" },
] as const

function renderDescriptionParagraph(paragraph: string) {
  return DESCRIPTION_LINKS.reduce<ReactNode[]>(
    (segments, link) => {
      return segments.flatMap((segment, segmentIndex) => {
        if (typeof segment !== "string" || !segment.includes(link.label)) {
          return segment
        }

        return segment.split(link.label).map((part, partIndex, parts) => (
          <span key={`${link.label}-${segmentIndex}-${partIndex}`}>
            {part}
            {partIndex < parts.length - 1 ? (
              <a
                className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary-strong hover:decoration-primary"
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
    },
    [paragraph],
  )
}

export function EventPage({ event }: { event: EventEntry }) {
  usePageMeta(`${event.title} | DvadesetJedan`, truncateText(event.summary))

  const gallery = getEventGallery(event.slug)
  const status = getEventStatus(event)
  const isCancelled = status === "cancelled"
  const youtubeId = event.videoUrl?.match(
    /(?:youtu\.be\/|v=)([A-Za-z0-9_-]+)/,
  )?.[1]
  const location = [event.venue, event.city, event.country]
    .filter(Boolean)
    .join(", ")

  return (
    <Layout>
      <main className="mx-auto max-w-5xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href={EVENTS_URL}>Svi događaji</BackLink>

        <article className="overflow-hidden rounded-[2.2rem] border border-border/80 bg-card/75">
          <div className="relative">
            {youtubeId ? (
              <a
                aria-label={`Pogledaj ${event.title} aftermovie na YouTubeu`}
                className="group relative block aspect-video overflow-hidden bg-black"
                href={event.videoUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <SafeImage
                  alt={`${event.title} — kadar iz aftermovie videa`}
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  fallbackClassName="h-full w-full object-cover"
                  fetchPriority="high"
                  height={1080}
                  loading="eager"
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  src={`https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`}
                  width={1920}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/10 transition-colors duration-150 group-hover:from-black/65" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-16 items-center justify-center rounded-full border border-white/30 bg-black/75 text-white shadow-lg backdrop-blur-sm transition-[translate,scale,background-color] duration-150 ease-out group-hover:-translate-y-0.5 group-hover:bg-[#f7931a] group-hover:text-[#160d04] group-active:scale-[0.96] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 motion-reduce:group-active:scale-100 sm:size-20">
                    <PlayCircle className="size-8 sm:size-10" />
                  </span>
                </span>
                <span className="absolute bottom-5 left-5 text-sm font-semibold text-white sm:bottom-7 sm:left-8 sm:text-base">
                  Villa BTC 2026 · aftermovie
                </span>
              </a>
            ) : (
              <SafeImage
                alt={`${event.title} — ${location}`}
                className="h-[22rem] w-full object-cover sm:h-[28rem]"
                fallbackClassName="h-[22rem] w-full object-cover sm:h-[28rem]"
                fetchPriority="high"
                height={1000}
                loading="eager"
                sizes="(min-width: 1024px) 1024px, 100vw"
                src={event.coverImage}
                width={1600}
              />
            )}
            {gallery?.photos.length ? (
              <span className="absolute bottom-5 right-5 inline-flex min-h-10 items-center gap-2 rounded-full border border-white/20 bg-black/75 px-4 text-xs font-semibold text-white backdrop-blur">
                <Images className="size-4" />
                {gallery.photos.length} fotografija
              </span>
            ) : null}
          </div>

          <div className="grid gap-10 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div>
              <h1 className="safe-heading text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl">
                {event.title}
              </h1>
              {isCancelled ? (
                <p className="mt-4 inline-flex rounded-full bg-destructive px-4 py-2 text-sm font-semibold text-white">
                  Događaj je otkazan
                </p>
              ) : null}
              {isArchiveEvent(event) ? (
                <p className="mt-4 inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary-strong">
                  Dokumentirana arhiva
                </p>
              ) : null}

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <InfoTile
                  icon={<CalendarDays className="size-4" />}
                  label={isArchiveEvent(event) ? "Vrijeme" : "Datum i vrijeme"}
                  value={formatEventTimeRange(event)}
                />
                <InfoTile
                  icon={<MapPinned className="size-4" />}
                  label="Lokacija"
                  value={location}
                />
                {isScheduledEvent(event) ? (
                  <InfoTile
                    icon={<Clock3 className="size-4" />}
                    label="Adresa"
                    value={
                      event.address ? (
                        <a
                          className="inline-flex items-center gap-1 text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary-strong hover:decoration-primary"
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
                ) : null}
                <InfoTile
                  icon={<CalendarDays className="size-4" />}
                  label="Status"
                  value={
                    isCancelled
                      ? "Otkazano"
                      : status === "upcoming"
                        ? "Nadolazeći događaj"
                        : isArchiveEvent(event)
                          ? "Arhivski zapis"
                          : "Prošli događaj"
                  }
                />
              </div>

              {isScheduledEvent(event) && !isCancelled ? (
                <ActionButton
                  className="mt-6 w-full justify-center lg:hidden"
                  external
                  href={event.registrationUrl}
                  icon={<ArrowUpRight className="size-4" />}
                  primary
                >
                  Otvori prijavu
                </ActionButton>
              ) : null}

              <div className="mt-10 space-y-5 text-base leading-8 text-foreground">
                {event.description.map((paragraph) => (
                  <p key={paragraph}>{renderDescriptionParagraph(paragraph)}</p>
                ))}
              </div>

              {isArchiveEvent(event) ? (
                <p className="mt-8 rounded-[1.4rem] border border-primary/20 bg-primary/8 px-5 py-4 text-sm leading-7 text-foreground sm:px-6">
                  Ovaj zapis koristi samo podatke koje možemo potkrijepiti
                  fotografijama, nazivima datoteka i postojećim sadržajem
                  repozitorija. Nepotvrđena logistika nije nadopunjavana.
                </p>
              ) : (
                <>
                  <p className="mt-8 rounded-[1.4rem] border border-primary/20 bg-primary/8 px-5 py-4 text-sm leading-7 text-foreground sm:px-6">
                    Početnici su dobrodošli gdje je to u skladu s najavom
                    događaja. Zadnje promjene provjeri kroz službenu prijavu ili
                    Telegram koordinaciju navedenu u opisu događaja.
                  </p>
                  <p className="mt-4 rounded-[1.4rem] border border-border/80 bg-background/70 px-5 py-4 text-sm leading-7 text-muted-foreground sm:px-6">
                    {eventMeta.freshnessNote}
                  </p>
                </>
              )}
            </div>

            <aside className="space-y-4 lg:sticky lg:top-40 lg:self-start">
              {isScheduledEvent(event) ? (
                <>
                  {!isCancelled ? (
                    <div className="hidden lg:block">
                      <ActionButton
                        className="w-full justify-center"
                        external
                        href={event.registrationUrl}
                        icon={<ArrowUpRight className="size-4" />}
                        primary
                      >
                        Otvori prijavu
                      </ActionButton>
                    </div>
                  ) : null}
                  <ActionButton
                    className="w-full justify-center"
                    external
                    href={event.mapUrl}
                    icon={<MapPinned className="size-4" />}
                  >
                    Otvori Google Maps
                  </ActionButton>
                  <ActionButton
                    className="w-full justify-center"
                    external
                    href={makeGoogleCalendarUrl(event)}
                    icon={<CalendarDays className="size-4" />}
                  >
                    Dodaj u Google kalendar
                  </ActionButton>
                  <a
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-card py-3 pl-[1.125rem] pr-5 text-sm font-medium text-foreground shadow-[var(--shadow-border)] transition-[translate,scale,box-shadow,background-color,color] duration-150 ease-out hover:-translate-y-0.5 hover:bg-background hover:shadow-[var(--shadow-border-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-[0.96] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 sm:pr-6"
                    download={`${event.slug}.ics`}
                    href={makeIcsUrl(event)}
                  >
                    <CalendarDays className="size-4" />
                    Preuzmi ICS
                  </a>
                  {event.sourceUrl ? (
                    <ActionButton
                      className="w-full justify-center"
                      external
                      href={event.sourceUrl}
                      icon={<ArrowUpRight className="size-4" />}
                    >
                      {event.sourceName ?? "Izvor"}
                    </ActionButton>
                  ) : null}
                </>
              ) : null}
              {event.citySlug ? (
                <ActionButton
                  className="w-full justify-center"
                  href={cityHref(event.citySlug)}
                  icon={<MapPinned className="size-4" />}
                >
                  Stranica grada
                </ActionButton>
              ) : null}
              {event.videoUrl ? (
                <ActionButton
                  className="w-full justify-center"
                  external
                  href={event.videoUrl}
                  icon={<PlayCircle className="size-4" />}
                >
                  Pogledaj na YouTubeu
                </ActionButton>
              ) : null}
            </aside>
          </div>
        </article>

        {gallery?.photos.length ? (
          <EventPhotoGallery gallery={gallery} />
        ) : null}
      </main>
    </Layout>
  )
}
