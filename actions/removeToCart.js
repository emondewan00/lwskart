"use server";
import connectMongo from "@/lib/connectDb";
import cartModel from "@/schema/cartModel";
import updateProductInventory from "@/utils/updateProductInventory";
import { Types } from "mongoose";
import { revalidateTag } from "next/cache";

const removeToCart = async (data) => {
  await connectMongo();
  const removeCartItem = await cartModel.updateOne(
    {
      user_id: new Types.ObjectId(data.user_id),
    },
    {
      $pull: {
        items: {
          product_id: new Types.ObjectId(data.product_id),
        },
      },
    }
  );
  const upInventory = await updateProductInventory(
    data.product_id,
    data.quantity,
    "dec"
  );
  revalidateTag("cartItems");
  return removeCartItem;
};
export default removeToCart;
