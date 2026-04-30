import type { ArticleEntry } from "@/data/articles"
import type { EventEntry } from "@/data/events"
import {
  COMMUNITY_URL,
  CONTRIBUTE_URL,
  EVENTS_URL,
  articleCurations,
} from "@/data/site"

export function communityHref() {
  return COMMUNITY_URL || CONTRIBUTE_URL
}

export function articleHref(slug: string) {
  return `#/clanci/${slug}`
}

export function eventHref(slug: string) {
  return `${EVENTS_URL}/${slug}`
}

export function formatArticleDate(value: string) {
  return new Intl.DateTimeFormat("hr-HR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value))
}

export function formatEpisodeDate(value: string) {
  return new Intl.DateTimeFormat("hr-HR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value))
}

export function formatEventDate(event: EventEntry) {
  if (event.displayDate) return event.displayDate

  const start = new Date(event.start)
  const end = new Date(event.end)

  const sameDay = start.toDateString() === end.toDateString()
  const dateFormatter = new Intl.DateTimeFormat("hr-HR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  const timeFormatter = new Intl.DateTimeFormat("hr-HR", {
    hour: "2-digit",
    minute: "2-digit",
  })

  if (sameDay) {
    return `${dateFormatter.format(start)} • ${timeFormatter.format(start)}`
  }

  return `${dateFormatter.format(start)} – ${dateFormatter.format(end)}`
}

export function formatEventTimeRange(event: EventEntry) {
  if (event.displayDate) return event.displayDate

  const start = new Date(event.start)
  const end = new Date(event.end)
  const formatter = new Intl.DateTimeFormat("hr-HR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  return `${formatter.format(start)} – ${formatter.format(end)}`
}

export function getArticleCuration(slug: string) {
  return articleCurations.find((item) => item.slug === slug)
}

export function sortArticles(entries: ArticleEntry[]) {
  return [...entries].sort((left, right) => {
    const leftOrder = getArticleCuration(left.slug)?.order ?? 999
    const rightOrder = getArticleCuration(right.slug)?.order ?? 999

    if (leftOrder !== rightOrder) return leftOrder - rightOrder
    return new Date(right.date).getTime() - new Date(left.date).getTime()
  })
}

export function isTranslatedArticle(article: ArticleEntry) {
  return (
    article.categories.some(
      (category) => category.toLowerCase() === "prevodi",
    ) || article.tags.some((tag) => tag.toLowerCase() === "prevod")
  )
}

export function makeGoogleCalendarUrl(event: EventEntry) {
  const toCalendarStamp = (value: string) =>
    new Date(value).toISOString().replace(/[-:]/g, "").replace(".000", "")
  const toAllDayStamp = (value: string) =>
    value.slice(0, 10).replace(/-/g, "")

  const start = event.allDay
    ? toAllDayStamp(event.start)
    : toCalendarStamp(event.start)
  const end = event.allDay
    ? toAllDayStamp(event.end)
    : toCalendarStamp(event.end)
  const details = encodeURIComponent(event.description.join("\n\n"))
  const location = encodeURIComponent(
    `${event.venue}, ${event.address}, ${event.city}, ${event.country}`,
  )

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${start}/${end}&details=${details}&location=${location}`
}

export function makeIcsUrl(event: EventEntry) {
  const toUtcStamp = (value: string) =>
    new Date(value).toISOString().replace(/[-:]/g, "").replace(".000", "")
  const toAllDayStamp = (value: string) =>
    value.slice(0, 10).replace(/-/g, "")

  const dtStart = event.allDay
    ? `DTSTART;VALUE=DATE:${toAllDayStamp(event.start)}`
    : `DTSTART:${toUtcStamp(event.start)}`
  const dtEnd = event.allDay
    ? `DTEND;VALUE=DATE:${toAllDayStamp(event.end)}`
    : `DTEND:${toUtcStamp(event.end)}`

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//DvadesetJedan//Events//HR",
    "BEGIN:VEVENT",
    `UID:${event.slug}@dvadesetjedan.com`,
    `DTSTAMP:${toUtcStamp(new Date().toISOString())}`,
    dtStart,
    dtEnd,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description.join("\\n\\n")}`,
    `LOCATION:${event.venue}, ${event.address}, ${event.city}, ${event.country}`,
    `URL:${event.registrationUrl}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\n")

  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`
}
