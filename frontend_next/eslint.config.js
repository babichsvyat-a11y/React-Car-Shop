import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  // 1. Глобальні виключення (папки, які не потрібно лінтити)
  globalIgnores(["dist", ".next", "node_modules", "out", "build"]),

  // 2. Базові рекомендовані правила JavaScript від ESLint
  js.configs.recommended,

  // 3. Офіційні правила Next.js для Flat Config (Core Web Vitals)
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },

  // 4. Правила для React Hooks
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: reactHooks.configs.recommended.rules,
  },

  // 5. Головні налаштування середовища для ваших JS/TS/JSX/TSX файлів
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Ваше кастомне правило для ігнорування великих літер у невикористаних змінних
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
    },
  },
]);
