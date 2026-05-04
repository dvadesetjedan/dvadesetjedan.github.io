import { ArrowUpRight, MapPinned, Send } from "lucide-react"

import type { CityEntry } from "@/data/cities"
import type { EventEntry } from "@/data/events"
import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { EventCard } from "@/components/EventCard"
import { Layout } from "@/components/Layout"
import { CITIES_URL, CONTRIBUTE_URL } from "@/data/site"
import { communityHref } from "@/lib/content"
import { usePageMeta } from "@/lib/usePageMeta"

const starterChecklist = [
  "Odaberi jednostavno javno mjesto",
  "Predloži datum",
  "Zadrži Bitcoin-only fokus",
  "Početnici su dobrodošli",
  "Ne traži privatne podatke",
  "Javi se u zajednicu",
] as const

export function CityPage({
  city,
  events,
}: {
  city: CityEntry
  events: EventEntry[]
}) {
  usePageMeta(
    `${city.name} | DvadesetJedan gradovi`,
    city.summary,
  )

  const cityEvents = events.filter((event) => city.eventSlugs?.includes(event.slug))
  const now = new Date()
  const upcomingEvents = cityEvents.filter((event) => new Date(event.end) >= now)
  const pastEvents = cityEvents.filter((event) => new Date(event.end) < now)

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href={CITIES_URL}>Svi gradovi</BackLink>
        <section className="rounded-[2.2rem] border border-border/80 bg-card/70 px-6 py-8 sm:px-10 sm:py-12">
          <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
            Gradovi
          </p>
          <h1 className="mt-4 flex items-center gap-3 text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
            <MapPinned className="size-8 text-primary" />
            {city.name}
          </h1>
          <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
            {city.country}
            {city.region ? ` / ${city.region}` : ""}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {city.summary}
          </p>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
              Nadolazeći događaji
            </h2>
            {upcomingEvents.length ? (
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.slug} event={event} />
                ))}
              </div>
            ) : (
              <p className="mt-4 rounded-[1.4rem] border border-dashed border-border/80 px-5 py-5 text-sm leading-7 text-muted-foreground">
                {city.status === "emerging"
                  ? "Još nema javno potvrđenih DvadesetJedan događaja u ovom gradu. Ako želiš pokrenuti mali Bitcoin-only susret, javi se u zajednicu."
                  : "Trenutno nema javno najavljenih nadolazećih događaja za ovaj grad."}
              </p>
            )}

            <h2 className="mt-10 text-3xl font-semibold tracking-[-0.04em] text-foreground">
              Arhiva
            </h2>
            {pastEvents.length ? (
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {pastEvents.map((event) => (
                  <EventCard key={event.slug} event={event} />
                ))}
              </div>
            ) : (
              <p className="mt-4 rounded-[1.4rem] border border-dashed border-border/80 px-5 py-5 text-sm leading-7 text-muted-foreground">
                {city.status === "archive"
                  ? "Buduće najave ovise o zajednici i službenim kanalima."
                  : "Arhiva za ovaj grad još nema dodatnih javnih unosa."}
              </p>
            )}
          </div>

          <aside className="space-y-4 rounded-[1.8rem] border border-border/80 bg-card px-6 py-6">
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
              {city.status === "emerging"
                ? "Starter checklist"
                : "Kako pokrenuti lokalni susret"}
            </h2>
            <p className="text-sm leading-7 text-muted-foreground">
              Počni malim druženjem, bez pritiska i bez hypea. Javi grad,
              okvirni datum i Bitcoin-only namjeru u zajednici.
            </p>
            {city.status === "emerging" ? (
              <ul className="space-y-2 text-sm leading-7 text-foreground">
                {starterChecklist.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span className="mt-3 size-2 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <ActionButton href={communityHref()} icon={<Send className="size-4" />} external primary>
              Uđi u zajednicu
            </ActionButton>
            <ActionButton href={CONTRIBUTE_URL} icon={<ArrowUpRight className="size-4" />}>
              Predloži događaj
            </ActionButton>
            {city.meetupUrl ? (
              <ActionButton href={city.meetupUrl} icon={<ArrowUpRight className="size-4" />} external>
                Meetup
              </ActionButton>
            ) : null}
          </aside>
        </section>
      </main>
    </Layout>
  )
}
