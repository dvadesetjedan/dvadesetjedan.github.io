import type { ArticleEntry } from "@/data/articles"
import {
  isArchiveEvent,
  type EventEntry,
  type ScheduledEventEntry,
} from "@/data/events"
import {
  COMMUNITY_URL,
  COMMUNITY_PROJECTS_URL,
  CONTRIBUTE_URL,
  EVENTS_URL,
  articleCurations,
} from "@/data/site"

export function communityHref() {
  return COMMUNITY_URL || CONTRIBUTE_URL
}

export function articleHref(slug: string) {
  return `/clanci/${slug}/`
}

export function eventHref(slug: string) {
  return `${EVENTS_URL}${slug}/`
}

export function episodeHref(slug: string) {
  return `/livestream/${slug}/`
}

export function cityHref(slug: string) {
  return `/gradovi/${slug}/`
}

export function communityProjectHref(slug: string) {
  return `${COMMUNITY_PROJECTS_URL}${slug}/`
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
  if (isArchiveEvent(event)) return event.dateLabel
  if (event.displayDate) return event.displayDate

  const start = new Date(event.start)
  const end = new Date(event.end)

  const sameDay = start.toDateString() === end.toDateString()
  const dateFormatter = new Intl.DateTimeFormat("hr-HR", {
    day: "numeric",
    month: "numeric",
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
  if (isArchiveEvent(event)) return event.dateLabel
  if (event.displayDate) return event.displayDate

  const start = new Date(event.start)
  const end = new Date(event.end)
  const sameDay = start.toDateString() === end.toDateString()
  const dateFormatter = new Intl.DateTimeFormat("hr-HR", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  })
  const timeFormatter = new Intl.DateTimeFormat("hr-HR", {
    hour: "2-digit",
    minute: "2-digit",
  })

  if (sameDay) {
    return `${dateFormatter.format(start)} • ${timeFormatter.format(start)} – ${timeFormatter.format(end)}`
  }

  return `${dateFormatter.format(start)} ${timeFormatter.format(start)} – ${dateFormatter.format(end)} ${timeFormatter.format(end)}`
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

export function makeGoogleCalendarUrl(event: ScheduledEventEntry) {
  const toCalendarStamp = (value: string) =>
    new Date(value).toISOString().replace(/[-:]/g, "").replace(".000", "")
  const toAllDayStamp = (value: string) => value.slice(0, 10).replace(/-/g, "")

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
