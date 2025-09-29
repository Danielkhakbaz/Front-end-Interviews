import { useProductCardContext } from "../context";

type ProductPriceProps = {
  currency: string;
};


const ProductPrice = ({ currency }: ProductPriceProps) => {
  const { product } = useProductCardContext();

  return (
    <p>
      {product.price} {currency}
    </p>
  );
};

export default ProductPrice;
