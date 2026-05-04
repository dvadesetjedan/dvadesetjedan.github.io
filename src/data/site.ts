import { siteConfig } from "@/data/siteConfig"

export const YOUTUBE_URL = siteConfig.socials.youtube
export const COMMUNITY_URL = siteConfig.socials.telegram
export const ABOUT_URL = "/o-projektu/"
export const TOPICS_URL = "/teme/"
export const FAQ_URL = "/faq/"
export const RESOURCES_URL = "/resursi/"
export const ARTICLES_URL = "/clanci/"
export const BEGINNERS_URL = "/pocni-ovdje/"
export const SAFETY_URL = "/sigurnost/"
export const EVENTS_URL = "/dogadaji/"
export const CITIES_URL = "/gradovi/"
export const COMMUNITY_PAGE_URL = "/zajednica/"
export const CONTRIBUTE_URL = "/doprinesi/"
export const LIVESTREAM_URL = "/livestream/"
export const GITHUB_URL = siteConfig.socials.github
export const WHITEPAPER_URL = "https://bitcoin.org/bitcoin.pdf"
export const BITCOIN_CORE_URL = "https://bitcoincore.org/"
export const MEMPOOL_URL = "https://mempool.space/"

export const navigation = [
  { label: "O projektu", href: ABOUT_URL },
  { label: "Počni ovdje", href: BEGINNERS_URL },
  { label: "Članci", href: ARTICLES_URL },
  { label: "Livestream", href: LIVESTREAM_URL },
  { label: "Događaji", href: EVENTS_URL },
  { label: "Gradovi", href: CITIES_URL },
  { label: "Zajednica", href: COMMUNITY_PAGE_URL },
  { label: "Doprinesi", href: CONTRIBUTE_URL },
] as const

export const media = {
  logoUrl: "/images/dvadesetjedan-logo.png",
  heroUrl: "/images/dvadesetjedan-hero.jpg",
  twentyOneUrl: "https://twentyone.world/",
}

export const heroContent = {
  title: "Bitcoin signal na našim jezicima.",
  subtitle: "Uči, pitaj i poveži se s bitcoinerima iz regije.",
  body: "DvadesetJedan je regionalna verzija otvorene twentyone.world mreže: gradimo javan Bitcoin signal, otvoren prostor za razgovor i sadržaj na jeziku koji ljudima iz naše regije dolazi prirodno.",
  highlight:
    "Bitcoin-only zajednica za Balkan: lokalni jezik, regionalni kontekst i globalno povezana mreža.",
}

export const trustItems = [
  "Stalan Bitcoin signal",
  "Jezici regije i lokalni kontekst",
  "Otvorena zajednica",
  "Bitcoin, ne kriptovalute",
] as const

export const involvementCards = [
  {
    title: "Uđi u Telegram grupu",
    text: "Postavi pitanje, upoznaj druge bitcoinere i prati najave zajednice.",
    buttonLabel: "Otvori Telegram",
    href: COMMUNITY_URL,
    external: true,
  },
  {
    title: "Prati livestream",
    text: "Komentari Bitcoin vijesti, razgovori, pitanja uživo i regionalna perspektiva.",
    buttonLabel: "Otvori livestream",
    href: LIVESTREAM_URL,
    external: false,
  },
  {
    title: "Dođi na događaj ili ga predloži",
    text: "Lokalna druženja rastu iz online zajednice. Predloži okupljanje u svom gradu.",
    buttonLabel: "Pogledaj događaje",
    href: EVENTS_URL,
    external: false,
  },
] as const

export const conceptCards = [
  {
    title: "Stalan signal",
    text: "Javni sadržaj koji se može pronaći, dijeliti i pratiti kroz vrijeme. Emisije, razgovori i materijali koji ostaju dostupni i nakon što prijenos završi.",
  },
  {
    title: "Lokalni jezik",
    text: "Bitcoin je globalan, ali ljudi uče, pitaju i povezuju se najdublje na jeziku na kojem stvarno misle, razgovaraju i donose odluke. Zato DvadesetJedan gradi Bitcoin sadržaj na jezicima regije.",
  },
  {
    title: "Otvorena skupina",
    text: "Cilj nije zatvoreni klub, nego prostor u kojem se ljudi iz regije mogu povezati, učiti, surađivati i doprinositi prema vlastitim sposobnostima.",
  },
] as const

