// Projects Page
import React, { Suspense } from "react";
import { getAllProjects } from "@/lib/Services";
import { ProjectsDataTable } from "@/components/general/ProjectsDataTable";
import { ProjectTableSkeleton } from "@/components/general/ProjectTableSkeleton";
import { Button } from "@/components/ui/button";
import { type ProjectTableData } from "@/utils/zodSchemas";
import Link from "next/link";

// Transform database project data to table format
function transformProjectForTable(project: {
  id: string;
  shortTitleEN: string;
  shortTitleFR: string;
  shortTitleAR: string;
  category: string;
  technologies: string[];
  duration: number;
  createdAt: Date;
  thumbnailUrl: string;
  githubLink?: string | null;
  demoLink?: string | null;
}): ProjectTableData {
  return {
    id: project.id,
    shortTitleEN: project.shortTitleEN,
    shortTitleFR: project.shortTitleFR,
    shortTitleAR: project.shortTitleAR,
    category: project.category,
    technologies: project.technologies,
    duration: project.duration,
    createdAt: project.createdAt,
    thumbnailUrl: project.thumbnailUrl,
    githubLink: project.githubLink || undefined,
    demoLink: project.demoLink || undefined,
  };
}

// Server component that fetches data
async function ProjectsContent() {
  try {
    const projects = await getAllProjects();

    if (!projects || projects.length === 0) {
      return (
        <div className="flex flex-1 flex-col gap-6 p-4 lg:gap-8 lg:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold md:text-2xl">Projects</h1>
              <p className="text-sm text-muted-foreground">
                Manage and organize your projects
              </p>
            </div>
          </div>
          <div className="flex min-h-[400px] items-center justify-center rounded-lg border border-dashed bg-muted/20">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <svg
                  className="h-8 w-8 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">No projects yet</h3>
              <p className="mb-4 text-sm text-muted-foreground max-w-sm">
                Get started by creating your first project. Organize your work
                and showcase your achievements.
              </p>
              <Link
                href="/dashboard/projects/create"
                className="h-10 px-4 py-2 has-[>svg]:px-3 bg-primary text-primary-foreground shadow-none hover:bg-primary/90 cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive "
              >
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Create Your First Project
              </Link>
            </div>
          </div>
        </div>
      );
    }

    // Transform projects for table display
    const tableData: ProjectTableData[] = projects.map(
      transformProjectForTable
    );

    return (
      <div className="flex flex-1 flex-col gap-6 p-4 lg:gap-8 lg:p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold md:text-2xl">Projects</h1>
            <p className="text-sm text-muted-foreground">
              Manage and organize your projects
            </p>
          </div>
        </div>
        <ProjectsDataTable data={tableData} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching projects:", error);
    return (
      <div className="flex flex-1 flex-col gap-6 p-4 lg:gap-8 lg:p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold md:text-2xl">Projects</h1>
            <p className="text-sm text-muted-foreground">
              Manage and organize your projects
            </p>
          </div>
        </div>
        <div className="flex min-h-[400px] items-center justify-center rounded-lg border border-destructive/20 bg-destructive/5">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
              <svg
                className="h-8 w-8 text-destructive"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-destructive">
              Unable to Load Projects
            </h3>
            <p className="mb-4 text-sm text-muted-foreground max-w-sm">
              We&apos;re having trouble loading your projects right now. This
              might be a temporary issue.
            </p>
            <div className="flex gap-2 justify-center">
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
              >
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Try Again
              </Button>
              <Button
                variant="outline"
                onClick={() => (window.location.href = "/dashboard")}
              >
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 5a2 2 0 012-2h2a2 2 0 012 2v0M8 5a2 2 0 012-2h2a2 2 0 012 2v0"
                  />
                </svg>
                Go to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Loading component
function ProjectsLoading() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-4 lg:gap-8 lg:p-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-8 w-32 bg-muted animate-pulse rounded" />
          <div className="h-4 w-48 bg-muted animate-pulse rounded" />
        </div>
      </div>
      <div className="rounded-lg border bg-card p-4">
        <div className="flex items-center gap-4 pb-4">
          <div className="h-10 w-64 rounded bg-muted animate-pulse" />
          <div className="h-10 w-40 rounded bg-muted animate-pulse" />
          <div className="ml-auto flex gap-2">
            <div className="h-9 w-20 rounded bg-muted animate-pulse" />
            <div className="h-9 w-24 rounded bg-muted animate-pulse" />
          </div>
        </div>
        <ProjectTableSkeleton />
      </div>
    </div>
  );
}

// Main page component
export default function ProjectsPage() {
  return (
    <Suspense fallback={<ProjectsLoading />}>
      <ProjectsContent />
    </Suspense>
  );
}
