import { ArrowUpRight, Send } from "lucide-react"

import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { Layout } from "@/components/Layout"
import { PageHero } from "@/components/PageHero"
import { CONTRIBUTE_URL } from "@/data/site"
import { resourceGroups } from "@/data/resources"
import { communityHref } from "@/lib/content"
import { usePageMeta } from "@/lib/usePageMeta"

export function ResourcesPage() {
  usePageMeta(
    "Resursi | DvadesetJedan",
    "Polazna mjesta za učenje o Bitcoinu, provjeru mreže i kvalitetne izvore bez crypto buke.",
  )

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href="/">Početna</BackLink>
        <PageHero
          eyebrow="Resursi"
          title="Resursi"
          intro="Polazna mjesta za ljude koji žele učiti o Bitcoinu, provjeravati mrežu i koristiti kvalitetne izvore bez crypto buke."
        />

        <div className="mt-10 space-y-10">
          {resourceGroups.map((group) => (
            <section key={group.title}>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
                {group.title}
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {group.items.map((item) => (
                  <a
                    key={item.title}
                    className="rounded-[1.5rem] border border-border/80 bg-card px-5 py-5 transition-colors hover:border-primary/40"
                    href={item.href}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    target={item.external ? "_blank" : undefined}
                  >
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.text}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                      Otvori <ArrowUpRight className="size-4" />
                    </span>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-[2rem] border border-border/80 bg-card px-6 py-8 sm:px-10">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
            Nedostaje koristan Bitcoin resurs?
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
            Predloži ga zajednici. Važno je da je resurs Bitcoin-only,
            kvalitetan i koristan ljudima koji žele učiti bez buke.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ActionButton
              href={communityHref()}
              icon={<Send className="size-4" />}
              external
              primary
            >
              Predloži u Telegramu
            </ActionButton>
            <ActionButton
              href={CONTRIBUTE_URL}
              icon={<ArrowUpRight className="size-4" />}
            >
              Doprinesi
            </ActionButton>
          </div>
        </section>
      </main>
    </Layout>
  )
}
