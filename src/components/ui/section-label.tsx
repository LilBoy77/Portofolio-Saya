import { cn } from "@/lib/utils";

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

export function SectionLabel({ number, label, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 text-xs tracking-widest uppercase font-mono text-text-secondary mb-6",
        className
      )}
    >
      <span className="text-accent font-semibold">{"//"} {number}</span>
      <span className="w-6 h-[1px] bg-border" />
      <span>{label}</span>
    </div>
  );
}
