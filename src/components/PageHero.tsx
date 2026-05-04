import type { ReactNode } from "react"

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string
  title: string
  intro: ReactNode
}) {
  return (
    <section className="rounded-[2.2rem] border border-border/80 bg-card/70 px-6 py-8 sm:px-10 sm:py-12">
      {eyebrow ? (
        <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="safe-heading mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-7xl">
        {title}
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
        {intro}
      </p>
    </section>
  )
}
