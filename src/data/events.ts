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
    slug: "bitcoin-only-meetup-belgrade-2026-05-23",
    title: "Bitcoin only meetup in Belgrade",
    summary:
      "Dvadeset Jedan meetup u Beogradu na posebnoj lokaciji na Adi Ciganliji. Otvoreno druženje za bitcoinere, početnike i sve koji žele razgovarati o Bitcoinu, ekonomiji, tehnologiji i zajednici.",
    description: [
      "Ovog mjeseca meetup se održava na posebnoj novoj lokaciji na Adi Ciganliji.",
      "Dvadeset Jedan je grupa Bitcoin maksimalista s ex-yu prostora. Okupljamo se kako bismo razgovarali o Bitcoinu, ekonomiji, tehnologiji, filozofiji i povezanim temama. Ponekad predstavljamo projekte, organiziramo radionice i snimamo podcast.",
      "Druženje se održava 23. svibnja u 16:00 u restoranu Druga Kuća na Adi Ciganliji u Beogradu.",
      "Govorimo srpski i engleski. Dobrodošli su svi, bez obzira na razinu znanja o Bitcoinu. Početnici su posebno dobrodošli.",
      "Ako nas ne pronađete po Bitcoin majicama, provjerite Telegram grupu za točnu lokaciju kod restorana Druga Kuća: https://t.me/dvadesetjedan21",
      "RSVP i detalji događaja dostupni su na Meetup stranici.",
    ],
    coverImage:
      "https://dvadesetjedan.com/wp-content/uploads/2025/06/DJ_-_YT_background_01.jpg",
    start: "2026-05-23T16:00:00+02:00",
    end: "2026-05-23T19:00:00+02:00",
    venue: "Restaurant Druga Kuća - Ada Ciganlija",
    address: "Ada Ciganlija 2",
    city: "Belgrade",
    country: "Serbia",
    meetupUrl:
      "https://www.meetup.com/dvadeset-jedan/events/314211199/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link&utm_version=v2&member_id=60579322",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Restaurant+Druga+Kuca+Ada+Ciganlija+2+Belgrade+Serbia",
  },
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
