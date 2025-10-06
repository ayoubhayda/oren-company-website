import { prisma } from "@/utils/prisma";

// Get prject details
export const getProjectMutation = async (projectId: string) => {
  const projectData = await prisma.project.findUnique({
    where: {
      id: projectId,
    },
    select: {
      id: true,
      shortTitle: true,
      longTitle: true,
      shortDescription: true,
      longDescription: true,
      technologies: true,
      thumbnailUrl: true,
      githubLink: true,
      demoLink: true,
      screenShots: true,
      createdAt: true,
      updatedAt:true
    },
  });

  return projectData;
};
