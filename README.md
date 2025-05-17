# repo Frontend Monorepo

This is a monorepo for the repo frontend applications, built with Next.js, TypeScript, Tailwind CSS, and Module Federation. The project uses a microfrontend architecture to create a cohesive user experience across multiple applications.

## Table of Contents

- [Overview](#overview)
- [Applications](#applications)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Testing](#testing)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## Overview

This monorepo contains multiple microfrontends that can be developed independently but work together seamlessly. It utilizes Turborepo for efficient build and development processes, along with pnpm for package management.

## Applications

The monorepo consists of the following applications:

- **Host** (Port 3000): The main shell application that orchestrates all microfrontends
- **Tickets** (Port 3001): Ticket management system
- **Admin Settings** (Port 3003): Administrative controls and settings

## Technology Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Package Manager**: pnpm
- **Build System**: Turborepo
- **Microfrontend Architecture**: Module Federation
- **State Management**: Zustand
- **API Management**: TanStack Query, Axios
- **Validation**: Zod
- **Testing**: Jest, React Testing Library
- **Containerization**: Docker
- **CI/CD**: Google Cloud Build

## Project Structure

```
.
├── apps/                   # Application directories
│   ├── host/               # Main shell application
│   ├── tickets/            # Tickets microfrontend
│   └── admin-settings/     # Admin Settings microfrontend
│
├── packages/               # Shared libraries and components
│   ├── ui/                 # Shared UI components
│   └── shared/             # Shared utilities, hooks, and configurations
│
├── __tests__/              # Root-level test files
├── __mocks__/              # Global mocks for testing
├── babel.config.js         # Babel configuration for testing
├── jest.config.js          # Base Jest configuration
├── jest.setup.js           # Jest setup file
├── package.json            # Root package.json
├── pnpm-workspace.yaml     # pnpm workspace configuration
├── turbo.json              # Turborepo configuration
├── tsconfig.json           # Base TypeScript configuration
├── cloudbuild.yaml         # CI/CD configuration for Google Cloud Build
└── Dockerfile.base         # Base Docker image configuration
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm 8.15.0 or later

### Installation

1. Install pnpm if you haven't already:

   ```bash
   npm install -g pnpm
   ```

2. Clone the repository:

   ```bash
   git clone <repository-url>
   cd repo-frontend-monorepo
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Build the shared UI package:

   ```bash
   pnpm build:ui
   ```

5. Set up environment variables:

   Create a `.env` file in each application directory with the necessary environment variables:

   **Host Application (.env in apps/host)**

   ```
   TICKETS_URL=http://localhost:3001
   ADMIN_SETTINGS_URL=http://localhost:3003
   ```

   **Tickets Application (.env in apps/tickets)**

   ```
   ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3003
   ```

   **Admin Settings Application (.env in apps/admin-settings)**

   ```
   ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
   ```

   **Shared Environment Variables (for all apps)**

   ```
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

6. Start all applications in development mode:
   ```bash
   pnpm dev
   ```

This will start all microfrontends on their respective ports:

- Host: http://localhost:3000
- Tickets: http://localhost:3001
- Admin Settings: http://localhost:3003

## Development Workflow

### Working on a Specific Application

Each microfrontend is a standalone Next.js application that can be developed independently. The host application uses Module Federation to dynamically load the microfrontends at runtime.

To work on a specific microfrontend:

1. Navigate to the microfrontend directory:

   ```bash
   cd apps/[microfrontend-name]
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

### Common Commands

```bash
# Install dependencies
pnpm install

# Start development servers for all applications
pnpm dev

# Build all applications
pnpm build

# Build only the UI package
pnpm build:ui

# Start production servers
pnpm start

# Run linting
pnpm lint

# Clean all build outputs and node_modules
pnpm clean

# Format code
pnpm format

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate test coverage report
pnpm test:coverage
```

## Testing

The project uses Jest and React Testing Library for testing. Each application and package has its own tests in an `__tests__` directory.

### Testing Structure

- **Root-level tests**: Basic tests for the overall project
- **App-specific tests**: Each app has its own test configuration and tests
- **Package tests**: Shared packages have their own tests

### Running Tests

To run all tests:

```bash
pnpm test
```

To run tests for a specific application or package:

```bash
cd apps/[app-name]
# or
cd packages/[package-name]
pnpm test
```

### Test Coverage

To generate a test coverage report:

```bash
pnpm test:coverage
```

### Test Configuration

- **babel.config.js**: Babel configuration for transforming JSX and TypeScript in tests
- **jest.config.js**: Base Jest configuration with TypeScript and React support
- **jest.setup.js**: Setup file for global test configurations and mocks
- \***\*mocks**/\*\*: Directory containing mock files for CSS, images, and other assets

Each application has its own Jest configuration that extends the base configuration:

```javascript
// apps/[app-name]/jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  // Custom configuration for the app
  // ...
};

module.exports = createJestConfig(customJestConfig);
```

## Building for Production

To build all applications:

```bash
pnpm build
```

To build a specific application:

```bash
cd apps/[app-name]
pnpm build
```

## Deployment

The project is set up to deploy to Google Cloud Run using Google Cloud Build. The deployment process is defined in the `cloudbuild.yaml` file, which:

1. Builds a base Docker image
2. Builds individual Docker images for each application
3. Pushes the images to Google Container Registry
4. Deploys the applications to Google Cloud Run

To trigger a deployment, push to the main branch or create a pull request.

## Troubleshooting

If you encounter any issues:

1. Clear all dependencies and rebuild:

   ```bash
   pnpm clean
   pnpm install
   pnpm build:ui
   pnpm dev
   ```

2. Make sure you're using the correct Node.js and pnpm versions:

   ```bash
   node -v  # Should be >=18.17.0
   pnpm -v  # Should be >=8.15.0
   ```

3. Common issues:
   - **Module Federation errors**: Make sure all applications are running or the remote URLs are correctly configured
   - **UI package changes not reflected**: Rebuild the UI package with `pnpm build:ui`
   - **TypeScript errors**: Check if you need to update type definitions
   - **Environment variable issues**: Ensure all required environment variables are correctly set in the `.env` files for each application
   - **Connection issues between microfrontends**: Verify that the `TICKETS_URL` and `ADMIN_SETTINGS_URL` environment variables in the host application match the actual running ports of those services
   - **Test failures**: Ensure you have all necessary test dependencies and that your Babel configuration is set up correctly

## Contributing

1. Create a new branch for your feature or bugfix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes

3. Run tests and ensure linting passes:

   ```bash
   pnpm lint
   ```

4. Commit your changes following conventional commit format:

   ```bash
   git commit -m "feat: add new feature"
   ```

5. Push your branch and submit a pull request:

   ```bash
   git push origin feature/your-feature-name
   ```

6. Follow the code review process

---

© Bazaratech.
