"use client"

import { useEffect, useRef, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Lightbulb, Users, Award, Linkedin, Twitter, Github, Heart, Users as UsersIcon, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"
import { useLanguage } from "@/components/language-provider"
import SectionSeparator from "@/components/general/SectionSeparator"

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/professional-woman-diverse.png",
    bio: "10+ years of experience in web development and digital strategy",
    social: { linkedin: "#", twitter: "#" },
    key: "ceo",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/professional-man.jpg",
    bio: "Full-stack architect specializing in scalable cloud solutions",
    social: { linkedin: "#", github: "#" },
    key: "cto",
  },
  {
    name: "Emma Williams",
    role: "Head of Design",
    image: "/professional-woman-smiling.png",
    bio: "Award-winning designer focused on user-centered experiences",
    social: { linkedin: "#", twitter: "#" },
    key: "design",
  },
]

const values = [
  {
    icon: Target,
    key: "client",
  },
  {
    icon: Lightbulb,
    key: "innovation",
  },
  {
    icon: Users,
    key: "collaboration",
  },
  {
    icon: Award,
    key: "excellence",
  },
]

export default function AboutPage() {
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
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  {t("about.hero.badge")}
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  {(() => {
                    const title = t("about.hero.title");
                    if (title.includes("Oren")) {
                      return (
                        <>
                          {title.replace("Oren", "")}
                          <span className="text-primary">Oren</span>
                        </>
                      );
                    } else if (title.includes("أورين")) {
                      return (
                        <>
                          {title.replace("أورين", "")}
                          <span className="text-primary">أورين</span>
                        </>
                      );
                    }
                    return title;
                  })()}
                </h1>

                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  {t("about.hero.subtitle")}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto px-4 sm:px-0">
                  <Button
                    size="lg"
                    asChild
                    className="group w-full sm:w-auto shadow-none transition-all"
                  >
                    <Link href="/contact">
                      {t("about.hero.cta.primary")}
                      <Zap className="ms-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="group bg-transparent hover:bg-primary/5 w-full sm:w-auto transition-all"
                  >
                    <Link href="/portfolio">
                      {t("about.hero.cta.secondary")}
                    </Link>
                  </Button>
                </div>

                {/* Trust Signals */}
                <div className="pt-8 sm:pt-12 flex flex-wrap items-center justify-center gap-5 sm:gap-12 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-lg sm:text-2xl font-bold text-foreground">
                      50+
                    </span>
                    <span className="text-[10px] sm:text-sm">
                      {t("about.hero.stats.projects")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-lg sm:text-2xl font-bold text-foreground">
                      98%
                    </span>
                    <span className="text-[10px] sm:text-sm">
                      {t("about.hero.stats.satisfaction")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-lg sm:text-2xl font-bold text-foreground">
                      24/7
                    </span>
                    <span className="text-[10px] sm:text-sm">
                      {t("about.hero.stats.support")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* Mission & Vision */}
        <section className="py-20 bg-background">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">
                  {t("about.mission.badge")}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t("about.vision.subtitle")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("about.vision.intro")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <AnimatedSection delay={0.1}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Target className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-4">{t("about.mission.title")}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {t("about.mission.description")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Zap className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-4">{t("about.vision.title")}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {t("about.vision.description")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-primary"></div>
                <span>{t("about.mission.cta")}</span>
                <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* Values */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">
                  {t("about.values.badge")}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">{t("about.values.title")}</h2>
              <p className="text-lg text-muted-foreground">{t("about.values.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="bg-card/50 backdrop-blur-sm border-gray-200 hover:bg-card/80 transition-all duration-300 group h-full dark:bg-card dark:backdrop-blur-sm dark:border-border dark:hover:-translate-y-0.5 dark:hover:border-primary/30">
                    <CardContent className="p-8 dark:p-4 dark:lg:p-5">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 dark:w-8 dark:h-8 dark:lg:w-10 dark:lg:h-10 dark:rounded-lg dark:bg-primary/10 dark:group-hover:bg-primary/20">
                        <value.icon className="h-8 w-8 text-primary dark:w-4 dark:h-4 dark:lg:w-5 dark:lg:h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4 text-center dark:text-sm dark:lg:text-base dark:font-semibold dark:mb-2 dark:group-hover:text-primary dark:transition-colors">{t(`about.values.${value.key}.title`)}</h3>
                      <p className="text-muted-foreground leading-relaxed text-center dark:text-xs dark:lg:text-sm dark:leading-relaxed">{t(`about.values.${value.key}.description`)}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-primary"></div>
                <span>{t("about.values.cta")}</span>
                <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* Team */}
        <section className="py-20 bg-background">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">
                  {t("about.team.badge")}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">{t("about.team.title")}</h2>
              <p className="text-lg text-muted-foreground">
                {t("about.team.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="bg-card/50 backdrop-blur-sm border-gray-200 overflow-hidden group hover:bg-card/80 transition-all duration-300 dark:bg-card dark:backdrop-blur-sm dark:border-border dark:hover:-translate-y-0.5 dark:hover:border-primary/30">
                    <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Social Links Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-3">
                          {member.social.linkedin && (
                            <Button size="icon" variant="secondary" asChild className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background">
                              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-5 w-5" />
                              </a>
                            </Button>
                          )}
                          {member.social.twitter && (
                            <Button size="icon" variant="secondary" asChild className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background">
                              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                                <Twitter className="h-5 w-5" />
                              </a>
                            </Button>
                          )}
                          {member.social.github && (
                            <Button size="icon" variant="secondary" asChild className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background">
                              <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-5 w-5" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                      <p className="text-sm text-primary font-medium mb-3">{t(`about.team.${member.key}.role`)}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t(`about.team.${member.key}.bio`)}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-primary"></div>
                <span>{t("about.team.cta")}</span>
                <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* CTA */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                    {t("about.cta.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {t("about.cta.subtitle")}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button size="lg" asChild className="group">
                    <Link href="/contact">
                      {t("about.cta.primary")}
                      <Zap className="ms-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="bg-transparent hover:bg-primary/5">
                    <Link href="/portfolio">
                      {t("about.cta.secondary")}
                    </Link>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>{t("about.trust.available")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>{t("about.trust.consultation")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>{t("about.trust.turnaround")}</span>
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
