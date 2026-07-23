import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest2 text-ivory-muted",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
