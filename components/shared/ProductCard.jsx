import Link from "next/link";
import { FaRegHeart, FaSearch, FaStar } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div class="bg-white shadow rounded overflow-hidden group">
      <div class="relative">
        <img
          src="/images/products/product1.jpg"
          alt="product 1"
          class="w-full"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
          justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <Link
            href={`/product/${1}`}
            class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            <FaSearch />
          </Link>
          <Link
            href="#"
            class="text-white text-lg w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="add to wishlist"
          >
            <FaRegHeart />
          </Link>
        </div>
      </div>
      <div class="pt-4 pb-3 px-4">
        <Link href={`/product/${1}`}>
          <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            Guyer Chair
          </h4>
        </Link>
        <div class="flex items-baseline mb-1 space-x-2">
          <p class="text-xl text-primary font-semibold">$45.00</p>
          <p class="text-sm text-gray-400 line-through">$55.90</p>
        </div>
        <div class="flex items-center">
          <div class="flex gap-1 text-sm text-yellow-400">
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
          <div class="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <a
        href="#"
        class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
      >
        Add to cart
      </a>
    </div>
  );
};

export default ProductCard;
