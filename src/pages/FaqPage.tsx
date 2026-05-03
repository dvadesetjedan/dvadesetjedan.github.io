import { ArrowUpRight, Send } from "lucide-react"

import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { Layout } from "@/components/Layout"
import { PageHero } from "@/components/PageHero"
import { BEGINNERS_URL, CONTRIBUTE_URL, faqGroups, media } from "@/data/site"
import { communityHref } from "@/lib/content"
import { usePageMeta } from "@/lib/usePageMeta"

export function FaqPage() {
  usePageMeta(
    "Česta pitanja | DvadesetJedan",
    "Kratki odgovori za ljude koji upoznaju DvadesetJedan, Bitcoin-only pristup i načine uključivanja u zajednicu.",
  )

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href="/">Početna</BackLink>
        <PageHero
          eyebrow="FAQ"
          title="Česta pitanja"
          intro="Kratki odgovori za ljude koji tek upoznaju DvadesetJedan, Bitcoin-only pristup i načine uključivanja u zajednicu."
        />

        <section className="mt-10 space-y-8">
          {faqGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
                {group.title}
              </h2>
              <div className="mt-5 space-y-4">
                {group.items.map((item) => (
                  <details
                    key={item.question}
                    className="rounded-[1.5rem] border border-border/80 bg-card px-5 py-5"
                  >
                    <summary className="cursor-pointer list-none text-lg font-medium text-foreground">
                      {item.question ===
                      "Je li DvadesetJedan dio twentyone.world?" ? (
                        <>
                          Je li DvadesetJedan dio{" "}
                          <a
                            className="underline decoration-border underline-offset-4 hover:text-primary"
                            href={media.twentyOneUrl}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            twentyone.world
                          </a>
                          ?
                        </>
                      ) : (
                        item.question
                      )}
                    </summary>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-[2rem] border border-border/80 bg-card px-6 py-8 sm:px-10">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
            Nisi našao odgovor?
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
            Najbolja pitanja često postanu tema za razgovor, članak ili
            livestream.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ActionButton
              href={BEGINNERS_URL}
              icon={<ArrowUpRight className="size-4" />}
              primary
            >
              Počni ovdje
            </ActionButton>
            <ActionButton
              href={communityHref()}
              icon={<Send className="size-4" />}
              external
            >
              Pitaj u Telegramu
            </ActionButton>
            <ActionButton
              href={CONTRIBUTE_URL}
              icon={<ArrowUpRight className="size-4" />}
            >
              Doprinesi
            </ActionButton>
          </div>
        </section>
      </main>
    </Layout>
  )
}
