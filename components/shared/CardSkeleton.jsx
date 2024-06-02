import Image from "next/image";
import placeholder from "@/public/360x265.svg";
const CardSkeleton = () => {
  return (
    <div className="bg-white shadow rounded overflow-hidden group flex flex-col animate-pulse">
      <Image src={placeholder} alt="Placeholder Image" />
      <div className="pt-4 pb-3 px-4 *:bg-gray-200 ">
        <p className="w-full h-7 mb-2"></p>
        <p className="w-1/2 h-7 mb-1 "></p>
        <p className="w-1/3 h-4"></p>
      </div>
      <p className="w-full h-[34px] bg-gray-200 mt-auto"></p>
    </div>
  );
};

export default CardSkeleton;
