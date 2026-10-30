import assert from "node:assert/strict"
import { calendarData, eventData } from "./load-event-data.mjs"
import { calendarEvents } from "./event-calendars.mjs"

const now = new Date("2026-10-30T12:34:56.789Z")
const entries = calendarEvents(now)
const meetup = entries.find(
  (event) => event.slug === "bitcoin-only-meetup-belgrade",
)
assert.ok(meetup)
assert.equal(
  calendarData.makeIcsUrl(meetup),
  "/calendars/bitcoin-only-meetup-belgrade-2026-11-21.ics",
)
const unfold = (value) => value.replace(/\r\n[ \t]/g, "")
const ics = unfold(calendarData.makeIcsContent(meetup, now))
assert.ok(ics.includes("DTSTART:20261121T180000Z\r\n"))
assert.ok(ics.includes("DTEND:20261121T210000Z\r\n"))
assert.ok(ics.includes("DTSTAMP:20261030T123456Z\r\n"))
assert.ok(ics.includes("subotu\\, 21. 11. 2026."))
assert.ok(
  ics.includes(
    "URL:https://dvadesetjedan.com/dogadaji/bitcoin-only-meetup-belgrade/\r\n",
  ),
)

// The same page rolls over after November's exception without needing a deploy.
const definition = eventData.eventDefinitions.find(
  (event) => event.slug === meetup.slug,
)
const next = eventData.resolveRecurringEvent(
  definition,
  new Date("2026-11-21T21:00:01Z"),
)
assert.ok(
  entries.some(
    (event) => calendarData.makeIcsUrl(event) === calendarData.makeIcsUrl(next),
  ),
)
const nextIcs = unfold(calendarData.makeIcsContent(next, now))
assert.ok(nextIcs.includes("DTSTART:20261216T180000Z\r\n"))
assert.notEqual(ics.match(/UID:(.+)/)[1], nextIcs.match(/UID:(.+)/)[1])
const summer = entries.find(
  (event) => event.slug === meetup.slug && event.start.startsWith("2027-04"),
)
assert.ok(
  unfold(calendarData.makeIcsContent(summer, now)).includes(
    "DTSTART:20270421T170000Z\r\n",
  ),
)

// Exercise punctuation, CR/LF injection, UTF-8 boundaries and exclusive all-day end.
const sample = {
  ...meetup,
  title: "Susret, štednja; Bitcoin \\ novac\nDrugi red",
  description: ["Ž😀".repeat(90), "Prvi\r\nDrugi\rTreći\nČetvrti"],
  allDay: true,
  start: "2026-11-21",
  end: "2026-11-23",
  status: "cancelled",
}
const content = calendarData.makeIcsContent(sample, now)
const unfolded = unfold(content)
assert.ok(
  unfolded.includes(
    "SUMMARY:Susret\\, štednja\\; Bitcoin \\\\ novac\\nDrugi red\r\n",
  ),
)
assert.ok(
  unfolded.includes(
    `DESCRIPTION:${sample.description[0]}\\n\\nPrvi\\nDrugi\\nTreći\\nČetvrti\r\n`,
  ),
)
assert.ok(
  unfolded.includes(
    "DTSTART;VALUE=DATE:20261121\r\nDTEND;VALUE=DATE:20261123\r\n",
  ),
)
assert.ok(unfolded.includes("STATUS:CANCELLED\r\n"))
assert.ok(content.endsWith("END:VCALENDAR\r\n"))
assert.ok(!content.replace(/\r\n/g, "").match(/[\r\n]/))
for (const line of content.split("\r\n"))
  assert.ok(Buffer.byteLength(line) <= 75)
assert.equal(entries.filter((event) => event.slug === meetup.slug).length, 24)
assert.ok(entries.every(eventData.isScheduledEvent))

console.log(
  `Event calendar checks passed (${entries.length} files, rollover, DST, UTF-8 and all-day dates).`,
)
