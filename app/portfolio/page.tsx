"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const categories = ["All", "Web Development", "E-commerce", "SaaS", "Corporate", "Marketing"]

const projects = [
  {
    id: "ecommerce-platform",
    title: "Modern E-commerce Platform",
    description: "Complete online store with advanced filtering and seamless checkout",
    image: "/modern-ecommerce-website.png",
    category: "E-commerce",
    tags: ["React", "Node.js", "Stripe"],
    metrics: { conversion: "+45%", revenue: "+120%", performance: "98/100" },
  },
  {
    id: "saas-dashboard",
    title: "Analytics SaaS Dashboard",
    description: "Real-time analytics platform for B2B software companies",
    image: "/saas-analytics-dashboard.png",
    category: "SaaS",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    metrics: { users: "10K+", uptime: "99.9%", satisfaction: "4.8/5" },
  },
  {
    id: "corporate-website",
    title: "Global Corporate Website",
    description: "Multilingual corporate site with CMS integration",
    image: "/professional-corporate-website.png",
    category: "Corporate",
    tags: ["Next.js", "Sanity CMS", "i18n"],
    metrics: { languages: "12", traffic: "+85%", engagement: "+60%" },
  },
  {
    id: "booking-platform",
    title: "Hotel Booking Platform",
    description: "Reservation system with real-time availability and payments",
    image: "/placeholder.svg?key=booking",
    category: "Web Development",
    tags: ["React", "Node.js", "MongoDB"],
    metrics: { bookings: "50K+", rating: "4.9/5", speed: "1.2s" },
  },
  {
    id: "fitness-app",
    title: "Fitness Tracking App",
    description: "Mobile-first fitness platform with workout tracking",
    image: "/placeholder.svg?key=fitness",
    category: "SaaS",
    tags: ["React Native", "Firebase", "Stripe"],
    metrics: { downloads: "25K+", retention: "78%", rating: "4.7/5" },
  },
  {
    id: "restaurant-website",
    title: "Restaurant Chain Website",
    description: "Multi-location restaurant site with online ordering",
    image: "/placeholder.svg?key=restaurant",
    category: "E-commerce",
    tags: ["Next.js", "Tailwind", "Stripe"],
    metrics: { orders: "+200%", locations: "15", satisfaction: "95%" },
  },
]

export default function PortfolioPage() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">Our Portfolio</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Explore our recent projects and see how we've helped businesses achieve their digital goals
              </p>
            </div>
          </div>
        </section>

        {/* Filter & Projects */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
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

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Link key={project.id} href={`/portfolio/${project.id}`} className="group">
                  <Card className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                      {/* Metrics */}
                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key}>
                            <span className="font-semibold text-foreground">{value}</span>{" "}
                            <span className="capitalize">{key}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Ready to Start Your Project?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's create something amazing together. Get in touch to discuss your project requirements.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">{t("cta.getStarted")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
