"use client";

import { projects } from "@/lib/constants";
import SectionWrapper from "../ui/SectionWrapper";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const featured = projects.filter((project) => project.featured);
  const standard = projects.filter((project) => !project.featured);

  return (
    <SectionWrapper
      id="projects"
      eyebrow="Projects"
      title="Proof of work, shipped with intent."
      intro="Featured systems, hackathon wins, and mobile-first products built around real workflows."
    >
      <div className="space-y-6">
        {featured.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} featured />
        ))}
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {standard.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index + featured.length} />
        ))}
      </div>
    </SectionWrapper>
  );
}
