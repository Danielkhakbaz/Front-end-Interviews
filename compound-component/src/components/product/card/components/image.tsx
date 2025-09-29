import { useProductCardContext } from "../context";

const ProductImage = () => {
  const { product } = useProductCardContext();

  return <img className="w-96 h-96" src={product.image} alt="..." />;
};

export default ProductImage;
