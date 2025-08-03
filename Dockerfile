# Stage 1: Build Stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock* ./

# Cài tất cả dependencies (bao gồm devDeps để build TypeScript)
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build TypeScript => dist/
RUN yarn build

# Stage 2: Production Image
FROM node:18-alpine AS production

WORKDIR /app

# Copy only dist/, package.json, yarn.lock
COPY --from=builder /app/dist ./dist
COPY package.json yarn.lock* ./

# Install only production deps
RUN yarn install --frozen-lockfile --production && yarn cache clean

# Tạo user không phải root
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    mkdir -p /app/dist/publics/img && \
    chown -R nodejs:nodejs /app

USER nodejs

# Cấu hình
ENV NODE_ENV=production
ENV PORT=4000

EXPOSE 4000

# Health check (nếu có route /health)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:4000/health', res => process.exit(res.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"

# Start app
CMD ["yarn", "start"]
