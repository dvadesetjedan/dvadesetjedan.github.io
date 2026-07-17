import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Handshake,
  Mail,
  ShieldCheck,
} from "lucide-react"

import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { Layout } from "@/components/Layout"
import { Section } from "@/components/Section"
import {
  sponsorshipPackages,
  universityProgramAudience,
  universityProgramFaq,
  universityProgramFormats,
  universityProgramHosts,
  universityProgramLinks,
  universityProgramNotItems,
  universityProgramTopics,
} from "@/data/universityProgram"
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

function ProgramCard({
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

export function BitcoinUniversitiesBelgradePage() {
  usePageMeta(
    "Bitcoin na univerzitetima: Beograd 2026 | DvadesetJedan",
    "Serija predavanja i radionica za studente u Beogradu o Bitcoinu kao novcu, tehnologiji, štednji, sigurnosti i osobnoj financijskoj odgovornosti.",
    {
      ogTitle: "Bitcoin na univerzitetima: Beograd 2026",
      ogDescription:
        "Obrazovni serijal DvadesetJedan za studente u Beogradu: Bitcoin kao novac, tehnologija, štednja i sigurnost — bez trading hypea i bez altcoina.",
    },
  )

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href="/dogadaji/">Događaji</BackLink>

        <section className="grid gap-8 overflow-hidden rounded-[2.2rem] border border-border/80 bg-card/70 px-6 py-8 shadow-[var(--shadow-border)] sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_26rem] lg:items-center">
          <div>
            <h1 className="safe-heading max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
              Bitcoin na univerzitetima: Beograd 2026
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-foreground">
              Serija predavanja i radionica za studente o Bitcoinu kao novcu,
              tehnologiji, štednji i osobnoj financijskoj odgovornosti.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
              Na jesen 2026., nakon početka nove akademske godine, DvadesetJedan
              pokreće obrazovni serijal u Beogradu. Cilj je studentima dati
              ozbiljan, jasan i praktičan okvir za razumijevanje Bitcoina — bez
              trading hypea, bez altcoina i bez prodaje proizvoda.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionButton
                href={universityProgramLinks.support}
                icon={<Handshake className="size-4" />}
                primary
              >
                Želim podržati serijal
              </ActionButton>
              <ActionButton
                href={universityProgramLinks.host}
                icon={<GraduationCap className="size-4" />}
              >
                Želim ugostiti predavanje
              </ActionButton>
              <ActionButton
                href={universityProgramLinks.interest}
                icon={<Mail className="size-4" />}
              >
                Prijavi interes
              </ActionButton>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/3] w-full max-w-[26rem] overflow-hidden rounded-[2rem] border border-primary/25 bg-[#070707] shadow-soft lg:aspect-[4/5]">
            <picture>
              <source
                srcSet="/images/sava-centar-lighting.webp"
                type="image/webp"
              />
              <img
                alt="Detalj rasvjete u Sava Centru u Beogradu"
                className="h-full w-full object-cover"
                decoding="async"
                height={848}
                loading="lazy"
                src="/images/sava-centar-lighting.jpg"
                width={1280}
              />
            </picture>
            <a
              className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-[0.68rem] font-medium leading-5 text-white/85 backdrop-blur transition-colors hover:text-white"
              href="https://commons.wikimedia.org/wiki/File:Sava_Centar_lighting.jpg"
              rel="noopener noreferrer"
              target="_blank"
            >
              Foto: Wikimedia Commons, CC BY-SA 4.0
            </a>
          </div>
        </section>

        <Section
          title="Zašto univerziteti?"
          intro="Studenti ekonomije, elektrotehnike, organizacijskih znanosti, računalstva i financija već danas čuju za Bitcoin, ali najčešće kroz buku tržišta, cijene, burzi, tokena i kratkoročnih spekulacija."
          introTwo="Ovaj serijal želi otvoriti drukčiji razgovor: što je novac, zašto je štednja važna, kako radi decentralizirana monetarna mreža, što znači osobna odgovornost u digitalnom dobu i zašto je sigurnost jednako važna kao i kupnja Bitcoina."
        >
          <div className="rounded-[1.8rem] border border-primary/20 bg-primary/8 px-6 py-6 sm:px-10">
            <div className="flex gap-4">
              <BookOpen className="mt-1 size-6 shrink-0 text-primary-strong" />
              <p className="max-w-3xl text-base leading-8 text-foreground">
                Bitcoin kao novac, tehnologija, štednja, sigurnost i osobne
                financije — obrazovni program za studente.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Format serijala">
          <div className="grid gap-5 md:grid-cols-2">
            {universityProgramFormats.map((item, index) => (
              <ProgramCard index={index} key={item.title} {...item} />
            ))}
          </div>
        </Section>

        <Section title="Teme koje želimo otvoriti">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {universityProgramTopics.map((item, index) => (
              <ProgramCard index={index} key={item.title} {...item} />
            ))}
          </div>
        </Section>

        <Section
          title="Za koga je ovo?"
          intro="Serijal je namijenjen studentima i mladim profesionalcima koji žele ozbiljno razumjeti Bitcoin, bez obzira na to jesu li ga već kupili ili tek prvi put žele razumjeti o čemu se radi."
        >
          <div className="rounded-[1.8rem] border border-border/80 bg-card px-6 py-6 sm:px-10">
            <p className="mb-5 text-base leading-8 text-muted-foreground">
              Posebno je relevantan za:
            </p>
            <BulletList items={universityProgramAudience} />
          </div>
        </Section>

        <Section
          title="Tražimo akademske i organizacijske partnere"
          intro="Želimo surađivati s fakultetima, studentskim organizacijama, laboratorijima, klubovima i lokalnim zajednicama koje žele ugostiti ozbiljno predavanje o Bitcoinu."
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
            <div className="rounded-[1.8rem] border border-border/80 bg-card px-6 py-6 sm:px-10">
              <p className="mb-5 text-base leading-8 text-muted-foreground">
                Idealni domaćini:
              </p>
              <BulletList items={universityProgramHosts} />
            </div>
            <ActionButton
              href={universityProgramLinks.host}
              icon={<GraduationCap className="size-4" />}
              primary
            >
              Želim ugostiti predavanje
            </ActionButton>
          </div>
        </Section>

        <Section
          title="Podržite obrazovanje nove generacije"
          intro="Serijal traži partnere koji žele podržati ozbiljnu Bitcoin edukaciju za studente. Sponzorstvo ne daje pravo na oblikovanje sadržaja, promociju tokena, trading ponuda ili prodajnih kampanja. Sadržaj ostaje obrazovni, Bitcoin-first i usmjeren na razumijevanje novca, tehnologije i osobne odgovornosti."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {sponsorshipPackages.map((tier) => (
              <article
                className="rounded-[1.5rem] border border-border/80 bg-card px-5 py-6 shadow-[var(--shadow-border)] sm:px-6"
                key={tier.title}
              >
                <p className="text-sm font-medium text-primary-strong">{tier.price}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  {tier.title}
                </h3>
                <div className="mt-5">
                  <BulletList items={tier.benefits} />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-7">
            <ActionButton
              href={universityProgramLinks.support}
              icon={<Handshake className="size-4" />}
              primary
            >
              Želim podržati serijal
            </ActionButton>
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
                <BulletList items={universityProgramNotItems} />
              </div>
              <p className="mt-6 max-w-3xl text-base leading-8 text-foreground">
                Ovo je obrazovni serijal o Bitcoinu kao novcu, tehnologiji i
                osobnoj odgovornosti.
              </p>
            </div>
          </div>
        </section>

        <Section
          title="Želite sudjelovati?"
          intro="Ako ste student, profesor, predstavnik studentske organizacije, potencijalni sponzor ili netko tko želi pomoći oko organizacije u Beogradu, javite nam se."
        >
          <div className="flex flex-wrap gap-3">
            <ActionButton
              href={universityProgramLinks.student}
              icon={<GraduationCap className="size-4" />}
              primary
            >
              Student sam
            </ActionButton>
            <ActionButton
              href={universityProgramLinks.organize}
              icon={<Mail className="size-4" />}
            >
              Mogu pomoći oko organizacije
            </ActionButton>
            <ActionButton
              href={universityProgramLinks.support}
              icon={<Handshake className="size-4" />}
            >
              Zanima me sponzorstvo
            </ActionButton>
          </div>
        </Section>

        <Section title="Česta pitanja">
          <div className="grid gap-4">
            {universityProgramFaq.map((item) => (
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
            Pomozite nam otvoriti ozbiljan Bitcoin razgovor na univerzitetima.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
            Ako želite ugostiti predavanje, podržati serijal ili pomoći oko
            organizacije u Beogradu, javite nam se.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ActionButton
              href={universityProgramLinks.organize}
              icon={<Mail className="size-4" />}
              primary
            >
              Kontakt za organizaciju
            </ActionButton>
            <ActionButton
              href={universityProgramLinks.support}
              icon={<ArrowUpRight className="size-4" />}
            >
              Kontakt za sponzorstvo
            </ActionButton>
          </div>
        </section>
      </main>
    </Layout>
  )
}
