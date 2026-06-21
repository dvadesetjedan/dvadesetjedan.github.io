import { ArrowUpRight, CheckCircle2, HeartHandshake } from "lucide-react"

import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { Layout } from "@/components/Layout"
import { Badge } from "@/components/ui/badge"
import type { CommunityProject } from "@/data/communityProjects"
import {
  communityProjectCategoryLabels,
  communityProjectRelationshipLabels,
  communityProjectStatusLabels,
} from "@/data/communityProjects"
import { COMMUNITY_PROJECTS_URL, LIVESTREAM_URL } from "@/data/site"
import { truncateText } from "@/lib/text"
import { usePageMeta } from "@/lib/usePageMeta"

const donationDisclaimer =
  "Donacije idu izravno autoru ili projektu. DvadesetJedan ne posreduje i ne jamči za korištenje sredstava."

const helpBySlug: Record<string, string[]> = {
  bitchamler: [
    "pogledaj i podijeli njihove videe",
    "podrži projekt preko Geysera",
    "doniraj putem Lightninga",
    "prati ih na Nostr-u i Instagramu",
  ],
  croatianhodl: [
    "pogledaj edukativne videe",
    "podijeli kanal s ljudima kojima bi mogao pomoći",
    "predloži temu za budući video",
    "Marin može poslati dodatne linkove ili opis za objavu",
  ],
  "lux-bitcoin-clanci-i-prijevodi": [
    "otvori Luxov Substack",
    "podijeli korisne tekstove s ljudima kojima bi mogli pomoći",
    "Lux može poslati dodatne linkove, opis ili istaknute tekstove za objavu",
  ],
  "villa-btc": [
    "otvori službenu Villa BTC stranicu",
    "pogledaj DvadesetJedan event page",
    "podijeli događaj s bitcoinerima kojima bi mogao biti koristan",
  ],
  "bitcoin-drustvo-slovenije": [
    "otvori službenu stranicu",
    "koristi unos kao regionalnu poveznicu, ne kao službenu preporuku",
  ],
  "bitcoin-filozofija-2022": [
    "pogledaj playlistu ako te zanima filozofski sloj Bitcoina",
    "koristi epizode kao ulaz u teme poput slobode, odgovornosti, privatnosti, energije i duga",
    "podijeli serijal s ljudima kojima više odgovaraju dugi razgovori nego kratki uvodi",
    "predloži u zajednici koje bi teme vrijedilo ponovno otvoriti u novim livestreamovima",
  ],
}

function relationshipNote(project: CommunityProject) {
  if (project.slug === "bitcoin-filozofija-2022") {
    return "Ovo je arhivski doprinos člana zajednice kroz DvadesetJedan kanal."
  }

  return "Ovo nije službeni projekt DvadesetJedan zajednice."
}

function isNavigableHref(href: string) {
  return href.startsWith("http") || href.startsWith("/")
}

function LinkList({
  title,
  links,
}: {
  title: string
  links: CommunityProject["links"]
}) {
  if (!links.length) return null

  return (
    <section className="rounded-[1.6rem] border border-border/80 bg-card px-6 py-6">
      <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
        {title}
      </h2>
      <div className="mt-5 grid gap-3">
        {links.map((link) =>
          isNavigableHref(link.href) ? (
            <ActionButton
              external={link.href.startsWith("http")}
              href={link.href}
              icon={<ArrowUpRight className="size-4" />}
              key={`${link.label}-${link.href}`}
            >
              {link.label}
            </ActionButton>
          ) : (
            <div
              className="rounded-[1rem] border border-border/80 bg-background px-4 py-3 text-sm leading-7 text-muted-foreground"
              key={`${link.label}-${link.href}`}
            >
              <span className="font-medium text-foreground">{link.label}:</span>{" "}
              <span className="break-all">{link.href}</span>
            </div>
          ),
        )}
      </div>
    </section>
  )
}

