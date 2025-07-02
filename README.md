# Creane Portfolio

A minimal and modern portfolio built with Next.js 14+, TypeScript, and TailwindCSS. Features a clean, responsive design with light/dark theme support and smooth animations.

## ✨ Features

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons
- **next-themes** for seamless theme switching
- **ESLint + Prettier** for code quality
- **Vercel-ready** deployment configuration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd creane_portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
├── sections/            # Page sections and larger components
├── layouts/             # Layout components
└── config/              # Configuration files (siteConfig.ts)
```

## 🛠️ Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Site Configuration

Edit `src/config/siteConfig.ts` to customize:

- Site metadata
- Theme colors
- Typography settings
- Animation configurations
- Social links

### Theme Colors

The theme system supports both light and dark modes with customizable colors defined in the site configuration.

## 📦 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/your-username/creane_portfolio)

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Deploy with a single click

### Other Platforms

The project builds to static files and can be deployed on any static hosting platform:

```bash
npm run build
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
