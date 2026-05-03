import { useState } from "react"

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
    return (
      <img
        alt={alt}
        className={fallbackClassName ?? className}
        loading="lazy"
        src="/social-preview.svg"
      />
    )
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
