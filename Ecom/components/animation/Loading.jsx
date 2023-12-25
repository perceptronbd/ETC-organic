import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Animated, Easing, View } from "react-native";
import COLOR from "../../constants/COLOR";

export const Loading = () => {
  const [spinValue] = useState(new Animated.Value(0));

  useEffect(() => {
    startSpinAnimation();
  }, []); // Run animation once when component mounts

  const startSpinAnimation = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 2,
        duration: 3000, // Duration of the animation in milliseconds
        easing: Easing.linear,
        useNativeDriver: true, // For better performance
      }),
    ).start();
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLOR.background,
      }}
    >
      <Animated.View
        style={{
          transform: [{ rotate: spin }],
        }}
      >
        <FontAwesome name="spinner" size={30} color={COLOR.secondary} />
      </Animated.View>
    </View>
  );
};
