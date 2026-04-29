import type { ArticleEntry } from "@/data/articles"
import {
  articleHref,
  formatArticleDate,
  getArticleCuration,
  isTranslatedArticle,
} from "@/lib/content"
import { ArrowUpRight } from "lucide-react"
import { ActionButton } from "@/components/ActionButton"

export function ArticleCard({ article }: { article: ArticleEntry }) {
  const curation = getArticleCuration(article.slug)

  return (
    <div className="rounded-[1.6rem] border border-border/80 bg-card px-5 py-6">
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
      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground">
        <a className="hover:text-primary" href={articleHref(article.slug)}>
          {article.title}
        </a>
      </h3>
      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
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
      <div className="mt-5">
        <ActionButton
          href={articleHref(article.slug)}
          icon={<ArrowUpRight className="size-4" />}
        >
          Čitaj članak
        </ActionButton>
      </div>
    </div>
  )
}
