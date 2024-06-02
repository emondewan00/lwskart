import getProducts from "@/utils/query/getProducts";
import ProductCard from "../shared/ProductCard";
const Products = async ({ searchParams = {} }) => {
  const data = await getProducts(searchParams);
  return (
    <div className="col-span-3">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
        {data?.map((product, idx) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
