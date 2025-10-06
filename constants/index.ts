import ArcjetLogo from "@/assets/public/arcjet.jpg";
import NextLogo from "@/assets/public/next.jpeg";
import NeonLogo from "@/assets/public/neon.jpeg";
import javaScriptLogo from "@/assets/public/javascript.png";
import pythonLogo from "@/assets/public/python.png";
import algorithmicsLogo from "@/assets/public/algorithmics.png";
// navLinks
export const navLinks = [
  { name: "Home", href: "/" },
  { name: "My Work", href: "/my-work" },
  { name: "Services", href: "/services" },
  { name: "Skills", href: "/Skills" },
  { name: "Testimonials", href: "/testimonials" },
];

// projects
export const projects = [
  {
    id: "cmcgf46iu0000l50a3lq0fs9b",
    shortTitle: "Hireek - SaaS Recruitment Platform",
    shortDescription:
      "A full-featured SaaS recruitment platform built with Next.js 15, TailwindCSS, and Prisma. It connects companies and job seekers through a seamless hiring experience.",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "shadcn/ui",
      "Auth.js",
      "Prisma",
      "Neon",
      "Inngest",
      "Stripe",
      "Arcjet",
      "UploadThings",
      "Vercel",
    ],
    thumbnailUrl:
      "https://u32tyflba0.ufs.sh/f/kc5DWd3AVQkLcixdbTkM1TDQt4evgSYxW7lfu32BjAdPULyO", // replace with your actual image path
    demoLink: "https://hireek-platform.vercel.app/", // or your actual live URL
    githubLink: "https://github.com/ayoubhayda/hireek-platform",
  },
  {
    id: "cmee8m6g00000l2045mb556e1",
    shortTitle: "Nakhil - Restaurant & Café Website",
    shortDescription:
      "A modern multi-page restaurant and café website built with Next.js, Tailwind CSS, Shadcn UI, TypeScript, and Framer Motion. It showcases menus, reservations, testimonials, gallery, and more with responsive design and light/dark mode support.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Git",
      "Github",
      "Vercel",
    ],
    thumbnailUrl:
      "https://u32tyflba0.ufs.sh/f/kc5DWd3AVQkLl3g8p1E0YmU3nCVXHZNTjMx794vOIPEcgA6d",
    demoLink: "https://nakheel-restaurant-cafe.vercel.app",
    githubLink: "https://github.com/ayoubhayda/nakheel-restaurant-cafe",
  },
  {
    id: "cmcncvwmt0000la04iwno1egf",
    shortTitle: "AlphaQuiz - Web Testing Platform for Trainees",
    shortDescription:
      "A comprehensive testing platform built for first-year web development trainees using Next.js, TypeScript, and Prisma. Designed to evaluate skills in JavaScript, MySQL, Python, and more.",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "shadcn/ui",
      "Auth.js",
      "Prisma",
      "Neon",
      "UploadThings",
      "Git",
      "pnpm",
      "Vercel",
    ],
    thumbnailUrl:
      "https://u32tyflba0.ufs.sh/f/kc5DWd3AVQkLkzdf4p3AVQkLtj7uImzwr32JpYHohgs68acZ",
    demoLink: "https://alpha-quiz-theta.vercel.app",
    githubLink: "https://github.com/ayoubhayda/AlphaQuiz",
  },
  {
    id: "cmcndrryc0000l504k7ewzejj",
    shortTitle: "HooBank - Modern Banking Landing Page",
    shortDescription:
      "A fully responsive modern banking website built with React.js, Vite, and Tailwind CSS. It delivers sleek UI/UX, reusable components, and a professional layout showcasing features, stats, and testimonials.",
    technologies: [
      "React.js",
      "Typescript",
      "TailwindCSS",
      "Vite",
      "Node.js",
      "npm",
      "Git",
      "Vercel",
    ],
    thumbnailUrl:
      "https://u32tyflba0.ufs.sh/f/kc5DWd3AVQkLl8R5XDE0YmU3nCVXHZNTjMx794vOIPEcgA6d",
    demoLink: "https://modern-hoobank-vite.netlify.app",
    githubLink: "https://github.com/ayoubhayda/hooBank-Responsive-Website",
  },
  
  {
    id: "cmcnlqcxo0000lb04gp1n6g8w",
    shortTitle: "FileMaster - Document Management System",
    shortDescription:
      "A collaborative document management system built with Laravel, TailwindCSS, and MySQL. It enables efficient, secure, and scalable handling of organizational documents.",
    technologies: [
      "Laravel",
      "Mysql",
      "Tailwind Css",
      "Javascript",
      "Php",
      "Sass",
      "Git",
      "Github",
      "npm",
      "Cloudinary",
    ],
    thumbnailUrl:
      "https://u32tyflba0.ufs.sh/f/kc5DWd3AVQkLpjYp6LbjBVTlGf8EAorpwKdReI4QSWxatqPb",
    demoLink: null,
    githubLink: "https://github.com/ayoubhayda/FileMaster",
  },
  {
    id: "cmcnmhggs0000l7044refq38o",
    shortTitle: "AI Startup - Landing Page for SaaS Product",
    shortDescription:
      "A modern landing page for a SaaS AI product, built using Next.js, TailwindCSS, Shadcn UI, and Framer Motion to deliver smooth, engaging animations and an elegant user interface.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Git",
      "Github",
      "Vercel",
    ],
    thumbnailUrl:
      "https://u32tyflba0.ufs.sh/f/kc5DWd3AVQkL3qDj0WAuXPD27OKExmdsQHFGoakZYpRVqA0g",
    demoLink: "https://ai-startup-landing-page-sand.vercel.app",
    githubLink: "https://github.com/ayoubhayda/ai-startup-landing-page",
  },
];

