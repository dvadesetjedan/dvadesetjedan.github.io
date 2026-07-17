import { ArrowUpRight, CheckCircle2, Send } from "lucide-react"

import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { Layout } from "@/components/Layout"
import { Section } from "@/components/Section"
import { Badge } from "@/components/ui/badge"
import {
  communityProjectCategoryLabels,
  publishedCommunityProjects,
  type CommunityProject,
  type CommunityProjectCategory,
} from "@/data/communityProjects"
import { COMMUNITY_PROJECT_ISSUE_URL } from "@/data/site"
import { communityProjectHref } from "@/lib/content"
import { usePageMeta } from "@/lib/usePageMeta"

const categorySections: {
  title: string
  categories: CommunityProjectCategory[]
  includeSecondary?: boolean
}[] = [
  {
    title: "Edukacija i prijevodi",
    categories: ["education", "translation"],
    includeSecondary: true,
  },
  {
    title: "Video, audio i sadržaj",
    categories: ["video", "audio", "writing"],
    includeSecondary: true,
  },
  {
    title: "Događaji i susreti",
    categories: ["event"],
    includeSecondary: true,
  },
  {
    title: "Regionalne poveznice",
    categories: ["regional-community"],
    includeSecondary: true,
  },
]

const projectOrder = new Map(
  [
    "bitchamler",
    "bitcoin-diploma-na-nasem-jeziku",
    "lux-bitcoin-clanci-i-prijevodi",
    "croatianhodl",
  ].map((slug, index) => [slug, index]),
)

function sortProjects(projects: CommunityProject[]) {
  return [...projects].sort((left, right) => {
    const leftOrder = projectOrder.get(left.slug) ?? Number.MAX_SAFE_INTEGER
    const rightOrder = projectOrder.get(right.slug) ?? Number.MAX_SAFE_INTEGER

    return leftOrder - rightOrder
  })
}

function downloadName(link: CommunityProject["links"][number]) {
  if (link.type !== "pdf") return undefined

  return link.href.split("/").filter(Boolean).pop()
}

function belongsToCategory(
  project: CommunityProject,
  categories: CommunityProjectCategory[],
  includeSecondary = false,
) {
  return (
    categories.includes(project.category) ||
    (includeSecondary
      ? project.secondaryCategories?.some((category) =>
          categories.includes(category),
        )
      : false)
  )
}

function ProjectCard({ project }: { project: CommunityProject }) {
  const publicLinks = project.links
    .filter((link) => link.public)
    .filter((link) => link.href.startsWith("http") || link.href.startsWith("/"))
    .slice(0, 2)

  return (
    <article
      className={`flex h-full flex-col rounded-[1.6rem] border px-5 py-5 sm:px-6 ${
        project.status === "archive"
          ? "border-primary/20 bg-primary/8"
          : "border-border/80 bg-card"
      }`}
    >
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline">
          {communityProjectCategoryLabels[project.category]}
        </Badge>
        {project.status === "archive" ? (
          <Badge variant="outline">Arhiva</Badge>
        ) : null}
      </div>
      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
        {project.summary}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            className="rounded-full border border-border/80 bg-background px-3 py-1 text-xs text-muted-foreground"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <ActionButton
          href={communityProjectHref(project.slug)}
          icon={<ArrowUpRight className="size-4" />}
          primary
        >
          Pogledaj projekt
        </ActionButton>
        {publicLinks.map((link) => (
          <ActionButton
            download={downloadName(link)}
            external={link.href.startsWith("http")}
            href={link.href}
            icon={<ArrowUpRight className="size-4" />}
            key={link.label}
          >
            {link.label}
          </ActionButton>
        ))}
      </div>
    </article>
  )
}

function ProjectGrid({ projects }: { projects: CommunityProject[] }) {
  if (!projects.length) return null

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}

