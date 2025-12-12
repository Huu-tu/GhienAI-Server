# ==========================
# Stage 1: Build TypeScript
# ==========================
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json & yarn.lock
COPY package.json yarn.lock ./

# Cài dependencies
RUN yarn install --frozen-lockfile

# Copy toàn bộ source code
COPY . .

# Build TypeScript
RUN yarn build

# ==========================
# Stage 2: Run backend
# ==========================
FROM node:20-alpine

WORKDIR /app

# Copy node_modules từ builder
COPY --from=builder /app/node_modules ./node_modules

# Copy code đã build
COPY --from=builder /app/dist ./dist

# Copy các file cần thiết khác (package.json, .env.example,... nếu muốn)
COPY --from=builder /app/package.json ./package.json

# Set env file (nếu bạn muốn map .env từ host thì dùng volume)
# ENV NODE_ENV=production

# Expose port backend
EXPOSE 3001

# Command chạy backend
CMD ["yarn", "dev"]
