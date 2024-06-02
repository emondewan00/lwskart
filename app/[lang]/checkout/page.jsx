import { auth } from "@/auth";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import BreadCrumb from "@/components/shared/BreadCrumb";
import { redirect } from "next/navigation";

const Checkout = async() => {
  const session = await auth();
  if (!session?.user) {
    return redirect("/login");
  }
  return (
    <>
      <BreadCrumb />
      <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
        <CheckoutForm />
        <OrderSummary />
      </div>
    </>
  );
};

export default Checkout;
