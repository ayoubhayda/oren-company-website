"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Copy, Check } from "lucide-react"
import { ArrowLeft, ArrowRight, Calendar, Users, Building, Clock, Target, Zap, Quote, Image as ImageIcon, Layers, Star, Share2, ChevronLeft, ChevronRight, Github, MessageSquare } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { useLanguage } from "@/components/language-provider"
import JsonToHtml from "@/components/general/JsonToHtml"

interface ProjectData {
  title: {
    en: string
    fr: string
    ar: string
  }
  description: {
    en: any
    fr: any
    ar: any
  }
  image: string
  category: string
  tags: string[]
  client: string
  duration: number | null
  team: string
  challenge: {
    en: any
    fr: any
    ar: any
  }
  solution: {
    en: any
    fr: any
    ar: any
  }
  results: Array<{ metric: string; value: string; description: string }>
  technologies: string[]
  testimonial?: { quote: string; author: string; role: string }
  images: string[]
  demoLink?: string | null
  githubLink?: string | null
}

export default function ProjectContent({ project, slug }: { project: ProjectData; slug?: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [copied, setCopied] = useState(false)
  const { t, language } = useLanguage()

  // Generate share URL
  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/portfolio/${slug}` : ''

  // Copy to clipboard function
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  // Helper function to get content for current language with smart fallback
  const getContentForLanguage = (contentObj: { en: any; fr: any; ar: any } | { en: string; fr: string; ar: string }) => {
    const result = contentObj[language] || contentObj.en || null;
    return result;
  };

  // Helper function to get description content with fallback logic
  const getDescriptionContent = () => {
    const shortDesc = getContentForLanguage(project.description);
    if (shortDesc) return shortDesc;

    // If short description is not available, use challenge (long description) as fallback
    const challenge = getContentForLanguage(project.challenge);
    if (challenge) return challenge;

    return null; // No content available
  };

  // Helper function to get title for current language
  const getTitleForLanguage = () => {
    return getContentForLanguage(project.title);
  };

  // Get current language content
  const currentChallenge = getContentForLanguage(project.challenge);
  const currentSolution = getContentForLanguage(project.solution);
  const currentDescription = getDescriptionContent();
  const currentTitle = getTitleForLanguage();


  const goToNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === (project.images?.length || 0) - 1 ? 0 : prev + 1
    )
  }

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? (project.images?.length || 0) - 1 : prev - 1
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="group">
              <Link href="/portfolio" className="flex items-center gap-2 hover:gap-3 transition-all">
                {language === "ar" ? (
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                ) : (
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                )}
                {t("project.backToPortfolio")}
              </Link>
            </Button>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Project Header */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                      <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1">
                        {(() => {
                          // Map database category values to translation keys
                          const categoryMap: Record<string, string> = {
                            'web-development': 'webdev',
                            'mobile-app': 'mobileapp',
                            'ecommerce': 'ecommerce',
                            'design': 'design',
                            'digital-marketing': 'digitalmarketing',
                            'custom-platforms': 'customplatforms',
                          };

                          const translationKey = categoryMap[project.category] ?
                            `portfolio.filter.${categoryMap[project.category]}` :
                            `portfolio.filter.${project.category.toLowerCase().replace(/\s+/g, '').replace('-', '')}`;

                          return t(translationKey) || project.category;
                        })()}
                      </Badge>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 dark:fill-yellow-500 dark:text-yellow-500" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">{t("project.rating")} ({t("project.reviews")})</span>
                    </div>
                  </div>

                  <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                    {currentTitle || project.title.en || "Untitled Project"}
                  </h1>
                </div>

                {/* Project Gallery */}
                {project.images && project.images.length > 0 && (
                  <div className="space-y-6">
                    <div className="relative">
                      {/* Main Image Display */}
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted border border-gray-200 dark:border-gray-700">
                        <Image
                          src={project.images[currentImageIndex] || "/placeholder.svg"}
                          alt={`${currentTitle || project.title.en || "Project"} - Image ${currentImageIndex + 1}`}
                          fill
                          className="object-cover"
                        />

                        {/* Navigation Arrows */}
                        {project.images.length > 1 && (
                          <>
                            <Button
                              variant="secondary"
                              size="icon"
                              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white dark:bg-gray-900/90 dark:hover:bg-gray-900 dark:text-white border border-gray-200 dark:border-gray-700"
                              onClick={goToPreviousImage}
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="secondary"
                              size="icon"
                              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white dark:bg-gray-900/90 dark:hover:bg-gray-900 dark:text-white border border-gray-200 dark:border-gray-700"
                              onClick={goToNextImage}
                            >
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </>
                        )}

                        {/* Image Counter */}
                        <div className="absolute bottom-4 right-4 bg-black/60 text-white dark:bg-gray-900/60 dark:text-gray-100 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                          {currentImageIndex + 1} / {project.images.length}
                        </div>
                      </div>

                      {/* Thumbnail Navigation Images */}
                      {project.images.length > 1 && (
                        <div className="flex justify-center gap-4 mt-6 px-4">
                          {project.images.map((image, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`group relative w-20 h-12 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                                index === currentImageIndex
                                  ? 'border-primary scale-110'
                                  : 'border-gray-200 hover:border-primary/50 opacity-80 hover:opacity-100 hover:scale-105 dark:border-gray-700'
                              }`}
                            >
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`Thumbnail ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              {/* Subtle gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                              {/* Active state indicator */}
                              {index === currentImageIndex && (
                                <div className="absolute inset-0 bg-primary/15 rounded-lg" />
                              )}

                              {/* Image number indicator (optional) */}
                              <div className={`absolute bottom-1 right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                                index === currentImageIndex
                                  ? 'bg-primary text-white'
                                  : 'bg-black/60 text-white opacity-0 group-hover:opacity-100'
                              }`}>
                                {index + 1}
                              </div>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Additional thumbnails for larger galleries */}
                      {project.images.length > 5 && (
                        <div className="mt-6">
                          <p className="text-sm text-muted-foreground text-center mb-3">More images:</p>
                          <div className="grid grid-cols-6 md:grid-cols-8 gap-3 justify-center max-w-lg mx-auto">
                            {project.images.slice(4).map((image, index) => (
                              <button
                                key={index + 4}
                                onClick={() => setCurrentImageIndex(index + 4)}
                                className={`group relative w-14 h-10 rounded-md overflow-hidden bg-muted dark:bg-gray-800 transition-all duration-200 border ${
                                  index + 4 === currentImageIndex
                                    ? 'border-primary scale-110'
                                    : 'border-gray-200 hover:border-primary/50 opacity-70 hover:opacity-100 hover:scale-105 dark:border-gray-700'
                                }`}
                              >
                                <Image
                                  src={image || "/placeholder.svg"}
                                  alt={`Thumbnail ${index + 5}`}
                                  fill
                                  className="object-cover transition-transform duration-200 group-hover:scale-110"
                                />
                                {/* Subtle gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                                {/* Active state indicator */}
                                {index + 4 === currentImageIndex && (
                                  <div className="absolute inset-0 bg-primary/15 rounded-md" />
                                )}

                                {/* Image number indicator */}
                                <div className={`absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                                  index + 4 === currentImageIndex
                                    ? 'bg-primary text-white'
                                    : 'bg-black/60 text-white opacity-0 group-hover:opacity-100'
                                }`}>
                                  {index + 5}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Project Overview */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">{t("project.overview")}</h2>
                  </div>

                  <div className="prose prose-xl max-w-none">
                    {(() => {
                      // Handle null/undefined content
                      if (currentChallenge == null) {
                        return <p className="text-lg text-muted-foreground leading-relaxed">No description available</p>;
                      }

                      // Handle string content (plain text or HTML)
                      if (typeof currentChallenge === 'string') {
                        return <p className="text-lg text-muted-foreground leading-relaxed">{currentChallenge}</p>;
                      }

                      // Handle valid TipTap document structure
                      if (currentChallenge &&
                          typeof currentChallenge === 'object' &&
                          currentChallenge.type === 'doc' &&
                          Array.isArray(currentChallenge.content)) {
                        return <JsonToHtml json={currentChallenge} />;
                      }

                      // Handle individual TipTap nodes (paragraphs, etc.)
                      if (currentChallenge &&
                          typeof currentChallenge === 'object' &&
                          currentChallenge.type &&
                          Array.isArray(currentChallenge.content)) {
                        // Wrap in a document structure for JsonToHtml
                        const wrappedContent = {
                          type: 'doc',
                          content: [currentChallenge]
                        };
                        return <JsonToHtml json={wrappedContent} />;
                      }

                      // Handle arrays of TipTap nodes
                      if (currentChallenge &&
                          Array.isArray(currentChallenge) &&
                          currentChallenge.length > 0 &&
                          currentChallenge[0] &&
                          currentChallenge[0].type &&
                          Array.isArray(currentChallenge[0].content)) {
                        // Wrap in a document structure for JsonToHtml
                        const wrappedContent = {
                          type: 'doc',
                          content: currentChallenge
                        };
                        return <JsonToHtml json={wrappedContent} />;
                      }

                      // Final fallback - convert to string for any unexpected format
                      console.warn('Unexpected challenge content type:', typeof currentChallenge, currentChallenge);
                      const safeContent = typeof currentChallenge === 'object' ? JSON.stringify(currentChallenge) : String(currentChallenge || '');
                      return <p className="text-lg text-muted-foreground leading-relaxed">{safeContent}</p>;
                    })()}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">{t("project.keyFeatures")}</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-border/50 py-0 group transition-all duration-300 flex flex-col justify-between h-full hover:border-primary/30 hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />
                      <CardContent className="p-4 relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Users className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-3">{t("project.userExperience")}</h3>
                            <p className="text-base text-muted-foreground">
                              {t("project.userExperienceDesc")}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border/50 py-0 group transition-all duration-300 flex flex-col justify-between h-full hover:border-primary/30 hover:-translate-y-1">
                      <CardContent className="p-4 relative z-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Zap className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-3">{t("project.performance")}</h3>
                            <p className="text-base text-muted-foreground">
                              {t("project.performanceDesc")}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border/50 py-0 group transition-all duration-300 flex flex-col justify-between h-full hover:border-primary/30 hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />
                      <CardContent className="p-4 relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Target className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-3">{t("project.reliability")}</h3>
                            <p className="text-base text-muted-foreground">
                              {t("project.reliabilityDesc")}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border/50 py-0 group transition-all duration-300 flex flex-col justify-between h-full hover:border-primary/30 hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />
                      <CardContent className="p-4 relative z-10">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Layers className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-3">{t("project.scalability")}</h3>
                            <p className="text-base text-muted-foreground">
                              {t("project.scalabilityDesc")}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{t("project.quickActions")}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {project.demoLink && (
                      <Button
                        variant="outline"
                        className="w-full justify-start gap-3 bg-primary/10 border-primary/20 hover:bg-primary/20 text-primary"
                        size="lg"
                        asChild
                      >
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ImageIcon className="h-4 w-4" />
                          {t("project.viewLiveDemo")}
                        </a>
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button
                        variant="outline"
                        className="w-full justify-start gap-3"
                        size="lg"
                        asChild
                      >
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          {t("project.sourceCode")}
                        </a>
                      </Button>
                    )}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start gap-3"
                          size="lg"
                          disabled={!slug}
                        >
                          <Share2 className="h-4 w-4" />
                          {t("project.shareProject")}
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="max-w-md">
                        <AlertDialogHeader className={language === "ar" ? "text-right" : ""}>
                          <AlertDialogTitle className={language === "ar" ? "text-right" : ""}>{t("project.shareProject")}</AlertDialogTitle>
                          <AlertDialogDescription className={language === "ar" ? "text-right" : ""}>
                            {t("project.shareDescription")}
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <div className={`space-y-4 ${language === "ar" ? "text-right" : ""}`}>
                          <div className={`flex items-center ${language === "ar" ? "space-x-reverse" : "space-x-2"}`}>
                            <Input
                              value={shareUrl}
                              readOnly
                              className={`flex-1 ${language === "ar" ? "text-right" : ""}`}
                            />
                            <Button
                              size="sm"
                              onClick={handleCopy}
                              className="shrink-0"
                            >
                              {copied ? (
                                <>
                                  {language === "ar" ? <Check className="h-4 w-4 ml-2" /> : <Check className="h-4 w-4 mr-2" />}
                                  {t("project.copied")}
                                </>
                              ) : (
                                <>
                                  {language === "ar" ? <Copy className="h-4 w-4 ml-2" /> : <Copy className="h-4 w-4 mr-2" />}
                                  {t("project.copy")}
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                        <AlertDialogFooter className={language === "ar" ? "flex-row-reverse" : ""}>
                          <AlertDialogCancel>{t("common.close")}</AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </CardContent>
                </Card>

                {/* Project Details */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{t("project.projectDetails")}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">{t("project.duration")}</p>
                        <p className="font-semibold">
                          {typeof project.duration === 'number'
                            ? `${project.duration} ${t("project.duration.days")}`
                            : project.duration || 'N/A'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Layers className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">{t("project.techStack")}</p>
                        <p className="font-semibold">{project.technologies.length} {t("project.technologies")}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">{t("project.client")}</p>
                        <p className="font-semibold">{project.client}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Project Rating */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{t("project.projectRating")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 dark:fill-yellow-500 dark:text-yellow-500" />
                        ))}
                        <span className="text-2xl font-bold ml-2">4.8</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>{t("project.functionality")}</span>
                          <span>95%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>{t("project.design")}</span>
                          <span>90%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>{t("project.performance")}</span>
                          <span>88%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Technologies Used */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Layers className="h-5 w-5 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">{t("project.technologiesUsed")}</h2>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 px-4 py-2 text-sm font-medium transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                {project.testimonial && (
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6">
                      <Quote className="h-8 w-8 text-primary mb-4" />
                      <p className="text-foreground mb-4 italic">"{t("project.testimonialQuote")}"</p>
                      <div>
                        <p className="font-semibold text-foreground">{t("project.testimonialAuthor")}</p>
                        <p className="text-sm text-muted-foreground">{t("project.testimonialRole")}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
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
