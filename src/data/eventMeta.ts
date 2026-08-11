import { siteConfig } from "@/data/siteConfig"

export type EventMeta = {
  lastManualCheck?: string
  primarySourceName: string
  primarySourceUrl: string
  freshnessNote: string
}

export const eventMeta: EventMeta = {
  lastManualCheck: "2026-06-25",
  primarySourceName: "Telegram najave",
  primarySourceUrl: siteConfig.socials.meetupsTelegram,
  freshnessNote:
    "Događaji se održavaju prema službenim najavama. Za zadnje promjene provjeri povezanu stranicu događaja ili Telegram najave zajednice.",
} as const
