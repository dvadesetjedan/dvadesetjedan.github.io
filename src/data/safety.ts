export type SafetySection = {
  title: string
  summary: string
  points: string[]
}

export const safetySections: SafetySection[] = [
  {
    title: "Prvo pravilo: ne žuri",
    summary:
      "Bitcoin ne moraš kupiti danas. Prvo razumij osnovne pojmove, rizike i razliku između tuđeg obećanja i vlastite odgovornosti.",
    points: [
      "Ne reagiraj na pritisak, rokove i obećanja brze zarade.",
      "Ako nešto ne razumiješ, zastani i pitaj javno u zajednici.",
      "DvadesetJedan nije investicijski, pravni ni porezni savjet.",
    ],
  },
  {
    title: "Seed phrase",
    summary:
      "Seed phrase je backup kojim se može pristupiti tvojim sredstvima. Tko ima seed phrase, može potrošiti bitcoin povezan s tim novčanikom.",
    points: [
      "Nikad ga ne fotografiraj.",
      "Nikad ga ne upisuj u nasumične web stranice ili aplikacije.",
      "Nikad ga ne šalji privatnom porukom, emailom ili supportu.",
      "Nemoj ga držati samo u cloud bilješkama.",
    ],
  },
  {
    title: "Privatni ključ",
    summary:
      "Privatni ključ je kontrola, ne obična lozinka. Ako ga dijeliš, dijeliš kontrolu nad sredstvima.",
    points: [
      "Nitko iz zajednice ne treba tvoj privatni ključ.",
      "Pravi support nikad ne traži ključ ili seed phrase.",
      "Ako je ključ jednom kompromitiran, tretiraj ga kao nesiguran.",
    ],
  },
  {
    title: "Exchange vs self-custody",
    summary:
      "Na exchangeu obično imaš potraživanje prema servisu. U self-custody modelu samostalno držiš ključeve i preuzimaš veću odgovornost.",
    points: [
      "Ne moraš sve rješavati prvi dan.",
      "Razumij razliku prije većih odluka.",
      "Testiraj male iznose i procedure prije nego što se oslanjaš na njih.",
    ],
  },
  {
    title: "Hardware wallet",
    summary:
      "Hardware wallet može pomoći da ključ ne bude izložen računalu ili mobitelu. Uređaj nije magija: sigurnost ovisi i o backupu i navikama.",
    points: [
      "Kupuj samo iz pouzdanih izvora.",
      "Provjeri upute proizvođača i ne preskači backup.",
      "Ne dijeli ekran, seed phrase ili detalje setupa u javnosti.",
    ],
  },
  {
    title: "Phishing i lažni support",
    summary:
      "Najčešći napadi ciljaju pažnju, paniku i povjerenje. Lažni support često izgleda uvjerljivo.",
    points: [
      "Provjeri URL prije prijave ili preuzimanja aplikacije.",
      "Ne vjeruj privatnim porukama koje nude pomoć s walletom.",
      "Posebno pazi na hitnost, nagrade i obećanja povrata sredstava.",
    ],
  },
  {
    title: "Telegram i privatne poruke",
    summary:
      "Otvorena zajednica je korisna za pitanja, ali privatne poruke su čest prostor za scam.",
    points: [
      "Sumnjaj u privatne poruke koje nude ulaganje, support ili brzu pomoć.",
      "Ne dijeli iznose, wallet podatke ni osobne dokumente.",
      "Bolje je pitati javno i bez osjetljivih detalja.",
    ],
  },
  {
    title: "Što ne dijeliti javno",
    summary:
      "Javni razgovor je dobar za učenje, ali neke informacije ne pripadaju javnom prostoru.",
    points: [
      "Ne objavljuj koliko bitcoina imaš.",
      "Ne objavljuj seed phrase, xpub, privatne adrese ili dokumente.",
      "Ne objavljuj planove putovanja povezane sa skrbništvom ili uređajima.",
    ],
  },
  {
    title: "Sigurnost na meetupima",
    summary:
      "Meetupi su za razgovor i upoznavanje, ne za otkrivanje privatnih financijskih detalja.",
    points: [
      "Ne nosi seed phrase na događaj.",
      "Ne otkrivaj iznose koje držiš.",
      "Koristi javne najave i službene kanale za lokaciju i promjene.",
    ],
  },
  {
    title: "Kada pitati zajednicu",
    summary:
      "Pitaj prije nego što napraviš nepovratan korak. Dobro pitanje ne mora otkriti privatne podatke.",
    points: [
      "Pitaj ako ne razumiješ razliku između walleta i exchangea.",
      "Pitaj ako te netko požuruje ili traži privatne podatke.",
      "Pitaj ako nisi siguran je li link, aplikacija ili poruka legitimna.",
    ],
  },
]
