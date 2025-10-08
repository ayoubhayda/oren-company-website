"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Code, Palette, ShoppingCart, TrendingUp, Share2, Zap, ArrowRight, CheckCircle2, Users2, Settings, LifeBuoy, Wrench, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CTASection } from "@/components/cta-section"
import SectionSeparator from "@/components/general/SectionSeparator"
import MinimalSectionSeparator from "@/components/general/MinimalSectionSeparator"
import { HeroSectionBackground } from "@/components/animations/HeroSectionBackground"
import { useLanguage } from "@/components/language-provider"

const services = [
  {
    icon: Code,
    titleKey: "services.web-dev",
    descriptionKey: "services.web-dev.desc",
    features: ["services.web-dev.feature.1", "services.web-dev.feature.2", "services.web-dev.feature.3", "services.web-dev.feature.4"],
    href: "/services/web-development",
    badge: "services.web-dev.badge"
  },
  {
    icon: Zap,
    titleKey: "services.custom-platforms",
    descriptionKey: "services.custom-platforms.desc",
    features: ["services.custom-platforms.feature.1", "services.custom-platforms.feature.2", "services.custom-platforms.feature.3", "services.custom-platforms.feature.4"],
    href: "/services/custom-platforms",
  },
  {
    icon: ShoppingCart,
    titleKey: "services.ecommerce",
    descriptionKey: "services.ecommerce.desc",
    features: ["services.ecommerce.feature.1", "services.ecommerce.feature.2", "services.ecommerce.feature.3", "services.ecommerce.feature.4"],
    href: "/services/ecommerce",
  },
  {
    icon: TrendingUp,
    titleKey: "services.marketing",
    descriptionKey: "services.marketing.desc",
    features: ["services.marketing.feature.1", "services.marketing.feature.2", "services.marketing.feature.3", "services.marketing.feature.4"],
    href: "/services/digital-marketing",
    comingSoon: true,
  },
  {
    icon: Share2,
    titleKey: "services.social",
    descriptionKey: "services.social.desc",
    features: ["services.social.feature.1", "services.social.feature.2", "services.social.feature.3", "services.social.feature.4"],
    href: "/services/social-media",
    comingSoon: true,
  },
  {
    icon: Palette,
    titleKey: "services.design",
    descriptionKey: "services.design.desc",
    features: ["services.design.feature.1", "services.design.feature.2", "services.design.feature.3", "services.design.feature.4"],
    href: "/services/design",
    badge: "services.design.badge",
    comingSoon: true,
  },
]

