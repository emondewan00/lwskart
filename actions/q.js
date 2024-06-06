"use server";
import connectMongo from "@/lib/connectDb";
import cartModel from "@/schema/cartModel";
import updateProductInventory from "@/utils/updateProductInventory";
import { Types } from "mongoose";
import { revalidateTag } from "next/cache";

const addToCart = async (data) => {
  const {
    user_id,
    email,
    item: { product_id, quantity, incOrDecNum },
  } = data;
  await connectMongo();
  const updateProductQuantity = await updateProductInventory(
    product_id,
    quantity,
    "inc",
    incOrDecNum
  );
  // if updateProductQuantity is not available or not updated
  if (updateProductQuantity.status === "error") return null;
};
