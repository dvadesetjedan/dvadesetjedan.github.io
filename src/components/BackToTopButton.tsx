import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 640)

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      aria-label="Natrag na vrh stranice"
      className={`fixed bottom-5 right-5 z-50 inline-flex size-11 items-center justify-center rounded-full border border-border/80 bg-card/95 text-foreground shadow-[var(--shadow-soft)] backdrop-blur transition-all hover:border-primary/40 hover:text-primary sm:bottom-6 sm:right-6 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      type="button"
    >
      <ArrowUp className="size-5" />
    </button>
  )
}
