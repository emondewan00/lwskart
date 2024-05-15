import Image from "next/image";
import logo from "@/public/images/logo.svg";
import Link from "next/link";
import { FaRegHeart, FaRegUser, FaSearch } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
const Header = () => {
  return (
    <header class="py-4 shadow-sm bg-white">
      <div class="container flex items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="Logo" class="w-32" />
        </Link>

        <div class="w-full max-w-xl relative flex ">
          <span class="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
            <FaSearch />
          </span>
          <input
            type="text"
            name="search"
            id="search"
            class="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
            placeholder="search"
          />
          <button class="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex items-center">
            Search
          </button>
        </div>

        <div class="flex items-center space-x-4">
          <Link
            href="/wishlist"
            class="text-center text-gray-700 hover:text-primary transition relative flex flex-col gap-1 "
          >
            <div class="text-2xl mx-auto">
              <FaRegHeart />
            </div>
            <div class="text-xs leading-3">Wishlist</div>
            <div class="absolute -right-1 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs ">
              8
            </div>
          </Link>
          <Link
            href="/cart"
            class="text-center text-gray-700 hover:text-primary transition relative flex flex-col gap-1 "
          >
            <div class="text-2xl">
              <BsBag />
            </div>
            <div class="text-xs leading-3">Cart</div>
            <div class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs ">
              2
            </div>
          </Link>
          <Link
            href="/account"
            class="text-center text-gray-700 hover:text-primary transition relative flex flex-col gap-1 "
          >
            <div class="text-2xl mx-auto">
              <FaRegUser />
            </div>
            <div class="text-xs leading-3">Account</div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
