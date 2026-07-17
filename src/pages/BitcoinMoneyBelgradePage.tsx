import {
  ArrowUpRight,
  CalendarDays,
  GraduationCap,
  Handshake,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react"

import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { Layout } from "@/components/Layout"
import { Section } from "@/components/Section"
import {
  BITCOIN_MONEY_BELGRADE_HERO_IMAGE,
  BITCOIN_MONEY_BELGRADE_HERO_WEBP,
  bitcoinMoneyBelgradeLinks,
  pilotAudience,
  pilotBudgetItems,
  pilotFaq,
  pilotNotItems,
  pilotPartners,
  pilotPrinciples,
  pilotProgram,
  pilotSponsorshipOptions,
  pilotTopics,
} from "@/data/bitcoinMoneyBelgrade"
import { usePageMeta } from "@/lib/usePageMeta"

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2 text-sm leading-7 text-foreground">
      {items.map((item) => (
        <li className="flex gap-3" key={item}>
          <span className="mt-3 size-2 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function NumberedCard({
  title,
  text,
  index,
}: {
  title: string
  text: string
  index: number
}) {
  return (
    <article className="rounded-[1.5rem] border border-border/80 bg-card px-5 py-6 shadow-[var(--shadow-border)] sm:px-6">
      <span className="inline-flex size-8 items-center justify-center rounded-full bg-primary/12 text-sm font-semibold text-primary-strong">
        {index + 1}
      </span>
      <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-foreground">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
    </article>
  )
}

function TopicCard({
  title,
  text,
  image,
  imageAlt,
}: {
  title: string
  text: string
  image: string
  imageAlt: string
}) {
  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-border/80 bg-card shadow-[var(--shadow-border)]">
      <div className="aspect-video w-full overflow-hidden bg-background">
        <img
          alt={imageAlt}
          className="h-full w-full object-cover"
          decoding="async"
          height={941}
          loading="lazy"
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          src={image}
          srcSet={`${image.replace(/\.webp$/, "-480.webp")} 480w, ${image.replace(/\.webp$/, "-960.webp")} 960w`}
          width={1672}
        />
      </div>
      <div className="px-5 py-6">
        <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
      </div>
    </article>
  )
}

export function BitcoinMoneyBelgradePage() {
  usePageMeta(
    "Bitcoin kao novac: Beograd 2026 | DvadesetJedan",
    "Pilot edukacijski dan u Beogradu: jedno fakultetsko predavanje i jedan otvoreni meetup o Bitcoinu kao novcu, tehnologiji, štednji i osobnoj odgovornosti.",
    {
      ogTitle: "Bitcoin kao novac: Beograd 2026",
      ogDescription:
        "DvadesetJedan pokreće pilot edukacijski dan u Beogradu: Bitcoin kao novac, jedno fakultetsko predavanje i jedan otvoreni meetup.",
      image: BITCOIN_MONEY_BELGRADE_HERO_IMAGE,
    },
  )

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href="/dogadaji/">Događaji</BackLink>

        <section className="overflow-hidden rounded-[2.2rem] border border-border/80 bg-card/70 shadow-[var(--shadow-border)]">
          <div className="relative min-h-[42rem] w-full overflow-hidden bg-[#070707] sm:min-h-[38rem] lg:aspect-[16/9] lg:min-h-0">
            <picture>
              <source
                srcSet={BITCOIN_MONEY_BELGRADE_HERO_WEBP}
                type="image/webp"
              />
              <img
                alt="Predavanje o Bitcoinu u modernoj univerzitetskoj dvorani s pogledom na Beograd"
                className="absolute inset-0 h-full w-full object-cover"
                fetchPriority="high"
                height={941}
                src={BITCOIN_MONEY_BELGRADE_HERO_IMAGE}
                width={1672}
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/5" />
            <div className="absolute inset-x-0 bottom-0 px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
              <h1 className="safe-heading max-w-5xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-7xl">
                Bitcoin kao novac: Beograd 2026
              </h1>
              <p className="mt-6 max-w-4xl text-xl leading-9 text-white">
                Pilot edukacijski dan za studente, profesore, developere,
                poduzetnike i Bitcoin zajednicu.
              </p>
              <p className="mt-5 max-w-4xl text-base leading-8 text-white/82">
                Na jesen 2026. želimo u Beogradu napraviti jednostavan i
                ozbiljan pilot: jedno predavanje na fakultetu i jedan otvoreni
                večernji meetup. Tema je Bitcoin kao novac, tehnologija i okvir
                za osobnu financijsku odgovornost - bez trading hypea, bez
                altcoina i bez prodaje proizvoda.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ActionButton
                  href={bitcoinMoneyBelgradeLinks.host}
                  icon={<GraduationCap className="size-4" />}
                  primary
                >
                  Želim ugostiti predavanje
                </ActionButton>
                <ActionButton
                  className="bg-white/92 text-black hover:bg-white"
                  href={bitcoinMoneyBelgradeLinks.support}
                  icon={<Handshake className="size-4" />}
                >
                  Želim podržati event
                </ActionButton>
                <ActionButton
                  className="bg-white/92 text-black hover:bg-white"
                  href={bitcoinMoneyBelgradeLinks.interest}
                  icon={<Mail className="size-4" />}
                >
                  Prijavi interes
                </ActionButton>
              </div>
            </div>
          </div>
        </section>

        <Section
          title="Krećemo malim, ozbiljnim pilotom"
          intro="Ne počinjemo velikom konferencijom, skupim kongresnim prostorom ni kompliciranim programom. Prvi korak je provjeriti postoji li stvaran interes među studentima, profesorima, developerima, poduzetnicima i lokalnom Bitcoin zajednicom u Beogradu."
          introTwo="Zato za jesen 2026. planiramo jednostavan format: jedno fakultetsko predavanje tijekom dana i jedan otvoreni meetup navečer."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {pilotPrinciples.map((item, index) => (
              <NumberedCard index={index} key={item.title} {...item} />
            ))}
          </div>
        </Section>

        <Section title="Predloženi program">
          <div className="grid gap-5 lg:grid-cols-2">
            {pilotProgram.map((block) => (
              <article
                className="rounded-[1.6rem] border border-border/80 bg-card px-6 py-6 shadow-[var(--shadow-border)]"
                key={block.time}
              >
                <p className="inline-flex items-center gap-2 text-sm font-medium text-primary-strong">
                  <CalendarDays className="size-4" />
                  {block.time}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  {block.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {block.text}
                </p>
                <div className="mt-5">
                  <BulletList items={block.format} />
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section title="O čemu ćemo govoriti">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {pilotTopics.map((item) => (
              <TopicCard key={item.title} {...item} />
            ))}
          </div>
        </Section>

        <Section
          title="Za koga je ovo?"
          intro="Event je za ljude koji žele ozbiljno razumjeti Bitcoin, bez obzira na to jesu li ga već kupili ili ga tek prvi put žele razumjeti."
        >
          <div className="rounded-[1.8rem] border border-border/80 bg-card px-6 py-6 sm:px-10">
            <BulletList items={pilotAudience} />
          </div>
        </Section>

        <section className="mt-10 rounded-[1.8rem] border border-primary/25 bg-primary/8 px-6 py-8 sm:px-10">
          <div className="flex gap-4">
            <ShieldCheck className="mt-1 size-6 shrink-0 text-primary-strong" />
            <div>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
                Što ovo nije
              </h2>
              <div className="mt-6">
                <BulletList items={pilotNotItems} />
              </div>
              <p className="mt-6 max-w-3xl text-base leading-8 text-foreground">
                Ovo je obrazovni pilot o Bitcoinu kao novcu, tehnologiji,
                štednji i osobnoj odgovornosti.
              </p>
            </div>
          </div>
        </section>

        <Section
          title="Tražimo lokalne partnere u Beogradu"
          intro="Za pilot tražimo jedan fakultetski ili studentski domaćin za dnevno predavanje i jedan lokalni prostor ili community partner za večernji meetup."
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
            <div className="rounded-[1.8rem] border border-border/80 bg-card px-6 py-6 sm:px-10">
              <p className="mb-5 inline-flex items-center gap-2 text-base font-medium text-foreground">
                <MapPin className="size-4 text-primary-strong" />
                Idealni partneri
              </p>
              <BulletList items={pilotPartners} />
            </div>
            <ActionButton
              href={bitcoinMoneyBelgradeLinks.organize}
              icon={<Mail className="size-4" />}
              primary
            >
              Mogu pomoći oko organizacije
            </ActionButton>
          </div>
        </Section>

        <Section
          title="Podržite pilot event"
          intro="Za prvi pilot ne tražimo veliki konferencijski budžet. Cilj je pokriti osnovne troškove organizacije, puta, smještaja, prostora za meetup, snimanja, fotografije, promocije i jednostavnog druženja nakon programa."
          introTwo="Sponzorstvo ne daje pravo na oblikovanje sadržaja, promociju tokena, trading ponuda, airdropova ili prodajnih kampanja. Sadržaj ostaje Bitcoin-first, obrazovan i neprodajan."
        >
          <div className="rounded-[1.8rem] border border-primary/20 bg-primary/8 px-6 py-6 sm:px-10">
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
              Okvirni budžet pilota: 3.000-7.000 €
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {pilotBudgetItems.map((item) => (
                <div
                  className="rounded-[1.1rem] border border-border/70 bg-background/70 px-4 py-3 text-sm leading-7 text-foreground sm:px-6"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {pilotSponsorshipOptions.map((tier) => (
              <article
                className="rounded-[1.5rem] border border-border/80 bg-card px-5 py-6 shadow-[var(--shadow-border)] sm:px-6"
                key={tier.title}
              >
                <p className="text-sm font-medium text-primary-strong">
                  {tier.price}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  {tier.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {tier.text}
                </p>
                <div className="mt-5">
                  <BulletList items={tier.includes} />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-7">
            <ActionButton
              href={bitcoinMoneyBelgradeLinks.support}
              icon={<Handshake className="size-4" />}
              primary
            >
              Želim podržati event
            </ActionButton>
          </div>
        </Section>

        <Section
          title="Što nakon pilota?"
          intro="Ako se pokaže da postoji stvaran interes, ovaj pilot može postati veći univerzitetski serijal 2027. Tada možemo uključiti više fakulteta, više tema, više lokalnih partnera i veći završni događaj."
          introTwo="Za 2026. cilj je jednostavan: napraviti prvi korak dobro."
        >
          <div className="rounded-[1.8rem] border border-border/80 bg-card px-6 py-6 sm:px-10">
            <p className="max-w-3xl text-base leading-8 text-muted-foreground">
              Jedan dobar pilot vrijedi više od velikog programa koji nije
              provjeren na terenu.
            </p>
          </div>
        </Section>

        <Section title="Česta pitanja">
          <div className="grid gap-4">
            {pilotFaq.map((item) => (
              <article
                className="rounded-[1.5rem] border border-border/80 bg-card px-5 py-5 sm:px-6"
                key={item.question}
              >
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <section className="mt-10 rounded-[2rem] border border-border/80 bg-card px-6 py-8 shadow-[var(--shadow-border)] sm:px-10">
          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
            Pomozite nam napraviti prvi ozbiljan Bitcoin edukacijski dan u
            Beogradu.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
            Ako možete ugostiti predavanje, pomoći oko organizacije, podržati
            pilot ili samo želite doći na događaj, javite nam se.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ActionButton
              href={bitcoinMoneyBelgradeLinks.host}
              icon={<GraduationCap className="size-4" />}
              primary
            >
              Ugosti predavanje
            </ActionButton>
            <ActionButton
              href={bitcoinMoneyBelgradeLinks.support}
              icon={<Handshake className="size-4" />}
            >
              Podrži event
            </ActionButton>
            <ActionButton
              href={bitcoinMoneyBelgradeLinks.interest}
              icon={<ArrowUpRight className="size-4" />}
            >
              Prijavi interes
            </ActionButton>
          </div>
        </section>
      </main>
    </Layout>
  )
}
