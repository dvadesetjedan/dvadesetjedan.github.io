import type { ReactNode } from "react"

import { BackToTopButton } from "@/components/BackToTopButton"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <a
        className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background shadow-lg transition-transform focus:translate-y-0 motion-reduce:transition-none"
        href="#main-content"
      >
        Preskoči na sadržaj
      </a>
      <Header />
      <div id="main-content" tabIndex={-1} className="outline-none">
        {children}
      </div>
      <Footer />
      <BackToTopButton />
    </div>
  )
}
