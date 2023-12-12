import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { Image } from "native-base";
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import tailwind from "twrnc";
import { Counter, StyledButton, StyledText } from "../components";
import COLOR from "../constants/COLOR";

const productDetails = () => {
  const [value, setValue] = useState(0);

  const item = useLocalSearchParams();

  useEffect(() => {
    console.log("item", item);

    return () => {
      console.log("call API to save the data");
    };
  }, []);

  return (
    <View style={tailwind`flex-1 justify-between items-center p-4`}>
      <View>
        <View
          style={tailwind`bg-[${COLOR.foreground}] rounded-md  items-center my-8`}
        >
          <Image size={"2xl"} source={item.img} alt={item.name} />
        </View>

        <View style={tailwind` flex-row justify-between items-end mb-4`}>
          {/* Name */}
          <StyledText variant="titleLarge" type="b">
            {item.name}
          </StyledText>
          <View style={tailwind``}>
            {/* Price */}
            <StyledText variant="titleLarge">৳ {item.price}</StyledText>
          </View>
        </View>
        {/* Points */}
        <View style={tailwind`flex-row gap-1 justify-start items-center mb-2`}>
          <MaterialIcons name="stars" size={20} color={COLOR.tertiary} />
          <StyledText
            type="b"
            variant="titleLarge"
            style={tailwind`text-[${COLOR.tertiary}]`}
          >
            {item.points}
          </StyledText>
          <StyledText
            variant="bodySmall"
            style={tailwind`text-[${COLOR.tertiary}]`}
          >
            points
          </StyledText>
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
          <StyledText variant="bodySmall">{item.details}</StyledText>
        </ScrollView>
        {/* CSB */}
        <View style={tailwind`flex-row gap-2 justify-end items-center`}>
          <MaterialCommunityIcons
            name="alert-circle-outline"
            size={20}
            color="gray"
          />
          <StyledText variant="titleLarge">{item.csb} CSB</StyledText>
        </View>
      </View>
      {/* Add to cart */}
      <View style={tailwind`w-full`}>
        <Counter value={value} setValue={setValue} />
        <View style={tailwind`flex-row gap-2 mt-4 mb-8`}>
          <StyledText variant="bodyMedium">ডেলিভারি ডেডলাইন:</StyledText>
          <StyledText variant="bodyMedium" type="b">
            2 Days
          </StyledText>
        </View>
        <StyledButton
          variant={"outline"}
          onPress={() => {
            console.log("Added to cart");
          }}
        >
          Add to Cart
        </StyledButton>
      </View>
    </View>
  );
};

export default productDetails;
