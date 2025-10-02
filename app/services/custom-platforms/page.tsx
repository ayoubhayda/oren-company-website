import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Database, Cloud, Lock, Workflow, BarChart } from "lucide-react"
import Link from "next/link"

export default function CustomPlatformsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="mb-4">Custom Platforms</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                Custom Platform Development
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Tailored digital platforms built to match your unique business processes, workflows, and requirements
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Discuss Your Project</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">See Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Platform Capabilities</h2>
              <p className="text-lg text-muted-foreground">Powerful features designed to streamline your operations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "High Performance",
                  description: "Built for speed and efficiency, handling thousands of concurrent users seamlessly",
                },
                {
                  icon: Database,
                  title: "Data Management",
                  description: "Robust database architecture for secure storage and efficient data retrieval",
                },
                {
                  icon: Cloud,
                  title: "Cloud Infrastructure",
                  description: "Scalable cloud deployment with automatic scaling and high availability",
                },
                {
                  icon: Lock,
                  title: "Enterprise Security",
                  description: "Advanced security measures including encryption, authentication, and access control",
                },
                {
                  icon: Workflow,
                  title: "Custom Workflows",
                  description: "Automated processes tailored to your specific business operations and requirements",
                },
                {
                  icon: BarChart,
                  title: "Analytics & Reporting",
                  description:
                    "Comprehensive dashboards and reports to track performance and make data-driven decisions",
                },
              ].map((feature, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Perfect For</h2>
              <p className="text-lg text-muted-foreground">Industries and use cases we specialize in</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "SaaS Applications",
                  description:
                    "Multi-tenant platforms with subscription management, user authentication, and feature-rich dashboards",
                },
                {
                  title: "Internal Tools",
                  description:
                    "Custom business applications to streamline operations, manage resources, and improve productivity",
                },
                {
                  title: "Marketplaces",
                  description:
                    "Two-sided platforms connecting buyers and sellers with payment processing and transaction management",
                },
                {
                  title: "Booking Systems",
                  description:
                    "Reservation and scheduling platforms with calendar integration, notifications, and payment processing",
                },
                {
                  title: "CRM Systems",
                  description:
                    "Customer relationship management tools tailored to your sales process and customer journey",
                },
                {
                  title: "Learning Platforms",
                  description:
                    "Educational platforms with course management, progress tracking, and interactive content delivery",
                },
              ].map((useCase, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-2xl p-12 text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">Let's Build Your Custom Platform</h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Schedule a consultation to discuss your requirements and get a tailored solution proposal.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
