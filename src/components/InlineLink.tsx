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
      className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {icon}
      {label}
    </a>
  )
}
