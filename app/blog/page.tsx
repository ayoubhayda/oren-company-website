"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Search, Zap, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const categories = [
  { key: "all", label: "All" },
  { key: "webdev", label: "Web Development" },
  { key: "design", label: "Design" },
  { key: "marketing", label: "Marketing" },
  { key: "technology", label: "Technology" }
]

const posts = [
  {
    id: "modern-web-development-trends-2025",
    title: "Modern Web Development Trends in 2025",
    excerpt:
      "Explore the latest trends shaping web development, from AI integration to progressive web apps and beyond.",
    image: "/placeholder.svg?key=blog1",
    category: "Web Development",
    author: "Sarah Johnson",
    date: "2025-01-15",
    readTime: "5 min read",
  },
  {
    id: "designing-for-accessibility",
    title: "Designing for Accessibility: A Complete Guide",
    excerpt: "Learn how to create inclusive digital experiences that work for everyone, regardless of their abilities.",
    image: "/placeholder.svg?key=blog2",
    category: "Design",
    author: "Emma Williams",
    date: "2025-01-10",
    readTime: "8 min read",
  },
  {
    id: "seo-strategies-2025",
    title: "SEO Strategies That Actually Work in 2025",
    excerpt: "Discover proven SEO techniques to improve your website's visibility and drive organic traffic.",
    image: "/placeholder.svg?key=blog3",
    category: "Marketing",
    author: "Michael Chen",
    date: "2025-01-05",
    readTime: "6 min read",
  },
  {
    id: "nextjs-performance-optimization",
    title: "Next.js Performance Optimization Tips",
    excerpt: "Practical tips and techniques to make your Next.js applications faster and more efficient.",
    image: "/placeholder.svg?key=blog4",
    category: "Web Development",
    author: "Sarah Johnson",
    date: "2024-12-28",
    readTime: "7 min read",
  },
  {
    id: "ui-design-principles",
    title: "Essential UI Design Principles for 2025",
    excerpt: "Master the fundamental principles of user interface design to create beautiful, functional interfaces.",
    image: "/placeholder.svg?key=blog5",
    category: "Design",
    author: "Emma Williams",
    date: "2024-12-20",
    readTime: "5 min read",
  },
  {
    id: "ai-in-web-development",
    title: "How AI is Transforming Web Development",
    excerpt: "Explore how artificial intelligence is revolutionizing the way we build and maintain websites.",
    image: "/placeholder.svg?key=blog6",
    category: "Technology",
    author: "Michael Chen",
    date: "2024-12-15",
    readTime: "6 min read",
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const { t } = useLanguage()

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category.toLowerCase() === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {t("blog.hero.badge")}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tight">
                {t("blog.hero.title")}
                <span className="block text-primary mt-2">{t("blog.hero.titleHighlight")}</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {t("blog.hero.subtitle")}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" asChild className="group">
                  <Link href="#blog-posts">
                    {t("blog.hero.cta.primary")}
                    <ArrowRight className="ms-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent hover:bg-primary/5">
                  <Link href="/contact">
                    {t("blog.hero.cta.contact")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 rtl:right-3 rtl:left-auto top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t("blog.searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 rtl:pr-10 rtl:pl-3"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Button
                    key={category.key}
                    variant={selectedCategory === category.key ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.key)}
                    className="rounded-full"
                  >
                    {t(`blog.category.${category.key}`)}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section id="blog-posts" className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="group">
                  <Card className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {post.category}
                      </Badge>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime.replace("min read", t("blog.readTime"))}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  {searchQuery
                    ? `${t("blog.empty.search")} "${searchQuery}"`
                    : t("blog.empty.title")
                  }
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t("blog.newsletter.title")}</h2>
              <p className="text-lg text-muted-foreground">
                {t("blog.newsletter.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input type="email" placeholder={t("footer.emailPlaceholder")} className="flex-1" />
                <Button>{t("footer.subscribe")}</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
