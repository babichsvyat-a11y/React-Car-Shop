import { createContext } from "react";
import type { ITotalAuto } from "@/shared/interface/totalAuto.interface";

export interface iCartContext {
  cartList: ITotalAuto[];
  btnAddToCart: (item: ITotalAuto) => void;
  btnDeleteCartItem: (item: ITotalAuto) => void;
}

export const CartContext = createContext<iCartContext | undefined>(undefined);
