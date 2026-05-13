"use client";

import { fadeUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionWrapperProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export default function SectionWrapper({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = ""
}: SectionWrapperProps) {
  return (
    <section id={id} className={`relative py-24 sm:py-28 ${className}`}>
      <motion.div
        className="section-shell"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        <motion.div variants={fadeUp} className="mb-10 max-w-3xl sm:mb-14">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-accent-blue">
            {eyebrow}
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-normal text-ink-primary sm:text-5xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-secondary sm:text-lg">{intro}</p>
          ) : null}
        </motion.div>
        {children}
      </motion.div>
    </section>
  );
}
