"use client";

import { fadeUp } from "@/lib/animations";
import { achievements } from "@/lib/constants";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";

export default function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      eyebrow="Achievements"
      title="Achievements"
      intro="Hackathon wins, registered software, certifications, and consistent problem solving."
      className="border-y border-ink-border bg-ink-surface/25"
    >
      <div className="relative">
        <div className="absolute left-5 top-0 hidden h-px w-[calc(100%-2.5rem)] bg-ink-border lg:block" />
        <div className="grid gap-4 lg:grid-cols-3">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <motion.article
                key={achievement.title}
                variants={fadeUp}
                className="relative rounded-lg border border-ink-border border-l-accent-blue bg-ink-base/60 p-5 transition hover:-translate-y-1 hover:border-accent-blue hover:shadow-glow"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-accent-blue/30 bg-accent-blue/10 text-accent-blue">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-ink-primary">{achievement.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-secondary">{achievement.subtitle}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
