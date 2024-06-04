import connectMongo from "@/lib/connectDb";
import ProductCard from "../shared/ProductCard";
import productModel from "@/schema/productModel";
import CardSkeleton from "../shared/CardSkeleton";

const NewArrival = async () => {
  await connectMongo();
  const products = await productModel.find({}).sort({ createdAt: -1 }).limit(3);

  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        top new arrival
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} id={product._id} />
        ))}
        <CardSkeleton />
      </div>
    </div>
  );
};

export default NewArrival;
