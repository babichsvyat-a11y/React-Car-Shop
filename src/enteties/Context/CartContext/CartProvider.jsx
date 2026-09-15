import { useCartReducer } from "@/shared/hooks/useCartReducer";
import { CartContext } from "./CartContext";
import { useMemo } from "react";

export const CartProvider = (props) => {
  const { children } = props;

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
