import type { CityEntry } from "@/data/cities"
import { getEventStatus, type EventEntry } from "@/data/events"
import { regionalMapCountries } from "@/data/regionalMapPaths"
import { cityHref } from "@/lib/content"

const kosovoMapPath = regionalMapCountries.find(
  (country) => country.code === "-99",
)?.d

const kosovoSerbiaBoundaryPath =
  "M405.6 310.2L406 307.3L407.3 304.6L404.4 301.8L405.2 298.9L409.2 299.6L411.8 298.4L414.2 296.1L417.7 295.5L421.2 294.9L424.3 292.9L422.2 290.6L424.1 288.1L426.7 286.4L429.4 285.4L431.5 282.1L429.5 279.6L428.6 276.9L431.6 275.6L434.9 273.3L437.7 273L440.1 275.2L442.1 279.3L445.6 281.1L449.9 281.8L451.9 286.2L455 286.8L456 291.2L458.6 292.6L462.3 294.1L463.4 296.8L462.5 299.6L469.3 300.8L472.4 303.2L475.6 302.9L478.9 303.8L477.4 307.4L474.7 313.2L472.6 315.3"

const kosovoExternalBoundaryPath =
  "M472.6 315.3L472.6 318.6L469.1 320L469.8 324.4L467.5 326.3L464.7 325.8L461.7 327L458.6 331L458.8 334L455.8 333.3L453 330L450.5 328.5L447.7 330.4L444.8 331.7L441.8 332.6L437.7 333.9L435.4 336.5L434.8 340.3L435.2 343.4L433.6 346.1L430.5 345.3L427.2 345.4L428.2 342.4L428.2 339.1L426.9 335.9L426.5 332.3L424.4 327.7L417.2 322.1L413.5 322.1L412.2 319.3L411.4 316.4L409.4 313L406.5 311.1L405.6 310.2"

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

const networkLinks = [
  ["ljubljana", "zagreb"],
  ["rijeka", "zagreb"],
  ["zagreb", "banja-luka"],
  ["zagreb", "novi-sad"],
  ["rab", "split"],
  ["split", "sarajevo"],
  ["banja-luka", "sarajevo"],
  ["sarajevo", "beograd"],
  ["novi-sad", "beograd"],
  ["sarajevo", "podgorica"],
] as const

function isRegionalFocusCountry(code: string) {
  return (
    code === "-99" ||
    regionalMapCountries.find((country) => country.code === code)?.focus
  )
}

function markerLabel(
  city: CityEntry,
  hasUpcomingMeetup: boolean,
  hasMeetupHistory: boolean,
) {
  if (hasUpcomingMeetup) return `${city.name}: nadolazeće druženje`
  if (hasMeetupHistory) return `${city.name}: prethodna druženja`
  return `${city.name}: grad u nastajanju`
}

