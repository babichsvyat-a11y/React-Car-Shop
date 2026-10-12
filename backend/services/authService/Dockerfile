# Stage 1: Builder
FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm ci

# Копіюємо схему Prisma та генеруємо клієнт
COPY ./prisma ./prisma
RUN npx prisma generate

# Копіюємо код та збираємо TypeScript
COPY . ./
COPY shared ./shared
RUN npx tsc --project tsconfig.json

# Stage 2: Runner
FROM node:24-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma/client ./node_modules/@prisma/client
COPY --from=builder /app/dist/ ./
COPY --from=builder /app/dist/shared ./dist/shared

EXPOSE 5081

CMD ["node", "dist/server.js"]