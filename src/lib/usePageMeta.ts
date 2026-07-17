import { useEffect } from "react"

import { absoluteUrl, siteConfig } from "@/data/siteConfig"

type PageMetaOptions = {
  ogTitle?: string
  ogDescription?: string
  image?: string
  imageAlt?: string
  ogType?: "website" | "article" | "video.other"
  noindex?: boolean
}

function updateMeta(selector: string, value: string) {
  let meta = document.querySelector<HTMLMetaElement>(selector)

  if (!meta) {
    const attributeMatch = selector.match(/^meta\[(name|property)="([^"]+)"\]$/)
    if (!attributeMatch) return

    meta = document.createElement("meta")
    meta.setAttribute(attributeMatch[1], attributeMatch[2])
    document.head.append(meta)
  }

  meta.content = value
}

function updateOptionalMeta(selector: string, value?: string) {
  if (value) {
    updateMeta(selector, value)
    return
  }

  document.querySelector<HTMLMetaElement>(selector)?.remove()
}

function updateCanonical(value: string) {
  let canonical = document.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  )

  if (!canonical) {
    canonical = document.createElement("link")
    canonical.rel = "canonical"
    document.head.append(canonical)
  }

  canonical.href = value
}

function imageType(imageUrl: string) {
  const pathname = new URL(imageUrl).pathname.toLowerCase()

  if (pathname.endsWith(".webp")) return "image/webp"
  if (pathname.endsWith(".jpg") || pathname.endsWith(".jpeg")) {
    return "image/jpeg"
  }
  if (pathname.endsWith(".svg")) return "image/svg+xml"
  return "image/png"
}

function currentCanonicalUrl(pathname: string) {
  const path = pathname || "/"
  const normalizedPath =
    path === "/" || path.endsWith("/") || /\/[^/]+\.[a-z0-9]+$/i.test(path)
      ? path
      : `${path}/`

  return absoluteUrl(normalizedPath)
}

export function usePageMeta(
  title: string,
  description?: string,
  options: PageMetaOptions = {},
) {
  const pathname =
    typeof window === "undefined" ? "/" : window.location.pathname

  useEffect(() => {
    document.title = title

    const canonicalUrl = currentCanonicalUrl(pathname)
    const metaTitle = options.ogTitle ?? title
    const metaDescription =
      options.ogDescription ?? description ?? siteConfig.defaultDescription
    const requestedImage = options.image ?? siteConfig.defaultOgImage
    const imageUrl = absoluteUrl(
      /\/social-preview\.svg(?:[?#]|$)/i.test(requestedImage)
        ? siteConfig.defaultOgImage
        : requestedImage,
    )
    const imageAlt = options.imageAlt ?? metaTitle
    const inferredOgType = /^\/clanci\/[^/]+\/?$/.test(pathname)
      ? "article"
      : /^\/livestream\/[^/]+\/?$/.test(pathname)
        ? "video.other"
        : "website"
    const shouldNoindex =
      options.noindex ?? title.startsWith("Stranica nije pronađena")

    updateCanonical(canonicalUrl)

    updateMeta('meta[name="description"]', description ?? metaDescription)
    updateMeta(
      'meta[name="robots"]',
      shouldNoindex ? "noindex, follow" : "index, follow",
    )

    updateMeta('meta[property="og:title"]', metaTitle)
    updateMeta('meta[property="og:description"]', metaDescription)
    updateMeta('meta[property="og:type"]', options.ogType ?? inferredOgType)
    updateMeta('meta[property="og:url"]', canonicalUrl)
    updateMeta('meta[property="og:site_name"]', siteConfig.siteName)
    updateMeta('meta[property="og:locale"]', siteConfig.locale)
    updateMeta('meta[property="og:image"]', imageUrl)
    updateMeta('meta[property="og:image:type"]', imageType(imageUrl))
    updateMeta('meta[property="og:image:alt"]', imageAlt)
    const usesDefaultImage = imageUrl === absoluteUrl(siteConfig.defaultOgImage)
    updateOptionalMeta(
      'meta[property="og:image:width"]',
      usesDefaultImage ? "1200" : undefined,
    )
    updateOptionalMeta(
      'meta[property="og:image:height"]',
      usesDefaultImage ? "630" : undefined,
    )
    updateMeta('meta[name="twitter:title"]', metaTitle)
    updateMeta('meta[name="twitter:description"]', metaDescription)
    updateMeta('meta[name="twitter:image"]', imageUrl)
    updateMeta('meta[name="twitter:image:alt"]', imageAlt)
  }, [
    title,
    description,
    options.ogTitle,
    options.ogDescription,
    options.image,
    options.imageAlt,
    options.ogType,
    options.noindex,
    pathname,
  ])
}
