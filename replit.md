# Invisible Platform

## Overview

The Invisible Platform is a comprehensive data and AI management system built with a modern full-stack architecture, featuring specialized capabilities for wealth management and investment portfolio operations. It provides a unified interface for managing data environments, building processes, operating AI agents, connecting with experts, and evaluating AI models. The platform is designed to streamline complex data workflows and AI operations through an intuitive web interface, with particular emphasis on document processing, data extraction, and investment analytics for institutional clients like Harvard Wealth Management.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Authentication**: Auth0 integration (currently disabled for testing)
- **API Pattern**: RESTful API endpoints under `/api` prefix

### Development Environment
- **Hot Reload**: Vite middleware integration with Express for seamless development
- **TypeScript**: Strict type checking across the entire codebase
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`)

## Key Components

### 1. Platform Dashboard
Central hub displaying system overview with wealth management focus, featuring portfolio value metrics, active investment managers, document processing statistics, and system health monitoring tailored for institutional investment operations.

### 2. Harvard Wealth Management Demo
Specialized demonstration interface showcasing:
- Natural language query processing for investment analysis
- Automated document extraction from manager reports
- Portfolio performance visualization and metrics
- Real-time processing of unstructured investment documents
- Manager performance tracking and comparison
- ESG compliance monitoring and reporting
- Asset class distribution analytics

### 3. Data Environment
Full-screen iframe integration with external data dashboard (https://demos.inv.tech/acrisure) for comprehensive data management.

### 4. Process Builder
Full-screen iframe integration with external process builder (https://builder-next-gen-insurance-generic-1-vinceguan1.replit.app/dashboard) for workflow design and orchestration.

### 5. Agentic Engine
Multi-tabbed interface for managing AI agent teams, including:
- Engine overview and team management
- Agent performance tracking
- Task assignment and monitoring
- Success rate analytics

### 6. Expert Marketplace
Human-in-the-loop system featuring:
- Task queue management
- Expert assignment and tracking
- Performance metrics and leaderboards
- Payment processing integration

### 7. Model Evaluations
Comprehensive AI model management system with:
- Training dataset management
- Model versioning and deployment
- Testing and validation workflows
- Performance metrics and analytics

## Data Flow

### Authentication Flow
- Auth0 integration for secure user authentication (temporarily disabled)
- JWT token-based session management
- Protected route middleware (currently bypassed for testing)

### API Communication
- Centralized API client with error handling and retry logic
- Automatic request/response logging for debugging
- Credential-based requests for session management

### State Management
- Server state managed through TanStack Query
- Optimistic updates and background refetching
- Centralized error handling and loading states

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Query
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Forms**: React Hook Form with Zod validation resolvers
- **Date Handling**: date-fns for date manipulation
- **Routing**: Wouter for lightweight client-side routing

### Development Dependencies
- **Build Tools**: Vite, esbuild for server bundling
- **TypeScript**: Full type safety across frontend and backend
- **CSS Processing**: PostCSS, Autoprefixer

### External Services
- **Auth0**: Authentication and user management
- **PostgreSQL**: Primary database (configured but not actively used)
- **External Dashboards**: Integrated via iframe for specialized functionality

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations and schema management

### Environment Configuration
- **Development**: Hot reload with Vite middleware
- **Production**: Static asset serving with Express
- **Database**: Environment-based connection strings
- **Authentication**: Auth0 configuration via environment variables

### Hosting
- **Platform**: Replit with autoscale deployment target
- **Port Configuration**: Internal port 5000, external port 80
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`

## Changelog
- June 13, 2025: Initial setup
- June 13, 2025: Integrated Harvard Wealth Management demo showcasing:
  - Portfolio-focused dashboard with investment metrics
  - Natural language query interface for investment analysis
  - Document processing capabilities for manager reports
  - Real-time data extraction from unstructured documents
  - Manager performance tracking and ESG compliance monitoring
  - Interactive demonstration of ontology-driven data visualization

## User Preferences
Preferred communication style: Simple, everyday language.