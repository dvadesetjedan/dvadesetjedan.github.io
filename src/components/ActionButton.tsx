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
      className={`inline-flex w-fit max-w-full min-w-0 items-center justify-center justify-self-start gap-2 rounded-full px-5 py-3 text-sm font-medium leading-snug transition-colors ${
        primary
          ? "bg-primary text-white"
          : "border border-border/80 bg-card text-foreground"
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
