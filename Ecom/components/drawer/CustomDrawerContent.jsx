import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router } from "expo-router";
import { usePathname } from "expo-router/src/hooks";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import COLOR from "../../constants/COLOR";
import { useAuth } from "../../hooks/useAuth";
import { StyledText } from "../texts/StyledText";
import { drawerContents } from "./drawerContents";
import { renderIcon } from "./renderIcon";

export const CustomDrawerContent = (props) => {
  const pathName = usePathname();

  const [imgUrl, setImgUrl] = React.useState(null);

  useEffect(() => {
    if (user?.image) {
      setImgUrl(user.image);
    }
  }, [user]);

  const { user } = useAuth();

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
        {imgUrl ? (
          <Avatar.Image
            size={50}
            style={{ backgroundColor: "none ", marginRight: 10 }}
            source={{ uri: imgUrl }}
          />
        ) : (
          <Avatar.Icon
            size={50}
            icon="account"
            color={COLOR.neutral}
            style={{ backgroundColor: COLOR.foreground, marginRight: 10 }}
          />
        )}
        <View>
          <StyledText type="b">{user?.name}</StyledText>
          <Text>{user?.mobileNumber}</Text>
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
