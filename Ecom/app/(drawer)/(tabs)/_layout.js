import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import COLOR from "../../../constants/COLOR";

const Layout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: COLOR.tertiary,
          tabBarShowLabel: false,
          headerShown: false,

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
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="wallet-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="favorite"
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="heart-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="cart-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
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
