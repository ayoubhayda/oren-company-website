/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Copy, Check, Eye } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Users,
  Building,
  Target,
  Zap,
  Quote,
  Layers,
  Star,
  Share2,
  ChevronLeft,
  ChevronRight,
  Github,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import JsonToHtml from "@/components/general/JsonToHtml";
import ProjectKeyFeatures from "@/components/general/ProjectKeyFeatures";
import SectionSeparator from "@/components/general/SectionSeparator";

interface ProjectData {
  title: {
    en: string;
    fr: string;
    ar: string;
  };
  description: {
    en: any;
    fr: any;
    ar: any;
  };
  image: string;
  category: string;
  tags: string[];
  client: string;
  duration: number | null;
  team: string;
  challenge: {
    en: any;
    fr: any;
    ar: any;
  };
  solution: {
    en: any;
    fr: any;
    ar: any;
  };
  results: Array<{ metric: string; value: string; description: string }>;
  technologies: string[];
  testimonial?: { quote: string; author: string; role: string };
  images: string[];
  demoLink?: string | null;
  githubLink?: string | null;
}

export default function ProjectContent({
  project,
  slug,
}: {
  project: ProjectData;
  slug?: string;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const { t, language } = useLanguage();

  // Generate share URL
  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/portfolio/${slug}`
      : "";

  // Copy to clipboard function
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  // Helper function to get content for current language with smart fallback
  const getContentForLanguage = (
    contentObj:
      | { en: any; fr: any; ar: any }
      | { en: string; fr: string; ar: string }
  ) => {
    const result = contentObj[language] || contentObj.en || null;
    return result;
  };

  // Helper function to get title for current language
  const getTitleForLanguage = () => {
    return getContentForLanguage(project.title);
  };

  // Get current language content
  const currentChallenge = getContentForLanguage(project.challenge);
  const currentTitle = getTitleForLanguage();

  const goToNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === (project.images?.length || 0) - 1 ? 0 : prev + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? (project.images?.length || 0) - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 sm:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          {/* Navigation */}
          <div className="mb-6">
          <Link
                href="/portfolio"
                className="flex items-center gap-2 hover:gap-3 transition-all hover:text-primary transition-all"
              >
                {language === "ar" ? (
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                ) : (
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                )}
                {t("project.backToPortfolio")}
              </Link>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
              {/* Main Content */}
              <div className="xl:col-span-2 space-y-8 sm:space-y-10 lg:space-y-12">
                {/* Project Header */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1">
                      {(() => {
                        // Map database category values to translation keys
                        const categoryMap: Record<string, string> = {
                          "web-development": "webdev",
                          "mobile-app": "mobileapp",
                          ecommerce: "ecommerce",
                          design: "design",
                          "digital-marketing": "digitalmarketing",
                          "custom-platforms": "customplatforms",
                        };

                        const translationKey = categoryMap[project.category]
                          ? `portfolio.filter.${categoryMap[project.category]}`
                          : `portfolio.filter.${project.category
                              .toLowerCase()
                              .replace(/\s+/g, "")
                              .replace("-", "")}`;

                        return t(translationKey) || project.category;
                      })()}
                    </Badge>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400 dark:fill-yellow-500 dark:text-yellow-500"
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">
                        {t("project.rating")} ({t("project.reviews")})
                      </span>
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
                      <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] rounded-md lg:rounded-lg overflow-hidden border border-border">
                        <Image
                          src={
                            project.images[currentImageIndex] ||
                            "/placeholder.svg"
                          }
                          alt={`${
                            currentTitle || project.title.en || "Project"
                          } - Image ${currentImageIndex + 1}`}
                          fill
                          className="object-cover transition-transform duration-500"
                          priority
                        />

                        {/* Navigation Arrows */}
                        {project.images.length > 1 && (
                          <>
                            <Button
                              variant="secondary"
                              size="icon"
                              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white dark:bg-gray-900/90 dark:hover:bg-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 shadow-lg backdrop-blur-sm opacity-80 hover:opacity-100 transition-all duration-200"
                              onClick={goToPreviousImage}
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="secondary"
                              size="icon"
                              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white dark:bg-gray-900/90 dark:hover:bg-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 shadow-lg backdrop-blur-sm opacity-80 hover:opacity-100 transition-all duration-200"
                              onClick={goToNextImage}
                            >
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </>
                        )}

                        {/* Image Counter */}
                        <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-black/70 text-white dark:bg-gray-900/70 dark:text-gray-100 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm backdrop-blur-sm font-medium">
                          {currentImageIndex + 1} / {project.images.length}
                        </div>

                        {/* Gradient Overlay for Better Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Professional Thumbnail Navigation */}
                      {project.images.length > 1 && (
                        <div className="mt-6 hidden md:flex">
                          <div className="flex items-center justify-center">
                            <div className="w-full">
                              {/* Responsive thumbnail grid */}
                              <div className="flex flex-wrap gap-2 sm:gap-3">
                                {project.images.map((image, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`group relative transition-all cursor-pointer duration-300 border flex-1 h-[80px] min-w-[110px] max-w-[140px] rounded-md lg:rounded-lg overflow-hidden border${
                                      index === currentImageIndex
                                        ? "border-primary bg-primary/5"
                                        : "border-border hover:scale-102"
                                    }`}
                                  >
                                    <div className="relative w-full h-full aspect-square">
                                      <Image
                                        src={image || "/placeholder.svg"}
                                        alt={`Project image ${index + 1}`}
                                        fill
                                        className="object-cover transition-all duration-300 group-hover:scale-110"
                                      />

                                      {/* Hover overlay */}
                                      <div
                                        className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent transition-opacity duration-300 ${
                                          index === currentImageIndex
                                            ? "opacity-20"
                                            : "opacity-0 group-hover:opacity-40"
                                        }`}
                                      />

                                      {/* Active state indicator with eye icon */}
                                      {index === currentImageIndex && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-primary/10 backdrop-blur-[1px]">
                                          <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                                        </div>
                                      )}
                                    </div>
                                  </button>
                                ))}
                              </div>

                              {/* Image counter for mobile */}
                              <div className="flex justify-center mt-3 sm:hidden">
                                <div className="flex items-center gap-2 px-3 py-1 bg-muted/60 dark:bg-gray-800/60 rounded-full text-xs text-muted-foreground">
                                  <span>{currentImageIndex + 1}</span>
                                  <span>/</span>
                                  <span>{project.images.length}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Project Overview */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/15 flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {t("project.overview")}
                    </h2>
                  </div>

                  <div className="prose prose-xl max-w-none">
                    {(() => {
                      // Handle null/undefined content
                      if (currentChallenge == null) {
                        return (
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            No description available
                          </p>
                        );
                      }

                      // Handle string content (plain text or HTML)
                      if (typeof currentChallenge === "string") {
                        return (
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {currentChallenge}
                          </p>
                        );
                      }

                      // Handle valid TipTap document structure
                      if (
                        currentChallenge &&
                        typeof currentChallenge === "object" &&
                        currentChallenge.type === "doc" &&
                        Array.isArray(currentChallenge.content)
                      ) {
                        return <JsonToHtml json={currentChallenge} />;
                      }

                      // Handle individual TipTap nodes (paragraphs, etc.)
                      if (
                        currentChallenge &&
                        typeof currentChallenge === "object" &&
                        currentChallenge.type &&
                        Array.isArray(currentChallenge.content)
                      ) {
                        // Wrap in a document structure for JsonToHtml
                        const wrappedContent = {
                          type: "doc",
                          content: [currentChallenge],
                        };
                        return <JsonToHtml json={wrappedContent} />;
                      }

                      // Handle arrays of TipTap nodes
                      if (
                        currentChallenge &&
                        Array.isArray(currentChallenge) &&
                        currentChallenge.length > 0 &&
                        currentChallenge[0] &&
                        currentChallenge[0].type &&
                        Array.isArray(currentChallenge[0].content)
                      ) {
                        // Wrap in a document structure for JsonToHtml
                        const wrappedContent = {
                          type: "doc",
                          content: currentChallenge,
                        };
                        return <JsonToHtml json={wrappedContent} />;
                      }

                      // Final fallback - convert to string for any unexpected format
                      console.warn(
                        "Unexpected challenge content type:",
                        typeof currentChallenge,
                        currentChallenge
                      );
                      const safeContent =
                        typeof currentChallenge === "object"
                          ? JSON.stringify(currentChallenge)
                          : String(currentChallenge || "");
                      return (
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {safeContent}
                        </p>
                      );
                    })()}
                  </div>
                </div>

                {/* Key Features */}
                <ProjectKeyFeatures />
              </div>

              {/* Sidebar */}
              <div className="space-y-6 sm:space-y-8">
                {/* Quick Actions */}
                <Card className="shadow-none">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">
                      {t("project.quickActions")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    {project.demoLink && (
                      <Button
                        variant="outline"
                        className="w-full justify-start gap-3 bg-primary/10 border-primary/20 hover:bg-primary/20 text-primary transition-all duration-200"
                        size="lg"
                        asChild
                      >
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Eye className="h-4 w-4" />
                          {t("project.viewLiveDemo")}
                        </a>
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button
                        variant="outline"
                        className="w-full justify-start gap-3 transition-all duration-200"
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
                          className="w-full justify-start gap-3 transition-all duration-200"
                          size="lg"
                          disabled={!slug}
                        >
                          <Share2 className="h-4 w-4" />
                          {t("project.shareProject")}
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="max-w-md">
                        <AlertDialogHeader
                          className={language === "ar" ? "text-right" : ""}
                        >
                          <AlertDialogTitle
                            className={language === "ar" ? "text-right" : ""}
                          >
                            {t("project.shareProject")}
                          </AlertDialogTitle>
                          <AlertDialogDescription
                            className={language === "ar" ? "text-right" : ""}
                          >
                            {t("project.shareDescription")}
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <div
                          className={`space-y-4 ${
                            language === "ar" ? "text-right" : ""
                          }`}
                        >
                          <div
                            className={`flex items-center gap-2`}
                          >
                            <Input
                              value={shareUrl}
                              readOnly
                              className={`flex-1 ${
                                language === "ar" ? "text-right" : ""
                              }`}
                            />
                            <Button
                              size="sm"
                              onClick={handleCopy}
                              className="shrink-0"
                            >
                              {copied ? (
                                <>
                                  <Check className="h-4 w-4 me-1" />
                                  {t("project.copied")}
                                </>
                              ) : (
                                <>
                                 <Copy className="h-4 w-4 me-1" />
                                  {t("project.copy")}
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                        <AlertDialogFooter
                          className={
                            language === "ar" ? "flex-row-reverse" : ""
                          }
                        >
                          <AlertDialogCancel>
                            {t("common.close")}
                          </AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </CardContent>
                </Card>

                {/* Project Details */}
                <Card className="shadow-none">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">
                      {t("project.projectDetails")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Calendar className="size-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-muted-foreground">
                          {t("project.duration")}
                        </p>
                        <p className="font-semibold truncate">
                          {typeof project.duration === "number"
                            ? `${project.duration} ${t(
                                "project.duration.days"
                              )}`
                            : project.duration || "N/A"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Layers className="size-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-muted-foreground">
                          {t("project.techStack")}
                        </p>
                        <p className="font-semibold">
                          {project.technologies.length}{" "}
                          {t("project.technologies")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Building className="size-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-muted-foreground">
                          {t("project.client")}
                        </p>
                        <p className="font-semibold truncate">
                          {project.client}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Project Rating */}
                <Card className="shadow-none">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">
                      {t("project.projectRating")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 sm:space-y-5">
                      <div className="flex items-center gap-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400 dark:fill-yellow-500 dark:text-yellow-500"
                          />
                        ))}
                        <span className="text-2xl sm:text-3xl font-bold ml-2">
                          4.8
                        </span>
                      </div>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">
                              {t("project.functionality")}
                            </span>
                            <span className="text-muted-foreground">95%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-500"
                              style={{ width: "95%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">
                              {t("project.design")}
                            </span>
                            <span className="text-muted-foreground">90%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-500"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">
                              {t("project.performance")}
                            </span>
                            <span className="text-muted-foreground">88%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-500"
                              style={{ width: "88%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Technologies Used */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Layers className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                      {t("project.technologiesUsed")}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105"
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
                      <p className="text-foreground mb-4 italic">
                        &quot;{t("project.testimonialQuote")}&quot;
                      </p>
                      <div>
                        <p className="font-semibold text-foreground">
                          {t("project.testimonialAuthor")}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {t("project.testimonialRole")}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>

         {/* Seperator Section */}
         <SectionSeparator />

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 sm:mb-8">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-xs sm:text-sm">
                  {t("common.getStarted")}
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                {t("portfolio.cta.title")}
              </h2>

              {/* Subtitle */}
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
                {t("portfolio.cta.subtitle")}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Button
                  size="lg"
                  asChild
                  className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-none transition-all duration-200 w-full sm:w-auto"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center"
                  >
                    {t("hero.cta.primary")}
                    <ArrowRight className="ms-2 h-4 w-4 transform rtl:rotate-180" />
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="group bg-transparent hover:bg-primary/5 border-border hover:border-primary/30 transition-all duration-200 w-full sm:w-auto"
                >
                  <Link
                    href="/portfolio"
                    className="flex items-center justify-center"
                  >
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
  );
}
