import { ArrowUpRight, Send } from "lucide-react"

import { ActionButton } from "@/components/ActionButton"
import { BackLink } from "@/components/BackLink"
import { Layout } from "@/components/Layout"
import { GITHUB_URL, contributionItems } from "@/data/site"
import { communityHref } from "@/lib/content"
import { usePageMeta } from "@/lib/usePageMeta"

export function ContributePage() {
  usePageMeta(
    "Doprinesi | DvadesetJedan",
    "Načini kako doprinijeti DvadesetJedan zajednici kroz članke, prijevode, događaje, kod i kvalitetne Bitcoin resurse.",
  )

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
        <BackLink href="/">Početna</BackLink>
        <section className="rounded-[2.2rem] border border-border/80 bg-card/70 px-6 py-8 sm:px-10 sm:py-12">
          <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
            Doprinesi
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
            Doprinesi DvadesetJedan
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            DvadesetJedan raste kroz doprinos zajednice. Možeš pomoći pisanjem
            članaka, prijevodima, organizacijom lokalnih druženja, prijavom
            grešaka, dizajnom, tehničkim poboljšanjima ili dijeljenjem
            kvalitetnih Bitcoin resursa.
          </p>
        </section>

        <section className="mt-10 rounded-[1.8rem] border border-border/80 bg-card px-6 py-6">
          <ul className="grid gap-3 text-base leading-8 text-muted-foreground md:grid-cols-2">
            {contributionItems.map((item) => (
              <li key={item} className="flex gap-3">
                <ArrowUpRight className="mt-1 size-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <ActionButton
              href={communityHref()}
              icon={<Send className="size-4" />}
              external
              primary
            >
              Javi se u Telegram grupi
            </ActionButton>
            <ActionButton href={GITHUB_URL} icon={<GitHubIcon />} external>
              Otvori GitHub repozitorij
            </ActionButton>
          </div>
        </section>

        <section className="mt-10 rounded-[1.8rem] border border-border/80 bg-card px-6 py-8 sm:px-10">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
            Pokreni lokalno druženje
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
            Ako u tvom gradu postoji nekoliko ljudi koji žele mirno razgovarati
            o Bitcoinu, to je dovoljno za početak. Javi se u Telegram grupi s
            gradom, okvirnim datumom i jednostavnom lokacijom.
          </p>
          <div className="mt-6">
            <ActionButton
              href={communityHref()}
              icon={<Send className="size-4" />}
              external
              primary
            >
              Predloži događaj
            </ActionButton>
          </div>
        </section>
      </main>
    </Layout>
  )
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .5A12 12 0 0 0 8.21 23.9c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.72.08-.72 1.2.09 1.83 1.2 1.83 1.2 1.07 1.8 2.8 1.28 3.48.98.11-.76.42-1.28.76-1.57-2.67-.3-5.48-1.31-5.48-5.85 0-1.29.47-2.34 1.24-3.16-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.2a11.6 11.6 0 0 1 6 0c2.28-1.52 3.29-1.2 3.29-1.2.67 1.65.25 2.88.13 3.18.78.82 1.24 1.87 1.24 3.16 0 4.55-2.82 5.54-5.5 5.84.43.36.82 1.08.82 2.18v3.23c0 .32.21.69.83.58A12 12 0 0 0 12 .5" />
    </svg>
  )
}
