import { navigation, media } from "@/data/site"
import { communityHref } from "@/lib/content"

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 sm:gap-4 sm:px-8">
        <a className="min-w-0 shrink-0 grow-0" href="#/">
          {media.logoUrl ? (
            <img
              alt="DvadesetJedan"
              className="block h-auto w-auto max-h-8 max-w-[9.75rem] object-contain sm:max-w-[11rem] md:max-w-none"
              src={media.logoUrl}
            />
          ) : (
            <span className="text-lg font-semibold tracking-[-0.03em] text-foreground">
              DvadesetJedan
            </span>
          )}
        </a>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              className="whitespace-nowrap hover:text-foreground"
              href={item.href}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              target={item.href.startsWith("http") ? "_blank" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border/80 bg-card px-3 py-2 text-sm font-medium text-foreground sm:px-4"
          href={communityHref()}
          rel="noreferrer"
          target="_blank"
        >
          <span className="hidden sm:inline">Uđi u Telegram</span>
          <span className="sm:hidden">Telegram</span>
        </a>
      </div>

      <div className="border-t border-border/60 md:hidden">
        <nav className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-5 py-3 text-sm text-muted-foreground sm:px-8">
          {navigation.map((item) => (
            <a
              key={item.label}
              className="shrink-0 whitespace-nowrap hover:text-foreground"
              href={item.href}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              target={item.href.startsWith("http") ? "_blank" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
