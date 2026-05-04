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
  ljubljana: { x: 202, y: 129 },
  zagreb: { x: 240, y: 166 },
  rijeka: { x: 188, y: 188 },
  rab: { x: 186, y: 221 },
  split: { x: 238, y: 296 },
  "banja-luka": { x: 294, y: 216 },
  sarajevo: { x: 334, y: 294 },
  "novi-sad": { x: 405, y: 174 },
  beograd: { x: 416, y: 222 },
  podgorica: { x: 398, y: 367 },
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
        <circle cx="336" cy="257" r="236" fill="url(#regionGlow)" />

        <g fill="#242424" stroke="#101010" strokeWidth="2">
          <path d="M86 58 174 50 210 93 186 137 113 129 64 95Z" />
          <path d="M207 55 305 42 355 89 318 141 233 132 188 95Z" />
          <path d="M374 55 473 58 554 107 531 180 438 164 361 119Z" />
          <path d="M477 182 574 180 603 250 562 325 474 309 434 239Z" />
          <path d="M73 361 164 339 225 386 188 458 91 441 43 397Z" />
          <path d="M447 338 548 361 571 430 487 471 416 419Z" />
        </g>

        <path
          d="M103 143 C80 196 76 248 98 301 C113 337 132 362 164 395"
          fill="none"
          stroke="#0b0b0b"
          strokeLinecap="round"
          strokeWidth="70"
        />
        <path
          d="M128 150 C102 205 100 257 124 309 C139 344 158 369 191 402"
          fill="none"
          stroke="#1b1b1b"
          strokeLinecap="round"
          strokeWidth="46"
        />
        <path
          d="M148 164 C126 212 126 257 146 303 C161 338 178 360 203 386"
          fill="none"
          stroke="#090909"
          strokeLinecap="round"
          strokeWidth="20"
        />

        <g fill="#333333" stroke="#151515" strokeLinejoin="round" strokeWidth="2.2">
          <path d="M168 93 246 80 289 109 267 151 214 159 163 135Z" />
          <path d="M188 157 258 151 312 184 298 235 237 227 191 195Z" />
          <path d="M183 204 236 227 282 260 262 318 210 302 169 247Z" />
          <path d="M221 238 305 232 369 282 349 349 287 337 260 316 282 260Z" />
          <path d="M299 178 378 154 443 191 439 257 369 282 304 233Z" />
          <path d="M382 255 449 259 494 318 465 385 393 365 349 349 369 282Z" />
          <path d="M352 351 405 371 431 416 390 461 335 431 311 385Z" />
        </g>

        <g fill="#f7931a" fillOpacity="0.9" stroke="#1f1307" strokeLinejoin="round" strokeWidth="2.4">
          <path d="M171 96 244 84 283 111 263 148 214 156 166 134Z" />
          <path d="M191 160 257 154 307 185 295 231 238 224 194 195Z" />
          <path d="M187 207 238 229 279 261 259 313 213 299 172 247Z" />
          <path d="M225 241 303 235 364 284 345 344 289 333 264 315 285 262Z" />
          <path d="M302 181 377 158 437 193 434 253 368 278 307 231Z" />
          <path d="M382 259 446 263 489 319 461 378 394 361 351 344 370 282Z" />
          <path d="M354 354 402 374 426 416 388 454 338 428 315 386Z" />
        </g>

        <g fill="#f7931a" opacity="0.84">
          <path d="M171 225 179 219 187 224 181 232Z" />
          <path d="M184 251 192 245 201 251 194 260Z" />
          <path d="M204 282 213 276 222 282 215 292Z" />
          <path d="M225 309 234 304 242 311 234 319Z" />
        </g>

        <g stroke="#070707" strokeLinecap="round" strokeWidth="2.2" opacity="0.55">
          <path d="M263 148 238 224" />
          <path d="M295 231 368 278" />
          <path d="M279 261 345 344" />
          <path d="M351 344 394 361" />
          <path d="M377 158 434 253" />
        </g>

        <g
          fill="#f8ecdc"
          fontFamily="Geist Variable, sans-serif"
          fontSize="10"
          fontWeight="650"
          opacity="0.76"
        >
          <text x="181" y="118">SI</text>
          <text x="219" y="195">HR</text>
          <text x="292" y="285">BiH</text>
          <text x="378" y="219">RS</text>
          <text x="379" y="394">ME</text>
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
