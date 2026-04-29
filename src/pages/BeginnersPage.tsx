import { ArrowUpRight, PlayCircle } from "lucide-react"

import type { ArticleEntry } from "@/data/articles"
import { ActionButton } from "@/components/ActionButton"
import { Layout } from "@/components/Layout"
import {
  ARTICLES_URL,
  LIVESTREAM_URL,
  beginnerHighlights,
  beginnerTopics,
  readingOrder,
} from "@/data/site"
import { articleHref, formatArticleDate } from "@/lib/content"

export function BeginnersPage({ articles }: { articles: ArticleEntry[] }) {
  const beginnerLinks = readingOrder
    .map((item) => articles.find((article) => article.slug === item.slug))
    .filter(Boolean) as ArticleEntry[]

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <section className="rounded-[2.2rem] border border-border/80 bg-card/70 px-6 py-8 sm:px-10 sm:py-12">
          <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
            Početnici
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
            Novi si u Bitcoinu?
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Kreni od osnova i izbjegni najčešće greške. Ovo je početni put kroz
            najvažnije teme za prvi smiren ulazak u Bitcoin.
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
