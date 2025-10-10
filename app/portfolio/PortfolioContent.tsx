"use client"

import { useEffect, useState } from "react"
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

const categories = [
  { key: "portfolio.filter.all", value: "All" },
  { key: "portfolio.filter.webdev", value: "Web Development" },
  { key: "portfolio.filter.ecommerce", value: "E-commerce" },
  { key: "portfolio.filter.saas", value: "SaaS" }
]

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

  // Helper function to get content for current language
  const getContentForLanguage = <T extends { en: any; fr: any; ar: any }>(contentObj: T): T[keyof T] | null => {
    return contentObj[language] || contentObj.en || null;
  };

  // Helper function to get description content with fallback logic
  const getDescriptionContent = (project: TransformedProject): JSONContent | null => {
    // Try short description first for portfolio cards
    const shortDesc = getContentForLanguage(project.shortDescription);
    if (shortDesc) {
      console.log('Using short description for project:', project.slug);
      return shortDesc;
    }

    // Fallback to long description if short description is not available
    const longDesc = getContentForLanguage(project.longDescription);
    if (longDesc) {
      console.log('Using long description for project:', project.slug, '(short desc empty)');
      return longDesc;
    }

    // Return null if no description is available
    // The card will show a fallback message
    return null;
  };

  // Helper function to get title for current language
  const getTitleForLanguage = (project: Project): string => {
    const title = getContentForLanguage(project.title);
    return (typeof title === 'string' ? title : null) || project.title.en || "Untitled Project";
  };

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Transform database projects to match the expected format
  const transformedProjects = projects.map((project: Project) => ({
    slug: project.id,
    title: getTitleForLanguage(project),
    shortDescription: project.shortDescription,
    longDescription: project.longDescription,
    image: project.thumbnailUrl || "/placeholder.svg",
    demoLink: project.demoLink || "#",
    githubLink: project.githubLink || "#",
    technologies: project.technologies || [],
    category: project.category,
  } as const))

  // Type for transformed projects
  type TransformedProject = {
    readonly slug: string
    readonly title: string
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

  const filteredProjects: TransformedProject[] =
    selectedCategory === "All" ? transformedProjects : transformedProjects.filter((p: TransformedProject) => p.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Header />
      <main>

        {/* Filter & Projects */}
        <section id="projects" className="relative py-20 pt-28 sm:pt-32">
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

                      <div className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {(() => {
                          const description = getDescriptionContent(project);

                          // Handle null/undefined or invalid content
                          if (description == null) {
                            return <p>No description available</p>;
                          }


                          // Handle valid TipTap document structure
                          if (description &&
                              typeof description === 'object' &&
                              description.type === 'doc' &&
                              Array.isArray(description.content)) {
                            try {
                              return <JsonToHtml json={description} />;
                            } catch (error) {
                              console.error('Error rendering JsonToHtml in PortfolioContent:', error);
                              return <p>Error rendering content</p>;
                            }
                          }

                          // Handle individual TipTap nodes (paragraphs, etc.)
                          if (description &&
                              typeof description === 'object' &&
                              description.type &&
                              Array.isArray(description.content)) {
                            try {
                              // Wrap in a document structure for JsonToHtml
                              const wrappedContent = {
                                type: 'doc',
                                content: [description]
                              };
                              return <JsonToHtml json={wrappedContent} />;
                            } catch (error) {
                              console.error('Error rendering wrapped content in PortfolioContent:', error);
                              return <p>Error rendering content</p>;
                            }
                          }

                          // Handle arrays of TipTap nodes
                          if (description &&
                              Array.isArray(description) &&
                              description.length > 0 &&
                              description[0] &&
                              description[0].type &&
                              Array.isArray(description[0].content)) {
                            try {
                              // Wrap in a document structure for JsonToHtml
                              const wrappedContent = {
                                type: 'doc',
                                content: description
                              };
                              return <JsonToHtml json={wrappedContent} />;
                            } catch (error) {
                              console.error('Error rendering array content in PortfolioContent:', error);
                              return <p>Error rendering content</p>;
                            }
                          }

                          // Final fallback - ensure we never render objects directly
                          console.warn('Unexpected description content type in PortfolioContent:', typeof description, description);
                          const safeContent = typeof description === 'object' ? JSON.stringify(description) : String(description || '');
                          return <p>{safeContent}</p>;
                        })()}
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
        <section className="py-20 bg-background">
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
                {t("portfolio.cta.title")}
              </h2>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                {t("portfolio.cta.subtitle")}
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
                  <Link href="/services">
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
