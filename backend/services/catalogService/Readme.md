# Catalog Service (`catalogService`)

A high-performance RESTful microservice responsible for managing the catalog of premium and sports vehicles available for purchase or test drive.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [API Architecture & Validation](#api-architecture--validation)

---

## Overview

The **Catalog Service** handles core domain entities related to luxury cars, available colors, and media assets (images). Built with Express.js and TypeScript, it utilizes Prisma ORM for database operations with PostgreSQL, Redis for query caching, Winston for logging, and Zod for request schema validation.

---

## Tech Stack

- **Runtime:** Node.js (ES Modules)
- **Language:** TypeScript
- **Framework:** Express.js (v5)
- **ORM:** Prisma
- **Database:** PostgreSQL
- **Caching:** Redis
- **Validation:** Zod
- **Logging & Monitoring:** Winston, Morgan
- **Containerization:** Docker / Docker Compose

---

## Project Structure

```text
catalogService/
├── prisma/               # Database schema and migration files
├── src/
│   ├── middlewares/      # Error handling, logging, and validation middlewares
│   │   ├── asyncError.middleware.ts
│   │   ├── globalError.middleware.ts
│   │   ├── morgan.middlewar.ts
│   │   └── validate.middleware.ts
│   ├── schems/           # Zod schemas (car, color, image)
│   │   ├── car.schema.ts
│   │   ├── color.schema.ts
│   │   └── image.schema.ts
│   ├── utils/            # App error abstractions and logger instances
│   │   ├── errorApp.ts
│   │   └── logger.ts
│   ├── app.ts            # Express application setup
│   ├── car.controllers.ts# Route controllers handling request logic
│   ├── car.repository.ts # Database & caching access layer
│   ├── car.router.ts     # API route definitions
│   └── redisClient.ts    # Redis connection client setup
├── .env                  # Environment variables file
├── Dockerfile            # Production Docker configuration
├── Dockerfile.dev        # Development Docker configuration
├── package.json          # Project dependencies and scripts
├── server.ts             # Application entry point
└── tsconfig.json         # TypeScript configuration
```

---

## Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v18 or higher recommended)
- **PostgreSQL** instance
- **Redis** server
- **Docker** (optional, for containerized run)

---

## Getting Started

### 1. Installation

Clone the repository and install dependencies:

```bash
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory and specify the required environment variables:

```env
PORT=3000
DATABASE_URL="postgresql://user:password@localhost:5432/catalog_db?schema=public"
REDIS_URL="redis://localhost:6379"
NODE_ENV=development
```

### 3. Database Migration & Schema Generation

Generate the Prisma client and apply database migrations:

```bash
npm run prisma:generate
npm run prisma:migrate
```

### 4. Running the Application

#### Development Mode (with hot-reload):

```bash
npm run dev
```

#### Docker Environment:

To run using Docker in development mode:

```bash
docker build -f Dockerfile.dev -t catalog-service:dev .
docker run -p 3000:3000 catalog-service:dev
```

---

## Scripts

| Command                   | Description                                                      |
| :------------------------ | :--------------------------------------------------------------- |
| `npm run dev`             | Runs the application in development mode using `tsx` watch mode. |
| `npm run prisma:generate` | Generates the Prisma Client based on `prisma/schema.prisma`.     |
| `npm run prisma:migrate`  | Runs database migrations in development environment.             |

---

## API Architecture & Validation

- **Repository Pattern:** Separates database access (`car.repository.ts`) and caching logic from business logic.
- **Request Validation:** Uses Zod schemas (`src/schems/`) alongside custom validation middleware (`validate.middleware.ts`) to validate incoming payloads.
- **Centralized Error Handling:** Handled via custom application error utilities (`errorApp.ts`) and global error middleware (`globalError.middleware.ts`).
