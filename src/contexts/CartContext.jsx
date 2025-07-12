import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState(() => {
    // Al iniciar, leer localStorage
    const storedCart = localStorage.getItem("productsCart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    // Cada vez que cambia, guardar en localStorage
    localStorage.setItem("productsCart", JSON.stringify(productsCart));
  }, [productsCart]);

  const addProductToCart = (product) => {
    const exists = productsCart.find((p) => p.id === product.id);

    if (exists) {
      const updatedCart = productsCart.map((p) =>
        p.id === product.id
          ? { ...p, quantity: p.quantity + product.quantity }
          : p
      );
      setProductsCart(updatedCart);
    } else {
      setProductsCart([...productsCart, product]);
    }
  };

  const deleteProductCart = (id, removeAll = true) => {
    const newCart = productsCart.flatMap((p) => {
      if (p.id !== id) return [p];
      if (removeAll || p.quantity <= 1) {
        return [];
      }
      return [{ ...p, quantity: p.quantity - 1 }];
    });

    setProductsCart(newCart);
  };

  const clearCart = () => {
    setProductsCart([]);
  };

  return (
    <CartContext.Provider
      value={{ productsCart, addProductToCart, deleteProductCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
