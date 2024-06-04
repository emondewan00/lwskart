"use server";
import connectMongo from "@/lib/connectDb";
import productModel from "@/schema/productModel";
const post = async () => {
  await connectMongo();
  const countProduct = await productModel.find().countDocuments();
  console.log(countProduct,"Product counts updated")
};

export default post;
