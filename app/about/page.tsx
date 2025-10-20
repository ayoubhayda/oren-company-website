"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Lightbulb, Users, Award, Linkedin, Twitter, Github, Users as UsersIcon, Zap } from "lucide-react"
import Link from "next/link"
import { StaggerContainer, StaggerItem } from "@/components/animated-section"
import { useLanguage } from "@/components/language-provider"
import SectionSeparator from "@/components/general/SectionSeparator"
import { motion } from "framer-motion"

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
        {/* Mission & Vision */}
        <section className="relative py-20 pt-28 sm:pt-32">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Section Header */}
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Header Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                >
                  <Target className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-primary font-medium text-sm">
                  {t("about.mission.badge")}
                </span>
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t("about.vision.subtitle")}
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t("about.vision.intro")}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="relative overflow-hidden border-border flex flex-col justify-between h-full transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                  {/* Animated gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative flex flex-col gap-5">
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start gap-6 mb-2">
                        <motion.div
                          className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center transition-colors duration-300"
                          whileHover={{ backgroundColor: "rgb(0 105 255 / 0.2)", scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div
                            whileHover={{ rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Target className="h-6 w-6 text-primary" />
                          </motion.div>
                        </motion.div>
                        <div className="flex-1">
                          <motion.h3
                            className="text-2xl font-bold text-foreground mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          >
                            {t("about.mission.title")}
                          </motion.h3>
                          <motion.p
                            className="text-muted-foreground leading-relaxed"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                          >
                            {t("about.mission.description")}
                          </motion.p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="relative overflow-hidden border-border flex flex-col justify-between h-full transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                  {/* Animated gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative flex flex-col gap-5">
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start gap-6 mb-2">
                        <motion.div
                          className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center transition-colors duration-300"
                          whileHover={{ backgroundColor: "rgb(0 105 255 / 0.2)", scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div
                            whileHover={{ rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Zap className="h-6 w-6 text-primary" />
                          </motion.div>
                        </motion.div>
                        <div className="flex-1">
                          <motion.h3
                            className="text-2xl font-bold text-foreground mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            {t("about.vision.title")}
                          </motion.h3>
                          <motion.p
                            className="text-muted-foreground leading-relaxed"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                          >
                            {t("about.vision.description")}
                          </motion.p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
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
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Header Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                >
                  <Award className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-primary font-medium text-sm">
                  {t("about.values.badge")}
                </span>
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t("about.values.title")}
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t("about.values.subtitle")}
              </motion.p>
            </motion.div>

            <StaggerContainer className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="group h-full"
                    >
                      <Card className="relative overflow-hidden border-border flex flex-col justify-between h-full transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                        {/* Animated gradient overlay on hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 pointer-events-none"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />

                        <div className="relative flex flex-col gap-5">
                          <CardContent className="p-8">
                            <motion.div
                              className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6 transition-colors duration-300"
                              whileHover={{ backgroundColor: "rgb(0 105 255 / 0.2)", scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <motion.div
                                whileHover={{ rotate: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <value.icon className="h-6 w-6 text-primary" />
                              </motion.div>
                            </motion.div>
                            <motion.h3
                              className="text-xl font-bold text-foreground mb-4 text-center"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.1 }}
                            >
                              {t(`about.values.${value.key}.title`)}
                            </motion.h3>
                            <motion.p
                              className="text-muted-foreground leading-relaxed text-center"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                            >
                              {t(`about.values.${value.key}.description`)}
                            </motion.p>
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

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
        {/* <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                >
                  <Users className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-primary font-medium text-sm">
                  {t("about.team.badge")}
                </span>
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t("about.team.title")}
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t("about.team.subtitle")}
              </motion.p>
            </motion.div>

            <StaggerContainer className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="group h-full"
                    >
                      <Card className="relative overflow-hidden border-border flex flex-col justify-between h-full transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                        <div className="relative flex flex-col gap-5">
                          <CardContent className="p-8 text-center">
                            <motion.div
                              className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 transition-colors duration-300"
                              whileHover={{ backgroundColor: "rgb(0 105 255 / 0.2)", scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <motion.div
                                whileHover={{ rotate: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <UsersIcon className="h-10 w-10 text-primary" />
                              </motion.div>
                            </motion.div>

                            <motion.h3
                              className="text-xl font-bold text-foreground mb-1"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.1 }}
                            >
                              {member.name}
                            </motion.h3>
                            <motion.p
                              className="text-sm text-primary font-medium mb-3"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                            >
                              {t(`about.team.${member.key}.role`)}
                            </motion.p>
                            <motion.p
                              className="text-sm text-muted-foreground leading-relaxed"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.3 }}
                            >
                              {t(`about.team.${member.key}.bio`)}
                            </motion.p>

                            
                            <motion.div
                              className="flex justify-center gap-3 mt-6"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.4 }}
                            >
                              {member.social.linkedin && (
                                <motion.div
                                  whileHover={{ scale: 1.1, y: -2 }}
                                  whileTap={{ scale: 0.9 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Button size="icon" variant="outline" asChild className="h-10 w-10 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                                      <Linkedin className="h-4 w-4" />
                                    </a>
                                  </Button>
                                </motion.div>
                              )}
                              {member.social.twitter && (
                                <motion.div
                                  whileHover={{ scale: 1.1, y: -2 }}
                                  whileTap={{ scale: 0.9 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Button size="icon" variant="outline" asChild className="h-10 w-10 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                                      <Twitter className="h-4 w-4" />
                                    </a>
                                  </Button>
                                </motion.div>
                              )}
                              {member.social.github && (
                                <motion.div
                                  whileHover={{ scale: 1.1, y: -2 }}
                                  whileTap={{ scale: 0.9 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Button size="icon" variant="outline" asChild className="h-10 w-10 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                                    <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                                      <Github className="h-4 w-4" />
                                    </a>
                                  </Button>
                                </motion.div>
                              )}
                            </motion.div>
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-primary"></div>
                <span>{t("about.team.cta")}</span>
                <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </div>
          </div>
        </section>

        <SectionSeparator /> */}

        {/* CTA */}
        <section className="py-20">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              className="max-w-4xl mx-auto text-center space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="space-y-4">
                <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {t("about.cta.title")}
                </motion.h2>
                <motion.p
                  className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {t("about.cta.subtitle")}
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button size="lg" asChild className="group">
                    <Link href="/contact">
                      <motion.span
                        className="flex items-center gap-2"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {t("about.cta.primary")}
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Zap className="h-4 w-4" />
                        </motion.div>
                      </motion.span>
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button size="lg" variant="outline" asChild className="bg-transparent hover:bg-primary/5">
                    <Link href="/portfolio">
                      {t("about.cta.secondary")}
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span>{t("about.trust.available")}</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  />
                  <span>{t("about.trust.consultation")}</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-blue-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  />
                  <span>{t("about.trust.turnaround")}</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
