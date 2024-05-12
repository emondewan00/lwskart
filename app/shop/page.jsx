import BreadCrumb from "@/components/shared/BreadCrumb";
import Drawer from "@/components/shop/Drawer";
import DrawerToggle from "@/components/shop/DrawerToggle";
import Products from "@/components/shop/Products";
import Sidebar from "@/components/shop/Sidebar";

const Shop = () => {
  return (
    <>
      <BreadCrumb />
      <div class="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
        <DrawerToggle />
        <Drawer />
        <Sidebar />
        <Products />
      </div>
    </>
  );
};

export default Shop;
