import { LocateFixed, MapPin, Minus, Plus } from "lucide-react"
import { useMemo, useState } from "react"

import type { CityEntry } from "@/data/cities"
import { eventSortTime, getEventStatus, type EventEntry } from "@/data/events"
import { regionalMapCountries } from "@/data/regionalMapPaths"
import { cityHref, eventHref, formatEventDate } from "@/lib/content"
import { cn } from "@/lib/utils"

type MapPoint = { x: number; y: number }

const mapCities: Record<string, MapPoint> = {
  ljubljana: { x: 165.7, y: 127 },
  maribor: { x: 201, y: 108 },
  zagreb: { x: 229.4, y: 139.6 },
  rijeka: { x: 163, y: 165.1 },
  kraljevica: { x: 174, y: 177 },
  rab: { x: 176.7, y: 194.9 },
  zadar: { x: 211, y: 224 },
  split: { x: 249.2, y: 260 },
  osijek: { x: 342, y: 148 },
  "banja-luka": { x: 281.6, y: 194 },
  sarajevo: { x: 334.3, y: 241.9 },
  mostar: { x: 310, y: 276 },
  tuzla: { x: 348, y: 207 },
  "novi-sad": { x: 395.6, y: 168.2 },
  beograd: { x: 422.1, y: 193.3 },
  kragujevac: { x: 425, y: 234 },
  nis: { x: 468, y: 260 },
  podgorica: { x: 370.8, y: 316.3 },
}

function isRegionalFocusCountry(code: string) {
  return regionalMapCountries.find((country) => country.code === code)?.focus
}

function eventCountLabel(count: number) {
  if (count === 0) return "Nema dokumentiranih događaja"
  if (count === 1) return "1 dokumentiran događaj"
  if (count >= 2 && count <= 4) return `${count} dokumentirana događaja`
  return `${count} dokumentiranih događaja`
}

export type CommunityMapProps = {
  cities: CityEntry[]
  events: EventEntry[]
  selectedCitySlug?: string | null
  onSelectCity?: (citySlug: string) => void
  className?: string
  compact?: boolean
}