export const aboutCards = [
  {
    title: "Bitcoin sadržaj na jezicima regije",
    text: "Razgovori, emisije i materijali za ljude koji žele razumjeti Bitcoin bez površnog žargona i bez obećanja brzih rezultata.",
  },
  {
    title: "Regionalna zajednica",
    text: "Prostor za ljude iz regije koji žele učiti, postavljati pitanja, upoznavati druge ljude i graditi vlastito razumijevanje Bitcoina.",
  },
  {
    title: "Praktično razumijevanje",
    text: "Naglasak nije samo na teoriji, nego i na stvarnim pitanjima: kako učiti, kako razmišljati o sigurnosti, kako izbjeći česte pogreške i kako graditi vlastiti put.",
  },
  {
    title: "Globalno povezan lokalni projekt",
    text: "DvadesetJedan je regionalni projekt, ali dio je šire mreže ljudi i zajednica koje grade Bitcoin sadržaj na vlastitim jezicima.",
  },
] as const

export const beginnerTopics = [
  "Što je Bitcoin?",
  "Zašto Bitcoin, a ne crypto?",
  "Kako kupiti prvi bitcoin?",
  "Kako čuvati bitcoin?",
  "Što je seed phrase?",
  "Što je Lightning?",
  "Najčešće greške početnika",
] as const

export const beginnerHighlights = [
  {
    title: "Počni od temelja",
    text: "Kreni od pitanja što je novac, zašto Bitcoin postoji i po čemu se razlikuje od šire crypto priče.",
  },
  {
    title: "Zaštiti sebe od početničkih grešaka",
    text: "Uči polako: sigurnost, samostalno skrbništvo i odgovornost dolaze prije bilo kakve kupnje.",
  },
  {
    title: "Koristi zajednicu kao filter",
    text: "Pitaj, provjeri i usporedi iskustva drugih prije nego što doneseš prve praktične odluke.",
  },
] as const

export const audienceItems = [
  "za ljude koji prvi put ozbiljno istražuju Bitcoin",
  "za one koji već imaju Bitcoin, ali žele dublje razumijevanje",
  "za poduzetnike i profesionalce koje zanimaju novac i dugoročna vrijednost",
  "za ljude koji žele razumjeti razliku između Bitcoina i drugih kriptovaluta",
  "za one koji žele učiti na jezicima koje govore i svakodnevno koriste",
  "za ljude koji ne traže brzu zaradu, nego jasnije razumijevanje",
  "za ljude koji žele upoznati druge iz regije koji razmišljaju slično",
] as const

export const notItems = [
  "nije trgovačka grupa",
  "nije mjesto za signale za kupnju i prodaju",
  "nije projekt o kriptovalutama općenito",
  "nije financijsko, porezno ili pravno savjetovanje",
  "nije obećanje zarade",
  "nije zamjena za vlastito razmišljanje i odgovornost",
  "nije projekt koji počiva na buci, cijenama i tržišnoj euforiji",
] as const

export const topics = [
  {
    title: "Što je novac?",
    text: "Razumijevanje novca kao temelja za sva druga pitanja o Bitcoinu.",
  },
  {
    title: "Inflacija i štednja",
    text: "Kako promjene u novcu utječu na svakodnevni život i dugoročne odluke.",
  },
  {
    title: "Bitcoin i osobna odgovornost",
    text: "Zašto Bitcoin traži ozbiljniji odnos prema vlastitim odlukama i znanju.",
  },
  {
    title: "Sigurnost i samostalno skrbništvo",
    text: "Osnove zaštite sredstava i razumijevanja odgovornosti koju Bitcoin nosi.",
  },
  {
    title: "Poduzetništvo i dugoročno razmišljanje",
    text: "Veza između Bitcoina, kapitala, rada i vremenskog horizonta.",
  },
  {
    title: "Razlika između Bitcoina i kriptovaluta",
    text: "Jasno odvajanje Bitcoina od šire i često zbunjujuće tržišne kategorije.",
  },
  {
    title: "Knjige, ideje i ekonomska povijest",
    text: "Izvori i razgovori koji pomažu širem razumijevanju novca i društva.",
  },
  {
    title: "Praktična uporaba Bitcoina",
    text: "Kako koristiti Bitcoin mirno, razumno i bez nepotrebnih komplikacija.",
  },
  {
    title: "Život na Bitcoin standardu",
    text: "Što znači dugoročno promišljati kroz drugačiji odnos prema novcu i vremenu.",
  },
  {
    title: "Regionalni i globalni kontekst",
    text: "Kako se Bitcoin prevodi u iskustva, pitanja i okolnosti našeg prostora.",
  },
  {
    title: "Lokalna zajednica i otvoreni projekti",
    text: "Mjesto za suradnju, povezivanje i zajednički rad na korisnim inicijativama.",
  },
  {
    title: "Prevođenje i širenje znanja",
    text: "Kako kvalitetne ideje učiniti dostupnima ljudima na jezicima regije.",
  },
] as const

