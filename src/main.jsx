import "./app/styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/enteties/Context/ThemeContext/ThemeProvider";
import App from "@/app/App";
import { CartProvider } from "@/enteties/Context/CartContext/CartProvider";
import { Provider } from "react-redux";
import { store } from "@/app/store/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
