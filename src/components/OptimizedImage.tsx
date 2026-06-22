import type { ComponentPropsWithoutRef } from "react"

import { getLocalWebpSrc } from "@/lib/images"

type OptimizedImageProps = Omit<ComponentPropsWithoutRef<"img">, "src"> & {
  src?: string
  webpSrc?: string
  pictureClassName?: string
}

export function OptimizedImage({
  src,
  webpSrc,
  pictureClassName,
  ...imageProps
}: OptimizedImageProps) {
  if (!src) return null

  const resolvedWebpSrc = webpSrc ?? getLocalWebpSrc(src)

  if (!resolvedWebpSrc) {
    return <img {...imageProps} src={src} />
  }

  return (
    <picture className={pictureClassName}>
      <source srcSet={resolvedWebpSrc} type="image/webp" />
      <img {...imageProps} src={src} />
    </picture>
  )
}
