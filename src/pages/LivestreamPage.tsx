import { ArrowUpRight, PlayCircle, Send } from "lucide-react"

import { ActionButton } from "@/components/ActionButton"
import { Layout } from "@/components/Layout"
import { YOUTUBE_URL } from "@/data/site"
import { episodes } from "@/data/episodes"
import { communityHref, formatEpisodeDate } from "@/lib/content"

export function LivestreamPage() {
  const [latestEpisode, ...archive] = episodes

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <section className="rounded-[2.2rem] border border-border/80 bg-card/70 px-6 py-8 sm:px-10 sm:py-12">
          <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
            Livestream
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
            Livestream
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            DvadesetJedan okuplja zajednicu kroz Bitcoin livestream: vijesti,
            komentare, razgovore, pitanja uživo i regionalnu perspektivu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionButton
              href={YOUTUBE_URL}
              icon={<PlayCircle className="size-4" />}
              external={Boolean(YOUTUBE_URL)}
              primary
            >
              Otvori YouTube kanal
            </ActionButton>
            <ActionButton
              href={communityHref()}
              icon={<Send className="size-4" />}
              external
            >
              Postavi pitanje u Telegram grupi
            </ActionButton>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="rounded-[1.8rem] border border-border/80 bg-card px-6 py-6">
            <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
              Najnovija epizoda
            </p>
            {latestEpisode ? (
              <>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                  {latestEpisode.title}
                </h2>
                {latestEpisode.publishedAt ? (
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {formatEpisodeDate(latestEpisode.publishedAt)}
                  </p>
                ) : null}
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {latestEpisode.summary}
                </p>
                <div className="mt-6">
                  <ActionButton
                    href={latestEpisode.youtubeUrl}
                    icon={<ArrowUpRight className="size-4" />}
                    external
                    primary
                  >
                    Pogledaj epizodu
                  </ActionButton>
                </div>
              </>
            ) : (
              <>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                  Arhiva je još prazna
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Trenutno nema ručno dodanih epizoda u arhivi. Najnovije
                  livestreamove možeš pronaći na YouTube kanalu DvadesetJedan,
                  a pitanja i prijedloge tema možeš poslati u Telegram grupi.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ActionButton
                    href={YOUTUBE_URL}
                    icon={<PlayCircle className="size-4" />}
                    external={Boolean(YOUTUBE_URL)}
                    primary
                  >
                    Otvori YouTube kanal
                  </ActionButton>
                  <ActionButton
                    href={communityHref()}
                    icon={<Send className="size-4" />}
                    external
                  >
                    Predloži temu u Telegram grupi
                  </ActionButton>
                </div>
              </>
            )}
          </div>

          <div className="rounded-[1.8rem] border border-border/80 bg-card px-6 py-6">
            <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
              Kako sudjelovati
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              <li>Prati prijenos i uključi se u razgovor.</li>
              <li>Pošalji pitanje ili temu kroz Telegram grupu.</li>
              <li>Podijeli korisne epizode s ljudima kojima mogu pomoći.</li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <div className="rounded-[1.8rem] border border-border/80 bg-card px-6 py-6">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
              Arhiva epizoda
            </h2>
            {archive.length ? (
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {archive.map((episode) => (
                  <a
                    key={episode.slug}
                    className="rounded-[1.4rem] border border-border/70 bg-background/70 px-5 py-5 hover:border-primary/40"
                    href={episode.youtubeUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {episode.publishedAt ? (
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {formatEpisodeDate(episode.publishedAt)}
                      </p>
                    ) : null}
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
                      {episode.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {episode.summary}
                    </p>
                  </a>
                ))}
              </div>
            ) : (
              <div className="mt-4">
                <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                  Trenutno nema ručno dodanih epizoda u arhivi. Najnovije
                  livestreamove možeš pronaći na YouTube kanalu DvadesetJedan,
                  a pitanja i prijedloge tema možeš poslati u Telegram grupi.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ActionButton
                    href={YOUTUBE_URL}
                    icon={<PlayCircle className="size-4" />}
                    external={Boolean(YOUTUBE_URL)}
                    primary
                  >
                    Otvori YouTube kanal
                  </ActionButton>
                  <ActionButton
                    href={communityHref()}
                    icon={<Send className="size-4" />}
                    external
                  >
                    Predloži temu u Telegram grupi
                  </ActionButton>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  )
}
