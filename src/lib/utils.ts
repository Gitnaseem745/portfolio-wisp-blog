import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(...inputs));
}

/**
 * Normalizes a tag name to a consistent URL slug format
 * Converts to lowercase for URL consistency with your DB format
 */
export function normalizeTagSlug(tagName: string): string {
  return tagName.toLowerCase();
}

/**
 * Converts a tag slug back to a display name
 * Keeps the original format with hyphens but makes it more readable
 */
export function tagSlugToDisplayName(slug: string): string {
  // Convert to proper case for display while keeping hyphens
return slug.split('-').map(word => 
    word.toLowerCase() === 'ai'
        ? 'AI'
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
).join(' ');
}
