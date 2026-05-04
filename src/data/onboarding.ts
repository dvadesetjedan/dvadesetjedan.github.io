export type OnboardingStep = {
  title: string
  shortText: string
  explanation: string
  doNotDo?: string[]
  recommendedArticleSlugs?: string[]
  recommendedEpisodeSlugs?: string[]
  questionForCommunity?: string
  safetyLevel?: "normal" | "important" | "critical"
}

export const onboardingSteps: OnboardingStep[] = [
  {
    title: "Što je novac?",
    shortText: "Kreni od uloge novca prije tehnologije.",
    explanation:
      "Prije walleta, rudarenja i nodeova vrijedi razumjeti što novac radi. Novac pomaže mjeriti vrijednost, razmjenjivati rad i čuvati kupovnu moć kroz vrijeme.",
    questionForCommunity: "Koji problem s novcem ti je najbliži iz svakodnevnog života?",
  },
  {
    title: "Zašto Bitcoin postoji?",
    shortText: "Razumi problem koji Bitcoin pokušava riješiti.",
    explanation:
      "Bitcoin je nastao kao otvoren monetarni sustav bez centralnog izdavatelja. Najbolji početak je razumjeti problem povjerenja, inflacije i kontrole nad vlastitim novcem.",
    questionForCommunity: "Što ti je kod Bitcoina još uvijek najnejasnije?",
  },
  {
    title: "Bitcoin nije crypto.",
    shortText: "Odvoji Bitcoin od tokena, hypea i trading narativa.",
    explanation:
      "DvadesetJedan je Bitcoin-only. To znači da ovdje ne promoviramo tokene, trading signale ni kratkoročne narative o brzoj zaradi.",
    doNotDo: ["Ne miješaj početno učenje Bitcoina s lovom na nove tokene.", "Ne koristi grupu za trading signale."],
    questionForCommunity: "Koju razliku između Bitcoina i 'crypto' priče želiš bolje razumjeti?",
    safetyLevel: "important",
  },
  {
    title: "Što znači 21 milijun?",
    shortText: "Upoznaj ograničenu ponudu i zašto je važna.",
    explanation:
      "Bitcoinova ponuda je ograničena pravilima mreže. Broj 21 milijun nije marketinški slogan, nego dio monetarne politike koju provjeravaju nodeovi.",
    questionForCommunity: "Zašto je predvidljiva ponuda važna za novac?",
  },
  {
    title: "Što je privatni ključ?",
    shortText: "Privatni ključ je kontrola nad sredstvima, ne lozinka za dijeljenje.",
    explanation:
      "Privatni ključ omogućuje potpisivanje transakcija. Ako ga netko drugi dobije, može preuzeti kontrolu nad bitcoinom povezanim s tim ključem.",
    doNotDo: ["Ne šalji privatni ključ nikome.", "Ne upisuj privatni ključ u web stranice koje ne razumiješ."],
    questionForCommunity: "Kako provjeriti razliku između javne adrese i privatnog ključa?",
    safetyLevel: "critical",
  },
  {
    title: "Što je seed phrase?",
    shortText: "Seed phrase čuvaj offline i nikad ga ne šalji nikome.",
    explanation:
      "Seed phrase je backup za novčanik. Tko ima seed phrase, obično može obnoviti novčanik i potrošiti sredstva, zato ga tretiraj kao najosjetljiviju informaciju.",
    doNotDo: [
      "Nikad ga ne fotografiraj.",
      "Nikad ga ne upisuj u nasumične web stranice.",
      "Nikad ga ne šalji nikome.",
      "Nemoj ga držati samo u cloud bilješkama.",
    ],
    questionForCommunity: "Koje su sigurne offline metode za backup seed phrasea?",
    safetyLevel: "critical",
  },
  {
    title: "Zašto ne držati sve na exchangeu?",
    shortText: "Nauči razliku između računa kod posrednika i vlastitog skrbništva.",
    explanation:
      "Na exchangeu često imaš potraživanje prema servisu, a ne punu kontrolu nad ključevima. Self-custody donosi više kontrole, ali i više odgovornosti pa nema potrebe za panikom ili žurbom.",
    doNotDo: ["Ne prebacuj velike iznose prije nego što razumiješ postupak.", "Ne preskači testne male transakcije."],
    questionForCommunity: "Kako sigurno vježbati withdrawal bez nepotrebnog rizika?",
    safetyLevel: "important",
  },
  {
    title: "Kako prepoznati scam?",
    shortText: "Obećanja zarade, žurba i privatne poruke su ozbiljni alarmi.",
    explanation:
      "Scam često izgleda kao pomoć, prilika ili hitna poruka. Posebno pazi na privatne poruke, garantirane prinose, lažni support i pritisak da brzo reagiraš.",
    doNotDo: ["Ne vjeruj garantiranim povratima.", "Ne klikaj linkove iz privatnih poruka bez provjere.", "Ne šalji podatke lažnom supportu."],
    questionForCommunity: "Kako provjeriti sumnjiv link ili poruku bez otkrivanja privatnih podataka?",
    safetyLevel: "critical",
  },
  {
    title: "Što je hardware wallet?",
    shortText: "Uređaj koji pomaže čuvati ključeve izvan računala i mobitela.",
    explanation:
      "Hardware wallet može smanjiti izloženost privatnih ključeva. Nije čarobna zaštita: i dalje moraš razumjeti backup, provjeru adresa i oprez pri korištenju.",
    doNotDo: ["Ne kupuj uređaje iz sumnjivih izvora.", "Ne koristi unaprijed pripremljen seed phrase."],
    questionForCommunity: "Koje pojmove treba razumjeti prije kupnje hardware walleta?",
    safetyLevel: "important",
  },
  {
    title: "Što je Lightning?",
    shortText: "Mreža za brža i manja plaćanja na Bitcoin sloju.",
    explanation:
      "Lightning pomaže kod brzih i manjih plaćanja. Za početnika je dovoljno razumjeti da nije zamjena za osnovnu sigurnost i da različiti walleti imaju različite modele skrbništva.",
    questionForCommunity: "Koja je razlika između custodial i non-custodial Lightning walleta?",
  },
  {
    title: "Što je node?",
    shortText: "Node provjerava pravila Bitcoina umjesto da vjeruje tuđem servisu.",
    explanation:
      "Bitcoin node provjerava blokove i transakcije prema pravilima mreže. Ne moraš odmah pokretati node, ali je važno znati zašto provjera pravila nije isto što i povjerenje u aplikaciju.",
    questionForCommunity: "Kada ima smisla pokrenuti vlastiti node?",
  },
  {
    title: "Što je self-custody?",
    shortText: "Samostalno skrbništvo znači više kontrole i više odgovornosti.",
    explanation:
      "Self-custody znači da sam držiš ključeve. To je moćan koncept, ali zahtijeva strpljenje, testiranje i jasnu proceduru backupa.",
    doNotDo: ["Ne prelazi na self-custody bez razumijevanja backupa.", "Ne improviziraj s velikim iznosima."],
    questionForCommunity: "Kako izgleda jednostavna self-custody procedura za početnike?",
    safetyLevel: "important",
  },
  {
    title: "Kako razmišljati o privatnosti?",
    shortText: "Privatnost gradi navikama, ne jednim alatom.",
    explanation:
      "Privatnost u Bitcoinu nije jedan gumb. Radi se o ponašanju, adresama, javnom dijeljenju informacija i razumijevanju što aplikacije mogu otkriti.",
    doNotDo: ["Ne objavljuj javno iznose koje držiš.", "Ne povezuj nepotrebno identitet, adrese i transakcije."],
    questionForCommunity: "Koje privatne podatke početnik često slučajno podijeli?",
    safetyLevel: "important",
  },
  {
    title: "Što ne pitati u javnoj grupi?",
    shortText: "Ne dijeli iznose, seed phrase, privatne podatke ni osjetljive planove.",
    explanation:
      "Javna grupa je dobra za učenje, ali ne za osjetljive detalje. Pitanje može biti korisno i bez iznosa, screenshotova walleta ili privatnih podataka.",
    doNotDo: ["Ne dijeli seed phrase.", "Ne dijeli koliko bitcoina imaš.", "Ne objavljuj osobne dokumente ili privatne kontakte."],
    questionForCommunity: "Kako formulirati sigurnosno pitanje bez otkrivanja privatnih detalja?",
    safetyLevel: "critical",
  },
  {
    title: "Kako sigurno doći na meetup?",
    shortText: "Koristi javne najave, provjeri lokaciju i ne nosi nepotrebne informacije.",
    explanation:
      "Meetup je mjesto za razgovor, ne za pokazivanje stanja walleta. Koristi službene najave, javne lokacije i koordinaciju kroz službene kanale.",
    doNotDo: ["Ne nosi seed phrase.", "Ne otkrivaj iznose.", "Ne dogovaraj privatne financijske razmjene s nepoznatim osobama."],
    questionForCommunity: "Što je dobar format malog Bitcoin-only susreta?",
    safetyLevel: "important",
  },
  {
    title: "Što čitati dalje?",
    shortText: "Kreni kroz preporučeni redoslijed čitanja i pitaj kad zapneš.",
    explanation:
      "Ne moraš razumjeti sve odjednom. Biraj tekstove koji grade pojmove redom: novac, sigurnost, skrbništvo, privatnost i mreža.",
    recommendedArticleSlugs: ["never-stop-learning", "zasto-je-vazna-decentralizacija-bitcoina"],
    questionForCommunity: "Koji tekst je dobar sljedeći korak nakon osnova?",
  },
  {
    title: "Kako objasniti Bitcoin obitelji?",
    shortText: "Pričaj mirno, bez pritiska i bez obećanja zarade.",
    explanation:
      "Najbolje objašnjenje počinje od problema novca, ne od cijene. Ne nagovaraj ljude i ne preuzimaj odgovornost za tuđe odluke.",
    doNotDo: ["Ne obećavaj zaradu.", "Ne požuruj nikoga na kupnju.", "Ne koristi strah kao argument."],
    questionForCommunity: "Koja analogija pomaže objasniti Bitcoin bez hypea?",
    safetyLevel: "important",
  },
  {
    title: "Bitcoin za poduzetnike.",
    shortText: "Razmišljaj o novcu, plaćanjima i vremenskom horizontu.",
    explanation:
      "Poduzetnicima Bitcoin može otvoriti pitanja štednje, plaćanja i monetarne neovisnosti. Ovo nije porezni ili pravni savjet; za operativne odluke treba provjeriti lokalni okvir.",
    questionForCommunity: "Koja pitanja poduzetnik treba postaviti prije primanja bitcoina?",
  },
  {
    title: "Bitcoin i dugoročna štednja.",
    shortText: "Ovo nije poziv na kupnju, nego tema za razumijevanje novca kroz vrijeme.",
    explanation:
      "Bitcoin se često promatra kroz dugoročni vremenski horizont, ali to ne znači da je prikladan za svačiju situaciju. Prvo razumij rizike, volatilnost i vlastitu odgovornost.",
    doNotDo: ["Ne ulaži novac koji ne razumiješ ili koji ti treba za osnovne obaveze.", "Ne donosi odluke zbog tuđe panike ili euforije."],
    questionForCommunity: "Kako razlikovati učenje o štednji od investicijskog savjeta?",
    safetyLevel: "important",
  },
  {
    title: "Najčešći mitovi.",
    shortText: "Provjeri tvrdnje, izvore i razliku između kritike i površnog naslova.",
    explanation:
      "O Bitcoinu postoje dobri prigovori i loši naslovi. Uči provjeravati izvore, tehničke tvrdnje i kontekst prije zaključka.",
    recommendedArticleSlugs: ["niko-ne-moze-zabraniti-bitcoin", "bitcoin-je-vrijeme"],
    questionForCommunity: "Koji mit o Bitcoinu želiš provjeriti iz više izvora?",
  },
  {
    title: "Kako doprinijeti zajednici.",
    shortText: "Predloži tekst, prijevod, događaj, shownotes ili ispravak.",
    explanation:
      "Doprinos ne mora biti velik. Možeš prijaviti grešku, predložiti temu, dodati shownotes, pomoći početniku ili pokrenuti mali lokalni susret.",
    questionForCommunity: "Koji mali doprinos možeš napraviti ovaj tjedan?",
  },
]

export const beginnerSafetyWarnings = [
  "DvadesetJedan ne daje investicijske, porezne ni pravne savjete.",
  "Pazi na scamove, privatne poruke i obećanja brze zarade.",
  "Nikad ne dijeli seed phrase, privatni ključ ili backup.",
  "Ne žuri s kupnjom. Prvo razumij osnove i sigurnost.",
  "Ako nisi siguran, pitaj prije nego što nešto napraviš.",
] as const
