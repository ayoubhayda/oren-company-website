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
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"

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
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">{t("contact.title")}</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">{t("contact.description")}</p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">{t("contact.contactInfo")}</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">{t("contact.email")}</p>
                        <a
                          href="mailto:hello@oren.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          hello@oren.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">{t("contact.phone")}</p>
                        <a
                          href="tel:+1234567890"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground mb-1">{t("contact.office")}</p>
                        <p className="text-muted-foreground">
                          123 Business Street
                          <br />
                          Suite 100
                          <br />
                          City, State 12345
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="border-border bg-primary/5">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-2">{t("contact.businessHours")}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>{t("contact.weekdays")}</p>
                      <p>{t("contact.saturday")}</p>
                      <p>{t("contact.sunday")}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-border">
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            {t("contact.form.name")} <span className="text-destructive">*</span>
                          </Label>
                          <Input id="name" name="name" placeholder={t("contact.form.namePlaceholder")} required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company">{t("contact.form.company")}</Label>
                          <Input id="company" name="company" placeholder={t("contact.form.companyPlaceholder")} />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            {t("contact.form.email")} <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder={t("contact.form.emailPlaceholder")}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                          <Input id="phone" name="phone" type="tel" placeholder={t("contact.form.phonePlaceholder")} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">{t("contact.form.service")}</Label>
                        <Select name="service">
                          <SelectTrigger id="service">
                            <SelectValue placeholder={t("contact.form.servicePlaceholder")} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web-development">{t("contact.form.services.webDev")}</SelectItem>
                            <SelectItem value="custom-platforms">
                              {t("contact.form.services.customPlatforms")}
                            </SelectItem>
                            <SelectItem value="ecommerce">{t("contact.form.services.ecommerce")}</SelectItem>
                            <SelectItem value="digital-marketing">
                              {t("contact.form.services.digitalMarketing")}
                            </SelectItem>
                            <SelectItem value="social-media">{t("contact.form.services.socialMedia")}</SelectItem>
                            <SelectItem value="design">{t("contact.form.services.design")}</SelectItem>
                            <SelectItem value="other">{t("contact.form.services.other")}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">{t("contact.form.budget")}</Label>
                        <Select name="budget">
                          <SelectTrigger id="budget">
                            <SelectValue placeholder={t("contact.form.budgetPlaceholder")} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5k-10k">{t("contact.form.budgetRanges.range1")}</SelectItem>
                            <SelectItem value="10k-25k">{t("contact.form.budgetRanges.range2")}</SelectItem>
                            <SelectItem value="25k-50k">{t("contact.form.budgetRanges.range3")}</SelectItem>
                            <SelectItem value="50k+">{t("contact.form.budgetRanges.range4")}</SelectItem>
                            <SelectItem value="not-sure">{t("contact.form.budgetRanges.notSure")}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          {t("contact.form.message")} <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder={t("contact.form.messagePlaceholder")}
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || isSubmitted}>
                        {isSubmitting ? (
                          t("contact.form.sending")
                        ) : isSubmitted ? (
                          t("contact.form.sent")
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            {t("contact.form.submit")}
                          </>
                        )}
                      </Button>

                      {isSubmitted && (
                        <p className="text-sm text-center text-green-600 dark:text-green-400">
                          {t("contact.form.successMessage")}
                        </p>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
