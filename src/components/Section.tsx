import type { ReactNode } from "react"

type SectionProps = {
  id?: string
  title: string
  intro?: string
  introTwo?: string
  children: ReactNode
}

export function Section({
  id,
  title,
  intro,
  introTwo,
  children,
}: SectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14" id={id}>
      <div className="max-w-4xl">
        <h2 className="text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
          {title}
        </h2>
        {intro ? (
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            {intro}
          </p>
        ) : null}
        {introTwo ? (
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            {introTwo}
          </p>
        ) : null}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  )
}
