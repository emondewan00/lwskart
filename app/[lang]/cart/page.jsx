import { auth } from "@/auth";
import BreadCrumb from "@/components/shared/BreadCrumb";
import WishlistCard from "@/components/wishlist/WishlistCard";
import { redirect } from "next/navigation";

const CartListPage = async () => {
  const session = await auth();
  if (!session?.user) return redirect("/login");
  const cartList = await fetch(
    `http://localhost:3000/api/cart/${session?.user?.id}`
  );
  const data = await cartList.json();
  return (
    <>
      <BreadCrumb />
      <div className="container gap-6 pt-4 pb-16">
        <div className="mx-auto space-y-4 max-w-6xl">
          {data?.items?.map((item) => (
            <WishlistCard key={item._id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CartListPage;
