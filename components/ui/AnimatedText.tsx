"use client";

import { roles } from "@/lib/constants";
import { useEffect, useMemo, useState } from "react";

export default function AnimatedText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const currentRole = roles[roleIndex];
  const displayed = useMemo(() => currentRole.slice(0, charIndex), [currentRole, charIndex]);

  useEffect(() => {
    const atFullWord = charIndex === currentRole.length;
    const atEmptyWord = charIndex === 0;
    const delay = atFullWord && !deleting ? 1300 : deleting ? 42 : 72;

    const timeout = window.setTimeout(() => {
      if (!deleting && atFullWord) {
        setDeleting(true);
        return;
      }

      if (deleting && atEmptyWord) {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
        return;
      }

      setCharIndex((index) => index + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [charIndex, currentRole.length, deleting]);

  return (
    <span className="inline-flex min-h-[1.2em] items-center text-accent-blue">
      <span>{displayed}</span>
      <span className="ml-1 h-[1em] w-px animate-pulse bg-accent-cyan" aria-hidden="true" />
    </span>
  );
}