export function CommunityProjectsPage() {
  usePageMeta(
    "Iz zajednice | DvadesetJedan",
    "Projekti, prijevodi, događaji i edukacijske inicijative ljudi iz DvadesetJedan kruga.",
  )

  const featuredProjects = sortProjects(
    publishedCommunityProjects.filter(
      (project) => project.featured && project.status !== "archive",
    ),
  )
  const activeProjects = sortProjects(
    publishedCommunityProjects.filter((project) => project.status !== "archive"),
  )
  const archiveProjects = publishedCommunityProjects.filter(
    (project) => project.status === "archive",
  )
  const otherProjects = publishedCommunityProjects.filter(
    (project) =>
      project.status !== "archive" &&
      !categorySections.some((section) =>
        belongsToCategory(
          project,
          section.categories,
          section.includeSecondary,
        ),
      ),
  )

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href="/">Početna</BackLink>
        <section className="overflow-hidden rounded-[2.2rem] border border-border/80 bg-card/70 px-6 py-8 sm:px-10 sm:py-12">
          <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
            Iz zajednice
          </p>
          <h1 className="safe-heading mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
            Iz zajednice
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Projekti, prijevodi, događaji i edukacijske inicijative ljudi iz
            DvadesetJedan kruga.
          </p>
          <p className="mt-6 max-w-4xl text-base leading-8 text-foreground">
            DvadesetJedan nije samo livestream i Telegram grupa. Ljudi iz
            zajednice pokreću edukacijske materijale, lokalna druženja,
            prijevode, članke, video kanale i druge Bitcoin-only inicijative.
            Ovdje ih skupljamo na jednom mjestu.
          </p>
          <div className="mt-8 rounded-[1.5rem] border border-primary/20 bg-primary/8 px-5 py-5 sm:px-6">
            <p className="text-sm leading-7 text-foreground">
              Projekti navedeni na ovoj stranici nisu nužno službeni projekti
              DvadesetJedan zajednice. Svaki projekt vodi osoba ili tim naveden
              uz projekt. DvadesetJedan ih prikazuje zato što doprinose Bitcoin
              obrazovanju, lokalnoj zajednici ili otvorenom Bitcoin signalu.
            </p>
          </div>
        </section>

        <Section title="Izdvojeno iz zajednice">
          <ProjectGrid projects={featuredProjects} />
        </Section>

        {categorySections.map((section) => {
          const projects = activeProjects.filter((project) =>
            belongsToCategory(
              project,
              section.categories,
              section.includeSecondary,
            ),
          )

          return projects.length ? (
            <Section key={section.title} title={section.title}>
              <ProjectGrid projects={projects} />
            </Section>
          ) : null
        })}

        {archiveProjects.length ? (
          <Section
            id="arhiva-zajednice"
            title="Arhiva zajednice"
            intro="Dio rada zajednice nije vezan samo uz aktualne projekte. Neki sadržaji ostaju kao arhiva ranih razgovora, ideja i tema koje su oblikovale DvadesetJedan."
          >
            <ProjectGrid projects={archiveProjects} />
          </Section>
        ) : null}

        {otherProjects.length ? (
          <Section title="Ostale inicijative">
            <ProjectGrid projects={otherProjects} />
          </Section>
        ) : null}

        <Section
          id="predlozi-projekt"
          title="Kako dodati svoj projekt"
          intro="Ako radiš Bitcoin-only projekt, prijevod, edukaciju, meetup, video kanal, alat ili korisne upute, možeš predložiti unos. Cilj je prikazati koristan rad iz zajednice, ne napraviti oglasnik."
        >
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div className="rounded-[1.6rem] border border-border/80 bg-card px-6 py-6">
              <ul className="grid gap-3 text-base leading-8 text-muted-foreground">
                {[
                  "Projekt mora biti Bitcoin-only ili jasno relevantan za Bitcoin edukaciju.",
                  "Ne objavljujemo trading signale, tokene, leverage, affiliate-first projekte ni obećanja zarade.",
                  "Objavljujemo samo podatke koje autor ili tim žele javno prikazati.",
                ].map((item) => (
                  <li className="flex gap-3" key={item}>
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary-strong" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <ActionButton
                external
                href={COMMUNITY_PROJECT_ISSUE_URL}
                icon={<Send className="size-4" />}
                primary
              >
                Predloži projekt
              </ActionButton>
            </div>
          </div>
        </Section>
      </main>
    </Layout>
  )
}
