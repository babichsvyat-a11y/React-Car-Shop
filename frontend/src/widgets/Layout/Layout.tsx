import { Outlet } from "react-router-dom";
import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";

const Layout = () => {
  return (
    <div className="dark:bg-primary-background bg-light-bg min-h-screen ">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
