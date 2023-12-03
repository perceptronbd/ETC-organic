import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, View } from "react-native";
import tw from "twrnc";
import COLOR from "../../constants/COLOR";
import { StyledText } from "../texts/StyledText";

export function ProductCard({ productData }) {
  const [isFavorite, setIsFavorite] = useState(productData.favorite);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={tw.style(`w-52 bg-[${COLOR.foreground}] p-2 rounded-lg mr-3`)}>
      {/* Points and Favorite */}
      <View style={tw.style(`flex-row justify-between`)}>
        <View style={tw.style(`flex-row items-center gap-1 `)}>
          <MaterialIcons
            name="stars"
            size={24}
            color={COLOR.tertiary}
          />
          <StyledText
            type="b"
            variant="titleMedium"
            style={tw`text-[${COLOR.tertiary}]`}
          >
            {productData.points}
          </StyledText>
        </View>
        <Ionicons
          name={isFavorite ? "heart-sharp" : "heart-outline"}
          size={24}
          color={isFavorite ? "red" : "black"}
          onPress={handleFavorite}
        />
      </View>
      {/* Product Image */}
      <View style={tw`h-48 justify-center items-center `}>
        <Image
          size={200}
          style={tw.style(`w-full`)}
          source={productData.img}
        />
      </View>
      {/* Product Name */}
      <StyledText
        type="b"
        style={tw`mb-1`}
      >
        {productData.name}
      </StyledText>
      {/* Product Price and point*/}
      <View style={tw.style(`flex-row justify-between items-center`)}>
        <View>
          <StyledText
            variant="titleLarge"
            type="b"
          >
            ৳ {productData.price}
          </StyledText>
          <StyledText
            style={tw`text-[${COLOR.tertiary}]`}
            type="m"
          >
            {productData.csb} CSB
          </StyledText>
        </View>
        {/* Add Button */}
        <Ionicons
          name="add-circle"
          size={35}
          color="black"
        />
      </View>
    </View>
  );
}
