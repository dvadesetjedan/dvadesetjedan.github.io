export type ColorTheme = "light" | "dark"

const THEME_STORAGE_KEY = "dvadesetjedan-theme"
const LIGHT_THEME_COLOR = "#fbf6ef"
const DARK_THEME_COLOR = "#19130f"

function getSystemTheme(): ColorTheme {
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark"
  }

  return "light"
}

export function getStoredTheme(): ColorTheme | null {
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)

    return storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : null
  } catch {
    return null
  }
}

export function getInitialTheme(): ColorTheme {
  return getStoredTheme() ?? getSystemTheme()
}

export function applyTheme(theme: ColorTheme) {
  document.documentElement.classList.toggle("dark", theme === "dark")
  document.documentElement.style.colorScheme = theme

  const themeColor = document.querySelector<HTMLMetaElement>(
    'meta[name="theme-color"]',
  )

  if (themeColor) {
    themeColor.content = theme === "dark" ? DARK_THEME_COLOR : LIGHT_THEME_COLOR
  }
}

export function storeTheme(theme: ColorTheme) {
  window.localStorage.setItem(THEME_STORAGE_KEY, theme)
}
