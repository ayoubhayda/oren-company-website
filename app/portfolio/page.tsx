"use client"

import { useEffect, useRef, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Filter, Grid3X3 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const categories = ["All", "Web Development", "E-commerce", "SaaS", "Corporate", "Marketing"]

const projects = [
  {
    slug: "ecommerce-platform",
    title: "Modern E-commerce Platform",
    description: "Complete online store with advanced filtering and seamless checkout experience",
    image: "/modern-ecommerce-website.png",
    demoLink: "#",
    githubLink: "#",
    technologies: ["React", "Node.js", "Stripe", "Next.js", "TypeScript", "PostgreSQL"],
    category: "E-commerce",
  },
  {
    slug: "saas-dashboard",
    title: "Analytics SaaS Dashboard",
    description: "Real-time analytics platform for B2B software companies with advanced reporting",
    image: "/saas-analytics-dashboard.png",
    demoLink: "#",
    githubLink: "#",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "D3.js", "TailwindCSS", "Vercel"],
    category: "SaaS",
  },
  {
    slug: "corporate-website",
    title: "Global Corporate Website",
    description: "Multilingual corporate site with CMS integration and global content management",
    image: "/professional-corporate-website.png",
    demoLink: "#",
    githubLink: "#",
    technologies: ["Next.js", "Sanity CMS", "i18n", "TypeScript", "TailwindCSS", "Vercel"],
    category: "Corporate",
  },
  {
    slug: "booking-platform",
    title: "Hotel Booking Platform",
    description: "Reservation system with real-time availability and secure payment processing",
    image: "/placeholder.svg?key=booking",
    demoLink: "#",
    githubLink: "#",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io", "AWS"],
    category: "Web Development",
  },
  {
    slug: "fitness-app",
    title: "Fitness Tracking App",
    description: "Mobile-first fitness platform with workout tracking and progress analytics",
    image: "/placeholder.svg?key=fitness",
    demoLink: "#",
    githubLink: "#",
    technologies: ["React Native", "Firebase", "Stripe", "Redux", "TypeScript", "Expo"],
    category: "SaaS",
  },
  {
    slug: "restaurant-website",
    title: "Restaurant Chain Website",
    description: "Multi-location restaurant site with online ordering and reservation system",
    image: "/placeholder.svg?key=restaurant",
    demoLink: "#",
    githubLink: "#",
    technologies: ["Next.js", "Tailwind", "Stripe", "Prisma", "PostgreSQL", "Vercel"],
    category: "E-commerce",
  },
]

export default function PortfolioPage() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("All")
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

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

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
                  <Sparkles className="w-4 h-4" />
                  {t("portfolio.badge")}
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  {t("portfolio.title")}
                </h1>

                {/* Subheading */}
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  {t("portfolio.subtitle")}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto px-4 sm:px-0">
                  <Button
                    size="lg"
                    asChild
                    className="group w-full sm:w-auto shadow-none transition-all"
                  >
                    <Link href="#projects">
                      {t("portfolio.explore")}
                      <ArrowRight className="ms-2 h-4 w-4 transform rtl:rotate-180" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="group bg-transparent hover:bg-primary/5 w-full sm:w-auto transition-all"
                  >
                    <Link href="/contact">
                      {t("portfolio.discuss")}
                      <Filter className="ms-2 h-4 w-4 transform rtl:rotate-180" />
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
                      {t("portfolio.stats.projects")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-lg sm:text-2xl font-bold text-foreground">
                      98%
                    </span>
                    <span className="text-[10px] sm:text-sm">
                      {t("portfolio.stats.satisfaction")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-lg sm:text-2xl font-bold text-foreground">
                      24/7
                    </span>
                    <span className="text-[10px] sm:text-sm">
                      {t("portfolio.stats.support")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter & Projects */}
        <section id="projects" className="py-20 lg:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Grid3X3 className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">
                  {t("portfolio.filter.badge")}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t("portfolio.filter.title")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("portfolio.filter.subtitle")}
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full transition-all duration-300 hover:scale-105"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Link key={project.slug} href={`/portfolio/${project.slug}`}>
                  <Card className="group relative overflow-hidden border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
                        {project.technologies.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                            {tag}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Action Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <span className="text-sm text-primary font-semibold inline-flex items-center gap-2">
                          {t("portfolio.viewDetails")}
                          <ArrowRight className="w-4 h-4 transform rtl:rotate-180" />
                        </span>

                        <div className="flex items-center gap-4">
                          {project.demoLink && (
                            <span className="text-sm text-muted-foreground">
                              {t("portfolio.liveDemo")}
                            </span>
                          )}

                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <span className="text-yellow-500">★</span>
                            <span className="font-medium">4.8</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">{t("portfolio.noProjects")}</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-2xl p-12 text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">{t("portfolio.cta.title")}</h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                {t("portfolio.cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" variant="secondary" asChild className="dark:bg-white dark:text-black dark:hover:bg-white/85">
                  <Link href="/contact">{t("portfolio.cta.button.primary")}</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:text-white dark:border-white/20 dark:hover:bg-white/10 dark:hover:border-white/40"
                >
                  <Link href="/services">{t("portfolio.cta.button.secondary")}</Link>
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
