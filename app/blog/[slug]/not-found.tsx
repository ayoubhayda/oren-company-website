"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">{t("notFound.blog.title")}</h2>
          <p className="text-muted-foreground max-w-md mx-auto">{t("notFound.blog.description")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild>
              <Link href="/blog">{t("notFound.blog.viewAll")}</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">{t("notFound.goHome")}</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
