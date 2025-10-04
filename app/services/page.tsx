import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Code, Palette, ShoppingCart, TrendingUp, Share2, Zap, ArrowRight, CheckCircle2, Users2, Settings, LifeBuoy } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CTASection } from "@/components/cta-section"
import SectionSeparator from "@/components/general/SectionSeparator"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies for optimal performance and scalability.",
    features: ["Responsive Design", "Performance Optimization", "SEO-Friendly", "Cross-Browser Compatible"],
    href: "/services/web-development",
    badge: "Most Popular"
  },
  {
    icon: Zap,
    title: "Custom Platforms",
    description: "Tailored digital platforms designed to meet your unique business requirements and workflows.",
    features: ["Custom Solutions", "Scalable Architecture", "API Integration", "Cloud Deployment"],
    href: "/services/custom-platforms",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online stores with secure payments, inventory management, and seamless user experience.",
    features: ["Payment Integration", "Inventory Management", "Order Tracking", "Analytics Dashboard"],
    href: "/services/ecommerce",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to increase your online visibility and drive conversions.",
    features: ["SEO Optimization", "Content Strategy", "PPC Campaigns", "Analytics & Reporting"],
    href: "/services/digital-marketing",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Comprehensive social media strategies to build your brand and engage with your audience.",
    features: ["Content Creation", "Community Management", "Campaign Planning", "Performance Tracking"],
    href: "/services/social-media",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that provide exceptional user experiences across all devices.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    href: "/services/design",
    badge: "Featured"
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Enhanced */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Zap className="w-4 h-4" />
                <span>Premium Digital Services</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tight">
                Elevate Your Digital
                <span className="block text-primary mt-2">Presence</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Comprehensive digital solutions designed to help your business thrive in the modern digital landscape with cutting-edge technology and creative excellence
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="text-base">
                  <Link href="#services">
                    Explore Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base">
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Seperator Section */}
        <SectionSeparator />

        {/* Services Grid - Enhanced */}
        <section id="services" className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                End-to-end solutions tailored to transform your digital vision into reality
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 border-border flex flex-col justify-between"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex flex-col gap-5">
                    <CardHeader className="space-y-4">
                      <div className="flex items-start justify-between">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                        {service.badge && (
                          <Badge variant="secondary" className="text-xs">
                            {service.badge}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-5">
                      <CardDescription className="text-muted-foreground leading-relaxed text-base">
                        {service.description}
                      </CardDescription>
                      
                      <div className="space-y-2.5">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm text-foreground/80">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                  
                  <CardFooter className="relative z-40">
                  <Button variant="outline" asChild className="w-full hover:bg-primary/5">
                      <Link href={service.href}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Seperator Section */}
        <SectionSeparator />

        {/* Why Choose Us - Enhanced */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-background via-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why Choose Oren
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine technical expertise with creative innovation to deliver exceptional results that drive measurable business growth
              </p>
            </div>

            {/* Why Choose Us - Elegant Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                {
                  title: "Expert Team",
                  description: "Skilled professionals with years of experience in web development and digital solutions",
                  icon: Users2,
                },
                {
                  title: "Custom Solutions",
                  description: "Tailored approaches designed specifically for your business needs and goals",
                  icon: Settings,
                },
                {
                  title: "Proven Results",
                  description: "Track record of successful projects and satisfied clients across various industries",
                  icon: TrendingUp,
                },
                {
                  title: "Ongoing Support",
                  description: "Continuous maintenance and support to ensure your digital presence stays optimal",
                  icon: LifeBuoy,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-card backdrop-blur-sm border border-border rounded-xl p-4 lg:p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30"
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-primary/10 text-primary mb-3 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </div>

                  <h3 className="text-sm lg:text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seperator Section */}
        <SectionSeparator />

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}