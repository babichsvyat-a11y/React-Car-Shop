# Payment Service (`paymentService`)

A robust, fault-tolerant RESTful microservice handling transaction processing, payment lifecycle management, webhook verification, and automated callback handling for test drives and vehicle purchases.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Architecture & Key Features](#architecture--key-features)

## Overview

The **Payment Service** processes secure payment transactions for test-drive reservations and vehicle acquisitions. Built with Express.js and TypeScript, it ensures reliable inter-service communications using `axios` with automatic retry logic (`axios-retry`), enforces request idempotency, and securely verifies incoming webhooks from payment gateways.

## Tech Stack

- **Runtime:** Node.js (ES Modules)
- **Language:** TypeScript
- **Framework:** Express.js (v5)
- **ORM:** Prisma
- **Database:** PostgreSQL
- **HTTP Client:** Axios (with `axios-retry`)
- **Validation:** Zod
- **Logging & Monitoring:** Winston, Morgan
- **Containerization:** Docker / Docker Compose

## Project Structure

```
paymentService/
├── prisma/                   # Database schema and migration files
├── src/
│   ├── middlewares/          # Custom middlewares for error handling, idempotency, and webhooks
│   │   ├── asyncError.middleware.ts
│   │   ├── globalError.middleware.ts
│   │   ├── idempotency.middleware.ts
│   │   ├── morgan.middleware.ts
│   │   └── webhookVerify.middleware.ts
│   ├── schems/               # Zod validation schemas
│   │   └── payment.schema.ts
│   ├── utils/                # Helper functions for error handling, retries, and user retrieval
│   │   ├── errorApp.ts
│   │   ├── getUserData.ts
│   │   ├── handlePaymentFeedback.ts
│   │   ├── handleSuccessfulPayment.ts
│   │   └── logger.ts
│   ├── app.ts                # Express application configuration
│   ├── payment.controller.ts # Route handler functions
│   ├── payment.repository.ts # Data layer for payment persistence
│   └── payment.router.ts     # Payment endpoint definitions
├── .env                      # Environment variables
├── Dockerfile                # Production Docker container setup
├── Dockerfile.dev            # Development Docker setup
├── package.json              # Dependencies and scripts
├── server.ts                 # Service entry point
└── tsconfig.json             # TypeScript configuration
```

## Prerequisites

Make sure you have installed the following:

- **Node.js** (v18 or higher recommended)
- **PostgreSQL** instance
- **Docker** (optional, for containerized run)

## Getting Started

### 1. Installation

Clone the repository and install dependencies:

```bash
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
PORT=3001
DATABASE_URL="postgresql://user:password@localhost:5432/payment_db?schema=public"
NODE_ENV=development
PAYMENT_GATEWAY_SECRET=your_webhook_secret_key
USER_SERVICE_URL="http://localhost:3002"
FEEDBACK_SERVICE_URL="http://localhost:3003"
```

### 3. Database Migration & Client Generation

Generate Prisma Client and apply database migrations:

```bash
npm run prisma:generate
npm run prisma:migrate
```

### 4. Running the Application

#### Development Mode:

```bash
npm run dev
```

#### Docker Container:

```bash
docker build -f Dockerfile.dev -t payment-service:dev .
docker run -p 3001:3001 payment-service:dev
```

## Scripts

| Command                   | Description                                                        |
| :------------------------ | :----------------------------------------------------------------- |
| `npm run dev`             | Starts the service in development mode with hot-reloading (`tsx`). |
| `npm run prisma:generate` | Generates the Prisma Client.                                       |
| `npm run prisma:migrate`  | Applies Prisma migrations in the development database.             |

## Architecture & Key Features

- **Idempotency Protection:** Utilizes `idempotency.middleware.ts` to prevent duplicate payment processing for identical transaction requests.
- **Webhook Verification:** Includes `webhookVerify.middleware.ts` to validate signatures and authenticity of payment provider notifications.
- **Resilient Communication:** Employs `axios-retry` in utility modules (`handlePaymentFeedback.ts`, `handleSuccessfulPayment.ts`) for resilient inter-service calls when triggering notification and user updates.
- **Repository Pattern:** Decouples business operations in controllers from raw database transactions handled via `payment.repository.ts`.
