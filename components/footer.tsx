"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = {
    services: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Custom Platforms", href: "/services/custom-platforms" },
      { label: "E-commerce", href: "/services/ecommerce" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
    ],
    company: [
      { label: t("nav.about"), href: "/about" },
      { label: t("nav.portfolio"), href: "/portfolio" },
      { label: t("nav.blog"), href: "/blog" },
      { label: t("nav.contact"), href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  }

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@oren.com", label: "Email" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="text-2xl font-bold text-foreground">
                oren<span className="text-primary">.</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Professional web development and digital solutions that drive growth for startups and enterprises.
            </p>

            {/* Newsletter */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">{t("footer.stayUpdated")}</p>
              <div className="flex gap-2">
                <Input type="email" placeholder={t("footer.emailPlaceholder")} className="max-w-xs" />
                <Button>{t("footer.subscribe")}</Button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{t("nav.services")}</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Oren. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <Button key={social.label} variant="ghost" size="icon" asChild className="h-9 w-9">
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
