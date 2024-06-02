import { auth } from "@/auth";
import CartPage from "@/components/cart/CartPage";
import BreadCrumb from "@/components/shared/BreadCrumb";
import { redirect } from "next/navigation";

const CartListPage = async () => {
  const session = await auth();
  if (!session?.user) return redirect("/login");
  return (
    <>
      <BreadCrumb />
      <CartPage />
    </>
  );
};

export default CartListPage;
