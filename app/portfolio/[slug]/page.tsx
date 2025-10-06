"use client"

import { useState, use } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ArrowRight, Calendar, Users, Building, Clock, Target, Zap, Quote, Image as ImageIcon, Layers, Star, Github, ExternalLink, Share2, ChevronLeft, ChevronRight } from "lucide-react"
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
    demoLink?: string
    githubLink?: string
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
    demoLink: "#",
    githubLink: "#",
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
    demoLink: "#",
    githubLink: "#",
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

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const project = projects[slug]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) {
    notFound()
  }

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
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Portfolio
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
                      {project.category}
                  </Badge>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 dark:fill-yellow-500 dark:text-yellow-500" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">4.8 (127 reviews)</span>
                    </div>
                  </div>

                  <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                    {project.title}
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
                          alt={`${project.title} - Image ${currentImageIndex + 1}`}
                          fill
                          className="object-cover"
                        />

                        {/* Action Buttons */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          {project.demoLink && (
                            <Button
                              size="sm"
                              className="bg-white/90 hover:bg-white text-black dark:bg-gray-900/90 dark:hover:bg-gray-900 dark:text-white border border-gray-200 dark:border-gray-700"
                              onClick={() => window.open(project.demoLink, '_blank')}
                            >
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Demo
                            </Button>
                          )}
                          {project.githubLink && (
                            <Button
                              size="sm"
                              className="bg-black/60 hover:bg-black/80 text-white border border-gray-200 dark:bg-white/60 dark:hover:bg-white/80 dark:text-gray-900 dark:border-gray-700"
                              onClick={() => window.open(project.githubLink, '_blank')}
                            >
                              <Github className="h-4 w-4 mr-1" />
                              Code
                            </Button>
                          )}
                        </div>

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
                    <h2 className="text-2xl font-bold text-foreground">Project Overview</h2>
                  </div>

                  <div className="prose prose-xl max-w-none">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                </div>


                {/* Key Features */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">Key Features</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-border/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Users className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-3">User Experience</h3>
                            <p className="text-base text-muted-foreground">
                              Intuitive design with seamless navigation and responsive layout across all devices
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Zap className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-3">Performance</h3>
                            <p className="text-base text-muted-foreground">
                              Optimized for speed with efficient database queries and caching strategies
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Target className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-3">Reliability</h3>
                            <p className="text-base text-muted-foreground">
                              Robust architecture with 99.9% uptime and comprehensive error handling
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Layers className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-3">Scalability</h3>
                            <p className="text-base text-muted-foreground">
                              Built to grow with your business, handling increased traffic and data seamlessly
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
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full justify-start gap-3" size="lg">
                      <ExternalLink className="h-4 w-4" />
                      View Live Demo
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-3" size="lg">
                      <Github className="h-4 w-4" />
                      View Source Code
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-3" size="lg">
                      <Share2 className="h-4 w-4" />
                      Share Project
                    </Button>
                  </CardContent>
                </Card>

                {/* Project Details */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Project Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="font-semibold">{project.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Team Size</p>
                        <p className="font-semibold">{project.team}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Client</p>
                        <p className="font-semibold">{project.client}</p>
            </div>
          </div>
                  </CardContent>
                </Card>

                {/* Project Rating */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Project Rating</CardTitle>
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
                          <span>Functionality</span>
                          <span>95%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Design</span>
                          <span>90%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Performance</span>
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
                    <h2 className="text-2xl font-bold text-foreground">Technologies Used</h2>
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
                      <p className="text-foreground mb-4 italic">"{project.testimonial.quote}"</p>
              <div>
                        <p className="font-semibold text-foreground">{project.testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{project.testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>


        {/* CTA Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-2xl p-12 text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">Ready to Start Your Project?</h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results with a custom solution.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" variant="secondary" asChild className="dark:bg-white dark:text-black dark:hover:bg-white/85">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:text-white dark:border-white/20 dark:hover:bg-white/10 dark:hover:border-white/40"
                >
                  <Link href="/portfolio">View More Work</Link>
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
