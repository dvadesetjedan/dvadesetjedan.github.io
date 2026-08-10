import { ArrowUpRight, MapPinned, Send } from "lucide-react"

import type { CityEntry } from "@/data/cities"
import type { EventEntry } from "@/data/events"
import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { CommunityMap } from "@/components/CommunityMap"
import { Layout } from "@/components/Layout"
import { CONTRIBUTE_URL } from "@/data/site"
import { cityHref, communityHref } from "@/lib/content"
import { usePageMeta } from "@/lib/usePageMeta"

function statusLabel(status: CityEntry["status"]) {
  if (status === "active") return "Aktivno"
  if (status === "emerging") return "U nastajanju"
  return "Arhiva"
}

function sectionTitle(status: CityEntry["status"]) {
  if (status === "active") return "Aktivni gradovi"
  if (status === "emerging") return "Gradovi u nastajanju"
  return "Arhiva"
}

function relatedEventCountLabel(count: number) {
  return count === 1 ? "1 povezan događaj" : `${count} povezanih događaja`
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

  const groupedCities = (["active", "emerging", "archive"] as const).map(
    (status) => ({
      status,
      cities: cities.filter((city) => city.status === status),
    }),
  )

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href="/">Početna</BackLink>
        <section className="grid gap-8 overflow-hidden rounded-[2.2rem] bg-card/70 px-6 py-8 shadow-[var(--shadow-border)] sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.86fr)] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
              Gradovi
            </p>
            <h1 className="safe-heading mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
              Lokalni Bitcoin signal počinje malim susretima.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              Ovdje su gradovi povezani s javno najavljenim DvadesetJedan
              događajima. Nema izmišljenih voditelja ni privatnih kontakata: za
              koordinaciju koristi zajednicu i službene najave.
            </p>
          </div>

          <CommunityMap cities={cities} events={events} compact />
        </section>

        {groupedCities.map((group) =>
          group.cities.length ? (
            <section className="mt-10" key={group.status}>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
                {sectionTitle(group.status)}
              </h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {group.cities.map((city) => {
                  const cityEvents = events.filter(
                    (event) => event.citySlug === city.slug,
                  )

                  return (
                    <a
                      key={city.slug}
                      className="rounded-[1.7rem] bg-card px-5 py-6 shadow-[var(--shadow-border)] transition-[translate,scale,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 sm:px-6"
                      href={cityHref(city.slug)}
                    >
                      <p className="inline-flex rounded-full bg-primary/12 px-3 py-1 text-xs font-medium text-primary-strong">
                        {statusLabel(city.status)}
                      </p>
                      <h3 className="mt-4 flex items-center gap-2 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                        <MapPinned className="size-5 text-primary-strong" />
                        {city.name}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {city.country}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">
                        {city.summary}
                      </p>
                      <p className="mt-5 text-sm font-medium text-foreground">
                        {relatedEventCountLabel(cityEvents.length)}
                      </p>
                    </a>
                  )
                })}
              </div>
            </section>
          ) : null,
        )}

        <section className="mt-10 rounded-[1.8rem] bg-card px-6 py-8 shadow-[var(--shadow-border)] sm:px-10">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
            Predloži događaj u svom gradu
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
            Dovoljno je nekoliko ljudi, jednostavna javna lokacija i jasan
            Bitcoin-only fokus. Prvo se javi zajednici s gradom i idejom.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ActionButton
              href={communityHref()}
              icon={<Send className="size-4" />}
              external
              primary
            >
              Javi se u Telegramu
            </ActionButton>
            <ActionButton
              href={CONTRIBUTE_URL}
              icon={<ArrowUpRight className="size-4" />}
            >
              Doprinesi
            </ActionButton>
          </div>
        </section>
      </main>
    </Layout>
  )
}
