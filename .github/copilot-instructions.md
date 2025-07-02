# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

For Copilot: Don't do anything else except what user said in the prompt. 

This is a Next.js + TypeScript project with the following setup:

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React (mandatory)
- **Animations**: Framer Motion (mandatory)
- **Theme**: next-themes for light/dark mode support
- **Code Quality**: ESLint + Prettier

## Project Structure

- `src/app/` - App Router pages and layouts
- `src/components/` - Reusable UI components
- `src/sections/` - Page sections and larger components
- `src/layouts/` - Layout components
- `src/config/` - Configuration files (siteConfig.ts)

## Guidelines

- Use TypeScript for all components and utilities
- Apply TailwindCSS classes dynamically based on selected theme
- Utilize lucide-react for all icons
- Use framer-motion for animations and transitions
- Follow clean, minimal design principles
- No shadcn/ui or other UI libraries - build custom components
- Maintain Vercel-ready configuration
