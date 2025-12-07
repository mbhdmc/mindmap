# Book Club Landing Page

A professional book club landing page built with React, Tailwind CSS, and React Router.

## Features

- **Modern React Application**: Built with React 19 and Vite for fast development
- **Responsive Design**: Styled with Tailwind CSS for a mobile-first, responsive layout
- **Client-Side Routing**: Uses React Router for seamless navigation between pages
- **Multiple Pages**:
  - Home: Hero section with club highlights
  - About: Club mission and community
  - Services: Book club offerings and membership
  - Contact: Contact information and inquiry form

## Tech Stack

- **React**: 19.2.0
- **React Router DOM**: 7.1.3
- **Tailwind CSS**: 4.1.0
- **Vite**: 7.2.6
- **Node.js**: v20+

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm (v10 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mbhdmc/mindmap.git
cd mindmap
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

### Building for Production

Build the project:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
mindmap/
├── src/
│   ├── components/
│   │   └── Layout.jsx         # Main layout with navigation and footer
│   ├── pages/
│   │   ├── Home.jsx           # Home page
│   │   ├── About.jsx          # About page
│   │   ├── Services.jsx       # Services page
│   │   └── Contact.jsx        # Contact page
│   ├── App.jsx                # Main app component with routing
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles (Tailwind directives)
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json               # Project dependencies
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── postcss.config.js          # PostCSS configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

All rights reserved © 2024 Book Club Community
