import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Zap, Shield, Search, Globe } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="mb-4">Web Development</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                Professional Web Development Services
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Build fast, secure, and scalable websites that deliver exceptional user experiences and drive business
                growth
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View Examples</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">What You Get</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive web development solutions tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Code,
                  title: "Clean Code",
                  description: "Well-structured, maintainable code following industry best practices and standards",
                },
                {
                  icon: Smartphone,
                  title: "Responsive Design",
                  description: "Websites that look and work perfectly on all devices, from mobile to desktop",
                },
                {
                  icon: Zap,
                  title: "Fast Performance",
                  description: "Optimized for speed with lightning-fast load times and smooth interactions",
                },
                {
                  icon: Shield,
                  title: "Security First",
                  description: "Built with security in mind, protecting your data and your users",
                },
                {
                  icon: Search,
                  title: "SEO Optimized",
                  description: "Search engine friendly structure to help your site rank higher in results",
                },
                {
                  icon: Globe,
                  title: "Cross-Browser",
                  description: "Compatible with all major browsers for maximum reach and accessibility",
                },
              ].map((feature, index) => (
                <Card key={index} className="border-border">
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

        {/* Technologies */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Technologies We Use</h2>
              <p className="text-lg text-muted-foreground">Modern tools and frameworks for cutting-edge solutions</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "MongoDB", "AWS"].map(
                  (tech, index) => (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                    >
                      <p className="font-semibold text-foreground">{tech}</p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Process</h2>
              <p className="text-lg text-muted-foreground">
                A structured approach to deliver your project on time and on budget
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  description:
                    "We start by understanding your business goals, target audience, and project requirements to create a detailed roadmap.",
                },
                {
                  step: "02",
                  title: "Design & Prototyping",
                  description:
                    "Our designers create wireframes and mockups to visualize the final product before development begins.",
                },
                {
                  step: "03",
                  title: "Development",
                  description:
                    "We build your website using modern technologies, following best practices and maintaining clear communication.",
                },
                {
                  step: "04",
                  title: "Testing & QA",
                  description:
                    "Rigorous testing across devices and browsers to ensure everything works flawlessly before launch.",
                },
                {
                  step: "05",
                  title: "Launch & Support",
                  description:
                    "We deploy your website and provide ongoing support to keep it running smoothly and up-to-date.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">Common questions about our web development services</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    How long does it take to build a website?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    The timeline varies depending on the project scope and complexity. A simple website typically takes
                    4-6 weeks, while more complex applications can take 3-6 months. We'll provide a detailed timeline
                    during the planning phase.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    What is the cost of web development?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Costs vary based on project requirements, features, and complexity. We offer flexible pricing models
                    and will provide a detailed quote after understanding your specific needs. Contact us for a free
                    consultation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Do you provide ongoing maintenance?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we offer comprehensive maintenance and support packages to keep your website secure, updated,
                    and running smoothly. This includes regular updates, security patches, and technical support.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Will my website be mobile-friendly?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    All our websites are built with a mobile-first approach, ensuring they look and function perfectly
                    on all devices, from smartphones to tablets to desktop computers.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">Can you help with SEO?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we build all websites with SEO best practices in mind, including proper structure, meta tags,
                    and performance optimization. We also offer dedicated SEO services for ongoing optimization and
                    ranking improvements.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-2xl p-12 text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">Ready to Build Your Website?</h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Let's discuss your project and create a website that helps your business succeed online.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link href="/portfolio">View Our Work</Link>
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
