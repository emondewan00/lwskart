import BreadCrumb from "@/components/shared/BreadCrumb";
import Wishlist from "@/components/wishlist/Wishlist";

const WishlistPage = () => {
  return (
    <>
      <BreadCrumb />
      <div class="container gap-6 pt-4 pb-16">
        <Wishlist />
      </div>
    </>
  );
};

export default WishlistPage;
