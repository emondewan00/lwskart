import { auth } from "@/auth";
import Ads from "@/components/home/Ads";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Features from "@/components/home/Features";
import NewArrival from "@/components/home/NewArrival";
import Product from "@/components/home/Product";
import { Suspense } from "react";

export default async function Home() {
  const session = await auth();
  // console.log(session?.user,"session");
  return (
    <>
      <Banner />
      <Features />
      <Categories />
      <Suspense fallback={<></>}>
        <NewArrival />
      </Suspense>
      <Ads />
      <Product />
    </>
  );
}
