# Splash Page Builder

A comprehensive tool for creating and managing splash pages (landing pages) built with React and Tailwind CSS.

## Architecture Overview

The Splash Page Builder is organized into a modular architecture with 8 core components, each handling a specific aspect of splash page creation and management.

## Folder Structure

```
splash-builder/
├── components/          # Core feature components
│   ├── page-editor/     # Visual page editor with drag-and-drop
│   ├── template-library/ # Pre-built template browsing
│   ├── cms/             # Content management system
│   ├── form-builder/    # Form creation and customization
│   ├── publishing/      # Publishing and domain management
│   ├── analytics/       # Performance metrics and analytics
│   ├── integration-manager/ # Third-party integrations
│   └── responsive-tools/    # Responsive design preview tools
├── pages/               # Main application pages
│   └── SplashBuilder.jsx    # Main splash builder interface
├── services/            # Business logic and API services (future)
├── utils/               # Utility functions and helpers (future)
└── index.js             # Module exports
```

## Core Components

### 1. Page Editor
**Location:** `components/page-editor/PageEditor.jsx`

Visual editor for creating and customizing splash pages with drag-and-drop functionality.

**Features:**
- Canvas area for page design
- Component drag-and-drop (placeholder)
- Real-time preview

### 2. Template Library
**Location:** `components/template-library/TemplateLibrary.jsx`

Browse and select from pre-built splash page templates.

**Features:**
- Template browsing
- Category organization
- Template preview

### 3. Content Management System
**Location:** `components/cms/ContentManagement.jsx`

Manage text, images, videos, and other content assets.

**Features:**
- Asset management
- File type categorization
- Content editing interface

### 4. Form Builder
**Location:** `components/form-builder/FormBuilder.jsx`

Create and customize forms for lead capture and user input.

**Features:**
- Form field management
- Field type support (text, email, textarea)
- Form preview
- Required field validation

### 5. Publishing & Domain Management
**Location:** `components/publishing/PublishingManager.jsx`

Configure publishing settings and manage custom domains.

**Features:**
- Publishing status tracking
- Domain configuration
- Custom domain setup

### 6. Analytics & Reporting
**Location:** `components/analytics/Analytics.jsx`

View page performance metrics and visitor analytics.

**Features:**
- Visitor tracking
- Conversion metrics
- Performance charts
- Time-on-page analytics

### 7. Integration Manager
**Location:** `components/integration-manager/IntegrationManager.jsx`

Connect with third-party services and APIs.

**Features:**
- Integration library
- Connection status
- Service configuration

**Supported Integrations:**
- Email marketing (Mailchimp)
- Analytics (Google Analytics)
- Payment processing (Stripe)
- Automation (Zapier)

### 8. Responsive Design Tools
**Location:** `components/responsive-tools/ResponsiveTools.jsx`

Preview and optimize splash pages across different devices.

**Features:**
- Multi-device preview (Desktop, Tablet, Mobile)
- Responsive breakpoint testing
- Device-specific optimization

## Main Application

### SplashBuilder Page
**Location:** `pages/SplashBuilder.jsx`

The main application interface that orchestrates all core components through a tabbed navigation system.

**Features:**
- Tab-based navigation
- Component switching
- Unified interface

## Integration

The Splash Builder is integrated into the main application through React Router:

```jsx
import { SplashBuilder } from './splash-builder';

// In App.jsx
<Route path="/splash-builder" element={<SplashBuilder />} />
```

## Tech Stack

- **React 19.2.0** - Component framework
- **Tailwind CSS 4.1.17** - Styling
- **React Router DOM 7.10.1** - Routing
- **Vite 7.2.4** - Build tool

## Development Status

This is the initial scaffolding for the Splash Page Builder. Each component provides a functional UI placeholder demonstrating the architecture and user flow. Future development will include:

- Backend API integration
- Database persistence
- Real drag-and-drop functionality
- Template creation and editing
- Live publishing capabilities
- Real-time analytics integration
- Advanced form validation
- Domain DNS configuration

## Usage

Access the Splash Builder through the navigation menu or directly at `/splash-builder` route.

Each core component is accessible through the tab navigation in the main interface.

## Contributing

When extending the Splash Builder:

1. Keep components modular and self-contained
2. Follow the existing folder structure
3. Add new services to the `services/` directory
4. Add utilities to the `utils/` directory
5. Export new components in `index.js`
6. Maintain consistent styling with Tailwind CSS
7. Follow React best practices and hooks patterns
