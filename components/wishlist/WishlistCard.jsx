import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import AddToCartBTN from "../shared/AddToCartBTN";
import { auth } from "@/auth";
const WishlistCard = async ({ data: { product_id } }) => {
  const { name, image, price, discount_price, ratings, availability } =
    product_id;
  const session = await auth();

  return (
    <div className="grid grid-cols-4 p-4 border-gray-200 rounded border">
      <div className="col-span-3 flex gap-4 items-center">
        <div className="w-28">
          <Image
            width={115}
            height={85}
            src={image[0]}
            alt={name}
            className="w-full"
          />
        </div>
        <div className="w-1/3">
          <h2 className="text-gray-800 text-xl font-medium uppercase">
            {name}
          </h2>
          <p className="text-gray-500 text-sm">
            Availability:
            {availability ? (
              <span className="text-green-600">In Stock</span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </p>
        </div>

        <div className="text-primary text-lg font-semibold ">
          ${discount_price}
        </div>
      </div>
      <div className="flex items-center gap-8">
        <AddToCartBTN
          session={session}
          pd={product_id}
          style={"px-4 rounded "}
        />

        <div className="text-gray-600 cursor-pointer bg-rose-100 rounded p-2 hover:text-primary">
          <FaTrash />
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
