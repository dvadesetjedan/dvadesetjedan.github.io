import { ArrowUpRight, PlayCircle } from "lucide-react"

import type { ArticleEntry } from "@/data/articles"
import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { Layout } from "@/components/Layout"
import {
  ARTICLES_URL,
  LIVESTREAM_URL,
  SAFETY_URL,
  beginnerHighlights,
  beginnerTopics,
  readingOrder,
} from "@/data/site"
import { beginnerSafetyWarnings, onboardingSteps } from "@/data/onboarding"
import { articleHref, formatArticleDate } from "@/lib/content"
import { usePageMeta } from "@/lib/usePageMeta"

export function BeginnersPage({ articles }: { articles: ArticleEntry[] }) {
  usePageMeta(
    "Počni ovdje | DvadesetJedan",
    "Početni put za ljude koji žele razumjeti Bitcoin bez žurbe, hypea i početničkih sigurnosnih grešaka.",
  )

  const beginnerLinks = readingOrder
    .map((item) => articles.find((article) => article.slug === item.slug))
    .filter(Boolean) as ArticleEntry[]

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href="/">Početna</BackLink>
        <section className="rounded-[2.2rem] border border-border/80 bg-card/70 px-6 py-8 sm:px-10 sm:py-12">
          <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
            Početnici
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
            Ne moraš ništa kupiti.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Prvo razumij osnove i sigurnost. Ovo je početni put kroz
            najvažnije Bitcoin teme bez žurbe, hypea i početničkih sigurnosnih
            grešaka.
          </p>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="rounded-[1.8rem] border border-border/80 bg-card px-6 py-6">
            <ul className="grid gap-3 text-base leading-8 text-foreground sm:grid-cols-2">
              {beginnerTopics.map((topic) => (
                <li key={topic} className="flex gap-3">
                  <span className="mt-1 size-4 shrink-0 rounded-full bg-primary/20" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <ActionButton
                href={
                  beginnerLinks[0]
                    ? articleHref(beginnerLinks[0].slug)
                    : ARTICLES_URL
                }
                icon={<ArrowUpRight className="size-4" />}
                primary
              >
                Počni ovdje
              </ActionButton>
              <ActionButton
                href={SAFETY_URL}
                icon={<ArrowUpRight className="size-4" />}
              >
                Sigurnosni vodič
              </ActionButton>
              <ActionButton
                href={LIVESTREAM_URL}
                icon={<PlayCircle className="size-4" />}
              >
                Prati livestream
              </ActionButton>
            </div>
          </div>

          <div className="grid gap-4">
            {beginnerHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-border/80 bg-card px-5 py-5"
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[1.8rem] border border-border/80 bg-card px-6 py-8 sm:px-10">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
            21 korak za smiren početak
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
            Svaki korak je mali razgovor, ne test. Otvori ono što ti je
            trenutno važno i pitaj zajednicu kad zapneš.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {onboardingSteps.map((step, index) => (
              <details
                key={step.title}
                className="rounded-[1.4rem] border border-border/70 bg-background/70 px-5 py-5"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-primary">
                  Korak {index + 1}
                </p>
                <summary className="mt-3 cursor-pointer list-none text-xl font-semibold tracking-[-0.03em] text-foreground">
                  {step.title}
                </summary>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {step.shortText}
                </p>
                <div className="mt-4 space-y-4 border-t border-border/70 pt-4">
                  <p className="text-sm leading-7 text-foreground">
                    {step.explanation}
                  </p>
                  {step.doNotDo?.length ? (
                    <div className="rounded-[1.2rem] border border-primary/20 bg-primary/8 px-4 py-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        Nemoj
                      </p>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-foreground">
                        {step.doNotDo.map((item) => (
                          <li className="flex gap-3" key={item}>
                            <span className="mt-3 size-2 shrink-0 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {step.questionForCommunity ? (
                    <p className="rounded-[1.2rem] border border-border/70 px-4 py-3 text-sm leading-7 text-muted-foreground">
                      Pitanje za zajednicu: {step.questionForCommunity}
                    </p>
                  ) : null}
                  {step.recommendedArticleSlugs?.length ? (
                    <div className="flex flex-wrap gap-2">
                      {step.recommendedArticleSlugs.map((slug) => {
                        const article = articles.find((entry) => entry.slug === slug)

                        return article ? (
                          <a
                            className="rounded-full border border-border/80 px-3 py-1 text-xs font-medium text-foreground hover:border-primary/40"
                            href={articleHref(article.slug)}
                            key={slug}
                          >
                            {article.title}
                          </a>
                        ) : null
                      })}
                    </div>
                  ) : null}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[1.8rem] border border-border/80 bg-card px-6 py-8 sm:px-10">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
            Sigurnosni podsjetnik
          </h2>
          <ul className="mt-5 grid gap-3 text-base leading-8 text-muted-foreground md:grid-cols-2">
            {beginnerSafetyWarnings.map((warning) => (
              <li key={warning} className="flex gap-3">
                <span className="mt-3 size-2 shrink-0 rounded-full bg-primary" />
                <span>{warning}</span>
              </li>
            ))}
          </ul>
        </section>

        {beginnerLinks.length ? (
          <section className="mt-10">
            <div className="rounded-[1.8rem] border border-border/80 bg-card px-6 py-6">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
                Preporučeni prvi tekstovi
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {beginnerLinks.map((article) => (
                  <a
                    key={article.slug}
                    className="rounded-[1.4rem] border border-border/70 bg-background/70 px-5 py-5 hover:border-primary/40"
                    href={articleHref(article.slug)}
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {formatArticleDate(article.date)}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-foreground">
                      {article.title}
                    </h3>
                    <div
                      className="mt-3 text-sm leading-7 text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: article.excerpt }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
    </Layout>
  )
}
