const ProductInfo = ({
  title,
  category,
  stars,
  price,
  currency,
  showCategory,
}: any) => {
  return (
    <div className="flex flex-col gap-2">
      <span>{showCategory ? category : "-"}</span>
      <p className="card-title">{title}</p>
      <p>{stars} out of 5</p>
      <p>
        {price} {currency}
      </p>
    </div>
  );
};

export default ProductInfo;
