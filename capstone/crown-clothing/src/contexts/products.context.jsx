import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

//this is the actual value you want to access
export const ProductsContext = createContext({
  products: [],
});

//the provider is/is like a component.
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};