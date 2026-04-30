import { absoluteUrl, siteConfig } from "@/data/siteConfig"

export type SeoRouteType =
  | "home"
  | "page"
  | "article"
  | "event"
  | "livestreamEpisode"
  | "city"

export type SeoMetadata = {
  path: string
  title: string
  description: string
  routeType: SeoRouteType
  image?: string
  jsonLd?: Record<string, unknown>[]
}

export function canonicalUrl(path: string) {
  return absoluteUrl(path)
}

export function ogImageUrl(image?: string) {
  return absoluteUrl(image ?? siteConfig.defaultOgImage)
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    inLanguage: "hr",
  }
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    sameAs: [
      siteConfig.socials.youtube,
      siteConfig.socials.telegram,
      siteConfig.socials.github,
      siteConfig.socials.twentyOneWorld,
    ],
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  }
}
