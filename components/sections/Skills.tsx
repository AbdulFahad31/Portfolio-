"use client";

import { fadeUp } from "@/lib/animations";
import { skillCategories } from "@/lib/constants";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SkillBadge from "../ui/SkillBadge";

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      eyebrow="Skills"
      title="A focused stack for shipping."
      intro="Clean categories, practical tools, and fundamentals that hold up under pressure."
      className="border-y border-ink-border bg-ink-surface/25"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={fadeUp}
            className="rounded-lg border border-ink-border bg-ink-base/55 p-5"
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-ink-secondary">
              {category.title}
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {category.skills.map((skill) => (
                <SkillBadge key={skill.label} label={skill.label} icon={skill.icon} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
