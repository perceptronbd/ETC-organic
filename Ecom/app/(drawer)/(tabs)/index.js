import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

function LogoTitle() {
  return <Text>Home</Text>;
}

export default function index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack.Screen
        options={{
          title: "My home",

          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: (props) => <LogoTitle />,
        }}
      />
      <Text>index</Text>
    </View>
  );
}
