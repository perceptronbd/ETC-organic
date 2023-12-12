import { Ionicons, Octicons } from "@expo/vector-icons";
import { Icon, Input } from "native-base";
import React from "react";
import { View } from "react-native";
import { Avatar } from "react-native-paper";
import tailwind from "twrnc";
import COLOR from "../../constants/COLOR";
import { StyledText } from "../texts/StyledText";

export const HeaderComponent = ({ imgURL, points }) => {
  return (
    <View
      style={tailwind.style(
        `flex-row items-center justify-between gap-2 w-full`,
      )}
    >
      <Input
        placeholder="প্রোডাক্ট খুঁজুন"
        variant="filled"
        width="70%"
        borderRadius="10"
        shadow={1}
        py="1"
        px="2"
        InputLeftElement={
          <Icon
            ml="2"
            size="4"
            color="gray.400"
            as={<Ionicons name="ios-search" />}
          />
        }
      />
      <View style={tailwind`flex-row items-center gap-2`}>
        <View style={tailwind`justify-center items-center`}>
          <Octicons name="feed-star" size={24} color={COLOR.tertiary} />
          <StyledText
            variant="bodySmall"
            type="m"
            style={tailwind.style(`text-[${COLOR.tertiary}]`)}
          >
            {points}
          </StyledText>
        </View>
        <Avatar.Image
          size={40}
          style={{ backgroundColor: "none " }}
          source={imgURL}
        />
      </View>
    </View>
  );
};
