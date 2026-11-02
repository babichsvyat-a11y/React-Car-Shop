# Luxury & Sport Cars Frontend Application (`React-Car-Shop`)

A modern Single Page Application (SPA) built for booking test drives, exploring high-end sports cars, and purchasing premium vehicles. Built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, **Redux Toolkit**, and **TanStack React Query**, adhering to the **Feature-Sliced Design (FSD)** architectural methodology.

## 🚀 Key Features

- **Feature-Sliced Design (FSD):** Structured into modular layers (`app`, `pages`, `widgets`, `features`, `entities`, `shared`) for high scalability and maintainability.

- **State Management:** Hybrid management with **Redux Toolkit** for global application state and **TanStack Query** for asynchronous server-state fetching and caching.

- **Fast Modern Build Tooling:** Lightning-fast HMR and bundling using **Vite**.

- **Styling:** Styled with **Tailwind CSS v4** (`@tailwindcss/vite`).

- **Client Routing:** Declarative route setup via **React Router v7**.

- **Testing Suite:** Automated testing configured with **Vitest** and **Playwright**.

## 🛠 Tech Stack

- **Framework:** React v19 + React DOM v19

- **Build Tool:** Vite v7 + `@vitejs/plugin-react`

- **Language:** TypeScript v7

- **Styling:** Tailwind CSS v4

- **State Management:** Redux Toolkit v2 + React Redux v9

- **Data Fetching:** TanStack React Query v5 + Axios

- **Routing:** React Router v7

- **Testing:** Vitest v4 + Playwright v1

## 📂 Project Structure (Feature-Sliced Design)

```
frontend/src/
├── app/                  # Application initialization (routing, global state providers, styles)
│   ├── api/
│   ├── store/
│   ├── styles/
│   ├── App.tsx
│   └── index.ts
├── entities/             # Business entities (CarCard, Context, domain models)
│   ├── CarCard/
│   └── Context/
├── features/             # User interactions and business actions (CarList, Cart, ComplList)
│   ├── CarList/
│   ├── Cart/
│   └── ComplList/
├── pages/                # Application routes/pages
│   ├── CartPage/
│   ├── CatalogPage/
│   ├── ItemPage/
│   └── ShopPage/
├── shared/               # Reusable UI components, hooks, assets, and TypeScript interfaces
│   ├── assets/
│   ├── hooks/
│   └── interface/
├── widgets/              # Composite UI blocks (Header, Footer, MainLanding, Catalog, ItemInfo)
│   ├── Cart/
│   ├── Catalog/
│   ├── Footer/
│   ├── Header/
│   ├── ItemInfo/
│   └── MainLanding/
├── db.js                 # Mock data / development fallback
├── main.tsx              # Application entry point
└── vite-env.d.ts

```

## ⚙️ Environment Variables (`.env`)

Create a `.env` file in the `frontend` root directory:

```
VITE_API_GATEWAY_URL=http://localhost:8000
VITE_GRAPHQL_ENDPOINT=http://localhost:8000/graphql

```

## 🚀 Getting Started

### Local Development

1. **Install dependencies:**

   ```
   npm install

   ```

2. **Start Development Server:**

   ```
   npm run dev

   ```

3. **Build for Production:**

   ```
   npm run build

   ```

4. **Preview Production Build:**

   ```
   npm run preview

   ```

### Running Tests

- **Run unit/component tests:**

  ```
  npm run test

  ```

- **Run Linter:**

  ```
  npm run lint

  ```
