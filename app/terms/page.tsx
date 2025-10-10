"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Scale,
  Handshake,
  FileText,
  CreditCard,
  Clock,
  Shield,
  AlertTriangle,
  Users,
  Mail,
  ArrowRight,
  ArrowLeft,
  CheckCircle
} from "lucide-react"
import { AnimatedSection, StaggerContainer } from "@/components/animated-section"
import SectionSeparator from "@/components/general/SectionSeparator"
import { useLanguage } from "@/components/language-provider"

const termsSections = [
  {
    icon: Handshake,
    titleKey: "terms.agreement.title",
    contentKey: "terms.agreement.content",
    key: "agreement"
  },
  {
    icon: FileText,
    titleKey: "terms.services.title",
    contentKey: "terms.services.content",
    key: "services"
  },
  {
    icon: Scale,
    titleKey: "terms.ip.title",
    contentKey: "terms.ip.content",
    key: "ip"
  },
  {
    icon: CreditCard,
    titleKey: "terms.payment.title",
    contentKey: "terms.payment.content",
    listKeys: [
      "terms.payment.deposit",
      "terms.payment.milestone",
      "terms.payment.final",
      "terms.payment.late"
    ],
    key: "payment"
  },
  {
    icon: Clock,
    titleKey: "terms.timeline.title",
    contentKey: "terms.timeline.content",
    key: "timeline"
  },
  {
    icon: Shield,
    titleKey: "terms.warranties.title",
    contentKey: "terms.warranties.content",
    key: "warranties"
  },
  {
    icon: AlertTriangle,
    titleKey: "terms.liability.title",
    contentKey: "terms.liability.content",
    key: "liability"
  },
  {
    icon: Users,
    titleKey: "terms.termination.title",
    contentKey: "terms.termination.content",
    key: "termination"
  }
]

export default function TermsPage() {
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
                <Scale className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">
                  {t("terms.hero.badge")}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t("terms.hero.title")}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t("terms.hero.subtitle")}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {t("terms.hero.lastUpdated")}
              </p>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {termsSections.map((section, index) => (
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
                                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
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
                      {t("terms.contact.badge")}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                    {t("terms.contact.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {t("terms.contact.subtitle")}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button size="lg" asChild className="group">
                    <a href="mailto:legal@oren.com">
                      {t("terms.contact.primary")}
                      {language === 'ar' ? (
                        <ArrowLeft className="ms-2 h-4 w-4" />
                      ) : (
                        <ArrowRight className="ms-2 h-4 w-4" />
                      )}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="bg-transparent hover:bg-primary/5">
                    <a href="/contact">
                      {t("terms.contact.secondary")}
                    </a>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>{t("terms.trust.professional")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>{t("terms.trust.reliable")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>{t("terms.trust.transparent")}</span>
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
