// Project card component
"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Github, Eye, ArrowRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { useLanguage } from "../language-provider";

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  demoLink: string | null;
  githubLink: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useLanguage();

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      className="group relative"
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50">
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          <Image
            src={`${project.image}`}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Project Status Badge */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 backdrop-blur-sm text-xs font-medium px-2 py-1">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse" />
              {t("common.live")}
            </Badge>
          </div>

          {/* Desktop Hover Overlay with Action Buttons */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block" />

          <div className="absolute inset-0 hidden md:flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0 ">
            {project.demoLink ? (
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white backdrop-blur-sm text-black px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-4 h-4" />
                {t("common.liveDemo")}
              </motion.a>
            ) : null}

            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black/80 backdrop-blur-sm border border-zinc-700/80 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              {t("common.code")}
            </motion.a>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6">
          <Link
            className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-1"
            href={`/portfolio/${project.slug}`}
          >
            {project.title}
          </Link>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="secondary"
                className="text-xs px-2 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors shadow-none"
              >
                {tech}
              </Badge>
            ))}
            {/* Tech more budge */}
            {project.technologies.length > 3 && (
              <Badge
                variant="outline"
                className="text-xs px-2 py-1 text-muted-foreground shadow-none"
              >
                +{project.technologies.length - 3} {t("common.more")}
              </Badge>
            )}
          </div>

          {/* Mobile & Desktop Action Footer */}
          <div className="space-y-4">
            {/* Primary Action Buttons - Always Visible */}
            <div className="flex md:hidden gap-3">
              {project.demoLink ? (
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonVariants({
                    variant: "default",
                    size: "lg",
                  })} flex-1 text-white !shadow-none`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Eye className="w-4 h-4" />
                  {t("common.liveDemo")}
                </motion.a>
              ) : null}

              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonVariants({
                  variant: "outline",
                  size: "lg",
                })} flex-1 !shadow-none`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-4 h-4" />
                {t("common.sourceCode")}
              </motion.a>
            </div>

            {/* Secondary Info - Clean and Minimal */}
            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <motion.div>
                <Link
                  className="text-sm text-primary hover:text-black dark:hover:text-white font-semibold inline-flex items-center gap-2 transition-all duration-200 cursor-pointer"
                  href={`/portfolio/${project.slug}`}
                >
                  {t("common.viewDetails")}
                  <ArrowRight className="w-4 h-4 transform rtl:rotate-180" />
                </Link>
              </motion.div>

              <div className="flex items-center gap-4">
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground hidden md:inline-flex items-center gap-1.5 transition-colors duration-200 font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  <Github className="w-3.5 h-3.5" />
                  {t("common.code")}
                </motion.a>

                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="w-3.5 h-3.5 text-yellow-500" />
                  <span className="font-medium">4.8</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Hover Effect Border */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
