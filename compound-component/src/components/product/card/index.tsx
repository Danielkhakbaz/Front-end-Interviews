import { ProductCardContext } from "./context";

import ProductImage from "./components/image";
import ProductInfo from "./components/info";
import ProductCategory from "./components/category";
import ProductTitle from "./components/title";
import ProductStars from "./components/stars";
import ProductPrice from "./components/price";
import ProductButton from "./components/button";

import { product } from "../../../services";

type ProductCardProps = {
  image?: React.ReactNode;
  info?: React.ReactNode;
  actions?: React.ReactNode;
};

const ProductCard = ({ image, info, actions }: ProductCardProps) => {
  return (
    <ProductCardContext.Provider value={{ product }}>
      <div className="card bg-base-100 w-96 shadow-sm product-card">
        {image}

        <div className="card-body flex justify-center items-center text-center">
          {info}
          {actions}
        </div>
      </div>
    </ProductCardContext.Provider>
  );
};

ProductCard.Image = ProductImage;
ProductCard.Info = ProductInfo;
ProductCard.Category = ProductCategory;
ProductCard.Title = ProductTitle;
ProductCard.Stars = ProductStars;
ProductCard.Price = ProductPrice;
ProductCard.Button = ProductButton;

export default ProductCard;
