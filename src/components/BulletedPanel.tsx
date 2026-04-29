import { ShieldCheck } from "lucide-react"

export function BulletedPanel({ items }: { items: ReadonlyArray<string> }) {
  return (
    <div className="rounded-[1.6rem] border border-border/80 bg-card px-6 py-6">
      <ul className="grid gap-3 text-base leading-8 text-muted-foreground md:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <ShieldCheck className="mt-1 size-4 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
