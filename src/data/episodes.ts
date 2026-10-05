export type EpisodeEntry = {
  slug: string
  title: string
  summary: string
  description?: string
  youtubeUrl: string
  publishedAt?: string
  summaryBullets?: string[]
  chapters?: { time: string; title: string }[]
  links?: { label: string; href: string }[]
  clips?: { label: string; href: string }[]
  transcriptUrl?: string
  relatedArticleSlugs?: string[]
  relatedEventSlugs?: string[]
  terms?: { term: string; explanation: string }[]
  needsShownotes?: boolean
}

export const episodes: EpisodeEntry[] = [
  {
    slug: "dvadesetjedan-livestream-2026-10-04",
    title:
      "Bitcoin ili zlato? Štednja, trendovi i self-custody | DvadesetJedan Uživo #218",
    summary:
      "U petosatnoj epizodi uspoređujemo Bitcoin i zlato te raspravljamo o dugoročnim trendovima, dugu i štednji. Velik dio razgovora posvećen je samostalnom čuvanju bitcoina: Bitcoin Coreu, enkripciji, sigurnosnim kopijama, multisigu i rizicima AI prijevara. Pavao pokazuje prototip Bitcoin Core Vaulta i objašnjava zamišljene uloge online čvora, offline signera i okruženja za izradu novčanika.",
    description:
      "U petosatnoj epizodi uspoređujemo Bitcoin i zlato te raspravljamo o dugoročnim trendovima, dugu i štednji. Velik dio razgovora posvećen je samostalnom čuvanju bitcoina: Bitcoin Coreu, enkripciji, sigurnosnim kopijama, multisigu i rizicima AI prijevara. Pavao pokazuje prototip Bitcoin Core Vaulta i objašnjava zamišljene uloge online čvora, offline signera i okruženja za izradu novčanika.\n\n00:00 Uvod i pozdravi\n01:34 Cijena Bitcoina, ciklusi i rudarenje\n08:35 Tržišni sentiment i FOMO\n10:19 Power law i dugoročni trend Bitcoina\n22:59 Pridružuju se Stefan i Arvin\n27:04 Blockstream, odgovornost i povjerenje u industriji\n39:26 Strategy, Stretch i rasprava o dividendama\n46:17 Američki dug, imovina i produktivnost uz AI\n56:10 Core Lightning i sigurnosne nadogradnje\n56:41 Bull Bitcoin i privatni SEPA transferi\n58:31 Blink Wallet i rizici skrbništva\n1:07:17 Život bez duga i osobna odgovornost\n1:10:32 Bitcoin izražen u zlatu: novi grafovi\n1:17:33 Stari hodleri, prodajni pritisak i AI trade\n1:22:14 Monetarna premija zlata i generacijske promjene\n1:28:13 Kamate, zlato i mogući izvori potražnje za Bitcoinom\n1:45:01 Obračunska jedinica i mjerenje prinosa\n1:48:24 Kako krediti stvaraju, a otplate brišu fiat novac\n1:59:22 Kako novim korisnicima približiti Bitcoin\n2:06:18 Pridružuje se Plumski\n2:12:17 Memecoini na Bitcoinu, naknade i rudarenje\n2:20:15 Sigurnost skrbnika i korisničkih računa\n2:25:23 AI videopozivi, lažno predstavljanje i phishing\n2:41:41 Yeti i rasprava o multisigu 3-od-7\n2:48:55 Bitcoin Core Vault, enkripcija i wallet.dat\n2:52:10 BIP39, lozinke i oporavak novčanika\n2:58:22 Sigurnosne kopije u oblaku i na fizičkim medijima\n3:08:14 Electrum, Sparrow i Bitcoin Core\n3:17:12 Online čvor, offline signer i Vault\n3:20:38 Multisig kao pravilo potrošnje, a ne zamjena za backup\n3:32:27 ETF-ovi i rizici povjeravanja bitcoina drugima\n3:45:00 Online ili offline: vlastiti model prijetnji\n3:51:45 Jačina lozinke i zaštita wallet.dat datoteke\n3:54:01 Bitcoin Core kao referentni klijent i njegovi forkovi\n4:01:05 BIP110, forkovi i povjerenje u javne osobe\n4:12:51 Prvi pogled na prototip Bitcoin Core Vaulta\n4:20:02 Provjera oporavka i sinkronizacija čvora\n4:25:14 Razvoj uz AI, testiranje i važnost pregleda koda\n4:31:01 DVD, M-DISC i dugoročno čuvanje sigurnosnih kopija\n4:36:40 Razvoj self-custody praksi i novi korisnici\n4:42:00 Plan dostupnosti alata i tutorijala\n4:46:19 Bitcoin na X-u: rasprave, influenceri i dezinformacije\n4:53:31 Tether, Fulgur i financiranje ekosustava\n4:58:40 Sofija, meetupi i završni pozdravi\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/watch?v=aMhsdLX1DbA",
    publishedAt: "2026-10-04",
    chapters: [
      { time: "00:00", title: "Uvod i pozdravi" },
      { time: "01:34", title: "Cijena Bitcoina, ciklusi i rudarenje" },
      { time: "08:35", title: "Tržišni sentiment i FOMO" },
      { time: "10:19", title: "Power law i dugoročni trend Bitcoina" },
      { time: "22:59", title: "Pridružuju se Stefan i Arvin" },
      {
        time: "27:04",
        title: "Blockstream, odgovornost i povjerenje u industriji",
      },
      { time: "39:26", title: "Strategy, Stretch i rasprava o dividendama" },
      { time: "46:17", title: "Američki dug, imovina i produktivnost uz AI" },
      { time: "56:10", title: "Core Lightning i sigurnosne nadogradnje" },
      { time: "56:41", title: "Bull Bitcoin i privatni SEPA transferi" },
      { time: "58:31", title: "Blink Wallet i rizici skrbništva" },
      { time: "1:07:17", title: "Život bez duga i osobna odgovornost" },
      { time: "1:10:32", title: "Bitcoin izražen u zlatu: novi grafovi" },
      { time: "1:17:33", title: "Stari hodleri, prodajni pritisak i AI trade" },
      {
        time: "1:22:14",
        title: "Monetarna premija zlata i generacijske promjene",
      },
      {
        time: "1:28:13",
        title: "Kamate, zlato i mogući izvori potražnje za Bitcoinom",
      },
      { time: "1:45:01", title: "Obračunska jedinica i mjerenje prinosa" },
      {
        time: "1:48:24",
        title: "Kako krediti stvaraju, a otplate brišu fiat novac",
      },
      { time: "1:59:22", title: "Kako novim korisnicima približiti Bitcoin" },
      { time: "2:06:18", title: "Pridružuje se Plumski" },
      { time: "2:12:17", title: "Memecoini na Bitcoinu, naknade i rudarenje" },
      { time: "2:20:15", title: "Sigurnost skrbnika i korisničkih računa" },
      {
        time: "2:25:23",
        title: "AI videopozivi, lažno predstavljanje i phishing",
      },
      { time: "2:41:41", title: "Yeti i rasprava o multisigu 3-od-7" },
      { time: "2:48:55", title: "Bitcoin Core Vault, enkripcija i wallet.dat" },
      { time: "2:52:10", title: "BIP39, lozinke i oporavak novčanika" },
      {
        time: "2:58:22",
        title: "Sigurnosne kopije u oblaku i na fizičkim medijima",
      },
      { time: "3:08:14", title: "Electrum, Sparrow i Bitcoin Core" },
      { time: "3:17:12", title: "Online čvor, offline signer i Vault" },
      {
        time: "3:20:38",
        title: "Multisig kao pravilo potrošnje, a ne zamjena za backup",
      },
      {
        time: "3:32:27",
        title: "ETF-ovi i rizici povjeravanja bitcoina drugima",
      },
      {
        time: "3:45:00",
        title: "Online ili offline: vlastiti model prijetnji",
      },
      {
        time: "3:51:45",
        title: "Jačina lozinke i zaštita wallet.dat datoteke",
      },
      {
        time: "3:54:01",
        title: "Bitcoin Core kao referentni klijent i njegovi forkovi",
      },
      { time: "4:01:05", title: "BIP110, forkovi i povjerenje u javne osobe" },
      { time: "4:12:51", title: "Prvi pogled na prototip Bitcoin Core Vaulta" },
      { time: "4:20:02", title: "Provjera oporavka i sinkronizacija čvora" },
      {
        time: "4:25:14",
        title: "Razvoj uz AI, testiranje i važnost pregleda koda",
      },
      {
        time: "4:31:01",
        title: "DVD, M-DISC i dugoročno čuvanje sigurnosnih kopija",
      },
      { time: "4:36:40", title: "Razvoj self-custody praksi i novi korisnici" },
      { time: "4:42:00", title: "Plan dostupnosti alata i tutorijala" },
      {
        time: "4:46:19",
        title: "Bitcoin na X-u: rasprave, influenceri i dezinformacije",
      },
      { time: "4:53:31", title: "Tether, Fulgur i financiranje ekosustava" },
      { time: "4:58:40", title: "Sofija, meetupi i završni pozdravi" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-09-27",
    title:
      "Tko kontrolira tvoj novac? Stablecoini, KYC i Bitcoin | DvadesetJedan Uživo #217",
    summary:
      "Pavao, Arvin i Stefan razgovaraju o državnom dugu, inflaciji i tome što znači imati novac pod vlastitom kontrolom. Kroz stablecoine, KYC i praktične prepreke plaćanju Bitcoinom razmatraju put prema Bitcoin standardu, a kriptošpekulacije suprotstavljaju radu i dugoročnoj štednji. Za kraj Pavao predstavlja prototip offline signera temeljenog na Bitcoin Coreu i Debianu, koji se pokreće s USB-a.",
    description:
      "Pavao, Arvin i Stefan razgovaraju o državnom dugu, inflaciji i tome što znači imati novac pod vlastitom kontrolom. Kroz stablecoine, KYC i praktične prepreke plaćanju Bitcoinom razmatraju put prema Bitcoin standardu, a kriptošpekulacije suprotstavljaju radu i dugoročnoj štednji. Za kraj Pavao predstavlja prototip offline signera temeljenog na Bitcoin Coreu i Debianu, koji se pokreće s USB-a.\n\n00:00 Uvod i pozdravi\n01:59 Tržište, hashrate i transakcijske naknade\n07:33 Sentiment, FOMO i oprez s polugom\n09:40 Power law i dugoročni trend Bitcoina\n25:13 Pridružuju se Arvin i Stefan\n28:49 Fiat novac, državni dug i tiskanje novca\n34:15 Kako funkcioniraju obveznice i kamatne stope\n39:43 Inflacija, produktivnost i kupovna moć\n43:26 Bitcoin kao alternativa fiat sustavu\n46:27 Bitget, zamrzavanje stablecoina i Tether\n50:10 PayCek, KYC i privatnost plaćanja\n55:56 Zašto Bitcoin plaćanja još nisu svakodnevica\n1:07:18 Shielded Bitcoin i zero-knowledge dokazi\n1:09:15 Stretch, dividende i rasprava o BIP110\n1:14:03 Filantropija, države i tehnološki napredak\n1:20:07 Meetupi i Bitcoin zajednica\n1:25:30 Kriptokasino, 100x i izlazna likvidnost\n1:35:50 Monero, privatnost i izbor novčanika\n1:42:07 Njemačka ekonomija, rad i sloboda\n1:49:28 XRP i mjerenje prinosa u Bitcoinu\n1:59:26 Bitcoin Core i samostalno čuvanje bitcoina\n2:05:10 Lightning: praktičnost i složenost\n2:06:43 Najava Bitcoin konferencije u Sofiji\n2:10:10 Bitcoin Core na USB-u: stateless offline signer\n2:16:41 Završne poruke\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/watch?v=w7k07EgMI-k",
    publishedAt: "2026-09-27",
    chapters: [
      { time: "00:00", title: "Uvod i pozdravi" },
      { time: "01:59", title: "Tržište, hashrate i transakcijske naknade" },
      { time: "07:33", title: "Sentiment, FOMO i oprez s polugom" },
      { time: "09:40", title: "Power law i dugoročni trend Bitcoina" },
      { time: "25:13", title: "Pridružuju se Arvin i Stefan" },
      { time: "28:49", title: "Fiat novac, državni dug i tiskanje novca" },
      { time: "34:15", title: "Kako funkcioniraju obveznice i kamatne stope" },
      { time: "39:43", title: "Inflacija, produktivnost i kupovna moć" },
      { time: "43:26", title: "Bitcoin kao alternativa fiat sustavu" },
      { time: "46:27", title: "Bitget, zamrzavanje stablecoina i Tether" },
      { time: "50:10", title: "PayCek, KYC i privatnost plaćanja" },
      { time: "55:56", title: "Zašto Bitcoin plaćanja još nisu svakodnevica" },
      { time: "1:07:18", title: "Shielded Bitcoin i zero-knowledge dokazi" },
      { time: "1:09:15", title: "Stretch, dividende i rasprava o BIP110" },
      { time: "1:14:03", title: "Filantropija, države i tehnološki napredak" },
      { time: "1:20:07", title: "Meetupi i Bitcoin zajednica" },
      { time: "1:25:30", title: "Kriptokasino, 100x i izlazna likvidnost" },
      { time: "1:35:50", title: "Monero, privatnost i izbor novčanika" },
      { time: "1:42:07", title: "Njemačka ekonomija, rad i sloboda" },
      { time: "1:49:28", title: "XRP i mjerenje prinosa u Bitcoinu" },
      { time: "1:59:26", title: "Bitcoin Core i samostalno čuvanje bitcoina" },
      { time: "2:05:10", title: "Lightning: praktičnost i složenost" },
      { time: "2:06:43", title: "Najava Bitcoin konferencije u Sofiji" },
      {
        time: "2:10:10",
        title: "Bitcoin Core na USB-u: stateless offline signer",
      },
      { time: "2:16:41", title: "Završne poruke" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-09-20",
    title:
      "Multisig nije backup: Bitcoin Core i čuvanje ključeva | DvadesetJedan Uživo #216",
    summary:
      "U ovoj epizodi Pavao prolazi kroz tržišni sentiment i Power Law model, a zatim raspravlja o mogućem dugoročnom padu hashratea, konkurenciji rudarenja i AI podatkovnih centara te ulozi naknada i potvrda u konačnosti transakcija. Drugi dio posvećen je self-custodyju: razlikama između multisiga i sigurnosnih kopija, Bitcoin Coreu, šifriranju novčanika, nasljeđivanju i rizicima složenih postava. Kroz pitanja gledatelja otvaraju se i teme entropije, vlastitog čvora i neovisne provjere.",
    description:
      "U ovoj epizodi Pavao prolazi kroz tržišni sentiment i Power Law model, a zatim raspravlja o mogućem dugoročnom padu hashratea, konkurenciji rudarenja i AI podatkovnih centara te ulozi naknada i potvrda u konačnosti transakcija. Drugi dio posvećen je self-custodyju: razlikama između multisiga i sigurnosnih kopija, Bitcoin Coreu, šifriranju novčanika, nasljeđivanju i rizicima složenih postava. Kroz pitanja gledatelja otvaraju se i teme entropije, vlastitog čvora i neovisne provjere.\n\n00:00 Pozdravi i uvod\n02:15 Cijena Bitcoina, sentiment i FOMO\n09:36 Power Law i dugoročni trend cijene\n22:51 Kritika Nunchuka i pristup self-custodyju\n30:35 Pad hashratea, rudarenje i AI podatkovni centri\n35:22 Security budget, potvrde i konačnost transakcija\n43:39 Iznos transakcije, naknade i vrijeme čekanja\n53:25 Više naknade, Lightning i svakodnevna plaćanja\n58:51 Clarity Act i tržišni katalizatori\n1:04:53 Multisig, sigurnosne kopije i šifriranje novčanika\n1:15:17 Bitcoin Core: pregled koda i rizik od bugova\n1:22:55 Namjensko računalo i vježba oporavka novčanika\n1:26:31 Hardverski novčanici i napadi kroz lanac opskrbe\n1:30:41 Vlastiti node, otpornost mreže i upravljanje rizikom\n1:40:17 Generički hardver, Linux i nasljeđivanje\n1:43:17 Entropija i generiranje privatnih ključeva\n1:47:55 BIP39, passphrase i cijena složenosti\n1:54:23 Složeniji multisig i backup cijelog novčanika\n2:00:00 Vlastiti node, privatnost i neovisna provjera\n2:04:14 Otvoreni kod i vlastite implementacije\n2:08:35 Završne poruke i druženja zajednice\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/watch?v=SFigZeSk-AY",
    publishedAt: "2026-09-20",
    chapters: [
      { time: "00:00", title: "Pozdravi i uvod" },
      { time: "02:15", title: "Cijena Bitcoina, sentiment i FOMO" },
      { time: "09:36", title: "Power Law i dugoročni trend cijene" },
      { time: "22:51", title: "Kritika Nunchuka i pristup self-custodyju" },
      {
        time: "30:35",
        title: "Pad hashratea, rudarenje i AI podatkovni centri",
      },
      {
        time: "35:22",
        title: "Security budget, potvrde i konačnost transakcija",
      },
      { time: "43:39", title: "Iznos transakcije, naknade i vrijeme čekanja" },
      {
        time: "53:25",
        title: "Više naknade, Lightning i svakodnevna plaćanja",
      },
      { time: "58:51", title: "Clarity Act i tržišni katalizatori" },
      {
        time: "1:04:53",
        title: "Multisig, sigurnosne kopije i šifriranje novčanika",
      },
      {
        time: "1:15:17",
        title: "Bitcoin Core: pregled koda i rizik od bugova",
      },
      {
        time: "1:22:55",
        title: "Namjensko računalo i vježba oporavka novčanika",
      },
      {
        time: "1:26:31",
        title: "Hardverski novčanici i napadi kroz lanac opskrbe",
      },
      {
        time: "1:30:41",
        title: "Vlastiti node, otpornost mreže i upravljanje rizikom",
      },
      { time: "1:40:17", title: "Generički hardver, Linux i nasljeđivanje" },
      { time: "1:43:17", title: "Entropija i generiranje privatnih ključeva" },
      { time: "1:47:55", title: "BIP39, passphrase i cijena složenosti" },
      {
        time: "1:54:23",
        title: "Složeniji multisig i backup cijelog novčanika",
      },
      {
        time: "2:00:00",
        title: "Vlastiti node, privatnost i neovisna provjera",
      },
      { time: "2:04:14", title: "Otvoreni kod i vlastite implementacije" },
      { time: "2:08:35", title: "Završne poruke i druženja zajednice" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-09-13",
    title:
      "Kockice ili računalo? Entropija, lozinke i sigurnost Bitcoina | DvadesetJedan Uživo #215",
    summary:
      "Pavao, Arvin i Stefan razgovaraju o tome kome vjerujemo kada čuvamo Bitcoin, uz raspravu o Liquidu, phishingu i hardverskim novčanicima. U središtu su Bitcoin Core na Linuxu, razlika između multisiga i sigurnosnih kopija te pitanje kada složeniji setup pomaže, a kada samo otežava stvari. Od pregleda tržišta i power law modela dolaze do entropije, jakih lozinki i rasprave o tome treba li slučajnost prepustiti računalu ili bacanju kockica.",
    description:
      "Pavao, Arvin i Stefan razgovaraju o tome kome vjerujemo kada čuvamo Bitcoin, uz raspravu o Liquidu, phishingu i hardverskim novčanicima. U središtu su Bitcoin Core na Linuxu, razlika između multisiga i sigurnosnih kopija te pitanje kada složeniji setup pomaže, a kada samo otežava stvari. Od pregleda tržišta i power law modela dolaze do entropije, jakih lozinki i rasprave o tome treba li slučajnost prepustiti računalu ili bacanju kockica.\n\n00:00 Uvod, tržište i stanje Bitcoin mreže\n08:28 Power law: cijena Bitcoina u odnosu na trend\n28:14 Liquid, LBTC i povjerenje u posrednike\n51:26 Phishing, hardverski novčanici i osobni podaci\n1:05:23 Hard fork, mining poolovi i cijena distrakcije\n1:19:41 Fizička sigurnost i kratke vijesti\n1:24:36 Bitcoin Core, Linux i self-custody\n1:25:30 Multisig ili šifrirani backup?\n1:34:09 Podjela kontrole i arbitraža s više ključeva\n1:40:22 Liana, vremenski uvjeti i politike trošenja\n1:43:12 Open source, provjera koda i povjerenje u izdanja\n1:50:01 Lozinke, entropija i ekonomika napada\n1:56:08 Sigurnosne kopije i slabe lozinke\n2:09:07 KeePassXC, kockice i slučajnost\n2:24:45 Mining, hashiranje i pogađanje brojeva\n2:29:41 Prvi principi i povjerenje u računala\n2:38:10 Rasprava: ručna ili računalna entropija?\n2:45:30 Tehnologija, AI i završne poruke\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/watch?v=niuCYdLreE0",
    publishedAt: "2026-09-13",
    chapters: [
      { time: "00:00", title: "Uvod, tržište i stanje Bitcoin mreže" },
      { time: "08:28", title: "Power law: cijena Bitcoina u odnosu na trend" },
      { time: "28:14", title: "Liquid, LBTC i povjerenje u posrednike" },
      {
        time: "51:26",
        title: "Phishing, hardverski novčanici i osobni podaci",
      },
      {
        time: "1:05:23",
        title: "Hard fork, mining poolovi i cijena distrakcije",
      },
      { time: "1:19:41", title: "Fizička sigurnost i kratke vijesti" },
      { time: "1:24:36", title: "Bitcoin Core, Linux i self-custody" },
      { time: "1:25:30", title: "Multisig ili šifrirani backup?" },
      {
        time: "1:34:09",
        title: "Podjela kontrole i arbitraža s više ključeva",
      },
      { time: "1:40:22", title: "Liana, vremenski uvjeti i politike trošenja" },
      {
        time: "1:43:12",
        title: "Open source, provjera koda i povjerenje u izdanja",
      },
      { time: "1:50:01", title: "Lozinke, entropija i ekonomika napada" },
      { time: "1:56:08", title: "Sigurnosne kopije i slabe lozinke" },
      { time: "2:09:07", title: "KeePassXC, kockice i slučajnost" },
      { time: "2:24:45", title: "Mining, hashiranje i pogađanje brojeva" },
      { time: "2:29:41", title: "Prvi principi i povjerenje u računala" },
      { time: "2:38:10", title: "Rasprava: ručna ili računalna entropija?" },
      { time: "2:45:30", title: "Tehnologija, AI i završne poruke" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-09-06",
    title:
      "Bitcoin self-custody od prvih principa: Core, stari laptop i sigurnost | DvadesetJedan Uživo #214",
    summary:
      "U ovom razgovoru uživo krećemo od cijene Bitcoina, power lawa i zone akumulacije, a zatim prolazimo kroz promjene u Ocean Miningu, BTC B2, američki CLARITY Act, stablecoine, tokenizaciju i tržište hardvera. Glavni dio epizode posvećen je sigurnom dugoročnom čuvanju Bitcoina: hardware walletima nasuprot Bitcoin Coreu, šifriranoj wallet.dat datoteci, passphrase entropiji, PSBT i watch-only workflowu, sinkronizaciji noda, starim laptopima te ekonomiji open-source sigurnosne provjere.",
    description:
      "U ovom razgovoru uživo krećemo od cijene Bitcoina, power lawa i zone akumulacije, a zatim prolazimo kroz promjene u Ocean Miningu, BTC B2, američki CLARITY Act, stablecoine, tokenizaciju i tržište hardvera. Glavni dio epizode posvećen je sigurnom dugoročnom čuvanju Bitcoina: hardware walletima nasuprot Bitcoin Coreu, šifriranoj wallet.dat datoteci, passphrase entropiji, PSBT i watch-only workflowu, sinkronizaciji noda, starim laptopima te ekonomiji open-source sigurnosne provjere.\n\n00:00 Uvod i cijena Bitcoina\n09:32 Power law i zona akumulacije\n19:48 Ocean Mining, Lightning i BTC B2\n29:50 CLARITY Act, stablecoini i tokenizacija\n57:00 Nvidia, AMD i tržište hardvera\n1:04:07 Hardware walleti protiv Bitcoin Corea\n1:17:39 wallet.dat, passphrase i sigurnosne kopije\n1:35:29 BIP39, entropija i sigurnosni model\n1:50:00 Praktični demo šifriranog Core walleta\n1:59:36 PSBT i watch-only workflow\n2:22:17 IBD, sinkronizacija i dugoročni node\n2:30:26 Node-in-a-box ili stari laptop\n2:40:00 Hardware napadi i fizička sigurnost\n3:00:00 Može li Bitcoin Core imati backdoor?\n3:19:57 Xapo i ekonomija sigurnosne provjere\n3:29:15 Self-custody, budući vodič i zaključak\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/watch?v=JcOkiuTagLA",
    publishedAt: "2026-09-06",
    chapters: [
      { time: "00:00", title: "Uvod i cijena Bitcoina" },
      { time: "09:32", title: "Power law i zona akumulacije" },
      { time: "19:48", title: "Ocean Mining, Lightning i BTC B2" },
      { time: "29:50", title: "CLARITY Act, stablecoini i tokenizacija" },
      { time: "57:00", title: "Nvidia, AMD i tržište hardvera" },
      { time: "1:04:07", title: "Hardware walleti protiv Bitcoin Corea" },
      { time: "1:17:39", title: "wallet.dat, passphrase i sigurnosne kopije" },
      { time: "1:35:29", title: "BIP39, entropija i sigurnosni model" },
      { time: "1:50:00", title: "Praktični demo šifriranog Core walleta" },
      { time: "1:59:36", title: "PSBT i watch-only workflow" },
      { time: "2:22:17", title: "IBD, sinkronizacija i dugoročni node" },
      { time: "2:30:26", title: "Node-in-a-box ili stari laptop" },
      { time: "2:40:00", title: "Hardware napadi i fizička sigurnost" },
      { time: "3:00:00", title: "Može li Bitcoin Core imati backdoor?" },
      { time: "3:19:57", title: "Xapo i ekonomija sigurnosne provjere" },
      { time: "3:29:15", title: "Self-custody, budući vodič i zaključak" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-08-30",
    title:
      '"Fiat od svih nas pravi kockare" - dug, leverage i Bitcoin | DvadesetJedan Uživo #213',
    summary:
      "Bitcoin razgovor uživo: dugoročni pogled na cijenu i tržišni ciklus, skrbništvo nad bitcoinom, Bitcoin Core, multisig, Strategy, hard forkovi, rizici leveragea i uloga AI-ja u radu.",
    description:
      "Bitcoin razgovor uživo: dugoročni pogled na cijenu i tržišni ciklus, skrbništvo nad bitcoinom, Bitcoin Core, multisig, Strategy, hard forkovi, rizici leveragea i uloga AI-ja u radu.\n\n00:00 Uvod\n02:06 Tržišni pregled i dugoročni trend Bitcoina\n29:32 Multisig i pristup self-custodyju\n45:05 Self-custody, skrbnici i Lightning\n01:10:37 Strategy i Michael Saylor\n01:32:53 Hard forkovi i pravila konsenzusa\n01:48:27 Rudarenje, cenzura i sigurnost mreže\n02:02:44 AI, alati i tehnička samostalnost\n02:24:35 Podjela rada, ekonomija i samodostatnost\n02:48:07 Dug, kredit i upravljanje rizikom\n03:10:18 Leverage, disciplina i dugoročno planiranje\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/watch?v=cDrDSh7QECk",
    publishedAt: "2026-08-30",
    chapters: [
      { time: "00:00", title: "Uvod" },
      { time: "02:06", title: "Tržišni pregled i dugoročni trend Bitcoina" },
      { time: "29:32", title: "Multisig i pristup self-custodyju" },
      { time: "45:05", title: "Self-custody, skrbnici i Lightning" },
      { time: "01:10:37", title: "Strategy i Michael Saylor" },
      { time: "01:32:53", title: "Hard forkovi i pravila konsenzusa" },
      { time: "01:48:27", title: "Rudarenje, cenzura i sigurnost mreže" },
      { time: "02:02:44", title: "AI, alati i tehnička samostalnost" },
      { time: "02:24:35", title: "Podjela rada, ekonomija i samodostatnost" },
      { time: "02:48:07", title: "Dug, kredit i upravljanje rizikom" },
      {
        time: "03:10:18",
        title: "Leverage, disciplina i dugoročno planiranje",
      },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-08-23",
    title:
      "Bitcoin Core, full node i sigurnosni trade-offovi | DvadesetJedan Uživo #212",
    summary:
      "U ovoj epizodi DvadesetJedan Uživo razgovaramo o kretanju cijene i sentimentu, zatim prelazimo na PSBT tok, Bitcoin Core, full nodeove i različite pristupe samoskrbništvu. Velik dio razgovora posvećen je wallet.dat datoteci, sigurnosnim trade-offovima, backupima i entropiji lozinki.",
    description:
      "U ovoj epizodi DvadesetJedan Uživo razgovaramo o kretanju cijene i sentimentu, zatim prelazimo na PSBT tok, Bitcoin Core, full nodeove i različite pristupe samoskrbništvu. Velik dio razgovora posvećen je wallet.dat datoteci, sigurnosnim trade-offovima, backupima i entropiji lozinki.\n\n00:00 Pregled cijene Bitcoina i sentimenta\n08:20 Power Law i dugoročni trend\n16:56 Uvod u samoskrbništvo i sigurnosne temelje\n26:25 PSBT i praktični tok samoskrbništva\n31:12 Vježbanje transakcija na signetu\n35:53 Privatnost, rizik i threat model\n40:39 Otvoreni kod, alati i sigurnost softvera\n50:22 Demonstracija izrade PSBT transakcije\n59:44 BIP39, uređaji i sigurnosne pretpostavke\n1:09:12 wallet.dat, deskriptori i oporavak novčanika\n1:18:34 Taproot, uvjeti trošenja i složeniji novčanici\n1:27:36 Passphrase i razumijevanje sigurnosnih kompromisa\n1:36:59 Backup wallet.dat datoteke i scenariji oporavka\n1:46:26 Dugoročna štednja, Bitcoin Core i vlastita infrastruktura\n1:55:43 Rizici korisničkih baza, phishinga i sigurnosnog marketinga\n2:05:15 Bitcoin, zlato i prijenos vrijednosti\n2:14:56 Sinkronizacija, pruned node i provjera vlastitim čvorom\n2:19:48 Povjerenje, skrbništvo i provjeravanje pravila\n2:28:52 Edukacija, strpljenje i uključivanje novih korisnika\n2:38:09 Linux i otvorena infrastruktura\n2:42:37 Dugoročna pohrana i bit rot\n2:51:14 Entropija i izrada jake passphrase\n3:00:02 Generiranje riječi i ravnoteža sigurnosti i upotrebljivosti\n3:09:35 Zajednica, pitanja i završni pozdrav\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/watch?v=bfyzf4Zg2JY",
    publishedAt: "2026-08-23",
    chapters: [
      { time: "00:00", title: "Pregled cijene Bitcoina i sentimenta" },
      { time: "08:20", title: "Power Law i dugoročni trend" },
      { time: "16:56", title: "Uvod u samoskrbništvo i sigurnosne temelje" },
      { time: "26:25", title: "PSBT i praktični tok samoskrbništva" },
      { time: "31:12", title: "Vježbanje transakcija na signetu" },
      { time: "35:53", title: "Privatnost, rizik i threat model" },
      { time: "40:39", title: "Otvoreni kod, alati i sigurnost softvera" },
      { time: "50:22", title: "Demonstracija izrade PSBT transakcije" },
      { time: "59:44", title: "BIP39, uređaji i sigurnosne pretpostavke" },
      {
        time: "1:09:12",
        title: "wallet.dat, deskriptori i oporavak novčanika",
      },
      {
        time: "1:18:34",
        title: "Taproot, uvjeti trošenja i složeniji novčanici",
      },
      {
        time: "1:27:36",
        title: "Passphrase i razumijevanje sigurnosnih kompromisa",
      },
      {
        time: "1:36:59",
        title: "Backup wallet.dat datoteke i scenariji oporavka",
      },
      {
        time: "1:46:26",
        title: "Dugoročna štednja, Bitcoin Core i vlastita infrastruktura",
      },
      {
        time: "1:55:43",
        title: "Rizici korisničkih baza, phishinga i sigurnosnog marketinga",
      },
      { time: "2:05:15", title: "Bitcoin, zlato i prijenos vrijednosti" },
      {
        time: "2:14:56",
        title: "Sinkronizacija, pruned node i provjera vlastitim čvorom",
      },
      {
        time: "2:19:48",
        title: "Povjerenje, skrbništvo i provjeravanje pravila",
      },
      {
        time: "2:28:52",
        title: "Edukacija, strpljenje i uključivanje novih korisnika",
      },
      { time: "2:38:09", title: "Linux i otvorena infrastruktura" },
      { time: "2:42:37", title: "Dugoročna pohrana i bit rot" },
      { time: "2:51:14", title: "Entropija i izrada jake passphrase" },
      {
        time: "3:00:02",
        title: "Generiranje riječi i ravnoteža sigurnosti i upotrebljivosti",
      },
      { time: "3:09:35", title: "Zajednica, pitanja i završni pozdrav" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-08-16",
    title: "Od tržišta do samoskrbništva | DvadesetJedan Uživo #211",
    summary:
      "Današnji DvadesetJedan Uživo donosi razgovor o Bitcoinu, tržišnom kontekstu i dugoročnim modelima, a zatim i opsežnu raspravu o samoskrbništvu: entropiji, Bitcoin Coreu, sigurnosnim kopijama, testiranju postupka oporavka i složenosti multisiga. Dotaknuli smo se i rudarenja, AI-ja te ekonomskih poticaja različitih aktera u Bitcoin ekosustavu.",
    description:
      "Današnji DvadesetJedan Uživo donosi razgovor o Bitcoinu, tržišnom kontekstu i dugoročnim modelima, a zatim i opsežnu raspravu o samoskrbništvu: entropiji, Bitcoin Coreu, sigurnosnim kopijama, testiranju postupka oporavka i složenosti multisiga. Dotaknuli smo se i rudarenja, AI-ja te ekonomskih poticaja različitih aktera u Bitcoin ekosustavu.\n\n00:00 Bitcoin: tržište, blokovi i dugoročni trend\n17:30 Entropija, kockice i početak razgovora o walletima\n37:09 Bitcoin Core, node i sinkronizacija\n49:37 Samoskrbništvo i rizici hardware walleta\n01:14:45 Sigurnosni kompromisi različitih walleta\n01:29:43 Core i računalo opće namjene\n01:44:59 Entropija i put do sigurnog setupa\n02:05:08 Enkripcija i sigurnosne kopije\n02:25:13 Otvorenost softvera i odgovornost zajednice\n02:45:17 Praktičnost i sigurnosna odgovornost\n03:04:43 Rudarska industrija i promjene kroz cikluse\n03:30:22 Cijena, blokovna nagrada i dugoročni pogled\n04:00:30 Rudarenje, energija i AI podatkovni centri\n04:20:16 Tehnologija, rad i stvaranje korisne vrijednosti\n04:50:00 Backup, dokumentacija i oporavak walleta\n05:10:21 Objašnjenje postupka i održavanje setupa\n05:28:36 Softver, održavanje i rizik grešaka\n05:59:35 Poticaji aktera, Strategy i završne misli\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/watch?v=LNp6pARWNH0",
    publishedAt: "2026-08-16",
    chapters: [
      { time: "00:00", title: "Bitcoin: tržište, blokovi i dugoročni trend" },
      {
        time: "17:30",
        title: "Entropija, kockice i početak razgovora o walletima",
      },
      { time: "37:09", title: "Bitcoin Core, node i sinkronizacija" },
      { time: "49:37", title: "Samoskrbništvo i rizici hardware walleta" },
      { time: "01:14:45", title: "Sigurnosni kompromisi različitih walleta" },
      { time: "01:29:43", title: "Core i računalo opće namjene" },
      { time: "01:44:59", title: "Entropija i put do sigurnog setupa" },
      { time: "02:05:08", title: "Enkripcija i sigurnosne kopije" },
      {
        time: "02:25:13",
        title: "Otvorenost softvera i odgovornost zajednice",
      },
      { time: "02:45:17", title: "Praktičnost i sigurnosna odgovornost" },
      {
        time: "03:04:43",
        title: "Rudarska industrija i promjene kroz cikluse",
      },
      {
        time: "03:30:22",
        title: "Cijena, blokovna nagrada i dugoročni pogled",
      },
      { time: "04:00:30", title: "Rudarenje, energija i AI podatkovni centri" },
      {
        time: "04:20:16",
        title: "Tehnologija, rad i stvaranje korisne vrijednosti",
      },
      { time: "04:50:00", title: "Backup, dokumentacija i oporavak walleta" },
      { time: "05:10:21", title: "Objašnjenje postupka i održavanje setupa" },
      { time: "05:28:36", title: "Softver, održavanje i rizik grešaka" },
      { time: "05:59:35", title: "Poticaji aktera, Strategy i završne misli" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-08-09",
    title:
      "BIP110, sigurnost novčanika i povratak osnovama | DvadesetJedan Uživo #210",
    summary:
      "U ovom izdanju DvadesetJedan Uživo zajednica raspravlja o BIP110, ulozi rudara i mining poolova, relay politici, mogućim scenarijima forka, privatnosti, Lightningu, CoinJoinu, regulatornim pritiscima i kvantnoj otpornosti Bitcoina.",
    description:
      "U ovom izdanju DvadesetJedan Uživo zajednica raspravlja o BIP110, ulozi rudara i mining poolova, relay politici, mogućim scenarijima forka, privatnosti, Lightningu, CoinJoinu, regulatornim pritiscima i kvantnoj otpornosti Bitcoina.\n\n00:00 Uvod i tržišni kontekst\n10:04 BIP110: prvi blokovi i reakcije\n15:23 Što fork znači za rudare\n33:26 Difficulty adjustment i mogući ishodi\n40:20 Može li kućni mining imati smisla?\n45:30 Sigurnost novčanika i Coldcard rasprava\n48:02 AI, red teamovi i open-weights modeli\n55:35 Što AI mijenja u sigurnosnom istraživanju\n1:10:10 Gubici, odgovornost i povratak osnovama\n1:25:01 Povjerenje, otvoreni modeli i transparentnost\n1:30:35 Taproot, podaci i rasprava o “spamu”\n1:40:12 Fork, Core i povjerenje u proces\n1:48:14 Kako ostati smiren kroz Bitcoin drame\n1:55:15 Influenceri, Core developeri i otvoreni proces\n2:05:08 Zajednica, emocije i kult ličnosti\n2:16:17 DvadesetJedan: više druženja i vodič za self-custody\n2:22:48 Bitcoin Core, BIP39 i postupno učenje\n2:32:01 Trust minimized, ne trust removed\n2:37:03 Entropija, otvoreni kod i odgovornost\n2:49:25 UX, sloboda i odgovornost\n2:52:16 Custody, self-custody i učenje bez žurbe\n2:57:39 Čvorovi, stara računala i praktične granice\n3:06:57 Zajednica, sljedeći koraci i zatvaranje\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/watch?v=0To9IuXy0MA",
    publishedAt: "2026-08-09",
    chapters: [
      { time: "00:00", title: "Uvod i tržišni kontekst" },
      { time: "10:04", title: "BIP110: prvi blokovi i reakcije" },
      { time: "15:23", title: "Što fork znači za rudare" },
      { time: "33:26", title: "Difficulty adjustment i mogući ishodi" },
      { time: "40:20", title: "Može li kućni mining imati smisla?" },
      { time: "45:30", title: "Sigurnost novčanika i Coldcard rasprava" },
      { time: "48:02", title: "AI, red teamovi i open-weights modeli" },
      { time: "55:35", title: "Što AI mijenja u sigurnosnom istraživanju" },
      { time: "1:10:10", title: "Gubici, odgovornost i povratak osnovama" },
      {
        time: "1:25:01",
        title: "Povjerenje, otvoreni modeli i transparentnost",
      },
      { time: "1:30:35", title: "Taproot, podaci i rasprava o “spamu”" },
      { time: "1:40:12", title: "Fork, Core i povjerenje u proces" },
      { time: "1:48:14", title: "Kako ostati smiren kroz Bitcoin drame" },
      {
        time: "1:55:15",
        title: "Influenceri, Core developeri i otvoreni proces",
      },
      { time: "2:05:08", title: "Zajednica, emocije i kult ličnosti" },
      {
        time: "2:16:17",
        title: "DvadesetJedan: više druženja i vodič za self-custody",
      },
      { time: "2:22:48", title: "Bitcoin Core, BIP39 i postupno učenje" },
      { time: "2:32:01", title: "Trust minimized, ne trust removed" },
      { time: "2:37:03", title: "Entropija, otvoreni kod i odgovornost" },
      { time: "2:49:25", title: "UX, sloboda i odgovornost" },
      { time: "2:52:16", title: "Custody, self-custody i učenje bez žurbe" },
      { time: "2:57:39", title: "Čvorovi, stara računala i praktične granice" },
      { time: "3:06:57", title: "Zajednica, sljedeći koraci i zatvaranje" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-08-02",
    title:
      "Kako razmišljati o sigurnosti Bitcoin novčanika | DvadesetJedan Uživo #208",
    summary:
      "U ovom izdanju DvadesetJedan Uživo razgovaramo o sigurnosti Bitcoin self-custodyja: kako razmišljati o entropiji pri izradi seeda, passphraseu, multisigu i vlastitom modelu zaštite.",
    description:
      "U ovom izdanju DvadesetJedan Uživo razgovaramo o sigurnosti Bitcoin self-custodyja: kako razmišljati o entropiji pri izradi seeda, passphraseu, multisigu i vlastitom modelu zaštite.\n\n00:00 Uvod: kontekst i okvir razgovora\n15:05 Seed, passphrase i pitanja o sigurnosti\n25:07 Entropija i ovisnosti u softverskom lancu\n34:55 Licence otvorenog koda i pregled implementacije\n54:52 Kritika uređaja i povjerenje u recenziju koda\n1:05:12 Tehničko objašnjenje ponašanja firmwarea\n1:25:01 Rasprava o načelima i ulozi skrbništva\n1:45:05 Testiranje uređaja i ograničenja provjere\n2:04:59 Privatnost, sigurnost i pomoć osobama u riziku\n2:24:49 Prijevare, napadi i posljedice pogrešaka\n2:45:10 Što incident mijenja u Bitcoin razgovoru\n3:05:01 Savjetovanje početnika bez univerzalnog recepta\n3:24:56 Passphrase, entropija i trošak napada\n3:44:59 Upute, složenost postavki i granice iskustva\n3:55:08 Otvoreni kod, kvaliteta proizvoda i odgovornost\n4:04:47 Poticaji, plaćeni rad i sigurnosna provjera\n4:15:03 Komunikacija zajednice nakon incidenta\n4:35:13 Kako uspoređivati proizvode: dokaz umjesto plemenskog navijanja\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/watch?v=yXbWpsNaqAk",
    publishedAt: "2026-08-02",
    chapters: [
      { time: "00:00", title: "Uvod: kontekst i okvir razgovora" },
      { time: "15:05", title: "Seed, passphrase i pitanja o sigurnosti" },
      { time: "25:07", title: "Entropija i ovisnosti u softverskom lancu" },
      {
        time: "34:55",
        title: "Licence otvorenog koda i pregled implementacije",
      },
      { time: "54:52", title: "Kritika uređaja i povjerenje u recenziju koda" },
      { time: "1:05:12", title: "Tehničko objašnjenje ponašanja firmwarea" },
      { time: "1:25:01", title: "Rasprava o načelima i ulozi skrbništva" },
      { time: "1:45:05", title: "Testiranje uređaja i ograničenja provjere" },
      {
        time: "2:04:59",
        title: "Privatnost, sigurnost i pomoć osobama u riziku",
      },
      { time: "2:24:49", title: "Prijevare, napadi i posljedice pogrešaka" },
      { time: "2:45:10", title: "Što incident mijenja u Bitcoin razgovoru" },
      {
        time: "3:05:01",
        title: "Savjetovanje početnika bez univerzalnog recepta",
      },
      { time: "3:24:56", title: "Passphrase, entropija i trošak napada" },
      {
        time: "3:44:59",
        title: "Upute, složenost postavki i granice iskustva",
      },
      {
        time: "3:55:08",
        title: "Otvoreni kod, kvaliteta proizvoda i odgovornost",
      },
      { time: "4:04:47", title: "Poticaji, plaćeni rad i sigurnosna provjera" },
      { time: "4:15:03", title: "Komunikacija zajednice nakon incidenta" },
      {
        time: "4:35:13",
        title:
          "Kako uspoređivati proizvode: dokaz umjesto plemenskog navijanja",
      },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-07-26",
    title:
      "Tko postavlja pravila Bitcoina, BIP110 i relay politika | DvadesetJedan Uživo #207",
    summary:
      "U ovom izdanju DvadesetJedan Uživo zajednica raspravlja o BIP110, ulozi rudara i mining poolova, relay politici, mogućim scenarijima forka, privatnosti, Lightningu, CoinJoinu, regulatornim pritiscima i kvantnoj otpornosti Bitcoina.",
    description:
      "U ovom izdanju DvadesetJedan Uživo zajednica raspravlja o BIP110, ulozi rudara i mining poolova, relay politici, mogućim scenarijima forka, privatnosti, Lightningu, CoinJoinu, regulatornim pritiscima i kvantnoj otpornosti Bitcoina.\n\n00:00 Uvod i tehničke napomene\n01:33 Tržišni kontekst i dugoročni grafovi\n15:11 Početak rasprave o BIP110\n29:53 Mining poolovi i centralizacija\n38:20 Signaliziranje, rudari i mogući scenariji\n44:44 Potvrde transakcija i manjinski lanac\n49:22 Oprez pri nadogradnji Bitcoin softvera\n1:09:28 Ordinalsi, inskripcije i relay politika\n1:20:17 Svojstva Bitcoina, Lightning i privatnost\n1:36:02 Različiti pogledi na relay i razvoj Corea\n1:40:22 Privatnost, CoinJoin i regulatorna pitanja\n1:50:01 Osobna sigurnost i modeli novčanika\n1:56:41 Pitanja zajednice: Lightning i NSEC\n1:57:45 Kvantna otpornost i mogući fork\n2:10:38 Pitanja publike i nastavak razgovora\n2:20:18 Korištenje Bitcoina i regulatorni kontekst\n2:35:19 Kripto-regulacija i razgraničenja\n2:40:28 Pravo, zaštita korisnika i odgovor na pritiske\n2:50:17 Povijesna pitanja i završna rasprava\n3:00:25 Odjava i poveznice zajednice\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/watch?v=ftgT_BIxgpU",
    publishedAt: "2026-07-26",
    chapters: [
      { time: "00:00", title: "Uvod i tehničke napomene" },
      { time: "01:33", title: "Tržišni kontekst i dugoročni grafovi" },
      { time: "15:11", title: "Početak rasprave o BIP110" },
      { time: "29:53", title: "Mining poolovi i centralizacija" },
      { time: "38:20", title: "Signaliziranje, rudari i mogući scenariji" },
      { time: "44:44", title: "Potvrde transakcija i manjinski lanac" },
      { time: "49:22", title: "Oprez pri nadogradnji Bitcoin softvera" },
      { time: "1:09:28", title: "Ordinalsi, inskripcije i relay politika" },
      { time: "1:20:17", title: "Svojstva Bitcoina, Lightning i privatnost" },
      { time: "1:36:02", title: "Različiti pogledi na relay i razvoj Corea" },
      { time: "1:40:22", title: "Privatnost, CoinJoin i regulatorna pitanja" },
      { time: "1:50:01", title: "Osobna sigurnost i modeli novčanika" },
      { time: "1:56:41", title: "Pitanja zajednice: Lightning i NSEC" },
      { time: "1:57:45", title: "Kvantna otpornost i mogući fork" },
      { time: "2:10:38", title: "Pitanja publike i nastavak razgovora" },
      { time: "2:20:18", title: "Korištenje Bitcoina i regulatorni kontekst" },
      { time: "2:35:19", title: "Kripto-regulacija i razgraničenja" },
      {
        time: "2:40:28",
        title: "Pravo, zaštita korisnika i odgovor na pritiske",
      },
      { time: "2:50:17", title: "Povijesna pitanja i završna rasprava" },
      { time: "3:00:25", title: "Odjava i poveznice zajednice" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-07-19",
    title: "BIP110, skrbništvo i Bitcoin standard | DvadesetJedan uživo #206",
    summary:
      "U ovom izdanju DvadesetJedan Uživo razgovaramo o dugoročnom tržišnom kontekstu, BIP110, skrbništvu, ekonomskim full nodeovima, ETF-ovima i drugim oblicima posredovanog izlaganja Bitcoinu te tehničkim mogućnostima poput Taproota i nasljeđivanja.",
    description:
      "U ovom izdanju DvadesetJedan Uživo razgovaramo o dugoročnom tržišnom kontekstu, BIP110, skrbništvu, ekonomskim full nodeovima, ETF-ovima i drugim oblicima posredovanog izlaganja Bitcoinu te tehničkim mogućnostima poput Taproota i nasljeđivanja.\n\n00:00 Uvod i pregled tema\n05:59 Dugoročni trend i tržišni kontekst\n13:25 BIP110 i pitanja iz chata\n30:16 Veliki transferi, prijevare i skrbništvo\n43:28 Skrbništvo i proizvodi vezani uz Bitcoin\n50:35 Scenariji aktivacije BIP110\n1:04:32 Poticaji rudara i ekonomska potražnja\n1:13:26 Neutralnost, cenzura i mogući rascjep\n1:22:36 Spam i svrha Bitcoina\n1:40:35 Što čini ekonomski full node\n1:55:27 Provjerljivost ETF-ova i skrbnika\n2:00:15 Fiat banke i Bitcoin skrbništvo\n2:03:06 Vlasništvo, posjed i self-custody\n2:17:21 Power Law model i tržišni ciklusi\n2:25:21 Paper Bitcoin, zlato i leverage\n2:35:45 Taproot, nasljeđivanje i tehnički razvoj\n2:47:19 Završne misli: BIP110 i Ark\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/watch?v=2mOL2N1ioeU",
    publishedAt: "2026-07-19",
    chapters: [
      { time: "00:00", title: "Uvod i pregled tema" },
      { time: "05:59", title: "Dugoročni trend i tržišni kontekst" },
      { time: "13:25", title: "BIP110 i pitanja iz chata" },
      { time: "30:16", title: "Veliki transferi, prijevare i skrbništvo" },
      { time: "43:28", title: "Skrbništvo i proizvodi vezani uz Bitcoin" },
      { time: "50:35", title: "Scenariji aktivacije BIP110" },
      { time: "1:04:32", title: "Poticaji rudara i ekonomska potražnja" },
      { time: "1:13:26", title: "Neutralnost, cenzura i mogući rascjep" },
      { time: "1:22:36", title: "Spam i svrha Bitcoina" },
      { time: "1:40:35", title: "Što čini ekonomski full node" },
      { time: "1:55:27", title: "Provjerljivost ETF-ova i skrbnika" },
      { time: "2:00:15", title: "Fiat banke i Bitcoin skrbništvo" },
      { time: "2:03:06", title: "Vlasništvo, posjed i self-custody" },
      { time: "2:17:21", title: "Power Law model i tržišni ciklusi" },
      { time: "2:25:21", title: "Paper Bitcoin, zlato i leverage" },
      { time: "2:35:45", title: "Taproot, nasljeđivanje i tehnički razvoj" },
      { time: "2:47:19", title: "Završne misli: BIP110 i Ark" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-07-12",
    title:
      "Tko odlučuje o Bitcoinu? BIP110, Core i pravila mreže | DvadesetJedan Uživo #205",
    summary:
      "U ovom izdanju DvadesetJedan Uživo prolazimo kroz trenutačni tržišni kontekst Bitcoina, dugoročne modele i razliku između tržišnog sentimenta i osobnog plana. Drugi dio razgovora posvećen je BIP110, Bitcoin Coreu, full nodeovima, relay politici, konsenzusu i pitanjima decentralizacije.",
    description:
      "U ovom izdanju DvadesetJedan Uživo prolazimo kroz trenutačni tržišni kontekst Bitcoina, dugoročne modele i razliku između tržišnog sentimenta i osobnog plana. Drugi dio razgovora posvećen je BIP110, Bitcoin Coreu, full nodeovima, relay politici, konsenzusu i pitanjima decentralizacije.\n\n00:00 Uvod i trenutačni tržišni kontekst\n08:00 Dugoročni model cijene i čitanje grafikona\n15:00 Mogući scenariji i granice prognoza\n20:00 Budžet, dug i osobni financijski okvir\n30:00 Sentiment, ciklusi i oprez prema tržišnim narativima\n45:00 Bitcoin kao novac i dugoročna perspektiva\n50:00 Plaćanja, prihvaćanje Bitcoina i stvarna upotreba\n58:00 Uvod u BIP110 i aktualnu raspravu\n01:05:00 Full nodeovi: praktičnost, trošak i kontekst\n01:15:00 Broj nodova, relay i otpornost mreže\n01:25:00 Povjerenje, samostalna provjera i transakcije\n01:35:00 Razvoj klijenta, pravila i konsenzus\n01:45:00 SegWit, ASICBoost i lekcije ranijih rasprava\n01:55:00 Relay politika, standardnost i OP_RETURN\n02:05:00 Ekonomska većina i granice utjecaja\n02:15:00 Decentralizacija, naknade i različita tumačenja\n02:25:00 Ordinali, tržišni poticaji i ponašanje korisnika\n02:35:00 Naknade, optimizacija i budući razvoj\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/watch?v=rv4JIu-HwtM",
    publishedAt: "2026-07-12",
    chapters: [
      { time: "00:00", title: "Uvod i trenutačni tržišni kontekst" },
      { time: "08:00", title: "Dugoročni model cijene i čitanje grafikona" },
      { time: "15:00", title: "Mogući scenariji i granice prognoza" },
      { time: "20:00", title: "Budžet, dug i osobni financijski okvir" },
      {
        time: "30:00",
        title: "Sentiment, ciklusi i oprez prema tržišnim narativima",
      },
      { time: "45:00", title: "Bitcoin kao novac i dugoročna perspektiva" },
      {
        time: "50:00",
        title: "Plaćanja, prihvaćanje Bitcoina i stvarna upotreba",
      },
      { time: "58:00", title: "Uvod u BIP110 i aktualnu raspravu" },
      {
        time: "01:05:00",
        title: "Full nodeovi: praktičnost, trošak i kontekst",
      },
      { time: "01:15:00", title: "Broj nodova, relay i otpornost mreže" },
      {
        time: "01:25:00",
        title: "Povjerenje, samostalna provjera i transakcije",
      },
      { time: "01:35:00", title: "Razvoj klijenta, pravila i konsenzus" },
      {
        time: "01:45:00",
        title: "SegWit, ASICBoost i lekcije ranijih rasprava",
      },
      { time: "01:55:00", title: "Relay politika, standardnost i OP_RETURN" },
      { time: "02:05:00", title: "Ekonomska većina i granice utjecaja" },
      {
        time: "02:15:00",
        title: "Decentralizacija, naknade i različita tumačenja",
      },
      {
        time: "02:25:00",
        title: "Ordinali, tržišni poticaji i ponašanje korisnika",
      },
      { time: "02:35:00", title: "Naknade, optimizacija i budući razvoj" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-07-05",
    title: "Power Law, mining i fiat sustav | DvadesetJedan Uživo #204",
    summary:
      "U ovom izdanju DvadesetJedan Uživo razgovaramo o kretanju cijene Bitcoina, dugoročnim modelima, rudarenju, BIP110, digitalnom fiatu, Lightningu i mogućnostima plaćanja Bitcoinom. Dotaknuli smo se i šireg odnosa Bitcoina, poreza, regulative i osobne odgovornosti. ",
    description:
      "U ovom izdanju DvadesetJedan Uživo razgovaramo o kretanju cijene Bitcoina, dugoročnim modelima, rudarenju, BIP110, digitalnom fiatu, Lightningu i mogućnostima plaćanja Bitcoinom. Dotaknuli smo se i šireg odnosa Bitcoina, poreza, regulative i osobne odgovornosti. \n\n00:00 Uvod i pregled tjedna\n11:29 Power Law i čitanje dugoročnih grafikona\n18:55 Odstupanje cijene od dugoročnog trenda\n30:23 BIP110 i očekivanja od budućih ciklusa\n42:27 Rudarenje, energija i neiskorišteni izvori\n50:09 Težina rudarenja i prilagodba mreže\n52:06 Proof of Work, konsenzus i naknade\n57:50 Nodeovi, decentralizacija i otpornost mreže\n01:00:07 Zajednica i ideja većeg okupljanja\n01:06:28 Bitcoin kao novac i rasprava o pravilima\n01:15:19 Povratne informacije, Nostr i alati\n01:19:40 Otvoreni kod, proizvodi i digitalni dolari\n01:32:18 Fiat, stablecoini i usporedba s Bitcoinom\n01:40:09 Lightning, online rizici i plaćanja\n01:44:55 Bitcoin plaćanja, zakoni i evidentiranje\n02:03:25 Porezi, odgovornost i završna rasprava\n02:15:02 Porezi i osobna odgovornost\n02:27:09 Završne misli i odjava\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/watch?v=8UotTPtV7rM",
    publishedAt: "2026-07-05",
    chapters: [
      { time: "00:00", title: "Uvod i pregled tjedna" },
      { time: "11:29", title: "Power Law i čitanje dugoročnih grafikona" },
      { time: "18:55", title: "Odstupanje cijene od dugoročnog trenda" },
      { time: "30:23", title: "BIP110 i očekivanja od budućih ciklusa" },
      { time: "42:27", title: "Rudarenje, energija i neiskorišteni izvori" },
      { time: "50:09", title: "Težina rudarenja i prilagodba mreže" },
      { time: "52:06", title: "Proof of Work, konsenzus i naknade" },
      { time: "57:50", title: "Nodeovi, decentralizacija i otpornost mreže" },
      { time: "01:00:07", title: "Zajednica i ideja većeg okupljanja" },
      { time: "01:06:28", title: "Bitcoin kao novac i rasprava o pravilima" },
      { time: "01:15:19", title: "Povratne informacije, Nostr i alati" },
      { time: "01:19:40", title: "Otvoreni kod, proizvodi i digitalni dolari" },
      { time: "01:32:18", title: "Fiat, stablecoini i usporedba s Bitcoinom" },
      { time: "01:40:09", title: "Lightning, online rizici i plaćanja" },
      { time: "01:44:55", title: "Bitcoin plaćanja, zakoni i evidentiranje" },
      { time: "02:03:25", title: "Porezi, odgovornost i završna rasprava" },
      { time: "02:15:02", title: "Porezi i osobna odgovornost" },
      { time: "02:27:09", title: "Završne misli i odjava" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-06-28",
    title: "Bitcoin, krediti i osobna odgovornost | DvadesetJedan Uživo #203",
    summary:
      "U ovom izdanju DvadesetJedan Uživo razgovaramo o padu cijene Bitcoina i dugoročnom pogledu na tržište, ali i o važnijim pitanjima iza same cijene: štednji, dugu, kreditima, self-custodyju, financijskom nadzoru, obrazovanju i širenju Bitcoin standarda.",
    description:
      "U ovom izdanju DvadesetJedan Uživo razgovaramo o padu cijene Bitcoina i dugoročnom pogledu na tržište, ali i o važnijim pitanjima iza same cijene: štednji, dugu, kreditima, self-custodyju, financijskom nadzoru, obrazovanju i širenju Bitcoin standarda.\n\n00:00 Uvod i stanje tržišta\n18:47 Koliko je cijena udaljena od trenda\n38:45 Trading nasuprot dugoročnom pogledu\n58:45 Štednja, rizik i osobne odluke\n01:14:20 Obitelj, nasljeđivanje i odgovornost\n01:34:00 Bitcoin standard i osobni izlaz iz sustava\n01:53:00 Regulacija, privatnost i praktičnost plaćanja\n02:10:06 Krediti, poticaji i zaduživanje\n02:29:23 Vrijednost, dug i svakodnevne odluke\n02:49:20 Skrbništvo, adrese i sigurnost Bitcoina\n03:09:07 Obrazovanje, studenti i Bitcoin projekti\n03:28:46 Lokalno prihvaćanje Bitcoina\n03:45:01 Zajednica i Bitcoin događaji\n04:00:00 Mining, podatkovni centri i AI infrastruktura\n04:15:40 Planiranje Bitcoin događaja\n04:25:53 Cijena, uvjerenje i osobna odgovornost\n04:36:17 Odmak od buke i dugoročna disciplina\n04:48:29 Infrastruktura i Bitcoin standard\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/watch?v=jnpeRY6GsH8",
    publishedAt: "2026-06-28",
    chapters: [
      { time: "00:00", title: "Uvod i stanje tržišta" },
      { time: "18:47", title: "Koliko je cijena udaljena od trenda" },
      { time: "38:45", title: "Trading nasuprot dugoročnom pogledu" },
      { time: "58:45", title: "Štednja, rizik i osobne odluke" },
      { time: "01:14:20", title: "Obitelj, nasljeđivanje i odgovornost" },
      { time: "01:34:00", title: "Bitcoin standard i osobni izlaz iz sustava" },
      {
        time: "01:53:00",
        title: "Regulacija, privatnost i praktičnost plaćanja",
      },
      { time: "02:10:06", title: "Krediti, poticaji i zaduživanje" },
      { time: "02:29:23", title: "Vrijednost, dug i svakodnevne odluke" },
      { time: "02:49:20", title: "Skrbništvo, adrese i sigurnost Bitcoina" },
      { time: "03:09:07", title: "Obrazovanje, studenti i Bitcoin projekti" },
      { time: "03:28:46", title: "Lokalno prihvaćanje Bitcoina" },
      { time: "03:45:01", title: "Zajednica i Bitcoin događaji" },
      {
        time: "04:00:00",
        title: "Mining, podatkovni centri i AI infrastruktura",
      },
      { time: "04:15:40", title: "Planiranje Bitcoin događaja" },
      { time: "04:25:53", title: "Cijena, uvjerenje i osobna odgovornost" },
      { time: "04:36:17", title: "Odmak od buke i dugoročna disciplina" },
      { time: "04:48:29", title: "Infrastruktura i Bitcoin standard" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-06-21",
    title:
      "Power Law, Strategy i Bitcoin konferencija u Pragu | DvadesetJedan Uživo #202",
    summary:
      "U ovom izdanju DvadesetJedan Uživo razgovaramo o Power Law modelu, dugoročnom kontekstu cijene Bitcoina, Lightningu i ARK-u, iskustvima s Bitcoin konferencije u Pragu te korporativnim modelima povezanima s Bitcoinom. U završnom dijelu dotičemo se inflacije, cijena i načina na koji se potrošnja može promatrati u Bitcoinu.",
    description:
      "U ovom izdanju DvadesetJedan Uživo razgovaramo o Power Law modelu, dugoročnom kontekstu cijene Bitcoina, Lightningu i ARK-u, iskustvima s Bitcoin konferencije u Pragu te korporativnim modelima povezanima s Bitcoinom. U završnom dijelu dotičemo se inflacije, cijena i načina na koji se potrošnja može promatrati u Bitcoinu.\n\n00:00 Uvod i pregled tržišta\n04:21 Kako čitati Power Law model\n14:07 Dugoročni trend i usporedba ciklusa\n26:10 Financijski proizvodi, AI i Bitcoin\n33:13 Mreža, novčanici i razvoj alata\n38:09 Dojmovi s Bitcoin konferencije u Pragu\n43:00 Zajednica, događaji i organizacija\n47:52 Susreti zajednice, plaćanja i Lightning\n52:46 Banke, skrbništvo i Bitcoin proizvodi\n57:26 Strategy, potražnja i Bitcoin na bilanci\n01:06:41 Inflacija, država i osobna odgovornost\n01:16:44 Lightning i ARK: mogućnosti i ograničenja\n01:26:34 Rizik, poluga i tržišni sentiment\n01:36:49 Ideje za zajednički Bitcoin događaj\n01:46:47 Strategy, indeksi i korporativno usvajanje\n01:56:25 Preferencijalne dionice i različiti rizici\n02:06:05 Geopolitika, nafta i pritisci na cijene\n02:16:43 Cijene u fiatima i Bitcoinu\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/watch?v=J-Yw-G-bImc",
    publishedAt: "2026-06-21",
    chapters: [
      { time: "00:00", title: "Uvod i pregled tržišta" },
      { time: "04:21", title: "Kako čitati Power Law model" },
      { time: "14:07", title: "Dugoročni trend i usporedba ciklusa" },
      { time: "26:10", title: "Financijski proizvodi, AI i Bitcoin" },
      { time: "33:13", title: "Mreža, novčanici i razvoj alata" },
      { time: "38:09", title: "Dojmovi s Bitcoin konferencije u Pragu" },
      { time: "43:00", title: "Zajednica, događaji i organizacija" },
      { time: "47:52", title: "Susreti zajednice, plaćanja i Lightning" },
      { time: "52:46", title: "Banke, skrbništvo i Bitcoin proizvodi" },
      { time: "57:26", title: "Strategy, potražnja i Bitcoin na bilanci" },
      { time: "01:06:41", title: "Inflacija, država i osobna odgovornost" },
      { time: "01:16:44", title: "Lightning i ARK: mogućnosti i ograničenja" },
      { time: "01:26:34", title: "Rizik, poluga i tržišni sentiment" },
      { time: "01:36:49", title: "Ideje za zajednički Bitcoin događaj" },
      { time: "01:46:47", title: "Strategy, indeksi i korporativno usvajanje" },
      { time: "01:56:25", title: "Preferencijalne dionice i različiti rizici" },
      { time: "02:06:05", title: "Geopolitika, nafta i pritisci na cijene" },
      { time: "02:16:43", title: "Cijene u fiatima i Bitcoinu" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-06-14",
    title: "Bitcoin, osobna inicijativa i zajednica | DvadesetJedan Uživo #201",
    summary:
      "U ovom izdanju DvadesetJedan Uživo Pavao i Yugocana razgovaraju o tržišnom raspoloženju, Power Law modelima, Lightningu, Bitcoin treasury kompanijama te odnosu AI-ja, rada i produktivnosti. Drugi dio razgovora otvara teme osobne inicijative, poduzetništva, Bitcoin industrije i zajednice.",
    description:
      "U ovom izdanju DvadesetJedan Uživo Pavao i Yugocana razgovaraju o tržišnom raspoloženju, Power Law modelima, Lightningu, Bitcoin treasury kompanijama te odnosu AI-ja, rada i produktivnosti. Drugi dio razgovora otvara teme osobne inicijative, poduzetništva, Bitcoin industrije i zajednice.\n\n00:00 Uvod i tržišno raspoloženje\n09:39 Power Law i dugoročni pogled na Bitcoin\n18:32 Špekulacija, trgovanje i dugoročna disciplina\n29:43 Lightning, ARK i infrastruktura plaćanja\n40:47 Treasury kompanije, likvidnost i dividende\n47:27 Nostr, Lightning i kreativne zajednice\n56:54 SpaceX, IPO-i i Bitcoin tržište\n01:03:44 Halving, cijena i granice predviđanja\n01:15:24 AI alati i rast produktivnosti\n01:26:30 Produktivnost, fiat i čuvanje vrijednosti\n01:40:49 Cijena Bitcoina i rad u Bitcoin industriji\n01:53:39 Rad, poduzetništvo i stvaranje vrijednosti\n02:07:35 Osobna inicijativa i odgovornost\n02:21:16 Bitcoin industrija i povezivanje zajednica\n02:33:46 Mobilnost novca i bankarska ograničenja\n02:39:06 Završne misli i najava sljedećeg razgovora\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/watch?v=NWgWBywiXVM",
    publishedAt: "2026-06-14",
    chapters: [
      { time: "00:00", title: "Uvod i tržišno raspoloženje" },
      { time: "09:39", title: "Power Law i dugoročni pogled na Bitcoin" },
      { time: "18:32", title: "Špekulacija, trgovanje i dugoročna disciplina" },
      { time: "29:43", title: "Lightning, ARK i infrastruktura plaćanja" },
      { time: "40:47", title: "Treasury kompanije, likvidnost i dividende" },
      { time: "47:27", title: "Nostr, Lightning i kreativne zajednice" },
      { time: "56:54", title: "SpaceX, IPO-i i Bitcoin tržište" },
      { time: "01:03:44", title: "Halving, cijena i granice predviđanja" },
      { time: "01:15:24", title: "AI alati i rast produktivnosti" },
      { time: "01:26:30", title: "Produktivnost, fiat i čuvanje vrijednosti" },
      { time: "01:40:49", title: "Cijena Bitcoina i rad u Bitcoin industriji" },
      { time: "01:53:39", title: "Rad, poduzetništvo i stvaranje vrijednosti" },
      { time: "02:07:35", title: "Osobna inicijativa i odgovornost" },
      { time: "02:21:16", title: "Bitcoin industrija i povezivanje zajednica" },
      { time: "02:33:46", title: "Mobilnost novca i bankarska ograničenja" },
      { time: "02:39:06", title: "Završne misli i najava sljedećeg razgovora" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-06-07",
    title:
      "Tržišni strah, Bitcoin i dugoročni pogled | DvadesetJedan Uživo #200",
    summary:
      "U ovom izdanju DvadesetJedan Uživo razgovaramo o tržišnom raspoloženju oko Bitcoina, Power Law modelima i dugoročnom pogledu na mrežu. Dotičemo se Lightning Networka, edukacije, inflacije, uporabe Bitcoina u različitim okolnostima te pitanja o struji i internetu.",
    description:
      "U ovom izdanju DvadesetJedan Uživo razgovaramo o tržišnom raspoloženju oko Bitcoina, Power Law modelima i dugoročnom pogledu na mrežu. Dotičemo se Lightning Networka, edukacije, inflacije, uporabe Bitcoina u različitim okolnostima te pitanja o struji i internetu.\n\n00:00 Uvod iz Splita i pregled tjedna\n03:00 Cijena, tržišni sentiment i Power Law modeli\n11:19 Povijesni padovi i granice modela\n17:09 Dugoročni trend i odnos prema riziku\n22:54 Pitanja publike i osobna odgovornost\n28:34 Lightning Network u razgovoru\n35:12 Različite perspektive o ulasku u Bitcoin\n45:28 Dugoročno razmišljanje i korištenje bitcoina\n50:54 Likvidnost, tržište i iskustvo učenja\n56:33 Edukacija, materijali i razgovor s drugima\n57:58 Tehnologija, društvo i budući scenariji\n01:03:27 El Salvador, uporaba i institucije\n01:07:35 Vremenski horizont i osobna uvjerenja\n01:13:21 Struja, internet i ekstremni scenariji\n01:16:13 Zaključak i pozdrav\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/live/kCBeqS-k7Ak?si=S_YdbAp0iTFLp56F",
    publishedAt: "2026-06-07",
    chapters: [
      { time: "00:00", title: "Uvod iz Splita i pregled tjedna" },
      { time: "03:00", title: "Cijena, tržišni sentiment i Power Law modeli" },
      { time: "11:19", title: "Povijesni padovi i granice modela" },
      { time: "17:09", title: "Dugoročni trend i odnos prema riziku" },
      { time: "22:54", title: "Pitanja publike i osobna odgovornost" },
      { time: "28:34", title: "Lightning Network u razgovoru" },
      { time: "35:12", title: "Različite perspektive o ulasku u Bitcoin" },
      { time: "45:28", title: "Dugoročno razmišljanje i korištenje bitcoina" },
      { time: "50:54", title: "Likvidnost, tržište i iskustvo učenja" },
      { time: "56:33", title: "Edukacija, materijali i razgovor s drugima" },
      { time: "57:58", title: "Tehnologija, društvo i budući scenariji" },
      { time: "01:03:27", title: "El Salvador, uporaba i institucije" },
      { time: "01:07:35", title: "Vremenski horizont i osobna uvjerenja" },
      { time: "01:13:21", title: "Struja, internet i ekstremni scenariji" },
      { time: "01:16:13", title: "Zaključak i pozdrav" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-05-31",
    title:
      "Kako gledati Bitcoin dugoročno? Power Law, rad i stvaranje vrijednosti | DvadesetJedan Uživo #199",
    summary:
      "U ovom izdanju DvadesetJedan Uživo razgovaramo o Bitcoinu kroz dugoročnu perspektivu: on-chain podacima, usporedbama sa zlatom i S&P 500, Power Law modelu te odnosu cijene, rada i stvaranja vrijednosti. U drugom dijelu razgovora dotičemo se umjetne inteligencije, produktivnosti, budućnosti rada, osobne inicijative i načina na koji sudionici povezuju te teme s Bitcoinom.",
    description:
      "U ovom izdanju DvadesetJedan Uživo razgovaramo o Bitcoinu kroz dugoročnu perspektivu: on-chain podacima, usporedbama sa zlatom i S&P 500, Power Law modelu te odnosu cijene, rada i stvaranja vrijednosti. U drugom dijelu razgovora dotičemo se umjetne inteligencije, produktivnosti, budućnosti rada, osobne inicijative i načina na koji sudionici povezuju te teme s Bitcoinom.\n\n00:00 Uvod i pregled tema\n03:28 On-chain podaci i Bitcoinova transparentnost\n08:39 Dugoročna perspektiva: Bitcoin, zlato i S&P 500\n15:30 Sentiment tržišta i Power Law kao tema razgovora\n21:41 Kako sudionici tumače dugoročni model\n29:43 Stope rasta, vremenski horizont i očekivanja\n37:40 Mjerenje ulaganja i povrata u Bitcoinu\n44:35 Individualna perspektiva cijene i emocije tržišta\n51:32 Bitcoin kao novac i granice kratkoročnih prognoza\n59:04 Štednja, spekulacija i osobni plan\n01:05:50 Digitalni sustavi, privatnost i povjerenje\n01:20:04 Usvajanje Bitcoina i jedinica obračuna\n01:27:35 AI, produktivnost i vrijednost rada\n01:41:47 Umjetna inteligencija, ljudska inicijativa i rad\n02:02:53 Tehnologija, sloboda i budućnost društva\n02:23:54 Odgovornost, rad i stvaranje prilika\n02:51:36 Planiranje, davanje i odnos prema novcu\n03:13:56 Subjektivna vrijednost i inicijativa u poslu\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nX: https://x.com/dvadesetjedan21\nTelegram: https://t.me/dvadesetjedan21\nDiscord: https://discord.com/invite/D7ekwFFnDH",
    youtubeUrl: "https://www.youtube.com/live/S9WmtBVGVY0?si=mdlw-4nOSwtMIJf5",
    publishedAt: "2026-05-31",
    chapters: [
      { time: "00:00", title: "Uvod i pregled tema" },
      { time: "03:28", title: "On-chain podaci i Bitcoinova transparentnost" },
      {
        time: "08:39",
        title: "Dugoročna perspektiva: Bitcoin, zlato i S&P 500",
      },
      {
        time: "15:30",
        title: "Sentiment tržišta i Power Law kao tema razgovora",
      },
      { time: "21:41", title: "Kako sudionici tumače dugoročni model" },
      { time: "29:43", title: "Stope rasta, vremenski horizont i očekivanja" },
      { time: "37:40", title: "Mjerenje ulaganja i povrata u Bitcoinu" },
      {
        time: "44:35",
        title: "Individualna perspektiva cijene i emocije tržišta",
      },
      {
        time: "51:32",
        title: "Bitcoin kao novac i granice kratkoročnih prognoza",
      },
      { time: "59:04", title: "Štednja, spekulacija i osobni plan" },
      { time: "01:05:50", title: "Digitalni sustavi, privatnost i povjerenje" },
      { time: "01:20:04", title: "Usvajanje Bitcoina i jedinica obračuna" },
      { time: "01:27:35", title: "AI, produktivnost i vrijednost rada" },
      {
        time: "01:41:47",
        title: "Umjetna inteligencija, ljudska inicijativa i rad",
      },
      { time: "02:02:53", title: "Tehnologija, sloboda i budućnost društva" },
      { time: "02:23:54", title: "Odgovornost, rad i stvaranje prilika" },
      { time: "02:51:36", title: "Planiranje, davanje i odnos prema novcu" },
      {
        time: "03:13:56",
        title: "Subjektivna vrijednost i inicijativa u poslu",
      },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-05-24",
    title:
      "Je li Bitcoin ispod trenda? Power Law, novčanici i rizik | DvadesetJedan Uživo #198",
    summary:
      "U ovom izdanju DvadesetJedan Uživo razgovaramo o dugoročnom pogledu na Bitcoin kroz Power Law model, tržišni sentiment i način na koji sudionici tumače odnos cijene, vremena i ciklusa. Dotaknuli smo se self-custodyja, razvoja novčanika i privatnosti u svakodnevnom korištenju, zatim rizničkih kompanija, nekretnina i mogućih posrednih oblika izloženosti Bitcoinu.",
    description:
      "U ovom izdanju DvadesetJedan Uživo razgovaramo o dugoročnom pogledu na Bitcoin kroz Power Law model, tržišni sentiment i način na koji sudionici tumače odnos cijene, vremena i ciklusa. Dotaknuli smo se self-custodyja, razvoja novčanika i privatnosti u svakodnevnom korištenju, zatim rizničkih kompanija, nekretnina i mogućih posrednih oblika izloženosti Bitcoinu.\n\n00:00 Uvod, cijena i tržišni sentiment\n05:10 Petogodišnji prinosi i kontekst ciklusa\n09:33 Dugoročna perspektiva i Bitcoin Pizza Day\n11:28 Kako sudionici objašnjavaju Bitcoin Power Law\n15:24 Cijena u odnosu na dugoročni trend\n19:20 Dugoročne projekcije i granice modela\n22:18 Ciklusi, akumulacija i potrošnja\n25:24 Zajednica, meetupovi i tržišni narativi\n28:15 Očekivanja, usporedbe i vrijeme\n33:58 Fokus, strpljenje i praćenje tržišta\n40:33 Usvajanje Bitcoina, zabrane i privatnost\n50:13 Sparrow, Core i razvoj novčanika\n58:08 Rizničke kompanije i posredna izloženost Bitcoinu\n01:04:47 Nekretnine, prinosi i usporedbe ulaganja\n01:15:39 Rizici proizvoda vezanih uz Bitcoin\n01:21:31 Koliko vremena traži učenje o Bitcoinu\n01:29:02 Kompanije, dividende i upravljanje rizikom\n01:36:50 Izbori pojedinca i završne misli\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/live/DKjB-gg61bo?si=EYnQ7MqQPKBnXtLt",
    publishedAt: "2026-05-24",
    chapters: [
      { time: "00:00", title: "Uvod, cijena i tržišni sentiment" },
      { time: "05:10", title: "Petogodišnji prinosi i kontekst ciklusa" },
      { time: "09:33", title: "Dugoročna perspektiva i Bitcoin Pizza Day" },
      { time: "11:28", title: "Kako sudionici objašnjavaju Bitcoin Power Law" },
      { time: "15:24", title: "Cijena u odnosu na dugoročni trend" },
      { time: "19:20", title: "Dugoročne projekcije i granice modela" },
      { time: "22:18", title: "Ciklusi, akumulacija i potrošnja" },
      { time: "25:24", title: "Zajednica, meetupovi i tržišni narativi" },
      { time: "28:15", title: "Očekivanja, usporedbe i vrijeme" },
      { time: "33:58", title: "Fokus, strpljenje i praćenje tržišta" },
      { time: "40:33", title: "Usvajanje Bitcoina, zabrane i privatnost" },
      { time: "50:13", title: "Sparrow, Core i razvoj novčanika" },
      {
        time: "58:08",
        title: "Rizničke kompanije i posredna izloženost Bitcoinu",
      },
      { time: "01:04:47", title: "Nekretnine, prinosi i usporedbe ulaganja" },
      { time: "01:15:39", title: "Rizici proizvoda vezanih uz Bitcoin" },
      { time: "01:21:31", title: "Koliko vremena traži učenje o Bitcoinu" },
      { time: "01:29:02", title: "Kompanije, dividende i upravljanje rizikom" },
      { time: "01:36:50", title: "Izbori pojedinca i završne misli" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-05-17",
    title:
      "Bitcoin kao novac: modeli, rizici i dugoročna adopcija | DvadesetJedan Uživo #197",
    summary:
      "U ovom izdanju DvadesetJedan Uživo razgovaramo o dugoročnom pogledu na Bitcoin: Power Law modelu kao okviru, sigurnosnim rizicima u dobu AI-ja te odnosu self-custodyja, financijskih proizvoda i institucionalne adopcije. Dotaknuli smo se i CBDC-a, tokenizacije te pitanja kako promatrati ulaganja u odnosu na Bitcoin.",
    description:
      "U ovom izdanju DvadesetJedan Uživo razgovaramo o dugoročnom pogledu na Bitcoin: Power Law modelu kao okviru, sigurnosnim rizicima u dobu AI-ja te odnosu self-custodyja, financijskih proizvoda i institucionalne adopcije. Dotaknuli smo se i CBDC-a, tokenizacije te pitanja kako promatrati ulaganja u odnosu na Bitcoin.\n\n00:00 Uvod, tržišni kontekst i ritam Bitcoin blokova\n08:24 Dugoročni graf i Power Law kao okvir\n23:59 Bitcoin Core, open source i AI alati za sigurnost\n30:06 Nostr, protokoli i financijske usluge\n33:33 AI-generirane prijevare i provjera identiteta\n44:00 Bitcoin-povezani financijski proizvodi i trade-offovi\n1:03:52 CBDC, digitalni novac i Bitcoin perspektiva\n1:10:44 Bitcoin-only pristup, alternativni projekti i trošak vremena\n1:16:21 Zajednica, prijenosi uživo i lokalna druženja\n1:22:53 Tržišna pažnja, AI narativ i dugoročna strpljivost\n1:35:52 Skepticizam, institucionalno prihvaćanje i promjena mišljenja\n1:42:24 Likvidnost Bitcoina i velike korporativne bilance\n1:52:02 Savjetovanje, edukacija i put do šire adopcije\n2:00:04 Ciklusi, Bitcoin kao novac i upravljanje očekivanjima\n2:13:37 Dionice, Power Law i granice modela\n2:30:22 Pristup tržištima, troškovi i vrijeme ulaganja\n2:40:32 Završne poruke i pozdrav\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/live/P01tcWSENpc?si=57hQTcjeSmiBjsxB",
    publishedAt: "2026-05-17",
    chapters: [
      {
        time: "00:00",
        title: "Uvod, tržišni kontekst i ritam Bitcoin blokova",
      },
      { time: "08:24", title: "Dugoročni graf i Power Law kao okvir" },
      {
        time: "23:59",
        title: "Bitcoin Core, open source i AI alati za sigurnost",
      },
      { time: "30:06", title: "Nostr, protokoli i financijske usluge" },
      { time: "33:33", title: "AI-generirane prijevare i provjera identiteta" },
      {
        time: "44:00",
        title: "Bitcoin-povezani financijski proizvodi i trade-offovi",
      },
      { time: "1:03:52", title: "CBDC, digitalni novac i Bitcoin perspektiva" },
      {
        time: "1:10:44",
        title: "Bitcoin-only pristup, alternativni projekti i trošak vremena",
      },
      {
        time: "1:16:21",
        title: "Zajednica, prijenosi uživo i lokalna druženja",
      },
      {
        time: "1:22:53",
        title: "Tržišna pažnja, AI narativ i dugoročna strpljivost",
      },
      {
        time: "1:35:52",
        title: "Skepticizam, institucionalno prihvaćanje i promjena mišljenja",
      },
      {
        time: "1:42:24",
        title: "Likvidnost Bitcoina i velike korporativne bilance",
      },
      {
        time: "1:52:02",
        title: "Savjetovanje, edukacija i put do šire adopcije",
      },
      {
        time: "2:00:04",
        title: "Ciklusi, Bitcoin kao novac i upravljanje očekivanjima",
      },
      { time: "2:13:37", title: "Dionice, Power Law i granice modela" },
      {
        time: "2:30:22",
        title: "Pristup tržištima, troškovi i vrijeme ulaganja",
      },
      { time: "2:40:32", title: "Završne poruke i pozdrav" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-05-10",
    title:
      "Može li internet ostati otvoren? Bitcoin, KYC i privatnost | DvadesetJedan Uživo #196",
    summary:
      "Razgovaramo o dugoročnom pogledu na Bitcoin, Power Lawu, tržišnim instrumentima i Stratum V2. Drugi dio razgovora vodi nas kroz privatnost, otvoreni internet, KYC i povjerenje u online trgovini.",
    description:
      "Razgovaramo o dugoročnom pogledu na Bitcoin, Power Lawu, tržišnim instrumentima i Stratum V2. Drugi dio razgovora vodi nas kroz privatnost, otvoreni internet, KYC i povjerenje u online trgovini.\n\n00:00 Uvod: Bitcoin, cijena i dugoročni okvir\n12:08 Power Law i dugoročni pogled\n28:05 Skepticizam, tržišni instrumenti i usvajanje\n37:43 Stratum V2 i razvoj rudarske infrastrukture\n50:00 Bitcoin, financije i različiti pristupi\n1:01:19 Zajednica, susreti i otvoreni razvoj\n1:07:19 Sigurnost, digitalni rizici i buka oko “kripta”\n1:14:48 Mali rudari, VPN i regulacija interneta\n1:19:07 Kako internet rutira promet\n1:33:49 Granice geolokacije i fragmentacija mreže\n1:39:35 Otvoreni protokoli, kontrola i izbori korisnika\n1:40:57 Privatnost, anonimnost i digitalni trag\n1:52:49 Bitcoin, KYC i povjerenje u online trgovini\n2:00:12 Podaci, sigurnost i privatna komunikacija\n2:09:20 Završne misli i najave zajednice\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://youtube.com/live/BYV-FgTY7pQ",
    publishedAt: "2026-05-10",
    chapters: [
      { time: "00:00", title: "Uvod: Bitcoin, cijena i dugoročni okvir" },
      { time: "12:08", title: "Power Law i dugoročni pogled" },
      { time: "28:05", title: "Skepticizam, tržišni instrumenti i usvajanje" },
      { time: "37:43", title: "Stratum V2 i razvoj rudarske infrastrukture" },
      { time: "50:00", title: "Bitcoin, financije i različiti pristupi" },
      { time: "1:01:19", title: "Zajednica, susreti i otvoreni razvoj" },
      {
        time: "1:07:19",
        title: "Sigurnost, digitalni rizici i buka oko “kripta”",
      },
      { time: "1:14:48", title: "Mali rudari, VPN i regulacija interneta" },
      { time: "1:19:07", title: "Kako internet rutira promet" },
      { time: "1:33:49", title: "Granice geolokacije i fragmentacija mreže" },
      {
        time: "1:39:35",
        title: "Otvoreni protokoli, kontrola i izbori korisnika",
      },
      { time: "1:40:57", title: "Privatnost, anonimnost i digitalni trag" },
      { time: "1:52:49", title: "Bitcoin, KYC i povjerenje u online trgovini" },
      { time: "2:00:12", title: "Podaci, sigurnost i privatna komunikacija" },
      { time: "2:09:20", title: "Završne misli i najave zajednice" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-05-03",
    title:
      "Kad Bitcoin uspori: cijena, rizik i pogledi koji traju | DvadesetJedan Uživo #195",
    summary:
      "U ovom izdanju DvadesetJedan Uživo razgovaramo o dugoročnim modelima cijene Bitcoina, tržišnom sentimentu i granicama predviđanja. Dotaknuli smo se Power Law pristupa, različitih oblika skrbništva, financijskih proizvoda povezanih s Bitcoinom, razvoja lokalne zajednice te načina na koji AI alati mogu promijeniti rad i produktivnost.",
    description:
      "U ovom izdanju DvadesetJedan Uživo razgovaramo o dugoročnim modelima cijene Bitcoina, tržišnom sentimentu i granicama predviđanja. Dotaknuli smo se Power Law pristupa, različitih oblika skrbništva, financijskih proizvoda povezanih s Bitcoinom, razvoja lokalne zajednice te načina na koji AI alati mogu promijeniti rad i produktivnost.\n\n00:00 Uvod: cijena, sentiment i dugoročni pogled\n07:50 Power Law i mjerenje vremena Bitcoin blokovima\n14:34 Povijesna odstupanja od dugoročnog trenda\n20:27 Volatilnost i temperiranje očekivanja\n24:43 Bitcoin konferencija i teme iz zajednice\n32:36 BIP300/301 i granice promjena Bitcoina\n39:34 Hardverski novčanici i Bitkey\n48:46 Financijski proizvodi povezani s Bitcoinom\n57:42 Rizici zaduživanja uz Bitcoin kolateral\n59:44 Vrijeme, znanje i osobne okolnosti\n01:19:28 Saylor, institucije, izbori i prioriteti\n01:28:39 Samostalno skrbništvo i ključevi\n01:36:46 Kako raste lokalna Bitcoin zajednica\n01:53:57 Obrazovni materijali i doprinos zajednici\n01:59:56 AI alati: priprema, provjera i kreativni rad\n02:10:26 Produktivnost, vrijednost rada i novi alati\n02:23:57 Ljudsko vrijeme, AI i završne misli\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/live/IA-HH1JMkNM?si=hmlLZYr0GQgIReQ_",
    publishedAt: "2026-05-03",
    chapters: [
      { time: "00:00", title: "Uvod: cijena, sentiment i dugoročni pogled" },
      {
        time: "07:50",
        title: "Power Law i mjerenje vremena Bitcoin blokovima",
      },
      { time: "14:34", title: "Povijesna odstupanja od dugoročnog trenda" },
      { time: "20:27", title: "Volatilnost i temperiranje očekivanja" },
      { time: "24:43", title: "Bitcoin konferencija i teme iz zajednice" },
      { time: "32:36", title: "BIP300/301 i granice promjena Bitcoina" },
      { time: "39:34", title: "Hardverski novčanici i Bitkey" },
      { time: "48:46", title: "Financijski proizvodi povezani s Bitcoinom" },
      { time: "57:42", title: "Rizici zaduživanja uz Bitcoin kolateral" },
      { time: "59:44", title: "Vrijeme, znanje i osobne okolnosti" },
      { time: "01:19:28", title: "Saylor, institucije, izbori i prioriteti" },
      { time: "01:28:39", title: "Samostalno skrbništvo i ključevi" },
      { time: "01:36:46", title: "Kako raste lokalna Bitcoin zajednica" },
      { time: "01:53:57", title: "Obrazovni materijali i doprinos zajednici" },
      {
        time: "01:59:56",
        title: "AI alati: priprema, provjera i kreativni rad",
      },
      {
        time: "02:10:26",
        title: "Produktivnost, vrijednost rada i novi alati",
      },
      { time: "02:23:57", title: "Ljudsko vrijeme, AI i završne misli" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-04-26",
    title:
      "Bitcoin i dugoročni pogled: modeli, konsenzus i tržište | DvadesetJedan Uživo #194",
    summary:
      "Razgovor o tržišnom sentimentu, Power Law pristupu i dugoročnom pogledu na Bitcoin. Dotaknuli smo se načina na koji se u Bitcoinu razumiju blokovi, konsenzus i hard forkovi, kao i šuma informacija oko alternativnih proizvoda, regulacije i tehnologije.",
    description:
      "Razgovor o tržišnom sentimentu, Power Law pristupu i dugoročnom pogledu na Bitcoin. Dotaknuli smo se načina na koji se u Bitcoinu razumiju blokovi, konsenzus i hard forkovi, kao i šuma informacija oko alternativnih proizvoda, regulacije i tehnologije.\n\n00:00 Uvod: cijena, sentiment i dugoročni horizont\n10:49 Power Law i vrijeme mjereno Bitcoin blokovima\n29:17 Blokovi, difficulty i model dugoročnog trenda\n30:17 Dug, fiat i širi pogled na svijet\n36:48 Generacije, nasljeđivanje i dugoročno usvajanje\n48:24 BIP300, hard forkovi i alternativna rješenja\n56:15 Vjerovanje, institucije i Bitcoin u javnoj raspravi\n01:03:42 Stablecoini, privatnost i granice kontrole\n01:09:07 DeFi, prinosi i razlika između signala i šuma\n01:16:30 Rizik, vrijednost i osobna odgovornost\n01:25:12 BIP110, forkovi i očekivanja tržišta\n01:32:55 Izgubljeni novčići, kvantna računala i konsenzus\n01:52:53 Informacijski šum i donošenje odluka\n01:57:51 Tržište, vlasništvo i značenje konsenzusa\n02:07:52 Regulacija i granice planiranja\n02:14:54 Završne misli\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/live/qtV8qzJo2FQ?si=pKx4NhEiJQsH-aTP",
    publishedAt: "2026-04-26",
    chapters: [
      { time: "00:00", title: "Uvod: cijena, sentiment i dugoročni horizont" },
      { time: "10:49", title: "Power Law i vrijeme mjereno Bitcoin blokovima" },
      { time: "29:17", title: "Blokovi, difficulty i model dugoročnog trenda" },
      { time: "30:17", title: "Dug, fiat i širi pogled na svijet" },
      {
        time: "36:48",
        title: "Generacije, nasljeđivanje i dugoročno usvajanje",
      },
      { time: "48:24", title: "BIP300, hard forkovi i alternativna rješenja" },
      {
        time: "56:15",
        title: "Vjerovanje, institucije i Bitcoin u javnoj raspravi",
      },
      { time: "01:03:42", title: "Stablecoini, privatnost i granice kontrole" },
      {
        time: "01:09:07",
        title: "DeFi, prinosi i razlika između signala i šuma",
      },
      { time: "01:16:30", title: "Rizik, vrijednost i osobna odgovornost" },
      { time: "01:25:12", title: "BIP110, forkovi i očekivanja tržišta" },
      {
        time: "01:32:55",
        title: "Izgubljeni novčići, kvantna računala i konsenzus",
      },
      { time: "01:52:53", title: "Informacijski šum i donošenje odluka" },
      { time: "01:57:51", title: "Tržište, vlasništvo i značenje konsenzusa" },
      { time: "02:07:52", title: "Regulacija i granice planiranja" },
      { time: "02:14:54", title: "Završne misli" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-04-19",
    title: "Od kvantnih računala do samoskrbništva | DvadesetJedan Uživo #193",
    summary:
      "U ovom izdanju DvadesetJedan Uživo prolazimo kroz tržišni sentiment, dugoročni pogled na Bitcoin i modele rasta poput Power Lawa. Razgovor zatim otvara pitanja kvantnih računala, decentralizacije, samoskrbništva, emisije Bitcoina i rizika različitih financijskih instrumenata. U završnom dijelu dotičemo se inflacije, troškova života i najava zajednice.",
    description:
      "U ovom izdanju DvadesetJedan Uživo prolazimo kroz tržišni sentiment, dugoročni pogled na Bitcoin i modele rasta poput Power Lawa. Razgovor zatim otvara pitanja kvantnih računala, decentralizacije, samoskrbništva, emisije Bitcoina i rizika različitih financijskih instrumenata. U završnom dijelu dotičemo se inflacije, troškova života i najava zajednice.\n\n00:00 Uvod: cijena Bitcoina i sentiment\n10:57 Dugoročni rast i Power Law\n28:20 Halving ciklusi i kvantna pitanja\n37:31 Kvantna računala: prijetnja i priprema\n50:02 Decentralizacija, odgovornost i privatnost\n1:01:25 Očekivanja tržišta i planiranje rizika\n1:07:08 Posao, plaće i troškovi života\n1:18:28 Novac, potrošnja i vremenske preferencije\n1:28:47 Emisija Bitcoina, gubitak kovanica i inflacija\n1:40:27 Naknade, satoshi i buduća kupovna moć\n1:49:18 Financijski instrumenti vezani uz Bitcoin\n2:06:44 Samoskrbništvo, skrbništvo i obiteljski rizik\n2:19:36 Rizični prinosi i tržišna volatilnost\n2:30:04 Cijene energije, inflacija i regionalna svakodnevica\n2:43:44 P2P mreže, zajednica i završne najave\n2:57:21 Najave susreta i završne napomene\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/live/Hrvw-zK64BI?si=md1uLbo6GHjk3AAc",
    publishedAt: "2026-04-19",
    chapters: [
      { time: "00:00", title: "Uvod: cijena Bitcoina i sentiment" },
      { time: "10:57", title: "Dugoročni rast i Power Law" },
      { time: "28:20", title: "Halving ciklusi i kvantna pitanja" },
      { time: "37:31", title: "Kvantna računala: prijetnja i priprema" },
      { time: "50:02", title: "Decentralizacija, odgovornost i privatnost" },
      { time: "1:01:25", title: "Očekivanja tržišta i planiranje rizika" },
      { time: "1:07:08", title: "Posao, plaće i troškovi života" },
      { time: "1:18:28", title: "Novac, potrošnja i vremenske preferencije" },
      {
        time: "1:28:47",
        title: "Emisija Bitcoina, gubitak kovanica i inflacija",
      },
      { time: "1:40:27", title: "Naknade, satoshi i buduća kupovna moć" },
      { time: "1:49:18", title: "Financijski instrumenti vezani uz Bitcoin" },
      {
        time: "2:06:44",
        title: "Samoskrbništvo, skrbništvo i obiteljski rizik",
      },
      { time: "2:19:36", title: "Rizični prinosi i tržišna volatilnost" },
      {
        time: "2:30:04",
        title: "Cijene energije, inflacija i regionalna svakodnevica",
      },
      { time: "2:43:44", title: "P2P mreže, zajednica i završne najave" },
      { time: "2:57:21", title: "Najave susreta i završne napomene" },
    ],
    needsShownotes: false,
  },
  {
    slug: "dvadesetjedan-livestream-2026-04-12",
    title:
      "Trošiti danas ili graditi sutra? Bitcoin, rad i osobni izbori | DvadesetJedan Uživo #192",
    summary:
      "U ovom izdanju DvadesetJedan Uživo prolazimo kroz cijenu Bitcoina, Power Law kao dugoročni model i odnos prema potrošnji, radu te upravljanju rizikom. Razgovor zatim otvara teme umjetne inteligencije, rudarenja, mjenjačnica, altcoina i Bitcoin standarda.",
    description:
      "U ovom izdanju DvadesetJedan Uživo prolazimo kroz cijenu Bitcoina, Power Law kao dugoročni model i odnos prema potrošnji, radu te upravljanju rizikom. Razgovor zatim otvara teme umjetne inteligencije, rudarenja, mjenjačnica, altcoina i Bitcoin standarda.\n\n00:00 Uvod: cijena Bitcoina i tržišni kontekst\n11:16 Power Law i vrijeme mjereno blokovima\n25:10 Projekcije modela i ograničenja dugoročnih procjena\n33:15 Bitcoin, vijesti i reakcije tržišta\n42:36 Gledati Bitcoin kao novac, ne kratkoročnu okladu\n51:35 Rizik, očekivanja i upravljanje potrošnjom\n1:01:21 Akumulacija, rad i osobne financijske odluke\n1:10:46 Potrošnja, kapitalna dobra i životni planovi\n1:20:00 AI alati, pisanje i produktivnost\n1:30:00 Tehnologija, rad i vrijednost ljudskih vještina\n1:41:53 Izbori potrošača i cijene u fiat sustavu\n1:48:15 Rudarenje, hash rate i energetska pitanja\n1:58:01 Prinos, vrijeme i ulaganje u vlastite vještine\n2:12:54 Novac, privatnost i rasprava o mikserima\n2:23:33 Bitcoin standard i alternative izvan Bitcoina\n2:33:26 Altcoini, rizik i dugoročna monetarna teza\n2:47:46 Tržišta izvan radnog vremena i spekulacija\n2:56:57 Završne misli: Power Law i vrijeme u blokovima\n\nDvadesetJedan:\nWeb: https://dvadesetjedan.com/\nTelegram: https://t.me/dvadesetjedan21\nX: https://x.com/dvadesetjedan21",
    youtubeUrl: "https://www.youtube.com/live/22K27sRKTHw?si=tL0T8pbylM5N0fsu",
    publishedAt: "2026-04-12",
    chapters: [
      { time: "00:00", title: "Uvod: cijena Bitcoina i tržišni kontekst" },
      { time: "11:16", title: "Power Law i vrijeme mjereno blokovima" },
      {
        time: "25:10",
        title: "Projekcije modela i ograničenja dugoročnih procjena",
      },
      { time: "33:15", title: "Bitcoin, vijesti i reakcije tržišta" },
      {
        time: "42:36",
        title: "Gledati Bitcoin kao novac, ne kratkoročnu okladu",
      },
      { time: "51:35", title: "Rizik, očekivanja i upravljanje potrošnjom" },
      {
        time: "1:01:21",
        title: "Akumulacija, rad i osobne financijske odluke",
      },
      {
        time: "1:10:46",
        title: "Potrošnja, kapitalna dobra i životni planovi",
      },
      { time: "1:20:00", title: "AI alati, pisanje i produktivnost" },
      {
        time: "1:30:00",
        title: "Tehnologija, rad i vrijednost ljudskih vještina",
      },
      { time: "1:41:53", title: "Izbori potrošača i cijene u fiat sustavu" },
      { time: "1:48:15", title: "Rudarenje, hash rate i energetska pitanja" },
      {
        time: "1:58:01",
        title: "Prinos, vrijeme i ulaganje u vlastite vještine",
      },
      { time: "2:12:54", title: "Novac, privatnost i rasprava o mikserima" },
      {
        time: "2:23:33",
        title: "Bitcoin standard i alternative izvan Bitcoina",
      },
      { time: "2:33:26", title: "Altcoini, rizik i dugoročna monetarna teza" },
      { time: "2:47:46", title: "Tržišta izvan radnog vremena i spekulacija" },
      {
        time: "2:56:57",
        title: "Završne misli: Power Law i vrijeme u blokovima",
      },
    ],
    needsShownotes: false,
  },
]
