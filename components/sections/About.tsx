"use client";

import { fadeUp } from "@/lib/animations";
import { stats } from "@/lib/constants";
import { motion, useInView, useMotionValue, useMotionValueEvent, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionWrapper from "../ui/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about" eyebrow="About" title="About Me">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div variants={fadeUp} className="rounded-lg border border-ink-border bg-ink-surface/80 p-5 shadow-glow">
          <div className="flex aspect-square items-center justify-center rounded-lg border border-accent-blue/25 bg-black/35">
            <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-accent-blue/35 bg-accent-blue/10 shadow-glow-strong">
              <span className="font-display text-5xl font-semibold text-ink-primary">A.F.</span>
              <span className="absolute inset-3 rounded-full border border-accent-cyan/20" />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-md border border-ink-border bg-black/25 p-4 text-center">
                <CountUp value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-xs text-ink-secondary">{stat.label}</p>
                <p className="text-xs text-ink-secondary">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-5 text-base leading-8 text-ink-secondary sm:text-lg">
          <p className="text-xl leading-8 text-ink-primary">
            I&apos;m Abdul Fahad M, a Computer Science Engineering student who builds things that
            actually work.
          </p>
          <p>
            I specialize in Flutter and full-stack development - shipping mobile apps, backend
            systems, and AI-powered tools that solve real problems. I&apos;ve won a hackathon,
            published government-registered software, and built production-grade applications used
            by real users.
          </p>
          <p>
            My stack spans Flutter, Firebase, FastAPI, React, and modern AI frameworks. I care about
            clean architecture, fast performance, and products that feel great to use.
          </p>
          <p>
            When I&apos;m not building, I&apos;m solving - 750+ problems across LeetCode, CodeChef,
            and GeeksforGeeks. I learn by shipping.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1200, bounce: 0 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useMotionValueEvent(spring, "change", (latest) => {
    setDisplayValue(Math.round(latest));
  });

  return (
    <motion.span ref={ref} className="font-display text-2xl font-semibold text-ink-primary">
      {displayValue}
      {suffix}
    </motion.span>
  );
}
