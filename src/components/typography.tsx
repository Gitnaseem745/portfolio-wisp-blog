import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("font-bold tracking-tight text-foreground", {
  variants: {
    level: {
      h1: "text-4xl md:text-5xl lg:text-6xl",
      h2: "text-3xl md:text-4xl lg:text-5xl",
      h3: "text-2xl md:text-3xl lg:text-4xl",
      h4: "text-xl md:text-2xl",
      h5: "text-lg md:text-xl",
      h6: "text-base md:text-lg",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
  },
  defaultVariants: {
    level: "h1",
    align: "left",
    weight: "bold",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

/**
 * Heading component that can be used as a semantic heading (h1-h6) or any other HTML element.
 * It accepts all the standard HTML attributes for headings and additional props for styling.
 *
 * @param {string} className - Custom class names to apply to the heading element.
 * @param {string} level - The semantic level of the heading (h1-h6).
 * @param {string} align - Text alignment (left, center, right).
 * @param {string} weight - Font weight (light, normal, medium, semibold, bold).
 * @param {string} as - The HTML element to render (default is h1).
 * @param {React.HTMLAttributes<HTMLHeadingElement>} props - Other HTML attributes.
 * @returns {JSX.Element} The rendered heading element.
 * @example
 * <Heading level="h2" align="center" weight="bold">Centered Bold Heading</Heading>
 * <Heading level="h3" as="h1">This is an h1 but looks like h3</Heading>
 */
const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, align, weight, as, ...props }, ref) => {
    const Component = as || level || "h1";

    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ level, align, weight }), className)}
        {...props}
      />
    );
  }
);
Heading.displayName = "Heading";

const textVariants = cva("text-foreground", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      accent: "text-primary",
      destructive: "text-destructive",
    },
    leading: {
      none: "leading-none",
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    },
  },
  defaultVariants: {
    size: "base",
    align: "left",
    weight: "normal",
    variant: "default",
    leading: "normal",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

/**
 * Text component that can be used for paragraphs and other text elements.
 * It accepts all the standard HTML attributes for paragraphs and additional props for styling.
 *
 * @param {string} className - Custom class names to apply to the text element.
 * @param {string} size - Text size (xs, sm, base, lg, xl).
 * @param {string} align - Text alignment (left, center, right, justify).
 * @param {string} weight - Font weight (light, normal, medium, semibold, bold).
 * @param {string} variant - Text variant (default, muted, accent, destructive).
 * @param {string} leading - Line height (none, tight, snug, normal, relaxed, loose).
 * @param {React.HTMLAttributes<HTMLParagraphElement>} props - Other HTML attributes.
 * @returns {JSX.Element} The rendered paragraph element.
 * @example
 * <Text size="lg" align="center" weight="bold">Centered Bold Text</Text>
 */
const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, align, weight, variant, leading, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          textVariants({ size, align, weight, variant, leading }),
          className
        )}
        {...props}
      />
    );
  }
);
Text.displayName = "Text";

export { Heading, Text };
