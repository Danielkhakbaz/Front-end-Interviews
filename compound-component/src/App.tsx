import ProductCard from "./components/product/card";

const App = () => {
  const onAddToCart = () => {
    alert("The product got added to the cart!");
  };

  return (
    <section className="w-screen h-screen flex justify-center items-center gap-4">
      <ProductCard
        image={<ProductCard.Image />}
        info={
          <ProductCard.Info>
            <div className="flex flex-col gap-2">
              <ProductCard.Category />
              <ProductCard.Title />
              <ProductCard.Stars />
              <ProductCard.Price currency="$" />
            </div>
          </ProductCard.Info>
        }
        actions={
          <ProductCard.Button onClick={onAddToCart}>
            Add to Cart
          </ProductCard.Button>
        }
      />
    </section>
  );
};

export default App;
