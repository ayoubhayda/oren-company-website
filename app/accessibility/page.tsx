"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Mail,
  ArrowRight,
  ArrowLeft,
  Scale,
  Calendar,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { useLanguage } from "@/components/language-provider"
import SectionSeparator from "@/components/general/SectionSeparator"

export default function AccessibilityPage() {
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
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm tracking-wide">
                  {t("accessibility.hero.badge")}
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  {t("accessibility.hero.title")}
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {t("accessibility.hero.subtitle")}
                </p>
              </div>

              {/* Last Updated */}
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{t("accessibility.hero.lastUpdated.date")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4" />
                  <span>{t("accessibility.hero.lastUpdated.version")}</span>
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
                  {/* Introduction */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("accessibility.introduction.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("accessibility.introduction.content")}
                      </p>
                      <p>
                        {t("accessibility.introduction.commitment")}
                      </p>
                    </div>
                  </div>

                  {/* Legal Compliance */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("accessibility.compliance.title")}
                    </h2>
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                      <p>
                        {t("accessibility.compliance.content")}
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-semibold text-foreground mb-3">
                            {t("accessibility.compliance.wcag.title")}
                          </h3>
                          <p className="mb-4">
                            {t("accessibility.compliance.wcag.content")}
                          </p>
                          <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Level A:</strong> {t("accessibility.compliance.wcag.levelA")}</li>
                            <li><strong>Level AA:</strong> {t("accessibility.compliance.wcag.levelAA")}</li>
                            <li><strong>Level AAA:</strong> {t("accessibility.compliance.wcag.levelAAA")}</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-2xl font-semibold text-foreground mb-3">
                            {t("accessibility.compliance.ada.title")}
                          </h3>
                          <p className="mb-4">
                            {t("accessibility.compliance.ada.content")}
                          </p>
                          <p className="mb-4">
                            <strong>{t("accessibility.compliance.ada.titleI")}</strong> {t("accessibility.compliance.ada.titleI.content")}
                          </p>
                          <p className="mb-4">
                            <strong>{t("accessibility.compliance.ada.titleII")}</strong> {t("accessibility.compliance.ada.titleII.content")}
                          </p>
                          <p className="mb-4">
                            <strong>{t("accessibility.compliance.ada.titleIII")}</strong> {t("accessibility.compliance.ada.titleIII.content")}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-2xl font-semibold text-foreground mb-3">
                            {t("accessibility.compliance.section508.title")}
                          </h3>
                          <p className="mb-4">
                            {t("accessibility.compliance.section508.content")}
                          </p>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>{t("accessibility.compliance.section508.requirement1")}</li>
                            <li>{t("accessibility.compliance.section508.requirement2")}</li>
                            <li>{t("accessibility.compliance.section508.requirement3")}</li>
                            <li>{t("accessibility.compliance.section508.requirement4")}</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-2xl font-semibold text-foreground mb-3">
                            {t("accessibility.compliance.european.title")}
                          </h3>
                          <p className="mb-4">
                            {t("accessibility.compliance.european.content")}
                          </p>
                          <p className="mb-4">
                            <strong>{t("accessibility.compliance.eaa.title")}</strong> {t("accessibility.compliance.eaa.content")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technical Standards */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("accessibility.standards.title")}
                    </h2>
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-3">
                          {t("accessibility.standards.perceivable.title")}
                        </h3>
                        <ul className="list-disc pl-6 space-y-2">
                          <li><strong>{t("accessibility.standards.perceivable.alt")}</strong> {t("accessibility.standards.perceivable.alt.content")}</li>
                          <li><strong>{t("accessibility.standards.perceivable.captions")}</strong> {t("accessibility.standards.perceivable.captions.content")}</li>
                          <li><strong>{t("accessibility.standards.perceivable.contrast")}</strong> {t("accessibility.standards.perceivable.contrast.content")}</li>
                          <li><strong>{t("accessibility.standards.perceivable.resize")}</strong> {t("accessibility.standards.perceivable.resize.content")}</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-3">
                          {t("accessibility.standards.operable.title")}
                        </h3>
                        <ul className="list-disc pl-6 space-y-2">
                          <li><strong>{t("accessibility.standards.operable.keyboard")}</strong> {t("accessibility.standards.operable.keyboard.content")}</li>
                          <li><strong>{t("accessibility.standards.operable.timing")}</strong> {t("accessibility.standards.operable.timing.content")}</li>
                          <li><strong>{t("accessibility.standards.operable.seizures")}</strong> {t("accessibility.standards.operable.seizures.content")}</li>
                          <li><strong>{t("accessibility.standards.operable.navigation")}</strong> {t("accessibility.standards.operable.navigation.content")}</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-3">
                          {t("accessibility.standards.understandable.title")}
                        </h3>
                        <ul className="list-disc pl-6 space-y-2">
                          <li><strong>{t("accessibility.standards.understandable.language")}</strong> {t("accessibility.standards.understandable.language.content")}</li>
                          <li><strong>{t("accessibility.standards.understandable.consistent")}</strong> {t("accessibility.standards.understandable.consistent.content")}</li>
                          <li><strong>{t("accessibility.standards.understandable.predictable")}</strong> {t("accessibility.standards.understandable.predictable.content")}</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-3">
                          {t("accessibility.standards.robust.title")}
                        </h3>
                        <ul className="list-disc pl-6 space-y-2">
                          <li><strong>{t("accessibility.standards.robust.compatible")}</strong> {t("accessibility.standards.robust.compatible.content")}</li>
                          <li><strong>{t("accessibility.standards.robust.valid")}</strong> {t("accessibility.standards.robust.valid.content")}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Implementation Measures */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("accessibility.implementation.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("accessibility.implementation.content")}
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>{t("accessibility.implementation.regular")}</li>
                        <li>{t("accessibility.implementation.automated")}</li>
                        <li>{t("accessibility.implementation.manual")}</li>
                        <li>{t("accessibility.implementation.training")}</li>
                        <li>{t("accessibility.implementation.feedback")}</li>
                      </ul>
                    </div>
                  </div>

                  {/* Assistive Technologies */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("accessibility.technologies.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("accessibility.technologies.content")}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{t("accessibility.technologies.supported")}</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>{t("accessibility.technologies.supported.screenReaders")}</li>
                            <li>{t("accessibility.technologies.supported.voiceRecognition")}</li>
                            <li>{t("accessibility.technologies.supported.keyboardNavigation")}</li>
                            <li>{t("accessibility.technologies.supported.highContrast")}</li>
                            <li>{t("accessibility.technologies.supported.textScaling")}</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{t("accessibility.technologies.requirements")}</h4>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>{t("accessibility.technologies.requirements.html5")}</li>
                            <li>{t("accessibility.technologies.requirements.css3")}</li>
                            <li>{t("accessibility.technologies.requirements.javascript")}</li>
                            <li>{t("accessibility.technologies.requirements.aria")}</li>
                            <li>{t("accessibility.technologies.requirements.svg")}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Limitations and Exceptions */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("accessibility.limitations.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("accessibility.limitations.content")}
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>{t("accessibility.limitations.third_party")}</li>
                        <li>{t("accessibility.limitations.legacy")}</li>
                        <li>{t("accessibility.limitations.live")}</li>
                        <li>{t("accessibility.limitations.archived")}</li>
                      </ul>
                    </div>
                  </div>

                  {/* Enforcement and Complaints */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("accessibility.enforcement.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("accessibility.enforcement.content")}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground">{t("accessibility.enforcement.usa.title")}</h4>
                          <p className="mt-2">{t("accessibility.enforcement.usa.content")}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground">{t("accessibility.enforcement.eu.title")}</h4>
                          <p className="mt-2">{t("accessibility.enforcement.eu.content")}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feedback and Contact */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("accessibility.feedback.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("accessibility.feedback.content")}
                      </p>
                      <div className="bg-muted/50 p-6 rounded-lg">
                        <div className="space-y-3">
                          <p><strong>{t("accessibility.feedback.email")}</strong> contact@orenec.co.site</p>
                          <p><strong>{t("accessibility.feedback.response")}</strong> {t("accessibility.feedback.response.time")}</p>
                          <p><strong>{t("accessibility.feedback.escalation")}</strong> {t("accessibility.feedback.escalation.process")}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Updates and Version History */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("accessibility.updates.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("accessibility.updates.content")}
                      </p>
                      <p>
                        <strong>{t("accessibility.updates.current")}</strong> {t("accessibility.updates.version")}
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
                      {t("accessibility.contact.badge")}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    {t("accessibility.contact.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {t("accessibility.contact.subtitle")}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button size="lg" asChild className="group">
                    <a href={`mailto:contact@orenec.co.site`}>
                      {t("accessibility.contact.primary")}
                      {language === "ar" ? (
                        <ArrowLeft className="ms-2 h-4 w-4" />
                      ) : (
                        <ArrowRight className="ms-2 h-4 w-4" />
                      )}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/contact">{t("accessibility.contact.secondary")}</a>
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
