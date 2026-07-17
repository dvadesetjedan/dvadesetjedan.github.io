import { useState, type ComponentPropsWithoutRef } from "react"

import { OptimizedImage } from "@/components/OptimizedImage"
import { getLocalResponsiveWebpSrcSet } from "@/lib/images"
import { cn } from "@/lib/utils"

type SafeImageProps = Omit<ComponentPropsWithoutRef<"img">, "src"> & {
  src?: string
  fallbackClassName?: string
}

export function SafeImage({
  src,
  alt,
  className,
  fallbackClassName,
  loading = "lazy",
  decoding = "async",
  width = 1600,
  height = 900,
  sizes = "(min-width: 768px) 50vw, 100vw",
  ...imageProps
}: SafeImageProps) {
  const [failed, setFailed] = useState(false)
  const { onError, ...forwardedImageProps } = imageProps
  const imageClassName = cn("image-depth", className)
  const fallbackImageClassName = cn(
    "image-depth",
    fallbackClassName ?? className,
    "object-cover",
  )

  if (!src || failed) {
    return (
      <img
        alt={alt}
        className={fallbackImageClassName}
        decoding={decoding}
        height={630}
        loading={loading}
        sizes={sizes}
        src="/social-preview.png"
        width={1200}
        {...forwardedImageProps}
        onError={onError}
      />
    )
  }

  return (
    <OptimizedImage
      alt={alt}
      className={imageClassName}
      decoding={decoding}
      height={height}
      loading={loading}
      {...forwardedImageProps}
      onError={(event) => {
        setFailed(true)
        onError?.(event)
      }}
      pictureClassName="block"
      sizes={sizes}
      src={src}
      webpSrcSet={getLocalResponsiveWebpSrcSet(src)}
      width={width}
    />
  )
}
