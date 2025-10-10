import PortfolioContent from "./PortfolioContent"
import { getAllProjects } from "@/lib/Services"

const categories = [
  { key: "portfolio.filter.all", value: "All" },
  { key: "portfolio.filter.webdev", value: "Web Development" },
  { key: "portfolio.filter.ecommerce", value: "E-commerce" },
  { key: "portfolio.filter.saas", value: "SaaS" }
]

// Helper function to safely parse JSON content
const parseJsonContent = (content: any) => {
  // Handle null/undefined or empty strings
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
    } catch (error) {
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

// Server component that fetches projects
async function PortfolioPage() {
  let projects: any[] = []

  try {
    projects = await getAllProjects()
  } catch (error) {
    console.error("Error fetching projects:", error)
    // Return empty array if fetch fails
    projects = []
  }

  // Parse JSON content for rich text fields in all languages
  const parsedProjects = projects
    .filter((project: any) => project != null) // Filter out null projects
    .map((project: any) => {
      // Add null checks for safety
      if (!project || typeof project !== 'object') {
        console.error('Invalid project object:', project);
        return null;
      }

      try {
        const parsedProject = {
          ...project,
          title: {
            en: project.shortTitleEN || '',
            fr: project.shortTitleFR || '',
            ar: project.shortTitleAR || '',
          },
          shortDescription: {
            en: parseJsonContent(project.shortDescriptionEN || ''),
            fr: parseJsonContent(project.shortDescriptionFR || ''),
            ar: parseJsonContent(project.shortDescriptionAR || ''),
          },
          longDescription: {
            en: parseJsonContent(project.longDescriptionEN || ''),
            fr: parseJsonContent(project.longDescriptionFR || ''),
            ar: parseJsonContent(project.longDescriptionAR || ''),
          },
        };
        

        return parsedProject;
      } catch (error) {
        console.error('Error parsing project:', project.id, error);
        return null;
      }
    })
    .filter(Boolean); // Remove any null results from errors

  return <PortfolioContent projects={parsedProjects} />
}

export default PortfolioPage

