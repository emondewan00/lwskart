"use client";

import adjustQuantity from "@/actions/adjustQuantity";
import removeToCart from "@/actions/removeToCart";
import { useSession } from "next-auth/react";
import { useState, useTransition } from "react";

const QuantityInput = ({ product }) => {
  const { quantity: q, _id, quantities } = product;
  const [quantity, setQuantity] = useState(q || 0);
  const [isPending, startTransition] = useTransition();
  const { data } = useSession();
  return (
    <>
      <div className="flex items-center py-2 px-4  h-fit rounded ">
        <button
          className="px-2 font-bold"
          disabled={quantity === 0}
          onClick={() => {
            setQuantity((prev) => prev - 1);
            adjustQuantity({
              user_id: data?.user?.id,
              quantity:quantity - 1,
              type: "dec",
              product_id: _id,
            });
          }}
        >
          -
        </button>
        <input
          className="w-10 lg:w-32 text-center outline-none bg-gray-100"
          type="number"
          readOnly
          value={quantity || 0}
          max={quantities}
        />
        <button
          className="px-2 font-bold"
          disabled={quantity === product.quantities}
          onClick={() => {
            setQuantity((prev) => prev + 1);
            adjustQuantity({
              user_id: data?.user?.id,
              quantity:quantity+ 1,
              type: "inc",
              product_id: _id,
            });
          }}
        >
          +
        </button>
      </div>

      <button
        onClick={() =>
          startTransition(() => {
            removeToCart({
              user_id: data?.user.id,
              product_id: _id,
            });
          })
        }
        className="bg-[#FDF2F3] rounded text-red-500 py-2 px-4 lg:ml-10 w-fit mx-auto"
      >
        ✖
      </button>
    </>
  );
};

export default QuantityInput;
