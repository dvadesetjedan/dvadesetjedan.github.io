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

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    })
    document.getElementById("main-content")?.focus({ preventScroll: true })
  }

  return (
    <button
      aria-label="Natrag na vrh stranice"
      aria-hidden={!isVisible}
      className={`fixed bottom-5 right-5 z-50 inline-flex size-11 items-center justify-center rounded-full bg-card/95 text-foreground shadow-[var(--shadow-border)] backdrop-blur transition-[translate,scale,opacity,color,box-shadow] duration-150 ease-out hover:text-primary-strong hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96] motion-reduce:transition-none motion-reduce:active:scale-100 sm:bottom-6 sm:right-6 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      onClick={scrollToTop}
      tabIndex={isVisible ? 0 : -1}
      type="button"
    >
      <ArrowUp className="size-5" />
    </button>
  )
}
