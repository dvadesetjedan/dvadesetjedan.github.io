import { ArrowUpRight, Send } from "lucide-react"
import { useState } from "react"

import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { CommunityMap } from "@/components/CommunityMap"
import { EventCard } from "@/components/EventCard"
import { Layout } from "@/components/Layout"
import type { CityEntry } from "@/data/cities"
import { eventMeta } from "@/data/eventMeta"
import { eventSortTime, getEventStatus, type EventEntry } from "@/data/events"
import { CONTRIBUTE_URL } from "@/data/site"
import { communityHref } from "@/lib/content"
import { usePageMeta } from "@/lib/usePageMeta"

const eventSteps = [
  "Odaberi grad i okvirni datum",
  "Nađi jednostavnu lokaciju za razgovor",
  "Javi se u Telegram grupi",
  "Zadrži Bitcoin-only fokus",
  "Počni malim druženjem, ne velikim događajem",
] as const

function eventCountLabel(count: number) {
  return count === 1 ? "1 događaj" : `${count} događaja`
}

function cityAnchorId(city: string) {
  return `grad-${city.toLowerCase().replace(/\s+/g, "-")}`
}

export function EventsPage({
  cities,
  events,
}: {
  cities: CityEntry[]
  events: EventEntry[]
}) {
  usePageMeta(
    "Događaji | DvadesetJedan",
    "Nadolazeći Bitcoin događaji, arhiva druženja i način kako predložiti lokalni događaj kroz DvadesetJedan zajednicu.",
  )

  const [activeCitySlug, setActiveCitySlug] = useState<string | null>(null)
  const now = new Date()
  const upcomingEvents = events
    .filter((event) => getEventStatus(event, now) === "upcoming")
    .filter(
      (event) => activeCitySlug === null || event.citySlug === activeCitySlug,
    )
    .sort((left, right) => eventSortTime(left) - eventSortTime(right))
  const pastEvents = events
    .filter((event) => getEventStatus(event, now) === "past")
    .filter(
      (event) => activeCitySlug === null || event.citySlug === activeCitySlug,
    )
    .sort((left, right) => eventSortTime(right) - eventSortTime(left))
  const cancelledEvents = events.filter(
    (event) =>
      getEventStatus(event, now) === "cancelled" &&
      (activeCitySlug === null || event.citySlug === activeCitySlug),
  )
  const cityAnchorOwners = new Map<string, string>()
  for (const event of [...upcomingEvents, ...cancelledEvents, ...pastEvents]) {
    if (!cityAnchorOwners.has(event.city)) {
      cityAnchorOwners.set(event.city, event.slug)
    }
  }
  const cityGroups = cities
    .filter((city) => events.some((event) => event.citySlug === city.slug))
    .sort((left, right) => left.name.localeCompare(right.name, "hr"))

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href="/">Početna</BackLink>
        <section className="grid gap-8 overflow-hidden rounded-[2.2rem] border border-border/80 bg-card/70 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
              Događaji
            </p>
            <h1 className="safe-heading mt-4 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
              Pregled svih događaja na jednom mjestu.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Nadolazeći događaji i fotografska arhiva prethodnih druženja, sa
              zasebnom stranicom za svaki potvrđeni ili dokumentirani događaj.
            </p>
          </div>

          <div className="mx-auto flex aspect-square w-full max-w-[16rem] items-center justify-center rounded-[2rem] border border-primary/25 bg-[#070707] p-7 shadow-soft">
            <img
              alt="Twenty One handshake ikona za događaje"
              className="h-full w-full object-contain drop-shadow-[0_0_24px_rgba(247,147,26,0.35)]"
              src="/images/twentyone-handshake.svg"
              width={1009}
              height={810}
            />
          </div>
        </section>

        <section className="mt-8 rounded-[1.6rem] border border-border/80 bg-card px-6 py-6">
          <p className="text-sm leading-7 text-muted-foreground">
            {eventMeta.freshnessNote}
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a
              className="font-medium text-foreground hover:text-primary-strong"
              href={eventMeta.primarySourceUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Službeni izvor: {eventMeta.primarySourceName}
            </a>
            {"lastManualCheck" in eventMeta ? (
              <span className="text-muted-foreground">
                Zadnje ručno ažuriranje: {eventMeta.lastManualCheck}
              </span>
            ) : null}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              className={`inline-flex min-h-11 items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors ${activeCitySlug === null ? "border-primary/50 bg-primary/10 text-foreground" : "border-border/80 text-foreground hover:border-primary/40"}`}
              onClick={() => setActiveCitySlug(null)}
              type="button"
            >
              Svi gradovi
            </button>
            {cityGroups.map((city) => (
              <button
                className={`inline-flex min-h-11 items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors ${activeCitySlug === city.slug ? "border-primary/50 bg-primary/10 text-foreground" : "border-border/80 text-foreground hover:border-primary/40"}`}
                onClick={() => setActiveCitySlug(city.slug)}
                type="button"
                key={city.slug}
              >
                {city.name}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-5">
            <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
              Lokalna mreža
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-foreground">
              Aktivnost po gradovima
            </h2>
          </div>
          <CommunityMap
            cities={cities}
            events={events}
            onSelectCity={setActiveCitySlug}
            selectedCitySlug={activeCitySlug}
          />
        </section>

        <section className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-foreground">
              Nadolazeći događaji
            </h2>
            <p className="text-sm text-muted-foreground">
              {eventCountLabel(upcomingEvents.length)}
            </p>
          </div>

          {upcomingEvents.length === 0 ? (
            <div className="mt-6 rounded-[1.8rem] border border-dashed border-border/80 bg-card/60 px-6 py-10">
              <p className="text-base leading-8 text-foreground">
                Trenutno nema javno najavljenih događaja.
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                Najave se prvo pojavljuju u Telegram grupi. Ako želiš
                organizirati događaj u svom gradu, javi se zajednici.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ActionButton
                  href={communityHref()}
                  icon={<Send className="size-4" />}
                  external
                  primary
                >
                  Uđi u Telegram grupu
                </ActionButton>
                <ActionButton
                  href={communityHref()}
                  icon={<ArrowUpRight className="size-4" />}
                  external
                >
                  Predloži događaj
                </ActionButton>
              </div>
            </div>
          ) : (
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {upcomingEvents.map((event) => (
                <div
                  className="scroll-mt-32"
                  id={
                    cityAnchorOwners.get(event.city) === event.slug
                      ? cityAnchorId(event.city)
                      : undefined
                  }
                  key={event.slug}
                >
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          )}
        </section>

        {cancelledEvents.length ? (
          <section className="mt-14">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-foreground">
                Otkazani događaji
              </h2>
              <p className="text-sm text-muted-foreground">
                {eventCountLabel(cancelledEvents.length)}
              </p>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {cancelledEvents.map((event) => (
                <div
                  className="scroll-mt-32"
                  id={
                    cityAnchorOwners.get(event.city) === event.slug
                      ? cityAnchorId(event.city)
                      : undefined
                  }
                  key={event.slug}
                >
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-14 rounded-[1.8rem] border border-border/80 bg-card px-6 py-8 sm:px-10">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-foreground">
            Kako organizirati mali Bitcoin događaj
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
            Događaj ne mora biti velik ni formalan. Dovoljno je nekoliko ljudi,
            jasna lokacija, vrijeme i Bitcoin-only fokus.
          </p>
          <ol className="mt-6 grid gap-3 text-base leading-8 text-foreground md:grid-cols-2">
            {eventSteps.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/12 text-xs font-semibold text-primary-strong">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-wrap gap-3">
            <ActionButton
              href={communityHref()}
              icon={<Send className="size-4" />}
              external
              primary
            >
              Predloži događaj
            </ActionButton>
            <ActionButton
              href={CONTRIBUTE_URL}
              icon={<ArrowUpRight className="size-4" />}
            >
              Doprinesi
            </ActionButton>
          </div>
        </section>

        <section className="mt-16 scroll-mt-32" id="arhiva">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-foreground">
              Arhiva druženja
            </h2>
            <p className="text-sm text-muted-foreground">
              {eventCountLabel(pastEvents.length)}
            </p>
          </div>

          {pastEvents.length > 0 ? (
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {pastEvents.map((event) => (
                <div
                  className="scroll-mt-32"
                  id={
                    cityAnchorOwners.get(event.city) === event.slug
                      ? cityAnchorId(event.city)
                      : undefined
                  }
                  key={event.slug}
                >
                  <EventCard event={event} />
                </div>
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
    </Layout>
  )
}
