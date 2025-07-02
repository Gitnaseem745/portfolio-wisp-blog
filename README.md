# Creane Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Deploy with Vercel](https://img.shields.io/badge/Deploy%20with-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/creane_portfolio)

A minimal and modern portfolio website built with **Next.js 14+**, **TypeScript**, and **TailwindCSS**. Features a clean, responsive design with light/dark theme support and smooth animations.

> **Live Demo**: [View Live Site](https://your-portfolio-demo.vercel.app) | **Preview**: ![Portfolio Preview](./public/images/preview.png)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Scripts](#️-scripts)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- 🚀 **Next.js 14+** with App Router for modern React development
- 🔷 **TypeScript** for enhanced type safety and developer experience
- 🎨 **TailwindCSS** for rapid UI development and responsive design
- ✨ **Framer Motion** for smooth animations and page transitions
- 🎯 **Lucide React** for beautiful, consistent iconography
- 🌙 **next-themes** for seamless light/dark theme switching
- 📱 **Fully Responsive** design that works on all devices
- ⚡ **Performance Optimized** with Next.js best practices
- 🔧 **ESLint + Prettier** for maintainable code quality
- 🚀 **Vercel-ready** deployment configuration

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | Next.js | 14+ |
| **Language** | TypeScript | 5.0+ |
| **Styling** | TailwindCSS | 3.0+ |
| **Animations** | Framer Motion | Latest |
| **Icons** | Lucide React | Latest |
| **Theming** | next-themes | Latest |
| **Code Quality** | ESLint + Prettier | Latest |

## 🚀 Getting Started

### 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for cloning the repository

### ⚡ Quick Start

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/creane_portfolio.git
cd creane_portfolio
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Start the development server:**

```bash
npm run dev
# or
yarn dev
```

4. **Open your browser:**

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio in action! 🎉

### 🔧 Environment Setup

Create a `.env.local` file in the root directory for any environment variables:

```bash
# Example environment variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## 📁 Project Structure

```
creane_portfolio/
├── 📁 public/                  # Static assets
│   ├── 🖼️  images/            # Image assets
│   └── 📄 *.svg               # SVG icons
├── 📁 src/
│   ├── 📁 app/                # Next.js App Router pages
│   │   ├── 📄 layout.tsx      # Root layout
│   │   ├── 📄 page.tsx        # Home page
│   │   └── 📁 blog/           # Blog pages
│   ├── 📁 components/         # Reusable UI components
│   │   ├── 🎨 button.tsx      # Custom button component
│   │   ├── 🎨 header.tsx      # Navigation header
│   │   ├── 🎨 footer.tsx      # Site footer
│   │   └── 🌙 theme-toggle.tsx # Dark/light mode toggle
│   ├── 📁 sections/           # Page sections
│   │   ├── 🏠 hero-section.tsx
│   │   ├── 💼 experience-section.tsx
│   │   ├── 🛠️  skills-section.tsx
│   │   └── 📧 contact-section.tsx
│   ├── 📁 lib/                # Utility functions
│   └── 📁 config/             # Configuration files
│       └── ⚙️  siteConfig.ts   # Site-wide settings
├── 📄 package.json            # Dependencies and scripts
├── 📄 tailwind.config.ts      # TailwindCSS configuration
├── 📄 tsconfig.json           # TypeScript configuration
└── 📄 next.config.ts          # Next.js configuration
```

## 🛠️ Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Development** | `npm run dev` | 🚀 Start development server with hot reload |
| **Build** | `npm run build` | 🏗️ Build optimized production bundle |
| **Start** | `npm run start` | ▶️ Start production server |
| **Lint** | `npm run lint` | 🔍 Run ESLint for code quality checks |
| **Lint Fix** | `npm run lint:fix` | 🔧 Fix ESLint issues automatically |
| **Type Check** | `npm run type-check` | 📝 Run TypeScript type checking |

### 🎯 Development Workflow

```bash
# Start development with hot reload
npm run dev

# Run linting and type checking
npm run lint && npm run type-check

# Build for production
npm run build

# Preview production build locally
npm run start
```

## 🎨 Customization

### 🔧 Site Configuration

Customize your portfolio by editing `src/config/siteConfig.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Portfolio Title",
  description: "Your portfolio description",
  url: "https://yoursite.com",
  // ... more configurations
}
```

**Available customizations:**
- 📝 **Site metadata** (title, description, keywords)
- 🎨 **Theme colors** and design tokens
- 🖋️ **Typography settings** and font configurations
- ✨ **Animation configurations** and timing
- 🔗 **Social media links** and contact information
- 🌐 **SEO settings** and meta tags

### 🌙 Theme System

The portfolio supports both light and dark modes with:

- **Automatic system preference detection**
- **Manual theme toggle**
- **Persistent theme selection**
- **Smooth theme transitions**
- **Custom color schemes**

### 🎭 Adding New Sections

1. Create a new component in `src/sections/`
2. Import and add it to your main page
3. Configure styling and animations
4. Update navigation if needed

**Example:**
```typescript
// src/sections/new-section.tsx
export function NewSection() {
  return (
    <section className="py-20">
      {/* Your content */}
    </section>
  );
}
```

## 📦 Deployment

### 🚀 Vercel (Recommended)

Deploy your portfolio to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/creane_portfolio)

**Manual Vercel deployment:**

1. **Push to GitHub:** Push your code to a GitHub repository
2. **Connect Vercel:** Import your repository on [Vercel](https://vercel.com)
3. **Deploy:** Vercel will automatically build and deploy your site
4. **Custom Domain:** Add your custom domain in Vercel settings

### 🌐 Other Deployment Options

The portfolio builds to static files and can be deployed anywhere:

| Platform | Command | Notes |
|----------|---------|-------|
| **Netlify** | `npm run build` | Drag & drop `out/` folder or connect via Git |
| **GitHub Pages** | `npm run build` | Use GitHub Actions for automatic deployment |
| **AWS S3** | `npm run build` | Upload `out/` folder to S3 bucket |
| **Firebase Hosting** | `npm run build` | Use Firebase CLI to deploy |

### 🔧 Build Configuration

```bash
# Build for production
npm run build

