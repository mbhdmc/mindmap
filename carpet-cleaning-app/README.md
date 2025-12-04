# Carpet Cleaning Landing Page

A professional carpet cleaning landing page built with React, Tailwind CSS, and Vite.

## Features

- **Modern React Application**: Built with React 19 and Vite for optimal performance
- **Responsive Design**: Fully responsive design using Tailwind CSS
- **Client-side Routing**: React Router for seamless navigation between pages
- **Four Main Pages**:
  - **Home**: Hero section with call-to-action and feature highlights
  - **Services**: Detailed overview of carpet cleaning services offered
  - **About**: Company story, mission, values, and why choose us
  - **Contact**: Contact form and business information

## Tech Stack

- **React** 19.2.0 - UI library
- **React Router DOM** 7.x - Client-side routing
- **Tailwind CSS** 4.x - Utility-first CSS framework
- **Vite** 7.2.x - Build tool and dev server
- **Node.js** - Runtime environment

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Navigate to the project directory:
```bash
cd carpet-cleaning-app
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Build for production:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
carpet-cleaning-app/
├── src/
│   ├── components/
│   │   └── Navigation.jsx    # Main navigation component
│   ├── pages/
│   │   ├── Home.jsx          # Home page
│   │   ├── Services.jsx      # Services page
│   │   ├── About.jsx         # About page
│   │   └── Contact.jsx       # Contact page
│   ├── App.jsx               # Main App component with routing
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles with Tailwind directives
├── public/                   # Static assets
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Project dependencies and scripts
```

## Pages Overview

### Home
- Hero section with company tagline
- Call-to-action button
- Three feature cards (Deep Cleaning, Fast Drying, Eco-Friendly)

### Services
- Residential Carpet Cleaning
- Commercial Carpet Cleaning
- Stain Removal
- Upholstery Cleaning

### About
- Company story and background
- Mission statement
- Core values
- Why choose us section

### Contact
- Contact form with fields for name, email, phone, and message
- Contact information (phone, email, address, business hours)
- Emergency service information

## Customization

### Colors
The color scheme uses Tailwind's blue color palette. To customize:
- Edit `tailwind.config.js` to extend or modify the theme
- Update component classes in the page files

### Content
- Edit page components in `src/pages/` to update content
- Modify the Navigation component to add/remove pages
- Update contact information in `Contact.jsx`

## License

This project is part of the Vibe Coder generated scaffold.
