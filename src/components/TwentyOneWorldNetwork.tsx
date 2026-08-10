import { ArrowUpRight, MapPin } from "lucide-react"

import { worldMapCountries } from "@/data/worldMapPaths"

const localRegionCodes = new Set(["SI", "HR", "BA", "RS", "ME"])

const visibleNetworkCodes = new Set([
  "PT",
  "BE",
  "NL",
  "DE",
  "CH",
  "AT",
  "CZ",
  "SK",
  "PL",
  "HU",
  "IT",
  "MK",
  "AL",
  "GR",
  "TR",
  "CR",
  "SR",
])

const visibleNetworkNames = new Set(["France", "Kosovo"])

function isVisibleNetworkCountry(code: string, name: string) {
  return (
    localRegionCodes.has(code) ||
    visibleNetworkCodes.has(code) ||
    visibleNetworkNames.has(name)
  )
}

export function TwentyOneWorldNetwork({ href }: { href: string }) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-[#050505] text-[#fff8ee] shadow-[var(--shadow-border)]">
      <div className="grid gap-7 px-5 pb-3 pt-7 sm:px-8 sm:pt-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f7931a]">
            TwentyOne.World
          </p>
          <h3 className="safe-heading mt-3 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
            Lokalni signal. Povezana mreža.
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#b9b2a9] sm:text-base">
            DvadesetJedan povezuje ljude na našim jezicima, a istodobno je dio
            otvorene svjetske mreže lokalnih Bitcoin-only zajednica.
          </p>
        </div>

        <div className="grid gap-2.5 text-xs text-[#cfc8be] sm:grid-cols-2 lg:grid-cols-1">
          <span className="inline-flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-[#f7931a]" />
            Lokalni 21 čvorovi
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-[#3a3a3a]" />
            Otvorena svjetska mreža
          </span>
        </div>
      </div>

      <figure
        className="relative mt-2 overflow-hidden"
        aria-labelledby="world-map-caption"
      >
        <svg
          className="aspect-[1.9] min-h-[17rem] w-full"
          role="img"
          viewBox="0 0 1000 520"
        >
          <title>DvadesetJedan kao lokalni čvor mreže TwentyOne.World</title>
          <defs>
            <radialGradient id="network-pulse" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f7931a" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#f7931a" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect fill="#050505" height="520" width="1000" />
          <g
            stroke="#171717"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.85"
          >
            {worldMapCountries.map((country, index) => {
              const isLocal = localRegionCodes.has(country.code)
              const isNetwork = isVisibleNetworkCountry(
                country.code,
                country.name,
              )

              return (
                <path
                  d={country.d}
                  fill={isLocal ? "#f7931a" : isNetwork ? "#c96b10" : "#343434"}
                  key={`${country.code}-${country.name}-${index}`}
                  vectorEffect="non-scaling-stroke"
                />
              )
            })}
          </g>
          <circle cx="552" cy="146" fill="url(#network-pulse)" r="42" />
          <circle
            cx="552"
            cy="146"
            fill="#fff8ee"
            r="5.5"
            stroke="#050505"
            strokeWidth="2.5"
          />
        </svg>

        <figcaption
          className="absolute bottom-5 left-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white sm:bottom-7 sm:left-8"
          id="world-map-caption"
        >
          <MapPin className="size-4 text-[#f7931a]" />
          DvadesetJedan · Balkan
        </figcaption>
      </figure>

      <div className="grid gap-5 border-t border-white/10 px-5 py-6 sm:px-8 sm:py-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:px-10">
        <div>
          <p className="text-lg font-semibold tracking-[-0.025em] text-white">
            Putuješ? Pronađi lokalni 21.
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-[#a9a198]">
            Karta povezuje lokalne grupe bez brisanja njihova jezika, karaktera
            i odgovornosti prema vlastitoj zajednici.
          </p>
        </div>
        <a
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#f7931a] px-5 py-3 text-sm font-semibold text-[#160d04] transition-[translate,scale,background-color] duration-150 ease-out hover:-translate-y-0.5 hover:bg-[#ffa52f] active:scale-[0.96] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 sm:w-fit"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          Otvori svjetsku kartu
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </div>
  )
}
