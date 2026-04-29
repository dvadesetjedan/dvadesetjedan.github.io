export function stripHtml(input: string) {
  return input.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
}

export function truncateText(input: string, maxLength = 160) {
  if (input.length <= maxLength) return input
  return `${input.slice(0, maxLength - 1).trimEnd()}…`
}
