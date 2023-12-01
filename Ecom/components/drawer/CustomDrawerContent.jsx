import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { usePathname } from "expo-router/src/hooks";
import React, { useEffect } from "react";
import { renderIcon } from "./renderIcon";
import COLOR from "../../constants/COLOR";
import { router } from "expo-router";
import { drawerContents } from "./drawerContents";

export const CustomDrawerContent = (props) => {
  const pathName = usePathname();

  useEffect(() => {
    console.log(pathName);
  }, [pathName]);

  const drawerItems = drawerContents.map((item, index) => {
    return (
      <DrawerItem
        key={index}
        label={item.labal}
        labelStyle={{
          marginLeft: -20,
          color: item.pathName === pathName ? "white" : "black",
        }}
        style={{
          backgroundColor: item.pathName === pathName ? COLOR.secondary : null,
        }}
        icon={({ size, color }) =>
          renderIcon({
            library: item.iconLibrary,
            name: item.icon,
            size,
            color: item.pathName === pathName ? "white" : "black",
          })
        }
        onPress={() => {
          router.push(item.route);
        }}
      />
    );
  });

  return (
    <DrawerContentScrollView {...props}>{drawerItems}</DrawerContentScrollView>
  );
};
