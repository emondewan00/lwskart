import categoryLabels from "@/data/categoryLabels";
import CategoryWisePDNum from "./CategoryWisePDNum";
import FilterByCategory from "./FilterByCategory";
import FilterBySize from "./FilterBySize";
import FilterByPrice from "./FilterbyPrice";

const Sidebar = async () => {
  return (
    <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hiddenb hidden md:block">
      <div className="divide-y divide-gray-200 space-y-5">
        {/* filter by category */}
        <FilterByCategory>
          {categoryLabels.map((item) => (
            <CategoryWisePDNum key={item.id} name={item.name} />
          ))}
        </FilterByCategory>
        {/* filter by price */}
        <FilterByPrice />
        {/* filter by size */}
        <FilterBySize />
      </div>
    </div>
  );
};

export default Sidebar;