export function CommunityMap({
  cities,
  events,
  selectedCitySlug,
  onSelectCity,
  className,
  compact = false,
}: CommunityMapProps) {
  const metrics = useMemo(() => {
    const now = new Date()
    return new Map(
      cities.map((city) => {
        const cityEvents = events.filter(
          (event) => event.citySlug === city.slug,
        )
        const upcomingEvents = cityEvents
          .filter((event) => getEventStatus(event, now) === "upcoming")
          .sort((left, right) => eventSortTime(left) - eventSortTime(right))
        const pastCount = cityEvents.filter(
          (event) => getEventStatus(event, now) === "past",
        ).length

        return [
          city.slug,
          {
            allCount: cityEvents.length,
            pastCount,
            nextEvent: upcomingEvents[0],
          },
        ]
      }),
    )
  }, [cities, events])
  const defaultCitySlug =
    cities.find((city) => metrics.get(city.slug)?.nextEvent)?.slug ??
    cities.find((city) => (metrics.get(city.slug)?.pastCount ?? 0) > 0)?.slug ??
    cities[0]?.slug ??
    null
  const [internalSelectedSlug, setInternalSelectedSlug] = useState<
    string | null
  >(defaultCitySlug)
  const [previewSlug, setPreviewSlug] = useState<string | null>(null)
  const [zoom, setZoom] = useState(1)
  const selectedSlug =
    selectedCitySlug === undefined ? internalSelectedSlug : selectedCitySlug
  const activeSlug = previewSlug ?? selectedSlug ?? defaultCitySlug
  const activeCity = cities.find((city) => city.slug === activeSlug)
  const activeMetrics = activeCity ? metrics.get(activeCity.slug) : undefined
  const viewWidth = 455 / zoom
  const viewHeight = 330 / zoom
  const viewBox = `${327.5 - viewWidth / 2} ${237 - viewHeight / 2} ${viewWidth} ${viewHeight}`

  const selectCity = (citySlug: string) => {
    setInternalSelectedSlug(citySlug)
    onSelectCity?.(citySlug)
  }

  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#070707] text-[#fff8ef] shadow-soft",
        className,
      )}
    >
      <div className="absolute right-3 top-3 z-10 flex gap-2 rounded-full border border-white/10 bg-black/70 p-1.5 backdrop-blur">
        <button
          aria-label="Povećaj kartu"
          className="inline-flex size-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd35f] disabled:opacity-40"
          disabled={zoom >= 1.75}
          onClick={() => setZoom((value) => Math.min(1.75, value + 0.25))}
          type="button"
        >
          <Plus className="size-4" />
        </button>
        <button
          aria-label="Smanji kartu"
          className="inline-flex size-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd35f] disabled:opacity-40"
          disabled={zoom <= 1}
          onClick={() => setZoom((value) => Math.max(1, value - 0.25))}
          type="button"
        >
          <Minus className="size-4" />
        </button>
        <button
          aria-label="Vrati početni prikaz karte"
          className="inline-flex size-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd35f]"
          onClick={() => setZoom(1)}
          type="button"
        >
          <LocateFixed className="size-4" />
        </button>
      </div>

      <svg
        aria-labelledby="community-map-title community-map-description"
        className={cn(
          "aspect-[1.25] h-full w-full",
          compact ? "min-h-[18rem]" : "min-h-[21rem]",
        )}
        role="img"
        viewBox={viewBox}
      >
        <title id="community-map-title">Karta DvadesetJedan gradova</title>
        <desc id="community-map-description">
          Interaktivna karta gradova s nadolazećim i dokumentiranim Bitcoin
          događajima.
        </desc>
        <defs>
          <radialGradient id="community-region-glow" cx="50%" cy="54%" r="55%">
            <stop offset="0%" stopColor="#f7931a" stopOpacity="0.26" />
            <stop offset="55%" stopColor="#f7931a" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#f7931a" stopOpacity="0" />
          </radialGradient>
          <filter
            id="community-marker-glow"
            height="260%"
            width="260%"
            x="-80%"
            y="-80%"
          >
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect height="500" width="620" fill="#050505" x="0" y="0" />
        <circle cx="305" cy="230" fill="url(#community-region-glow)" r="235" />

        <g stroke="#0f0f0f" strokeLinejoin="round" strokeWidth="1.35">
          {regionalMapCountries.map((country) => {
            const isFocus = isRegionalFocusCountry(country.code)
            return (
              <path
                d={country.d}
                fill={isFocus ? "#f7931a" : "#303030"}
                fillOpacity={isFocus ? 1 : 0.95}
                key={country.code}
                vectorEffect="non-scaling-stroke"
              />
            )
          })}
        </g>

        <g filter="url(#community-marker-glow)">
          {cities.map((city) => {
            const point = mapCities[city.slug]
            if (!point) return null
            const cityMetrics = metrics.get(city.slug)
            const hasUpcoming = Boolean(cityMetrics?.nextEvent)
            const hasHistory = (cityMetrics?.pastCount ?? 0) > 0
            const highlighted =
              hasUpcoming ||
              hasHistory ||
              city.slug === "zagreb" ||
              city.slug === "beograd"
            const isSelected = activeSlug === city.slug
            const accessibleStatus = hasUpcoming
              ? "ima nadolazeći događaj"
              : hasHistory
                ? eventCountLabel(cityMetrics?.pastCount ?? 0)
                : "još nema dokumentiran događaj"

            return (
              <a
                aria-label={`${city.name}, ${accessibleStatus}`}
                className="group outline-none"
                href={cityHref(city.slug)}
                key={city.slug}
                onBlur={() => setPreviewSlug(null)}
                onClick={(event) => {
                  event.preventDefault()
                  selectCity(city.slug)
                }}
                onFocus={() => setPreviewSlug(city.slug)}
                onMouseEnter={() => setPreviewSlug(city.slug)}
                onMouseLeave={() => setPreviewSlug(null)}
              >
                <title>{`${city.name}: ${accessibleStatus}`}</title>
                <circle
                  className="transition-[r,stroke-opacity] group-hover:stroke-opacity-100 group-focus:stroke-opacity-100 motion-reduce:transition-none"
                  cx={point.x}
                  cy={point.y}
                  fill="none"
                  r={isSelected ? 16 : hasUpcoming ? 13 : hasHistory ? 11 : 8}
                  stroke={highlighted || isSelected ? "#fff6e8" : "#f7931a"}
                  strokeOpacity={
                    isSelected || hasUpcoming ? 1 : highlighted ? 0.72 : 0.32
                  }
                  strokeWidth={isSelected ? 3 : 2}
                  vectorEffect="non-scaling-stroke"
                />
                <circle
                  cx={point.x}
                  cy={point.y}
                  fill={highlighted ? "#fff6e8" : "#f7931a"}
                  fillOpacity={highlighted ? 1 : 0.62}
                  r={hasUpcoming ? 7 : highlighted ? 5.5 : 4}
                  stroke="#f7931a"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
              </a>
            )
          })}
        </g>
      </svg>

      <div className="border-t border-white/10 px-5 py-5 sm:px-6">
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/65">
          <span className="inline-flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-[#fff6e8] ring-2 ring-white" />
            Nadolazeće
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-[#fff6e8] ring-2 ring-[#f7931a]" />
            Dokumentirana povijest
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-[#f7931a]/60" />
            Grad u mreži
          </span>
        </div>

        {activeCity ? (
          <div
            aria-live="polite"
            className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end"
          >
            <div>
              <p className="flex items-center gap-2 text-xl font-semibold tracking-[-0.03em]">
                <MapPin className="size-4 text-[#f7931a]" />
                {activeCity.name}
              </p>
              <p className="mt-2 text-sm text-white/65">
                {eventCountLabel(activeMetrics?.pastCount ?? 0)}
              </p>
              {activeMetrics?.nextEvent ? (
                <a
                  className="mt-3 block text-sm font-medium text-[#ffd35f] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd35f]"
                  href={eventHref(activeMetrics.nextEvent.slug)}
                >
                  Sljedeće: {formatEventDate(activeMetrics.nextEvent)} ·{" "}
                  {activeMetrics.nextEvent.title}
                </a>
              ) : (
                <p className="mt-3 text-sm text-white/55">
                  Trenutno nema javno najavljenog sljedećeg događaja.
                </p>
              )}
            </div>
            <a
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-4 text-sm font-semibold text-white transition-colors hover:border-[#f7931a] hover:text-[#ffd35f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd35f]"
              href={cityHref(activeCity.slug)}
            >
              Stranica grada
            </a>
          </div>
        ) : null}
      </div>
    </figure>
  )
}
