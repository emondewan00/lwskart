import Image from "next/image";
import logo from "@/public/images/logo.svg";
import solutionsLinks from "@/data/solutionLinks";
import supportLinks from "@/data/supportLinks";
import Link from "next/link";
const Footer = () => {
  return (
    <footer class="bg-white pt-16 pb-12 border-t border-gray-100">
      <div class="container grid grid-cols-1 ">
        <div class="col-span-1 space-y-4">
          <Image src={logo} alt="logo" class="w-30" />
          <div class="mr-2">
            <p class="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              hic?
            </p>
          </div>
          <div class="flex space-x-5">
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <i class="fa-brands fa-facebook-square"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <i class="fa-brands fa-instagram-square"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <i class="fa-brands fa-twitter-square"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <i class="fa-brands fa-github-square"></i>
            </a>
          </div>
        </div>
        <div class="col-span-2 grid grid-cols-2 gap-4">
          <div class="grid grid-cols-2 gap-4 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Solutions
              </h3>
              <div class="mt-4 space-y-4">
                {solutionsLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    class="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </h3>
              <div class="mt-4 space-y-4">
                {supportLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    class="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Solutions
              </h3>
              <div class="mt-4 space-y-4">
                {solutionsLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    class="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </h3>
              <div class="mt-4 space-y-4">
                {supportLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    class="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
