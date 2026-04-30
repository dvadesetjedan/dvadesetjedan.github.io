import type { ArticleEntry } from "@/data/articles"
import { BackLink } from "@/components/BackLink"
import { Layout } from "@/components/Layout"
import { ARTICLES_URL } from "@/data/site"
import {
  articleHref,
  formatArticleDate,
  getArticleCuration,
  isTranslatedArticle,
} from "@/lib/content"
import { stripHtml, truncateText } from "@/lib/text"
import { usePageMeta } from "@/lib/usePageMeta"

export function ArticlePage({ article }: { article: ArticleEntry }) {
  usePageMeta(
    `${article.title} | DvadesetJedan`,
    truncateText(stripHtml(article.excerpt)),
  )

  const curation = getArticleCuration(article.slug)
  const recommendedNext = article.recommendedNextSlugs ?? []

  return (
    <Layout>
      <main className="mx-auto max-w-5xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href={ARTICLES_URL}>Svi članci</BackLink>

        <article className="overflow-hidden rounded-[2.2rem] border border-border/80 bg-card/75">
          {article.image ? (
            <img
              alt={article.title}
              className="h-[20rem] w-full object-cover sm:h-[24rem]"
              src={article.image}
            />
          ) : null}

          <div className="px-6 py-8 sm:px-10 sm:py-12">
            <div className="flex flex-wrap gap-2">
              {curation ? (
                <span className="inline-flex rounded-full bg-primary/12 px-3 py-1 text-xs font-medium text-primary">
                  {curation.topic}
                </span>
              ) : null}
              {isTranslatedArticle(article) ? (
                <span className="inline-flex rounded-full bg-foreground/6 px-3 py-1 text-xs font-medium text-muted-foreground">
                  Prijevod
                </span>
              ) : null}
            </div>

            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl">
              {article.title}
            </h1>
            {curation ? (
              <p className="mt-4 max-w-3xl text-base leading-8 text-foreground/80">
                {curation.blurb}
              </p>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span>{formatArticleDate(article.date)}</span>
              {article.author ? <span>Autor: {article.author}</span> : null}
              {article.translator ? (
                <span>Prijevod: {article.translator}</span>
              ) : null}
              {article.difficulty ? <span>{article.difficulty}</span> : null}
              {article.readingTimeMinutes ? (
                <span>{article.readingTimeMinutes} min čitanja</span>
              ) : null}
              {article.tags.length ? (
                <span>{article.tags.join(" • ")}</span>
              ) : null}
              {article.originalUrl ? (
                <a href={article.originalUrl} rel="noopener noreferrer" target="_blank">
                  Originalna objava
                </a>
              ) : null}
            </div>

            {/* contentHtml is generated from repository-controlled article data. */}
            <div
              className="wp-content mt-10 text-base leading-8 text-foreground"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />

            {recommendedNext.length ? (
              <section className="mt-10 rounded-[1.5rem] border border-border/80 bg-background/70 px-5 py-5">
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  Preporučeno dalje
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {recommendedNext.map((slug) => (
                    <a
                      key={slug}
                      className="rounded-full border border-border/80 px-4 py-2 text-sm font-medium text-foreground hover:border-primary/40"
                      href={articleHref(slug)}
                    >
                      {slug}
                    </a>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </article>
      </main>
    </Layout>
  )
}
