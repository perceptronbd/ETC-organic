import React, { createContext, useEffect, useState } from "react";
import { addToCart, getCartDetails } from "../api";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCartDetails = async () => {
      try {
        getCartDetails().then((res) => {
          console.log(
            "...CartContext useEffect fetchCartDetails response:",
            res,
          );
          const { data, status } = res;
          if (status === 200) {
            setCart(data);
            setProducts(data.products);
          } else {
            setMessage(data.message);
          }
        });
      } catch (error) {
        console.log("...CartContext useEffect fetchCartDetails error:", error);
      }
    };

    fetchCartDetails();
  }, []);

  const updateProductDetails = async (details) => {
    const { _id, quantity } = details;

    console.log("...CartContext updateProductDetails", details);

    try {
      setLoading(true);
      addToCart(_id, quantity).then((res) => {
        console.log(
          "...CartContext updateProductDetails addToCart response:",
          res,
        );
        const { data, status } = res;
        if (status === 200) {
          setCart(data);
          getCartDetails().then((res) => {
            console.log(
              "...CartContext updateProductDetails fetchCartDetails response:",
              res,
            );
            const { data, status } = res;
            if (status === 200) {
              setCart(data);
              setProducts(data.products);
            } else {
              setMessage(data.message);
            }
          });
          setLoading(false);
          setMessage("পণ্য কার্ট যোগ করা হয়েছে");
        } else {
          setLoading(false);
          setMessage(data.message);
        }
      });
    } catch (error) {
      setLoading(false);
      console.log(
        "...CartContext updateProductDetails addToCart error:",
        error,
      );
    }
    // Check if the product already exists in the cart
    // const existingProductIndex = products.findIndex((p) => p.id === _id);

    // if (existingProductIndex !== -1) {
    //   // If the product exists, update its quantity
    //   const updatedProducts = [...products];
    //   updatedProducts[existingProductIndex].quantity = quantity;
    //   setProducts(updatedProducts);
    // } else {
    //   // If the product is new, add it to the cart
    //   setProducts([...products, details]);
    // }
  };

  return (
    <CartContext.Provider
      value={{
        products,
        updateProductDetails,
        cart,
        loading,
        message,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
