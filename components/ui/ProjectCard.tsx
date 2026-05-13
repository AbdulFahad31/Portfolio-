"use client";

import { cardHover, fadeUp } from "@/lib/animations";
import { projects } from "@/lib/constants";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

type Project = (typeof projects)[number];

type ProjectCardProps = {
  project: Project;
  index: number;
  featured?: boolean;
};

export default function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const Icon = project.icon;
  const isReversed = featured && index % 2 === 1;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={cardHover}
      className={`group relative overflow-hidden rounded-lg border border-ink-border bg-ink-surface/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-300 hover:border-accent-blue/80 hover:shadow-glow ${
        featured ? "p-5 sm:p-8 lg:p-10" : "p-5 sm:p-6"
      }`}
    >
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-accent-blue/10 blur-3xl" />
      </div>

      <div
        className={`relative grid gap-8 ${
          featured ? "lg:grid-cols-[1.05fr_0.95fr] lg:items-center" : ""
        } ${isReversed ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-md border border-ink-border bg-black/30 text-accent-blue">
              <Icon className="h-5 w-5" />
            </span>
            {project.badge ? (
              <span className="rounded-full border border-accent-blue/30 bg-accent-blue/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-cyan">
                {project.badge}
              </span>
            ) : null}
          </div>

          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-ink-secondary">
            Project {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="font-display text-3xl font-semibold tracking-normal text-ink-primary sm:text-4xl">
            {project.name}
          </h3>
          <p className="mt-3 text-lg leading-7 text-ink-primary/90">{project.tagline}</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-secondary sm:text-base">
            {project.description}
          </p>

          <ul className="mt-6 grid gap-2 text-sm text-ink-secondary sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-ink-border bg-black/30 px-3 py-1.5 font-mono text-xs text-ink-secondary"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex h-10 items-center gap-2 rounded-md border border-ink-border px-4 text-sm font-medium text-ink-primary transition hover:border-accent-blue hover:bg-accent-blue/10"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>

        {featured ? <ProjectVisual project={project} /> : null}
      </div>

      {!featured ? <CompactVisual project={project} /> : null}
    </motion.article>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <div className="relative min-h-[290px] overflow-hidden rounded-lg border border-ink-border bg-black/35 p-4">
      <div className="absolute inset-0 bg-grid bg-[size:28px_28px] opacity-70" />
      <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-accent-blue/20 blur-3xl" />
      <div className="relative mx-auto flex h-full max-w-[380px] flex-col justify-between rounded-[2rem] border border-ink-border bg-[#0d0d0d] p-4 shadow-2xl">
        <div className="flex items-center justify-between border-b border-ink-border pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent-blue" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent-cyan/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-secondary/40" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-secondary">App</span>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-accent-blue/30 bg-accent-blue/10">
            <Icon className="h-9 w-9 text-accent-cyan" />
          </div>
          <p className="font-display text-2xl font-semibold text-ink-primary">{project.name}</p>
          <p className="mt-2 max-w-xs text-sm leading-6 text-ink-secondary">{project.tagline}</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {project.stack.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-md bg-white/[0.04] px-2 py-2 text-center font-mono text-[10px] text-ink-secondary">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CompactVisual({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <div className="relative mt-7 h-32 overflow-hidden rounded-md border border-ink-border bg-black/35">
      <div className="absolute inset-0 bg-grid bg-[size:24px_24px] opacity-60" />
      <div className="absolute right-8 top-6 h-24 w-24 rounded-full bg-accent-blue/15 blur-2xl" />
      <div className="relative flex h-full items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent-blue/30 bg-accent-blue/10">
          <Icon className="h-7 w-7 text-accent-cyan" />
        </div>
      </div>
    </div>
  );
}
