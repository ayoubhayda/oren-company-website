"use server";
import { prisma } from "@/utils/prisma";
import { ProjectFormData, projectSchema } from "@/utils/zodSchemas";
import { redirect } from "next/navigation";

// create new project
export async function createJobMutation(data: ProjectFormData) {
  const validatedData = projectSchema.parse(data);

  await prisma.project.create({
    data: {
      shortTitle: validatedData.shortTitle,
      longTitle: validatedData.longTitle,
      shortDescription: validatedData.shortDescription,
      longDescription: validatedData.longDescription,
      technologies: validatedData.technologies,
      thumbnailUrl: validatedData.thumbnailUrl,
      githubLink: validatedData.githubLink,
      demoLink: validatedData.demoLink,
      screenShots: validatedData.screenShots,
    },
  });

  return redirect("/dashboard");
}
