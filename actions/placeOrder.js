"use server";

import connectMongo from "@/lib/connectDb";
import OrderModel from "@/schema/orderModel";
import mongoose from "mongoose";
const placeOrder = async (data) => {
  await connectMongo();
  const session = await mongoose.startSession();
  session.startTransaction();

  const newOrder = await OrderModel.create(data);
  console.log(newOrder);
};

export default placeOrder;
