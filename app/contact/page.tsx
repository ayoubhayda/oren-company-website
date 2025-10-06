"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Zap } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"

export default function ContactPage() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      ;(e.target as HTMLFormElement).reset()
    }, 3000)
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
{t("contact.hero.badge")}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  {t("contact.hero.title").split(" ")[0]}{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    {t("contact.hero.title").split(" ")[1]}
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  {t("contact.hero.subtitle")}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button size="lg" asChild className="group">
                    <a href="mailto:hello@oren.com">
                      <Mail className="ms-2 h-4 w-4" />
                      {t("contact.hero.cta.email")}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="bg-transparent hover:bg-primary/5">
                    <a href="tel:+1234567890">
                      <Phone className="ms-2 h-4 w-4" />
                      {t("contact.hero.cta.call")}
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="relative py-20 lg:py-32 bg-muted/30">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <AnimatedSection delay={0.1}>
                  <div className="max-w-md mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold text-foreground mb-8">{t("contact.info.title")}</h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {t("contact.info.subtitle")}
                    </p>

                    <div className="space-y-6">
                      <div className="group">
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-gray-200 hover:bg-card/80 transition-all duration-300 dark:bg-card dark:backdrop-blur-sm dark:border-border dark:hover:-translate-y-0.5 dark:hover:border-primary/30">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors dark:w-8 dark:h-8 dark:lg:w-10 dark:lg:h-10 dark:rounded-lg">
                            <Mail className="h-6 w-6 text-primary dark:w-4 dark:h-4 dark:lg:w-5 dark:lg:h-5" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground mb-1">{t("contact.info.emailLabel")}</p>
                            <a
                              href="mailto:hello@oren.com"
                              className="text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                              hello@oren.com
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="group">
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-gray-200 hover:bg-card/80 transition-all duration-300 dark:bg-card dark:backdrop-blur-sm dark:border-border dark:hover:-translate-y-0.5 dark:hover:border-primary/30">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors dark:w-8 dark:h-8 dark:lg:w-10 dark:lg:h-10 dark:rounded-lg">
                            <Phone className="h-6 w-6 text-primary dark:w-4 dark:h-4 dark:lg:w-5 dark:lg:h-5" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground mb-1">{t("contact.info.phoneLabel")}</p>
                            <a
                              href="tel:+1234567890"
                              className="text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                              +1 (234) 567-890
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="group">
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-gray-200 hover:bg-card/80 transition-all duration-300 dark:bg-card dark:backdrop-blur-sm dark:border-border dark:hover:-translate-y-0.5 dark:hover:border-primary/30">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors dark:w-8 dark:h-8 dark:lg:w-10 dark:lg:h-10 dark:rounded-lg">
                            <MapPin className="h-6 w-6 text-primary dark:w-4 dark:h-4 dark:lg:w-5 dark:lg:h-5" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground mb-1">{t("contact.info.officeLabel")}</p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              123 Business Street<br />
                              Suite 100<br />
                              City, State 12345
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <Card className="bg-card/50 backdrop-blur-sm border-gray-200 max-w-md mx-auto lg:mx-0 dark:bg-card dark:backdrop-blur-sm dark:border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center dark:w-8 dark:h-8 dark:lg:w-10 dark:lg:h-10 dark:rounded-lg">
                          <Clock className="h-5 w-5 text-primary dark:w-4 dark:h-4 dark:lg:w-5 dark:lg:h-5" />
                        </div>
                        <h3 className="font-semibold text-foreground">{t("contact.hours.title")}</h3>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">{t("contact.hours.mondayFriday")}</span>
                          <span className="text-foreground font-medium">{t("contact.hours.mondayFridayTime")}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">{t("contact.hours.saturday")}</span>
                          <span className="text-foreground font-medium">{t("contact.hours.saturdayTime")}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">{t("contact.hours.sunday")}</span>
                          <span className="text-foreground font-medium">{t("contact.hours.sundayTime")}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <AnimatedSection delay={0.3}>
                  <Card className="bg-card/50 backdrop-blur-sm border-gray-200 h-full dark:bg-card dark:backdrop-blur-sm dark:border-border">
                    <CardContent className="p-8 lg:p-10">
                      <div className="mb-8">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center dark:w-8 dark:h-8 dark:lg:w-10 dark:lg:h-10 dark:rounded-lg">
                            <MessageCircle className="h-6 w-6 text-primary dark:w-4 dark:h-4 dark:lg:w-5 dark:lg:h-5" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">{t("contact.form.title")}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {t("contact.form.subtitle")}
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-medium text-foreground">
                              {t("contact.form.name")} <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder={t("contact.form.namePlaceholder")}
                              className="bg-background/50 border-gray-200 focus:outline-none focus:border-primary focus:ring-0 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-background dark:border-border dark:focus:border-primary"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="company" className="text-sm font-medium text-foreground">
                              {t("contact.form.company")}
                            </Label>
                            <Input
                              id="company"
                              name="company"
                              placeholder={t("contact.form.companyPlaceholder")}
                              className="bg-background/50 border-gray-200 focus:outline-none focus:border-primary focus:ring-0 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-background dark:border-border dark:focus:border-primary"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium text-foreground">
                              {t("contact.form.email")} <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder={t("contact.form.emailPlaceholder")}
                              className="bg-background/50 border-gray-200 focus:outline-none focus:border-primary focus:ring-0 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-background dark:border-border dark:focus:border-primary"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                              {t("contact.form.phone")}
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder={t("contact.form.phonePlaceholder")}
                              className="bg-background/50 border-gray-200 focus:outline-none focus:border-primary focus:ring-0 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-background dark:border-border dark:focus:border-primary"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="service" className="text-sm font-medium text-foreground">
                              {t("contact.form.service")}
                            </Label>
                            <Select name="service">
                              <SelectTrigger id="service" className="w-full bg-background/50 border-gray-200 focus:outline-none focus:border-primary focus:ring-0 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-background dark:border-border dark:focus:border-primary">
                                <SelectValue placeholder={t("contact.form.servicePlaceholder")} />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="web-development">{t("contact.form.services.webdev")}</SelectItem>
                                <SelectItem value="custom-platforms">{t("contact.form.services.platforms")}</SelectItem>
                                <SelectItem value="ecommerce">{t("contact.form.services.ecommerce")}</SelectItem>
                                <SelectItem value="digital-marketing">{t("contact.form.services.marketing")}</SelectItem>
                                <SelectItem value="social-media">{t("contact.form.services.social")}</SelectItem>
                                <SelectItem value="design">{t("contact.form.services.design")}</SelectItem>
                                <SelectItem value="other">{t("contact.form.services.other")}</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="budget" className="text-sm font-medium text-foreground">
                              {t("contact.form.budget")}
                            </Label>
                            <Select name="budget">
                              <SelectTrigger id="budget" className="w-full bg-background/50 border-gray-200 focus:outline-none focus:border-primary focus:ring-0 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-background dark:border-border dark:focus:border-primary">
                                <SelectValue placeholder={t("contact.form.budgetPlaceholder")} />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="5k-10k">{t("contact.form.budgets.5k10k")}</SelectItem>
                                <SelectItem value="10k-25k">{t("contact.form.budgets.10k25k")}</SelectItem>
                                <SelectItem value="25k-50k">{t("contact.form.budgets.25k50k")}</SelectItem>
                                <SelectItem value="50k+">{t("contact.form.budgets.50k")}</SelectItem>
                                <SelectItem value="not-sure">{t("contact.form.budgets.unsure")}</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-sm font-medium text-foreground">
                            {t("contact.form.message")} <span className="text-destructive">*</span>
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder={t("contact.form.messagePlaceholder")}
                            rows={6}
                            className="bg-background/50 border-gray-200 focus:outline-none focus:border-primary focus:ring-0 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 resize-none dark:bg-background dark:border-border dark:focus:border-primary"
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full group"
                          disabled={isSubmitting || isSubmitted}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                              {t("contact.form.sending")}
                            </>
                          ) : isSubmitted ? (
                            <>
                              <div className="w-4 h-4 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              {t("contact.form.sent")}
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              {t("contact.form.send")}
                              <Zap className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </>
                          )}
                        </Button>

                        {isSubmitted && (
                          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                            <p className="text-sm text-center text-green-800 dark:text-green-200">
                              {t("contact.form.success")}
                            </p>
                          </div>
                        )}
                      </form>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
