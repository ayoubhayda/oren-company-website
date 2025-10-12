import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Orenec - Web Development & Digital Solutions",
  description:
    "Professional web development, custom platforms, e-commerce solutions, and digital marketing services for startups and enterprises.",
  keywords: ["web development", "custom platforms", "e-commerce", "digital marketing", "social media management"],
  authors: [{ name: "Orenec" }],
  openGraph: {
    title: "Orenec - Web Development & Digital Solutions",
    description:
      "Professional web development, custom platforms, e-commerce solutions, and digital marketing services.",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body cz-shortcut-listen="true">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
