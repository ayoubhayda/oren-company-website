import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Lightbulb, Users, Award, Linkedin, Twitter, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">About Oren</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                We're a team of passionate developers, designers, and strategists dedicated to building exceptional
                digital experiences that drive business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</p>
                  <p className="text-sm sm:text-base text-primary-foreground/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth, enhance user experiences,
                  and create lasting value in an ever-evolving digital landscape.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the trusted partner for businesses seeking to transform their digital presence, recognized for
                  our technical excellence, creative innovation, and commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-border text-center">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground">
                Talented professionals passionate about creating exceptional digital experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="border-border overflow-hidden group">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="pt-6 text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                    <div className="flex justify-center gap-2">
                      {member.social.linkedin && (
                        <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {member.social.twitter && (
                        <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {member.social.github && (
                        <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                          <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Join Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for creating exceptional digital
                experiences.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
