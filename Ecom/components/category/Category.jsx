import React from "react";
import { ScrollView, View } from "react-native";
import tw from "twrnc";
import { ProductCard } from "../cards/ProductCard";
import { StyledText } from "../texts/StyledText";

export function Category({ categoryTitle = "Category 1", products }) {
  return (
    <View style={tw.style(`my-2`)}>
      <StyledText
        type="b"
        variant="titleLarge"
        style={tw`my-2`}
      >
        {categoryTitle}
      </StyledText>
      <ScrollView horizontal>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            productData={item}
          />
        ))}
      </ScrollView>
    </View>
  );
}
