import { ArrowUpRight, PlayCircle } from "lucide-react"

import type { EpisodeEntry } from "@/data/episodes"
import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { Layout } from "@/components/Layout"
import { LIVESTREAM_URL } from "@/data/site"
import { formatEpisodeDate } from "@/lib/content"
import { usePageMeta } from "@/lib/usePageMeta"

function youtubeEmbedUrl(url: string) {
  const match = url.match(/(?:live\/|v=)([A-Za-z0-9_-]+)/)
  return match ? `https://www.youtube.com/embed/${match[1]}` : null
}

export function LivestreamEpisodePage({
  episode,
}: {
  episode: EpisodeEntry
}) {
  usePageMeta(`${episode.title} | DvadesetJedan`, episode.summary)

  const embedUrl = youtubeEmbedUrl(episode.youtubeUrl)

  return (
    <Layout>
      <main className="mx-auto max-w-5xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href={LIVESTREAM_URL}>Sve epizode</BackLink>
        <article className="rounded-[2.2rem] border border-border/80 bg-card/75 px-6 py-8 sm:px-10 sm:py-12">
          <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
            Livestream
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl">
            {episode.title}
          </h1>
          {episode.publishedAt ? (
            <p className="mt-4 text-sm text-muted-foreground">
              {formatEpisodeDate(episode.publishedAt)}
            </p>
          ) : null}

          {embedUrl ? (
            <div className="mt-8 aspect-video overflow-hidden rounded-[1.4rem] border border-border/80 bg-background">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                src={embedUrl}
                title={episode.title}
              />
            </div>
          ) : null}

          <p className="mt-8 text-base leading-8 text-muted-foreground">
            {episode.summary || "Sažetak će biti dodan."}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <ActionButton href={episode.youtubeUrl} icon={<PlayCircle className="size-4" />} external primary>
              Pogledaj na YouTubeu
            </ActionButton>
          </div>

          <section className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-border/80 bg-background/70 px-5 py-5">
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                Sažetak
              </h2>
              {episode.summaryBullets?.length ? (
                <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
                  {episode.summaryBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Sažetak će biti dodan.
                </p>
              )}
            </div>

            <div className="rounded-[1.5rem] border border-border/80 bg-background/70 px-5 py-5">
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                Poglavlja i linkovi
              </h2>
              {episode.chapters?.length ? (
                <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
                  {episode.chapters.map((chapter) => (
                    <li key={`${chapter.time}-${chapter.title}`}>
                      {chapter.time} — {chapter.title}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Poglavlja će biti dodana kad budu dostupna.
                </p>
              )}
              {episode.links?.length ? (
                <div className="mt-5 space-y-2">
                  {episode.links.map((link) => (
                    <a key={link.href} className="inline-flex items-center gap-2 text-sm font-medium text-primary" href={link.href} rel="noopener noreferrer" target="_blank">
                      {link.label}
                      <ArrowUpRight className="size-4" />
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        </article>
      </main>
    </Layout>
  )
}