export const articleCategories = [
  {
    label: "Osnove",
    title: "Što je Bitcoin?",
    text: "Temelji za ljude koji žele razumjeti Bitcoin bez buke i kratkoročnog tržišnog narativa.",
  },
  {
    label: "Bitcoin-only",
    title: "Zašto Bitcoin nije crypto?",
    text: "Jasno odvajanje Bitcoina od tokena, hype ciklusa i obećanja brze zarade.",
  },
  {
    label: "Sigurnost",
    title: "Kako čuvati bitcoin?",
    text: "Osnove samostalnog skrbništva, seed phrasea i odgovornosti koja dolazi s kontrolom nad vlastitim sredstvima.",
  },
  {
    label: "Praksa",
    title: "Kako krenuti bez žurbe",
    text: "Koraci za prve kupnje, prve novčanike i smiren početak bez prečaca i improvizacije.",
  },
  {
    label: "Kontekst",
    title: "Privatnost i odgovornost",
    text: "Zašto su privatnost, samostalnost i dugoročno razmišljanje sastavni dio Bitcoin puta.",
  },
  {
    label: "Perspektiva",
    title: "Bitcoin za Balkan",
    text: "Lokalni jezik, regionalne okolnosti i razgovori koji prevode globalnu temu u naš svakodnevni kontekst.",
  },
] as const

export const readingOrder = [
  {
    slug: "niko-ne-moze-zabraniti-bitcoin",
    label: "Što Bitcoin omogućuje",
    description:
      "Dobar prvi tekst za razumijevanje zašto je Bitcoin otvorena monetarna mreža.",
  },
  {
    slug: "zasto-je-vazna-decentralizacija-bitcoina",
    label: "Zašto je decentralizacija važna",
    description:
      "Nastavak koji objašnjava zašto je decentralizacija temelj Bitcoin vrijednosti.",
  },
  {
    slug: "bitcoin-privatnost-najbolje-prakse",
    label: "Privatnost i odgovornost",
    description:
      "Praktičan korak za ljude koji žele razumjeti sigurnost, tragove i zaštitu privatnosti.",
  },
  {
    slug: "bitcoin-je-vrijeme",
    label: "Dugoročno razmišljanje",
    description:
      "Tekst koji povezuje Bitcoin s vremenom, štednjom i promjenom horizonta razmišljanja.",
  },
  {
    slug: "never-stop-learning",
    label: "Učenje kao dio puta",
    description:
      "Podsjetnik da se razumijevanje Bitcoina gradi polako, kroz stalno učenje i provjeru pretpostavki.",
  },
] as const

