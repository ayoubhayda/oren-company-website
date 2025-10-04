// footer 1
"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import darkLogo from "@/assets/logo/oren-blue-logo-dark.png";
import lightLogo from "@/assets/logo/oren-blue-logo-light.png";

export function Footer() {
  const { t } = useLanguage();

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
    { icon: Github, href: "#", label: t("footer.social.github") },
    { icon: Linkedin, href: "#", label: t("footer.social.linkedin") },
    { icon: Twitter, href: "#", label: t("footer.social.twitter") },
    {
      icon: Mail,
      href: "mailto:hello@oren.com",
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
              <h2 className="text-[22px] sm:text-2xl font-bold">{t("nav.logo")}</h2>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {t("footer.description")}
            </p>

            {/* Newsletter */}
            <div className="space-y-2 hidden sm:block">
              <p className="text-sm font-medium text-foreground">
                {t("footer.stayUpdated")}
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder={t("footer.emailPlaceholder")}
                  className="max-w-xs shadow-none text-sm"
                />
                <Button>{t("footer.subscribe")}</Button>
              </div>
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
            © {new Date().getFullYear()} {t("nav.logo")}. {t("footer.rights")}
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
    </footer>
  );
}
