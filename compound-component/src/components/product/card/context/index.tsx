import { createContext, useContext } from "react";

export const ProductCardContext = createContext<any>(null);

export const useProductCardContext = () => {
  const context = useContext(ProductCardContext);

  if (!context) {
    throw new Error(
      "ProductCard. * component muse be rendered as child of ProductCard component."
    );
  }

  return context;
};
