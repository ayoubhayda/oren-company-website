import { prisma } from "@/utils/prisma";

// Get all projects
export const getAllProjects = async () => {
  const projects = await prisma.project.findMany({
    select: {
      id: true,
      shortTitleEN: true,
      shortTitleFR: true,
      shortTitleAR: true,
      longTitleEN: true,
      longTitleFR: true,
      longTitleAR: true,
      shortDescriptionEN: true,
      shortDescriptionFR: true,
      shortDescriptionAR: true,
      longDescriptionEN: true,
      longDescriptionFR: true,
      longDescriptionAR: true,
      thumbnailUrl: true,
      githubLink: true,
      demoLink: true,
      technologies: true,
      duration: true,
      images: true,
      category: true,
      createdAt: true,
      updatedAt: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  return projects;
};

// Get project details
export const getProjectMutation = async (projectId: string) => {
  const projectData = await prisma.project.findUnique({
    where: {
      id: projectId,
    },
    select: {
      id: true,
      shortTitleEN: true,
      shortTitleFR: true,
      shortTitleAR: true,
      longTitleEN: true,
      longTitleFR: true,
      longTitleAR: true,
      shortDescriptionEN: true,
      shortDescriptionFR: true,
      shortDescriptionAR: true,
      longDescriptionEN: true,
      longDescriptionFR: true,
      longDescriptionAR: true,
      thumbnailUrl: true,
      githubLink: true,
      demoLink: true,
      technologies: true,
      duration: true,
      images: true,
      category: true,
      createdAt: true,
      updatedAt: true
    },
  });

  return projectData;
};
