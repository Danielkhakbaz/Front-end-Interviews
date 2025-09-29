import { useProductCardContext } from "../context";

const ProductStars = () => {
  const { product } = useProductCardContext();

  return <p>{product.ratings.stars} out of 5</p>;
};

export default ProductStars;
