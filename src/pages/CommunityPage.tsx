import { ArrowUpRight, PlayCircle, Send, ShieldCheck } from "lucide-react"

import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { Layout } from "@/components/Layout"
import { siteConfig } from "@/data/siteConfig"
import { EVENTS_URL, GITHUB_URL, YOUTUBE_URL } from "@/data/site"
import { communityHref } from "@/lib/content"
import { usePageMeta } from "@/lib/usePageMeta"

const principles = [
  "Bitcoin-only: bez altcoina, tokena i trading signala.",
  "Obrazovanje prije akcije: prvo razumij osnove i sigurnost.",
  "Početnici su dobrodošli, ali scamovi i obećanja zarade nisu.",
  "Ne dijeli seed phrase, iznose, privatne podatke ni osjetljive planove.",
  "Pitanja su dobrodošla kada su konkretna, strpljiva i dobronamjerna.",
] as const

export function CommunityPage() {
  usePageMeta(
    "Zajednica | DvadesetJedan",
    "Ulaz u DvadesetJedan zajednicu: Telegram, YouTube, događaji, načela razgovora i Bitcoin-only pravila.",
  )

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href="/">Početna</BackLink>
        <section className="grid gap-8 overflow-hidden rounded-[2.2rem] border border-border/80 bg-card/70 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
              Zajednica
            </p>
            <h1 className="safe-heading mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
              Otvoreni Bitcoin prostor za regiju.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              Telegram služi za razgovor i koordinaciju, YouTube za javni
              signal, a događaji za susrete uživo. Fokus ostaje Bitcoin-only:
              bez tradinga, bez tokena, bez obećanja zarade.
            </p>
          </div>

          <div className="mx-auto flex aspect-square w-full max-w-[16rem] items-center justify-center rounded-[2rem] border border-primary/25 bg-[#070707] p-7 shadow-soft">
            <img
              alt="Twenty One space ikona za zajednicu"
              className="h-full w-full object-contain drop-shadow-[0_0_24px_rgba(247,147,26,0.35)]"
              src="/images/twentyone-space.svg"
            />
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          <ActionButton
            href={communityHref()}
            icon={<Send className="size-4" />}
            external
            primary
          >
            Uđi u Telegram
          </ActionButton>
          <ActionButton href={YOUTUBE_URL} icon={<PlayCircle className="size-4" />} external>
            Otvori YouTube
          </ActionButton>
          <ActionButton href={EVENTS_URL} icon={<ArrowUpRight className="size-4" />}>
            Pogledaj događaje
          </ActionButton>
        </section>

        <section className="mt-10 rounded-[1.8rem] border border-border/80 bg-card px-6 py-8 sm:px-10">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
            Načela zajednice
          </h2>
          <ul className="mt-6 grid gap-3 text-base leading-8 text-muted-foreground md:grid-cols-2">
            {principles.map((principle) => (
              <li key={principle} className="flex gap-3">
                <ShieldCheck className="mt-1 size-4 shrink-0 text-primary" />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-[1.8rem] border border-border/80 bg-card px-6 py-8 sm:px-10">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
            Kako postaviti dobro pitanje
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
            Napiši što pokušavaš razumjeti, što si već pročitao ili probao i
            gdje je zapelo. Ne šalji privatne ključeve, seed phrase, screenshot
            stanja računa ili osobne dokumente.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ActionButton href={siteConfig.socials.meetup} icon={<ArrowUpRight className="size-4" />} external>
              Meetup stranica
            </ActionButton>
            <ActionButton href={GITHUB_URL} icon={<ArrowUpRight className="size-4" />} external>
              GitHub
            </ActionButton>
          </div>
        </section>
      </main>
    </Layout>
  )
}
