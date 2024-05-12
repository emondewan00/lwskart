import BillingAddress from "@/components/account/BillingAddress";
import PersonalProfile from "@/components/account/PersonalProfile";
import ShippingAddress from "@/components/account/ShippingAddress";
import BreadCrumb from "@/components/shared/BreadCrumb";

const Account = () => {
  return (
    <>
      <BreadCrumb />
      <div class="container  items-start gap-6 pt-4 pb-16">
        <div class=" grid grid-cols-3 gap-4 mx-auto max-w-5xl">
          <PersonalProfile />
          <BillingAddress />
          <ShippingAddress />
        </div>
      </div>
    </>
  );
};

export default Account;
