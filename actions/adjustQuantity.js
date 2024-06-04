"use server";
import checkQuantity from "@/lib/checkQuantity";
import connectMongo from "@/lib/connectDb";
import cartModel from "@/schema/cartModel";
import updateProductInventory from "@/utils/updateProductInventory";
import { Types } from "mongoose";
import { revalidateTag } from "next/cache";
const adjustQuantity = async (data) => {
  const { user_id, product_id, quantity, type } = data;
  await connectMongo();
  console.log(type, "updateProductInventory");
  console.log(data,"hello adjustQuantity")
  const updateProductQuantity = await updateProductInventory(
    product_id,
    quantity,
    type
  );
  // if updateProductQuantity is not available or not updated
  if (updateProductQuantity.status === "error") return null;

  if (quantity <= 0) {
    const cart = await cartModel.updateOne(
      {
        user_id: new Types.ObjectId(user_id),
        "items.product_id": new Types.ObjectId(product_id),
      },
      { $pull: { items: { product_id: new Types.ObjectId(product_id) } } }
    );
    revalidateTag("cartItems");
    revalidateTag("cartLength");
    return null;
  }

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
  revalidateTag("cartItems");
};

export default adjustQuantity;
