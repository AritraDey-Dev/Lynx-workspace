# Stage 1: Build the application
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production image
FROM node:20-slim
WORKDIR /app
COPY --from=builder /app/package*.json ./
RUN npm install --production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/next-i18next.config.js ./next-i18next.config.js

EXPOSE 3000
CMD ["npm", "start"]
