FROM base AS builder

# Copy admin-settings app files
COPY apps/admin-settings ./apps/admin-settings

# Build admin-settings app
RUN pnpm --filter admin-settings build

# Production image
FROM node:18-alpine AS runner
WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/apps/admin-settings/package.json .
COPY --from=builder /app/apps/admin-settings/next.config.js .
COPY --from=builder /app/apps/admin-settings/.next ./.next
COPY --from=builder /app/apps/admin-settings/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8080
ENV NEXT_TELEMETRY_DISABLED=1

# Expose port
EXPOSE 8080

# Start the application
CMD ["node_modules/.bin/next", "start"] 