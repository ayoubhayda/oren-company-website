"use server";
import { prisma } from "@/utils/prisma";
import { ProjectFormData, projectSchema } from "@/utils/zodSchemas";
import { signOut } from "@/utils/auth";
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

// update existing project
export async function updateProjectMutation(id: string, data: ProjectFormData) {
  const validatedData = projectSchema.parse(data);

  await prisma.project.update({
    where: { id },
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

// delete existing project
export async function deleteProjectMutation(id: string) {
  await prisma.project.delete({
    where: { id },
  });

  return redirect("/dashboard/projects");
}

// logout user
export async function logoutUser() {
  await signOut({ redirectTo: "/" });
}
