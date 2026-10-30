import type { ScheduledEventEntry } from "../data/events"

export function makeIcsUrl(event: ScheduledEventEntry) {
  return `/calendars/${event.slug}-${event.start.slice(0, 10)}.ics`
}

function escapeText(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r\n|\r|\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
}

// RFC 5545 limits physical lines to 75 UTF-8 octets, including continuation spaces.
function foldLine(value: string) {
  const encoder = new TextEncoder()
  let line = ""
  let length = 0
  const lines: string[] = []

  for (const character of value) {
    const bytes = encoder.encode(character).length
    if (length + bytes > 75) {
      lines.push(line)
      line = " "
      length = 1
    }
    line += character
    length += bytes
  }
  lines.push(line)
  return lines.join("\r\n")
}

export function makeIcsContent(event: ScheduledEventEntry, now = new Date()) {
  const toUtcStamp = (value: string | Date) =>
    new Date(value)
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}Z$/, "Z")
  const toAllDayStamp = (value: string) => value.slice(0, 10).replace(/-/g, "")
  const uid = event.recurrence
    ? `${event.slug}-${event.start.slice(0, 10)}`
    : event.slug

  return (
    [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//DvadesetJedan//Events//HR",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      `UID:${uid}@dvadesetjedan.com`,
      `DTSTAMP:${toUtcStamp(now)}`,
      event.allDay
        ? `DTSTART;VALUE=DATE:${toAllDayStamp(event.start)}`
        : `DTSTART:${toUtcStamp(event.start)}`,
      event.allDay
        ? `DTEND;VALUE=DATE:${toAllDayStamp(event.end)}`
        : `DTEND:${toUtcStamp(event.end)}`,
      `SUMMARY:${escapeText(event.title)}`,
      `DESCRIPTION:${escapeText(event.description.join("\n\n"))}`,
      `LOCATION:${escapeText([event.venue, event.address, event.city, event.country].filter(Boolean).join(", "))}`,
      `URL:https://dvadesetjedan.com/dogadaji/${event.slug}/`,
      ...(event.status === "cancelled" ? ["STATUS:CANCELLED"] : []),
      "END:VEVENT",
      "END:VCALENDAR",
    ]
      .map(foldLine)
      .join("\r\n") + "\r\n"
  )
}
