"use server";
import connectMongo from "@/lib/connectDb";
import Wishlist from "@/schema/wishlistModel";
import { Types } from "mongoose";
import { revalidateTag } from "next/cache";

const addToWishList = async (data) => {
  const { user_id, product_id } = data;
  await connectMongo();
  const find = await Wishlist.findOne({
    user_id: new Types.ObjectId(user_id),
    product_id: new Types.ObjectId(product_id),
  });
  revalidateTag("wishlistLength");
  if (find) {
    return find;
  }
  const newWishList = await Wishlist.create(data);
  return newWishList;
};

export default addToWishList;
