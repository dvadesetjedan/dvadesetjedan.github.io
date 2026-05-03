import { useState } from "react"

import { BrandVisual } from "@/components/BrandVisual"

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

  if (!src || failed) {
    return <BrandVisual className={fallbackClassName ?? className} compact />
  }

  return (
    <img
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
      src={src}
    />
  )
}
