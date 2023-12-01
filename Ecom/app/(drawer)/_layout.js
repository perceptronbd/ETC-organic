import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="Wallet"
        icon={({ size, color }) => (
          <Ionicons name="wallet-outline" size={size} color={color} />
        )}
        onPress={() => {
          router.push("/(tabs)/wallet");
        }}
      />
    </DrawerContentScrollView>
  );
};

export default function Layout() {
  return <Drawer drawerContent={(props) => CustomDrawerContent(props)} />;
}