export function RegionalCommunityMap({
  cities,
  events,
}: {
  cities: CityEntry[]
  events: EventEntry[]
}) {
  const now = new Date()
  const upcomingCitySlugs = new Set(
    events
      .filter((event) => getEventStatus(event, now) === "upcoming")
      .map((event) => event.citySlug)
      .filter((slug): slug is string => Boolean(slug)),
  )

  return (
    <figure className="overflow-hidden rounded-[1.8rem] bg-[#080706] shadow-[var(--shadow-border)]">
      <svg
        aria-labelledby="regional-community-map-title regional-community-map-description"
        className="aspect-[1.25] h-full min-h-[18rem] w-full"
        role="img"
        viewBox="100 72 455 330"
      >
        <title id="regional-community-map-title">
          DvadesetJedan mreža gradova
        </title>
        <desc id="regional-community-map-description">
          Karta razlikuje gradove s nadolazećim druženjima, gradove s arhivom
          druženja i gradove u kojima se druženje tek može pokrenuti.
        </desc>
        <defs>
          <radialGradient id="community-region-glow" cx="56%" cy="51%" r="58%">
            <stop offset="0%" stopColor="#f7931a" stopOpacity="0.2" />
            <stop offset="62%" stopColor="#f7931a" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#f7931a" stopOpacity="0" />
          </radialGradient>
          <filter
            id="community-marker-glow"
            x="-80%"
            y="-80%"
            width="260%"
            height="260%"
          >
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="620" height="500" fill="#080706" />
        <circle cx="315" cy="230" r="230" fill="url(#community-region-glow)" />

        <g stroke="#3a3027" strokeLinejoin="round" strokeWidth="1.15">
          {regionalMapCountries.map((country) => (
            <path
              d={country.d}
              fill={
                isRegionalFocusCountry(country.code) ? "#17130f" : "#0d0c0b"
              }
              fillOpacity="0.98"
              key={country.code}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </g>

        {kosovoMapPath ? (
          <path
            d={kosovoMapPath}
            fill="#17130f"
            stroke="#3a3027"
            strokeWidth="1.15"
            vectorEffect="non-scaling-stroke"
          />
        ) : null}

        <path
          d={kosovoSerbiaBoundaryPath}
          fill="none"
          stroke="#4a3b2d"
          strokeDasharray="4.5 4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.58"
          strokeWidth="1.25"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={kosovoExternalBoundaryPath}
          fill="none"
          stroke="#4a3b2d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.58"
          strokeWidth="1.25"
          vectorEffect="non-scaling-stroke"
        />

        <g
          aria-hidden="true"
          stroke="#f7931a"
          strokeOpacity="0.2"
          strokeWidth="1.2"
        >
          {networkLinks.map(([from, to]) => {
            const start = mapCities[from]
            const end = mapCities[to]

            return (
              <line
                key={`${from}-${to}`}
                x1={start.x}
                x2={end.x}
                y1={start.y}
                y2={end.y}
              />
            )
          })}
        </g>

        <g filter="url(#community-marker-glow)">
          {cities.map((city) => {
            const point = mapCities[city.slug]
            if (!point) return null

            const hasUpcomingMeetup = upcomingCitySlugs.has(city.slug)
            const hasMeetupHistory = events.some(
              (event) =>
                event.citySlug === city.slug &&
                getEventStatus(event, now) === "past",
            )
            const label = markerLabel(city, hasUpcomingMeetup, hasMeetupHistory)

            return (
              <a aria-label={label} href={cityHref(city.slug)} key={city.slug}>
                <title>{label}</title>
                <circle
                  aria-hidden="true"
                  cx={point.x}
                  cy={point.y}
                  fill="transparent"
                  r="22"
                />
                <circle
                  cx={point.x}
                  cy={point.y}
                  fill="none"
                  r={hasUpcomingMeetup ? 17 : hasMeetupHistory ? 12 : 9}
                  stroke={hasUpcomingMeetup ? "#f7931a" : "#f8ecdc"}
                  strokeOpacity={
                    hasUpcomingMeetup ? 0.96 : hasMeetupHistory ? 0.52 : 0.2
                  }
                  strokeWidth={hasUpcomingMeetup ? 3 : 1.7}
                />
                {hasUpcomingMeetup ? (
                  <circle
                    cx={point.x}
                    cy={point.y}
                    fill="none"
                    r="12"
                    stroke="#f7931a"
                    strokeOpacity="0.42"
                    strokeWidth="2"
                  />
                ) : null}
                <circle
                  cx={point.x}
                  cy={point.y}
                  fill={
                    hasUpcomingMeetup
                      ? "#f7931a"
                      : hasMeetupHistory
                        ? "#f8ecdc"
                        : "#b86c1a"
                  }
                  fillOpacity={hasMeetupHistory || hasUpcomingMeetup ? 1 : 0.62}
                  r={hasUpcomingMeetup ? 6 : hasMeetupHistory ? 4.5 : 3.5}
                />
                {hasUpcomingMeetup ? (
                  <text
                    fill="#fff8ee"
                    fontFamily="Geist Variable, sans-serif"
                    fontSize="11"
                    fontWeight="650"
                    x={point.x + 13}
                    y={point.y - 12}
                  >
                    {city.name}
                  </text>
                ) : null}
              </a>
            )
          })}
        </g>

        <text
          fill="#f8ecdc"
          fontFamily="Geist Variable, sans-serif"
          fontSize="17"
          fontWeight="700"
          x="34"
          y="54"
        >
          LOKALNI ČVOROVI
        </text>
      </svg>

      <figcaption className="flex flex-wrap gap-x-5 gap-y-2 border-t border-white/8 px-5 py-4 text-xs text-[#cfc2b2] sm:px-6">
        <span className="inline-flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-primary" />
          Nadolazeće druženje
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-[#f8ecdc]" />
          Arhiva druženja
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-[#b86c1a]/65" />
          Grad u nastajanju
        </span>
      </figcaption>
    </figure>
  )
}
