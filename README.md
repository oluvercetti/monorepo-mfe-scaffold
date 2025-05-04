# Next.js Microfrontend Application

This is a monorepo microfrontend application built with Next.js 15, TypeScript, Tailwind CSS, and Module Federation. The application consists of multiple microfrontends that work together to create a cohesive user experience.

## Microfrontends

- **Host** (Port 3000): Main shell application that orchestrates all microfrontends
- **Tickets** (Port 3001): Ticket management system
- **Form Builder** (Port 3002): Dynamic form creation and management
- **Admin Settings** (Port 3003): Administrative controls and settings
- **Service Catalogue** (Port 3004): Service listing and management

## Technology Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- shadcn/ui
- Zod
- Module Federation
- Turborepo
- Zustand
- TanStack Query
- Axios

## Prerequisites

- Node.js 18.17 or later
- pnpm 8.15.0 or later

## Getting Started

1. Install pnpm if you haven't already:
   ```bash
   npm install -g pnpm
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Build the shared UI package:
   ```bash
   pnpm build:ui
   ```

4. Start all applications in development mode:
   ```bash
   pnpm dev
   ```

This will start all microfrontends on their respective ports:
- Host: http://localhost:3000
- Tickets: http://localhost:3001
- Form Builder: http://localhost:3002
- Admin Settings: http://localhost:3003
- Service Catalogue: http://localhost:3004

## Project Structure

```
.
├── apps/
│   ├── host/               # Main shell application
│   ├── tickets/           # Tickets microfrontend
│   ├── form-builder/      # Form Builder microfrontend
│   ├── admin-settings/    # Admin Settings microfrontend
│   └── service-catalogue/ # Service Catalogue microfrontend
├── packages/
│   ├── ui/               # Shared UI components
│   └── shared/           # Shared utilities, stores, and configurations
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

## Development

Each microfrontend is a standalone Next.js application that can be developed independently. The host application uses Module Federation to dynamically load these microfrontends at runtime.

To work on a specific microfrontend:

1. Navigate to the microfrontend directory:
   ```bash
   cd apps/[microfrontend-name]
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

## Common Commands

```bash
# Install dependencies
pnpm install

# Start development servers
pnpm dev

# Build all applications
pnpm build

# Build only UI package
pnpm build:ui

# Clean all build outputs and node_modules
pnpm clean

# Format code
pnpm format

# Run linting
pnpm lint
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

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

MIT
