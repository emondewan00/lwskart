import methods from "@/public/images/methods.png";
import Image from "next/image";
const Copyright = () => {
  return (
    <div class="bg-gray-800 py-4">
      <div class="container flex items-center justify-between">
        <p class="text-white">&copy; TailCommerce - All Right Reserved</p>
        <div>
          <Image src={methods} alt="methods" class="h-5 w-60" />
        </div>
      </div>
    </div>
  );
};

export default Copyright;
