"use server";

import checkQuantity from "@/lib/checkQuantity";
import connectMongo from "@/lib/connectDb";

import productModel from "@/schema/productModel";
import { Types } from "mongoose";

const updateProductInventory = async (product, quantity, type) => {
  await connectMongo();
  if (type === "dec") {
    const update = await productModel.updateOne(
      { _id: new Types.ObjectId(product) },
      { $inc: { quantities: 1 } }
    );
    return { message: "Product updated", status: "success" };
  }

  const availability = await checkQuantity(product, quantity);
  if (!availability) {
    return { message: "Product not available", status: "error" };
  }
  if (availability) {
    const update = await productModel.updateOne(
      { _id: new Types.ObjectId(product) },
      { $inc: { quantities: -1 } }
    );
    return { message: "Product updated", status: "success" };
  }
};

export default updateProductInventory;
