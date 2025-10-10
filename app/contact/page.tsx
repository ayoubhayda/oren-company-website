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
import {
  Mail,
  Phone,
  Send,
  Clock,
  MessageCircle,
  Zap,
  MapPin,
  Linkedin,
  Instagram,
  MessageSquare
} from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { AnimatedSection } from "@/components/animated-section"
import SectionSeparator from "@/components/general/SectionSeparator"
import MinimalSectionSeparator from "@/components/general/MinimalSectionSeparator"

export default function ContactPage() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      ;(e.target as HTMLFormElement).reset()
    }, 3000)
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        

        <section className="relative overflow-hidden pt-28 sm:pt-32 ">
          <div className=" relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                <MessageSquare className="w-4 h-4 text-primary" />
                {t("contact.hero.badge")}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t("contact.hero.title")}
                <span className="block">
                  {t("contact.hero.title.highlight")}
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("contact.hero.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {/* Left: Info */}
              <div className="lg:col-span-1 space-y-8">
                <AnimatedSection delay={0.1}>
                  <div className="max-w-md mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold text-foreground mb-8">{t("contact.info.title")}</h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {t("contact.info.subtitle")}
                    </p>

                    <div className="space-y-6">
                      {/* Email */}
                      <div className="group">
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-gray-200 hover:bg-card/80 transition-all duration-300 dark:bg-card dark:border-border dark:hover:border-primary/30">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <Mail className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground mb-1">{t("contact.info.emailLabel")}</p>
                            <a
                              href="mailto:hello@auren.agency"
                              className="text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                              hello@auren.agency
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Phone / WhatsApp */}
                      <div className="group">
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-gray-200 hover:bg-card/80 transition-all duration-300 dark:bg-card dark:border-border dark:hover:border-primary/30">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <Phone className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground mb-1">{t("contact.info.phoneLabel")}</p>
                            <a
                              href="tel:+212666666666"
                              className="text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                              +212 6 66 66 66 66
                            </a>
                            <p className="text-xs text-muted-foreground mt-1">
                              {t("contact.info.responseTime")}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Remote-first Location */}
                      <div className="group">
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-gray-200 hover:bg-card/80 transition-all duration-300 dark:bg-card dark:border-border dark:hover:border-primary/30">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <MapPin className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground mb-1">{t("contact.info.locationLabel")}</p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {t("contact.info.locationDescription")}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Availability (flexible) */}
                      <div className="group">
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-gray-200 hover:bg-card/80 transition-all duration-300 dark:bg-card dark:border-border dark:hover:border-primary/30">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <Clock className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground mb-1">{t("contact.info.availabilityLabel")}</p>
                            <p className="text-muted-foreground text-sm">
                              {t("contact.info.availabilityDescription")}
                            </p>
                          </div>
                        </div>
                      </div>

                       {/* Socials */}
                       <div className="flex items-center justify-center gap-6 pt-4">
                         <a
                           href="https://www.linkedin.com/"
                           target="_blank"
                           rel="noreferrer"
                           aria-label={t("contact.social.linkedin")}
                           className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 hover:border-primary hover:text-primary transition-colors dark:border-border"
                         >
                           <Linkedin className="w-6 h-6" />
                         </a>
                         <a
                           href="https://www.instagram.com/"
                           target="_blank"
                           rel="noreferrer"
                           aria-label={t("contact.social.instagram")}
                           className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 hover:border-primary hover:text-primary transition-colors dark:border-border"
                         >
                           <Instagram className="w-6 h-6" />
                         </a>
                       </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-2">
                <AnimatedSection delay={0.3}>
                  <Card className="bg-card/50 backdrop-blur-sm border-gray-200 h-full dark:bg-card dark:border-border">
                    <CardContent className="p-8 lg:p-10">
                      <div className="mb-8">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <MessageCircle className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">{t("contact.form.title")}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {t("contact.form.subtitle")}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {t("contact.form.responseTime")}
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
                              className="bg-background/50 border-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/30 dark:bg-card/50 dark:border-border"
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
                              className="bg-background/50 border-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/30 dark:bg-card/50 dark:border-border"
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
                              className="bg-background/50 border-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/30 dark:bg-card/50 dark:border-border"
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
                              className="bg-background/50 border-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/30 dark:bg-card/50 dark:border-border"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="service" className="text-sm font-medium text-foreground">
                              {t("contact.form.service")}
                            </Label>
                            <Select name="service">
                              <SelectTrigger id="service" className="w-full bg-background/50 border-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/30 dark:bg-card/50 dark:border-border">
                                <SelectValue placeholder={t("contact.form.servicePlaceholder")} />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="web-development">{t("contact.form.services.webdev")}</SelectItem>
                                <SelectItem value="custom-platforms">{t("contact.form.services.platforms")}</SelectItem>
                                <SelectItem value="ecommerce">{t("contact.form.services.ecommerce")}</SelectItem>
                                <SelectItem value="digital-marketing">{t("contact.form.services.marketing")}</SelectItem>
                                <SelectItem value="other">{t("contact.form.services.other")}</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="budget" className="text-sm font-medium text-foreground">
                              {t("contact.form.budget")}
                            </Label>
                            <Select name="budget">
                              <SelectTrigger id="budget" className="w-full bg-background/50 border-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/30 dark:bg-card/50 dark:border-border">
                                <SelectValue placeholder={t("contact.form.budgetPlaceholder")} />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="under-500">{t("contact.form.budgets.under500")}</SelectItem>
                                <SelectItem value="500-2k">{t("contact.form.budgets.5002k")}</SelectItem>
                                <SelectItem value="2k-8k">{t("contact.form.budgets.2k8k")}</SelectItem>
                                <SelectItem value="8k-15k">{t("contact.form.budgets.8k15k")}</SelectItem>
                                <SelectItem value="15k+">{t("contact.form.budgets.15k")}</SelectItem>
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
                            className="bg-background/50 border-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/30 resize-none dark:bg-card/50 dark:border-border"
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
