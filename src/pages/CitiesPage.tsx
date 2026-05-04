import { ArrowUpRight, MapPinned, Send } from "lucide-react"

import type { CityEntry } from "@/data/cities"
import type { EventEntry } from "@/data/events"
import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
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

const mapCities: Record<string, { x: number; y: number }> = {
  ljubljana: { x: 172, y: 142 },
  zagreb: { x: 206, y: 167 },
  rijeka: { x: 157, y: 183 },
  split: { x: 214, y: 274 },
  rab: { x: 164, y: 216 },
  "banja-luka": { x: 260, y: 210 },
  sarajevo: { x: 308, y: 279 },
  "novi-sad": { x: 377, y: 171 },
  beograd: { x: 394, y: 221 },
  podgorica: { x: 373, y: 346 },
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
        viewBox="0 0 620 500"
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
        <circle cx="315" cy="258" r="230" fill="url(#regionGlow)" />

        <g fill="#252525" stroke="#111" strokeWidth="2">
          <path d="M116 92 194 76 270 92 257 138 204 132 163 151 107 133Z" />
          <path d="M275 75 346 63 404 94 387 147 328 138 278 153 248 122Z" />
          <path d="M410 105 498 91 555 134 535 198 461 185 401 205 382 151Z" />
          <path d="M71 152 143 138 176 188 149 254 78 247 44 197Z" />
          <path d="M486 206 566 203 595 265 563 337 494 320 462 259Z" />
          <path d="M95 270 156 252 201 298 172 372 104 360 62 313Z" />
          <path d="M451 335 530 356 544 421 471 452 418 406Z" />
          <path d="M248 375 339 382 385 448 298 477 226 441Z" />
        </g>

        <g fill="#343434" stroke="#151515" strokeWidth="2.2">
          <path d="M150 109 209 101 238 131 220 170 177 164 143 137Z" />
          <path d="M232 137 284 123 330 150 318 213 263 205 220 173Z" />
          <path d="M331 148 408 132 464 176 451 257 383 269 319 215Z" />
          <path d="M182 177 224 178 264 211 239 283 196 276 159 227Z" />
          <path d="M244 219 315 222 377 274 359 339 297 331 236 286Z" />
          <path d="M380 272 448 262 490 319 462 382 392 356 360 336Z" />
          <path d="M299 337 361 344 391 398 354 450 294 423 262 375Z" />
        </g>

        <g fill="#f7931a" fillOpacity="0.9" stroke="#1f1307" strokeWidth="2.4">
          <path d="M154 111 209 104 234 132 219 165 178 160 146 136Z" />
          <path d="M232 139 283 126 326 152 315 209 263 201 221 171Z" />
          <path d="M332 151 405 136 459 178 448 254 385 265 319 213Z" />
          <path d="M184 181 222 181 260 214 237 278 198 272 161 228Z" />
          <path d="M246 223 313 225 373 276 356 334 298 326 239 286Z" />
          <path d="M382 276 445 266 484 320 459 377 394 352 363 336Z" />
          <path d="M301 341 358 348 386 397 352 444 298 420 266 376Z" />
        </g>

        <g stroke="#070707" strokeWidth="2.2" opacity="0.55">
          <path d="M217 166 263 201" />
          <path d="M316 210 386 265" />
          <path d="M237 278 299 326" />
          <path d="M356 334 395 352" />
          <path d="M283 126 263 201" />
        </g>

        <g filter="url(#markerGlow)">
          {cities.map((city) => {
            const point = mapCities[city.slug]
            if (!point) return null
            const isActive = city.status === "active"
            return (
              <g key={city.slug}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  fill="none"
                  r={isActive ? 18 : 13}
                  stroke="#f7931a"
                  strokeOpacity={isActive ? 0.42 : 0.24}
                  strokeWidth="2"
                />
                <circle
                  cx={point.x}
                  cy={point.y}
                  fill={isActive ? "#fff6e8" : "#f7931a"}
                  r={isActive ? 5.5 : 4}
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
          <text fill="#f7931a" fontSize="12" fontWeight="600" x="34" y="76">
            REGIONALNI BITCOIN SIGNAL
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
