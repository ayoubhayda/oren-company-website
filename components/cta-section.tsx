"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Play } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">
              {t("common.getStarted")}
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {t("cta.title")}
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            {t("cta.subtitle")}
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(var(--primary), 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size="lg"
                asChild
                className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-none transition-all"
              >
                <Link href="/contact">
                  {t("hero.cta.primary")}
                  <motion.div
                    className="ms-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-4 w-4 transform rtl:rotate-180" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(var(--primary), 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group bg-transparent hover:bg-primary/5 border-border hover:border-primary/30 transition-all"
              >
                <Link href="/portfolio">
                  {t("hero.cta.secondary")}
                  <motion.div
                    className="ms-2"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Play className="h-4 w-4 transform rtl:rotate-180" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
