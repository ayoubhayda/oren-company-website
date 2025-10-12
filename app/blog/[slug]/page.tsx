"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { StaggerContainer, StaggerItem } from "@/components/animated-section"

// Mock data - in a real app, this would come from a CMS or database
const posts: Record<
  string,
  {
    title: string
    excerpt: string
    content: string
    image: string
    category: string
    author: { name: string; avatar: string; role: string }
    date: string
    readTime: string
    relatedPosts: Array<{ id: string; title: string; image: string }>
  }
> = {
  "modern-web-development-trends-2025": {
    title: "blog.post.trends2025.title",
    excerpt:
      "blog.post.trends2025.excerpt",
    content: "blog.post.trends2025.content",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "blog.category.webdev",
    author: {
      name: "Sarah Johnson",
      avatar: "/professional-woman-diverse.png",
      role: "Founder & CEO",
    },
    date: "2025-01-15",
    readTime: "5 min read",
    relatedPosts: [
      {
        id: "nextjs-performance-optimization",
        title: "blog.post.nextjsPerformance.title",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        id: "ai-in-web-development",
        title: "blog.post.aiInWebDev.title",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
    ],
  },
  "designing-for-accessibility": {
    title: "blog.post.accessibility.title",
    excerpt: "blog.post.accessibility.excerpt",
    content: "blog.post.accessibility.content",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "blog.category.design",
    author: {
      name: "Emma Williams",
      avatar: "/professional-woman-diverse.png",
      role: "Lead Designer",
    },
    date: "2025-01-10",
    readTime: "8 min read",
    relatedPosts: [
      {
        id: "ui-design-principles",
        title: "blog.post.uiDesignPrinciples.title",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        id: "modern-web-development-trends-2025",
        title: "blog.post.trends2025.title",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
    ],
  },
  "seo-strategies-2025": {
    title: "blog.post.seoStrategies.title",
    excerpt: "blog.post.seoStrategies.excerpt",
    content: "blog.post.seoStrategies.content",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    category: "blog.category.marketing",
    author: {
      name: "Michael Chen",
      avatar: "/professional-man-diverse.png",
      role: "Marketing Director",
    },
    date: "2025-01-05",
    readTime: "6 min read",
    relatedPosts: [
      {
        id: "modern-web-development-trends-2025",
        title: "blog.post.trends2025.title",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        id: "nextjs-performance-optimization",
        title: "blog.post.nextjsPerformance.title",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
    ],
  },
  "nextjs-performance-optimization": {
    title: "blog.post.nextjsPerformance.title",
    excerpt: "blog.post.nextjsPerformance.excerpt",
    content: "blog.post.nextjsPerformance.content",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "blog.category.webdev",
    author: {
      name: "Sarah Johnson",
      avatar: "/professional-woman-diverse.png",
      role: "Founder & CEO",
    },
    date: "2024-12-28",
    readTime: "7 min read",
    relatedPosts: [
      {
        id: "modern-web-development-trends-2025",
        title: "blog.post.trends2025.title",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        id: "ai-in-web-development",
        title: "blog.post.aiInWebDev.title",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
    ],
  },
  "ui-design-principles": {
    title: "blog.post.uiDesignPrinciples.title",
    excerpt: "blog.post.uiDesignPrinciples.excerpt",
    content: "blog.post.uiDesignPrinciples.content",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "blog.category.design",
    author: {
      name: "Emma Williams",
      avatar: "/professional-woman-diverse.png",
      role: "Lead Designer",
    },
    date: "2024-12-20",
    readTime: "5 min read",
    relatedPosts: [
      {
        id: "designing-for-accessibility",
          title: "blog.post.accessibility.title",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        id: "modern-web-development-trends-2025",
        title: "blog.post.trends2025.title",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
    ],
  },
  "ai-in-web-development": {
    title: "blog.post.aiInWebDev.title",
    excerpt: "blog.post.aiInWebDev.excerpt",
    content: "blog.post.aiInWebDev.content",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "blog.category.technology",
    author: {
      name: "Michael Chen",
      avatar: "/professional-man-diverse.png",
      role: "Marketing Director",
    },
    date: "2024-12-15",
    readTime: "6 min read",
    relatedPosts: [
      {
        id: "modern-web-development-trends-2025",
        title: "blog.post.trends2025.title",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        id: "nextjs-performance-optimization",
        title: "blog.post.nextjsPerformance.title",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
    ],
  },
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params)
  const post = posts[slug]
  const { t, language } = useLanguage()

  if (!post) {
    notFound()
  }

  // Share functionality
  const handleShare = async () => {
    const url = window.location.href
    const title = t(post.title)

    // Check if Web Share API is supported
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: t(post.excerpt),
          url: url,
        })
      } catch (err) {
        // User cancelled sharing or error occurred
        if ((err as Error).name !== 'AbortError') {
          console.error('Error sharing:', err)
          fallbackShare(url, title)
        }
      }
    } else {
      // Fallback to clipboard API
      fallbackShare(url, title)
    }
  }

  const fallbackShare = async (url: string, title: string) => {
    try {
      await navigator.clipboard.writeText(`${title} - ${url}`)
    } catch (err) {
      console.error('Failed to copy to clipboard:', err)
      // Final fallback - select text method
      const textArea = document.createElement('textarea')
      textArea.value = `${title} - ${url}`
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
    }
  }


  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-12 lg:pt-24 lg:pb-10 bg-gradient-to-b from-background/50 via-background/80 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, x: language === "ar" ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Button variant="ghost" asChild className="group">
                  <Link href="/blog" className="flex items-center gap-2 hover:gap-3 transition-all">
                    {language === "ar" ? (
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    ) : (
                      <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    )}
                    {t("blog.backToBlog")}
                  </Link>
                </Button>
              </motion.div>

              <div className="space-y-6">
              <motion.div
                className="flex flex-wrap items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge variant="secondary">{t(post.category)}</Badge>
                </motion.div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <motion.div
                    className="flex items-center gap-1"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(post.date).toLocaleDateString(
                        language === "ar" ? "ar-SA" : language === "fr" ? "fr-FR" : "en-US",
                        {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-1"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <Clock className="h-4 w-4" />
                          <span>{post.readTime.replace("min read", t("blog.readTime"))}</span>
                  </motion.div>
                </div>
                <div className="flex-1"></div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent"
                    onClick={handleShare}
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                  {t(post.title)}
                </motion.h1>
                <motion.p
                  className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  {t(post.excerpt)}
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-muted"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: String(t(post.content) || '') }}
              />
            </motion.div>
          </div>
        </section>

        {/* Related Posts */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <section className="py-12 lg:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.h2
                  className="text-3xl font-bold text-foreground mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {t("blog.relatedArticles")}
                </motion.h2>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {post.relatedPosts.map((relatedPost) => (
                    <StaggerItem key={relatedPost.id}>
                      <Link href={`/blog/${relatedPost.id}`} className="group">
                        <motion.div
                          whileHover={{ y: -8, scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="h-full"
                        >
                          <Card className="group transition-all duration-300 border-border flex flex-col justify-between h-full hover:border-primary/30 hover:-translate-y-1 overflow-hidden py-0">
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />

                        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="pt-2 pb-6 px-6 relative z-10">
                          <Badge variant="secondary" className="mb-3">
                            {t("blog.category.webdev")}
                          </Badge>
                          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {t(relatedPost.title)}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                            {relatedPost.id === "nextjs-performance-optimization"
                              ? t("blog.post.nextjsPerformance.excerpt")
                              : relatedPost.id === "ai-in-web-development"
                              ? t("blog.post.aiInWebDev.excerpt")
                              : relatedPost.id === "designing-for-accessibility"
                              ? t("blog.post.accessibility.excerpt")
                              : relatedPost.id === "modern-web-development-trends-2025"
                              ? t("blog.post.trends2025.excerpt")
                              : relatedPost.id === "seo-strategies-2025"
                              ? t("blog.post.seoStrategies.excerpt")
                              : relatedPost.id === "ui-design-principles"
                              ? t("blog.post.uiDesignPrinciples.excerpt")
                              : ""}
                          </p>

                          {/* Meta */}
                          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>
                                {new Date("2024-12-28").toLocaleDateString(
                                  language === "ar" ? "ar-SA" : language === "fr" ? "fr-FR" : "en-US",
                                  {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                  }
                                )}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>7 {t("blog.minRead")}</span>
                            </div>
                          </div>
                        </CardContent>
                          </Card>
                        </motion.div>
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
