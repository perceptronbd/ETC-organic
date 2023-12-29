import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router } from "expo-router";
import { usePathname } from "expo-router/src/hooks";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import COLOR from "../../constants/COLOR";
import { StyledText } from "../texts/StyledText";
import { drawerContents } from "./drawerContents";
import { renderIcon } from "./renderIcon";

export const CustomDrawerContent = (props) => {
  const pathName = usePathname();

  useEffect(() => {
    console.log(pathName);
  }, [pathName]);

  const drawerItems = drawerContents.map((item, index) => {
    return item.labal === "Profile" ? (
      <View
        key={index}
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginVertical: 20,
          marginRight: 10,
          marginLeft: 15,
          backgroundColor: COLOR.neutral,
          padding: 20,
          borderRadius: 10,
        }}
      >
        <Avatar.Image
          size={50}
          style={{ backgroundColor: "none ", marginRight: 10 }}
          source={require("../../assets/img/user.png")}
        />
        <View>
          <StyledText type="b">Mr. Tofayel</StyledText>
          <Text>@userid_001</Text>
        </View>
      </View>
    ) : (
      <DrawerItem
        key={index}
        label={item.labal}
        labelStyle={{
          marginLeft: -20,
          color: item.pathName === pathName ? "white" : "black",
          fontFamily: "mon",
        }}
        style={{
          backgroundColor: item.pathName === pathName ? COLOR.secondary : null,
          borderRadius: 10,
        }}
        icon={({ size }) =>
          renderIcon({
            library: item.iconLibrary,
            name: item.icon,
            size,
            color: item.pathName === pathName ? "white" : "black",
          })
        }
        onPress={() => {
          if (item.labal === "Logout") {
            console.log("CustomDrawerContent logout");

            AsyncStorage.removeItem("user-data").then(() => {
              console.log("removed");
              router.push("login");
            });
          } else {
            router.push(item.route);
          }
        }}
      />
    );
  });

  return (
    <DrawerContentScrollView {...props}>{drawerItems}</DrawerContentScrollView>
  );
};
