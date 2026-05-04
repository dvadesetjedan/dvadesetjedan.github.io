import type { ReactNode } from "react"

import { BackToTopButton } from "@/components/BackToTopButton"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <Footer />
      <BackToTopButton />
    </div>
  )
}
