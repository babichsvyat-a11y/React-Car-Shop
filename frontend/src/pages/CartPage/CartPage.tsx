import Header from "@/widgets/Header";
import Cart from "@/widgets/Cart";
import Footer from "@/widgets/Footer";

const CartPage = () => {
  return (
    <div className="dark:bg-primary-background bg-light-bg min-h-screen ">
      <Header />
      <Cart />
      <Footer />
    </div>
  );
};

export default CartPage;
