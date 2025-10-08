import { z } from "zod";

// Project Zod Schema
export const projectSchema = z.object({
  // Multilingual titles
  shortTitleEN: z.string().min(2, "English short title must be at least 2 characters"),
  shortTitleFR: z.string().min(2, "French short title must be at least 2 characters"),
  shortTitleAR: z.string().min(2, "العنوان القصير باللغة العربية يجب أن يكون على الأقل حرفين"),
  longTitleEN: z.string().min(2, "English long title must be at least 2 characters"),
  longTitleFR: z.string().min(2, "French long title must be at least 2 characters"),
  longTitleAR: z.string().min(2, "العنوان الطويل باللغة العربية يجب أن يكون على الأقل حرفين"),

  // Multilingual descriptions
  shortDescriptionEN: z.string().min(10, "English short description must be at least 10 characters"),
  shortDescriptionFR: z.string().min(10, "French short description must be at least 10 characters"),
  shortDescriptionAR: z.string().min(10, "الوصف القصير باللغة العربية يجب أن يكون على الأقل 10 أحرف"),
  longDescriptionEN: z.string().min(10, "English long description must be at least 10 characters"),
  longDescriptionFR: z.string().min(10, "French long description must be at least 10 characters"),
  longDescriptionAR: z.string().min(10, "الوصف الطويل باللغة العربية يجب أن يكون على الأقل 10 أحرف"),

  // Project details
  thumbnailUrl: z.string().url("Please provide a valid thumbnail URL"),
  images: z.array(z.string().url("Each image must be a valid URL"))
    .min(1, "Please provide at least one project image"),
  githubLink: z.string().url("Please provide a valid GitHub URL").optional().or(z.literal("")),
  demoLink: z.string().url("Please provide a valid demo URL").optional().or(z.literal("")),
  technologies: z.array(z.string()).min(1, "Please select at least one technology"),
  duration: z.number().min(1, "Duration must be at least 1 day").max(365, "Duration cannot exceed 365 days"),
  category: z.string().min(1, "Please select a project category"),
});

// Project table data schema for the data table component
export const projectTableSchema = z.object({
  id: z.string(),
  shortTitleEN: z.string(),
  shortTitleFR: z.string(),
  shortTitleAR: z.string(),
  category: z.string(),
  technologies: z.array(z.string()),
  duration: z.number(),
  createdAt: z.date(),
  thumbnailUrl: z.string(),
  githubLink: z.string().optional(),
  demoLink: z.string().optional(),
});

// Type inference for TypeScript
export type ProjectTableData = z.infer<typeof projectTableSchema>;
export type ProjectFormData = z.infer<typeof projectSchema>;