import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "ghost";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[#0A0A0A] text-white hover:bg-[#2563EB]": variant === "default",
            "border border-[#E5E5E5] bg-transparent text-[#0A0A0A] hover:border-[#0A0A0A] hover:bg-[#F5F5F5]": variant === "outline",
            "bg-[#F5F5F5] text-[#0A0A0A] hover:bg-[#E5E5E5]": variant === "secondary",
            "text-[#0A0A0A] hover:bg-[#F5F5F5]": variant === "ghost",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };