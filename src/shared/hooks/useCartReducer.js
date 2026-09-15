import { useReducer } from "react";

function cartReducer(cartList, action) {
  switch (action.type) {
    case "added": {
      return [
        ...cartList,
        {
          id: action.id,
          image: action.image,
          name: action.name,
          style: action.style,
          rating: action.rating,
          about: action.about,
          acceleration0To100: action.acceleration0To100,
          brand: action.brand,
          model: action.brand,
          year: action.year,
          color: action.color,
          powertrain: action.powertrain,
          drivetrain: action.drivetrain,
        },
      ];
    }
    case "deleted": {
      return cartList.filter((auto) => auto.id !== action.id);
    }
    default: {
      throw Error("Unknow action:" + action.type);
    }
  }
}

export function useCartReducer() {
  const [cartList, dispatch] = useReducer(cartReducer, []);

  function btnAddToCart(el) {
    dispatch({
      type: "added",
      ...el,
    });
    // const storageData = localStorage.getItem("cartData");
    // const cartDataArr = storageData ? JSON.parse(storageData) : [];
    // cartDataArr.push(el);
    // localStorage.setItem("cartData", JSON.stringify(cartDataArr));
  }

  function btnDeleteCartItem(elId) {
    dispatch({
      type: "delete",
      id: elId,
    });
  }

  return {
    cartList,
    btnAddToCart,
    btnDeleteCartItem,
  };
}
