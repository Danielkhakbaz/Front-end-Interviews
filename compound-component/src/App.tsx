import ProductCard from "./components/product/card";

const product = [
  {
    id: 1,
    image: "https://iili.io/HCURIHu.jpg",
    title: "Vision Earl Grey Tea",
    category: "Black Tea",
    ratings: { stars: 4, reviews: 4 },
    price: 8.95,
  },
  {
    id: 2,
    image: "https://iili.io/HCURwHu.jpg",
    title: "Links of my socials",
    category: "My Socials",
    ratings: { stars: 4.5, reviews: 4 },
    price: 4.25,
  },
];

const App = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center gap-4">
      <ProductCard
        image={product[0].image}
        title={product[0].title}
        reviews={product[0].ratings.reviews}
        price={product[0].price}
        category={product[0].category}
        stars={product[0].ratings.stars}
        onAddToCart={() => alert("The product[0] got added to the cart!")}
      />

      <ProductCard
        image={product[1].image}
        title={product[1].title}
        reviews={product[1].ratings.reviews}
        price={product[1].price}
        category={product[1].category}
        stars={product[1].ratings.stars}
        onAddToCart={() => alert("The product[1] got added to the cart!")}
        showCategory={false}
      />
    </section>
  );
};

export default App;
