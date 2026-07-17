import type { ReactNode } from "react"

export function InlineLink({
  href,
  icon,
  label,
  external = false,
}: {
  href: string
  icon: ReactNode
  label: string
  external?: boolean
}) {
  return (
    <a
      className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground hover:text-primary-strong"
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {icon}
      {label}
    </a>
  )
}
