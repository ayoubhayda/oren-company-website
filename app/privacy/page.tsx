"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Mail,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Scale,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { useLanguage } from "@/components/language-provider";
import SectionSeparator from "@/components/general/SectionSeparator";

export default function PrivacyPage() {
  const { language } = useLanguage();
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
                  {t("privacy.hero.badge.alt")}
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  {t("privacy.hero.title")}
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {t("privacy.hero.subtitle")}
                </p>
              </div>

              {/* Last Updated */}
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{t("privacy.hero.lastUpdated.date")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4" />
                  <span>{t("privacy.hero.lastUpdated.version")}</span>
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
                      {t("privacy.introduction.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("privacy.introduction.content")}
                      </p>
                      <p>
                        {t("privacy.introduction.agreement")}
                      </p>
                      <p>
                        {t("privacy.introduction.applicability")}
                      </p>
                    </div>
                  </div>

                  {/* Information We Collect */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("privacy.collection.title")}
                    </h2>
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                      <p>
                        <strong>{t("privacy.collection.personal")}</strong> {t("privacy.collection.personal.desc")}
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          {t("privacy.collection.personal.name")}
                        </li>
                        <li>
                          {t("privacy.collection.personal.company")}
                        </li>
                        <li>{t("privacy.collection.personal.project")}</li>
                        <li>{t("privacy.collection.personal.preferences")}</li>
                        <li>{t("privacy.collection.personal.payment")}</li>
                      </ul>

                      <p>
                        <strong>{t("privacy.collection.automatic")}</strong>{" "}
                        {t("privacy.collection.automatic.desc")}
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>{t("privacy.collection.automatic.ip")}</li>
                        <li>{t("privacy.collection.automatic.browser")}</li>
                        <li>{t("privacy.collection.automatic.os")}</li>
                        <li>{t("privacy.collection.automatic.referring")}</li>
                        <li>{t("privacy.collection.automatic.pages")}</li>
                        <li>{t("privacy.collection.automatic.clicks")}</li>
                      </ul>
                    </div>
                  </div>

                  {/* How We Use Your Information */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("privacy.usage.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("privacy.usage.content")}
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>{t("privacy.usage.improve")}</li>
                        <li>
                          {t("privacy.usage.process")}
                        </li>
                        <li>
                          {t("privacy.usage.notices")}
                        </li>
                        <li>
                          {t("privacy.usage.respond")}
                        </li>
                        <li>
                          {t("privacy.usage.communicate")}
                        </li>
                        <li>
                          {t("privacy.usage.monitor")}
                        </li>
                        <li>
                          {t("privacy.usage.detect")}
                        </li>
                        <li>
                          {t("privacy.usage.personalize")}
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Information Sharing and Disclosure */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("privacy.sharing.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("privacy.sharing.content")}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <strong>{t("privacy.sharing.providers.title")}</strong>
                          <p className="mt-2">
                            {t("privacy.sharing.providers.desc")}
                          </p>
                        </div>

                        <div>
                          <strong>{t("privacy.sharing.advisors.title")}</strong>
                          <p className="mt-2">
                            {t("privacy.sharing.advisors.desc")}
                          </p>
                        </div>

                        <div>
                          <strong>{t("privacy.sharing.legal.title")}</strong>
                          <p className="mt-2">
                            {t("privacy.sharing.legal.desc")}
                          </p>
                        </div>
                      </div>

                      <p>
                        <strong>
                          {t("privacy.sharing.no_sell")}
                        </strong>
                      </p>
                    </div>
                  </div>

                  {/* Data Security */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("privacy.security.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("privacy.security.content")}
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>{t("privacy.security.encryption")}</li>
                        <li>{t("privacy.security.assessments")}</li>
                        <li>{t("privacy.security.access")}</li>
                        <li>{t("privacy.security.infrastructure")}</li>
                        <li>{t("privacy.security.training")}</li>
                      </ul>
                      <p>
                        {t("privacy.security.disclaimer")}
                      </p>
                    </div>
                  </div>

                  {/* Your Rights and Choices */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("privacy.rights.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("privacy.rights.content")}
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>{t("privacy.rights.access")}</strong>
                        </li>
                        <li>
                          <strong>{t("privacy.rights.correct")}</strong>
                        </li>
                        <li>
                          <strong>{t("privacy.rights.delete")}</strong>
                        </li>
                        <li>
                          <strong>{t("privacy.rights.object")}</strong>
                        </li>
                        <li>
                          <strong>{t("privacy.rights.withdraw")}</strong>
                        </li>
                      </ul>
                      <p>
                        {t("privacy.rights.exercise")}
                      </p>
                    </div>
                  </div>

                  {/* Cookies and Tracking Technologies */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("privacy.cookies.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("privacy.cookies.content")}
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>{t("privacy.cookies.essential")}</strong>
                        </li>
                        <li>
                          <strong>{t("privacy.cookies.analytics")}</strong>
                        </li>
                        <li>
                          <strong>{t("privacy.cookies.marketing")}</strong>
                        </li>
                        <li>
                          <strong>{t("privacy.cookies.preference")}</strong>
                        </li>
                      </ul>
                      <p>
                        {t("privacy.cookies.control")}
                      </p>
                    </div>
                  </div>

                  {/* Third-Party Services */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("privacy.third_party.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("privacy.third_party.content")}
                      </p>
                    </div>
                  </div>

                  {/* Data Retention */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("privacy.retention.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("privacy.retention.content")}
                      </p>
                    </div>
                  </div>

                  {/* International Data Transfers */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("privacy.international.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("privacy.international.content")}
                      </p>
                    </div>
                  </div>

                  {/* GDPR Compliance */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("privacy.gdpr.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("privacy.gdpr.content")}
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>{t("privacy.gdpr.rights")}</li>
                        <li>{t("privacy.gdpr.rights.restriction")}</li>
                        <li>{t("privacy.gdpr.rights.automated")}</li>
                        <li>
                          {t("privacy.gdpr.rights.authority")}
                        </li>
                      </ul>
                      <p>
                        {t("privacy.gdpr.basis")}
                      </p>
                    </div>
                  </div>

                  {/* CCPA Compliance */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("privacy.ccpa.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("privacy.ccpa.content")}
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          {t("privacy.ccpa.rights.know")}
                        </li>
                        <li>
                          {t("privacy.ccpa.rights.delete")}
                        </li>
                        <li>
                          {t("privacy.ccpa.rights.optout")}
                        </li>
                        <li>
                          {t("privacy.ccpa.rights.discrimination")}
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Changes to This Policy */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("privacy.changes.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("privacy.changes.content")}
                      </p>
                      <p>
                        {t("privacy.changes.material")}
                      </p>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground border-b border-border pb-4">
                      {t("privacy.contact.title")}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        {t("privacy.contact.content")}
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
                        {t("privacy.contact.info")}
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
                      {t("privacy.contact.cta.badge")}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    {t("privacy.contact.cta.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {t("privacy.contact.cta.subtitle")}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button size="lg" asChild className="group">
                    <a href="mailto:privacy@orenec.com">
                      {t("privacy.contact.cta.email")}
                      {language === "ar" ? (
                        <ArrowLeft className="ms-2 h-4 w-4" />
                      ) : (
                        <ArrowRight className="ms-2 h-4 w-4" />
                      )}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/contact">{t("privacy.contact.cta.form")}</a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
