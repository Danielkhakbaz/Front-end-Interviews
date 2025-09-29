type ProductType = {
  id: number;
  image: string;
  title: string;
  category: string;
  ratings: {
    stars: number;
    reviews: number;
  };
  price: number;
};

export const product: ProductType = {
  id: 1,
  image: "https://iili.io/HCURIHu.jpg",
  title: "Vision Earl Grey Tea",
  category: "Black Tea",
  ratings: { stars: 4, reviews: 4 },
  price: 8.95,
};
