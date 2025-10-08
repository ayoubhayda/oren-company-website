"use client"

import { useEffect, useRef, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Filter, Grid3X3, Eye, Github, Star } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import SectionSeparator from "@/components/general/SectionSeparator"
import MinimalSectionSeparator from "@/components/general/MinimalSectionSeparator"
import { HeroSectionBackground } from "@/components/animations/HeroSectionBackground"

const categories = [
  { key: "portfolio.filter.all", value: "All" },
  { key: "portfolio.filter.webdev", value: "Web Development" },
  { key: "portfolio.filter.ecommerce", value: "E-commerce" },
  { key: "portfolio.filter.saas", value: "SaaS" }
]

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
    category: "Web Development",
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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

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
                Showcase Your Digital
                <span className="relative mt-2 block text-transparent bg-clip-text bg-gradient-to-r from-[#0069FF] to-[#00BFFF]">
                  Success Stories
                </span>
              </h1>

              <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-[#0069FF]/70" />
                Explore our portfolio below
                <span className="h-1 w-1 rounded-full bg-[#0069FF]/70" />
              </div>
            </div>
          </div>
        </section>

        {/* Filter & Projects */}
        <section id="projects" className="relative py-20 lg:py-32">
          {/* Minimal Section Separator - positioned at intersection */}
          <div className="absolute -top-12 left-0 right-0 z-10">
            <MinimalSectionSeparator />
          </div>
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
                  key={category.key}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.value)}
                  className="rounded-full transition-all duration-300 hover:scale-105"
                >
                  {t(category.key)}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div key={index} className="group relative">
                  <div className="relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50">
                    {/* Project Image */}
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* Project Status Badge */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30 backdrop-blur-sm text-xs font-medium px-2 py-1">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse" />
                          {t("common.live")}
                        </Badge>
                      </div>

                      {/* Desktop Hover Overlay with Action Buttons */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block" />

                      <div className="absolute inset-0 hidden md:flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0 ">
                        {project.demoLink && project.demoLink !== "#" && (
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white backdrop-blur-sm text-black px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg"
                          >
                            <Eye className="w-4 h-4" />
                            {t("common.liveDemo")}
                          </a>
                        )}

                        {project.githubLink && project.githubLink !== "#" && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-black/80 backdrop-blur-sm border border-zinc-700/80 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg"
                          >
                            <Github className="w-4 h-4" />
                            {t("common.code")}
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-6">
                      <Link
                        className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-1"
                        href={`/portfolio/${project.slug}`}
                      >
                        {project.title}
                      </Link>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs px-2 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors shadow-none"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs px-2 py-1 text-muted-foreground shadow-none"
                          >
                            +{project.technologies.length - 3} {t("common.more")}
                          </Badge>
                        )}
                      </div>

                      {/* Action Footer */}
                      <div className="space-y-4">
                        {/* Primary Action Buttons - Mobile Only */}
                        <div className="flex md:hidden gap-3">
                          {project.demoLink && project.demoLink !== "#" && (
                            <a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold text-sm transition-all duration-300 hover:scale-105 text-center flex items-center justify-center gap-2"
                            >
                              <Eye className="w-4 h-4" />
                              {t("common.liveDemo")}
                            </a>
                          )}

                          {project.githubLink && project.githubLink !== "#" && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 border border-border px-4 py-2 rounded-md font-semibold text-sm transition-all duration-300 hover:scale-105 text-center flex items-center justify-center gap-2"
                            >
                              <Github className="w-4 h-4" />
                              {t("common.sourceCode")}
                            </a>
                          )}
                        </div>

                        {/* Secondary Info */}
                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <Link
                            className="text-sm text-primary hover:text-black dark:hover:text-white font-semibold inline-flex items-center gap-2 transition-all duration-200 cursor-pointer"
                            href={`/portfolio/${project.slug}`}
                          >
                            {t("common.viewDetails")}
                            <ArrowRight className="w-4 h-4 transform rtl:rotate-180" />
                          </Link>

                          <div className="flex items-center gap-4">
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-muted-foreground hover:text-foreground hidden md:inline-flex items-center gap-1.5 transition-colors duration-200 font-medium"
                            >
                              <Github className="w-3.5 h-3.5" />
                              {t("common.code")}
                            </a>

                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Star className="w-3.5 h-3.5 text-yellow-500" />
                              <span className="font-medium">4.8</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Hover Effect Border */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                  </div>
                </div>
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

        {/* Seperator Section */}
        <SectionSeparator />

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
