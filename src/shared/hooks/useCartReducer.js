import { useDispatch, useSelector } from "react-redux";
import { added, deleted } from "@/features/Cart/cartSlice";

export const useCartReducer = () => {
  const cartList = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const btnAddToCart = (item) => {
    dispatch(added(item));
  };

  const btnDeleteCartItem = (item) => {
    dispatch(deleted(item.id));
  };

  return {
    cartList,
    btnAddToCart,
    btnDeleteCartItem,
  };
};
