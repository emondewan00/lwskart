import connectMongo from "@/lib/connectDb";
import wishlistModel from "@/schema/wishlistModel";
import { NextResponse } from "next/server";

export const GET = async (req, { params: { user_id } }) => {
  try {
    await connectMongo();
    const wishlist = await wishlistModel
      .find({ user_id: user_id })
      .populate("product_id");
    return NextResponse.json(wishlist);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};
