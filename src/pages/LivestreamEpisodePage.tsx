import { ArrowUpRight, PlayCircle } from "lucide-react"

import type { EpisodeEntry } from "@/data/episodes"
import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { Layout } from "@/components/Layout"
import { events } from "@/data/events"
import { CONTRIBUTE_URL, LIVESTREAM_URL } from "@/data/site"
import { articleHref, eventHref, formatEpisodeDate } from "@/lib/content"
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
          <h1 className="safe-heading mt-4 text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl">
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
            {episode.needsShownotes ? (
              <ActionButton
                href={CONTRIBUTE_URL}
                icon={<ArrowUpRight className="size-4" />}
              >
                Dodaj shownotes
              </ActionButton>
            ) : null}
          </div>

          {episode.needsShownotes ? (
            <section className="mt-8 rounded-[1.5rem] border border-primary/20 bg-primary/8 px-5 py-5">
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                Ovoj epizodi još trebaju shownotes.
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Ovoj epizodi još trebaju sažetak, poglavlja i linkovi. Možeš
                pomoći kroz GitHub ili Telegram.
              </p>
            </section>
          ) : null}

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
              ) : episode.needsShownotes ? (
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Sažetak treba dodati.
                </p>
              ) : (
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Sažetak nije dostupan.
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
              ) : episode.needsShownotes ? (
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Poglavlja treba dodati.
                </p>
              ) : (
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Poglavlja nisu dostupna.
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

          {episode.terms?.length ? (
            <section className="mt-8 rounded-[1.5rem] border border-border/80 bg-background/70 px-5 py-5">
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                Pojmovi za početnike
              </h2>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {episode.terms.map((term) => (
                  <div className="rounded-[1.2rem] border border-border/70 px-4 py-4" key={term.term}>
                    <h3 className="font-semibold text-foreground">{term.term}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {term.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {episode.clips?.length || episode.transcriptUrl ? (
            <section className="mt-8 rounded-[1.5rem] border border-border/80 bg-background/70 px-5 py-5">
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                Dodatni materijali
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {episode.transcriptUrl ? (
                  <a className="rounded-full border border-border/80 px-4 py-2 text-sm font-medium text-foreground hover:border-primary/40" href={episode.transcriptUrl} rel="noopener noreferrer" target="_blank">
                    Transkript
                  </a>
                ) : null}
                {episode.clips?.map((clip) => (
                  <a className="rounded-full border border-border/80 px-4 py-2 text-sm font-medium text-foreground hover:border-primary/40" href={clip.href} key={clip.href} rel="noopener noreferrer" target="_blank">
                    {clip.label}
                  </a>
                ))}
              </div>
            </section>
          ) : null}

          {episode.relatedArticleSlugs?.length ? (
            <section className="mt-8 rounded-[1.5rem] border border-border/80 bg-background/70 px-5 py-5">
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                Povezani članci
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {episode.relatedArticleSlugs.map((slug) => (
                  <a className="rounded-full border border-border/80 px-4 py-2 text-sm font-medium text-foreground hover:border-primary/40" href={articleHref(slug)} key={slug}>
                    {slug}
                  </a>
                ))}
              </div>
            </section>
          ) : null}

          {episode.relatedEventSlugs?.length ? (
            <section className="mt-8 rounded-[1.5rem] border border-border/80 bg-background/70 px-5 py-5">
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                Povezani događaji
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {episode.relatedEventSlugs.map((slug) => {
                  const event = events.find((entry) => entry.slug === slug)

                  return event ? (
                    <a className="rounded-full border border-border/80 px-4 py-2 text-sm font-medium text-foreground hover:border-primary/40" href={eventHref(event.slug)} key={slug}>
                      {event.title}
                    </a>
                  ) : null
                })}
              </div>
            </section>
          ) : null}
        </article>
      </main>
    </Layout>
  )
}
