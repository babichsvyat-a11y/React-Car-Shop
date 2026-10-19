import { useCartReducer } from "@/shared/hooks/useCartReducer";
import { CartContext } from "@/enteties/Context/CartContext/CartContext";
import { useMemo, type ReactNode } from "react";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { cartList, btnAddToCart, btnDeleteCartItem } = useCartReducer();

  const value = useMemo(
    () => ({
      cartList,
      btnAddToCart,
      btnDeleteCartItem,
    }),
    [cartList, btnAddToCart, btnDeleteCartItem],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
