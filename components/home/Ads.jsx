import offer from "@/public/images/offer.jpg";
import Image from "next/image";
import Link from "next/link";
const Ads = () => {
  return (
    <div class="container pb-16">
      <Link href="#">
        <Image src={offer} alt="ads" class="w-full" />
      </Link>
    </div>
  );
};

export default Ads;
