"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Accessibility,
  Heart,
  CheckCircle,
  Target,
  Users,
  Code,
  Mail,
  ArrowRight,
  ArrowLeft
} from "lucide-react"
import { AnimatedSection, StaggerContainer } from "@/components/animated-section"
import SectionSeparator from "@/components/general/SectionSeparator"
import { useLanguage } from "@/components/language-provider"

const accessibilitySections = [
  {
    icon: Heart,
    titleKey: "accessibility.commitment.title",
    contentKey: "accessibility.commitment.content",
    key: "commitment"
  },
  {
    icon: Target,
    titleKey: "accessibility.conformance.title",
    contentKey: "accessibility.conformance.content",
    key: "conformance"
  },
  {
    icon: CheckCircle,
    titleKey: "accessibility.features.title",
    contentKey: "accessibility.features.content",
    listKeys: [
      "accessibility.features.semantic",
      "accessibility.features.keyboard",
      "accessibility.features.contrast",
      "accessibility.features.alt",
      "accessibility.features.responsive",
      "accessibility.features.focus",
      "accessibility.features.aria"
    ],
    key: "features"
  },
  {
    icon: Users,
    titleKey: "accessibility.limitations.title",
    contentKey: "accessibility.limitations.content",
    key: "limitations"
  },
  {
    icon: Mail,
    titleKey: "accessibility.feedback.title",
    contentKey: "accessibility.feedback.content",
    key: "feedback"
  }
]

export default function AccessibilityPage() {
  const { t, language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-0 pt-28 sm:pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Accessibility className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">
                  {t("accessibility.hero.badge")}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t("accessibility.hero.title")}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t("accessibility.hero.subtitle")}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {t("accessibility.hero.lastUpdated")}
              </p>
            </div>
          </div>
                </section>

        {/* Accessibility Sections */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {accessibilitySections.map((section, index) => (
                <AnimatedSection key={section.key} delay={index * 0.1}>
                  <Card className="group transition-all duration-300 border-border flex flex-col justify-between h-full hover:border-primary/30 hover:-translate-y-1">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />

                    <div className="relative flex flex-col gap-5">
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <section.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-foreground mb-3">{t(section.titleKey)}</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {t(section.contentKey)}
                            </p>
                            {section.listKeys && (
                              <ul className="space-y-2">
                                {section.listKeys.map((itemKey, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">{t(itemKey)}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}

              {/* Technical Specifications Card */}
              <AnimatedSection delay={0.5}>
                <Card className="group transition-all duration-300 border-border flex flex-col justify-between h-full hover:border-primary/30 hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />

                  <div className="relative flex flex-col gap-5">
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Code className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-3">{t("accessibility.technical.title")}</h3>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            Accessibility of this website relies on the following technologies to work with the particular
                            combination of web browser and assistive technologies or plugins installed on your computer:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">HTML5</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">CSS3</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">JavaScript</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">ARIA (Accessible Rich Internet Applications)</span>
                            </li>
                  </ul>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </AnimatedSection>
            </StaggerContainer>
          </div>
                </section>

        <SectionSeparator />

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-primary font-medium text-sm">
                      {t("accessibility.contact.badge")}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                    {t("accessibility.contact.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {t("accessibility.contact.subtitle")}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button size="lg" asChild className="group">
                    <a href="mailto:accessibility@oren.com">
                      {t("accessibility.contact.primary")}
                      {language === 'ar' ? (
                        <ArrowLeft className="ms-2 h-4 w-4" />
                      ) : (
                        <ArrowRight className="ms-2 h-4 w-4" />
                      )}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="bg-transparent hover:bg-primary/5">
                    <a href="/contact">
                      {t("accessibility.contact.secondary")}
                    </a>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>{t("accessibility.trust.inclusive")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>{t("accessibility.trust.accessible")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>{t("accessibility.trust.compliant")}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
