import { ArrowUpRight, Send } from "lucide-react"

import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { CardGrid } from "@/components/CardGrid"
import { Layout } from "@/components/Layout"
import { PageHero } from "@/components/PageHero"
import { Section } from "@/components/Section"
import { CONTRIBUTE_URL, media, principles } from "@/data/site"
import { communityHref } from "@/lib/content"
import { usePageMeta } from "@/lib/usePageMeta"

export function AboutPage() {
  usePageMeta(
    "O projektu | DvadesetJedan",
    "DvadesetJedan je regionalni Bitcoin-only signal na našem jeziku i dio otvorenog TwentyOne.World koncepta.",
  )

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href="/">Početna</BackLink>
        <PageHero
          eyebrow="O projektu"
          title="O projektu"
          intro="DvadesetJedan je regionalni Bitcoin-only signal na našem jeziku: mjesto za članke, livestream, događaje i zajednicu ljudi koji žele razumjeti Bitcoin dublje i odgovornije."
        />

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
                className="underline decoration-border underline-offset-4 hover:text-primary"
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
