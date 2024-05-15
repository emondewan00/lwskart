import BreadCrumb from "@/components/shared/BreadCrumb";
import WishlistCard from "@/components/wishlist/WishlistCard";

const WishlistPage = () => {
  return (
    <>
      <BreadCrumb />
      <div class="container gap-6 pt-4 pb-16">
        <div class="mx-auto space-y-4 max-w-6xl">
          <WishlistCard />
          <WishlistCard />
          <WishlistCard />
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
