import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View } from "native-base";
import React, { useContext, useEffect } from "react";
import { Pressable, ScrollView } from "react-native";
import tailwind from "twrnc";
import { CartCard, StyledButton, StyledText } from "../../../components";
import COLOR from "../../../constants/COLOR";
import CartContext from "../../../contexts/CartContext";
import { formatNumbers } from "../../../utils/formatNumbers";

export default function Page() {
  const { products, updateProductDetails } = useContext(CartContext);

  console.log("===cart page===", products);

  useEffect(() => {
    console.log("...cart page useEffect", products);
  }, [products]);

  const onCheckout = () => {
    router.push("/checkOut");
  };

  const handleQuantityChange = async (product, newQuantity) => {
    console.log("...cart page handleQuantityChange", product._id, newQuantity);
  };

  const totalPrice = products.reduce(
    (acc, item) => acc + item.product.salesPrice * item.quantity,
    0,
  );

  return (
    <View style={tailwind`flex-1`}>
      <Pressable
        style={tailwind`my-2 flex-row items-center px-2`}
        onPress={() => router.replace("/(drawer)/(tabs)/home")}
      >
        <Ionicons name="md-chevron-back-sharp" size={24} color="black" />
        <StyledText type="b">কার্ট</StyledText>
      </Pressable>

      {products.length > 0 ? (
        <ScrollView
          contentContainerStyle={{
            columnGap: 10,
            rowGap: 10,
            alignItems: "center",
          }}
        >
          {products.map(({ product, quantity }) => (
            <CartCard
              key={product._id}
              name={product.productName}
              image={product.image}
              price={product.salesPrice}
              quantity={quantity}
              setQuantity={(newQuantity) =>
                handleQuantityChange(product, newQuantity)
              }
            />
          ))}
        </ScrollView>
      ) : (
        <View style={tailwind`flex-1 items-center justify-center`}>
          <StyledText
            variant="displaySmall"
            type="b"
            style={{
              lineHeight: 50,
              color: COLOR.neutral,
            }}
          >
            কার্টে কোন পণ্য নেই
          </StyledText>
        </View>
      )}
      {products.length > 0 && (
        <Checkout totalPrice={totalPrice} onCheckout={onCheckout} />
      )}
    </View>
  );
}

const Checkout = ({ totalPrice, onCheckout }) => {
  return (
    <View style={tailwind`p-4`}>
      <View style={tailwind`flex-row`}>
        <StyledText
          type="b"
          style={{
            color: "#808080",
          }}
        >
          মোটঃ
        </StyledText>
        <StyledText type="b"> ৳ {formatNumbers(totalPrice)}</StyledText>
        <StyledText> +ডেলিভারি চার্জ</StyledText>
      </View>
      <StyledButton height={"md"} onPress={onCheckout}>
        চেকআউট
      </StyledButton>
    </View>
  );
};
