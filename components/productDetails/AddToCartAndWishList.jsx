"use client";
import { useState, useTransition } from "react";
import addToCart from "@/actions/addToCart";
import { BsBag } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import addToWishList from "@/actions/addWishList";
const AddToCartAndWishlist = ({ session, product }) => {
  const [quantity, setQuantity] = useState(1);
  const [pending, startTransition] = useTransition();
  const cart = {
    user_id: session?.user?.id,
    email: session?.user?.email,
    item: {
      product_id: product.id,
      quantity,
    },
  };
  const cartHandler = async (e) => {
    e.preventDefault();
    await addToCart(cart);
  };
  return (
    <>
      <div className="mt-4">
        <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
          <button
            disabled={quantity === 1}
            onClick={() => setQuantity((prev) => prev - 1)}
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            min={1}
            max={product.quantities}
            className="h-8 w-20 outline-none text-base px-2"
            readOnly
          />
          <button
            disabled={quantity > product.quantities || !product?.quantities}
            onClick={() => setQuantity((prev) => prev + 1)}
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
          >
            +
          </button>
        </div>
      </div>

      <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
        <form onSubmit={cartHandler}>
          <button
            disabled={quantity > product.quantities || !product?.quantities}
            type="submit"
            className={`bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition ${
              quantity > product.quantities || !product?.quantities
                 ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            {product?.quantities ? (
              <>
                <BsBag /> Add to cart
              </>
            ) : (
              "Out of Stock"
            )}
          </button>
        </form>
        <button
          onClick={() =>
            startTransition(() => {
              addToWishList({
                product_id: product.id,
                user_id: session?.user?.id,
              });
            })
          }
          className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
        >
          <FaHeart /> Wishlist
        </button>
      </div>
    </>
  );
};

export default AddToCartAndWishlist;
