FROM postgres:16-alpine
WORKDIR /app
COPY /backend/authService/auth.ts /app/auth.ts
ENTRYPOINT [ "npm", "run", "index.ts" ]
