import { ArrowUpRight, House } from "lucide-react"

import { ActionButton } from "@/components/ActionButton"
import { Layout } from "@/components/Layout"
import { ARTICLES_URL, BEGINNERS_URL } from "@/data/site"

export function NotFoundPage() {
  return (
    <Layout>
      <main className="mx-auto max-w-5xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <section className="rounded-[2.2rem] border border-border/80 bg-card/70 px-6 py-8 sm:px-10 sm:py-12">
          <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
            404
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl">
            Stranica nije pronađena.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Poveznica je možda promijenjena ili stranica više ne postoji.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionButton href="#/" icon={<House className="size-4" />} primary>
              Početna
            </ActionButton>
            <ActionButton
              href={ARTICLES_URL}
              icon={<ArrowUpRight className="size-4" />}
            >
              Članci
            </ActionButton>
            <ActionButton
              href={BEGINNERS_URL}
              icon={<ArrowUpRight className="size-4" />}
            >
              Počni ovdje
            </ActionButton>
          </div>
        </section>
      </main>
    </Layout>
  )
}
