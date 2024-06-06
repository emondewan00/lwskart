"use client";
import addToCart from "@/actions/addToCart";
import removeToWishList from "@/actions/removeToWishList";
import { redirect } from "next/navigation";

const AddToCartBTN = ({
  session,
  pd,
  style = "",
  formStyle = "",
  quantities,
  removeToWishlist = false,
}) => {
  const cart = {
    user_id: session?.user?.id,
    email: session?.user?.email,
    item: {
      product_id: pd,
      quantity: 1,
    },
  };
  const cartHandler = async (e) => {
    e.preventDefault();
    if (!session?.user || !quantities) return redirect("/login");
    if (removeToWishlist) {
      removeToWishList({ user_id: session?.user?.id, product_id: pd });
    }
    await addToCart(cart);
  };
  return (
    <form onSubmit={cartHandler} className={formStyle}>
      <button
        disabled={!session?.user || !quantities}
        type="submit"
        className={` w-full py-1 text-center text-white bg-primary border border-primary  hover:bg-transparent hover:text-primary transition  ${style} ${
          !session?.user || !quantities
            ? "cursor-not-allowed"
            : "cursor-pointer"
        } `}
      >
        {quantities ? "Add to cart" : "Stock Out"}
      </button>
    </form>
  );
};

export default AddToCartBTN;