export default function ServicesPage() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Interactive background effects
  useEffect(() => {
    setMounted(true)
    setIsClient(true)

    const setupInteractiveEffects = () => {
      const heroSection = document.getElementById('hero-section')
      const interactiveBg = document.getElementById('interactive-bg')
      const particleContainer = document.getElementById('particle-container')

      if (!heroSection || !interactiveBg || !particleContainer) {
        setTimeout(setupInteractiveEffects, 100)
        return
      }

      const particles = interactiveBg.querySelectorAll('.particle-1, .particle-2, .particle-3, .particle-4, .particle-5, .particle-6, .particle-7, .particle-8, .particle-9, .particle-10, .particle-11')
      const shapes = interactiveBg.querySelectorAll('.shape-1, .shape-2, .shape-3, .shape-4, .shape-5, .shape-6, .shape-7, .shape-8, .shape-9, .shape-10')
      const serviceIcons = interactiveBg.querySelectorAll('[id^="service-icon-"]')
      const orbs = interactiveBg.querySelectorAll('.orb-1, .orb-2, .orb-3, .orb-4, .orb-5, .orb-6')

      // Store original computed styles for smooth resets
      const originalStyles = new Map()

      // Initialize original styles - preserve CSS animations
        particles.forEach((particle) => {
          const element = particle as HTMLElement
        const computedStyle = window.getComputedStyle(element)
        originalStyles.set(element, {
          transform: computedStyle.transform || '',
          opacity: computedStyle.opacity || ''
        })
      })

        shapes.forEach((shape) => {
          const element = shape as HTMLElement
        const computedStyle = window.getComputedStyle(element)
        originalStyles.set(element, {
          transform: computedStyle.transform || '',
          opacity: computedStyle.opacity || ''
        })
      })

      // Mouse effects disabled - only autonomous animations

      // Mouse effects completely disabled - only autonomous animations run
    }

    const timeoutId = setTimeout(setupInteractiveEffects, 100)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Interactive Digital Experience */}
    <section className="relative overflow-hidden py-18 lg:py-22 bg-gradient-to-b from-background via-background to-primary/10" id="hero-section">
      {/* Hero Section Background Component */}
      <HeroSectionBackground />

      {/* ===== CONTENT ===== */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* digital crumbs */}
          <div className="mx-auto mb-8 flex w-full max-w-[320px] items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#0069FF]/60" />
            <div className="h-2 w-2 rounded-full bg-[#0069FF]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#00BFFF]/60" />
          </div>

          <h1 className="mx-auto max-w-5xl text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Elevate Your Digital
            <span className="relative mt-2 block text-transparent bg-clip-text bg-gradient-to-r from-[#0069FF] to-[#00BFFF]">
              Presence
            </span>
          </h1>

          <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-[#0069FF]/70" />
            Explore our services below
            <span className="h-1 w-1 rounded-full bg-[#0069FF]/70" />
          </div>
        </div>
      </div>

    </section>

        {/* Services Grid - Enhanced */}
        <section id="services" className="relative py-20 lg:py-32">
          {/* Minimal Section Separator - positioned at intersection */}
          <div className="absolute -top-12 left-0 right-0 z-10">
            <MinimalSectionSeparator />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Wrench className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">
                  {t("services.services.badge")}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t("services.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("services.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className={`group transition-all duration-300 border-border flex flex-col justify-between ${
                    service.comingSoon
                      ? "opacity-75 hover:border-muted-foreground/30 hover:-translate-y-0"
                      : "hover:border-primary/30 hover:-translate-y-1"
                  }`}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 transition-opacity duration-500 ${
                    service.comingSoon ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                  }`} />

                  <div className="relative flex flex-col gap-5">
                    <CardHeader className="space-y-4">
                      <div className="flex items-start justify-between">
                      <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center transition-colors ${
                        service.comingSoon
                          ? "bg-muted-foreground/10"
                          : "group-hover:bg-primary/20"
                      }`}>
                      <service.icon className={`h-7 w-7 transition-colors ${
                        service.comingSoon ? "text-muted-foreground" : "text-primary"
                      }`} />
                    </div>
                        <div className="flex gap-2">
                          {service.badge && (
                            <Badge variant="secondary" className="text-xs">
                              {t(service.badge)}
                            </Badge>
                          )}
                          {service.comingSoon && (
                            <Badge variant="outline" className="text-xs text-muted-foreground border-muted-foreground/30">
                              Coming Soon
                            </Badge>
                          )}
                        </div>
                      </div>
                      <CardTitle className={`text-2xl ${service.comingSoon ? "text-muted-foreground" : ""}`}>
                        {t(service.titleKey)}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-5">
                      <CardDescription className={`leading-relaxed text-base ${service.comingSoon ? "text-muted-foreground/80" : "text-muted-foreground"}`}>
                        {t(service.descriptionKey)}
                      </CardDescription>

                      <div className="space-y-2.5">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className={`flex items-center gap-3 text-sm ${service.comingSoon ? "text-muted-foreground/60" : "text-foreground/80"}`}>
                            <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${service.comingSoon ? "text-muted-foreground/40" : "text-primary"}`} />
                            <span>{t(feature)}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>

                  <CardFooter className="relative z-40">
                    {service.comingSoon ? (
                      <Button variant="outline" disabled className="w-full opacity-50 cursor-not-allowed">
                        Coming Soon
                      </Button>
                    ) : (
                      <Button variant="outline" asChild className="w-full hover:bg-primary hover:text-white transition-colors">
                        <Link href={service.href}>{t("common.learnMore")}</Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Services CTA */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-primary"></div>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  {t("services.hero.cta")}
                </Link>
                <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Seperator Section */}
        <SectionSeparator />

        {/* Why Choose Us - Enhanced */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">
                  {t("services.whychooseus.badge")}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {t("services.whychooseus.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("services.whychooseus.description")}
              </p>
            </div>

            {/* Why Choose Us - Elegant Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                {
                  titleKey: "services.whychooseus.expert.title",
                  descriptionKey: "services.whychooseus.expert.description",
                  icon: Users2,
                },
                {
                  titleKey: "services.whychooseus.custom.title",
                  descriptionKey: "services.whychooseus.custom.description",
                  icon: Settings,
                },
                {
                  titleKey: "services.whychooseus.results.title",
                  descriptionKey: "services.whychooseus.results.description",
                  icon: TrendingUp,
                },
                {
                  titleKey: "services.whychooseus.support.title",
                  descriptionKey: "services.whychooseus.support.description",
                  icon: LifeBuoy,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-card backdrop-blur-sm border border-border rounded-xl p-4 lg:p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30"
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-primary/10 text-primary mb-3 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </div>

                  <h3 className="text-sm lg:text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                    {t(item.descriptionKey)}
                  </p>
                </div>
              ))}
            </div>

            {/* Why Choose Us CTA */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-primary"></div>
                <span>{t("services.whychooseus.cta")}</span>
                <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Seperator Section */}
        <SectionSeparator />

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}