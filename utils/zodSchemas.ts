import { z } from "zod";

// Project Schema
export const projectSchema = z.object({
  shortTitle: z.string().min(2, "Short title must be at least 2 characters"),
  longTitle: z.string().min(2, "Long title must be at least 2 characters"),
  shortDescription: z.string().min(10, "Short description must be at least 10 characters"),
  longDescription: z.string().min(10, "Long description must be at least 10 characters"),
  thumbnailUrl: z.string().url("Please provide a valid thumbnail URL"),
  screenShots: z.array(z.string().url("Each screenshot must be a valid URL"))
    .min(1, "Please provide at least one screenshot"),
  githubLink: z.string().url("Please provide a valid GitHub URL").optional().or(z.literal("")),
  demoLink: z.string().url("Please provide a valid demo URL").optional().or(z.literal("")),
  technologies: z.array(z.string()).min(1, "Please select at least one technology"),
});

// Type inference for TypeScript
export type ProjectFormData = z.infer<typeof projectSchema>;