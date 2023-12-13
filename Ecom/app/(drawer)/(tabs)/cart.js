import React, { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import CartContext from "../../../contexts/CartContext";

export default function Page() {
  const { products } = useContext(CartContext);

  console.log("cart page", products);

  useEffect(() => {
    console.log("cart page useEffect", products);
  }, [products]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {products.map((item, index) => (
        <Text key={index}>{item.name}</Text>
      ))}
    </View>
  );
}