export function CommunityProjectPage({
  project,
}: {
  project: CommunityProject
}) {
  usePageMeta(`${project.title} | DvadesetJedan`, truncateText(project.summary))

  const publicLinks = project.links.filter((link) => link.public)
  const donationLinks = publicLinks.filter((link) => link.type === "donation")
  const regularLinks = publicLinks.filter((link) => link.type !== "donation")
  const helpItems = helpBySlug[project.slug] ?? [
    "otvori javne linkove projekta",
    "podijeli projekt s ljudima kojima bi mogao biti koristan",
    "pošalji dodatne javne informacije za objavu",
  ]

  return (
    <Layout>
      <main className="mx-auto max-w-5xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href={COMMUNITY_PROJECTS_URL}>Iz zajednice</BackLink>

        <article className="overflow-hidden rounded-[2.2rem] border border-border/80 bg-card/75 px-6 py-8 sm:px-10 sm:py-12">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">
              {communityProjectCategoryLabels[project.category]}
            </Badge>
            <Badge variant="outline">
              {communityProjectStatusLabels[project.status]}
            </Badge>
            <Badge variant="outline">
              {communityProjectRelationshipLabels[project.relationship]}
            </Badge>
          </div>

          <h1 className="safe-heading mt-5 text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                className="rounded-full border border-border/80 bg-background px-3 py-1 text-xs text-muted-foreground"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 space-y-5 text-base leading-8 text-foreground">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-8 rounded-[1.4rem] border border-primary/20 bg-primary/8 px-5 py-4 text-sm leading-7 text-foreground">
            {relationshipNote(project)}
          </p>

          {project.needsDetails ? (
            <p className="mt-4 rounded-[1.4rem] border border-border/80 bg-background/70 px-5 py-4 text-sm leading-7 text-muted-foreground">
              Ovaj unos je početna verzija. Projekt može poslati dodatni opis,
              linkove ili materijale za objavu.
            </p>
          ) : null}
        </article>

        <section className="mt-10 rounded-[1.8rem] border border-border/80 bg-card px-6 py-8 sm:px-10">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
            Kako možeš pomoći
          </h2>
          <ul className="mt-6 grid gap-3 text-base leading-8 text-muted-foreground md:grid-cols-2">
            {helpItems.map((item) => (
              <li className="flex gap-3" key={item}>
                <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {project.topics?.length ? (
          <section className="mt-10 rounded-[1.8rem] border border-border/80 bg-card px-6 py-8 sm:px-10">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
              Teme iz serijala
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.topics.map((topic) => (
                <span
                  className="rounded-full border border-border/80 bg-background px-3 py-1 text-sm text-muted-foreground"
                  key={topic}
                >
                  {topic}
                </span>
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <LinkList links={regularLinks} title="Linkovi projekta" />
          <LinkList links={donationLinks} title="Podrži projekt" />
        </div>

        {donationLinks.length ? (
          <section className="mt-5 rounded-[1.6rem] border border-primary/20 bg-primary/8 px-6 py-5">
            <div className="flex gap-3">
              <HeartHandshake className="mt-1 size-5 shrink-0 text-primary" />
              <div className="space-y-3 text-sm leading-7 text-foreground">
                {project.donationNote ? <p>{project.donationNote}</p> : null}
                <p>{donationDisclaimer}</p>
              </div>
            </div>
          </section>
        ) : null}

        <div className="mt-10 flex flex-wrap gap-3">
          <ActionButton
            href={COMMUNITY_PROJECTS_URL}
            icon={<ArrowUpRight className="size-4" />}
            primary
          >
            Natrag na Iz zajednice
          </ActionButton>
          {project.status === "archive" ? (
            <ActionButton
              href={LIVESTREAM_URL}
              icon={<ArrowUpRight className="size-4" />}
            >
              Otvori livestream arhivu
            </ActionButton>
          ) : null}
        </div>
      </main>
    </Layout>
  )
}
