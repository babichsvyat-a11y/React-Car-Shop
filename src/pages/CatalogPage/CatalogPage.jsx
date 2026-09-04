import Header from "@/widgets/Header";
import Catalog from "@/widgets/Catalog";
import Footer from "@/widgets/Footer";

const CatalogPage = () => {
  return (
    <div className="bg-primary-background min-h-screen">
      <Header />
      <Catalog className="flex-auto" />
      <Footer />
    </div>
  );
};

export default CatalogPage;
