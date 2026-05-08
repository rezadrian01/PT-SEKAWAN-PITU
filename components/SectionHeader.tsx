import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  className,
  centered = false,
  titleClassName,
  subtitleClassName,
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
      <h2
        className={cn(
          "font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-warm-black leading-tight",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "font-[family-name:var(--font-dm-sans)] font-light text-muted-foreground text-base max-w-xl leading-relaxed",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}