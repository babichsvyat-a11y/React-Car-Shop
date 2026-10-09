FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm ci

COPY ./prisma ./prisma
RUN npx prisma generate --schema=./prisma/schema.prisma

COPY . ./
COPY shared ./shared
RUN npx tsc --project tsconfig.json

FROM node:24-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma/client ./node_modules/@prisma/client
COPY --from=builder /app/dist/ ./dist/
COPY --from=builder /app/dist/shared ./dist/shared

EXPOSE 5080

CMD ["node", "dist/server.js"]