const localRasterImageExtension = /\.(png|jpe?g)(?=([?#]|$))/i

export function getLocalWebpSrc(src?: string) {
  if (!src || !src.startsWith("/") || src.startsWith("//")) return undefined
  if (!localRasterImageExtension.test(src)) return undefined

  return src.replace(localRasterImageExtension, ".webp")
}
