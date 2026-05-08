import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  className,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        centered && "items-center text-center",
        className
      )}
    >
      <span className="text-xs font-medium tracking-[0.15em] uppercase text-amber font-[family-name:var(--font-dm-sans)]">
        {label}
      </span>
      <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-warm-black leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-[family-name:var(--font-dm-sans)] font-light text-muted-foreground text-base max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}