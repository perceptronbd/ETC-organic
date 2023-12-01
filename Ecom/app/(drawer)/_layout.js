import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { Drawer } from "expo-router/drawer";
import COLOR from "../../constants/COLOR";
import { useEffect } from "react";

const drawerContents = [
  {
    labal: "Profile",
    icon: "ios-person-circle-outline",
    iconLibrary: "Ionicons",
    pathName: "/profile",
    route: "/(tabs)/profile",
  },
  {
    labal: "Refer & Earn Program",
    icon: "people-circle-outline",
    iconLibrary: "Ionicons",
    pathName: "/referEarn",
    route: "/referEarn",
  },
  {
    labal: "Points",
    icon: "stars",
    iconLibrary: "MaterialIcons",
    pathName: "/points",
    route: "/points",
  },
  {
    labal: "Tutorials",
    icon: "video",
    iconLibrary: "Feather",
    pathName: "/tutorials",
    route: "/tutorials",
  },
  {
    labal: "Logout",
    icon: "logout",
    iconLibrary: "MaterialIcons",
    pathName: "/logout",
    route: "/(tabs)/profile",
  },
];

const renderIcon = (iconProps) => {
  const { library, name, size, color } = iconProps;
  switch (library) {
    case "Ionicons":
      return <Ionicons name={name} size={size} color={color} />;
    case "MaterialIcons":
      return <MaterialIcons name={name} size={size} color={color} />;
    case "Feather":
      return <Feather name={name} size={size} color={color} />;
    default:
      return null;
  }
};

const CustomDrawerContent = (props) => {
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

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => CustomDrawerContent(props)}
      screenOptions={{
        headerTitle: "",
      }}
    />
  );
}
