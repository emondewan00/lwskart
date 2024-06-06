import { auth } from "@/auth";
import EditBilling from "@/components/account/EditBilling";
import { redirect } from "next/navigation";

const EditBillingPage = async ({}) => {
  const session = await auth();
  if (!session?.user) return redirect("/login");

  return (
    <div className="my-10">
      <EditBilling session={session} />
    </div>
  );
};

export default EditBillingPage;
