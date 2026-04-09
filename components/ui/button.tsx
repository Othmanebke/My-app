"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-zinc-900 text-white hover:bg-zinc-700",
  secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
  outline: "border border-zinc-300 text-zinc-900 hover:border-zinc-900",
  ghost: "text-zinc-700 hover:bg-zinc-100",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-xs font-medium rounded-lg",
  md: "px-4 py-2.5 text-sm font-semibold rounded-xl",
  lg: "px-5 py-3 text-base font-semibold rounded-xl",
};

export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  children,
  className = "",
  disabled = false,
  ...props
}: ButtonProps): JSX.Element {
  const baseClasses = "inline-flex items-center justify-center gap-2 transition disabled:cursor-not-allowed disabled:opacity-70";
  const variantClass = variantClasses[variant];
  const sizeClass = sizeClasses[size];

  return (
    <button
      className={`${baseClasses} ${variantClass} ${sizeClass} ${className}`.trim()}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      aria-disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
            <path
              d="M21 12a9 9 0 0 0-9-9"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
}
