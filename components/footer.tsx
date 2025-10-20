// footer 1
"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MailCheck,
  MailX,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import darkLogo from "@/assets/logo/oren-blue-logo-dark.png";
import lightLogo from "@/assets/logo/oren-blue-logo-light.png";
import { useState } from "react";
import { subscribeToNewsletter } from "@/lib/Services";

export function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [dialogTimeout, setDialogTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      const errorMessage = {
        type: "error" as const,
        text: t("footer.emailRequired") || "Email is required",
      };
      setDialogMessage(errorMessage);
      setDialogOpen(true);

      // Clear any existing timeout
      if (dialogTimeout) {
        clearTimeout(dialogTimeout);
      }

      // Auto-close dialog after 3 seconds
      const timeout = setTimeout(() => {
        setDialogOpen(false);
      }, 3000);
      setDialogTimeout(timeout);

      return;
    }

    setIsLoading(true);

    try {
      await subscribeToNewsletter(email);
      const successMessage = {
        type: "success" as const,
        text:
          t("footer.subscriptionSuccess") ||
          "Successfully subscribed to our newsletter!",
      };
      setDialogMessage(successMessage);
      setDialogOpen(true);
      setEmail("");

      // Clear any existing timeout
      if (dialogTimeout) {
        clearTimeout(dialogTimeout);
      }

      // Auto-close dialog after 3 seconds
      const timeout = setTimeout(() => {
        setDialogOpen(false);
      }, 3000);
      setDialogTimeout(timeout);
    } catch (error) {
      const errorMessage = {
        type: "error" as const,
        text:
          error instanceof Error
            ? error.message
            : t("footer.subscriptionError") ||
              "Failed to subscribe. Please try again.",
      };
      setDialogMessage(errorMessage);
      setDialogOpen(true);

      // Clear any existing timeout
      if (dialogTimeout) {
        clearTimeout(dialogTimeout);
      }

      // Auto-close dialog after 3 seconds
      const timeout = setTimeout(() => {
        setDialogOpen(false);
      }, 3000);
      setDialogTimeout(timeout);
    } finally {
      setIsLoading(false);
    }
  };

  const footerLinks = {
    services: [
      {
        label: t("footer.services.web-dev"),
        href: "/services/web-development",
      },
      {
        label: t("footer.services.custom-platforms"),
        href: "/services/custom-platforms",
      },
      { label: t("footer.services.ecommerce"), href: "/services/ecommerce" },
      {
        label: t("footer.services.digital-marketing"),
        href: "/services/digital-marketing",
      },
    ],
    company: [
      { label: t("nav.about"), href: "/about" },
      { label: t("nav.portfolio"), href: "/portfolio" },
      { label: t("nav.blog"), href: "/blog" },
      { label: t("nav.contact"), href: "/contact" },
    ],
    legal: [
      { label: t("footer.legal.privacy"), href: "/privacy" },
      { label: t("footer.legal.terms"), href: "/terms" },
      { label: t("footer.legal.accessibility"), href: "/accessibility" },
    ],
  };

  const socialLinks = [
    // { icon: Github, href: "#", label: t("footer.social.github") },
    { icon: Linkedin, href: "https://www.linkedin.com/in/orenec-agency/", label: t("footer.social.linkedin") },
    { icon: Instagram, href: "https://www.instagram.com/ore.nec/", label: t("contact.social.instagram") },
    {
      icon: Mail,
      href: "mailto:contact@orenec.co.site",
      label: t("footer.social.email"),
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-center text-center sm:block sm:text-start">
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-2.5 mb-4 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Image
                src={lightLogo}
                alt="light-logo"
                className="dark:hidden rounded-md w-8 h-8 sm:w-[34px] sm:h-[34px]"
                width={34}
                height={34}
              />
              <Image
                src={darkLogo}
                alt="dark-logo"
                className="hidden dark:block rounded-md w-8 h-8 sm:w-[34px] sm:h-[34px]"
                width={34}
                height={34}
              />
                <h2 className="text-[22px] sm:text-2xl font-bold">
                  {t("nav.logo")}
                  <span className="text-primary rtl:hidden">ec</span>
                  <span className="text-primary ltr:hidden">يك</span>
                </h2>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {t("footer.description")}
            </p>

            {/* Newsletter */}
            <div className="space-y-2 hidden sm:block">
              <p className="text-sm font-medium text-foreground">
                {t("footer.stayUpdated")}
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder={t("footer.emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="max-w-xs shadow-none text-sm"
                  disabled={isLoading}
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading
                    ? t("footer.subscribing") || "Subscribing..."
                    : t("footer.subscribe")}
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-2 sm:hidden">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="h-9 w-9"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Nav Column */}
          <div className="hidden lg:col-span-2 xl:col-span-3 sm:flex flex-wrap gap-12">
            {/* Services */}
            <div className="flex-1 ">
              <h3 className="text-sm font-semibold text-foreground mb-4">
                {t("nav.services")}
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors text-nowrap"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-foreground mb-4">
                {t("footer.company")}
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors text-nowrap"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-foreground mb-4">
                {t("footer.legal")}
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors text-nowrap"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t("nav.logo")}<span className="rtl:hidden">ec</span><span className="ltr:hidden">يك</span> . {t("footer.rights")}
          </p>

          {/* Social Links */}
          <div className="hidden sm:flex items-center gap-2">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                asChild
                className="h-9 w-9"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Alert Dialog */}
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent className="max-w-sm sm:max-w-md border border-border/50 bg-background backdrop-blur-md shadow-xl animate-in fade-in-0 zoom-in-95 duration-200">
          <AlertDialogHeader className="space-y-0 p-0">
            <div className="flex items-center gap-3 pb-2">
              {/* Minimal icon styling */}
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-md flex items-center justify-center transition-colors duration-200 ${
                  dialogMessage?.type === "success"
                    ? "bg-green-500/10 text-green-600 dark:text-green-400"
                    : "bg-red-500/10 text-red-600 dark:text-red-400"
                }`}
              >
                {dialogMessage?.type === "success" ? (
                  <MailCheck className="h-5 w-5" />
                ) : (
                  <MailX className="h-5 w-5" />
                )}
              </div>

              {/* Typography hierarchy */}
              <div className="flex-1 space-y-1.5 text-start">
                <AlertDialogTitle
                  className={`text-base font-medium leading-tight transition-colors duration-200 ${
                    dialogMessage?.type === "success"
                      ? "text-green-700 dark:text-green-400"
                      : "text-red-700 dark:text-red-400"
                  }`}
                >
                  {dialogMessage?.type === "success"
                    ? t("footer.subscriptionSuccess") ||
                      "Successfully subscribed!"
                    : t("footer.subscriptionError") || "Subscription failed"}
                </AlertDialogTitle>
                <AlertDialogDescription className="text-sm text-muted-foreground leading-relaxed -mt-1">
                  {dialogMessage?.text}
                </AlertDialogDescription>
              </div>
            </div>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </footer>
  );
}
