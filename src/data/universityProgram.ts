export const UNIVERSITY_PROGRAM_URL = "/bitcoin-na-univerzitetima-beograd/"

const baseContact =
  "mailto:kontakt@dvadesetjedan.com?subject=Bitcoin%20na%20univerzitetima%20Beograd%202026"

export const universityProgramLinks = {
  support:
    "mailto:kontakt@dvadesetjedan.com?subject=Sponzorstvo%20-%20Bitcoin%20na%20univerzitetima%20Beograd%202026",
  host: baseContact,
  interest: baseContact,
  student:
    "mailto:kontakt@dvadesetjedan.com?subject=Student%20-%20Bitcoin%20na%20univerzitetima%20Beograd%202026",
  organize:
    "mailto:kontakt@dvadesetjedan.com?subject=Organizacija%20-%20Bitcoin%20na%20univerzitetima%20Beograd%202026",
} as const

export type UniversityProgramCard = {
  title: string
  text: string
}

export type SponsorshipPackage = {
  title: string
  price: string
  benefits: string[]
}

export type FaqItem = {
  question: string
  answer: string
}

export const universityProgramFormats: UniversityProgramCard[] = [
  {
    title: "Predavanja na fakultetima",
    text: "60-75 minuta predavanja i 30 minuta pitanja.",
  },
  {
    title: "Radionice za manje grupe",
    text: "Praktične radionice o sigurnosti, čuvanju Bitcoina, Lightningu i osobnim financijama.",
  },
  {
    title: "Završni community meetup",
    text: "Otvoreni događaj za studente, profesore, developere, poduzetnike i Bitcoin zajednicu.",
  },
  {
    title: "Snimke i materijali",
    text: "Dio sadržaja objavit će se naknadno na DvadesetJedan kanalima.",
  },
]

export const universityProgramTopics: UniversityProgramCard[] = [
  {
    title: "Što je novac i zašto Bitcoin postoji?",
    text: "Inflacija, štednja, dug, kupovna moć i monetarna povijest.",
  },
  {
    title: "Kako Bitcoin radi bez centralne institucije?",
    text: "Proof-of-work, nodeovi, rudarenje, konsenzus i sigurnost mreže.",
  },
  {
    title: "Bitcoin i osobne financije",
    text: "Proračun, dug, štednja, DCA, volatilnost i dugoročno razmišljanje.",
  },
  {
    title: "Self-custody i sigurnost",
    text: "Što znači stvarno posjedovati Bitcoin i koje greške početnici najčešće rade.",
  },
  {
    title: "Lightning i Bitcoin plaćanja",
    text: "Kako Bitcoin može služiti kao mreža za plaćanja, a ne samo kao dugoročna štednja.",
  },
  {
    title: "Bitcoin, poduzetništvo i budućnost financijske infrastrukture",
    text: "Kako otvoreni monetarni protokol može utjecati na poslovanje, plaćanja i financijske usluge.",
  },
]

export const universityProgramAudience = [
  "studente ekonomije",
  "studente elektrotehnike i računalstva",
  "studente organizacijskih znanosti",
  "studente financija i menadžmenta",
  "mlade poduzetnike",
  "developere",
  "profesore i asistente koji žele otvoriti ozbiljan razgovor o digitalnom novcu",
] as const

export const universityProgramHosts = [
  "fakulteti",
  "studentske organizacije",
  "blockchain, fintech i IT klubovi",
  "profesori i asistenti",
  "coworking prostori",
  "lokalne Bitcoin i tech zajednice",
] as const

export const sponsorshipPackages: SponsorshipPackage[] = [
  {
    title: "Supporter",
    price: "500 €",
    benefits: [
      "logo na stranici serijala",
      "zahvala na društvenim mrežama",
      "spomen na završnom događaju",
    ],
  },
  {
    title: "Partner",
    price: "1.500 €",
    benefits: [
      "sve iz Supporter paketa",
      "istaknuti logo na stranici",
      "mogućnost kratkog predstavljanja na završnom meetupu",
      "mogućnost podjele edukativnih materijala",
    ],
  },
  {
    title: "Main partner",
    price: "3.000–5.000 €",
    benefits: [
      "sve iz Partner paketa",
      "status glavnog partnera serijala",
      "prisutnost na svim događajima",
      "isticanje u video materijalima i objavama",
      "mogućnost zajedničkog after-eventa",
    ],
  },
]

export const universityProgramNotItems = [
  "nije trading seminar",
  "nije promocija altcoina",
  "nije prodaja investicijskih proizvoda",
  "nije nagovor na kupnju",
  "nije financijski savjet",
  "nije KYC ili onboarding kampanja za burze",
] as const

export const universityProgramFaq: FaqItem[] = [
  {
    question: "Je li ovo investicijski seminar?",
    answer:
      "Ne. Serijal nije financijski savjet, nije trading seminar i nije nagovor na kupnju. Cilj je razumjeti Bitcoin kao monetarnu i tehnološku pojavu.",
  },
  {
    question: "Hoće li se pričati o drugim kriptovalutama?",
    answer:
      "Serijal je Bitcoin-first. Druge kriptovalute mogu se spomenuti samo kontekstualno, ali fokus nije na tokenima, altcoinima ni Web3 investiranju.",
  },
  {
    question: "Tko može ugostiti predavanje?",
    answer:
      "Fakulteti, studentske organizacije, profesori, asistenti, laboratoriji, klubovi i lokalne zajednice koje žele ozbiljan obrazovni sadržaj o Bitcoinu.",
  },
  {
    question: "Može li firma sponzorirati serijal?",
    answer:
      "Da, ako prihvaća obrazovni karakter serijala. Sponzorstvo ne uključuje promociju tokena, trading ponuda, investicijskih proizvoda ili pritisak na studente da postanu korisnici neke platforme.",
  },
  {
    question: "Kada počinje serijal?",
    answer:
      "Plan je jesen 2026., nakon početka nove akademske godine. Točni datumi bit će objavljeni nakon dogovora s partnerima i domaćinima.",
  },
]
