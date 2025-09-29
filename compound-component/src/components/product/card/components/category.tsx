import { useProductCardContext } from "../context";

const ProductCategory = () => {
  const { product } = useProductCardContext();

  return <p>{product.category}</p>;
};

export default ProductCategory;
