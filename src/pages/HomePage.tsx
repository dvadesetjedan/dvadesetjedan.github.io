import { ArrowUpRight, PlayCircle, Send, ShieldCheck } from "lucide-react"

import { ActionButton } from "@/components/ActionButton"
import { ActionCardGrid } from "@/components/ActionCardGrid"
import { BulletedPanel } from "@/components/BulletedPanel"
import { CardGrid } from "@/components/CardGrid"
import { EventsIcon, TelegramIcon } from "@/components/Icons"
import { InlineLink } from "@/components/InlineLink"
import { Layout } from "@/components/Layout"
import { Section } from "@/components/Section"
import { episodes } from "@/data/episodes"
import { events } from "@/data/events"
import { featuredArticles } from "@/data/featuredArticles"
import {
  ABOUT_URL,
  ARTICLES_URL,
  BEGINNERS_URL,
  CONTRIBUTE_URL,
  EVENTS_URL,
  FAQ_URL,
  LIVESTREAM_URL,
  TOPICS_URL,
  beginnerHighlights,
  beginnerTopics,
  heroContent,
  involvementCards,
  media,
  openCommunityItems,
  topics,
  trustItems,
} from "@/data/site"
import {
  articleHref,
  communityHref,
  episodeHref,
  eventHref,
  formatEpisodeDate,
  formatEventDate,
} from "@/lib/content"
import { usePageMeta } from "@/lib/usePageMeta"

type LatestCardProps = {
  eyebrow: string
  title: string
  text: string
  href: string
  cta: string
  external?: boolean
}

function LatestCard({
  eyebrow,
  title,
  text,
  href,
  cta,
  external = false,
}: LatestCardProps) {
  return (
    <a
      className="rounded-[1.5rem] border border-border/80 bg-card px-5 py-5 transition-colors hover:border-primary/40"
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      <p className="text-xs uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>
      <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-foreground">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
        {cta} <ArrowUpRight className="size-4" />
      </span>
    </a>
  )
}

