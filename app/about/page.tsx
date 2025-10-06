import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Lightbulb, Users, Award, Linkedin, Twitter, Github, Heart, Users as UsersIcon, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/professional-woman-diverse.png",
    bio: "10+ years of experience in web development and digital strategy",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/professional-man.jpg",
    bio: "Full-stack architect specializing in scalable cloud solutions",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Emma Williams",
    role: "Head of Design",
    image: "/professional-woman-smiling.png",
    bio: "Award-winning designer focused on user-centered experiences",
    social: { linkedin: "#", twitter: "#" },
  },
]

const values = [
  {
    icon: Target,
    title: "Client-Focused",
    description:
      "Your success is our success. We prioritize understanding your goals and delivering solutions that exceed expectations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive advantage.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with your team, maintaining transparent communication throughout the entire project lifecycle.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We're committed to delivering high-quality work that meets the highest standards of performance and design.",
  },
]

const stats = [
  { value: "50+", label: "Projects Completed", icon: TrendingUp },
  { value: "30+", label: "Happy Clients", icon: UsersIcon },
  { value: "5+", label: "Years Experience", icon: Award },
  { value: "98%", label: "Client Satisfaction", icon: Heart },
]

const achievementItems = [
  {
    icon: TrendingUp,
    number: "50+",
    label: "Projects Completed",
    description: "Successful deliveries across various industries"
  },
  {
    icon: Heart,
    number: "98%",
    label: "Client Satisfaction",
    description: "Consistently exceeding expectations"
  },
  {
    icon: Award,
    number: "5+",
    label: "Years Experience",
    description: "Building digital solutions since 2019"
  },
  {
    icon: UsersIcon,
    number: "24/7",
    label: "Support Available",
    description: "Always here when you need us"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen lg:h-screen flex flex-col justify-center lg:justify-end lg:items-end relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="relative min-h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative py-20 lg:py-32">
              <AnimatedSection>
                <div className="max-w-4xl mx-auto text-center space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Get to know our story
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  About{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Oren
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  We're a team of passionate developers, designers, and strategists dedicated to building exceptional
                  digital experiences that drive business growth and transform ideas into reality.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button size="lg" asChild className="group">
                    <Link href="/contact">
                      Start Your Project
                      <Zap className="ms-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="bg-transparent hover:bg-primary/5">
                    <Link href="/portfolio">
                      View Our Work
                    </Link>
                  </Button>
                </div>

                {/* Our Impact in Numbers - Integrated into Hero */}
                <div className="pt-16 pb-8">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {achievementItems.map((item, index) => (
                      <AnimatedSection key={index} delay={index * 0.1}>
                        <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center group hover:bg-card/80 transition-all duration-300 h-full">
                          <CardContent className="p-4 lg:p-6">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                              <item.icon className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
                            </div>
                            <p className="text-2xl lg:text-3xl font-bold mb-1 lg:mb-2 text-foreground">
                              {item.number}
                            </p>
                            <p className="text-xs lg:text-sm font-semibold mb-1 text-muted-foreground">
                              {item.label}
                            </p>
                            <p className="text-xs text-muted-foreground/70 leading-tight">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="relative py-20 lg:py-32 bg-muted/30">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Mission & Vision
              </h2>
              <p className="text-lg text-muted-foreground">
                The driving forces that shape everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <AnimatedSection delay={0.1}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To empower businesses with innovative digital solutions that drive growth, enhance user experiences,
                      and create lasting value in an ever-evolving digital landscape. We believe in the power of technology
                      to transform businesses and improve lives.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To be the trusted partner for businesses seeking to transform their digital presence, recognized for
                      our technical excellence, creative innovation, and unwavering commitment to client success. We aspire
                      to set new standards in digital craftsmanship.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="bg-card/50 backdrop-blur-sm border-gray-200 hover:bg-card/80 transition-all duration-300 group h-full dark:bg-card dark:backdrop-blur-sm dark:border-border dark:hover:-translate-y-0.5 dark:hover:border-primary/30">
                    <CardContent className="p-8 dark:p-4 dark:lg:p-5">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 dark:w-8 dark:h-8 dark:lg:w-10 dark:lg:h-10 dark:rounded-lg dark:bg-primary/10 dark:group-hover:bg-primary/20">
                        <value.icon className="h-8 w-8 text-primary dark:w-4 dark:h-4 dark:lg:w-5 dark:lg:h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4 text-center dark:text-sm dark:lg:text-base dark:font-semibold dark:mb-2 dark:group-hover:text-primary dark:transition-colors">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-center dark:text-xs dark:lg:text-sm dark:leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="relative py-20 lg:py-32 bg-muted/30">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground">
                Talented professionals passionate about creating exceptional digital experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="bg-card/50 backdrop-blur-sm border-gray-200 overflow-hidden group hover:bg-card/80 transition-all duration-300 dark:bg-card dark:backdrop-blur-sm dark:border-border dark:hover:-translate-y-0.5 dark:hover:border-primary/30">
                    <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Social Links Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-3">
                          {member.social.linkedin && (
                            <Button size="icon" variant="secondary" asChild className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background">
                              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-5 w-5" />
                              </a>
                            </Button>
                          )}
                          {member.social.twitter && (
                            <Button size="icon" variant="secondary" asChild className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background">
                              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                                <Twitter className="h-5 w-5" />
                              </a>
                            </Button>
                          )}
                          {member.social.github && (
                            <Button size="icon" variant="secondary" asChild className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background">
                              <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-5 w-5" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                      <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                    Ready to Work Together?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Let's discuss your project and see how we can help bring your vision to life with our expertise
                    in web development, design, and digital strategy.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button size="lg" asChild className="group">
                    <Link href="/contact">
                      Start Your Project
                      <Zap className="ms-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="bg-transparent hover:bg-primary/5">
                    <Link href="/portfolio">
                      View Our Portfolio
                    </Link>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Available for new projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Quick turnaround</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
