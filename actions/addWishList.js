"use server";
import connectMongo from "@/lib/connectDb";
import wishlistModel from "@/schema/wishlistModel";
import { Types } from "mongoose";
import { revalidateTag } from "next/cache";

const addToWishList = async (data) => {
  const { user_id, product_id } = data;
  await connectMongo();
  const find = await wishlistModel.findOne({
    user_id: new Types.ObjectId(user_id),
    product_id: new Types.ObjectId(product_id),
  });
  revalidateTag("wishlistLength");
  if (find) {
    return find;
  }
  const newWishList = await wishlistModel.create(data);
  return newWishList;
};

export default addToWishList;
