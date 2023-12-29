import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Animated, Easing } from "react-native";
import { Modal } from "react-native-paper";
import COLOR from "../../constants/COLOR";

export const Loading = ({ isLoading }) => {
  const [spinValue] = useState(new Animated.Value(0));

  useEffect(() => {
    startSpinAnimation();
  }, []); // Run animation once when component mounts

  const startSpinAnimation = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 5,
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
    <>
      <Modal
        visible={isLoading}
        contentContainerStyle={{
          height: "auto",
          width: "auto",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          margin: 20,
        }}
      >
        <Animated.View
          style={{
            transform: [{ rotate: spin }],
          }}
        >
          <FontAwesome name="spinner" size={30} color={COLOR.secondary} />
        </Animated.View>
      </Modal>
    </>
  );
};
