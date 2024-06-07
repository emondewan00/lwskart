"use server";

import connectMongo from "@/lib/connectDb";
import cartModel from "@/schema/cartModel";
import OrderModel from "@/schema/orderModel";
import { revalidateTag } from "next/cache";
const placeOrder = async (data) => {
  await connectMongo();
  const newOrder = await OrderModel.create(data);
  if (newOrder?.email) {
    const removeToCart = await cartModel.deleteOne({ email: newOrder?.email });
    revalidateTag("cartLength");
  }
  return {
    message: "Order created successfully",
    status: "success",
    id: newOrder._id.toString(),
  };
};

export default placeOrder;
