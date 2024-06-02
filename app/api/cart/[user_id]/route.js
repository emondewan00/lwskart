import connectMongo from "@/lib/connectDb";
import cartModel from "@/schema/cartModel";
import { NextResponse } from "next/server";

export const GET = async (req, { params: { user_id } }) => {
  try {
    await connectMongo();
    const cart = await cartModel
      .findOne({ user_id: user_id })
      .populate("items.product_id");
    return NextResponse.json(cart);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};
