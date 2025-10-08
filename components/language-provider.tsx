"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [isRTL, setIsRTL] = useState(false)

  useEffect(() => {
    // Set RTL for Arabic
    const rtl = language === "ar"
    setIsRTL(rtl)
    document.documentElement.dir = rtl ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string => {
    return translations[language]?.[key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.logo": "Oren",

    // Hero
    "hero.title": "Build Your Digital Future",
    "hero.subtitle":
      "Professional web development, custom platforms, and digital solutions that drive growth for startups and enterprises.",
    "hero.cta.primary": "Get a Quote",
    "hero.cta.secondary": "See Our Work",
    "hero.badge": "Available for new projects",
    "hero.stats.projects": "Projects Delivered",
    "hero.stats.satisfaction": "Client Satisfaction",
    "hero.stats.experience": "Years Experience",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive digital solutions tailored to your business needs",
    "services.headerBadge": "What We Offer",
    "services.web-dev": "Web Development",
    "services.web-dev.desc":
      "Custom websites and web applications built with modern technologies for optimal performance.",
    "services.custom-platforms": "Custom Platforms",
    "services.custom-platforms.desc": "Tailored digital platforms designed to meet your unique business requirements.",
    "services.ecommerce": "E-commerce Solutions",
    "services.ecommerce.desc": "Complete online stores with secure payments and seamless user experience.",
    "services.marketing": "Digital Marketing",
    "services.marketing.desc": "Data-driven marketing strategies to increase your online visibility.",
    "services.social": "Social Media Management",
    "services.social.desc": "Comprehensive social media strategies to build your brand.",
    "services.design": "UI/UX Design",
    "services.design.desc": "Beautiful, intuitive interfaces that provide exceptional user experiences.",
    "services.web-dev.badge": "Most Popular",
    "services.design.badge": "Featured",
    "services.web-dev.feature.1": "Responsive Design",
    "services.web-dev.feature.2": "Performance Optimization",
    "services.web-dev.feature.3": "SEO-Friendly",
    "services.web-dev.feature.4": "Cross-Browser Compatible",
    "services.custom-platforms.feature.1": "Custom Solutions",
    "services.custom-platforms.feature.2": "Scalable Architecture",
    "services.custom-platforms.feature.3": "API Integration",
    "services.custom-platforms.feature.4": "Cloud Deployment",

    // Custom Platforms Service Page
    "services.custom-platforms.hero.badge": "Tailored Solutions",
    "services.custom-platforms.hero.title": "Custom Platform Development",
    "services.custom-platforms.hero.subtitle": "Tailored digital platforms built to match your unique business processes, workflows, and requirements",
    "services.custom-platforms.hero.button.primary": "Discuss Your Project",
    "services.custom-platforms.hero.button.secondary": "See Case Studies",
    "services.custom-platforms.hero.cta": "Build your custom platform today",
    "services.custom-platforms.hero.stats.uptime": "Uptime Guarantee",
    "services.custom-platforms.hero.stats.support": "Support Available",
    "services.custom-platforms.hero.stats.scalable": "Enterprise Scalable",
    "services.custom-platforms.features.badge": "Platform Capabilities",
    "services.custom-platforms.features.title": "Platform Capabilities",
    "services.custom-platforms.features.subtitle": "Powerful features designed to streamline your operations",
    "services.custom-platforms.features.cta": "Ready to scale your business?",
    "services.custom-platforms.features.performance.title": "High Performance",
    "services.custom-platforms.features.performance.description": "Built for speed and efficiency, handling thousands of concurrent users seamlessly",
    "services.custom-platforms.features.database.title": "Data Management",
    "services.custom-platforms.features.database.description": "Robust database architecture for secure storage and efficient data retrieval",
    "services.custom-platforms.features.cloud.title": "Cloud Infrastructure",
    "services.custom-platforms.features.cloud.description": "Scalable cloud deployment with automatic scaling and high availability",
    "services.custom-platforms.features.security.title": "Enterprise Security",
    "services.custom-platforms.features.security.description": "Advanced security measures including encryption, authentication, and access control",
    "services.custom-platforms.features.workflow.title": "Custom Workflows",
    "services.custom-platforms.features.workflow.description": "Automated processes tailored to your specific business operations and requirements",
    "services.custom-platforms.features.analytics.title": "Analytics & Reporting",
    "services.custom-platforms.features.analytics.description": "Comprehensive dashboards and reports to track performance and make data-driven decisions",
    "services.custom-platforms.usecases.badge": "Perfect For",
    "services.custom-platforms.usecases.title": "Perfect For",
    "services.custom-platforms.usecases.subtitle": "Industries and use cases we specialize in",
    "services.custom-platforms.usecases.cta": "Find your perfect solution",
    "services.custom-platforms.usecases.saas.title": "SaaS Applications",
    "services.custom-platforms.usecases.saas.description": "Multi-tenant platforms with subscription management, user authentication, and feature-rich dashboards",
    "services.custom-platforms.usecases.internal.title": "Internal Tools",
    "services.custom-platforms.usecases.internal.description": "Custom business applications to streamline operations, manage resources, and improve productivity",
    "services.custom-platforms.usecases.marketplace.title": "Marketplaces",
    "services.custom-platforms.usecases.marketplace.description": "Two-sided platforms connecting buyers and sellers with payment processing and transaction management",
    "services.custom-platforms.usecases.booking.title": "Booking Systems",
    "services.custom-platforms.usecases.booking.description": "Reservation and scheduling platforms with calendar integration, notifications, and payment processing",
    "services.custom-platforms.usecases.crm.title": "CRM Systems",
    "services.custom-platforms.usecases.crm.description": "Customer relationship management tools tailored to your sales process and customer journey",
    "services.custom-platforms.usecases.learning.title": "Learning Platforms",
    "services.custom-platforms.usecases.learning.description": "Educational platforms with course management, progress tracking, and interactive content delivery",
    "services.custom-platforms.cta.title": "Let's Build Your Custom Platform",
    "services.custom-platforms.cta.subtitle": "Schedule a consultation to discuss your requirements and get a tailored solution proposal.",
    "services.custom-platforms.cta.button": "Start Your Project",

    // E-commerce Service Page
    "services.ecommerce.hero.badge": "Online Stores",
    "services.ecommerce.hero.title": "E-commerce Development Services",
    "services.ecommerce.hero.subtitle": "Build powerful online stores that drive sales and provide exceptional shopping experiences",
    "services.ecommerce.hero.button.primary": "Get Started",
    "services.ecommerce.hero.button.secondary": "View Examples",
    "services.ecommerce.hero.cta": "Start selling online today",
    "services.ecommerce.hero.stats.uptime": "Uptime Guarantee",
    "services.ecommerce.hero.stats.stores": "Stores Built",
    "services.ecommerce.hero.stats.compliant": "PCI DSS Compliant",
    "services.ecommerce.features.badge": "Store Features",
    "services.ecommerce.features.title": "Store Features",
    "services.ecommerce.features.subtitle": "Everything you need to run a successful online store",
    "services.ecommerce.features.cta": "Ready to start your store?",
    "services.ecommerce.features.payments.title": "Payment Integration",
    "services.ecommerce.features.payments.description": "Secure payment processing with multiple gateways including Stripe, PayPal, and Square",
    "services.ecommerce.features.inventory.title": "Inventory Management",
    "services.ecommerce.features.inventory.description": "Real-time inventory tracking, low stock alerts, and automated inventory updates",
    "services.ecommerce.features.analytics.title": "Sales Analytics",
    "services.ecommerce.features.analytics.description": "Comprehensive dashboards to track sales, customer behavior, and business performance",
    "services.ecommerce.features.security.title": "Security & Compliance",
    "services.ecommerce.features.security.description": "SSL encryption, PCI compliance, and advanced fraud protection for secure transactions",
    "services.ecommerce.features.mobile.title": "Mobile Optimized",
    "services.ecommerce.features.mobile.description": "Responsive design that provides seamless shopping experience across all devices",
    "services.ecommerce.features.performance.title": "High Performance",
    "services.ecommerce.features.performance.description": "Fast loading times, optimized images, and smooth checkout process for better conversions",
    "services.ecommerce.technologies.badge": "E-commerce Stack",
    "services.ecommerce.technologies.title": "Technologies We Use",
    "services.ecommerce.technologies.subtitle": "Modern e-commerce platforms and payment solutions",
    "services.ecommerce.technologies.cta": "Explore our e-commerce tools",
    "services.ecommerce.process.badge": "Our Process",
    "services.ecommerce.process.title": "Our Process",
    "services.ecommerce.process.subtitle": "A streamlined approach to launch your online store successfully",
    "services.ecommerce.process.cta": "See how we build stores",
    "services.ecommerce.process.planning.title": "Strategy & Planning",
    "services.ecommerce.process.planning.description": "We analyze your business model, target audience, and competition to create a winning strategy.",
    "services.ecommerce.process.design.title": "Design & UX",
    "services.ecommerce.process.design.description": "We create beautiful, conversion-focused designs that reflect your brand and guide customers to purchase.",
    "services.ecommerce.process.development.title": "Development & Integration",
    "services.ecommerce.process.development.description": "We build your store with all necessary integrations including payments, shipping, and inventory systems.",
    "services.ecommerce.process.testing.title": "Testing & Optimization",
    "services.ecommerce.process.testing.description": "Thorough testing across devices and scenarios to ensure optimal performance and user experience.",
    "services.ecommerce.process.launch.title": "Launch & Growth",
    "services.ecommerce.process.launch.description": "We help you launch successfully and provide ongoing support for marketing and optimization.",
    "services.ecommerce.faq.badge": "Common Questions",
    "services.ecommerce.faq.title": "Frequently Asked Questions",
    "services.ecommerce.faq.subtitle": "Common questions about our e-commerce development services",
    "services.ecommerce.faq.cta": "Still have questions?",
    "services.ecommerce.faq.platforms.question": "Which e-commerce platforms do you work with?",
    "services.ecommerce.faq.platforms.answer": "We work with all major platforms including Shopify, WooCommerce, Magento, and custom solutions. We'll recommend the best platform based on your specific needs and budget.",
    "services.ecommerce.faq.payments.question": "What payment methods can you integrate?",
    "services.ecommerce.faq.payments.answer": "We integrate all major payment gateways including Stripe, PayPal, Square, Authorize.Net, and more. We ensure PCI compliance and secure payment processing.",
    "services.ecommerce.faq.scaling.question": "Can you handle high-traffic stores?",
    "services.ecommerce.faq.scaling.answer": "Yes, we build scalable e-commerce solutions that can handle thousands of concurrent users. We use cloud infrastructure and performance optimization techniques.",
    "services.ecommerce.faq.seo.question": "Do you optimize stores for search engines?",
    "services.ecommerce.faq.seo.answer": "Absolutely. All our e-commerce stores are built with SEO best practices including proper structure, meta tags, fast loading times, and mobile optimization.",
    "services.ecommerce.faq.support.question": "Do you provide ongoing support?",
    "services.ecommerce.faq.support.answer": "Yes, we offer comprehensive maintenance packages including updates, security monitoring, performance optimization, and technical support.",
    "services.ecommerce.cta.title": "Ready to Start Your Online Store?",
    "services.ecommerce.cta.subtitle": "Let's build an e-commerce solution that drives sales and grows your business.",
    "services.ecommerce.cta.button.primary": "Get a Free Quote",
    "services.ecommerce.cta.button.secondary": "View Our Stores",

    // Digital Marketing Service Page
    "services.digital-marketing.hero.badge": "Growth Marketing",
    "services.digital-marketing.hero.title": "Digital Marketing Services",
    "services.digital-marketing.hero.subtitle": "Data-driven strategies to grow your online presence and reach your target audience",
    "services.digital-marketing.hero.button.primary": "Get Started",
    "services.digital-marketing.hero.button.secondary": "View Case Studies",
    "services.digital-marketing.hero.cta": "Start growing your business today",
    "services.digital-marketing.hero.stats.roi": "Average ROI Increase",
    "services.digital-marketing.hero.stats.leads": "Leads Generated",
    "services.digital-marketing.hero.stats.campaigns": "Active Campaigns",
    "services.digital-marketing.features.badge": "Marketing Services",
    "services.digital-marketing.features.title": "Marketing Services",
    "services.digital-marketing.features.subtitle": "Comprehensive digital marketing solutions to boost your online presence",
    "services.digital-marketing.features.cta": "Ready to grow your business?",
    "services.digital-marketing.features.seo.title": "SEO Optimization",
    "services.digital-marketing.features.seo.description": "Improve your search rankings and drive organic traffic with proven SEO strategies",
    "services.digital-marketing.features.content.title": "Content Marketing",
    "services.digital-marketing.features.content.description": "Engaging content that builds brand authority and attracts your target audience",
    "services.digital-marketing.features.ppc.title": "PPC Advertising",
    "services.digital-marketing.features.ppc.description": "Targeted paid campaigns on Google, Facebook, and other platforms for immediate results",
    "services.digital-marketing.features.targeting.title": "Audience Targeting",
    "services.digital-marketing.features.targeting.description": "Precise audience segmentation to reach the right customers at the right time",
    "services.digital-marketing.features.social.title": "Social Media Marketing",
    "services.digital-marketing.features.social.description": "Build community engagement and brand loyalty across social media platforms",
    "services.digital-marketing.features.email.title": "Email Marketing",
    "services.digital-marketing.features.email.description": "Automated email campaigns that nurture leads and drive conversions",
    "services.digital-marketing.technologies.badge": "Marketing Tools",
    "services.digital-marketing.technologies.title": "Technologies We Use",
    "services.digital-marketing.technologies.subtitle": "Professional marketing tools and analytics platforms",
    "services.digital-marketing.technologies.cta": "Explore our marketing stack",
    "services.digital-marketing.process.badge": "Our Process",
    "services.digital-marketing.process.title": "Our Process",
    "services.digital-marketing.process.subtitle": "A systematic approach to deliver measurable marketing results",
    "services.digital-marketing.process.cta": "See how we drive results",
    "services.digital-marketing.process.research.title": "Market Research",
    "services.digital-marketing.process.research.description": "We analyze your industry, competitors, and target audience to create a winning strategy.",
    "services.digital-marketing.process.strategy.title": "Strategy Development",
    "services.digital-marketing.process.strategy.description": "We develop comprehensive marketing plans tailored to your business goals and budget.",
    "services.digital-marketing.process.implementation.title": "Campaign Implementation",
    "services.digital-marketing.process.implementation.description": "We launch and manage your campaigns across multiple channels for maximum reach.",
    "services.digital-marketing.process.monitoring.title": "Performance Monitoring",
    "services.digital-marketing.process.monitoring.description": "Real-time tracking of key metrics to measure success and identify opportunities.",
    "services.digital-marketing.process.optimization.title": "Continuous Optimization",
    "services.digital-marketing.process.optimization.description": "We refine and optimize campaigns based on data to improve results over time.",
    "services.digital-marketing.faq.badge": "Common Questions",
    "services.digital-marketing.faq.title": "Frequently Asked Questions",
    "services.digital-marketing.faq.subtitle": "Common questions about our digital marketing services",
    "services.digital-marketing.faq.cta": "Still have questions?",
    "services.digital-marketing.faq.roi.question": "How do you measure ROI?",
    "services.digital-marketing.faq.roi.answer": "We track key performance indicators including website traffic, conversion rates, lead generation, and revenue attribution to demonstrate clear ROI for your marketing investment.",
    "services.digital-marketing.faq.timeline.question": "How long until I see results?",
    "services.digital-marketing.faq.timeline.answer": "SEO results typically appear within 3-6 months, while PPC campaigns can show immediate results. We provide regular reports to track progress and adjust strategies as needed.",
    "services.digital-marketing.faq.reporting.question": "How do you report on campaign performance?",
    "services.digital-marketing.faq.reporting.answer": "We provide detailed monthly reports with key metrics, insights, and recommendations. You'll have access to real-time dashboards to monitor performance anytime.",
    "services.digital-marketing.faq.budget.question": "What's the minimum budget required?",
    "services.digital-marketing.faq.budget.answer": "We work with businesses of all sizes. Minimum budgets start at $1,000/month for basic campaigns, but we recommend $2,500+/month for comprehensive strategies.",
    "services.digital-marketing.faq.channels.question": "Which marketing channels do you use?",
    "services.digital-marketing.faq.channels.answer": "We utilize SEO, PPC, social media, email marketing, content marketing, and other channels based on your target audience and business goals for maximum effectiveness.",
    "services.digital-marketing.cta.title": "Ready to Grow Your Business?",
    "services.digital-marketing.cta.subtitle": "Let's create a digital marketing strategy that drives real results for your business.",
    "services.digital-marketing.cta.button.primary": "Get a Free Consultation",
    "services.digital-marketing.cta.button.secondary": "View Our Results",

    // Social Media Service Page
    "services.social-media.hero.badge": "Community Building",
    "services.social-media.hero.title": "Social Media Management Services",
    "services.social-media.hero.subtitle": "Build and engage your community with strategic social media management",
    "services.social-media.hero.button.primary": "Get Started",
    "services.social-media.hero.button.secondary": "View Examples",
    "services.social-media.hero.cta": "Start building your community today",
    "services.social-media.hero.stats.reach": "People Reached",
    "services.social-media.hero.stats.engagement": "Engagement Rate",
    "services.social-media.hero.stats.monitoring": "Monitoring",
    "services.social-media.features.badge": "Management Services",
    "services.social-media.features.title": "Management Services",
    "services.social-media.features.subtitle": "Comprehensive social media management solutions for your business",
    "services.social-media.features.cta": "Ready to grow your social presence?",
    "services.social-media.features.community.title": "Community Building",
    "services.social-media.features.community.description": "Grow your audience and build meaningful relationships with your followers",
    "services.social-media.features.content.title": "Content Creation",
    "services.social-media.features.content.description": "Professional content creation that resonates with your target audience",
    "services.social-media.features.scheduling.title": "Post Scheduling",
    "services.social-media.features.scheduling.description": "Strategic posting schedules optimized for maximum engagement and reach",
    "services.social-media.features.engagement.title": "Community Engagement",
    "services.social-media.features.engagement.description": "Active community management with timely responses and meaningful interactions",
    "services.social-media.features.analytics.title": "Performance Analytics",
    "services.social-media.features.analytics.description": "Detailed insights and reports to track growth and measure success",
    "services.social-media.features.strategy.title": "Strategic Planning",
    "services.social-media.features.strategy.description": "Data-driven strategies tailored to your brand and business goals",
    "services.social-media.technologies.badge": "Social Platforms",
    "services.social-media.technologies.title": "Platforms We Manage",
    "services.social-media.technologies.subtitle": "Professional social media platforms and management tools",
    "services.social-media.technologies.cta": "Explore our social media tools",
    "services.social-media.process.badge": "Our Process",
    "services.social-media.process.title": "Our Process",
    "services.social-media.process.subtitle": "A systematic approach to build and grow your social media presence",
    "services.social-media.process.cta": "See how we manage social media",
    "services.social-media.process.audit.title": "Social Media Audit",
    "services.social-media.process.audit.description": "We analyze your current social media presence and identify opportunities for growth.",
    "services.social-media.process.strategy.title": "Strategy Development",
    "services.social-media.process.strategy.description": "We create comprehensive social media strategies aligned with your business objectives.",
    "services.social-media.process.content.title": "Content Creation & Scheduling",
    "services.social-media.process.content.description": "We develop engaging content and establish optimal posting schedules for your audience.",
    "services.social-media.process.management.title": "Community Management",
    "services.social-media.process.management.description": "We actively manage your community, respond to comments, and build relationships.",
    "services.social-media.process.optimization.title": "Monitoring & Optimization",
    "services.social-media.process.optimization.description": "We track performance metrics and continuously optimize strategies for better results.",
    "services.social-media.faq.badge": "Common Questions",
    "services.social-media.faq.title": "Frequently Asked Questions",
    "services.social-media.faq.subtitle": "Common questions about our social media management services",
    "services.social-media.faq.cta": "Still have questions?",
    "services.social-media.faq.platforms.question": "Which social media platforms do you manage?",
    "services.social-media.faq.platforms.answer": "We manage all major platforms including Facebook, Instagram, Twitter, LinkedIn, TikTok, YouTube, and Pinterest, choosing the best ones for your business.",
    "services.social-media.faq.content.question": "Do you create original content?",
    "services.social-media.faq.content.answer": "Yes, we create original, engaging content including posts, stories, reels, and graphics that align with your brand voice and resonate with your audience.",
    "services.social-media.faq.engagement.question": "How do you handle community engagement?",
    "services.social-media.faq.engagement.answer": "We actively monitor your social media channels, respond to comments and messages, and engage with your community to build relationships and loyalty.",
    "services.social-media.faq.reporting.question": "How do you report on social media performance?",
    "services.social-media.faq.reporting.answer": "We provide monthly reports with key metrics like follower growth, engagement rates, reach, and conversions, along with insights and recommendations.",
    "services.social-media.faq.crisis.question": "How do you handle social media crises?",
    "services.social-media.faq.crisis.answer": "We have crisis management protocols in place and provide 24/7 monitoring. We respond quickly to negative situations and protect your brand reputation.",
    "services.social-media.cta.title": "Ready to Build Your Social Media Presence?",
    "services.social-media.cta.subtitle": "Let's create a social media strategy that connects you with your audience and grows your business.",
    "services.social-media.cta.button.primary": "Get a Free Consultation",
    "services.social-media.cta.button.secondary": "View Our Work",

    // Design Service Page
    "services.design.hero.badge": "Creative Excellence",
    "services.design.hero.title": "UI/UX Design Services",
    "services.design.hero.subtitle": "Create beautiful, intuitive interfaces that users love and that drive business results",
    "services.design.hero.button.primary": "Get Started",
    "services.design.hero.button.secondary": "View Portfolio",
    "services.design.hero.cta": "Start designing amazing experiences",
    "services.design.hero.stats.designs": "Designs Created",
    "services.design.hero.stats.satisfaction": "Client Satisfaction",
    "services.design.hero.stats.expertise": "UI/UX Expertise",
    "services.design.features.badge": "Design Services",
    "services.design.features.title": "Design Services",
    "services.design.features.subtitle": "Comprehensive design solutions that bring your vision to life",
    "services.design.features.cta": "Ready to design something amazing?",
    "services.design.features.research.title": "User Research",
    "services.design.features.research.description": "Deep understanding of user needs, behaviors, and pain points through comprehensive research",
    "services.design.features.concept.title": "Concept Development",
    "services.design.features.concept.description": "Creative ideation and concept creation that aligns with your brand and user goals",
    "services.design.features.wireframing.title": "Wireframing",
    "services.design.features.wireframing.description": "Low-fidelity wireframes that establish structure and information architecture",
    "services.design.features.prototyping.title": "Prototyping",
    "services.design.features.prototyping.description": "Interactive prototypes that bring designs to life and enable user testing",
    "services.design.features.responsive.title": "Responsive Design",
    "services.design.features.responsive.description": "Seamless experiences across all devices and screen sizes",
    "services.design.features.usability.title": "Usability Testing",
    "services.design.features.usability.description": "User testing and validation to ensure intuitive and effective interfaces",
    "services.design.technologies.badge": "Design Tools",
    "services.design.technologies.title": "Technologies We Use",
    "services.design.technologies.subtitle": "Professional design tools and prototyping platforms",
    "services.design.technologies.cta": "Explore our design toolkit",
    "services.design.process.badge": "Our Process",
    "services.design.process.title": "Our Process",
    "services.design.process.subtitle": "A collaborative approach to create exceptional user experiences",
    "services.design.process.cta": "See how we design",
    "services.design.process.research.title": "Research & Discovery",
    "services.design.process.research.description": "We start by understanding your users, business goals, and project requirements.",
    "services.design.process.wireframing.title": "Wireframing & Architecture",
    "services.design.process.wireframing.description": "We create low-fidelity wireframes to establish structure and user flows.",
    "services.design.process.design.title": "Visual Design",
    "services.design.process.design.description": "We develop high-fidelity designs with attention to typography, color, and visual hierarchy.",
    "services.design.process.prototyping.title": "Prototyping & Testing",
    "services.design.process.prototyping.description": "We build interactive prototypes and conduct user testing to validate designs.",
    "services.design.process.testing.title": "Implementation & Handoff",
    "services.design.process.testing.description": "We prepare design systems and assets for seamless development handoff.",
    "services.design.faq.badge": "Common Questions",
    "services.design.faq.title": "Frequently Asked Questions",
    "services.design.faq.subtitle": "Common questions about our design services",
    "services.design.faq.cta": "Still have questions?",
    "services.design.faq.process.question": "What's your design process?",
    "services.design.faq.process.answer": "Our process includes research, wireframing, visual design, prototyping, and user testing. We work collaboratively with you throughout each phase to ensure the final design meets your needs.",
    "services.design.faq.timeline.question": "How long does a design project take?",
    "services.design.faq.timeline.answer": "Design timelines vary based on project scope and complexity. A typical website design project takes 4-8 weeks, while larger applications may take 8-12 weeks. We provide detailed timelines during project planning.",
    "services.design.faq.collaboration.question": "How do you collaborate with clients?",
    "services.design.faq.collaboration.answer": "We use collaborative tools like Figma, regular video calls, and shared project boards. You'll have access to real-time design updates and can provide feedback throughout the process.",
    "services.design.faq.revisions.question": "How many revisions are included?",
    "services.design.faq.revisions.answer": "We include 3 rounds of revisions for each design phase. Additional revisions can be accommodated based on project scope and timeline requirements.",
    "services.design.faq.development.question": "Do you work with developers?",
    "services.design.faq.development.answer": "Yes, we create developer-ready design systems with detailed specifications, assets, and documentation to ensure seamless handoff and implementation.",
    "services.design.cta.title": "Ready to Design Something Amazing?",
    "services.design.cta.subtitle": "Let's create user experiences that delight your customers and drive business growth.",
    "services.design.cta.button.primary": "Get a Free Consultation",
    "services.design.cta.button.secondary": "View Our Designs",

    "services.ecommerce.feature.1": "Payment Integration",
    "services.ecommerce.feature.2": "Inventory Management",
    "services.ecommerce.feature.3": "Order Tracking",
    "services.ecommerce.feature.4": "Analytics Dashboard",
    "services.marketing.feature.1": "SEO Optimization",
    "services.marketing.feature.2": "Content Strategy",
    "services.marketing.feature.3": "PPC Campaigns",
    "services.marketing.feature.4": "Analytics & Reporting",
    "services.social.feature.1": "Content Creation",
    "services.social.feature.2": "Community Management",
    "services.social.feature.3": "Campaign Planning",
    "services.social.feature.4": "Performance Tracking",
    "services.design.feature.1": "User Research",
    "services.design.feature.2": "Wireframing",
    "services.design.feature.3": "Prototyping",
    "services.design.feature.4": "Design Systems",
    "services.page.title": "Our Services",
    "services.page.subtitle":
      "Comprehensive digital solutions designed to help your business thrive in the digital age",
    "services.hero.badge": "Premium Digital Services",
    "services.hero.title.line1": "Elevate Your Digital",
    "services.hero.title.line2": "Presence",
    "services.hero.subtitle": "Comprehensive digital solutions designed to help your business thrive in the modern digital landscape with cutting-edge technology and creative excellence",
    "services.hero.button.explore": "Explore Services",
    "services.hero.button.consultation": "Schedule Consultation",
    "services.hero.cta": "Let's get started on your project",
    "services.services.badge": "Comprehensive Solutions",
    "services.whychooseus.badge": "Trusted Partner",
    "services.whychooseus.title": "Why Choose Oren",
    "services.whychooseus.description": "We combine technical expertise with creative innovation to deliver exceptional results that drive measurable business growth",
    "services.whychooseus.cta": "Let's get started today",
    "services.whychooseus.expert.title": "Expert Team",
    "services.whychooseus.expert.description": "Skilled professionals with years of experience in web development and digital solutions",
    "services.whychooseus.custom.title": "Custom Solutions",
    "services.whychooseus.custom.description": "Tailored approaches designed specifically for your business needs and goals",
    "services.whychooseus.results.title": "Proven Results",
    "services.whychooseus.results.description": "Track record of successful projects and satisfied clients across various industries",
    "services.whychooseus.support.title": "Ongoing Support",
    "services.whychooseus.support.description": "Continuous maintenance and support to ensure your digital presence stays optimal",
    "services.cta.title": "Ready to Get Started?",
    "services.cta.description": "Let's discuss your project and find the perfect solution for your business needs.",
    "services.viewAllServices": "View All Services",

    // Web Development Service Page
    "services.web-dev.hero.badge": "Professional Development",
    "services.web-dev.hero.title": "Professional Web Development Services",
    "services.web-dev.hero.subtitle": "Build fast, secure, and scalable websites that deliver exceptional user experiences and drive business growth",
    "services.web-dev.hero.button.primary": "Get Started",
    "services.web-dev.hero.button.secondary": "View Examples",
    "services.web-dev.hero.cta": "Start your web development project today",
    "services.web-dev.hero.stats.projects": "Projects Completed",
    "services.web-dev.hero.stats.uptime": "Uptime Guarantee",
    "services.web-dev.hero.stats.support": "Support Available",
    "services.web-dev.features.badge": "What You Get",
    "services.web-dev.features.title": "What You Get",
    "services.web-dev.features.subtitle": "Comprehensive web development solutions tailored to your needs",
    "services.web-dev.features.cta": "Ready to start building?",
    "services.web-dev.features.clean.title": "Clean Code",
    "services.web-dev.features.clean.description": "Well-structured, maintainable code following industry best practices and standards",
    "services.web-dev.features.responsive.title": "Responsive Design",
    "services.web-dev.features.responsive.description": "Websites that look and work perfectly on all devices, from mobile to desktop",
    "services.web-dev.features.performance.title": "Fast Performance",
    "services.web-dev.features.performance.description": "Optimized for speed with lightning-fast load times and smooth interactions",
    "services.web-dev.features.security.title": "Security First",
    "services.web-dev.features.security.description": "Built with security in mind, protecting your data and your users",
    "services.web-dev.features.seo.title": "SEO Optimized",
    "services.web-dev.features.seo.description": "Search engine friendly structure to help your site rank higher in results",
    "services.web-dev.features.browser.title": "Cross-Browser",
    "services.web-dev.features.browser.description": "Compatible with all major browsers for maximum reach and accessibility",
    "services.web-dev.technologies.badge": "Modern Stack",
    "services.web-dev.technologies.title": "Technologies We Use",
    "services.web-dev.technologies.subtitle": "Modern tools and frameworks for cutting-edge solutions",
    "services.web-dev.technologies.cta": "Explore our tech stack",
    "services.web-dev.process.badge": "Our Approach",
    "services.web-dev.process.title": "Our Process",
    "services.web-dev.process.subtitle": "A structured approach to deliver your project on time and on budget",
    "services.web-dev.process.cta": "See how we work",
    "services.web-dev.process.discovery.title": "Discovery & Planning",
    "services.web-dev.process.discovery.description": "We start by understanding your business goals, target audience, and project requirements to create a detailed roadmap.",
    "services.web-dev.process.design.title": "Design & Prototyping",
    "services.web-dev.process.design.description": "Our designers create wireframes and mockups to visualize the final product before development begins.",
    "services.web-dev.process.development.title": "Development",
    "services.web-dev.process.development.description": "We build your website using modern technologies, following best practices and maintaining clear communication.",
    "services.web-dev.process.testing.title": "Testing & QA",
    "services.web-dev.process.testing.description": "Rigorous testing across devices and browsers to ensure everything works flawlessly before launch.",
    "services.web-dev.process.launch.title": "Launch & Support",
    "services.web-dev.process.launch.description": "We deploy your website and provide ongoing support to keep it running smoothly and up-to-date.",
    "services.web-dev.faq.badge": "Common Questions",
    "services.web-dev.faq.title": "Frequently Asked Questions",
    "services.web-dev.faq.subtitle": "Common questions about our web development services",
    "services.web-dev.faq.cta": "Still have questions?",
    "services.web-dev.faq.timeline.question": "How long does it take to build a website?",
    "services.web-dev.faq.timeline.answer": "The timeline varies depending on the project scope and complexity. A simple website typically takes 4-6 weeks, while more complex applications can take 3-6 months. We'll provide a detailed timeline during the planning phase.",
    "services.web-dev.faq.cost.question": "What is the cost of web development?",
    "services.web-dev.faq.cost.answer": "Costs vary based on project requirements, features, and complexity. We offer flexible pricing models and will provide a detailed quote after understanding your specific needs. Contact us for a free consultation.",
    "services.web-dev.faq.maintenance.question": "Do you provide ongoing maintenance?",
    "services.web-dev.faq.maintenance.answer": "Yes, we offer comprehensive maintenance and support packages to keep your website secure, updated, and running smoothly. This includes regular updates, security patches, and technical support.",
    "services.web-dev.faq.mobile.question": "Will my website be mobile-friendly?",
    "services.web-dev.faq.mobile.answer": "All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices, from smartphones to tablets to desktop computers.",
    "services.web-dev.faq.seo.question": "Can you help with SEO?",
    "services.web-dev.faq.seo.answer": "Yes, we build all websites with SEO best practices in mind, including proper structure, meta tags, and performance optimization. We also offer dedicated SEO services for ongoing optimization and ranking improvements.",
    "services.web-dev.cta.title": "Ready to Build Your Website?",
    "services.web-dev.cta.subtitle": "Let's discuss your project and create a website that helps your business succeed online.",
    "services.web-dev.cta.button.primary": "Get a Free Quote",
    "services.web-dev.cta.button.secondary": "View Our Work",

    // Process
    "process.title": "How We Work",
    "process.subtitle": "Our proven process ensures successful project delivery from concept to launch",
    "process.discover": "Discover",
    "process.design": "Design",
    "process.develop": "Develop",
    "process.launch": "Launch",
    "process.support": "Support",
    "process.discover.desc": "We analyze your business needs, target audience, and project goals to create a strategic roadmap.",
    "process.design.desc": "Our designers craft beautiful, user-centric interfaces that align with your brand identity.",
    "process.develop.desc": "We build robust, scalable solutions using cutting-edge technologies and best practices.",
    "process.launch.desc": "We deploy your project with thorough testing and ensure a smooth, successful launch.",
    "process.support.desc": "Ongoing maintenance, updates, and support to keep your digital presence running smoothly.",
    "process.badge": "Our Process",
    "process.cta": "Let's get started",

    // Portfolio
    "portfolio.title": "Our Portfolio",
    "portfolio.badge": "Featured Work",
    "portfolio.subtitle": "Showcasing our best work and successful projects that drive results",
    "portfolio.view-all": "View All Projects",
    "portfolio.explore": "Explore Projects",
    "portfolio.discuss": "Discuss Project",
    "portfolio.stats.projects": "Projects Completed",
    "portfolio.stats.satisfaction": "Client Satisfaction",
    "portfolio.stats.support": "Support Available",
    "portfolio.filter.badge": "Project Categories",
    "portfolio.filter.title": "Browse Our Work",
    "portfolio.filter.subtitle": "Filter through our diverse portfolio of successful projects across different industries",
    "portfolio.viewDetails": "View Details",
    "portfolio.liveDemo": "Live Demo",
    "portfolio.noProjects": "No projects found in this category.",
    "portfolio.filter.all": "All Projects",
    "portfolio.filter.webdev": "Web Development",
    "portfolio.filter.ecommerce": "E-commerce",
    "portfolio.filter.saas": "SaaS",
    "portfolio.notfound.title": "Project Not Found",
    "portfolio.notfound.description": "The project you're looking for doesn't exist or has been removed.",
    "portfolio.notfound.button": "View All Projects",
    "portfolio.cta.title": "Ready to Start Your Project?",
    "portfolio.cta.subtitle":
      "Let's create something amazing together. Get in touch to discuss your project requirements and bring your vision to life.",
    "portfolio.cta.button.primary": "Get Started",
    "portfolio.cta.button.secondary": "View Services",

    // Project Details
    "project.backToPortfolio": "Back to Portfolio",
    "project.overview": "Project Overview",
    "project.keyFeatures": "Key Features",
    "project.userExperience": "User Experience",
    "project.performance": "Performance",
    "project.reliability": "Reliability",
    "project.scalability": "Scalability",
    "project.technologiesUsed": "Technologies Used",
    "project.quickActions": "Quick Actions",
    "project.shareProject": "Share Project",
    "project.viewLiveDemo": "View Live Demo",
    "project.sourceCode": "Source Code",
    "project.projectDetails": "Project Details",
    "project.techStack": "Tech Stack",
    "project.technologies": "technologies",
    "project.client": "Client",
    "project.duration": "Duration",
    "project.duration.3months": "3 months",
    "project.duration.4months": "4 months",
    "project.duration.5months": "5 months",
    "project.duration.6months": "6 months",
    "project.duration.7months": "7 months",
    "project.projectRating": "Project Rating",
    "project.functionality": "Functionality",
    "project.design": "Design",
    "project.live": "Live",
    "project.more": "more",
    "project.rating": "4.8",
    "project.reviews": "127 reviews",
    "project.userExperienceDesc": "Intuitive design with seamless navigation and responsive layout across all devices",
    "project.performanceDesc": "Optimized for speed with efficient database queries and caching strategies",
    "project.reliabilityDesc": "Robust architecture with 99.9% uptime and comprehensive error handling",
    "project.scalabilityDesc": "Built to grow with your business, handling increased traffic and data seamlessly",
    "project.testimonialQuote": "Oren transformed our online business. The new platform is fast, beautiful, and our sales have more than doubled since launch.",
    "project.testimonialAuthor": "Sarah Johnson",
    "project.testimonialRole": "CEO, Fashion Retailer",

    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Don't just take our word for it - hear from businesses we've helped succeed",

    // CTA
    "cta.title": "Ready to Start Your Project?",
    "cta.subtitle":
      "Let's discuss how we can help transform your digital presence and achieve your business goals together.",
    "cta.button": "Get Started",

    // Footer
    "footer.description": "Professional web development and digital solutions that drive growth for startups and enterprises.",
    "footer.stayUpdated": "Stay updated",
    "footer.emailPlaceholder": "Enter your email",
    "footer.subscribe": "Subscribe",
    "footer.newsletter": "Stay updated",
    "footer.newsletter.placeholder": "Enter your email",
    "footer.newsletter.button": "Subscribe",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.rights": "All rights reserved.",
    "footer.services.web-dev": "Web Development",
    "footer.services.custom-platforms": "Custom Platforms",
    "footer.services.ecommerce": "E-commerce",
    "footer.services.digital-marketing": "Digital Marketing",
    "footer.legal.privacy": "Privacy Policy",
    "footer.legal.terms": "Terms of Service",
    "footer.legal.accessibility": "Accessibility",
    "footer.social.github": "GitHub",
    "footer.social.linkedin": "LinkedIn",
    "footer.social.twitter": "Twitter",
    "footer.social.email": "Email",

    // Contact Form
    "contact.title": "Get in Touch",
    "contact.subtitle": "Have a project in mind? Let's discuss how we can help bring your vision to life.",
    "contact.form.title": "Send us a Message",
    "contact.form.subtitle": "Fill out the form below and we'll get back to you within 24 hours.",
    "contact.form.name": "Full Name",
    "contact.form.namePlaceholder": "John Doe",
    "contact.form.company": "Company",
    "contact.form.companyPlaceholder": "Your Company",
    "contact.form.email": "Email Address",
    "contact.form.emailPlaceholder": "john@company.com",
    "contact.form.phone": "Phone Number",
    "contact.form.phonePlaceholder": "+1 (234) 567-890",
    "contact.form.service": "Service Needed",
    "contact.form.servicePlaceholder": "Select a service",
    "contact.form.budget": "Project Budget",
    "contact.form.budgetPlaceholder": "Select budget range",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Tell us about your project, goals, and timeline...",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending Message...",
    "contact.form.sent": "Message Sent!",
    "contact.form.send": "Send Message",
    "contact.form.success": "Thank you! We'll get back to you within 24 hours.",
    "contact.hero.badge": "Let's start a conversation",
    "contact.hero.title": "Get In Touch",
    "contact.hero.title.highlight": "with us",
    "contact.hero.subtitle": "Ready to bring your vision to life? Let's discuss your project and explore how we can help you achieve your goals.",
    "contact.hero.cta.email": "Send Email",
    "contact.hero.cta.call": "Call Now",
    "contact.info.title": "Get in Touch",
    "contact.info.subtitle": "Ready to start your next project? We'd love to hear from you.",
    "contact.info.emailLabel": "Email",
    "contact.info.phoneLabel": "Phone",
    "contact.info.officeLabel": "Office",
    "contact.hours.title": "Business Hours",
    "contact.hours.mondayFriday": "Monday - Friday",
    "contact.hours.saturday": "Saturday",
    "contact.hours.sunday": "Sunday",
    "contact.hours.mondayFridayTime": "9:00 AM - 6:00 PM",
    "contact.hours.saturdayTime": "10:00 AM - 4:00 PM",
    "contact.hours.sundayTime": "Closed",
    "contact.form.services.webdev": "Web Development",
    "contact.form.services.platforms": "Custom Platforms",
    "contact.form.services.ecommerce": "E-commerce",
    "contact.form.services.marketing": "Digital Marketing",
    "contact.form.services.social": "Social Media",
    "contact.form.services.design": "Design",
    "contact.form.services.other": "Other",
    "contact.form.budgets.5k10k": "$5,000 - $10,000",
    "contact.form.budgets.10k25k": "$10,000 - $25,000",
    "contact.form.budgets.25k50k": "$25,000 - $50,000",
    "contact.form.budgets.50k": "$50,000+",
    "contact.form.budgets.unsure": "Not sure yet",
    "contact.form.sending": "Sending Message...",
    "contact.form.sent": "Message Sent!",
    "contact.form.send": "Send Message",
    "contact.form.success": "Thank you! We'll get back to you within 24 hours.",

    // Blog
    "blog.title": "Latest Insights",
    "blog.subtitle": "Explore our thoughts on web development, design, and digital innovation",
    "blog.hero.title": "Blog & Insights",
    "blog.hero.titleHighlight": "Insights",
    "blog.hero.badge": "Latest Updates",
    "blog.hero.subtitle": "Expert insights, tutorials, and industry trends to help you stay ahead in the digital world",
    "blog.hero.cta.primary": "Explore Articles",
    "blog.hero.cta.contact": "Get in Touch",
    "blog.searchPlaceholder": "Search articles...",
    "blog.categories": "Categories",
    "blog.category.all": "All Posts",
    "blog.category.webdev": "Web Development",
    "blog.category.design": "Design",
    "blog.category.marketing": "Marketing",
    "blog.category.technology": "Technology",
    "blog.minRead": "min read",
    "blog.empty.title": "No articles found matching your criteria.",
    "blog.empty.search": "No articles found for",
    "blog.readTime": "min read",
    "blog.backToBlog": "Back to Blog",
    "blog.shareArticle": "Share Article",
    "blog.relatedArticles": "Related Articles",
    "blog.newsletter.title": "Subscribe to Our Newsletter",
    "blog.newsletter.description":
      "Subscribe to our newsletter for the latest insights, tutorials, and industry news delivered to your inbox.",
    "blog.notfound.title": "Article Not Found",
    "blog.notfound.description": "The article you're looking for doesn't exist or has been removed.",
    "blog.notfound.button": "View All Articles",

    // Blog Post: Modern Web Development Trends in 2025
    "blog.post.trends2025.title": "Modern Web Development Trends in 2025",
    "blog.post.trends2025.excerpt": "Explore the latest trends shaping web development, from AI integration to progressive web apps and beyond.",

    // Blog Post: Next.js Performance Optimization
    "blog.post.nextjsPerformance.title": "Next.js Performance Optimization Tips",
    "blog.post.nextjsPerformance.excerpt": "Learn essential strategies to boost your website's speed and user engagement with these Next.js optimization techniques.",
    "blog.post.nextjsPerformance.content": `
      <div class="lead">
        <p>Next.js is already optimized for performance out of the box, but there are many techniques you can use to make your applications even faster. This guide covers practical optimization strategies that can significantly improve your Next.js app's performance.</p>
      </div>

      <h2>Image Optimization</h2>
      <p>Next.js's Image component automatically optimizes images, but you need to use it correctly. Always specify width and height to prevent layout shifts, use the priority prop for above-the-fold images, and choose the right format (WebP for modern browsers).</p>

      <p>Consider using blur placeholders for a better perceived performance. The Image component supports both static imports and dynamic URLs, with automatic optimization for both.</p>

      <h2>Code Splitting and Dynamic Imports</h2>
      <p>Next.js automatically code-splits at the page level, but you can further optimize by dynamically importing heavy components. Use next/dynamic for components that aren't needed immediately or are only used in certain conditions.</p>

      <p>For example, dynamically import modals, charts, or rich text editors that aren't visible on initial page load. This reduces the initial JavaScript bundle size significantly.</p>

      <h2>Server Components and Streaming</h2>
      <p>Next.js 13+ introduces React Server Components, which run on the server and send only the rendered HTML to the client. This dramatically reduces the JavaScript bundle size and improves initial page load.</p>

      <p>Use streaming with Suspense boundaries to show content progressively as it becomes available. This improves perceived performance by showing users something quickly rather than waiting for everything to load.</p>

      <h2>Font Optimization</h2>
      <p>Use next/font to automatically optimize and self-host fonts. This eliminates external network requests and prevents layout shifts caused by font loading. The font files are cached efficiently and loaded with optimal strategies.</p>

      <p>Preload critical fonts and use font-display: swap to ensure text remains visible during font loading. Consider using system fonts for body text to eliminate font loading entirely.</p>

      <h2>API Route Optimization</h2>
      <p>Implement caching strategies for API routes using Cache-Control headers. Use ISR (Incremental Static Regeneration) for pages that need to be updated periodically but don't require real-time data.</p>

      <p>Consider using edge functions for API routes that need low latency globally. Edge functions run closer to users, reducing response times significantly.</p>

      <h2>Database Query Optimization</h2>
      <p>Optimize database queries by selecting only needed fields, using proper indexes, and implementing connection pooling. Consider using a caching layer like Redis for frequently accessed data.</p>

      <p>Use parallel data fetching where possible to reduce waterfall requests. Next.js Server Components make it easy to fetch data in parallel at the component level.</p>

      <h2>Bundle Analysis</h2>
      <p>Regularly analyze your bundle size using @next/bundle-analyzer. Identify large dependencies and consider alternatives or lazy loading. Remove unused dependencies and tree-shake libraries properly.</p>

      <p>Pay special attention to third-party scripts. Use next/script with the appropriate loading strategy (afterInteractive, lazyOnload) to prevent blocking the main thread.</p>

      <h2>Monitoring and Metrics</h2>
      <p>Use Vercel Analytics or similar tools to monitor real-world performance metrics. Track Core Web Vitals, Time to First Byte (TTFB), and other key metrics to identify performance regressions.</p>

      <p>Set up performance budgets and automated alerts to catch performance issues before they reach production.</p>

      <h2>Conclusion</h2>
      <p>Performance optimization is an ongoing process. Start with the biggest wins—image optimization, code splitting, and proper caching—then progressively enhance. Always measure the impact of your optimizations with real-world data.</p>
    `,

    // Blog Post: SEO Strategies
    "blog.post.seoStrategies.title": "SEO Strategies That Actually Work in 2025",
    "blog.post.seoStrategies.excerpt": "Discover proven SEO techniques to improve your website's visibility and drive organic traffic.",
    "blog.post.seoStrategies.content": `
      <div class="lead">
        <p>Search Engine Optimization continues to evolve, with Google's algorithms becoming increasingly sophisticated. In 2025, successful SEO requires a holistic approach that combines technical excellence, quality content, and user experience optimization.</p>
      </div>

      <h2>Core Web Vitals and Page Experience</h2>
      <p>Google's Core Web Vitals—Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS)—remain critical ranking factors. These metrics measure loading performance, interactivity, and visual stability.</p>

      <p>To optimize Core Web Vitals, focus on image optimization, efficient JavaScript loading, proper font loading strategies, and eliminating layout shifts. Tools like PageSpeed Insights and Lighthouse can help identify and fix issues.</p>

      <h2>Content Quality and E-E-A-T</h2>
      <p>Google's E-E-A-T framework (Experience, Expertise, Authoritativeness, and Trustworthiness) is more important than ever. Create content that demonstrates real expertise and provides genuine value to users.</p>

      <p>Include author bios with credentials, cite authoritative sources, keep content updated, and ensure factual accuracy. For YMYL (Your Money or Your Life) topics like health and finance, E-E-A-T is especially critical.</p>

      <h2>Semantic Search and Intent Optimization</h2>
      <p>Modern SEO goes beyond keywords to understanding user intent. Google's algorithms now understand context, synonyms, and related concepts through natural language processing.</p>

      <p>Structure your content to answer specific questions and solve user problems. Use schema markup to help search engines understand your content's context and meaning. Focus on topic clusters rather than individual keywords.</p>

      <h2>Technical SEO Fundamentals</h2>
      <p>Ensure your site has a clean URL structure, proper XML sitemaps, and robots.txt configuration. Implement structured data markup for rich snippets. Fix broken links, duplicate content, and crawl errors.</p>

      <p>Mobile-first indexing means your mobile site is what Google primarily uses for ranking. Ensure your mobile experience is excellent, with fast loading times and easy navigation.</p>

      <h2>Link Building in 2025</h2>
      <p>Quality over quantity remains the golden rule for backlinks. Focus on earning links from authoritative, relevant sites through great content, digital PR, and relationship building.</p>

      <p>Guest posting, broken link building, and creating linkable assets like original research or comprehensive guides are effective strategies. Avoid link schemes and low-quality directories.</p>

      <h2>Local SEO</h2>
      <p>For businesses with physical locations, local SEO is crucial. Optimize your Google Business Profile, ensure NAP (Name, Address, Phone) consistency across the web, and encourage customer reviews.</p>

      <p>Create location-specific content and build local citations. Local link building from community organizations and local news sites can significantly boost local rankings.</p>

      <h2>Measuring Success</h2>
      <p>Track organic traffic, keyword rankings, conversion rates, and engagement metrics. Use Google Search Console to monitor performance and identify opportunities. Set up goal tracking in Google Analytics to measure SEO's impact on business objectives.</p>

      <h2>Conclusion</h2>
      <p>SEO in 2025 requires a comprehensive approach that balances technical optimization, quality content creation, and user experience. Stay updated with algorithm changes, focus on providing value to users, and be patient—SEO is a long-term investment that pays dividends over time.</p>
    `,

    // Blog Post: Next.js Performance Optimization
    "blog.post.nextjsPerformance.title": "Next.js Performance Optimization Tips",
    "blog.post.nextjsPerformance.excerpt": "Learn essential strategies to boost your website's speed and user engagement with these Next.js optimization techniques.",

    // Blog Post: AI in Web Development
    "blog.post.aiInWebDev.title": "How AI is Transforming Web Development",
    "blog.post.aiInWebDev.excerpt": "Discover how artificial intelligence is revolutionizing web development processes, from code generation to personalized user experiences.",
    "blog.post.aiInWebDev.content": `
      <div class="lead">
        <p>Artificial Intelligence is fundamentally changing how we approach web development. From code generation to automated testing and intelligent user experiences, AI is making developers more productive while enabling entirely new types of applications.</p>
      </div>

      <h2>AI-Assisted Coding</h2>
      <p>Tools like GitHub Copilot, ChatGPT, and specialized coding assistants are transforming the development workflow. These tools can generate boilerplate code, suggest completions, explain complex code, and even help debug issues.</p>

      <p>The key is learning to work effectively with AI assistants. They're best used for routine tasks, generating test cases, writing documentation, and exploring different approaches to problems. Developers still need to understand the code, make architectural decisions, and ensure quality.</p>

      <h2>Automated Testing and QA</h2>
      <p>AI-powered testing tools can automatically generate test cases, identify edge cases, and even predict where bugs are likely to occur. Visual regression testing tools use AI to detect unintended UI changes.</p>

      <p>Machine learning models can analyze code changes and predict their impact, helping teams prioritize testing efforts. This leads to better test coverage and faster release cycles.</p>

      <h2>Intelligent User Experiences</h2>
      <p>AI enables personalized user experiences at scale. Recommendation engines, chatbots, and adaptive interfaces can tailor content and functionality to individual users based on their behavior and preferences.</p>

      <p>Natural language processing allows users to interact with applications conversationally. Computer vision enables features like image recognition, document scanning, and augmented reality experiences directly in the browser.</p>

      <h2>Code Review and Quality Assurance</h2>
      <p>AI tools can review code for potential bugs, security vulnerabilities, and performance issues. They can suggest improvements, identify code smells, and ensure adherence to coding standards.</p>

      <p>These tools learn from millions of code repositories, identifying patterns that human reviewers might miss. They complement human code review by catching routine issues, allowing reviewers to focus on architecture and business logic.</p>

      <h2>Performance Optimization</h2>
      <p>AI can analyze application performance and suggest optimizations. It can identify slow database queries, inefficient algorithms, and resource bottlenecks. Some tools can even automatically apply optimizations.</p>

      <p>Predictive analytics can forecast traffic patterns and automatically scale resources, ensuring optimal performance while minimizing costs.</p>

      <h2>Accessibility Improvements</h2>
      <p>AI-powered tools can automatically generate alt text for images, suggest ARIA labels, and identify accessibility issues. Some tools can even automatically fix common accessibility problems.</p>

      <p>Voice interfaces powered by AI make applications more accessible to users with disabilities, while real-time translation breaks down language barriers.</p>

      <h2>Content Generation and Management</h2>
      <p>AI can generate content, from product descriptions to blog posts. While human oversight is still necessary, AI can significantly speed up content creation and help maintain consistency.</p>

      <p>Intelligent content management systems can automatically tag and categorize content, suggest related articles, and optimize content for search engines.</p>

      <h2>The Future of AI in Web Development</h2>
      <p>We're just scratching the surface of what's possible. Future developments might include AI that can design entire applications from natural language descriptions, automatically refactor legacy code, or predict and prevent production issues before they occur.</p>

      <p>The role of developers is evolving from writing every line of code to orchestrating AI tools, making high-level decisions, and ensuring quality and ethics in AI-generated solutions.</p>

      <h2>Conclusion</h2>
      <p>AI is not replacing developers—it's augmenting their capabilities. By embracing AI tools and learning to work effectively with them, developers can be more productive, creative, and focused on solving complex problems. The future of web development is a collaboration between human creativity and artificial intelligence.</p>
    `,

    // Blog Post: UI Design Principles
    "blog.post.uiDesignPrinciples.title": "Essential UI Design Principles for 2025",
    "blog.post.uiDesignPrinciples.excerpt": "Master the fundamental principles of user interface design to create beautiful, functional interfaces.",
    "blog.post.uiDesignPrinciples.content": `
      <div class="lead">
        <p>Great user interface design is both an art and a science. While trends come and go, certain fundamental principles remain constant. Understanding and applying these principles will help you create interfaces that are not only beautiful but also functional and user-friendly.</p>
      </div>

      <h2>Visual Hierarchy</h2>
      <p>Visual hierarchy guides users through your interface by establishing the order of importance. Use size, color, contrast, and spacing to direct attention to the most important elements first.</p>

      <p>Primary actions should be the most prominent, secondary actions less so, and tertiary actions subtle. Headlines should be larger than body text, and important information should stand out through contrast or positioning.</p>

      <h2>Consistency and Standards</h2>
      <p>Consistency creates familiarity and reduces cognitive load. Use consistent colors, typography, spacing, and interaction patterns throughout your interface. Follow platform conventions so users can apply their existing knowledge.</p>

      <p>Create and maintain a design system with reusable components, defined spacing scales, and clear guidelines. This ensures consistency across your product and speeds up the design and development process.</p>

      <h2>White Space and Breathing Room</h2>
      <p>White space (or negative space) is not wasted space—it's a crucial design element. Proper spacing improves readability, creates visual hierarchy, and makes interfaces feel less cluttered and more premium.</p>

      <p>Don't be afraid of empty space. Give your content room to breathe. Use generous padding and margins, especially around important elements. Group related items together and separate unrelated ones.</p>

      <h2>Typography and Readability</h2>
      <p>Typography is fundamental to UI design. Choose fonts that are readable at various sizes and weights. Maintain a clear hierarchy with distinct heading levels and body text.</p>

      <p>Use a line height of 1.5-1.6 for body text, limit line length to 50-75 characters for optimal readability, and ensure sufficient contrast between text and background. Consider using system fonts for better performance and familiarity.</p>

      <h2>Color Theory and Accessibility</h2>
      <p>Color communicates meaning, creates mood, and guides attention. Use a limited color palette—typically one primary color, one or two accent colors, and a range of neutrals.</p>

      <p>Ensure sufficient contrast for accessibility (4.5:1 for normal text, 3:1 for large text). Don't rely on color alone to convey information—use icons, labels, or patterns as well. Test your designs in grayscale to verify hierarchy works without color.</p>

      <h2>Feedback and Affordances</h2>
      <p>Provide clear feedback for user actions. Buttons should have hover, active, and disabled states. Show loading indicators for async operations. Display success or error messages clearly.</p>

      <p>Use affordances—visual cues that suggest how an element should be used. Buttons should look clickable, links should be distinguishable, and interactive elements should respond to user input.</p>

      <h2>Mobile-First and Responsive Design</h2>
      <p>Design for mobile first, then enhance for larger screens. This ensures your core experience works on the most constrained devices. Use responsive layouts that adapt gracefully to different screen sizes.</p>

      <p>Consider touch targets—make interactive elements at least 44x44 pixels for easy tapping. Ensure important actions are reachable with one hand on mobile devices.</p>

      <h2>Progressive Disclosure</h2>
      <p>Don't overwhelm users with too much information at once. Use progressive disclosure to show only what's necessary initially, revealing additional options or information as needed.</p>

      <p>This can be achieved through expandable sections, multi-step forms, tooltips, or modal dialogs. The goal is to reduce cognitive load while keeping advanced features accessible.</p>

      <h2>Conclusion</h2>
      <p>These principles form the foundation of good UI design. While trends and tools change, these fundamentals remain relevant. Practice applying them consistently, and you'll create interfaces that are both beautiful and highly functional.</p>
    `,

    // Blog Post: Designing for Accessibility
    "blog.post.accessibility.title": "Designing for Accessibility: A Complete Guide",
    "blog.post.accessibility.excerpt": "Learn how to create inclusive digital experiences that work for everyone, regardless of their abilities.",
    "blog.post.accessibility.content": `
      <div class="lead">
        <p>Accessibility in web design isn't just a legal requirement—it's a moral imperative and good business practice. Creating accessible websites ensures that everyone, regardless of their abilities, can access and interact with your content.</p>
      </div>

      <h2>Understanding Web Accessibility</h2>
      <p>Web accessibility means designing and developing websites, tools, and technologies so that people with disabilities can use them. This includes people with auditory, cognitive, neurological, physical, speech, and visual disabilities.</p>

      <p>According to the World Health Organization, over 1 billion people worldwide have some form of disability. By making your website accessible, you're not just complying with regulations—you're opening your business to a significant portion of the population.</p>

      <h2>WCAG Guidelines</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) provide a comprehensive framework for web accessibility. The guidelines are organized around four principles: Perceivable, Operable, Understandable, and Robust (POUR).</p>

      <p>WCAG 2.1 Level AA is the standard most organizations aim for, as it's often required by law in many countries. This includes requirements like providing text alternatives for images, ensuring keyboard navigation, maintaining sufficient color contrast, and making content readable and understandable.</p>

      <h2>Practical Implementation</h2>
      <p>Start with semantic HTML—use proper heading hierarchies, lists, and landmarks. Add ARIA labels where necessary, but remember that native HTML elements are often better than ARIA attributes.</p>

      <p>Ensure all interactive elements are keyboard accessible. Test your site by navigating with only a keyboard—if you can't reach or activate something, neither can users who rely on keyboards or assistive technologies.</p>

      <h2>Color and Contrast</h2>
      <p>Color contrast is crucial for users with visual impairments. WCAG requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text. Use tools like the WebAIM Contrast Checker to verify your color choices.</p>

      <p>Never rely on color alone to convey information. Always provide additional visual cues like icons, patterns, or text labels.</p>

      <h2>Testing and Tools</h2>
      <p>Use automated testing tools like axe DevTools, WAVE, or Lighthouse to catch common accessibility issues. However, automated tools only catch about 30% of accessibility problems—manual testing is essential.</p>

      <p>Test with actual screen readers like NVDA, JAWS, or VoiceOver. Better yet, involve users with disabilities in your testing process to get real-world feedback.</p>

      <h2>Conclusion</h2>
      <p>Accessibility should be considered from the start of any project, not added as an afterthought. By following these guidelines and making accessibility a priority, you'll create better experiences for all users while expanding your potential audience.</p>
    `,
    "blog.post.trends2025.content": `
      <div class="lead">
        <p>The web development landscape is evolving faster than ever. In 2025, developers and digital agencies are embracing new tools and technologies that prioritize <strong>speed, user experience, AI-integration, and sustainability</strong>. Whether you're a brand owner, developer, or designer, understanding these trends can help you stay competitive in a digital-first world.</p>
      </div>

      <section class="trend-section">
        <h2>AI-Driven Development & Automation</h2>
        <p>Artificial Intelligence is transforming the way websites are built and maintained. From <strong>AI-powered code generation</strong> tools like GitHub Copilot to <strong>personalized UX based on user behavior</strong>, automation is cutting development time and boosting creativity.</p>
        <div class="trend-highlight">
          <p><strong>Key Insight:</strong> AI chatbots and content assistants are now standard for websites, not luxuries.</p>
        </div>
      </section>

      <section class="trend-section mt-0">
        <h2>Performance-First Architecture</h2>
        <p>Google's focus on <strong>Core Web Vitals</strong> continues in 2025. Fast loading times, smooth interactivity, and visual stability are more important than ever. Developers are using <strong>Next.js 14, Astro, and Vite</strong> to build ultra-fast, performance-driven websites.</p>
        <div class="trend-highlight mb-0">
          <p><strong>Pro Tip:</strong> Optimize images, implement lazy loading, and leverage edge caching for global audiences.</p>
        </div>
      </section>

      <section class="trend-section">
        <h2>Serverless & Edge Computing</h2>
        <p>Serverless architecture and <strong>edge deployment</strong> are redefining scalability. Platforms like <strong>Vercel, Netlify, and Cloudflare Workers</strong> allow developers to deploy code closer to users, improving latency and performance dramatically.</p>
        <p>This shift also reduces costs and simplifies backend infrastructure management.</p>
      </section>

      <section class="trend-section">
        <h2>Progressive Web Apps (PWAs) 2.0</h2>
        <p>PWAs continue to blur the line between web and native mobile apps. In 2025, they support <strong>push notifications, offline access, and full-screen capabilities</strong> even better.</p>
        <p>Brands use them to deliver app-like experiences without the cost of native development.</p>
      </section>

      <section class="trend-section">
        <h2>Motion UI & Interactive Design</h2>
        <p>Static designs are out. Motion UI, <strong>micro-animations</strong>, and <strong>3D scroll effects</strong> are leading the way to immersive experiences. Tools like <strong>Framer Motion</strong> and <strong>GSAP</strong> make it easy to add personality and emotion to interfaces.</p>
        <div class="trend-highlight warning">
          <p><strong>Important:</strong> Motion should enhance UX — not overwhelm it.</p>
        </div>
      </section>

      <section class="trend-section">
        <h2>Sustainable Web Design</h2>
        <p>Eco-friendly design is not just a buzzword. Websites are now optimized to <strong>consume less energy</strong>, using <strong>dark themes, minimal resources, and efficient code</strong>. Developers and agencies are prioritizing green hosting solutions to reduce carbon footprints.</p>
      </section>

      <section class="trend-section">
        <h2>Security & Privacy by Design</h2>
        <p>As users become more privacy-aware, <strong>secure authentication systems</strong>, <strong>zero-trust architecture</strong>, and <strong>encrypted APIs</strong> are now standard. Compliance with GDPR, CCPA, and global data policies remains a top priority for developers and brands.</p>
      </section>

      <section class="trend-section">
        <h2>Low-Code Revolution</h2>
        <p>Businesses want to move fast. Low-code and no-code tools like <strong>Webflow, Bubble, and Builder.io</strong> empower non-developers to create functional prototypes — while developers focus on integrations, performance, and custom logic.</p>
      </section>

      <section class="trend-section">
        <h2>Headless & Composable Architecture</h2>
        <p>Headless CMSs such as <strong>Strapi, Sanity, and Contentful</strong> dominate 2025, offering flexibility across devices and platforms. Paired with <strong>JAMstack</strong> and <strong>GraphQL</strong>, they enable faster content delivery and a seamless multi-channel experience.</p>
      </section>

      <section class="trend-section">
        <h2>Web3 & Blockchain Integration</h2>
        <p>Web3 adoption is rising with <strong>decentralized authentication, smart contracts</strong>, and <strong>digital ownership</strong> features. While still early for mainstream brands, more startups are exploring blockchain-based user identity and NFT-linked memberships.</p>
      </section>

      <section class="key-takeaways">
        <h2>Key Takeaways</h2>
        <div class="takeaways-grid">
          <div class="takeaway-item">
            <strong>AI Integration:</strong> Automation tools are becoming essential for faster development
          </div>
          <div class="takeaway-item">
            <strong>Performance First:</strong> Core Web Vitals and optimization are non-negotiable
          </div>
          <div class="takeaway-item">
            <strong>Sustainability:</strong> Green hosting and energy-efficient design matter
          </div>
          <div class="takeaway-item">
            <strong>Flexibility:</strong> Headless and composable architectures offer better scalability
          </div>
        </div>
      </section>

      <section class="conclusion">
        <h2>Looking Ahead</h2>
        <p>Web development in 2025 is defined by <strong>AI, automation, and agility</strong>. The key is balancing <strong>performance, creativity, and sustainability</strong>. At Oren, we're already adopting these modern technologies to build faster, smarter, and future-proof websites for our clients.</p>

        <div class="cta-box">
          <p><strong>Ready to embrace these trends?</strong> <a href="/contact">Contact us</a> to discuss how we can help transform your web presence with cutting-edge technology.</p>
        </div>
      </section>
    `,

    // About
    "about.title": "About Oren",
    "about.hero.badge": "Get to know our story",
    "about.hero.title": "About Oren",
    "about.hero.subtitle": "We're a team of passionate developers, designers, and strategists dedicated to building exceptional digital experiences that drive business growth and transform ideas into reality.",
    "about.hero.cta.primary": "Start Your Project",
    "about.hero.cta.secondary": "View Our Work",
    "about.hero.stats.projects": "Projects Completed",
    "about.hero.stats.satisfaction": "Client Satisfaction",
    "about.hero.stats.support": "Support Available",
    "about.stats.title": "Our Impact in Numbers",
    "about.stats.subtitle": "Trusted by businesses worldwide for delivering exceptional results",
    "about.mission.title": "Our Mission",
    "about.mission.description": "To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving digital landscape. We believe in the power of technology to transform businesses and improve lives.",
    "about.vision.title": "Our Vision",
    "about.vision.description": "To be the trusted partner for businesses seeking to transform their digital presence, recognized for our technical excellence, creative innovation, and unwavering commitment to client success. We aspire to set new standards in digital craftsmanship.",
    "about.mission.badge": "Our Foundation",
    "about.mission.cta": "Learn More About Us",
    "about.values.badge": "Our Principles",
    "about.values.cta": "Discover Our Values",
    "about.team.badge": "Meet the Team",
    "about.team.cta": "Get to Know Us",
    "about.vision.subtitle": "Our Mission & Vision",
    "about.vision.intro": "The driving forces that shape everything we do",
    "about.values.title": "Our Values",
    "about.values.subtitle": "The principles that guide everything we do",
    "about.values.client.title": "Client-Focused",
    "about.values.client.description": "Your success is our success. We prioritize understanding your goals and delivering solutions that exceed expectations.",
    "about.values.innovation.title": "Innovation",
    "about.values.innovation.description": "We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive advantage.",
    "about.values.collaboration.title": "Collaboration",
    "about.values.collaboration.description": "We work closely with your team, maintaining transparent communication throughout the entire project lifecycle.",
    "about.values.excellence.title": "Excellence",
    "about.values.excellence.description": "We're committed to delivering high-quality work that meets the highest standards of performance and design.",
    "about.team.title": "Meet Our Team",
    "about.team.subtitle": "Talented professionals passionate about creating exceptional digital experiences",
    "about.achievements.client.title": "Client Satisfaction",
    "about.achievements.client.description": "Consistently exceeding expectations",
    "about.achievements.projects.title": "Projects Completed",
    "about.achievements.projects.description": "Successful deliveries across various industries",
    "about.achievements.support.title": "Support Available",
    "about.achievements.support.description": "Always here when you need us",
    "about.achievements.experience.title": "Years Experience",
    "about.achievements.experience.description": "Building digital solutions since 2019",
    "about.team.ceo.role": "Founder & CEO",
    "about.team.ceo.bio": "10+ years of experience in web development and digital strategy",
    "about.team.cto.role": "CTO",
    "about.team.cto.bio": "Full-stack architect specializing in scalable cloud solutions",
    "about.team.design.role": "Head of Design",
    "about.team.design.bio": "Award-winning designer focused on user-centered experiences",
    "about.cta.title": "Ready to Work Together?",
    "about.cta.subtitle": "Let's discuss your project and see how we can help bring your vision to life with our expertise in web development, design, and digital strategy.",
    "about.cta.primary": "Start Your Project",
    "about.cta.secondary": "View Our Portfolio",
    "about.trust.available": "Available for new projects",
    "about.trust.consultation": "Free consultation",
    "about.trust.turnaround": "Quick turnaround",

    // 404
    "404.title": "Page Not Found",
    "404.description": "The page you're looking for doesn't exist or has been moved.",
    "404.home": "Go Home",
    "404.contact": "Contact Us",

    // Common
    "common.learnMore": "Learn More",
    "common.readMore": "Read More",
    "common.viewAll": "View All",
    "common.getStarted": "Get Started",
    "common.contactUs": "Contact Us",
    "common.backTo": "Back to",
    "common.loading": "Loading...",
    "common.live": "Live",
    "common.liveDemo": "Live Demo",
    "common.code": "Code",
    "common.sourceCode": "Source Code",
    "common.viewDetails": "View Details",
    "common.more": "more",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.portfolio": "الأعمال",
    "nav.about": "من نحن",
    "nav.blog": "المدونة",
    "nav.contact": "اتصل بنا",
    "nav.logo": "أورين",

    // Hero
    "hero.title": "ابنِ مستقبلك الرقمي",
    "hero.subtitle": "تطوير مواقع احترافية، منصات مخصصة، وحلول رقمية تدفع النمو للشركات الناشئة والمؤسسات.",
    "hero.cta.primary": "اطلب عرض",
    "hero.cta.secondary": "شاهد أعمالنا",
    "hero.badge": "متاح لمشاريع جديدة",
    "hero.stats.projects": "مشروع منجز",
    "hero.stats.satisfaction": "رضا العملاء",
    "hero.stats.experience": "سنوات خبرة",

    // Services
    "services.title": "خدماتنا",
    "services.subtitle": "حلول رقمية شاملة مصممة خصيصاً لاحتياجات عملك",
    "services.headerBadge": "ما نقدمه",
    "services.web-dev": "تطوير المواقع",
    "services.web-dev.desc": "مواقع وتطبيقات ويب مخصصة مبنية بتقنيات حديثة لأداء مثالي.",
    "services.custom-platforms": "منصات مخصصة",
    "services.custom-platforms.desc": "منصات رقمية مصممة خصيصاً لتلبية متطلبات عملك الفريدة.",
    "services.ecommerce": "حلول التجارة الإلكترونية",
    "services.ecommerce.desc": "متاجر إلكترونية كاملة مع مدفوعات آمنة وتجربة مستخدم سلسة.",
    "services.marketing": "التسويق الرقمي",
    "services.marketing.desc": "استراتيجيات تسويقية قائمة على البيانات لزيادة ظهورك على الإنترنت.",
    "services.social": "إدارة وسائل التواصل",
    "services.social.desc": "استراتيجيات شاملة لوسائل التواصل الاجتماعي لبناء علامتك التجارية.",
    "services.design": "تصميم واجهات المستخدم",
    "services.design.desc": "واجهات جميلة وبديهية توفر تجارب مستخدم استثنائية.",
    "services.web-dev.badge": "الأكثر شعبية",
    "services.design.badge": "مميز",
    "services.web-dev.feature.1": "تصميم متجاوب",
    "services.web-dev.feature.2": "تحسين الأداء",
    "services.web-dev.feature.3": "صديق لمحركات البحث",
    "services.web-dev.feature.4": "متوافق مع جميع المتصفحات",
    "services.custom-platforms.feature.1": "حلول مخصصة",
    "services.custom-platforms.feature.2": "هيكلية قابلة للتطوير",
    "services.custom-platforms.feature.3": "تكامل API",
    "services.custom-platforms.feature.4": "نشر سحابي",
    "services.ecommerce.feature.1": "تكامل المدفوعات",
    "services.ecommerce.feature.2": "إدارة المخزون",
    "services.ecommerce.feature.3": "تتبع الطلبات",
    "services.ecommerce.feature.4": "لوحة التحليلات",
    "services.marketing.feature.1": "تحسين محركات البحث",
    "services.marketing.feature.2": "استراتيجية المحتوى",
    "services.marketing.feature.3": "حملات PPC",
    "services.marketing.feature.4": "التحليلات والتقارير",
    "services.social.feature.1": "إنشاء المحتوى",
    "services.social.feature.2": "إدارة المجتمع",
    "services.social.feature.3": "تخطيط الحملات",
    "services.social.feature.4": "تتبع الأداء",
    "services.design.feature.1": "البحث عن المستخدمين",
    "services.design.feature.2": "الرسم السلكي",
    "services.design.feature.3": "إنشاء النماذج الأولية",
    "services.design.feature.4": "أنظمة التصميم",

    // Custom Platforms Service Page - Arabic
    "services.custom-platforms.hero.badge": "حلول مخصصة",
    "services.custom-platforms.hero.title": "تطوير المنصات المخصصة",
    "services.custom-platforms.hero.subtitle": "منصات رقمية مخصصة مبنية لتتناسب مع عمليات وعمليات عملك الفريدة والمتطلبات الخاصة بك",
    "services.custom-platforms.hero.button.primary": "ناقش مشروعك",
    "services.custom-platforms.hero.button.secondary": "شاهد دراسات الحالة",
    "services.custom-platforms.hero.cta": "ابدأ في بناء منصتك المخصصة اليوم",
    "services.custom-platforms.hero.stats.uptime": "ضمان التشغيل",
    "services.custom-platforms.hero.stats.support": "دعم متاح",
    "services.custom-platforms.hero.stats.scalable": "قابل للتطوير على مستوى المؤسسة",
    "services.custom-platforms.features.badge": "قدرات المنصة",
    "services.custom-platforms.features.title": "قدرات المنصة",
    "services.custom-platforms.features.subtitle": "ميزات قوية مصممة لتبسيط عملياتك",
    "services.custom-platforms.features.cta": "هل أنت مستعد لتوسيع نطاق عملك؟",
    "services.custom-platforms.features.performance.title": "أداء عالي",
    "services.custom-platforms.features.performance.description": "مبني للسرعة والكفاءة، يتعامل مع آلاف المستخدمين المتزامنين بسلاسة",
    "services.custom-platforms.features.database.title": "إدارة البيانات",
    "services.custom-platforms.features.database.description": "هيكلية قاعدة بيانات قوية للتخزين الآمن واسترجاع البيانات بكفاءة",
    "services.custom-platforms.features.cloud.title": "البنية التحتية السحابية",
    "services.custom-platforms.features.cloud.description": "نشر سحابي قابل للتطوير مع التحجيم التلقائي والتوفر العالي",
    "services.custom-platforms.features.security.title": "أمان المؤسسات",
    "services.custom-platforms.features.security.description": "إجراءات أمنية متقدمة تشمل التشفير والمصادقة والتحكم في الوصول",
    "services.custom-platforms.features.workflow.title": "سير العمل المخصص",
    "services.custom-platforms.features.workflow.description": "عمليات آلية مصممة خصيصاً لعمليات ومتطلبات عملك المحددة",
    "services.custom-platforms.features.analytics.title": "التحليلات والتقارير",
    "services.custom-platforms.features.analytics.description": "لوحات معلومات وتقارير شاملة لتتبع الأداء واتخاذ قرارات مبنية على البيانات",
    "services.custom-platforms.usecases.badge": "مثالي لـ",
    "services.custom-platforms.usecases.title": "مثالي لـ",
    "services.custom-platforms.usecases.subtitle": "الصناعات وحالات الاستخدام التي نتخصص فيها",
    "services.custom-platforms.usecases.cta": "اعثر على الحل المثالي لك",
    "services.custom-platforms.usecases.saas.title": "تطبيقات SaaS",
    "services.custom-platforms.usecases.saas.description": "منصات متعددة المستأجرين مع إدارة الاشتراكات والمصادقة واللوحات الغنية بالميزات",
    "services.custom-platforms.usecases.internal.title": "الأدوات الداخلية",
    "services.custom-platforms.usecases.internal.description": "تطبيقات أعمال مخصصة لتبسيط العمليات وإدارة الموارد وتحسين الإنتاجية",
    "services.custom-platforms.usecases.marketplace.title": "الأسواق",
    "services.custom-platforms.usecases.marketplace.description": "منصات ثنائية الجانب تربط المشترين والبائعين مع معالجة المدفوعات وإدارة المعاملات",
    "services.custom-platforms.usecases.booking.title": "أنظمة الحجز",
    "services.custom-platforms.usecases.booking.description": "منصات الحجز والجدولة مع تكامل التقويم والإشعارات ومعالجة المدفوعات",
    "services.custom-platforms.usecases.crm.title": "أنظمة إدارة العلاقات",
    "services.custom-platforms.usecases.crm.description": "أدوات إدارة علاقات العملاء مصممة خصيصاً لعملية المبيعات ورحلة العميل",
    "services.custom-platforms.usecases.learning.title": "منصات التعلم",
    "services.custom-platforms.usecases.learning.description": "منصات تعليمية مع إدارة الدورات وتتبع التقدم وتقديم المحتوى التفاعلي",
    "services.custom-platforms.cta.title": "دعنا نبني منصتك المخصصة",
    "services.custom-platforms.cta.subtitle": "احجز استشارة لمناقشة متطلباتك والحصول على اقتراح حل مخصص.",
    "services.custom-platforms.cta.button": "ابدأ مشروعك",

    // E-commerce Service Page - Arabic
    "services.ecommerce.hero.badge": "المتاجر الإلكترونية",
    "services.ecommerce.hero.title": "خدمات تطوير التجارة الإلكترونية",
    "services.ecommerce.hero.subtitle": "بناء متاجر إلكترونية قوية تدفع المبيعات وتوفر تجارب تسوق استثنائية",
    "services.ecommerce.hero.button.primary": "ابدأ الآن",
    "services.ecommerce.hero.button.secondary": "شاهد الأمثلة",
    "services.ecommerce.hero.cta": "ابدأ في البيع عبر الإنترنت اليوم",
    "services.ecommerce.hero.stats.uptime": "ضمان التشغيل",
    "services.ecommerce.hero.stats.stores": "متجر تم بناؤه",
    "services.ecommerce.hero.stats.compliant": "متوافق مع PCI DSS",
    "services.ecommerce.features.badge": "ميزات المتجر",
    "services.ecommerce.features.title": "ميزات المتجر",
    "services.ecommerce.features.subtitle": "كل ما تحتاجه لإدارة متجر إلكتروني ناجح",
    "services.ecommerce.features.cta": "هل أنت مستعد لبدء متجرك؟",
    "services.ecommerce.features.payments.title": "تكامل المدفوعات",
    "services.ecommerce.features.payments.description": "معالجة مدفوعات آمنة مع بوابات متعددة تشمل Stripe وPayPal وSquare",
    "services.ecommerce.features.inventory.title": "إدارة المخزون",
    "services.ecommerce.features.inventory.description": "تتبع المخزون في الوقت الفعلي وتنبيهات نقص المخزون والتحديثات التلقائية للمخزون",
    "services.ecommerce.features.analytics.title": "تحليلات المبيعات",
    "services.ecommerce.features.analytics.description": "لوحات معلومات شاملة لتتبع المبيعات وسلوك العملاء وأداء الأعمال",
    "services.ecommerce.features.security.title": "الأمان والامتثال",
    "services.ecommerce.features.security.description": "تشفير SSL والامتثال لمعايير PCI وحماية متقدمة من الاحتيال للمعاملات الآمنة",
    "services.ecommerce.features.mobile.title": "محسن للهواتف المحمولة",
    "services.ecommerce.features.mobile.description": "تصميم متجاوب يوفر تجربة تسوق سلسة عبر جميع الأجهزة",
    "services.ecommerce.features.performance.title": "أداء عالي",
    "services.ecommerce.features.performance.description": "أوقات تحميل سريعة وصور محسنة وعملية دفع سلسة لتحويلات أفضل",
    "services.ecommerce.technologies.badge": "مجموعة التجارة الإلكترونية",
    "services.ecommerce.technologies.title": "التقنيات التي نستخدمها",
    "services.ecommerce.technologies.subtitle": "منصات التجارة الإلكترونية الحديثة وحلول الدفع",
    "services.ecommerce.technologies.cta": "استكشف أدوات التجارة الإلكترونية لدينا",
    "services.ecommerce.process.badge": "عمليتنا",
    "services.ecommerce.process.title": "عمليتنا",
    "services.ecommerce.process.subtitle": "نهج مبسط لإطلاق متجرك الإلكتروني بنجاح",
    "services.ecommerce.process.cta": "شاهد كيف نبني المتاجر",
    "services.ecommerce.process.planning.title": "الاستراتيجية والتخطيط",
    "services.ecommerce.process.planning.description": "نحلل نموذج أعمالك والجمهور المستهدف والمنافسة لإنشاء استراتيجية رابحة.",
    "services.ecommerce.process.design.title": "التصميم وتجربة المستخدم",
    "services.ecommerce.process.design.description": "نصمم تصاميم جميلة تركز على التحويل تعكس علامتك التجارية وتوجه العملاء نحو الشراء.",
    "services.ecommerce.process.development.title": "التطوير والتكامل",
    "services.ecommerce.process.development.description": "نبني متجرك مع جميع التكاملات اللازمة بما في ذلك المدفوعات والشحن وأنظمة المخزون.",
    "services.ecommerce.process.testing.title": "الاختبار والتحسين",
    "services.ecommerce.process.testing.description": "اختبار شامل عبر الأجهزة والسيناريوهات لضمان الأداء الأمثل وتجربة المستخدم.",
    "services.ecommerce.process.launch.title": "الإطلاق والنمو",
    "services.ecommerce.process.launch.description": "نساعدك في الإطلاق بنجاح ونوفر دعماً مستمراً للتسويق والتحسين.",
    "services.ecommerce.faq.badge": "الأسئلة الشائعة",
    "services.ecommerce.faq.title": "الأسئلة المتداولة",
    "services.ecommerce.faq.subtitle": "أسئلة شائعة حول خدمات تطوير التجارة الإلكترونية لدينا",
    "services.ecommerce.faq.cta": "هل لا تزال لديك أسئلة؟",
    "services.ecommerce.faq.platforms.question": "مع أي منصات التجارة الإلكترونية تعملون؟",
    "services.ecommerce.faq.platforms.answer": "نعمل مع جميع المنصات الرئيسية بما في ذلك Shopify وWooCommerce وMagento وحلول مخصصة. سنوصي بالمنصة الأفضل بناءً على احتياجاتك وميزانيتك المحددة.",
    "services.ecommerce.faq.payments.question": "ما طرق الدفع التي يمكنكم تكاملها؟",
    "services.ecommerce.faq.payments.answer": "نتكامل مع جميع بوابات الدفع الرئيسية بما في ذلك Stripe وPayPal وSquare وAuthorize.Net وغيرها. نضمن الامتثال لمعايير PCI ومعالجة المدفوعات الآمنة.",
    "services.ecommerce.faq.scaling.question": "هل يمكنكم التعامل مع متاجر حركة المرور العالية؟",
    "services.ecommerce.faq.scaling.answer": "نعم، نبني حلول التجارة الإلكترونية القابلة للتطوير التي يمكنها التعامل مع آلاف المستخدمين المتزامنين. نستخدم البنية التحتية السحابية وتقنيات تحسين الأداء.",
    "services.ecommerce.faq.seo.question": "هل تحسنون المتاجر لمحركات البحث؟",
    "services.ecommerce.faq.seo.answer": "بالتأكيد. جميع متاجر التجارة الإلكترونية مبنية مع ممارسات تحسين محركات البحث بما في ذلك الهيكل المناسب والعلامات الوصفية وأوقات التحميل السريعة وتحسين الهواتف المحمولة.",
    "services.ecommerce.faq.support.question": "هل تقدمون دعماً مستمراً؟",
    "services.ecommerce.faq.support.answer": "نعم، نقدم حزم صيانة شاملة تشمل التحديثات ومراقبة الأمان وتحسين الأداء والدعم الفني.",
    "services.ecommerce.cta.title": "هل أنت مستعد لبدء متجرك الإلكتروني؟",
    "services.ecommerce.cta.subtitle": "دعنا نبني حل التجارة الإلكترونية الذي يدفع المبيعات ويطور أعمالك.",
    "services.ecommerce.cta.button.primary": "احصل على عرض أسعار مجاني",
    "services.ecommerce.cta.button.secondary": "شاهد متاجرنا",

    // Digital Marketing Service Page - Arabic
    "services.digital-marketing.hero.badge": "التسويق الرقمي",
    "services.digital-marketing.hero.title": "خدمات التسويق الرقمي",
    "services.digital-marketing.hero.subtitle": "استراتيجيات مدعومة بالبيانات لتنمية حضورك الرقمي والوصول إلى جمهورك المستهدف",
    "services.digital-marketing.hero.button.primary": "ابدأ الآن",
    "services.digital-marketing.hero.button.secondary": "شاهد دراسات الحالة",
    "services.digital-marketing.hero.cta": "ابدأ في تنمية أعمالك اليوم",
    "services.digital-marketing.hero.stats.roi": "زيادة متوسط العائد على الاستثمار",
    "services.digital-marketing.hero.stats.leads": "عميل محتمل تم إنشاؤه",
    "services.digital-marketing.hero.stats.campaigns": "حملات نشطة",
    "services.digital-marketing.features.badge": "خدمات التسويق",
    "services.digital-marketing.features.title": "خدمات التسويق",
    "services.digital-marketing.features.subtitle": "حلول تسويق رقمي شاملة لتعزيز حضورك الرقمي",
    "services.digital-marketing.features.cta": "هل أنت مستعد لتنمية أعمالك؟",
    "services.digital-marketing.features.seo.title": "تحسين محركات البحث",
    "services.digital-marketing.features.seo.description": "حسّن ترتيبك في نتائج البحث وزد حركة المرور العضوية باستراتيجيات مثبتة",
    "services.digital-marketing.features.content.title": "التسويق بالمحتوى",
    "services.digital-marketing.features.content.description": "محتوى جذاب يبني سلطة العلامة التجارية ويجذب جمهورك المستهدف",
    "services.digital-marketing.features.ppc.title": "الإعلانات المدفوعة",
    "services.digital-marketing.features.ppc.description": "حملات مدفوعة مستهدفة على جوجل وفيسبوك ومنصات أخرى للحصول على نتائج فورية",
    "services.digital-marketing.features.targeting.title": "استهداف الجمهور",
    "services.digital-marketing.features.targeting.description": "تقسيم دقيق للجمهور للوصول إلى العملاء المناسبين في الوقت المناسب",
    "services.digital-marketing.features.social.title": "التسويق عبر وسائل التواصل",
    "services.digital-marketing.features.social.description": "بناء تفاعل المجتمع والولاء للعلامة التجارية عبر منصات وسائل التواصل",
    "services.digital-marketing.features.email.title": "التسويق بالبريد الإلكتروني",
    "services.digital-marketing.features.email.description": "حملات بريد إلكتروني آلية تغذي العملاء المحتملين وتدفع التحويلات",
    "services.digital-marketing.technologies.badge": "أدوات التسويق",
    "services.digital-marketing.technologies.title": "التقنيات التي نستخدمها",
    "services.digital-marketing.technologies.subtitle": "أدوات تسويق احترافية ومنصات التحليلات",
    "services.digital-marketing.technologies.cta": "استكشف مجموعتنا التسويقية",
    "services.digital-marketing.process.badge": "عمليتنا",
    "services.digital-marketing.process.title": "عمليتنا",
    "services.digital-marketing.process.subtitle": "نهج منهجي لتقديم نتائج تسويقية قابلة للقياس",
    "services.digital-marketing.process.cta": "شاهد كيف نحقق النتائج",
    "services.digital-marketing.process.research.title": "البحث التسويقي",
    "services.digital-marketing.process.research.description": "نحلل صناعتك والمنافسين والجمهور المستهدف لإنشاء استراتيجية رابحة.",
    "services.digital-marketing.process.strategy.title": "تطوير الاستراتيجية",
    "services.digital-marketing.process.strategy.description": "نطور خطط تسويق شاملة مصممة خصيصاً لأهداف أعمالك وميزانيتك.",
    "services.digital-marketing.process.implementation.title": "تنفيذ الحملات",
    "services.digital-marketing.process.implementation.description": "نطلق وندير حملاتك عبر قنوات متعددة لأقصى مدى.",
    "services.digital-marketing.process.monitoring.title": "مراقبة الأداء",
    "services.digital-marketing.process.monitoring.description": "تتبع فوري للمقاييس الرئيسية لقياس النجاح وتحديد الفرص.",
    "services.digital-marketing.process.optimization.title": "التحسين المستمر",
    "services.digital-marketing.process.optimization.description": "نصقل ونحسن الحملات بناءً على البيانات لتحسين النتائج مع مرور الوقت.",
    "services.digital-marketing.faq.badge": "الأسئلة الشائعة",
    "services.digital-marketing.faq.title": "الأسئلة المتداولة",
    "services.digital-marketing.faq.subtitle": "أسئلة شائعة حول خدمات التسويق الرقمي لدينا",
    "services.digital-marketing.faq.cta": "هل لا تزال لديك أسئلة؟",
    "services.digital-marketing.faq.roi.question": "كيف تقيسون العائد على الاستثمار؟",
    "services.digital-marketing.faq.roi.answer": "نتتبع مؤشرات الأداء الرئيسية بما في ذلك حركة المرور على الموقع ومعدلات التحويل وتوليد العملاء المحتملين وإسناد الإيرادات لإظهار عائد استثمار واضح لاستثمارك التسويقي.",
    "services.digital-marketing.faq.timeline.question": "كم يستغرق ظهور النتائج؟",
    "services.digital-marketing.faq.timeline.answer": "تظهر نتائج تحسين محركات البحث عادةً خلال 3-6 أشهر، بينما يمكن أن تظهر حملات الدفع بالنقر نتائج فورية. نقدم تقارير منتظمة لتتبع التقدم وضبط الاستراتيجيات حسب الحاجة.",
    "services.digital-marketing.faq.reporting.question": "كيف تُبلغون عن أداء الحملات؟",
    "services.digital-marketing.faq.reporting.answer": "نقدم تقارير شهرية مفصلة مع المقاييس الرئيسية والرؤى والتوصيات. ستتمكن من الوصول إلى لوحات المعلومات في الوقت الفعلي لمراقبة الأداء في أي وقت.",
    "services.digital-marketing.faq.budget.question": "ما هي الحد الأدنى للميزانية المطلوبة؟",
    "services.digital-marketing.faq.budget.answer": "نعمل مع الشركات من جميع الأحجام. تبدأ الميزانيات الدنيا من 1,000 دولار شهرياً للحملات الأساسية، لكننا نوصي بـ 2,500 دولار شهرياً أو أكثر للاستراتيجيات الشاملة.",
    "services.digital-marketing.faq.channels.question": "أي قنوات التسويق تستخدمون؟",
    "services.digital-marketing.faq.channels.answer": "نستخدم تحسين محركات البحث والدفع بالنقر ووسائل التواصل والتسويق بالبريد الإلكتروني والتسويق بالمحتوى وقنوات أخرى بناءً على جمهورك المستهدف وأهداف أعمالك لأقصى فعالية.",
    "services.digital-marketing.cta.title": "هل أنت مستعد لتنمية أعمالك؟",
    "services.digital-marketing.cta.subtitle": "دعنا نخلق استراتيجية تسويق رقمي تحقق نتائج حقيقية لأعمالك.",
    "services.digital-marketing.cta.button.primary": "احصل على استشارة مجانية",
    "services.digital-marketing.cta.button.secondary": "شاهد نتائجنا",

    // Social Media Service Page - Arabic
    "services.social-media.hero.badge": "بناء المجتمع",
    "services.social-media.hero.title": "خدمات إدارة وسائل التواصل الاجتماعي",
    "services.social-media.hero.subtitle": "بناء وإشراك مجتمعك مع إدارة استراتيجية لوسائل التواصل الاجتماعي",
    "services.social-media.hero.button.primary": "ابدأ الآن",
    "services.social-media.hero.button.secondary": "شاهد الأمثلة",
    "services.social-media.hero.cta": "ابدأ في بناء مجتمعك اليوم",
    "services.social-media.hero.stats.reach": "شخص تم الوصول إليه",
    "services.social-media.hero.stats.engagement": "معدل التفاعل",
    "services.social-media.hero.stats.monitoring": "مراقبة",
    "services.social-media.features.badge": "خدمات الإدارة",
    "services.social-media.features.title": "خدمات الإدارة",
    "services.social-media.features.subtitle": "حلول شاملة لإدارة وسائل التواصل الاجتماعي لأعمالك",
    "services.social-media.features.cta": "هل أنت مستعد لتنمية حضورك الاجتماعي؟",
    "services.social-media.features.community.title": "بناء المجتمع",
    "services.social-media.features.community.description": "تنمية جمهورك وبناء علاقات ذات معنى مع متابعيك",
    "services.social-media.features.content.title": "إنشاء المحتوى",
    "services.social-media.features.content.description": "إنشاء محتوى احترافي يتردد صداه مع جمهورك المستهدف",
    "services.social-media.features.scheduling.title": "جدولة المنشورات",
    "services.social-media.features.scheduling.description": "جداول نشر استراتيجية محسنة لأقصى تفاعل ومدى",
    "services.social-media.features.engagement.title": "تفاعل المجتمع",
    "services.social-media.features.engagement.description": "إدارة مجتمع نشطة مع استجابات في الوقت المناسب وتفاعلات ذات معنى",
    "services.social-media.features.analytics.title": "تحليلات الأداء",
    "services.social-media.features.analytics.description": "رؤى وتقارير مفصلة لتتبع النمو وقياس النجاح",
    "services.social-media.features.strategy.title": "التخطيط الاستراتيجي",
    "services.social-media.features.strategy.description": "استراتيجيات مدعومة بالبيانات مصممة خصيصاً لعلامتك التجارية وأهداف أعمالك",
    "services.social-media.technologies.badge": "منصات التواصل",
    "services.social-media.technologies.title": "المنصات التي نديرها",
    "services.social-media.technologies.subtitle": "منصات وسائل التواصل الاجتماعي الاحترافية وأدوات الإدارة",
    "services.social-media.technologies.cta": "استكشف أدوات وسائل التواصل الاجتماعي لدينا",
    "services.social-media.process.badge": "عمليتنا",
    "services.social-media.process.title": "عمليتنا",
    "services.social-media.process.subtitle": "نهج منهجي لبناء وتنمية حضورك على وسائل التواصل الاجتماعي",
    "services.social-media.process.cta": "شاهد كيف ندير وسائل التواصل الاجتماعي",
    "services.social-media.process.audit.title": "تدقيق وسائل التواصل",
    "services.social-media.process.audit.description": "نحلل حضورك الحالي على وسائل التواصل الاجتماعي ونحدد فرص النمو.",
    "services.social-media.process.strategy.title": "تطوير الاستراتيجية",
    "services.social-media.process.strategy.description": "نخلق استراتيجيات شاملة لوسائل التواصل الاجتماعي متسقة مع أهداف أعمالك.",
    "services.social-media.process.content.title": "إنشاء المحتوى والجدولة",
    "services.social-media.process.content.description": "نطور محتوى جذاباً ونحدد جداول النشر المثالية لجمهورك.",
    "services.social-media.process.management.title": "إدارة المجتمع",
    "services.social-media.process.management.description": "ندير مجتمعك بنشاط، نرد على التعليقات، ونبني العلاقات.",
    "services.social-media.process.optimization.title": "المراقبة والتحسين",
    "services.social-media.process.optimization.description": "نتتبع مقاييس الأداء ونحسن الاستراتيجيات باستمرار للحصول على نتائج أفضل.",
    "services.social-media.faq.badge": "الأسئلة الشائعة",
    "services.social-media.faq.title": "الأسئلة المتداولة",
    "services.social-media.faq.subtitle": "أسئلة شائعة حول خدمات إدارة وسائل التواصل الاجتماعي لدينا",
    "services.social-media.faq.cta": "هل لا تزال لديك أسئلة؟",
    "services.social-media.faq.platforms.question": "أي منصات وسائل التواصل الاجتماعي تديرونها؟",
    "services.social-media.faq.platforms.answer": "ندير جميع المنصات الرئيسية بما في ذلك فيسبوك وإنستغرام وتويتر ولينكد إن وتيك توك ويوتيوب وبينتريست، ونختار الأفضل لأعمالك.",
    "services.social-media.faq.content.question": "هل تخلقون محتوى أصلي؟",
    "services.social-media.faq.content.answer": "نعم، نخلق محتوى أصلي جذاب بما في ذلك المنشورات والقصص والريلز والرسومات التي تتماشى مع صوت علامتك التجارية وتتردد صداها مع جمهورك.",
    "services.social-media.faq.engagement.question": "كيف تتعاملون مع تفاعل المجتمع؟",
    "services.social-media.faq.engagement.answer": "نراقب قنوات وسائل التواصل الاجتماعي الخاصة بك بنشاط، نرد على التعليقات والرسائل، ونتفاعل مع مجتمعك لبناء العلاقات والولاء.",
    "services.social-media.faq.reporting.question": "كيف تُبلغون عن أداء وسائل التواصل الاجتماعي؟",
    "services.social-media.faq.reporting.answer": "نقدم تقارير شهرية مع المقاييس الرئيسية مثل نمو المتابعين ومعدلات التفاعل والمدى والتحويلات، بالإضافة إلى الرؤى والتوصيات.",
    "services.social-media.faq.crisis.question": "كيف تتعاملون مع أزمات وسائل التواصل الاجتماعي؟",
    "services.social-media.faq.crisis.answer": "لدينا بروتوكولات إدارة الأزمات ونوفر مراقبة على مدار 24/7. نرد بسرعة على المواقف السلبية ونحمي سمعة علامتك التجارية.",
    "services.social-media.cta.title": "هل أنت مستعد لبناء حضورك على وسائل التواصل الاجتماعي؟",
    "services.social-media.cta.subtitle": "دعنا نخلق استراتيجية وسائل تواصل اجتماعي تربطك بجمهورك وتنمي أعمالك.",
    "services.social-media.cta.button.primary": "احصل على استشارة مجانية",
    "services.social-media.cta.button.secondary": "شاهد أعمالنا",

    // Design Service Page - Arabic
    "services.design.hero.badge": "التميز الإبداعي",
    "services.design.hero.title": "خدمات تصميم واجهات المستخدم",
    "services.design.hero.subtitle": "أنشئ واجهات جميلة وبديهية يحبها المستخدمون وتدفع نتائج الأعمال",
    "services.design.hero.button.primary": "ابدأ الآن",
    "services.design.hero.button.secondary": "شاهد الأعمال",
    "services.design.hero.cta": "ابدأ في تصميم تجارب مذهلة",
    "services.design.hero.stats.designs": "تصميم تم إنشاؤه",
    "services.design.hero.stats.satisfaction": "رضا العملاء",
    "services.design.hero.stats.expertise": "خبرة UI/UX",
    "services.design.features.badge": "خدمات التصميم",
    "services.design.features.title": "خدمات التصميم",
    "services.design.features.subtitle": "حلول تصميم شاملة تجسد رؤيتك",
    "services.design.features.cta": "هل أنت مستعد لتصميم شيء مذهل؟",
    "services.design.features.research.title": "البحث عن المستخدمين",
    "services.design.features.research.description": "فهم عميق لاحتياجات المستخدمين وسلوكياتهم ونقاط الضعف من خلال بحث شامل",
    "services.design.features.concept.title": "تطوير المفهوم",
    "services.design.features.concept.description": "إبداع الأفكار وإنشاء المفاهيم التي تتماشى مع علامتك التجارية وأهداف المستخدمين",
    "services.design.features.wireframing.title": "الرسم السلكي",
    "services.design.features.wireframing.description": "إطارات سلكية منخفضة الدقة تحدد الهيكل وهيكلة المعلومات",
    "services.design.features.prototyping.title": "إنشاء النماذج الأولية",
    "services.design.features.prototyping.description": "نماذج أولية تفاعلية تجسد التصاميم وتمكن من اختبار المستخدمين",
    "services.design.features.responsive.title": "التصميم المتجاوب",
    "services.design.features.responsive.description": "تجارب سلسة عبر جميع الأجهزة وأحجام الشاشات",
    "services.design.features.usability.title": "اختبار الاستخدام",
    "services.design.features.usability.description": "اختبار المستخدمين والتحقق من صحة الواجهات البديهية والفعالة",
    "services.design.technologies.badge": "أدوات التصميم",
    "services.design.technologies.title": "التقنيات التي نستخدمها",
    "services.design.technologies.subtitle": "أدوات تصميم احترافية ومنصات إنشاء النماذج الأولية",
    "services.design.technologies.cta": "استكشف مجموعة أدوات التصميم لدينا",
    "services.design.process.badge": "عمليتنا",
    "services.design.process.title": "عمليتنا",
    "services.design.process.subtitle": "نهج تعاوني لإنشاء تجارب مستخدم استثنائية",
    "services.design.process.cta": "شاهد كيف نصمم",
    "services.design.process.research.title": "البحث والاكتشاف",
    "services.design.process.research.description": "نبدأ بفهم مستخدميك وأهداف أعمالك ومتطلبات المشروع.",
    "services.design.process.wireframing.title": "الرسم السلكي والهيكلة",
    "services.design.process.wireframing.description": "نخلق إطارات سلكية منخفضة الدقة لتحديد الهيكل وتدفقات المستخدمين.",
    "services.design.process.design.title": "التصميم البصري",
    "services.design.process.design.description": "نطور تصاميم عالية الدقة مع الاهتمام بالطباعة والألوان والتسلسل البصري.",
    "services.design.process.prototyping.title": "إنشاء النماذج والاختبار",
    "services.design.process.prototyping.description": "نبني نماذج أولية تفاعلية ونقوم باختبار المستخدمين للتحقق من صحة التصاميم.",
    "services.design.process.testing.title": "التنفيذ والتسليم",
    "services.design.process.testing.description": "نعد أنظمة التصميم والأصول للتسليم السلس للمطورين.",
    "services.design.faq.badge": "الأسئلة الشائعة",
    "services.design.faq.title": "الأسئلة المتداولة",
    "services.design.faq.subtitle": "أسئلة شائعة حول خدمات التصميم لدينا",
    "services.design.faq.cta": "هل لا تزال لديك أسئلة؟",
    "services.design.faq.process.question": "ما هي عملية التصميم لديكم؟",
    "services.design.faq.process.answer": "تشمل عمليتنا البحث والرسم السلكي والتصميم البصري وإنشاء النماذج الأولية واختبار المستخدمين. نعمل معك بشكل تعاوني في كل مرحلة لضمان تلبية التصميم النهائي لاحتياجاتك.",
    "services.design.faq.timeline.question": "كم يستغرق مشروع التصميم؟",
    "services.design.faq.timeline.answer": "تختلف جداول التصميم الزمنية بناءً على نطاق وتعقيد المشروع. يستغرق مشروع تصميم موقع إلكتروني نموذجي 4-8 أسابيع، بينما قد تستغرق التطبيقات الأكبر 8-12 أسبوعاً. نقدم جداول زمنية مفصلة أثناء تخطيط المشروع.",
    "services.design.faq.collaboration.question": "كيف تتعاونون مع العملاء؟",
    "services.design.faq.collaboration.answer": "نستخدم أدوات تعاونية مثل فيغما ومكالمات الفيديو المنتظمة ولوحات المشاريع المشتركة. ستتمكن من الوصول إلى تحديثات التصميم في الوقت الفعلي وتقديم التعليقات طوال العملية.",
    "services.design.faq.revisions.question": "كم عدد المراجعات المضمنة؟",
    "services.design.faq.revisions.answer": "نشمل 3 جولات من المراجعات لكل مرحلة تصميم. يمكن استيعاب المراجعات الإضافية بناءً على نطاق المشروع ومتطلبات الجدول الزمني.",
    "services.design.faq.development.question": "هل تعملون مع المطورين؟",
    "services.design.faq.development.answer": "نعم، نخلق أنظمة تصميم جاهزة للمطورين مع مواصفات مفصلة وأصول ووثائق لضمان التسليم والتنفيذ السلس.",
    "services.design.cta.title": "هل أنت مستعد لتصميم شيء مذهل؟",
    "services.design.cta.subtitle": "دعنا نخلق تجارب مستخدم تسعد عملاءك وتدفع نمو أعمالك.",
    "services.design.cta.button.primary": "احصل على استشارة مجانية",
    "services.design.cta.button.secondary": "شاهد تصاميمنا",

    "services.page.title": "خدماتنا",
    "services.page.subtitle": "حلول رقمية شاملة مصممة لمساعدة عملك على الازدهار في العصر الرقمي",
    "services.hero.badge": "خدمات رقمية متميزة",
    "services.hero.title.line1": "ارتقِ بحضورك الرقمي",
    "services.hero.title.line2": "الرقمي",
    "services.hero.subtitle": "حلول رقمية شاملة مصممة لمساعدة عملك على الازدهار في المشهد الرقمي الحديث مع التكنولوجيا المتطورة والتميز الإبداعي",
    "services.hero.button.explore": "استكشف الخدمات",
    "services.hero.button.consultation": "احجز استشارة",
    "services.hero.cta": "دعنا نبدأ في مشروعك",
    "services.services.badge": "حلول شاملة",
    "services.whychooseus.badge": "شريك موثوق",
    "services.whychooseus.title": "لماذا تختار أورين",
    "services.whychooseus.description": "نجمع بين الخبرة الفنية والابتكار الإبداعي لتقديم نتائج استثنائية تدفع نمو أعمالك القابل للقياس",
    "services.whychooseus.cta": "دعنا نبدأ اليوم",
    "services.whychooseus.expert.title": "فريق الخبراء",
    "services.whychooseus.expert.description": "محترفون ماهرون يتمتعون بسنوات من الخبرة في تطوير الويب والحلول الرقمية",
    "services.whychooseus.custom.title": "حلول مخصصة",
    "services.whychooseus.custom.description": "نهج مصمم خصيصاً لاحتياجات وأهداف عملك",
    "services.whychooseus.results.title": "نتائج مثبتة",
    "services.whychooseus.results.description": "سجل حافل من المشاريع الناجحة والعملاء الراضين في مختلف الصناعات",
    "services.whychooseus.support.title": "دعم مستمر",
    "services.whychooseus.support.description": "صيانة مستمرة ودعم لضمان بقاء حضورك الرقمي مثالياً",
    "services.cta.title": "هل أنت مستعد للبدء؟",
    "services.cta.description": "دعنا نناقش مشروعك ونجد الحل المثالي لاحتياجات عملك.",
    "services.viewAllServices": "عرض جميع الخدمات",

    // Web Development Service Page - Arabic
    "services.web-dev.hero.badge": "تطوير احترافي",
    "services.web-dev.hero.title": "خدمات تطوير المواقع الاحترافية",
    "services.web-dev.hero.subtitle": "بناء مواقع سريعة وآمنة وقابلة للتطوير توفر تجارب مستخدم استثنائية وتدفع نمو الأعمال",
    "services.web-dev.hero.button.primary": "ابدأ الآن",
    "services.web-dev.hero.button.secondary": "شاهد الأمثلة",
    "services.web-dev.hero.cta": "ابدأ مشروع تطوير الموقع اليوم",
    "services.web-dev.hero.stats.projects": "مشروع مكتمل",
    "services.web-dev.hero.stats.uptime": "ضمان التشغيل",
    "services.web-dev.hero.stats.support": "دعم متاح",
    "services.web-dev.features.badge": "ما تحصل عليه",
    "services.web-dev.features.title": "ما تحصل عليه",
    "services.web-dev.features.subtitle": "حلول تطوير مواقع شاملة مصممة خصيصاً لاحتياجاتك",
    "services.web-dev.features.cta": "هل أنت مستعد للبدء في البناء؟",
    "services.web-dev.features.clean.title": "كود نظيف",
    "services.web-dev.features.clean.description": "كود منظم وقابل للصيانة يتبع أفضل الممارسات والمعايير الصناعية",
    "services.web-dev.features.responsive.title": "تصميم متجاوب",
    "services.web-dev.features.responsive.description": "مواقع تبدو وتعمل بشكل مثالي على جميع الأجهزة، من الهواتف المحمولة إلى سطح المكتب",
    "services.web-dev.features.performance.title": "أداء سريع",
    "services.web-dev.features.performance.description": "محسن للسرعة مع أوقات تحميل سريعة وتفاعلات سلسة",
    "services.web-dev.features.security.title": "الأمان أولاً",
    "services.web-dev.features.security.description": "مبني مع وضع الأمان في الاعتبار، لحماية بياناتك ومستخدميك",
    "services.web-dev.features.seo.title": "محسن لمحركات البحث",
    "services.web-dev.features.seo.description": "هيكل صديق لمحركات البحث لمساعدة موقعك على الترتيب الأعلى في النتائج",
    "services.web-dev.features.browser.title": "متعدد المتصفحات",
    "services.web-dev.features.browser.description": "متوافق مع جميع المتصفحات الرئيسية لأقصى مدى وإمكانية وصول",
    "services.web-dev.technologies.badge": "التقنيات الحديثة",
    "services.web-dev.technologies.title": "التقنيات التي نستخدمها",
    "services.web-dev.technologies.subtitle": "أدوات وأطر عمل حديثة لحلول متطورة",
    "services.web-dev.technologies.cta": "استكشف مجموعتنا التقنية",
    "services.web-dev.process.badge": "نهجنا",
    "services.web-dev.process.title": "عمليتنا",
    "services.web-dev.process.subtitle": "نهج منظم لتسليم مشروعك في الوقت المحدد وبالميزانية المحددة",
    "services.web-dev.process.cta": "شاهد كيف نعمل",
    "services.web-dev.process.discovery.title": "الاكتشاف والتخطيط",
    "services.web-dev.process.discovery.description": "نبدأ بفهم أهداف عملك والجمهور المستهدف ومتطلبات المشروع لإنشاء خارطة طريق مفصلة.",
    "services.web-dev.process.design.title": "التصميم والنماذج الأولية",
    "services.web-dev.process.design.description": "يصمم مصممونا الإطارات السلكية والنماذج لتصور المنتج النهائي قبل بدء التطوير.",
    "services.web-dev.process.development.title": "التطوير",
    "services.web-dev.process.development.description": "نبني موقعك باستخدام تقنيات حديثة، مع اتباع أفضل الممارسات والحفاظ على التواصل الواضح.",
    "services.web-dev.process.testing.title": "الاختبار وضمان الجودة",
    "services.web-dev.process.testing.description": "اختبار صارم عبر الأجهزة والمتصفحات لضمان عمل كل شيء بلا عيوب قبل الإطلاق.",
    "services.web-dev.process.launch.title": "الإطلاق والدعم",
    "services.web-dev.process.launch.description": "ننشر موقعك ونوفر دعماً مستمراً للحفاظ عليه يعمل بسلاسة ومحدثاً.",
    "services.web-dev.faq.badge": "الأسئلة الشائعة",
    "services.web-dev.faq.title": "الأسئلة المتداولة",
    "services.web-dev.faq.subtitle": "أسئلة شائعة حول خدمات تطوير المواقع لدينا",
    "services.web-dev.faq.cta": "هل لا تزال لديك أسئلة؟",
    "services.web-dev.faq.timeline.question": "كم يستغرق بناء موقع إلكتروني؟",
    "services.web-dev.faq.timeline.answer": "يختلف الجدول الزمني حسب نطاق وتعقيد المشروع. يستغرق الموقع البسيط عادةً 4-6 أسابيع، بينما قد تستغرق التطبيقات الأكثر تعقيداً 3-6 أشهر. سنقدم جدولاً زمنياً مفصلاً أثناء مرحلة التخطيط.",
    "services.web-dev.faq.cost.question": "ما هي تكلفة تطوير المواقع؟",
    "services.web-dev.faq.cost.answer": "تختلف التكاليف بناءً على متطلبات المشروع والميزات والتعقيد. نقدم نماذج تسعير مرنة وسنقدم عرض أسعار مفصلاً بعد فهم احتياجاتك المحددة. تواصل معنا للحصول على استشارة مجانية.",
    "services.web-dev.faq.maintenance.question": "هل تقدمون صيانة مستمرة؟",
    "services.web-dev.faq.maintenance.answer": "نعم، نقدم حزم صيانة ودعم شاملة للحفاظ على موقعك آمناً ومحدثاً ويعمل بسلاسة. يشمل ذلك التحديثات المنتظمة والتصحيحات الأمنية والدعم الفني.",
    "services.web-dev.faq.mobile.question": "هل سيكون موقعي متوافقاً مع الهواتف المحمولة؟",
    "services.web-dev.faq.mobile.answer": "جميع مواقعنا مبنية بنهج الهاتف المحمول أولاً، مما يضمن أنها تبدو وتعمل بشكل مثالي على جميع الأجهزة، من الهواتف الذكية إلى الأجهزة اللوحية إلى أجهزة سطح المكتب.",
    "services.web-dev.faq.seo.question": "هل يمكنكم المساعدة في تحسين محركات البحث؟",
    "services.web-dev.faq.seo.answer": "نعم، نبني جميع المواقع مع وضع ممارسات تحسين محركات البحث في الاعتبار، بما في ذلك الهيكل المناسب والعلامات الوصفية وتحسين الأداء. نقدم أيضاً خدمات تحسين محركات البحث المخصصة للتحسين المستمر وتحسين الترتيب.",
    "services.web-dev.cta.title": "هل أنت مستعد لبناء موقعك؟",
    "services.web-dev.cta.subtitle": "دعنا نناقش مشروعك وننشئ موقعاً يساعد عملك على النجاح عبر الإنترنت.",
    "services.web-dev.cta.button.primary": "احصل على عرض أسعار مجاني",
    "services.web-dev.cta.button.secondary": "شاهد أعمالنا",

    // Process
    "process.title": "كيف نعمل",
    "process.subtitle": "عمليتنا المثبتة تضمن تسليم المشروع بنجاح من الفكرة إلى الإطلاق",
    "process.discover": "اكتشاف",
    "process.design": "تصميم",
    "process.develop": "تطوير",
    "process.launch": "إطلاق",
    "process.support": "دعم",
    "process.discover.desc": "نحلل احتياجات عملك والجمهور المستهدف وأهداف المشروع لإنشاء خارطة طريق استراتيجية.",
    "process.design.desc": "يصمم مصممونا واجهات جميلة تركز على المستخدم وتتماشى مع هوية علامتك التجارية.",
    "process.develop.desc": "نبني حلولاً قوية وقابلة للتطوير باستخدام أحدث التقنيات وأفضل الممارسات.",
    "process.launch.desc": "ننشر مشروعك مع اختبارات شاملة ونضمن إطلاقاً سلساً وناجحاً.",
    "process.support.desc": "صيانة مستمرة وتحديثات ودعم للحفاظ على حضورك الرقمي يعمل بسلاسة.",
    "process.badge": "عمليتنا",
    "process.cta": "لنبدأ",

    // Portfolio
    "portfolio.title": "معرض أعمالنا",
    "portfolio.badge": "أعمال مميزة",
    "portfolio.subtitle": "عرض أفضل أعمالنا والمشاريع الناجحة التي تحقق نتائج",
    "portfolio.view-all": "عرض جميع المشاريع",
    "portfolio.explore": "استكشف المشاريع",
    "portfolio.discuss": "ناقش المشروع",
    "portfolio.stats.projects": "مشروع مكتمل",
    "portfolio.stats.satisfaction": "رضا العملاء",
    "portfolio.stats.support": "دعم متاح",
    "portfolio.filter.badge": "فئات المشاريع",
    "portfolio.filter.title": "تصفح أعمالنا",
    "portfolio.filter.subtitle": "تصفح معرضنا المتنوع من المشاريع الناجحة في مختلف الصناعات",
    "portfolio.viewDetails": "عرض التفاصيل",
    "portfolio.liveDemo": "عرض مباشر",
    "portfolio.noProjects": "لا توجد مشاريع في هذه الفئة.",
    "portfolio.filter.all": "جميع المشاريع",
    "portfolio.filter.webdev": "تطوير المواقع",
    "portfolio.filter.ecommerce": "التجارة الإلكترونية",
    "portfolio.filter.saas": "البرمجيات كخدمة",
    "portfolio.notfound.title": "المشروع غير موجود",
    "portfolio.notfound.description": "المشروع الذي تبحث عنه غير موجود أو تم حذفه.",
    "portfolio.notfound.button": "عرض جميع المشاريع",
    "portfolio.cta.title": "هل أنت مستعد لبدء مشروعك؟",
    "portfolio.cta.subtitle": "دعنا نخلق شيئاً مذهلاً معاً. تواصل معنا لمناقشة متطلبات مشروعك وإحياء رؤيتك.",
    "portfolio.cta.button.primary": "ابدأ الآن",
    "portfolio.cta.button.secondary": "عرض الخدمات",

    // Project Details
    "project.backToPortfolio": "العودة إلى المعرض",
    "project.overview": "نظرة عامة على المشروع",
    "project.keyFeatures": "الميزات الرئيسية",
    "project.userExperience": "تجربة المستخدم",
    "project.performance": "الأداء",
    "project.reliability": "الموثوقية",
    "project.scalability": "القابلية للتطوير",
    "project.technologiesUsed": "التقنيات المستخدمة",
    "project.quickActions": "الإجراءات السريعة",
    "project.shareProject": "مشاركة المشروع",
    "project.viewLiveDemo": "عرض تجريبي مباشر",
    "project.sourceCode": "كود المصدر",
    "project.projectDetails": "تفاصيل المشروع",
    "project.techStack": "مجموعة التقنيات",
    "project.technologies": "تقنيات",
    "project.client": "العميل",
    "project.duration": "المدة",
    "project.duration.3months": "3 أشهر",
    "project.duration.4months": "4 أشهر",
    "project.duration.5months": "5 أشهر",
    "project.duration.6months": "6 أشهر",
    "project.duration.7months": "7 أشهر",
    "project.projectRating": "تقييم المشروع",
    "project.functionality": "الوظائف",
    "project.design": "التصميم",
    "project.live": "مباشر",
    "project.more": "المزيد",
    "project.rating": "4.8",
    "project.reviews": "127 تقييم",
    "project.userExperienceDesc": "تصميم بديهي مع تنقل سلس وتخطيط متجاوب عبر جميع الأجهزة",
    "project.performanceDesc": "محسن للسرعة مع استعلامات قاعدة بيانات فعالة واستراتيجيات التخزين المؤقت",
    "project.reliabilityDesc": "هيكل قوي مع وقت تشغيل 99.9% ومعالجة شاملة للأخطاء",
    "project.scalabilityDesc": "مبني للنمو مع أعمالك، يتعامل مع زيادة حركة المرور والبيانات بسلاسة",
    "project.testimonialQuote": "حولت أورن أعمالنا عبر الإنترنت. المنصة الجديدة سريعة وجميلة، وازدادت مبيعاتنا أكثر من الضعف منذ الإطلاق.",
    "project.testimonialAuthor": "سارة جونسون",
    "project.testimonialRole": "المدير التنفيذي، متجر الأزياء",

    // Testimonials
    "testimonials.title": "ماذا يقول عملاؤنا",
    "testimonials.subtitle": "لا تأخذ كلامنا فقط - استمع من الشركات التي ساعدناها على النجاح",

    // CTA
    "cta.title": "هل أنت مستعد لبدء مشروعك؟",
    "cta.subtitle": "دعنا نناقش كيف يمكننا مساعدتك في تحويل حضورك الرقمي وتحقيق أهداف عملك معاً.",
    "cta.button": "ابدأ الآن",

    // Footer
    "footer.description": "تطوير مواقع احترافية وحلول رقمية تدفع النمو للشركات الناشئة والمؤسسات.",
    "footer.stayUpdated": "ابق على اطلاع",
    "footer.emailPlaceholder": "أدخل بريدك الإلكتروني",
    "footer.subscribe": "اشترك",
    "footer.newsletter": "ابق على اطلاع",
    "footer.newsletter.placeholder": "أدخل بريدك الإلكتروني",
    "footer.newsletter.button": "اشترك",
    "footer.company": "الشركة",
    "footer.legal": "قانوني",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.services.web-dev": "تطوير المواقع",
    "footer.services.custom-platforms": "منصات مخصصة",
    "footer.services.ecommerce": "التجارة الإلكترونية",
    "footer.services.digital-marketing": "التسويق الرقمي",
    "footer.legal.privacy": "سياسة الخصوصية",
    "footer.legal.terms": "شروط الخدمة",
    "footer.legal.accessibility": "إمكانية الوصول",
    "footer.social.github": "جيت هاب",
    "footer.social.linkedin": "لينكد إن",
    "footer.social.twitter": "تويتر",
    "footer.social.email": "البريد الإلكتروني",

    // Contact Form
    "contact.title": "تواصل معنا",
    "contact.subtitle": "لديك مشروع في ذهنك؟ دعنا نناقش كيف يمكننا مساعدتك في تحقيق رؤيتك.",
    "contact.form.title": "أرسل لنا رسالة",
    "contact.form.subtitle": "املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة.",
    "contact.form.name": "الاسم الكامل",
    "contact.form.namePlaceholder": "أحمد محمد",
    "contact.form.company": "الشركة",
    "contact.form.companyPlaceholder": "شركتك",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.emailPlaceholder": "ahmad@company.com",
    "contact.form.phone": "رقم الهاتف",
    "contact.form.phonePlaceholder": "+966 50 123 4567",
    "contact.form.service": "الخدمة المطلوبة",
    "contact.form.servicePlaceholder": "اختر خدمة",
    "contact.form.budget": "ميزانية المشروع",
    "contact.form.budgetPlaceholder": "اختر نطاق الميزانية",
    "contact.form.message": "الرسالة",
    "contact.form.messagePlaceholder": "أخبرنا عن مشروعك وأهدافك والجدول الزمني...",
    "contact.form.submit": "إرسال الرسالة",
    "contact.form.sending": "جارٍ إرسال الرسالة...",
    "contact.form.sent": "تم إرسال الرسالة!",
    "contact.form.send": "إرسال الرسالة",
    "contact.form.success": "شكراً لك! سنتواصل معك خلال 24 ساعة.",
    "contact.hero.badge": "دعنا نبدأ حواراً",
    "contact.hero.title": "تواصل",
    "contact.hero.title.highlight": "معنا",
    "contact.hero.subtitle": "هل أنت مستعد لتحقيق رؤيتك؟ دعنا نناقش مشروعك ونستكشف كيف يمكننا مساعدتك في تحقيق أهدافك.",
    "contact.hero.cta.email": "إرسال بريد إلكتروني",
    "contact.hero.cta.call": "اتصل الآن",
    "contact.info.title": "تواصل معنا",
    "contact.info.subtitle": "هل أنت مستعد لبدء مشروعك التالي؟ سنكون سعداء لسماع منك.",
    "contact.info.emailLabel": "البريد الإلكتروني",
    "contact.info.phoneLabel": "الهاتف",
    "contact.info.officeLabel": "المكتب",
    "contact.hours.title": "ساعات العمل",
    "contact.hours.mondayFriday": "الاثنين - الجمعة",
    "contact.hours.saturday": "السبت",
    "contact.hours.sunday": "الأحد",
    "contact.hours.mondayFridayTime": "9:00 ص - 6:00 م",
    "contact.hours.saturdayTime": "10:00 ص - 4:00 م",
    "contact.hours.sundayTime": "مغلق",
    "contact.form.services.webdev": "تطوير الويب",
    "contact.form.services.platforms": "المنصات المخصصة",
    "contact.form.services.ecommerce": "التجارة الإلكترونية",
    "contact.form.services.marketing": "التسويق الرقمي",
    "contact.form.services.social": "وسائل التواصل الاجتماعي",
    "contact.form.services.design": "التصميم",
    "contact.form.services.other": "أخرى",
    "contact.form.budgets.5k10k": "5,000 دولار - 10,000 دولار",
    "contact.form.budgets.10k25k": "10,000 دولار - 25,000 دولار",
    "contact.form.budgets.25k50k": "25,000 دولار - 50,000 دولار",
    "contact.form.budgets.50k": "50,000 دولار+",
    "contact.form.budgets.unsure": "غير متأكد بعد",
    "contact.form.sending": "جارٍ إرسال الرسالة...",
    "contact.form.sent": "تم إرسال الرسالة!",
    "contact.form.send": "إرسال الرسالة",
    "contact.form.success": "شكراً لك! سنتواصل معك خلال 24 ساعة.",

    // Blog
    "blog.title": "أحدث الأفكار",
    "blog.subtitle": "استكشف أفكارنا حول تطوير الويب والتصميم والابتكار الرقمي",
    "blog.hero.title": "المدونة والرؤى",
    "blog.hero.titleHighlight": "الرؤى",
    "blog.hero.badge": "أحدث التحديثات",
    "blog.hero.subtitle": "رؤى الخبراء والدروس والتوجهات الصناعية لمساعدتك على البقاء في المقدمة في العالم الرقمي",
    "blog.hero.cta.primary": "استكشف المقالات",
    "blog.hero.cta.contact": "تواصل معنا",
    "blog.searchPlaceholder": "البحث في المقالات...",
    "blog.categories": "الفئات",
    "blog.category.all": "جميع المنشورات",
    "blog.category.webdev": "تطوير الويب",
    "blog.category.design": "التصميم",
    "blog.category.marketing": "التسويق",
    "blog.category.technology": "التكنولوجيا",
    "blog.minRead": "دقيقة قراءة",
    "blog.empty.title": "لم يتم العثور على مقالات تطابق معاييرك.",
    "blog.empty.search": "لم يتم العثور على مقالات لـ",
    "blog.readTime": "دقيقة قراءة",
    "blog.backToBlog": "العودة إلى المدونة",
    "blog.shareArticle": "مشاركة المقال",
    "blog.relatedArticles": "مقالات ذات صلة",
    "blog.newsletter.title": "اشترك في نشرتنا الإخبارية",
    "blog.newsletter.description":
      "اشترك في نشرتنا الإخبارية للحصول على أحدث الأفكار والدروس وأخبار الصناعة في بريدك الوارد.",
    "blog.notfound.title": "المقال غير موجود",
    "blog.notfound.description": "المقال الذي تبحث عنه غير موجود أو تم حذفه.",
    "blog.notfound.button": "عرض جميع المقالات",

    // Blog Post: Modern Web Development Trends in 2025 (Arabic)
    "blog.post.trends2025.title": "توجهات تطوير الويب الحديثة في عام 2025",
    "blog.post.trends2025.excerpt": "استكشف أحدث التوجهات التي تشكل تطوير الويب، من تكامل الذكاء الاصطناعي إلى تطبيقات الويب التقدمية وما بعدها.",

    // Blog Post: Next.js Performance Optimization (Arabic)
    "blog.post.nextjsPerformance.title": "نصائح تحسين أداء Next.js",
    "blog.post.nextjsPerformance.excerpt": "تعلم الاستراتيجيات الأساسية لتعزيز سرعة موقعك وتفاعل المستخدمين مع تقنيات تحسين Next.js هذه.",
    "blog.post.nextjsPerformance.content": `
      <div class="lead">
        <p>Next.js مُحسَّن بالفعل للأداء خارج الصندوق، لكن هناك العديد من التقنيات التي يمكنك استخدامها لجعل تطبيقاتك أسرع. يغطي هذا الدليل استراتيجيات التحسين العملية التي يمكن أن تحسن أداء تطبيق Next.js بشكل كبير.</p>
      </div>

      <h2>تحسين الصور</h2>
      <p>يقوم مكون Image في Next.js بتحسين الصور تلقائيًا، لكنك بحاجة إلى استخدامه بشكل صحيح. حدد دائمًا العرض والارتفاع لمنع تغييرات التخطيط، استخدم خاصية priority للصور فوق الطية، واختر التنسيق المناسب (WebP للمتصفحات الحديثة).</p>

      <p>فكر في استخدام عناصر نائبة ضبابية للحصول على أداء محسوس أفضل. يدعم مكون Image كلاً من الاستيراد الثابت وعناوين URL الديناميكية، مع التحسين التلقائي لكليهما.</p>

      <h2>تقسيم الكود والاستيراد الديناميكي</h2>
      <p>يقوم Next.js بتقسيم الكود تلقائيًا على مستوى الصفحة، لكن يمكنك التحسين بشكل أكبر عن طريق الاستيراد الديناميكي للمكونات الثقيلة. استخدم next/dynamic للمكونات التي لا تحتاج إليها فورًا أو التي تستخدم فقط في ظروف معينة.</p>

      <p>على سبيل المثال، قم باستيراد النوافذ المنبثقة والمخططات ومحررات النصوص المنسقة ديناميكيًا والتي لا تكون مرئية في التحميل الأولي للصفحة. هذا يقلل من حجم حزمة JavaScript الأولية بشكل كبير.</p>

      <h2>مكونات الخادم والبث</h2>
      <p>يقدم Next.js 13+ مكونات React الخادم، والتي تعمل على الخادم وترسل فقط HTML المعروض إلى العميل. هذا يقلل بشكل كبير من حجم حزمة JavaScript ويحسن التحميل الأولي للصفحة.</p>

      <p>استخدم البث مع حدود Suspense لعرض المحتوى تدريجيًا عندما يصبح متاحًا. هذا يحسن الأداء المحسوس من خلال إظهار شيء ما للمستخدمين بسرعة بدلاً من انتظار تحميل كل شيء.</p>

      <h2>تحسين الخطوط</h2>
      <p>استخدم next/font لتحسين الخطوط تلقائيًا واستضافتها ذاتيًا. هذا يلغي طلبات الشبكة الخارجية ويمنع تغييرات التخطيط الناتجة عن تحميل الخطوط. يتم تخزين ملفات الخطوط مؤقتًا بكفاءة وتحميلها باستراتيجيات مثالية.</p>

      <p>قم بتحميل الخطوط الحرجة مسبقًا واستخدم font-display: swap لضمان بقاء النص مرئيًا أثناء تحميل الخطوط. فكر في استخدام خطوط النظام لنص النص للقضاء على تحميل الخطوط تمامًا.</p>

      <h2>تحسين مسارات API</h2>
      <p>قم بتنفيذ استراتيجيات التخزين المؤقت لمسارات API باستخدام رؤوس Cache-Control. استخدم ISR (التجديد الثابت التزايدي) للصفحات التي تحتاج إلى تحديث دوريًا لكنها لا تتطلب بيانات في الوقت الفعلي.</p>

      <p>فكر في استخدام وظائف الحافة لمسارات API التي تحتاج إلى زمن انتقال منخفض عالميًا. تعمل وظائف الحافة أقرب إلى المستخدمين، مما يقلل أوقات الاستجابة بشكل كبير.</p>

      <h2>تحسين استعلامات قاعدة البيانات</h2>
      <p>قم بتحسين استعلامات قاعدة البيانات عن طريق تحديد الحقول المطلوبة فقط، واستخدام فهارس مناسبة، وتنفيذ تجمع الاتصالات. فكر في استخدام طبقة تخزين مؤقت مثل Redis لبيانات الوصول المتكرر.</p>

      <p>استخدم جلب البيانات المتوازي حيثما أمكن لتقليل طلبات الشلال. تجعل مكونات الخادم في Next.js من السهل جلب البيانات بالتوازي على مستوى المكون.</p>

      <h2>تحليل الحزمة</h2>
      <p>قم بتحليل حجم الحزمة بانتظام باستخدام @next/bundle-analyzer. حدد التبعيات الكبيرة وفكر في البدائل أو التحميل الكسول. أزل التبعيات غير المستخدمة واهتز المكتبات بشكل صحيح.</p>

      <p>انتبه بشكل خاص للنصوص البرمجية للجهات الخارجية. استخدم next/script مع استراتيجية التحميل المناسبة (afterInteractive، lazyOnload) لمنع حظر الخيط الرئيسي.</p>

      <h2>المراقبة والمقاييس</h2>
      <p>استخدم Vercel Analytics أو أدوات مشابهة لمراقبة مقاييس الأداء في العالم الحقيقي. تتبع Core Web Vitals، وTime to First Byte (TTFB)، ومقاييس أخرى رئيسية لتحديد تراجعات الأداء.</p>

      <p>قم بإعداد ميزانيات الأداء وتنبيهات آلية للقبض على مشكلات الأداء قبل الوصول إلى الإنتاج.</p>

      <h2>الخاتمة</h2>
      <p>تحسين الأداء عملية مستمرة. ابدأ بالمكاسب الأكبر - تحسين الصور، وتقسيم الكود، والتخزين المؤقت المناسب - ثم قم بالتحسين التدريجي. قيس دائمًا تأثير تحسيناتك ببيانات العالم الحقيقي.</p>
    `,

    // Blog Post: SEO Strategies (Arabic)
    "blog.post.seoStrategies.title": "استراتيجيات الـ SEO التي تعمل فعليًا في عام 2025",
    "blog.post.seoStrategies.excerpt": "اكتشف تقنيات الـ SEO المثبتة لتحسين رؤية موقعك وزيادة حركة المرور العضوية.",
    "blog.post.seoStrategies.content": `
      <div class="lead">
        <p>يستمر تحسين محركات البحث في التطور، حيث أصبحت خوارزميات جوجل أكثر تطورًا. في عام 2025، يتطلب نجاح الـ SEO نهجًا شاملاً يجمع بين التميز التقني وإنشاء المحتوى عالي الجودة وتحسين تجربة المستخدم.</p>
      </div>

      <h2>Core Web Vitals وتجربة الصفحة</h2>
      <p>تظل Core Web Vitals من جوجل - Largest Contentful Paint (LCP)، وFirst Input Delay (FID)، وCumulative Layout Shift (CLS) - عوامل تصنيف حاسمة. تقيس هذه المقاييس أداء التحميل والتفاعل والاستقرار البصري.</p>

      <p>لتحسين Core Web Vitals، ركز على تحسين الصور، وتحميل JavaScript بكفاءة، واستراتيجيات تحميل الخطوط المناسبة، والقضاء على تغييرات التخطيط. يمكن لأدوات مثل PageSpeed Insights وLighthouse مساعدتك في تحديد المشكلات وإصلاحها.</p>

      <h2>جودة المحتوى وE-E-A-T</h2>
      <p>إطار عمل E-E-A-T من جوجل (الخبرة والخبرة والمصداقية والثقة) أصبح أكثر أهمية من أي وقت مضى. أنشئ محتوى يظهر خبرة حقيقية ويوفر قيمة حقيقية للمستخدمين.</p>

      <p>أدرج سير ذاتية للمؤلفين مع بيانات الاعتماد، واستشهد بمصادر موثوقة، وحافظ على تحديث المحتوى، وضمان الدقة الواقعية. بالنسبة لمواضيع YMYL (المال أو الحياة) مثل الصحة والمالية، يكون E-E-A-T حاسمًا بشكل خاص.</p>

      <h2>البحث الدلالي وتحسين النية</h2>
      <p>يتجاوز الـ SEO الحديث الكلمات المفتاحية لفهم نية المستخدم. تفهم خوارزميات جوجل الآن السياق والمرادفات والمفاهيم ذات الصلة من خلال معالجة اللغة الطبيعية.</p>

      <p>هيكل محتواك للإجابة على أسئلة محددة وحل مشكلات المستخدمين. استخدم ترميز البيانات المنظمة لمساعدة محركات البحث على فهم سياق محتواك ومعناه. ركز على مجموعات المواضيع بدلاً من الكلمات المفتاحية الفردية.</p>

      <h2>أساسيات الـ SEO التقنية</h2>
      <p>تأكد من أن موقعك يحتوي على هيكل URL نظيف، وخرائط موقع XML مناسبة، وتكوين robots.txt. قم بتطبيق ترميز البيانات المنظمة للحصول على مقتطفات منسقة. أصلح الروابط المكسورة والمحتوى المكرر وأخطاء الزحف.</p>

      <p>يعني الفهرسة المتنقلة أولاً أن موقعك المتنقل هو ما تستخدمه جوجل بشكل أساسي للتصنيف. تأكد من أن تجربة الهاتف المحمول ممتازة، مع أوقات تحميل سريعة وتنقل سهل.</p>

      <h2>بناء الروابط في عام 2025</h2>
      <p>لا تزال الجودة على الكمية هي القاعدة الذهبية للروابط الخلفية. ركز على كسب روابط من مواقع موثوقة ذات صلة من خلال المحتوى الرائع والعلاقات العامة الرقمية وبناء العلاقات.</p>

      <p>النشر كضيف، وبناء الروابط المكسورة، وإنشاء أصول قابلة للربط مثل البحث الأصلي أو الأدلة الشاملة هي استراتيجيات فعالة. تجنب مخططات الروابط والدلائل ذات الجودة المنخفضة.</p>

      <h2>الـ SEO المحلي</h2>
      <p>بالنسبة للشركات ذات المواقع الفعلية، يكون الـ SEO المحلي حاسمًا. قم بتحسين ملفك التجاري على جوجل، وتأكد من اتساق NAP (الاسم والعنوان ورقم الهاتف) عبر الويب، وشجع تقييمات العملاء.</p>

      <p>أنشئ محتوى خاص بالموقع وبناء اقتباسات محلية. يمكن أن يعزز بناء الروابط المحلية من المنظمات المجتمعية ومواقع الأخبار المحلية التصنيفات المحلية بشكل كبير.</p>

      <h2>قياس النجاح</h2>
      <p>تتبع حركة المرور العضوية وتصنيفات الكلمات المفتاحية ومعدلات التحويل ومقاييس المشاركة. استخدم Google Search Console لمراقبة الأداء وتحديد الفرص. قم بإعداد تتبع الأهداف في Google Analytics لقياس تأثير الـ SEO على أهداف العمل.</p>

      <h2>الخاتمة</h2>
      <p>يتطلب الـ SEO في عام 2025 نهجًا شاملاً يوازن بين التحسين التقني وإنشاء المحتوى عالي الجودة وتجربة المستخدم. ابق على اطلاع بتغييرات الخوارزمية، وركز على تقديم القيمة للمستخدمين، وكن صبورًا - الـ SEO هو استثمار طويل الأمد يؤتي ثماره بمرور الوقت.</p>
    `,

    // Blog Post: Next.js Performance Optimization (Arabic)
    "blog.post.nextjsPerformance.title": "نصائح تحسين أداء Next.js",
    "blog.post.nextjsPerformance.excerpt": "تعلم الاستراتيجيات الأساسية لتعزيز سرعة موقعك وتفاعل المستخدمين مع تقنيات تحسين Next.js هذه.",

    // Blog Post: AI in Web Development (Arabic)
    "blog.post.aiInWebDev.title": "كيف يحول الذكاء الاصطناعي تطوير الويب",
    "blog.post.aiInWebDev.excerpt": "اكتشف كيف يحدث الذكاء الاصطناعي ثورة في عمليات تطوير الويب، من توليد الكود إلى تجارب المستخدمين المخصصة.",
    "blog.post.aiInWebDev.content": `
      <div class="lead">
        <p>يغير الذكاء الاصطناعي جذريًا كيفية تعاملنا مع تطوير الويب. من توليد الكود إلى الاختبار الآلي وتجارب المستخدمين الذكية، يجعل الذكاء الاصطناعي المطورين أكثر إنتاجية مع تمكين أنواع جديدة تمامًا من التطبيقات.</p>
      </div>

      <h2>الكود المدعوم بالذكاء الاصطناعي</h2>
      <p>أدوات مثل GitHub Copilot وChatGPT ومساعدي الكود المتخصصين تحول سير عمل التطوير. يمكن لهذه الأدوات توليد الكود النموذجي واقتراح الإكمال وشرح الكود المعقد وحتى مساعدة في تصحيح الأخطاء.</p>

      <p>المفتاح هو تعلم العمل بشكل فعال مع مساعدي الذكاء الاصطناعي. يُستخدمون بشكل أفضل للمهام الروتينية وتوليد حالات الاختبار وكتابة الوثائق واستكشاف الطرق المختلفة لحل المشكلات. لا يزال المطورون بحاجة إلى فهم الكود واتخاذ قرارات معمارية وضمان الجودة.</p>

      <h2>الاختبار والجودة الآلي</h2>
      <p>يمكن لأدوات الاختبار المدعومة بالذكاء الاصطناعي توليد حالات اختبار تلقائيًا وتحديد الحالات الحدية وحتى التنبؤ بمكان حدوث الأخطاء. تستخدم أدوات اختبار التراجع البصري الذكاء الاصطناعي للكشف عن تغييرات واجهة المستخدم غير المقصودة.</p>

      <p>يمكن لنماذج التعلم الآلي تحليل تغييرات الكود والتنبؤ بتأثيرها، مما يساعد الفرق على ترتيب أولويات جهود الاختبار. هذا يؤدي إلى تغطية اختبار أفضل ودورات إصدار أسرع.</p>

      <h2>تجارب المستخدمين الذكية</h2>
      <p>يمكن للذكاء الاصطناعي تمكين تجارب المستخدمين المخصصة على نطاق واسع. يمكن لمحركات التوصية والدردشة الآلية والواجهات التكيفية تخصيص المحتوى والوظائف للمستخدمين الفرديين بناءً على سلوكهم وتفضيلاتهم.</p>

      <p>تسمح معالجة اللغة الطبيعية للمستخدمين بالتفاعل مع التطبيقات بشكل محادثي. تمكن رؤية الحاسوب ميزات مثل التعرف على الصور ومسح المستندات وتجارب الواقع المعزز مباشرة في المتصفح.</p>

      <h2>مراجعة الكود وضمان الجودة</h2>
      <p>يمكن لأدوات الذكاء الاصطناعي مراجعة الكود بحثًا عن الأخطاء المحتملة والثغرات الأمنية ومشكلات الأداء. يمكنهم اقتراح التحسينات وتحديد روائح الكود وضمان الالتزام بمعايير الكود.</p>

      <p>تتعلم هذه الأدوات من ملايين مستودعات الكود، وتحدد الأنماط التي قد يفوتها المراجعون البشر. يكملون مراجعة الكود البشرية من خلال التقاط المشكلات الروتينية، مما يسمح للمراجعين بالتركيز على الهيكل والمنطق التجاري.</p>

      <h2>تحسين الأداء</h2>
      <p>يمكن للذكاء الاصطناعي تحليل أداء التطبيق واقتراح التحسينات. يمكنه تحديد استعلامات قاعدة البيانات البطيئة والخوارزميات غير الفعالة والاختناقات الموارد. بعض الأدوات يمكنها حتى تطبيق التحسينات تلقائيًا.</p>

      <p>يمكن للتحليلات التنبؤية التنبؤ بأنماط الحركة وتوسيع الموارد تلقائيًا، مما يضمن الأداء الأمثل مع تقليل التكاليف.</p>

      <h2>تحسينات الوصولية</h2>
      <p>يمكن لأدوات الذكاء الاصطناعي توليد نص بديل للصور تلقائيًا واقتراح تسميات ARIA وتحديد مشكلات الوصولية. بعض الأدوات يمكنها حتى إصلاح مشكلات الوصولية الشائعة تلقائيًا.</p>

      <p>تجعل واجهات الصوت المدعومة بالذكاء الاصطناعي التطبيقات أكثر إمكانية للوصول للمستخدمين ذوي الإعاقة، بينما تكسر الترجمة في الوقت الفعلي حواجز اللغة.</p>

      <h2>توليد المحتوى وإدارته</h2>
      <p>يمكن للذكاء الاصطناعي توليد المحتوى، من أوصاف المنتجات إلى منشورات المدونة. بينما لا يزال الإشراف البشري ضروريًا، يمكن للذكاء الاصطناعي تسريع إنشاء المحتوى بشكل كبير ومساعدة في الحفاظ على الاتساق.</p>

      <p>يمكن لأنظمة إدارة المحتوى الذكية تصنيف المحتوى وتصنيفه تلقائيًا واقتراح مقالات ذات صلة وتحسين المحتوى لمحركات البحث.</p>

      <h2>مستقبل الذكاء الاصطناعي في تطوير الويب</h2>
      <p>نحن فقط نخدش سطح ما هو ممكن. قد تشمل التطورات المستقبلية ذكاء اصطناعي يمكنه تصميم تطبيقات كاملة من أوصاف اللغة الطبيعية، أو إعادة هيكلة الكود القديم تلقائيًا، أو التنبؤ بمشكلات الإنتاج ومنعها قبل حدوثها.</p>

      <p>يتطور دور المطورين من كتابة كل سطر من الكود إلى تنسيق أدوات الذكاء الاصطناعي، واتخاذ قرارات عالية المستوى، وضمان الجودة والأخلاقيات في الحلول المولدة بالذكاء الاصطناعي.</p>

      <h2>الخاتمة</h2>
      <p>الذكاء الاصطناعي لا يحل محل المطورين - بل يعزز قدراتهم. من خلال تبني أدوات الذكاء الاصطناعي وتعلم العمل معها بشكل فعال، يمكن للمطورين أن يكونوا أكثر إنتاجية وإبداعًا وركيزة على حل المشكلات المعقدة. مستقبل تطوير الويب هو تعاون بين الإبداع البشري والذكاء الاصطناعي.</p>
    `,

    // Blog Post: UI Design Principles (Arabic)
    "blog.post.uiDesignPrinciples.title": "مبادئ تصميم واجهة المستخدم الأساسية لعام 2025",
    "blog.post.uiDesignPrinciples.excerpt": "إتقان المبادئ الأساسية لتصميم واجهة المستخدم لإنشاء واجهات جميلة وعملية.",
    "blog.post.uiDesignPrinciples.content": `
      <div class="lead">
        <p>تصميم واجهة المستخدم الرائع هو مزيج من الفن والعلم. بينما تأتي الاتجاهات وتذهب، إلا أن بعض المبادئ الأساسية تبقى ثابتة. فهم وتطبيق هذه المبادئ سيساعدك على إنشاء واجهات ليست جميلة فحسب، بل عملية وسهلة الاستخدام أيضًا.</p>
      </div>

      <h2>التسلسل البصري</h2>
      <p>يوجه التسلسل البصري المستخدمين عبر واجهتك من خلال تحديد ترتيب الأهمية. استخدم الحجم واللون والتباين والتباعد لتوجيه الانتباه إلى العناصر الأكثر أهمية أولاً.</p>

      <p>يجب أن تكون الإجراءات الأساسية هي الأكثر بروزًا، والإجراءات الثانوية أقل بروزًا، والإجراءات الثالثية خفية. يجب أن تكون العناوين أكبر من نص النص، ويجب أن تبرز المعلومات المهمة من خلال التباين أو التموضع.</p>

      <h2>الاتساق والمعايير</h2>
      <p>يخلق الاتساق الإلمام ويقلل من الحمل المعرفي. استخدم ألوانًا وخطوطًا وتباعدًا وأنماط تفاعل متسقة في جميع أنحاء واجهتك. اتبع اتفاقيات النظام الأساسي حتى يتمكن المستخدمون من تطبيق معرفتهم الحالية.</p>

      <p>أنشئ وصيانة نظام تصميم يحتوي على مكونات قابلة لإعادة الاستخدام، ومقاييس تباعد محددة، وإرشادات واضحة. يضمن ذلك الاتساق عبر منتجك ويسرع عملية التصميم والتطوير.</p>

      <h2>المساحة البيضاء والتنفس</h2>
      <p>المساحة البيضاء (أو المساحة السلبية) ليست مساحة مهدورة - إنها عنصر تصميم حاسم. يحسن التباعد المناسب من القابلية للقراءة، ويخلق تسلسلاً بصريًا، ويجعل الواجهات تبدو أقل ازدحامًا وأكثر تميزًا.</p>

      <p>لا تخف من المساحة الفارغة. أعطِ محتواك مساحة للتنفس. استخدم حشوة وهوامش سخية، خاصة حول العناصر المهمة. جمّع العناصر ذات الصلة معًا وفصل العناصر غير ذات الصلة.</p>

      <h2>الطباعة وقابلية القراءة</h2>
      <p>الطباعة أساسية في تصميم واجهة المستخدم. اختر خطوطًا قابلة للقراءة بأحجام وأوزان مختلفة. حافظ على تسلسل واضح مع مستويات عناوين مميزة ونص نصي.</p>

      <p>استخدم ارتفاع سطر 1.5-1.6 لنص النص، حد طول السطر إلى 50-75 حرفًا للحصول على قابلية قراءة مثالية، وتأكد من تباين كافٍ بين النص والخلفية. فكر في استخدام خطوط النظام للحصول على أداء أفضل وإلمام.</p>

      <h2>نظرية اللون والوصولية</h2>
      <p>اللون ينقل المعنى ويخلق المزاج ويوجه الانتباه. استخدم لوحة ألوان محدودة - عادةً لون أساسي واحد، ولون أو اثنان مميزين، ومجموعة من الألوان المحايدة.</p>

      <p>تأكد من تباين كافٍ للوصولية (4.5:1 للنص العادي، 3:1 للنص الكبير). لا تعتمد على اللون وحده لنقل المعلومات - استخدم الرموز والتسميات أو الأنماط أيضًا. اختبر تصاميمك بالأبيض والأسود للتحقق من أن التسلسل يعمل بدون لون.</p>

      <h2>التعليقات والإمكانيات</h2>
      <p>قدم تعليقات واضحة لإجراءات المستخدم. يجب أن تحتوي الأزرار على حالات التمرير والنشاط والتعطيل. أظهر مؤشرات التحميل للعمليات غير المتزامنة. عرض رسائل النجاح أو الخطأ بوضوح.</p>

      <p>استخدم الإمكانيات - الإشارات البصرية التي تشير إلى كيفية استخدام العنصر. يجب أن تبدو الأزرار قابلة للنقر، ويجب أن تكون الروابط مميزة، ويجب أن تستجيب العناصر التفاعلية لإدخال المستخدم.</p>

      <h2>التصميم المتجاوب أولاً للهواتف المحمولة</h2>
      <p>صمم للهواتف المحمولة أولاً، ثم عزز للشاشات الأكبر. يضمن ذلك أن تجربة جوهرك تعمل على الأجهزة الأكثر تقييدًا. استخدم تخطيطات متجاوبة تتكيف بسلاسة مع أحجام الشاشة المختلفة.</p>

      <p>فكر في أهداف اللمس - اجعل العناصر التفاعلية على الأقل 44x44 بكسل للنقر السهل. تأكد من أن الإجراءات المهمة في متناول اليد الواحدة على الأجهزة المحمولة.</p>

      <h2>الكشف التدريجي</h2>
      <p>لا تطغِ على المستخدمين بكمية كبيرة من المعلومات مرة واحدة. استخدم الكشف التدريجي لإظهار ما هو ضروري فقط في البداية، وكشف الخيارات أو المعلومات الإضافية حسب الحاجة.</p>

      <p>يمكن تحقيق ذلك من خلال الأقسام القابلة للتوسيع، والنماذج متعددة الخطوات، والتلميحات، أو مربعات الحوار الوسيطة. الهدف هو تقليل الحمل المعرفي مع الحفاظ على إمكانية الوصول إلى الميزات المتقدمة.</p>

      <h2>الخاتمة</h2>
      <p>تشكل هذه المبادئ أساس تصميم واجهة المستخدم الجيد. بينما تتغير الاتجاهات والأدوات، تظل هذه الأساسيات ذات صلة. مارس تطبيقها باستمرار، وستنشئ واجهات جميلة وعملية للغاية.</p>
    `,

    // Blog Post: Designing for Accessibility (Arabic)
    "blog.post.accessibility.title": "تصميم الوصولية: دليل شامل",
    "blog.post.accessibility.excerpt": "تعلم كيفية إنشاء تجارب رقمية شاملة تعمل للجميع، بغض النظر عن قدراتهم.",
    "blog.post.accessibility.content": `
      <div class="lead">
        <p>الوصولية في تصميم الويب ليست مجرد متطلب قانوني - إنها ضرورة أخلاقية وممارسة أعمال جيدة. إن إنشاء مواقع ويب يمكن الوصول إليها يضمن أن يتمكن الجميع، بغض النظر عن قدراتهم، من الوصول إلى المحتوى والتفاعل معه.</p>
      </div>

      <h2>فهم الوصولية على الويب</h2>
      <p>تعني الوصولية على الويب تصميم وتطوير مواقع الويب والأدوات والتقنيات بحيث يمكن للأشخاص ذوي الإعاقة استخدامها. ويشمل ذلك الأشخاص ذوي الإعاقات السمعية والمعرفية والعصبية والجسدية والكلامية والبصرية.</p>

      <p>وفقًا لمنظمة الصحة العالمية، يعاني أكثر من مليار شخص في جميع أنحاء العالم من شكل من أشكال الإعاقة. من خلال جعل موقعك متاحًا، فإنك لا تتوافق فقط مع اللوائح - بل تفتح أعمالك أمام جزء كبير من السكان.</p>

      <h2>إرشادات WCAG</h2>
      <p>توفر إرشادات محتوى الويب المتاح (WCAG) إطارًا شاملاً للوصولية على الويب. الإرشادات منظمة حول أربعة مبادئ: قابل للإدراك وقابل للتشغيل وقابل للفهم وقوي (POUR).</p>

      <p>مستوى WCAG 2.1 AA هو المعيار الذي تهدف إليه معظم المنظمات، حيث غالبًا ما يُطلب قانونًا في العديد من البلدان. ويشمل ذلك متطلبات مثل توفير بدائل نصية للصور، وضمان التنقل بالكيبورد، والحفاظ على تباين كافٍ في الألوان، وجعل المحتوى قابلاً للقراءة والفهم.</p>

      <h2>التنفيذ العملي</h2>
      <p>ابدأ بـ HTML الدلالي - استخدم تسلسلات عناوين مناسبة وقوائم وعلامات. أضف تسميات ARIA عند الضرورة، لكن تذكر أن عناصر HTML الأصلية غالبًا ما تكون أفضل من سمات ARIA.</p>

      <p>تأكد من أن جميع العناصر التفاعلية يمكن الوصول إليها بالكيبورد. اختبر موقعك بالتنقل باستخدام لوحة المفاتيح فقط - إذا لم تتمكن من الوصول إلى شيء ما أو تنشيطه، فلا يمكن للمستخدمين الذين يعتمدون على لوحات المفاتيح أو التقنيات المساعدة ذلك أيضًا.</p>

      <h2>اللون والتباين</h2>
      <p>تباين الألوان أمر حاسم للمستخدمين ذوي الإعاقات البصرية. يتطلب WCAG نسبة تباين لا تقل عن 4.5:1 للنص العادي و3:1 للنص الكبير. استخدم أدوات مثل WebAIM Contrast Checker للتحقق من اختيارات الألوان الخاصة بك.</p>

      <p>لا تعتمد أبدًا على اللون وحده لنقل المعلومات. قدم دائمًا إشارات بصرية إضافية مثل الرموز أو الأنماط أو تسميات النصوص.</p>

      <h2>الاختبار والأدوات</h2>
      <p>استخدم أدوات الاختبار الآلي مثل axe DevTools وWAVE وLighthouse للقبض على مشكلات الوصولية الشائعة. ومع ذلك، تلتقط الأدوات الآلية حوالي 30% فقط من مشكلات الوصولية - الاختبار اليدوي ضروري.</p>

      <p>اختبر باستخدام قارئات الشاشة الفعلية مثل NVDA وJAWS وVoiceOver. الأفضل من ذلك، أشرك المستخدمين ذوي الإعاقة في عملية الاختبار الخاصة بك للحصول على تعليقات حقيقية.</p>

      <h2>الخاتمة</h2>
      <p>يجب النظر في الوصولية من بداية أي مشروع، وليس إضافتها كفكرة لاحقة. من خلال اتباع هذه الإرشادات وجعل الوصولية أولوية، ستخلق تجارب أفضل لجميع المستخدمين مع توسيع جمهورك المحتمل.</p>
    `,
    "blog.post.trends2025.content": `
      <div class="lead">
        <p>مشهد تطوير الويب يتطور بسرعة أكبر من أي وقت مضى. في عام 2025، يتبنى المطورون والوكالات الرقمية أدوات وتقنيات جديدة تركز على <strong>السرعة وتجربة المستخدم وتكامل الذكاء الاصطناعي والاستدامة</strong>. سواء كنت صاحب علامة تجارية أو مطور أو مصمم، فإن فهم هذه التوجهات يمكن أن يساعدك على البقاء تنافسيًا في عالم رقمي أولاً.</p>
      </div>

      <section class="trend-section">
        <h2>التطوير المعتمد على الذكاء الاصطناعي والأتمتة</h2>
        <p>الذكاء الاصطناعي يحول طريقة بناء وصيانة المواقع. من أدوات <strong>توليد الكود بالذكاء الاصطناعي</strong> مثل GitHub Copilot إلى <strong>تجربة المستخدم المخصصة بناءً على سلوك المستخدم</strong>، الأتمتة تقطع وقت التطوير وتعزز الإبداع.</p>
        <div class="trend-highlight">
          <p><strong>الرؤية الرئيسية:</strong> روبوتات الدردشة بالذكاء الاصطناعي ومساعدي المحتوى أصبحت الآن معيارًا للمواقع، وليست رفاهية.</p>
        </div>
      </section>

      <section class="trend-section">
        <h2>الهيكلية الأولى بالأداء</h2>
        <p>تركيز جوجل على <strong>Core Web Vitals</strong> يستمر في عام 2025. أوقات التحميل السريعة والتفاعل السلس والاستقرار البصري أصبحت أكثر أهمية من أي وقت مضى. يستخدم المطورون <strong>Next.js 14 وAstro وVite</strong> لبناء مواقع فائقة السرعة تعتمد على الأداء.</p>
        <div class="trend-highlight">
          <p><strong>نصيحة احترافية:</strong> قم بتحسين الصور وتطبيق التحميل الكسول والاستفادة من التخزين المؤقت للجمهور العالمي.</p>
        </div>
      </section>

      <section class="trend-section">
        <h2>الحوسبة بدون خادم والحافة</h2>
        <p>هيكلية بدون خادم و<strong>نشر الحافة</strong> تعيد تعريف قابلية التطوير. منصات مثل <strong>Vercel وNetlify وCloudflare Workers</strong> تسمح للمطورين بنشر الكود قريبًا من المستخدمين، مما يحسن الكمون والأداء بشكل كبير.</p>
        <p>يقلل هذا التحول أيضًا التكاليف ويبسط إدارة البنية التحتية الخلفية.</p>
      </section>

      <section class="trend-section">
        <h2>تطبيقات الويب التقدمية (PWAs) 2.0</h2>
        <p>تستمر PWAs في طمس الحدود بين الويب والتطبيقات الأصلية للهواتف المحمولة. في عام 2025، تدعم <strong>إشعارات الدفع والوصول دون اتصال والقدرات كاملة الشاشة</strong> بشكل أفضل.</p>
        <p>تستخدم العلامات التجارية PWAs لتقديم تجارب تشبه التطبيقات دون تكلفة التطوير الأصلي.</p>
      </section>

      <section class="trend-section">
        <h2>واجهة المستخدم بالحركة والتصميم التفاعلي</h2>
        <p>التصاميم الثابتة انتهت. واجهة المستخدم بالحركة و<strong>الرسوم المتحركة الدقيقة</strong> و<strong>تأثيرات التمرير ثلاثية الأبعاد</strong> تقود الطريق نحو تجارب غامرة. أدوات مثل <strong>Framer Motion</strong> و<strong>GSAP</strong> تجعل من السهل إضافة الشخصية والعاطفة إلى الواجهات.</p>
        <div class="trend-highlight warning">
          <p><strong>مهم:</strong> يجب أن تعزز الحركة تجربة المستخدم - وليس إغراقها.</p>
        </div>
      </section>

      <section class="trend-section">
        <h2>تصميم الويب المستدام</h2>
        <p>التصميم الصديق للبيئة ليس مجرد كلمة طنانة. المواقع الآن محسنة ل<strong>استهلاك طاقة أقل</strong>، باستخدام <strong>السمات الداكنة والموارد البسيطة والكود الفعال</strong>. يركز المطورون والوكالات على حلول الاستضافة الخضراء لتقليل البصمة الكربونية.</p>
      </section>

      <section class="trend-section">
        <h2>الأمان والخصوصية بالتصميم</h2>
        <p>مع تزايد وعي المستخدمين بالخصوصية، أصبحت <strong>أنظمة المصادقة الآمنة</strong> و<strong>هيكلية عدم الثقة</strong> و<strong>واجهات برمجة التطبيقات المشفرة</strong> معيارًا. يظل الامتثال لـ GDPR وCCPA وسياسات البيانات العالمية أولوية قصوى للمطورين والعلامات التجارية.</p>
      </section>

      <section class="trend-section">
        <h2>ثورة الكود المنخفض</h2>
        <p>تريد الشركات التحرك بسرعة. أدوات الكود المنخفض والكود الخالي مثل <strong>Webflow وBubble وBuilder.io</strong> تمكن غير المطورين من إنشاء نماذج أولية وظيفية - بينما يركز المطورون على التكاملات والأداء والمنطق المخصص.</p>
      </section>

      <section class="trend-section">
        <h2>الهيكلية بدون رأس والقابلة للتجميع</h2>
        <p>تهيمن أنظمة إدارة المحتوى بدون رأس مثل <strong>Strapi وSanity وContentful</strong> على عام 2025، وتوفر المرونة عبر الأجهزة والمنصات. مقترنة بـ <strong>JAMstack</strong> و<strong>GraphQL</strong>، تمكن تسليم المحتوى بشكل أسرع وتجربة متعددة القنوات سلسة.</p>
      </section>

      <section class="trend-section">
        <h2>تكامل Web3 والبلوكشين</h2>
        <p>يزداد تبني Web3 مع ميزات <strong>المصادقة اللامركزية والعقود الذكية</strong> و<strong>الملكية الرقمية</strong>. على الرغم من أنه لا يزال مبكرًا للعلامات التجارية السائدة، إلا أن المزيد من الشركات الناشئة تستكشف هوية المستخدم القائمة على البلوكشين والعضويات المرتبطة بالـ NFT.</p>
      </section>

      <section class="key-takeaways">
        <h2>النقاط الرئيسية</h2>
        <div class="takeaways-grid">
          <div class="takeaway-item">
            <strong>تكامل الذكاء الاصطناعي:</strong> أدوات الأتمتة أصبحت ضرورية للتطوير الأسرع
          </div>
          <div class="takeaway-item">
            <strong>الأداء أولاً:</strong> Core Web Vitals والتحسين غير قابل للتفاوض
          </div>
          <div class="takeaway-item">
            <strong>الاستدامة:</strong> الاستضافة الخضراء والتصميم الموفر للطاقة مهم
          </div>
          <div class="takeaway-item">
            <strong>المرونة:</strong> الهيكليات بدون رأس والقابلة للتجميع توفر قابلية تطوير أفضل
          </div>
        </div>
      </section>

      <section class="conclusion">
        <h2>النظر إلى الأمام</h2>
        <p>تطوير الويب في عام 2025 يُعرف بـ <strong>الذكاء الاصطناعي والأتمتة والمرونة</strong>. المفتاح هو التوازن بين <strong>الأداء والإبداع والاستدامة</strong>. في MarketMedia.ma، نحن نتبنى بالفعل هذه التقنيات الحديثة لبناء مواقع أسرع وأذكى ومستقبلية لعملائنا.</p>

        <div class="cta-box">
          <p><strong>هل أنت مستعد لتبني هذه التوجهات؟</strong> <a href="/contact">تواصل معنا</a> لمناقشة كيف يمكننا مساعدتك في تحويل حضورك على الويب باستخدام التكنولوجيا المتطورة.</p>
        </div>
      </section>
    `,

    // About
    "about.title": "عن أورين",
    "about.hero.badge": "تعرف على قصتنا",
    "about.hero.title": "عن أورين",
    "about.hero.subtitle": "نحن فريق من المطورين والمصممين والاستراتيجيين المتحمسين الذين يكرسون جهودهم لبناء تجارب رقمية استثنائية تدفع نمو الأعمال وتحول الأفكار إلى واقع.",
    "about.hero.cta.primary": "ابدأ مشروعك",
    "about.hero.cta.secondary": "شاهد أعمالنا",
    "about.hero.stats.projects": "مشروع مكتمل",
    "about.hero.stats.satisfaction": "رضا العملاء",
    "about.hero.stats.support": "دعم متوفر",
    "about.stats.title": "تأثيرنا بالأرقام",
    "about.stats.subtitle": "موثوق به من قبل الشركات في جميع أنحاء العالم لتقديم نتائج استثنائية",
    "about.mission.title": "مهمتنا",
    "about.mission.description": "تمكين الشركات بحلول رقمية مبتكرة تدفع النمو وتعزز تجارب المستخدمين وتخلق قيمة دائمة في المشهد الرقمي المتطور باستمرار. نحن نؤمن بقوة التكنولوجيا لتحويل الأعمال وتحسين الحياة.",
    "about.vision.title": "رؤيتنا",
    "about.vision.description": "أن نكون الشريك الموثوق به للشركات التي تسعى لتحويل حضورها الرقمي، معترف بها لتميزنا الفني وابتكارنا الإبداعي والتزامنا الثابت بنجاح العملاء. نصبوا إلى وضع معايير جديدة في الحرفية الرقمية.",
    "about.mission.badge": "أساسنا",
    "about.mission.cta": "تعرف علينا أكثر",
    "about.values.badge": "مبادئنا",
    "about.values.cta": "اكتشف قيمنا",
    "about.team.badge": "تعرف على الفريق",
    "about.team.cta": "تعرف علينا",
    "about.vision.subtitle": "مهمتنا ورؤيتنا",
    "about.vision.intro": "القوى الدافعة التي تشكل كل ما نقوم به",
    "about.values.title": "قيمنا",
    "about.values.subtitle": "المبادئ التي توجه كل ما نقوم به",
    "about.values.client.title": "التركيز على العميل",
    "about.values.client.description": "نجاحك هو نجاحنا. نعطي الأولوية لفهم أهدافك وتقديم حلول تتجاوز التوقعات.",
    "about.values.innovation.title": "الابتكار",
    "about.values.innovation.description": "نبقى في طليعة اتجاهات التكنولوجيا لتوفير حلول متطورة تعطيك ميزة تنافسية.",
    "about.values.collaboration.title": "التعاون",
    "about.values.collaboration.description": "نعمل عن كثب مع فريقك، مع الحفاظ على التواصل الشفاف طوال دورة حياة المشروع بأكملها.",
    "about.values.excellence.title": "التميز",
    "about.values.excellence.description": "نحن ملتزمون بتقديم أعمال عالية الجودة تلبي أعلى معايير الأداء والتصميم.",
    "about.team.title": "تعرف على فريقنا",
    "about.team.subtitle": "محترفون موهوبون متحمسون لخلق تجارب رقمية استثنائية",
    "about.achievements.client.title": "رضا العملاء",
    "about.achievements.client.description": "تجاوز التوقعات باستمرار",
    "about.achievements.projects.title": "المشاريع المكتملة",
    "about.achievements.projects.description": "تسليمات ناجحة في مختلف الصناعات",
    "about.achievements.support.title": "الدعم المتاح",
    "about.achievements.support.description": "دائماً هنا عندما تحتاجنا",
    "about.achievements.experience.title": "سنوات الخبرة",
    "about.achievements.experience.description": "بناء الحلول الرقمية منذ عام 2019",
    "about.team.ceo.role": "المؤسس والرئيس التنفيذي",
    "about.team.ceo.bio": "أكثر من 10 سنوات من الخبرة في تطوير الويب والاستراتيجية الرقمية",
    "about.team.cto.role": "المدير التقني",
    "about.team.cto.bio": "مهندس معماري متكامل يتخصص في الحلول السحابية القابلة للتطوير",
    "about.team.design.role": "رئيس قسم التصميم",
    "about.team.design.bio": "مصمم حائز على جوائز يركز على تجارب المستخدم المتمحورة",
    "about.cta.title": "هل أنت مستعد للعمل معاً؟",
    "about.cta.subtitle": "دعنا نناقش مشروعك ونرى كيف يمكننا مساعدتك في تحقيق رؤيتك بخبرتنا في تطوير الويب والتصميم والاستراتيجية الرقمية.",
    "about.cta.primary": "ابدأ مشروعك",
    "about.cta.secondary": "شاهد أعمالنا",
    "about.trust.available": "متاح للمشاريع الجديدة",
    "about.trust.consultation": "استشارة مجانية",
    "about.trust.turnaround": "تسليم سريع",

    // 404
    "404.title": "الصفحة غير موجودة",
    "404.description": "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
    "404.home": "الصفحة الرئيسية",
    "404.contact": "اتصل بنا",

    // Common
    "common.learnMore": "اعرف المزيد",
    "common.readMore": "اقرأ المزيد",
    "common.viewAll": "عرض الكل",
    "common.getStarted": "ابدأ الآن",
    "common.contactUs": "اتصل بنا",
    "common.backTo": "العودة إلى",
    "common.loading": "جاري التحميل...",
    "common.live": "مباشر",
    "common.liveDemo": "عرض مباشر",
    "common.code": "الكود",
    "common.sourceCode": "الكود المصدري",
    "common.viewDetails": "عرض التفاصيل",
    "common.more": "أخرى",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.about": "À propos",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.logo": "Oren",

    // Hero
    "hero.title": "Votre Partenaire Digital",
    "hero.subtitle":
      "Solutions web sur mesure et plateformes innovantes pour accélérer votre croissance et transformer votre présence digitale.",
    "hero.cta.primary": "Demander un devis",
    "hero.cta.secondary": "Voir nos réalisations",
    "hero.badge": "Disponible pour de nouveaux projets",
    "hero.stats.projects": "Projets livrés",
    "hero.stats.satisfaction": "Satisfaction client",
    "hero.stats.experience": "Années d'expérience",

    // Services
    "services.title": "Nos Services",
    "services.subtitle": "Solutions numériques complètes adaptées aux besoins de votre entreprise",
    "services.headerBadge": "Ce Que Nous Proposons",
    "services.web-dev": "Développement Web",
    "services.web-dev.desc":
      "Sites web et applications personnalisés construits avec des technologies modernes pour des performances optimales.",
    "services.custom-platforms": "Plateformes Personnalisées",
    "services.custom-platforms.desc":
      "Plateformes numériques sur mesure conçues pour répondre à vos besoins commerciaux uniques.",
    "services.ecommerce": "Solutions E-commerce",
    "services.ecommerce.desc":
      "Boutiques en ligne complètes avec paiements sécurisés et expérience utilisateur fluide.",
    "services.marketing": "Marketing Digital",
    "services.marketing.desc": "Stratégies marketing basées sur les données pour augmenter votre visibilité en ligne.",
    "services.social": "Gestion des Réseaux Sociaux",
    "services.social.desc": "Stratégies complètes de médias sociaux pour construire votre marque.",
    "services.design": "Design UI/UX",
    "services.design.desc": "Interfaces belles et intuitives offrant des expériences utilisateur exceptionnelles.",
    "services.web-dev.badge": "Le Plus Populaire",
    "services.design.badge": "En Vedette",
    "services.web-dev.feature.1": "Design Réactif",
    "services.web-dev.feature.2": "Optimisation des Performances",
    "services.web-dev.feature.3": "Compatible SEO",
    "services.web-dev.feature.4": "Multi-Navigateurs",
    "services.custom-platforms.feature.1": "Solutions Personnalisées",
    "services.custom-platforms.feature.2": "Architecture Évolutive",
    "services.custom-platforms.feature.3": "Intégration API",
    "services.custom-platforms.feature.4": "Déploiement Cloud",
    "services.ecommerce.feature.1": "Intégration des Paiements",
    "services.ecommerce.feature.2": "Gestion des Stocks",
    "services.ecommerce.feature.3": "Suivi des Commandes",
    "services.ecommerce.feature.4": "Tableau de Bord Analytique",
    "services.marketing.feature.1": "Optimisation SEO",
    "services.marketing.feature.2": "Stratégie de Contenu",
    "services.marketing.feature.3": "Campagnes PPC",
    "services.marketing.feature.4": "Analyses et Rapports",
    "services.social.feature.1": "Création de Contenu",
    "services.social.feature.2": "Gestion Communautaire",
    "services.social.feature.3": "Planification de Campagnes",
    "services.social.feature.4": "Suivi des Performances",
    "services.design.feature.1": "Recherche Utilisateur",
    "services.design.feature.2": "Wireframing",
    "services.design.feature.3": "Prototypage",
    "services.design.feature.4": "Systèmes de Design",

    // Custom Platforms Service Page - French
    "services.custom-platforms.hero.badge": "Solutions Sur Mesure",
    "services.custom-platforms.hero.title": "Développement de Plateformes Personnalisées",
    "services.custom-platforms.hero.subtitle": "Plateformes numériques sur mesure conçues pour correspondre à vos processus métier, flux de travail et exigences uniques",
    "services.custom-platforms.hero.button.primary": "Discuter de Votre Projet",
    "services.custom-platforms.hero.button.secondary": "Voir les Études de Cas",
    "services.custom-platforms.hero.cta": "Construisez votre plateforme personnalisée aujourd'hui",
    "services.custom-platforms.hero.stats.uptime": "Garantie de Disponibilité",
    "services.custom-platforms.hero.stats.support": "Support Disponible",
    "services.custom-platforms.hero.stats.scalable": "Évolutif Entreprise",
    "services.custom-platforms.features.badge": "Capacités de Plateforme",
    "services.custom-platforms.features.title": "Capacités de Plateforme",
    "services.custom-platforms.features.subtitle": "Fonctionnalités puissantes conçues pour rationaliser vos opérations",
    "services.custom-platforms.features.cta": "Prêt à développer votre entreprise ?",
    "services.custom-platforms.features.performance.title": "Haute Performance",
    "services.custom-platforms.features.performance.description": "Conçu pour la vitesse et l'efficacité, gérant des milliers d'utilisateurs simultanés sans problème",
    "services.custom-platforms.features.database.title": "Gestion des Données",
    "services.custom-platforms.features.database.description": "Architecture de base de données robuste pour un stockage sécurisé et une récupération efficace des données",
    "services.custom-platforms.features.cloud.title": "Infrastructure Cloud",
    "services.custom-platforms.features.cloud.description": "Déploiement cloud évolutif avec mise à l'échelle automatique et haute disponibilité",
    "services.custom-platforms.features.security.title": "Sécurité d'Entreprise",
    "services.custom-platforms.features.security.description": "Mesures de sécurité avancées incluant le chiffrement, l'authentification et le contrôle d'accès",
    "services.custom-platforms.features.workflow.title": "Flux de Travail Personnalisés",
    "services.custom-platforms.features.workflow.description": "Processus automatisés adaptés à vos opérations et exigences métier spécifiques",
    "services.custom-platforms.features.analytics.title": "Analyses et Rapports",
    "services.custom-platforms.features.analytics.description": "Tableaux de bord et rapports complets pour suivre les performances et prendre des décisions basées sur les données",
    "services.custom-platforms.usecases.badge": "Parfait Pour",
    "services.custom-platforms.usecases.title": "Parfait Pour",
    "services.custom-platforms.usecases.subtitle": "Industries et cas d'usage dans lesquels nous nous spécialisons",
    "services.custom-platforms.usecases.cta": "Trouvez votre solution parfaite",
    "services.custom-platforms.usecases.saas.title": "Applications SaaS",
    "services.custom-platforms.usecases.saas.description": "Plateformes multi-locataires avec gestion des abonnements, authentification utilisateur et tableaux de bord riches en fonctionnalités",
    "services.custom-platforms.usecases.internal.title": "Outils Internes",
    "services.custom-platforms.usecases.internal.description": "Applications métier personnalisées pour rationaliser les opérations, gérer les ressources et améliorer la productivité",
    "services.custom-platforms.usecases.marketplace.title": "Marketplaces",
    "services.custom-platforms.usecases.marketplace.description": "Plateformes bilatérales reliant acheteurs et vendeurs avec traitement des paiements et gestion des transactions",
    "services.custom-platforms.usecases.booking.title": "Systèmes de Réservation",
    "services.custom-platforms.usecases.booking.description": "Plateformes de réservation et de planification avec intégration calendrier, notifications et traitement des paiements",
    "services.custom-platforms.usecases.crm.title": "Systèmes CRM",
    "services.custom-platforms.usecases.crm.description": "Outils de gestion de la relation client adaptés à votre processus de vente et parcours client",
    "services.custom-platforms.usecases.learning.title": "Plateformes d'Apprentissage",
    "services.custom-platforms.usecases.learning.description": "Plateformes éducatives avec gestion des cours, suivi des progrès et diffusion de contenu interactif",
    "services.custom-platforms.cta.title": "Construisons Votre Plateforme Personnalisée",
    "services.custom-platforms.cta.subtitle": "Planifiez une consultation pour discuter de vos exigences et obtenir une proposition de solution sur mesure.",
    "services.custom-platforms.cta.button": "Commencer Votre Projet",

    // E-commerce Service Page - French
    "services.ecommerce.hero.badge": "Boutiques en Ligne",
    "services.ecommerce.hero.title": "Services de Développement E-commerce",
    "services.ecommerce.hero.subtitle": "Construisez des boutiques en ligne puissantes qui stimulent les ventes et offrent des expériences d'achat exceptionnelles",
    "services.ecommerce.hero.button.primary": "Commencer",
    "services.ecommerce.hero.button.secondary": "Voir les Exemples",
    "services.ecommerce.hero.cta": "Commencez à vendre en ligne aujourd'hui",
    "services.ecommerce.hero.stats.uptime": "Garantie de Disponibilité",
    "services.ecommerce.hero.stats.stores": "Boutiques Construites",
    "services.ecommerce.hero.stats.compliant": "Conforme PCI DSS",
    "services.ecommerce.features.badge": "Fonctionnalités de Boutique",
    "services.ecommerce.features.title": "Fonctionnalités de Boutique",
    "services.ecommerce.features.subtitle": "Tout ce dont vous avez besoin pour gérer une boutique en ligne réussie",
    "services.ecommerce.features.cta": "Prêt à lancer votre boutique ?",
    "services.ecommerce.features.payments.title": "Intégration des Paiements",
    "services.ecommerce.features.payments.description": "Traitement sécurisé des paiements avec plusieurs passerelles incluant Stripe, PayPal et Square",
    "services.ecommerce.features.inventory.title": "Gestion des Stocks",
    "services.ecommerce.features.inventory.description": "Suivi des stocks en temps réel, alertes de rupture de stock et mises à jour automatiques des stocks",
    "services.ecommerce.features.analytics.title": "Analytiques de Vente",
    "services.ecommerce.features.analytics.description": "Tableaux de bord complets pour suivre les ventes, le comportement des clients et les performances de l'entreprise",
    "services.ecommerce.features.security.title": "Sécurité et Conformité",
    "services.ecommerce.features.security.description": "Chiffrement SSL, conformité PCI et protection avancée contre la fraude pour des transactions sécurisées",
    "services.ecommerce.features.mobile.title": "Optimisé Mobile",
    "services.ecommerce.features.mobile.description": "Design réactif qui offre une expérience d'achat fluide sur tous les appareils",
    "services.ecommerce.features.performance.title": "Haute Performance",
    "services.ecommerce.features.performance.description": "Temps de chargement rapides, images optimisées et processus de paiement fluide pour de meilleurs taux de conversion",
    "services.ecommerce.technologies.badge": "Pile E-commerce",
    "services.ecommerce.technologies.title": "Technologies Que Nous Utilisons",
    "services.ecommerce.technologies.subtitle": "Plateformes d'e-commerce modernes et solutions de paiement",
    "services.ecommerce.technologies.cta": "Explorez nos outils e-commerce",
    "services.ecommerce.process.badge": "Notre Processus",
    "services.ecommerce.process.title": "Notre Processus",
    "services.ecommerce.process.subtitle": "Une approche rationalisée pour lancer votre boutique en ligne avec succès",
    "services.ecommerce.process.cta": "Découvrez comment nous construisons les boutiques",
    "services.ecommerce.process.planning.title": "Stratégie et Planification",
    "services.ecommerce.process.planning.description": "Nous analysons votre modèle économique, votre audience cible et la concurrence pour créer une stratégie gagnante.",
    "services.ecommerce.process.design.title": "Design et UX",
    "services.ecommerce.process.design.description": "Nous créons de beaux designs axés sur la conversion qui reflètent votre marque et guident les clients vers l'achat.",
    "services.ecommerce.process.development.title": "Développement et Intégration",
    "services.ecommerce.process.development.description": "Nous construisons votre boutique avec toutes les intégrations nécessaires incluant paiements, expédition et systèmes de stock.",
    "services.ecommerce.process.testing.title": "Tests et Optimisation",
    "services.ecommerce.process.testing.description": "Tests approfondis sur différents appareils et scénarios pour garantir des performances optimales et une expérience utilisateur.",
    "services.ecommerce.process.launch.title": "Lancement et Croissance",
    "services.ecommerce.process.launch.description": "Nous vous aidons à lancer avec succès et fournissons un support continu pour le marketing et l'optimisation.",
    "services.ecommerce.faq.badge": "Questions Fréquentes",
    "services.ecommerce.faq.title": "Questions Fréquemment Posées",
    "services.ecommerce.faq.subtitle": "Questions courantes sur nos services de développement e-commerce",
    "services.ecommerce.faq.cta": "Vous avez encore des questions ?",
    "services.ecommerce.faq.platforms.question": "Avec quelles plateformes e-commerce travaillez-vous ?",
    "services.ecommerce.faq.platforms.answer": "Nous travaillons avec toutes les principales plateformes incluant Shopify, WooCommerce, Magento et solutions personnalisées. Nous recommanderons la meilleure plateforme selon vos besoins et budget spécifiques.",
    "services.ecommerce.faq.payments.question": "Quels moyens de paiement pouvez-vous intégrer ?",
    "services.ecommerce.faq.payments.answer": "Nous intégrons toutes les principales passerelles de paiement incluant Stripe, PayPal, Square, Authorize.Net et plus. Nous assurons la conformité PCI et le traitement sécurisé des paiements.",
    "services.ecommerce.faq.scaling.question": "Pouvez-vous gérer les boutiques à fort trafic ?",
    "services.ecommerce.faq.scaling.answer": "Oui, nous construisons des solutions e-commerce évolutives qui peuvent gérer des milliers d'utilisateurs simultanés. Nous utilisons l'infrastructure cloud et les techniques d'optimisation des performances.",
    "services.ecommerce.faq.seo.question": "Optimisez-vous les boutiques pour les moteurs de recherche ?",
    "services.ecommerce.faq.seo.answer": "Absolument. Toutes nos boutiques e-commerce sont construites avec les meilleures pratiques SEO incluant une structure appropriée, des balises méta, des temps de chargement rapides et une optimisation mobile.",
    "services.ecommerce.faq.support.question": "Fournissez-vous un support continu ?",
    "services.ecommerce.faq.support.answer": "Oui, nous proposons des packages de maintenance complets incluant mises à jour, surveillance de sécurité, optimisation des performances et support technique.",
    "services.ecommerce.cta.title": "Prêt à Lancer Votre Boutique en Ligne ?",
    "services.ecommerce.cta.subtitle": "Construisons une solution e-commerce qui stimule les ventes et développe votre entreprise.",
    "services.ecommerce.cta.button.primary": "Obtenir un Devis Gratuit",
    "services.ecommerce.cta.button.secondary": "Voir Nos Boutiques",

    // Digital Marketing Service Page - French
    "services.digital-marketing.hero.badge": "Marketing Digital",
    "services.digital-marketing.hero.title": "Services de Marketing Digital",
    "services.digital-marketing.hero.subtitle": "Stratégies basées sur les données pour développer votre présence en ligne et atteindre votre audience cible",
    "services.digital-marketing.hero.button.primary": "Commencer",
    "services.digital-marketing.hero.button.secondary": "Voir les Études de Cas",
    "services.digital-marketing.hero.cta": "Commencez à développer votre entreprise aujourd'hui",
    "services.digital-marketing.hero.stats.roi": "Augmentation Moyenne du ROI",
    "services.digital-marketing.hero.stats.leads": "Leads Générés",
    "services.digital-marketing.hero.stats.campaigns": "Campagnes Actives",
    "services.digital-marketing.features.badge": "Services Marketing",
    "services.digital-marketing.features.title": "Services Marketing",
    "services.digital-marketing.features.subtitle": "Solutions complètes de marketing digital pour booster votre présence en ligne",
    "services.digital-marketing.features.cta": "Prêt à développer votre entreprise ?",
    "services.digital-marketing.features.seo.title": "Optimisation SEO",
    "services.digital-marketing.features.seo.description": "Améliorez vos classements de recherche et générez du trafic organique avec des stratégies SEO éprouvées",
    "services.digital-marketing.features.content.title": "Marketing de Contenu",
    "services.digital-marketing.features.content.description": "Contenu engageant qui construit l'autorité de la marque et attire votre audience cible",
    "services.digital-marketing.features.ppc.title": "Publicité PPC",
    "services.digital-marketing.features.ppc.description": "Campagnes payantes ciblées sur Google, Facebook et autres plateformes pour des résultats immédiats",
    "services.digital-marketing.features.targeting.title": "Ciblage d'Audience",
    "services.digital-marketing.features.targeting.description": "Segmentation précise de l'audience pour atteindre les bons clients au bon moment",
    "services.digital-marketing.features.social.title": "Marketing des Réseaux Sociaux",
    "services.digital-marketing.features.social.description": "Construisez l'engagement communautaire et la fidélité à la marque sur les plateformes de médias sociaux",
    "services.digital-marketing.features.email.title": "Marketing par Email",
    "services.digital-marketing.features.email.description": "Campagnes d'email automatisées qui entretiennent les prospects et génèrent des conversions",
    "services.digital-marketing.technologies.badge": "Outils Marketing",
    "services.digital-marketing.technologies.title": "Technologies Que Nous Utilisons",
    "services.digital-marketing.technologies.subtitle": "Outils marketing professionnels et plateformes d'analyses",
    "services.digital-marketing.technologies.cta": "Explorez notre pile marketing",
    "services.digital-marketing.process.badge": "Notre Processus",
    "services.digital-marketing.process.title": "Notre Processus",
    "services.digital-marketing.process.subtitle": "Une approche systématique pour délivrer des résultats marketing mesurables",
    "services.digital-marketing.process.cta": "Découvrez comment nous générons des résultats",
    "services.digital-marketing.process.research.title": "Recherche de Marché",
    "services.digital-marketing.process.research.description": "Nous analysons votre secteur, vos concurrents et votre audience cible pour créer une stratégie gagnante.",
    "services.digital-marketing.process.strategy.title": "Développement de Stratégie",
    "services.digital-marketing.process.strategy.description": "Nous développons des plans marketing complets adaptés à vos objectifs commerciaux et à votre budget.",
    "services.digital-marketing.process.implementation.title": "Implémentation de Campagnes",
    "services.digital-marketing.process.implementation.description": "Nous lançons et gérons vos campagnes sur plusieurs canaux pour une portée maximale.",
    "services.digital-marketing.process.monitoring.title": "Surveillance des Performances",
    "services.digital-marketing.process.monitoring.description": "Suivi en temps réel des métriques clés pour mesurer le succès et identifier les opportunités.",
    "services.digital-marketing.process.optimization.title": "Optimisation Continue",
    "services.digital-marketing.process.optimization.description": "Nous affinons et optimisons les campagnes basées sur les données pour améliorer les résultats au fil du temps.",
    "services.digital-marketing.faq.badge": "Questions Fréquentes",
    "services.digital-marketing.faq.title": "Questions Fréquemment Posées",
    "services.digital-marketing.faq.subtitle": "Questions courantes sur nos services de marketing digital",
    "services.digital-marketing.faq.cta": "Vous avez encore des questions ?",
    "services.digital-marketing.faq.roi.question": "Comment mesurez-vous le ROI ?",
    "services.digital-marketing.faq.roi.answer": "Nous suivons les indicateurs de performance clés incluant le trafic du site web, les taux de conversion, la génération de prospects et l'attribution des revenus pour démontrer un ROI clair pour votre investissement marketing.",
    "services.digital-marketing.faq.timeline.question": "Combien de temps avant de voir des résultats ?",
    "services.digital-marketing.faq.timeline.answer": "Les résultats SEO apparaissent généralement dans les 3-6 mois, tandis que les campagnes PPC peuvent montrer des résultats immédiats. Nous fournissons des rapports réguliers pour suivre les progrès et ajuster les stratégies si nécessaire.",
    "services.digital-marketing.faq.reporting.question": "Comment rapportez-vous les performances des campagnes ?",
    "services.digital-marketing.faq.reporting.answer": "Nous fournissons des rapports mensuels détaillés avec des métriques clés, des insights et des recommandations. Vous aurez accès à des tableaux de bord en temps réel pour surveiller les performances à tout moment.",
    "services.digital-marketing.faq.budget.question": "Quel est le budget minimum requis ?",
    "services.digital-marketing.faq.budget.answer": "Nous travaillons avec des entreprises de toutes tailles. Les budgets minimums commencent à 1 000 €/mois pour les campagnes de base, mais nous recommandons 2 500 €+/mois pour des stratégies complètes.",
    "services.digital-marketing.faq.channels.question": "Quels canaux marketing utilisez-vous ?",
    "services.digital-marketing.faq.channels.answer": "Nous utilisons le SEO, PPC, les médias sociaux, l'email marketing, le content marketing et d'autres canaux basés sur votre audience cible et vos objectifs commerciaux pour une efficacité maximale.",
    "services.digital-marketing.cta.title": "Prêt à Développer Votre Entreprise ?",
    "services.digital-marketing.cta.subtitle": "Créons une stratégie de marketing digital qui génère de vrais résultats pour votre entreprise.",
    "services.digital-marketing.cta.button.primary": "Obtenir une Consultation Gratuite",
    "services.digital-marketing.cta.button.secondary": "Voir Nos Résultats",

    // Social Media Service Page - French
    "services.social-media.hero.badge": "Construction Communautaire",
    "services.social-media.hero.title": "Services de Gestion des Réseaux Sociaux",
    "services.social-media.hero.subtitle": "Construisez et engagez votre communauté avec une gestion stratégique des réseaux sociaux",
    "services.social-media.hero.button.primary": "Commencer",
    "services.social-media.hero.button.secondary": "Voir les Exemples",
    "services.social-media.hero.cta": "Commencez à construire votre communauté aujourd'hui",
    "services.social-media.hero.stats.reach": "Personnes Atteintes",
    "services.social-media.hero.stats.engagement": "Taux d'Engagement",
    "services.social-media.hero.stats.monitoring": "Surveillance",
    "services.social-media.features.badge": "Services de Gestion",
    "services.social-media.features.title": "Services de Gestion",
    "services.social-media.features.subtitle": "Solutions complètes de gestion des réseaux sociaux pour votre entreprise",
    "services.social-media.features.cta": "Prêt à développer votre présence sociale ?",
    "services.social-media.features.community.title": "Construction Communautaire",
    "services.social-media.features.community.description": "Développez votre audience et construisez des relations significatives avec vos abonnés",
    "services.social-media.features.content.title": "Création de Contenu",
    "services.social-media.features.content.description": "Création de contenu professionnel qui résonne avec votre audience cible",
    "services.social-media.features.scheduling.title": "Planification des Publications",
    "services.social-media.features.scheduling.description": "Horaires de publication stratégiques optimisés pour un engagement et une portée maximum",
    "services.social-media.features.engagement.title": "Engagement Communautaire",
    "services.social-media.features.engagement.description": "Gestion communautaire active avec des réponses rapides et des interactions significatives",
    "services.social-media.features.analytics.title": "Analytiques de Performance",
    "services.social-media.features.analytics.description": "Insights et rapports détaillés pour suivre la croissance et mesurer le succès",
    "services.social-media.features.strategy.title": "Planification Stratégique",
    "services.social-media.features.strategy.description": "Stratégies basées sur les données adaptées à votre marque et à vos objectifs commerciaux",
    "services.social-media.technologies.badge": "Plateformes Sociales",
    "services.social-media.technologies.title": "Plateformes Que Nous Gérons",
    "services.social-media.technologies.subtitle": "Plateformes de réseaux sociaux professionnelles et outils de gestion",
    "services.social-media.technologies.cta": "Explorez nos outils de réseaux sociaux",
    "services.social-media.process.badge": "Notre Processus",
    "services.social-media.process.title": "Notre Processus",
    "services.social-media.process.subtitle": "Une approche systématique pour construire et développer votre présence sur les réseaux sociaux",
    "services.social-media.process.cta": "Découvrez comment nous gérons les réseaux sociaux",
    "services.social-media.process.audit.title": "Audit des Réseaux Sociaux",
    "services.social-media.process.audit.description": "Nous analysons votre présence actuelle sur les réseaux sociaux et identifions les opportunités de croissance.",
    "services.social-media.process.strategy.title": "Développement de Stratégie",
    "services.social-media.process.strategy.description": "Nous créons des stratégies complètes de réseaux sociaux alignées avec vos objectifs commerciaux.",
    "services.social-media.process.content.title": "Création de Contenu et Planification",
    "services.social-media.process.content.description": "Nous développons du contenu engageant et établissons des horaires de publication optimaux pour votre audience.",
    "services.social-media.process.management.title": "Gestion Communautaire",
    "services.social-media.process.management.description": "Nous gérons activement votre communauté, répondons aux commentaires et construisons des relations.",
    "services.social-media.process.optimization.title": "Surveillance et Optimisation",
    "services.social-media.process.optimization.description": "Nous suivons les métriques de performance et optimisons continuellement les stratégies pour de meilleurs résultats.",
    "services.social-media.faq.badge": "Questions Fréquentes",
    "services.social-media.faq.title": "Questions Fréquemment Posées",
    "services.social-media.faq.subtitle": "Questions courantes sur nos services de gestion des réseaux sociaux",
    "services.social-media.faq.cta": "Vous avez encore des questions ?",
    "services.social-media.faq.platforms.question": "Quelles plateformes de réseaux sociaux gérez-vous ?",
    "services.social-media.faq.platforms.answer": "Nous gérons toutes les principales plateformes incluant Facebook, Instagram, Twitter, LinkedIn, TikTok, YouTube et Pinterest, en choisissant les meilleures pour votre entreprise.",
    "services.social-media.faq.content.question": "Créez-vous du contenu original ?",
    "services.social-media.faq.content.answer": "Oui, nous créons du contenu original engageant incluant des publications, des stories, des reels et des graphiques qui s'alignent avec la voix de votre marque et résonnent avec votre audience.",
    "services.social-media.faq.engagement.question": "Comment gérez-vous l'engagement communautaire ?",
    "services.social-media.faq.engagement.answer": "Nous surveillons activement vos chaînes de réseaux sociaux, répondons aux commentaires et messages, et engageons votre communauté pour construire des relations et la fidélité.",
    "services.social-media.faq.reporting.question": "Comment rapportez-vous les performances des réseaux sociaux ?",
    "services.social-media.faq.reporting.answer": "Nous fournissons des rapports mensuels avec des métriques clés comme la croissance des abonnés, les taux d'engagement, la portée et les conversions, avec des insights et des recommandations.",
    "services.social-media.faq.crisis.question": "Comment gérez-vous les crises sur les réseaux sociaux ?",
    "services.social-media.faq.crisis.answer": "Nous avons des protocoles de gestion de crise en place et fournissons une surveillance 24/7. Nous répondons rapidement aux situations négatives et protégeons la réputation de votre marque.",
    "services.social-media.cta.title": "Prêt à Construire Votre Présence sur les Réseaux Sociaux ?",
    "services.social-media.cta.subtitle": "Créons une stratégie de réseaux sociaux qui vous connecte avec votre audience et développe votre entreprise.",
    "services.social-media.cta.button.primary": "Obtenir une Consultation Gratuite",
    "services.social-media.cta.button.secondary": "Voir Nos Réalisations",

    // Design Service Page - French
    "services.design.hero.badge": "Excellence Créative",
    "services.design.hero.title": "Services de Design UI/UX",
    "services.design.hero.subtitle": "Créez de belles interfaces intuitives que les utilisateurs aiment et qui génèrent des résultats commerciaux",
    "services.design.hero.button.primary": "Commencer",
    "services.design.hero.button.secondary": "Voir le Portfolio",
    "services.design.hero.cta": "Commencez à concevoir des expériences extraordinaires",
    "services.design.hero.stats.designs": "Designs Créés",
    "services.design.hero.stats.satisfaction": "Satisfaction Client",
    "services.design.hero.stats.expertise": "Expertise UI/UX",
    "services.design.features.badge": "Services de Design",
    "services.design.features.title": "Services de Design",
    "services.design.features.subtitle": "Solutions de design complètes qui donnent vie à votre vision",
    "services.design.features.cta": "Prêt à concevoir quelque chose d'extraordinaire ?",
    "services.design.features.research.title": "Recherche Utilisateur",
    "services.design.features.research.description": "Compréhension approfondie des besoins, comportements et points de douleur des utilisateurs grâce à une recherche complète",
    "services.design.features.concept.title": "Développement de Concept",
    "services.design.features.concept.description": "Idéation créative et création de concepts qui s'alignent avec votre marque et les objectifs des utilisateurs",
    "services.design.features.wireframing.title": "Wireframing",
    "services.design.features.wireframing.description": "Wireframes basse fidélité qui établissent la structure et l'architecture de l'information",
    "services.design.features.prototyping.title": "Prototypage",
    "services.design.features.prototyping.description": "Prototypes interactifs qui donnent vie aux designs et permettent les tests utilisateurs",
    "services.design.features.responsive.title": "Design Réactif",
    "services.design.features.responsive.description": "Expériences fluides sur tous les appareils et tailles d'écran",
    "services.design.features.usability.title": "Tests d'Utilisabilité",
    "services.design.features.usability.description": "Tests utilisateurs et validation pour garantir des interfaces intuitives et efficaces",
    "services.design.technologies.badge": "Outils de Design",
    "services.design.technologies.title": "Technologies Que Nous Utilisons",
    "services.design.technologies.subtitle": "Outils de design professionnels et plateformes de prototypage",
    "services.design.technologies.cta": "Explorez notre boîte à outils de design",
    "services.design.process.badge": "Notre Processus",
    "services.design.process.title": "Notre Processus",
    "services.design.process.subtitle": "Une approche collaborative pour créer des expériences utilisateur exceptionnelles",
    "services.design.process.cta": "Découvrez comment nous concevons",
    "services.design.process.research.title": "Recherche et Découverte",
    "services.design.process.research.description": "Nous commençons par comprendre vos utilisateurs, objectifs commerciaux et exigences du projet.",
    "services.design.process.wireframing.title": "Wireframing et Architecture",
    "services.design.process.wireframing.description": "Nous créons des wireframes basse fidélité pour établir la structure et les flux utilisateurs.",
    "services.design.process.design.title": "Design Visuel",
    "services.design.process.design.description": "Nous développons des designs haute fidélité avec attention à la typographie, couleur et hiérarchie visuelle.",
    "services.design.process.prototyping.title": "Prototypage et Tests",
    "services.design.process.prototyping.description": "Nous construisons des prototypes interactifs et menons des tests utilisateurs pour valider les designs.",
    "services.design.process.testing.title": "Implémentation et Remise",
    "services.design.process.testing.description": "Nous préparons les systèmes de design et actifs pour une remise fluide aux développeurs.",
    "services.design.faq.badge": "Questions Fréquentes",
    "services.design.faq.title": "Questions Fréquemment Posées",
    "services.design.faq.subtitle": "Questions courantes sur nos services de design",
    "services.design.faq.cta": "Vous avez encore des questions ?",
    "services.design.faq.process.question": "Quel est votre processus de design ?",
    "services.design.faq.process.answer": "Notre processus inclut la recherche, le wireframing, le design visuel, le prototypage et les tests utilisateurs. Nous travaillons collaborativement avec vous à chaque phase pour garantir que le design final répond à vos besoins.",
    "services.design.faq.timeline.question": "Combien de temps prend un projet de design ?",
    "services.design.faq.timeline.answer": "Les délais de design varient selon la portée et la complexité du projet. Un projet de design de site web typique prend 4 à 8 semaines, tandis que les applications plus grandes peuvent prendre 8 à 12 semaines. Nous fournissons des délais détaillés pendant la planification du projet.",
    "services.design.faq.collaboration.question": "Comment collaborez-vous avec les clients ?",
    "services.design.faq.collaboration.answer": "Nous utilisons des outils collaboratifs comme Figma, des appels vidéo réguliers et des tableaux de projets partagés. Vous aurez accès aux mises à jour de design en temps réel et pourrez fournir des commentaires tout au long du processus.",
    "services.design.faq.revisions.question": "Combien de révisions sont incluses ?",
    "services.design.faq.revisions.answer": "Nous incluons 3 tours de révisions pour chaque phase de design. Des révisions supplémentaires peuvent être accommodées selon la portée du projet et les exigences de délai.",
    "services.design.faq.development.question": "Travaillez-vous avec les développeurs ?",
    "services.design.faq.development.answer": "Oui, nous créons des systèmes de design prêts pour les développeurs avec des spécifications détaillées, actifs et documentation pour assurer une remise et implémentation fluide.",
    "services.design.cta.title": "Prêt à Concevoir Quelque Chose d'Extraordinaire ?",
    "services.design.cta.subtitle": "Créons des expériences utilisateur qui ravissent vos clients et stimulent la croissance de votre entreprise.",
    "services.design.cta.button.primary": "Obtenir une Consultation Gratuite",
    "services.design.cta.button.secondary": "Voir Nos Designs",

    "services.page.title": "Nos Services",
    "services.page.subtitle":
      "Solutions numériques complètes conçues pour aider votre entreprise à prospérer à l'ère numérique",
    "services.hero.badge": "Services Numériques Premium",
    "services.hero.title.line1": "Élevez Votre Présence",
    "services.hero.title.line2": "Numérique",
    "services.hero.subtitle": "Solutions numériques complètes conçues pour aider votre entreprise à prospérer dans le paysage numérique moderne avec une technologie de pointe et l'excellence créative",
    "services.hero.button.explore": "Explorer les Services",
    "services.hero.button.consultation": "Planifier une Consultation",
    "services.hero.cta": "Commençons votre projet",
    "services.services.badge": "Solutions Complètes",
    "services.whychooseus.badge": "Partenaire de Confiance",
    "services.whychooseus.title": "Pourquoi Choisir Oren",
    "services.whychooseus.description": "Nous combinons expertise technique et innovation créative pour livrer des résultats exceptionnels qui stimulent une croissance mesurable de votre entreprise",
    "services.whychooseus.cta": "Commençons aujourd'hui",
    "services.whychooseus.expert.title": "Équipe d'Experts",
    "services.whychooseus.expert.description": "Professionnels qualifiés avec des années d'expérience en développement web et solutions numériques",
    "services.whychooseus.custom.title": "Solutions Personnalisées",
    "services.whychooseus.custom.description": "Approches sur mesure conçues spécifiquement pour les besoins et objectifs de votre entreprise",
    "services.whychooseus.results.title": "Résultats Prouvés",
    "services.whychooseus.results.description": "Historique de projets réussis et de clients satisfaits dans diverses industries",
    "services.whychooseus.support.title": "Support Continu",
    "services.whychooseus.support.description": "Maintenance continue et support pour assurer que votre présence numérique reste optimale",
    "services.cta.title": "Prêt à commencer?",
    "services.cta.description":
      "Discutons de votre projet et trouvons la solution parfaite pour les besoins de votre entreprise.",
    "services.viewAllServices": "Voir Tous les Services",

    // Web Development Service Page - French
    "services.web-dev.hero.badge": "Développement Professionnel",
    "services.web-dev.hero.title": "Services de Développement Web Professionnel",
    "services.web-dev.hero.subtitle": "Construisez des sites web rapides, sécurisés et évolutifs qui offrent des expériences utilisateur exceptionnelles et stimulent la croissance de votre entreprise",
    "services.web-dev.hero.button.primary": "Commencer",
    "services.web-dev.hero.button.secondary": "Voir les Exemples",
    "services.web-dev.hero.cta": "Commencez votre projet de développement web aujourd'hui",
    "services.web-dev.hero.stats.projects": "Projets Réalisés",
    "services.web-dev.hero.stats.uptime": "Garantie de Disponibilité",
    "services.web-dev.hero.stats.support": "Support Disponible",
    "services.web-dev.features.badge": "Ce Que Vous Obtenez",
    "services.web-dev.features.title": "Ce Que Vous Obtenez",
    "services.web-dev.features.subtitle": "Solutions de développement web complètes adaptées à vos besoins",
    "services.web-dev.features.cta": "Prêt à commencer la construction ?",
    "services.web-dev.features.clean.title": "Code Propre",
    "services.web-dev.features.clean.description": "Code bien structuré et maintenable suivant les meilleures pratiques et normes de l'industrie",
    "services.web-dev.features.responsive.title": "Design Réactif",
    "services.web-dev.features.responsive.description": "Sites web qui s'affichent et fonctionnent parfaitement sur tous les appareils, du mobile au bureau",
    "services.web-dev.features.performance.title": "Performance Rapide",
    "services.web-dev.features.performance.description": "Optimisé pour la vitesse avec des temps de chargement fulgurants et des interactions fluides",
    "services.web-dev.features.security.title": "Sécurité d'Abord",
    "services.web-dev.features.security.description": "Construit avec la sécurité en tête, protégeant vos données et vos utilisateurs",
    "services.web-dev.features.seo.title": "Optimisé SEO",
    "services.web-dev.features.seo.description": "Structure conviviale pour les moteurs de recherche pour aider votre site à se classer plus haut dans les résultats",
    "services.web-dev.features.browser.title": "Multi-Navigateurs",
    "services.web-dev.features.browser.description": "Compatible avec tous les principaux navigateurs pour une portée et une accessibilité maximales",
    "services.web-dev.technologies.badge": "Pile Moderne",
    "services.web-dev.technologies.title": "Technologies Que Nous Utilisons",
    "services.web-dev.technologies.subtitle": "Outils et frameworks modernes pour des solutions de pointe",
    "services.web-dev.technologies.cta": "Explorez notre pile technologique",
    "services.web-dev.process.badge": "Notre Approche",
    "services.web-dev.process.title": "Notre Processus",
    "services.web-dev.process.subtitle": "Une approche structurée pour livrer votre projet à temps et dans les limites du budget",
    "services.web-dev.process.cta": "Découvrez comment nous travaillons",
    "services.web-dev.process.discovery.title": "Découverte et Planification",
    "services.web-dev.process.discovery.description": "Nous commençons par comprendre vos objectifs commerciaux, votre audience cible et les exigences du projet pour créer une feuille de route détaillée.",
    "services.web-dev.process.design.title": "Conception et Prototypage",
    "services.web-dev.process.design.description": "Nos concepteurs créent des wireframes et des maquettes pour visualiser le produit final avant le début du développement.",
    "services.web-dev.process.development.title": "Développement",
    "services.web-dev.process.development.description": "Nous construisons votre site web en utilisant des technologies modernes, en suivant les meilleures pratiques et en maintenant une communication claire.",
    "services.web-dev.process.testing.title": "Tests et Assurance Qualité",
    "services.web-dev.process.testing.description": "Tests rigoureux sur différents appareils et navigateurs pour s'assurer que tout fonctionne parfaitement avant le lancement.",
    "services.web-dev.process.launch.title": "Lancement et Support",
    "services.web-dev.process.launch.description": "Nous déployons votre site web et fournissons un support continu pour le maintenir fonctionnant correctement et à jour.",
    "services.web-dev.faq.badge": "Questions Fréquentes",
    "services.web-dev.faq.title": "Questions Fréquemment Posées",
    "services.web-dev.faq.subtitle": "Questions courantes sur nos services de développement web",
    "services.web-dev.faq.cta": "Vous avez encore des questions ?",
    "services.web-dev.faq.timeline.question": "Combien de temps faut-il pour construire un site web ?",
    "services.web-dev.faq.timeline.answer": "Le calendrier varie selon la portée et la complexité du projet. Un site web simple prend généralement 4 à 6 semaines, tandis que les applications plus complexes peuvent prendre 3 à 6 mois. Nous fournirons un calendrier détaillé pendant la phase de planification.",
    "services.web-dev.faq.cost.question": "Quel est le coût du développement web ?",
    "services.web-dev.faq.cost.answer": "Les coûts varient selon les exigences du projet, les fonctionnalités et la complexité. Nous proposons des modèles de tarification flexibles et fournirons un devis détaillé après avoir compris vos besoins spécifiques. Contactez-nous pour une consultation gratuite.",
    "services.web-dev.faq.maintenance.question": "Proposez-vous une maintenance continue ?",
    "services.web-dev.faq.maintenance.answer": "Oui, nous proposons des packages de maintenance et de support complets pour maintenir votre site web sécurisé, à jour et fonctionnant correctement. Cela inclut les mises à jour régulières, les correctifs de sécurité et le support technique.",
    "services.web-dev.faq.mobile.question": "Mon site web sera-t-il adapté aux mobiles ?",
    "services.web-dev.faq.mobile.answer": "Tous nos sites web sont construits avec une approche mobile-first, garantissant qu'ils s'affichent et fonctionnent parfaitement sur tous les appareils, des smartphones aux tablettes en passant par les ordinateurs de bureau.",
    "services.web-dev.faq.seo.question": "Pouvez-vous aider avec le SEO ?",
    "services.web-dev.faq.seo.answer": "Oui, nous construisons tous les sites web avec les meilleures pratiques SEO en tête, y compris une structure appropriée, des balises méta et une optimisation des performances. Nous proposons également des services SEO dédiés pour l'optimisation continue et l'amélioration du classement.",
    "services.web-dev.cta.title": "Prêt à Construire Votre Site Web ?",
    "services.web-dev.cta.subtitle": "Discutons de votre projet et créons un site web qui aide votre entreprise à réussir en ligne.",
    "services.web-dev.cta.button.primary": "Obtenir un Devis Gratuit",
    "services.web-dev.cta.button.secondary": "Voir Nos Réalisations",

    // Process
    "process.title": "Comment Nous Travaillons",
    "process.subtitle": "Notre processus éprouvé garantit une livraison réussie du concept au lancement",
    "process.discover": "Découvrir",
    "process.design": "Concevoir",
    "process.develop": "Développer",
    "process.launch": "Lancer",
    "process.support": "Soutenir",
    "process.discover.desc": "Nous analysons les besoins de votre entreprise, votre audience cible et les objectifs du projet pour créer une feuille de route stratégique.",
    "process.design.desc": "Nos concepteurs créent des interfaces belles et centrées sur l'utilisateur qui s'alignent avec l'identité de votre marque.",
    "process.develop.desc": "Nous construisons des solutions robustes et évolutives en utilisant des technologies de pointe et les meilleures pratiques.",
    "process.launch.desc": "Nous déployons votre projet avec des tests approfondis et assurons un lancement fluide et réussi.",
    "process.support.desc": "Maintenance continue, mises à jour et support pour maintenir votre présence numérique fonctionnant sans heurts.",
    "process.badge": "Notre Processus",
    "process.cta": "Commençons",

    // Portfolio
    "portfolio.title": "Notre Portfolio",
    "portfolio.badge": "Travaux en Vedette",
    "portfolio.subtitle": "Présentation de nos meilleurs travaux et projets réussis qui génèrent des résultats",
    "portfolio.view-all": "Voir Tous les Projets",
    "portfolio.explore": "Explorer les Projets",
    "portfolio.discuss": "Discuter du Projet",
    "portfolio.stats.projects": "Projets Réalisés",
    "portfolio.stats.satisfaction": "Satisfaction Client",
    "portfolio.stats.support": "Support Disponible",
    "portfolio.filter.badge": "Catégories de Projets",
    "portfolio.filter.title": "Parcourir Nos Travaux",
    "portfolio.filter.subtitle": "Filtrez notre portefeuille diversifié de projets réussis dans différents secteurs",
    "portfolio.viewDetails": "Voir les Détails",
    "portfolio.liveDemo": "Démo en Direct",
    "portfolio.noProjects": "Aucun projet trouvé dans cette catégorie.",
    "portfolio.filter.all": "Tous les projets",
    "portfolio.filter.webdev": "Développement Web",
    "portfolio.filter.ecommerce": "E-commerce",
    "portfolio.filter.saas": "SaaS",
    "portfolio.notfound.title": "Projet introuvable",
    "portfolio.notfound.description": "Le projet que vous recherchez n'existe pas ou a été supprimé.",
    "portfolio.notfound.button": "Voir tous les projets",
    "portfolio.cta.title": "Prêt à Commencer Votre Projet?",
    "portfolio.cta.subtitle":
      "Créons quelque chose d'incroyable ensemble. Contactez-nous pour discuter de vos exigences de projet et donner vie à votre vision.",
    "portfolio.cta.button.primary": "Commencer",
    "portfolio.cta.button.secondary": "Voir les Services",

    // Project Details
    "project.backToPortfolio": "Retour au Portfolio",
    "project.overview": "Aperçu du Projet",
    "project.keyFeatures": "Fonctionnalités Clés",
    "project.userExperience": "Expérience Utilisateur",
    "project.performance": "Performance",
    "project.reliability": "Fiabilité",
    "project.scalability": "Évolutivité",
    "project.technologiesUsed": "Technologies Utilisées",
    "project.quickActions": "Actions Rapides",
    "project.shareProject": "Partager le Projet",
    "project.viewLiveDemo": "Voir la Démo en Direct",
    "project.sourceCode": "Code Source",
    "project.projectDetails": "Détails du Projet",
    "project.techStack": "Pile Technologique",
    "project.technologies": "technologies",
    "project.client": "Client",
    "project.duration": "Durée",
    "project.duration.3months": "3 mois",
    "project.duration.4months": "4 mois",
    "project.duration.5months": "5 mois",
    "project.duration.6months": "6 mois",
    "project.duration.7months": "7 mois",
    "project.projectRating": "Évaluation du Projet",
    "project.functionality": "Fonctionnalité",
    "project.design": "Design",
    "project.live": "En Direct",
    "project.more": "plus",
    "project.rating": "4.8",
    "project.reviews": "127 avis",
    "project.userExperienceDesc": "Design intuitif avec navigation fluide et mise en page réactive sur tous les appareils",
    "project.performanceDesc": "Optimisé pour la vitesse avec des requêtes de base de données efficaces et des stratégies de mise en cache",
    "project.reliabilityDesc": "Architecture robuste avec 99,9% de disponibilité et gestion complète des erreurs",
    "project.scalabilityDesc": "Construit pour croître avec votre entreprise, gérant l'augmentation du trafic et des données de manière transparente",
    "project.testimonialQuote": "Oren a transformé notre entreprise en ligne. La nouvelle plateforme est rapide, belle, et nos ventes ont plus que doublé depuis le lancement.",
    "project.testimonialAuthor": "Sarah Johnson",
    "project.testimonialRole": "PDG, Détaillant de Mode",

    // Testimonials
    "testimonials.title": "Ce Que Disent Nos Clients",
    "testimonials.subtitle": "Ne nous croyez pas sur parole - écoutez les entreprises que nous avons aidées à réussir",

    // CTA
    "cta.title": "Prêt à Démarrer Votre Projet?",
    "cta.subtitle":
      "Discutons de la façon dont nous pouvons vous aider à transformer votre présence numérique et à atteindre vos objectifs commerciaux ensemble.",
    "cta.button": "Commencer",

    // Footer
    "footer.description": "Développement web professionnel et solutions numériques qui stimulent la croissance des startups et des entreprises.",
    "footer.stayUpdated": "Restez informé",
    "footer.emailPlaceholder": "Entrez votre email",
    "footer.subscribe": "S'abonner",
    "footer.newsletter": "Restez informé",
    "footer.newsletter.placeholder": "Entrez votre email",
    "footer.newsletter.button": "S'abonner",
    "footer.company": "Entreprise",
    "footer.legal": "Légal",
    "footer.rights": "Tous droits réservés.",
    "footer.services.web-dev": "Développement Web",
    "footer.services.custom-platforms": "Plateformes Personnalisées",
    "footer.services.ecommerce": "E-commerce",
    "footer.services.digital-marketing": "Marketing Digital",
    "footer.legal.privacy": "Politique de Confidentialité",
    "footer.legal.terms": "Conditions de Service",
    "footer.legal.accessibility": "Accessibilité",
    "footer.social.github": "GitHub",
    "footer.social.linkedin": "LinkedIn",
    "footer.social.twitter": "Twitter",
    "footer.social.email": "Email",

    // Contact Form
    "contact.title": "Contactez-nous",
    "contact.subtitle":
      "Vous avez un projet en tête? Discutons de la façon dont nous pouvons donner vie à votre vision.",
    "contact.form.title": "Envoyez-nous un Message",
    "contact.form.subtitle": "Remplissez le formulaire ci-dessous et nous vous répondrons sous 24 heures.",
    "contact.form.name": "Nom Complet",
    "contact.form.namePlaceholder": "Jean Dupont",
    "contact.form.company": "Entreprise",
    "contact.form.companyPlaceholder": "Votre Entreprise",
    "contact.form.email": "Adresse Email",
    "contact.form.emailPlaceholder": "jean@entreprise.com",
    "contact.form.phone": "Numéro de Téléphone",
    "contact.form.phonePlaceholder": "+33 6 12 34 56 78",
    "contact.form.service": "Service Nécessaire",
    "contact.form.servicePlaceholder": "Sélectionnez un service",
    "contact.form.budget": "Budget du Projet",
    "contact.form.budgetPlaceholder": "Sélectionnez une fourchette budgétaire",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Parlez-nous de votre projet, vos objectifs et votre calendrier...",
    "contact.form.submit": "Envoyer le Message",
    "contact.form.sending": "Envoi du Message...",
    "contact.form.sent": "Message Envoyé !",
    "contact.form.send": "Envoyer le Message",
    "contact.form.success": "Merci ! Nous vous répondrons sous 24 heures.",
    "contact.hero.badge": "Commençons une conversation",
    "contact.hero.title": "Nous Contacter",
    "contact.hero.title.highlight": "avec nous",
    "contact.hero.subtitle": "Prêt à donner vie à votre vision ? Discutons de votre projet et explorons comment nous pouvons vous aider à atteindre vos objectifs.",
    "contact.hero.cta.email": "Envoyer un Email",
    "contact.hero.cta.call": "Appeler Maintenant",
    "contact.info.title": "Nous Contacter",
    "contact.info.subtitle": "Prêt à commencer votre prochain projet ? Nous serions ravis d'avoir de vos nouvelles.",
    "contact.info.emailLabel": "Email",
    "contact.info.phoneLabel": "Téléphone",
    "contact.info.officeLabel": "Bureau",
    "contact.hours.title": "Heures d'Ouverture",
    "contact.hours.mondayFriday": "Lundi - Vendredi",
    "contact.hours.saturday": "Samedi",
    "contact.hours.sunday": "Dimanche",
    "contact.hours.mondayFridayTime": "9h00 - 18h00",
    "contact.hours.saturdayTime": "10h00 - 16h00",
    "contact.hours.sundayTime": "Fermé",
    "contact.form.services.webdev": "Développement Web",
    "contact.form.services.platforms": "Plateformes Personnalisées",
    "contact.form.services.ecommerce": "E-commerce",
    "contact.form.services.marketing": "Marketing Numérique",
    "contact.form.services.social": "Réseaux Sociaux",
    "contact.form.services.design": "Design",
    "contact.form.services.other": "Autre",
    "contact.form.budgets.5k10k": "5 000 € - 10 000 €",
    "contact.form.budgets.10k25k": "10 000 € - 25 000 €",
    "contact.form.budgets.25k50k": "25 000 € - 50 000 €",
    "contact.form.budgets.50k": "50 000 €+",
    "contact.form.budgets.unsure": "Pas encore sûr",
    "contact.form.sending": "Envoi du Message...",
    "contact.form.sent": "Message Envoyé !",
    "contact.form.send": "Envoyer le Message",
    "contact.form.success": "Merci ! Nous vous répondrons sous 24 heures.",

    // Blog
    "blog.title": "Dernières Perspectives",
    "blog.subtitle": "Explorez nos réflexions sur le développement web, le design et l'innovation numérique",
    "blog.hero.title": "Blog et Perspectives",
    "blog.hero.titleHighlight": "Perspectives",
    "blog.hero.badge": "Dernières Mises à Jour",
    "blog.hero.subtitle": "Perspectives d'experts, tutoriels et tendances de l'industrie pour vous aider à rester à l'avant-garde du monde numérique",
    "blog.hero.cta.primary": "Explorer les Articles",
    "blog.hero.cta.contact": "Nous Contacter",
    "blog.searchPlaceholder": "Rechercher des articles...",
    "blog.categories": "Catégories",
    "blog.category.all": "Tous les articles",
    "blog.category.webdev": "Développement Web",
    "blog.category.design": "Design",
    "blog.category.marketing": "Marketing",
    "blog.category.technology": "Technologie",
    "blog.minRead": "min de lecture",
    "blog.empty.title": "Aucun article trouvé correspondant à vos critères.",
    "blog.empty.search": "Aucun article trouvé pour",
    "blog.readTime": "min de lecture",
    "blog.backToBlog": "Retour au Blog",
    "blog.shareArticle": "Partager l'Article",
    "blog.relatedArticles": "Articles Connexes",
    "blog.newsletter.title": "Abonnez-vous à notre newsletter",
    "blog.newsletter.description":
      "Abonnez-vous à notre newsletter pour recevoir les dernières perspectives, tutoriels et actualités de l'industrie dans votre boîte de réception.",
    "blog.notfound.title": "Article introuvable",
    "blog.notfound.description": "L'article que vous recherchez n'existe pas ou a été supprimé.",
    "blog.notfound.button": "Voir tous les articles",

    // Blog Post: Modern Web Development Trends in 2025 (French)
    "blog.post.trends2025.title": "Tendances du Développement Web Moderne en 2025",
    "blog.post.trends2025.excerpt": "Explorez les dernières tendances qui façonnent le développement web, de l'intégration de l'IA aux applications web progressives et au-delà.",

    // Blog Post: Next.js Performance Optimization (French)
    "blog.post.nextjsPerformance.title": "Conseils d'Optimisation des Performances Next.js",
    "blog.post.nextjsPerformance.excerpt": "Apprenez les stratégies essentielles pour améliorer la vitesse de votre site web et l'engagement des utilisateurs avec ces techniques d'optimisation Next.js.",
    "blog.post.nextjsPerformance.content": `
      <div class="lead">
        <p>Next.js est déjà optimisé pour les performances dès la sortie de boîte, mais il existe de nombreuses techniques que vous pouvez utiliser pour rendre vos applications encore plus rapides. Ce guide couvre des stratégies d'optimisation pratiques qui peuvent améliorer considérablement les performances de votre application Next.js.</p>
      </div>

      <h2>Optimisation des Images</h2>
      <p>Le composant Image de Next.js optimise automatiquement les images, mais vous devez l'utiliser correctement. Spécifiez toujours la largeur et la hauteur pour éviter les décalages de mise en page, utilisez la propriété priority pour les images au-dessus de la ligne de flottaison, et choisissez le bon format (WebP pour les navigateurs modernes).</p>

      <p>Envisagez d'utiliser des espaces réservés flous pour de meilleures performances perçues. Le composant Image prend en charge à la fois les importations statiques et les URL dynamiques, avec une optimisation automatique pour les deux.</p>

      <h2>Découpage du Code et Imports Dynamiques</h2>
      <p>Next.js divise automatiquement le code au niveau de la page, mais vous pouvez optimiser davantage en important dynamiquement les composants lourds. Utilisez next/dynamic pour les composants qui ne sont pas nécessaires immédiatement ou qui ne sont utilisés que dans certaines conditions.</p>

      <p>Par exemple, importez dynamiquement les modales, graphiques ou éditeurs de texte enrichi qui ne sont pas visibles lors du chargement initial de la page. Cela réduit considérablement la taille du bundle JavaScript initial.</p>

      <h2>Composants Serveur et Streaming</h2>
      <p>Next.js 13+ introduit les Composants React Serveur, qui s'exécutent sur le serveur et envoient uniquement le HTML rendu au client. Cela réduit considérablement la taille du bundle JavaScript et améliore le chargement initial de la page.</p>

      <p>Utilisez le streaming avec des limites Suspense pour afficher le contenu progressivement au fur et à mesure de sa disponibilité. Cela améliore les performances perçues en montrant quelque chose rapidement aux utilisateurs plutôt que d'attendre que tout se charge.</p>

      <h2>Optimisation des Polices</h2>
      <p>Utilisez next/font pour optimiser et auto-héberger automatiquement les polices. Cela élimine les requêtes réseau externes et empêche les décalages de mise en page causés par le chargement des polices. Les fichiers de polices sont mis en cache efficacement et chargés avec des stratégies optimales.</p>

      <p>Préchargez les polices critiques et utilisez font-display: swap pour garantir que le texte reste visible pendant le chargement des polices. Envisagez d'utiliser les polices système pour le texte du corps pour éliminer complètement le chargement des polices.</p>

      <h2>Optimisation des Routes API</h2>
      <p>Mettez en œuvre des stratégies de mise en cache pour les routes API en utilisant les en-têtes Cache-Control. Utilisez ISR (Régénération Statique Incrémentielle) pour les pages qui doivent être mises à jour périodiquement mais qui n'exigent pas de données en temps réel.</p>

      <p>Envisagez d'utiliser des fonctions edge pour les routes API qui nécessitent une faible latence mondiale. Les fonctions edge s'exécutent plus près des utilisateurs, réduisant considérablement les temps de réponse.</p>

      <h2>Optimisation des Requêtes de Base de Données</h2>
      <p>Optimisez les requêtes de base de données en sélectionnant uniquement les champs nécessaires, en utilisant des index appropriés et en implémentant le pooling de connexions. Envisagez d'utiliser une couche de mise en cache comme Redis pour les données fréquemment consultées.</p>

      <p>Utilisez la récupération de données parallèles lorsque possible pour réduire les requêtes en cascade. Les Composants Serveur Next.js facilitent la récupération de données en parallèle au niveau du composant.</p>

      <h2>Analyse du Bundle</h2>
      <p>Analysez régulièrement la taille de votre bundle en utilisant @next/bundle-analyzer. Identifiez les dépendances volumineuses et envisagez des alternatives ou le chargement différé. Supprimez les dépendances inutilisées et secouez correctement les bibliothèques.</p>

      <p>Portez une attention particulière aux scripts tiers. Utilisez next/script avec la stratégie de chargement appropriée (afterInteractive, lazyOnload) pour éviter de bloquer le thread principal.</p>

      <h2>Surveillance et Métriques</h2>
      <p>Utilisez Vercel Analytics ou des outils similaires pour surveiller les métriques de performance du monde réel. Suivez les Core Web Vitals, Time to First Byte (TTFB) et autres métriques clés pour identifier les régressions de performance.</p>

      <p>Configurez des budgets de performance et des alertes automatisées pour détecter les problèmes de performance avant qu'ils n'atteignent la production.</p>

      <h2>Conclusion</h2>
      <p>L'optimisation des performances est un processus continu. Commencez par les plus gros gains - optimisation des images, découpage du code et mise en cache appropriée - puis améliorez progressivement. Mesurez toujours l'impact de vos optimisations avec des données du monde réel.</p>
    `,

    // Blog Post: SEO Strategies (French)
    "blog.post.seoStrategies.title": "Stratégies SEO Qui Fonctionnent Réellement en 2025",
    "blog.post.seoStrategies.excerpt": "Découvrez des techniques SEO éprouvées pour améliorer la visibilité de votre site web et générer du trafic organique.",
    "blog.post.seoStrategies.content": `
      <div class="lead">
        <p>L'optimisation pour les moteurs de recherche continue d'évoluer, les algorithmes de Google devenant de plus en plus sophistiqués. En 2025, le SEO réussi nécessite une approche holistique qui combine excellence technique, contenu de qualité et optimisation de l'expérience utilisateur.</p>
      </div>

      <h2>Core Web Vitals et Expérience de Page</h2>
      <p>Les Core Web Vitals de Google - Largest Contentful Paint (LCP), First Input Delay (FID) et Cumulative Layout Shift (CLS) - restent des facteurs de classement critiques. Ces métriques mesurent les performances de chargement, l'interactivité et la stabilité visuelle.</p>

      <p>Pour optimiser les Core Web Vitals, concentrez-vous sur l'optimisation des images, le chargement efficace du JavaScript, les stratégies de chargement de polices appropriées et l'élimination des décalages de mise en page. Des outils comme PageSpeed Insights et Lighthouse peuvent aider à identifier et corriger les problèmes.</p>

      <h2>Qualité du Contenu et E-E-A-T</h2>
      <p>Le cadre E-E-A-T de Google (Expérience, Expertise, Autorité et Fiabilité) est plus important que jamais. Créez du contenu qui démontre une réelle expertise et fournit une valeur authentique aux utilisateurs.</p>

      <p>Incluez des biographies d'auteurs avec des références, citez des sources faisant autorité, maintenez le contenu à jour et assurez l'exactitude factuelle. Pour les sujets YMYL (Your Money or Your Life) comme la santé et la finance, l'E-E-A-T est particulièrement critique.</p>

      <h2>Recherche Sémantique et Optimisation de l'Intention</h2>
      <p>Le SEO moderne va au-delà des mots-clés pour comprendre l'intention de l'utilisateur. Les algorithmes de Google comprennent maintenant le contexte, les synonymes et les concepts connexes grâce au traitement du langage naturel.</p>

      <p>Structurez votre contenu pour répondre à des questions spécifiques et résoudre les problèmes des utilisateurs. Utilisez le balisage de données structurées pour aider les moteurs de recherche à comprendre le contexte et la signification de votre contenu. Concentrez-vous sur les grappes de sujets plutôt que sur les mots-clés individuels.</p>

      <h2>Fondamentaux du SEO Technique</h2>
      <p>Assurez-vous que votre site a une structure d'URL propre, des sitemaps XML appropriés et une configuration robots.txt. Implémentez le balisage de données structurées pour les extraits enrichis. Corrigez les liens brisés, le contenu dupliqué et les erreurs d'exploration.</p>

      <p>L'indexation mobile-first signifie que votre site mobile est ce que Google utilise principalement pour le classement. Assurez-vous que votre expérience mobile est excellente, avec des temps de chargement rapides et une navigation facile.</p>

      <h2>Construction de Liens en 2025</h2>
      <p>La qualité plutôt que la quantité reste la règle d'or pour les backlinks. Concentrez-vous sur l'obtention de liens de sites faisant autorité et pertinents grâce à un excellent contenu, des relations publiques numériques et la construction de relations.</p>

      <p>La publication en tant qu'invité, la construction de liens brisés et la création d'actifs liables comme la recherche originale ou des guides complets sont des stratégies efficaces. Évitez les schémas de liens et les répertoires de faible qualité.</p>

      <h2>SEO Local</h2>
      <p>Pour les entreprises avec des emplacements physiques, le SEO local est crucial. Optimisez votre profil d'entreprise Google, assurez la cohérence NAP (Nom, Adresse, Téléphone) sur le web et encouragez les avis clients.</p>

      <p>Créez du contenu spécifique à l'emplacement et construisez des citations locales. La construction de liens locaux provenant d'organisations communautaires et de sites d'actualités locaux peut considérablement améliorer les classements locaux.</p>

      <h2>Mesure du Succès</h2>
      <p>Suivez le trafic organique, les classements de mots-clés, les taux de conversion et les métriques d'engagement. Utilisez Google Search Console pour surveiller les performances et identifier les opportunités. Configurez le suivi des objectifs dans Google Analytics pour mesurer l'impact du SEO sur les objectifs commerciaux.</p>

      <h2>Conclusion</h2>
      <p>Le SEO en 2025 nécessite une approche complète qui équilibre l'optimisation technique, la création de contenu de qualité et l'expérience utilisateur. Restez à jour avec les changements d'algorithme, concentrez-vous sur la fourniture de valeur aux utilisateurs et soyez patient - le SEO est un investissement à long terme qui rapporte des dividendes au fil du temps.</p>
    `,

    // Blog Post: Next.js Performance Optimization (French)
    "blog.post.nextjsPerformance.title": "Conseils d'Optimisation des Performances Next.js",
    "blog.post.nextjsPerformance.excerpt": "Apprenez les stratégies essentielles pour améliorer la vitesse de votre site web et l'engagement des utilisateurs avec ces techniques d'optimisation Next.js.",

    // Blog Post: AI in Web Development (French)
    "blog.post.aiInWebDev.title": "Comment l'IA Transforme le Développement Web",
    "blog.post.aiInWebDev.excerpt": "Découvrez comment l'intelligence artificielle révolutionne les processus de développement web, de la génération de code aux expériences utilisateur personnalisées.",
    "blog.post.aiInWebDev.content": `
      <div class="lead">
        <p>L'intelligence artificielle transforme fondamentalement notre approche du développement web. De la génération de code aux tests automatisés et aux expériences utilisateur intelligentes, l'IA rend les développeurs plus productifs tout en permettant des types d'applications entièrement nouveaux.</p>
      </div>

      <h2>Codage Assisté par IA</h2>
      <p>Des outils comme GitHub Copilot, ChatGPT et les assistants de codage spécialisés transforment le flux de travail de développement. Ces outils peuvent générer du code boilerplate, suggérer des complétions, expliquer du code complexe et même aider au débogage.</p>

      <p>La clé est d'apprendre à travailler efficacement avec les assistants IA. Ils sont mieux utilisés pour les tâches de routine, la génération de cas de test, la rédaction de documentation et l'exploration de différentes approches pour résoudre les problèmes. Les développeurs doivent encore comprendre le code, prendre des décisions architecturales et assurer la qualité.</p>

      <h2>Tests et Assurance Qualité Automatisés</h2>
      <p>Les outils de test alimentés par l'IA peuvent générer automatiquement des cas de test, identifier les cas limites et même prédire où les bogues sont susceptibles de se produire. Les outils de test de régression visuelle utilisent l'IA pour détecter les changements d'interface utilisateur involontaires.</p>

      <p>Les modèles de machine learning peuvent analyser les changements de code et prédire leur impact, aidant les équipes à prioriser les efforts de test. Cela conduit à une meilleure couverture de test et à des cycles de publication plus rapides.</p>

      <h2>Expériences Utilisateur Intelligentes</h2>
      <p>L'IA permet des expériences utilisateur personnalisées à grande échelle. Les moteurs de recommandation, les chatbots et les interfaces adaptatives peuvent adapter le contenu et les fonctionnalités aux utilisateurs individuels en fonction de leur comportement et de leurs préférences.</p>

      <p>Le traitement du langage naturel permet aux utilisateurs d'interagir avec les applications de manière conversationnelle. La vision par ordinateur permet des fonctionnalités comme la reconnaissance d'images, la numérisation de documents et les expériences de réalité augmentée directement dans le navigateur.</p>

      <h2>Revue de Code et Assurance Qualité</h2>
      <p>Les outils IA peuvent examiner le code pour détecter les bogues potentiels, les vulnérabilités de sécurité et les problèmes de performance. Ils peuvent suggérer des améliorations, identifier les odeurs de code et assurer le respect des normes de codage.</p>

      <p>Ces outils apprennent de millions de dépôts de code, identifiant des modèles que les réviseurs humains pourraient manquer. Ils complètent la revue de code humaine en détectant les problèmes de routine, permettant aux réviseurs de se concentrer sur l'architecture et la logique métier.</p>

      <h2>Optimisation des Performances</h2>
      <p>L'IA peut analyser les performances des applications et suggérer des optimisations. Elle peut identifier les requêtes de base de données lentes, les algorithmes inefficaces et les goulots d'étranglement des ressources. Certains outils peuvent même appliquer des optimisations automatiquement.</p>

      <p>L'analytique prédictive peut prévoir les modèles de trafic et dimensionner automatiquement les ressources, garantissant des performances optimales tout en minimisant les coûts.</p>

      <h2>Améliorations de l'Accessibilité</h2>
      <p>Les outils alimentés par l'IA peuvent générer automatiquement du texte alternatif pour les images, suggérer des étiquettes ARIA et identifier les problèmes d'accessibilité. Certains outils peuvent même corriger automatiquement les problèmes d'accessibilité courants.</p>

      <p>Les interfaces vocales alimentées par l'IA rendent les applications plus accessibles aux utilisateurs handicapés, tandis que la traduction en temps réel brise les barrières linguistiques.</p>

      <h2>Génération et Gestion de Contenu</h2>
      <p>L'IA peut générer du contenu, des descriptions de produits aux articles de blog. Bien que la supervision humaine reste nécessaire, l'IA peut considérablement accélérer la création de contenu et aider à maintenir la cohérence.</p>

      <p>Les systèmes de gestion de contenu intelligents peuvent automatiquement taguer et catégoriser le contenu, suggérer des articles connexes et optimiser le contenu pour les moteurs de recherche.</p>

      <h2>L'Avenir de l'IA dans le Développement Web</h2>
      <p>Nous ne faisons qu'effleurer la surface de ce qui est possible. Les développements futurs pourraient inclure une IA capable de concevoir des applications entières à partir de descriptions en langage naturel, de refactoriser automatiquement le code legacy ou de prédire et prévenir les problèmes de production avant qu'ils ne se produisent.</p>

      <p>Le rôle des développeurs évolue de l'écriture de chaque ligne de code à l'orchestration d'outils IA, à la prise de décisions de haut niveau et à la garantie de la qualité et de l'éthique dans les solutions générées par l'IA.</p>

      <h2>Conclusion</h2>
      <p>L'IA ne remplace pas les développeurs - elle augmente leurs capacités. En adoptant les outils IA et en apprenant à travailler efficacement avec eux, les développeurs peuvent être plus productifs, créatifs et concentrés sur la résolution de problèmes complexes. L'avenir du développement web est une collaboration entre la créativité humaine et l'intelligence artificielle.</p>
    `,

    // Blog Post: UI Design Principles (French)
    "blog.post.uiDesignPrinciples.title": "Principes Essentiels de Conception d'Interface Utilisateur pour 2025",
    "blog.post.uiDesignPrinciples.excerpt": "Maîtrisez les principes fondamentaux de la conception d'interface utilisateur pour créer des interfaces belles et fonctionnelles.",
    "blog.post.uiDesignPrinciples.content": `
      <div class="lead">
        <p>La conception d'interface utilisateur exceptionnelle est à la fois un art et une science. Bien que les tendances aillent et viennent, certains principes fondamentaux restent constants. Comprendre et appliquer ces principes vous aidera à créer des interfaces qui sont non seulement belles, mais aussi fonctionnelles et conviviales.</p>
      </div>

      <h2>Hiérarchie Visuelle</h2>
      <p>La hiérarchie visuelle guide les utilisateurs à travers votre interface en établissant l'ordre d'importance. Utilisez la taille, la couleur, le contraste et l'espacement pour diriger l'attention vers les éléments les plus importants en premier.</p>

      <p>Les actions principales doivent être les plus proéminentes, les actions secondaires moins, et les actions tertiaires subtiles. Les titres doivent être plus grands que le texte du corps, et les informations importantes doivent se démarquer par le contraste ou le positionnement.</p>

      <h2>Consistance et Standards</h2>
      <p>La consistance crée de la familiarité et réduit la charge cognitive. Utilisez des couleurs, une typographie, un espacement et des modèles d'interaction cohérents dans toute votre interface. Suivez les conventions de plateforme afin que les utilisateurs puissent appliquer leurs connaissances existantes.</p>

      <p>Créez et maintenez un système de conception avec des composants réutilisables, des échelles d'espacement définies et des directives claires. Cela garantit la cohérence dans votre produit et accélère le processus de conception et de développement.</p>

      <h2>Espace Blanc et Respiration</h2>
      <p>L'espace blanc (ou espace négatif) n'est pas un espace gaspillé - c'est un élément de conception crucial. Un espacement approprié améliore la lisibilité, crée une hiérarchie visuelle et rend les interfaces moins encombrées et plus premium.</p>

      <p>N'ayez pas peur de l'espace vide. Donnez de la place à votre contenu pour respirer. Utilisez un rembourrage et des marges généreux, surtout autour des éléments importants. Regroupez les éléments liés ensemble et séparez ceux qui ne le sont pas.</p>

      <h2>Typographie et Lisibilité</h2>
      <p>La typographie est fondamentale dans la conception d'interface utilisateur. Choisissez des polices lisibles à différentes tailles et poids. Maintenez une hiérarchie claire avec des niveaux de titre distincts et du texte du corps.</p>

      <p>Utilisez une hauteur de ligne de 1.5-1.6 pour le texte du corps, limitez la longueur de ligne à 50-75 caractères pour une lisibilité optimale, et assurez un contraste suffisant entre le texte et l'arrière-plan. Envisagez d'utiliser des polices système pour de meilleures performances et familiarité.</p>

      <h2>Théorie de la Couleur et Accessibilité</h2>
      <p>La couleur communique le sens, crée l'ambiance et guide l'attention. Utilisez une palette de couleurs limitée - généralement une couleur primaire, une ou deux couleurs d'accent, et une gamme de neutres.</p>

      <p>Assurez un contraste suffisant pour l'accessibilité (4.5:1 pour le texte normal, 3:1 pour le texte large). Ne comptez pas sur la couleur seule pour transmettre des informations - utilisez des icônes, des étiquettes ou des motifs aussi. Testez vos conceptions en niveaux de gris pour vérifier que la hiérarchie fonctionne sans couleur.</p>

      <h2>Retour d'Information et Affordances</h2>
      <p>Fournissez des retours clairs pour les actions des utilisateurs. Les boutons doivent avoir des états de survol, actif et désactivé. Montrez des indicateurs de chargement pour les opérations asynchrones. Affichez clairement les messages de succès ou d'erreur.</p>

      <p>Utilisez des affordances - des indices visuels qui suggèrent comment un élément doit être utilisé. Les boutons doivent avoir l'air cliquables, les liens doivent être distinguables, et les éléments interactifs doivent répondre à l'entrée de l'utilisateur.</p>

      <h2>Mobile-First et Conception Réactive</h2>
      <p>Concevez d'abord pour mobile, puis améliorez pour les écrans plus grands. Cela garantit que votre expérience de base fonctionne sur les appareils les plus contraints. Utilisez des mises en page réactives qui s'adaptent gracieusement aux différentes tailles d'écran.</p>

      <p>Considérez les cibles tactiles - rendez les éléments interactifs d'au moins 44x44 pixels pour un tapotement facile. Assurez-vous que les actions importantes sont atteignables d'une seule main sur les appareils mobiles.</p>

      <h2>Divulgation Progressive</h2>
      <p>Ne submergez pas les utilisateurs avec trop d'informations à la fois. Utilisez la divulgation progressive pour montrer seulement ce qui est nécessaire initialement, révélant des options ou informations supplémentaires selon les besoins.</p>

      <p>Cela peut être réalisé à travers des sections extensibles, des formulaires multi-étapes, des infobulles ou des boîtes de dialogue modales. L'objectif est de réduire la charge cognitive tout en gardant les fonctionnalités avancées accessibles.</p>

      <h2>Conclusion</h2>
      <p>Ces principes forment la base d'une bonne conception d'interface utilisateur. Bien que les tendances et les outils changent, ces fondamentaux restent pertinents. Pratiquez leur application cohérente, et vous créerez des interfaces qui sont à la fois belles et hautement fonctionnelles.</p>
    `,

    // Blog Post: Designing for Accessibility (French)
    "blog.post.accessibility.title": "Conception pour l'Accessibilité : Guide Complet",
    "blog.post.accessibility.excerpt": "Apprenez à créer des expériences numériques inclusives qui fonctionnent pour tous, quelles que soient leurs capacités.",
    "blog.post.accessibility.content": `
      <div class="lead">
        <p>L'accessibilité dans la conception web n'est pas seulement une exigence légale - c'est une nécessité morale et une bonne pratique commerciale. Créer des sites web accessibles garantit que tout le monde, quelles que soient ses capacités, peut accéder au contenu et interagir avec lui.</p>
      </div>

      <h2>Comprendre l'Accessibilité Web</h2>
      <p>L'accessibilité web signifie concevoir et développer des sites web, des outils et des technologies de manière à ce que les personnes handicapées puissent les utiliser. Cela inclut les personnes ayant des déficiences auditives, cognitives, neurologiques, physiques, linguistiques et visuelles.</p>

      <p>Selon l'Organisation mondiale de la santé, plus d'un milliard de personnes dans le monde souffrent d'une forme de handicap. En rendant votre site web accessible, vous ne vous conformez pas seulement aux réglementations - vous ouvrez votre entreprise à une partie importante de la population.</p>

      <h2>Lignes Directrices WCAG</h2>
      <p>Les Directives pour l'Accessibilité du Contenu Web (WCAG) fournissent un cadre complet pour l'accessibilité web. Les directives sont organisées autour de quatre principes : Perceptible, Utilisable, Compréhensible et Robuste (POUR).</p>

      <p>Le niveau WCAG 2.1 AA est la norme visée par la plupart des organisations, car il est souvent exigé par la loi dans de nombreux pays. Cela inclut des exigences comme fournir des alternatives textuelles aux images, assurer la navigation au clavier, maintenir un contraste de couleur suffisant et rendre le contenu lisible et compréhensible.</p>

      <h2>Mise en Œuvre Pratique</h2>
      <p>Commencez par le HTML sémantique - utilisez des hiérarchies de titres appropriées, des listes et des points de repère. Ajoutez des étiquettes ARIA lorsque nécessaire, mais souvenez-vous que les éléments HTML natifs sont souvent meilleurs que les attributs ARIA.</p>

      <p>Assurez-vous que tous les éléments interactifs sont accessibles au clavier. Testez votre site en naviguant uniquement avec un clavier - si vous ne pouvez pas atteindre ou activer quelque chose, les utilisateurs qui dépendent des claviers ou des technologies d'assistance ne le peuvent pas non plus.</p>

      <h2>Couleur et Contraste</h2>
      <p>Le contraste des couleurs est crucial pour les utilisateurs ayant des déficiences visuelles. WCAG exige un rapport de contraste d'au moins 4,5:1 pour le texte normal et 3:1 pour le texte large. Utilisez des outils comme le WebAIM Contrast Checker pour vérifier vos choix de couleurs.</p>

      <p>Ne comptez jamais sur la couleur seule pour transmettre des informations. Fournissez toujours des indices visuels supplémentaires comme des icônes, des motifs ou des étiquettes de texte.</p>

      <h2>Tests et Outils</h2>
      <p>Utilisez des outils de test automatisés comme axe DevTools, WAVE ou Lighthouse pour détecter les problèmes d'accessibilité courants. Cependant, les outils automatisés ne détectent qu'environ 30 % des problèmes d'accessibilité - les tests manuels sont essentiels.</p>

      <p>Testez avec des lecteurs d'écran réels comme NVDA, JAWS ou VoiceOver. Mieux encore, impliquez les utilisateurs handicapés dans votre processus de test pour obtenir des commentaires du monde réel.</p>

      <h2>Conclusion</h2>
      <p>L'accessibilité devrait être considérée dès le début de tout projet, et non ajoutée comme une réflexion après coup. En suivant ces directives et en faisant de l'accessibilité une priorité, vous créerez de meilleures expériences pour tous les utilisateurs tout en élargissant votre audience potentielle.</p>
    `,
    "blog.post.trends2025.content": `
      <div class="lead">
        <p>Le paysage du développement web évolue plus rapidement que jamais. En 2025, les développeurs et les agences numériques adoptent de nouveaux outils et technologies qui priorisent <strong>la vitesse, l'expérience utilisateur, l'intégration de l'IA et la durabilité</strong>. Que vous soyez propriétaire d'une marque, développeur ou designer, comprendre ces tendances peut vous aider à rester compétitif dans un monde numérique d'abord.</p>
      </div>

      <section class="trend-section">
        <h2>Développement piloté par l'IA et automatisation</h2>
        <p>L'intelligence artificielle transforme la façon dont les sites web sont construits et maintenus. Des outils de <strong>génération de code alimentés par l'IA</strong> comme GitHub Copilot à <strong>l'UX personnalisée basée sur le comportement des utilisateurs</strong>, l'automatisation réduit le temps de développement et stimule la créativité.</p>
        <div class="trend-highlight">
          <p><strong>Insight clé :</strong> Les chatbots IA et les assistants de contenu sont désormais standard pour les sites web, pas des luxes.</p>
        </div>
      </section>

      <section class="trend-section">
        <h2>Architecture axée sur les performances</h2>
        <p>L'accent mis par Google sur les <strong>Core Web Vitals</strong> se poursuit en 2025. Les temps de chargement rapides, l'interactivité fluide et la stabilité visuelle sont plus importants que jamais. Les développeurs utilisent <strong>Next.js 14, Astro et Vite</strong> pour construire des sites ultra-rapides et axés sur les performances.</p>
        <div class="trend-highlight">
          <p><strong>Conseil pro :</strong> Optimisez les images, implémentez le chargement paresseux et tirez parti de la mise en cache périphérique pour les audiences mondiales.</p>
        </div>
      </section>

      <section class="trend-section">
        <h2>Serveurless et informatique de périphérie</h2>
        <p>L'architecture serveurless et le <strong>déploiement périphérique</strong> redéfinissent l'évolutivité. Des plateformes comme <strong>Vercel, Netlify et Cloudflare Workers</strong> permettent aux développeurs de déployer du code plus près des utilisateurs, améliorant considérablement la latence et les performances.</p>
        <p>Cette évolution réduit également les coûts et simplifie la gestion de l'infrastructure backend.</p>
      </section>

      <section class="trend-section">
        <h2>Applications Web Progressives (PWA) 2.0</h2>
        <p>Les PWA continuent de brouiller la frontière entre le web et les applications mobiles natives. En 2025, elles supportent <strong>les notifications push, l'accès hors ligne et les capacités plein écran</strong> encore mieux.</p>
        <p>Les marques les utilisent pour offrir des expériences semblables à des applications sans le coût du développement natif.</p>
      </section>

      <section class="trend-section">
        <h2>UI Motion et design interactif</h2>
        <p>Les designs statiques sont terminés. L'UI Motion, les <strong>micro-animations</strong> et les <strong>effets de défilement 3D</strong> mènent la voie vers des expériences immersives. Des outils comme <strong>Framer Motion</strong> et <strong>GSAP</strong> facilitent l'ajout de personnalité et d'émotion aux interfaces.</p>
        <div class="trend-highlight warning">
          <p><strong>Important :</strong> Le mouvement devrait améliorer l'UX - pas l'écraser.</p>
        </div>
      </section>

      <section class="trend-section">
        <h2>Design web durable</h2>
        <p>Le design écologique n'est pas qu'un mot à la mode. Les sites web sont maintenant optimisés pour <strong>consommer moins d'énergie</strong>, en utilisant <strong>des thèmes sombres, des ressources minimales et du code efficace</strong>. Les développeurs et agences priorisent les solutions d'hébergement vertes pour réduire l'empreinte carbone.</p>
      </section>

      <section class="trend-section">
        <h2>Sécurité et confidentialité par conception</h2>
        <p>Alors que les utilisateurs deviennent plus conscients de la confidentialité, les <strong>systèmes d'authentification sécurisés</strong>, l'<strong>architecture zéro confiance</strong> et les <strong>APIs chiffrées</strong> sont désormais standard. La conformité avec le RGPD, le CCPA et les politiques de données mondiales reste une priorité absolue pour les développeurs et les marques.</p>
      </section>

      <section class="trend-section">
        <h2>Révolution du low-code</h2>
        <p>Les entreprises veulent avancer vite. Les outils low-code et no-code comme <strong>Webflow, Bubble et Builder.io</strong> permettent aux non-développeurs de créer des prototypes fonctionnels - tandis que les développeurs se concentrent sur les intégrations, les performances et la logique personnalisée.</p>
      </section>

      <section class="trend-section">
        <h2>Architecture headless et composable</h2>
        <p>Les CMS headless comme <strong>Strapi, Sanity et Contentful</strong> dominent 2025, offrant de la flexibilité sur tous les appareils et plateformes. Associés au <strong>JAMstack</strong> et <strong>GraphQL</strong>, ils permettent une livraison de contenu plus rapide et une expérience multi-canal transparente.</p>
      </section>

      <section class="trend-section">
        <h2>Intégration Web3 et blockchain</h2>
        <p>L'adoption de Web3 augmente avec des fonctionnalités d'<strong>authentification décentralisée, contrats intelligents</strong> et de <strong>propriété numérique</strong>. Bien que toujours précoce pour les marques grand public, de plus en plus de startups explorent l'identité utilisateur basée sur la blockchain et les adhésions liées aux NFT.</p>
      </section>

      <section class="key-takeaways">
        <h2>Points clés à retenir</h2>
        <div class="takeaways-grid">
          <div class="takeaway-item">
            <strong>Intégration IA :</strong> Les outils d'automatisation deviennent essentiels pour un développement plus rapide
          </div>
          <div class="takeaway-item">
            <strong>Performance d'abord :</strong> Les Core Web Vitals et l'optimisation sont non négociables
          </div>
          <div class="takeaway-item">
            <strong>Durabilité :</strong> L'hébergement vert et le design économe en énergie comptent
          </div>
          <div class="takeaway-item">
            <strong>Flexibilité :</strong> Les architectures headless et composables offrent une meilleure évolutivité
          </div>
        </div>
      </section>

      <section class="conclusion">
        <h2>Regard vers l'avenir</h2>
        <p>Le développement web en 2025 est défini par <strong>l'IA, l'automatisation et l'agilité</strong>. La clé est d'équilibrer <strong>les performances, la créativité et la durabilité</strong>. Chez Oren, nous adoptons déjà ces technologies modernes pour construire des sites web plus rapides, plus intelligents et prêts pour l'avenir pour nos clients.</p>

        <div class="cta-box">
          <p><strong>Prêt à adopter ces tendances ?</strong> <a href="/contact">Contactez-nous</a> pour discuter de la façon dont nous pouvons aider à transformer votre présence web avec une technologie de pointe.</p>
        </div>
      </section>
    `,

    // About
    "about.title": "À propos d'Oren",
    "about.hero.badge": "Découvrez notre histoire",
    "about.hero.title": "À propos d'Oren",
    "about.hero.subtitle": "Nous sommes une équipe de développeurs, designers et stratèges passionnés qui se consacre à la création d'expériences numériques exceptionnelles qui stimulent la croissance des entreprises et transforment les idées en réalité.",
    "about.hero.cta.primary": "Commencer votre projet",
    "about.hero.cta.secondary": "Voir nos réalisations",
    "about.hero.stats.projects": "Projets réalisés",
    "about.hero.stats.satisfaction": "Satisfaction client",
    "about.hero.stats.support": "Support disponible",
    "about.stats.title": "Notre impact en chiffres",
    "about.stats.subtitle": "Approuvé par des entreprises du monde entier pour des résultats exceptionnels",
    "about.mission.title": "Notre Mission",
    "about.mission.description": "Donner aux entreprises des solutions numériques innovantes qui stimulent la croissance, améliorent l'expérience utilisateur et créent une valeur durable dans un paysage numérique en constante évolution. Nous croyons au pouvoir de la technologie pour transformer les entreprises et améliorer les vies.",
    "about.vision.title": "Notre Vision",
    "about.vision.description": "Être le partenaire de confiance des entreprises qui cherchent à transformer leur présence numérique, reconnu pour notre excellence technique, notre innovation créative et notre engagement inébranlable envers le succès des clients. Nous aspirons à établir de nouveaux standards dans l'artisanat numérique.",
    "about.mission.badge": "Nos Fondements",
    "about.mission.cta": "En Savoir Plus Sur Nous",
    "about.values.badge": "Nos Principes",
    "about.values.cta": "Découvrez Nos Valeurs",
    "about.team.badge": "Rencontrez l'Équipe",
    "about.team.cta": "Faites Notre Connaissance",
    "about.vision.subtitle": "Notre Mission et Vision",
    "about.vision.intro": "Les forces motrices qui façonnent tout ce que nous faisons",
    "about.values.title": "Nos Valeurs",
    "about.values.subtitle": "Les principes qui guident tout ce que nous faisons",
    "about.values.client.title": "Axé sur le client",
    "about.values.client.description": "Votre succès est notre succès. Nous priorisons la compréhension de vos objectifs et la livraison de solutions qui dépassent les attentes.",
    "about.values.innovation.title": "Innovation",
    "about.values.innovation.description": "Nous restons à l'avant-garde des tendances technologiques pour fournir des solutions de pointe qui vous donnent un avantage concurrentiel.",
    "about.values.collaboration.title": "Collaboration",
    "about.values.collaboration.description": "Nous travaillons en étroite collaboration avec votre équipe, en maintenant une communication transparente tout au long du cycle de vie du projet.",
    "about.values.excellence.title": "Excellence",
    "about.values.excellence.description": "Nous nous engageons à fournir un travail de haute qualité qui répond aux plus hauts standards de performance et de conception.",
    "about.team.title": "Rencontrez notre équipe",
    "about.team.subtitle": "Des professionnels talentueux passionnés par la création d'expériences numériques exceptionnelles",
    "about.achievements.client.title": "Satisfaction Client",
    "about.achievements.client.description": "Dépasser constamment les attentes",
    "about.achievements.projects.title": "Projets Terminés",
    "about.achievements.projects.description": "Livraisons réussies dans diverses industries",
    "about.achievements.support.title": "Support Disponible",
    "about.achievements.support.description": "Toujours là quand vous avez besoin de nous",
    "about.achievements.experience.title": "Années d'Expérience",
    "about.achievements.experience.description": "Construire des solutions numériques depuis 2019",
    "about.team.ceo.role": "Fondateur et PDG",
    "about.team.ceo.bio": "Plus de 10 ans d'expérience en développement web et stratégie numérique",
    "about.team.cto.role": "CTO",
    "about.team.cto.bio": "Architecte full-stack spécialisé dans les solutions cloud évolutives",
    "about.team.design.role": "Directeur du Design",
    "about.team.design.bio": "Designer primé axé sur les expériences utilisateur centrées",
    "about.cta.title": "Prêt à Travailler Ensemble ?",
    "about.cta.subtitle": "Discutons de votre projet et voyons comment nous pouvons vous aider à concrétiser votre vision avec notre expertise en développement web, design et stratégie numérique.",
    "about.cta.primary": "Commencer Votre Projet",
    "about.cta.secondary": "Voir Notre Portfolio",
    "about.trust.available": "Disponible pour nouveaux projets",
    "about.trust.consultation": "Consultation gratuite",
    "about.trust.turnaround": "Exécution rapide",

    // 404
    "404.title": "Page introuvable",
    "404.description": "La page que vous recherchez n'existe pas ou a été déplacée.",
    "404.home": "Accueil",
    "404.contact": "Nous contacter",

    // Common
    "common.learnMore": "En savoir plus",
    "common.readMore": "Lire la suite",
    "common.viewAll": "Voir tout",
    "common.getStarted": "Commencer",
    "common.contactUs": "Nous contacter",
    "common.backTo": "Retour à",
    "common.loading": "Chargement...",
    "common.live": "En direct",
    "common.liveDemo": "Démo en direct",
    "common.code": "Code",
    "common.sourceCode": "Code source",
    "common.viewDetails": "Voir les détails",
    "common.more": "plus",
  },
}