export const articleCurations = [
  {
    slug: "niko-ne-moze-zabraniti-bitcoin",
    order: 1,
    topic: "Osnove",
    blurb:
      "Početni tekst o otvorenom pristupu, otpornosti i osnovnoj prirodi Bitcoin mreže.",
  },
  {
    slug: "zasto-je-vazna-decentralizacija-bitcoina",
    order: 2,
    topic: "Svojstva",
    blurb:
      "Zašto decentralizacija nije tehnički ukras, nego temelj vrijednosti i otpornosti.",
  },
  {
    slug: "bitcoin-privatnost-najbolje-prakse",
    order: 3,
    topic: "Privatnost",
    blurb:
      "Najvažnije prakse za privatnost, sigurnost i odgovoran odnos prema vlastitim tragovima.",
  },
  {
    slug: "bitcoin-je-vrijeme",
    order: 4,
    topic: "Vrijeme",
    blurb:
      "Bitcoin kao alat za drukčiji odnos prema vremenu, štednji i dugoročnom planiranju.",
  },
  {
    slug: "never-stop-learning",
    order: 5,
    topic: "Učenje",
    blurb:
      "Zašto je mirno, trajno učenje važnije od brzih zaključaka i površnog samopouzdanja.",
  },
  {
    slug: "btc-scenarij-uspjeha",
    order: 6,
    topic: "Perspektiva",
    blurb:
      "Tekst za širi pogled na to kako bi uspjeh Bitcoina mogao izgledati kroz vrijeme.",
  },
  {
    slug: "bitcoin-daje-ti-krila",
    order: 7,
    topic: "Kultura",
    blurb:
      "Bitcoin kao prostor slobode, inicijative i drukčijeg načina gledanja na osobnu odgovornost.",
  },
  {
    slug: "latin-american-bitcoin-perspective",
    order: 8,
    topic: "Regionalni kontekst",
    blurb:
      "Pogled iz Latinske Amerike koji pomaže prevesti globalni Bitcoin signal u lokalne okolnosti.",
  },
  {
    slug: "borba-protiv-monetarnog-kolonijalizma-pomocu-otvorenog-koda",
    order: 9,
    topic: "Sloboda",
    blurb:
      "Bitcoin kao alat monetarne emancipacije i otpora kolonijalnim obrascima kontrole.",
  },
  {
    slug: "selo-i-mocnik",
    order: 10,
    topic: "Društvo",
    blurb:
      "Dublji reportažni pogled na napetost između lokalne nade, države i stvarnih posljedica usvajanja.",
  },
] as const

export const openCommunityItems = [
  "pratite emisije i dijelite ih ljudima kojima mogu pomoći",
  "postavljajte pitanja i predlažite teme",
  "uključite se u razgovore",
  "pomozite oko prijevoda, bilješki, isječaka ili organizacije",
  "povežite se s ljudima iz regije koji rade na sličnim pitanjima",
  "pokrenite vlastitu lokalnu inicijativu ako za to postoji potreba",
] as const

export const startSteps = [
  {
    title: "Pogledajte nekoliko razgovora",
    text: "Krenite od tema koje vas prirodno zanimaju: novac, štednja, sigurnost, poduzetništvo ili razlika između Bitcoina i kriptovaluta.",
  },
  {
    title: "Postavite bolja pitanja",
    text: "Umjesto da pitate samo hoće li cijena rasti, krenite od pitanja što je novac, zašto ljudi štede i zašto dugoročna vrijednost uopće postoji.",
  },
  {
    title: "Uključite se u otvoreni prostor",
    text: "Pratite, pitajte, dijelite, predlažite teme i povežite se s ljudima koji žele učiti na sličan način.",
  },
  {
    title: "Gradite vlastito razumijevanje",
    text: "DvadesetJedan nije zamjena za vlastito razmišljanje. Cilj je pomoći vam da dođete do jasnijih pitanja, boljih izvora i odgovornijeg odnosa prema Bitcoinu.",
  },
] as const

export const principles = [
  {
    title: "Bitcoin, ne kriptovalute",
    text: "Fokus ostaje na Bitcoinu jer se radi o jedinstvenom monetarnom i tehnološkom fenomenu, a ne o prolaznoj tržišnoj kategoriji.",
  },
  {
    title: "Lokalni i regionalni jezik",
    text: "Ljudi najdublje razumiju složene ideje na jeziku na kojem stvarno misle, razgovaraju i donose odluke.",
  },
  {
    title: "Otvorenost",
    text: "Zajednica raste kada ljudi mogu lako pronaći sadržaj, postaviti pitanje i uključiti se bez nepotrebnih prepreka.",
  },
  {
    title: "Dosljednost",
    text: "Signal vrijedi tek kada traje. Zato je važnije stvarati redovito nego čekati savršen trenutak.",
  },
  {
    title: "Osobna odgovornost",
    text: "Bitcoin nije zamjena za vlastito razmišljanje, nego poziv da ga ozbiljnije razvijemo.",
  },
  {
    title: "Suradnja",
    text: "Nitko ne treba graditi sam. Najbolje stvari nastaju kada se povežu ljudi koji dijele vrijednosti i različite sposobnosti.",
  },
] as const

export const contributionItems = [
  "Predloži ili napiši članak",
  "Prevedi kvalitetan Bitcoin tekst",
  "Organiziraj događaj u svom gradu",
  "Prijavi grešku na stranici",
  "Pomozi oko dizajna ili koda",
  "Podijeli korisne resurse za početnike",
] as const

