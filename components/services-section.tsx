"use client"

import { Code, Palette, ShoppingCart, TrendingUp, Share2, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"

const services = [
  {
    icon: Code,
    titleKey: "services.web-dev",
    descKey: "services.web-dev.desc",
    href: "/services/web-development",
  },
  {
    icon: Zap,
    titleKey: "services.custom-platforms",
    descKey: "services.custom-platforms.desc",
    href: "/services/custom-platforms",
  },
  {
    icon: ShoppingCart,
    titleKey: "services.ecommerce",
    descKey: "services.ecommerce.desc",
    href: "/services/ecommerce",
  },
  {
    icon: TrendingUp,
    titleKey: "services.marketing",
    descKey: "services.marketing.desc",
    href: "/services/digital-marketing",
  },
  {
    icon: Share2,
    titleKey: "services.social",
    descKey: "services.social.desc",
    href: "/services/social-media",
  },
  {
    icon: Palette,
    titleKey: "services.design",
    descKey: "services.design.desc",
    href: "/services/design",
  },
]

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">{t("services.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("services.subtitle")}</p>
        </AnimatedSection>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{t(service.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {t(service.descKey)}
                  </CardDescription>
                  <Button variant="link" asChild className="p-0 h-auto font-semibold group/link">
                    <Link href={service.href}>
                      {t("common.learnMore")}
                      <span className="ml-1 transition-transform group-hover/link:translate-x-1 inline-block">→</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection delay={0.3} className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/services">{t("common.viewAll")}</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
