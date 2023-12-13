import React, { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const updateProductDetails = (details) => {
    //spread array and add new details
    // setProducts([...products, details]);
    //if the previous details is same as the new details then update the quantity
    //else add new details console.log("CartContext");

    const newProducts = [...products];
    const index = newProducts.findIndex((p) => p.id === details.id);
    if (index === -1) {
      newProducts.push(details);
    } else {
      newProducts[index] = details;
    }

    setProducts([...newProducts]);
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
