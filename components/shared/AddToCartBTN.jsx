"use client";
import addToCart from "@/actions/addToCart";

const AddToCartBTN = ({ user, pd, style = "", formStyle = "" }) => {
  const cart = {
    user_id: user.id,
    email: user?.email,
    item: {
      product_id: pd,
      quantity: 1,
    },
  };
  const cartHandler = async (e) => {
    e.preventDefault();
    if (!user) return;
    await addToCart(cart);
  };
  return (
    <form onSubmit={cartHandler} className={formStyle}>
      <button
        disabled={!user}
        type="submit"
        className={` w-full py-1 text-center text-white bg-primary border border-primary  hover:bg-transparent hover:text-primary transition cursor-pointer ${style}`}
      >
        Add to cart
      </button>
    </form>
  );
};

export default AddToCartBTN;
