export function stripHtml(input: string) {
  return input
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export function truncateText(input: string, maxLength = 160) {
  if (input.length <= maxLength) return input
  return `${input.slice(0, maxLength - 1).trimEnd()}…`
}

const legacyArticleImageDimensions: Record<string, readonly [number, number]> = {
  "/images/content/blog/bitcoin-je-vrijeme/alice-bob-bank.webp": [1920, 1080],
  "/images/content/blog/bitcoin-je-vrijeme/ledger-token.webp": [1920, 1080],
  "/images/content/blog/bitcoin-je-vrijeme/proof-of-publication.webp": [
    1920, 1080,
  ],
  "/images/content/blog/bitcoin-je-vrijeme/proof-of-time.webp": [350, 230],
  "/images/content/blog/bitcoin-je-vrijeme/sha256.webp": [1920, 1080],
  "/images/content/blog/bitcoin-je-vrijeme/timechain.webp": [1210, 744],
  "/images/content/blog/bullishcase/1*HsB1VOYAf1MUvPyuf13b9g.webp": [
    720, 412,
  ],
  "/images/content/blog/bullishcase/1*Wpt9pCznLfQP9KoWzv9vGA.webp": [
    720, 353,
  ],
  "/images/content/blog/bullishcase/1*_63fojX4ZSQxWlLNR6brLQ.webp": [
    720, 834,
  ],
  "/images/content/blog/bullishcase/1*bSHwkeSS0akMdp563SeZWw.webp": [
    720, 481,
  ],
  "/images/content/blog/bullishcase/1*sR1Puz5clh5-X_9VMBGZ-A.webp": [
    720, 539,
  ],
  "/images/content/blog/bullishcase/1*tCCCuRLl5IZcamvdaNWV4Q.webp": [
    720, 480,
  ],
  "/images/content/blog/bullishcase/monetarnapremija-razlicita-dobra.webp": [
    512, 408,
  ],
  "/images/content/blog/bullishcase/povjerenjevriijemebitcoin.webp": [
    512, 310,
  ],
  "/images/content/blog/bullishcase/vidljivost-vrijeme.webp": [512, 331],
  "/images/content/blog/bullishcase/vrijeme-penetracija-trzista.webp": [
    512, 341,
  ],
  "/images/content/blog/bullishcase/1*77EFO1Wmx6uHOmbL5aHFiA.gif": [
    720, 445,
  ],
  "/images/content/blog/niko-ne-moze-zabraniti-btc/FUD-kockica.webp": [
    918, 326,
  ],
  "/images/content/blog/niko-ne-moze-zabraniti-btc/centralizovan-decentralizovan-monetarni-sistem.webp": [
    512, 256,
  ],
  "/images/content/blog/niko-ne-moze-zabraniti-btc/da-li-drzava-moze-zabraniti-bitcoin.webp": [
    512, 332,
  ],
  "/images/content/blog/niko-ne-moze-zabraniti-btc/drzava.webp": [
    512, 186,
  ],
  "/images/content/blog/niko-ne-moze-zabraniti-btc/mapa-bitcoin-nodova.webp": [
    624, 385,
  ],
}

const legacyArticleImageAlts: Record<string, string> = {
  "/images/content/blog/bitcoin-je-vrijeme/alice-bob-bank.webp":
    "Shema: Alice i Bob šalju transakcije banci, uz zasebne štoperice i središnji sat.",
  "/images/content/blog/bitcoin-je-vrijeme/ledger-token.webp":
    "Glinena pločica s drevnom evidencijom uz metalne novčiće, usporedba evidencije i tokena.",
  "/images/content/blog/bitcoin-je-vrijeme/proof-of-publication.webp":
    "Četiri dokumenta povezana strelicama; svaki sljedeći sadrži otisak prethodnog kao dokaz redoslijeda objave.",
  "/images/content/blog/bitcoin-je-vrijeme/proof-of-time.webp":
    "Oteti muškarac pod prijetnjom oružjem drži novine kao dokaz da je bio živ nakon datuma njihova izdanja.",
  "/images/content/blog/bitcoin-je-vrijeme/sha256.webp":
    "Shema: dokument A prolaskom kroz SHA-256 daje jedinstveni digitalni otisak B.",
  "/images/content/blog/bitcoin-je-vrijeme/timechain.webp":
    "Isječak Bitcoinova izvornog koda s komentarom „put the main timechain first”.",
  "/images/content/blog/bullishcase/1*_63fojX4ZSQxWlLNR6brLQ.webp":
    "Tablica ocjena Bitcoina, zlata i fiat novca prema trajnosti, prenosivosti, zamjenjivosti, provjerljivosti, djeljivosti, oskudnosti, povijesti i otpornosti na cenzuru.",
  "/images/content/blog/bullishcase/1*sR1Puz5clh5-X_9VMBGZ-A.webp":
    "Kupci uz gotovo potpuno prazne police u trgovini, ilustracija nestašice tijekom hiperinflacije.",
  "/images/content/blog/bullishcase/1*HsB1VOYAf1MUvPyuf13b9g.webp":
    "Povijesna linija cijene zlata od 1968. do 2011., s vrhuncem oko 1980. i snažnim rastom nakon 2001.",
  "/images/content/blog/bullishcase/1*bSHwkeSS0akMdp563SeZWw.webp": "",
  "/images/content/blog/bullishcase/1*tCCCuRLl5IZcamvdaNWV4Q.webp": "",
  "/images/content/blog/bullishcase/1*Wpt9pCznLfQP9KoWzv9vGA.webp": "",
  "/images/content/blog/bullishcase/monetarnapremija-razlicita-dobra.webp":
    "Stupčasti graf: industrijska potražnja prevladava kod srebra, monetarna kod zlata, a Bitcoin ima isključivo monetarnu premiju.",
  "/images/content/blog/bullishcase/povjerenjevriijemebitcoin.webp":
    "Krivulja porasta povjerenja kroz vrijeme: Bitcoin je na ranijoj točki, a zlato na zreloj gornjoj razini.",
  "/images/content/blog/bullishcase/vidljivost-vrijeme.webp":
    "Gartnerov ciklus vidljivosti: tehnološki okidač, vrhunac napuhanih očekivanja, dolina razočaranja, uspon prosvjetljenja i plato produktivnosti.",
  "/images/content/blog/bullishcase/vrijeme-penetracija-trzista.webp":
    "S-krivulja prihvaćanja kroz vrijeme, od ranih entuzijasta i rane većine do kasne većine i najsporijih korisnika.",
  "/images/content/blog/bullishcase/1*77EFO1Wmx6uHOmbL5aHFiA.gif": "",
  "/images/content/blog/niko-ne-moze-zabraniti-btc/FUD-kockica.webp":
    "Usporedba crnih Bitcoin kockica s pozitivnim porukama i sivih FUD kockica s uobičajenim prigovorima Bitcoinu.",
  "/images/content/blog/niko-ne-moze-zabraniti-btc/centralizovan-decentralizovan-monetarni-sistem.webp":
    "Dijagram: centralizirani monetarni sustav ovisi o središnjoj banci, dok su Bitcoin čvorovi međusobno povezani bez središnje točke.",
  "/images/content/blog/niko-ne-moze-zabraniti-btc/da-li-drzava-moze-zabraniti-bitcoin.webp":
    "Dijagram odluke: ako Bitcoin ne funkcionira kao novac, država ga nema što zabraniti; ako funkcionira, postavlja se može li ga država zabraniti.",
  "/images/content/blog/niko-ne-moze-zabraniti-btc/drzava.webp":
    "Matrica izbora dviju država: zabrana Bitcoina uzrokuje odljev kapitala, a prihvaćanje priljev i prosperitet; u svim scenarijima Bitcoin pobjeđuje.",
  "/images/content/blog/niko-ne-moze-zabraniti-btc/mapa-bitcoin-nodova.webp":
    "Karta svijeta s koncentracijom dostupnih Bitcoin čvorova, najviše u Sjevernoj Americi, Europi i istočnoj Aziji.",
}

function addHtmlAttribute(tag: string, name: string, value: string | number) {
  if (new RegExp(`\\b${name}=`, "i").test(tag)) return tag
  return tag.replace(/(\s*\/?>)$/, ` ${name}="${value}"$1`)
}

function imageDescriptionFromUrl(url: string) {
  const encodedName = url.split(/[?#]/)[0]?.split("/").pop() ?? ""
  let decodedName = encodedName

  try {
    decodedName = decodeURIComponent(encodedName)
  } catch {
    // Zadržavamo izvorni naziv ako URL sadrži neispravan escape slijed.
  }

  const readableName = decodedName
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()

  return readableName ? `Ilustracija: ${readableName}` : "Ilustracija uz članak"
}

export function sanitizeLegacyArticleHtml(input: string) {
  return input
    .replace(
      /<a\b[^>]*href=(["'])\/images\/[^>]+>\s*(<img\b[^>]*>)\s*<\/a>/gi,
      "$2",
    )
    .replace(
      /<p\b[^>]*>\s*<a\b[^>]*>\s*<\/a>\s*<\/p>/gi,
      "",
    )
    .replace(/<a\b[^>]*>\s*<\/a>/gi, "")
    .replace(/<p\b[^>]*>(?:\s|&nbsp;)*<\/p>/gi, "")
    .replace(/<img\b[^>]*>/gi, (imageTag) => {
      const src = imageTag.match(/\bsrc=(["'])(.*?)\1/i)?.[2] ?? ""
      let nextTag = imageTag

      const knownAlt = legacyArticleImageAlts[src]
      if (knownAlt !== undefined) {
        const escapedAlt = knownAlt.replace(/"/g, "&quot;")
        if (/\balt=(["'])[^"']*\1/i.test(nextTag)) {
          nextTag = nextTag.replace(
            /\balt=(["'])[^"']*\1/i,
            `alt="${escapedAlt}"`,
          )
        } else {
          nextTag = addHtmlAttribute(nextTag, "alt", escapedAlt)
        }
      } else if (/\balt=(["'])\1/i.test(nextTag)) {
        const description = imageDescriptionFromUrl(src).replace(/"/g, "&quot;")
        nextTag = nextTag.replace(/\balt=(["'])\1/i, `alt="${description}"`)
      }

      const dimensions = legacyArticleImageDimensions[src]
      if (dimensions) {
        const [width, height] = dimensions
        nextTag = addHtmlAttribute(nextTag, "width", width)
        nextTag = addHtmlAttribute(nextTag, "height", height)

        if (src.endsWith(".webp") && width > 480) {
          const base = src.replace(/\.webp$/, "")
          const candidates = [`${base}-480.webp 480w`]
          if (width > 960) candidates.push(`${base}-960.webp 960w`)
          if (width > 1440) candidates.push(`${base}-1440.webp 1440w`)
          candidates.push(`${src} ${width}w`)
          nextTag = addHtmlAttribute(nextTag, "srcset", candidates.join(", "))
          nextTag = addHtmlAttribute(
            nextTag,
            "sizes",
            "(min-width: 768px) 72ch, calc(100vw - 2.5rem)",
          )
        }
      }

      nextTag = addHtmlAttribute(nextTag, "loading", "lazy")
      nextTag = addHtmlAttribute(nextTag, "decoding", "async")

      return nextTag
    })
}
