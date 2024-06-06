import { auth } from "@/auth";
import EditShipping from "@/components/account/EditShipping";
import { redirect } from "next/navigation";

const EditShippingPage = async ({}) => {
  const session = await auth();
  if (!session?.user) return redirect("/login");

  return (
    <div className="my-10">
      <EditShipping session={session} />
    </div>
  );
};

export default EditShippingPage;
