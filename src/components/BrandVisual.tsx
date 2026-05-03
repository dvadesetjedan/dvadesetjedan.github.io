import { clsx } from "clsx"

type BrandVisualProps = {
  className?: string
  compact?: boolean
}

export function BrandVisual({ className, compact = false }: BrandVisualProps) {
  return (
    <div
      aria-label="DvadesetJedan Bitcoin vizual"
      className={clsx(
        "relative isolate overflow-hidden bg-[radial-gradient(circle_at_78%_24%,rgba(247,147,26,0.24),transparent_34%),linear-gradient(135deg,#fffaf4_0%,#f2e2cc_100%)]",
        compact ? "min-h-80" : "min-h-[24rem] lg:min-h-[34rem]",
        className,
      )}
      role="img"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,24,17,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(30,24,17,0.07)_1px,transparent_1px)] bg-[size:42px_42px] opacity-40" />
      <div className="absolute -right-16 -top-12 size-56 rounded-full border border-primary/30 bg-primary/15 sm:size-72" />
      <div className="absolute -bottom-24 -left-16 size-72 rounded-full border border-foreground/10 bg-background/55" />

      <div className="absolute right-5 top-5 rounded-full border border-border/70 bg-background/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground shadow-[var(--shadow-soft)] sm:right-8 sm:top-8 sm:px-4 sm:tracking-[0.2em]">
        Bitcoin-only
      </div>

      <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full border border-border/70 bg-background/75 px-3 py-2 shadow-[var(--shadow-soft)] sm:left-8 sm:top-8 sm:px-4 sm:py-3">
        <img
          alt=""
          className="size-9 rounded-full"
          src="/favicon.png?v=bitcoin-official"
        />
        <span className="text-sm font-semibold text-foreground">
          DvadesetJedan
        </span>
      </div>

      <div className="absolute inset-x-5 bottom-5 rounded-[1.8rem] border border-border/70 bg-background/82 p-5 shadow-[var(--shadow-soft)] backdrop-blur-sm sm:inset-x-8 sm:bottom-8">
        <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
          Balkan / twentyone.world
        </p>
        <p className="mt-3 max-w-md text-3xl font-semibold leading-none tracking-[-0.04em] text-foreground sm:text-5xl">
          21 milijun. Lokalni jezik. Stalan signal.
        </p>
      </div>

      <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 rounded-[2rem] border border-primary/30 bg-primary px-8 py-7 text-7xl font-black leading-none tracking-[-0.08em] text-primary-foreground shadow-[var(--shadow-soft)] sm:block">
        21
      </div>
    </div>
  )
}
