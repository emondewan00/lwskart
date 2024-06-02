import { auth } from "@/auth";
import Register from "@/components/register/Register";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const session = await auth();
  if (session?.user) {
    return redirect("/");
  }
  return (
    <>
      <Register />
    </>
  );
};

export default RegisterPage;
