import { auth } from "@/auth";
import BreadCrumb from "@/components/shared/BreadCrumb";
import EmptyWishList from "@/components/wishlist/EmptyWishList";
import WishlistCard from "@/components/wishlist/WishlistCard";
import { redirect } from "next/navigation";

const WishlistPage = async () => {
  const session = await auth();
  if (!session?.user) return redirect("/login");
  const wishlist = await fetch(
    `https://lwskart-bice.vercel.app/api/wishlist/${session?.user?.id}`,
    {
      next: {
        tags: ["wishlist"],
      },
    }
  );
  const data = await wishlist.json();
  return (
    <>
      <BreadCrumb />
      <div className="container gap-6 pt-4 pb-16">
        <div className="mx-auto space-y-4 max-w-6xl">
          {data?.length
            ? data?.map((item) => <WishlistCard key={item._id} data={item} />)
            : <EmptyWishList/>}
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
