"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { technologies } from "@/utils/ListOfTechniques";

interface TechSelectorProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any; // Replace with proper type if needed
}

const TechSelector = ({ field }: TechSelectorProps) => {
  const toggleTechnology = (techId: string) => {
    const currentTechnologies = field.value || [];
    const newTechnologies = currentTechnologies.includes(techId)
      ? currentTechnologies.filter((id: string) => id !== techId)
      : [...currentTechnologies, techId];

    field.onChange(newTechnologies);
  };

  return (
    <div className="">
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => {
          const isSelected = (field.value || []).includes(tech.id);
          return (
            <Badge
              key={tech.id}
              variant={isSelected ? "default" : "outline"}
              className={`cursor-pointer transition-all hover:bg-muted select-none text-sm px-4 py-1.5 rounded-full ${
                isSelected ? "text-white hover:bg-primary/85" : ""
              }`}
              onClick={() => toggleTechnology(tech.id)}
            >
              <span className="flex items-center gap-2">
                {tech.icon}
                {tech.label}
              </span>
            </Badge>
          );
        })}
      </div>
      <div className="mt-4 text-sm text-muted-foreground">
        Selected techs:{" "}
        <span className="text-primary">{(field.value || []).length}</span>
      </div>
    </div>
  );
};

export default TechSelector;
