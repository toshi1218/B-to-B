import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[#1a2846] text-white hover:bg-[#273c69] focus-visible:outline-[#1a2846]",
  secondary:
    "bg-white text-[#1a2846] border border-[#1a2846] hover:bg-[#f0f3f9] focus-visible:outline-[#1a2846]",
  outline:
    "bg-transparent text-white border border-white hover:bg-white/10 focus-visible:outline-white",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
