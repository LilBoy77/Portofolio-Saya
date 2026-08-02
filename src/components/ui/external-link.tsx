import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

export function ExternalLink({
  href,
  children,
  className,
  showIcon = true,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1 text-text-primary hover:text-accent transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-sm",
        className
      )}
    >
      <span>{children}</span>
      {showIcon && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-text-secondary group-hover:text-accent" />
      )}
    </a>
  );
}
