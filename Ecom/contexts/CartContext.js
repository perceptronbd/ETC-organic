import React, { createContext, useEffect, useState } from "react";
import {
  addToCart,
  decreaseQuantity,
  getCartDetails,
  increaseQuantity,
} from "../api";

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
  };

  const incQty = async (productId) => {
    try {
      setLoading(true);
      increaseQuantity(productId).then((res) => {
        console.log("...CartContext increaseQuantity addToCart response:", res);
        const { status } = res;
        if (status === 200) {
          getCartDetails().then((res) => {
            console.log(
              "...CartContext increaseQuantity fetchCartDetails response:",
              res,
            );
            const { data, status } = res;
            if (status === 200) {
              setCart(data);
              setProducts(data.products);
            } else {
              setLoading(false);
              setMessage(data.message);
            }
          });
          setLoading(false);
          setMessage("পণ্য কার্ট যোগ করা হয়েছে");
        } else {
          setLoading(false);
          setMessage("Something went wrong");
        }
        setLoading(false);
      });
    } catch (error) {
      console.log("...CartContext increaseQuantity error:", error);
    }
  };

  const decQty = async (productId) => {
    try {
      setLoading(true);
      decreaseQuantity(productId).then((res) => {
        console.log("...CartContext decreaseQuantity addToCart response:", res);
        const { status } = res;
        if (status === 200) {
          getCartDetails().then((res) => {
            console.log(
              "...CartContext decreaseQuantity fetchCartDetails response:",
              res,
            );
            const { data, status } = res;
            if (status === 200) {
              setCart(data);
              setProducts(data.products);
            } else {
              setLoading(false);
              setMessage(data.message);
            }
          });
          setLoading(false);
          setMessage("পণ্য কার্ট যোগ করা হয়েছে");
        } else {
          setLoading(false);
          setMessage("Something went wrong");
        }
        setLoading(false);
      });
    } catch (error) {
      console.log("...CartContext decreaseQuantity error:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        loading,
        message,
        updateProductDetails,
        incQty,
        decQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
