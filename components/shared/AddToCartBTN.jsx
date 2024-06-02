"use client";
import addToCart from "@/actions/addToCart";

const AddToCartBTN = ({ session, pd, style = "", formStyle = "" }) => {
  const cart = {
    user_id: session?.user.id,
    email: session?.user?.email,
    item: {
      product_id: pd,
      quantity: 1,
    },
  };
  const cartHandler = async (e) => {
    e.preventDefault();
    if (!session?.user) return;
    await addToCart(cart);
  };
  return (
    <form onSubmit={cartHandler} className={formStyle}>
      <button
        disabled={!session?.user}
        type="submit"
        className={` w-full py-1 text-center text-white bg-primary border border-primary  hover:bg-transparent hover:text-primary transition cursor-pointer ${style}`}
      >
        Add to cart
      </button>
    </form>
  );
};

export default AddToCartBTN;
