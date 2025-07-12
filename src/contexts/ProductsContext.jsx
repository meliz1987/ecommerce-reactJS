import React, { createContext, useState } from 'react';
export const ProductsContext = createContext();


export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };
  const editProduct = (productUpdated) => {
    setProducts(
      products.map((product) =>
        product.id === productUpdated.id ? productUpdated : product
      )
    );
  };
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  return (
    <ProductsContext.Provider
      value={{ products, addProduct, editProduct, deleteProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};