import type { ArticleEntry } from "@/data/articles"
import {
  articleHref,
  formatArticleDate,
  getArticleCuration,
  isTranslatedArticle,
} from "@/lib/content"
import { ArrowUpRight } from "lucide-react"

export function ArticleCard({ article }: { article: ArticleEntry }) {
  const curation = getArticleCuration(article.slug)

  return (
    <a
      className="group block rounded-[1.6rem] bg-card px-5 py-6 shadow-[var(--shadow-border)] transition-[translate,scale,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 sm:px-6"
      href={articleHref(article.slug)}
    >
      <div className="flex flex-wrap gap-2">
        {curation ? (
          <span className="inline-flex rounded-full bg-primary/12 px-3 py-1 text-xs font-medium text-primary-strong">
            {curation.topic}
          </span>
        ) : null}
        {isTranslatedArticle(article) ? (
          <span className="inline-flex rounded-full bg-foreground/6 px-3 py-1 text-xs font-medium text-muted-foreground">
            Prijevod
          </span>
        ) : null}
      </div>
      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground">
        {article.title}
      </h3>
      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground tabular-nums">
        {formatArticleDate(article.date)}
      </p>
      <div
        className="mt-3 text-sm leading-7 text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: article.excerpt }}
      />
      {curation ? (
        <p className="mt-3 text-sm leading-7 text-foreground/80">
          {curation.blurb}
        </p>
      ) : null}
      <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary-strong">
        Čitaj članak
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </a>
  )
}
