# Auth & User Microservice (`authService`)

Authentication and user management microservice built with **GraphQL Yoga**, **Express**, **Argon2**, **JSON Web Tokens (JWT)**, **Prisma ORM**, and **PostgreSQL**. Handles secure user registration, authentication, token refresh flows, password hashing, and user profile operations for the platform.

## 🚀 Key Features

- **GraphQL API:** Fully typed schema-first GraphQL API powered by `graphql-yoga` and `@graphql-tools`.
- **Secure Password Hashing:** Modern, secure password encryption utilizing **Argon2**.
- **JWT Authentication:** Issuance and verification of Access Tokens and Refresh Tokens.
- **Token Storage & Caching:** Redis integration for token blacklisting and session management.
- **Input Validation:** Request payload validation using **Zod**.
- **Prisma ORM & PostgreSQL:** Type-safe database queries for user management and persistence.
- **Structured Logging & Errors:** Centralized application logging with **Winston** and **Morgan**, plus custom async error handling middleware.

## 🛠 Tech Stack

- **Server Framework:** Express v5 + GraphQL Yoga v5
- **GraphQL Tools:** `@graphql-tools/schema`, `@graphql-tools/load`, `@graphql-tools/graphql-file-loader`
- **Language:** TypeScript v6, Node.js (ES Modules)
- **Security & Auth:** Argon2, JsonWebToken
- **Database & Cache:** PostgreSQL + Prisma ORM v6, Redis (`ioredis` / `redis`)
- **Validation:** Zod v4
- **Logging:** Winston + Morgan

## 📂 Project Structure

```
authService/
├── logs/                 # Application log outputs
├── prisma/               # Prisma schema and database migrations
├── src/
│   ├── graphql/          # GraphQL schema and resolver implementations
│   │   ├── resolvers/    # Business logic resolvers
│   │   │   ├── services/ # Modular Auth logic (login, logout, refresh, register)
│   │   │   │   ├── login.service.ts
│   │   │   │   ├── logout.service.ts
│   │   │   │   ├── refreshToken.service.ts
│   │   │   │   └── register.service.ts
│   │   │   └── auth.resolvers.ts
│   │   ├── auth.context.ts # GraphQL context builder (JWT verification, user scope)
│   │   └── schema.graphql  # GraphQL Schema Definition (SDL)
│   ├── middlewares/      # Express / Async error handling middlewares
│   │   └── asyncError.middleware.ts
│   ├── schems/           # Zod input validation schemas
│   │   ├── loginInput.schema.ts
│   │   └── registerInput.schema.ts
│   └── utils/            # JWT generation, logger, and custom error classes
│       ├── createJWT.ts
│       ├── errorApp.ts
│       └── logger.ts
├── .env                  # Environment configuration file
├── Dockerfile            # Container build for production
├── Dockerfile.dev        # Container build for development
├── package.json
├── server.ts             # Microservice entry point
└── tsconfig.json
```

## ⚙️ Environment Variables (`.env`)

Create a `.env` file in the root directory of `authService`:

```env
PORT=4000
DATABASE_URL="postgresql://user:password@localhost:5432/auth_db?schema=public"
REDIS_HOST="localhost"
REDIS_PORT=6379

JWT_ACCESS_SECRET="your_jwt_access_secret_key"
JWT_REFRESH_SECRET="your_jwt_refresh_secret_key"
JWT_ACCESS_EXPIRES_IN="15m"
JWT_REFRESH_EXPIRES_IN="7d"
```

## 🚀 Getting Started

### Local Development

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Generate Prisma Client & Run Migrations:**

   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```

The GraphQL playground endpoint will be available at `http://localhost:4000/graphql`.

### Docker Setup

Run using Dockerfile.dev for local containerization:

```bash
docker build -f Dockerfile.dev -t auth-service:dev .
docker run -p 4000:4000 --env-file .env auth-service:dev
```
