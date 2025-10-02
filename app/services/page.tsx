import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Code, Palette, ShoppingCart, TrendingUp, Share2, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CTASection } from "@/components/cta-section"
// Will use static text for now since service details aren't in translation file

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies for optimal performance and scalability.",
    features: ["Responsive Design", "Performance Optimization", "SEO-Friendly", "Cross-Browser Compatible"],
    href: "/services/web-development",
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
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">Our Services</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Comprehensive digital solutions designed to help your business thrive in the modern digital landscape
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border"
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full mt-4">
                      <Link href={service.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Why Choose Oren</h2>
              <p className="text-lg text-muted-foreground">
                We combine technical expertise with creative innovation to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Expert Team",
                  description:
                    "Skilled professionals with years of experience in web development and digital solutions",
                },
                {
                  title: "Custom Solutions",
                  description: "Tailored approaches designed specifically for your business needs and goals",
                },
                {
                  title: "Proven Results",
                  description: "Track record of successful projects and satisfied clients across various industries",
                },
                {
                  title: "Ongoing Support",
                  description: "Continuous maintenance and support to ensure your digital presence stays optimal",
                },
              ].map((item, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
