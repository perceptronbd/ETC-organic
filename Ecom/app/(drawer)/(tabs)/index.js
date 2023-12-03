import React from "react";
import { ScrollView, View } from "react-native";
import tw from "twrnc";
import {
  Carousel,
  Category,
  Favorite,
  StyledButton,
} from "../../../components";

const favoriteProduct = [
  {
    id: 0,
    name: "তুলশি বীজ জুস",
    img: require("../../../assets/product/tulshi.png"),
    price: "৫০০",
    csb: "৮০",
    points: "৫০",
    favorite: true,
  },
  {
    id: 2,
    name: "কারকুমা জয়েন্ট গার্ড",
    img: require("../../../assets/product/karkuma.png"),
    price: "৫৮০",
    csb: "৮০",
    points: "৫০",
    favorite: true,
  },
  {
    id: 3,
    name: "Lotion",
    img: require("../../../assets/product/lotion.png"),
    price: "৫০০",
    csb: "৮০",
    points: "৫০",
    favorite: true,
  },
  {
    id: 4,
    name: "কারকুমা জয়েন্ট গার্ড",
    img: require("../../../assets/product/karkuma.png"),
    price: "৫৮০",
    csb: "৮০",
    points: "৫০",
    favorite: false,
  },
  {
    id: 5,
    name: "Lotion",
    img: require("../../../assets/product/lotion.png"),
    price: "৫০০",
    csb: "৮০",
    points: "৫০",
    favorite: false,
  },
];

export default function index() {
  return (
    <>
      <ScrollView style={tw`flex-1 p-2`}>
        <View style={tw.style(`items-center`, {})}>
          <Carousel />
          <StyledButton
            style={tw`rounded-full justify-center items-center w-full`}
          >
            Book Now
          </StyledButton>
        </View>
        {/* Categories */}
        <Favorite products={favoriteProduct} />
        <Category products={favoriteProduct} />
      </ScrollView>
    </>
  );
}
