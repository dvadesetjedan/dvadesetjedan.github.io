import { useState } from "react"

import { OptimizedImage } from "@/components/OptimizedImage"
import { cn } from "@/lib/utils"

type SafeImageProps = {
  src?: string
  alt: string
  className?: string
  fallbackClassName?: string
}

export function SafeImage({
  src,
  alt,
  className,
  fallbackClassName,
}: SafeImageProps) {
  const [failed, setFailed] = useState(false)
  const imageClassName = cn("image-depth", className)
  const fallbackImageClassName = cn(
    "image-depth",
    fallbackClassName ?? className,
  )

  if (!src || failed) {
    return (
      <img
        alt={alt}
        className={fallbackImageClassName}
        loading="lazy"
        src="/social-preview.svg"
      />
    )
  }

  return (
    <OptimizedImage
      alt={alt}
      className={imageClassName}
      loading="lazy"
      onError={() => setFailed(true)}
      pictureClassName="block"
      src={src}
    />
  )
}
