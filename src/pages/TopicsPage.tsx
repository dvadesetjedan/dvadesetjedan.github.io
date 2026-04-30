import { ArrowUpRight, PlayCircle, Send } from "lucide-react"

import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { Layout } from "@/components/Layout"
import { PageHero } from "@/components/PageHero"
import { ARTICLES_URL, LIVESTREAM_URL, topics } from "@/data/site"
import { communityHref } from "@/lib/content"
import { usePageMeta } from "@/lib/usePageMeta"

const topicGroups = [
  {
    title: "Novac i ekonomija",
    items: [
      "Što je novac?",
      "Inflacija i štednja",
      "Knjige, ideje i ekonomska povijest",
    ],
  },
  {
    title: "Bitcoin praksa",
    items: [
      "Sigurnost i samostalno skrbništvo",
      "Praktična uporaba Bitcoina",
      "Razlika između Bitcoina i kriptovaluta",
    ],
  },
  {
    title: "Kultura i društvo",
    items: [
      "Bitcoin i osobna odgovornost",
      "Život na Bitcoin standardu",
      "Regionalni i globalni kontekst",
    ],
  },
  {
    title: "Zajednica i doprinos",
    items: [
      "Lokalna zajednica i otvoreni projekti",
      "Prevođenje i širenje znanja",
      "Poduzetništvo i dugoročno razmišljanje",
    ],
  },
] as const

export function TopicsPage() {
  usePageMeta(
    "Teme | DvadesetJedan",
    "Teme kroz koje DvadesetJedan obrađuje Bitcoin: novac, sigurnost, štednja, zajednica i dugoročno razmišljanje.",
  )

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href="/">Početna</BackLink>
        <PageHero
          eyebrow="Teme"
          title="Teme"
          intro="Bitcoin nije samo tehnologija ni samo cijena. DvadesetJedan obrađuje teme koje pomažu razumjeti novac, štednju, sigurnost, osobnu odgovornost, zajednicu i dugoročno razmišljanje."
        />

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          {topicGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[1.8rem] border border-border/80 bg-card px-6 py-6"
            >
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
                {group.title}
              </h2>
              <div className="mt-6 space-y-4">
                {group.items.map((title) => {
                  const topic = topics.find((item) => item.title === title)

                  return topic ? (
                    <div
                      key={topic.title}
                      className="rounded-[1.2rem] border border-border/70 bg-background/70 px-4 py-4"
                    >
                      <h3 className="text-lg font-semibold tracking-[-0.03em] text-foreground">
                        {topic.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {topic.text}
                      </p>
                    </div>
                  ) : null
                })}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-[2rem] border border-border/80 bg-card px-6 py-8 sm:px-10">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
            Predloži sljedeću temu
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
            Dobar signal nastaje kroz pitanja zajednice. Ako imaš temu koja
            pomaže ljudima razumjeti Bitcoin, pošalji je u otvoreni prostor.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ActionButton
              href={ARTICLES_URL}
              icon={<ArrowUpRight className="size-4" />}
              primary
            >
              Čitaj članke
            </ActionButton>
            <ActionButton
              href={communityHref()}
              icon={<Send className="size-4" />}
              external
            >
              Predloži temu za livestream
            </ActionButton>
            <ActionButton
              href={LIVESTREAM_URL}
              icon={<PlayCircle className="size-4" />}
            >
              Otvori livestream
            </ActionButton>
          </div>
        </section>
      </main>
    </Layout>
  )
}
