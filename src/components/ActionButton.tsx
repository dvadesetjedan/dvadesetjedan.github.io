import type { ReactNode } from "react"

type ActionButtonProps = {
  href: string
  icon: ReactNode
  children: ReactNode
  external?: boolean
  primary?: boolean
  className?: string
}

export function ActionButton({
  href,
  icon,
  children,
  external = false,
  primary = false,
  className = "",
}: ActionButtonProps) {
  return (
    <a
      className={`inline-flex w-fit max-w-full min-w-0 items-center justify-center justify-self-start gap-2 rounded-full py-3 pl-[1.125rem] pr-5 text-sm font-medium leading-snug shadow-[var(--shadow-border)] transition-[translate,scale,box-shadow,background-color,color] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 ${
        primary
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "bg-card text-foreground hover:bg-background"
      } ${className}`.trim()}
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      <span className="shrink-0">{icon}</span>
      <span className="min-w-0 [overflow-wrap:anywhere]">{children}</span>
    </a>
  )
}
