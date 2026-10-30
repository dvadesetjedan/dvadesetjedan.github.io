import fs from "node:fs"
import path from "node:path"
import { eventData, calendarData } from "./load-event-data.mjs"

export function calendarEvents(now = new Date()) {
  const entries = new Map()
  const add = (event) => entries.set(calendarData.makeIcsUrl(event), event)

  for (const event of eventData.eventDefinitions.filter(
    eventData.isScheduledEvent,
  )) {
    if (!event.recurrence) {
      add(event)
      continue
    }

    // Date-specific files keep a later monthly occurrence from importing an old
    // date between deployments. Include two years of monthly rollovers.
    let occurrence = eventData.resolveRecurringEvent(event, now)
    for (let month = 0; month < 24; month += 1) {
      add(occurrence)
      occurrence = eventData.resolveRecurringEvent(
        event,
        new Date(new Date(occurrence.end).getTime() + 1000),
      )
    }
  }

  return [...entries.values()]
}

export function writeEventCalendars(distDir) {
  const now = new Date()
  const entries = calendarEvents(now)
  for (const event of entries) {
    const filePath = path.join(distDir, calendarData.makeIcsUrl(event))
    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, calendarData.makeIcsContent(event, now))
  }
  return entries.length
}
