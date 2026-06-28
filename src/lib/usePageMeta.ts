import { useEffect } from "react"

import { absoluteUrl } from "@/data/siteConfig"

type PageMetaOptions = {
  ogTitle?: string
  ogDescription?: string
  image?: string
}

function updateMeta(selector: string, value: string) {
  const meta = document.querySelector<HTMLMetaElement>(selector)

  if (meta) {
    meta.content = value
  }
}

export function usePageMeta(
  title: string,
  description?: string,
  options: PageMetaOptions = {},
) {
  useEffect(() => {
    document.title = title

    if (description) {
      updateMeta('meta[name="description"]', description)
    }

    updateMeta('meta[property="og:title"]', options.ogTitle ?? title)
    updateMeta(
      'meta[property="og:description"]',
      options.ogDescription ?? description ?? "",
    )
    updateMeta('meta[name="twitter:title"]', options.ogTitle ?? title)
    updateMeta(
      'meta[name="twitter:description"]',
      options.ogDescription ?? description ?? "",
    )

    if (options.image) {
      const imageUrl = absoluteUrl(options.image)

      updateMeta('meta[property="og:image"]', imageUrl)
      updateMeta('meta[name="twitter:image"]', imageUrl)
    }
  }, [
    title,
    description,
    options.ogTitle,
    options.ogDescription,
    options.image,
  ])
}
