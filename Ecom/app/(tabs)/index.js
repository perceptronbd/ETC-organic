import { View, Text } from "react-native";
import React from "react";
import { StyledComponent } from "nativewind";
import { Stack } from "expo-router";

function LogoTitle() {
  return <Text>Home</Text>;
}

export default function index() {
  return (
    <StyledComponent
      component={View}
      className="flex-1 justify-center items-center "
    >
      <Stack.Screen
        options={{
          title: "My home",

          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      <StyledComponent component={Text}>index</StyledComponent>
    </StyledComponent>
  );
}
