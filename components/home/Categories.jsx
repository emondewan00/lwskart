import CategoryCard from "./CategoryCard";
import categoryData from "@/data/categoryLinks";
const Categories = () => {
  return (
    <div class="container py-16">
      <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div class="grid grid-cols-3 gap-3">
        {categoryData.map(( category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
