import Copyright from "@/components/shared/Copyright";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
      <Copyright />
    </>
  );
};

export default Layout;