export function HomePage() {
  usePageMeta(
    "DvadesetJedan | Regionalni Bitcoin signal",
    "DvadesetJedan je regionalni Bitcoin-only signal na našem jeziku: članci, livestream, događaji i zajednica za bitcoinere s Balkana.",
  )

  const latestEpisode = episodes[0]
  const upcomingEvent = events
    .filter((event) => new Date(event.end) >= new Date())
    .sort(
      (left, right) =>
        new Date(left.start).getTime() - new Date(right.start).getTime(),
    )[0]

  return (
    <Layout>
      <main>
        <section className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-18">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_26rem] lg:items-center">
            <div className="hero-copy min-w-0 w-full max-w-[calc(100vw-2.5rem)] sm:max-w-4xl">
              <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
                DvadesetJedan / Balkan /{" "}
                <a
                  className="font-semibold hover:text-foreground"
                  href={media.twentyOneUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  TwentyOne.World
                </a>
              </p>
              <h1 className="mt-5 max-w-full break-words text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
                {heroContent.title}
              </h1>
              <p className="mt-5 max-w-3xl break-words text-lg leading-8 text-foreground/90 sm:text-xl">
                {heroContent.subtitle}
              </p>
              <p className="mt-7 max-w-3xl break-words text-base leading-8 text-muted-foreground sm:text-lg">
                DvadesetJedan je regionalna verzija otvorene{" "}
                <a
                  className="font-semibold text-foreground hover:text-primary"
                  href={media.twentyOneUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  twentyone.world
                </a>{" "}
                mreže: gradimo javan Bitcoin signal, otvoren prostor za
                razgovor i sadržaj na jeziku koji ljudima iz naše regije dolazi
                prirodno.
              </p>
              <p className="mt-6 max-w-3xl break-words rounded-[1.4rem] border border-primary/20 bg-primary/8 px-5 py-4 text-sm leading-7 text-foreground">
                {heroContent.highlight}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ActionButton
                  href={BEGINNERS_URL}
                  icon={<ArrowUpRight className="size-4" />}
                  primary
                >
                  Počni ovdje
                </ActionButton>
                <ActionButton
                  href={communityHref()}
                  icon={<Send className="size-4" />}
                  external
                >
                  Uđi u zajednicu
                </ActionButton>
                <ActionButton
                  href={LIVESTREAM_URL}
                  icon={<PlayCircle className="size-4" />}
                >
                  Pogledaj livestream
                </ActionButton>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <InlineLink
                  href={communityHref()}
                  icon={<TelegramIcon />}
                  label="Telegram"
                  external
                />
                <InlineLink
                  href={LIVESTREAM_URL}
                  icon={<PlayCircle className="size-5" />}
                  label="Livestream"
                />
                <InlineLink
                  href={EVENTS_URL}
                  icon={<EventsIcon />}
                  label="Događaji"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-[2.4rem] border border-border/80 bg-card shadow-[var(--shadow-soft)]">
              <img
                alt="DvadesetJedan vizual"
                className="h-auto w-full object-contain sm:min-h-[24rem] sm:object-cover lg:h-full"
                src={media.heroUrl}
              />
            </div>
          </div>
        </section>

        <section className="border-y border-border/70 bg-card/50">
          <div className="mx-auto grid max-w-7xl gap-3 px-5 py-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item}
                className="rounded-[1.2rem] border border-border/70 bg-background/80 px-4 py-4 text-sm font-medium text-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <Section title="Kako se uključiti">
          <ActionCardGrid items={involvementCards} />
        </Section>

        <Section
          title="Najnovije iz DvadesetJedan"
          intro="Brzi ulaz u zadnji livestream, preporučene tekstove i događaje zajednice."
        >
          <div className="grid gap-4 md:grid-cols-3">
            <LatestCard
              eyebrow="Livestream"
              title="Najnoviji livestream"
              text={
                latestEpisode
                  ? `${latestEpisode.title}${
                      latestEpisode.publishedAt
                        ? ` • ${formatEpisodeDate(latestEpisode.publishedAt)}`
                        : ""
                    }`
                  : "Najnovije livestreamove možeš pronaći na Livestream stranici."
              }
              href={latestEpisode ? episodeHref(latestEpisode.slug) : LIVESTREAM_URL}
              cta={latestEpisode ? "Pogledaj epizodu" : "Otvori livestream"}
            />
            <LatestCard
              eyebrow="Članci"
              title="Preporučeni tekstovi"
              text="Kreni od početnog redoslijeda čitanja i izgradi razumijevanje korak po korak."
              href={ARTICLES_URL}
              cta="Čitaj članke"
            />
            <LatestCard
              eyebrow="Događaji"
              title={upcomingEvent ? upcomingEvent.title : "Događaji"}
              text={
                upcomingEvent
                  ? `${formatEventDate(upcomingEvent)} • ${upcomingEvent.city}`
                  : "Trenutno nema javno najavljenih događaja. Pogledaj arhivu ili predloži događaj u svom gradu."
              }
              href={upcomingEvent ? eventHref(upcomingEvent.slug) : EVENTS_URL}
              cta={upcomingEvent ? "Pogledaj događaj" : "Otvori događaje"}
            />
          </div>
        </Section>

        <Section
          title="Zašto Bitcoin-only?"
          intro="DvadesetJedan nije crypto grupa. Ne promoviramo tokene, altcoine, trading signale ni brzu zaradu. Fokus je Bitcoin: novac, sloboda, odgovornost, tehnologija i dugoročno razmišljanje."
        >
          <div className="rounded-[1.6rem] border border-border/80 bg-card px-6 py-6">
            <p className="text-base leading-8 text-foreground">
              Naš signal je namjerno uzak: Bitcoin prije hypea, razumijevanje
              prije šuma i dugoročna perspektiva prije kratkoročnih impulsa.
            </p>
          </div>
        </Section>

        <Section
          title="O projektu"
          intro="DvadesetJedan je regionalni Bitcoin-only signal na našem jeziku: mjesto za članke, livestream, događaje i zajednicu ljudi koji žele razumjeti Bitcoin dublje i odgovornije."
        >
          <div className="rounded-[1.6rem] border border-border/80 bg-card px-6 py-6">
            <p className="text-base leading-8 text-foreground">
              Projekt je dio otvorenog{" "}
              <a
                className="font-semibold hover:text-primary"
                href={media.twentyOneUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                TwentyOne.World
              </a>{" "}
              koncepta i gradi javan prostor za lokalni jezik, regionalni
              kontekst i globalno povezanu Bitcoin zajednicu.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <ActionButton
              href={ABOUT_URL}
              icon={<ArrowUpRight className="size-4" />}
              primary
            >
              Saznaj više
            </ActionButton>
            <ActionButton
              href={media.twentyOneUrl}
              icon={<ArrowUpRight className="size-4" />}
              external
            >
              TwentyOne.World
            </ActionButton>
          </div>
        </Section>

        <Section title="Novi si u Bitcoinu?">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <div className="rounded-[1.8rem] border border-border/80 bg-card px-6 py-6">
              <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                Kreni od osnova i izbjegni najčešće greške. Pripremili smo
                početni put kroz najvažnije teme.
              </p>
              <ul className="mt-6 grid gap-3 text-base leading-8 text-foreground sm:grid-cols-2">
                {beginnerTopics.map((topic) => (
                  <li key={topic} className="flex gap-3">
                    <ShieldCheck className="mt-1 size-4 shrink-0 text-primary" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <ActionButton
                  href={BEGINNERS_URL}
                  icon={<ArrowUpRight className="size-4" />}
                  primary
                >
                  Počni ovdje
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
          </div>
        </Section>

        <Section
          title="Počni s ovim tekstovima"
          intro="Ako si nov u Bitcoinu, kreni od nekoliko tekstova koji objašnjavaju otvorenost mreže, decentralizaciju i osobnu odgovornost."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {featuredArticles.map((article) => (
              <a
                key={article.slug}
                className="rounded-[1.5rem] border border-border/80 bg-card px-5 py-5 transition-colors hover:border-primary/40"
                href={articleHref(article.slug)}
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {article.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Čitaj tekst <ArrowUpRight className="size-4" />
                </span>
              </a>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <ActionButton
              href={ARTICLES_URL}
              icon={<ArrowUpRight className="size-4" />}
              primary
            >
              Svi članci
            </ActionButton>
            <ActionButton
              href={BEGINNERS_URL}
              icon={<ArrowUpRight className="size-4" />}
            >
              Počni ovdje
            </ActionButton>
          </div>
        </Section>

        <Section
          title="Teme koje obrađujemo"
          intro="Novac, sigurnost, štednja, samostalno skrbništvo, regionalni kontekst i dugoročno razmišljanje čine jezgru DvadesetJedan sadržaja."
        >
          <CardGrid items={topics.slice(0, 6)} />
          <div className="mt-6">
            <ActionButton
              href={TOPICS_URL}
              icon={<ArrowUpRight className="size-4" />}
              primary
            >
              Pogledaj sve teme
            </ActionButton>
          </div>
        </Section>

        <Section
          title="Emisije i razgovori"
          intro="Redovito objavljujemo razgovore i prijenose uživo o Bitcoinu, novcu, društvu, poduzetništvu i dugoročnom razmišljanju. To je naš javni signal: sadržaj koji se može pronaći, dijeliti i pratiti kroz vrijeme."
        >
          <ActionButton
            href={LIVESTREAM_URL}
            icon={<ArrowUpRight className="size-4" />}
            primary
          >
            Otvori livestream stranicu
          </ActionButton>
        </Section>

        <Section
          title="Otvorena zajednica"
          intro="Twentyone koncept naglašava da se zajednice ne grade samo kroz sadržaj, nego i kroz otvoren prostor u kojem se ljudi mogu povezati. DvadesetJedan treba biti mjesto za pitanja, suradnju, prijevode, razgovore, nove ideje i projekte koji nastaju iz zajednice."
        >
          <BulletedPanel items={openCommunityItems} />
          <div className="mt-6">
            <ActionButton
              href={communityHref()}
              icon={<Send className="size-4" />}
              external
            >
              Uključite se
            </ActionButton>
            <ActionButton
              href={CONTRIBUTE_URL}
              icon={<ArrowUpRight className="size-4" />}
            >
              Doprinesi
            </ActionButton>
          </div>
        </Section>

        <Section
          title="Imaš pitanje?"
          intro="Pogledaj česta pitanja ili postavi pitanje u Telegram grupi."
        >
          <div className="flex flex-wrap gap-3">
            <ActionButton
              href={FAQ_URL}
              icon={<ArrowUpRight className="size-4" />}
              primary
            >
              Česta pitanja
            </ActionButton>
            <ActionButton
              href={communityHref()}
              icon={<Send className="size-4" />}
              external
            >
              Telegram
            </ActionButton>
          </div>
        </Section>

        <section className="mx-auto max-w-7xl px-5 pb-18 sm:px-8">
          <div className="rounded-[2.2rem] border border-border/80 bg-card px-6 py-8 sm:px-10 sm:py-10">
            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
              Počnite s boljim pitanjima o novcu.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
              Ako želite razumjeti Bitcoin bez buke, špekulacija i površnih
              objašnjenja, krenite od razgovora, uključite se u zajednicu i
              gradite vlastito razumijevanje korak po korak.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionButton
                href={LIVESTREAM_URL}
                icon={<PlayCircle className="size-4" />}
                primary
              >
                Pogledajte najnovije emisije
              </ActionButton>
              <ActionButton
                href={communityHref()}
                icon={<Send className="size-4" />}
                external
              >
                Uđi u Telegram grupu
              </ActionButton>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
