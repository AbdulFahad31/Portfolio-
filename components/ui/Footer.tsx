import { navLinks } from "@/lib/constants";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-ink-border bg-ink-base">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-7 text-sm text-ink-secondary md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent-blue/35 bg-accent-blue/10 font-display text-xs font-semibold text-accent-blue">
            AF
          </span>
          <span>Abdul Fahad M</span>
        </div>
        <div className="flex flex-wrap gap-5">
          {navLinks
            .filter((link) => link.label !== "Achievements")
            .map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-accent-blue">
                {link.label}
              </a>
            ))}
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#home"
            aria-label="Scroll to top"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-ink-border transition hover:border-accent-blue hover:text-accent-blue"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
