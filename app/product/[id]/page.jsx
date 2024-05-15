import Description from "@/components/productDetails/Description";
import ProductDetail from "@/components/productDetails/ProductDetail";
import RelatedProduct from "@/components/productDetails/RelatedProduct";
import BreadCrumb from "@/components/shared/BreadCrumb";

const ProductDetailsPage = () => {
  return (
    <>
      <BreadCrumb />
      <ProductDetail />
      <Description />
      <RelatedProduct />
    </>
  );
};

export default ProductDetailsPage;
