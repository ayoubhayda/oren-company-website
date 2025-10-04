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
    "services.page.title": "Our Services",
    "services.page.subtitle":
      "Comprehensive digital solutions designed to help your business thrive in the digital age",
    "services.cta.title": "Ready to Get Started?",
    "services.cta.description": "Let's discuss your project and find the perfect solution for your business needs.",
    "services.viewAllServices": "View All Services",

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
    "portfolio.title": "We Recent Work",
    "portfolio.badge": "Featured Projects",
    "portfolio.subtitle": "Explore our recent work and see how we've helped businesses achieve their digital goals",
    "portfolio.view-all": "View All Projects",
    "portfolio.filter.all": "All Projects",
    "portfolio.notfound.title": "Project Not Found",
    "portfolio.notfound.description": "The project you're looking for doesn't exist or has been removed.",
    "portfolio.notfound.button": "View All Projects",
    "portfolio.cta.title": "Have a Project in Mind?",
    "portfolio.cta.description":
      "Let's discuss how we can help bring your vision to life with our expertise and proven track record.",

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
    "contact.form.name": "Full Name",
    "contact.form.name.placeholder": "John Doe",
    "contact.form.company": "Company",
    "contact.form.company.placeholder": "Your Company",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "john@example.com",
    "contact.form.phone": "Phone",
    "contact.form.phone.placeholder": "+1 (234) 567-890",
    "contact.form.service": "Service Interested In",
    "contact.form.service.placeholder": "Select a service",
    "contact.form.budget": "Budget Range",
    "contact.form.budget.placeholder": "Select budget range",
    "contact.form.message": "Project Details",
    "contact.form.message.placeholder": "Tell us about your project...",
    "contact.form.submit": "Send Message",
    "contact.form.submitting": "Sending...",
    "contact.form.success": "Message Sent!",
    "contact.info.title": "Contact Information",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.address": "Address",

    // Blog
    "blog.title": "Latest Insights",
    "blog.subtitle": "Explore our thoughts on web development, design, and digital innovation",
    "blog.search.placeholder": "Search articles...",
    "blog.categories": "Categories",
    "blog.category.all": "All Posts",
    "blog.newsletter.title": "Subscribe to Our Newsletter",
    "blog.newsletter.description":
      "Subscribe to our newsletter for the latest insights, tutorials, and industry news delivered to your inbox.",
    "blog.notfound.title": "Article Not Found",
    "blog.notfound.description": "The article you're looking for doesn't exist or has been removed.",
    "blog.notfound.button": "View All Articles",

    // About
    "about.title": "About Oren",
    "about.mission.title": "Our Mission",
    "about.vision.title": "Our Vision",
    "about.values.title": "Our Values",
    "about.team.title": "Meet Our Team",

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
    "services.page.title": "خدماتنا",
    "services.page.subtitle": "حلول رقمية شاملة مصممة لمساعدة عملك على الازدهار في العصر الرقمي",
    "services.cta.title": "هل أنت مستعد للبدء؟",
    "services.cta.description": "دعنا نناقش مشروعك ونجد الحل المثالي لاحتياجات عملك.",
    "services.viewAllServices": "عرض جميع الخدمات",

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
    "portfolio.title": "أعمالنا الأخيرة",
    "portfolio.badge": "المشاريع المميزة",
    "portfolio.subtitle": "استكشف أعمالنا الأخيرة وشاهد كيف ساعدنا الشركات على تحقيق أهدافها الرقمية",
    "portfolio.view-all": "عرض جميع المشاريع",
    "portfolio.filter.all": "جميع المشاريع",
    "portfolio.notfound.title": "المشروع غير موجود",
    "portfolio.notfound.description": "المشروع الذي تبحث عنه غير موجود أو تم حذفه.",
    "portfolio.notfound.button": "عرض جميع المشاريع",
    "portfolio.cta.title": "لديك مشروع في ذهنك؟",
    "portfolio.cta.description": "دعنا نناقش كيف يمكننا مساعدتك في تحقيق رؤيتك بخبرتنا وسجلنا الحافل.",

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
    "contact.form.name": "الاسم الكامل",
    "contact.form.name.placeholder": "أحمد محمد",
    "contact.form.company": "الشركة",
    "contact.form.company.placeholder": "شركتك",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.email.placeholder": "ahmad@example.com",
    "contact.form.phone": "الهاتف",
    "contact.form.phone.placeholder": "+966 50 123 4567",
    "contact.form.service": "الخدمة المهتم بها",
    "contact.form.service.placeholder": "اختر خدمة",
    "contact.form.budget": "نطاق الميزانية",
    "contact.form.budget.placeholder": "اختر نطاق الميزانية",
    "contact.form.message": "تفاصيل المشروع",
    "contact.form.message.placeholder": "أخبرنا عن مشروعك...",
    "contact.form.submit": "إرسال الرسالة",
    "contact.form.submitting": "جاري الإرسال...",
    "contact.form.success": "تم إرسال الرسالة!",
    "contact.info.title": "معلومات الاتصال",
    "contact.info.email": "البريد الإلكتروني",
    "contact.info.phone": "الهاتف",
    "contact.info.address": "العنوان",

    // Blog
    "blog.title": "أحدث الأفكار",
    "blog.subtitle": "استكشف أفكارنا حول تطوير الويب والتصميم والابتكار الرقمي",
    "blog.search.placeholder": "البحث في المقالات...",
    "blog.categories": "الفئات",
    "blog.category.all": "جميع المنشورات",
    "blog.newsletter.title": "اشترك في نشرتنا الإخبارية",
    "blog.newsletter.description":
      "اشترك في نشرتنا الإخبارية للحصول على أحدث الأفكار والدروس وأخبار الصناعة في بريدك الوارد.",
    "blog.notfound.title": "المقال غير موجود",
    "blog.notfound.description": "المقال الذي تبحث عنه غير موجود أو تم حذفه.",
    "blog.notfound.button": "عرض جميع المقالات",

    // About
    "about.title": "عن أورين",
    "about.mission.title": "مهمتنا",
    "about.vision.title": "رؤيتنا",
    "about.values.title": "قيمنا",
    "about.team.title": "تعرف على فريقنا",

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
    "services.page.title": "Nos Services",
    "services.page.subtitle":
      "Solutions numériques complètes conçues pour aider votre entreprise à prospérer à l'ère numérique",
    "services.cta.title": "Prêt à commencer?",
    "services.cta.description":
      "Discutons de votre projet et trouvons la solution parfaite pour les besoins de votre entreprise.",
    "services.viewAllServices": "Voir Tous les Services",

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
    "portfolio.title": "Nos Travaux Récents",
    "portfolio.badge": "Projets en Vedette",
    "portfolio.subtitle":
      "Explorez nos travaux récents et voyez comment nous avons aidé les entreprises à atteindre leurs objectifs numériques",
    "portfolio.view-all": "Voir Tous les Projets",
    "portfolio.filter.all": "Tous les projets",
    "portfolio.notfound.title": "Projet introuvable",
    "portfolio.notfound.description": "Le projet que vous recherchez n'existe pas ou a été supprimé.",
    "portfolio.notfound.button": "Voir tous les projets",
    "portfolio.cta.title": "Vous avez un projet en tête?",
    "portfolio.cta.description":
      "Discutons de la façon dont nous pouvons donner vie à votre vision avec notre expertise et notre expérience éprouvée.",

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
    "contact.form.name": "Nom complet",
    "contact.form.name.placeholder": "Jean Dupont",
    "contact.form.company": "Entreprise",
    "contact.form.company.placeholder": "Votre entreprise",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "jean@example.com",
    "contact.form.phone": "Téléphone",
    "contact.form.phone.placeholder": "+33 6 12 34 56 78",
    "contact.form.service": "Service d'intérêt",
    "contact.form.service.placeholder": "Sélectionnez un service",
    "contact.form.budget": "Fourchette budgétaire",
    "contact.form.budget.placeholder": "Sélectionnez une fourchette budgétaire",
    "contact.form.message": "Détails du projet",
    "contact.form.message.placeholder": "Parlez-nous de votre projet...",
    "contact.form.submit": "Envoyer le message",
    "contact.form.submitting": "Envoi en cours...",
    "contact.form.success": "Message envoyé!",
    "contact.info.title": "Informations de contact",
    "contact.info.email": "Email",
    "contact.info.phone": "Téléphone",
    "contact.info.address": "Adresse",

    // Blog
    "blog.title": "Dernières Perspectives",
    "blog.subtitle": "Explorez nos réflexions sur le développement web, le design et l'innovation numérique",
    "blog.search.placeholder": "Rechercher des articles...",
    "blog.categories": "Catégories",
    "blog.category.all": "Tous les articles",
    "blog.newsletter.title": "Abonnez-vous à notre newsletter",
    "blog.newsletter.description":
      "Abonnez-vous à notre newsletter pour recevoir les dernières perspectives, tutoriels et actualités de l'industrie dans votre boîte de réception.",
    "blog.notfound.title": "Article introuvable",
    "blog.notfound.description": "L'article que vous recherchez n'existe pas ou a été supprimé.",
    "blog.notfound.button": "Voir tous les articles",

    // About
    "about.title": "À propos d'Oren",
    "about.mission.title": "Notre Mission",
    "about.vision.title": "Notre Vision",
    "about.values.title": "Nos Valeurs",
    "about.team.title": "Rencontrez notre équipe",

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
