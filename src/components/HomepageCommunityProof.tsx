import { ArrowUpRight, Expand, MapPin, MessageCircle, Play } from "lucide-react"
import { useState } from "react"

import { ActionButton } from "@/components/ActionButton"
import { CommunityMap } from "@/components/CommunityMap"
import { GalleryLightbox } from "@/components/GalleryLightbox"
import { SafeImage } from "@/components/SafeImage"
import { cities } from "@/data/cities"
import {
  communityArchivePhotos,
  type GalleryPhoto,
} from "@/data/eventGalleries"
import { events, type ScheduledEventEntry } from "@/data/events"
import { EVENTS_URL, LIVESTREAM_URL, YOUTUBE_URL } from "@/data/site"
import { communityHref, eventHref, formatEventDate } from "@/lib/content"
import { cn } from "@/lib/utils"

const photoWallClasses = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
] as const

function shuffleItems<T>(items: readonly T[]) {
  const shuffled = [...items]

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    const currentItem = shuffled[index]
    shuffled[index] = shuffled[randomIndex]
    shuffled[randomIndex] = currentItem
  }

  return shuffled
}

function createCommunitySlideshow(): GalleryPhoto[] {
  const photosByEvent = new Map<string, GalleryPhoto[]>()

  communityArchivePhotos.forEach((photo) => {
    if (!photo.eventSlug) return
    const eventPhotos = photosByEvent.get(photo.eventSlug) ?? []
    eventPhotos.push(photo)
    photosByEvent.set(photo.eventSlug, eventPhotos)
  })

  const leadPhotos = shuffleItems([...photosByEvent.values()])
    .slice(0, photoWallClasses.length)
    .map((photos) => shuffleItems(photos)[0])
    .filter((photo): photo is GalleryPhoto => Boolean(photo))
  const leadSources = new Set(leadPhotos.map((photo) => photo.src))
  const remainingPhotos = shuffleItems(
    communityArchivePhotos.filter((photo) => !leadSources.has(photo.src)),
  )

  return [...leadPhotos, ...remainingPhotos]
}

function photoObjectPosition(eventSlug?: string) {
  return eventSlug === "beograd-bitcoin-meetup-2024"
    ? "object-[center_72%]"
    : "object-center"
}

function eventCityName(event: ScheduledEventEntry) {
  return event.citySlug
    ? (cities.find((city) => city.slug === event.citySlug)?.name ?? event.city)
    : event.city
}

