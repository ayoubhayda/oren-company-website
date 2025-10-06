"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Zap } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"

export default function ContactPage() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      ;(e.target as HTMLFormElement).reset()
    }, 3000)
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Let's start a conversation
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  Get In{" "}
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Touch
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Ready to bring your vision to life? Let's discuss your project and explore how we can help you achieve your goals.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button size="lg" asChild className="group">
                    <a href="mailto:hello@oren.com">
                      <Mail className="ms-2 h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="bg-transparent hover:bg-primary/5">
                    <a href="tel:+1234567890">
                      <Phone className="ms-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="relative py-20 lg:py-32 bg-muted/30">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <AnimatedSection delay={0.1}>
                  <div className="max-w-md mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      Ready to start your next project? We'd love to hear from you.
                    </p>

                    <div className="space-y-6">
                      <div className="group">
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-gray-200 hover:bg-card/80 transition-all duration-300">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <Mail className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground mb-1">Email</p>
                            <a
                              href="mailto:hello@oren.com"
                              className="text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                              hello@oren.com
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="group">
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-gray-200 hover:bg-card/80 transition-all duration-300">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <Phone className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground mb-1">Phone</p>
                            <a
                              href="tel:+1234567890"
                              className="text-muted-foreground hover:text-primary transition-colors text-sm"
                            >
                              +1 (234) 567-890
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="group">
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-gray-200 hover:bg-card/80 transition-all duration-300">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <MapPin className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-foreground mb-1">Office</p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              123 Business Street<br />
                              Suite 100<br />
                              City, State 12345
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <Card className="bg-card/50 backdrop-blur-sm border-gray-200 max-w-md mx-auto lg:mx-0">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground">Business Hours</h3>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Monday - Friday</span>
                          <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Saturday</span>
                          <span className="text-foreground font-medium">10:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Sunday</span>
                          <span className="text-foreground font-medium">Closed</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <AnimatedSection delay={0.3}>
                  <Card className="bg-card/50 backdrop-blur-sm border-gray-200 h-full">
                    <CardContent className="p-8 lg:p-10">
                      <div className="mb-8">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <MessageCircle className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">Send us a Message</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          Fill out the form below and we'll get back to you within 24 hours.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-medium text-foreground">
                              Full Name <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="John Doe"
                              className="bg-background/50 border-gray-200 focus:outline-none focus:border-primary focus:ring-0 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="company" className="text-sm font-medium text-foreground">
                              Company
                            </Label>
                            <Input
                              id="company"
                              name="company"
                              placeholder="Your Company"
                              className="bg-background/50 border-gray-200 focus:outline-none focus:border-primary focus:ring-0 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium text-foreground">
                              Email Address <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@company.com"
                              className="bg-background/50 border-gray-200 focus:outline-none focus:border-primary focus:ring-0 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                              Phone Number
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="+1 (234) 567-890"
                              className="bg-background/50 border-gray-200 focus:outline-none focus:border-primary focus:ring-0 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="service" className="text-sm font-medium text-foreground">
                              Service Needed
                            </Label>
                            <Select name="service">
                              <SelectTrigger id="service" className="w-full bg-background/50 border-gray-200 focus:outline-none focus:border-primary focus:ring-0 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="web-development">Web Development</SelectItem>
                                <SelectItem value="custom-platforms">Custom Platforms</SelectItem>
                                <SelectItem value="ecommerce">E-commerce</SelectItem>
                                <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                                <SelectItem value="social-media">Social Media</SelectItem>
                                <SelectItem value="design">Design</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="budget" className="text-sm font-medium text-foreground">
                              Project Budget
                            </Label>
                            <Select name="budget">
                              <SelectTrigger id="budget" className="w-full bg-background/50 border-gray-200 focus:outline-none focus:border-primary focus:ring-0 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                                <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                                <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                                <SelectItem value="50k+">$50,000+</SelectItem>
                                <SelectItem value="not-sure">Not sure yet</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-sm font-medium text-foreground">
                            Message <span className="text-destructive">*</span>
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your project, goals, and timeline..."
                            rows={6}
                            className="bg-background/50 border-gray-200 focus:outline-none focus:border-primary focus:ring-0 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
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
                              Sending Message...
                            </>
                          ) : isSubmitted ? (
                            <>
                              <div className="w-4 h-4 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              Message Sent!
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Send Message
                              <Zap className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </>
                          )}
                        </Button>

                        {isSubmitted && (
                          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                            <p className="text-sm text-center text-green-800 dark:text-green-200">
                              Thank you! We'll get back to you within 24 hours.
                            </p>
                          </div>
                        )}
                      </form>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
