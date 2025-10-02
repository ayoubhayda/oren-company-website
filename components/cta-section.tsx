"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { AnimatedSection } from "@/components/animated-section"

export function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{t("cta.title")}</h2>
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" variant="secondary" asChild className="group">
              <Link href="/contact">
                <MessageSquare className="mr-2 h-5 w-5" />
                {t("hero.cta.primary")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
