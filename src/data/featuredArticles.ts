import { readingOrder } from "@/data/site"

const featuredSlugs = [
  "niko-ne-moze-zabraniti-bitcoin",
  "zasto-je-vazna-decentralizacija-bitcoina",
  "bitcoin-privatnost-najbolje-prakse",
] as const

export const featuredArticles = featuredSlugs.map((slug) => {
  const item = readingOrder.find((entry) => entry.slug === slug)

  return {
    slug,
    title: item?.label ?? slug,
    description: item?.description ?? "",
  }
})
