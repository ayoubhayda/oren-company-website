/* eslint-disable @typescript-eslint/no-explicit-any */
import ProjectContent from "./ProjectContent"
import { getProjectMutation } from "@/lib/Services"
import { notFound } from "next/navigation"

// Server component that fetches project data
async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let project = null;

  try {
    project = await getProjectMutation(slug);
  } catch (error) {
    console.error("Error fetching project:", error);
    notFound();
  }

  // If project is not found, show 404
  if (!project) {
    notFound();
  }

  // For now, use English as default and let client handle language switching

  // Helper function to safely parse JSON content
  const parseJsonContent = (content: any) => {
    // Handle null/undefined
    if (content == null || content === '') {
      return null;
    }

    // If it's already a properly structured TipTap document, return as-is
    if (content && typeof content === 'object' && content.type === 'doc' && Array.isArray(content.content)) {
      return content;
    }

    if (typeof content === 'string') {
      // First, try to parse as JSON
      try {
        const parsed = JSON.parse(content);

        // Ensure it's a valid structure
        if (parsed && typeof parsed === 'object') {
          // Check if it's already a valid TipTap document
          if (parsed.type === 'doc' && Array.isArray(parsed.content)) {
            return parsed;
          }

          // Check if it's a valid TipTap node
          if (parsed.type && Array.isArray(parsed.content)) {
            // Wrap single nodes in a document structure
            return {
              type: 'doc',
              content: [parsed]
            };
          }

          // Check if it's an array of valid TipTap nodes
          if (Array.isArray(parsed) && parsed.length > 0) {
            const firstItem = parsed[0];
            if (firstItem && firstItem.type && Array.isArray(firstItem.content)) {
              return {
                type: 'doc',
                content: parsed
              };
            }
          }

          // If it's any other object structure, try to handle it as a paragraph node
          if (parsed.type && parsed.content !== undefined) {
            return {
              type: 'doc',
              content: [{
                type: 'paragraph',
                content: parsed.content ? [parsed] : []
              }]
            };
          }
        }

        // If parsing succeeded but structure is not recognized, treat as plain text
      } catch {
        // If parsing fails, treat as plain text
      }

      // Handle as plain text by wrapping in TipTap paragraph structure
      return {
        type: 'doc',
        content: [{
          type: 'paragraph',
          content: [{
            type: 'text',
            text: content
          }]
        }]
      };
    }

    return null;
  };

  // Transform database project to match expected format with all language versions
  const transformedProject = {
    title: {
      en: project?.longTitleEN || '',
      fr: project?.longTitleFR || '',
      ar: project?.longTitleAR || '',
    },
    description: {
      en: parseJsonContent(project?.shortDescriptionEN || ''),
      fr: parseJsonContent(project?.shortDescriptionFR || ''),
      ar: parseJsonContent(project?.shortDescriptionAR || ''),
    },
    image: project?.thumbnailUrl || "/placeholder.svg",
    category: project?.category || '',
    tags: project?.technologies || [],
    client: "Client", // Default value since not in database schema
    duration: project?.duration || null,
    team: "Team", // Default value since not in database schema
    challenge: {
      en: parseJsonContent(project?.longDescriptionEN || ''),
      fr: parseJsonContent(project?.longDescriptionFR || ''),
      ar: parseJsonContent(project?.longDescriptionAR || ''),
    },
    solution: {
      en: parseJsonContent(project?.longDescriptionEN || ''), // Same as challenge for now
      fr: parseJsonContent(project?.longDescriptionFR || ''),
      ar: parseJsonContent(project?.longDescriptionAR || ''),
    },
    results: [], // Default empty array since not in database schema
    technologies: project?.technologies || [],
    testimonial: undefined, // Default undefined since not in database schema
    images: project?.images || [],
    demoLink: project?.demoLink || undefined,
    githubLink: project?.githubLink || undefined,
  }

  return <ProjectContent project={transformedProject} slug={slug} />
}

export default ProjectPage
