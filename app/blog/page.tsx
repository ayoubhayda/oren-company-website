"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Clock,
  Search,
  Zap,
  ArrowRight,
  ArrowLeft,
  BookOpen,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import SectionSeparator from "@/components/general/SectionSeparator";
import MinimalSectionSeparator from "@/components/general/MinimalSectionSeparator";

const categories = [
  { key: "all", labelKey: "blog.category.all" },
  { key: "webdev", labelKey: "blog.category.webdev" },
  { key: "design", labelKey: "blog.category.design" },
  { key: "marketing", labelKey: "blog.category.marketing" },
  { key: "technology", labelKey: "blog.category.technology" },
];

const posts = [
  {
    id: "modern-web-development-trends-2025",
    titleKey: "blog.post.trends2025.title",
    excerptKey: "blog.post.trends2025.excerpt",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    categoryKey: "blog.category.webdev",
    author: "Sarah Johnson",
    date: "2025-01-15",
    readTime: "5 min read",
  },
  {
    id: "designing-for-accessibility",
    titleKey: "blog.post.accessibility.title",
    excerptKey: "blog.post.accessibility.excerpt",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    categoryKey: "blog.category.design",
    author: "Emma Williams",
    date: "2025-01-10",
    readTime: "8 min read",
  },
  {
    id: "seo-strategies-2025",
    titleKey: "blog.post.seoStrategies.title",
    excerptKey: "blog.post.seoStrategies.excerpt",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    categoryKey: "blog.category.marketing",
    author: "Michael Chen",
    date: "2025-01-05",
    readTime: "6 min read",
  },
  {
    id: "nextjs-performance-optimization",
    titleKey: "blog.post.nextjsPerformance.title",
    excerptKey: "blog.post.nextjsPerformance.excerpt",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    categoryKey: "blog.category.webdev",
    author: "Sarah Johnson",
    date: "2024-12-28",
    readTime: "7 min read",
  },
  {
    id: "ui-design-principles",
    titleKey: "blog.post.uiDesignPrinciples.title",
    excerptKey: "blog.post.uiDesignPrinciples.excerpt",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    categoryKey: "blog.category.design",
    author: "Emma Williams",
    date: "2024-12-20",
    readTime: "5 min read",
  },
  {
    id: "ai-in-web-development",
    titleKey: "blog.post.aiInWebDev.title",
    excerptKey: "blog.post.aiInWebDev.excerpt",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    categoryKey: "blog.category.technology",
    author: "Michael Chen",
    date: "2024-12-15",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { t, language } = useLanguage();

  const filteredPosts = posts.filter((post) => {
    const postCategory = t(post.categoryKey);
    const matchesCategory =
      selectedCategory === "all" ||
      postCategory.toLowerCase() === t(`blog.category.${selectedCategory}`);
    const matchesSearch =
      searchQuery === "" ||
      t(post.titleKey).toLowerCase().includes(searchQuery.toLowerCase()) ||
      t(post.excerptKey).toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 sm:pt-32 ">
          <div className=" relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Hero budge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                <BookOpen className="w-4 h-4 text-primary" />
                {t("blog.hero.badge")}
              </div>

              {/* Hero title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t("blog.hero.title")}
              </h1>
              {/* Hero bio */}
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("blog.hero.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter + Blog Posts */}
        <section className="relative py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search & Filter */}
            <div className="max-w-4xl mx-auto mb-12 space-y-6">
              {/* Search */}
              <div className="relative max-w-3xl mx-auto">
                <Search className="absolute left-4 rtl:right-4 rtl:left-auto top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t("blog.searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 pl-12 rtl:pr-12 rtl:pl-4 text-base bg-background/50 border-gray-200 focus:outline-none focus:border-primary focus:ring-0 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-background dark:border-border dark:focus:border-primary"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Button
                    key={category.key}
                    variant={
                      selectedCategory === category.key ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category.key)}
                    className="rounded-full"
                  >
                    {t(category.labelKey)}
                  </Button>
                ))}
              </div>
            </div>

            {/* Blog Posts */}
            <div
              id="blog-posts"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="group">
                  <Card className="group transition-all duration-300 border-border flex flex-col justify-between h-full hover:border-primary/30 hover:-translate-y-1 overflow-hidden py-0">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />

                    <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={t(post.titleKey)}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="pt-2 pb-6 px-6 relative z-10">
                      <Badge variant="secondary" className="mb-3">
                        {t(post.categoryKey)}
                      </Badge>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {t(post.titleKey)}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                        {t(post.excerptKey)}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {new Date(post.date).toLocaleDateString(
                              language === "ar"
                                ? "ar-SA"
                                : language === "fr"
                                ? "fr-FR"
                                : "en-US",
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
                          <span>
                            {post.readTime.replace(
                              "min read",
                              t("blog.readTime")
                            )}
                          </span>
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
                    : t("blog.empty.title")}
                </p>
              </div>
            )}
          </div>
        </section>

        <SectionSeparator />

        {/* Newsletter */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                {t("blog.newsletter.title")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("blog.newsletter.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder={t("footer.emailPlaceholder")}
                  className="flex-1"
                />
                <Button>{t("footer.subscribe")}</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