export const footerLinks = [
  { label: "Telegram", href: COMMUNITY_URL, external: true },
  { label: "Počni ovdje", href: BEGINNERS_URL, external: false },
  { label: "Članci", href: ARTICLES_URL, external: false },
  { label: "Teme", href: TOPICS_URL, external: false },
  { label: "Resursi", href: RESOURCES_URL, external: false },
  { label: "Livestream", href: LIVESTREAM_URL, external: false },
  { label: "YouTube kanal", href: YOUTUBE_URL, external: true },
  { label: "Događaji", href: EVENTS_URL, external: false },
  { label: "Gradovi", href: CITIES_URL, external: false },
  { label: "Zajednica", href: COMMUNITY_PAGE_URL, external: false },
  { label: "Doprinesi", href: CONTRIBUTE_URL, external: false },
  { label: "FAQ", href: FAQ_URL, external: false },
  { label: "Sigurnost", href: SAFETY_URL, external: false },
  { label: "GitHub", href: GITHUB_URL, external: true },
  { label: "TwentyOne.World", href: media.twentyOneUrl, external: true },
  { label: "Whitepaper", href: WHITEPAPER_URL, external: true },
  { label: "Bitcoin Core", href: BITCOIN_CORE_URL, external: true },
  { label: "Mempool", href: MEMPOOL_URL, external: true },
] as const

export const faqItems = [
  {
    question: "Je li DvadesetJedan dio twentyone.world?",
    answer:
      "Da. DvadesetJedan je regionalni izraz otvorenog twentyone koncepta: Bitcoin signal, lokalni jezik i otvorena zajednica za ljude koji govore i razumiju jezike našeg prostora.",
  },
  {
    question: "Je li DvadesetJedan projekt o kriptovalutama?",
    answer:
      "Ne. Fokus je isključivo na Bitcoinu. Kriptovalute kao šira kategorija nisu središte projekta.",
  },
  {
    question: "Je li ovo mjesto za investicijske savjete?",
    answer:
      "Ne. DvadesetJedan ne daje investicijske, porezne ni pravne savjete. Sadržaj je obrazovne i raspravne naravi.",
  },
  {
    question: "Moram li već imati Bitcoin da bih pratio DvadesetJedan?",
    answer:
      "Ne. DvadesetJedan je koristan i za ljude koji tek počinju istraživati Bitcoin i za one koji ga već dugo prate.",
  },
  {
    question: "Zašto se projekt zove DvadesetJedan?",
    answer:
      "Naziv upućuje na ograničenu ponudu Bitcoina od 21 milijun. Ta brojka simbolizira jedno od temeljnih svojstava Bitcoina: predvidljivu i ograničenu novčanu ponudu.",
  },
  {
    question: "Gdje mogu pratiti sadržaj?",
    answer:
      "Sadržaj možeš pratiti kroz Livestream stranicu, YouTube kanal, članke i Telegram grupu. Stranica služi kao središnje mjesto za arhivu i korisne poveznice.",
  },
  {
    question: "Kako se mogu uključiti?",
    answer:
      "Najjednostavnije je pratiti emisije, dijeliti korisne sadržaje, predlagati teme, postavljati pitanja i uključiti se u otvoreni prostor zajednice kroz Telegram grupu.",
  },
  {
    question: "Kako da počnem ako ne znam ništa o Bitcoinu?",
    answer:
      "Kreni od stranice Počni ovdje, pročitaj preporučene početne tekstove i postavljaj pitanja u Telegram grupi. Nije potrebno žuriti s kupnjom prije nego što razumiješ osnovne pojmove i sigurnost.",
  },
  {
    question: "Koji je prvi tekst koji trebam pročitati?",
    answer:
      "Najbolje je krenuti od početnog redoslijeda čitanja na stranici Članci ili Počni ovdje. Cilj nije proći što više tekstova, nego izgraditi jasnije razumijevanje korak po korak.",
  },
  {
    question: "Trebam li kupiti bitcoin prije nego što razumijem sigurnost?",
    answer:
      "Ne moraš. Prije bilo kakve kupnje važno je razumjeti osnove: što je Bitcoin, što znači samostalno skrbništvo, što je seed phrase i koje su najčešće početničke greške.",
  },
  {
    question: "Kako da zaštitim seed phrase?",
    answer:
      "Nikad ga ne fotografiraj, ne upisuj u nasumične web stranice, ne šalji privatnom porukom i ne drži ga samo u cloud bilješkama. Ako nisi siguran što radiš, pitaj javno u zajednici bez dijeljenja osjetljivih detalja.",
  },
  {
    question: "Kako prepoznati scam?",
    answer:
      "Pazi na privatne poruke, lažni support, hitnost, obećanja sigurne zarade i zahtjeve za seed phraseom ili privatnim ključem. Kad nešto zvuči hitno ili predobro, zastani i provjeri kroz javne kanale.",
  },
  {
    question: "Zašto ne pričate o altcoinima?",
    answer:
      "DvadesetJedan je Bitcoin-only projekt. Fokus je na Bitcoinu kao jedinstvenom monetarnom i tehnološkom fenomenu, a ne na tokenima, tradingu ili širem crypto tržištu.",
  },
  {
    question: "Kako mogu predložiti temu za livestream?",
    answer:
      "Najjednostavnije je javiti se u Telegram grupi i predložiti temu, pitanje ili gosta. Dobre teme su one koje pomažu ljudima razumjeti Bitcoin, novac, sigurnost, štednju i dugoročno razmišljanje.",
  },
  {
    question: "Kako mogu organizirati događaj u svom gradu?",
    answer:
      "Javi se u Telegram grupi, napiši grad i okvirnu ideju druženja. Događaj ne mora biti velik ni formalan; dovoljno je nekoliko ljudi, jasno vrijeme, jednostavna lokacija i Bitcoin-only fokus.",
  },
  {
    question: "Mogu li poslati prijevod ili članak?",
    answer:
      "Da. DvadesetJedan raste kroz doprinos zajednice. Možeš predložiti članak, prijevod, ispravak, temu ili tehničku promjenu kroz Telegram grupu ili GitHub repozitorij.",
  },
  {
    question: "Na kojem jeziku mogu pisati?",
    answer:
      "Piši na jeziku koji ljudi iz regije mogu prirodno razumjeti. Nije cilj jezična policija, nego jasnoća, ozbiljnost i regionalna razumljivost.",
  },
  {
    question: "Zašto Telegram, a ne samo web stranica?",
    answer:
      "Web stranica služi kao javni signal i arhiva, a Telegram kao otvoreni prostor za razgovor, pitanja, koordinaciju i povezivanje ljudi iz zajednice.",
  },
  {
    question: "Kako prijaviti grešku na stranici?",
    answer:
      "Grešku možeš prijaviti u Telegram grupi ili otvoriti issue odnosno pull request na GitHub repozitoriju.",
  },
] as const

