import { useDispatch, useSelector } from "react-redux";
import { added, deleted } from "@/store/cartSlice";
import type { ICartReducer } from "@/shared/types/cartReducer.interface";
import type { ICar } from "@/shared/types/catalog/car.interface";

export const useCartReducer = () => {
  const cartList = useSelector((state: ICartReducer) => state.cart);
  const dispatch = useDispatch();

  const btnAddToCart = (item: ICar) => {
    dispatch(added(item));
  };

  const btnDeleteCartItem = (item: ICar) => {
    dispatch(deleted(item.id));
  };

  return {
    cartList,
    btnAddToCart,
    btnDeleteCartItem,
  };
};
