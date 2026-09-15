import ShopPage from "@/pages/ShopPage";
import CatalogPage from "@/pages/CatalogPage/CatalogPage";
import ItemPage from "@/pages/ItemPage/ItemPage";
import CartPage from "@/pages/CartPage/CartPage";
import { CartProvider } from "@/enteties/Context/CartContext/CartProvider";

const App = () => {
  return (
    <>
      {/* <ShopPage /> */}
      {/* <CatalogPage /> */}
      {/* <ItemPage /> */}
      <CartPage />
    </>
  );
};

export default App;
