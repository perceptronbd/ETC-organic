import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image } from "native-base";
import React, { useState } from "react";
import { Pressable, View } from "react-native";
import tw from "twrnc";
import COLOR from "../../constants/COLOR";
import { formatNumbers } from "../../utils/formatNumbers";
import { StyledText } from "../texts/StyledText";

export function ProductCard({ productData }) {
  const [isFavorite, setIsFavorite] = useState(productData.favorite);

  const handleNavigation = () => {
    router.push({ pathname: "productDetails", params: productData });
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={tw.style(`w-40 bg-[${COLOR.foreground}] mr-3 rounded-lg p-2`)}>
      {/* Points and Favorite */}
      <View style={tw.style(`flex-row justify-between`)}>
        <View style={tw.style(`flex-row items-center gap-1 `)}>
          <MaterialIcons name="stars" size={20} color={COLOR.tertiary} />
          <StyledText
            type="b"
            variant="titleMedium"
            style={tw`text-[${COLOR.tertiary}]`}
          >
            {formatNumbers(productData.points)}
          </StyledText>
        </View>
        <Ionicons
          name={isFavorite ? "heart-sharp" : "heart-outline"}
          size={20}
          color={isFavorite ? "red" : "black"}
          onPress={handleFavorite}
        />
      </View>
      {/* Product Image */}
      <Pressable
        onPress={handleNavigation}
        style={tw`w-36 items-center justify-center `}
      >
        <Image size={"xl"} source={productData.img} alt={productData.name} />
      </Pressable>
      {/* Product Name */}
      <StyledText type="b" variant="bodySmall" style={tw`mb-1`}>
        {productData.name}
      </StyledText>
      {/* Product Price and point*/}
      <View style={tw.style(`flex-row items-center justify-between`)}>
        <View>
          <StyledText variant="titleMedium" type="b">
            ৳ {formatNumbers(productData.price)}
          </StyledText>
          <StyledText
            variant="bodySmall"
            style={tw`text-[${COLOR.tertiary}]`}
            type="m"
          >
            {formatNumbers(productData.csb)} CSB
          </StyledText>
        </View>
        {/* Add Button */}
        <Ionicons
          name="add-circle"
          size={30}
          color={COLOR.tertiary}
          onPress={handleNavigation}
        />
      </View>
    </View>
  );
}
