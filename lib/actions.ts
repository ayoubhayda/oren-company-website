"use server";
import { prisma } from "@/utils/prisma";
import { ProjectFormData, projectSchema } from "@/utils/zodSchemas";
import { redirect } from "next/navigation";

// create new project
export async function createJobMutation(data: ProjectFormData) {
  const validatedData = projectSchema.parse(data);

  await prisma.project.create({
    data: {
      shortTitleEN: validatedData.shortTitleEN,
      shortTitleFR: validatedData.shortTitleFR,
      shortTitleAR: validatedData.shortTitleAR,
      longTitleEN: validatedData.longTitleEN,
      longTitleFR: validatedData.longTitleFR,
      longTitleAR: validatedData.longTitleAR,
      shortDescriptionEN: validatedData.shortDescriptionEN,
      shortDescriptionFR: validatedData.shortDescriptionFR,
      shortDescriptionAR: validatedData.shortDescriptionAR,
      longDescriptionEN: validatedData.longDescriptionEN,
      longDescriptionFR: validatedData.longDescriptionFR,
      longDescriptionAR: validatedData.longDescriptionAR,
      thumbnailUrl: validatedData.thumbnailUrl,
      githubLink: validatedData.githubLink,
      demoLink: validatedData.demoLink,
      technologies: validatedData.technologies,
      duration: validatedData.duration,
      images: validatedData.images,
      category: validatedData.category,
    },
  });

  return redirect("/dashboard");
}
