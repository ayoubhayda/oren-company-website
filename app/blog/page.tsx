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
import { Calendar, Clock, Search } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const categories = ["All", "Web Development", "Design", "Marketing", "Technology"]

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
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const { t } = useLanguage()

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
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
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">Blog & Insights</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Expert insights, tutorials, and industry trends to help you stay ahead in the digital world
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t("blog.searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                          <span>{post.readTime}</span>
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
                <p className="text-muted-foreground">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Stay Updated</h2>
              <p className="text-lg text-muted-foreground">
                Subscribe to our newsletter for the latest insights, tutorials, and industry news delivered to your
                inbox.
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
