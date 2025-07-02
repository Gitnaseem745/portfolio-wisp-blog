import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  error?: boolean;
  variant?: "sm" | "md" | "lg";
  type?: string;
  className?: string;
}

/**
 * Input component for user input.
 * @param {string} placeholder - Placeholder text for the input.
 * @param {boolean} error - Indicates if the input is in an error state.
 * @param {("sm" | "md" | "lg")} variant - Size of the input (small, medium, large).
 * @param {string} type - Type of the input (text, password, etc.).
 * @param {string} className - Additional class names for styling.
 * @param {InputProps} props - Additional Input props for the input component.
 * @returns {JSX.Element} Rendered input component.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      placeholder = "Enter text here...",
      error,
      variant = "md",
      type = "text",
      disabled,
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      sm: "p-1 text-sm w-full max-w-40",
      md: "p-2 text-base w-full max-w-52",
      lg: "p-3 text-lg w-full max-w-64",
    };

    return (
      <input
        ref={ref}
        type={type}
        aria-label="Input"
        disabled={disabled}
        className={cn(
          "border rounded-md focus:outline-none focus:ring-2 bg-background text-foreground",
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-border focus:ring-ring",
          disabled && "opacity-50 cursor-not-allowed",
          "transition duration-200 ease-in-out",
          variantClasses[variant],
          className
        )}
        placeholder={placeholder}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
