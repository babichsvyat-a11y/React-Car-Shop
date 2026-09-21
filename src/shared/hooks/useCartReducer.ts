import { useDispatch, useSelector } from "react-redux";
import { added, deleted } from "@/features/Cart/cartSlice";
import type { ITotalAuto } from "@/shared/interface/totalAuto.interface";
import type { ICartReducer } from "@/shared/interface/cartReducer.interface";

export const useCartReducer = () => {
  const cartList = useSelector((state: ICartReducer) => state.cart);
  const dispatch = useDispatch();

  const btnAddToCart = (item: ITotalAuto) => {
    dispatch(added(item));
  };

  const btnDeleteCartItem = (item: ITotalAuto) => {
    dispatch(deleted(item.id));
  };

  return {
    cartList,
    btnAddToCart,
    btnDeleteCartItem,
  };
};
