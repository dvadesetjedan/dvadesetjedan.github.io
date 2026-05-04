import { ArrowUpRight, Send } from "lucide-react"

import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { CardGrid } from "@/components/CardGrid"
import { Layout } from "@/components/Layout"
import { Section } from "@/components/Section"
import { CONTRIBUTE_URL, media, principles } from "@/data/site"
import { worldMapCountries } from "@/data/worldMapPaths"
import { communityHref } from "@/lib/content"
import { usePageMeta } from "@/lib/usePageMeta"

function WorldMapHeroGraphic() {
  return (
    <figure
      aria-label="Stilizirana karta svijeta s DvadesetJedan regijom u narančastoj boji"
      className="mt-8 overflow-hidden rounded-[1.8rem] border border-border/70 bg-[#050505] shadow-soft"
    >
      <svg
        className="aspect-[1.9] min-h-[18rem] w-full"
        role="img"
        viewBox="0 0 1000 520"
      >
        <title>DvadesetJedan na TwentyOne.World karti</title>
        <rect fill="#050505" height="520" width="1000" />
        <g stroke="#151515" strokeLinejoin="round" strokeWidth="0.7">
          {worldMapCountries.map((country) => (
            <path
              d={country.d}
              fill={country.focus ? "#f7931a" : "#303030"}
              fillOpacity={country.focus ? 0.95 : 0.96}
              key={country.code}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </g>
        <circle
          cx="548"
          cy="204"
          fill="none"
          r="18"
          stroke="#f7931a"
          strokeOpacity="0.42"
          strokeWidth="2"
        />
        <circle cx="548" cy="204" fill="#fff6e8" r="4.5" />
      </svg>
      <figcaption className="sr-only">
        Karta svijeta prikazuje DvadesetJedan regiju kao narančasti dio otvorene
        twentyone.world mreže.
      </figcaption>
    </figure>
  )
}

export function AboutPage() {
  usePageMeta(
    "O projektu | DvadesetJedan",
    "DvadesetJedan je regionalni Bitcoin-only signal na našem jeziku i dio otvorenog TwentyOne.World koncepta.",
  )

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href="/">Početna</BackLink>
        <section className="overflow-hidden rounded-[2.2rem] border border-border/80 bg-card/70 px-6 py-8 sm:px-10 sm:py-12">
          <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
            O projektu
          </p>
          <h1 className="safe-heading mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
            O projektu
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            DvadesetJedan je regionalni Bitcoin-only signal na našem jeziku:
            mjesto za članke, livestream, događaje i zajednicu ljudi koji žele
            razumjeti Bitcoin dublje i odgovornije.
          </p>
          <WorldMapHeroGraphic />
        </section>

        <Section
          title="Što je DvadesetJedan?"
          intro="DvadesetJedan okuplja bitcoinere s Balkana kroz javni sadržaj, razgovore, prijevode, Telegram grupu i lokalna druženja. Projekt je namjerno Bitcoin-only: bez tokena, bez trading signala, bez obećanja prinosa i bez kratkoročnog hypea."
        >
          <div className="rounded-[1.6rem] border border-border/80 bg-card px-6 py-6 text-base leading-8 text-foreground">
            Lokalni jezik i regionalni kontekst nisu ukras, nego način da
            razgovor o Bitcoinu bude bliži stvarnim pitanjima ljudi iz našeg
            prostora.
          </div>
        </Section>

        <Section
          title="Zašto postoji?"
          intro="Većina ljudi prvi put čuje za Bitcoin kroz cijenu, medijske naslove, cikluse rasta i pada ili površne rasprave o kriptovalutama. Takav ulaz često stvara više buke nego razumijevanja. DvadesetJedan postoji kako bi se Bitcoin promatrao kroz pitanje novca, štednje, inflacije, osobne odgovornosti, samostalnog skrbništva i dugoročnog razmišljanja."
        >
          <div className="rounded-[1.6rem] border border-border/80 bg-card px-6 py-6 text-base leading-8 text-foreground">
            Cilj nije reći ljudima što da misle, nego stvoriti bolji prostor za
            pitanja, izvore i dublje razumijevanje.
          </div>
        </Section>

        <Section
          title="Zašto Balkan treba Bitcoin signal?"
          intro="Balkan dobro poznaje inflaciju, nestabilne institucije, migracije, valutne promjene i nepovjerenje u papirnati novac. Zato Bitcoin ovdje nije apstraktna tema, nego konkretno pitanje slobode, štednje, odgovornosti i dugoročnog planiranja."
        >
          <div className="rounded-[1.6rem] border border-border/80 bg-card px-6 py-6 text-base leading-8 text-foreground">
            Regionalni signal pomaže da se globalna tema prevede u svakodnevni
            život, bez kopiranja tuđeg jezika, hypea ili tržišne buke.
          </div>
        </Section>

        <Section
          title={
            <>
              Dio otvorenog{" "}
              <a
                className="font-semibold hover:text-primary"
                href={media.twentyOneUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                TwentyOne.World
              </a>{" "}
              koncepta
            </>
          }
          intro="DvadesetJedan je regionalni izraz otvorenog twentyone koncepta: stalan Bitcoin signal, lokalni jezik i otvorena zajednica. Ideja nije graditi zatvoreni klub, nego javni prostor u kojem ljudi mogu učiti, pitati, doprinositi i povezivati se."
        >
          <div className="flex flex-wrap gap-3">
            <ActionButton
              href={media.twentyOneUrl}
              icon={<ArrowUpRight className="size-4" />}
              external
              primary
            >
              Pogledaj TwentyOne.World
            </ActionButton>
            <ActionButton
              href={communityHref()}
              icon={<Send className="size-4" />}
              external
            >
              Uđi u Telegram grupu
            </ActionButton>
            <ActionButton
              href={CONTRIBUTE_URL}
              icon={<ArrowUpRight className="size-4" />}
            >
              Doprinesi
            </ActionButton>
          </div>
        </Section>

        <Section title="Načela DvadesetJedan">
          <CardGrid items={principles} />
        </Section>
      </main>
    </Layout>
  )
}
