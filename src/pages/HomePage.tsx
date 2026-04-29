import type { ReactNode } from "react"

import { ArrowUpRight, PlayCircle, Send, ShieldCheck } from "lucide-react"

import { ActionButton } from "@/components/ActionButton"
import { EventsIcon, TelegramIcon } from "@/components/Icons"
import { Layout } from "@/components/Layout"
import { Section } from "@/components/Section"
import {
  ARTICLES_URL,
  BEGINNERS_URL,
  EVENTS_URL,
  LIVESTREAM_URL,
  aboutCards,
  audienceItems,
  beginnerHighlights,
  beginnerTopics,
  conceptCards,
  faqItems,
  heroContent,
  involvementCards,
  media,
  notItems,
  openCommunityItems,
  principles,
  startSteps,
  topics,
  trustItems,
} from "@/data/site"
import { communityHref } from "@/lib/content"

export function HomePage() {
  return (
    <Layout>
      <main>
        <section className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-18">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_26rem] lg:items-center">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
                DvadesetJedan / Balkan / TwentyOne.World
              </p>
              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-foreground sm:text-7xl">
                {heroContent.title}
              </h1>
              <p className="mt-5 max-w-3xl text-xl leading-8 text-foreground/90">
                {heroContent.subtitle}
              </p>
              <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                {heroContent.body}
              </p>
              <p className="mt-6 max-w-3xl rounded-[1.4rem] border border-primary/20 bg-primary/8 px-5 py-4 text-sm leading-7 text-foreground">
                {heroContent.highlight}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ActionButton
                  href={communityHref()}
                  icon={<Send className="size-4" />}
                  external
                  primary
                >
                  Uđi u Telegram grupu
                </ActionButton>
                <ActionButton
                  href={LIVESTREAM_URL}
                  icon={<PlayCircle className="size-4" />}
                >
                  Prati livestream
                </ActionButton>
                <ActionButton
                  href={ARTICLES_URL}
                  icon={<ArrowUpRight className="size-4" />}
                >
                  Čitaj članke
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
                className="h-full min-h-[24rem] w-full object-cover"
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
          id="o-projektu"
          title="Dio otvorenog twentyone koncepta"
          intro="TwentyOne.World nastao je kao otvoreni nacrt za lokalne Bitcoin zajednice: stvoriti javan digitalni signal, govoriti lokalnim jezikom, okupiti otvorenu skupinu ljudi i ostati dosljedan. DvadesetJedan je regionalni izraz te ideje za ljude koji govore i razumiju srodne jezike našeg prostora."
        >
          <CardGrid items={conceptCards} />
          <div className="mt-6">
            <ActionButton
              href={media.twentyOneUrl}
              icon={<ArrowUpRight className="size-4" />}
              external
            >
              Pogledaj TwentyOne.World
            </ActionButton>
          </div>
        </Section>

        <Section
          title="Zašto DvadesetJedan postoji?"
          intro="Većina ljudi prvi put čuje za Bitcoin kroz cijenu, medijske naslove, cikluse rasta i pada ili površne rasprave o kriptovalutama. Takav ulaz često stvara više buke nego razumijevanja."
          introTwo="DvadesetJedan postoji kako bi se Bitcoin promatrao mirnije i dublje: kroz pitanje što je novac, zašto je štednja važna, kako inflacija mijenja društvo, zašto je osobna odgovornost važna i kako se dugoročno razmišljanje razlikuje od kratkoročne špekulacije."
        >
          <div className="rounded-[1.6rem] border border-border/80 bg-card px-6 py-6">
            <p className="text-lg leading-8 text-foreground">
              Problem nije samo u tome da ljudi ne znaju dovoljno o Bitcoinu.
              Problem je u tome što o novcu često nikada nisu imali priliku
              razmišljati iz prvih načela.
            </p>
          </div>
        </Section>

        <Section title="Što je DvadesetJedan?">
          <CardGrid items={aboutCards} />
        </Section>

        <Section
          title="Za koga je DvadesetJedan?"
          intro="DvadesetJedan je namijenjen ljudima iz regije koji žele ozbiljnije razumjeti Bitcoin, bez potrebe da odmah prihvate gotove zaključke ili sudjeluju u buci tržišta."
        >
          <BulletedPanel items={audienceItems} />
        </Section>

        <Section
          title="Što DvadesetJedan nije?"
          intro="Jasne granice su važne jer se Bitcoin često miješa s potpuno drukčijim pojavama. DvadesetJedan nije prostor za kratkoročnu špekulaciju, trgovanje ni obećanja prinosa."
        >
          <BulletedPanel items={notItems} />
          <p className="mt-6 text-base leading-8 text-foreground">
            Cilj nije reći ljudima što da misle, nego pomoći im da bolje
            razumiju Bitcoin.
          </p>
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

        <Section id="teme" title="Teme koje obrađujemo">
          <CardGrid items={topics} />
        </Section>

        <Section
          id="emisije"
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
          id="ukljucite-se"
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
          </div>
        </Section>

        <Section title="Kako krenuti?">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {startSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[1.5rem] border border-border/80 bg-card px-5 py-6"
              >
                <p className="text-sm text-muted-foreground">
                  Korak {index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Načela DvadesetJedan">
          <CardGrid items={principles} />
        </Section>

        <Section id="pitanja" title="Česta pitanja">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-[1.5rem] border border-border/80 bg-card px-5 py-5"
              >
                <summary className="cursor-pointer list-none text-lg font-medium text-foreground">
                  {item.question}
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            ))}
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

function CardGrid({
  items,
}: {
  items: ReadonlyArray<{ title: string; text: string }>
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-[1.5rem] border border-border/80 bg-card px-5 py-6"
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
  )
}

function ActionCardGrid({
  items,
}: {
  items: ReadonlyArray<{
    title: string
    text: string
    buttonLabel: string
    href: string
    external: boolean
  }>
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-[1.6rem] border border-border/80 bg-card px-5 py-6"
        >
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {item.text}
          </p>
          <div className="mt-5">
            <ActionButton
              href={item.href}
              icon={<ArrowUpRight className="size-4" />}
              external={item.external}
              primary
            >
              {item.buttonLabel}
            </ActionButton>
          </div>
        </div>
      ))}
    </div>
  )
}

function BulletedPanel({ items }: { items: ReadonlyArray<string> }) {
  return (
    <div className="rounded-[1.6rem] border border-border/80 bg-card px-6 py-6">
      <ul className="grid gap-3 text-base leading-8 text-muted-foreground md:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <ShieldCheck className="mt-1 size-4 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function InlineLink({
  href,
  icon,
  label,
  external = false,
}: {
  href: string
  icon: ReactNode
  label: string
  external?: boolean
}) {
  return (
    <a
      className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {icon}
      {label}
    </a>
  )
}