# The build output will be in the 'out' directory
# Ready for static hosting deployment
```

### 🌍 Environment Variables

For production deployment, set these environment variables:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
# Add other environment variables as needed
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### 🐛 Reporting Issues

- Use the [Issue Tracker](../../issues) to report bugs
- Include detailed reproduction steps
- Provide system information and screenshots when relevant

### 💡 Suggesting Enhancements

- Open an [Enhancement Request](../../issues/new?template=feature_request.md)
- Describe the feature and its benefits
- Include mockups or examples if applicable

### 🔧 Development Contribution

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Make** your changes following our coding standards
4. **Test** your changes thoroughly
5. **Commit** with descriptive messages: `git commit -m 'feat: add amazing feature'`
6. **Push** to your branch: `git push origin feature/amazing-feature`
7. **Open** a Pull Request

### � Development Guidelines

- Follow the existing code style and patterns
- Write descriptive commit messages
- Add comments for complex logic
- Test your changes across different screen sizes
- Ensure TypeScript types are properly defined
- Run `npm run lint` before committing

### 🎯 Areas for Contribution

- 🐛 Bug fixes and improvements
- 📱 Mobile responsiveness enhancements
- ♿ Accessibility improvements
- 🎨 New theme options
- 📝 Documentation updates
- 🔧 Performance optimizations

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for hosting and deployment
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for beautiful icons
- [Framer Motion](https://www.framer.com/motion/) for smooth animations

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Naseem's Portfolio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

<div align="center">

**[⬆ Back to Top](#creane-portfolio)**

Made with ❤️ by [Naseem Ansari](https://github.com/gitnaseem745)

[🌐 Live Demo](https://your-portfolio-demo.vercel.app) • [📧 Contact](mailto:mrnaseem745@example.com) • [🐦 Twitter](https://twitter.com/solaris_ui)

</div>
