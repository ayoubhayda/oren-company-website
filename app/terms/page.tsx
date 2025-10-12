"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Scale,
  Mail,
  ArrowRight,
  ArrowLeft,
  Calendar,
  FileText
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { useLanguage } from "@/components/language-provider"
import SectionSeparator from "@/components/general/SectionSeparator"

export default function TermsPage() {
  const { language } = useLanguage()
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative sm:py-20 pt-28 sm:pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Scale className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm tracking-wide">
                  {t("terms.hero.badge")}
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  {t("terms.hero.title")}
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {t("terms.hero.subtitle")}
                </p>
              </div>

              {/* Last Updated */}
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{t("terms.hero.lastUpdated.date")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>{t("terms.hero.lastUpdated.version")}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <AnimatedSection>
                <div className="space-y-12">
                  {/* Agreement to Terms */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("terms.agreement.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("terms.agreement.content")}
                      </p>
                      <p>
                        {t("terms.agreement.binding")}
                      </p>
                    </div>
                  </div>

                  {/* Services Description */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("terms.services.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("terms.services.content")}
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>{t("terms.services.web")}</li>
                        <li>{t("terms.services.ecommerce")}</li>
                        <li>{t("terms.services.custom")}</li>
                        <li>{t("terms.services.marketing")}</li>
                        <li>{t("terms.services.maintenance")}</li>
                        <li>{t("terms.services.consulting")}</li>
                      </ul>
                      <p>
                        {t("terms.services.scope")}
                      </p>
                    </div>
                  </div>

                  {/* Intellectual Property Rights */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("terms.ip.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("terms.ip.content")}
                      </p>
                      <div className="space-y-4">
                        <div>
                          <strong>{t("terms.ip.client.title")}</strong>
                          <p className="mt-2">
                            {t("terms.ip.client.desc")}
                          </p>
                        </div>
                        <div>
                          <strong>{t("terms.ip.oren.title")}</strong>
                          <p className="mt-2">
                            {t("terms.ip.oren.desc")}
                          </p>
                        </div>
                        <div>
                          <strong>{t("terms.ip.license.title")}</strong>
                          <p className="mt-2">
                            {t("terms.ip.license.desc")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Terms */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("terms.payment.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("terms.payment.content")}
                      </p>
                      <div className="space-y-4">
                        <div>
                          <strong>{t("terms.payment.deposit.title")}</strong>
                          <p className="mt-2">
                            {t("terms.payment.deposit.desc")}
                          </p>
                        </div>
                        <div>
                          <strong>{t("terms.payment.milestone.title")}</strong>
                          <p className="mt-2">
                            {t("terms.payment.milestone.desc")}
                          </p>
                        </div>
                        <div>
                          <strong>{t("terms.payment.final.title")}</strong>
                          <p className="mt-2">
                            {t("terms.payment.final.desc")}
                          </p>
                        </div>
                        <div>
                          <strong>{t("terms.payment.late.title")}</strong>
                          <p className="mt-2">
                            {t("terms.payment.late.desc")}
                          </p>
                        </div>
                      </div>
                      <p>
                        {t("terms.payment.methods")}
                      </p>
                    </div>
                  </div>

                  {/* Project Timelines */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("terms.timeline.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("terms.timeline.content")}
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>{t("terms.timeline.estimation")}</li>
                        <li>{t("terms.timeline.delays")}</li>
                        <li>{t("terms.timeline.communication")}</li>
                        <li>{t("terms.timeline.client")}</li>
                      </ul>
                      <p>
                        {t("terms.timeline.force")}
                      </p>
                    </div>
                  </div>

                  {/* Warranties and Disclaimers */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("terms.warranties.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("terms.warranties.content")}
                      </p>
                      <div className="space-y-4">
                        <div>
                          <strong>{t("terms.warranties.service.title")}</strong>
                          <p className="mt-2">
                            {t("terms.warranties.service.desc")}
                          </p>
                        </div>
                        <div>
                          <strong>{t("terms.warranties.no_warranty.title")}</strong>
                          <p className="mt-2">
                            {t("terms.warranties.no_warranty.desc")}
                          </p>
                        </div>
                        <div>
                          <strong>{t("terms.warranties.third_party.title")}</strong>
                          <p className="mt-2">
                            {t("terms.warranties.third_party.desc")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Limitation of Liability */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("terms.liability.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("terms.liability.content")}
                      </p>
                      <p>
                        {t("terms.liability.exclusion")}
                      </p>
                    </div>
                  </div>

                  {/* Termination */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("terms.termination.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("terms.termination.content")}
                      </p>
                      <div className="space-y-4">
                        <div>
                          <strong>{t("terms.termination.client.title")}</strong>
                          <p className="mt-2">
                            {t("terms.termination.client.desc")}
                          </p>
                        </div>
                        <div>
                          <strong>{t("terms.termination.oren.title")}</strong>
                          <p className="mt-2">
                            {t("terms.termination.oren.desc")}
                          </p>
                        </div>
                        <div>
                          <strong>{t("terms.termination.effect.title")}</strong>
                          <p className="mt-2">
                            {t("terms.termination.effect.desc")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Governing Law and Dispute Resolution */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("terms.governing.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("terms.governing.content")}
                      </p>
                      <div className="space-y-4">
                        <div>
                          <strong>{t("terms.governing.law.title")}</strong>
                          <p className="mt-2">
                            {t("terms.governing.law.desc")}
                          </p>
                        </div>
                        <div>
                          <strong>{t("terms.governing.disputes.title")}</strong>
                          <p className="mt-2">
                            {t("terms.governing.disputes.desc")}
                          </p>
                        </div>
                        <div>
                          <strong>{t("terms.governing.arbitration.title")}</strong>
                          <p className="mt-2">
                            {t("terms.governing.arbitration.desc")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Severability */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("terms.severability.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("terms.severability.content")}
                      </p>
                    </div>
                  </div>

                  {/* Entire Agreement */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("terms.entire.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("terms.entire.content")}
                      </p>
                    </div>
                  </div>

                  {/* Changes to Terms */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("terms.changes.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("terms.changes.content")}
                      </p>
                      <p>
                        {t("terms.changes.notification")}
                      </p>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("terms.contact.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("terms.contact.content")}
                      </p>

                      <div className="bg-muted/50 p-6 rounded-lg">
                        <div className="space-y-3">
                          <p>
                            <strong>{t("privacy.contact.company")}</strong>
                          </p>
                          <p>{t("privacy.contact.label.email")} {t("privacy.contact.email")}</p>
                          <p>{t("privacy.contact.label.phone")} {t("privacy.contact.phone")}</p>
                          <p>{t("privacy.contact.label.address")} {t("privacy.contact.address")}</p>
                        </div>
                      </div>

                      <p>
                        {t("terms.contact.response")}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-primary font-medium text-sm">
                      {t("terms.contact.badge")}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    {t("terms.contact.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {t("terms.contact.subtitle")}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button size="lg" asChild className="group">
                    <a href="mailto:legal@orenec.com">
                      {t("terms.contact.primary")}
                      {language === "ar" ? (
                        <ArrowLeft className="ms-2 h-4 w-4" />
                      ) : (
                        <ArrowRight className="ms-2 h-4 w-4" />
                      )}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/contact">{t("terms.contact.secondary")}</a>
                  </Button>
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
