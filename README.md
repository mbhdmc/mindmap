# Step Counter App

A modern step counter application built with React, Tailwind CSS, and React Router.

## Features

- **Modern React Application**: Built with React 19 and Vite for fast development
- **Responsive Design**: Styled with Tailwind CSS for a mobile-first, responsive layout
- **Client-Side Routing**: Uses React Router for seamless navigation between pages
- **Core Components**:
  - **Step Counting Engine**: Real-time step tracking with accurate counting
  - **Activity Data Storage**: Persistent storage of activity history
  - **User Profile & Goal Management**: Customizable fitness goals
  - **Activity Dashboard & Reporting**: Visual analytics and progress tracking
  - **Notification & Reminder System**: Smart reminders to stay motivated
  - **Third-Party Health Integration**: Ready for external health platform connections

## Tech Stack

- **React**: 19.2.0
- **React Router DOM**: 7.10.1
- **Tailwind CSS**: 4.1.17
- **Vite**: 7.2.4
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
│   ├── features/
│   │   ├── step-counter/          # Step Counting Engine
│   │   ├── activity-storage/      # Activity Data Storage
│   │   ├── user-profile/          # User Profile & Goal Management
│   │   ├── dashboard/             # Activity Dashboard
│   │   ├── notifications/         # Notification System
│   │   └── health-integration/    # Third-Party Health Integration
│   ├── components/
│   │   ├── Layout.jsx             # Main layout with navigation
│   │   └── ContactForm.jsx        # Contact form component
│   ├── pages/
│   │   ├── Home.jsx               # Home page with step counter
│   │   ├── About.jsx              # About page
│   │   ├── Services.jsx           # Features page
│   │   ├── Dashboard.jsx          # Activity dashboard page
│   │   └── Contact.jsx            # Contact page
│   ├── App.jsx                    # Main app component with routing
│   ├── main.jsx                   # App entry point
│   └── index.css                  # Global styles (Tailwind directives)
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                   # Project dependencies
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS configuration
└── postcss.config.js              # PostCSS configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Architecture

### Core Components

1. **Step Counting Engine** - Handles step detection and tracking
2. **Activity Data Storage** - Manages persistent storage of activity data
3. **User Profile & Goal Management** - Manages user preferences and fitness goals
4. **Activity Dashboard & Reporting** - Provides visual analytics and insights
5. **Notification & Reminder System** - Sends smart notifications for motivation
6. **Third-Party Health Integration** - Integration framework for external platforms

## License

All rights reserved © 2024 Step Counter App
