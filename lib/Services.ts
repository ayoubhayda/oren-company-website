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

  // console.log('All projects in database:', projects.length, 'projects');
  // projects.forEach(p => {
  //   console.log(`Project ${p.id}: ${p.shortTitleEN} - EN desc length: ${p.shortDescriptionEN?.length || 0}, FR desc length: ${p.shortDescriptionFR?.length || 0}, AR desc length: ${p.shortDescriptionAR?.length || 0}`);
  // });

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

  // Debug logging to see what data is in the database
  // console.log('Database project data for ID:', projectId, {
  //   hasData: !!projectData,
  //   shortDescriptionEN: projectData?.shortDescriptionEN,
  //   shortDescriptionFR: projectData?.shortDescriptionFR,
  //   shortDescriptionAR: projectData?.shortDescriptionAR,
  //   longDescriptionEN: projectData?.longDescriptionEN,
  //   longDescriptionFR: projectData?.longDescriptionFR,
  //   longDescriptionAR: projectData?.longDescriptionAR,
  // });

  return projectData;
};

// Newsletter subscription functions
export const subscribeToNewsletter = async (email: string) => {
  const response = await fetch('/api/newsletter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Failed to subscribe to newsletter');
  }

  return data;
};

export const getNewsletterSubscribers = async () => {
  const response = await fetch('/api/newsletter');

  if (!response.ok) {
    throw new Error('Failed to fetch newsletter subscribers');
  }

  const data = await response.json();
  return data.subscriptions;
};
