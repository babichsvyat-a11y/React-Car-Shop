import "./app/styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import { ThemeProvider } from "@/enteties/Context/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
