import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center border px-3 py-1 text-xs font-medium transition-colors",
        {
          "border-[#0A0A0A] bg-[#0A0A0A] text-white": variant === "default",
          "border-[#E5E5E5] bg-[#F5F5F5] text-[#737373]": variant === "secondary",
          "border-[#E5E5E5] text-[#737373] hover:border-[#0A0A0A] hover:text-[#0A0A0A]": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };