FROM base AS builder

# Copy host app files
COPY apps/host ./apps/host

# Build host app
RUN pnpm --filter host build

# Production image
FROM node:18-alpine AS runner
WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/apps/host/package.json .
COPY --from=builder /app/apps/host/next.config.js .
COPY --from=builder /app/apps/host/.next ./.next
COPY --from=builder /app/apps/host/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8080
ENV NEXT_TELEMETRY_DISABLED=1

# Expose port
EXPOSE 8080

# Start the application
CMD ["node_modules/.bin/next", "start"] 