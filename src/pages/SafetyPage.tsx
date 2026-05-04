import { ArrowUpRight, Send, ShieldCheck } from "lucide-react"

import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { Layout } from "@/components/Layout"
import { PageHero } from "@/components/PageHero"
import { Section } from "@/components/Section"
import { safetySections } from "@/data/safety"
import { ARTICLES_URL, BEGINNERS_URL } from "@/data/site"
import { communityHref } from "@/lib/content"
import { usePageMeta } from "@/lib/usePageMeta"

export function SafetyPage() {
  usePageMeta(
    "Sigurnost | DvadesetJedan",
    "Početnički Bitcoin sigurnosni vodič: seed phrase, privatni ključevi, exchange, phishing, Telegram i meetupi.",
  )

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href="/">Početna</BackLink>
        <PageHero
          eyebrow="Sigurnost"
          title="Prvo razumij sigurnost."
          intro="Ne moraš ništa kupiti. Prvo nauči što ne dijeliti, kako prepoznati pritisak i kada pitati zajednicu prije nego što napraviš nepovratan korak."
        />

        <section className="mt-10 rounded-[1.8rem] border border-primary/20 bg-primary/8 px-6 py-6 sm:px-10">
          <div className="flex gap-4">
            <ShieldCheck className="mt-1 size-6 shrink-0 text-primary" />
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                DvadesetJedan nije investicijski savjet.
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-8 text-muted-foreground">
                Ova stranica je obrazovni sigurnosni podsjetnik za početnike:
                bez tradinga, bez tokena i bez obećanja zarade.
              </p>
            </div>
          </div>
        </section>

        <Section
          title="Početnički sigurnosni hub"
          intro="Sigurnost nije paranoja. To su male navike koje smanjuju šansu da napraviš skupu grešku dok još učiš."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {safetySections.map((section) => (
              <article
                className="rounded-[1.5rem] border border-border/80 bg-card px-5 py-5"
                key={section.title}
              >
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  {section.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {section.summary}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-foreground">
                  {section.points.map((point) => (
                    <li className="flex gap-3" key={point}>
                      <span className="mt-3 size-2 shrink-0 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <section className="mt-10 rounded-[1.8rem] border border-border/80 bg-card px-6 py-8 sm:px-10">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
            Zastani prije nego što klikneš.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
            Ako te netko požuruje, obećava zaradu ili traži seed phrase,
            zastani. Pitaj zajednicu bez dijeljenja privatnih podataka.
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
              href={ARTICLES_URL}
              icon={<ArrowUpRight className="size-4" />}
            >
              Članci o sigurnosti
            </ActionButton>
            <ActionButton
              external
              href={communityHref()}
              icon={<Send className="size-4" />}
            >
              Pitaj zajednicu
            </ActionButton>
          </div>
        </section>
      </main>
    </Layout>
  )
}
