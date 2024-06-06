import Ads from "@/components/home/Ads";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Features from "@/components/home/Features";
import NewArrival from "@/components/home/NewArrival";
import Product from "@/components/home/Product";
import CardSkeleton from "@/components/shared/CardSkeleton";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Banner />
      <Features />
      <Categories />
      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          top new arrival
        </h2>
        <Suspense
          fallback={
            <CardSkeleton
              num={4}
              style={"grid grid-cols-2 md:grid-cols-4 gap-6"}
            />
          }
        >
          <NewArrival />
        </Suspense>
      </div>
      <Ads />
      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          TRENDING PRODUCTS
        </h2>
        <Suspense
          fallback={
            <CardSkeleton
              num={8}
              style={"grid grid-cols-2 md:grid-cols-4 gap-6"}
            />
          }
        >
          <Product />
        </Suspense>
      </div>
    </>
  );
}
