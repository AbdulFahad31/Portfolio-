import type { SkillIcon } from "@/lib/constants";

type SkillBadgeProps = {
  label: string;
  icon: SkillIcon;
};

export default function SkillBadge({ label, icon: Icon }: SkillBadgeProps) {
  return (
    <div className="group flex h-12 items-center gap-3 rounded-md border border-ink-border bg-ink-surface px-4 text-sm text-ink-primary transition duration-200 hover:-translate-y-0.5 hover:border-accent-blue hover:shadow-glow">
      <Icon className="h-4 w-4 flex-none text-accent-blue transition group-hover:text-accent-cyan" />
      <span className="font-medium">{label}</span>
    </div>
  );
}
