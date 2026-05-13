"use client";

import { fadeUp, staggerContainer } from "@/lib/animations";
import { codingProfiles, socials } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import AnimatedText from "../ui/AnimatedText";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      <div className="absolute inset-0 bg-grid bg-[size:44px_44px] opacity-70" />
      <div className="absolute left-1/2 top-28 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent-blue/15 blur-3xl" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="section-shell text-center"
      >
        <motion.div
          variants={fadeUp}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-ink-border bg-ink-surface/70 px-4 py-2 text-sm text-ink-secondary backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-accent-cyan shadow-[0_0_18px_rgba(6,182,212,0.8)]" />
          Open to work
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mx-auto max-w-5xl font-display text-6xl font-semibold tracking-normal text-ink-primary sm:text-7xl lg:text-[72px]"
        >
          Abdul Fahad M
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-6 min-h-[88px] max-w-5xl font-display text-3xl font-semibold tracking-normal text-ink-primary sm:text-5xl"
        >
          I build <AnimatedText />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink-secondary sm:text-xl"
        >
          Computer Science Engineer crafting real-world applications, hackathon-winning systems,
          and modern digital products.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#projects"
            className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent-blue px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-glow"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/Portfolio-/assets/Abdul-Fahad-Resume.pdf"
            className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-md border border-ink-border px-6 text-sm font-semibold text-ink-primary transition hover:-translate-y-0.5 hover:border-accent-blue hover:bg-accent-blue/10"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="focus-ring inline-flex h-10 items-center gap-2 rounded-md border border-transparent px-3 text-sm text-ink-secondary transition hover:scale-[1.03] hover:border-ink-border hover:text-accent-blue"
              >
                <Icon className="h-4 w-4" />
                {social.label}
              </a>
            );
          })}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {codingProfiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <span
                key={profile.label}
                className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-black/20 px-3 py-1.5 font-mono text-xs text-ink-secondary"
              >
                <Icon className="h-3.5 w-3.5 text-accent-blue" />
                {profile.label}
              </span>
            );
          })}
        </motion.div>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 text-ink-secondary transition hover:text-accent-blue sm:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
