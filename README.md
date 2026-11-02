# Luxury & Sport Cars Platform (`React-Car-Shop`)

A modern, high-performance e-commerce and reservation platform designed for renting, scheduling test drives, and acquiring luxury and sports automobiles. Built with a robust microservices architecture featuring an NGINX API Gateway, asynchronous task processing, caching, and a modular React frontend.

---

## 🎯 Target Audience

- **Young & Wealthy Enthusiasts:** Seeking seamless online booking for high-end test drives and sports car purchases.
- **Gift Shoppers & Parents:** Looking to arrange exclusive driving experiences and memorable luxury car rentals for family members or events.

---

## 🏗️ System Architecture Overview

The platform uses a microservices pattern with Docker containerization, route proxying via NGINX API Gateway, asynchronous workers for heavy tasks, and caching layers for optimized performance.

```
                                  +-------------------+
                                  |   React SPA       |
                                  |   (Tailwind v4)   |
                                  +---------+---------+
                                            |
                                            v
                                  +-------------------+
                                  | NGINX API Gateway |
                                  |   (Port 8000)     |
                                  +---------+---------+
                                            |
     +-------------------+------------------+-------------------+-------------------+
     |                   |                                      |                   |
     v                   v                                      v                   v
+----+----------+  +-----+------------+                  +------+-----------+  +----+-------------+
| Catalog       |  | Auth Service     |                  | Payment          |  | Feedback         |
| Service       |  | (GraphQL Yoga)   |                  | Service          |  | Service          |
| (Express/REST)|  | PostgreSQL       |                  | (Express/REST)   |  | (Fastify/BullMQ) |
| PG + Redis    |  | Redis            |                  | PostgreSQL       |  | PG + Redis       |
+---------------+  +------------------+                  +------------------+  +------------------+
```

---

## 🧩 Microservices Breakdown

| Service Name         | Path Directory                      | Tech Stack                                                     | Responsibilities                                                                            |
| :------------------- | :---------------------------------- | :------------------------------------------------------------- | :------------------------------------------------------------------------------------------ |
| **Frontend**         | `/frontend`                         | React 19, Vite, Tailwind CSS v4, Redux Toolkit, TanStack Query | Responsive client UI, car catalog display, test drive booking, and shopping cart.           |
| **API Gateway**      | `/gateway`                          | NGINX                                                          | Centralized entry point (`:8000`), reverse proxying, CORS management, headers sanitization. |
| **Auth Service**     | `/backend/services/authService`     | Express, GraphQL Yoga, PostgreSQL, Argon2, Redis               | User registration, authentication, JWT tokens management, and GraphQL schema (`/graphql`).  |
| **Catalog Service**  | `/backend/services/catalogService`  | Express, REST API, PostgreSQL, Redis                           | Vehicle listing catalog, specs management, availability checking, and Redis caching.        |
| **Payment Service**  | `/backend/services/paymentService`  | Express, REST API, PostgreSQL                                  | Secure payment transactions, deposit handling for test drives, and purchase orders.         |
| **Feedback Service** | `/backend/services/feedbackService` | Fastify, BullMQ, Redis, PostgreSQL, Nodemailer                 | Asynchronous background processing, notification dispatching (Email/SMS), user reviews.     |

---

## 📂 Project Repository Structure

```
React-Car-Shop/
├── .postman/                   # Postman collection files for API testing
├── backend/
│   ├── logs/                   # Aggregated server logs (combined.log, error.log)
│   └── services/               # Backend Microservices
│       ├── authService/        # Auth & Users Microservice (GraphQL)
│       ├── catalogService/     # Catalog & Inventory Microservice (REST)
│       ├── feedbackService/    # Notifications & Reviews Microservice (Fastify + BullMQ)
│       └── paymentService/     # Payments Microservice (REST)
├── frontend/                   # React Single Page Application (Feature-Sliced Design)
├── gateway/                    # API Gateway (NGINX configuration)
├── postman/                    # Additional Postman environments & tests
├── .env                        # Central root environment variables file
├── .gitignore
├── docker-compose.yml          # Container orchestration for all microservices & databases
└── README.md                   # Root documentation
```

---

## ⚙️ Prerequisites & Environment Setup

### Prerequisites

- [Docker Desktop](https://www.docker.com/) (v20.10+) with **Docker Compose**
- [Node.js](https://nodejs.org/) (v18+ or v20+) for local development
- [Git](https://git-scm.com/)

### Central `.env` Configuration

Create a `.env` file in the project root folder based on the required service ports and DB connection strings:

```env
# General
NODE_ENV=development

# NGINX Gateway Port
GATEWAY_PORT=8000

# PostgreSQL Configuration
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres_password
POSTGRES_DB=car_shop_db

# Redis Configuration
REDIS_HOST=redis
REDIS_PORT=6379

# Service Secrets & Tokens
JWT_ACCESS_SECRET=your_jwt_access_secret_key
JWT_REFRESH_SECRET=your_jwt_refresh_secret_key
INTERNAL_API_SECRET=your_shared_internal_secret

# SMTP Mailer Settings
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```

---

## 🚀 Quick Start with Docker Compose

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/React-Car-Shop.git
   cd React-Car-Shop
   ```

2. **Configure environment variables:**

   ```bash
   cp .env.example .env  # Or create your .env manually
   ```

3. **Spin up the entire stack:**

   ```bash
   docker-compose up --build -d
   ```

4. **Access the application:**
   - **Frontend UI:** `http://localhost:3000` (or as proxied by gateway)
   - **API Gateway Entry Point:** `http://localhost:8000`
   - **GraphQL Auth Endpoint:** `http://localhost:8000/graphql`
   - **Catalog API Endpoint:** `http://localhost:8000/api/v1/catalog`
   - **Payment API Endpoint:** `http://localhost:8000/api/v1/payment`
   - **Feedback API Endpoint:** `http://localhost:8000/api/v1/feedback`

---

## 🧪 Testing

- **Postman Collection:** You can import the API collection located in `.postman/` or `postman/` to test all microservices endpoints via NGINX Gateway (`:8000`).
- **Frontend Tests:**
  ```bash
  cd frontend
  npm run test
  ```
