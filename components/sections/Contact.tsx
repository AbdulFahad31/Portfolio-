"use client";

import { fadeUp } from "@/lib/animations";
import { contactLinks } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import SectionWrapper from "../ui/SectionWrapper";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("Please fill all fields before sending.");
      return;
    }

    setIsSending(true);
    setStatus("Sending message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      if (!response.ok) {
        throw new Error("Message request failed");
      }

      setStatus("Message sent. I will get back to you soon.");
      form.reset();
    } catch {
      setStatus("Message could not be sent. Please email me directly at abdulfahad676@gmail.com.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <SectionWrapper id="contact" eyebrow="Contact" title="Let's build something.">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div variants={fadeUp} className="rounded-lg border border-ink-border bg-ink-surface/70 p-6 sm:p-8">
          <p className="max-w-md text-lg leading-8 text-ink-secondary">
            Open to internships, freelance projects, and collaborations on interesting problems.
          </p>
          <div className="mt-8 space-y-4">
            {contactLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="group flex items-center gap-4 rounded-md border border-ink-border bg-black/25 p-4 text-sm text-ink-secondary transition hover:border-accent-blue hover:text-ink-primary"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md border border-ink-border text-accent-blue transition group-hover:border-accent-blue">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block font-medium text-ink-primary">{social.label}</span>
                    <span className="block">{labelValue(social.label)}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="rounded-lg border border-ink-border bg-ink-surface/70 p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-ink-secondary">
              <span>Name</span>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="focus-ring h-12 w-full rounded-md border border-ink-border bg-black/30 px-4 text-ink-primary placeholder:text-ink-secondary/60 transition focus:border-accent-blue focus:shadow-glow"
              />
            </label>
            <label className="space-y-2 text-sm text-ink-secondary">
              <span>Email</span>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="focus-ring h-12 w-full rounded-md border border-ink-border bg-black/30 px-4 text-ink-primary placeholder:text-ink-secondary/60 transition focus:border-accent-blue focus:shadow-glow"
              />
            </label>
          </div>
          <label className="mt-5 block space-y-2 text-sm text-ink-secondary">
            <span>Message</span>
            <textarea
              name="message"
              required
              placeholder="Tell me about the project"
              rows={7}
              className="focus-ring w-full resize-none rounded-md border border-ink-border bg-black/30 px-4 py-3 text-ink-primary placeholder:text-ink-secondary/60 transition focus:border-accent-blue focus:shadow-glow"
            />
          </label>
          <button
            type="submit"
            disabled={isSending}
            className="focus-ring mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-accent-blue px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-glow sm:w-auto"
          >
            <Mail className="h-4 w-4" />
            {isSending ? "Sending..." : "Send Message"}
            <ArrowRight className="h-4 w-4" />
          </button>
          {status ? <p className="mt-4 text-sm text-ink-secondary">{status}</p> : null}
        </motion.form>
      </div>
    </SectionWrapper>
  );
}

function labelValue(label: string) {
  if (label === "Email") return "abdulfahad676@gmail.com";
  if (label === "LinkedIn") return "linkedin.com/in/abdul-fahad-m";
  if (label === "GitHub") return "github.com/AbdulFahad31";
  if (label === "Phone") return "+91 75399 34156";
  return "leetcode.com/u/abdul_fahad";
}
