import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

import { SafeImage } from "@/components/SafeImage"
import type { GalleryPhoto } from "@/data/eventGalleries"

type GalleryLightboxProps = {
  photos: GalleryPhoto[]
  activeIndex: number
  onChange: (index: number) => void
  onClose: () => void
}

export function GalleryLightbox({
  photos,
  activeIndex,
  onChange,
  onClose,
}: GalleryLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const activePhoto = photos[activeIndex]

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const previousBodyOverflow = document.body.style.overflow
    const previousDocumentOverflow = document.documentElement.style.overflow
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousDocumentOverflow
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        onChange((activeIndex - 1 + photos.length) % photos.length)
        return
      }
      if (event.key === "ArrowRight") {
        event.preventDefault()
        onChange((activeIndex + 1) % photos.length)
        return
      }
      if (event.key !== "Tab" || !dialogRef.current) return

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [activeIndex, onChange, onClose, photos.length])

  if (!activePhoto) return null

  return createPortal(
    <div
      aria-label="Pregled fotografije"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      ref={dialogRef}
      role="dialog"
    >
      <button
        aria-label="Zatvori galeriju"
        className="absolute right-4 top-4 z-10 inline-flex size-12 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd35f]"
        onClick={onClose}
        ref={closeButtonRef}
        type="button"
      >
        <X className="size-5" />
      </button>

      {photos.length > 1 ? (
        <button
          aria-label="Prethodna fotografija"
          className="absolute left-4 z-10 inline-flex size-12 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd35f] sm:left-6"
          onClick={() =>
            onChange((activeIndex - 1 + photos.length) % photos.length)
          }
          type="button"
        >
          <ChevronLeft className="size-6" />
        </button>
      ) : null}

      <figure className="flex max-h-[92vh] w-full max-w-6xl flex-col items-center justify-center gap-4">
        <SafeImage
          alt={activePhoto.alt}
          className="max-h-[78vh] w-auto max-w-full rounded-[1.25rem] object-contain shadow-2xl"
          decoding="async"
          fetchPriority="high"
          height={1200}
          loading="eager"
          sizes="100vw"
          src={activePhoto.src}
          width={1800}
        />
        <figcaption className="max-w-3xl px-12 text-center text-sm leading-6 text-white/75">
          {activePhoto.caption}
          <span className="ml-3 tabular-nums text-white/45">
            {activeIndex + 1} / {photos.length}
          </span>
        </figcaption>
      </figure>

      {photos.length > 1 ? (
        <button
          aria-label="Sljedeća fotografija"
          className="absolute right-4 z-10 inline-flex size-12 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd35f] sm:right-6"
          onClick={() => onChange((activeIndex + 1) % photos.length)}
          type="button"
        >
          <ChevronRight className="size-6" />
        </button>
      ) : null}
    </div>,
    document.body,
  )
}
