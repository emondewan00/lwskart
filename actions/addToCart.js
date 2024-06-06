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
    item: { product_id, quantity },
  } = data;
  await connectMongo();
  const updateProductQuantity = await updateProductInventory(
    product_id,
    quantity,
    "inc"
  );

  // if updateProductQuantity is not available or not updated
  if (updateProductQuantity.status === "error") return null;
  // Find the user cart
  let cart = await cartModel.findOne({
    user_id: new Types.ObjectId(user_id),
  });

  //if cart not found create new cart
  if (!cart) {
    const newCart = await cartModel.create({
      user_id,
      email,
      items: [{ product_id, quantity }],
    });
    revalidateTag("cartLength");
    return { message: "Product added  successfully" };
  }
  // Check if the product already exists in the cart
  const existingItem = cart.items.find((item) =>
    item.product_id.equals(product_id)
  );
  if (existingItem) {
    // If the product already exists, update its quantity
    existingItem.quantity += quantity;
  } else {
    // If the product doesn't exist, add it to the cart
    cart.items.push({ product_id, quantity });
  }
  revalidateTag("cartLength");
  // Save the cart
  await cart.save();
  return { message: "Product added successfully" };
};

export default addToCart;
