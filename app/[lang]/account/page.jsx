import { auth } from "@/auth";
import AccountCard from "@/components/account/AccountCard";
import BreadCrumb from "@/components/shared/BreadCrumb";
import { redirect } from "next/navigation";

const accountData = [
  {
    id: 1,
    title: "Personal Profile",
    name: "John Doe",
    email: "example@mail.com",
    phone: "0811 8877 988",
  },
  {
    id: 2,
    title: "Shipping address",
    name: "John Doe",
    address: "Medan, North Sumatera",
    postal: "20371",
    phone: "0811 8877 988",
  },
  {
    id: 3,
    title: "Billing address",
    name: "John Doe",
    address: "Medan, North Sumatera",
    postal: "20371",
    phone: "0811 8877 988",
  },
];

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
          {accountData.map((data) => (
            <AccountCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Account;
