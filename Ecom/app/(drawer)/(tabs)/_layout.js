import { Ionicons } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Tabs } from "expo-router";
import { HeaderComponent } from "../../../components";
import COLOR from "../../../constants/COLOR";

const Layout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: COLOR.tertiary,
          tabBarShowLabel: false,

          headerTitle: () => (
            <HeaderComponent
              imgURL={require("../../../assets/img/user.png")}
              points={"300"}
            />
          ),
          headerLeft: () => <DrawerToggleButton />,
          tabBarStyle: {
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            margin: 8,
            borderRadius: 10,
            backgroundColor: COLOR.background,
            borderTopWidth: 0,
          },
        }}
      >
        <Tabs.Screen
          name="wallet"
          options={{
            headerTitle: "Wallet",
            headerStyle: { backgroundColor: COLOR.background, elevation: 0 },
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="wallet-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="favorite"
          options={{
            headerTitle: "Favorite",
            headerStyle: { backgroundColor: COLOR.background, elevation: 0 },
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="heart-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerStyle: { backgroundColor: COLOR.background, elevation: 0 },
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            headerTitle: "Cart",
            headerStyle: { backgroundColor: COLOR.background, elevation: 0 },
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="cart-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerStyle: { backgroundColor: COLOR.background, elevation: 0 },
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default Layout;
