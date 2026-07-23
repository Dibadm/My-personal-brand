import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gold text-ink hover:bg-gold-soft hover:shadow-gold-glow active:scale-[0.98]",
        secondary:
          "glass text-ivory hover:border-white/20 hover:bg-white/[0.07] active:scale-[0.98]",
        ghost:
          "text-ivory-muted hover:text-ivory active:scale-[0.98]",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5 text-xs",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
