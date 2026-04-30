import { ArrowUpRight, MapPinned, Send } from "lucide-react"

import type { CityEntry } from "@/data/cities"
import type { EventEntry } from "@/data/events"
import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { Layout } from "@/components/Layout"
import { PageHero } from "@/components/PageHero"
import { CONTRIBUTE_URL } from "@/data/site"
import { cityHref, communityHref } from "@/lib/content"
import { usePageMeta } from "@/lib/usePageMeta"

function statusLabel(status: CityEntry["status"]) {
  if (status === "active") return "Aktivno"
  if (status === "emerging") return "U nastajanju"
  return "Arhiva"
}

export function CitiesPage({
  cities,
  events,
}: {
  cities: CityEntry[]
  events: EventEntry[]
}) {
  usePageMeta(
    "Gradovi | DvadesetJedan",
    "Regionalne DvadesetJedan ulazne točke za gradove, lokalne događaje i pokretanje Bitcoin-only susreta.",
  )

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href="/">Početna</BackLink>
        <PageHero
          eyebrow="Gradovi"
          title="Lokalni Bitcoin signal počinje malim susretima."
          intro="Ovdje su gradovi povezani s javno najavljenim DvadesetJedan događajima. Nema izmišljenih voditelja ni privatnih kontakata: za koordinaciju koristi zajednicu i službene najave."
        />

        <section className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cities.map((city) => {
            const cityEvents = events.filter((event) =>
              city.eventSlugs?.includes(event.slug),
            )

            return (
              <a
                key={city.slug}
                className="rounded-[1.7rem] border border-border/80 bg-card px-5 py-6 transition-colors hover:border-primary/40"
                href={cityHref(city.slug)}
              >
                <p className="inline-flex rounded-full bg-primary/12 px-3 py-1 text-xs font-medium text-primary">
                  {statusLabel(city.status)}
                </p>
                <h2 className="mt-4 flex items-center gap-2 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                  <MapPinned className="size-5 text-primary" />
                  {city.name}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {city.country}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {city.summary}
                </p>
                <p className="mt-5 text-sm font-medium text-foreground">
                  {cityEvents.length} povezanih događaja
                </p>
              </a>
            )
          })}
        </section>

        <section className="mt-10 rounded-[1.8rem] border border-border/80 bg-card px-6 py-8 sm:px-10">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
            Predloži događaj u svom gradu
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
            Dovoljno je nekoliko ljudi, jednostavna javna lokacija i jasan
            Bitcoin-only fokus. Prvo se javi zajednici s gradom i idejom.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ActionButton href={communityHref()} icon={<Send className="size-4" />} external primary>
              Javi se u Telegramu
            </ActionButton>
            <ActionButton href={CONTRIBUTE_URL} icon={<ArrowUpRight className="size-4" />}>
              Doprinesi
            </ActionButton>
          </div>
        </section>
      </main>
    </Layout>
  )
}
