# Feedback & Notification Microservice (`feedbackService`)

High-performance asynchronous notification and feedback service built with Fastify, BullMQ, Redis, Prisma, and PostgreSQL. Handles email notifications, SMS delivery, and feedback collection for the luxury car platform.

## 🚀 Key Features

- **Asynchronous Queue Processing:** Powered by **BullMQ** & **Redis** to ensure background processing without blocking API responses.
- **Email Notifications:** Integrated with **Nodemailer** for delivering transactional emails (test drive confirmations, booking receipts, etc.).
- **SMS Integration:** Extensible SMS delivery service (`smsService.ts`) with payload validation via **Zod**.
- **Prisma ORM & PostgreSQL:** Fast, type-safe data persistence for feedback records and notification history.
- **Internal Service Guard:** Authorization guard (`internalService.guard.ts`) to secure routes from unauthorized internal calls.
- **Structured Logging:** Centralized logging using **Winston**.

## 🛠 Tech Stack

- **Framework:** Fastify v5
- **Language:** TypeScript v6, Node.js (ES Modules)
- **Queue System:** BullMQ v6 + Redis (`ioredis`)
- **Database & ORM:** PostgreSQL + Prisma ORM v6
- **Validation:** Zod v4
- **Mailing & SMS:** Nodemailer + Custom SMS service
- **Logging:** Winston

## 📂 Project Structure

```
feedbackService/
├── prisma/               # Prisma schema and migrations
├── src/
│   ├── config/           # App configuration (logger, mailer, prisma, error handling, guards)
│   │   ├── errorApp.ts
│   │   ├── internalService.guard.ts
│   │   ├── logger.ts
│   │   ├── mailer.ts
│   │   └── prismaClient.ts
│   ├── queues/           # BullMQ job queue definitions
│   │   └── feedbackQueue.ts
│   ├── routes/           # Fastify route handlers
│   │   └── feedbackRoutes.ts
│   ├── schems/           # Zod validation schemas
│   │   ├── email.schema.ts
│   │   └── phone.schema.ts
│   ├── services/         # External integrations (SMS, mailers)
│   │   └── smsService.ts
│   └── workers/          # Queue background consumers/workers
│       └── feedbackWorker.ts
├── .env                  # Environment variables
├── Dockerfile            # Production Docker image build
├── Dockerfile.dev        # Development Docker setup
├── package.json
├── server.ts             # Service entry point
└── tsconfig.json
```

## ⚙️ Environment Variables (`.env`)

Create a `.env` file in the service root folder:

```env
PORT=3000
DATABASE_URL="postgresql://user:password@localhost:5432/feedback_db?schema=public"
REDIS_HOST="localhost"
REDIS_PORT=6379

SMTP_HOST="smtp.mailtrap.io"
SMTP_PORT=2525
SMTP_USER="your_smtp_user"
SMTP_PASS="your_smtp_password"
SMTP_FROM="noreply@luxurycars.com"

INTERNAL_API_SECRET="your_shared_internal_secret"
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

### Docker Setup

Run using Dockerfile.dev for local containerization:

```bash
docker build -f Dockerfile.dev -t feedback-service:dev .
docker run -p 3000:3000 --env-file .env feedback-service:dev
```
