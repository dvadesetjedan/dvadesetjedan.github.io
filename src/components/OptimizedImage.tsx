import type { ComponentPropsWithoutRef } from "react"

import {
  getLocalResponsiveWebpSrcSet,
  getLocalWebpSrc,
} from "@/lib/images"

type OptimizedImageProps = Omit<ComponentPropsWithoutRef<"img">, "src"> & {
  src?: string
  webpSrc?: string
  webpSrcSet?: string
  pictureClassName?: string
}

export function OptimizedImage({
  src,
  webpSrc,
  webpSrcSet,
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
      <source
        sizes={imageProps.sizes}
        srcSet={
          webpSrcSet ?? getLocalResponsiveWebpSrcSet(src) ?? resolvedWebpSrc
        }
        type="image/webp"
      />
      <img {...imageProps} src={src} />
    </picture>
  )
}
