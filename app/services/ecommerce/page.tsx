"use client"

import { useEffect, useRef, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, CreditCard, Package, TrendingUp, Shield, Smartphone, Zap, Database, Globe, Wrench, Sparkles, ArrowRight, Play, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { StaggerContainer, StaggerItem } from "@/components/animated-section"
import SectionSeparator from "@/components/general/SectionSeparator"

export default function EcommercePage() {
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
    <div className="min-h-screen pt-28 sm:pt-32">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative">
          {/* Animated Background Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0"
            style={{ background: 'transparent' }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-1 bg-gradient-to-b from-background/50 via-background/80 to-background" />

          <div className="relative w-full flex items-center justify-center overflow-hidden">
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pB-20 lg:pb-32">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                {/* Animated Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </motion.div>
                  {t("services.ecommerce.hero.badge")}
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {t("services.ecommerce.hero.title")}
                </motion.h1>

                {/* Subheading */}
                <motion.p
                  className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {t("services.ecommerce.hero.subtitle")}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto px-4 sm:px-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      size="lg"
                      asChild
                      className="group w-full sm:w-auto shadow-none transition-all"
                    >
                      <Link href="/contact">
                        <motion.span
                          className="flex items-center gap-2"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {t("services.ecommerce.hero.button.primary")}
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <ArrowRight className="ms-2 h-4 w-4 transform rtl:rotate-180" />
                          </motion.div>
                        </motion.span>
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="group bg-transparent hover:bg-primary/5 w-full sm:w-auto transition-all"
                    >
                      <Link href="/portfolio">
                        <motion.span
                          className="flex items-center gap-2"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {t("services.ecommerce.hero.button.secondary")}
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Play className="ms-2 h-4 w-4 transform rtl:rotate-180" />
                          </motion.div>
                        </motion.span>
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>

                
              </div>
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* Key Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Header Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Wrench className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-primary font-medium text-sm">
                  {t("services.ecommerce.features.badge")}
                </span>
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t("services.ecommerce.features.title")}
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t("services.ecommerce.features.subtitle")}
              </motion.p>
            </motion.div>

            <StaggerContainer className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: CreditCard,
                    titleKey: "services.ecommerce.features.payments.title",
                    descriptionKey: "services.ecommerce.features.payments.description",
                  },
                  {
                    icon: Package,
                    titleKey: "services.ecommerce.features.inventory.title",
                    descriptionKey: "services.ecommerce.features.inventory.description",
                  },
                  {
                    icon: TrendingUp,
                    titleKey: "services.ecommerce.features.analytics.title",
                    descriptionKey: "services.ecommerce.features.analytics.description",
                  },
                  {
                    icon: Shield,
                    titleKey: "services.ecommerce.features.security.title",
                    descriptionKey: "services.ecommerce.features.security.description",
                  },
                  {
                    icon: Smartphone,
                    titleKey: "services.ecommerce.features.mobile.title",
                    descriptionKey: "services.ecommerce.features.mobile.description",
                  },
                  {
                    icon: Zap,
                    titleKey: "services.ecommerce.features.performance.title",
                    descriptionKey: "services.ecommerce.features.performance.description",
                  },
                ].map((feature, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="group h-full"
                    >
                      <Card className="relative overflow-hidden border-border flex flex-col justify-between h-full transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                        {/* Animated gradient overlay on hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 pointer-events-none"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />

                        <div className="relative flex flex-col gap-5">
                          <CardContent className="pt-6 relative z-10">
                            <motion.div
                              className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-colors duration-300"
                              whileHover={{ backgroundColor: "rgb(0 105 255 / 0.2)", scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <motion.div
                                whileHover={{ rotate: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <feature.icon className="h-6 w-6 text-primary" />
                              </motion.div>
                            </motion.div>
                            <motion.h3
                              className="text-xl font-semibold text-foreground mb-2"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.1 }}
                            >
                              {t(feature.titleKey)}
                            </motion.h3>
                            <motion.p
                              className="text-muted-foreground text-sm leading-relaxed"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                            >
                              {t(feature.descriptionKey)}
                            </motion.p>
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* Features CTA */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-primary"></div>
                <span>{t("services.ecommerce.features.cta")}</span>
                <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </motion.div>
          </div>
        </section>

        <SectionSeparator />

        {/* Technologies */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Header Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Zap className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-primary font-medium text-sm">
                  {t("services.ecommerce.technologies.badge")}
                </span>
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t("services.ecommerce.technologies.title")}
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t("services.ecommerce.technologies.subtitle")}
              </motion.p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  "Shopify",
                  "WooCommerce",
                  "Magento",
                  "Stripe",
                  "PayPal",
                  "Square",
                  "React",
                  "Node.js"
                ].map((tech, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="group bg-card border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-lg relative overflow-hidden"
                    >
                      {/* Gradient overlay on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />

                      <div className="relative">
                        <motion.p
                          className="font-semibold text-foreground"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                        >
                          {tech}
                        </motion.p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Technologies CTA */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-primary"></div>
                <span>{t("services.ecommerce.technologies.cta")}</span>
                <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </motion.div>
          </div>
        </section>

        <SectionSeparator />

        {/* Process */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Header Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Globe className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-primary font-medium text-sm">
                  {t("services.ecommerce.process.badge")}
                </span>
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t("services.ecommerce.process.title")}
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t("services.ecommerce.process.subtitle")}
              </motion.p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  step: "01",
                  titleKey: "services.ecommerce.process.planning.title",
                  descriptionKey: "services.ecommerce.process.planning.description",
                },
                {
                  step: "02",
                  titleKey: "services.ecommerce.process.design.title",
                  descriptionKey: "services.ecommerce.process.design.description",
                },
                {
                  step: "03",
                  titleKey: "services.ecommerce.process.development.title",
                  descriptionKey: "services.ecommerce.process.development.description",
                },
                {
                  step: "04",
                  titleKey: "services.ecommerce.process.testing.title",
                  descriptionKey: "services.ecommerce.process.testing.description",
                },
                {
                  step: "05",
                  titleKey: "services.ecommerce.process.launch.title",
                  descriptionKey: "services.ecommerce.process.launch.description",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-6 items-start"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.step}
                  </motion.div>
                  <div className="flex-1 pt-2">
                    <motion.h3
                      className="text-xl font-semibold text-foreground mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {t(item.titleKey)}
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      {t(item.descriptionKey)}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Process CTA */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-primary"></div>
                <span>{t("services.ecommerce.process.cta")}</span>
                <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </motion.div>
          </div>
        </section>

        <SectionSeparator />

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Header Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Shield className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-primary font-medium text-sm">
                  {t("services.ecommerce.faq.badge")}
                </span>
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t("services.ecommerce.faq.title")}
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t("services.ecommerce.faq.subtitle")}
              </motion.p>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    value: "item-1",
                    questionKey: "services.ecommerce.faq.platforms.question",
                    answerKey: "services.ecommerce.faq.platforms.answer"
                  },
                  {
                    value: "item-2",
                    questionKey: "services.ecommerce.faq.payments.question",
                    answerKey: "services.ecommerce.faq.payments.answer"
                  },
                  {
                    value: "item-3",
                    questionKey: "services.ecommerce.faq.scaling.question",
                    answerKey: "services.ecommerce.faq.scaling.answer"
                  },
                  {
                    value: "item-4",
                    questionKey: "services.ecommerce.faq.seo.question",
                    answerKey: "services.ecommerce.faq.seo.answer"
                  },
                  {
                    value: "item-5",
                    questionKey: "services.ecommerce.faq.support.question",
                    answerKey: "services.ecommerce.faq.support.answer"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.value}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <AccordionItem value={item.value} className="bg-card border border-border rounded-lg px-6 hover:border-primary/30 transition-all duration-300">
                      <AccordionTrigger className="text-left hover:no-underline">
                        {t(item.questionKey)}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {t(item.answerKey)}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>

            {/* FAQ CTA */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-primary"></div>
                <span>{t("services.ecommerce.faq.cta")}</span>
                <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </motion.div>
          </div>
        </section>

        <SectionSeparator />

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto text-center space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Header Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageSquare className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-primary font-medium text-sm">
                  {t("common.getStarted")}
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t("services.ecommerce.cta.title")}
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t("services.ecommerce.cta.subtitle")}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    size="lg"
                    asChild
                    className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-none transition-all"
                  >
                    <Link href="/contact">
                      <motion.span
                        className="flex items-center gap-2"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {t("hero.cta.primary")}
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight className="ms-2 h-4 w-4 transform rtl:rotate-180" />
                        </motion.div>
                      </motion.span>
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
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
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
