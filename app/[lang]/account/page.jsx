import { auth } from "@/auth";
import BillingAddress from "@/components/account/BillingAddress";
import PersonalProfile from "@/components/account/PersonalProfile";
import ShippingAddress from "@/components/account/ShippingAddress";
import BreadCrumb from "@/components/shared/BreadCrumb";
import { redirect } from "next/navigation";

const Account = async () => {
  const session = await auth();
  if (!session?.user) {
    return redirect("/login");
  }
  return (
    <>
      <BreadCrumb />
      <div className="container  items-start gap-6 pt-4 pb-16">
        <div className=" grid grid-cols-3 gap-4 mx-auto max-w-5xl">
          <PersonalProfile user={session?.user} />
          <ShippingAddress />
          <BillingAddress />
        </div>
      </div>
    </>
  );
};

export default Account;
