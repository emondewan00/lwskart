import { auth } from "@/auth";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import BreadCrumb from "@/components/shared/BreadCrumb";
import { redirect } from "next/navigation";

const Checkout = async () => {
  const session = await auth();
  if (!session?.user) {
    return redirect("/login");
  }
  const serverUlr = process.env.SERVER_URL;
  const cartList = await fetch(`${serverUlr}/cart/${session?.user?.id}`, {
    next: {
      tags: ["cartItems"],
    },
  });
  const data = await cartList.json();
  const totalPrice = data?.items?.reduce(
    (sum, item) => item?.product_id?.price * item?.quantity + sum,
    0
  );
  return (
    <>
      <BreadCrumb />
      <div className="container grid grid-cols-8 items-start pb-16 pt-4 gap-6">
        <CheckoutForm totalPrice={totalPrice} session={session} />
        <OrderSummary totalPrice={totalPrice} data={data} />
      </div>
    </>
  );
};

export default Checkout;
