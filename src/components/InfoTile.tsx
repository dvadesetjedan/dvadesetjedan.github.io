import type { ReactNode } from "react"

export function InfoTile({
  icon,
  label,
  value,
}: {
  icon: ReactNode
  label: string
  value: string
}) {
  return (
    <div className="rounded-[1.4rem] border border-border/80 bg-background/70 px-4 py-4">
      <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {icon}
        {label}
      </p>
      <p className="mt-3 text-sm leading-7 text-foreground">{value}</p>
    </div>
  )
}
