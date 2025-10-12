"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"

const testimonials = [
  {
    quote:
      "Orenec transformed our online presence completely. Their attention to detail and technical expertise resulted in a website that not only looks stunning but performs exceptionally well.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    avatar: "/placeholder.svg?key=4tch0",
  },
  {
    quote:
      "Working with Orenec was a game-changer for our e-commerce business. They delivered a platform that increased our conversion rate by 45% in just three months.",
    author: "Michael Chen",
    role: "Founder",
    company: "ShopFlow",
    avatar: "/placeholder.svg?key=4xtjo",
  },
  {
    quote:
      "The team's professionalism and creativity exceeded our expectations. They took the time to understand our vision and delivered a solution that perfectly aligned with our goals.",
    author: "Emma Williams",
    role: "Marketing Director",
    company: "GrowthLab",
    avatar: "/placeholder.svg?key=4p4dq",
  },
]

export function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">{t("testimonials.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("testimonials.subtitle")}</p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <Card className="border-border relative h-full">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
