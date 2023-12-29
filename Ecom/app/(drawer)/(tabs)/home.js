import React, { useRef } from "react";
import { ScrollView, View } from "react-native";
import tw from "twrnc";
import {
  Carousel,
  Category,
  Favorite,
  StyledButton,
} from "../../../components";
import { favoriteProduct } from "../../../constants/mockData";
import { useCustomToast } from "../../../hooks";

export default function Page() {
  const showToast = useCustomToast();

  const myScroll = useRef(null);

  // useEffect(() => {
  //   const getUser = async () => {
  //     const userData = await AsyncStorage.getItem("user-data");
  //     console.log("value:", JSON.parse(userData));
  //   };
  //   getUser();
  // }, []);

  return (
    <>
      <ScrollView ref={myScroll} style={tw`flex-1 p-2`}>
        <View style={tw.style(`w-full items-center`, {})}>
          <Carousel />

          <StyledButton
            height={"md"}
            onPress={() =>
              showToast({ description: "world", variant: "warning" })
            }
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
