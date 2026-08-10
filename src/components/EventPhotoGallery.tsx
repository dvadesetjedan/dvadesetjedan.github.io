import { Images } from "lucide-react"
import { useState } from "react"

import { GalleryLightbox } from "@/components/GalleryLightbox"
import { SafeImage } from "@/components/SafeImage"
import type { EventGallery } from "@/data/eventGalleries"
import { cn } from "@/lib/utils"

export function EventPhotoGallery({ gallery }: { gallery: EventGallery }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section aria-labelledby="event-gallery-title" className="mt-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary-strong">
            <Images className="size-4" />
            Dokumentirano
          </p>
          <h2
            className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl"
            id="event-gallery-title"
          >
            Fotografije s druženja
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          {gallery.photos.length} fotografija
        </p>
      </div>

      <div className="mt-6 grid auto-rows-[9rem] grid-cols-2 gap-3 sm:auto-rows-[11rem] md:grid-cols-3 lg:grid-cols-4">
        {gallery.photos.map((photo, index) => (
          <button
            aria-label={`Otvori fotografiju ${index + 1} od ${gallery.photos.length}: ${photo.caption}`}
            className={cn(
              "group relative min-h-11 overflow-hidden rounded-[1.2rem] bg-muted text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              index === 0 && "col-span-2 row-span-2",
              index > 0 && index % 7 === 0 && "row-span-2",
              index > 1 && index % 9 === 0 && "sm:col-span-2",
            )}
            key={photo.src}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <SafeImage
              alt={photo.alt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              height={900}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              src={photo.src}
              width={1200}
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-3 pt-8 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
              {photo.caption}
            </span>
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <GalleryLightbox
          activeIndex={activeIndex}
          onChange={setActiveIndex}
          onClose={() => setActiveIndex(null)}
          photos={gallery.photos}
        />
      ) : null}
    </section>
  )
}
