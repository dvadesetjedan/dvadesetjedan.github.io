export const locales = ["hr", "sr", "sl"] as const

export type Locale = (typeof locales)[number]

const STORAGE_KEY = "dvadesetjedan-locale"

export const localeLabels: Record<Locale, string> = {
  hr: "Hrvatski",
  sr: "Srpski",
  sl: "Slovenski",
}

export function getInitialLocale(): Locale {
  try {
    const locale = window.localStorage.getItem(STORAGE_KEY)
    return locales.includes(locale as Locale) ? (locale as Locale) : "hr"
  } catch {
    return "hr"
  }
}

export function storeLocale(locale: Locale) {
  window.localStorage.setItem(STORAGE_KEY, locale)
  document.documentElement.lang = locale
}
