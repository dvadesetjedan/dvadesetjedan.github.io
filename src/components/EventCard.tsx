import type { EventEntry } from "@/data/events"
import { SafeImage } from "@/components/SafeImage"
import { eventHref, formatEventDate } from "@/lib/content"
import { CalendarDays, MapPinned, MoveRight } from "lucide-react"

export function EventCard({ event }: { event: EventEntry }) {
  return (
    <a
      className="group overflow-hidden rounded-[1.8rem] bg-card/70 shadow-[var(--shadow-border)] transition-[translate,scale,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-border-hover)] active:scale-[0.96] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100"
      href={eventHref(event.slug)}
    >
      <SafeImage
        alt={`${event.title} — ${event.venue}`}
        className="h-60 w-full object-cover"
        fallbackClassName="h-60 w-full object-cover"
        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        src={event.coverImage}
      />
      <div className="space-y-5 px-5 py-5 sm:px-6 sm:py-6">
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2 tabular-nums">
            <CalendarDays className="size-4" />
            {formatEventDate(event)}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPinned className="size-4" />
            {event.city}, {event.country}
          </span>
        </div>

        <div>
          <h3 className="text-3xl font-semibold tracking-[-0.04em] text-foreground">
            {event.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            {event.summary}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{event.venue}</span>
          <span className="inline-flex items-center gap-2 text-foreground">
            Detalji
            <MoveRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </a>
  )
}
