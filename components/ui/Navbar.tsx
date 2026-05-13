"use client";

import { navLinks } from "@/lib/constants";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("About");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 18);
    setHidden(latest > previous && latest > 140);
  });

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) {
          const match = navLinks.find((link) => link.href === `#${visible.target.id}`);
          if (match) setActive(match.label);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: hidden ? -90 : 0, opacity: 1 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className={`fixed left-0 right-0 top-0 z-50 border-b transition duration-300 ${
          scrolled
            ? "border-ink-border bg-ink-base/72 shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <a href="#home" className="focus-ring group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-accent-blue/40 bg-accent-blue/10 font-display text-sm font-semibold text-accent-blue">
              AF
            </span>
            <span className="hidden font-mono text-xs uppercase tracking-[0.18em] text-ink-secondary sm:block">
              Abdul Fahad M
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-2 text-sm font-medium text-ink-secondary transition hover:text-ink-primary"
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-accent-blue transition-all duration-200 ${
                    active === link.label ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="focus-ring rounded-md border border-accent-blue/45 px-4 py-2 text-sm font-semibold text-ink-primary transition hover:border-accent-blue hover:bg-accent-blue/10 hover:shadow-glow"
            >
              Hire Me
            </a>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-md border border-ink-border text-ink-primary md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink-base/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-accent-blue/40 bg-accent-blue/10 font-display text-sm font-semibold text-accent-blue">
                AF
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-md border border-ink-border text-ink-primary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.08 } }, hidden: {} }}
              className="section-shell flex min-h-[calc(100vh-4rem)] flex-col justify-center gap-5"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
                  className="border-b border-ink-border py-4 font-display text-4xl font-semibold text-ink-primary"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