export function HomepageCommunityProof({
  upcomingEvents,
}: {
  upcomingEvents: ScheduledEventEntry[]
}) {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null)
  const [photoSlideshow] = useState(createCommunitySlideshow)
  const photoWall = photoSlideshow.slice(0, photoWallClasses.length)

  return (
    <>
      <section className="border-y border-foreground/10 bg-[#fff8ef] py-16 dark:bg-background sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-strong">
                Ljudi se pojavljuju
              </p>
              <h2 className="mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.055em] text-foreground sm:text-6xl">
                Zajednicu gradimo i druženjima uživo.
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
                DvadesetJedan nastaje kroz razgovore, druženja, konferencije,
                kave i ljude koji se pojavljuju.
              </p>
            </div>
            <ActionButton
              className="min-h-12 w-full px-6 shadow-[0_12px_28px_rgba(247,147,26,0.22)] sm:w-fit"
              href={`${EVENTS_URL}#arhiva`}
              icon={<ArrowUpRight className="size-4" />}
              primary
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
                <button
                  aria-label={`Otvori fotografiju ${index + 1} od ${photoWall.length}: ${photo.alt}`}
                  className="absolute inset-0 block h-full w-full transition-transform duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary active:scale-[0.96] motion-reduce:transition-none motion-reduce:active:scale-100"
                  onClick={() => setActivePhotoIndex(index)}
                  type="button"
                >
                  <SafeImage
                    alt={photo.alt}
                    className={cn(
                      "h-full w-full object-cover outline outline-1 -outline-offset-1 outline-black/10 transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
                      photoObjectPosition(photo.eventSlug),
                    )}
                    height={900}
                    pictureClassName="absolute inset-0 h-full w-full"
                    sizes="(min-width: 768px) 50vw, 82vw"
                    src={photo.src}
                    width={1400}
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <span className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-black/65 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.16)] backdrop-blur transition-[scale,background-color] duration-150 ease-out group-hover:bg-black/82 group-hover:scale-105">
                    <Expand className="size-4" />
                  </span>
                </button>
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-4 pr-16 text-pretty text-sm font-medium text-white sm:p-5 sm:pr-16">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-32 bg-[#242022] py-16 text-[#fff8ef] sm:py-24"
        id="druzenja"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#a9ecd5]">
              Gdje se družimo
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.055em] sm:text-6xl">
              Lokalna mreža i sljedeća druženja.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.18fr)_minmax(20rem,0.82fr)]">
            <CommunityMap cities={cities} events={events} />

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-balance text-2xl font-semibold tracking-[-0.04em]">
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
                        "group block rounded-[1.25rem] border p-4 transition-[translate,border-color,background-color] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd35f] active:scale-[0.96] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100",
                        index === 0
                          ? "border-[#f7931a]/50 bg-[#f7931a]/10"
                          : "border-white/10 bg-black/15 hover:border-white/25",
                      )}
                      href={eventHref(event.slug)}
                      key={event.slug}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ffd35f] tabular-nums">
                        {formatEventDate(event)}
                      </p>
                      <h4 className="mt-2 text-balance text-xl font-semibold leading-tight tracking-[-0.035em]">
                        {event.title}
                      </h4>
                      <p className="mt-3 flex items-start gap-2 text-pretty text-sm text-white/60">
                        <MapPin className="mt-0.5 size-4 shrink-0 text-[#f7931a]" />
                        {eventCityName(event)} · {event.venue}
                      </p>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="mt-5 rounded-[1.25rem] border border-dashed border-white/15 px-4 py-5 text-pretty text-sm leading-7 text-white/60">
                  Trenutno nema javno najavljenih događaja. Najave se prvo
                  pojave u zajednici.
                </p>
              )}

              <div
                className="mt-6 scroll-mt-32 border-t border-white/10 pt-6"
                id="pokreni-druzenje"
              >
                <p className="font-semibold">Nema druženja u tvom gradu?</p>
                <p className="mt-2 text-pretty text-sm leading-6 text-white/60">
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

      <section
        className="mx-auto max-w-7xl scroll-mt-32 px-5 py-16 sm:px-8 sm:py-24"
        id="signal"
      >
        <div className="grid overflow-hidden rounded-[2rem] border border-foreground/10 bg-card shadow-soft lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <div className="relative aspect-video overflow-hidden bg-black lg:aspect-auto lg:min-h-[30rem]">
            <SafeImage
              alt="Prikaz stvarnog DvadesetJedan livestreama s više sudionika u razgovoru."
              className="absolute inset-0 h-full w-full object-cover outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10"
              height={900}
              sizes="(min-width: 1024px) 60vw, 100vw"
              src="/images/livestream/dvadesetjedan-signal-uzivo.png"
              width={1600}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
            <span className="absolute bottom-5 left-5 inline-flex min-h-10 items-center gap-2 rounded-full border border-white/20 bg-black/70 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur sm:bottom-6 sm:left-6">
              <span className="size-2 rounded-full bg-red-500" />
              Stvarni kadar uživo
            </span>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-strong">
              Signal uživo
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.055em] text-foreground sm:text-5xl">
              Najčešće nedjeljom razgovaramo o Bitcoinu.
            </h2>
            <p className="mt-5 text-pretty text-base leading-8 text-muted-foreground">
              Prolazimo kroz novosti iz Bitcoin svijeta, tehnologiju, ekonomiju
              i ideje koje su obilježile tjedan — bez tradinga, tokena i praznog
              hypea.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ActionButton
                className="w-full sm:w-fit"
                href={LIVESTREAM_URL}
                icon={<Play className="ml-0.5 size-4" />}
                primary
              >
                Gledaj livestream
              </ActionButton>
              <ActionButton
                className="w-full sm:w-fit"
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
            className="absolute inset-0 h-full w-full object-cover opacity-55 outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10"
            height={900}
            sizes="(min-width: 1280px) 1280px, 100vw"
            src="/images/events/Rab meetup 2022.37.jpeg"
            width={1400}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#171315]/95 via-[#171315]/80 to-[#171315]/30" />
          <div className="relative max-w-3xl">
            <MessageCircle className="size-7 text-[#ffd35f]" />
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-6xl">
              Bitcoin je globalan. Zajednica počinje lokalno.
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-white/75 sm:text-lg">
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

      {activePhotoIndex !== null ? (
        <GalleryLightbox
          activeIndex={activePhotoIndex}
          onChange={setActivePhotoIndex}
          onClose={() => setActivePhotoIndex(null)}
          photos={photoSlideshow}
        />
      ) : null}
    </>
  )
}
