import ProductCard from "../shared/ProductCard";
import connectMongo from "@/lib/connectDb";
import productModel from "@/schema/productModel";
const Products = async ({ searchParams }) => {
  await connectMongo();
  let data = [];
  if (searchParams.category) {
    data = await productModel.find({
      category: { $in: searchParams.category.split(",") },
    });
  } else {
    data = await productModel.find({});
  }
  return (
    <div className="col-span-3">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
        {data?.map((product, idx) => (
          <ProductCard key={idx} product={product} id={idx} />
        ))}
      </div>
    </div>
  );
};

export default Products;
