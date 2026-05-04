import { ArrowUpRight, Send } from "lucide-react"

import type { ArticleEntry } from "@/data/articles"
import { BEGINNERS_URL, articleCategories, readingOrder } from "@/data/site"
import { articleHref, communityHref, sortArticles } from "@/lib/content"
import { ActionButton } from "@/components/ActionButton"
import { ArticleCard } from "@/components/ArticleCard"
import { BackLink } from "@/components/BackLink"
import { Layout } from "@/components/Layout"
import { usePageMeta } from "@/lib/usePageMeta"

export function ArticlesPage({ articles }: { articles: ArticleEntry[] }) {
  usePageMeta(
    "Članci | DvadesetJedan",
    "Pisani Bitcoin signal DvadesetJedan zajednice: početni redoslijed čitanja, tematski putokazi i arhiva tekstova.",
  )

  const orderedArticles = sortArticles(articles)
  const topics = [...new Set(articles.flatMap((article) => article.categories))]
  const tags = [...new Set(articles.flatMap((article) => article.tags))]

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href="/">Početna</BackLink>
        <section className="grid gap-8 overflow-hidden rounded-[2.2rem] border border-border/80 bg-card/70 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
              Članci
            </p>
            <h1 className="safe-heading mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
              Pisani signal za ljude koji žele razumjeti Bitcoin dublje i odgovornije.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              Pisani dio projekta raste postupno. Ovdje su početni redoslijed
              čitanja, tematski putokazi i arhiva tekstova koji čine jezgru
              DvadesetJedan sadržaja.
            </p>
          </div>

          <div className="mx-auto flex aspect-square w-full max-w-[16rem] items-center justify-center rounded-[2rem] border border-primary/25 bg-[#070707] p-7 shadow-soft">
            <img
              alt="Twenty One beacon ikona za članke"
              className="h-full w-full object-contain drop-shadow-[0_0_24px_rgba(247,147,26,0.35)]"
              src="/images/twentyone-beacon.svg"
            />
          </div>
        </section>

        <section className="mt-10 rounded-[1.8rem] border border-border/80 bg-card px-6 py-6">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
            Filteri za održavatelje i čitatelje
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {[...topics, ...tags, "original", "translation", "guide", "beginner", "intermediate", "advanced"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-border/80 px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {articleCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-[1.5rem] border border-border/80 bg-card px-5 py-5"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-primary">
                  {category.label}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">
                  {category.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {category.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[22rem_minmax(0,1fr)]">
          <div className="rounded-[1.8rem] border border-border/80 bg-card px-6 py-6">
            <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
              Ako si nov u Bitcoinu
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
              Čitaj ovim redom
            </h2>
            <ol className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
              {readingOrder.map((item, index) => {
                const article = articles.find(
                  (entry) => entry.slug === item.slug,
                )

                return (
                  <li key={item.slug} className="flex gap-3">
                    <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/12 text-xs font-semibold text-primary">
                      {index + 1}
                    </span>
                    {article ? (
                      <div>
                        <a
                          className="font-medium text-foreground hover:text-primary"
                          href={articleHref(article.slug)}
                        >
                          {item.label}
                        </a>
                        <p className="mt-1 text-xs leading-6 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    ) : null}
                  </li>
                )
              })}
            </ol>
            <div className="mt-6 flex flex-wrap gap-3">
              <ActionButton
                href={BEGINNERS_URL}
                icon={<ArrowUpRight className="size-4" />}
                primary
              >
                Početni put
              </ActionButton>
              <ActionButton
                href={communityHref()}
                icon={<Send className="size-4" />}
                external
              >
                Pitaj u Telegramu
              </ActionButton>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {orderedArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}
