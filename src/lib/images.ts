const localRasterImageExtension = /\.(png|jpe?g)(?=([?#]|$))/i

export function getLocalWebpSrc(src?: string) {
  if (!src || !src.startsWith("/") || src.startsWith("//")) return undefined
  if (!localRasterImageExtension.test(src)) return undefined

  return src.replace(localRasterImageExtension, ".webp")
}

export function getLocalResponsiveWebpSrcSet(src?: string) {
  const webpSrc = getLocalWebpSrc(src)

  if (
    !webpSrc ||
    (!webpSrc.startsWith("/events/") &&
      !webpSrc.startsWith("/images/cities/") &&
      !webpSrc.startsWith("/images/events/") &&
      !webpSrc.startsWith("/images/livestream/"))
  ) {
    return undefined
  }

  const base = encodeURI(webpSrc.replace(/\.webp(?=([?#]|$))/i, ""))
  return `${base}-480.webp 480w, ${base}-960.webp 960w, ${base}-1440.webp 1440w`
}
