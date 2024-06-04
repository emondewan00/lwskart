"use client";
import addToCart from "@/actions/addToCart";
import { redirect } from "next/navigation";

const AddToCartBTN = ({ session, pd, style = "", formStyle = "" }) => {
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
    if (!session?.user) return redirect("/login");
    await addToCart(cart);
  };
  return (
    <form onSubmit={cartHandler} className={formStyle}>
      <button
        disabled={!session?.user}
        type="submit"
        className={` w-full py-1 text-center text-white bg-primary border border-primary  hover:bg-transparent hover:text-primary transition  ${style} ${
          !session?.user ? "cursor-not-allowed" : "cursor-pointer"
        } `}
      >
        Add to cart
      </button>
    </form>
  );
};

export default AddToCartBTN;
