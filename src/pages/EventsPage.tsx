import type { EventEntry } from "@/data/events"

import { ArrowUpRight, Send } from "lucide-react"

import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { EventCard } from "@/components/EventCard"
import { Layout } from "@/components/Layout"
import { CONTRIBUTE_URL, media } from "@/data/site"
import { communityHref } from "@/lib/content"
import { usePageMeta } from "@/lib/usePageMeta"

const meetupSteps = [
  "Odaberi grad i okvirni datum",
  "Nađi jednostavnu lokaciju za razgovor",
  "Javi se u Telegram grupi",
  "Zadrži Bitcoin-only fokus",
  "Počni malim druženjem, ne velikim eventom",
] as const

export function EventsPage({ events }: { events: EventEntry[] }) {
  usePageMeta(
    "Događaji | DvadesetJedan",
    "Nadolazeći Bitcoin meetupovi, arhiva druženja i način kako predložiti lokalni meetup kroz DvadesetJedan zajednicu.",
  )

  const now = new Date()
  const upcomingEvents = events.filter((event) => new Date(event.end) >= now)
  const pastEvents = events.filter((event) => new Date(event.end) < now)

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href="#/">Početna</BackLink>
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

        <section className="mt-14 rounded-[1.8rem] border border-border/80 bg-card px-6 py-8 sm:px-10">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-foreground">
            Kako organizirati mali Bitcoin meetup
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
            Meetup ne mora biti velik ni formalan. Dovoljno je nekoliko ljudi,
            jasna lokacija, vrijeme i Bitcoin-only fokus.
          </p>
          <ol className="mt-6 grid gap-3 text-base leading-8 text-foreground md:grid-cols-2">
            {meetupSteps.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/12 text-xs font-semibold text-primary">
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
              Predloži meetup
            </ActionButton>
            <ActionButton
              href={CONTRIBUTE_URL}
              icon={<ArrowUpRight className="size-4" />}
            >
              Doprinesi
            </ActionButton>
          </div>
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
    </Layout>
  )
}
