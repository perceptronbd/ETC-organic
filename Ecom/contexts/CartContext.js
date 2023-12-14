import React, { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const updateProductDetails = (details) => {
    const { id, quantity } = details;

    console.log("updateProductDetails", details);

    // Check if the product already exists in the cart
    const existingProductIndex = products.findIndex((p) => p.id === id);

    if (existingProductIndex !== -1) {
      // If the product exists, update its quantity
      const updatedProducts = [...products];
      updatedProducts[existingProductIndex].quantity = quantity;
      setProducts(updatedProducts);
    } else {
      // If the product is new, add it to the cart
      setProducts([...products, details]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        products,
        updateProductDetails,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