function pickFaqItems(questions: readonly string[]) {
  return questions
    .map((question) => faqItems.find((item) => item.question === question))
    .filter((item): item is (typeof faqItems)[number] => Boolean(item))
}

export const faqGroups = [
  {
    title: "O projektu",
    items: pickFaqItems([
      "Je li DvadesetJedan dio twentyone.world?",
      "Zašto se projekt zove DvadesetJedan?",
      "Gdje mogu pratiti sadržaj?",
    ]),
  },
  {
    title: "Početnici",
    items: pickFaqItems([
      "Moram li već imati Bitcoin da bih pratio DvadesetJedan?",
      "Kako da počnem ako ne znam ništa o Bitcoinu?",
      "Koji je prvi tekst koji trebam pročitati?",
      "Trebam li kupiti bitcoin prije nego što razumijem sigurnost?",
      "Kako da zaštitim seed phrase?",
      "Kako prepoznati scam?",
    ]),
  },
  {
    title: "Bitcoin-only",
    items: pickFaqItems([
      "Je li DvadesetJedan projekt o kriptovalutama?",
      "Zašto ne pričate o altcoinima?",
      "Je li ovo mjesto za investicijske savjete?",
    ]),
  },
  {
    title: "Zajednica i doprinos",
    items: pickFaqItems([
      "Kako se mogu uključiti?",
      "Mogu li poslati prijevod ili članak?",
      "Na kojem jeziku mogu pisati?",
      "Kako prijaviti grešku na stranici?",
      "Zašto Telegram, a ne samo web stranica?",
    ]),
  },
  {
    title: "Događaji i livestream",
    items: pickFaqItems([
      "Kako mogu predložiti temu za livestream?",
      "Kako mogu organizirati događaj u svom gradu?",
    ]),
  },
] as const
