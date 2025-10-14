"use client"

import { useEffect, useState, useMemo, useCallback } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Grid3X3, Eye, Github, Star, MessageSquare } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import SectionSeparator from "@/components/general/SectionSeparator"
import JsonToHtml from "@/components/general/JsonToHtml"
import { JSONContent } from "@tiptap/react"
import { motion } from "framer-motion"
import { StaggerContainer, StaggerItem } from "@/components/animated-section"

const categories = [
  { key: "portfolio.filter.all", value: "All" },
  { key: "portfolio.filter.webdev", value: "web-development" },
  { key: "portfolio.filter.ecommerce", value: "ecommerce" },
  { key: "portfolio.filter.saas", value: "saas" },
  { key: "portfolio.filter.design", value: "design" },
  { key: "portfolio.filter.digitalMarketing", value: "digital-marketing" },
  { key: "portfolio.filter.customPlatforms", value: "custom-platforms" }
]

// Helper function to format category names for display
const formatCategoryName = (category: string) => {
  switch (category) {
    case "web-development":
      return "Web Development"
    case "ecommerce":
      return "E-commerce"
    case "saas":
      return "SaaS"
    case "design":
      return "Design"
    case "digital-marketing":
      return "Digital Marketing"
    case "custom-platforms":
      return "Custom Platforms"
    default:
      return category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, " ")
  }
}

interface Project {
  id: string
  shortTitleEN: string
  shortTitleFR: string
  shortTitleAR: string
  longTitleEN: string
  longTitleFR: string
  longTitleAR: string
  title: {
    en: string
    fr: string
    ar: string
  }
  shortDescription: {
    en: JSONContent | null
    fr: JSONContent | null
    ar: JSONContent | null
  }
  longDescription: {
    en: JSONContent | null
    fr: JSONContent | null
    ar: JSONContent | null
  }
  thumbnailUrl?: string
  demoLink?: string | null
  githubLink?: string | null
  technologies?: string[]
  category: string
}

export default function PortfolioContent({ projects }: { projects: Project[] }) {
  const { t, language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [mounted, setMounted] = useState(false)

  // Helper function to get description content for a project (used during transformation)
  const getDescriptionContentForProject = useCallback((project: Project): JSONContent | null => {
    // Try short description first for portfolio cards
    const shortDesc = project.shortDescription[language] || project.shortDescription.en;
    if (shortDesc) {
      return shortDesc;
    }

    // Fallback to long description if short description is not available
    const longDesc = project.longDescription[language] || project.longDescription.en;
    if (longDesc) {
      return longDesc;
    }

    // Return null if no description is available
    return null;
  }, [language]);

  // Helper function to get title for current language
  const getTitleForLanguage = useCallback((project: Project): string => {
    const title = project.title[language] || project.title.en || "Untitled Project";
    return title;
  }, [language]);

  useEffect(() => {
    setMounted(true)
  }, [])

  // Type for transformed projects
  type TransformedProject = {
    readonly slug: string
    readonly title: string
    readonly description?: JSONContent | null
    readonly shortDescription: {
      en: JSONContent | null
      fr: JSONContent | null
      ar: JSONContent | null
    }
    readonly longDescription: {
      en: JSONContent | null
      fr: JSONContent | null
      ar: JSONContent | null
    }
    readonly image: string
    readonly demoLink: string
    readonly githubLink: string
    readonly technologies: string[]
    readonly category: string
  }

  // Transform database projects to match the expected format
  // This needs to be reactive to language changes
  const transformedProjects = useMemo(() => {
    return projects.map((project: Project) => {
      // Get the description for the current language
      const description = getDescriptionContentForProject(project);

      return {
        slug: project.id,
        title: getTitleForLanguage(project),
        description: description, // Pre-calculated description for current language
        shortDescription: project.shortDescription,
        longDescription: project.longDescription,
        image: project.thumbnailUrl || "/placeholder.svg",
        demoLink: project.demoLink || "#",
        githubLink: project.githubLink || "#",
        technologies: project.technologies || [],
        category: project.category,
      } as const;
    })
  }, [projects, getTitleForLanguage, getDescriptionContentForProject])

  const filteredProjects: TransformedProject[] = useMemo(() =>
    selectedCategory === "All" ? transformedProjects : transformedProjects.filter((p: TransformedProject) => p.category === selectedCategory),
    [transformedProjects, selectedCategory]
  )

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      <Header />
      <main>

        {/* Filter & Projects */}
        <section id="projects" className="relative py-20 pt-28 sm:pt-32">
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
                <motion.div>
                  <Grid3X3 className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-primary font-medium text-sm">
                  {t("portfolio.filter.badge")}
                </span>
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t("portfolio.filter.title")}
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t("portfolio.filter.subtitle")}
              </motion.p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={selectedCategory === category.value ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.value)}
                    className="rounded-full transition-all duration-300"
                  >
                    {category.value === "All" ? t(category.key) : formatCategoryName(category.value)}
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <StaggerContainer
              key={`projects-${selectedCategory}-${filteredProjects.length}`}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <StaggerItem key={`${project.slug}-${index}`}>
                  <motion.div
                    className="group relative h-full"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50 h-full">
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

                      <div className="text-muted-foreground text-sm leading-relaxed mb-4 mt-3 line-clamp-3">
                        {project.description ? (
                          <JsonToHtml key={JSON.stringify(project.description)} json={project.description} />
                        ) : (
                          <p>No description available</p>
                        )}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies?.slice(0, 3).map((tech: string, techIndex: number) => (
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
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

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
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto text-center"
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
                <motion.div>
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
                {t("portfolio.cta.title")}
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t("portfolio.cta.subtitle")}
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
                          <ArrowRight className="h-4 w-4 transform rtl:rotate-180" />
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
                    <Link href="/services">
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
