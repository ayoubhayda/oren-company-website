"use client"

import { useEffect, useRef, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Lightbulb, Users, Award, Linkedin, Twitter, Github, Heart, Users as UsersIcon, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"
import { useLanguage } from "@/components/language-provider"
import SectionSeparator from "@/components/general/SectionSeparator"
import MinimalSectionSeparator from "@/components/general/MinimalSectionSeparator"
import { HeroSectionBackground } from "@/components/animations/HeroSectionBackground"

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/professional-woman-diverse.png",
    bio: "10+ years of experience in web development and digital strategy",
    social: { linkedin: "#", twitter: "#" },
    key: "ceo",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/professional-man.jpg",
    bio: "Full-stack architect specializing in scalable cloud solutions",
    social: { linkedin: "#", github: "#" },
    key: "cto",
  },
  {
    name: "Emma Williams",
    role: "Head of Design",
    image: "/professional-woman-smiling.png",
    bio: "Award-winning designer focused on user-centered experiences",
    social: { linkedin: "#", twitter: "#" },
    key: "design",
  },
]

const values = [
  {
    icon: Target,
    key: "client",
  },
  {
    icon: Lightbulb,
    key: "innovation",
  },
  {
    icon: Users,
    key: "collaboration",
  },
  {
    icon: Award,
    key: "excellence",
  },
]

export default function AboutPage() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Interactive Digital Experience */}
        <section className="relative overflow-hidden py-18 lg:py-22 bg-gradient-to-b from-background via-background to-primary/10" id="hero-section">
          {/* Hero Section Background Component */}
          <HeroSectionBackground />

          {/* ===== CONTENT ===== */}
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* digital crumbs */}
              <div className="mx-auto mb-8 flex w-full max-w-[320px] items-center justify-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#0069FF]/60" />
                <div className="h-2 w-2 rounded-full bg-[#0069FF]" />
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#00BFFF]/60" />
              </div>

              <h1 className="mx-auto max-w-5xl text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
                Discover Our Story &
                <span className="relative mt-2 block text-transparent bg-clip-text bg-gradient-to-r from-[#0069FF] to-[#00BFFF]">
                  Values
                </span>
              </h1>

              <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-[#0069FF]/70" />
                Learn more about us below
                <span className="h-1 w-1 rounded-full bg-[#0069FF]/70" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="relative py-20">
          {/* Minimal Section Separator - positioned at intersection */}
          <div className="absolute -top-12 left-0 right-0 z-10">
            <MinimalSectionSeparator />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">
                  {t("about.mission.badge")}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t("about.vision.subtitle")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("about.vision.intro")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <AnimatedSection delay={0.1}>
                <Card className="group transition-all duration-300 border-border flex flex-col justify-between h-full hover:border-primary/30 hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />

                  <div className="relative flex flex-col gap-5">
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start gap-6 mb-2">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Target className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-4">{t("about.mission.title")}</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {t("about.mission.description")}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Card className="group transition-all duration-300 border-border flex flex-col justify-between h-full hover:border-primary/30 hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />

                  <div className="relative flex flex-col gap-5">
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start gap-6 mb-2">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Zap className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-4">{t("about.vision.title")}</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {t("about.vision.description")}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </AnimatedSection>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-primary"></div>
                <span>{t("about.mission.cta")}</span>
                <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* Values */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">
                  {t("about.values.badge")}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">{t("about.values.title")}</h2>
              <p className="text-lg text-muted-foreground">{t("about.values.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="group transition-all duration-300 border-border flex flex-col justify-between h-full hover:border-primary/30 hover:-translate-y-1">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />

                    <div className="relative flex flex-col gap-5">
                      <CardContent className="p-8">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                          <value.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4 text-center">{t(`about.values.${value.key}.title`)}</h3>
                        <p className="text-muted-foreground leading-relaxed text-center">{t(`about.values.${value.key}.description`)}</p>
                      </CardContent>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-primary"></div>
                <span>{t("about.values.cta")}</span>
                <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* Team */}
        <section className="py-20">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">
                  {t("about.team.badge")}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">{t("about.team.title")}</h2>
              <p className="text-lg text-muted-foreground">
                {t("about.team.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="group transition-all duration-300 border-border flex flex-col justify-between h-full hover:border-primary/30 hover:-translate-y-1">
                    <div className="relative flex flex-col gap-5">
                      <CardContent className="p-8 text-center">
                        {/* Avatar placeholder */}
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                          <UsersIcon className="h-10 w-10 text-primary" />
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                        <p className="text-sm text-primary font-medium mb-3">{t(`about.team.${member.key}.role`)}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{t(`about.team.${member.key}.bio`)}</p>

                        {/* Social Links */}
                        <div className="flex justify-center gap-3 mt-6">
                          {member.social.linkedin && (
                            <Button size="icon" variant="outline" asChild className="h-10 w-10 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          {member.social.twitter && (
                            <Button size="icon" variant="outline" asChild className="h-10 w-10 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                              <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                                <Twitter className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          {member.social.github && (
                            <Button size="icon" variant="outline" asChild className="h-10 w-10 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                              <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-primary"></div>
                <span>{t("about.team.cta")}</span>
                <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* CTA */}
        <section className="py-20">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                    {t("about.cta.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {t("about.cta.subtitle")}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button size="lg" asChild className="group">
                    <Link href="/contact">
                      {t("about.cta.primary")}
                      <Zap className="ms-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="bg-transparent hover:bg-primary/5">
                    <Link href="/portfolio">
                      {t("about.cta.secondary")}
                    </Link>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>{t("about.trust.available")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>{t("about.trust.consultation")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>{t("about.trust.turnaround")}</span>
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
