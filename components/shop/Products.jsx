import ProductCard from "../shared/ProductCard";
import data from "@/data/products.json";

const Products = () => {
  return (
    <div class="col-span-3">
      <div class="grid md:grid-cols-3 grid-cols-2 gap-6">
        {data.products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
