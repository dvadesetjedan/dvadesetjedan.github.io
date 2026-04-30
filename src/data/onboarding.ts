export type OnboardingStep = {
  title: string
  text: string
}

export const onboardingSteps: OnboardingStep[] = [
  { title: "Što je novac?", text: "Kreni od uloge novca prije tehnologije." },
  { title: "Zašto Bitcoin postoji?", text: "Razumi problem koji Bitcoin pokušava riješiti." },
  { title: "Bitcoin nije crypto.", text: "Odvoji Bitcoin od tokena, hypea i trading narativa." },
  { title: "Što znači 21 milijun?", text: "Upoznaj ograničenu ponudu i zašto je važna." },
  { title: "Što je privatni ključ?", text: "Privatni ključ je kontrola nad sredstvima, ne lozinka za dijeljenje." },
  { title: "Što je seed phrase?", text: "Seed phrase čuvaj offline i nikad ga ne šalji nikome." },
  { title: "Zašto ne držati sve na exchangeu?", text: "Nauči razliku između računa kod posrednika i vlastitog skrbništva." },
  { title: "Kako prepoznati scam?", text: "Obećanja zarade, žurba i privatne poruke su ozbiljni alarmi." },
  { title: "Što je hardware wallet?", text: "Uređaj koji pomaže čuvati ključeve izvan računala i mobitela." },
  { title: "Što je Lightning?", text: "Mreža za brža i manja plaćanja na Bitcoin sloju." },
  { title: "Što je node?", text: "Node provjerava pravila Bitcoina umjesto da vjeruje tuđem servisu." },
  { title: "Što je self-custody?", text: "Samostalno skrbništvo znači više kontrole i više odgovornosti." },
  { title: "Kako razmišljati o privatnosti?", text: "Privatnost gradi navikama, ne jednim alatom." },
  { title: "Što ne pitati u javnoj grupi?", text: "Ne dijeli iznose, seed phrase, privatne podatke ni osjetljive planove." },
  { title: "Kako sigurno doći na meetup?", text: "Koristi javne najave, provjeri lokaciju i ne nosi nepotrebne informacije." },
  { title: "Što čitati dalje?", text: "Kreni kroz preporučeni redoslijed čitanja i pitaj kad zapneš." },
  { title: "Kako objasniti Bitcoin obitelji?", text: "Pričaj mirno, bez pritiska i bez obećanja zarade." },
  { title: "Bitcoin za poduzetnike.", text: "Razmišljaj o novcu, plaćanjima i vremenskom horizontu." },
  { title: "Bitcoin i dugoročna štednja.", text: "Ovo nije poziv na kupnju, nego tema za razumijevanje novca kroz vrijeme." },
  { title: "Najčešći mitovi.", text: "Provjeri tvrdnje, izvore i razliku između kritike i površnog naslova." },
  { title: "Kako doprinijeti zajednici.", text: "Predloži tekst, prijevod, događaj, shownotes ili ispravak." },
]

export const beginnerSafetyWarnings = [
  "DvadesetJedan ne daje investicijske, porezne ni pravne savjete.",
  "Pazi na scamove, privatne poruke i obećanja brze zarade.",
  "Nikad ne dijeli seed phrase, privatni ključ ili backup.",
  "Ne žuri s kupnjom. Prvo razumij osnove i sigurnost.",
  "Ako nisi siguran, pitaj prije nego što nešto napraviš.",
] as const
