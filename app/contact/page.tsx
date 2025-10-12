"use client";

import type React from "react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  MessageSquare,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/components/language-provider";
import { AnimatedSection } from "@/components/animated-section";
import SectionSeparator from "@/components/general/SectionSeparator";
import MinimalSectionSeparator from "@/components/general/MinimalSectionSeparator";
import { motion } from "framer-motion";

export default function ContactPage() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get("name") as string,
        company: formData.get("company") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        service: formData.get("service") as string,
        budget: formData.get("budget") as string,
        message: formData.get("message") as string,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          (e.target as HTMLFormElement).reset();
        }, 3000);
      } else {
        console.error("Failed to send email:", result.error);
        // You could add error state handling here
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // You could add error state handling here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative overflow-hidden pt-28 sm:pt-32 ">
          <div className=" relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 text-sm font-medium text-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div>
                  <MessageSquare className="w-4 h-4 text-primary" />
                </motion.div>
                {t("contact.hero.badge")}
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t("contact.hero.title")}
                <span className="hidden rtl:inline"> </span>
                <motion.span
                  className="ltr:block mt-1.5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {t("contact.hero.title.highlight")}
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {t("contact.hero.subtitle")}
              </motion.p>
            </motion.div>
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
                    <motion.h2
                      className="text-3xl font-bold text-foreground mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {t("contact.info.title")}
                    </motion.h2>
                    <motion.p
                      className="text-muted-foreground mb-8 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {t("contact.info.subtitle")}
                    </motion.p>

                    <div className="space-y-6">
                      {/* Email */}
                      <motion.div
                        className="group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-gray-200 hover:bg-card/80 transition-all duration-300 dark:bg-card dark:border-border dark:hover:border-primary/30">
                          <motion.div
                            className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                            whileHover={{
                              backgroundColor: "rgb(0 105 255 / 0.2)",
                              scale: 1.1,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.div
                              whileHover={{ rotate: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Mail className="h-6 w-6 text-primary" />
                            </motion.div>
                          </motion.div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground mb-0.5">
                              {t("contact.info.emailLabel")}
                            </p>
                            <a
                              href="mailto:contact@orenec.co.site"
                              className="text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                              contact@orenec.co.site
                            </a>
                          </div>
                        </div>
                      </motion.div>

                      {/* Phone / WhatsApp */}
                      {/* <motion.div
                        className="group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-gray-200 hover:bg-card/80 transition-all duration-300 dark:bg-card dark:border-border dark:hover:border-primary/30">
                          <motion.div
                            className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                            whileHover={{
                              backgroundColor: "rgb(0 105 255 / 0.2)",
                              scale: 1.1,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.div
                              whileHover={{ rotate: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Phone className="h-6 w-6 text-primary" />
                            </motion.div>
                          </motion.div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground mb-0.5">
                              {t("contact.info.phoneLabel")}
                            </p>
                            <a
                              href="tel:+212666666666"
                              className="text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                              +212 666 666 666
                            </a>
                          </div>
                        </div>
                      </motion.div> */}

                      {/* Remote-first Location */}
                      <motion.div
                        className="group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-gray-200 hover:bg-card/80 transition-all duration-300 dark:bg-card dark:border-border dark:hover:border-primary/30">
                          <motion.div
                            className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                            whileHover={{
                              backgroundColor: "rgb(0 105 255 / 0.2)",
                              scale: 1.1,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.div
                              whileHover={{ rotate: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <MapPin className="h-6 w-6 text-primary" />
                            </motion.div>
                          </motion.div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground mb-0.5">
                              {t("contact.info.locationLabel")}
                            </p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {t("contact.info.locationDescription")}
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Availability (flexible) */}
                      <motion.div
                        className="group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-gray-200 hover:bg-card/80 transition-all duration-300 dark:bg-card dark:border-border dark:hover:border-primary/30">
                          <motion.div
                            className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                            whileHover={{
                              backgroundColor: "rgb(0 105 255 / 0.2)",
                              scale: 1.1,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.div
                              whileHover={{ rotate: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Clock className="h-6 w-6 text-primary" />
                            </motion.div>
                          </motion.div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground mb-0.5">
                              {t("contact.info.availabilityLabel")}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {t("contact.info.availabilityDescription")}
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Socials */}
                      <motion.div
                        className="flex items-center justify-center gap-6 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        <motion.a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          rel="noreferrer"
                          aria-label={t("contact.social.linkedin")}
                          className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 hover:border-primary hover:text-primary transition-colors dark:border-border"
                          whileTap={{ scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Linkedin className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noreferrer"
                          aria-label={t("contact.social.instagram")}
                          className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 hover:border-primary hover:text-primary transition-colors dark:border-border"
                          whileTap={{ scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Instagram className="w-6 h-6" />
                        </motion.a>
                      </motion.div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-2">
                <AnimatedSection delay={0.3}>
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="group h-full"
                  >
                    <Card className="bg-card/50 backdrop-blur-sm p-0 border-gray-200 h-full dark:bg-card dark:border-border hover:border-primary/30 transition-all duration-300">
                      {/* Animated gradient overlay on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      <CardContent className="p-8 lg:p-10 relative z-10">
                        <div className="mb-8">
                          <div className="flex items-center gap-3 mb-3">
                            <motion.div
                              className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                              whileHover={{
                                backgroundColor: "rgb(0 105 255 / 0.2)",
                                scale: 1.1,
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <motion.div
                                whileHover={{ rotate: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <MessageCircle className="h-6 w-6 text-primary" />
                              </motion.div>
                            </motion.div>
                            <motion.h3
                              className="text-2xl font-bold text-foreground"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                              {t("contact.form.title")}
                            </motion.h3>
                          </div>
                          <motion.p
                            className="text-muted-foreground leading-relaxed"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          >
                            {t("contact.form.subtitle")}
                          </motion.p>
                          <motion.p
                            className="text-xs text-muted-foreground mt-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                          >
                            {t("contact.form.responseTime")}
                          </motion.p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label
                                htmlFor="name"
                                className="text-sm font-medium text-foreground"
                              >
                                {t("contact.form.name")}{" "}
                                <span className="text-destructive">*</span>
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
                              <Label
                                htmlFor="company"
                                className="text-sm font-medium text-foreground"
                              >
                                {t("contact.form.company")}
                              </Label>
                              <Input
                                id="company"
                                name="company"
                                placeholder={t(
                                  "contact.form.companyPlaceholder"
                                )}
                                className="bg-background/50 border-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/30 dark:bg-card/50 dark:border-border"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label
                                htmlFor="email"
                                className="text-sm font-medium text-foreground"
                              >
                                {t("contact.form.email")}{" "}
                                <span className="text-destructive">*</span>
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
                              <Label
                                htmlFor="phone"
                                className="text-sm font-medium text-foreground"
                              >
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
                              <Label
                                htmlFor="service"
                                className="text-sm font-medium text-foreground"
                              >
                                {t("contact.form.service")}
                              </Label>
                              <Select name="service">
                                <SelectTrigger
                                  id="service"
                                  className="w-full bg-background/50 border-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/30 dark:bg-card/50 dark:border-border"
                                >
                                  <SelectValue
                                    placeholder={t(
                                      "contact.form.servicePlaceholder"
                                    )}
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="web-development">
                                    {t("contact.form.services.webdev")}
                                  </SelectItem>
                                  <SelectItem value="custom-platforms">
                                    {t("contact.form.services.platforms")}
                                  </SelectItem>
                                  <SelectItem value="ecommerce">
                                    {t("contact.form.services.ecommerce")}
                                  </SelectItem>
                                  <SelectItem value="digital-marketing">
                                    {t("contact.form.services.marketing")}
                                  </SelectItem>
                                  <SelectItem value="other">
                                    {t("contact.form.services.other")}
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <Label
                                htmlFor="budget"
                                className="text-sm font-medium text-foreground"
                              >
                                {t("contact.form.budget")}
                              </Label>
                              <Select name="budget">
                                <SelectTrigger
                                  id="budget"
                                  className="w-full bg-background/50 border-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/30 dark:bg-card/50 dark:border-border"
                                >
                                  <SelectValue
                                    placeholder={t(
                                      "contact.form.budgetPlaceholder"
                                    )}
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="under-500">
                                    {t("contact.form.budgets.under500")}
                                  </SelectItem>
                                  <SelectItem value="500-2k">
                                    {t("contact.form.budgets.5002k")}
                                  </SelectItem>
                                  <SelectItem value="2k-8k">
                                    {t("contact.form.budgets.2k8k")}
                                  </SelectItem>
                                  <SelectItem value="8k-15k">
                                    {t("contact.form.budgets.8k15k")}
                                  </SelectItem>
                                  <SelectItem value="15k+">
                                    {t("contact.form.budgets.15k")}
                                  </SelectItem>
                                  <SelectItem value="not-sure">
                                    {t("contact.form.budgets.unsure")}
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label
                              htmlFor="message"
                              className="text-sm font-medium text-foreground"
                            >
                              {t("contact.form.message")}{" "}
                              <span className="text-destructive">*</span>
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
                  </motion.div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
