# API Gateway (`gateway`)

High-performance reverse proxy and entry gateway built with **NGINX** for routing client requests to backend microservices. Handles CORS configuration, WebSocket upgrading, request proxying, header sanitization, and load balancing across service clusters.

## 🚀 Key Features

- **Reverse Proxying & Routing:** Maps external API paths to internal backend microservices.
- **CORS Support:** Integrated Access-Control headers handling preflight (`OPTIONS`) requests.
- **Header Security & Sanitization:** Enforces client header propagation while clearing sensitive internal headers (`X-Internal-Service`).
- **WebSocket / GraphQL Upgrades:** Configured with `Upgrade` and `Connection` headers for real-time GraphQL connections.
- **Load Balancing Ready:** Upstream clusters defined for horizontal scaling across microservice instances.

## 🛣️ API Routing Map

| Gateway Path       | Upstream Target Cluster          | Service Description                       |
| :----------------- | :------------------------------- | :---------------------------------------- |
| `/api/v1/catalog`  | `catalog_cluster` (`:5080`)      | Vehicle Catalog & Inventory REST API      |
| `/graphql`         | `auth_cluster` (`:5081/graphql`) | GraphQL User Authentication & Account API |
| `/api/v1/payment`  | `payment_cluster` (`:5082`)      | Payment Processing REST API               |
| `/api/v1/feedback` | `feedback_cluster` (`:5083`)     | Notifications & Reviews REST API          |

## 📂 Project Structure

```
gateway/
├── nginx.conf          # Core NGINX configuration file
```

## 🛠️ Configuration Details

- **Port:** Listens on port `8000`
- **Timeouts:** Proxy connection, send, and read timeouts set to `60s`
- **Upstreams Configured:**
  - Catalog Service -> `catalog_service:5080`
  - Auth Service -> `auth_service:5081`
  - Payment Service -> `payment_service:5082`
  - Feedback Service -> `feedback_service:5083`

## 🚀 Getting Started

### Using Docker

1. **Build and run NGINX Gateway container:**

   ```bash
   docker run -d \
     --name api_gateway \
     -p 8000:8000 \
     -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro \
     nginx:alpine
   ```

2. Test the health of the gateway by requesting any configured endpoint (e.g., `http://localhost:8000/api/v1/catalog`).
