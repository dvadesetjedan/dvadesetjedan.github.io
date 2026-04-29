import type { ReactNode } from "react"

type BackLinkProps = {
  href: string
  children: ReactNode
}

export function BackLink({ href, children }: BackLinkProps) {
  return (
    <a
      className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      href={href}
    >
      <span aria-hidden="true">←</span>
      {children}
    </a>
  )
}
