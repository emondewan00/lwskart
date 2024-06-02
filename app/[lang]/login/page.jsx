import { auth } from "@/auth";
import LoginForm from "@/components/login/LoginForm";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await auth();
  if (session?.user) {
    return redirect("/");
  }
  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
