"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"

const projects = [
  {
    title: "E-commerce Platform",
    description: "Modern online store with advanced filtering and seamless checkout experience",
    image: "/modern-ecommerce-website.png",
    tags: ["E-commerce", "React", "Node.js"],
    href: "/portfolio/ecommerce-platform",
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard for B2B software with real-time data visualization",
    image: "/saas-analytics-dashboard.png",
    tags: ["SaaS", "Dashboard", "TypeScript"],
    href: "/portfolio/saas-dashboard",
  },
  {
    title: "Corporate Website",
    description: "Professional corporate site with multilingual support and CMS integration",
    image: "/professional-corporate-website.png",
    tags: ["Corporate", "CMS", "Multilingual"],
    href: "/portfolio/corporate-website",
  },
]

export function PortfolioPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">{t("portfolio.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("portfolio.subtitle")}</p>
        </AnimatedSection>

        {/* Projects Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <Link href={project.href} className="group block">
                <Card className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection delay={0.3} className="text-center mt-12">
          <Button size="lg" asChild className="group">
            <Link href="/portfolio">
              {t("portfolio.view-all")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
