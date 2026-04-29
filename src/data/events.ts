export type EventEntry = {
  slug: string
  title: string
  summary: string
  description: string[]
  coverImage: string
  start: string
  end: string
  venue: string
  address: string
  city: string
  country: string
  meetupUrl: string
  mapUrl: string
}

export const events: EventEntry[] = [
  {
    slug: "meetup-rab",
    title: "Meetup Rab",
    summary:
      "Pozivamo sve bitcoinere na neformalno druženje na otoku Rabu! Dio ekipe stiže već 13. kolovoza i ostaje do 15. kolovoza – planiramo kupanje, druženje, možda ribolov, kajak... sve ovisi o vremenu i raspoloženju. Pridruži se kad možeš i koliko možeš.",
    description: [
      "Bitcoin meetup na Rabu – u organizaciji DvadesetJedan i Bull Bitcoin",
      "Pozivamo sve bitcoinere na neformalno druženje na otoku Rabu! Dio ekipe stiže već 13. kolovoza i ostaje do 15. kolovoza – planiramo kupanje, druženje, možda ribolov, kajak... sve ovisi o vremenu i raspoloženju. Pridruži se kad možeš i koliko možeš.",
      "Glavni meetup održat će se 14.8. u 19:30 u restoranu Santa Maria, u starom gradu Rabu (adresa: Dinka Dokule 6). Lokaciju i detalje još ćemo potvrditi unutar grupe ukoliko se promijeni.",
      "Vidimo se na moru, u opuštenoj atmosferi i uz dobar razgovor o Bitcoinu.",
      "Telegram grupa za koordinaciju: https://t.me/+EFNsWuB8lV1mODlk",
    ],
    coverImage:
      "https://dvadesetjedan.com/wp-content/uploads/2025/06/DJ_-_YT_background_01.jpg",
    start: "2025-08-14T19:30:00+02:00",
    end: "2025-08-15T23:00:00+02:00",
    venue: "Žal Beach Bar",
    address: "Frkanj",
    city: "Rab",
    country: "Croatia",
    meetupUrl:
      "https://www.meetup.com/dvadeset-jedan/events/310212249/?recId=b3b4279a-a2d9-4141-a319-38545eb81020&recSource=ml-popular-events-nearby-offline&searchId=bc533620-1f0c-4eac-a1fe-2092a5845a10&eventOrigin=find_page%24all",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=%C5%BDal+Beach+Bar+Frkanj+Rab+Croatia",
  },
]
