"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Code, Palette, ShoppingCart, TrendingUp, Share2, Zap, ArrowRight, CheckCircle2, Users2, Settings, LifeBuoy, Wrench, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CTASection } from "@/components/cta-section"
import SectionSeparator from "@/components/general/SectionSeparator"
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
  },
  {
    icon: Share2,
    titleKey: "services.social",
    descriptionKey: "services.social.desc",
    features: ["services.social.feature.1", "services.social.feature.2", "services.social.feature.3", "services.social.feature.4"],
    href: "/services/social-media",
  },
  {
    icon: Palette,
    titleKey: "services.design",
    descriptionKey: "services.design.desc",
    features: ["services.design.feature.1", "services.design.feature.2", "services.design.feature.3", "services.design.feature.4"],
    href: "/services/design",
    badge: "services.design.badge"
  },
]

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Enhanced */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Zap className="w-4 h-4" />
                <span>{t("services.hero.badge")}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tight">
                {t("services.hero.title.line1")}
                <span className="block text-primary mt-2">{t("services.hero.title.line2")}</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {t("services.hero.subtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="text-base">
                  <Link href="#services">
                    {t("services.hero.button.explore")}
                    <ArrowRight className="ms-0.5 h-5 w-5 transform rtl:rotate-180" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base">
                  <Link href="/contact">{t("services.hero.button.consultation")}</Link>
                </Button>
              </div>

              {/* Hero CTA */}
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground pt-8">
                <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-primary"></div>
                <span>{t("services.hero.cta")}</span>
                <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Seperator Section */}
        <SectionSeparator />

        {/* Services Grid - Enhanced */}
        <section id="services" className="py-20 lg:py-32">
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
                  className="group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 border-border flex flex-col justify-between"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex flex-col gap-5">
                    <CardHeader className="space-y-4">
                      <div className="flex items-start justify-between">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                        {service.badge && (
                          <Badge variant="secondary" className="text-xs">
                            {t(service.badge)}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-2xl">{t(service.titleKey)}</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-5">
                      <CardDescription className="text-muted-foreground leading-relaxed text-base">
                        {t(service.descriptionKey)}
                      </CardDescription>

                      <div className="space-y-2.5">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm text-foreground/80">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{t(feature)}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                  
                  <CardFooter className="relative z-40">
                  <Button variant="outline" asChild className="w-full hover:bg-primary/5">
                      <Link href={service.href}>{t("common.learnMore")}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Services CTA */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-primary"></div>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  {t("services.viewAllServices")}
                </Link>
                <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Seperator Section */}
        <SectionSeparator />

        {/* Why Choose Us - Enhanced */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-background via-muted/30 to-background">
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