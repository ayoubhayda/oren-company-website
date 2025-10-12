"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/animated-section";
import {
  Code,
  Palette,
  ShoppingCart,
  TrendingUp,
  Share2,
  Zap,
  CheckCircle2,
  Users2,
  Settings,
  LifeBuoy,
  Wrench,
  Sparkles,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import SectionSeparator from "@/components/general/SectionSeparator";
import { useLanguage } from "@/components/language-provider";

const services = [
  {
    icon: Code,
    titleKey: "services.web-dev",
    descriptionKey: "services.web-dev.desc",
    features: [
      "services.web-dev.feature.1",
      "services.web-dev.feature.2",
      "services.web-dev.feature.3",
      "services.web-dev.feature.4",
    ],
    href: "/services/web-development",
    badge: "services.web-dev.badge",
  },
  {
    icon: Zap,
    titleKey: "services.custom-platforms",
    descriptionKey: "services.custom-platforms.desc",
    features: [
      "services.custom-platforms.feature.1",
      "services.custom-platforms.feature.2",
      "services.custom-platforms.feature.3",
      "services.custom-platforms.feature.4",
    ],
    href: "/services/custom-platforms",
  },
  {
    icon: ShoppingCart,
    titleKey: "services.ecommerce",
    descriptionKey: "services.ecommerce.desc",
    features: [
      "services.ecommerce.feature.1",
      "services.ecommerce.feature.2",
      "services.ecommerce.feature.3",
      "services.ecommerce.feature.4",
    ],
    href: "/services/ecommerce",
  },
  {
    icon: TrendingUp,
    titleKey: "services.marketing",
    descriptionKey: "services.marketing.desc",
    features: [
      "services.marketing.feature.1",
      "services.marketing.feature.2",
      "services.marketing.feature.3",
      "services.marketing.feature.4",
    ],
    href: "/services/digital-marketing",
    comingSoon: true,
  },
  {
    icon: Share2,
    titleKey: "services.social",
    descriptionKey: "services.social.desc",
    features: [
      "services.social.feature.1",
      "services.social.feature.2",
      "services.social.feature.3",
      "services.social.feature.4",
    ],
    href: "/services/social-media",
    comingSoon: true,
  },
  {
    icon: Palette,
    titleKey: "services.design",
    descriptionKey: "services.design.desc",
    features: [
      "services.design.feature.1",
      "services.design.feature.2",
      "services.design.feature.3",
      "services.design.feature.4",
    ],
    href: "/services/design",
    badge: "services.design.badge",
    comingSoon: true,
  },
];

export default function ServicesPage() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Interactive background effects
  useEffect(() => {
    setMounted(true);

    const setupInteractiveEffects = () => {
      const heroSection = document.getElementById("hero-section");
      const interactiveBg = document.getElementById("interactive-bg");
      const particleContainer = document.getElementById("particle-container");

      if (!heroSection || !interactiveBg || !particleContainer) {
        setTimeout(setupInteractiveEffects, 100);
        return;
      }

      const particles = interactiveBg.querySelectorAll(
        ".particle-1, .particle-2, .particle-3, .particle-4, .particle-5, .particle-6, .particle-7, .particle-8, .particle-9, .particle-10, .particle-11"
      );
      const shapes = interactiveBg.querySelectorAll(
        ".shape-1, .shape-2, .shape-3, .shape-4, .shape-5, .shape-6, .shape-7, .shape-8, .shape-9, .shape-10"
      );

      // Store original computed styles for smooth resets
      const originalStyles = new Map();

      // Initialize original styles - preserve CSS animations
      particles.forEach((particle) => {
        const element = particle as HTMLElement;
        const computedStyle = window.getComputedStyle(element);
        originalStyles.set(element, {
          transform: computedStyle.transform || "",
          opacity: computedStyle.opacity || "",
        });
      });

      shapes.forEach((shape) => {
        const element = shape as HTMLElement;
        const computedStyle = window.getComputedStyle(element);
        originalStyles.set(element, {
          transform: computedStyle.transform || "",
          opacity: computedStyle.opacity || "",
        });
      });

      // Mouse effects disabled - only autonomous animations

      // Mouse effects completely disabled - only autonomous animations run
    };

    const timeoutId = setTimeout(setupInteractiveEffects, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Services Grid - Enhanced */}
        <section id="services" className="relative py-20 pt-28 sm:pt-32">

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
                <motion.div>
                  <Wrench className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-primary font-medium text-sm">
                  {t("services.services.badge")}
                </span>
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t("services.title")}
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t("services.subtitle")}
              </motion.p>
            </motion.div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group h-full"
                  >
                    <Card
                      className={`relative overflow-hidden border-border flex flex-col justify-between h-full transition-all duration-300 ${
                        service.comingSoon
                          ? "opacity-75 hover:border-muted-foreground/30"
                          : "hover:border-primary/30"
                      }`}
                    >
                      {/* Animated gradient overlay on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                  <div className="relative flex flex-col gap-5">
                    <CardHeader className="space-y-4">
                      <div className="flex items-start justify-between">
                        <motion.div
                          className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center transition-colors ${
                            service.comingSoon
                              ? "bg-muted-foreground/10"
                              : "group-hover:bg-primary/20"
                          }`}
                          whileHover={{ backgroundColor: "rgb(0 105 255 / 0.2)", scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div
                            whileHover={{ rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <service.icon
                              className={`h-7 w-7 transition-colors ${
                                service.comingSoon
                                  ? "text-muted-foreground"
                                  : "text-primary"
                              }`}
                            />
                          </motion.div>
                        </motion.div>
                        <div className="flex gap-2">
                          {service.badge && (
                            <Badge variant="secondary" className="text-xs">
                              {t(service.badge)}
                            </Badge>
                          )}
                          {service.comingSoon && (
                            <Badge
                              variant="outline"
                              className="text-xs text-muted-foreground border-muted-foreground/30"
                            >
                              {t("common.comingSoon")}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <CardTitle
                          className={`text-2xl ${
                            service.comingSoon ? "text-muted-foreground" : ""
                          }`}
                        >
                          {t(service.titleKey)}
                        </CardTitle>
                      </motion.div>
                    </CardHeader>

                    <CardContent className="space-y-5">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <CardDescription
                          className={`leading-relaxed text-base ${
                            service.comingSoon
                              ? "text-muted-foreground/80"
                              : "text-muted-foreground"
                          }`}
                        >
                          {t(service.descriptionKey)}
                        </CardDescription>
                      </motion.div>

                      <motion.div
                        className="space-y-2.5"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className={`flex items-center gap-3 text-sm ${
                              service.comingSoon
                                ? "text-muted-foreground/60"
                                : "text-foreground/80"
                            }`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                          >
                            <CheckCircle2
                              className={`w-4 h-4 flex-shrink-0 ${
                                service.comingSoon
                                  ? "text-muted-foreground/40"
                                  : "text-primary"
                              }`}
                            />
                            <span>{t(feature)}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </CardContent>
                    </div>

                    <CardFooter className="relative z-40">
                      <motion.div
                        className="w-full"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                      >
                        {service.comingSoon ? (
                          <Button
                            variant="outline"
                            disabled
                            className="w-full opacity-50 cursor-not-allowed"
                          >
                            {t("common.comingSoon")}
                          </Button>
                        ) : (
                          <motion.div
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Button
                              variant="outline"
                              asChild
                              className="w-full hover:bg-primary hover:text-white transition-colors"
                            >
                              <Link href={service.href}>{t("common.learnMore")}</Link>
                            </Button>
                          </motion.div>
                        )}
                      </motion.div>
                    </CardFooter>
                  </Card>
              </motion.div>
            </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Services CTA */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-primary"></div>
                <motion.div
                  whileHover={{ scale: 1.05, x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/contact"
                    className="hover:text-primary transition-colors"
                  >
                    {t("services.hero.cta")}
                  </Link>
                </motion.div>
                <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seperator Section */}
        <SectionSeparator />

        {/* Why Choose Us - Enhanced */}
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
                <motion.div>
                  <Sparkles className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-primary font-medium text-sm">
                  {t("services.whychooseus.badge")}
                </span>
              </motion.div>
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t("services.whychooseus.title")}
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t("services.whychooseus.description")}
              </motion.p>
            </motion.div>

            {/* Why Choose Us - Elegant Grid */}
            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                {
                  titleKey: "services.whychooseus.expert.title",
                  descriptionKey: "services.whychooseus.expert.description",
                  icon: Users2,
                },
                {
                  titleKey: "services.whychooseus.custom.title",
                  descriptionKey: "services.whychooseus.custom.description",
                  icon: Settings,
                },
                {
                  titleKey: "services.whychooseus.results.title",
                  descriptionKey: "services.whychooseus.results.description",
                  icon: TrendingUp,
                },
                {
                  titleKey: "services.whychooseus.support.title",
                  descriptionKey: "services.whychooseus.support.description",
                  icon: LifeBuoy,
                },
              ].map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group h-full"
                  >
                    <div
                      className="relative bg-card backdrop-blur-sm border border-border rounded-xl p-4 lg:p-5 transition-all duration-300 hover:border-primary/30 h-full"
                    >
                      {/* Icon */}
                      <motion.div
                        className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-primary/10 text-primary mb-3 group-hover:bg-primary/20 transition-colors"
                        whileHover={{ backgroundColor: "rgb(0 105 255 / 0.2)", scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <item.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                        </motion.div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <h3 className="text-sm lg:text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {t(item.titleKey)}
                        </h3>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                          {t(item.descriptionKey)}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Why Choose Us CTA */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l from-transparent to-primary"></div>
                <span>{t("services.whychooseus.cta")}</span>
                <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r from-transparent to-primary"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seperator Section */}
        <SectionSeparator />

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
