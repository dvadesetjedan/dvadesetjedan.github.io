import { ArrowUpRight } from "lucide-react"

import { ActionButton } from "@/components/ActionButton"

type ActionCardGridProps = {
  items: ReadonlyArray<{
    title: string
    text: string
    buttonLabel: string
    href: string
    external: boolean
  }>
}

export function ActionCardGrid({ items }: ActionCardGridProps) {
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
