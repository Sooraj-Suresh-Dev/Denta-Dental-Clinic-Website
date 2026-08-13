# Denta - Dental Clinic Website

A modern, responsive marketing website for a dental clinic built with React, TypeScript, and Tailwind CSS. The site showcases services, builds patient trust through testimonials, and enables appointment booking.

## Tech Stack

- **React 19** with TypeScript
- **Vite 8** for build tooling
- **Tailwind CSS 4** for styling
- **React Router DOM 7** for client-side routing
- **Lucide React** for icons

## Features

- 5 pages: Home, About, Services, Patient Stories, Contact
- Responsive design with mobile hamburger navigation
- Scroll reveal animations and animated counters
- Appointment booking form with validation
- Google Maps integration
- FAQ accordion section
- Dark theme with warm teal accents

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/      # Shared UI components (Nav, Footer, Layout)
├── pages/           # Page components (Home, About, Services, etc.)
├── hooks/           # Custom hooks (useReveal, useHeroEntrance, useCountUp)
├── imports/         # Static assets
├── App.tsx          # Root component with routes
├── main.tsx         # Entry point
└── index.css        # Global styles and theme
```

## Brand

- **Name:** Denta (Dental Studio)
- **Tagline:** "happy smiles always!"
- **Location:** Kochi, Kerala, India
- **Primary Color:** Teal (#00A896)

## License

Private project.
