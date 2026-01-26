# Portfolio Website v1

A modern, responsive full-stack developer portfolio website built with React and Vite. This project showcases a professional portfolio with smooth animations, scroll-based reveals, and a modern dark-themed design.

## Overview

This is a single-page application (SPA) portfolio website designed to display professional projects, skills, services, and contact information. The site features:

- **Modern Design**: Dark-themed UI with a primary accent color (#8DFF69)
- **Responsive Layout**: Fully responsive design that works seamlessly across all devices
- **Smooth Animations**: Fade-in and scroll-reveal animations for engaging user experience
- **Component-Based Architecture**: Modular, reusable components built with React
- **Fast Performance**: Optimized build with Vite for quick load times and HMR during development

## Tech Stack

### Frontend
- **React 19.2.0**: Modern UI library with hooks
- **Vite 7.2.4**: Next-generation build tool with HMR
- **Tailwind CSS 4.1.18**: Utility-first CSS framework
- **Lucide React**: Beautiful, lightweight icon library
- **React Icons**: Popular icon sets (Simple Icons included)

### Development Tools
- **ESLint 9.39.1**: Code quality and consistency
- **@vitejs/plugin-react**: React Fast Refresh support
- **@tailwindcss/vite**: Tailwind CSS Vite integration

## Project Structure

```
src/
├── components/
│   ├── animations/
│   │   ├── FadeIn.jsx          # Fade-in animation component
│   │   └── ScrollReveal.jsx    # Scroll-triggered reveal animations
│   ├── backgrounds/
│   │   └── RadialGradientBackground.jsx  # Gradient background effects
│   ├── layout/
│   │   ├── Navbar.jsx          # Navigation bar component
│   │   └── Footer.jsx          # Footer component
│   ├── sections/
│   │   ├── Hero.jsx            # Hero/landing section
│   │   ├── About.jsx           # About section
│   │   ├── Skills.jsx          # Skills showcase
│   │   ├── Projects.jsx        # Portfolio projects
│   │   ├── Services.jsx        # Services offered
│   │   └── Contact.jsx         # Contact section
│   └── ui/
│       ├── Card.jsx            # Reusable card component
│       └── ProjectCard.jsx     # Project display card
├── data/
│   ├── projects.js             # Portfolio projects data
│   ├── services.js             # Services offerings data
│   ├── skills.js               # Technical skills data
│   └── testimonials.js         # Client testimonials
├── hooks/
│   ├── useScrollReveal.js      # Intersection Observer for scroll reveals
│   └── useScrollSpy.js         # Scroll position tracking
├── utils/
│   └── constant.js             # Constants and configuration
├── App.jsx                     # Main application component
├── main.jsx                    # React entry point
└── index.css                   # Global styles with Tailwind
```

## Key Features

### 1. **Responsive Design**
- Mobile-first approach using Tailwind CSS
- Adapts perfectly from mobile to desktop screens
- Grid-based layout system for flexible content arrangement

### 2. **Smooth Animations**
- **FadeIn Component**: Smooth fade-in effects on page load
- **ScrollReveal Hook**: Intersection Observer-based animations triggered on scroll
- **Custom Easing**: Staggered animations for visual depth

### 3. **Data-Driven Content**
- Projects, skills, and services managed in separate data files
- Easy to update and maintain portfolio content
- Structured data for dynamic rendering

### 4. **Custom Hooks**
- `useScrollReveal`: Detects when elements enter viewport and triggers animations
- `useScrollSpy`: Tracks scroll position for active navigation highlighting

### 5. **Icon Integration**
- Lucide React for custom, lightweight icons
- React Icons for extensive icon libraries (Material, Font Awesome, Simple Icons, etc.)

### 6. **Tailwind CSS Customization**
- Custom theme colors (primary: #8DFF69)
- Custom breakpoint (3xl: 1920px)
- Custom font family (Urbanist)
- Global styles for consistent appearance

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfoli-website-v1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173` with hot module replacement enabled.

## Available Scripts

- **`npm run dev`**: Start development server with HMR
- **`npm run build`**: Create optimized production build
- **`npm run preview`**: Preview production build locally
- **`npm run lint`**: Run ESLint to check code quality

## Customization

### Update Personal Information
Edit [src/utils/constant.js](src/utils/constant.js) to update:
- Name and title
- Location
- Contact information

### Add Projects
Update [src/data/projects.js](src/data/projects.js) with your portfolio projects:
```javascript
{
    id: 1,
    title: "Project Name",
    description: "Project description",
    image: "/projects/image.png",
    category: "Category",
    technologies: ["React", "Node.js"],
    metrics: "Performance metrics",
    githubUrl: "github-link",
    demoUrl: "demo-link"
}
```

### Update Skills
Edit [src/data/skills.js](src/data/skills.js) to add your technical skills with proficiency levels and experience.

### Update Services
Modify [src/data/services.js](src/data/services.js) to showcase your services.

### Customize Styling
- **Colors**: Edit theme colors in [src/index.css](src/index.css)
- **Tailwind Config**: Modify Tailwind settings via CSS custom properties in [src/index.css](src/index.css)
- **Component Styles**: Each component uses Tailwind utility classes for easy customization

## Component Details

### Sections
- **Hero**: Eye-catching landing section with call-to-action
- **About**: Personal background and professional summary
- **Skills**: Technical expertise with proficiency levels
- **Projects**: Portfolio showcase with detailed project cards
- **Services**: Services offered to clients/employers
- **Contact**: Contact form and social links

### Animations
- Fade-in effects on mount
- Scroll-reveal animations for section content
- Smooth scroll behavior throughout the site
- Staggered animations for visual interest

## Browser Support

Works on all modern browsers that support:
- ES6+ JavaScript
- CSS Grid and Flexbox
- Intersection Observer API

## Performance Optimizations

- **Vite**: Lightning-fast development and production builds
- **Code Splitting**: Automatic code splitting by Vite
- **Tree Shaking**: Unused code is removed in production
- **Image Optimization**: Static assets in public folder
- **Minimal Dependencies**: Lean dependency tree for faster load times

## Deployment

### Build for Production
```bash
npm run build
```

Output goes to the `dist` folder, ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

### Environment Setup
The project is configured to work out-of-the-box with no environment variables required.

## Future Enhancements

Potential features for future versions:
- TypeScript migration for type safety
- Dark/light theme toggle
- Multi-language support
- CMS integration for content management
- Animation micro-interactions
- Performance monitoring
- SEO optimization

## Code Quality

- **ESLint**: Configured for React code quality
- **Consistent Formatting**: Unified code style
- **Component Reusability**: DRY principles applied
- **Semantic HTML**: Accessible, meaningful markup

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please open an issue in the repository.

---

**Built with ❤️ using React and Vite**
