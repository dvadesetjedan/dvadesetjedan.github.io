import type { EventEntry } from "@/data/events"
import { eventHref, formatEventDate } from "@/lib/content"
import { CalendarDays, MapPinned, MoveRight } from "lucide-react"

export function EventCard({ event }: { event: EventEntry }) {
  return (
    <a
      className="group overflow-hidden rounded-[1.8rem] border border-border/80 bg-card/70 transition-transform hover:-translate-y-0.5"
      href={eventHref(event.slug)}
    >
      <img alt="" className="h-60 w-full object-cover" src={event.coverImage} />
      <div className="space-y-5 px-5 py-5">
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
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
