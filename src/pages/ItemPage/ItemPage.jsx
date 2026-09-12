import Header from "@/widgets/Header";
import ItemInfo from "@/widgets/ItemInfo";
import Footer from "@/widgets/Footer";

const ItemPage = () => {
  return (
    <div className="dark:bg-primary-background bg-light-bg min-h-screen ">
      <Header />
      <ItemInfo className="flex-auto" />
      <Footer />
    </div>
  );
};

export default ItemPage;
