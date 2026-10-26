import assert from "node:assert/strict"
import { eventData } from "./load-event-data.mjs"

const { eventDefinitions, resolveRecurringEvent, getEventStatus } = eventData
const meetup = eventDefinitions.find(
  (event) => event.slug === "bitcoin-only-meetup-belgrade",
)
assert.ok(meetup)

const cases = [
  ["2026-10-01T12:00:00Z", "2026-10-21", "+02:00", false],
  ["2026-10-26T12:00:00Z", "2026-11-21", "+01:00", true],
  ["2026-11-18T23:00:00+01:00", "2026-11-21", "+01:00", true],
  ["2026-11-21T19:00:00+01:00", "2026-11-21", "+01:00", true],
  ["2026-11-21T22:00:00+01:00", "2026-11-21", "+01:00", true],
  ["2026-11-21T22:00:01+01:00", "2026-12-16", "+01:00", false],
  ["2026-12-01T12:00:00Z", "2026-12-16", "+01:00", false],
  ["2026-12-16T22:00:01+01:00", "2027-01-20", "+01:00", false],
  ["2027-04-01T12:00:00Z", "2027-04-21", "+02:00", false],
  ["2027-11-01T12:00:00Z", "2027-11-17", "+01:00", false],
]

for (const [nowString, day, offset, exception] of cases) {
  const now = new Date(nowString)
  const result = resolveRecurringEvent(meetup, now)
  assert.equal(result.start, `${day}T19:00:00${offset}`, nowString)
  assert.equal(result.end, `${day}T22:00:00${offset}`, nowString)
  assert.equal(getEventStatus(result, now), "upcoming")
  assert.equal(new Date(result.start).getUTCDay(), exception ? 6 : 3)
  assert.equal(result.summary.includes("subotu, 21. 11. 2026."), exception)
  if (exception) {
    assert.equal(result.description[0], result.summary)
    assert.ok(result.summary.includes("Od prosinca"))
  } else {
    assert.equal(result.summary, meetup.summary)
    assert.deepEqual(result.description, meetup.description)
  }
}

// Resolving a date must not change the source or historical event entries.
assert.equal(meetup.recurrence.weekday, 3)
assert.ok(
  !meetup.description.some((paragraph) => paragraph.includes("21. 11.")),
)
const historical = eventDefinitions.find(
  (event) => event.slug === "bitcoin-only-meetup-belgrade-2026-08-19",
)
assert.equal(resolveRecurringEvent(historical), historical)

console.log(`Event recurrence passed (${cases.length} date boundaries).`)
