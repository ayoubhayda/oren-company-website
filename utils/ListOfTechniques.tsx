import React from "react";
import {
  // Frontend Frameworks & Libraries
  Code2,
  FileCode,
  Component,
  Palette,
  Paintbrush, // Backend & Databases
  Server,
  Database,
  Cloud,
  Lock, // Languages
  Terminal,
  Braces,
  Hash, // Tools & Services
  Package,
  GitBranch,
  Zap,
  Shield,
  Globe,
  Monitor,
  Upload,
  Mail,
  Coins, // Design & UI
  Image,
  Sparkles,
  Rocket,
  Activity,
} from "lucide-react";

interface Technology {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export const technologies: Technology[] = [
  // Frontend Frameworks
  { id: "nextjs", label: "Next.js", icon: <Code2 className="w-3 h-3" /> },
  { id: "react", label: "React.js", icon: <Component className="w-3 h-3" /> },

  // Languages
  {
    id: "javascript",
    label: "JavaScript",
    icon: <FileCode className="w-3 h-3" />,
  },
  {
    id: "typescript",
    label: "TypeScript",
    icon: <Braces className="w-3 h-3" />,
  },
  { id: "python", label: "Python", icon: <Terminal className="w-3 h-3" /> },
  { id: "php", label: "PHP", icon: <Hash className="w-3 h-3" /> },

  // Backend Frameworks
  { id: "nodejs", label: "Node.js", icon: <Server className="w-3 h-3" /> },
  { id: "express", label: "Express.js", icon: <Server className="w-3 h-3" /> },
  { id: "laravel", label: "Laravel", icon: <Server className="w-3 h-3" /> },

  // Databases
  { id: "mysql", label: "MySQL", icon: <Database className="w-3 h-3" /> },
  {
    id: "postgresql",
    label: "PostgreSQL",
    icon: <Database className="w-3 h-3" />,
  },
  { id: "mongodb", label: "MongoDB", icon: <Database className="w-3 h-3" /> },
  { id: "sqlite", label: "SQLite", icon: <Database className="w-3 h-3" /> },
  { id: "redis", label: "Redis", icon: <Database className="w-3 h-3" /> },
  { id: "firebase", label: "Firebase", icon: <Cloud className="w-3 h-3" /> },
  { id: "supabase", label: "Supabase", icon: <Database className="w-3 h-3" /> },
  { id: "prisma", label: "Prisma", icon: <Database className="w-3 h-3" /> },

  // Styling & UI
  { id: "css", label: "CSS3", icon: <Palette className="w-3 h-3" /> },
  { id: "sass", label: "Sass/SCSS", icon: <Paintbrush className="w-3 h-3" /> },
  {
    id: "tailwind",
    label: "Tailwind CSS",
    icon: <Palette className="w-3 h-3" />,
  },
  {
    id: "materialui",
    label: "Material-UI",
    icon: <Component className="w-3 h-3" />,
  },
  { id: "shadcn", label: "Shadcn/ui", icon: <Component className="w-3 h-3" /> },

  // Cloud & Deployment
  { id: "vercel", label: "Vercel", icon: <Rocket className="w-3 h-3" /> },
  { id: "netlify", label: "Netlify", icon: <Globe className="w-3 h-3" /> },

  // DevOps & Tools
  { id: "git", label: "Git", icon: <GitBranch className="w-3 h-3" /> },
  { id: "github", label: "GitHub", icon: <GitBranch className="w-3 h-3" /> },
  { id: "gitlab", label: "GitLab", icon: <GitBranch className="w-3 h-3" /> },
  { id: "webpack", label: "Webpack", icon: <Package className="w-3 h-3" /> },
  { id: "vite", label: "Vite", icon: <Zap className="w-3 h-3" /> },
  { id: "npm", label: "npm", icon: <Package className="w-3 h-3" /> },
  { id: "yarn", label: "Yarn", icon: <Package className="w-3 h-3" /> },
  { id: "pnpm", label: "pnpm", icon: <Package className="w-3 h-3" /> },

  // CMS & Headless
  { id: "strapi", label: "Strapi", icon: <FileCode className="w-3 h-3" /> },

  // Authentication
  { id: "authjs", label: "Auth.js", icon: <Lock className="w-3 h-3" /> },
  { id: "nextauth", label: "NextAuth.js", icon: <Lock className="w-3 h-3" /> },

  // Data Visualization
  { id: "d3", label: "D3.js", icon: <Activity className="w-3 h-3" /> },
  { id: "chartjs", label: "Chart.js", icon: <Activity className="w-3 h-3" /> },
  { id: "recharts", label: "Recharts", icon: <Activity className="w-3 h-3" /> },

  // Modern SaaS & Services
  { id: "neon", label: "Neon", icon: <Database className="w-3 h-3" /> },
  { id: "inngest", label: "Inngest", icon: <Zap className="w-3 h-3" /> },
  { id: "stripe", label: "Stripe", icon: <Coins className="w-3 h-3" /> },
  { id: "arcjet", label: "Arcjet", icon: <Shield className="w-3 h-3" /> },
  {
    id: "uploadthings",
    label: "UploadThing",
    icon: <Upload className="w-3 h-3" />,
  },
  { id: "resend", label: "Resend", icon: <Mail className="w-3 h-3" /> },
  { id: "clerk", label: "Clerk", icon: <Lock className="w-3 h-3" /> },

  {
    id: "cloudinary",
    label: "Cloudinary",
    icon: <Image className="w-3 h-3" />,
  },

  // Other Popular Technologies
  { id: "graphql", label: "GraphQL", icon: <Code2 className="w-3 h-3" /> },
  {
    id: "apollo",
    label: "Apollo GraphQL",
    icon: <Code2 className="w-3 h-3" />,
  },
  { id: "socketio", label: "Socket.io", icon: <Zap className="w-3 h-3" /> },
  { id: "electron", label: "Electron", icon: <Monitor className="w-3 h-3" /> },
  { id: "threejs", label: "Three.js", icon: <Sparkles className="w-3 h-3" /> },
];
