import "./app/styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/enteties/Context/ThemeContext/ThemeProvider";
import App from "@/app/App";
import { CartProvider } from "@/enteties/Context/CartContext/CartProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
);
