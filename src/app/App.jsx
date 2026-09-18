import ShopPage from "@/pages/ShopPage";
import CatalogPage from "@/pages/CatalogPage/CatalogPage";
import ItemPage from "@/pages/ItemPage/ItemPage";
import CartPage from "@/pages/CartPage/CartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/item/:id" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
