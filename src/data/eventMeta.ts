export type EventMeta = {
  lastManualCheck?: string
  primarySourceName: string
  primarySourceUrl: string
  freshnessNote: string
}

export const eventMeta: EventMeta = {
  primarySourceName: "Meetup",
  primarySourceUrl: "https://www.meetup.com/dvadeset-jedan/",
  freshnessNote:
    "Događaji se održavaju prema službenim najavama. Za zadnje promjene provjeri RSVP/Meetup link i Telegram zajednicu.",
} as const