// Technology stack logos and information
export const technologies = [
  {
    id: 1,
    name: "Next.js",
    logo: NextLogo,
  },
  {
    id: 2,
    name: "Neon",
    logo: NeonLogo,
  },
  {
    id: 3,
    name: "Arcjet",
    logo: ArcjetLogo,
  },
  {
    id: 4,
    name: "Python",
    logo: pythonLogo,
  },
  {
    id: 5,
    name: "JavaScript",
    logo: javaScriptLogo,
  },
  {
    id: 6,
    name: "Algorithm",
    logo: algorithmicsLogo,
  },
];

// Client testimonials for portfolio projects
export const clientTestimonials = [
  {
    quote:
      "Exceptional work quality and attention to detail. The project exceeded all our expectations.",
    author: "Sarah Johnson",
    role: "Product Manager at TechCorp",
  },
  {
    quote:
      "Professional, reliable, and delivered on time. Highly recommend for any web development project.",
    author: "Michael Chen",
    role: "Startup Founder",
  },
  {
    quote:
      "Outstanding technical skills and great communication throughout the entire project lifecycle.",
    author: "Emily Rodriguez",
    role: "Marketing Director",
  },
  {
    quote:
      "Transformed our vision into a beautiful, functional application. Couldn't be happier with the results.",
    author: "David Kim",
    role: "CEO at InnovateLab",
  },
  {
    quote:
      "Clean code, modern design, and excellent performance. A true professional developer.",
    author: "Lisa Thompson",
    role: "CTO at StartupX",
  },
  {
    quote:
      "Great problem-solving skills and innovative solutions. Will definitely work together again.",
    author: "James Wilson",
    role: "Project Lead",
  },
];

// Portfolio and project statistics
export const projectStats = [
  {
    value: "50+",
    label: "Projects Completed",
  },
  {
    value: "25+",
    label: "Happy Clients",
  },
  {
    value: "3+",
    label: "Years Experience",
  },
  {
    value: "15+",
    label: "Technologies Mastered",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
];
