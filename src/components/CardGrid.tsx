type CardGridProps = {
  items: ReadonlyArray<{ title: string; text: string }>
}

export function CardGrid({ items }: CardGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-[1.5rem] border border-border/80 bg-card px-5 py-6"
        >
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  )
}
