# Invisible Platform

## Overview

This is a full-stack web application built with React and Express.js that provides a comprehensive data platform interface. The application features a modern dashboard design with multiple specialized modules including Platform Overview, Data Environment, Process Builder, Agentic Engine, Expert Marketplace, and Model Evaluations.

## System Architecture

The application follows a client-server architecture with clear separation between frontend and backend components:

- **Frontend**: React-based SPA with TypeScript, using modern UI components and routing
- **Backend**: Express.js server with API endpoints and middleware
- **Database**: PostgreSQL with Drizzle ORM (configured but not actively used)
- **Authentication**: Auth0 integration (currently disabled for testing)
- **Deployment**: Configured for Replit with autoscale deployment

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Library**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **State Management**: TanStack Query for server state
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Structure**: RESTful endpoints under `/api` prefix
- **Middleware**: Request logging, JSON parsing, error handling
- **Development**: Hot reload with tsx and Vite integration

### Navigation Structure
The application features a sidebar navigation with the following main sections:
1. **Platform** - Main dashboard and system overview
2. **Data Environment** - Embedded dashboard for data management
3. **Process Builder** - External iframe integration for workflow design
4. **Agentic Engine** - AI agent management and team coordination
5. **Expert Marketplace** - Human expert task management
6. **Model Evaluations** - AI model training and testing interface

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests with appropriate middleware
3. **Response Handling**: JSON responses with error handling and logging
4. **State Management**: Client-side state managed through React Query cache
5. **UI Updates**: Components reactively update based on query state changes

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, TypeScript
- **UI Components**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, Class Variance Authority
- **State Management**: TanStack React Query
- **Authentication**: Auth0 Next.js SDK (currently disabled)
- **Backend**: Express.js, tsx for TypeScript execution

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **Database**: Drizzle ORM with PostgreSQL adapter
- **Utilities**: Date-fns, clsx, nanoid

### External Integrations
- **Data Environment**: Embedded iframe to `https://demos.inv.tech/acrisure`
- **Process Builder**: Embedded iframe to external Replit application
- **Replit Services**: Runtime error overlay, cartographer plugin

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

- **Environment**: Node.js 20 with PostgreSQL 16 module
- **Development**: `npm run dev` starts the development server with hot reload
- **Production Build**: `npm run build` creates optimized client and server bundles
- **Production Start**: `npm run start` runs the production server
- **Port Configuration**: Internal port 5000 mapped to external port 80
- **Autoscale**: Configured for automatic scaling based on demand

### Build Process
1. **Client Build**: Vite builds React app to `dist/public`
2. **Server Build**: esbuild bundles Express server to `dist/index.js`
3. **Static Assets**: Client build serves static files in production
4. **Environment Variables**: Database URL and Auth0 configuration loaded from environment

## Changelog
- June 13, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.