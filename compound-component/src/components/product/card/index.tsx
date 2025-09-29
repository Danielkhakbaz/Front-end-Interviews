import ProductButton from "./button";
import ProductImage from "./image";
import ProductInfo from "./info";

type ProductCardProps = {
  image: any;
  title: any;
  category: any;
  stars: any;
  reviews: any;
  price: any;
  onAddToCart: any;
  showCategory?: boolean;
};

const ProductCard = ({
  image,
  title,
  category,
  stars,
  price,
  onAddToCart,
  showCategory=true,
}: ProductCardProps) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm product-card">
      {image && <ProductImage image={image} />}

      <div className="card-body flex justify-center items-center text-center">
        <ProductInfo
          title={title}
          category={category}
          stars={stars}
          price={price}
          currency={"$"}
          showCategory={showCategory}
        />
        {onAddToCart && (
          <div className="card-actions justify-end">
            <ProductButton onClick={onAddToCart}>Add to Cart</ProductButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
