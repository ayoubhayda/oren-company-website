"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Calendar,
  Clock,
  Search,
  BookOpen,
  MailCheck,
  MailX,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import SectionSeparator from "@/components/general/SectionSeparator";
import { subscribeToNewsletter } from "@/lib/Services";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/animated-section";

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
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isNewsletterLoading, setIsNewsletterLoading] = useState(false);
  const [newsletterDialogOpen, setNewsletterDialogOpen] = useState(false);
  const [newsletterDialogMessage, setNewsletterDialogMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [newsletterDialogTimeout, setNewsletterDialogTimeout] = useState<NodeJS.Timeout | null>(null);
  const { t, language } = useLanguage();

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const postCategory = t(post.categoryKey);
      const matchesCategory =
        selectedCategory === "all" ||
        postCategory.toLowerCase() === t(`blog.category.${selectedCategory}`).toLowerCase();
      const matchesSearch =
        searchQuery === "" ||
        t(post.titleKey).toLowerCase().includes(searchQuery.toLowerCase()) ||
        t(post.excerptKey).toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, t]);

  // Reset to "all" category when search is cleared and no results are shown
  useEffect(() => {
    if (searchQuery === "" && filteredPosts.length === 0 && selectedCategory !== "all") {
      setSelectedCategory("all");
    }
  }, [searchQuery, filteredPosts.length, selectedCategory]);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newsletterEmail.trim()) {
      const errorMessage = { type: "error" as const, text: t("footer.emailRequired") || "Email is required" };
      setNewsletterDialogMessage(errorMessage);
      setNewsletterDialogOpen(true);

      // Clear any existing timeout
      if (newsletterDialogTimeout) {
        clearTimeout(newsletterDialogTimeout);
      }

      // Auto-close dialog after 3 seconds
      const timeout = setTimeout(() => {
        setNewsletterDialogOpen(false);
      }, 3000);
      setNewsletterDialogTimeout(timeout);

      return;
    }

    setIsNewsletterLoading(true);

    try {
      await subscribeToNewsletter(newsletterEmail);
      const successMessage = { type: "success" as const, text: t("footer.subscriptionSuccess") || "Successfully subscribed to our newsletter!" };
      setNewsletterDialogMessage(successMessage);
      setNewsletterDialogOpen(true);
      setNewsletterEmail("");

      // Clear any existing timeout
      if (newsletterDialogTimeout) {
        clearTimeout(newsletterDialogTimeout);
      }

      // Auto-close dialog after 3 seconds
      const timeout = setTimeout(() => {
        setNewsletterDialogOpen(false);
      }, 3000);
      setNewsletterDialogTimeout(timeout);
    } catch (error) {
      const errorMessage = {
        type: "error" as const,
        text: error instanceof Error ? error.message : t("footer.subscriptionError") || "Failed to subscribe. Please try again."
      };
      setNewsletterDialogMessage(errorMessage);
      setNewsletterDialogOpen(true);

      // Clear any existing timeout
      if (newsletterDialogTimeout) {
        clearTimeout(newsletterDialogTimeout);
      }

      // Auto-close dialog after 3 seconds
      const timeout = setTimeout(() => {
        setNewsletterDialogOpen(false);
      }, 3000);
      setNewsletterDialogTimeout(timeout);
    } finally {
      setIsNewsletterLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 sm:pt-32">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Hero badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <BookOpen className="w-4 h-4 text-primary" />
                </motion.div>
                {t("blog.hero.badge")}
              </motion.div>

              {/* Hero title */}
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t("blog.hero.title")}
              </motion.h1>
              {/* Hero subtitle */}
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t("blog.hero.subtitle")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Search & Filter + Blog Posts */}
        <section className="relative py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search & Filter */}
            <motion.div
              className="max-w-4xl mx-auto mb-12 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Search */}
              <motion.div
                className="relative max-w-3xl mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Search className="absolute left-4 rtl:right-4 rtl:left-auto top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </motion.div>
                <Input
                  type="text"
                  placeholder={t("blog.searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 pl-12 rtl:pr-12 rtl:pl-4 text-base bg-background/50 border-gray-200 focus:outline-none focus:border-primary focus:ring-0 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-background dark:border-border dark:focus:border-primary"
                />
              </motion.div>

              {/* Category Filter */}
              <motion.div
                className="flex flex-wrap justify-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {categories.map((category, index) => (
                  <motion.div
                    key={category.key}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant={
                        selectedCategory === category.key ? "default" : "outline"
                      }
                      onClick={() => setSelectedCategory(category.key)}
                      className="rounded-full"
                    >
                      {t(category.labelKey)}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Blog Posts */}
            <StaggerContainer
              key={`${searchQuery}-${selectedCategory}-${filteredPosts.length}`}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post) => (
                <StaggerItem key={post.id}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group h-full"
                  >
                    <Link href={`/blog/${post.id}`} className="group">
                      <Card className="group transition-all duration-300 border-border flex flex-col justify-between h-full hover:border-primary/30 overflow-hidden py-0">
                        {/* Animated gradient overlay on hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 pointer-events-none"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />

                        <motion.div
                          className="relative aspect-[16/9] overflow-hidden bg-muted"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={t(post.titleKey)}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                        <CardContent className="pt-2 pb-6 px-6 relative z-10">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                          >
                            <Badge variant="secondary" className="mb-3">
                              {t(post.categoryKey)}
                            </Badge>
                          </motion.div>
                          <motion.h3
                            className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                          >
                            {t(post.titleKey)}
                          </motion.h3>
                          <motion.p
                            className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                          >
                            {t(post.excerptKey)}
                          </motion.p>

                          {/* Meta */}
                          <motion.div
                            className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                          >
                            <motion.div
                              className="flex items-center gap-1"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
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
                            </motion.div>
                            <motion.div
                              className="flex items-center gap-1"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Clock className="h-3 w-3" />
                              <span>
                                {post.readTime.replace(
                                  "min read",
                                  t("blog.readTime")
                                )}
                              </span>
                            </motion.div>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.p
                  className="text-muted-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {searchQuery
                    ? `${t("blog.empty.search")} "${searchQuery}"`
                    : t("blog.empty.title")}
                </motion.p>
              </motion.div>
            )}
          </div>
        </section>

        <SectionSeparator />

        {/* Newsletter */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-2xl mx-auto text-center space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t("blog.newsletter.title")}
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t("blog.newsletter.description")}
              </motion.p>
              <motion.form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1"
                >
                  <Input
                    type="email"
                    placeholder={t("footer.emailPlaceholder")}
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1"
                    disabled={isNewsletterLoading}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button type="submit" disabled={isNewsletterLoading}>
                    {isNewsletterLoading ? t("footer.subscribing") || "Subscribing..." : t("footer.subscribe")}
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Newsletter Alert Dialog */}
      <AlertDialog open={newsletterDialogOpen} onOpenChange={setNewsletterDialogOpen}>
        <AlertDialogContent className="max-w-sm sm:max-w-md border border-border/50 bg-background backdrop-blur-md shadow-xl animate-in fade-in-0 zoom-in-95 duration-200">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <AlertDialogHeader className="space-y-0 p-0">
              <motion.div
                className="flex items-center gap-3 pb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {/* Animated icon styling */}
                <motion.div
                  className={`flex-shrink-0 w-12 h-12 rounded-md flex items-center justify-center transition-colors duration-200 ${
                    newsletterDialogMessage?.type === "success"
                      ? "bg-green-500/10 text-green-600 dark:text-green-400"
                      : "bg-red-500/10 text-red-600 dark:text-red-400"
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    animate={{
                      rotate: newsletterDialogMessage?.type === "success" ? [0, 10, -10, 0] : [0, -5, 5, 0]
                    }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {newsletterDialogMessage?.type === "success" ? (
                      <MailCheck className="h-5 w-5" />
                    ) : (
                      <MailX className="h-5 w-5" />
                    )}
                  </motion.div>
                </motion.div>

                {/* Typography hierarchy */}
                <motion.div
                  className="flex-1 space-y-1.5 text-start"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <AlertDialogTitle className={`text-base font-medium leading-tight transition-colors duration-200 ${
                    newsletterDialogMessage?.type === "success"
                      ? "text-green-700 dark:text-green-400"
                      : "text-red-700 dark:text-red-400"
                  }`}>
                    {newsletterDialogMessage?.type === "success"
                      ? (t("footer.subscriptionSuccess") || "Successfully subscribed!")
                      : (t("footer.subscriptionError") || "Subscription failed")
                    }
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-sm text-muted-foreground leading-relaxed -mt-1">
                    {newsletterDialogMessage?.text}
                  </AlertDialogDescription>
                </motion.div>
              </motion.div>
            </AlertDialogHeader>
          </motion.div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
