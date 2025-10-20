import { Activity, Award, Users, Zap } from "lucide-react";
import React from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { useLanguage } from "../language-provider";

const ProjectKeyFeatures = () => {
  const { t } = useLanguage();
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/15 flex items-center justify-center">
          <Zap className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">{t("project.keyFeatures")}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            icon: Users,
            title: t("project.userExperience"),
            desc: t("project.userExperienceDesc"),
            highlight: "Mobile-First",
          },
          {
            icon: Zap,
            title: t("project.performance"),
            desc: t("project.performanceDesc"),
            highlight: "98% Score",
          },
          {
            icon: Activity,
            title: t("project.realTimeUpdates"),
            desc: t("project.realTimeUpdatesDesc"),
            highlight: "Live Data",
          },
          {
            icon: Award,
            title: t("project.bestPractices"),
            desc: t("project.bestPracticesDesc"),
            highlight: "100% Coverage",
          },
        ].map((feature, i) => (
          <Card
            key={i}
            className="p-6 shadow-none hover:shadow-md transition-shadow group gap-0 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <Badge variant="secondary" className="text-xs">
                {feature.highlight}
              </Badge>
            </div>
            <h3 className="font-semibold mb-2 text-lg">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {feature.desc}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectKeyFeatures;
