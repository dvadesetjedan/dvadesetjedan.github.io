import { ArrowUpRight, MapPinned, Send } from "lucide-react"

import type { CityEntry } from "@/data/cities"
import type { EventEntry } from "@/data/events"
import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { Layout } from "@/components/Layout"
import { regionalMapCountries } from "@/data/regionalMapPaths"
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

function isRegionalFocusCountry(code: string) {
  return code === "-99" || regionalMapCountries.find((country) => country.code === code)?.focus
}

const kosovoMapPath = regionalMapCountries.find((country) => country.code === "-99")?.d

const kosovoSerbiaBoundaryPath =
  "M405.6 310.2L406 307.3L407.3 304.6L404.4 301.8L405.2 298.9L409.2 299.6L411.8 298.4L414.2 296.1L417.7 295.5L421.2 294.9L424.3 292.9L422.2 290.6L424.1 288.1L426.7 286.4L429.4 285.4L431.5 282.1L429.5 279.6L428.6 276.9L431.6 275.6L434.9 273.3L437.7 273L440.1 275.2L442.1 279.3L445.6 281.1L449.9 281.8L451.9 286.2L455 286.8L456 291.2L458.6 292.6L462.3 294.1L463.4 296.8L462.5 299.6L469.3 300.8L472.4 303.2"

const mapCities: Record<string, { x: number; y: number }> = {
  ljubljana: { x: 165.7, y: 127 },
  zagreb: { x: 229.4, y: 139.6 },
  rijeka: { x: 163, y: 165.1 },
  rab: { x: 176.7, y: 194.9 },
  split: { x: 249.2, y: 260 },
  "banja-luka": { x: 281.6, y: 194 },
  sarajevo: { x: 334.3, y: 241.9 },
  "novi-sad": { x: 395.6, y: 168.2 },
  beograd: { x: 422.1, y: 193.3 },
  podgorica: { x: 370.8, y: 316.3 },
}

function RegionalMapGraphic({ cities }: { cities: CityEntry[] }) {
  return (
    <figure
      aria-label="Stilizirana karta regije s DvadesetJedan gradovima"
      className="relative overflow-hidden rounded-[1.8rem] border border-border/70 bg-[#070707] shadow-soft"
    >
      <svg
        className="aspect-[1.25] h-full min-h-[19rem] w-full"
        role="img"
        viewBox="100 72 455 330"
      >
        <title>Mapa DvadesetJedan gradova u regiji</title>
        <defs>
          <radialGradient id="regionGlow" cx="50%" cy="54%" r="55%">
            <stop offset="0%" stopColor="#f7931a" stopOpacity="0.26" />
            <stop offset="55%" stopColor="#f7931a" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#f7931a" stopOpacity="0" />
          </radialGradient>
          <filter id="markerGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="620" height="500" fill="#050505" />
        <circle cx="305" cy="230" r="235" fill="url(#regionGlow)" />

        <g stroke="#0f0f0f" strokeLinejoin="round" strokeWidth="1.35">
          {regionalMapCountries.map((country) => {
            const isFocus = isRegionalFocusCountry(country.code)

            return (
              <path
                d={country.d}
                fill={isFocus ? "#f7931a" : "#303030"}
                fillOpacity={isFocus ? 0.92 : 0.95}
                key={country.code}
                vectorEffect="non-scaling-stroke"
              />
            )
          })}
        </g>

        {kosovoMapPath ? (
          <path
            d={kosovoMapPath}
            fill="#f7931a"
            fillOpacity="0.92"
            stroke="#f7931a"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
          />
        ) : null}

        <path
          d={kosovoSerbiaBoundaryPath}
          fill="none"
          stroke="#0a0a0a"
          strokeDasharray="4.5 4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.82"
          strokeWidth="1.65"
          vectorEffect="non-scaling-stroke"
        />

        <g
          fill="#f8ecdc"
          fontFamily="Geist Variable, sans-serif"
          fontSize="10.5"
          fontWeight="650"
          opacity="0.78"
        >
          <text x="172" y="128">SI</text>
          <text x="242" y="160">HR</text>
          <text x="316" y="232">BiH</text>
          <text x="423" y="224">RS</text>
          <text x="359" y="305">ME</text>
        </g>

        <g filter="url(#markerGlow)">
          {cities.map((city) => {
            const point = mapCities[city.slug]
            if (!point) return null
            const hasMeetupHistory = Boolean(city.eventSlugs?.length)
            return (
              <g key={city.slug}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  fill="none"
                  r={hasMeetupHistory ? 18 : 11}
                  stroke={hasMeetupHistory ? "#fff6e8" : "#f7931a"}
                  strokeOpacity={hasMeetupHistory ? 0.48 : 0.2}
                  strokeWidth={hasMeetupHistory ? 2.4 : 1.7}
                />
                <circle
                  cx={point.x}
                  cy={point.y}
                  fill="none"
                  r={hasMeetupHistory ? 11 : 0}
                  stroke="#f7931a"
                  strokeOpacity={hasMeetupHistory ? 0.88 : 0}
                  strokeWidth="2"
                />
                <circle
                  cx={point.x}
                  cy={point.y}
                  fill={hasMeetupHistory ? "#fff6e8" : "#f7931a"}
                  fillOpacity={hasMeetupHistory ? 1 : 0.72}
                  r={hasMeetupHistory ? 5.5 : 3.8}
                  stroke="#f7931a"
                  strokeWidth="2.5"
                />
              </g>
            )
          })}
        </g>

        <g fill="#f8ecdc" fontFamily="Geist Variable, sans-serif">
          <text fontSize="18" fontWeight="700" x="34" y="54">
            DVADESETJEDAN
          </text>
        </g>
      </svg>

      <figcaption className="sr-only">
        Karta prikazuje postojeće i gradove u nastajanju iz DvadesetJedan
        zajednice.
      </figcaption>
    </figure>
  )
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
        <section className="grid gap-8 overflow-hidden rounded-[2.2rem] border border-border/80 bg-card/70 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.86fr)] lg:items-center">
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

          <RegionalMapGraphic cities={cities} />
        </section>

        {groupedCities.map((group) =>
          group.cities.length ? (
            <section className="mt-10" key={group.status}>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
                {sectionTitle(group.status)}
              </h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {group.cities.map((city) => {
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
                      <h3 className="mt-4 flex items-center gap-2 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                        <MapPinned className="size-5 text-primary" />
                        {city.name}
                      </h3>
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
              </div>
            </section>
          ) : null,
        )}

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
