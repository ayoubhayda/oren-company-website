import React from "react";
import EditProjectForm from "@/components/forms/EditProjectForm";
import { prisma } from "@/utils/prisma";
import { notFound } from "next/navigation";

interface EditProjectPageProps {
  params: Promise<{ id: string }>;
}

const EditProjectPage = async ({ params }: EditProjectPageProps) => {
  const { id } = await params;

  // Fetch the existing project data
  const project = await prisma.project.findUnique({
    where: { id },
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="@container/main p-4 lg:p-6">
      <EditProjectForm project={project} />
    </div>
  );
};

export default EditProjectPage;
