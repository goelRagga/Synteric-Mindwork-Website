import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string | React.ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      <p className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-[#c92e8e] mb-3">
        {label}
      </p>
      <h2 className="font-syne text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.08] mb-4 text-[#f5f4f0]">
        {title}
      </h2>
      {description && (
        <p className="text-[#8a8a9a] text-base leading-relaxed max-w-[520px]">
          {description}
        </p>
      )}
    </div>
  );
}
