# Portfolio Website

A modern, interactive portfolio website showcasing my work, skills, and experience as a Software Engineer II. Built with React, TypeScript, and Framer Motion for smooth animations and an engaging user experience.

## 🚀 Live Demo

[Add your live demo link here]

## ✨ Features

- **Animated Skills Visualization**: Floating skill chips with physics-based animations, color-coded by category (Backend, Frontend, Database, Cloud, Tools)
- **Dynamic Performance Metrics**: Automatically calculates and displays percentage improvements from raw data with animated progress bars
- **Light/Dark Theme**: Seamless theme switching with custom scrollbar styling and persistent theme preference
- **Experience Timeline**: Visual timeline layout with integrated project cards showing work history with metrics
- **Responsive Design**: Mobile-first approach optimized for all screen sizes
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter card support
- **Type-Safe Architecture**: Fully typed with TypeScript for better developer experience
- **Smooth Animations**: Scroll-triggered animations using Framer Motion

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── assets/
│   │   └── info.json          # Centralized portfolio data
│   ├── component/
│   │   ├── sections/          # Page sections (Hero, Skills, Experience, etc.)
│   │   └── shared/            # Reusable components (ThemeToggle, Section, etc.)
│   ├── types/                 # TypeScript type definitions
│   ├── utils/                 # Utility functions (metrics, formatting)
│   ├── App.tsx                # Main application component
│   └── main.tsx               # Application entry point
├── public/                    # Static assets (resume.pdf, etc.)
├── vite.config.ts            # Vite configuration
└── package.json              # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Start the development server:
```bash
yarn dev
# or
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📝 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build locally
- `yarn lint` - Run ESLint
- `yarn deploy` - Build and deploy to GitHub Pages

## 🎨 Customization

### Updating Portfolio Data

All portfolio content is managed in `src/assets/info.json`. Update this file to change:

- Personal information (name, headline, contact)
- Skills and categories
- Work experience and projects
- Education details
- Certifications and awards

### Styling

- Colors and themes: Modify Tailwind classes in components
- Animations: Adjust Framer Motion variants in component files
- Layout: Update component structure in `src/component/sections/`

### Repository Name

Update the `REPO_NAME` constant in `vite.config.ts` to match your GitHub repository name for proper GitHub Pages deployment.

## 🚢 Deployment

### GitHub Pages

1. Update `REPO_NAME` in `vite.config.ts` to match your repository name
2. Enable GitHub Pages in repository settings (Settings → Pages → Source: `gh-pages` branch)
3. Deploy:
```bash
yarn deploy
# or
npm run deploy
```

Your site will be available at: `https://username.github.io/repository-name/`

For detailed deployment instructions, see [DEPLOY.md](./DEPLOY.md)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- **Email**: krushna.jadhav.work@gmail.com
- **LinkedIn**: [linkedin.com/in/krushna-j](https://linkedin.com/in/krushna-j)
- **Medium**: [medium.com/@krushna-j](https://medium.com/@krushna-j)

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
