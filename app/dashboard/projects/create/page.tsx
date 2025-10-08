import React from "react";
import CreateProjectForm from "@/components/forms/CreateProjectForm";

const page = async () => {
  return (
    <div className="@container/main p-4 lg:p-6">
      <CreateProjectForm />
    </div>
  );
};

export default page;
