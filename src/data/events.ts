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
      "Bitcoin meetup na Rabu u organizaciji DvadesetJedan i Bull Bitcoin.",
      "Pridruži se DvadesetJedan meetup druženju na Rabu uz opušten razgovor o Bitcoinu, zajednici i lokalnom povezivanju.",
      "Dio ekipe stiže već 13. kolovoza i ostaje do 15. kolovoza, pa su planirani kupanje, druženje i spontana okupljanja ovisno o vremenu i raspoloženju.",
      "Glavno druženje održava se 14. kolovoza u 19:30 na lokaciji navedenoj u detaljima događaja. Za eventualne zadnje promjene i koordinaciju prati Telegram grupu događaja.",
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
