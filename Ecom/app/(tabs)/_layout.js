import { Stack, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLOR from "../../constants/COLOR";
import { Text } from "react-native-paper";
import { View } from "react-native";
import { StyledComponent } from "nativewind";

const Layout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: COLOR.tertiary,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: COLOR.background,
            borderTopWidth: 0,
          },
          headerTransparent: true,
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
