import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { Image } from "native-base";
import React, { useContext, useState } from "react";
import { ScrollView, View } from "react-native";
import tailwind from "twrnc";
import { Counter, StyledButton, StyledText } from "../components";
import COLOR from "../constants/COLOR";
import CartContext from "../contexts/CartContext";
import { useCustomToast } from "../hooks";

const productDetails = () => {
  const { updateProductDetails } = useContext(CartContext);
  const showToast = useCustomToast();

  const [quantity, setQuantity] = useState(0);

  const item = useLocalSearchParams();

  // useEffect(() => {
  //   console.log("item", item);

  //   return () => {
  //     console.log("call API to save the data");
  //   };
  // }, []);

  const onAddToCart = () => {
    if (quantity === 0) {
      showToast({
        description: "Please select quantity",
        variant: "warning",
        placement: "top",
      });
      return;
    }
    showToast({ description: "Added to cart", variant: "success" });
    updateProductDetails({ item, quantity });
    // updateProductDetails({
    //   id: item.id,
    //   quantity,
    // });
  };

  return (
    <View style={tailwind`flex-1 items-center justify-between p-4`}>
      <View>
        <ProductImage image={item.img} name={item.name} />
        <Points points={item.points} />
        <ProductDetails
          title={item.name}
          price={item.price}
          details={item.details}
          csb={item.csb}
        />
      </View>
      {/* Add to cart */}
      <View style={tailwind`w-full`}>
        <Counter value={quantity} setValue={setQuantity} />
        <View style={tailwind`mb-8 mt-4 flex-row gap-2`}>
          <StyledText variant="bodyMedium">ডেলিভারি ডেডলাইন:</StyledText>
          <StyledText variant="bodyMedium" type="b">
            2 Days
          </StyledText>
        </View>

        <StyledButton variant={"outline"} onPress={onAddToCart}>
          Add to Cart
        </StyledButton>
      </View>
    </View>
  );
};

const ProductImage = ({ image, name }) => {
  return (
    <View
      style={tailwind`bg-[${COLOR.foreground}] my-8  items-center rounded-md`}
    >
      <Image size={"2xl"} source={image} alt={name} />
    </View>
  );
};

const Points = ({ points }) => {
  return (
    <View style={tailwind`mb-1 flex-row items-center justify-start gap-1`}>
      <MaterialIcons name="stars" size={15} color={COLOR.tertiary} />
      <StyledText
        type="b"
        variant="titleMedium"
        style={tailwind`text-[${COLOR.tertiary}]`}
      >
        {points}
      </StyledText>
      <StyledText
        variant="bodySmall"
        style={tailwind`text-[${COLOR.tertiary}]`}
      >
        points
      </StyledText>
    </View>
  );
};

const ProductDetails = ({ title, price, details, csb }) => {
  return (
    <>
      <View style={tailwind` mb-4 flex-row items-end justify-between`}>
        {/* Name */}
        <StyledText variant="titleLarge" type="b">
          {title}
        </StyledText>
        <View style={tailwind``}>
          {/* Price */}
          <StyledText variant="titleLarge">৳ {price}</StyledText>
        </View>
      </View>
      {/* Details */}
      <ScrollView
        style={tailwind.style(``, {
          maxHeight: 100,
        })}
      >
        <StyledText variant="bodySmall" type="b">
          Details:
        </StyledText>
        <StyledText variant="bodySmall">{details}</StyledText>
      </ScrollView>
      {/* CSB */}
      <View style={tailwind`flex-row items-center justify-end gap-2`}>
        <MaterialCommunityIcons
          name="alert-circle-outline"
          size={20}
          color="gray"
        />
        <StyledText variant="titleLarge">{csb} CSB</StyledText>
      </View>
    </>
  );
};

export default productDetails;
