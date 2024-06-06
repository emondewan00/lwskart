"use client";
import cartAction from "@/actions/cartAction";
import removeToWishList from "@/actions/removeToWishList";

const CartBTN = ({
  session,
  product,
  formStyle = "",
  style = "",
  deleteWishItem = false,
}) => {
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (deleteWishItem) {
      removeToWishList({ user_id: session?.user?.id, product_id: product.id });
    }
    await cartAction({
      user: session?.user,
      product: { ...product, quantity: 1 },
      incOrDecNum: 1,
      type: "inc",
    });
  };
  return (
    <form onSubmit={handelSubmit} className={formStyle}>
      <button
        disabled={!session?.user || !product?.quantities}
        type="submit"
        className={`block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition ${style}`}
      >
        {product?.quantities ? "Add to cart" : "Out of Stock"}
      </button>
    </form>
  );
};

export default CartBTN;
