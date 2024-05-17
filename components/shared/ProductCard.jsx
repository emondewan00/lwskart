import Image from "next/image";
import Link from "next/link";
import { FaRegHeart, FaSearch, FaStar } from "react-icons/fa";

const ProductCard = ({ product, id }) => {
  const { name, image, price, discount_price } = product;
  return (
    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <Image
          width={365}
          height={250}
          src={`${image[0] + "&" + id}`}
          alt={name}
          className="w-full"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
          justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <Link
            href={`/product/${1}`}
            className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            <FaSearch />
          </Link>
          <Link
            href="#"
            className="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="add to wishlist"
          >
            <FaRegHeart />
          </Link>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <Link href={`/product/${1}`}>
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {name}
          </h4>
        </Link>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">${price}</p>
          <p className="text-sm text-gray-400 line-through">${discount_price}</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <a
        href="#"
        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
      >
        Add to cart
      </a>
    </div>
  );
};

export default ProductCard;
