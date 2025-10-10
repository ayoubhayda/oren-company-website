"use client"

import { useEffect, useRef, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Search, Share2, BarChart, Target, Users, Zap, Database, Globe, Wrench, Sparkles, Mail, Smartphone, ArrowRight, Play, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/components/language-provider"

export default function DigitalMarketingPage() {
  const { t } = useLanguage()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle system for animated background
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }> = []

    const particleCount = 50
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      })
    }

    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 105, 255, 0.3)"
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(0, 105, 255, ${
              0.2 * (1 - distance / 150)
            })`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="h-screen flex justify-center items-end relative">
          {/* Animated Background Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0"
            style={{ background: 'transparent' }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-1 bg-gradient-to-b from-background/50 via-background/80 to-background" />

          <div className="relative h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden">
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                {/* Animated Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                  <TrendingUp className="w-4 h-4" />
                  {t("services.digital-marketing.hero.badge")}
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  {t("services.digital-marketing.hero.title")}
                </h1>

                {/* Subheading */}
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  {t("services.digital-marketing.hero.subtitle")}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto px-4 sm:px-0">
                  <Button
                    size="lg"
                    asChild
                    className="group w-full sm:w-auto shadow-none transition-all"
                  >
                    <Link href="/contact">
                      {t("services.digital-marketing.hero.button.primary")}
                      <ArrowRight className="ms-2 h-4 w-4 transform rtl:rotate-180" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="group bg-transparent hover:bg-primary/5 w-full sm:w-auto transition-all"
                  >
                    <Link href="/portfolio">
                      {t("services.digital-marketing.hero.button.secondary")}
                      <Play className="ms-2 h-4 w-4 transform rtl:rotate-180" />
                    </Link>
                  </Button>
                </div>

                {/* Trust Signals */}
                <div className="pt-8 sm:pt-12 flex flex-wrap items-center justify-center gap-5 sm:gap-12 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-lg sm:text-2xl font-bold text-foreground">
                      200%
                    </span>
                    <span className="text-[10px] sm:text-sm">
                      {t("services.digital-marketing.hero.stats.roi")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-lg sm:text-2xl font-bold text-foreground">
                      50K+
                    </span>
                    <span className="text-[10px] sm:text-sm">
                      {t("services.digital-marketing.hero.stats.leads")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-lg sm:text-2xl font-bold text-foreground">
                      24/7
                    </span>
                    <span className="text-[10px] sm:text-sm">
                      {t("services.digital-marketing.hero.stats.campaigns")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Wrench className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">
                  {t("services.digital-marketing.features.badge")}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">{t("services.digital-marketing.features.title")}</h2>
              <p className="text-lg text-muted-foreground">{t("services.digital-marketing.features.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Search,
                  titleKey: "services.digital-marketing.features.seo.title",
                  descriptionKey: "services.digital-marketing.features.seo.description",
                },
                {
                  icon: Share2,
                  titleKey: "services.digital-marketing.features.content.title",
                  descriptionKey: "services.digital-marketing.features.content.description",
                },
                {
                  icon: BarChart,
                  titleKey: "services.digital-marketing.features.ppc.title",
                  descriptionKey: "services.digital-marketing.features.ppc.description",
                },
                {
                  icon: Target,
                  titleKey: "services.digital-marketing.features.targeting.title",
                  descriptionKey: "services.digital-marketing.features.targeting.description",
                },
                {
                  icon: Users,
                  titleKey: "services.digital-marketing.features.social.title",
                  descriptionKey: "services.digital-marketing.features.social.description",
                },
                {
                  icon: Mail,
                  titleKey: "services.digital-marketing.features.email.title",
                  descriptionKey: "services.digital-marketing.features.email.description",
                },
              ].map((feature, index) => (
                <Card key={index} className="group border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{t(feature.titleKey)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t(feature.descriptionKey)}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* Features CTA */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-primary"></div>
                <span>{t("services.digital-marketing.features.cta")}</span>
                <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">
                  {t("services.digital-marketing.technologies.badge")}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">{t("services.digital-marketing.technologies.title")}</h2>
              <p className="text-lg text-muted-foreground">{t("services.digital-marketing.technologies.subtitle")}</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  "Google Ads",
                  "Facebook Ads",
                  "Google Analytics",
                  "SEMrush",
                  "Ahrefs",
                  "Mailchimp",
                  "HubSpot",
                  "Hootsuite"
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="group bg-card border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <p className="font-semibold text-foreground">{tech}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies CTA */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-primary"></div>
                <span>{t("services.digital-marketing.technologies.cta")}</span>
                <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">
                  {t("services.digital-marketing.process.badge")}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">{t("services.digital-marketing.process.title")}</h2>
              <p className="text-lg text-muted-foreground">
                {t("services.digital-marketing.process.subtitle")}
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  step: "01",
                  titleKey: "services.digital-marketing.process.research.title",
                  descriptionKey: "services.digital-marketing.process.research.description",
                },
                {
                  step: "02",
                  titleKey: "services.digital-marketing.process.strategy.title",
                  descriptionKey: "services.digital-marketing.process.strategy.description",
                },
                {
                  step: "03",
                  titleKey: "services.digital-marketing.process.implementation.title",
                  descriptionKey: "services.digital-marketing.process.implementation.description",
                },
                {
                  step: "04",
                  titleKey: "services.digital-marketing.process.monitoring.title",
                  descriptionKey: "services.digital-marketing.process.monitoring.description",
                },
                {
                  step: "05",
                  titleKey: "services.digital-marketing.process.optimization.title",
                  descriptionKey: "services.digital-marketing.process.optimization.description",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{t(item.titleKey)}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t(item.descriptionKey)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Process CTA */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-primary"></div>
                <span>{t("services.digital-marketing.process.cta")}</span>
                <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">
                  {t("services.digital-marketing.faq.badge")}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t("services.digital-marketing.faq.title")}
              </h2>
              <p className="text-lg text-muted-foreground">{t("services.digital-marketing.faq.subtitle")}</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {t("services.digital-marketing.faq.roi.question")}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t("services.digital-marketing.faq.roi.answer")}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {t("services.digital-marketing.faq.timeline.question")}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t("services.digital-marketing.faq.timeline.answer")}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {t("services.digital-marketing.faq.reporting.question")}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t("services.digital-marketing.faq.reporting.answer")}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {t("services.digital-marketing.faq.budget.question")}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t("services.digital-marketing.faq.budget.answer")}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {t("services.digital-marketing.faq.channels.question")}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t("services.digital-marketing.faq.channels.answer")}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* FAQ CTA */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-primary"></div>
                <span>{t("services.digital-marketing.faq.cta")}</span>
                <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">
                  {t("common.getStarted")}
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {t("services.digital-marketing.cta.title")}
              </h2>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                {t("services.digital-marketing.cta.subtitle")}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  asChild
                  className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-none transition-all"
                >
                  <Link href="/contact">
                    {t("hero.cta.primary")}
                    <ArrowRight className="ms-2 h-4 w-4 transform rtl:rotate-180" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="group bg-transparent hover:bg-primary/5 border-border hover:border-primary/30 transition-all"
                >
                  <Link href="/portfolio">
                    {t("hero.cta.secondary")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
