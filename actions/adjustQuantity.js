"use server";
import connectMongo from "@/lib/connectDb";
import cartModel from "@/schema/cartModel";
import { Types } from "mongoose";
import { revalidateTag } from "next/cache";
const adjustQuantity = async (data) => {
  const { user_id, product_id, quantity } = data;
  await connectMongo();
  const cart = await cartModel.updateOne(
    { user_id: new Types.ObjectId(user_id) },
    {
      $set: {
        "items.$[e].quantity": quantity,
      },
    },
    {
      arrayFilters: [
        {
          "e.product_id": new Types.ObjectId(product_id),
        },
      ],
    }
  );
  revalidateTag("cartLength");
};

export default adjustQuantity;
