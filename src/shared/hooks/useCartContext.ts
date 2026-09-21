import { useContext } from "react";
import { CartContext } from "@/enteties/Context/CartContext/CartContext";

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
