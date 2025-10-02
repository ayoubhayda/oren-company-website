import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

// Mock data - in a real app, this would come from a CMS or database
const projects: Record<
  string,
  {
    title: string
    description: string
    image: string
    category: string
    tags: string[]
    client: string
    duration: string
    team: string
    challenge: string
    solution: string
    results: Array<{ metric: string; value: string; description: string }>
    technologies: string[]
    testimonial?: { quote: string; author: string; role: string }
    images: string[]
  }
> = {
  "ecommerce-platform": {
    title: "Modern E-commerce Platform",
    description: "Complete online store with advanced filtering and seamless checkout experience",
    image: "/modern-ecommerce-website.png",
    category: "E-commerce",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    client: "Fashion Retailer",
    duration: "4 months",
    team: "5 developers",
    challenge:
      "The client needed a modern e-commerce platform to replace their outdated system. The main challenges were handling high traffic during sales events, providing advanced product filtering, and creating a seamless checkout experience that would reduce cart abandonment.",
    solution:
      "We built a high-performance e-commerce platform using React and Node.js with a microservices architecture. We implemented advanced caching strategies, optimized database queries, and created an intuitive user interface with real-time inventory updates. The checkout process was streamlined to a single page with multiple payment options.",
    results: [
      {
        metric: "Conversion Rate",
        value: "+45%",
        description: "Increase in completed purchases",
      },
      {
        metric: "Revenue",
        value: "+120%",
        description: "Growth in online sales",
      },
      {
        metric: "Page Load Time",
        value: "1.2s",
        description: "Average load time improvement",
      },
      {
        metric: "Cart Abandonment",
        value: "-35%",
        description: "Reduction in abandoned carts",
      },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe", "AWS", "Docker"],
    testimonial: {
      quote:
        "Oren transformed our online business. The new platform is fast, beautiful, and our sales have more than doubled since launch.",
      author: "Sarah Johnson",
      role: "CEO, Fashion Retailer",
    },
    images: ["/modern-ecommerce-website.png", "/placeholder.svg?key=ecom2", "/placeholder.svg?key=ecom3"],
  },
  "saas-dashboard": {
    title: "Analytics SaaS Dashboard",
    description: "Real-time analytics platform for B2B software companies",
    image: "/saas-analytics-dashboard.png",
    category: "SaaS",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket"],
    client: "Analytics Startup",
    duration: "6 months",
    team: "6 developers",
    challenge:
      "Building a real-time analytics dashboard that could handle millions of data points while providing instant insights. The platform needed to support multiple data sources, custom dashboards, and team collaboration features.",
    solution:
      "We developed a scalable SaaS platform using Next.js and TypeScript with real-time data processing. We implemented WebSocket connections for live updates, created a flexible dashboard builder, and optimized database queries for fast data retrieval. The platform includes role-based access control and team management features.",
    results: [
      {
        metric: "Active Users",
        value: "10K+",
        description: "Monthly active users",
      },
      {
        metric: "Uptime",
        value: "99.9%",
        description: "Platform reliability",
      },
      {
        metric: "Data Processing",
        value: "1M+",
        description: "Events processed per day",
      },
      {
        metric: "Customer Satisfaction",
        value: "4.8/5",
        description: "Average user rating",
      },
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "WebSocket", "Vercel", "Tailwind CSS"],
    testimonial: {
      quote:
        "The platform exceeded our expectations. It's fast, reliable, and our customers love the real-time insights.",
      author: "Michael Chen",
      role: "CTO, Analytics Startup",
    },
    images: ["/saas-analytics-dashboard.png", "/placeholder.svg?key=saas2", "/placeholder.svg?key=saas3"],
  },
  "corporate-website": {
    title: "Global Corporate Website",
    description: "Multilingual corporate site with CMS integration",
    image: "/professional-corporate-website.png",
    category: "Corporate",
    tags: ["Next.js", "Sanity CMS", "i18n"],
    client: "International Corporation",
    duration: "3 months",
    team: "4 developers",
    challenge:
      "Creating a corporate website that serves 12 different markets with localized content, maintains brand consistency, and provides easy content management for regional teams.",
    solution:
      "We built a multilingual website using Next.js with Sanity CMS for content management. We implemented a robust internationalization system with RTL support for Arabic markets, created a component library for brand consistency, and set up role-based content editing workflows.",
    results: [
      {
        metric: "Languages",
        value: "12",
        description: "Supported languages",
      },
      {
        metric: "Traffic",
        value: "+85%",
        description: "Increase in organic traffic",
      },
      {
        metric: "Engagement",
        value: "+60%",
        description: "Improvement in user engagement",
      },
      {
        metric: "Load Time",
        value: "0.9s",
        description: "Average page load time",
      },
    ],
    technologies: ["Next.js", "Sanity CMS", "TypeScript", "Tailwind CSS", "Vercel", "i18next"],
    images: ["/professional-corporate-website.png", "/placeholder.svg?key=corp2", "/placeholder.svg?key=corp3"],
  },
  "booking-platform": {
    title: "Hotel Booking Platform",
    description: "Reservation system with real-time availability and payments",
    image: "/placeholder.svg?key=booking",
    category: "Web Development",
    tags: ["React", "Node.js", "MongoDB"],
    client: "Boutique Hotel Chain",
    duration: "5 months",
    team: "6 developers",
    challenge:
      "The hotel chain needed a modern booking platform that could handle real-time room availability across multiple properties, integrate with their existing property management system, and provide a seamless booking experience for guests. The system also needed to support dynamic pricing, special offers, and loyalty programs.",
    solution:
      "We developed a comprehensive booking platform using React for the frontend and Node.js for the backend, with MongoDB for flexible data storage. We implemented real-time availability checking using WebSockets, integrated with multiple payment gateways for international transactions, and created an admin dashboard for property managers. The system includes automated email confirmations, calendar synchronization, and a mobile-responsive design.",
    results: [
      {
        metric: "Bookings",
        value: "50K+",
        description: "Annual reservations processed",
      },
      {
        metric: "Customer Rating",
        value: "4.9/5",
        description: "Average booking experience rating",
      },
      {
        metric: "Load Speed",
        value: "1.2s",
        description: "Average page load time",
      },
      {
        metric: "Mobile Bookings",
        value: "68%",
        description: "Bookings from mobile devices",
      },
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Socket.io", "AWS S3", "SendGrid"],
    testimonial: {
      quote:
        "The booking platform has transformed our business. Guests love how easy it is to book, and our staff appreciates the intuitive management tools. Our direct bookings have increased significantly.",
      author: "David Martinez",
      role: "Operations Director, Boutique Hotel Chain",
    },
    images: ["/placeholder.svg?key=booking", "/placeholder.svg?key=booking2", "/placeholder.svg?key=booking3"],
  },
  "fitness-app": {
    title: "Fitness Tracking App",
    description: "Mobile-first fitness platform with workout tracking",
    image: "/placeholder.svg?key=fitness",
    category: "SaaS",
    tags: ["React Native", "Firebase", "Stripe"],
    client: "Fitness Startup",
    duration: "7 months",
    team: "5 developers",
    challenge:
      "Creating a comprehensive fitness tracking application that works seamlessly across iOS and Android, integrates with popular fitness wearables, provides personalized workout recommendations, and includes social features to keep users motivated. The app needed to handle offline functionality and sync data when connectivity is restored.",
    solution:
      "We built a cross-platform mobile application using React Native, ensuring a native feel on both iOS and Android. Firebase was used for real-time data synchronization, user authentication, and push notifications. We integrated with Apple HealthKit and Google Fit for wearable data, implemented machine learning algorithms for personalized workout suggestions, and created social features including challenges, leaderboards, and workout sharing. The app includes offline support with automatic sync when online.",
    results: [
      {
        metric: "Downloads",
        value: "25K+",
        description: "App downloads in first 6 months",
      },
      {
        metric: "Retention Rate",
        value: "78%",
        description: "30-day user retention",
      },
      {
        metric: "App Rating",
        value: "4.7/5",
        description: "Average user rating",
      },
      {
        metric: "Daily Active Users",
        value: "12K+",
        description: "Users engaging daily",
      },
    ],
    technologies: [
      "React Native",
      "Firebase",
      "TypeScript",
      "Stripe",
      "Apple HealthKit",
      "Google Fit",
      "TensorFlow Lite",
    ],
    testimonial: {
      quote:
        "Oren delivered exactly what we envisioned and more. The app is beautiful, fast, and our users are highly engaged. The social features have created a real community around our brand.",
      author: "Jessica Lee",
      role: "Founder, Fitness Startup",
    },
    images: ["/placeholder.svg?key=fitness", "/placeholder.svg?key=fitness2", "/placeholder.svg?key=fitness3"],
  },
  "restaurant-website": {
    title: "Restaurant Chain Website",
    description: "Multi-location restaurant site with online ordering",
    image: "/placeholder.svg?key=restaurant",
    category: "E-commerce",
    tags: ["Next.js", "Tailwind", "Stripe"],
    client: "Regional Restaurant Chain",
    duration: "4 months",
    team: "4 developers",
    challenge:
      "The restaurant chain needed a unified web presence for their 15 locations with individual menus, online ordering, table reservations, and loyalty program integration. Each location needed to manage their own content while maintaining brand consistency. The system had to handle high traffic during peak hours and integrate with their existing POS system.",
    solution:
      "We created a multi-tenant Next.js application with location-specific pages and menus. We implemented a headless CMS for easy content management, built a custom online ordering system with real-time order tracking, and integrated with their POS system for seamless order processing. The site includes a table reservation system, loyalty program integration, and a mobile app for order pickup. We used Stripe for payment processing and implemented advanced caching for optimal performance.",
    results: [
      {
        metric: "Online Orders",
        value: "+200%",
        description: "Increase in online orders",
      },
      {
        metric: "Locations",
        value: "15",
        description: "Restaurants on platform",
      },
      {
        metric: "Customer Satisfaction",
        value: "95%",
        description: "Positive feedback rate",
      },
      {
        metric: "Average Order Value",
        value: "+35%",
        description: "Increase in order size",
      },
    ],
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "Sanity CMS", "PostgreSQL", "Vercel", "Twilio"],
    testimonial: {
      quote:
        "The new website and ordering system have been game-changers for our business. Online orders have skyrocketed, and our customers love the convenience. The platform pays for itself many times over.",
      author: "Robert Thompson",
      role: "Owner, Regional Restaurant Chain",
    },
    images: ["/placeholder.svg?key=restaurant", "/placeholder.svg?key=restaurant2", "/placeholder.svg?key=restaurant3"],
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 lg:pt-40 lg:pb-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Button variant="ghost" asChild>
                <Link href="/portfolio">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Portfolio
                </Link>
              </Button>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">{project.title}</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">{project.description}</p>

              {/* Project Meta */}
              <div className="flex flex-wrap gap-6 pt-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-semibold text-foreground">{project.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Team:</span>
                  <span className="font-semibold text-foreground">{project.team}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-muted shadow-2xl">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.challenge}</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Results & Impact</h2>
                <p className="text-lg text-muted-foreground">Measurable outcomes that matter</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.results.map((result, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{result.metric}</p>
                          <p className="text-3xl font-bold text-foreground mb-1">{result.value}</p>
                          <p className="text-sm text-muted-foreground">{result.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Technologies Used</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-base px-4 py-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        {project.testimonial && (
          <section className="py-20 lg:py-32 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <Card className="border-border">
                  <CardContent className="pt-8 pb-8">
                    <p className="text-xl text-foreground leading-relaxed mb-6 italic">"{project.testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{project.testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{project.testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-2xl p-12 text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">Want Similar Results?</h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your business goals with a custom solution.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link href="/portfolio">View More Projects</Link>
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
