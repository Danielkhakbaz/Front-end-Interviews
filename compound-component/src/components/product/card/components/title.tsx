import { useProductCardContext } from "../context";

const ProductTitle = () => {
  const { product } = useProductCardContext();

  return <p className="card-title">{product.title}</p>;
};

export default ProductTitle;
